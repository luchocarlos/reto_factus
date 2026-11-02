
import cuadro from "/images/cuadro.jpeg";
import { useRef, useState } from "react";

const ARTICULOS = [
    { code: "CUADRO-01", name: "Cuadro decorativo", price: 50000 },
    { code: "CUADRO-01-DSM", name: "Cuadro decorativo (desarmado)", price: 35000 }
];

const MUNICIPIOS = [
    { code: "11001", name: "Bogotá D.C." },
    { code: "05001", name: "Medellín" },
    { code: "76001", name: "Cali" },
    { code: "08001", name: "Barranquilla" },
    { code: "13001", name: "Cartagena" },
    { code: "68001", name: "Bucaramanga" },
    { code: "66001", name: "Pereira" },
    { code: "17001", name: "Manizales" },
    { code: "54001", name: "Cúcuta" },
    { code: "15001", name: "Tunja" }
];

function apiHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    if (import.meta.env.VITE_API_TOKEN) {
        headers['X-API-Key'] = import.meta.env.VITE_API_TOKEN;
    }
    return headers;
}

async function leerError(response) {
    const texto = await response.text();
    try {
        const data = JSON.parse(texto);
        return data.error || data.message || texto;
    } catch {
        return texto || `Error HTTP ${response.status}`;
    }
}

