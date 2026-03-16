
import cuadro from "/images/cuadro.jpeg";
import { useState } from "react";

export default function Shop() {
    const [useForm, setUseForm] = useState({             // estado para tomar datos del formulario
        identification: "",
        name: "",
        address: "",
        email: "",
        phone: ""
    });
    const [status, setStatus] = useState("idle"); // estado para manejar el proceso de compra

    function handleChange(e) {                                      //estado para manejar los cambios en el formulario
        setUseForm({ ...useForm, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {                     //funcion de envio de datos al backend
        e.preventDefault();
        setStatus("loading");

        const orden = {
            customer: { ...useForm },
            item: [{ code: "CUADRO-01", quantity: 1 }]
        };
                                                                                   // Enviar datos a Strapi
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/factus/generar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orden)
            });

            if (!response.ok) {
                const error = await response.text();
                throw new Error('Error Strapi: ' + error);
            }

            // Descargar PDF
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `factura_${useForm.identification}.pdf`;
            a.click();
            URL.revokeObjectURL(url);

            setStatus("success");

        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    }
                                               // parte del componete al cliente
    return (
        <div className="container">
            <div className="articule"> 
                <h3>Bienvenido a la tienda</h3>
                <p>Cuadro decorativo</p>
                <img src={cuadro} alt="Cuadro decorativo" className="cuadro"/>
                <p>Precio: $50.000 (Co)</p>
            </div>
            <div className="contact">
                <form className="form" onSubmit={handleSubmit}>
                    <p>Datos del comprador</p>
                    <label htmlFor="identification">Identificacion</label>
                    <input type="text" id="identification" name="identification" value={useForm.identification} onChange={handleChange}/>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" value={useForm.name} onChange={handleChange}/>
                    <label htmlFor="address">Direccion</label>
                    <input type="text" id="address" name="address" value={useForm.address} onChange={handleChange}/>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={useForm.email} onChange={handleChange}/>
                    <label htmlFor="phone">Telefono</label>
                    <input type="text" id="phone" name="phone" value={useForm.phone} onChange={handleChange}/>

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
                            Ocurrió un error. Por favor intenta de nuevo.
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Procesando..." : "Comprar"}
                    </button>
                </form>
            </div>        
        </div>
    );
}