function descargarBlob(blob, nombre) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function Shop() {
    const [activeTab, setActiveTab] = useState("factura");
    const [useForm, setUseForm] = useState({             // estado para tomar datos del formulario
        identification: "",
        name: "",
        address: "",
        email: "",
        phone: "",
        company: "",
        trade_name: ""
    });
    const [documentType, setDocumentType] = useState("cc");   // tipo de documento: cc | nit
    const [dv, setDv] = useState("");                          // digito de verificacion (solo NIT)
    const [municipalityCode, setMunicipalityCode] = useState("11001");
    const [paymentMethod, setPaymentMethod] = useState("efectivo"); // efectivo | tarjeta
    const [paymentForm, setPaymentForm] = useState("1"); // forma de pago
    const [selected, setSelected] = useState({                // articulos marcados con checkbox
        "CUADRO-01": false,
        "CUADRO-01-DSM": false
    });
    const [status, setStatus] = useState("idle"); // estado para manejar el proceso de compra
    const [errorMsg, setErrorMsg] = useState("");
    const enviandoFactura = useRef(false);
    
    // Nota credito
    const [ncForm, setNcForm] = useState({
        bill_number: "",
        correction_concept_code: "2",
        identification: "",
        name: "",
        address: "",
        email: "",
        phone: "",
        company: "",
        observation: ""
    });
    const [ncDocumentType, setNcDocumentType] = useState("cc");
    const [ncDv, setNcDv] = useState("");
    const [ncMunicipalityCode, setNcMunicipalityCode] = useState("11001");
    const [ncSelected, setNcSelected] = useState({
        "CUADRO-01": false,
        "CUADRO-01-DSM": false
    });
    const [ncStatus, setNcStatus] = useState("idle");
    const [ncErrorMsg, setNcErrorMsg] = useState("");
    const enviandoNota = useRef(false);

    function handleChange(e) {                                      //estado para manejar los cambios en el formulario
        setUseForm({ ...useForm, [e.target.name]: e.target.value });
    }
    
    function handleNcChange(e) {
        setNcForm({ ...ncForm, [e.target.name]: e.target.value });
    }

    function handleSelect(e) {                                      // tipo de documento y medio de pago
        const { name, value } = e.target;
        if (name === "documentType") setDocumentType(value);
        if (name === "municipalityCode") setMunicipalityCode(value);
        if (name === "paymentMethod") setPaymentMethod(value);
        if (name === "paymentForm") setPaymentForm(value);
    }
    
    function handleNcSelect(e) {
        const { name, value } = e.target;
        if (name === "ncDocumentType") setNcDocumentType(value);
        if (name === "ncMunicipalityCode") setNcMunicipalityCode(value);
    }

    function handleCheck(code) {                                    // marca / desmarca un articulo
        setSelected({ ...selected, [code]: !selected[code] });
    }

    function handleNcCheck(code) {                                  // marca / desmarca un articulo para la nota credito
        setNcSelected({ ...ncSelected, [code]: !ncSelected[code] });
    }

    async function handleSubmit(e) {                     //funcion de envio de datos al backend
        e.preventDefault();
        if (enviandoFactura.current) return;

        const items = ARTICULOS
            .filter((art) => selected[art.code])          // solo los articulos marcados
            .map((art) => ({ code: art.code, name: art.name, price: art.price, quantity: 1 }));

        if (items.length === 0) return;                 // sin articulos no se envia nada (boton deshabilitado)

        enviandoFactura.current = true;
        setStatus("loading");
        setErrorMsg("");

        const orden = {
            customer: { ...useForm, documentType, dv, municipality_code: municipalityCode },
            paymentMethod,
            item: items
        };
                                                                                   // Enviar datos a Strapi
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/factus/generar`, {
                method: 'POST',
                headers: apiHeaders(),
                body: JSON.stringify(orden)
            });

            if (!response.ok) {
                throw new Error(await leerError(response));
            }

            // Descargar PDF
            const blob = await response.blob();
            descargarBlob(blob, `factura_${useForm.identification}.pdf`);

            setStatus("success");

        } catch (error) {
            console.error(error);
            setErrorMsg(error.message || "Ocurrió un error inesperado.");
            setStatus("error");
        } finally {
            enviandoFactura.current = false;
        }
    }

    async function handleNcSubmit(e) {                   // envio de la nota credito al backend
        e.preventDefault();
        if (enviandoNota.current) return;

        const items = ARTICULOS
            .filter((art) => ncSelected[art.code])
            .map((art) => ({ code_reference: art.code, name: art.name, price: art.price, quantity: 1 }));

        if (items.length === 0) return;

        enviandoNota.current = true;
        setNcStatus("loading");
        setNcErrorMsg("");

        const nota = {
            bill_number: ncForm.bill_number,
            correction_concept_code: ncForm.correction_concept_code,
            observation: ncForm.observation,
            customer: {
                documentType: ncDocumentType,
                dv: ncDv,
                municipality_code: ncMunicipalityCode,
                identification: ncForm.identification,
                name: ncForm.name,
                company: ncForm.company,
                address: ncForm.address,
                email: ncForm.email,
                phone: ncForm.phone
            },
            items
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/factus/nota-credito`, {
                method: 'POST',
                headers: apiHeaders(),
                body: JSON.stringify(nota)
            });

            if (!response.ok) {
                throw new Error(await leerError(response));
            }

            // Descargar PDF
            const blob = await response.blob();
            descargarBlob(blob, `nota_credito_${ncForm.bill_number}.pdf`);

            setNcStatus("success");

        } catch (error) {
            console.error(error);
            setNcErrorMsg(error.message || "Ocurrió un error inesperado.");
            setNcStatus("error");
        } finally {
            enviandoNota.current = false;
        }
    }
                                               // parte del componete al cliente
    const articulosSeleccionados = ARTICULOS.filter((art) => selected[art.code]); // auxiliar para el resumen
    const total = articulosSeleccionados.reduce((sum, art) => sum + art.price, 0);

    const articulosNcSeleccionados = ARTICULOS.filter((art) => ncSelected[art.code]); // auxiliar para el resumen NC
    const totalNc = articulosNcSeleccionados.reduce((sum, art) => sum + art.price, 0);

    return (
        <div className="page">
            <div className="header">
                <h1>Bienvenido</h1>
                <p>Prueba de uso de la API Factus</p>
                <p className="descripcion">
                    Este proyecto es una demo de facturación electrónica para Colombia.
                    Permite generar facturas y notas crédito desde una interfaz web, y para
                    llevarlo a cabo se creó una API REST con Strapi que actúa como
                    intermediario entre el frontend y la API de Factus.
                </p>
            </div>
            <div className="tabs">
                <button
                    type="button"
                    className={activeTab === "factura" ? "tab active" : "tab"}
                    onClick={() => { setActiveTab("factura"); setStatus("idle"); setErrorMsg(""); }}
                >
                    Factura
                </button>
                <button
                    type="button"
                    className={activeTab === "notacredito" ? "tab active" : "tab"}
                    onClick={() => { setActiveTab("notacredito"); setNcStatus("idle"); setNcErrorMsg(""); }}
                >
                    Nota Crédito
                </button>
            </div>
            {activeTab === "factura" && (
            <div className="container">
                <div className="articule"> 
                    <p>Articulos disponibles</p>
                    <img src={cuadro} alt="Cuadro decorativo" className="cuadro"/>
                    <ul className="lista-articulos">
                        {ARTICULOS.map((art) => (
                            <li key={art.code} className="item-articulo">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selected[art.code]}
                                        onChange={() => handleCheck(art.code)}
                                    />
                                    {art.name}
                                </label>
                                <span>${art.price.toLocaleString("es-CO")}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="contact">
                    <form className="form" onSubmit={handleSubmit}>
                        {/* Seccion 1: 4 campos */}
                        <fieldset className="form-section">
                            <legend>Datos del comprador</legend>
                            <label htmlFor="documentType">Tipo de documento</label>
                            <select id="documentType" name="documentType" value={documentType} onChange={handleSelect}>
                                <option value="cc">Cedula de ciudadania (CC)</option>
                                <option value="nit">NIT</option>
                            </select>
                            <label htmlFor="identification">Identificacion</label>
                            <input type="text" id="identification" name="identification" required placeholder="Ej: 1023456789" value={useForm.identification} onChange={handleChange}/>
                            {documentType === "nit" && (
                                <>
                                    <label htmlFor="dv">Digito de verificacion (NIT)</label>
                                    <input type="text" id="dv" name="dv" placeholder="Ej: 5" value={dv} onChange={(e) => setDv(e.target.value)}/>
                                </>
                            )}
                            <label htmlFor="name">Nombre / Razón Social</label>
                            <input type="text" id="name" name="name" required placeholder={documentType === "nit" ? "Ej: Empresa SAS" : "Ej: Juan Perez"} value={useForm.name} onChange={handleChange}/>
                            {documentType === "nit" && (
                                <>
                                    <label htmlFor="company">Razón Social (si diferente)</label>
                                    <input type="text" id="company" name="company" placeholder="Razón social" value={useForm.company} onChange={handleChange}/>
                                    <label htmlFor="trade_name">Nombre comercial</label>
                                    <input type="text" id="trade_name" name="trade_name" placeholder="Nombre comercial" value={useForm.trade_name} onChange={handleChange}/>
                                </>
                            )}
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" required placeholder="Ej: correo@ejemplo.com" value={useForm.email} onChange={handleChange}/>
                            <label htmlFor="municipalityCode">Ciudad / municipio</label>
                            <select id="municipalityCode" name="municipalityCode" value={municipalityCode} onChange={handleSelect}>
                                {MUNICIPIOS.map((municipio) => (
                                    <option key={municipio.code} value={municipio.code}>{municipio.name}</option>
                                ))}
                            </select>
                            <div className="resumen">
                                {articulosSeleccionados.length > 0 && (
                                    <>
                                        <ul>
                                            {articulosSeleccionados.map((art) => (
                                                <li key={art.code}>{art.name} x{1}</li>
                                            ))}
                                        </ul>
                                        <p className="total">Total (IVA 19% incluido): ${total.toLocaleString("es-CO", { maximumFractionDigits: 2 })}</p>
                                    </>
                                )}
                            </div>
                        </fieldset>

                        {/* Seccion 2: 3 campos y el boton */}
                        <fieldset className="form-section">
                            <legend>Contacto y pago</legend>
                            <label htmlFor="address">Direccion</label>
                            <input type="text" id="address" name="address" required placeholder="Ej: Calle 123 #45-67" value={useForm.address} onChange={handleChange}/>
                            <label htmlFor="phone">Telefono</label>
                            <input type="text" id="phone" name="phone" required placeholder="Ej: 3001234567" value={useForm.phone} onChange={handleChange}/>
                            <label htmlFor="paymentForm">Forma de pago</label>
                            <select id="paymentForm" name="paymentForm" value={paymentForm} onChange={handleSelect}>
                                <option value="1">Contado</option>
                                <option value="2">Crédito</option>
                            </select>
                            <label htmlFor="paymentMethod">Medio de pago</label>
                            <select id="paymentMethod" name="paymentMethod" value={paymentMethod} onChange={handleSelect}>
                                <option value="efectivo">Efectivo</option>
                                <option value="tarjeta">Tarjeta</option>
                            </select>
                            <button 
                                type="submit" 
                                disabled={status === "loading" || articulosSeleccionados.length === 0}
                            >
                                {status === "loading" ? "Procesando..." : "Comprar"}
                            </button>
                            {articulosSeleccionados.length === 0 && (
                                <p className="hint">Selecciona al menos un articulo para comprar</p>
                            )}
                        </fieldset>

                        {/* Mensajes de estado */}
                        {status === "loading" && (
                            <div className="status-msg loading">
                                Procesando tu compra, en un momento recibirás tu factura...
                            </div>
                        )}
                        {status === "success" && (
                            <div className="status-msg success">
                                ¡Compra realizada! Tu factura se ha descargado.
                            </div>
                        )}
                        {status === "error" && (
                            <div className="status-msg error">
                                {errorMsg || "Ocurrió un error. Por favor intenta de nuevo."}
                            </div>
                        )}
                    </form>
                </div>        
            </div>
            )}
            
            {/* Formulario Nota Crédito */}
            {activeTab === "notacredito" && (
                <div className="container" style={{marginTop: '30px'}}>
                    <div className="articule"> 
                        <p>Articulos disponibles</p>
                        <img src={cuadro} alt="Cuadro decorativo" className="cuadro"/>
                        <ul className="lista-articulos">
                            {ARTICULOS.map((art) => (
                                <li key={art.code} className="item-articulo">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={ncSelected[art.code]}
                                            onChange={() => handleNcCheck(art.code)}
                                        />
                                        {art.name}
                                    </label>
                                    <span>${art.price.toLocaleString("es-CO")}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="contact">
                        <form className="form" onSubmit={handleNcSubmit}>
                            <fieldset className="form-section">
                                <legend>Datos de la Nota Crédito</legend>
                                <label htmlFor="bill_number">Número de Factura a afectar *</label>
                                <input type="text" id="bill_number" name="bill_number" required placeholder="Ej: SETP990002519" value={ncForm.bill_number} onChange={handleNcChange}/>
                                <label htmlFor="correction_concept_code">Concepto de corrección *</label>
                                <select id="correction_concept_code" name="correction_concept_code" value={ncForm.correction_concept_code} onChange={handleNcChange}>
                                    <option value="1">1 - Devolución parcial</option>
                                    <option value="2">2 - Anulación de factura</option>
                                    <option value="3">3 - Rebaja o descuento</option>
                                    <option value="4">4 - Ajuste de precio</option>
                                    <option value="5">5 - Descuento comercial pronto pago</option>
                                    <option value="6">6 - Descuento comercial por volumen</option>
                                </select>
                                <label htmlFor="ncDocumentType">Tipo de documento</label>
                                <select id="ncDocumentType" name="ncDocumentType" value={ncDocumentType} onChange={handleNcSelect}>
                                    <option value="cc">Cedula de ciudadania (CC)</option>
                                    <option value="nit">NIT</option>
                                </select>
                                <label htmlFor="nc_identification">Identificación *</label>
                                <input type="text" id="nc_identification" name="identification" required placeholder="Ej: 1023456789" value={ncForm.identification} onChange={handleNcChange}/>
                                {ncDocumentType === "nit" && (
                                    <>
                                        <label htmlFor="nc_dv">Digito de verificación (NIT)</label>
                                        <input type="text" id="nc_dv" name="dv" placeholder="Ej: 5" value={ncDv} onChange={(e) => setNcDv(e.target.value)}/>
                                        <label htmlFor="nc_company">Razón Social *</label>
                                        <input type="text" id="nc_company" name="company" required placeholder="Razón social" value={ncForm.company} onChange={handleNcChange}/>
                                    </>
                                )}
                                <label htmlFor="nc_name">Nombre / Razón Social *</label>
                                <input type="text" id="nc_name" name="name" required placeholder={ncDocumentType === "nit" ? "Razón social" : "Nombre completo"} value={ncForm.name} onChange={handleNcChange}/>
                            </fieldset>
                            <fieldset className="form-section">
                                <legend>Contacto y Observación</legend>
                                <label htmlFor="nc_email">Email *</label>
                                <input type="text" id="nc_email" name="email" required placeholder="correo@ejemplo.com" value={ncForm.email} onChange={handleNcChange}/>
                                <label htmlFor="ncMunicipalityCode">Ciudad / municipio</label>
                                <select id="ncMunicipalityCode" name="ncMunicipalityCode" value={ncMunicipalityCode} onChange={handleNcSelect}>
                                    {MUNICIPIOS.map((municipio) => (
                                        <option key={municipio.code} value={municipio.code}>{municipio.name}</option>
                                    ))}
                                </select>
                                <label htmlFor="nc_address">Dirección *</label>
                                <input type="text" id="nc_address" name="address" required placeholder="Calle 123" value={ncForm.address} onChange={handleNcChange}/>
                                <label htmlFor="nc_phone">Teléfono *</label>
                                <input type="text" id="nc_phone" name="phone" required placeholder="3001234567" value={ncForm.phone} onChange={handleNcChange}/>
                                <label htmlFor="nc_observation">Observación</label>
                                <input type="text" id="nc_observation" name="observation" placeholder="Observación" value={ncForm.observation} onChange={handleNcChange}/>
                                <div className="resumen">
                                    {articulosNcSeleccionados.length > 0 && (
                                        <>
                                            <ul>
                                                {articulosNcSeleccionados.map((art) => (
                                                    <li key={art.code}>{art.name} x{1}</li>
                                                ))}
                                            </ul>
                                            <p className="total">Total (IVA 19% incluido): ${totalNc.toLocaleString("es-CO", { maximumFractionDigits: 2 })}</p>
                                        </>
                                    )}
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={ncStatus === "loading" || articulosNcSeleccionados.length === 0}
                                >
                                    {ncStatus === "loading" ? "Procesando..." : "Generar Nota Crédito"}
                                </button>
                                {articulosNcSeleccionados.length === 0 && (
                                    <p className="hint">Selecciona al menos un articulo</p>
                                )}
                            </fieldset>
                            {ncStatus === "loading" && (
                                <div className="status-msg loading">
                                    Procesando nota crédito...
                                </div>
                            )}
                            {ncStatus === "success" && (
                                <div className="status-msg success">
                                    ¡Nota crédito generada! Se ha descargado.
                                </div>
                            )}
                            {ncStatus === "error" && (
                                <div className="status-msg error">
                                    {ncErrorMsg || "Ocurrió un error. Por favor intenta de nuevo."}
                                </div>
                            )}
                        </form>
                    </div>        
                </div>
            )}
        </div>
    );
}
