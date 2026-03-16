import{r as h,hs as jl,ht as _l,hu as Je,j as l,hv as qe,hw as He,hx as jt,hy as Al,hz as Il,eB as dr,hA as Un,hB as Z3,hC as X3,hD as cr,hE as Ml,hF as Q3,hG as k0,hH as W0,hI as j0,hJ as U0,hK as Tl,hL as El,hM as tl,hN as J3,eG as Ll,hO as P3,hP as e6,hQ as j,hR as Vr,l as T,hS as oe,hT as t6,ed as at,hU as Vl,hV as Dl,hW as Ol,hX as n6,hY as r6,hZ as o6,h_ as i6,h$ as Bl,i0 as a6,i1 as s6,i2 as l6,i3 as c6,i4 as u6,i5 as d6,i6 as h6,i7 as f6,i8 as g6,i9 as Hl,ia as m6,ib as w6,ic as x6,id as v6,ie as p6,ig as b6,ih as C6,ii as $6,ij as y6,ik as S6,il as R6,im as j6,io as _6,ip as A6,iq as I6,ir as M6,is as T6,it as _0,iu as q0,iv as A0,iw as I0,ix as E6,iy as L6,iz as V6,iA as D6,iB as O6,iC as B6,iD as H6,iE as zl,iF as z6,iG as Nl,iH as N6,iI as F6,iJ as k6,iK as W6,iL as U6,iM as Fl,iN as kl,iO as q6,iP as G6,iQ as K6,iR as Y6,iS as Z6,iT as X6,iU as Q6,iV as J6,iW as P6,iX as e4,iY as t4,iZ as n4,i_ as r4,i$ as o4,j0 as i4,j1 as a4,j2 as s4,j3 as l4,j4 as c4,j5 as u4,j6 as d4,j7 as h4,j8 as f4,j9 as g4,ja as m4,jb as w4,jc as Wl,jd as x4,je as v4,bE as p4,bF as b4,jf as nl,P as Wo,jg as C4,E as $4,a as y4,dn as S4,dk as R4,dl as j4,O as rl,jh as _4}from"./strapi-BHipHB00.js";var A4=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},sr=new WeakMap,Fo=new WeakMap,ko={},C0=0,Ul=function(e){return e&&(e.host||Ul(e.parentNode))},I4=function(e,n){return n.map(function(i){if(e.contains(i))return i;var a=Ul(i);return a&&e.contains(a)?a:(console.error("aria-hidden",i,"in not contained inside",e,". Doing nothing"),null)}).filter(function(i){return!!i})},M4=function(e,n,i,a){var o=I4(n,Array.isArray(e)?e:[e]);ko[i]||(ko[i]=new WeakMap);var c=ko[i],u=[],m=new Set,x=new Set(o),C=function(y){!y||m.has(y)||(m.add(y),C(y.parentNode))};o.forEach(C);var p=function(y){!y||x.has(y)||Array.prototype.forEach.call(y.children,function(b){if(m.has(b))p(b);else try{var R=b.getAttribute(a),_=R!==null&&R!=="false",I=(sr.get(b)||0)+1,E=(c.get(b)||0)+1;sr.set(b,I),c.set(b,E),u.push(b),I===1&&_&&Fo.set(b,!0),E===1&&b.setAttribute(i,"true"),_||b.setAttribute(a,"true")}catch(V){console.error("aria-hidden: cannot operate on ",b,V)}})};return p(n),m.clear(),C0++,function(){u.forEach(function(y){var b=sr.get(y)-1,R=c.get(y)-1;sr.set(y,b),c.set(y,R),b||(Fo.has(y)||y.removeAttribute(a),Fo.delete(y)),R||y.removeAttribute(i)}),C0--,C0||(sr=new WeakMap,sr=new WeakMap,Fo=new WeakMap,ko={})}},ql=function(e,n,i){i===void 0&&(i="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),o=A4(e);return o?(a.push.apply(a,Array.from(o.querySelectorAll("[aria-live]"))),M4(a,o,i,"aria-hidden")):function(){return null}};function T4(e){const n=`${e}CollectionProvider`,[i,a]=jl(n),[o,c]=i(n,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),u=R=>{const{scope:_,children:I}=R,E=h.useRef(null),V=h.useRef(new Map).current,M=h.useRef(new Set).current;return l.jsx(o,{scope:_,itemMap:V,collectionRef:E,listeners:M,children:I})};u.displayName=n;const m=`${e}CollectionSlot`,x=h.forwardRef((R,_)=>{const{scope:I,children:E}=R,V=c(m,I),M=Je(_,V.collectionRef);return l.jsx(j0,{ref:M,children:E})});x.displayName=m;const C=`${e}CollectionItemSlot`,p="data-radix-collection-item",y=h.forwardRef((R,_)=>{const{scope:I,children:E,...V}=R,M=h.useRef(null),k=Je(_,M),F=c(C,I);return h.useEffect(()=>{const W=Array.from(F.itemMap.values());return F.itemMap.set(M,{ref:M,...V}),F.listeners.forEach(H=>H(Array.from(F.itemMap.values()),W)),()=>{const H=Array.from(F.itemMap.values());F.itemMap.delete(M),F.listeners.forEach(N=>N(Array.from(F.itemMap.values()),H))}}),l.jsx(j0,{[p]:"",ref:k,children:E})});y.displayName=C;function b(R){const _=c(`${e}CollectionConsumer`,R),I=h.useCallback(()=>{const V=_.collectionRef.current;if(!V)return[];const M=Array.from(V.querySelectorAll(`[${p}]`));return Array.from(_.itemMap.values()).sort((W,H)=>M.indexOf(W.ref.current)-M.indexOf(H.ref.current))},[_.collectionRef,_.itemMap]),E=h.useCallback(V=>(_.listeners.add(V),()=>_.listeners.delete(V)),[_.listeners]);return{getItems:I,subscribe:E}}return[{Provider:u,Slot:x,ItemSlot:y},b,a]}const $0=new Map;function E4(e,n){const i=e+(n?Object.entries(n).sort((o,c)=>o[0]<c[0]?-1:1).join():"");if($0.has(i))return $0.get(i);const a=new Intl.Collator(e,n);return $0.set(i,a),a}function G0(e,n){const i=E4(e,{usage:"search",...n});return{startsWith(a,o){return o.length===0?!0:(a=a.normalize("NFC"),o=o.normalize("NFC"),i.compare(a.slice(0,o.length),o)===0)},endsWith(a,o){return o.length===0?!0:(a=a.normalize("NFC"),o=o.normalize("NFC"),i.compare(a.slice(-o.length),o)===0)},contains(a,o){if(o.length===0)return!0;a=a.normalize("NFC"),o=o.normalize("NFC");let c=0;const u=o.length;for(;c+u<=a.length;c++){const m=a.slice(c,c+u);if(i.compare(o,m)===0)return!0}return!1}}}const L4=e=>{const n=h.useRef();return h.useEffect(()=>{n.current=e}),n.current},Gl=h.forwardRef(({children:e,estimatedItemSize:n=40,overscan:i=5,getItemCount:a,onViewportChange:o,...c},u)=>{const m=h.useRef(null),x=Je(u,m,o),C=h.useMemo(()=>h.Children.toArray(e),[e]),p=J3({count:a(),getScrollElement:()=>m.current,estimateSize:()=>n,overscan:i}),y=p.getVirtualItems();return l.jsxs(l.Fragment,{children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),l.jsx(qe.div,{"data-radix-combobox-viewport":"",role:"presentation",...c,ref:x,style:{position:"relative",flex:1,overflow:"auto",...c.style},children:l.jsx("div",{style:{height:`${p.getTotalSize()}px`,width:"100%",position:"relative"},children:y.map(b=>{const R=C[b.index];return l.jsx("div",{"data-index":b.index,ref:p.measureElement,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translateY(${b.start}px)`},children:R},b.key)})})})]})});Gl.displayName="VirtualizedViewport";const V4=[" ","Enter","ArrowUp","ArrowDown"],D4=["Enter"],O4=e=>!!(e.length===1&&e.match(/\S| /)),Kl="Combobox",[zn,Fr]=T4(Kl),[B4,Kt]=Ll(Kl),H4=({children:e})=>l.jsx(Ml,{children:l.jsx(zn.Provider,{scope:void 0,children:e})}),z4=e=>typeof e=="string"?e==="none"?{type:e,filter:void 0}:{type:e,filter:"startsWith"}:e,N4=e=>{const{allowCustomValue:n=!1,autocomplete:i="none",children:a,open:o,defaultOpen:c,onOpenChange:u,value:m,defaultValue:x,onValueChange:C,disabled:p,required:y=!1,locale:b="en-EN",onTextValueChange:R,textValue:_,defaultTextValue:I,filterValue:E,defaultFilterValue:V,onFilterValueChange:M,isPrintableCharacter:k=O4,visible:F=!1,virtualized:W="auto",estimatedItemSize:H=40,overscan:N=5}=e,[Y,te]=h.useState(null),[ne,Re]=h.useState(null),[re,de]=h.useState(null),[he,Ee]=h.useState(null),[Ve=!1,Q]=cr({prop:o,defaultProp:c,onChange:u}),[ae,je]=cr({prop:m,defaultProp:x,onChange:C}),[_e,we]=cr({prop:_,defaultProp:n&&!I?m:I,onChange:R}),[Pe,be]=cr({prop:E,defaultProp:V,onChange:M}),Ge=Un(),Me=h.useCallback((X,fe)=>{const Ae=fe.map(ge=>ge.ref.current),[$e,...xe]=Ae,[ye]=xe.slice(-1),Ye=he??fe.find(ge=>ge.value===ae)?.ref.current;for(const ge of X){if(ge===Ye)return;if(ge?.scrollIntoView({block:"nearest"}),ge===$e&&ne&&(ne.scrollTop=0),ge===ye&&ne&&(ne.scrollTop=ne.scrollHeight),Ee(ge),i==="both"){const Se=fe.find(ht=>ht.ref.current===ge);Se&&we(Se.textValue)}if(ge!==Ye)return}},[i,we,ne,he,ae]),Ke=z4(i);return h.useEffect(()=>{i!=="both"&&Ee(null)},[_e,i]),h.useEffect(()=>{if(re&&Y)return ql([re,Y])},[re,Y]),l.jsx(H4,{children:l.jsx(B4,{allowCustomValue:n,autocomplete:Ke,required:y,trigger:Y,onTriggerChange:te,contentId:Ge,value:ae,onValueChange:je,open:Ve,onOpenChange:Q,disabled:p,locale:b,focusFirst:Me,textValue:_e,onTextValueChange:we,onViewportChange:Re,onContentChange:de,visuallyFocussedItem:he,filterValue:Pe,onFilterValueChange:be,onVisuallyFocussedItemChange:Ee,isPrintableCharacter:k,visible:F,virtualized:W,estimatedItemSize:H,overscan:N,children:a})})},Yl="ComboboxTrigger",Zl=h.forwardRef((e,n)=>{const{...i}=e,a=Kt(Yl),o=()=>{a.disabled||a.onOpenChange(!0)};return l.jsx(Al,{asChild:!0,children:l.jsx(U0,{asChild:!0,trapped:a.open,onMountAutoFocus:c=>{c.preventDefault()},onUnmountAutoFocus:c=>{a.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),c.preventDefault()},children:l.jsx("div",{ref:n,"data-disabled":a.disabled?"":void 0,...i,onClick:He(i.onClick,c=>{if(a.disabled){c.preventDefault();return}a.trigger?.focus()}),onPointerDown:He(i.onPointerDown,c=>{if(a.disabled){c.preventDefault();return}const u=c.target;u.hasPointerCapture(c.pointerId)&&u.releasePointerCapture(c.pointerId),(u.closest("button")??u.closest("div"))===c.currentTarget&&c.button===0&&c.ctrlKey===!1&&(o(),a.trigger?.focus())})})})})});Zl.displayName=Yl;const Xl="ComboboxInput",Ql=h.forwardRef((e,n)=>{const i=Kt(Xl),a=h.useRef(null),{getItems:o}=Fr(void 0),{startsWith:c}=G0(i.locale,{sensitivity:"base"}),u=i.disabled,m=Je(a,n,i.onTriggerChange),x=()=>{u||i.onOpenChange(!0)},C=L4(i.filterValue);return jt(()=>{const p=setTimeout(()=>{if(i.textValue===""||i.textValue===void 0||i.filterValue===""||i.filterValue===void 0)return;const y=o().find(R=>R.type==="option"&&c(R.textValue,i.textValue)),b=tm(C??"",i.filterValue);y&&!i.visuallyFocussedItem&&b===i.filterValue.length&&a.current?.setSelectionRange(i.filterValue.length,i.textValue.length)});return()=>clearTimeout(p)},[i.textValue,i.filterValue,c,i.visuallyFocussedItem,o,C]),l.jsx("input",{type:"text",role:"combobox","aria-controls":i.contentId,"aria-expanded":i.open,"aria-required":i.required,"aria-autocomplete":i.autocomplete.type,"data-state":i.open?"open":"closed","aria-disabled":u,"aria-activedescendant":i.visuallyFocussedItem?.id,disabled:u,"data-disabled":u?"":void 0,"data-placeholder":i.textValue===void 0?"":void 0,value:i.textValue??"",...e,ref:m,onKeyDown:He(e.onKeyDown,p=>{if(["ArrowUp","ArrowDown","Home","End"].includes(p.key))i.open||x(),setTimeout(()=>{let b=o().filter(R=>!R.disabled&&R.isVisible).map(R=>R.ref.current);if(["ArrowUp","End"].includes(p.key)&&(b=b.slice().reverse()),["ArrowUp","ArrowDown"].includes(p.key)){const R=i.visuallyFocussedItem??o().find(_=>_.value===i.value)?.ref.current;if(R){let _=b.indexOf(R);_===b.length-1&&(_=-1),b=b.slice(_+1)}}if(["ArrowDown"].includes(p.key)&&i.autocomplete.type==="both"&&b.length>1){const[R,..._]=b,I=o().find(E=>E.ref.current===R).textValue;i.textValue===I&&(b=_)}i.focusFirst(b,o())}),p.preventDefault();else if(["Tab"].includes(p.key)&&i.open)p.preventDefault();else if(["Escape"].includes(p.key))i.open?i.onOpenChange(!1):(i.onValueChange(void 0),i.onTextValueChange("")),p.preventDefault();else if(D4.includes(p.key)){if(i.visuallyFocussedItem){const y=o().find(b=>b.ref.current===i.visuallyFocussedItem);y&&(i.onValueChange(y.value),i.onTextValueChange(y.textValue),i.autocomplete.type==="both"&&i.onFilterValueChange(y.textValue),y.ref.current?.click())}else{const y=o().find(b=>b.type==="option"&&!b.disabled&&b.textValue===i.textValue);y&&(i.onValueChange(y.value),i.onTextValueChange(y.textValue),i.autocomplete.type==="both"&&i.onFilterValueChange(y.textValue),y.ref.current?.click())}i.onOpenChange(!1),p.preventDefault()}else i.onVisuallyFocussedItemChange(null)}),onChange:He(e.onChange,p=>{i.onTextValueChange(p.currentTarget.value),i.autocomplete.type==="both"&&i.onFilterValueChange(p.currentTarget.value)}),onKeyUp:He(e.onKeyUp,p=>{if(!i.open&&(i.isPrintableCharacter(p.key)||["Backspace"].includes(p.key))&&x(),setTimeout(()=>{if(i.autocomplete.type==="both"&&i.isPrintableCharacter(p.key)&&i.filterValue!==void 0){const y=i.filterValue,b=o().find(R=>c(R.textValue,y));b&&i.onTextValueChange(b.textValue)}}),i.autocomplete.type==="none"&&i.isPrintableCharacter(p.key)){const y=i.textValue??"",b=o().find(R=>c(R.textValue,y));b&&(i.onVisuallyFocussedItemChange(b.ref.current),b.ref.current?.scrollIntoView())}}),onBlur:He(e.onBlur,()=>{if(i.open)return;i.onVisuallyFocussedItemChange(null);const[p]=o().filter(b=>b.textValue===i.textValue&&b.type==="option");if(p){i.onValueChange(p.value),i.autocomplete.type==="both"&&i.onFilterValueChange(p.textValue);return}if(i.allowCustomValue){i.onValueChange(i.textValue),i.autocomplete.type==="both"&&i.onFilterValueChange(i.textValue);return}const[y]=o().filter(b=>b.value===i.value&&b.type==="option");y&&i.textValue!==""?(i.onTextValueChange(y.textValue),i.autocomplete.type==="both"&&i.onFilterValueChange(y.textValue)):(i.onValueChange(void 0),i.onTextValueChange(""))})})});Ql.displayName="ComboboxTextInput";const Jl=h.forwardRef((e,n)=>{const{children:i,...a}=e,o=Kt(Xl),c=o.disabled,u=()=>{c||(o.onOpenChange(!0),o.trigger?.focus())};return l.jsx(qe.button,{"aria-hidden":!0,type:"button","aria-disabled":c,"aria-controls":o.contentId,"aria-expanded":o.open,disabled:c,"data-disabled":c?"":void 0,...a,tabIndex:-1,ref:n,onClick:He(a.onClick,()=>{o.trigger?.focus()}),onPointerDown:He(a.onPointerDown,m=>{m.button===0&&m.ctrlKey===!1&&(u(),m.preventDefault())}),onKeyDown:He(a.onKeyDown,m=>{V4.includes(m.key)&&(u(),m.preventDefault())}),children:i||"▼"})});Jl.displayName="ComboboxIcon";const F4="ComboboxPortal",Pl=e=>l.jsx(Il,{asChild:!0,...e});Pl.displayName=F4;const K0="ComboboxContent",ec=h.forwardRef((e,n)=>{const i=Kt(K0),{getItems:a}=Fr(void 0),[o,c]=h.useState();if(jt(()=>{c(new DocumentFragment)},[]),jt(()=>{i.open&&i.autocomplete.type==="none"&&setTimeout(()=>{a().find(m=>m.value===i.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[a,i.autocomplete,i.value,i.open]),!i.open){const u=o;return u?dr.createPortal(l.jsx(zn.Slot,{scope:void 0,children:l.jsx("div",{children:e.children})}),u):null}return l.jsx(tc,{...e,ref:n})});ec.displayName=K0;const k4=10,tc=h.forwardRef((e,n)=>{const{onEscapeKeyDown:i,onPointerDownOutside:a,...o}=e,c=Kt(K0),u=Je(n,x=>c.onContentChange(x)),{onOpenChange:m}=c;return k0(),h.useEffect(()=>{const x=()=>{m(!1)};return window.addEventListener("blur",x),window.addEventListener("resize",x),()=>{window.removeEventListener("blur",x),window.removeEventListener("resize",x)}},[m]),l.jsx(W0,{allowPinchZoom:!0,children:l.jsx(Tl,{asChild:!0,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:x=>{x.preventDefault()},onDismiss:()=>{c.onOpenChange(!1),c.trigger?.focus({preventScroll:!0})},children:l.jsx(nc,{role:"listbox",id:c.contentId,"data-state":c.open?"open":"closed",onContextMenu:x=>x.preventDefault(),...o,ref:u,style:{display:"flex",flexDirection:"column",outline:"none",...o.style}})})})});tc.displayName="ComboboxContentImpl";const nc=h.forwardRef((e,n)=>{const{align:i="start",collisionPadding:a=k4,...o}=e;return l.jsx(El,{...o,ref:n,align:i,collisionPadding:a,style:{boxSizing:"border-box",...o.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});nc.displayName="ComboboxPopperPosition";const rc="ComboboxViewport",oc=h.forwardRef((e,n)=>{const i=Kt(rc),a=Je(n,i.onViewportChange),c=h.useMemo(()=>h.Children.toArray(e.children),[e.children]).length;return i.virtualized===!0||i.virtualized==="auto"&&c>100?l.jsx(zn.Slot,{scope:void 0,children:l.jsx(Gl,{...e,ref:a,getItemCount:()=>c,estimatedItemSize:i.estimatedItemSize,overscan:i.overscan,onViewportChange:i.onViewportChange})}):l.jsxs(l.Fragment,{children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),l.jsx(zn.Slot,{scope:void 0,children:l.jsx(qe.div,{"data-radix-combobox-viewport":"",role:"presentation",...e,ref:a,style:{position:"relative",flex:1,overflow:"auto",...e.style}})})]})});oc.displayName=rc;const Xo="ComboboxItem",[ol,Y0]=Ll(Xo),Z0=h.forwardRef((e,n)=>{const{value:i,disabled:a=!1,textValue:o,...c}=e,[u,m]=h.useState();jt(()=>{m(new DocumentFragment)},[]);const{onTextValueChange:x,textValue:C,...p}=Kt(Xo),y=Un(),[b,R]=h.useState(o??""),_=p.value===i,{startsWith:I,contains:E}=G0(p.locale,{sensitivity:"base"}),V=h.useCallback(M=>{R(k=>k||(M?.textContent??"").trim())},[]);return h.useEffect(()=>{_&&C===void 0&&b!==""&&x(b)},[b,_,C,x]),p.autocomplete.type==="both"&&b&&p.filterValue&&!I(b,p.filterValue)||p.autocomplete.type==="list"&&p.autocomplete.filter==="startsWith"&&b&&C&&!I(b,C)||p.autocomplete.type==="list"&&p.autocomplete.filter==="contains"&&b&&C&&!E(b,C)?u?dr.createPortal(l.jsx(ol,{textId:y,onTextValueChange:V,isSelected:_,textValue:b,children:l.jsx(zn.ItemSlot,{scope:void 0,value:i,textValue:b,disabled:a,type:"option",isVisible:!1,children:l.jsx(M0,{ref:n,value:i,disabled:a,...c})})}),u):null:l.jsx(ol,{textId:y,onTextValueChange:V,isSelected:_,textValue:b,children:l.jsx(zn.ItemSlot,{scope:void 0,value:i,textValue:b,disabled:a,type:"option",isVisible:!0,children:l.jsx(M0,{ref:n,value:i,disabled:a,...c})})})});Z0.displayName=Xo;const ic="ComboboxItemImpl",M0=h.forwardRef((e,n)=>{const{value:i,disabled:a=!1,...o}=e,c=h.useRef(null),u=Je(n,c),{getItems:m}=Fr(void 0),{onTextValueChange:x,visuallyFocussedItem:C,...p}=Kt(Xo),{isSelected:y,textValue:b,textId:R}=Y0(ic),_=()=>{a||(p.onValueChange(i),x(b),p.onOpenChange(!1),p.autocomplete.type==="both"&&p.onFilterValueChange(b),p.trigger?.focus({preventScroll:!0}))},I=h.useMemo(()=>C===m().find(V=>V.ref.current===c.current)?.ref.current,[m,C]),E=Un();return l.jsx(qe.div,{role:"option","aria-labelledby":R,"data-highlighted":I?"":void 0,"aria-selected":y&&I,"data-state":y?"checked":"unchecked","aria-disabled":a||void 0,"data-disabled":a?"":void 0,tabIndex:a?void 0:-1,...o,id:E,ref:u,onPointerUp:He(o.onPointerUp,_)})});M0.displayName=ic;const ac="ComboboxItemText",sc=h.forwardRef((e,n)=>{const{className:i,style:a,...o}=e,c=Y0(ac),u=Je(n,c.onTextValueChange);return l.jsx(qe.span,{id:c.textId,...o,ref:u})});sc.displayName=ac;const lc="ComboboxItemIndicator",cc=h.forwardRef((e,n)=>{const{isSelected:i}=Y0(lc);return i?l.jsx(qe.span,{"aria-hidden":!0,...e,ref:n}):null});cc.displayName=lc;const X0="ComboboxNoValueFound",uc=h.forwardRef((e,n)=>{const{textValue:i="",filterValue:a="",visible:o=!1,locale:c,autocomplete:u}=Kt(X0),[m,x]=h.useState([]),{subscribe:C}=Fr(void 0),{startsWith:p,contains:y}=G0(c,{sensitivity:"base"});return h.useEffect(()=>{const b=C(R=>{if(o){const _=R.filter(I=>I.type!=="create");x(_)}else x(R)});return()=>{b()}},[o,C]),u.type==="none"&&m.length>0||u.type==="list"&&u.filter==="startsWith"&&m.some(b=>p(b.textValue,i))||u.type==="both"&&m.some(b=>p(b.textValue,a))||u.type==="list"&&u.filter==="contains"&&m.some(b=>y(b.textValue,i))?null:l.jsx(qe.div,{...e,ref:n})});uc.displayName=X0;const dc=h.forwardRef((e,n)=>{const{disabled:i=!1,...a}=e,o=Kt(X0),{textValue:c,visuallyFocussedItem:u}=o,{getItems:m,subscribe:x}=Fr(void 0),C=h.useRef(null),[p,y]=h.useState(!1),b=Je(n,C),R=h.useMemo(()=>u===m().find(E=>E.ref.current===C.current)?.ref.current,[m,u]),_=Un(),I=()=>{!i&&c&&(o.onValueChange(c),o.onTextValueChange(c),o.onOpenChange(!1),o.autocomplete.type==="both"&&o.onFilterValueChange(c),o.trigger?.focus({preventScroll:!0}))};return jt(()=>{const E=x(V=>{y(!V.some(M=>M.textValue===c&&M.type!=="create"))});return m().length===0&&y(!0),()=>{E()}},[c,x,m]),(!c||!p)&&!o.visible?null:l.jsx(zn.ItemSlot,{scope:void 0,value:c??"",textValue:c??"",disabled:i,isVisible:!0,type:"create",children:l.jsx(qe.div,{role:"option",tabIndex:i?void 0:-1,"aria-disabled":i||void 0,"data-disabled":i?"":void 0,"data-highlighted":R?"":void 0,...a,id:_,ref:b,onPointerUp:He(a.onPointerUp,I)})})});dc.displayName="ComboboxCreateItem";const W4=N4,U4=Zl,q4=Ql,G4=Jl,K4=Pl,Y4=ec,Z4=oc,X4=Z0,Q4=sc,J4=cc,P4=uc,em=dc;function tm(e,n){const i=Math.min(e.length,n.length);for(let a=0;a<i;a++)if(e[a]!==n[a])return a;return i}const Nt=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:Z0,Content:Y4,CreateItem:em,Icon:G4,Item:X4,ItemIndicator:J4,ItemText:Q4,NoValueFound:P4,Portal:K4,Root:W4,TextInput:q4,Trigger:U4,Viewport:Z4},Symbol.toStringTag,{value:"Module"}));function Q0(e){const n=h.useRef(e);return h.useEffect(()=>{n.current=e}),h.useMemo(()=>(...i)=>n.current?.(...i),[])}const nm=[" ","Enter","ArrowUp","ArrowDown"],rm=[" ","Enter"],kr="Select",[Qo,Wr,om]=Q3(kr),[hr,im]=jl(kr,[om,_l]),Jo=_l(),[am,an]=hr(kr),[sm,lm]=hr(kr),J0=e=>{const{__scopeSelect:n,children:i,open:a,defaultOpen:o,onOpenChange:c,value:u,defaultValue:m,onValueChange:x,dir:C,disabled:p,required:y,multi:b=!1}=e,R=Jo(n),[_,I]=h.useState(null),[E,V]=h.useState(null),[M,k]=h.useState(!1),F=X3(C),[W=!1,H]=cr({prop:a,defaultProp:o,onChange:c}),[N,Y]=cr({prop:u,defaultProp:m,onChange(re){x&&(Array.isArray(re),x(re))}}),te=h.useRef(null),[ne,Re]=h.useState(new Set);return l.jsx(Ml,{...R,children:l.jsx(am,{required:y,scope:n,trigger:_,onTriggerChange:I,valueNode:E,onValueNodeChange:V,valueNodeHasChildren:M,onValueNodeHasChildrenChange:k,contentId:Un(),value:N,onValueChange:Y,open:W,onOpenChange:H,dir:F,triggerPointerDownPosRef:te,disabled:p,multi:b,children:l.jsx(Qo.Provider,{scope:n,children:l.jsx(sm,{scope:e.__scopeSelect,onNativeOptionAdd:h.useCallback(re=>{Re(de=>new Set(de).add(re))},[]),onNativeOptionRemove:h.useCallback(re=>{Re(de=>{const he=new Set(de);return he.delete(re),he})},[]),children:i})})})})};J0.displayName=kr;const hc="SelectTrigger",P0=h.forwardRef((e,n)=>{const{__scopeSelect:i,...a}=e,o=Jo(i),c=an(hc,i),u=c.disabled,m=Je(n,c.onTriggerChange),x=Wr(i),[C,p,y]=Cc(R=>{const _=x().filter(V=>!V.disabled),I=_.find(V=>V.value===c.value),E=$c(_,R,I);if(E!==void 0&&!Array.isArray(E.value)){const V=c.multi?[E.value]:E.value;c.onValueChange(V)}}),b=()=>{u||(c.onOpenChange(!0),y())};return l.jsx(Al,{asChild:!0,...o,children:l.jsx(qe.div,{role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed","data-disabled":u?"":void 0,"data-placeholder":c.value===void 0?"":void 0,tabIndex:u?void 0:0,...a,ref:m,onClick:He(a.onClick,R=>{R.currentTarget.focus()}),onPointerDown:He(a.onPointerDown,R=>{const _=R.target;_.hasPointerCapture(R.pointerId)&&_.releasePointerCapture(R.pointerId),(_.closest("button")??_.closest("div"))===R.currentTarget&&R.button===0&&R.ctrlKey===!1&&(b(),c.triggerPointerDownPosRef.current={x:Math.round(R.pageX),y:Math.round(R.pageY)},R.preventDefault())}),onKeyDown:He(a.onKeyDown,R=>{const _=C.current!=="",I=R.ctrlKey||R.altKey||R.metaKey,E=R.target;(E.closest("button")??E.closest("div"))===R.currentTarget&&(!I&&R.key.length===1&&p(R.key),!(_&&R.key===" ")&&nm.includes(R.key)&&(b(),R.preventDefault()))})})})});P0.displayName=hc;const fc="SelectValue",ea=h.forwardRef((e,n)=>{const{__scopeSelect:i,children:a,placeholder:o,...c}=e,u=an(fc,i),{onValueNodeHasChildrenChange:m}=u,x=a!==void 0,C=Je(n,u.onValueNodeChange),[p,y]=h.useState([]),b=Wr(i);jt(()=>{m(x)},[m,x]),h.useLayoutEffect(()=>{if(Array.isArray(u.value)&&p.length!==u.value.length){const _=setTimeout(()=>{const I=b().filter(E=>Array.isArray(E.value)?!1:u.value?.includes(E.value));y(I)});return()=>{clearTimeout(_)}}},[u.value,b,p]);let R;if((u.value===void 0||u.value.length===0)&&o!==void 0)R=l.jsx("span",{children:o});else if(typeof a=="function")if(Array.isArray(u.value)){const _=u.value.map(I=>{const E=p.find(V=>V.value===I);return E?a({value:I,textValue:E?.textValue}):null});R=_.every(I=>I===null)?o:_}else R=a(u.value);else R=a;return l.jsx(qe.span,{...c,ref:C,children:R||null})});ea.displayName=fc;const cm="SelectIcon",ta=h.forwardRef((e,n)=>{const{__scopeSelect:i,children:a,...o}=e;return l.jsx(qe.span,{"aria-hidden":!0,...o,ref:n,children:a||"▼"})});ta.displayName=cm;const um="SelectPortal",na=e=>l.jsx(Il,{asChild:!0,...e});na.displayName=um;const Nn="SelectContent",ra=h.forwardRef((e,n)=>{const i=an(Nn,e.__scopeSelect),[a,o]=h.useState();if(jt(()=>{o(new DocumentFragment)},[]),!i.open){const c=a;return c?dr.createPortal(l.jsx(gc,{scope:e.__scopeSelect,children:l.jsx(Qo.Slot,{scope:e.__scopeSelect,children:l.jsx("div",{children:e.children})})}),c):null}return l.jsx(mc,{...e,ref:n})});ra.displayName=Nn;const rn=10,[gc,$n]=hr(Nn),dm="SelectContentImpl",mc=h.forwardRef((e,n)=>{const{__scopeSelect:i,position:a="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:c,onPointerDownOutside:u,side:m,sideOffset:x,align:C,alignOffset:p,arrowPadding:y,collisionBoundary:b,collisionPadding:R,sticky:_,hideWhenDetached:I,avoidCollisions:E,...V}=e,M=an(Nn,i),[k,F]=h.useState(null),[W,H]=h.useState(null),N=Je(n,X=>F(X)),[Y,te]=h.useState(null),[ne,Re]=h.useState(null),re=Wr(i),[de,he]=h.useState(!1),Ee=h.useRef(!1);h.useEffect(()=>{if(k)return ql(k)},[k]),k0();const Ve=h.useCallback(X=>{const[fe,...Ae]=re().map(ye=>ye.ref.current),[$e]=Ae.slice(-1),xe=document.activeElement;for(const ye of X)if(ye===xe||(ye?.scrollIntoView({block:"nearest"}),ye===fe&&W&&(W.scrollTop=0),ye===$e&&W&&(W.scrollTop=W.scrollHeight),ye?.focus(),document.activeElement!==xe))return},[re,W]),Q=h.useCallback(()=>Ve([Y,k]),[Ve,Y,k]);h.useEffect(()=>{de&&Q()},[de,Q]);const{onOpenChange:ae,triggerPointerDownPosRef:je}=M;h.useEffect(()=>{if(k){let X={x:0,y:0};const fe=$e=>{X={x:Math.abs(Math.round($e.pageX)-(je.current?.x??0)),y:Math.abs(Math.round($e.pageY)-(je.current?.y??0))}},Ae=$e=>{X.x<=10&&X.y<=10?$e.preventDefault():k.contains($e.target)||ae(!1),document.removeEventListener("pointermove",fe),je.current=null};return je.current!==null&&(document.addEventListener("pointermove",fe),document.addEventListener("pointerup",Ae,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",fe),document.removeEventListener("pointerup",Ae,{capture:!0})}}},[k,ae,je]),h.useEffect(()=>{const X=()=>ae(!1);return window.addEventListener("blur",X),window.addEventListener("resize",X),()=>{window.removeEventListener("blur",X),window.removeEventListener("resize",X)}},[ae]);const[_e,we]=Cc(X=>{const fe=re().filter(xe=>!xe.disabled),Ae=fe.find(xe=>xe.ref.current===document.activeElement),$e=$c(fe,X,Ae);$e&&setTimeout(()=>$e.ref.current.focus())}),Pe=h.useCallback((X,fe,Ae)=>{const $e=!Ee.current&&!Ae;(M.value!==void 0&&M.value===fe||$e)&&(te(X),$e&&(Ee.current=!0))},[M.value]),be=h.useCallback(()=>k?.focus(),[k]),Ge=h.useCallback((X,fe,Ae)=>{const $e=!Ee.current&&!Ae;(M.value!==void 0&&(Array.isArray(fe)?fe.every(ye=>M.value?.includes(ye)):M.value===fe)||$e)&&Re(X)},[M.value]),Me=a==="popper"?T0:wc,Ke=Me===T0?{side:m,sideOffset:x,align:C,alignOffset:p,arrowPadding:y,collisionBoundary:b,collisionPadding:R,sticky:_,hideWhenDetached:I,avoidCollisions:E}:{};return l.jsx(gc,{scope:i,content:k,viewport:W,onViewportChange:H,itemRefCallback:Pe,selectedItem:Y,onItemLeave:be,itemTextRefCallback:Ge,focusSelectedItem:Q,selectedItemText:ne,position:a,isPositioned:de,searchRef:_e,children:l.jsx(W0,{as:j0,allowPinchZoom:!0,children:l.jsx(U0,{asChild:!0,trapped:M.open,onMountAutoFocus:X=>{X.preventDefault()},onUnmountAutoFocus:He(o,X=>{M.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),X.preventDefault()}),children:l.jsx(Tl,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:X=>X.preventDefault(),onDismiss:()=>M.onOpenChange(!1),children:l.jsx(Me,{role:"listbox",id:M.contentId,"data-state":M.open?"open":"closed","aria-multiselectable":M.multi?"true":void 0,dir:M.dir,onContextMenu:X=>X.preventDefault(),...V,...Ke,onPlaced:()=>he(!0),ref:N,style:{display:"flex",flexDirection:"column",outline:"none",...V.style},onKeyDown:He(V.onKeyDown,X=>{const fe=X.ctrlKey||X.altKey||X.metaKey;if(X.key==="Tab"&&X.preventDefault(),!fe&&X.key.length===1&&we(X.key),["ArrowUp","ArrowDown","Home","End"].includes(X.key)){let $e=re().filter(xe=>!xe.disabled).map(xe=>xe.ref.current);if(["ArrowUp","End"].includes(X.key)&&($e=$e.slice().reverse()),["ArrowUp","ArrowDown"].includes(X.key)){const xe=X.target,ye=$e.indexOf(xe);$e=$e.slice(ye+1)}setTimeout(()=>Ve($e)),X.preventDefault()}})})})})})})});mc.displayName=dm;const hm="SelectItemAlignedPosition",wc=h.forwardRef((e,n)=>{const{__scopeSelect:i,onPlaced:a,...o}=e,c=an(Nn,i),u=$n(Nn,i),[m,x]=h.useState(null),[C,p]=h.useState(null),y=Je(n,N=>p(N)),b=Wr(i),R=h.useRef(!1),_=h.useRef(!0),{viewport:I,selectedItem:E,selectedItemText:V,focusSelectedItem:M}=u,k=h.useCallback(()=>{if(c.trigger&&c.valueNode&&m&&C&&I&&E&&V){const N=c.trigger.getBoundingClientRect(),Y=C.getBoundingClientRect(),te=c.valueNode.getBoundingClientRect(),ne=V.getBoundingClientRect();if(c.dir!=="rtl"){const xe=ne.left-Y.left,ye=te.left-xe,Ye=N.left-ye,ge=N.width+Ye,Se=Math.max(ge,Y.width),ht=window.innerWidth-rn,Ze=tl(ye,[rn,ht-Se]);m.style.minWidth=`${ge}px`,m.style.left=`${Ze}px`}else{const xe=Y.right-ne.right,ye=window.innerWidth-te.right-xe,Ye=window.innerWidth-N.right-ye,ge=N.width+Ye,Se=Math.max(ge,Y.width),ht=window.innerWidth-rn,Ze=tl(ye,[rn,ht-Se]);m.style.minWidth=`${ge}px`,m.style.right=`${Ze}px`}const Re=b(),re=window.innerHeight-rn*2,de=I.scrollHeight,he=window.getComputedStyle(C),Ee=parseInt(he.borderTopWidth,10),Ve=parseInt(he.paddingTop,10),Q=parseInt(he.borderBottomWidth,10),ae=parseInt(he.paddingBottom,10),je=Ee+Ve+de+ae+Q,_e=Math.min(E.offsetHeight*5,je),we=window.getComputedStyle(I),Pe=parseInt(we.paddingTop,10),be=parseInt(we.paddingBottom,10),Ge=N.top+N.height/2-rn,Me=re-Ge,Ke=E.offsetHeight/2,X=E.offsetTop+Ke,fe=Ee+Ve+X,Ae=je-fe;if(fe<=Ge){const xe=E===Re[Re.length-1].ref.current;m.style.bottom="0px";const ye=C.clientHeight-I.offsetTop-I.offsetHeight,Ye=Math.max(Me,Ke+(xe?be:0)+ye+Q),ge=fe+Ye;m.style.height=`${ge}px`}else{const xe=E===Re[0].ref.current;m.style.top="0px";const Ye=Math.max(Ge,Ee+I.offsetTop+(xe?Pe:0)+Ke)+Ae;m.style.height=`${Ye}px`,I.scrollTop=fe-Ge+I.offsetTop}m.style.margin=`${rn}px 0`,m.style.minHeight=`${_e}px`,m.style.maxHeight=`${re}px`,a?.(),requestAnimationFrame(()=>R.current=!0)}},[b,c.trigger,c.valueNode,m,C,I,E,V,c.dir,a]);jt(()=>k(),[k]);const[F,W]=h.useState();jt(()=>{C&&W(window.getComputedStyle(C).zIndex)},[C]);const H=h.useCallback(N=>{N&&_.current===!0&&(k(),M?.(),_.current=!1)},[k,M]);return l.jsx(gm,{scope:i,contentWrapper:m,shouldExpandOnScrollRef:R,onScrollButtonChange:H,children:l.jsx("div",{ref:x,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:F},children:l.jsx(qe.div,{...o,ref:y,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}})})})});wc.displayName=hm;const fm="SelectPopperPosition",T0=h.forwardRef((e,n)=>{const{__scopeSelect:i,align:a="start",collisionPadding:o=rn,...c}=e,u=Jo(i);return l.jsx(El,{...u,...c,ref:n,align:a,collisionPadding:o,style:{boxSizing:"border-box",...c.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});T0.displayName=fm;const[gm,oa]=hr(Nn,{}),E0="SelectViewport",ia=h.forwardRef((e,n)=>{const{__scopeSelect:i,...a}=e,o=$n(E0,i),c=oa(E0,i),u=Je(n,o.onViewportChange),m=h.useRef(0);return l.jsxs(l.Fragment,{children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),l.jsx(Qo.Slot,{scope:i,children:l.jsx(qe.div,{"data-radix-select-viewport":"",role:"presentation",...a,ref:u,style:{position:"relative",flex:1,overflow:"auto",...a.style},onScroll:He(a.onScroll,x=>{const C=x.currentTarget,{contentWrapper:p,shouldExpandOnScrollRef:y}=c;if(y?.current&&p){const b=Math.abs(m.current-C.scrollTop);if(b>0){const R=window.innerHeight-rn*2,_=parseFloat(p.style.minHeight),I=parseFloat(p.style.height),E=Math.max(_,I);if(E<R){const V=E+b,M=Math.min(R,V),k=V-M;p.style.height=`${M}px`,p.style.bottom==="0px"&&(C.scrollTop=k>0?k:0,p.style.justifyContent="flex-end")}}}m.current=C.scrollTop})})})]})});ia.displayName=E0;const xc="SelectGroup",[mm,wm]=hr(xc),aa=h.forwardRef((e,n)=>{const{__scopeSelect:i,...a}=e,o=Un();return l.jsx(mm,{scope:i,id:o,children:l.jsx(qe.div,{role:"group","aria-labelledby":o,...a,ref:n})})});aa.displayName=xc;const vc="SelectLabel",sa=h.forwardRef((e,n)=>{const{__scopeSelect:i,...a}=e,o=wm(vc,i);return l.jsx(qe.div,{id:o.id,...a,ref:n})});sa.displayName=vc;const Go="SelectItem",[xm,pc]=hr(Go),la=h.forwardRef((e,n)=>{const{__scopeSelect:i,value:a,disabled:o=!1,textValue:c,...u}=e,m=an(Go,i),x=$n(Go,i),C=typeof a=="string"?Array.isArray(m.value)?m.value.includes(a):m.value===a:a.every(M=>m.value?.includes(M)),p=Array.isArray(m.value)&&Array.isArray(a)&&a.some(M=>m.value?.includes(M)),[y,b]=h.useState(c??""),[R,_]=h.useState(!1),I=Je(n,M=>x.itemRefCallback?.(M,a,o)),E=Un(),V=()=>{if(!o){let M=m.multi&&typeof a=="string"?[a]:a;p&&!C?m.onValueChange(M):Array.isArray(m.value)&&(M=yc(a,m.value)),m.onValueChange(M),m.multi||m.onOpenChange(!1)}};if(!m.multi&&Array.isArray(a))throw new Error("You can only pass an array of values in multi selects");return l.jsx(xm,{scope:i,value:a,disabled:o,textId:E,isSelected:C,isIntermediate:p,onItemTextChange:h.useCallback(M=>{b(k=>k||(M?.textContent??"").trim())},[]),children:l.jsx(Qo.ItemSlot,{scope:i,value:a,disabled:o,textValue:y,children:l.jsx(qe.div,{role:"option","aria-labelledby":E,"data-highlighted":R?"":void 0,"aria-selected":m.multi?void 0:C&&R,"aria-checked":m.multi?C:void 0,"data-state":C?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...u,ref:I,onFocus:He(u.onFocus,()=>_(!0)),onBlur:He(u.onBlur,()=>_(!1)),onPointerUp:He(u.onPointerUp,V),onPointerMove:He(u.onPointerMove,M=>{o?x.onItemLeave?.():M.currentTarget.focus({preventScroll:!0})}),onPointerLeave:He(u.onPointerLeave,M=>{M.currentTarget===document.activeElement&&x.onItemLeave?.()}),onKeyDown:He(u.onKeyDown,M=>{x.searchRef?.current!==""&&M.key===" "||(rm.includes(M.key)&&V(),M.key===" "&&M.preventDefault())})})})})});la.displayName=Go;const Br="SelectItemText",ca=h.forwardRef((e,n)=>{const{__scopeSelect:i,className:a,style:o,...c}=e,u=an(Br,i),m=$n(Br,i),x=pc(Br,i),C=lm(Br,i),[p,y]=h.useState(null),b=Je(n,V=>y(V),x.onItemTextChange,V=>m.itemTextRefCallback?.(V,x.value,x.disabled)),R=p?.textContent,_=h.useMemo(()=>l.jsx("option",{value:x.value,disabled:x.disabled,children:R},Array.isArray(x.value)?x.value.join(";"):x.value),[x.disabled,x.value,R]),{onNativeOptionAdd:I,onNativeOptionRemove:E}=C;return jt(()=>(I(_),()=>E(_)),[I,E,_]),l.jsxs(l.Fragment,{children:[l.jsx(qe.span,{id:x.textId,...c,ref:b}),x.isSelected&&u.valueNode&&!u.valueNodeHasChildren?dr.createPortal(c.children,u.valueNode):null]})});ca.displayName=Br;const bc="SelectItemIndicator",ua=h.forwardRef((e,n)=>{const{__scopeSelect:i,children:a,...o}=e,c=pc(bc,i);return typeof a=="function"?l.jsx(qe.span,{"aria-hidden":!0,...o,ref:n,children:a({isSelected:c.isSelected,isIntermediate:c.isIntermediate})}):c.isSelected?l.jsx(qe.span,{"aria-hidden":!0,...o,ref:n,children:a}):null});ua.displayName=bc;const L0="SelectScrollUpButton",da=h.forwardRef((e,n)=>{const i=$n(L0,e.__scopeSelect),a=oa(L0,e.__scopeSelect),[o,c]=h.useState(!1),u=Je(n,a.onScrollButtonChange);return jt(()=>{if(i.viewport&&i.isPositioned){const m=i.viewport,x=()=>{const C=m.scrollTop>0;c(C)};return x(),m.addEventListener("scroll",x),()=>m.removeEventListener("scroll",x)}},[i.viewport,i.isPositioned]),o?l.jsx(fa,{...e,ref:u,onAutoScroll:()=>{const{viewport:m,selectedItem:x}=i;m&&x&&(m.scrollTop-=x.offsetHeight)}}):null});da.displayName=L0;const V0="SelectScrollDownButton",ha=h.forwardRef((e,n)=>{const i=$n(V0,e.__scopeSelect),a=oa(V0,e.__scopeSelect),[o,c]=h.useState(!1),u=Je(n,a.onScrollButtonChange);return jt(()=>{if(i.viewport&&i.isPositioned){const m=i.viewport,x=()=>{const C=m.scrollHeight-m.clientHeight,p=Math.ceil(m.scrollTop)<C;c(p)};return x(),m.addEventListener("scroll",x),()=>m.removeEventListener("scroll",x)}},[i.viewport,i.isPositioned]),o?l.jsx(fa,{...e,ref:u,onAutoScroll:()=>{const{viewport:m,selectedItem:x}=i;m&&x&&(m.scrollTop+=x.offsetHeight)}}):null});ha.displayName=V0;const fa=h.forwardRef((e,n)=>{const{__scopeSelect:i,onAutoScroll:a,...o}=e,c=$n("SelectScrollButton",i),u=h.useRef(null),m=Wr(i),x=h.useCallback(()=>{u.current!==null&&(window.clearInterval(u.current),u.current=null)},[]);return h.useEffect(()=>()=>x(),[x]),jt(()=>{m().find(p=>p.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[m]),l.jsx(qe.div,{"aria-hidden":!0,...o,ref:n,style:{flexShrink:0,...o.style},onPointerMove:He(o.onPointerMove,()=>{c.onItemLeave?.(),u.current===null&&(u.current=window.setInterval(a,50))}),onPointerLeave:He(o.onPointerLeave,()=>{x()})})});fa.displayName="SelectScrollButtonImpl";const vm="SelectSeparator",ga=h.forwardRef((e,n)=>{const{__scopeSelect:i,...a}=e;return l.jsx(qe.div,{"aria-hidden":!0,...a,ref:n})});ga.displayName=vm;const D0="SelectArrow",ma=h.forwardRef((e,n)=>{const{__scopeSelect:i,...a}=e,o=Jo(i),c=an(D0,i),u=$n(D0,i);return c.open&&u.position==="popper"?l.jsx(Z3,{...o,...a,ref:n}):null});ma.displayName=D0;const pm="BubbleSelect",bm=h.forwardRef((e,n)=>{const{value:i,...a}=e,o=h.useRef(null),c=Je(n,o),u=P3(i),m=an(pm,void 0);h.useEffect(()=>{const C=o.current,p=window.HTMLSelectElement.prototype,b=Object.getOwnPropertyDescriptor(p,"value").set;if(u!==i&&b){const R=new Event("change",{bubbles:!0});b.call(C,i),C.dispatchEvent(R)}},[u,i]);let x=i;return m.multi&&!Array.isArray(i)&&(x=[]),l.jsx(e6,{asChild:!0,children:l.jsx("select",{...a,multiple:m.multi?!0:void 0,ref:c,defaultValue:x})})});bm.displayName="BubbleSelect";function Cc(e){const n=Q0(e),i=h.useRef(""),a=h.useRef(0),o=h.useCallback(u=>{const m=i.current+u;n(m),function x(C){i.current=C,window.clearTimeout(a.current),C!==""&&(a.current=window.setTimeout(()=>x(""),1e3))}(m)},[n]),c=h.useCallback(()=>{i.current="",window.clearTimeout(a.current)},[]);return h.useEffect(()=>()=>window.clearTimeout(a.current),[]),[i,o,c]}function $c(e,n,i){const o=n.length>1&&Array.from(n).every(C=>C===n[0])?n[0]:n,c=i?e.indexOf(i):-1;let u=Cm(e,Math.max(c,0));o.length===1&&(u=u.filter(C=>C!==i));const x=u.find(C=>C.textValue.toLowerCase().startsWith(o.toLowerCase()));return x!==i?x:void 0}function Cm(e,n){return e.map((i,a)=>e[(n+a)%e.length])}const yc=(e,n=[])=>{if(Array.isArray(e))return e.reduce((a,o)=>yc(o,a),n);const i=n.indexOf(e);return i===-1?[...n,e]:[...n.slice(0,i),...n.slice(i+1)]},$m=J0,ym=P0,Sm=ea,Rm=ta,jm=na,_m=ra,Am=ia,Im=aa,Mm=sa,Tm=la,Em=ca,Lm=ua,Vm=da,Dm=ha,Om=ga,Bm=ma,Ft=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Bm,Content:_m,Group:Im,Icon:Rm,Item:Tm,ItemIndicator:Lm,ItemText:Em,Label:Mm,Portal:jm,Root:$m,ScrollDownButton:Dm,ScrollUpButton:Vm,Select:J0,SelectArrow:ma,SelectContent:ra,SelectGroup:aa,SelectIcon:ta,SelectItem:la,SelectItemIndicator:ua,SelectItemText:ca,SelectLabel:sa,SelectPortal:na,SelectScrollDownButton:ha,SelectScrollUpButton:da,SelectSeparator:ga,SelectTrigger:P0,SelectValue:ea,SelectViewport:ia,Separator:Om,Trigger:ym,Value:Sm,Viewport:Am,createSelectScope:im},Symbol.toStringTag,{value:"Module"}));function Hn(e,n,{checkForDefaultPrevented:i=!0}={}){return function(o){if(e?.(o),i===!1||!o.defaultPrevented)return n?.(o)}}const Hm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 2A12.014 12.014 0 0 0 4 14c0 3 1.57 6.883 4.201 10.375C10.85 27.894 13.764 30 16 30s5.151-2.101 7.799-5.625C26.43 20.875 28 17 28 14A12.014 12.014 0 0 0 16 2M8 14.5A1.5 1.5 0 0 1 9.5 13a4.5 4.5 0 0 1 4.5 4.5 1.5 1.5 0 0 1-1.5 1.5A4.5 4.5 0 0 1 8 14.5M18 25h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m1.5-6a1.5 1.5 0 0 1-1.5-1.5 4.5 4.5 0 0 1 4.5-4.5 1.5 1.5 0 0 1 1.5 1.5 4.5 4.5 0 0 1-4.5 4.5"})})};h.forwardRef(Hm);const zm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28 6H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2v11a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-9 12h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m9-7H4V8h24z"})})};h.forwardRef(zm);const Nm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M30.5 7v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1 0-3h2.137l-2.375-2.173-.047-.046a9.5 9.5 0 1 0-6.84 16.219H16a9.44 9.44 0 0 0 6.519-2.59 1.5 1.5 0 1 1 2.061 2.181A12.43 12.43 0 0 1 16 28.5h-.171a12.5 12.5 0 1 1 8.985-21.368L27.5 9.59V7a1.5 1.5 0 0 1 3 0"})})};h.forwardRef(Nm);const Fm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m26.061 19.061-9 9a1.503 1.503 0 0 1-2.125 0l-9-9a1.503 1.503 0 1 1 2.125-2.125l6.439 6.439V5a1.5 1.5 0 1 1 3 0v18.375l6.439-6.44a1.502 1.502 0 1 1 2.125 2.125z"})})};h.forwardRef(Fm);const km=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H8.625l6.44 6.439a1.502 1.502 0 1 1-2.125 2.125l-9-9a1.5 1.5 0 0 1 0-2.125l9-9a1.503 1.503 0 0 1 2.125 2.125L8.625 14.5H27a1.5 1.5 0 0 1 1.5 1.5"})})};h.forwardRef(km);const Wm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:c,viewBox:"0 0 16 16",stroke:u,ref:a,...i,children:l.jsx("path",{d:"M14.75 8a.75.75 0 0 1-.75.75H6.813l3.22 3.22a.751.751 0 1 1-1.063 1.062l-4.5-4.5a.75.75 0 0 1 0-1.063l4.5-4.5a.751.751 0 0 1 1.063 1.063L6.813 7.25H14a.75.75 0 0 1 .75.75M2.5 1.75a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-.75-.75"})})};h.forwardRef(Wm);const Um=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:c,viewBox:"0 0 16 16",stroke:u,ref:a,...i,children:l.jsx("path",{d:"M11.53 7.47a.75.75 0 0 1 0 1.062l-4.5 4.5a.751.751 0 1 1-1.062-1.063l3.22-3.219H2a.75.75 0 1 1 0-1.5h7.188L5.969 4.03a.751.751 0 1 1 1.063-1.062zm1.97-5.72a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-.75-.75"})})};h.forwardRef(Um);const qm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m28.061 17.061-9 9a1.503 1.503 0 1 1-2.125-2.125l6.439-6.436H5a1.5 1.5 0 1 1 0-3h18.375l-6.436-6.44a1.503 1.503 0 0 1 2.125-2.125l9 9a1.5 1.5 0 0 1-.003 2.126"})})};h.forwardRef(qm);const Gm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M26.061 15.061a1.5 1.5 0 0 1-2.125 0L17.5 8.625V27a1.5 1.5 0 1 1-3 0V8.625l-6.439 6.436a1.503 1.503 0 1 1-2.125-2.125l9-9a1.5 1.5 0 0 1 2.125 0l9 9a1.5 1.5 0 0 1 0 2.125"})})};h.forwardRef(Gm);const Km=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M11 13.5H5A1.5 1.5 0 0 1 3.5 12V6a1.5 1.5 0 0 1 3 0v1.733C8.581 5.683 11.786 3.5 16 3.5c5.558 0 8.92 3.299 9.061 3.439a1.5 1.5 0 0 1-2.117 2.125C22.889 9.01 20.25 6.5 16 6.5c-3.625 0-6.367 2.21-8 4h3a1.5 1.5 0 1 1 0 3m16 5h-6a1.5 1.5 0 1 0 0 3h3c-1.625 1.79-4.375 4-8 4-4.25 0-6.889-2.511-6.944-2.565A1.5 1.5 0 0 0 6.94 25.06c.141.141 3.504 3.44 9.061 3.44 4.214 0 7.419-2.183 9.5-4.233V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5"})})};h.forwardRef(Km);const Ym=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M220 48v48a12 12 0 0 1-24 0V77l-39.51 39.52a12 12 0 0 1-17-17L179 60h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12M99.51 139.51 60 179v-19a12 12 0 0 0-24 0v48a12 12 0 0 0 12 12h48a12 12 0 0 0 0-24H77l39.52-39.51a12 12 0 0 0-17-17Z"})})};h.forwardRef(Ym);const Zm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27.725 21.993C27.031 20.798 26 17.416 26 13a10 10 0 0 0-20 0c0 4.418-1.032 7.797-1.726 8.993A2 2 0 0 0 6 25h5.101a5 5 0 0 0 9.798 0H26a2 2 0 0 0 1.725-3.008M16 27a3 3 0 0 1-2.828-2h5.656A3 3 0 0 1 16 27"})})};h.forwardRef(Zm);const Xm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M22.135 14.308A6.001 6.001 0 0 0 17.5 4.5H9A1.5 1.5 0 0 0 7.5 6v19A1.5 1.5 0 0 0 9 26.5h10a6.5 6.5 0 0 0 3.135-12.192M10.5 7.5h7a3 3 0 0 1 0 6h-7zm8.5 16h-8.5v-7H19a3.5 3.5 0 1 1 0 7"})})};h.forwardRef(Xm);const Qm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 4v20a1 1 0 0 1-1 1H9a2 2 0 0 0-2 2h17a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h17a1 1 0 0 1 1 1"})})};h.forwardRef(Qm);const Jm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M19 14a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m10-5v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h5a2 2 0 0 1 2 2M12 7h8V6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm15 7.201V9H5v5.201A23 23 0 0 0 16 17a23 23 0 0 0 11-2.799"})})};h.forwardRef(Jm);const Pm=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M9.5 8A1.5 1.5 0 0 1 11 6.5h16a1.5 1.5 0 0 1 0 3H11A1.5 1.5 0 0 1 9.5 8M27 14.5H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3m0 8H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3M5.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};h.forwardRef(Pm);const ew=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6H6V6h3v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3z"})})},tw=h.forwardRef(ew),nw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M30 14h-1.35l-3.472-7.812A2 2 0 0 0 23.35 5H8.65a2 2 0 0 0-1.828 1.188L3.35 14H2a1 1 0 0 0 0 2h1v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2h12v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V16h1a1 1 0 0 0 0-2m-20 6H8a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m12 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"})})};h.forwardRef(nw);const rw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m26.708 12.708-10 10a1 1 0 0 1-1.415 0l-10-10A1 1 0 0 1 6 11h20a1 1 0 0 1 .707 1.707"})})},Fn=h.forwardRef(rw),ow=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M26.924 20.383A1 1 0 0 1 26 21H6a1 1 0 0 1-.708-1.707l10-10a1 1 0 0 1 1.415 0l10 10a1 1 0 0 1 .217 1.09"})})};h.forwardRef(ow);const iw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M7 26a1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3m-3-7a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 1 0 2 0 7.01 7.01 0 0 0-7-7m0-4a1 1 0 0 0 0 2 9.01 9.01 0 0 1 9 9 1 1 0 0 0 2 0A11.01 11.01 0 0 0 4 15M27 5H5a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1 13.014 13.014 0 0 1 13 13 1 1 0 0 0 1 1h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"})})};h.forwardRef(iw);const aw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M25 3h-1a2 2 0 0 0-2 2v2h-3.5V5a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2H10V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.586A1.98 1.98 0 0 0 5.586 12L7 13.414V27a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V13.414L26.414 12A1.98 1.98 0 0 0 27 10.586V5a2 2 0 0 0-2-2m-6 24h-6v-8a3 3 0 0 1 6 0z"})})};h.forwardRef(aw);const sw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M25 24H7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v13h17a1 1 0 0 1 0 2"})})};h.forwardRef(sw);const lw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M3.094 14.443a12.8 12.8 0 0 1 2.914-6.72 2 2 0 0 1 2.953-.138l3.459 3.533a1.98 1.98 0 0 1 .211 2.56 3.2 3.2 0 0 0-.462.968.5.5 0 0 1-.478.354h-8.1a.5.5 0 0 1-.497-.557m14.08-11.435A2 2 0 0 0 15 5v5.084a1.98 1.98 0 0 0 1.656 1.97 4 4 0 0 1 .677 7.72.51.51 0 0 0-.333.476v8.154a.5.5 0 0 0 .558.5A13.04 13.04 0 0 0 29 16.185C29.094 9.4 23.899 3.61 17.174 3.008M14.656 19.77a4 4 0 0 1-2.425-2.427.51.51 0 0 0-.475-.343H3.59a.5.5 0 0 0-.5.556A13.01 13.01 0 0 0 14.443 28.91a.5.5 0 0 0 .556-.5V20.25a.51.51 0 0 0-.343-.48"})})};h.forwardRef(lw);const cw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 2a11 11 0 0 1 8.984 4.659L16 14.845zm0 22a11 11 0 0 1-8.984-4.659l18.97-10.951A11 11 0 0 1 16 27"})})};h.forwardRef(cw);const uw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m29.061 10.061-16 16a1.5 1.5 0 0 1-2.125 0l-7-7a1.504 1.504 0 0 1 2.125-2.125L12 22.875 26.939 7.939a1.502 1.502 0 1 1 2.125 2.125z"})})};h.forwardRef(uw);const dw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5.708 10.708-7 7a1 1 0 0 1-1.415 0l-3-3a1 1 0 0 1 1.415-1.415L14 18.586l6.293-6.293a1 1 0 0 1 1.415 1.415"})})};h.forwardRef(dw);const hw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M176.49 95.51a12 12 0 0 1 0 17l-56 56a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 16.98.03M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84"})})};h.forwardRef(hw);const fw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m27.061 13.061-10 10a1.503 1.503 0 0 1-2.125 0l-10-10a1.503 1.503 0 1 1 2.125-2.125L16 19.875l8.939-8.94a1.502 1.502 0 1 1 2.125 2.125z"})})};h.forwardRef(fw);const gw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M21.061 24.939a1.503 1.503 0 0 1-2.125 2.125l-10-10a1.5 1.5 0 0 1 0-2.125l10-10a1.503 1.503 0 0 1 2.125 2.125L12.125 16z"})})},Sc=h.forwardRef(gw),mw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m23.061 17.061-10 10a1.503 1.503 0 0 1-2.125-2.125L19.875 16l-8.936-8.939a1.502 1.502 0 1 1 2.125-2.125l10 10a1.5 1.5 0 0 1-.003 2.125"})})},wa=h.forwardRef(mw),ww=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27.061 21.061a1.503 1.503 0 0 1-2.125 0L16 12.125l-8.939 8.936a1.503 1.503 0 0 1-2.125-2.125l10-10a1.5 1.5 0 0 1 2.125 0l10 10a1.5 1.5 0 0 1 0 2.125"})})};h.forwardRef(ww);const xw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m7 14h-7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2"})})},vw=h.forwardRef(xw),pw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28 16a12 12 0 0 1-20.236 8.728 1.002 1.002 0 0 1 1.375-1.456 10 10 0 1 0-.21-14.343c-.441.446-.857.885-1.26 1.321l2.039 2.043A1 1 0 0 1 9 14H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1.707-.707L6.25 8.838c.402-.437.817-.875 1.258-1.32A12 12 0 0 1 28 16M16 9a1 1 0 0 0-1 1v6a1 1 0 0 0 .485.858l5 3a.999.999 0 0 0 1.486-1.1 1 1 0 0 0-.456-.616L17 15.434V10a1 1 0 0 0-1-1"})})};h.forwardRef(pw);const bw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435C30.764 9.693 25.884 5 20.008 5"})})};h.forwardRef(bw);const Cw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M30.991 15.565C30.764 9.693 25.884 5 20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435m-7.283 3.143a1 1 0 0 1-1.415 0L20 16.414V24a1 1 0 0 1-2 0v-7.586l-2.293 2.293a1 1 0 0 1-1.415-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1 0 1.415"})})};h.forwardRef(Cw);const $w=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M8.96 12.153 4.342 16l4.618 3.848a1.5 1.5 0 1 1-1.92 2.305l-6-5a1.5 1.5 0 0 1 0-2.305l6-5a1.5 1.5 0 0 1 1.92 2.304m22 2.694-6-5a1.5 1.5 0 1 0-1.92 2.306L27.658 16l-4.618 3.848a1.5 1.5 0 1 0 1.92 2.305l6-5a1.5 1.5 0 0 0 0-2.305M20.512 3.59a1.5 1.5 0 0 0-1.922.898l-8 22a1.5 1.5 0 0 0 2.82 1.024l8-22a1.5 1.5 0 0 0-.898-1.922"})})};h.forwardRef($w);const yw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M200 40h-32a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h8v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-93.66 21.66a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L124.69 80Zm-64 24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L59.31 80l18.35 18.34a8 8 0 0 1-11.32 11.32ZM200 200H56v-64h96a16 16 0 0 0 16-16V56h32Z"})})};h.forwardRef(yw);const Sw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M26 10H4a1 1 0 0 0-1 1v6a12.04 12.04 0 0 0 4.068 9H4a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2h-3.067a12.1 12.1 0 0 0 3.375-5.011A5 5 0 0 0 31 16v-1a5 5 0 0 0-5-5m3 6a3 3 0 0 1-2.15 2.875Q27 17.944 27 17v-4.828A3 3 0 0 1 29 15zM14 7V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m4 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m-8 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0"})})};h.forwardRef(Sw);const Rw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M29.743 13.401a1 1 0 0 0-.487-.675l-3.729-2.125-.015-4.202a1 1 0 0 0-.353-.76 14 14 0 0 0-4.59-2.584 1 1 0 0 0-.808.074L16 5.23l-3.765-2.106a1 1 0 0 0-.809-.075 14 14 0 0 0-4.585 2.594 1 1 0 0 0-.354.758L6.47 10.61 2.74 12.734a1 1 0 0 0-.486.675 13.3 13.3 0 0 0 0 5.195 1 1 0 0 0 .486.675l3.729 2.125.015 4.204a1 1 0 0 0 .353.76 14 14 0 0 0 4.59 2.583 1 1 0 0 0 .808-.073L16 26.768l3.765 2.107a1.013 1.013 0 0 0 .809.073 14 14 0 0 0 4.585-2.592 1 1 0 0 0 .354-.759l.018-4.206 3.729-2.125a1 1 0 0 0 .486-.675c.34-1.713.338-3.477-.003-5.19M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})};h.forwardRef(Rw);const jw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M18.5 12V6a1.5 1.5 0 1 1 3 0v4.5H26a1.5 1.5 0 1 1 0 3h-6a1.5 1.5 0 0 1-1.5-1.5M12 18.5H6a1.5 1.5 0 1 0 0 3h4.5V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5m14 0h-6a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 1 0 3 0v-4.5H26a1.5 1.5 0 1 0 0-3m-14-14A1.5 1.5 0 0 0 10.5 6v4.5H6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 12 4.5"})})};h.forwardRef(jw);const _w=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M22.5 17.5h-2v-3h2a5 5 0 1 0-5-5v2h-3v-2a5 5 0 1 0-5 5h2v3h-2a5 5 0 1 0 5 5v-2h3v2a5 5 0 1 0 5-5m-2-8a2 2 0 1 1 2 2h-2zm-13 0a2 2 0 0 1 4 0v2h-2a2 2 0 0 1-2-2m4 13a2 2 0 1 1-2-2h2zm3-8h3v3h-3zm8 10a2 2 0 0 1-2-2v-2h2a2 2 0 0 1 0 4"})})};h.forwardRef(_w);const Aw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M30.5 24a1.5 1.5 0 0 1-1.5 1.5h-3.5V29a1.5 1.5 0 1 1-3 0v-3.5H8A1.5 1.5 0 0 1 6.5 24V9.5H3a1.5 1.5 0 0 1 0-3h3.5V3a1.5 1.5 0 0 1 3 0v19.5H29a1.5 1.5 0 0 1 1.5 1.5M13 9.5h9.5V19a1.5 1.5 0 1 0 3 0V8A1.5 1.5 0 0 0 24 6.5H13a1.5 1.5 0 0 0 0 3"})})};h.forwardRef(Aw);const Iw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M26.061 23.939a1.503 1.503 0 0 1-2.125 2.125L16 18.125l-7.939 7.936a1.503 1.503 0 1 1-2.125-2.125L13.875 16 5.939 8.061a1.503 1.503 0 1 1 2.125-2.125L16 13.875l7.939-7.94a1.502 1.502 0 1 1 2.125 2.125L18.125 16z"})})},fr=h.forwardRef(Iw),Mw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m4.708 16.293a1 1 0 0 1-1.415 1.415L16 17.414l-3.293 3.293a1 1 0 0 1-1.415-1.415L14.587 16l-3.293-3.293a1 1 0 1 1 1.415-1.415L16 14.587l3.293-3.293a1 1 0 0 1 1.415 1.415L17.414 16z"})})};h.forwardRef(Mw);const Tw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M30.48 9.524a1.51 1.51 0 0 0-1.668-.213l-6.276 3.125-5.24-8.704a1.514 1.514 0 0 0-2.592 0l-5.24 8.708L3.19 9.315a1.514 1.514 0 0 0-2.113 1.825l4.625 14.17a1 1 0 0 0 1.46.55C7.194 25.841 10.39 24 16 24s8.806 1.841 8.835 1.859a1 1 0 0 0 1.464-.549l4.625-14.166a1.51 1.51 0 0 0-.444-1.62M21.98 19.6a1 1 0 0 1-1.159.811 28.5 28.5 0 0 0-9.652 0 1 1 0 0 1-.348-1.97 30.6 30.6 0 0 1 10.348 0 1 1 0 0 1 .816 1.159z"})})};h.forwardRef(Tw);const Ew=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27.414 24a2 2 0 0 1 0 2.829l-.585.585a2 2 0 0 1-2.829 0l-6.906-6.905-2.735 6.292A1.98 1.98 0 0 1 12.533 28h-.098a1.98 1.98 0 0 1-1.801-1.375L4.1 6.615A1.994 1.994 0 0 1 6.615 4.1l20.01 6.534a2 2 0 0 1 .176 3.725l-6.292 2.735z"})})};h.forwardRef(Ew);const Lw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3C9.271 3 4 6.075 4 10v12c0 3.925 5.271 7 12 7s12-3.075 12-7V10c0-3.925-5.271-7-12-7m10 13c0 1.203-.985 2.429-2.701 3.365C21.366 20.419 18.774 21 16 21s-5.366-.581-7.299-1.635C6.985 18.429 6 17.203 6 16v-2.08C8.133 15.795 11.779 17 16 17s7.868-1.21 10-3.08zm-2.701 9.365C21.366 26.419 18.774 27 16 27s-5.366-.581-7.299-1.635C6.985 24.429 6 23.203 6 22v-2.08C8.133 21.795 11.779 23 16 23s7.868-1.21 10-3.08V22c0 1.203-.985 2.429-2.701 3.365"})})};h.forwardRef(Lw);const Vw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M29 12a2 2 0 0 0-2-2h-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a1 1 0 0 0 1.625.777L9 19.25V23a2 2 0 0 0 2 2h11.699l4.676 3.778A1 1 0 0 0 29 28zm-5.319 11.223a1 1 0 0 0-.625-.223H11v-4h10a2 2 0 0 0 2-2v-5h4v13.906z"})})};h.forwardRef(Vw);const Dw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-13.561 1.061a1.5 1.5 0 0 0 2.125 0l5-5a1.502 1.502 0 1 0-2.125-2.125L17.5 15.375V5a1.5 1.5 0 1 0-3 0v10.375l-2.439-2.436a1.502 1.502 0 1 0-2.125 2.125z"})})};h.forwardRef(Dw);const Ow=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M13.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};h.forwardRef(Ow);const Bw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 4H11a1 1 0 0 0-1 1v5H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 16h-4v-9a1 1 0 0 0-1-1h-9V6h14z"})})};h.forwardRef(Bw);const Hw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m11 13c.001 1.411-.27 2.81-.8 4.118l-5.587-3.437a2 2 0 0 0-.78-.279l-2.853-.385a2.01 2.01 0 0 0-2 .983h-1.09l-.475-.983a1.99 1.99 0 0 0-1.375-1.083l-1-.216.978-1.718h2.088c.338 0 .67-.087.966-.25l1.532-.845q.202-.113.375-.268l3.364-3.042a1.99 1.99 0 0 0 .407-2.458l-.045-.08A11.01 11.01 0 0 1 27 16M5 16a10.94 10.94 0 0 1 1.068-4.725l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99a2.01 2.01 0 0 0 1.8 1.125h.186l-.904 2.029a2 2 0 0 0 .357 2.171l.018.018L16 25.742l-.242 1.25A11.014 11.014 0 0 1 5 16"})})};h.forwardRef(Hw);const zw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:[l.jsx("path",{d:"M20.689 3.88A13 13 0 0 0 16 3a13 13 0 0 0-8.155 23.124l1.02-1.765A11 11 0 0 1 5 16a10.94 10.94 0 0 1 1.068-4.724l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99q.113.226.275.418l1.169-2.025-.121-.25a1.99 1.99 0 0 0-1.375-1.084l-1-.217.978-1.717h2.088c.338 0 .67-.087.966-.25l.726-.4z"}),l.jsx("path",{fillRule:"evenodd",d:"m24 2.144 1.732 1-1.58 2.736q.54.435 1.036.932A13.01 13.01 0 0 1 29 16a13 13 0 0 1-17.69 12.124l-1.578 2.732-1.732-1zm-.86 5.49-4.936 8.549 1.628.22c.277.037.543.132.78.278l5.588 3.436c.53-1.308.801-2.706.8-4.117a11.01 11.01 0 0 0-3.86-8.367M13.92 23.6l-1.593 2.76a11 11 0 0 0 3.43.631l.242-1.25z",clipRule:"evenodd"})]})};h.forwardRef(zw);const Nw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10.365 7.5C20.579 21.724 18.441 23 16 23s-4.579-1.275-5.865-3.5a1.001 1.001 0 0 1 1.477-1.31q.157.129.253.31C12.799 20.114 14.266 21 16 21s3.201-.887 4.135-2.5a1 1 0 1 1 1.73 1M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(Nw);const Fw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10 10.865a1 1 0 0 1-1.365-.365C19.201 20.886 17.734 20 16 20s-3.201.887-4.135 2.5a1.001 1.001 0 1 1-1.73-1C11.421 19.276 13.559 18 16 18s4.579 1.275 5.865 3.5a1 1 0 0 1-.365 1.365M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(Fw);const kw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27.5 6v5a1.5 1.5 0 1 1-3 0V7.5H21a1.5 1.5 0 0 1 0-3h5A1.5 1.5 0 0 1 27.5 6M11 24.5H7.5V21a1.5 1.5 0 0 0-3 0v5A1.5 1.5 0 0 0 6 27.5h5a1.5 1.5 0 1 0 0-3m15-5a1.5 1.5 0 0 0-1.5 1.5v3.5H21a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5m-15-15H6A1.5 1.5 0 0 0 4.5 6v5a1.5 1.5 0 0 0 3 0V7.5H11a1.5 1.5 0 0 0 0-3"})})};h.forwardRef(kw);const Ww=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.5 13a1.5 1.5 0 1 1-3 0V8.625l-7.439 7.439a1.503 1.503 0 1 1-2.125-2.125L23.375 6.5H19a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 28.5 5zM23 16a1.5 1.5 0 0 0-1.5 1.5v8h-15v-15h8a1.5 1.5 0 1 0 0-3H6A2.5 2.5 0 0 0 3.5 10v16A2.5 2.5 0 0 0 6 28.5h16a2.5 2.5 0 0 0 2.5-2.5v-8.5A1.5 1.5 0 0 0 23 16"})})},Uw=h.forwardRef(Ww),qw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M30.914 15.595c-.044-.099-1.103-2.447-3.457-4.801C24.322 7.657 20.36 6 16 6S7.679 7.657 4.542 10.794C2.19 13.148 1.125 15.5 1.086 15.595a1 1 0 0 0 0 .812c.044.1 1.103 2.447 3.456 4.8C7.68 24.344 11.64 26 16 26s8.321-1.657 11.458-4.792c2.353-2.354 3.412-4.702 3.456-4.8a1 1 0 0 0 0-.813M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})};h.forwardRef(qw);const Gw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M6.74 4.328a1 1 0 1 0-1.48 1.345l2.405 2.646c-4.54 2.786-6.493 7.081-6.579 7.276a1 1 0 0 0 0 .813c.044.098 1.103 2.446 3.456 4.8C7.68 24.343 11.64 26 16 26c2.24.013 4.459-.448 6.509-1.354l2.75 3.027a1 1 0 1 0 1.48-1.345zm11.125 15.21a4 4 0 0 1-5.209-5.73zm13.049-3.13c-.053.117-1.319 2.92-4.17 5.475a1 1 0 0 1-1.408-.072L12.675 7.884a1 1 0 0 1 .575-1.66A17 17 0 0 1 16 6c4.36 0 8.321 1.658 11.458 4.794 2.353 2.354 3.412 4.702 3.456 4.801a1 1 0 0 1 0 .813"})})};h.forwardRef(Gw);const Kw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M17 15v12a1 1 0 0 1-2 0V15a1 1 0 0 1 2 0m8 9a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m3-6h-2V5a1 1 0 0 0-2 0v13h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M7 20a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m3-6H8V5a1 1 0 0 0-2 0v9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m9-6h-2V5a1 1 0 0 0-2 0v3h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"})})};h.forwardRef(Kw);const Yw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m26.48 16.851-7.474 7.559a1.97 1.97 0 0 1-1.4.585H9.415l-3.707 3.712a1.001 1.001 0 0 1-1.415-1.415l2.823-2.822L15.588 16h10.537a.5.5 0 0 1 .355.851m.607-13.03a8 8 0 0 0-10.737.518l-1.2 1.185a.5.5 0 0 0-.15.351v7.875l6.875-6.875a1 1 0 0 1 1.414 1.414L17.589 14h11.047a.5.5 0 0 0 .445-.27 8.01 8.01 0 0 0-1.994-9.909M7.854 20.904 13 15.758V8.845a.5.5 0 0 0-.851-.355L7.586 13A1.99 1.99 0 0 0 7 14.414v6.136a.5.5 0 0 0 .854.354"})})};h.forwardRef(Yw);const Zw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707M19 11V5.5l5.5 5.5z"})})};h.forwardRef(Zw);const Xw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44ZM48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.06-4.5 8.21 8.21 0 0 1 10.9-.91 8 8 0 0 1 .82 11.81A30.06 30.06 0 0 1 64 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a30 30 0 0 1 21.39 9.19 8.26 8.26 0 0 1 .73 11.09 8 8 0 0 1-11.9.38A14.17 14.17 0 0 0 64 160c-8.82 0-16 9-16 20m103.81 16.31a20.82 20.82 0 0 1-9.19 15.23C137.43 215 131 216 125.13 216a61.1 61.1 0 0 1-15.13-2 8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36.88-.59 1.83-1.52 2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.79 2.83 26.35 7.66 24.11 24.97M215.42 155l-19.89 55.68a8 8 0 0 1-15.06 0L160.58 155a8.21 8.21 0 0 1 4.5-10.45 8 8 0 0 1 10.45 4.76l12.47 34.9 12.47-34.9a8 8 0 0 1 10.45-4.76 8.23 8.23 0 0 1 4.5 10.45"})})};h.forwardRef(Xw);const Qw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707m-7 11a1 1 0 0 1-1.415 1.415L16 20.414l-2.293 2.293a1 1 0 0 1-1.415-1.415L14.587 19l-2.293-2.293a1 1 0 1 1 1.415-1.415L16 17.587l2.293-2.293a1 1 0 0 1 1.415 1.415L17.414 19zM19 11V5.5l5.5 5.5z"})})};h.forwardRef(Qw);const Jw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M6 15h20a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707l-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1m13-9.5 5.5 5.5H19zM28 19a1 1 0 0 1-1 1h-3v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1M8 18H6a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-1h1a3.5 3.5 0 1 0 0-7m0 5H7v-3h1a1.5 1.5 0 1 1 0 3m8-5h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a4.5 4.5 0 1 0 0-9m0 7h-1v-5h1a2.5 2.5 0 0 1 0 5"})})};h.forwardRef(Jw);const Pw=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76 44 44h-44Zm4 164.53a8.18 8.18 0 0 1-8.25 7.47H120a8 8 0 0 1-8-8v-55.73a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v48h20a8 8 0 0 1 8 8.51m-61.49-51.88L77.83 180l16.68 23.35a8 8 0 0 1-13 9.3L68 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L58.17 180l-16.68-23.35a8 8 0 0 1 2.3-11.46 8.19 8.19 0 0 1 10.88 2.38L68 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm121.28 39.66a20.81 20.81 0 0 1-9.18 15.23c-5.19 3.46-11.67 4.46-17.49 4.46a60.6 60.6 0 0 1-15.19-2 8 8 0 0 1 4.31-15.41c4.38 1.21 14.94 2.71 19.54-.35.89-.6 1.84-1.52 2.15-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 8.95-14.94c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.13 1.08 1.12 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.87 2.82 26.39 7.65 24.18 24.96"})})};h.forwardRef(Pw);const ex=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M184 144h-16a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 184 144m-.35 40H176v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 183.65 184M136 152v55.73a8.17 8.17 0 0 1-7.47 8.25 8 8 0 0 1-8.53-8v-55.71a8.17 8.17 0 0 1 7.47-8.25A8 8 0 0 1 136 152m-40 56.53a8.17 8.17 0 0 1-8.27 7.47h-31.5a8.27 8.27 0 0 1-6-2.5 8 8 0 0 1-1.18-9.5l25.16-44H56.27a8.17 8.17 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h31.77a8.27 8.27 0 0 1 6 2.5A8 8 0 0 1 95 156l-25.21 44H88a8 8 0 0 1 8 8.53M213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Z"})})};h.forwardRef(ex);const tx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 16",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m13.687 4.146-2.5-2.5a.5.5 0 0 0-.354-.146h-5a1 1 0 0 0-1 1v1h-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-7a.5.5 0 0 0-.146-.354M8.833 12h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1m0-2h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1m4 1.5h-1v-5a.5.5 0 0 0-.146-.354l-2.5-2.5a.5.5 0 0 0-.354-.146h-3v-1h4.793l2.207 2.207z"})})};h.forwardRef(tx);const nx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M25.5 16a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M29 8.5H3a1.5 1.5 0 0 0 0 3h26a1.5 1.5 0 1 0 0-3m-10 12h-6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(nx);const rx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 9H16.414L13 5.586A1.98 1.98 0 0 0 11.586 5H5a2 2 0 0 0-2 2v18.078A1.926 1.926 0 0 0 4.924 27H27.11A1.89 1.89 0 0 0 29 25.111V11a2 2 0 0 0-2-2M5 7h6.586l2 2H5z"})})};h.forwardRef(rx);const ox=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 9h-4.385q.075-.06.146-.125A3.7 3.7 0 0 0 24 6.196 4.08 4.08 0 0 0 19.805 2a3.7 3.7 0 0 0-2.68 1.239A6.9 6.9 0 0 0 16 5.049a6.9 6.9 0 0 0-1.125-1.81A3.7 3.7 0 0 0 12.195 2 4.08 4.08 0 0 0 8 6.196a3.7 3.7 0 0 0 1.239 2.679q.072.06.146.125H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v8a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V15H5v-4h10v4h2v-4h10v4H17v11.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M10.564 7.375A1.7 1.7 0 0 1 10 6.125 2.076 2.076 0 0 1 12.074 4h.061a1.71 1.71 0 0 1 1.25.563c1.049 1.185 1.419 3.15 1.549 4.365-1.22-.13-3.184-.5-4.37-1.553m10.875 0c-1.186 1.05-3.155 1.42-4.375 1.55.148-1.314.561-3.237 1.561-4.361A1.7 1.7 0 0 1 19.875 4h.061A2.077 2.077 0 0 1 22 6.135a1.7 1.7 0 0 1-.564 1.24z"})})};h.forwardRef(ox);const ix=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m9.796 8h-4.428a17.8 17.8 0 0 0-2.533-5.625A11.05 11.05 0 0 1 25.796 11M16 5.014c1.5 1.625 2.625 3.693 3.296 5.986h-6.592C13.375 8.707 14.5 6.641 16 5.014M12 16c0-1.005.084-2.009.25-3h7.5a18.2 18.2 0 0 1 0 6h-7.5a18 18 0 0 1-.25-3m.704 5h6.592c-.671 2.293-1.796 4.359-3.296 5.986-1.5-1.627-2.625-3.693-3.296-5.986m6.131 5.625A17.8 17.8 0 0 0 21.367 21h4.43a11.05 11.05 0 0 1-6.962 5.625M21.776 19a20.2 20.2 0 0 0 0-6h4.808a11 11 0 0 1 0 6z"})})};h.forwardRef(ix);const ax=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 16",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M13 9.5c-.357 0-.71.085-1.028.25l-1.337-1.04a2.2 2.2 0 0 0 .116-.67l.646-.214a2.25 2.25 0 1 0-.636-1.37l-.487.162A2.25 2.25 0 0 0 8.5 5.75c-.062 0-.117 0-.175.008l-.278-.625A2.25 2.25 0 1 0 6.5 5.75c.063 0 .118 0 .176-.008l.278.625a2.24 2.24 0 0 0-.537 2.482l-1.33 1.182a2.25 2.25 0 1 0 .997 1.12l1.33-1.182a2.25 2.25 0 0 0 2.3-.075l1.224.954A2.25 2.25 0 1 0 13.001 9.5m0-4A.75.75 0 1 1 13 7a.75.75 0 0 1 0-1.5m-7.25-2a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M4 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M7.75 8a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M13 12.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"})})};h.forwardRef(ax);const sx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{fillRule:"evenodd",d:"M13.29 28.226 6.765 24.46a2.822 2.822 0 1 1-2.708-4.693v-7.532a2.824 2.824 0 1 1 2.708-4.693l6.525-3.767a2.824 2.824 0 1 1 5.42 0l6.524 3.766a2.822 2.822 0 1 1 2.71 4.693v7.533a2.824 2.824 0 1 1-2.71 4.694l-6.524 3.766A2.825 2.825 0 0 1 16 31.84a2.822 2.822 0 0 1-2.71-3.614M16 5.806q.413-.002.791-.113l8.531 14.776a2.8 2.8 0 0 0-.791 1.37H7.467a2.8 2.8 0 0 0-.79-1.369L15.21 5.693q.377.11.791.112M7.468 23.178l-.033.12 6.526 3.767A2.81 2.81 0 0 1 16 26.195c.802 0 1.526.334 2.04.871l6.523-3.766-.032-.121zM5.397 12.233a2.824 2.824 0 0 0 2.038-3.532l6.526-3.767q.043.045.088.088L5.517 19.8l-.12-.032zM26.482 19.8q.06-.018.121-.033v-7.532a2.824 2.824 0 0 1-2.04-3.534L18.04 4.934q-.045.045-.089.088z",clipRule:"evenodd"})})};h.forwardRef(sx);const lx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 7v7.5a.5.5 0 0 1-.5.5H17V5.5a.5.5 0 0 1 .5-.5H25a2 2 0 0 1 2 2M14.5 5H7a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5H15V5.5a.5.5 0 0 0-.5-.5m12 12H17v9.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-7.5a.5.5 0 0 0-.5-.5M5 17.5V25a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V17H5.5a.5.5 0 0 0-.5.5"})})};h.forwardRef(lx);const cx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M10.5 6.5v5h-7A.5.5 0 0 1 3 11V8a2 2 0 0 1 2-2h5a.5.5 0 0 1 .5.5m2 19a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-5h-7zM3 21v3a2 2 0 0 0 2 2h5a.5.5 0 0 0 .5-.5v-5h-7a.5.5 0 0 0-.5.5m0-7v4a.5.5 0 0 0 .5.5h7v-5h-7a.5.5 0 0 0-.5.5m16-8h-6a.5.5 0 0 0-.5.5v5h7v-5A.5.5 0 0 0 19 6m9.5 7.5h-7v5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-16 5h7v-5h-7zM27 6h-5a.5.5 0 0 0-.5.5v5h7a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2m1.5 14.5h-7v5a.5.5 0 0 0 .5.5h5a2 2 0 0 0 2-2v-3a.5.5 0 0 0-.5-.5"})})};h.forwardRef(cx);const ux=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.791 17.633a3.04 3.04 0 0 0-2.326-.597C28.813 14.666 30 12.31 30 10c0-3.309-2.661-6-5.933-6A5.95 5.95 0 0 0 19.5 6.094 5.95 5.95 0 0 0 14.932 4C11.663 4 9 6.691 9 10c0 1.375.405 2.711 1.258 4.125a4 4 0 0 0-1.844 1.05L5.586 18H2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h13q.123 0 .242-.03l8-2a1 1 0 0 0 .15-.05l4.858-2.067.055-.025a3.074 3.074 0 0 0 .491-5.195zm-1.362 3.393-4.75 2.023L14.875 25H7v-5.586l2.829-2.828A1.98 1.98 0 0 1 11.242 16H17.5a1.5 1.5 0 0 1 0 3H14a1 1 0 0 0 0 2h4q.113 0 .224-.025l8.375-1.926.038-.01a1.075 1.075 0 0 1 .788 1.987z"})})};h.forwardRef(ux);const dx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28 10.5h-5.475l.951-5.231a1.5 1.5 0 1 0-2.952-.538L19.475 10.5h-4.95l.951-5.231a1.5 1.5 0 1 0-2.952-.538L11.475 10.5H6a1.5 1.5 0 0 0 0 3h4.93l-.909 5H4a1.5 1.5 0 0 0 0 3h5.475l-.951 5.231a1.5 1.5 0 0 0 1.207 1.75q.134.022.269.019a1.5 1.5 0 0 0 1.475-1.233l1.05-5.767h4.95l-.951 5.231a1.5 1.5 0 1 0 2.952.543l1.049-5.774H26a1.5 1.5 0 1 0 0-3h-4.93l.909-5H28a1.5 1.5 0 1 0 0-3m-9.979 8H13.07l.909-5h4.951z"})})};h.forwardRef(dx);const hx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-5 5 4.94 4.94 0 0 1-3.571-1.45 1.5 1.5 0 0 1 2.142-2.1 1.94 1.94 0 0 0 1.429.55 2 2 0 0 0 0-4 1.94 1.94 0 0 0-1.429.55 1.5 1.5 0 0 1-2.551-1.3l1-6A1.5 1.5 0 0 1 25 12.5h5a1.5 1.5 0 1 1 0 3h-3.729l-.338 2.029q.283-.03.567-.029a5 5 0 0 1 5 5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(hx);const fx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M32 22a1.5 1.5 0 0 1-1.5 1.5V26a1.5 1.5 0 1 1-3 0v-2.5H23a1.5 1.5 0 0 1-1.422-1.974l3-9a1.5 1.5 0 0 1 2.845.948L25.08 20.5H27.5V18a1.5 1.5 0 1 1 3 0v2.5A1.5 1.5 0 0 1 32 22M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(fx);const gx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M29.5 14v12a1.5 1.5 0 1 1-3 0v-9.198l-.668.448a1.503 1.503 0 0 1-1.665-2.5l3-2A1.5 1.5 0 0 1 29.5 14M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(gx);const mx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m27.133 17.541 1.655-2.772a1.5 1.5 0 1 0-2.576-1.538l-4.03 6.75q-.018.029-.032.059a5 5 0 1 0 4.983-2.5zM26.5 24.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0"})})};h.forwardRef(mx);const wx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-8.571 3.5 1.5 1.5 0 1 1 2.142-2.099A2 2 0 1 0 26.5 20.5a1.5 1.5 0 0 1-1.229-2.36l1.854-2.64H24a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 0 1 1.229 2.36l-2.293 3.275A5 5 0 0 1 31.5 22.5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(wx);const xx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0M30 24.5h-3l3.593-4.791a4.499 4.499 0 1 0-7.837-4.209 1.5 1.5 0 1 0 2.829 1q.076-.218.216-.402a1.5 1.5 0 1 1 2.394 1.807L22.8 25.1a1.5 1.5 0 0 0 1.2 2.4h6a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(xx);const vx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M29 17v7a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h2.956A10.964 10.964 0 0 0 16.081 6H16A11 11 0 0 0 5.045 16H8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a13.014 13.014 0 0 1 22.236-9.167A12.93 12.93 0 0 1 29 17"})})};h.forwardRef(vx);const px=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M30 11.75c0 8.75-12.974 15.833-13.526 16.125a1 1 0 0 1-.948 0C14.974 27.582 2 20.5 2 11.75A7.76 7.76 0 0 1 9.75 4c2.581 0 4.841 1.11 6.25 2.986C17.409 5.11 19.669 4 22.25 4A7.76 7.76 0 0 1 30 11.75"})})};h.forwardRef(px);const bx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28 14.444V26a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14.444a2 2 0 0 1 .646-1.473l10-9.435.014-.013a2 2 0 0 1 2.705.013l10 9.435A2 2 0 0 1 28 14.444"})})};h.forwardRef(bx);const Cx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-7.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5 25v-3.5l6.5-6.5 10 10zm22 0h-2.671l-4.5-4.5 2.5-2.5L27 22.672z"})})};h.forwardRef(Cx);const $x=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 5H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 25H5V11h2v10a2 2 0 0 0 2 2h14zm4-4H9v-4.5l4.5-4.5 6.208 6.208a1 1 0 0 0 1.413 0L24.33 15 27 17.672z"})})};h.forwardRef($x);const yx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 0 0 0-3m-18-4a1.5 1.5 0 0 0 1.061-2.561L6.125 12l3.936-3.94a1.503 1.503 0 1 0-2.125-2.125l-5 5a1.5 1.5 0 0 0 0 2.125l5 5A1.5 1.5 0 0 0 9 18.5"})})};h.forwardRef(yx);const Sx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 0 0 0 3h22a1.5 1.5 0 1 0 0-3M3.939 18.06a1.5 1.5 0 0 0 2.125 0l5-5a1.5 1.5 0 0 0 0-2.125l-5-5a1.503 1.503 0 0 0-2.125 2.125L7.875 12l-3.936 3.939a1.5 1.5 0 0 0 0 2.122"})})};h.forwardRef(Sx);const Rx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 23a2 2 0 0 1-2-2v-5a1 1 0 0 1 0-2 2 2 0 0 1 2 2v5a1 1 0 0 1 0 2"})})};h.forwardRef(Rx);const jx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M25.5 7A1.5 1.5 0 0 1 24 8.5h-3.919l-5 15H18a1.5 1.5 0 1 1 0 3H8a1.5 1.5 0 1 1 0-3h3.919l5-15H14a1.5 1.5 0 0 1 0-3h10A1.5 1.5 0 0 1 25.5 7"})})};h.forwardRef(jx);const _x=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M20 2a10.01 10.01 0 0 0-9.511 13.098l-7.196 7.195A1 1 0 0 0 3 23v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 .707-.293l1.195-1.196A10 10 0 1 0 20 2m2.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"})})};h.forwardRef(_x);const Ax=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M5 7h22v5H5zm22 18H14V14h13z"})})};h.forwardRef(Ax);const Ix=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M22 29a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m5-16a10.94 10.94 0 0 1-4.205 8.651A2.03 2.03 0 0 0 22 23.25V24a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-.75a2 2 0 0 0-.779-1.582A10.95 10.95 0 0 1 5 13.06C4.967 7.104 9.782 2.143 15.735 2A11 11 0 0 1 27 13m-4.014-1.168a7.2 7.2 0 0 0-5.82-5.818 1 1 0 1 0-.332 1.972c2.071.349 3.829 2.106 4.18 4.182a1 1 0 0 0 1.972-.335"})})};h.forwardRef(Ix);const Mx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m21.731 14.683-14 15a1 1 0 0 1-1.711-.875l1.832-9.167L.65 16.936a1 1 0 0 1-.375-1.625l14-15a1 1 0 0 1 1.71.875l-1.837 9.177 7.204 2.7a1 1 0 0 1 .375 1.62z"})})};h.forwardRef(Mx);const Tx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M17.046 23.441a1.5 1.5 0 0 1 0 2.125l-.742.743a7.502 7.502 0 1 1-10.61-10.61l3.015-3.014A7.5 7.5 0 0 1 19 12.375a1.506 1.506 0 0 1-2 2.25 4.5 4.5 0 0 0-6.171.184l-3.013 3.01a4.5 4.5 0 0 0 6.365 6.365l.743-.743a1.5 1.5 0 0 1 2.122 0m9.26-17.75a7.51 7.51 0 0 0-10.61 0l-.742.743a1.503 1.503 0 1 0 2.125 2.125l.742-.743a4.5 4.5 0 0 1 6.365 6.365l-3.014 3.015a4.5 4.5 0 0 1-6.172.179 1.506 1.506 0 1 0-2 2.25 7.5 7.5 0 0 0 10.288-.304l3.014-3.014a7.51 7.51 0 0 0 .004-10.613z"})})};h.forwardRef(Tx);const Ex=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M5 9.5h22a1.5 1.5 0 0 0 0-3H5a1.5 1.5 0 0 0 0 3m22 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(Ex);const Lx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 17.5h22a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m13 5H5a1.5 1.5 0 1 0 0 3h13a1.5 1.5 0 1 0 0-3m11 0h-1.5V21a1.5 1.5 0 1 0-3 0v1.5H23a1.5 1.5 0 1 0 0 3h1.5V27a1.5 1.5 0 1 0 3 0v-1.5H29a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(Lx);const Vx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h64a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m80 40H40a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24m120.49 20.49a12 12 0 0 1-17 0l-18.08-18.08a44 44 0 1 1 17-17l18.08 18.07a12 12 0 0 1 0 17.01M184 164a20 20 0 1 0-20-20 20 20 0 0 0 20 20"})})};h.forwardRef(Vx);const Dx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M17.5 4v4a1.5 1.5 0 1 1-3 0V4a1.5 1.5 0 1 1 3 0m4.156 7.844a1.5 1.5 0 0 0 1.062-.44l2.828-2.829a1.503 1.503 0 1 0-2.125-2.125l-2.825 2.833a1.5 1.5 0 0 0 1.06 2.56M28 14.5h-4a1.5 1.5 0 1 0 0 3h4a1.5 1.5 0 1 0 0-3m-5.282 6.096a1.501 1.501 0 0 0-2.451 1.638c.075.182.186.348.326.487l2.828 2.829a1.503 1.503 0 0 0 2.125-2.125zM16 22.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 1 0 3 0v-4a1.5 1.5 0 0 0-1.5-1.5m-6.717-1.904-2.83 2.829A1.503 1.503 0 0 0 8.58 25.55l2.829-2.829a1.503 1.503 0 0 0-2.125-2.125M9.5 16A1.5 1.5 0 0 0 8 14.5H4a1.5 1.5 0 1 0 0 3h4A1.5 1.5 0 0 0 9.5 16m-.925-9.546A1.503 1.503 0 0 0 6.45 8.579l2.833 2.825a1.503 1.503 0 0 0 2.125-2.125z"})})},Rc=h.forwardRef(Dx),Ox=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M26 10h-4V7a6 6 0 1 0-12 0v3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M16 20.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M20 10h-8V7a4 4 0 1 1 8 0z"})})};h.forwardRef(Ox);const Bx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M31 19a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 0 1 1 1M7 9h2v2a1 1 0 1 0 2 0V9h2a1 1 0 0 0 0-2h-2V5a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2m16 15h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2m4.414-14L10 27.414a2 2 0 0 1-2.828 0l-2.587-2.585a2 2 0 0 1 0-2.829L22 4.586a2 2 0 0 1 2.829 0l2.585 2.585a2 2 0 0 1 0 2.829M26 8.586 23.414 6l-4 4L22 12.586z"})})};h.forwardRef(Bx);const Hx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M12.339 16 5 22.726V9.274zm1.48 1.356 1.5 1.381a1 1 0 0 0 1.352 0l1.5-1.38L25.421 24H6.571zM19.66 16 27 9.273v13.455z"})})},zx=h.forwardRef(Hx),Nx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{fillRule:"evenodd",d:"M11 7q0 .432-.088.838L16 10.382l5.088-2.544a4 4 0 1 1 .895 1.789L18.236 11.5l3.747 1.873a4 4 0 1 1 0 5.253L18.236 20.5l3.747 1.874a4 4 0 1 1-.895 1.788L16 21.618l-5.088 2.544Q11 24.567 11 25a4 4 0 1 1-.983-2.626l3.747-1.874-3.747-1.873a4 4 0 1 1 0-5.253l3.747-1.874-3.747-1.874A4 4 0 1 1 11 7M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m2.236 8h9.528L16 12.618zM9 25a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M27 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-11a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-11 3.382L20.764 17h-9.528z",clipRule:"evenodd"})})};h.forwardRef(Nx);const Fx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{fillRule:"evenodd",d:"M14.8 8.254a4 4 0 1 0-1.082 1.682l7.483 4.81a4 4 0 0 0-.075.254H10.874A4.002 4.002 0 0 0 3 16a4 4 0 0 0 7.874 1h10.252q.033.128.075.254l-7.484 4.81a4 4 0 1 0 1.082 1.682l7.484-4.81a4 4 0 1 0 0-5.871zM11 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};h.forwardRef(Fx);const kx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{fillRule:"evenodd",d:"M18.842 3.227a1 1 0 1 0-.445 1.95l1.747.399L9.6 12.959a4 4 0 1 0 0 6.081l10.546 7.385-1.748.399a1 1 0 1 0 .445 1.95l3.945-.9a1 1 0 0 0 .77-1.1l-.503-4.014a1 1 0 0 0-1.985.248l.223 1.779-10.545-7.384a4 4 0 0 0 .127-.403h14.712l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L25.586 15H10.874a4 4 0 0 0-.127-.403l10.544-7.383-.222 1.778a1 1 0 0 0 1.984.249l.503-4.015a1 1 0 0 0-.77-1.099zM9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0",clipRule:"evenodd"})})};h.forwardRef(kx);const Wx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 6H5a2 2 0 0 0-2 2v20a1.98 1.98 0 0 0 1.156 1.813 1.986 1.986 0 0 0 2.141-.299L10.312 26H27a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M10.5 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(Wx);const Ux=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M10 16V8a6 6 0 1 1 12 0v8a6 6 0 1 1-12 0m16 0a1 1 0 0 0-2 0 8 8 0 0 1-16 0 1 1 0 1 0-2 0 10.014 10.014 0 0 0 9 9.95V29a1 1 0 0 0 2 0v-3.05A10.014 10.014 0 0 0 26 16"})})};h.forwardRef(Ux);const qx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5"})})},Gx=h.forwardRef(qx),Kx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5 14H11a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"})})};h.forwardRef(Kx);const Yx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M20 27h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"})})};h.forwardRef(Yx);const Zx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M29.443 18.776a13.1 13.1 0 0 1-4.626 6.614A13 13 0 0 1 4 15a12.9 12.9 0 0 1 2.61-7.815 13.1 13.1 0 0 1 6.614-4.625 1 1 0 0 1 1.25 1.25 11.01 11.01 0 0 0 13.725 13.725 1 1 0 0 1 1.25 1.25z"})})};h.forwardRef(Zx);const Xx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m17 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};h.forwardRef(Xx);const Qx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M10.939 8.061a1.5 1.5 0 0 1 0-2.125l4-4a1.5 1.5 0 0 1 2.125 0l4 4a1.503 1.503 0 1 1-2.125 2.125L17.5 6.625V12a1.5 1.5 0 1 1-3 0V6.625l-1.439 1.436a1.5 1.5 0 0 1-2.122 0m8 15.875L17.5 25.375V20a1.5 1.5 0 1 0-3 0v5.375l-1.439-1.44a1.504 1.504 0 0 0-2.125 2.125l4 4a1.5 1.5 0 0 0 2.125 0l4-4a1.502 1.502 0 1 0-2.125-2.125zm11.125-9-4-4a1.503 1.503 0 0 0-2.125 2.125l1.436 1.439H20a1.5 1.5 0 0 0 0 3h5.375l-1.44 1.439a1.503 1.503 0 0 0 2.125 2.125l4-4a1.5 1.5 0 0 0 .001-2.125zM6.625 17.5H12a1.5 1.5 0 1 0 0-3H6.625l1.44-1.439a1.503 1.503 0 1 0-2.125-2.125l-4 4a1.5 1.5 0 0 0 0 2.125l4 4a1.503 1.503 0 0 0 2.125-2.125z"})})};h.forwardRef(Qx);const Jx=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M26.615 3.214a.99.99 0 0 0-.857-.183l-16 4a1 1 0 0 0-.758.97v13.762a4.5 4.5 0 1 0 2 3.737V13.781l14-3.5v7.482a4.5 4.5 0 1 0 2 3.737V4a1 1 0 0 0-.385-.786"})})};h.forwardRef(Jx);const Px=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H14.5a1.5 1.5 0 1 1 0-3H27a1.5 1.5 0 0 1 1.5 1.5m-14-6.5H27a1.5 1.5 0 0 0 0-3H14.5a1.5 1.5 0 0 0 0 3m12.5 13H14.5a1.5 1.5 0 1 0 0 3H27a1.5 1.5 0 1 0 0-3M5.5 7.414V13a1.5 1.5 0 0 0 3 0V5a1.5 1.5 0 0 0-2.17-1.341l-2 1a1.5 1.5 0 0 0 1.17 2.75zm4.966 12.107a3.46 3.46 0 0 0-1.4-2.329 3.61 3.61 0 0 0-4.954.683 3.5 3.5 0 0 0-.52.942 1.5 1.5 0 0 0 2.818 1.027.5.5 0 0 1 .072-.125.6.6 0 0 1 .813-.103.48.48 0 0 1 .201.325.45.45 0 0 1-.096.347l-.016.02-3.585 4.794A1.5 1.5 0 0 0 5 27.5h4a1.5 1.5 0 1 0 0-3H8l1.785-2.389a3.43 3.43 0 0 0 .681-2.59"})})};h.forwardRef(Px);const ev=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{fillRule:"evenodd",d:"M17.2 8.254a4 4 0 1 1 1.082 1.682l-7.482 4.81q.04.125.074.254h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1H10.874q-.033.128-.075.254l7.484 4.81a4 4 0 1 1-1.082 1.682l-7.484-4.81a4 4 0 1 1 0-5.871zM21 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4m2-11a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4",clipRule:"evenodd"})})};h.forwardRef(ev);const tv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{fillRule:"evenodd",d:"M10.874 17A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1zM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m18 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};h.forwardRef(tv);const nv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{fillRule:"evenodd",d:"M28.924 16.384c-.05.12-.124.231-.217.324l-4 4a1 1 0 0 1-1.632-.324 1 1 0 0 1 .217-1.09L25.585 17H10.875A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h14.712l-2.294-2.293a1 1 0 0 1 1.415-1.415l4 4a1 1 0 0 1 .217 1.09M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};h.forwardRef(nv);const rv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M29 4a1 1 0 0 0-1-1c-5.51 0-11.164 6.214-14.304 10.329A7.5 7.5 0 0 0 4 20.5c0 3.86-2.443 5.591-2.559 5.671A1 1 0 0 0 2 28h9.5a7.5 7.5 0 0 0 7.171-9.696C22.788 15.164 29 9.51 29 4M15.553 14.194a48 48 0 0 1 1.26-1.569 9.5 9.5 0 0 1 2.562 2.561q-.738.618-1.569 1.262a7.6 7.6 0 0 0-2.254-2.254m5.337-.335a11.6 11.6 0 0 0-2.75-2.75c3.973-4.316 6.969-5.625 8.738-5.989-.357 1.77-1.672 4.766-5.988 8.739"})})};h.forwardRef(rv);const ov=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M31 13v6.25a2.01 2.01 0 0 1-1.45 1.922L17 24.75V29a1 1 0 0 1-2 0v-4.25a2.01 2.01 0 0 1 1.45-1.922L29 19.25V13h-2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3H2a1 1 0 0 1 0-2h2V8a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v3h2a2 2 0 0 1 2 2"})})};h.forwardRef(ov);const iv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M25.096 6.736A12.9 12.9 0 0 0 16 3h-.134A13 13 0 0 0 3 16c0 5.375 3.323 9.883 8.67 11.771A4 4 0 0 0 17 24a2 2 0 0 1 2-2h5.776a3.976 3.976 0 0 0 3.9-3.11c.224-.984.332-1.99.324-3a12.9 12.9 0 0 0-3.904-9.154M10.5 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(iv);const av=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.925 5.543v.018L21.65 29.554A1.985 1.985 0 0 1 19.728 31a1.98 1.98 0 0 1-1.803-1.144l-4.464-9.423a.5.5 0 0 1 .099-.568l7.158-7.159a1 1 0 0 0-1.414-1.413l-7.169 7.157a.5.5 0 0 1-.567.099l-9.376-4.441A2.05 2.05 0 0 1 1 12.17a1.99 1.99 0 0 1 1.446-1.815L26.44 3.08h.018a2 2 0 0 1 2.468 2.463"})})};h.forwardRef(av);const sv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m26.56 17.061-10.257 10.25a7.501 7.501 0 0 1-10.607-10.61l12.27-12.236a5 5 0 0 1 7.07 7.074l-.021.02L13.04 23.086a1.503 1.503 0 0 1-2.121-.041 1.5 1.5 0 0 1 .041-2.121L22.924 9.409a2 2 0 1 0-2.838-2.82L7.816 18.82a4.5 4.5 0 1 0 6.366 6.364l10.258-10.25a1.503 1.503 0 0 1 2.125 2.125z"})})};h.forwardRef(sv);const lv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 14.5h16a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m22 2H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3m-6 5H5a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(lv);const cv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m28.414 9.171-5.585-5.586a2 2 0 0 0-2.829 0L4.586 19A1.98 1.98 0 0 0 4 20.414V26a2 2 0 0 0 2 2h5.586A1.98 1.98 0 0 0 13 27.414L28.414 12a2 2 0 0 0 0-2.829M24 13.585 18.414 8l3-3L27 10.585z"})})};h.forwardRef(cv);const uv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.985 21.885A7.03 7.03 0 0 1 22 28c-9.925 0-18-8.075-18-18a7.03 7.03 0 0 1 6.115-6.985 2 2 0 0 1 2.078 1.19l2.64 5.894v.015a2 2 0 0 1-.16 1.886 1 1 0 0 1-.07.096L12 15.181c.936 1.903 2.926 3.875 4.854 4.814l3.042-2.589q.045-.037.094-.07a2 2 0 0 1 1.896-.175l.017.008 5.888 2.639a2 2 0 0 1 1.194 2.077"})})};h.forwardRef(uv);const dv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m29.416 13-6.683 6.706c.57 1.584.806 4.236-1.65 7.5a2 2 0 0 1-1.458.794h-.141a2 2 0 0 1-1.415-.586l-6.033-6.04-5.328 5.333a1 1 0 1 1-1.415-1.415l5.332-5.328-6.037-6.038a2 2 0 0 1 .162-2.972c3.178-2.564 6.219-2.06 7.55-1.643L19 2.587a2 2 0 0 1 2.829 0l7.586 7.585A2 2 0 0 1 29.416 13"})})};h.forwardRef(dv);const hv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 2A11.013 11.013 0 0 0 5 13c0 9.413 10 16.521 10.426 16.819a1 1 0 0 0 1.148 0C17 29.52 27 22.413 27 13A11.01 11.01 0 0 0 16 2m0 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8"})})};h.forwardRef(hv);const fv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M30 17v4a1 1 0 0 1-1.196.98L19.5 20.125v2.966l2.207 2.206A1 1 0 0 1 22 26v3a1 1 0 0 1-1.375.929L16 28.078l-4.625 1.85A1 1 0 0 1 10 29v-3a1 1 0 0 1 .293-.707l2.207-2.207v-2.961L3.196 21.98A1 1 0 0 1 2 21v-4a1 1 0 0 1 .553-.895l9.947-4.972V5.5a3.5 3.5 0 1 1 7 0v5.633l9.948 4.972A1 1 0 0 1 30 17"})})};h.forwardRef(fv);const gv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M25.676 18.884a7.6 7.6 0 0 1-3.978 1.107 9 9 0 0 1-3.42-.707A6.94 6.94 0 0 0 17 23.314V27a1 1 0 0 1-1.066 1A1.023 1.023 0 0 1 15 26.969v-1.555l-4.828-4.828A6.6 6.6 0 0 1 7.93 21a5.73 5.73 0 0 1-2.99-.834C2.216 18.511.75 14.702 1.034 9.974a1 1 0 0 1 .94-.94c4.728-.28 8.537 1.182 10.187 3.906a5.75 5.75 0 0 1 .806 3.56.5.5 0 0 1-.86.304l-2.4-2.513a1 1 0 0 0-1.415 1.414l6.736 6.906q.01-.146.026-.291a8.57 8.57 0 0 1 2.33-4.933l6.323-6.682a1 1 0 0 0-1.413-1.415l-6.125 6.477a.5.5 0 0 1-.848-.217c-.592-2.185-.331-4.36.8-6.228 2.233-3.685 7.428-5.657 13.898-5.277a1 1 0 0 1 .94.94c.375 6.471-1.598 11.666-5.283 13.899"})})};h.forwardRef(gv);const mv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M30 16a1.97 1.97 0 0 1-.95 1.689L11.04 28.706a2 2 0 0 1-2.767-.688A2 2 0 0 1 8 27.016V4.984a1.98 1.98 0 0 1 1.015-1.728 2 2 0 0 1 2.025.038L29.05 14.31A1.97 1.97 0 0 1 30 16"})})};h.forwardRef(mv);const wv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-9.5V27a1.5 1.5 0 1 1-3 0v-9.5H5a1.5 1.5 0 1 1 0-3h9.5V5a1.5 1.5 0 1 1 3 0v9.5H27a1.5 1.5 0 0 1 1.5 1.5"})})};h.forwardRef(wv);const xv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.016 13.016 0 0 0 16 3m5 14h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2"})})};h.forwardRef(xv);const vv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 5H17V3a1 1 0 0 0-2 0v2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h4.92l-2.701 3.375a1 1 0 0 0 1.562 1.25L12.48 24h7.04l3.699 4.625a1 1 0 1 0 1.562-1.25L22.08 24H27a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 18a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0z"})})};h.forwardRef(vv);const pv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M30.414 17 18 4.586A1.98 1.98 0 0 0 16.586 4H5a1 1 0 0 0-1 1v11.586A1.98 1.98 0 0 0 4.586 18L17 30.414a2 2 0 0 0 2.829 0l10.585-10.585a2 2 0 0 0 0-2.829M10.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(pv);const bv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M20.723 28H26a2 2 0 0 0 2-2v-4.706a1 1 0 0 0-1.383-.919 2.9 2.9 0 0 1-1.117.221c-1.654 0-3-1.387-3-3.091s1.346-3.091 3-3.091c.383 0 .763.075 1.117.221A1 1 0 0 0 28 13.706V9a2 2 0 0 0-2-2h-4.527a4.5 4.5 0 1 0-8.945 0H8a2 2 0 0 0-2 2v4.028a4.5 4.5 0 1 0 0 8.945V26a2 2 0 0 0 2 2h5.278"})})};h.forwardRef(bv);const Cv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M18 22.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M29.5 16A13.5 13.5 0 1 1 16 2.5 13.515 13.515 0 0 1 29.5 16m-3 0A10.5 10.5 0 1 0 16 26.5 10.51 10.51 0 0 0 26.5 16M16 8c-3.033 0-5.5 2.242-5.5 5v.5a1.5 1.5 0 1 0 3 0V13c0-1.102 1.125-2 2.5-2s2.5.898 2.5 2-1.125 2-2.5 2a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 2.966.32C19.79 17.235 21.5 15.296 21.5 13c0-2.758-2.468-5-5.5-5"})})};h.forwardRef(Cv);const $v=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M14.5 9v11a6.006 6.006 0 0 1-6 6 1 1 0 0 1 0-2 4 4 0 0 0 4-4v-1H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2M27 7h-7.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H27v1a4 4 0 0 1-4 4 1 1 0 0 0 0 2 6.006 6.006 0 0 0 6-6V9a2 2 0 0 0-2-2"})})};h.forwardRef($v);const yv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 5v23a1 1 0 0 1-2 0v-6h-6a1 1 0 0 1-1-1c.046-2.395.349-4.779.902-7.11 1.223-5.061 3.54-8.454 6.704-9.809a1 1 0 0 1 1.394.92m-12.014-.164a.999.999 0 1 0-1.972.33L13.986 11H11V5a1 1 0 0 0-2 0v6H6.014l.972-5.835a1 1 0 1 0-1.972-.329l-1 6A1 1 0 0 0 4 11a6.01 6.01 0 0 0 5 5.915V28a1 1 0 1 0 2 0V16.915A6.01 6.01 0 0 0 16 11q0-.083-.014-.164z"})})};h.forwardRef(yv);const Sv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M19 28a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m8.953-8.521-1.546 6.954a2 2 0 0 1-3.188 1.138l-3.405-2.57h-7.625L8.78 27.57a2 2 0 0 1-3.189-1.138l-1.545-6.954a2.01 2.01 0 0 1 .415-1.714l3.57-4.282c.12-1.574.482-3.12 1.072-4.584 1.612-4.043 4.5-6.579 5.671-7.481a2 2 0 0 1 2.45 0c1.167.902 4.059 3.438 5.671 7.48.59 1.465.952 3.01 1.072 4.585l3.57 4.282a2.01 2.01 0 0 1 .415 1.714m-17.404 4.25q-2.014-3.666-2.445-7.209L6 19.045 7.545 26l.022-.016zM17.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m8.5 6.545-2.104-2.525q-.428 3.535-2.445 7.211l2.982 2.25.022.017z"})})};h.forwardRef(Sv);const Rv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M19.716 14.141a1 1 0 0 1 .261-1.391l8.458-5.788a1 1 0 0 1 1.125 1.652L21.101 14.4a1 1 0 0 1-1.39-.261zm10.109 10.634a1 1 0 0 1-1.39.261L17 17.211l-5.315 3.636a4.5 4.5 0 1 1-1.125-1.65L15.229 16l-4.673-3.198a4.5 4.5 0 1 1 1.125-1.65l17.875 12.233a1 1 0 0 1 .269 1.39M9 22.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0-13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"})})};h.forwardRef(Rv);const jv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14-3.25 1.36-8.69 1.44-13.94 1.52-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57 1.36 3.27 1.44 8.69 1.52 13.94.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52 3.56 1.47 7.63 5.37 11.57 9.14 6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14 3.27-1.36 8.69-1.44 13.94-1.52 9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94 1.47-3.56 5.37-7.63 9.14-11.57 6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-52.2 6.84-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"})})};h.forwardRef(jv);const _v=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M29.061 26.939 23.125 21A11.515 11.515 0 1 0 21 23.125l5.941 5.942a1.503 1.503 0 0 0 2.125-2.125zM5.5 14a8.5 8.5 0 1 1 8.5 8.5A8.51 8.51 0 0 1 5.5 14"})})},Av=h.forwardRef(_v),Iv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M26 5H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M26 17H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(Iv);const Mv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28 7v7.346c0 11.202-9.477 14.918-11.375 15.549a1.94 1.94 0 0 1-1.25 0C13.475 29.264 4 25.548 4 14.346V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2"})})};h.forwardRef(Mv);const Tv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m30.949 7.653-6.47-3.528A1 1 0 0 0 24 4h-4a1 1 0 0 0-1 1 3 3 0 0 1-6 0 1 1 0 0 0-1-1H8a1 1 0 0 0-.48.125L1.051 7.653a1.97 1.97 0 0 0-.824 2.657l2.41 4.601A2.05 2.05 0 0 0 4.458 16H7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16h2.543a2.05 2.05 0 0 0 1.822-1.089l2.409-4.601a1.97 1.97 0 0 0-.825-2.658M4.459 14a.08.08 0 0 1-.051-.016L2.01 9.408 7 6.685V14zm23.134-.018a.07.07 0 0 1-.052.018H25V6.685l4.99 2.723z"})})};h.forwardRef(Tv);const Ev=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M12 27a2 2 0 1 1-4 0 2 2 0 0 1 4 0m11-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m5.805-16.594A1 1 0 0 0 28 8H6.04L5.026 4.45A2.01 2.01 0 0 0 3.103 3H1a1 1 0 0 0 0 2h2.103l4.522 15.824A3.01 3.01 0 0 0 10.509 23h12.014a2.99 2.99 0 0 0 2.867-2.117l3.566-11.59a1 1 0 0 0-.151-.887"})})};h.forwardRef(Ev);const Lv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M14.5 27a1.5 1.5 0 0 1-1.5 1.5H6A2.5 2.5 0 0 1 3.5 26V6A2.5 2.5 0 0 1 6 3.5h7a1.5 1.5 0 0 1 0 3H6.5v19H13a1.5 1.5 0 0 1 1.5 1.5m13.561-12.061-5-5a1.503 1.503 0 0 0-2.125 2.125l2.439 2.436H13a1.5 1.5 0 1 0 0 3h10.375l-2.44 2.439a1.503 1.503 0 0 0 2.125 2.125l5-5a1.5 1.5 0 0 0 .001-2.125"})})};h.forwardRef(Lv);const Vv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M4 10a1 1 0 0 1 1-1h4.646a3.5 3.5 0 0 1 6.708 0H27a1 1 0 1 1 0 2H16.354a3.5 3.5 0 0 1-6.708 0H5a1 1 0 0 1-1-1m23 11h-2.646a3.5 3.5 0 0 0-6.708 0H5a1 1 0 0 0 0 2h12.646a3.5 3.5 0 0 0 6.708 0H27a1 1 0 1 0 0-2"})})};h.forwardRef(Vv);const Dv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M26 18a1.97 1.97 0 0 1-1.302 1.867l-6.457 2.375-2.375 6.452a1.99 1.99 0 0 1-3.735 0L9.75 22.25l-6.452-2.375a1.99 1.99 0 0 1 0-3.735l6.456-2.375 2.375-6.451a1.99 1.99 0 0 1 3.735 0l2.375 6.456 6.451 2.375A1.97 1.97 0 0 1 26 18M19 6h2v2a1 1 0 0 0 2 0V6h2a1 1 0 1 0 0-2h-2V2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2m11 4h-1V9a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2"})})};h.forwardRef(Dv);const Ov=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M15 7v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2m10-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 17H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m12 0h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"})})};h.forwardRef(Ov);const Bv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:[l.jsx("path",{d:"M27.5 21.136 16 27.843 4.5 21.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),l.jsx("path",{d:"M27.5 15.136 16 21.843 4.5 15.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),l.jsx("path",{d:"m3.5 10.864 12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 0 0 0-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7a1 1 0 0 0 0 1.728"})]})};h.forwardRef(Bv);const Hv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m29.313 14.298-5.638 4.92 1.689 7.325a2 2 0 0 1-2.98 2.167l-6.389-3.875L9.62 28.71a2 2 0 0 1-2.98-2.168l1.686-7.317-5.638-4.928a2 2 0 0 1 1.138-3.507l7.433-.644 2.901-6.92a1.994 1.994 0 0 1 3.68 0l2.91 6.92 7.43.644a2 2 0 0 1 1.139 3.508z"})})};h.forwardRef(Hv);const zv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M29 19a4 4 0 1 0-4.991 3.875A1 1 0 0 0 24 23a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4v-5.065c3.934-.5 7-3.934 7-8.039V5a2 2 0 0 0-2-2h-2a1 1 0 1 0 0 2h2v4.896c0 3.323-2.656 6.061-5.92 6.104A6 6 0 0 1 6 10V5h2a1 1 0 0 0 0-2H6a2 2 0 0 0-2 2v5a8 8 0 0 0 7 7.936V23a6.006 6.006 0 0 0 6 6h3a6.006 6.006 0 0 0 6-6 1 1 0 0 0-.009-.125A4 4 0 0 0 29 19m-4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"})})};h.forwardRef(zv);const Nv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16"})})};h.forwardRef(Nv);const Fv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M29 12a1 1 0 0 0-.038-.275L27.17 5.45A2.01 2.01 0 0 0 25.25 4H6.75a2.01 2.01 0 0 0-1.919 1.45L3.04 11.725A1 1 0 0 0 3 12v2a5 5 0 0 0 2 4v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8a5 5 0 0 0 2-4zm-18 2a3 3 0 0 1-4.39 2.657 1 1 0 0 0-.228-.132A3 3 0 0 1 5 14v-1h6zm8 0a3 3 0 0 1-6 0v-1h6zm8 0a3 3 0 0 1-1.384 2.525q-.12.051-.225.131A3 3 0 0 1 21 14v-1h6z"})})};h.forwardRef(Fv);const kv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-3.767A5.19 5.19 0 0 1 24.5 21c0 1.806-.976 3.54-2.679 4.756C20.25 26.881 18.18 27.5 16 27.5s-4.25-.619-5.821-1.744C8.476 24.54 7.5 22.806 7.5 21a1.5 1.5 0 0 1 3 0c0 1.898 2.519 3.5 5.5 3.5s5.5-1.602 5.5-3.5c0-1.595-1.163-2.523-4.419-3.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M9.389 12.5a1.5 1.5 0 0 0 1.5-1.5c0-2 2.197-3.5 5.111-3.5 2.17 0 3.921.831 4.685 2.223a1.5 1.5 0 0 0 2.625-1.446C22.016 5.914 19.281 4.5 16 4.5c-4.625 0-8.111 2.794-8.111 6.5a1.5 1.5 0 0 0 1.5 1.5"})})};h.forwardRef(kv);const Wv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M15 5V2a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m1 3a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m-8.707.707a1 1 0 1 0 1.414-1.415l-2-2a1 1 0 1 0-1.414 1.415zm0 14.586-2 2a1 1 0 1 0 1.414 1.415l2-2a1 1 0 1 0-1.415-1.415M24 9a1 1 0 0 0 .707-.293l2-2a1 1 0 0 0-1.415-1.414l-2 2A1 1 0 0 0 24 9m.707 14.293a1 1 0 1 0-1.415 1.415l2 2a1 1 0 0 0 1.415-1.415zM6 16a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1m10 10a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m14-11h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2"})})};h.forwardRef(Wv);const Uv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 8h-8.586l4.293-4.292a1 1 0 0 0-1.415-1.415L16 7.586l-5.292-5.293a1 1 0 1 0-1.415 1.415L13.586 8H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 17h-7V10h7zm-2-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"})})};h.forwardRef(Uv);const qv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m29.978 19.625-1.5-12A3 3 0 0 0 25.5 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h5.383l4.722 9.448A1 1 0 0 0 15 30a5 5 0 0 0 5-5v-2h7a3 3 0 0 0 2.977-3.375M9 18H4V7h5z"})})};h.forwardRef(qv);const Gv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M29.25 10.015A3 3 0 0 0 27 9h-7V7a5 5 0 0 0-5-5 1 1 0 0 0-.895.553L9.383 12H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h21.5a3 3 0 0 0 2.977-2.625l1.5-12a3 3 0 0 0-.727-2.36M4 14h5v11H4z"})})};h.forwardRef(Gv);const Kv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M23 3H9a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h1l-1.8 2.4a1 1 0 0 0 1.6 1.2l2.7-3.6h7l2.7 3.6a1 1 0 0 0 1.6-1.2L22 27h1a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4M10.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5-8H7v-5h8zm6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3.5-8h-8v-5h8z"})})};h.forwardRef(Kv);const Yv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M14 21a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm0-15h-8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})})};h.forwardRef(Yv);const Zv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 16",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M15.583 3.5v4a.75.75 0 1 1-1.5 0V5.313l-4.72 4.72a.75.75 0 0 1-1.062 0l-1.968-1.97-3.97 3.968a.751.751 0 1 1-1.062-1.063l4.5-4.5a.75.75 0 0 1 1.063 0l1.969 1.97 4.188-4.188h-2.188a.75.75 0 1 1 0-1.5h4a.75.75 0 0 1 .75.75"})})};h.forwardRef(Zv);const Xv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m23.54 2.267-3.711 3.377c1.7.52 3.298 1.397 4.653 2.631 4.684 4.266 4.684 11.184 0 15.45q-5.184 4.72-16.021 6.008l3.71-3.377a12.2 12.2 0 0 1-4.653-2.63c-4.684-4.267-4.712-11.16 0-15.45q5.184-4.721 16.021-6.01m-7.54 8.4c-3.314 0-6 2.388-6 5.333s2.686 5.333 6 5.333 6-2.387 6-5.333c0-2.945-2.686-5.333-6-5.333"})})};h.forwardRef(Xv);const Qv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M25.5 28a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M16 24.5a8.51 8.51 0 0 0 8.5-8.5V7a1.5 1.5 0 1 0-3 0v9a5.5 5.5 0 0 1-11 0V7a1.5 1.5 0 1 0-3 0v9a8.51 8.51 0 0 0 8.5 8.5"})})};h.forwardRef(Qv);const Jv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-16.439-7.939L14.5 8.625V19a1.5 1.5 0 1 0 3 0V8.625l2.439 2.44a1.503 1.503 0 0 0 2.125-2.125l-5-5a1.5 1.5 0 0 0-2.125 0l-5 5a1.503 1.503 0 1 0 2.125 2.125z"})})};h.forwardRef(Jv);const Pv=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M28.866 27.5A1 1 0 0 1 28 28H4a1 1 0 0 1-.865-1.5c1.904-3.291 4.838-5.651 8.261-6.77a9 9 0 1 1 9.208 0c3.424 1.119 6.357 3.479 8.261 6.77a1 1 0 0 1 .001 1"})})};h.forwardRef(Pv);const e8=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M19.44 3.101a1 1 0 0 0-1.054.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1 1 0 0 0 20 28V4a1 1 0 0 0-.56-.899M28.414 16l2.293-2.292a1.001 1.001 0 0 0-1.415-1.415L27 14.586l-2.293-2.293a1 1 0 1 0-1.415 1.415L25.587 16l-2.293 2.293a1 1 0 0 0 1.415 1.415L27 17.414l2.293 2.294a1 1 0 0 0 1.415-1.415z"})})};h.forwardRef(e8);const t8=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M19.439 3.101a1 1 0 0 0-1.053.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1.001 1.001 0 0 0 20 28V4a1 1 0 0 0-.561-.899M9 20H4v-8h5zm15.75-7.305a5 5 0 0 1 0 6.61 1 1 0 0 1-1.5-1.322 3 3 0 0 0 0-3.966 1 1 0 0 1 1.5-1.322M31 16a10 10 0 0 1-2.546 6.668 1 1 0 0 1-1.49-1.334 8 8 0 0 0 0-10.666.998.998 0 0 1 .407-1.624 1 1 0 0 1 1.083.29A9.98 9.98 0 0 1 31 16"})})};h.forwardRef(t8);const n8=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M15 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0m11 11c-3.58 0-5.226-1.662-6.969-3.421a25 25 0 0 0-1.375-1.323C13.031 8.24 5.63 15.098 5.316 15.391a1 1 0 0 0 1.369 1.458 20.5 20.5 0 0 1 3.815-2.724c1.723-.922 3.174-1.279 4.338-1.072L8.082 28.6a1 1 0 0 0 1.835.798l4.2-9.659L18 22.515V29a1 1 0 1 0 2 0v-7a1 1 0 0 0-.419-.814l-4.65-3.321L16.61 14c.33.305.657.634 1 .98C19.381 16.774 21.586 19 26 19a1 1 0 0 0 0-2"})})};h.forwardRef(n8);const r8=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-1 7a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0zm1 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(r8);const o8=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 16",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"M3.468 10 5.9 5.786l-.14-.243a3 3 0 1 1 5.316-2.76.51.51 0 0 1-.2.65.5.5 0 0 1-.71-.233 2 2 0 1 0-3.542 1.84l.864 1.496a.5.5 0 0 1 0 .5L5.2 11a1 1 0 0 1-1.731-1m8.812-2.5h-.771l-2.31-4a1 1 0 0 0-1.731 1l2.165 3.75a.5.5 0 0 0 .432.25h2.227c1.118 0 2.06.915 2.041 2.033a2 2 0 0 1-1.98 1.967.515.515 0 0 0-.518.458.5.5 0 0 0 .5.542 3.003 3.003 0 0 0 3-3.058c-.034-1.643-1.41-2.942-3.052-2.942zm1.053 2.952c-.025-.538-.489-.952-1.027-.952H7.51a.5.5 0 0 0-.433.25l-1.01 1.75a2 2 0 1 1-3.342-2.187.51.51 0 0 0-.058-.688.5.5 0 0 0-.732.073A3 3 0 1 0 6.93 12l.289-.5h5.114a1 1 0 0 0 1-1.048"})})};h.forwardRef(o8);const i8=({fill:e="currentColor",stroke:n,...i},a)=>{const{colors:o}=j(),c=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:c,stroke:u,ref:a,...i,children:l.jsx("path",{d:"m31.316 24.949-3 1a1 1 0 0 1-1.211-.5l-3.724-7.45H13a1 1 0 0 1-1-1v-3.707A7 7 0 0 0 14 27c3.239 0 6.261-2.256 7.031-5.25a1 1 0 1 1 1.938.5C21.96 26.162 18.19 29 14 29a9 9 0 0 1-2-17.774V8.851a3.5 3.5 0 1 1 2 0V11h7a1 1 0 0 1 0 2h-7v3h10a1 1 0 0 1 .894.552l3.612 7.225 2.178-.726a1 1 0 1 1 .632 1.898"})})};h.forwardRef(i8);var Ko={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ko.exports;(function(e,n){(function(){var i,a="4.17.21",o=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",m="Invalid `variable` option passed into `_.template`",x="__lodash_hash_undefined__",C=500,p="__lodash_placeholder__",y=1,b=2,R=4,_=1,I=2,E=1,V=2,M=4,k=8,F=16,W=32,H=64,N=128,Y=256,te=512,ne=30,Re="...",re=800,de=16,he=1,Ee=2,Ve=3,Q=1/0,ae=9007199254740991,je=17976931348623157e292,_e=NaN,we=4294967295,Pe=we-1,be=we>>>1,Ge=[["ary",N],["bind",E],["bindKey",V],["curry",k],["curryRight",F],["flip",te],["partial",W],["partialRight",H],["rearg",Y]],Me="[object Arguments]",Ke="[object Array]",X="[object AsyncFunction]",fe="[object Boolean]",Ae="[object Date]",$e="[object DOMException]",xe="[object Error]",ye="[object Function]",Ye="[object GeneratorFunction]",ge="[object Map]",Se="[object Number]",ht="[object Null]",Ze="[object Object]",Yr="[object Promise]",ai="[object Proxy]",sn="[object RegExp]",pt="[object Set]",ln="[object String]",cn="[object Symbol]",qn="[object Undefined]",Sn="[object WeakMap]",xr="[object WeakSet]",Rn="[object ArrayBuffer]",un="[object DataView]",Zr="[object Float32Array]",Gn="[object Float64Array]",Xr="[object Int8Array]",Qr="[object Int16Array]",vr="[object Int32Array]",jn="[object Uint8Array]",tt="[object Uint8ClampedArray]",si="[object Uint16Array]",li="[object Uint32Array]",m2=/\b__p \+= '';/g,w2=/\b(__p \+=) '' \+/g,x2=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ja=/&(?:amp|lt|gt|quot|#39);/g,_a=/[&<>"']/g,v2=RegExp(ja.source),p2=RegExp(_a.source),b2=/<%-([\s\S]+?)%>/g,C2=/<%([\s\S]+?)%>/g,Aa=/<%=([\s\S]+?)%>/g,$2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,y2=/^\w*$/,S2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ci=/[\\^$.*+?()[\]{}|]/g,R2=RegExp(ci.source),ui=/^\s+/,j2=/\s/,_2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,A2=/\{\n\/\* \[wrapped with (.+)\] \*/,I2=/,? & /,M2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,T2=/[()=,{}\[\]\/\s]/,E2=/\\(\\)?/g,L2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ia=/\w*$/,V2=/^[-+]0x[0-9a-f]+$/i,D2=/^0b[01]+$/i,O2=/^\[object .+?Constructor\]$/,B2=/^0o[0-7]+$/i,H2=/^(?:0|[1-9]\d*)$/,z2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Jr=/($^)/,N2=/['\n\r\u2028\u2029\\]/g,Pr="\\ud800-\\udfff",F2="\\u0300-\\u036f",k2="\\ufe20-\\ufe2f",W2="\\u20d0-\\u20ff",Ma=F2+k2+W2,Ta="\\u2700-\\u27bf",Ea="a-z\\xdf-\\xf6\\xf8-\\xff",U2="\\xac\\xb1\\xd7\\xf7",q2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",G2="\\u2000-\\u206f",K2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",La="A-Z\\xc0-\\xd6\\xd8-\\xde",Va="\\ufe0e\\ufe0f",Da=U2+q2+G2+K2,di="['’]",Y2="["+Pr+"]",Oa="["+Da+"]",eo="["+Ma+"]",Ba="\\d+",Z2="["+Ta+"]",Ha="["+Ea+"]",za="[^"+Pr+Da+Ba+Ta+Ea+La+"]",hi="\\ud83c[\\udffb-\\udfff]",X2="(?:"+eo+"|"+hi+")",Na="[^"+Pr+"]",fi="(?:\\ud83c[\\udde6-\\uddff]){2}",gi="[\\ud800-\\udbff][\\udc00-\\udfff]",Kn="["+La+"]",Fa="\\u200d",ka="(?:"+Ha+"|"+za+")",Q2="(?:"+Kn+"|"+za+")",Wa="(?:"+di+"(?:d|ll|m|re|s|t|ve))?",Ua="(?:"+di+"(?:D|LL|M|RE|S|T|VE))?",qa=X2+"?",Ga="["+Va+"]?",J2="(?:"+Fa+"(?:"+[Na,fi,gi].join("|")+")"+Ga+qa+")*",P2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",eu="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ka=Ga+qa+J2,tu="(?:"+[Z2,fi,gi].join("|")+")"+Ka,nu="(?:"+[Na+eo+"?",eo,fi,gi,Y2].join("|")+")",ru=RegExp(di,"g"),ou=RegExp(eo,"g"),mi=RegExp(hi+"(?="+hi+")|"+nu+Ka,"g"),iu=RegExp([Kn+"?"+Ha+"+"+Wa+"(?="+[Oa,Kn,"$"].join("|")+")",Q2+"+"+Ua+"(?="+[Oa,Kn+ka,"$"].join("|")+")",Kn+"?"+ka+"+"+Wa,Kn+"+"+Ua,eu,P2,Ba,tu].join("|"),"g"),au=RegExp("["+Fa+Pr+Ma+Va+"]"),su=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,lu=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],cu=-1,Be={};Be[Zr]=Be[Gn]=Be[Xr]=Be[Qr]=Be[vr]=Be[jn]=Be[tt]=Be[si]=Be[li]=!0,Be[Me]=Be[Ke]=Be[Rn]=Be[fe]=Be[un]=Be[Ae]=Be[xe]=Be[ye]=Be[ge]=Be[Se]=Be[Ze]=Be[sn]=Be[pt]=Be[ln]=Be[Sn]=!1;var Oe={};Oe[Me]=Oe[Ke]=Oe[Rn]=Oe[un]=Oe[fe]=Oe[Ae]=Oe[Zr]=Oe[Gn]=Oe[Xr]=Oe[Qr]=Oe[vr]=Oe[ge]=Oe[Se]=Oe[Ze]=Oe[sn]=Oe[pt]=Oe[ln]=Oe[cn]=Oe[jn]=Oe[tt]=Oe[si]=Oe[li]=!0,Oe[xe]=Oe[ye]=Oe[Sn]=!1;var uu={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},du={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hu={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},fu={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},gu=parseFloat,mu=parseInt,Ya=typeof Vr=="object"&&Vr&&Vr.Object===Object&&Vr,wu=typeof self=="object"&&self&&self.Object===Object&&self,nt=Ya||wu||Function("return this")(),wi=n&&!n.nodeType&&n,_n=wi&&!0&&e&&!e.nodeType&&e,Za=_n&&_n.exports===wi,xi=Za&&Ya.process,_t=function(){try{var S=_n&&_n.require&&_n.require("util").types;return S||xi&&xi.binding&&xi.binding("util")}catch{}}(),Xa=_t&&_t.isArrayBuffer,Qa=_t&&_t.isDate,Ja=_t&&_t.isMap,Pa=_t&&_t.isRegExp,es=_t&&_t.isSet,ts=_t&&_t.isTypedArray;function bt(S,D,L){switch(L.length){case 0:return S.call(D);case 1:return S.call(D,L[0]);case 2:return S.call(D,L[0],L[1]);case 3:return S.call(D,L[0],L[1],L[2])}return S.apply(D,L)}function xu(S,D,L,q){for(var ie=-1,Ie=S==null?0:S.length;++ie<Ie;){var Xe=S[ie];D(q,Xe,L(Xe),S)}return q}function At(S,D){for(var L=-1,q=S==null?0:S.length;++L<q&&D(S[L],L,S)!==!1;);return S}function vu(S,D){for(var L=S==null?0:S.length;L--&&D(S[L],L,S)!==!1;);return S}function ns(S,D){for(var L=-1,q=S==null?0:S.length;++L<q;)if(!D(S[L],L,S))return!1;return!0}function dn(S,D){for(var L=-1,q=S==null?0:S.length,ie=0,Ie=[];++L<q;){var Xe=S[L];D(Xe,L,S)&&(Ie[ie++]=Xe)}return Ie}function to(S,D){var L=S==null?0:S.length;return!!L&&Yn(S,D,0)>-1}function vi(S,D,L){for(var q=-1,ie=S==null?0:S.length;++q<ie;)if(L(D,S[q]))return!0;return!1}function ze(S,D){for(var L=-1,q=S==null?0:S.length,ie=Array(q);++L<q;)ie[L]=D(S[L],L,S);return ie}function hn(S,D){for(var L=-1,q=D.length,ie=S.length;++L<q;)S[ie+L]=D[L];return S}function pi(S,D,L,q){var ie=-1,Ie=S==null?0:S.length;for(q&&Ie&&(L=S[++ie]);++ie<Ie;)L=D(L,S[ie],ie,S);return L}function pu(S,D,L,q){var ie=S==null?0:S.length;for(q&&ie&&(L=S[--ie]);ie--;)L=D(L,S[ie],ie,S);return L}function bi(S,D){for(var L=-1,q=S==null?0:S.length;++L<q;)if(D(S[L],L,S))return!0;return!1}var bu=Ci("length");function Cu(S){return S.split("")}function $u(S){return S.match(M2)||[]}function rs(S,D,L){var q;return L(S,function(ie,Ie,Xe){if(D(ie,Ie,Xe))return q=Ie,!1}),q}function no(S,D,L,q){for(var ie=S.length,Ie=L+(q?1:-1);q?Ie--:++Ie<ie;)if(D(S[Ie],Ie,S))return Ie;return-1}function Yn(S,D,L){return D===D?Vu(S,D,L):no(S,os,L)}function yu(S,D,L,q){for(var ie=L-1,Ie=S.length;++ie<Ie;)if(q(S[ie],D))return ie;return-1}function os(S){return S!==S}function is(S,D){var L=S==null?0:S.length;return L?yi(S,D)/L:_e}function Ci(S){return function(D){return D==null?i:D[S]}}function $i(S){return function(D){return S==null?i:S[D]}}function as(S,D,L,q,ie){return ie(S,function(Ie,Xe,De){L=q?(q=!1,Ie):D(L,Ie,Xe,De)}),L}function Su(S,D){var L=S.length;for(S.sort(D);L--;)S[L]=S[L].value;return S}function yi(S,D){for(var L,q=-1,ie=S.length;++q<ie;){var Ie=D(S[q]);Ie!==i&&(L=L===i?Ie:L+Ie)}return L}function Si(S,D){for(var L=-1,q=Array(S);++L<S;)q[L]=D(L);return q}function Ru(S,D){return ze(D,function(L){return[L,S[L]]})}function ss(S){return S&&S.slice(0,ds(S)+1).replace(ui,"")}function Ct(S){return function(D){return S(D)}}function Ri(S,D){return ze(D,function(L){return S[L]})}function pr(S,D){return S.has(D)}function ls(S,D){for(var L=-1,q=S.length;++L<q&&Yn(D,S[L],0)>-1;);return L}function cs(S,D){for(var L=S.length;L--&&Yn(D,S[L],0)>-1;);return L}function ju(S,D){for(var L=S.length,q=0;L--;)S[L]===D&&++q;return q}var _u=$i(uu),Au=$i(du);function Iu(S){return"\\"+fu[S]}function Mu(S,D){return S==null?i:S[D]}function Zn(S){return au.test(S)}function Tu(S){return su.test(S)}function Eu(S){for(var D,L=[];!(D=S.next()).done;)L.push(D.value);return L}function ji(S){var D=-1,L=Array(S.size);return S.forEach(function(q,ie){L[++D]=[ie,q]}),L}function us(S,D){return function(L){return S(D(L))}}function fn(S,D){for(var L=-1,q=S.length,ie=0,Ie=[];++L<q;){var Xe=S[L];(Xe===D||Xe===p)&&(S[L]=p,Ie[ie++]=L)}return Ie}function ro(S){var D=-1,L=Array(S.size);return S.forEach(function(q){L[++D]=q}),L}function Lu(S){var D=-1,L=Array(S.size);return S.forEach(function(q){L[++D]=[q,q]}),L}function Vu(S,D,L){for(var q=L-1,ie=S.length;++q<ie;)if(S[q]===D)return q;return-1}function Du(S,D,L){for(var q=L+1;q--;)if(S[q]===D)return q;return q}function Xn(S){return Zn(S)?Bu(S):bu(S)}function Dt(S){return Zn(S)?Hu(S):Cu(S)}function ds(S){for(var D=S.length;D--&&j2.test(S.charAt(D)););return D}var Ou=$i(hu);function Bu(S){for(var D=mi.lastIndex=0;mi.test(S);)++D;return D}function Hu(S){return S.match(mi)||[]}function zu(S){return S.match(iu)||[]}var Nu=function S(D){D=D==null?nt:Qn.defaults(nt.Object(),D,Qn.pick(nt,lu));var L=D.Array,q=D.Date,ie=D.Error,Ie=D.Function,Xe=D.Math,De=D.Object,_i=D.RegExp,Fu=D.String,It=D.TypeError,oo=L.prototype,ku=Ie.prototype,Jn=De.prototype,io=D["__core-js_shared__"],ao=ku.toString,Le=Jn.hasOwnProperty,Wu=0,hs=function(){var t=/[^.]+$/.exec(io&&io.keys&&io.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),so=Jn.toString,Uu=ao.call(De),qu=nt._,Gu=_i("^"+ao.call(Le).replace(ci,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),lo=Za?D.Buffer:i,gn=D.Symbol,co=D.Uint8Array,fs=lo?lo.allocUnsafe:i,uo=us(De.getPrototypeOf,De),gs=De.create,ms=Jn.propertyIsEnumerable,ho=oo.splice,ws=gn?gn.isConcatSpreadable:i,br=gn?gn.iterator:i,An=gn?gn.toStringTag:i,fo=function(){try{var t=Ln(De,"defineProperty");return t({},"",{}),t}catch{}}(),Ku=D.clearTimeout!==nt.clearTimeout&&D.clearTimeout,Yu=q&&q.now!==nt.Date.now&&q.now,Zu=D.setTimeout!==nt.setTimeout&&D.setTimeout,go=Xe.ceil,mo=Xe.floor,Ai=De.getOwnPropertySymbols,Xu=lo?lo.isBuffer:i,xs=D.isFinite,Qu=oo.join,Ju=us(De.keys,De),Qe=Xe.max,ot=Xe.min,Pu=q.now,ed=D.parseInt,vs=Xe.random,td=oo.reverse,Ii=Ln(D,"DataView"),Cr=Ln(D,"Map"),Mi=Ln(D,"Promise"),Pn=Ln(D,"Set"),$r=Ln(D,"WeakMap"),yr=Ln(De,"create"),wo=$r&&new $r,er={},nd=Vn(Ii),rd=Vn(Cr),od=Vn(Mi),id=Vn(Pn),ad=Vn($r),xo=gn?gn.prototype:i,Sr=xo?xo.valueOf:i,ps=xo?xo.toString:i;function g(t){if(Fe(t)&&!se(t)&&!(t instanceof pe)){if(t instanceof Mt)return t;if(Le.call(t,"__wrapped__"))return b1(t)}return new Mt(t)}var tr=function(){function t(){}return function(r){if(!Ne(r))return{};if(gs)return gs(r);t.prototype=r;var s=new t;return t.prototype=i,s}}();function vo(){}function Mt(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=i}g.templateSettings={escape:b2,evaluate:C2,interpolate:Aa,variable:"",imports:{_:g}},g.prototype=vo.prototype,g.prototype.constructor=g,Mt.prototype=tr(vo.prototype),Mt.prototype.constructor=Mt;function pe(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=we,this.__views__=[]}function sd(){var t=new pe(this.__wrapped__);return t.__actions__=ft(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=ft(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=ft(this.__views__),t}function ld(){if(this.__filtered__){var t=new pe(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function cd(){var t=this.__wrapped__.value(),r=this.__dir__,s=se(t),d=r<0,f=s?t.length:0,w=Ch(0,f,this.__views__),v=w.start,$=w.end,A=$-v,O=d?$:v-1,B=this.__iteratees__,z=B.length,U=0,K=ot(A,this.__takeCount__);if(!s||!d&&f==A&&K==A)return Ws(t,this.__actions__);var P=[];e:for(;A--&&U<K;){O+=r;for(var ue=-1,ee=t[O];++ue<z;){var ve=B[ue],Ce=ve.iteratee,St=ve.type,ut=Ce(ee);if(St==Ee)ee=ut;else if(!ut){if(St==he)continue e;break e}}P[U++]=ee}return P}pe.prototype=tr(vo.prototype),pe.prototype.constructor=pe;function In(t){var r=-1,s=t==null?0:t.length;for(this.clear();++r<s;){var d=t[r];this.set(d[0],d[1])}}function ud(){this.__data__=yr?yr(null):{},this.size=0}function dd(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}function hd(t){var r=this.__data__;if(yr){var s=r[t];return s===x?i:s}return Le.call(r,t)?r[t]:i}function fd(t){var r=this.__data__;return yr?r[t]!==i:Le.call(r,t)}function gd(t,r){var s=this.__data__;return this.size+=this.has(t)?0:1,s[t]=yr&&r===i?x:r,this}In.prototype.clear=ud,In.prototype.delete=dd,In.prototype.get=hd,In.prototype.has=fd,In.prototype.set=gd;function Yt(t){var r=-1,s=t==null?0:t.length;for(this.clear();++r<s;){var d=t[r];this.set(d[0],d[1])}}function md(){this.__data__=[],this.size=0}function wd(t){var r=this.__data__,s=po(r,t);if(s<0)return!1;var d=r.length-1;return s==d?r.pop():ho.call(r,s,1),--this.size,!0}function xd(t){var r=this.__data__,s=po(r,t);return s<0?i:r[s][1]}function vd(t){return po(this.__data__,t)>-1}function pd(t,r){var s=this.__data__,d=po(s,t);return d<0?(++this.size,s.push([t,r])):s[d][1]=r,this}Yt.prototype.clear=md,Yt.prototype.delete=wd,Yt.prototype.get=xd,Yt.prototype.has=vd,Yt.prototype.set=pd;function Zt(t){var r=-1,s=t==null?0:t.length;for(this.clear();++r<s;){var d=t[r];this.set(d[0],d[1])}}function bd(){this.size=0,this.__data__={hash:new In,map:new(Cr||Yt),string:new In}}function Cd(t){var r=To(this,t).delete(t);return this.size-=r?1:0,r}function $d(t){return To(this,t).get(t)}function yd(t){return To(this,t).has(t)}function Sd(t,r){var s=To(this,t),d=s.size;return s.set(t,r),this.size+=s.size==d?0:1,this}Zt.prototype.clear=bd,Zt.prototype.delete=Cd,Zt.prototype.get=$d,Zt.prototype.has=yd,Zt.prototype.set=Sd;function Mn(t){var r=-1,s=t==null?0:t.length;for(this.__data__=new Zt;++r<s;)this.add(t[r])}function Rd(t){return this.__data__.set(t,x),this}function jd(t){return this.__data__.has(t)}Mn.prototype.add=Mn.prototype.push=Rd,Mn.prototype.has=jd;function Ot(t){var r=this.__data__=new Yt(t);this.size=r.size}function _d(){this.__data__=new Yt,this.size=0}function Ad(t){var r=this.__data__,s=r.delete(t);return this.size=r.size,s}function Id(t){return this.__data__.get(t)}function Md(t){return this.__data__.has(t)}function Td(t,r){var s=this.__data__;if(s instanceof Yt){var d=s.__data__;if(!Cr||d.length<o-1)return d.push([t,r]),this.size=++s.size,this;s=this.__data__=new Zt(d)}return s.set(t,r),this.size=s.size,this}Ot.prototype.clear=_d,Ot.prototype.delete=Ad,Ot.prototype.get=Id,Ot.prototype.has=Md,Ot.prototype.set=Td;function bs(t,r){var s=se(t),d=!s&&Dn(t),f=!s&&!d&&pn(t),w=!s&&!d&&!f&&ir(t),v=s||d||f||w,$=v?Si(t.length,Fu):[],A=$.length;for(var O in t)(r||Le.call(t,O))&&!(v&&(O=="length"||f&&(O=="offset"||O=="parent")||w&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||Pt(O,A)))&&$.push(O);return $}function Cs(t){var r=t.length;return r?t[Fi(0,r-1)]:i}function Ed(t,r){return Eo(ft(t),Tn(r,0,t.length))}function Ld(t){return Eo(ft(t))}function Ti(t,r,s){(s!==i&&!Bt(t[r],s)||s===i&&!(r in t))&&Xt(t,r,s)}function Rr(t,r,s){var d=t[r];(!(Le.call(t,r)&&Bt(d,s))||s===i&&!(r in t))&&Xt(t,r,s)}function po(t,r){for(var s=t.length;s--;)if(Bt(t[s][0],r))return s;return-1}function Vd(t,r,s,d){return mn(t,function(f,w,v){r(d,f,s(f),v)}),d}function $s(t,r){return t&&Ut(r,et(r),t)}function Dd(t,r){return t&&Ut(r,mt(r),t)}function Xt(t,r,s){r=="__proto__"&&fo?fo(t,r,{configurable:!0,enumerable:!0,value:s,writable:!0}):t[r]=s}function Ei(t,r){for(var s=-1,d=r.length,f=L(d),w=t==null;++s<d;)f[s]=w?i:h0(t,r[s]);return f}function Tn(t,r,s){return t===t&&(s!==i&&(t=t<=s?t:s),r!==i&&(t=t>=r?t:r)),t}function Tt(t,r,s,d,f,w){var v,$=r&y,A=r&b,O=r&R;if(s&&(v=f?s(t,d,f,w):s(t)),v!==i)return v;if(!Ne(t))return t;var B=se(t);if(B){if(v=yh(t),!$)return ft(t,v)}else{var z=it(t),U=z==ye||z==Ye;if(pn(t))return Gs(t,$);if(z==Ze||z==Me||U&&!f){if(v=A||U?{}:d1(t),!$)return A?hh(t,Dd(v,t)):dh(t,$s(v,t))}else{if(!Oe[z])return f?t:{};v=Sh(t,z,$)}}w||(w=new Ot);var K=w.get(t);if(K)return K;w.set(t,v),N1(t)?t.forEach(function(ee){v.add(Tt(ee,r,s,ee,t,w))}):H1(t)&&t.forEach(function(ee,ve){v.set(ve,Tt(ee,r,s,ve,t,w))});var P=O?A?Ji:Qi:A?mt:et,ue=B?i:P(t);return At(ue||t,function(ee,ve){ue&&(ve=ee,ee=t[ve]),Rr(v,ve,Tt(ee,r,s,ve,t,w))}),v}function Od(t){var r=et(t);return function(s){return ys(s,t,r)}}function ys(t,r,s){var d=s.length;if(t==null)return!d;for(t=De(t);d--;){var f=s[d],w=r[f],v=t[f];if(v===i&&!(f in t)||!w(v))return!1}return!0}function Ss(t,r,s){if(typeof t!="function")throw new It(u);return Er(function(){t.apply(i,s)},r)}function jr(t,r,s,d){var f=-1,w=to,v=!0,$=t.length,A=[],O=r.length;if(!$)return A;s&&(r=ze(r,Ct(s))),d?(w=vi,v=!1):r.length>=o&&(w=pr,v=!1,r=new Mn(r));e:for(;++f<$;){var B=t[f],z=s==null?B:s(B);if(B=d||B!==0?B:0,v&&z===z){for(var U=O;U--;)if(r[U]===z)continue e;A.push(B)}else w(r,z,d)||A.push(B)}return A}var mn=Qs(Wt),Rs=Qs(Vi,!0);function Bd(t,r){var s=!0;return mn(t,function(d,f,w){return s=!!r(d,f,w),s}),s}function bo(t,r,s){for(var d=-1,f=t.length;++d<f;){var w=t[d],v=r(w);if(v!=null&&($===i?v===v&&!yt(v):s(v,$)))var $=v,A=w}return A}function Hd(t,r,s,d){var f=t.length;for(s=ce(s),s<0&&(s=-s>f?0:f+s),d=d===i||d>f?f:ce(d),d<0&&(d+=f),d=s>d?0:k1(d);s<d;)t[s++]=r;return t}function js(t,r){var s=[];return mn(t,function(d,f,w){r(d,f,w)&&s.push(d)}),s}function rt(t,r,s,d,f){var w=-1,v=t.length;for(s||(s=jh),f||(f=[]);++w<v;){var $=t[w];r>0&&s($)?r>1?rt($,r-1,s,d,f):hn(f,$):d||(f[f.length]=$)}return f}var Li=Js(),_s=Js(!0);function Wt(t,r){return t&&Li(t,r,et)}function Vi(t,r){return t&&_s(t,r,et)}function Co(t,r){return dn(r,function(s){return en(t[s])})}function En(t,r){r=xn(r,t);for(var s=0,d=r.length;t!=null&&s<d;)t=t[qt(r[s++])];return s&&s==d?t:i}function As(t,r,s){var d=r(t);return se(t)?d:hn(d,s(t))}function lt(t){return t==null?t===i?qn:ht:An&&An in De(t)?bh(t):Lh(t)}function Di(t,r){return t>r}function zd(t,r){return t!=null&&Le.call(t,r)}function Nd(t,r){return t!=null&&r in De(t)}function Fd(t,r,s){return t>=ot(r,s)&&t<Qe(r,s)}function Oi(t,r,s){for(var d=s?vi:to,f=t[0].length,w=t.length,v=w,$=L(w),A=1/0,O=[];v--;){var B=t[v];v&&r&&(B=ze(B,Ct(r))),A=ot(B.length,A),$[v]=!s&&(r||f>=120&&B.length>=120)?new Mn(v&&B):i}B=t[0];var z=-1,U=$[0];e:for(;++z<f&&O.length<A;){var K=B[z],P=r?r(K):K;if(K=s||K!==0?K:0,!(U?pr(U,P):d(O,P,s))){for(v=w;--v;){var ue=$[v];if(!(ue?pr(ue,P):d(t[v],P,s)))continue e}U&&U.push(P),O.push(K)}}return O}function kd(t,r,s,d){return Wt(t,function(f,w,v){r(d,s(f),w,v)}),d}function _r(t,r,s){r=xn(r,t),t=m1(t,r);var d=t==null?t:t[qt(Lt(r))];return d==null?i:bt(d,t,s)}function Is(t){return Fe(t)&&lt(t)==Me}function Wd(t){return Fe(t)&&lt(t)==Rn}function Ud(t){return Fe(t)&&lt(t)==Ae}function Ar(t,r,s,d,f){return t===r?!0:t==null||r==null||!Fe(t)&&!Fe(r)?t!==t&&r!==r:qd(t,r,s,d,Ar,f)}function qd(t,r,s,d,f,w){var v=se(t),$=se(r),A=v?Ke:it(t),O=$?Ke:it(r);A=A==Me?Ze:A,O=O==Me?Ze:O;var B=A==Ze,z=O==Ze,U=A==O;if(U&&pn(t)){if(!pn(r))return!1;v=!0,B=!1}if(U&&!B)return w||(w=new Ot),v||ir(t)?l1(t,r,s,d,f,w):vh(t,r,A,s,d,f,w);if(!(s&_)){var K=B&&Le.call(t,"__wrapped__"),P=z&&Le.call(r,"__wrapped__");if(K||P){var ue=K?t.value():t,ee=P?r.value():r;return w||(w=new Ot),f(ue,ee,s,d,w)}}return U?(w||(w=new Ot),ph(t,r,s,d,f,w)):!1}function Gd(t){return Fe(t)&&it(t)==ge}function Bi(t,r,s,d){var f=s.length,w=f,v=!d;if(t==null)return!w;for(t=De(t);f--;){var $=s[f];if(v&&$[2]?$[1]!==t[$[0]]:!($[0]in t))return!1}for(;++f<w;){$=s[f];var A=$[0],O=t[A],B=$[1];if(v&&$[2]){if(O===i&&!(A in t))return!1}else{var z=new Ot;if(d)var U=d(O,B,A,t,r,z);if(!(U===i?Ar(B,O,_|I,d,z):U))return!1}}return!0}function Ms(t){if(!Ne(t)||Ah(t))return!1;var r=en(t)?Gu:O2;return r.test(Vn(t))}function Kd(t){return Fe(t)&&lt(t)==sn}function Yd(t){return Fe(t)&&it(t)==pt}function Zd(t){return Fe(t)&&Ho(t.length)&&!!Be[lt(t)]}function Ts(t){return typeof t=="function"?t:t==null?wt:typeof t=="object"?se(t)?Vs(t[0],t[1]):Ls(t):P1(t)}function Hi(t){if(!Tr(t))return Ju(t);var r=[];for(var s in De(t))Le.call(t,s)&&s!="constructor"&&r.push(s);return r}function Xd(t){if(!Ne(t))return Eh(t);var r=Tr(t),s=[];for(var d in t)d=="constructor"&&(r||!Le.call(t,d))||s.push(d);return s}function zi(t,r){return t<r}function Es(t,r){var s=-1,d=gt(t)?L(t.length):[];return mn(t,function(f,w,v){d[++s]=r(f,w,v)}),d}function Ls(t){var r=e0(t);return r.length==1&&r[0][2]?f1(r[0][0],r[0][1]):function(s){return s===t||Bi(s,t,r)}}function Vs(t,r){return n0(t)&&h1(r)?f1(qt(t),r):function(s){var d=h0(s,t);return d===i&&d===r?f0(s,t):Ar(r,d,_|I)}}function $o(t,r,s,d,f){t!==r&&Li(r,function(w,v){if(f||(f=new Ot),Ne(w))Qd(t,r,v,s,$o,d,f);else{var $=d?d(o0(t,v),w,v+"",t,r,f):i;$===i&&($=w),Ti(t,v,$)}},mt)}function Qd(t,r,s,d,f,w,v){var $=o0(t,s),A=o0(r,s),O=v.get(A);if(O){Ti(t,s,O);return}var B=w?w($,A,s+"",t,r,v):i,z=B===i;if(z){var U=se(A),K=!U&&pn(A),P=!U&&!K&&ir(A);B=A,U||K||P?se($)?B=$:ke($)?B=ft($):K?(z=!1,B=Gs(A,!0)):P?(z=!1,B=Ks(A,!0)):B=[]:Lr(A)||Dn(A)?(B=$,Dn($)?B=W1($):(!Ne($)||en($))&&(B=d1(A))):z=!1}z&&(v.set(A,B),f(B,A,d,w,v),v.delete(A)),Ti(t,s,B)}function Ds(t,r){var s=t.length;if(s)return r+=r<0?s:0,Pt(r,s)?t[r]:i}function Os(t,r,s){r.length?r=ze(r,function(w){return se(w)?function(v){return En(v,w.length===1?w[0]:w)}:w}):r=[wt];var d=-1;r=ze(r,Ct(J()));var f=Es(t,function(w,v,$){var A=ze(r,function(O){return O(w)});return{criteria:A,index:++d,value:w}});return Su(f,function(w,v){return uh(w,v,s)})}function Jd(t,r){return Bs(t,r,function(s,d){return f0(t,d)})}function Bs(t,r,s){for(var d=-1,f=r.length,w={};++d<f;){var v=r[d],$=En(t,v);s($,v)&&Ir(w,xn(v,t),$)}return w}function Pd(t){return function(r){return En(r,t)}}function Ni(t,r,s,d){var f=d?yu:Yn,w=-1,v=r.length,$=t;for(t===r&&(r=ft(r)),s&&($=ze(t,Ct(s)));++w<v;)for(var A=0,O=r[w],B=s?s(O):O;(A=f($,B,A,d))>-1;)$!==t&&ho.call($,A,1),ho.call(t,A,1);return t}function Hs(t,r){for(var s=t?r.length:0,d=s-1;s--;){var f=r[s];if(s==d||f!==w){var w=f;Pt(f)?ho.call(t,f,1):Ui(t,f)}}return t}function Fi(t,r){return t+mo(vs()*(r-t+1))}function eh(t,r,s,d){for(var f=-1,w=Qe(go((r-t)/(s||1)),0),v=L(w);w--;)v[d?w:++f]=t,t+=s;return v}function ki(t,r){var s="";if(!t||r<1||r>ae)return s;do r%2&&(s+=t),r=mo(r/2),r&&(t+=t);while(r);return s}function me(t,r){return i0(g1(t,r,wt),t+"")}function th(t){return Cs(ar(t))}function nh(t,r){var s=ar(t);return Eo(s,Tn(r,0,s.length))}function Ir(t,r,s,d){if(!Ne(t))return t;r=xn(r,t);for(var f=-1,w=r.length,v=w-1,$=t;$!=null&&++f<w;){var A=qt(r[f]),O=s;if(A==="__proto__"||A==="constructor"||A==="prototype")return t;if(f!=v){var B=$[A];O=d?d(B,A,$):i,O===i&&(O=Ne(B)?B:Pt(r[f+1])?[]:{})}Rr($,A,O),$=$[A]}return t}var zs=wo?function(t,r){return wo.set(t,r),t}:wt,rh=fo?function(t,r){return fo(t,"toString",{configurable:!0,enumerable:!1,value:m0(r),writable:!0})}:wt;function oh(t){return Eo(ar(t))}function Et(t,r,s){var d=-1,f=t.length;r<0&&(r=-r>f?0:f+r),s=s>f?f:s,s<0&&(s+=f),f=r>s?0:s-r>>>0,r>>>=0;for(var w=L(f);++d<f;)w[d]=t[d+r];return w}function ih(t,r){var s;return mn(t,function(d,f,w){return s=r(d,f,w),!s}),!!s}function yo(t,r,s){var d=0,f=t==null?d:t.length;if(typeof r=="number"&&r===r&&f<=be){for(;d<f;){var w=d+f>>>1,v=t[w];v!==null&&!yt(v)&&(s?v<=r:v<r)?d=w+1:f=w}return f}return Wi(t,r,wt,s)}function Wi(t,r,s,d){var f=0,w=t==null?0:t.length;if(w===0)return 0;r=s(r);for(var v=r!==r,$=r===null,A=yt(r),O=r===i;f<w;){var B=mo((f+w)/2),z=s(t[B]),U=z!==i,K=z===null,P=z===z,ue=yt(z);if(v)var ee=d||P;else O?ee=P&&(d||U):$?ee=P&&U&&(d||!K):A?ee=P&&U&&!K&&(d||!ue):K||ue?ee=!1:ee=d?z<=r:z<r;ee?f=B+1:w=B}return ot(w,Pe)}function Ns(t,r){for(var s=-1,d=t.length,f=0,w=[];++s<d;){var v=t[s],$=r?r(v):v;if(!s||!Bt($,A)){var A=$;w[f++]=v===0?0:v}}return w}function Fs(t){return typeof t=="number"?t:yt(t)?_e:+t}function $t(t){if(typeof t=="string")return t;if(se(t))return ze(t,$t)+"";if(yt(t))return ps?ps.call(t):"";var r=t+"";return r=="0"&&1/t==-Q?"-0":r}function wn(t,r,s){var d=-1,f=to,w=t.length,v=!0,$=[],A=$;if(s)v=!1,f=vi;else if(w>=o){var O=r?null:wh(t);if(O)return ro(O);v=!1,f=pr,A=new Mn}else A=r?[]:$;e:for(;++d<w;){var B=t[d],z=r?r(B):B;if(B=s||B!==0?B:0,v&&z===z){for(var U=A.length;U--;)if(A[U]===z)continue e;r&&A.push(z),$.push(B)}else f(A,z,s)||(A!==$&&A.push(z),$.push(B))}return $}function Ui(t,r){return r=xn(r,t),t=m1(t,r),t==null||delete t[qt(Lt(r))]}function ks(t,r,s,d){return Ir(t,r,s(En(t,r)),d)}function So(t,r,s,d){for(var f=t.length,w=d?f:-1;(d?w--:++w<f)&&r(t[w],w,t););return s?Et(t,d?0:w,d?w+1:f):Et(t,d?w+1:0,d?f:w)}function Ws(t,r){var s=t;return s instanceof pe&&(s=s.value()),pi(r,function(d,f){return f.func.apply(f.thisArg,hn([d],f.args))},s)}function qi(t,r,s){var d=t.length;if(d<2)return d?wn(t[0]):[];for(var f=-1,w=L(d);++f<d;)for(var v=t[f],$=-1;++$<d;)$!=f&&(w[f]=jr(w[f]||v,t[$],r,s));return wn(rt(w,1),r,s)}function Us(t,r,s){for(var d=-1,f=t.length,w=r.length,v={};++d<f;){var $=d<w?r[d]:i;s(v,t[d],$)}return v}function Gi(t){return ke(t)?t:[]}function Ki(t){return typeof t=="function"?t:wt}function xn(t,r){return se(t)?t:n0(t,r)?[t]:p1(Te(t))}var ah=me;function vn(t,r,s){var d=t.length;return s=s===i?d:s,!r&&s>=d?t:Et(t,r,s)}var qs=Ku||function(t){return nt.clearTimeout(t)};function Gs(t,r){if(r)return t.slice();var s=t.length,d=fs?fs(s):new t.constructor(s);return t.copy(d),d}function Yi(t){var r=new t.constructor(t.byteLength);return new co(r).set(new co(t)),r}function sh(t,r){var s=r?Yi(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.byteLength)}function lh(t){var r=new t.constructor(t.source,Ia.exec(t));return r.lastIndex=t.lastIndex,r}function ch(t){return Sr?De(Sr.call(t)):{}}function Ks(t,r){var s=r?Yi(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.length)}function Ys(t,r){if(t!==r){var s=t!==i,d=t===null,f=t===t,w=yt(t),v=r!==i,$=r===null,A=r===r,O=yt(r);if(!$&&!O&&!w&&t>r||w&&v&&A&&!$&&!O||d&&v&&A||!s&&A||!f)return 1;if(!d&&!w&&!O&&t<r||O&&s&&f&&!d&&!w||$&&s&&f||!v&&f||!A)return-1}return 0}function uh(t,r,s){for(var d=-1,f=t.criteria,w=r.criteria,v=f.length,$=s.length;++d<v;){var A=Ys(f[d],w[d]);if(A){if(d>=$)return A;var O=s[d];return A*(O=="desc"?-1:1)}}return t.index-r.index}function Zs(t,r,s,d){for(var f=-1,w=t.length,v=s.length,$=-1,A=r.length,O=Qe(w-v,0),B=L(A+O),z=!d;++$<A;)B[$]=r[$];for(;++f<v;)(z||f<w)&&(B[s[f]]=t[f]);for(;O--;)B[$++]=t[f++];return B}function Xs(t,r,s,d){for(var f=-1,w=t.length,v=-1,$=s.length,A=-1,O=r.length,B=Qe(w-$,0),z=L(B+O),U=!d;++f<B;)z[f]=t[f];for(var K=f;++A<O;)z[K+A]=r[A];for(;++v<$;)(U||f<w)&&(z[K+s[v]]=t[f++]);return z}function ft(t,r){var s=-1,d=t.length;for(r||(r=L(d));++s<d;)r[s]=t[s];return r}function Ut(t,r,s,d){var f=!s;s||(s={});for(var w=-1,v=r.length;++w<v;){var $=r[w],A=d?d(s[$],t[$],$,s,t):i;A===i&&(A=t[$]),f?Xt(s,$,A):Rr(s,$,A)}return s}function dh(t,r){return Ut(t,t0(t),r)}function hh(t,r){return Ut(t,c1(t),r)}function Ro(t,r){return function(s,d){var f=se(s)?xu:Vd,w=r?r():{};return f(s,t,J(d,2),w)}}function nr(t){return me(function(r,s){var d=-1,f=s.length,w=f>1?s[f-1]:i,v=f>2?s[2]:i;for(w=t.length>3&&typeof w=="function"?(f--,w):i,v&&ct(s[0],s[1],v)&&(w=f<3?i:w,f=1),r=De(r);++d<f;){var $=s[d];$&&t(r,$,d,w)}return r})}function Qs(t,r){return function(s,d){if(s==null)return s;if(!gt(s))return t(s,d);for(var f=s.length,w=r?f:-1,v=De(s);(r?w--:++w<f)&&d(v[w],w,v)!==!1;);return s}}function Js(t){return function(r,s,d){for(var f=-1,w=De(r),v=d(r),$=v.length;$--;){var A=v[t?$:++f];if(s(w[A],A,w)===!1)break}return r}}function fh(t,r,s){var d=r&E,f=Mr(t);function w(){var v=this&&this!==nt&&this instanceof w?f:t;return v.apply(d?s:this,arguments)}return w}function Ps(t){return function(r){r=Te(r);var s=Zn(r)?Dt(r):i,d=s?s[0]:r.charAt(0),f=s?vn(s,1).join(""):r.slice(1);return d[t]()+f}}function rr(t){return function(r){return pi(Q1(X1(r).replace(ru,"")),t,"")}}function Mr(t){return function(){var r=arguments;switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3]);case 5:return new t(r[0],r[1],r[2],r[3],r[4]);case 6:return new t(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new t(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var s=tr(t.prototype),d=t.apply(s,r);return Ne(d)?d:s}}function gh(t,r,s){var d=Mr(t);function f(){for(var w=arguments.length,v=L(w),$=w,A=or(f);$--;)v[$]=arguments[$];var O=w<3&&v[0]!==A&&v[w-1]!==A?[]:fn(v,A);if(w-=O.length,w<s)return o1(t,r,jo,f.placeholder,i,v,O,i,i,s-w);var B=this&&this!==nt&&this instanceof f?d:t;return bt(B,this,v)}return f}function e1(t){return function(r,s,d){var f=De(r);if(!gt(r)){var w=J(s,3);r=et(r),s=function($){return w(f[$],$,f)}}var v=t(r,s,d);return v>-1?f[w?r[v]:v]:i}}function t1(t){return Jt(function(r){var s=r.length,d=s,f=Mt.prototype.thru;for(t&&r.reverse();d--;){var w=r[d];if(typeof w!="function")throw new It(u);if(f&&!v&&Mo(w)=="wrapper")var v=new Mt([],!0)}for(d=v?d:s;++d<s;){w=r[d];var $=Mo(w),A=$=="wrapper"?Pi(w):i;A&&r0(A[0])&&A[1]==(N|k|W|Y)&&!A[4].length&&A[9]==1?v=v[Mo(A[0])].apply(v,A[3]):v=w.length==1&&r0(w)?v[$]():v.thru(w)}return function(){var O=arguments,B=O[0];if(v&&O.length==1&&se(B))return v.plant(B).value();for(var z=0,U=s?r[z].apply(this,O):B;++z<s;)U=r[z].call(this,U);return U}})}function jo(t,r,s,d,f,w,v,$,A,O){var B=r&N,z=r&E,U=r&V,K=r&(k|F),P=r&te,ue=U?i:Mr(t);function ee(){for(var ve=arguments.length,Ce=L(ve),St=ve;St--;)Ce[St]=arguments[St];if(K)var ut=or(ee),Rt=ju(Ce,ut);if(d&&(Ce=Zs(Ce,d,f,K)),w&&(Ce=Xs(Ce,w,v,K)),ve-=Rt,K&&ve<O){var We=fn(Ce,ut);return o1(t,r,jo,ee.placeholder,s,Ce,We,$,A,O-ve)}var Ht=z?s:this,nn=U?Ht[t]:t;return ve=Ce.length,$?Ce=Vh(Ce,$):P&&ve>1&&Ce.reverse(),B&&A<ve&&(Ce.length=A),this&&this!==nt&&this instanceof ee&&(nn=ue||Mr(nn)),nn.apply(Ht,Ce)}return ee}function n1(t,r){return function(s,d){return kd(s,t,r(d),{})}}function _o(t,r){return function(s,d){var f;if(s===i&&d===i)return r;if(s!==i&&(f=s),d!==i){if(f===i)return d;typeof s=="string"||typeof d=="string"?(s=$t(s),d=$t(d)):(s=Fs(s),d=Fs(d)),f=t(s,d)}return f}}function Zi(t){return Jt(function(r){return r=ze(r,Ct(J())),me(function(s){var d=this;return t(r,function(f){return bt(f,d,s)})})})}function Ao(t,r){r=r===i?" ":$t(r);var s=r.length;if(s<2)return s?ki(r,t):r;var d=ki(r,go(t/Xn(r)));return Zn(r)?vn(Dt(d),0,t).join(""):d.slice(0,t)}function mh(t,r,s,d){var f=r&E,w=Mr(t);function v(){for(var $=-1,A=arguments.length,O=-1,B=d.length,z=L(B+A),U=this&&this!==nt&&this instanceof v?w:t;++O<B;)z[O]=d[O];for(;A--;)z[O++]=arguments[++$];return bt(U,f?s:this,z)}return v}function r1(t){return function(r,s,d){return d&&typeof d!="number"&&ct(r,s,d)&&(s=d=i),r=tn(r),s===i?(s=r,r=0):s=tn(s),d=d===i?r<s?1:-1:tn(d),eh(r,s,d,t)}}function Io(t){return function(r,s){return typeof r=="string"&&typeof s=="string"||(r=Vt(r),s=Vt(s)),t(r,s)}}function o1(t,r,s,d,f,w,v,$,A,O){var B=r&k,z=B?v:i,U=B?i:v,K=B?w:i,P=B?i:w;r|=B?W:H,r&=~(B?H:W),r&M||(r&=-4);var ue=[t,r,f,K,z,P,U,$,A,O],ee=s.apply(i,ue);return r0(t)&&w1(ee,ue),ee.placeholder=d,x1(ee,t,r)}function Xi(t){var r=Xe[t];return function(s,d){if(s=Vt(s),d=d==null?0:ot(ce(d),292),d&&xs(s)){var f=(Te(s)+"e").split("e"),w=r(f[0]+"e"+(+f[1]+d));return f=(Te(w)+"e").split("e"),+(f[0]+"e"+(+f[1]-d))}return r(s)}}var wh=Pn&&1/ro(new Pn([,-0]))[1]==Q?function(t){return new Pn(t)}:v0;function i1(t){return function(r){var s=it(r);return s==ge?ji(r):s==pt?Lu(r):Ru(r,t(r))}}function Qt(t,r,s,d,f,w,v,$){var A=r&V;if(!A&&typeof t!="function")throw new It(u);var O=d?d.length:0;if(O||(r&=-97,d=f=i),v=v===i?v:Qe(ce(v),0),$=$===i?$:ce($),O-=f?f.length:0,r&H){var B=d,z=f;d=f=i}var U=A?i:Pi(t),K=[t,r,s,d,f,B,z,w,v,$];if(U&&Th(K,U),t=K[0],r=K[1],s=K[2],d=K[3],f=K[4],$=K[9]=K[9]===i?A?0:t.length:Qe(K[9]-O,0),!$&&r&(k|F)&&(r&=-25),!r||r==E)var P=fh(t,r,s);else r==k||r==F?P=gh(t,r,$):(r==W||r==(E|W))&&!f.length?P=mh(t,r,s,d):P=jo.apply(i,K);var ue=U?zs:w1;return x1(ue(P,K),t,r)}function a1(t,r,s,d){return t===i||Bt(t,Jn[s])&&!Le.call(d,s)?r:t}function s1(t,r,s,d,f,w){return Ne(t)&&Ne(r)&&(w.set(r,t),$o(t,r,i,s1,w),w.delete(r)),t}function xh(t){return Lr(t)?i:t}function l1(t,r,s,d,f,w){var v=s&_,$=t.length,A=r.length;if($!=A&&!(v&&A>$))return!1;var O=w.get(t),B=w.get(r);if(O&&B)return O==r&&B==t;var z=-1,U=!0,K=s&I?new Mn:i;for(w.set(t,r),w.set(r,t);++z<$;){var P=t[z],ue=r[z];if(d)var ee=v?d(ue,P,z,r,t,w):d(P,ue,z,t,r,w);if(ee!==i){if(ee)continue;U=!1;break}if(K){if(!bi(r,function(ve,Ce){if(!pr(K,Ce)&&(P===ve||f(P,ve,s,d,w)))return K.push(Ce)})){U=!1;break}}else if(!(P===ue||f(P,ue,s,d,w))){U=!1;break}}return w.delete(t),w.delete(r),U}function vh(t,r,s,d,f,w,v){switch(s){case un:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case Rn:return!(t.byteLength!=r.byteLength||!w(new co(t),new co(r)));case fe:case Ae:case Se:return Bt(+t,+r);case xe:return t.name==r.name&&t.message==r.message;case sn:case ln:return t==r+"";case ge:var $=ji;case pt:var A=d&_;if($||($=ro),t.size!=r.size&&!A)return!1;var O=v.get(t);if(O)return O==r;d|=I,v.set(t,r);var B=l1($(t),$(r),d,f,w,v);return v.delete(t),B;case cn:if(Sr)return Sr.call(t)==Sr.call(r)}return!1}function ph(t,r,s,d,f,w){var v=s&_,$=Qi(t),A=$.length,O=Qi(r),B=O.length;if(A!=B&&!v)return!1;for(var z=A;z--;){var U=$[z];if(!(v?U in r:Le.call(r,U)))return!1}var K=w.get(t),P=w.get(r);if(K&&P)return K==r&&P==t;var ue=!0;w.set(t,r),w.set(r,t);for(var ee=v;++z<A;){U=$[z];var ve=t[U],Ce=r[U];if(d)var St=v?d(Ce,ve,U,r,t,w):d(ve,Ce,U,t,r,w);if(!(St===i?ve===Ce||f(ve,Ce,s,d,w):St)){ue=!1;break}ee||(ee=U=="constructor")}if(ue&&!ee){var ut=t.constructor,Rt=r.constructor;ut!=Rt&&"constructor"in t&&"constructor"in r&&!(typeof ut=="function"&&ut instanceof ut&&typeof Rt=="function"&&Rt instanceof Rt)&&(ue=!1)}return w.delete(t),w.delete(r),ue}function Jt(t){return i0(g1(t,i,y1),t+"")}function Qi(t){return As(t,et,t0)}function Ji(t){return As(t,mt,c1)}var Pi=wo?function(t){return wo.get(t)}:v0;function Mo(t){for(var r=t.name+"",s=er[r],d=Le.call(er,r)?s.length:0;d--;){var f=s[d],w=f.func;if(w==null||w==t)return f.name}return r}function or(t){var r=Le.call(g,"placeholder")?g:t;return r.placeholder}function J(){var t=g.iteratee||w0;return t=t===w0?Ts:t,arguments.length?t(arguments[0],arguments[1]):t}function To(t,r){var s=t.__data__;return _h(r)?s[typeof r=="string"?"string":"hash"]:s.map}function e0(t){for(var r=et(t),s=r.length;s--;){var d=r[s],f=t[d];r[s]=[d,f,h1(f)]}return r}function Ln(t,r){var s=Mu(t,r);return Ms(s)?s:i}function bh(t){var r=Le.call(t,An),s=t[An];try{t[An]=i;var d=!0}catch{}var f=so.call(t);return d&&(r?t[An]=s:delete t[An]),f}var t0=Ai?function(t){return t==null?[]:(t=De(t),dn(Ai(t),function(r){return ms.call(t,r)}))}:p0,c1=Ai?function(t){for(var r=[];t;)hn(r,t0(t)),t=uo(t);return r}:p0,it=lt;(Ii&&it(new Ii(new ArrayBuffer(1)))!=un||Cr&&it(new Cr)!=ge||Mi&&it(Mi.resolve())!=Yr||Pn&&it(new Pn)!=pt||$r&&it(new $r)!=Sn)&&(it=function(t){var r=lt(t),s=r==Ze?t.constructor:i,d=s?Vn(s):"";if(d)switch(d){case nd:return un;case rd:return ge;case od:return Yr;case id:return pt;case ad:return Sn}return r});function Ch(t,r,s){for(var d=-1,f=s.length;++d<f;){var w=s[d],v=w.size;switch(w.type){case"drop":t+=v;break;case"dropRight":r-=v;break;case"take":r=ot(r,t+v);break;case"takeRight":t=Qe(t,r-v);break}}return{start:t,end:r}}function $h(t){var r=t.match(A2);return r?r[1].split(I2):[]}function u1(t,r,s){r=xn(r,t);for(var d=-1,f=r.length,w=!1;++d<f;){var v=qt(r[d]);if(!(w=t!=null&&s(t,v)))break;t=t[v]}return w||++d!=f?w:(f=t==null?0:t.length,!!f&&Ho(f)&&Pt(v,f)&&(se(t)||Dn(t)))}function yh(t){var r=t.length,s=new t.constructor(r);return r&&typeof t[0]=="string"&&Le.call(t,"index")&&(s.index=t.index,s.input=t.input),s}function d1(t){return typeof t.constructor=="function"&&!Tr(t)?tr(uo(t)):{}}function Sh(t,r,s){var d=t.constructor;switch(r){case Rn:return Yi(t);case fe:case Ae:return new d(+t);case un:return sh(t,s);case Zr:case Gn:case Xr:case Qr:case vr:case jn:case tt:case si:case li:return Ks(t,s);case ge:return new d;case Se:case ln:return new d(t);case sn:return lh(t);case pt:return new d;case cn:return ch(t)}}function Rh(t,r){var s=r.length;if(!s)return t;var d=s-1;return r[d]=(s>1?"& ":"")+r[d],r=r.join(s>2?", ":" "),t.replace(_2,`{
/* [wrapped with `+r+`] */
`)}function jh(t){return se(t)||Dn(t)||!!(ws&&t&&t[ws])}function Pt(t,r){var s=typeof t;return r=r??ae,!!r&&(s=="number"||s!="symbol"&&H2.test(t))&&t>-1&&t%1==0&&t<r}function ct(t,r,s){if(!Ne(s))return!1;var d=typeof r;return(d=="number"?gt(s)&&Pt(r,s.length):d=="string"&&r in s)?Bt(s[r],t):!1}function n0(t,r){if(se(t))return!1;var s=typeof t;return s=="number"||s=="symbol"||s=="boolean"||t==null||yt(t)?!0:y2.test(t)||!$2.test(t)||r!=null&&t in De(r)}function _h(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}function r0(t){var r=Mo(t),s=g[r];if(typeof s!="function"||!(r in pe.prototype))return!1;if(t===s)return!0;var d=Pi(s);return!!d&&t===d[0]}function Ah(t){return!!hs&&hs in t}var Ih=io?en:b0;function Tr(t){var r=t&&t.constructor,s=typeof r=="function"&&r.prototype||Jn;return t===s}function h1(t){return t===t&&!Ne(t)}function f1(t,r){return function(s){return s==null?!1:s[t]===r&&(r!==i||t in De(s))}}function Mh(t){var r=Oo(t,function(d){return s.size===C&&s.clear(),d}),s=r.cache;return r}function Th(t,r){var s=t[1],d=r[1],f=s|d,w=f<(E|V|N),v=d==N&&s==k||d==N&&s==Y&&t[7].length<=r[8]||d==(N|Y)&&r[7].length<=r[8]&&s==k;if(!(w||v))return t;d&E&&(t[2]=r[2],f|=s&E?0:M);var $=r[3];if($){var A=t[3];t[3]=A?Zs(A,$,r[4]):$,t[4]=A?fn(t[3],p):r[4]}return $=r[5],$&&(A=t[5],t[5]=A?Xs(A,$,r[6]):$,t[6]=A?fn(t[5],p):r[6]),$=r[7],$&&(t[7]=$),d&N&&(t[8]=t[8]==null?r[8]:ot(t[8],r[8])),t[9]==null&&(t[9]=r[9]),t[0]=r[0],t[1]=f,t}function Eh(t){var r=[];if(t!=null)for(var s in De(t))r.push(s);return r}function Lh(t){return so.call(t)}function g1(t,r,s){return r=Qe(r===i?t.length-1:r,0),function(){for(var d=arguments,f=-1,w=Qe(d.length-r,0),v=L(w);++f<w;)v[f]=d[r+f];f=-1;for(var $=L(r+1);++f<r;)$[f]=d[f];return $[r]=s(v),bt(t,this,$)}}function m1(t,r){return r.length<2?t:En(t,Et(r,0,-1))}function Vh(t,r){for(var s=t.length,d=ot(r.length,s),f=ft(t);d--;){var w=r[d];t[d]=Pt(w,s)?f[w]:i}return t}function o0(t,r){if(!(r==="constructor"&&typeof t[r]=="function")&&r!="__proto__")return t[r]}var w1=v1(zs),Er=Zu||function(t,r){return nt.setTimeout(t,r)},i0=v1(rh);function x1(t,r,s){var d=r+"";return i0(t,Rh(d,Dh($h(d),s)))}function v1(t){var r=0,s=0;return function(){var d=Pu(),f=de-(d-s);if(s=d,f>0){if(++r>=re)return arguments[0]}else r=0;return t.apply(i,arguments)}}function Eo(t,r){var s=-1,d=t.length,f=d-1;for(r=r===i?d:r;++s<r;){var w=Fi(s,f),v=t[w];t[w]=t[s],t[s]=v}return t.length=r,t}var p1=Mh(function(t){var r=[];return t.charCodeAt(0)===46&&r.push(""),t.replace(S2,function(s,d,f,w){r.push(f?w.replace(E2,"$1"):d||s)}),r});function qt(t){if(typeof t=="string"||yt(t))return t;var r=t+"";return r=="0"&&1/t==-Q?"-0":r}function Vn(t){if(t!=null){try{return ao.call(t)}catch{}try{return t+""}catch{}}return""}function Dh(t,r){return At(Ge,function(s){var d="_."+s[0];r&s[1]&&!to(t,d)&&t.push(d)}),t.sort()}function b1(t){if(t instanceof pe)return t.clone();var r=new Mt(t.__wrapped__,t.__chain__);return r.__actions__=ft(t.__actions__),r.__index__=t.__index__,r.__values__=t.__values__,r}function Oh(t,r,s){(s?ct(t,r,s):r===i)?r=1:r=Qe(ce(r),0);var d=t==null?0:t.length;if(!d||r<1)return[];for(var f=0,w=0,v=L(go(d/r));f<d;)v[w++]=Et(t,f,f+=r);return v}function Bh(t){for(var r=-1,s=t==null?0:t.length,d=0,f=[];++r<s;){var w=t[r];w&&(f[d++]=w)}return f}function Hh(){var t=arguments.length;if(!t)return[];for(var r=L(t-1),s=arguments[0],d=t;d--;)r[d-1]=arguments[d];return hn(se(s)?ft(s):[s],rt(r,1))}var zh=me(function(t,r){return ke(t)?jr(t,rt(r,1,ke,!0)):[]}),Nh=me(function(t,r){var s=Lt(r);return ke(s)&&(s=i),ke(t)?jr(t,rt(r,1,ke,!0),J(s,2)):[]}),Fh=me(function(t,r){var s=Lt(r);return ke(s)&&(s=i),ke(t)?jr(t,rt(r,1,ke,!0),i,s):[]});function kh(t,r,s){var d=t==null?0:t.length;return d?(r=s||r===i?1:ce(r),Et(t,r<0?0:r,d)):[]}function Wh(t,r,s){var d=t==null?0:t.length;return d?(r=s||r===i?1:ce(r),r=d-r,Et(t,0,r<0?0:r)):[]}function Uh(t,r){return t&&t.length?So(t,J(r,3),!0,!0):[]}function qh(t,r){return t&&t.length?So(t,J(r,3),!0):[]}function Gh(t,r,s,d){var f=t==null?0:t.length;return f?(s&&typeof s!="number"&&ct(t,r,s)&&(s=0,d=f),Hd(t,r,s,d)):[]}function C1(t,r,s){var d=t==null?0:t.length;if(!d)return-1;var f=s==null?0:ce(s);return f<0&&(f=Qe(d+f,0)),no(t,J(r,3),f)}function $1(t,r,s){var d=t==null?0:t.length;if(!d)return-1;var f=d-1;return s!==i&&(f=ce(s),f=s<0?Qe(d+f,0):ot(f,d-1)),no(t,J(r,3),f,!0)}function y1(t){var r=t==null?0:t.length;return r?rt(t,1):[]}function Kh(t){var r=t==null?0:t.length;return r?rt(t,Q):[]}function Yh(t,r){var s=t==null?0:t.length;return s?(r=r===i?1:ce(r),rt(t,r)):[]}function Zh(t){for(var r=-1,s=t==null?0:t.length,d={};++r<s;){var f=t[r];d[f[0]]=f[1]}return d}function S1(t){return t&&t.length?t[0]:i}function Xh(t,r,s){var d=t==null?0:t.length;if(!d)return-1;var f=s==null?0:ce(s);return f<0&&(f=Qe(d+f,0)),Yn(t,r,f)}function Qh(t){var r=t==null?0:t.length;return r?Et(t,0,-1):[]}var Jh=me(function(t){var r=ze(t,Gi);return r.length&&r[0]===t[0]?Oi(r):[]}),Ph=me(function(t){var r=Lt(t),s=ze(t,Gi);return r===Lt(s)?r=i:s.pop(),s.length&&s[0]===t[0]?Oi(s,J(r,2)):[]}),ef=me(function(t){var r=Lt(t),s=ze(t,Gi);return r=typeof r=="function"?r:i,r&&s.pop(),s.length&&s[0]===t[0]?Oi(s,i,r):[]});function tf(t,r){return t==null?"":Qu.call(t,r)}function Lt(t){var r=t==null?0:t.length;return r?t[r-1]:i}function nf(t,r,s){var d=t==null?0:t.length;if(!d)return-1;var f=d;return s!==i&&(f=ce(s),f=f<0?Qe(d+f,0):ot(f,d-1)),r===r?Du(t,r,f):no(t,os,f,!0)}function rf(t,r){return t&&t.length?Ds(t,ce(r)):i}var of=me(R1);function R1(t,r){return t&&t.length&&r&&r.length?Ni(t,r):t}function af(t,r,s){return t&&t.length&&r&&r.length?Ni(t,r,J(s,2)):t}function sf(t,r,s){return t&&t.length&&r&&r.length?Ni(t,r,i,s):t}var lf=Jt(function(t,r){var s=t==null?0:t.length,d=Ei(t,r);return Hs(t,ze(r,function(f){return Pt(f,s)?+f:f}).sort(Ys)),d});function cf(t,r){var s=[];if(!(t&&t.length))return s;var d=-1,f=[],w=t.length;for(r=J(r,3);++d<w;){var v=t[d];r(v,d,t)&&(s.push(v),f.push(d))}return Hs(t,f),s}function a0(t){return t==null?t:td.call(t)}function uf(t,r,s){var d=t==null?0:t.length;return d?(s&&typeof s!="number"&&ct(t,r,s)?(r=0,s=d):(r=r==null?0:ce(r),s=s===i?d:ce(s)),Et(t,r,s)):[]}function df(t,r){return yo(t,r)}function hf(t,r,s){return Wi(t,r,J(s,2))}function ff(t,r){var s=t==null?0:t.length;if(s){var d=yo(t,r);if(d<s&&Bt(t[d],r))return d}return-1}function gf(t,r){return yo(t,r,!0)}function mf(t,r,s){return Wi(t,r,J(s,2),!0)}function wf(t,r){var s=t==null?0:t.length;if(s){var d=yo(t,r,!0)-1;if(Bt(t[d],r))return d}return-1}function xf(t){return t&&t.length?Ns(t):[]}function vf(t,r){return t&&t.length?Ns(t,J(r,2)):[]}function pf(t){var r=t==null?0:t.length;return r?Et(t,1,r):[]}function bf(t,r,s){return t&&t.length?(r=s||r===i?1:ce(r),Et(t,0,r<0?0:r)):[]}function Cf(t,r,s){var d=t==null?0:t.length;return d?(r=s||r===i?1:ce(r),r=d-r,Et(t,r<0?0:r,d)):[]}function $f(t,r){return t&&t.length?So(t,J(r,3),!1,!0):[]}function yf(t,r){return t&&t.length?So(t,J(r,3)):[]}var Sf=me(function(t){return wn(rt(t,1,ke,!0))}),Rf=me(function(t){var r=Lt(t);return ke(r)&&(r=i),wn(rt(t,1,ke,!0),J(r,2))}),jf=me(function(t){var r=Lt(t);return r=typeof r=="function"?r:i,wn(rt(t,1,ke,!0),i,r)});function _f(t){return t&&t.length?wn(t):[]}function Af(t,r){return t&&t.length?wn(t,J(r,2)):[]}function If(t,r){return r=typeof r=="function"?r:i,t&&t.length?wn(t,i,r):[]}function s0(t){if(!(t&&t.length))return[];var r=0;return t=dn(t,function(s){if(ke(s))return r=Qe(s.length,r),!0}),Si(r,function(s){return ze(t,Ci(s))})}function j1(t,r){if(!(t&&t.length))return[];var s=s0(t);return r==null?s:ze(s,function(d){return bt(r,i,d)})}var Mf=me(function(t,r){return ke(t)?jr(t,r):[]}),Tf=me(function(t){return qi(dn(t,ke))}),Ef=me(function(t){var r=Lt(t);return ke(r)&&(r=i),qi(dn(t,ke),J(r,2))}),Lf=me(function(t){var r=Lt(t);return r=typeof r=="function"?r:i,qi(dn(t,ke),i,r)}),Vf=me(s0);function Df(t,r){return Us(t||[],r||[],Rr)}function Of(t,r){return Us(t||[],r||[],Ir)}var Bf=me(function(t){var r=t.length,s=r>1?t[r-1]:i;return s=typeof s=="function"?(t.pop(),s):i,j1(t,s)});function _1(t){var r=g(t);return r.__chain__=!0,r}function Hf(t,r){return r(t),t}function Lo(t,r){return r(t)}var zf=Jt(function(t){var r=t.length,s=r?t[0]:0,d=this.__wrapped__,f=function(w){return Ei(w,t)};return r>1||this.__actions__.length||!(d instanceof pe)||!Pt(s)?this.thru(f):(d=d.slice(s,+s+(r?1:0)),d.__actions__.push({func:Lo,args:[f],thisArg:i}),new Mt(d,this.__chain__).thru(function(w){return r&&!w.length&&w.push(i),w}))});function Nf(){return _1(this)}function Ff(){return new Mt(this.value(),this.__chain__)}function kf(){this.__values__===i&&(this.__values__=F1(this.value()));var t=this.__index__>=this.__values__.length,r=t?i:this.__values__[this.__index__++];return{done:t,value:r}}function Wf(){return this}function Uf(t){for(var r,s=this;s instanceof vo;){var d=b1(s);d.__index__=0,d.__values__=i,r?f.__wrapped__=d:r=d;var f=d;s=s.__wrapped__}return f.__wrapped__=t,r}function qf(){var t=this.__wrapped__;if(t instanceof pe){var r=t;return this.__actions__.length&&(r=new pe(this)),r=r.reverse(),r.__actions__.push({func:Lo,args:[a0],thisArg:i}),new Mt(r,this.__chain__)}return this.thru(a0)}function Gf(){return Ws(this.__wrapped__,this.__actions__)}var Kf=Ro(function(t,r,s){Le.call(t,s)?++t[s]:Xt(t,s,1)});function Yf(t,r,s){var d=se(t)?ns:Bd;return s&&ct(t,r,s)&&(r=i),d(t,J(r,3))}function Zf(t,r){var s=se(t)?dn:js;return s(t,J(r,3))}var Xf=e1(C1),Qf=e1($1);function Jf(t,r){return rt(Vo(t,r),1)}function Pf(t,r){return rt(Vo(t,r),Q)}function e5(t,r,s){return s=s===i?1:ce(s),rt(Vo(t,r),s)}function A1(t,r){var s=se(t)?At:mn;return s(t,J(r,3))}function I1(t,r){var s=se(t)?vu:Rs;return s(t,J(r,3))}var t5=Ro(function(t,r,s){Le.call(t,s)?t[s].push(r):Xt(t,s,[r])});function n5(t,r,s,d){t=gt(t)?t:ar(t),s=s&&!d?ce(s):0;var f=t.length;return s<0&&(s=Qe(f+s,0)),zo(t)?s<=f&&t.indexOf(r,s)>-1:!!f&&Yn(t,r,s)>-1}var r5=me(function(t,r,s){var d=-1,f=typeof r=="function",w=gt(t)?L(t.length):[];return mn(t,function(v){w[++d]=f?bt(r,v,s):_r(v,r,s)}),w}),o5=Ro(function(t,r,s){Xt(t,s,r)});function Vo(t,r){var s=se(t)?ze:Es;return s(t,J(r,3))}function i5(t,r,s,d){return t==null?[]:(se(r)||(r=r==null?[]:[r]),s=d?i:s,se(s)||(s=s==null?[]:[s]),Os(t,r,s))}var a5=Ro(function(t,r,s){t[s?0:1].push(r)},function(){return[[],[]]});function s5(t,r,s){var d=se(t)?pi:as,f=arguments.length<3;return d(t,J(r,4),s,f,mn)}function l5(t,r,s){var d=se(t)?pu:as,f=arguments.length<3;return d(t,J(r,4),s,f,Rs)}function c5(t,r){var s=se(t)?dn:js;return s(t,Bo(J(r,3)))}function u5(t){var r=se(t)?Cs:th;return r(t)}function d5(t,r,s){(s?ct(t,r,s):r===i)?r=1:r=ce(r);var d=se(t)?Ed:nh;return d(t,r)}function h5(t){var r=se(t)?Ld:oh;return r(t)}function f5(t){if(t==null)return 0;if(gt(t))return zo(t)?Xn(t):t.length;var r=it(t);return r==ge||r==pt?t.size:Hi(t).length}function g5(t,r,s){var d=se(t)?bi:ih;return s&&ct(t,r,s)&&(r=i),d(t,J(r,3))}var m5=me(function(t,r){if(t==null)return[];var s=r.length;return s>1&&ct(t,r[0],r[1])?r=[]:s>2&&ct(r[0],r[1],r[2])&&(r=[r[0]]),Os(t,rt(r,1),[])}),Do=Yu||function(){return nt.Date.now()};function w5(t,r){if(typeof r!="function")throw new It(u);return t=ce(t),function(){if(--t<1)return r.apply(this,arguments)}}function M1(t,r,s){return r=s?i:r,r=t&&r==null?t.length:r,Qt(t,N,i,i,i,i,r)}function T1(t,r){var s;if(typeof r!="function")throw new It(u);return t=ce(t),function(){return--t>0&&(s=r.apply(this,arguments)),t<=1&&(r=i),s}}var l0=me(function(t,r,s){var d=E;if(s.length){var f=fn(s,or(l0));d|=W}return Qt(t,d,r,s,f)}),E1=me(function(t,r,s){var d=E|V;if(s.length){var f=fn(s,or(E1));d|=W}return Qt(r,d,t,s,f)});function L1(t,r,s){r=s?i:r;var d=Qt(t,k,i,i,i,i,i,r);return d.placeholder=L1.placeholder,d}function V1(t,r,s){r=s?i:r;var d=Qt(t,F,i,i,i,i,i,r);return d.placeholder=V1.placeholder,d}function D1(t,r,s){var d,f,w,v,$,A,O=0,B=!1,z=!1,U=!0;if(typeof t!="function")throw new It(u);r=Vt(r)||0,Ne(s)&&(B=!!s.leading,z="maxWait"in s,w=z?Qe(Vt(s.maxWait)||0,r):w,U="trailing"in s?!!s.trailing:U);function K(We){var Ht=d,nn=f;return d=f=i,O=We,v=t.apply(nn,Ht),v}function P(We){return O=We,$=Er(ve,r),B?K(We):v}function ue(We){var Ht=We-A,nn=We-O,el=r-Ht;return z?ot(el,w-nn):el}function ee(We){var Ht=We-A,nn=We-O;return A===i||Ht>=r||Ht<0||z&&nn>=w}function ve(){var We=Do();if(ee(We))return Ce(We);$=Er(ve,ue(We))}function Ce(We){return $=i,U&&d?K(We):(d=f=i,v)}function St(){$!==i&&qs($),O=0,d=A=f=$=i}function ut(){return $===i?v:Ce(Do())}function Rt(){var We=Do(),Ht=ee(We);if(d=arguments,f=this,A=We,Ht){if($===i)return P(A);if(z)return qs($),$=Er(ve,r),K(A)}return $===i&&($=Er(ve,r)),v}return Rt.cancel=St,Rt.flush=ut,Rt}var x5=me(function(t,r){return Ss(t,1,r)}),v5=me(function(t,r,s){return Ss(t,Vt(r)||0,s)});function p5(t){return Qt(t,te)}function Oo(t,r){if(typeof t!="function"||r!=null&&typeof r!="function")throw new It(u);var s=function(){var d=arguments,f=r?r.apply(this,d):d[0],w=s.cache;if(w.has(f))return w.get(f);var v=t.apply(this,d);return s.cache=w.set(f,v)||w,v};return s.cache=new(Oo.Cache||Zt),s}Oo.Cache=Zt;function Bo(t){if(typeof t!="function")throw new It(u);return function(){var r=arguments;switch(r.length){case 0:return!t.call(this);case 1:return!t.call(this,r[0]);case 2:return!t.call(this,r[0],r[1]);case 3:return!t.call(this,r[0],r[1],r[2])}return!t.apply(this,r)}}function b5(t){return T1(2,t)}var C5=ah(function(t,r){r=r.length==1&&se(r[0])?ze(r[0],Ct(J())):ze(rt(r,1),Ct(J()));var s=r.length;return me(function(d){for(var f=-1,w=ot(d.length,s);++f<w;)d[f]=r[f].call(this,d[f]);return bt(t,this,d)})}),c0=me(function(t,r){var s=fn(r,or(c0));return Qt(t,W,i,r,s)}),O1=me(function(t,r){var s=fn(r,or(O1));return Qt(t,H,i,r,s)}),$5=Jt(function(t,r){return Qt(t,Y,i,i,i,r)});function y5(t,r){if(typeof t!="function")throw new It(u);return r=r===i?r:ce(r),me(t,r)}function S5(t,r){if(typeof t!="function")throw new It(u);return r=r==null?0:Qe(ce(r),0),me(function(s){var d=s[r],f=vn(s,0,r);return d&&hn(f,d),bt(t,this,f)})}function R5(t,r,s){var d=!0,f=!0;if(typeof t!="function")throw new It(u);return Ne(s)&&(d="leading"in s?!!s.leading:d,f="trailing"in s?!!s.trailing:f),D1(t,r,{leading:d,maxWait:r,trailing:f})}function j5(t){return M1(t,1)}function _5(t,r){return c0(Ki(r),t)}function A5(){if(!arguments.length)return[];var t=arguments[0];return se(t)?t:[t]}function I5(t){return Tt(t,R)}function M5(t,r){return r=typeof r=="function"?r:i,Tt(t,R,r)}function T5(t){return Tt(t,y|R)}function E5(t,r){return r=typeof r=="function"?r:i,Tt(t,y|R,r)}function L5(t,r){return r==null||ys(t,r,et(r))}function Bt(t,r){return t===r||t!==t&&r!==r}var V5=Io(Di),D5=Io(function(t,r){return t>=r}),Dn=Is(function(){return arguments}())?Is:function(t){return Fe(t)&&Le.call(t,"callee")&&!ms.call(t,"callee")},se=L.isArray,O5=Xa?Ct(Xa):Wd;function gt(t){return t!=null&&Ho(t.length)&&!en(t)}function ke(t){return Fe(t)&&gt(t)}function B5(t){return t===!0||t===!1||Fe(t)&&lt(t)==fe}var pn=Xu||b0,H5=Qa?Ct(Qa):Ud;function z5(t){return Fe(t)&&t.nodeType===1&&!Lr(t)}function N5(t){if(t==null)return!0;if(gt(t)&&(se(t)||typeof t=="string"||typeof t.splice=="function"||pn(t)||ir(t)||Dn(t)))return!t.length;var r=it(t);if(r==ge||r==pt)return!t.size;if(Tr(t))return!Hi(t).length;for(var s in t)if(Le.call(t,s))return!1;return!0}function F5(t,r){return Ar(t,r)}function k5(t,r,s){s=typeof s=="function"?s:i;var d=s?s(t,r):i;return d===i?Ar(t,r,i,s):!!d}function u0(t){if(!Fe(t))return!1;var r=lt(t);return r==xe||r==$e||typeof t.message=="string"&&typeof t.name=="string"&&!Lr(t)}function W5(t){return typeof t=="number"&&xs(t)}function en(t){if(!Ne(t))return!1;var r=lt(t);return r==ye||r==Ye||r==X||r==ai}function B1(t){return typeof t=="number"&&t==ce(t)}function Ho(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ae}function Ne(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}function Fe(t){return t!=null&&typeof t=="object"}var H1=Ja?Ct(Ja):Gd;function U5(t,r){return t===r||Bi(t,r,e0(r))}function q5(t,r,s){return s=typeof s=="function"?s:i,Bi(t,r,e0(r),s)}function G5(t){return z1(t)&&t!=+t}function K5(t){if(Ih(t))throw new ie(c);return Ms(t)}function Y5(t){return t===null}function Z5(t){return t==null}function z1(t){return typeof t=="number"||Fe(t)&&lt(t)==Se}function Lr(t){if(!Fe(t)||lt(t)!=Ze)return!1;var r=uo(t);if(r===null)return!0;var s=Le.call(r,"constructor")&&r.constructor;return typeof s=="function"&&s instanceof s&&ao.call(s)==Uu}var d0=Pa?Ct(Pa):Kd;function X5(t){return B1(t)&&t>=-ae&&t<=ae}var N1=es?Ct(es):Yd;function zo(t){return typeof t=="string"||!se(t)&&Fe(t)&&lt(t)==ln}function yt(t){return typeof t=="symbol"||Fe(t)&&lt(t)==cn}var ir=ts?Ct(ts):Zd;function Q5(t){return t===i}function J5(t){return Fe(t)&&it(t)==Sn}function P5(t){return Fe(t)&&lt(t)==xr}var eg=Io(zi),tg=Io(function(t,r){return t<=r});function F1(t){if(!t)return[];if(gt(t))return zo(t)?Dt(t):ft(t);if(br&&t[br])return Eu(t[br]());var r=it(t),s=r==ge?ji:r==pt?ro:ar;return s(t)}function tn(t){if(!t)return t===0?t:0;if(t=Vt(t),t===Q||t===-Q){var r=t<0?-1:1;return r*je}return t===t?t:0}function ce(t){var r=tn(t),s=r%1;return r===r?s?r-s:r:0}function k1(t){return t?Tn(ce(t),0,we):0}function Vt(t){if(typeof t=="number")return t;if(yt(t))return _e;if(Ne(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=Ne(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=ss(t);var s=D2.test(t);return s||B2.test(t)?mu(t.slice(2),s?2:8):V2.test(t)?_e:+t}function W1(t){return Ut(t,mt(t))}function ng(t){return t?Tn(ce(t),-ae,ae):t===0?t:0}function Te(t){return t==null?"":$t(t)}var rg=nr(function(t,r){if(Tr(r)||gt(r)){Ut(r,et(r),t);return}for(var s in r)Le.call(r,s)&&Rr(t,s,r[s])}),U1=nr(function(t,r){Ut(r,mt(r),t)}),No=nr(function(t,r,s,d){Ut(r,mt(r),t,d)}),og=nr(function(t,r,s,d){Ut(r,et(r),t,d)}),ig=Jt(Ei);function ag(t,r){var s=tr(t);return r==null?s:$s(s,r)}var sg=me(function(t,r){t=De(t);var s=-1,d=r.length,f=d>2?r[2]:i;for(f&&ct(r[0],r[1],f)&&(d=1);++s<d;)for(var w=r[s],v=mt(w),$=-1,A=v.length;++$<A;){var O=v[$],B=t[O];(B===i||Bt(B,Jn[O])&&!Le.call(t,O))&&(t[O]=w[O])}return t}),lg=me(function(t){return t.push(i,s1),bt(q1,i,t)});function cg(t,r){return rs(t,J(r,3),Wt)}function ug(t,r){return rs(t,J(r,3),Vi)}function dg(t,r){return t==null?t:Li(t,J(r,3),mt)}function hg(t,r){return t==null?t:_s(t,J(r,3),mt)}function fg(t,r){return t&&Wt(t,J(r,3))}function gg(t,r){return t&&Vi(t,J(r,3))}function mg(t){return t==null?[]:Co(t,et(t))}function wg(t){return t==null?[]:Co(t,mt(t))}function h0(t,r,s){var d=t==null?i:En(t,r);return d===i?s:d}function xg(t,r){return t!=null&&u1(t,r,zd)}function f0(t,r){return t!=null&&u1(t,r,Nd)}var vg=n1(function(t,r,s){r!=null&&typeof r.toString!="function"&&(r=so.call(r)),t[r]=s},m0(wt)),pg=n1(function(t,r,s){r!=null&&typeof r.toString!="function"&&(r=so.call(r)),Le.call(t,r)?t[r].push(s):t[r]=[s]},J),bg=me(_r);function et(t){return gt(t)?bs(t):Hi(t)}function mt(t){return gt(t)?bs(t,!0):Xd(t)}function Cg(t,r){var s={};return r=J(r,3),Wt(t,function(d,f,w){Xt(s,r(d,f,w),d)}),s}function $g(t,r){var s={};return r=J(r,3),Wt(t,function(d,f,w){Xt(s,f,r(d,f,w))}),s}var yg=nr(function(t,r,s){$o(t,r,s)}),q1=nr(function(t,r,s,d){$o(t,r,s,d)}),Sg=Jt(function(t,r){var s={};if(t==null)return s;var d=!1;r=ze(r,function(w){return w=xn(w,t),d||(d=w.length>1),w}),Ut(t,Ji(t),s),d&&(s=Tt(s,y|b|R,xh));for(var f=r.length;f--;)Ui(s,r[f]);return s});function Rg(t,r){return G1(t,Bo(J(r)))}var jg=Jt(function(t,r){return t==null?{}:Jd(t,r)});function G1(t,r){if(t==null)return{};var s=ze(Ji(t),function(d){return[d]});return r=J(r),Bs(t,s,function(d,f){return r(d,f[0])})}function _g(t,r,s){r=xn(r,t);var d=-1,f=r.length;for(f||(f=1,t=i);++d<f;){var w=t==null?i:t[qt(r[d])];w===i&&(d=f,w=s),t=en(w)?w.call(t):w}return t}function Ag(t,r,s){return t==null?t:Ir(t,r,s)}function Ig(t,r,s,d){return d=typeof d=="function"?d:i,t==null?t:Ir(t,r,s,d)}var K1=i1(et),Y1=i1(mt);function Mg(t,r,s){var d=se(t),f=d||pn(t)||ir(t);if(r=J(r,4),s==null){var w=t&&t.constructor;f?s=d?new w:[]:Ne(t)?s=en(w)?tr(uo(t)):{}:s={}}return(f?At:Wt)(t,function(v,$,A){return r(s,v,$,A)}),s}function Tg(t,r){return t==null?!0:Ui(t,r)}function Eg(t,r,s){return t==null?t:ks(t,r,Ki(s))}function Lg(t,r,s,d){return d=typeof d=="function"?d:i,t==null?t:ks(t,r,Ki(s),d)}function ar(t){return t==null?[]:Ri(t,et(t))}function Vg(t){return t==null?[]:Ri(t,mt(t))}function Dg(t,r,s){return s===i&&(s=r,r=i),s!==i&&(s=Vt(s),s=s===s?s:0),r!==i&&(r=Vt(r),r=r===r?r:0),Tn(Vt(t),r,s)}function Og(t,r,s){return r=tn(r),s===i?(s=r,r=0):s=tn(s),t=Vt(t),Fd(t,r,s)}function Bg(t,r,s){if(s&&typeof s!="boolean"&&ct(t,r,s)&&(r=s=i),s===i&&(typeof r=="boolean"?(s=r,r=i):typeof t=="boolean"&&(s=t,t=i)),t===i&&r===i?(t=0,r=1):(t=tn(t),r===i?(r=t,t=0):r=tn(r)),t>r){var d=t;t=r,r=d}if(s||t%1||r%1){var f=vs();return ot(t+f*(r-t+gu("1e-"+((f+"").length-1))),r)}return Fi(t,r)}var Hg=rr(function(t,r,s){return r=r.toLowerCase(),t+(s?Z1(r):r)});function Z1(t){return g0(Te(t).toLowerCase())}function X1(t){return t=Te(t),t&&t.replace(z2,_u).replace(ou,"")}function zg(t,r,s){t=Te(t),r=$t(r);var d=t.length;s=s===i?d:Tn(ce(s),0,d);var f=s;return s-=r.length,s>=0&&t.slice(s,f)==r}function Ng(t){return t=Te(t),t&&p2.test(t)?t.replace(_a,Au):t}function Fg(t){return t=Te(t),t&&R2.test(t)?t.replace(ci,"\\$&"):t}var kg=rr(function(t,r,s){return t+(s?"-":"")+r.toLowerCase()}),Wg=rr(function(t,r,s){return t+(s?" ":"")+r.toLowerCase()}),Ug=Ps("toLowerCase");function qg(t,r,s){t=Te(t),r=ce(r);var d=r?Xn(t):0;if(!r||d>=r)return t;var f=(r-d)/2;return Ao(mo(f),s)+t+Ao(go(f),s)}function Gg(t,r,s){t=Te(t),r=ce(r);var d=r?Xn(t):0;return r&&d<r?t+Ao(r-d,s):t}function Kg(t,r,s){t=Te(t),r=ce(r);var d=r?Xn(t):0;return r&&d<r?Ao(r-d,s)+t:t}function Yg(t,r,s){return s||r==null?r=0:r&&(r=+r),ed(Te(t).replace(ui,""),r||0)}function Zg(t,r,s){return(s?ct(t,r,s):r===i)?r=1:r=ce(r),ki(Te(t),r)}function Xg(){var t=arguments,r=Te(t[0]);return t.length<3?r:r.replace(t[1],t[2])}var Qg=rr(function(t,r,s){return t+(s?"_":"")+r.toLowerCase()});function Jg(t,r,s){return s&&typeof s!="number"&&ct(t,r,s)&&(r=s=i),s=s===i?we:s>>>0,s?(t=Te(t),t&&(typeof r=="string"||r!=null&&!d0(r))&&(r=$t(r),!r&&Zn(t))?vn(Dt(t),0,s):t.split(r,s)):[]}var Pg=rr(function(t,r,s){return t+(s?" ":"")+g0(r)});function e3(t,r,s){return t=Te(t),s=s==null?0:Tn(ce(s),0,t.length),r=$t(r),t.slice(s,s+r.length)==r}function t3(t,r,s){var d=g.templateSettings;s&&ct(t,r,s)&&(r=i),t=Te(t),r=No({},r,d,a1);var f=No({},r.imports,d.imports,a1),w=et(f),v=Ri(f,w),$,A,O=0,B=r.interpolate||Jr,z="__p += '",U=_i((r.escape||Jr).source+"|"+B.source+"|"+(B===Aa?L2:Jr).source+"|"+(r.evaluate||Jr).source+"|$","g"),K="//# sourceURL="+(Le.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++cu+"]")+`
`;t.replace(U,function(ee,ve,Ce,St,ut,Rt){return Ce||(Ce=St),z+=t.slice(O,Rt).replace(N2,Iu),ve&&($=!0,z+=`' +
__e(`+ve+`) +
'`),ut&&(A=!0,z+=`';
`+ut+`;
__p += '`),Ce&&(z+=`' +
((__t = (`+Ce+`)) == null ? '' : __t) +
'`),O=Rt+ee.length,ee}),z+=`';
`;var P=Le.call(r,"variable")&&r.variable;if(!P)z=`with (obj) {
`+z+`
}
`;else if(T2.test(P))throw new ie(m);z=(A?z.replace(m2,""):z).replace(w2,"$1").replace(x2,"$1;"),z="function("+(P||"obj")+`) {
`+(P?"":`obj || (obj = {});
`)+"var __t, __p = ''"+($?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+z+`return __p
}`;var ue=J1(function(){return Ie(w,K+"return "+z).apply(i,v)});if(ue.source=z,u0(ue))throw ue;return ue}function n3(t){return Te(t).toLowerCase()}function r3(t){return Te(t).toUpperCase()}function o3(t,r,s){if(t=Te(t),t&&(s||r===i))return ss(t);if(!t||!(r=$t(r)))return t;var d=Dt(t),f=Dt(r),w=ls(d,f),v=cs(d,f)+1;return vn(d,w,v).join("")}function i3(t,r,s){if(t=Te(t),t&&(s||r===i))return t.slice(0,ds(t)+1);if(!t||!(r=$t(r)))return t;var d=Dt(t),f=cs(d,Dt(r))+1;return vn(d,0,f).join("")}function a3(t,r,s){if(t=Te(t),t&&(s||r===i))return t.replace(ui,"");if(!t||!(r=$t(r)))return t;var d=Dt(t),f=ls(d,Dt(r));return vn(d,f).join("")}function s3(t,r){var s=ne,d=Re;if(Ne(r)){var f="separator"in r?r.separator:f;s="length"in r?ce(r.length):s,d="omission"in r?$t(r.omission):d}t=Te(t);var w=t.length;if(Zn(t)){var v=Dt(t);w=v.length}if(s>=w)return t;var $=s-Xn(d);if($<1)return d;var A=v?vn(v,0,$).join(""):t.slice(0,$);if(f===i)return A+d;if(v&&($+=A.length-$),d0(f)){if(t.slice($).search(f)){var O,B=A;for(f.global||(f=_i(f.source,Te(Ia.exec(f))+"g")),f.lastIndex=0;O=f.exec(B);)var z=O.index;A=A.slice(0,z===i?$:z)}}else if(t.indexOf($t(f),$)!=$){var U=A.lastIndexOf(f);U>-1&&(A=A.slice(0,U))}return A+d}function l3(t){return t=Te(t),t&&v2.test(t)?t.replace(ja,Ou):t}var c3=rr(function(t,r,s){return t+(s?" ":"")+r.toUpperCase()}),g0=Ps("toUpperCase");function Q1(t,r,s){return t=Te(t),r=s?i:r,r===i?Tu(t)?zu(t):$u(t):t.match(r)||[]}var J1=me(function(t,r){try{return bt(t,i,r)}catch(s){return u0(s)?s:new ie(s)}}),u3=Jt(function(t,r){return At(r,function(s){s=qt(s),Xt(t,s,l0(t[s],t))}),t});function d3(t){var r=t==null?0:t.length,s=J();return t=r?ze(t,function(d){if(typeof d[1]!="function")throw new It(u);return[s(d[0]),d[1]]}):[],me(function(d){for(var f=-1;++f<r;){var w=t[f];if(bt(w[0],this,d))return bt(w[1],this,d)}})}function h3(t){return Od(Tt(t,y))}function m0(t){return function(){return t}}function f3(t,r){return t==null||t!==t?r:t}var g3=t1(),m3=t1(!0);function wt(t){return t}function w0(t){return Ts(typeof t=="function"?t:Tt(t,y))}function w3(t){return Ls(Tt(t,y))}function x3(t,r){return Vs(t,Tt(r,y))}var v3=me(function(t,r){return function(s){return _r(s,t,r)}}),p3=me(function(t,r){return function(s){return _r(t,s,r)}});function x0(t,r,s){var d=et(r),f=Co(r,d);s==null&&!(Ne(r)&&(f.length||!d.length))&&(s=r,r=t,t=this,f=Co(r,et(r)));var w=!(Ne(s)&&"chain"in s)||!!s.chain,v=en(t);return At(f,function($){var A=r[$];t[$]=A,v&&(t.prototype[$]=function(){var O=this.__chain__;if(w||O){var B=t(this.__wrapped__),z=B.__actions__=ft(this.__actions__);return z.push({func:A,args:arguments,thisArg:t}),B.__chain__=O,B}return A.apply(t,hn([this.value()],arguments))})}),t}function b3(){return nt._===this&&(nt._=qu),this}function v0(){}function C3(t){return t=ce(t),me(function(r){return Ds(r,t)})}var $3=Zi(ze),y3=Zi(ns),S3=Zi(bi);function P1(t){return n0(t)?Ci(qt(t)):Pd(t)}function R3(t){return function(r){return t==null?i:En(t,r)}}var j3=r1(),_3=r1(!0);function p0(){return[]}function b0(){return!1}function A3(){return{}}function I3(){return""}function M3(){return!0}function T3(t,r){if(t=ce(t),t<1||t>ae)return[];var s=we,d=ot(t,we);r=J(r),t-=we;for(var f=Si(d,r);++s<t;)r(s);return f}function E3(t){return se(t)?ze(t,qt):yt(t)?[t]:ft(p1(Te(t)))}function L3(t){var r=++Wu;return Te(t)+r}var V3=_o(function(t,r){return t+r},0),D3=Xi("ceil"),O3=_o(function(t,r){return t/r},1),B3=Xi("floor");function H3(t){return t&&t.length?bo(t,wt,Di):i}function z3(t,r){return t&&t.length?bo(t,J(r,2),Di):i}function N3(t){return is(t,wt)}function F3(t,r){return is(t,J(r,2))}function k3(t){return t&&t.length?bo(t,wt,zi):i}function W3(t,r){return t&&t.length?bo(t,J(r,2),zi):i}var U3=_o(function(t,r){return t*r},1),q3=Xi("round"),G3=_o(function(t,r){return t-r},0);function K3(t){return t&&t.length?yi(t,wt):0}function Y3(t,r){return t&&t.length?yi(t,J(r,2)):0}return g.after=w5,g.ary=M1,g.assign=rg,g.assignIn=U1,g.assignInWith=No,g.assignWith=og,g.at=ig,g.before=T1,g.bind=l0,g.bindAll=u3,g.bindKey=E1,g.castArray=A5,g.chain=_1,g.chunk=Oh,g.compact=Bh,g.concat=Hh,g.cond=d3,g.conforms=h3,g.constant=m0,g.countBy=Kf,g.create=ag,g.curry=L1,g.curryRight=V1,g.debounce=D1,g.defaults=sg,g.defaultsDeep=lg,g.defer=x5,g.delay=v5,g.difference=zh,g.differenceBy=Nh,g.differenceWith=Fh,g.drop=kh,g.dropRight=Wh,g.dropRightWhile=Uh,g.dropWhile=qh,g.fill=Gh,g.filter=Zf,g.flatMap=Jf,g.flatMapDeep=Pf,g.flatMapDepth=e5,g.flatten=y1,g.flattenDeep=Kh,g.flattenDepth=Yh,g.flip=p5,g.flow=g3,g.flowRight=m3,g.fromPairs=Zh,g.functions=mg,g.functionsIn=wg,g.groupBy=t5,g.initial=Qh,g.intersection=Jh,g.intersectionBy=Ph,g.intersectionWith=ef,g.invert=vg,g.invertBy=pg,g.invokeMap=r5,g.iteratee=w0,g.keyBy=o5,g.keys=et,g.keysIn=mt,g.map=Vo,g.mapKeys=Cg,g.mapValues=$g,g.matches=w3,g.matchesProperty=x3,g.memoize=Oo,g.merge=yg,g.mergeWith=q1,g.method=v3,g.methodOf=p3,g.mixin=x0,g.negate=Bo,g.nthArg=C3,g.omit=Sg,g.omitBy=Rg,g.once=b5,g.orderBy=i5,g.over=$3,g.overArgs=C5,g.overEvery=y3,g.overSome=S3,g.partial=c0,g.partialRight=O1,g.partition=a5,g.pick=jg,g.pickBy=G1,g.property=P1,g.propertyOf=R3,g.pull=of,g.pullAll=R1,g.pullAllBy=af,g.pullAllWith=sf,g.pullAt=lf,g.range=j3,g.rangeRight=_3,g.rearg=$5,g.reject=c5,g.remove=cf,g.rest=y5,g.reverse=a0,g.sampleSize=d5,g.set=Ag,g.setWith=Ig,g.shuffle=h5,g.slice=uf,g.sortBy=m5,g.sortedUniq=xf,g.sortedUniqBy=vf,g.split=Jg,g.spread=S5,g.tail=pf,g.take=bf,g.takeRight=Cf,g.takeRightWhile=$f,g.takeWhile=yf,g.tap=Hf,g.throttle=R5,g.thru=Lo,g.toArray=F1,g.toPairs=K1,g.toPairsIn=Y1,g.toPath=E3,g.toPlainObject=W1,g.transform=Mg,g.unary=j5,g.union=Sf,g.unionBy=Rf,g.unionWith=jf,g.uniq=_f,g.uniqBy=Af,g.uniqWith=If,g.unset=Tg,g.unzip=s0,g.unzipWith=j1,g.update=Eg,g.updateWith=Lg,g.values=ar,g.valuesIn=Vg,g.without=Mf,g.words=Q1,g.wrap=_5,g.xor=Tf,g.xorBy=Ef,g.xorWith=Lf,g.zip=Vf,g.zipObject=Df,g.zipObjectDeep=Of,g.zipWith=Bf,g.entries=K1,g.entriesIn=Y1,g.extend=U1,g.extendWith=No,x0(g,g),g.add=V3,g.attempt=J1,g.camelCase=Hg,g.capitalize=Z1,g.ceil=D3,g.clamp=Dg,g.clone=I5,g.cloneDeep=T5,g.cloneDeepWith=E5,g.cloneWith=M5,g.conformsTo=L5,g.deburr=X1,g.defaultTo=f3,g.divide=O3,g.endsWith=zg,g.eq=Bt,g.escape=Ng,g.escapeRegExp=Fg,g.every=Yf,g.find=Xf,g.findIndex=C1,g.findKey=cg,g.findLast=Qf,g.findLastIndex=$1,g.findLastKey=ug,g.floor=B3,g.forEach=A1,g.forEachRight=I1,g.forIn=dg,g.forInRight=hg,g.forOwn=fg,g.forOwnRight=gg,g.get=h0,g.gt=V5,g.gte=D5,g.has=xg,g.hasIn=f0,g.head=S1,g.identity=wt,g.includes=n5,g.indexOf=Xh,g.inRange=Og,g.invoke=bg,g.isArguments=Dn,g.isArray=se,g.isArrayBuffer=O5,g.isArrayLike=gt,g.isArrayLikeObject=ke,g.isBoolean=B5,g.isBuffer=pn,g.isDate=H5,g.isElement=z5,g.isEmpty=N5,g.isEqual=F5,g.isEqualWith=k5,g.isError=u0,g.isFinite=W5,g.isFunction=en,g.isInteger=B1,g.isLength=Ho,g.isMap=H1,g.isMatch=U5,g.isMatchWith=q5,g.isNaN=G5,g.isNative=K5,g.isNil=Z5,g.isNull=Y5,g.isNumber=z1,g.isObject=Ne,g.isObjectLike=Fe,g.isPlainObject=Lr,g.isRegExp=d0,g.isSafeInteger=X5,g.isSet=N1,g.isString=zo,g.isSymbol=yt,g.isTypedArray=ir,g.isUndefined=Q5,g.isWeakMap=J5,g.isWeakSet=P5,g.join=tf,g.kebabCase=kg,g.last=Lt,g.lastIndexOf=nf,g.lowerCase=Wg,g.lowerFirst=Ug,g.lt=eg,g.lte=tg,g.max=H3,g.maxBy=z3,g.mean=N3,g.meanBy=F3,g.min=k3,g.minBy=W3,g.stubArray=p0,g.stubFalse=b0,g.stubObject=A3,g.stubString=I3,g.stubTrue=M3,g.multiply=U3,g.nth=rf,g.noConflict=b3,g.noop=v0,g.now=Do,g.pad=qg,g.padEnd=Gg,g.padStart=Kg,g.parseInt=Yg,g.random=Bg,g.reduce=s5,g.reduceRight=l5,g.repeat=Zg,g.replace=Xg,g.result=_g,g.round=q3,g.runInContext=S,g.sample=u5,g.size=f5,g.snakeCase=Qg,g.some=g5,g.sortedIndex=df,g.sortedIndexBy=hf,g.sortedIndexOf=ff,g.sortedLastIndex=gf,g.sortedLastIndexBy=mf,g.sortedLastIndexOf=wf,g.startCase=Pg,g.startsWith=e3,g.subtract=G3,g.sum=K3,g.sumBy=Y3,g.template=t3,g.times=T3,g.toFinite=tn,g.toInteger=ce,g.toLength=k1,g.toLower=n3,g.toNumber=Vt,g.toSafeInteger=ng,g.toString=Te,g.toUpper=r3,g.trim=o3,g.trimEnd=i3,g.trimStart=a3,g.truncate=s3,g.unescape=l3,g.uniqueId=L3,g.upperCase=c3,g.upperFirst=g0,g.each=A1,g.eachRight=I1,g.first=S1,x0(g,function(){var t={};return Wt(g,function(r,s){Le.call(g.prototype,s)||(t[s]=r)}),t}(),{chain:!1}),g.VERSION=a,At(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){g[t].placeholder=g}),At(["drop","take"],function(t,r){pe.prototype[t]=function(s){s=s===i?1:Qe(ce(s),0);var d=this.__filtered__&&!r?new pe(this):this.clone();return d.__filtered__?d.__takeCount__=ot(s,d.__takeCount__):d.__views__.push({size:ot(s,we),type:t+(d.__dir__<0?"Right":"")}),d},pe.prototype[t+"Right"]=function(s){return this.reverse()[t](s).reverse()}}),At(["filter","map","takeWhile"],function(t,r){var s=r+1,d=s==he||s==Ve;pe.prototype[t]=function(f){var w=this.clone();return w.__iteratees__.push({iteratee:J(f,3),type:s}),w.__filtered__=w.__filtered__||d,w}}),At(["head","last"],function(t,r){var s="take"+(r?"Right":"");pe.prototype[t]=function(){return this[s](1).value()[0]}}),At(["initial","tail"],function(t,r){var s="drop"+(r?"":"Right");pe.prototype[t]=function(){return this.__filtered__?new pe(this):this[s](1)}}),pe.prototype.compact=function(){return this.filter(wt)},pe.prototype.find=function(t){return this.filter(t).head()},pe.prototype.findLast=function(t){return this.reverse().find(t)},pe.prototype.invokeMap=me(function(t,r){return typeof t=="function"?new pe(this):this.map(function(s){return _r(s,t,r)})}),pe.prototype.reject=function(t){return this.filter(Bo(J(t)))},pe.prototype.slice=function(t,r){t=ce(t);var s=this;return s.__filtered__&&(t>0||r<0)?new pe(s):(t<0?s=s.takeRight(-t):t&&(s=s.drop(t)),r!==i&&(r=ce(r),s=r<0?s.dropRight(-r):s.take(r-t)),s)},pe.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},pe.prototype.toArray=function(){return this.take(we)},Wt(pe.prototype,function(t,r){var s=/^(?:filter|find|map|reject)|While$/.test(r),d=/^(?:head|last)$/.test(r),f=g[d?"take"+(r=="last"?"Right":""):r],w=d||/^find/.test(r);f&&(g.prototype[r]=function(){var v=this.__wrapped__,$=d?[1]:arguments,A=v instanceof pe,O=$[0],B=A||se(v),z=function(ve){var Ce=f.apply(g,hn([ve],$));return d&&U?Ce[0]:Ce};B&&s&&typeof O=="function"&&O.length!=1&&(A=B=!1);var U=this.__chain__,K=!!this.__actions__.length,P=w&&!U,ue=A&&!K;if(!w&&B){v=ue?v:new pe(this);var ee=t.apply(v,$);return ee.__actions__.push({func:Lo,args:[z],thisArg:i}),new Mt(ee,U)}return P&&ue?t.apply(this,$):(ee=this.thru(z),P?d?ee.value()[0]:ee.value():ee)})}),At(["pop","push","shift","sort","splice","unshift"],function(t){var r=oo[t],s=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",d=/^(?:pop|shift)$/.test(t);g.prototype[t]=function(){var f=arguments;if(d&&!this.__chain__){var w=this.value();return r.apply(se(w)?w:[],f)}return this[s](function(v){return r.apply(se(v)?v:[],f)})}}),Wt(pe.prototype,function(t,r){var s=g[r];if(s){var d=s.name+"";Le.call(er,d)||(er[d]=[]),er[d].push({name:r,func:s})}}),er[jo(i,V).name]=[{name:"wrapper",func:i}],pe.prototype.clone=sd,pe.prototype.reverse=ld,pe.prototype.value=cd,g.prototype.at=zf,g.prototype.chain=Nf,g.prototype.commit=Ff,g.prototype.next=kf,g.prototype.plant=Uf,g.prototype.reverse=qf,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=Gf,g.prototype.first=g.prototype.head,br&&(g.prototype[br]=Wf),g},Qn=Nu();_n?((_n.exports=Qn)._=Qn,wi._=Qn):nt._=Qn}).call(Vr)})(Ko,Ko.exports);Ko.exports;const gr=(e,n)=>{const i=h.createContext(n),a=c=>{const{children:u,...m}=c,x=h.useMemo(()=>m,Object.values(m));return l.jsx(i.Provider,{value:x,children:u})};function o(c){const u=h.useContext(i);if(u)return u;if(n!==void 0)return n;throw new Error(`\`${c}\` must be used within \`${e}\``)}return a.displayName=`${e}Provider`,[a,o]};function a8(e,n){return typeof e=="string"?!1:n in e}function Uo(e,n,i){return e&&n&&a8(e,n)?e[n]:i}const il={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},s8=e=>{const[n,i,a,o]=e,c=i??n;return[n,c,a??n,o??c]};function l8(e,n){switch(e){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return n.spaces;case"color":case"background":case"borderColor":return n.colors;case"fontSize":return n.fontSizes;case"fontWeight":return n.fontWeights;case"lineHeight":return n.lineHeights;case"zIndex":return n.zIndices;case"boxShadow":return n.shadows;default:return null}}const Po=(e,n)=>{const i=Object.entries(e).reduce((a,o)=>{const[c,u]=o,m=l8(c,n),x=Object.prototype.hasOwnProperty.call(il,c)?il[c]:c;return x&&(u||u===0)&&(typeof u=="object"&&!Array.isArray(u)?Object.entries(u).forEach(([C,p])=>{a[C]={...a[C],...al(x,p,m)}}):a.initial={...a.initial,...al(x,u,m)}),a},{initial:{},small:{},medium:{},large:{}});return Object.entries(i).reduce((a,[o,c])=>{if(c&&Object.keys(c).length>0){const u=Object.entries(c).reduce((m,[x,C])=>(m.push(`${x}: ${C};`),m),[]).join(`
`);o==="initial"?a.push(u):a.push(`${n.breakpoints[o]}{ ${u} }`)}return a},[]).join(`
`)},al=(e,n,i)=>{if(Array.isArray(e)&&Array.isArray(n)){const a=s8(n);return e.reduce((o,c,u)=>(o[c]=Uo(i,a[u],a[u]),o),{})}else return Array.isArray(e)&&!Array.isArray(n)?e.reduce((a,o)=>(a[o]=Uo(i,n,n),a),{}):!Array.isArray(e)&&!Array.isArray(n)?{[e]:Uo(i,n,n)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},dt=h.forwardRef,Z=dt((e,n)=>{const{background:i,basis:a,borderColor:o,color:c,flex:u,fontSize:m,grow:x,hasRadius:C,padding:p,paddingBottom:y,paddingLeft:b,paddingRight:R,paddingTop:_,margin:I,marginLeft:E,marginBottom:V,marginRight:M,marginTop:k,shadow:F,shrink:W,lineHeight:H,fontWeight:N,width:Y,minWidth:te,maxWidth:ne,height:Re,minHeight:re,maxHeight:de,top:he,left:Ee,bottom:Ve,right:Q,borderRadius:ae,borderStyle:je,borderWidth:_e,tag:we,pointerEvents:Pe,display:be,position:Ge,zIndex:Me,overflow:Ke,cursor:X,transition:fe,transform:Ae,animation:$e,textAlign:xe,textTransform:ye,...Ye}=e,ge=we||"div",Se={$background:i,$basis:a,$borderColor:o,$color:c,$flex:u,$fontSize:m,$grow:x,$hasRadius:C,$padding:p,$paddingBottom:y,$paddingLeft:b,$paddingRight:R,$paddingTop:_,$margin:I,$marginLeft:E,$marginBottom:V,$marginRight:M,$marginTop:k,$shadow:F,$shrink:W,$lineHeight:H,$fontWeight:N,$width:Y,$minWidth:te,$maxWidth:ne,$height:Re,$minHeight:re,$maxHeight:de,$top:he,$left:Ee,$bottom:Ve,$right:Q,$borderRadius:ae,$borderStyle:je,$borderWidth:_e,$pointerEvents:Pe,$display:be,$position:Ge,$zIndex:Me,$overflow:Ke,$cursor:X,$transition:fe,$transform:Ae,$animation:$e,$textAlign:xe,$textTransform:ye};return l.jsx(c8,{as:ge,ref:n,...Se,...Ye})}),c8=T.div`
  ${({theme:e,...n})=>Po({padding:n.$padding,paddingTop:n.$paddingTop,paddingBottom:n.$paddingBottom,paddingLeft:n.$paddingLeft,paddingRight:n.$paddingRight,margin:n.$margin,marginTop:n.$marginTop,marginBottom:n.$marginBottom,marginLeft:n.$marginLeft,marginRight:n.$marginRight,top:n.$top,left:n.$left,bottom:n.$bottom,right:n.$right,width:n.$width,minWidth:n.$minWidth,maxWidth:n.$maxWidth,height:n.$height,minHeight:n.$minHeight,maxHeight:n.$maxHeight,color:n.$color,background:n.$background,fontSize:n.$fontSize,fontWeight:n.$fontWeight,lineHeight:n.$lineHeight,borderRadius:n.$hasRadius?e.borderRadius:n.$borderRadius,borderStyle:n.$borderColor&&!n.$borderStyle?"solid":n.$borderStyle,borderWidth:n.$borderColor&&!n.$borderWidth?"1px":n.$borderWidth,borderColor:n.$borderColor,zIndex:n.$zIndex,boxShadow:n.$shadow,display:n.$display,pointerEvents:n.$pointerEvents,cursor:n.$cursor,textAlign:n.$textAlign,textTransform:n.$textTransform,transition:n.$transition,transform:n.$transform,animation:n.$animation,position:n.$position,overflow:n.$overflow,flex:n.$flex,flexShrink:n.$shrink,flexGrow:n.$grow,flexBasis:n.$basis},e)};
`,G=dt((e,n)=>{const{className:i,alignItems:a,direction:o,inline:c,gap:u,justifyContent:m,wrap:x,...C}=e,p={$alignItems:a,$direction:o,$gap:u,$justifyContent:m,$wrap:x,$inline:c};return l.jsx(u8,{className:i,ref:n,...p,...C})}),u8=T(Z)`
  ${({theme:e,$display:n="flex",$alignItems:i="center",$direction:a="row",...o})=>Po({gap:o.$gap,alignItems:i,justifyContent:o.$justifyContent,flexWrap:o.$wrap,flexDirection:a,display:o.$inline?"inline-flex":n},e)};
`,d8="alpha",h8="beta",f8="delta",g8="epsilon",sl="omega",m8="pi",w8="sigma",jc=oe`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,x8=({$variant:e=sl,theme:n})=>{switch(e){case d8:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case h8:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case f8:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case g8:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case sl:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case m8:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case w8:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}},le=dt((e,n)=>{const{ellipsis:i,textColor:a="currentcolor",textDecoration:o,textTransform:c,variant:u,lineHeight:m,fontWeight:x,fontSize:C,...p}=e,y={$ellipsis:i,$textColor:a,$textDecoration:o,$textTransform:c,$variant:u,$lineHeight:m,$fontWeight:x,$fontSize:C};return l.jsx(v8,{ref:n,tag:"span",...y,...p})}),v8=T(Z)`
  ${x8}
  ${({$ellipsis:e})=>e?jc:""}

  ${({theme:e,...n})=>Po({color:n.$textColor,textDecoration:n.$textDecoration,textTransform:n.$textTransform,lineHeight:n.$lineHeight,fontWeight:n.$fontWeight,fontSize:n.$fontSize},e)}
`,[p8,xa]=gr("Accordion");h.forwardRef(({children:e,size:n="S",...i},a)=>l.jsx(b8,{ref:a,$size:n,collapsible:!0,...i,type:"single",children:l.jsx(p8,{size:n,children:e})}));const b8=T(a6)`
  background-color: ${e=>e.theme.colors.neutral0};

  ${e=>e.$size==="S"?oe`
        border-radius: ${n=>n.theme.borderRadius};
        border: solid 1px ${n=>n.theme.colors.neutral200};
      `:oe``}
`;h.forwardRef((e,n)=>{const{size:i}=xa("Item");return l.jsx(C8,{$size:i,"data-size":i,ref:n,...e})});const C8=T(s6)`
  overflow: hidden;
  margin: 1px 0;

  &:first-child {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0;
  }

  &:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-bottom: 0;
  }

  &[data-size='S'] {
    & + & {
      border-top: solid 1px ${e=>e.theme.colors.neutral200};
    }
  }

  &[data-state='open'] {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  &:not([data-disabled]):hover {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  /* This applies our desired focus effect correctly. */
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;h.forwardRef(({caretPosition:e="left",description:n,icon:i,iconProps:a,children:o,...c},u)=>{const{size:m}=xa("Trigger");return l.jsxs(Ac,{$caretPosition:e,$size:m,ref:u,...c,children:[e==="left"?l.jsx(Yo,{$size:m,children:l.jsx(Fn,{width:m==="S"?"1.2rem":"1.6rem",height:m==="S"?"1.2rem":"1.6rem"})}):null,l.jsxs(G,{tag:"span",gap:2,overflow:"hidden",children:[i&&m==="S"?l.jsx(_c,{children:l.jsx(i,{...a})}):null,l.jsxs(G,{alignItems:"flex-start",direction:"column",tag:"span",ref:u,overflow:"hidden",children:[l.jsx(le,{fontWeight:m==="S"?"bold":void 0,ellipsis:!0,variant:m==="M"?"delta":void 0,textAlign:"left",width:"100%",children:o}),n&&m==="M"?l.jsx(le,{textAlign:"left",children:n}):null]})]}),e==="right"?l.jsx(Yo,{$size:m,children:l.jsx(Fn,{width:m==="S"?"1.2rem":"1.6rem",height:m==="S"?"1.2rem":"1.6rem"})}):null]})});const _c=T(Z)`
  color: ${e=>e.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,Yo=T(G).attrs(e=>({...e,tag:"span"}))`
  background-color: ${e=>e.theme.colors.neutral200};
  width: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  height: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  flex: ${e=>e.$size==="S"?"0 0 2.4rem":"0 0 3.2rem"};
  border-radius: 50%;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.authenticMotion},
      ${e=>e.theme.transitions.backgroundColor};
  }
`,Ac=T(l6)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$caretPosition==="left"?"flex-start":"space-between"};
  width: 100%;
  gap: ${e=>e.theme.spaces[4]};
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[4]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[3]:e.theme.spaces[6]};
  cursor: pointer;
  color: ${e=>e.theme.colors.neutral800};
  overflow: hidden;

  &[data-disabled] {
    cursor: default;
    color: ${e=>e.theme.colors.neutral600};
  }

  &[data-state='open'] > ${Yo} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`;h.forwardRef((e,n)=>{const{size:i}=xa("Trigger");return l.jsx(Ic,{$size:i,...e,ref:n})});const Ic=T(G).attrs(e=>({...e,tag:"span"}))`
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};

  // Remove default IconButton styles so there are no backgrounds or borders.
  & > button {
    border: none;
    background: none;
    color: ${e=>e.theme.colors.neutral600};

    @media (prefers-reduced-motion: no-preference) {
      transition: ${e=>e.theme.transitions.color};
    }
  }
`;h.forwardRef(({variant:e="primary",...n},i)=>l.jsx($8,{$variant:e,ref:i,...n}));const $8=T(c6)`
  display: flex;
  align-items: center;
  background-color: ${e=>e.$variant==="primary"?e.theme.colors.neutral0:e.theme.colors.neutral100};

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral150};
  }

  &:not([data-disabled]) {
    &:hover,
    &[data-state='open'] {
      background-color: ${e=>e.theme.colors.primary100};

      & > ${Ac} {
        color: ${e=>e.theme.colors.primary600};

        & ${_c} {
          color: ${e=>e.theme.colors.primary600};
        }

        & ${Yo} {
          background-color: ${e=>e.theme.colors.primary200};
        }
      }

      & > ${Ic} > button {
        color: ${e=>e.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`;h.forwardRef((e,n)=>l.jsx(R8,{ref:n,...e}));const y8=at`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,S8=at`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,R8=T(u6)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${y8} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${S8} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }
  }
`,ei=oe`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;

    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e=>e.theme.colors.primary600};
    }
  }
`,mr=({tag:e,...n})=>{const i=e||"span";return l.jsx(j8,{...n,as:i})},j8=T.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,zr=({children:e,label:n})=>{const i=h.Children.only(e);return l.jsxs(l.Fragment,{children:[h.cloneElement(i,{"aria-hidden":"true",focusable:"false"}),l.jsx(mr,{children:n})]})};zr.displayName="AccessibleIcon";const O0=({theme:e,$variant:n})=>n==="danger"?e.colors.danger700:n==="success"?e.colors.success700:n==="warning"?e.colors.warning700:e.colors.primary700;T(Z)`
  ${ei};
`;T(G)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${O0};
    }
  }
`;T(Z)`
  & a > span {
    color: ${O0};
  }

  svg path {
    fill: ${O0};
  }
`;function Gt({prop:e,defaultProp:n,onChange:i=()=>{}}){const[a,o]=Mc({defaultProp:n,onChange:i}),c=e!==void 0,u=c?e:a,m=Wl(i),x=h.useCallback(C=>{if(c){const y=typeof C=="function"?C(e):C;y!==e&&m(y)}else o(C)},[c,e,o,m]);return[u,x]}function Mc({defaultProp:e,onChange:n}){const i=h.useState(e),[a]=i,o=h.useRef(a),c=Wl(n);return h.useEffect(()=>{o.current!==a&&(c(a),o.current=a)},[a,o,c]),i}const ll={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},cl={120:"120ms"};`${cl[120]}${ll.easeOutQuad}`,`${cl[120]}${ll.easeOutQuad}`;const Ue={overlayFadeIn:at`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  `,modalPopIn:at`
    from {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  `,modalPopOut:at`
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
  `,popIn:at`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,popOut:at`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  `,slideDownIn:at`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideDownOut:at`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `,slideUpIn:at`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideUpOut:at`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `,fadeIn:at`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,fadeOut:at`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `},Nr=32,ul=2;h.forwardRef(({onLoadingStatusChange:e,delayMs:n=600,src:i,alt:a,fallback:o,preview:c=!1,...u},m)=>{const[x,C]=Gt({onChange:e}),[p,y]=h.useState(!1),b=c&&x==="loaded",R=_=>{b&&y(_)};return l.jsxs(Vl,{onOpenChange:R,children:[l.jsx(Dl,{asChild:!0,children:l.jsxs(B0,{ref:m,...u,children:[b?l.jsx(_8,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:p?.4:0}}):null,l.jsx(A8,{src:i,alt:a,onLoadingStatusChange:C}),l.jsx(d6,{delayMs:n,children:l.jsx(le,{fontWeight:"bold",textTransform:"uppercase",children:o})})]})}),b?l.jsx(Ol,{children:l.jsx(I8,{side:"top",sideOffset:4,children:l.jsx(M8,{src:i,alt:a})})}):null]})});const Tc=oe`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,Ec=oe`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,B0=T(h6)`
  position: relative;
  z-index: 0;
  ${Tc}
  width: ${Nr/10}rem;
  height: ${Nr/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${e=>e.theme.colors.primary600};
  color: ${e=>e.theme.colors.neutral0};
`,_8=T(Z)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,A8=T(f6)`
  ${Ec}
`,I8=T(Bl)`
  ${Tc}
  width: ${Nr*ul/10}rem;
  height: ${Nr*ul/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Ue.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,M8=T.img`
  ${Ec}
`;h.forwardRef((e,n)=>l.jsx(T8,{...e,ref:n,tag:"div"}));const T8=T(G)`
  & > ${B0} + ${B0} {
    margin-left: -${Nr/10/2}rem;
  }
`,E8=({active:e=!1,size:n="M",textColor:i="neutral600",backgroundColor:a="neutral150",variant:o,children:c,minWidth:u=5,...m})=>{const x=n==="S"?1:2,C=o?{backgroundColor:`${o}200`,textColor:`${o}700`}:{backgroundColor:a,textColor:i};return l.jsx(L8,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:u,paddingLeft:x,paddingRight:x,background:e?"primary200":C.backgroundColor,$size:n,...m,children:l.jsx(le,{variant:"sigma",textColor:e?"primary600":C.textColor,lineHeight:"1rem",children:c})})},L8=T(G)`
  border-radius: ${({theme:e,$size:n})=>n==="S"?"2px":e.borderRadius};
  ${({$size:e,theme:n})=>e==="S"?oe`
        padding-block: 0.3rem;
        padding-inline ${n.spaces[1]}
      `:oe`
      padding-block: 0.7rem;
      padding-inline ${n.spaces[2]}
    `};
`,V8=T(Z)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,Ur=dt(({href:e,disabled:n=!1,isExternal:i=!1,...a},o)=>l.jsx(V8,{tag:"a",ref:o,target:i?"_blank":void 0,rel:i?"noreferrer noopener":void 0,href:e,tabIndex:n?-1:void 0,"aria-disabled":n,pointerEvents:n?"none":void 0,cursor:n?void 0:"pointer",...a})),Lc=()=>l.jsx(Z,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:l.jsx(le,{variant:"pi",textColor:"neutral500",children:"/"})});Lc.displayName="Divider";const D8=T(G)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,O8=h.forwardRef(({label:e,children:n,...i},a)=>{const o=h.Children.toArray(n);return l.jsx(Z,{"aria-label":e,tag:"nav",...i,ref:a,children:l.jsx(D8,{tag:"ol",children:h.Children.map(o,(c,u)=>{const m=o.length>1&&u+1<o.length;return l.jsxs(G,{inline:!0,tag:"li",children:[c,m&&l.jsx(Lc,{})]})})})})});O8.displayName="Breadcrumbs";const B8=h.forwardRef(({children:e,isCurrent:n=!1,...i},a)=>l.jsx(Z,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:a,children:l.jsx(le,{variant:"pi",textColor:"neutral800",fontWeight:n?"bold":"regular","aria-current":n,...i,children:e})}));B8.displayName="Crumb";const H8=T(Ur)`
  border-radius: ${({theme:e})=>e.borderRadius};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: ${({theme:e})=>e.fontSizes[1]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral700};
  }
`,z8=h.forwardRef(({children:e,...n},i)=>l.jsx(H8,{ref:i,...n,children:e}));z8.displayName="CrumbLink";const ur=e=>e.replaceAll(":","");function N8(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function Vc(...e){return n=>e.forEach(i=>N8(i,n))}function xt(...e){return h.useCallback(Vc(...e),e)}const F8=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Cn=F8()?h.useEffect:h.useLayoutEffect,k8=t6.useId||(()=>{});let W8=0;const kt=e=>{const[n,i]=h.useState(k8());return Cn(()=>{e||i(a=>a??String(W8++))},[e]),e?.toString()??(n||"")},qr=(e,n,{selectorToWatch:i,skipWhen:a=!1})=>{const o=Q0(n);h.useEffect(()=>{if(a||!e.current)return;const c={root:e.current,rootMargin:"0px"},u=C=>{C.forEach(p=>{p.isIntersecting&&e.current&&e.current.scrollHeight>e.current.clientHeight&&o(p)})},m=new IntersectionObserver(u,c),x=e.current.querySelector(i);return x&&m.observe(x),()=>{m.disconnect()}},[a,o,i,e])},va="success-light",pa="danger-light",ti="default",Gr="tertiary",Kr="secondary",Dc="danger",Oc="success",ni="ghost",ba=[va,pa],U8=[ti,Gr,Kr,Dc,Oc,ni,...ba],q8=["XS","S","M","L"],zt=e=>e===va||e===pa?`${e.substring(0,e.lastIndexOf("-"))}`:e===Gr?"neutral":e===ti||e===Kr||U8.every(n=>n!==e)?"primary":`${e}`,Bc=({theme:e})=>oe`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    color: ${e.colors.neutral600};
    cursor: default;
  `,Hc=({theme:e,$variant:n})=>[...ba,Kr].includes(n)?oe`
      background-color: ${e.colors.neutral0};
    `:n===Gr?oe`
      background-color: ${e.colors.neutral100};
    `:n===ni?oe`
      background-color: ${e.colors.neutral100};
    `:n===ti?oe`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:oe`
    border: 1px solid ${e.colors[`${zt(n)}500`]};
    background: ${e.colors[`${zt(n)}500`]};
  `,zc=({theme:e,$variant:n})=>[...ba,Kr].includes(n)?oe`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${zt(n)}600`]};
      color: ${e.colors[`${zt(n)}600`]};
    `:n===Gr||n===ni?oe`
      background-color: ${e.colors.neutral150};
    `:oe`
    border: 1px solid ${e.colors[`${zt(n)}600`]};
    background: ${e.colors[`${zt(n)}600`]};
  `,Nc=({theme:e,$variant:n})=>{switch(n){case pa:case va:case Kr:return oe`
        border: 1px solid ${e.colors[`${zt(n)}200`]};
        background: ${e.colors[`${zt(n)}100`]};
        color: ${e.colors[`${zt(n)}700`]};
      `;case Gr:return oe`
        border: 1px solid ${e.colors.neutral200};
        background: ${e.colors.neutral0};
        color: ${e.colors.neutral800};
      `;case ni:return oe`
        border: 1px solid transparent;
        background: transparent;
        color: ${e.colors.neutral800};

        svg {
          fill: ${e.colors.neutral500};
        }
      `;case Oc:case Dc:return oe`
        border: 1px solid ${e.colors[`${zt(n)}600`]};
        background: ${e.colors[`${zt(n)}600`]};
        color: ${e.colors.neutral0};
      `;default:return oe`
        border: 1px solid ${e.colors.buttonPrimary600};
        background: ${e.colors.buttonPrimary600};
        color: ${e.colors.buttonNeutral0};
      `}},Zo=dt(({variant:e=ti,startIcon:n,endIcon:i,disabled:a=!1,children:o,onClick:c,size:u=q8[1],loading:m=!1,fullWidth:x=!1,type:C="button",...p},y)=>{const b=a||m,R=E=>{!b&&c&&c(E)},_=p.tag??"button",I=_==="button"||_==="input"?C:void 0;return l.jsxs(Y8,{ref:y,"aria-disabled":b,disabled:b,$size:u,$variant:e,tag:"button",onClick:R,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:x?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",type:I,...p,children:[(n||m)&&l.jsx(G,{tag:"span","aria-hidden":!0,children:m?l.jsx(K8,{}):n}),l.jsx(le,{variant:u==="S"?"pi":void 0,fontWeight:"bold",children:o}),i&&l.jsx(G,{tag:"span","aria-hidden":!0,children:i})]})}),G8=at`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,K8=T(Rc)`
  animation: ${G8} 2s infinite linear;
  will-change: transform;
`,Y8=T(G)`
  height: ${({theme:e,$size:n})=>e.sizes.button[n]};
  text-decoration: none;
  ${Nc}

  &:hover {
    ${Hc}
  }

  &:active {
    ${zc}
  }

  &[aria-disabled='true'] {
    ${Bc}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,Fc=h.forwardRef(({children:e,description:n,label:i,defaultOpen:a,open:o,onOpenChange:c,delayDuration:u=500,disableHoverableContent:m,...x},C)=>!i&&!n?e:l.jsxs(Vl,{defaultOpen:a,open:o,onOpenChange:c,delayDuration:u,disableHoverableContent:m,children:[l.jsx(Dl,{asChild:!0,children:e}),l.jsx(Ol,{children:l.jsx(Z8,{ref:C,sideOffset:8,...x,children:l.jsx(le,{variant:"pi",fontWeight:"bold",children:i||n})})})]})),Z8=T(Bl)`
  background-color: ${e=>e.theme.colors.neutral900};
  color: ${e=>e.theme.colors.neutral0};
  padding-inline: ${e=>e.theme.spaces[2]};
  padding-block: ${e=>e.theme.spaces[2]};
  border-radius: ${e=>e.theme.borderRadius};
  z-index: ${e=>e.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Ue.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,kn=dt(({label:e,background:n,children:i,disabled:a=!1,onClick:o,size:c="S",variant:u="tertiary",withTooltip:m=!0,type:x="button",...C},p)=>{const y=R=>{!a&&o&&o(R)},b=l.jsx(Hr,{"aria-disabled":a,background:a?"neutral150":n,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...C,ref:p,$size:c,onClick:y,$variant:u,type:x,children:l.jsx(zr,{label:e,children:i})});return m?l.jsx(Fc,{label:e,children:b}):b}),Hr=T(G)`
  text-decoration: none;

  ${e=>{switch(e.$size){case"XS":return oe`
          padding-block: 0.2rem;
          padding-inline: 0.2rem;
        `;case"S":return oe`
          padding-block: 0.7rem;
          padding-inline: 0.7rem;
        `;case"M":return oe`
          padding-block: 0.9rem;
          padding-inline: 0.9rem;
        `;case"L":return oe`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;
        `}}}
  ${Nc}
  ${e=>e.$variant==="tertiary"?oe`
          color: ${e.theme.colors.neutral500};
        `:""}

  &:hover {
    ${Hc}
    ${e=>e.$variant==="tertiary"?oe`
            color: ${e.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${zc}
  }

  &[aria-disabled='true'] {
    ${Bc}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;T(G)`
  & ${Hr}:first-child {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & ${Hr}:last-child {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Hr} {
    border-radius: 0;

    & + ${Hr} {
      border-left: none;
    }
  }
`;const X8=dt(({children:e,href:n,disabled:i=!1,startIcon:a,endIcon:o,isExternal:c=!1,color:u="primary600",activeColor:m="primary700",...x},C)=>l.jsxs(Q8,{ref:C,href:n,disabled:i,isExternal:c,$activeColor:m,$color:u,...x,children:[a,l.jsx(le,{textColor:i?"neutral600":u,children:e}),o,n&&!o&&c&&l.jsx(Uw,{fill:u})]})),Q8=T(Ur)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: 1rem;

    path {
      fill: ${({disabled:e,$color:n,theme:i})=>e?i.colors.neutral600:i.colors[n||"primary600"]};
    }
  }

  &:hover {
    & > span {
      color: ${({theme:e,$color:n})=>e.colors[n||"primary600"]};
    }

    svg path {
      fill: ${({theme:e,$color:n})=>e.colors[n||"primary600"]};
    }
  }

  &:active {
    color: ${({theme:e,$activeColor:n})=>e.colors[n||"primary700"]};
  }

  ${ei};
`,J8=e=>{switch(e){case"danger":return"danger100";default:return"primary100"}},P8=(e,n)=>{switch(e){case"danger":return"danger700";default:return"neutral800"}},y0=(e,n)=>{switch(e){case"danger":return n?"danger500":"danger700";default:return n?"neutral300":"neutral500"}},e7=b6,t7=h.forwardRef(({label:e,endIcon:n=l.jsx(Fn,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:i=Zo,icon:a,...o},c)=>{const u={...o,ref:c,type:"button"};return l.jsx(g6,{asChild:!0,disabled:u.disabled,children:i===kn?l.jsx(kn,{label:e,variant:"tertiary",...u,children:a}):l.jsx(Zo,{endIcon:n,variant:"ghost",...u})})}),n7=h.forwardRef(({children:e,intersectionId:n,onCloseAutoFocus:i,popoverPlacement:a="bottom-start",...o},c)=>{const[u,m]=a.split("-");return l.jsx(Hl,{children:l.jsx(r7,{align:m,side:u,loop:!0,onCloseAutoFocus:i,asChild:!0,children:l.jsxs(kc,{ref:c,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...o,children:[e,l.jsx(Z,{id:n,width:"100%",height:"1px"})]})})})}),kc=T(G)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  z-index: ${e=>e.theme.zIndices.popover};

  &::-webkit-scrollbar {
    display: none;
  }
`,r7=T(m6)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Ue.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Ue.slideDownIn};
      }
    }
  }
`,Wc=({theme:e,$variant:n})=>oe`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  &[data-highlighted] {
    background-color: ${e.colors[J8(n)]};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }

  color: ${e.colors[P8(n)]};
`,o7=T(G)`
  ${({theme:e,$variant:n})=>Wc({theme:e,$variant:n})}
`;T(X8)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:n})=>Uo(e.colors,n,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;

    > svg {
      path {
        fill: ${({theme:e,$variant:n})=>e.colors[y0(n,!1)]};
      }
    }
  }
  > svg {
    path {
      fill: ${({theme:e,$variant:n})=>e.colors[y0(n,!1)]};
    }
  }
  &[aria-disabled='true'] {
    pointer-events: none;

    > svg {
      path {
        fill: ${({theme:e,$variant:n})=>e.colors[y0(n,!0)]};
      }
    }
  }

  ${({theme:e,$variant:n})=>Wc({theme:e,$variant:n})}
`;const i7=T(Z)`
  /* Negative horizontal margin to compensate Menu.Content's padding */
  margin: ${({theme:e})=>e.spaces[1]} -${({theme:e})=>e.spaces[1]};
  width: calc(100% + ${({theme:e})=>e.spaces[2]});
  /* Hide separator if there's nothing above in the menu */
  &:first-child {
    display: none;
  }
`;h.forwardRef((e,n)=>l.jsx(w6,{...e,asChild:!0,children:l.jsx(i7,{height:"1px",shrink:0,background:"neutral150",ref:n})}));h.forwardRef((e,n)=>l.jsx(x6,{asChild:!0,children:l.jsx(a7,{ref:n,variant:"sigma",textColor:"neutral600",...e})}));const a7=T(le)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`;h.forwardRef(({disabled:e=!1,...n},i)=>l.jsx(v6,{asChild:!0,disabled:e,children:l.jsxs(s7,{ref:i,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...n,children:[l.jsx(le,{children:n.children}),l.jsx(wa,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const s7=T(o7)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`;h.forwardRef((e,n)=>l.jsx(Hl,{children:l.jsx(p6,{sideOffset:8,asChild:!0,children:l.jsx(kc,{ref:n,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})}));const l7=e7,c7=t7,u7=n7,d7=h.forwardRef(({children:e,onOpen:n,onClose:i,popoverPlacement:a,onReachEnd:o,...c},u)=>{const m=h.useRef(null),x=xt(u,m),C=h.useRef(null),[p,y]=h.useState(!1),b=E=>{o&&o(E)},R=E=>{E&&typeof n=="function"?n():!E&&typeof i=="function"&&i(),y(E)},_=kt(),I=`intersection-${ur(_)}`;return qr(C,b,{selectorToWatch:`#${I}`,skipWhen:!p}),l.jsxs(l7,{onOpenChange:R,children:[l.jsx(c7,{ref:x,...c,children:c.label}),l.jsx(u7,{ref:C,intersectionId:I,popoverPlacement:a,children:e})]})}),h7=T(d7)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,f7=h.forwardRef(({children:e,...n},i)=>l.jsx(h7,{ref:i,endIcon:null,size:"S",...n,children:e}));f7.displayName="CrumbSimpleMenu";const Uc=h.createContext({id:""}),g7=()=>h.useContext(Uc);h.forwardRef(({id:e,...n},i)=>{const a=kt(e),o=h.useMemo(()=>({id:a}),[a]);return l.jsx(Uc.Provider,{value:o,children:l.jsx(Z,{ref:i,id:e,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${a}-title`,...n})})});const m7=h.forwardRef(({position:e,...n},i)=>l.jsx(w7,{ref:i,$position:e,...n,direction:"row",gap:2})),w7=T(G)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({$position:e,theme:n})=>{if(e==="end")return n.spaces[3]}};
  left: ${({$position:e,theme:n})=>{if(e==="start")return n.spaces[3]}};
`;T.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;T.div`
  display: flex;
  justify-content: center;
  height: ${({$size:e})=>e==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`;T.div`
  margin-left: auto;
  flex-shrink: 0;
`;T(E8)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`;const x7=({fill:e,...n})=>{const{colors:i}=j();return l.jsx(Z,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e?i[e]:void 0,...n,children:l.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},dl=h.forwardRef(({defaultChecked:e,checked:n,onCheckedChange:i,...a},o)=>{const c=h.useRef(null),[u,m]=Gt({defaultProp:e,prop:n,onChange:i}),x=xt(c,o);return l.jsx(v7,{ref:x,checked:u,onCheckedChange:m,...a,children:l.jsxs(p7,{forceMount:!0,children:[u===!0?l.jsx(x7,{width:"1.6rem",fill:"neutral0"}):null,u==="indeterminate"?l.jsx(Gx,{fill:"neutral0"}):null]})})}),v7=T(C6)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  border-radius: ${e=>e.theme.borderRadius};
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // this ensures the checkbox is always a square even in flex-containers.
  flex: 0 0 2rem;

  &[data-state='checked']:not([data-disabled]),
  &[data-state='indeterminate']:not([data-disabled]) {
    border: 1px solid ${e=>e.theme.colors.primary600};
    background-color: ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
    min-width: 44px;
    min-height: 44px;
  }
`,p7=T($6)`
  display: inline-flex;
  pointer-events: auto !important;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,Ca=h.forwardRef(({children:e,...n},i)=>{const a=kt(n.id);return e?l.jsxs(G,{gap:2,children:[l.jsx(dl,{id:a,...n}),l.jsx(le,{tag:"label",textColor:"neutral800",htmlFor:a,children:e})]}):l.jsx(dl,{ref:i,...n})});h.forwardRef((e,n)=>{const{id:i}=g7();return l.jsx(m7,{position:"start",children:l.jsx(Ca,{"aria-labelledby":`${i}-title`,...e,ref:n})})});T(Z)`
  word-break: break-all;
`;T(G)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const st={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},b7=T(Z)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,C7=T(G)`
  grid-area: slides;
`,hl=T(Z)`
  grid-area: ${({$area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,$7=h.forwardRef(({actions:e,children:n,label:i,nextLabel:a,onNext:o,onPrevious:c,previousLabel:u,secondaryLabel:m,selectedSlide:x,...C},p)=>{const y=h.useRef(null),b=h.useRef(null),R=h.Children.map(n,(I,E)=>h.cloneElement(I,{selected:E===x})),_=I=>{switch(I.key){case st.RIGHT:{I.preventDefault(),b?.current&&b.current.focus(),o&&o();break}case st.LEFT:{I.preventDefault(),y?.current&&y.current.focus(),c&&c();break}}};return l.jsx(Z,{ref:p,...C,onKeyDown:_,children:l.jsxs(Z,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[l.jsxs(b7,{tag:"section","aria-roledescription":"carousel","aria-label":i,display:"grid",position:"relative",children:[R&&R.length>1&&l.jsxs(l.Fragment,{children:[l.jsx(hl,{tag:"button",onClick:c,$area:"startAction",ref:y,type:"button",children:l.jsx(zr,{label:u,children:l.jsx(Sc,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),l.jsx(hl,{tag:"button",onClick:o,$area:"endAction",ref:b,type:"button",children:l.jsx(zr,{label:a,children:l.jsx(wa,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),l.jsx(C7,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:R}),e]}),m&&l.jsx(Z,{paddingTop:2,paddingLeft:4,paddingRight:4,children:l.jsx(Fc,{label:m,children:l.jsx(G,{justifyContent:"center",children:l.jsx(le,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:m})})})})]})})}),yn=(e="&")=>({theme:n,$hasError:i=!1})=>oe`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${i?n.colors.danger600:n.colors.primary600};
      box-shadow: ${i?n.colors.danger600:n.colors.primary600} 0px 0px 0px 2px;
    }
  `,[y7,vt]=gr("Field",{}),Wn=h.forwardRef(({children:e,name:n,error:i=!1,hint:a,id:o,required:c=!1,...u},m)=>{const x=kt(o),[C,p]=h.useState();return l.jsx(y7,{name:n,id:x,error:i,hint:a,required:c,labelNode:C,setLabelNode:p,children:l.jsx(G,{direction:"column",alignItems:"stretch",gap:1,ref:m,...u,children:e})})}),$a=h.forwardRef(({children:e,action:n,...i},a)=>{const{id:o,required:c,setLabelNode:u}=vt("Label"),m=xt(a,u);return e?l.jsxs(S7,{ref:m,variant:"pi",textColor:"neutral800",fontWeight:"bold",...i,id:`${o}-label`,htmlFor:o,tag:"label",ellipsis:!0,children:[e,c&&l.jsx(le,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"}),n&&l.jsx(R7,{marginLeft:1,children:n})]}):null}),S7=T(le)`
  display: flex;
`,R7=T(G)`
  line-height: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,ri=h.forwardRef(({endAction:e,startAction:n,disabled:i=!1,onChange:a,hasError:o,required:c,className:u,size:m="M",...x},C)=>{const{id:p,error:y,hint:b,name:R,required:_}=vt("Input");let I;y?I=`${p}-error`:b&&(I=`${p}-hint`);const E=!!y,V=h.useRef(null),M=h.useRef(null),k=xt(M,C),F=W=>{!i&&a&&a(W)};return h.useLayoutEffect(()=>{if(V.current&&M.current){const W=V.current.offsetWidth,H=M.current;if(H){const N=W+8+16;H.style.paddingRight=`${N}px`}}},[e]),l.jsxs(A7,{gap:2,justifyContent:"space-between",$hasError:E||o,$disabled:i,$size:m,$hasLeftAction:!!n,$hasRightAction:!!e,className:u,children:[n,l.jsx(j7,{id:p,name:R,ref:k,$size:m,"aria-describedby":I,"aria-invalid":E||o,"aria-disabled":i,disabled:i,"data-disabled":i?"":void 0,onChange:F,"aria-required":_||c,$hasLeftAction:!!n,$hasRightAction:!!e,...x}),e&&l.jsx(_7,{ref:V,children:e})]})}),j7=T.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  line-height: 2.2rem;
  display: block;
  width: 100%;
  background: inherit;

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${e=>{switch(e.$size){case"S":return oe`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[1]};
        `;default:return oe`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[2]};
        `}}}
`,_7=T(G)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,A7=T(G)`
  border: 1px solid ${({theme:e,$hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:e,theme:n})=>e?n.spaces[4]:0};
  position: relative;

  ${yn()}
  ${({theme:e,$disabled:n})=>n?oe`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0};
`,qc=()=>{const{id:e,hint:n,error:i}=vt("Hint");return!n||i?null:l.jsx(le,{variant:"pi",tag:"p",id:`${e}-hint`,textColor:"neutral600",children:n})},Gc=()=>{const{id:e,error:n}=vt("Error");return!n||typeof n!="string"?null:l.jsx(le,{variant:"pi",tag:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0,children:n})},I7=h.forwardRef(({label:e,children:n,...i},a)=>l.jsx(M7,{justifyContent:"unset",background:"transparent",borderStyle:"none",...i,type:"button",tag:"button",ref:a,children:l.jsx(zr,{label:e,children:n})})),M7=T(G)`
  font-size: 1.6rem;
  padding: 0;
`,bn=Object.freeze(Object.defineProperty({__proto__:null,Action:I7,Error:Gc,Hint:qc,Input:ri,Label:$a,Root:Wn,useField:vt},Symbol.toStringTag,{value:"Module"}));h.forwardRef(({actions:e,children:n,error:i,hint:a,label:o,labelAction:c,nextLabel:u,onNext:m,onPrevious:x,previousLabel:C,required:p,secondaryLabel:y,selectedSlide:b,id:R,..._},I)=>{const E=kt(R);return l.jsx(Wn,{hint:a,error:i,id:E,required:p,children:l.jsxs(G,{direction:"column",alignItems:"stretch",gap:1,children:[o&&l.jsx($a,{action:c,children:o}),l.jsx($7,{ref:I,actions:e,label:o,nextLabel:u,onNext:m,onPrevious:x,previousLabel:C,secondaryLabel:y,selectedSlide:b,id:E,..._,children:n}),l.jsx(qc,{}),l.jsx(Gc,{})]})})});T(Z)`
  ${jc}
`;T(G)`
  display: ${({$selected:e})=>e?"flex":"none"};
`;const oi=h.forwardRef(({children:e,viewportRef:n,...i},a)=>l.jsxs(T7,{ref:a,...i,children:[l.jsx(E7,{ref:n,children:e}),l.jsx(fl,{orientation:"vertical",children:l.jsx(gl,{})}),l.jsx(fl,{orientation:"horizontal",children:l.jsx(gl,{})})]})),T7=T(n6)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,E7=T(r6)`
  min-width: 100%;
`,fl=T(o6)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;

  &[data-orientation='vertical'] {
    width: 0.4rem;
    margin: 0.4rem;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 0.4rem;
    margin: 0.4rem;
  }
`,gl=T(i6)`
  position: relative;
  flex: 1;
  background-color: ${e=>e.theme.colors.neutral150};
  border-radius: 0.4rem;

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,L7="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",V7=h.forwardRef(({children:e,small:n=!1,...i},a)=>l.jsxs("div",{role:"alert","aria-live":"assertive",ref:a,...i,children:[l.jsx(mr,{children:e}),l.jsx(O7,{src:L7,"aria-hidden":!0,$small:n})]})),D7=at`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,O7=T.img`
  animation: ${D7} 1s infinite linear;
  will-change: transform;
  ${({$small:e,theme:n})=>e&&`width: ${n.spaces[6]}; height: ${n.spaces[6]};`}
`;function lr(e,n,i){let a=i.initialDeps??[],o;function c(){var u,m,x,C;let p;i.key&&((u=i.debug)!=null&&u.call(i))&&(p=Date.now());const y=e();if(!(y.length!==a.length||y.some((_,I)=>a[I]!==_)))return o;a=y;let R;if(i.key&&((m=i.debug)!=null&&m.call(i))&&(R=Date.now()),o=n(...y),i.key&&((x=i.debug)!=null&&x.call(i))){const _=Math.round((Date.now()-p)*100)/100,I=Math.round((Date.now()-R)*100)/100,E=I/16,V=(M,k)=>{for(M=String(M);M.length<k;)M=" "+M;return M};console.info(`%c⏱ ${V(I,5)} /${V(_,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*E,120))}deg 100% 31%);`,i?.key)}return(C=i?.onChange)==null||C.call(i,o),o}return c.updateDeps=u=>{a=u},c}function ml(e,n){if(e===void 0)throw new Error("Unexpected undefined");return e}const B7=(e,n)=>Math.abs(e-n)<1.01,H7=(e,n,i)=>{let a;return function(...o){e.clearTimeout(a),a=e.setTimeout(()=>n.apply(this,o),i)}},wl=e=>{const{offsetWidth:n,offsetHeight:i}=e;return{width:n,height:i}},z7=e=>e,N7=e=>{const n=Math.max(e.startIndex-e.overscan,0),i=Math.min(e.endIndex+e.overscan,e.count-1),a=[];for(let o=n;o<=i;o++)a.push(o);return a},F7=(e,n)=>{const i=e.scrollElement;if(!i)return;const a=e.targetWindow;if(!a)return;const o=u=>{const{width:m,height:x}=u;n({width:Math.round(m),height:Math.round(x)})};if(o(wl(i)),!a.ResizeObserver)return()=>{};const c=new a.ResizeObserver(u=>{const m=()=>{const x=u[0];if(x?.borderBoxSize){const C=x.borderBoxSize[0];if(C){o({width:C.inlineSize,height:C.blockSize});return}}o(wl(i))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(m):m()});return c.observe(i,{box:"border-box"}),()=>{c.unobserve(i)}},xl={passive:!0},vl=typeof window>"u"?!0:"onscrollend"in window,k7=(e,n)=>{const i=e.scrollElement;if(!i)return;const a=e.targetWindow;if(!a)return;let o=0;const c=e.options.useScrollendEvent&&vl?()=>{}:H7(a,()=>{n(o,!1)},e.options.isScrollingResetDelay),u=p=>()=>{const{horizontal:y,isRtl:b}=e.options;o=y?i.scrollLeft*(b&&-1||1):i.scrollTop,c(),n(o,p)},m=u(!0),x=u(!1);x(),i.addEventListener("scroll",m,xl);const C=e.options.useScrollendEvent&&vl;return C&&i.addEventListener("scrollend",x,xl),()=>{i.removeEventListener("scroll",m),C&&i.removeEventListener("scrollend",x)}},W7=(e,n,i)=>{if(n?.borderBoxSize){const a=n.borderBoxSize[0];if(a)return Math.round(a[i.options.horizontal?"inlineSize":"blockSize"])}return e[i.options.horizontal?"offsetWidth":"offsetHeight"]},U7=(e,{adjustments:n=0,behavior:i},a)=>{var o,c;const u=e+n;(c=(o=a.scrollElement)==null?void 0:o.scrollTo)==null||c.call(o,{[a.options.horizontal?"left":"top"]:u,behavior:i})};class q7{constructor(n){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let i=null;const a=()=>i||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:i=new this.targetWindow.ResizeObserver(o=>{o.forEach(c=>{const u=()=>{this._measureElement(c.target,c)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(u):u()})}));return{disconnect:()=>{var o;(o=a())==null||o.disconnect(),i=null},observe:o=>{var c;return(c=a())==null?void 0:c.observe(o,{box:"border-box"})},unobserve:o=>{var c;return(c=a())==null?void 0:c.unobserve(o)}}})(),this.range=null,this.setOptions=i=>{Object.entries(i).forEach(([a,o])=>{typeof o>"u"&&delete i[a]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:z7,rangeExtractor:N7,onChange:()=>{},measureElement:W7,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...i}},this.notify=i=>{var a,o;(o=(a=this.options).onChange)==null||o.call(a,this,i)},this.maybeNotify=lr(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),i=>{this.notify(i)},{key:"maybeNotify",debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(i=>i()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var i;const a=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==a){if(this.cleanup(),!a){this.maybeNotify();return}this.scrollElement=a,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((i=this.scrollElement)==null?void 0:i.window)??null,this.elementsCache.forEach(o=>{this.observer.observe(o)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,o=>{this.scrollRect=o,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(o,c)=>{this.scrollAdjustments=0,this.scrollDirection=c?this.getScrollOffset()<o?"forward":"backward":null,this.scrollOffset=o,this.isScrolling=c,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(i,a)=>{const o=new Map,c=new Map;for(let u=a-1;u>=0;u--){const m=i[u];if(o.has(m.lane))continue;const x=c.get(m.lane);if(x==null||m.end>x.end?c.set(m.lane,m):m.end<x.end&&o.set(m.lane,!0),o.size===this.options.lanes)break}return c.size===this.options.lanes?Array.from(c.values()).sort((u,m)=>u.end===m.end?u.index-m.index:u.end-m.end)[0]:void 0},this.getMeasurementOptions=lr(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(i,a,o,c,u)=>(this.pendingMeasuredCacheIndexes=[],{count:i,paddingStart:a,scrollMargin:o,getItemKey:c,enabled:u}),{key:!1}),this.getMeasurements=lr(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:i,paddingStart:a,scrollMargin:o,getItemKey:c,enabled:u},m)=>{if(!u)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(p=>{this.itemSizeCache.set(p.key,p.size)}));const x=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const C=this.measurementsCache.slice(0,x);for(let p=x;p<i;p++){const y=c(p),b=this.options.lanes===1?C[p-1]:this.getFurthestMeasurement(C,p),R=b?b.end+this.options.gap:a+o,_=m.get(y),I=typeof _=="number"?_:this.options.estimateSize(p),E=R+I,V=b?b.lane:p%this.options.lanes;C[p]={index:p,start:R,size:I,end:E,key:y,lane:V}}return this.measurementsCache=C,C},{key:"getMeasurements",debug:()=>this.options.debug}),this.calculateRange=lr(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(i,a,o,c)=>this.range=i.length>0&&a>0?G7({measurements:i,outerSize:a,scrollOffset:o,lanes:c}):null,{key:"calculateRange",debug:()=>this.options.debug}),this.getVirtualIndexes=lr(()=>{let i=null,a=null;const o=this.calculateRange();return o&&(i=o.startIndex,a=o.endIndex),this.maybeNotify.updateDeps([this.isScrolling,i,a]),[this.options.rangeExtractor,this.options.overscan,this.options.count,i,a]},(i,a,o,c,u)=>c===null||u===null?[]:i({startIndex:c,endIndex:u,overscan:a,count:o}),{key:"getVirtualIndexes",debug:()=>this.options.debug}),this.indexFromElement=i=>{const a=this.options.indexAttribute,o=i.getAttribute(a);return o?parseInt(o,10):(console.warn(`Missing attribute name '${a}={index}' on measured element.`),-1)},this._measureElement=(i,a)=>{const o=this.indexFromElement(i),c=this.measurementsCache[o];if(!c)return;const u=c.key,m=this.elementsCache.get(u);m!==i&&(m&&this.observer.unobserve(m),this.observer.observe(i),this.elementsCache.set(u,i)),i.isConnected&&this.resizeItem(o,this.options.measureElement(i,a,this))},this.resizeItem=(i,a)=>{const o=this.measurementsCache[i];if(!o)return;const c=this.itemSizeCache.get(o.key)??o.size,u=a-c;u!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(o,u,this):o.start<this.getScrollOffset()+this.scrollAdjustments)&&(this.options.debug&&console.info("correction",u),this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=u,behavior:void 0})),this.pendingMeasuredCacheIndexes.push(o.index),this.itemSizeCache=new Map(this.itemSizeCache.set(o.key,a)),this.notify(!1))},this.measureElement=i=>{if(!i){this.elementsCache.forEach((a,o)=>{a.isConnected||(this.observer.unobserve(a),this.elementsCache.delete(o))});return}this._measureElement(i,void 0)},this.getVirtualItems=lr(()=>[this.getVirtualIndexes(),this.getMeasurements()],(i,a)=>{const o=[];for(let c=0,u=i.length;c<u;c++){const m=i[c],x=a[m];o.push(x)}return o},{key:"getVirtualItems",debug:()=>this.options.debug}),this.getVirtualItemForOffset=i=>{const a=this.getMeasurements();if(a.length!==0)return ml(a[Kc(0,a.length-1,o=>ml(a[o]).start,i)])},this.getOffsetForAlignment=(i,a,o=0)=>{const c=this.getSize(),u=this.getScrollOffset();a==="auto"&&(a=i>=u+c?"end":"start"),a==="center"?i+=(o-c)/2:a==="end"&&(i-=c);const m=this.getTotalSize()+this.options.scrollMargin-c;return Math.max(Math.min(m,i),0)},this.getOffsetForIndex=(i,a="auto")=>{i=Math.max(0,Math.min(i,this.options.count-1));const o=this.measurementsCache[i];if(!o)return;const c=this.getSize(),u=this.getScrollOffset();if(a==="auto")if(o.end>=u+c-this.options.scrollPaddingEnd)a="end";else if(o.start<=u+this.options.scrollPaddingStart)a="start";else return[u,a];const m=a==="end"?o.end+this.options.scrollPaddingEnd:o.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(m,a,o.size),a]},this.isDynamicMode=()=>this.elementsCache.size>0,this.scrollToOffset=(i,{align:a="start",behavior:o}={})=>{o==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(i,a),{adjustments:void 0,behavior:o})},this.scrollToIndex=(i,{align:a="auto",behavior:o}={})=>{o==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),i=Math.max(0,Math.min(i,this.options.count-1));let c=0;const u=10,m=C=>{if(!this.targetWindow)return;const p=this.getOffsetForIndex(i,C);if(!p){console.warn("Failed to get offset for index:",i);return}const[y,b]=p;this._scrollToOffset(y,{adjustments:void 0,behavior:o}),this.targetWindow.requestAnimationFrame(()=>{const R=this.getScrollOffset(),_=this.getOffsetForIndex(i,b);if(!_){console.warn("Failed to get offset for index:",i);return}B7(_[0],R)||x(b)})},x=C=>{this.targetWindow&&(c++,c<u?(this.options.debug&&console.info("Schedule retry",c,u),this.targetWindow.requestAnimationFrame(()=>m(C))):console.warn(`Failed to scroll to index ${i} after ${u} attempts.`))};m(a)},this.scrollBy=(i,{behavior:a}={})=>{a==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+i,{adjustments:void 0,behavior:a})},this.getTotalSize=()=>{var i;const a=this.getMeasurements();let o;if(a.length===0)o=this.options.paddingStart;else if(this.options.lanes===1)o=((i=a[a.length-1])==null?void 0:i.end)??0;else{const c=Array(this.options.lanes).fill(null);let u=a.length-1;for(;u>=0&&c.some(m=>m===null);){const m=a[u];c[m.lane]===null&&(c[m.lane]=m.end),u--}o=Math.max(...c.filter(m=>m!==null))}return Math.max(o-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(i,{adjustments:a,behavior:o})=>{this.options.scrollToFn(i,{behavior:o,adjustments:a},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(n)}}const Kc=(e,n,i,a)=>{for(;e<=n;){const o=(e+n)/2|0,c=i(o);if(c<a)e=o+1;else if(c>a)n=o-1;else return o}return e>0?e-1:0};function G7({measurements:e,outerSize:n,scrollOffset:i,lanes:a}){const o=e.length-1,c=x=>e[x].start;if(e.length<=a)return{startIndex:0,endIndex:o};let u=Kc(0,o,c,i),m=u;if(a===1)for(;m<o&&e[m].end<i+n;)m++;else if(a>1){const x=Array(a).fill(0);for(;m<o&&x.some(p=>p<i+n);){const p=e[m];x[p.lane]=p.end,m++}const C=Array(a).fill(i+n);for(;u>=0&&C.some(p=>p>=i);){const p=e[u];C[p.lane]=p.start,u--}u=Math.max(0,u-u%a),m=Math.min(o,m+(a-1-m%a))}return{startIndex:u,endIndex:m}}const pl=typeof document<"u"?h.useLayoutEffect:h.useEffect;function K7(e){const n=h.useReducer(()=>({}),{})[1],i={...e,onChange:(o,c)=>{var u;c?dr.flushSync(n):n(),(u=e.onChange)==null||u.call(e,o,c)}},[a]=h.useState(()=>new q7(i));return a.setOptions(i),pl(()=>a._didMount(),[]),pl(()=>a._willUpdate()),a}function Y7(e){return K7({observeElementRect:F7,observeElementOffset:k7,scrollToFn:U7,...e})}const Z7=dt((e,n)=>{const{gap:i=0,gridCols:a=12,...o}=e;return l.jsx(X7,{ref:n,$gap:i,$gridCols:a,...o})}),X7=T(Z)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:e})=>e}, 1fr);
  ${({theme:e,$gap:n})=>Po({gap:n},e)}
`,Q7=dt(({col:e,s:n,xs:i,m:a,...o},c)=>l.jsx(J7,{ref:c,$col:e,$s:n,$xs:i,$m:a,...o})),J7=T(G)`
  grid-column: span ${({$xs:e,$col:n})=>e??n??12};
  max-width: 100%;

  ${({theme:e})=>e.breakpoints.small} {
    grid-column: span ${({$s:e,$xs:n,$col:i})=>e??n??i??12};
  }

  ${({theme:e})=>e.breakpoints.medium} {
    grid-column: span ${({$m:e,$s:n,$xs:i,$col:a})=>e??n??i??a??12};
  }

  ${({theme:e})=>e.breakpoints.large} {
    grid-column: span ${({$col:e,$m:n,$s:i,$xs:a})=>e??n??i??a??12};
  }
`,On=Object.freeze(Object.defineProperty({__proto__:null,Item:Q7,Root:Z7},Symbol.toStringTag,{value:"Module"})),P7=({children:e,estimatedItemSize:n=40,overscan:i=10,itemCount:a,renderItem:o})=>{const c=h.useRef(null),[u,m]=h.useState(!1),x=h.useRef(!0);h.useEffect(()=>(x.current=!0,typeof h.startTransition=="function"&&h.startTransition(()=>{x.current&&m(!0)}),()=>{x.current=!1}),[]);const C=h.useMemo(()=>o&&a!==void 0?[]:h.Children.toArray(e),[e,o,a]),p=a??C.length,y=Y7({count:p,getScrollElement:()=>c.current??null,estimateSize:h.useCallback(()=>n,[n]),overscan:i,scrollMargin:0,measureElement:void 0,lanes:1}),b=u&&x.current?y.getVirtualItems():[];return u?l.jsx(Z,{ref:c,height:`${y.getTotalSize()>0?y.getTotalSize():0}px`,width:"100%",position:"relative","data-testid":"virtualized-list",style:{willChange:"transform"},children:b.map(R=>{const _=o?o(R.index):C[R.index];return l.jsx(Z,{"data-index":R.index,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translate3d(0, ${R.start}px, 0)`},children:_},R.key)})}):l.jsx(Z,{ref:c,height:"40px",width:"100%",position:"relative"})},ep=h.forwardRef(({allowCustomValue:e,autocomplete:n,children:i,className:a,clearLabel:o="Clear",creatable:c=!1,creatableDisabled:u=!1,creatableStartIcon:m,createMessage:x=be=>`Create "${be}"`,defaultFilterValue:C,defaultTextValue:p,defaultOpen:y=!1,open:b,onOpenChange:R,disabled:_=!1,hasError:I,id:E,filterValue:V,hasMoreItems:M=!1,isPrintableCharacter:k,loading:F=!1,loadingMessage:W="Loading content...",name:H,noOptionsMessage:N=()=>"No results found",onChange:Y,onClear:te,onCreateOption:ne,onFilterValueChange:Re,onInputChange:re,onTextValueChange:de,onLoadMore:he,placeholder:Ee="Select or enter a value",required:Ve=!1,size:Q="M",startIcon:ae,textValue:je,value:_e,...we},Pe)=>{const[be,Ge]=Gt({prop:b,defaultProp:y,onChange:R}),[Me,Ke]=Gt({prop:je,defaultProp:e&&!p?_e:p,onChange:de}),[X,fe]=Gt({prop:V,defaultProp:C,onChange:Re}),Ae=h.useRef(null),$e=h.useRef(null),xe=xt($e,Pe),ye=h.useRef(null),Ye=tt=>{te&&!_&&(Ke(""),fe(""),te(tt),$e.current.focus())},ge=tt=>{Ge(tt)},Se=tt=>{Ke(tt)},ht=tt=>{fe(tt)},Ze=tt=>{re&&re(tt)},Yr=tt=>{Y&&Y(tt)},ai=tt=>{he&&M&&!F&&he(tt)},sn=()=>{ne&&Me&&c!=="visible"?ne(Me):ne&&c==="visible"&&(ne(),Ge(!1))},pt=kt(),ln=`intersection-${ur(pt)}`;qr(Ae,ai,{selectorToWatch:`#${ln}`,skipWhen:!be});const{error:cn,...qn}=vt("Combobox"),Sn=!!cn||I,xr=qn.id??E,Rn=qn.name??H,un=qn.required||Ve,Gn=h.Children.toArray(i).filter(Boolean).length,vr=!!!(Me&&Me!==""||X&&X!=="")&&Gn>100;let jn;return cn?jn=`${xr}-error`:qn.hint&&(jn=`${xr}-hint`),l.jsxs(Nt.Root,{autocomplete:n||(c===!0?"list":"both"),onOpenChange:ge,open:be,onTextValueChange:Se,textValue:Me,allowCustomValue:!!c||e,disabled:_,required:un,value:_e,onValueChange:Yr,filterValue:X,onFilterValueChange:ht,isPrintableCharacter:k,visible:c==="visible",children:[l.jsxs(tp,{$hasError:Sn,$size:Q,className:a,children:[l.jsxs(G,{flex:"1",tag:"span",gap:3,children:[ae?l.jsx(G,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:ae}):null,l.jsx(np,{placeholder:Ee,id:xr,"aria-invalid":!!cn,onChange:Ze,ref:xe,name:Rn,"aria-describedby":jn,...we})]}),l.jsxs(G,{tag:"span",gap:3,children:[Me&&te?l.jsx(kn,{size:"XS",variant:"ghost",onClick:Ye,"aria-disabled":_,"aria-label":o,label:o,ref:ye,children:l.jsx(fr,{})}):null,l.jsx(rp,{children:l.jsx(Fn,{fill:"neutral500"})})]})]}),l.jsx(Nt.Portal,{children:l.jsx(op,{sideOffset:4,children:l.jsxs(Nt.Viewport,{ref:Ae,children:[l.jsxs(ap,{children:[vr?l.jsx(P7,{itemCount:Gn,children:i}):i,c!==!0&&!F?l.jsx(Nt.NoValueFound,{asChild:!0,children:l.jsx(H0,{$hasHover:!1,children:l.jsx(le,{children:N(Me??"")})})}):null,F?l.jsx(G,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:l.jsx(V7,{small:!0,children:W})}):null,l.jsx(Z,{id:ln,width:"100%",height:"1px"})]}),c?l.jsx(ip,{onPointerUp:sn,onClick:sn,disabled:u,asChild:!0,children:l.jsx(H0,{children:l.jsxs(G,{gap:2,children:[m&&l.jsx(Z,{tag:"span","aria-hidden":!0,display:"inline-flex",children:m}),l.jsx(le,{children:x(Me??"")})]})})}):null]})})})]})}),tp=T(Nt.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};

  ${e=>{switch(e.$size){case"S":return oe`
          padding-inline-start: ${({theme:n})=>n.spaces[4]};
          padding-inline-end: ${({theme:n})=>n.spaces[3]};
          padding-block: ${({theme:n})=>n.spaces[1]};
        `;default:return oe`
          padding-inline-start: ${({theme:n})=>n.spaces[4]};
          padding-inline-end: ${({theme:n})=>n.spaces[3]};
          padding-block: ${({theme:n})=>n.spaces[2]};
        `}}}

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:n})=>yn()({theme:e,$hasError:n})};
`,np=T(Nt.TextInput)`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,rp=T(Nt.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,op=T(Nt.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  &:focus-visible {
    outline: ${({theme:e})=>`2px solid ${e.colors.primary600}`};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Ue.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Ue.slideDownIn};
      }
    }
  }
`,ip=T(Nt.CreateItem)`
  && {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: ${({theme:e})=>e.colors.neutral0};
    cursor: pointer;
    padding: ${({theme:e})=>e.spaces[1]};
    position: sticky;
    bottom: 0;
    left: 0;
  }
  &&:hover,
  &&[data-highlighted] {
    background: ${({theme:e})=>e.colors.neutral0};
  }
  &&[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    cursor: not-allowed;
  }
  &&[data-disabled] svg {
    fill: ${({theme:e})=>e.colors.neutral300};
  }
  && > div {
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  }
  && > div:hover,
  &&[data-highlighted] > div {
    background-color: ${({theme:e})=>e.colors.primary100};
    border-radius: ${({theme:e})=>e.borderRadius};
  }
  &&[data-disabled] > div {
    background-color: inherit;
  }
`,ap=T(oi)`
  padding: ${({theme:e})=>e.spaces[1]};
`,sp=h.forwardRef(({children:e,value:n,disabled:i,textValue:a,...o},c)=>l.jsx(Nt.ComboboxItem,{asChild:!0,value:n,disabled:i,textValue:a,children:l.jsx(H0,{ref:c,...o,children:l.jsx(Nt.ItemText,{asChild:!0,children:l.jsx(le,{children:e})})})})),H0=T.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:e,$hasHover:n=!0})=>n?e.colors.primary100:e.colors.neutral0};
  }

  &[data-highlighted] {
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`,Yc=(e,n)=>`${e}${Math.floor(n*255).toString(16).padStart(2,"0")}`;h.forwardRef((e,n)=>l.jsx(y6,{...e,asChild:!0,ref:n}));h.forwardRef((e,n)=>l.jsx(S6,{children:l.jsx(lp,{children:l.jsx(cp,{ref:n,...e})})}));const lp=T(R6)`
  background: ${e=>Yc(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Ue.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,cp=T(j6)`
  max-width: 42rem;
  height: min-content;
  width: calc(100% - ${({theme:e})=>e.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${Ue.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${Ue.modalPopOut};
    }
  }
`;h.forwardRef(({children:e,...n},i)=>l.jsx(_6,{asChild:!0,children:l.jsx(up,{tag:"h2",variant:"beta",ref:i,padding:6,fontWeight:"bold",...n,children:e})}));const up=T(le)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;h.forwardRef(({children:e,icon:n,...i},a)=>l.jsx(G,{ref:a,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...i,children:typeof e=="string"?l.jsxs(l.Fragment,{children:[n?h.cloneElement(n,{width:24,height:24}):null,l.jsx(dp,{children:e})]}):e}));const dp=h.forwardRef((e,n)=>l.jsx(A6,{asChild:!0,children:l.jsx(le,{ref:n,variant:"omega",...e,tag:"p"})}));h.forwardRef((e,n)=>l.jsx(hp,{ref:n,gap:2,padding:4,justifyContent:"space-between",...e,tag:"footer"}));const hp=T(G)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`;h.forwardRef((e,n)=>l.jsx(I6,{...e,asChild:!0,ref:n}));h.forwardRef((e,n)=>l.jsx(M6,{...e,asChild:!0,ref:n}));function on(e,n){const i=h.useRef(null);return n&&i.current&&fp(n,i.current)&&(n=i.current),i.current=n??null,h.useMemo(()=>new x4(e,n),[e,n])}function fp(e,n){if(e===n)return!0;const i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(const o of i)if(n[o]!==e[o])return!1;return!0}T6`
${oe`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    /* Sets 1rem === 10px */
    font-size: 62.5%;
  }

  body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: ${({theme:e})=>e.colors.neutral800};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    padding: 0;
    font: inherit;
  }

  button {
    border: unset;
    background: unset;
    padding: unset;
    margin: unset;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    font: unset;
  }

  #root {
    isolation: isolate;
  }

  ol,
  ul {
    list-style: none;
    padding: unset;
    margin: unset;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }

  *:has(> :disabled:not(button)) {
    cursor: not-allowed !important;
  }

  [aria-disabled='true']:not(button) {
    cursor: not-allowed !important;
  }

  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`}
`;const bl="en-EN",gp=()=>typeof navigator>"u"?bl:navigator.language?navigator.language:bl,[wb,ii]=gr("StrapiDesignSystem",{locale:gp()}),mp=B6,Zc=h.forwardRef(({container:e=globalThis?.document?.body,...n},i)=>e?dr.createPortal(l.jsx(Z,{ref:i,...n}),e):null);Zc.displayName="Portal";const wp=h.forwardRef(({onClear:e,clearLabel:n="Clear",startIcon:i,disabled:a,hasError:o,children:c,id:u,size:m="M",withTags:x,...C},p)=>{const y=h.useRef(null),b=I=>{e&&!a&&(e(I),y.current.focus())},{labelNode:R}=vt("SelectTrigger"),_=xt(y,p);return l.jsx(Ft.Trigger,{asChild:!0,children:l.jsxs(xp,{"aria-disabled":a,$hasError:o,ref:_,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:a?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":R?`${u}-label`:void 0,$size:m,$withTags:x,...C,children:[l.jsxs(G,{flex:"1",tag:"span",gap:3,children:[i&&l.jsx(G,{tag:"span","aria-hidden":!0,children:i}),c]}),l.jsxs(G,{tag:"span",gap:3,children:[e?l.jsx(kn,{size:"XS",variant:"ghost",onClick:b,"aria-disabled":a,"aria-label":n,label:n,children:l.jsx(fr,{})}):null,l.jsx(vp,{children:l.jsx(Fn,{})})]})]})})}),xp=T(G)`
  border: 1px solid ${({theme:e,$hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return oe`
          padding-block: ${e.theme.spaces[1]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `;default:return oe`
          padding-block: ${e.$withTags?"0.3rem":e.theme.spaces[2]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `}}}
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${e=>e.theme.colors.neutral500};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:n})=>yn()({theme:e,$hasError:n})};
`,vp=T(Ft.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,pp=h.forwardRef(({children:e,placeholder:n,...i},a)=>l.jsx(bp,{ref:a,ellipsis:!0,...i,children:l.jsx(Cp,{placeholder:n,children:e})})),bp=T(le)`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.2rem;
  min-height: 2.2rem;
`,Cp=T(Ft.Value)`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  flex-wrap: wrap;
`,$p=h.forwardRef((e,n)=>l.jsx(yp,{ref:n,...e,children:l.jsx(oi,{children:e.children})})),yp=T(Ft.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  min-width: var(--radix-select-trigger-width);
  max-height: 15.6rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Ue.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Ue.slideDownIn};
      }
    }
  }
`,Sp=T(Ft.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,Rp=h.forwardRef((e,n)=>l.jsx(_p,{ref:n,...e})),jp=oe`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${e=>e.theme.borderRadius};
  padding: ${e=>`${e.theme.spaces[2]} ${e.theme.spaces[4]}`};
  padding-left: ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  white-space: nowrap;
  user-select: none;
  color: ${({theme:e})=>e.colors.neutral800};

  &:focus-visible {
    outline: none;
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,_p=T(Ft.Item)`
  ${jp}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,Xc=Ft.Root,Qc=wp,Jc=pp,Pc=Ft.Portal,e2=$p,t2=Sp,ya=Rp,n2=Ft.ItemIndicator,r2=Ft.ItemText,Ap=Ft.Group,z0=h.forwardRef(({children:e,clearLabel:n="Clear",customizeContent:i,disabled:a,hasError:o,id:c,name:u,onChange:m,onClear:x,onCloseAutoFocus:C,onReachEnd:p,placeholder:y,required:b,size:R,startIcon:_,value:I,...E},V)=>{const[M,k]=h.useState(),[F,W]=h.useState(!1),H=we=>{W(we)},N=we=>{x&&x(we),m||k("")},Y=we=>{m?m(typeof I=="number"?Number(we):we):k(we)},te=h.useRef(null),ne=kt(),Re=`intersection-${ur(ne)}`;qr(te,we=>{p&&p(we)},{selectorToWatch:`#${Re}`,skipWhen:!F});const{error:de,required:he,...Ee}=vt("SingleSelect"),Ve=!!de||o,Q=Ee.id??c,ae=Ee.name??u;let je;de?je=`${Q}-error`:Ee.hint&&(je=`${Q}-hint`);const _e=(typeof I<"u"&&I!==null?I.toString():M)??"";return l.jsxs(Xc,{onOpenChange:H,disabled:a,required:he??b,onValueChange:Y,value:_e,...E,children:[l.jsx(Qc,{ref:V,id:Q,name:ae,startIcon:_,hasError:Ve,disabled:a,clearLabel:n,onClear:_e&&x?N:void 0,"aria-label":E["aria-label"],"aria-describedby":je??E["aria-describedby"],size:R,children:l.jsx(Jc,{placeholder:y,textColor:_e?"neutral800":"neutral600",children:_e&&i?i(_e):void 0})}),l.jsx(Pc,{children:l.jsx(e2,{position:"popper",sideOffset:4,onCloseAutoFocus:C,children:l.jsxs(t2,{ref:te,children:[e,l.jsx(Z,{id:Re,width:"100%",height:"1px"})]})})})]})}),N0=h.forwardRef(({value:e,startIcon:n,children:i,...a},o)=>l.jsxs(ya,{ref:o,value:e.toString(),...a,children:[n&&l.jsx(G,{tag:"span","aria-hidden":!0,children:n}),l.jsx(le,{lineHeight:"20px",width:"100%",children:l.jsx(r2,{children:i})})]})),Ip=200,Cl=15,[Mp,wr]=gr("DatePicker"),Tp=h.forwardRef(({calendarLabel:e,className:n,initialDate:i,locale:a,maxDate:o,minDate:c,monthSelectLabel:u="Month",onChange:m,value:x,yearSelectLabel:C="Year",hasError:p,id:y,name:b,disabled:R=!1,required:_=!1,onClear:I,clearLabel:E="Clear",size:V="M",...M},k)=>{const F=_0(),W=ii("DatePicker"),H=a??W.locale,N=on(H,{day:"2-digit",month:"2-digit",year:"numeric"}),[Y,te]=h.useState(!1),[ne,Re]=h.useState(null),[re,de]=h.useState(null),[he,Ee]=h.useState(null),[Ve,Q]=h.useState(),[ae,je]=Gt({defaultProp:i?Bn(i):void 0,prop:x?Bn(x):void 0,onChange(Se){m&&m(Se?.toDate(F))}}),[_e,we]=h.useMemo(()=>{const Se=i?Bn(i):q0("UTC"),ht=c?Bn(c):Se.set({day:1,month:1,year:Se.year-Ip});let Ze=o?Bn(o):Se.set({day:31,month:12,year:Se.year+Cl});return Ze.compare(ht)<0&&(Ze=ht.set({day:31,month:12,year:ht.year+Cl})),[ht,Ze]},[c,o,i]),[Pe,be]=h.useState(Ep({currentValue:ae,minDate:_e,maxDate:we})),Ge=kt(),Me=h.useRef(null),Ke=Se=>{I&&!R&&(Q(""),je(void 0),I(Se),re?.focus())},X=h.useCallback(Se=>{Se&&ae&&be(ae),te(Se)},[ae]);Cn(()=>{if(x){const Se=Bn(x);Q(N.format(Se.toDate(F))),be(Se)}else Q("")},[x,N,F]),Cn(()=>{if(i&&Ve===void 0){const Se=Bn(i);Q(N.format(Se.toDate(F)))}},[i,Ve,N,F]);const{error:fe,...Ae}=vt("Combobox"),$e=!!fe||p,xe=Ae.id??y,ye=Ae.name??b,Ye=Ae.required||_;let ge;return fe?ge=`${xe}-error`:Ae.hint&&(ge=`${xe}-hint`),l.jsxs(Mp,{calendarDate:Pe,content:he,contentId:Ge,disabled:R,locale:H,minDate:_e,maxDate:we,open:Y,onCalendarDateChange:be,onContentChange:Ee,onOpenChange:X,onTextInputChange:de,onTextValueChange:Q,onTriggerChange:Re,onValueChange:je,onClear:I,required:Ye,textInput:re,textValue:Ve,timeZone:F,trigger:ne,value:ae,children:[l.jsxs(Vp,{className:n,hasError:$e,size:V,children:[l.jsx(tw,{fill:"neutral500","aria-hidden":!0}),l.jsx(Bp,{ref:k,"aria-describedby":ge,id:xe,name:ye,...M}),Ve&&I?l.jsx(kn,{size:"XS",variant:"ghost",onClick:Ke,"aria-disabled":R,"aria-label":E,label:E,ref:Me,children:l.jsx(fr,{})}):null]}),l.jsx(Zc,{children:l.jsx(Fp,{label:e,children:l.jsx(Yp,{monthSelectLabel:u,yearSelectLabel:C})})})]})}),$l=e=>!!e.match(/^[^a-zA-Z]*$/),Ep=({currentValue:e,minDate:n,maxDate:i})=>{const a=q0("UTC");return e||(A0(n,a)===n&&I0(i,a)===i?a:A0(n,a)===a?n:I0(i,a)===a?i:a)},Lp="DatePickerTrigger",Vp=h.forwardRef(({hasError:e,size:n,...i},a)=>{const o=wr(Lp),c=xt(a,m=>o.onTriggerChange(m)),u=()=>{o.disabled||o.onOpenChange(!0)};return l.jsx(U0,{asChild:!0,trapped:o.open,onMountAutoFocus:m=>{m.preventDefault()},onUnmountAutoFocus:m=>{document.getSelection()?.empty(),m.preventDefault()},children:l.jsx(Dp,{ref:c,$hasError:e,$size:n,$hasOnClear:!!o.onClear,...i,hasRadius:!0,gap:3,overflow:"hidden",background:o.disabled?"neutral150":"neutral0",onClick:Hn(i.onClick,()=>{o.textInput?.focus()}),onPointerDown:Hn(i.onPointerDown,m=>{const x=m.target;x.hasPointerCapture(m.pointerId)&&x.releasePointerCapture(m.pointerId),(x.closest("button")??x.closest("div"))===m.currentTarget&&m.button===0&&m.ctrlKey===!1&&(u(),o.textInput?.focus())})})})}),Dp=T(G)`
  min-width: ${({$hasOnClear:e})=>e?"160px":"130px"};
  border: 1px solid ${({theme:e,$hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return oe`
          padding-block: ${e.theme.spaces[1]};
          padding-inline: ${e.theme.spaces[3]};
        `;default:return oe`
          padding-block: ${e.theme.spaces[2]};
          padding-inline: ${e.theme.spaces[3]};
        `}}}

  & > svg {
    flex: 1 0 auto;
  }

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:n})=>yn()({theme:e,$hasError:n})};
`,Op="DatePickerTextInput",Bp=h.forwardRef(({placeholder:e,...n},i)=>{const a=wr(Op),{onTextValueChange:o,textValue:c,onTextInputChange:u,onOpenChange:m,disabled:x,locale:C}=a,p=xt(i,V=>u(V)),y=()=>{x||m(!0)},b=on(C,{year:"numeric",month:"2-digit",day:"2-digit"}),[R,_,I]=h.useMemo(()=>{const V=b.formatToParts(new Date),M=V.filter(W=>W.type==="year"||W.type==="month"||W.type==="day"),k=M.map(W=>{switch(W.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),F=V.find(W=>W.type==="literal")?.value??"";return[k,F,M]},[b]),E=R.map(V=>`\\d{${V.length}}`).join(`\\${_}`);return l.jsx(zp,{role:"combobox",type:"text",inputMode:"numeric",ref:p,"aria-autocomplete":"none","aria-controls":a.contentId,"aria-disabled":a.disabled,"aria-expanded":a.open,"aria-required":a.required,"aria-haspopup":"dialog","data-state":a.open?"open":"closed",disabled:x,"data-disabled":x?"":void 0,pattern:E,placeholder:e??R.join(_),...n,value:c??"",onBlur:Hn(n.onBlur,()=>{if(!a.textValue){a.onValueChange(void 0);return}a.onTextValueChange(b.format(a.calendarDate.toDate(a.timeZone))),a.onValueChange(a.calendarDate)}),onChange:Hn(n.onChange,V=>{if($l(V.target.value)){const M=V.target.value.split(_),[k,F,W]=I.map((de,he)=>{const Ee=M[he];return{...de,value:Ee}}).sort((de,he)=>de.type==="year"?1:he.type==="year"?-1:de.type==="month"?1:he.type==="month"?-1:0).map(de=>de.value),H=a.calendarDate.year;let N=a.calendarDate.year;if(W){const de=W.length===1?`0${W}`:W;N=W.length<3?Number(`${H}`.slice(0,4-de.length)+de):Number(de)}W&&W.length<3&&N>a.maxDate.year&&(N-=100);const Y=a.calendarDate.set({year:N}),te=Y.calendar.getMonthsInYear(Y),ne=Y.set({month:F&&Number(F)<=te?Number(F):void 0}),Re=ne.calendar.getDaysInMonth(ne),re=ne.set({day:k&&Number(k)<=Re?Number(k):void 0});a.onCalendarDateChange(Hp(re,a.minDate,a.maxDate)),a.onTextValueChange(V.target.value)}}),onKeyDown:Hn(n.onKeyDown,V=>{if(!a.open&&($l(V.key)||["ArrowDown","Backspace"].includes(V.key)))y();else if(["Tab"].includes(V.key)&&a.open)V.preventDefault();else if(["Escape"].includes(V.key))a.open?a.onOpenChange(!1):(a.onValueChange(void 0),a.onTextValueChange("")),V.preventDefault();else if(a.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(V.key))switch(V.preventDefault(),V.key){case"ArrowDown":{const M=a.calendarDate.add({weeks:1});if(a.maxDate&&M.compare(a.maxDate)>0)return;a.onCalendarDateChange(M);return}case"ArrowRight":{const M=a.calendarDate.add({days:1});if(a.maxDate&&M.compare(a.maxDate)>0)return;a.onCalendarDateChange(M);return}case"ArrowUp":{const M=a.calendarDate.subtract({weeks:1});if(a.minDate&&M.compare(a.minDate)<0)return;a.onCalendarDateChange(M);return}case"ArrowLeft":{const M=a.calendarDate.subtract({days:1});if(a.minDate&&M.compare(a.minDate)<0)return;a.onCalendarDateChange(M)}}else a.open&&["Enter"].includes(V.key)&&(V.preventDefault(),o(b.format(a.calendarDate.toDate(a.timeZone))),a.onValueChange(a.calendarDate),a.onOpenChange(!1))})})});function Hp(e,n,i){return n&&(e=I0(e,n)),i&&(e=A0(e,i)),e}const zp=T.input`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Np="DatePickerContent",Fp=h.forwardRef((e,n)=>{const i=wr(Np),[a,o]=h.useState(!1);return h.useEffect(()=>{i.open&&!a&&o(!0)},[i.open,a]),!i.open&&!a||!i.open?null:l.jsx(Wp,{...e,ref:n})}),kp="DatePickerContent",Wp=h.forwardRef((e,n)=>{const{label:i="Choose date",...a}=e,{onOpenChange:o,...c}=wr(kp),{x:u,y:m,refs:x,strategy:C,placement:p}=E6({strategy:"fixed",placement:"bottom-start",middleware:[V6({mainAxis:4}),D6(),O6()],elements:{reference:c.trigger},whileElementsMounted:L6});h.useEffect(()=>{const b=()=>{o(!1)};return window.addEventListener("blur",b),window.addEventListener("resize",b),()=>{window.removeEventListener("blur",b),window.removeEventListener("resize",b)}},[o]);const y=xt(n,b=>c.onContentChange(b),x.setFloating);return k0(),l.jsx(W0,{allowPinchZoom:!0,children:l.jsx(mp,{asChild:!0,onFocusOutside:b=>{b.preventDefault()},onDismiss:()=>{o(!1)},children:l.jsx(Up,{ref:y,"data-state":c.open?"open":"closed","data-side":p.includes("top")?"top":"bottom",onContextMenu:b=>b.preventDefault(),id:c.contentId,role:"dialog","aria-modal":"true","aria-label":i,style:{left:u,top:m,position:C},hasRadius:!0,background:"neutral0",padding:1,...a})})})}),Up=T(Z)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Ue.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Ue.slideDownIn};
      }
    }
  }
`,qp="DatePickerCalendar",[Gp,Kp]=gr("DateFormatters"),Yp=h.forwardRef(({monthSelectLabel:e,yearSelectLabel:n,...i},a)=>{const{locale:o,timeZone:c,minDate:u,maxDate:m,calendarDate:x,onCalendarDateChange:C}=wr(qp),p=H6(x),y=h.useMemo(()=>{const H=u.year,N=m.year;return[...Array(N-H+1).keys()].map(Y=>(H+Y).toString())},[u,m]),b=on(o,{month:"long"}),R=h.useMemo(()=>[...Array(x.calendar.getMonthsInYear(x)).keys()].map(H=>b.format(x.set({month:H+1}).toDate(c))),[x,b,c]),_=on(o,{weekday:"short"}),I=h.useMemo(()=>{const H=zl(q0(c),o);return[...new Array(7).keys()].map(N=>{const te=H.add({days:N}).toDate(c);return _.format(te)})},[c,o,_]),E=on(o,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),V=on(o,{day:"numeric",calendar:x.calendar.identifier}),M=on(o,{day:"2-digit",month:"2-digit",year:"numeric"}),k=H=>{if(typeof H=="number")return;const N=x.set({month:R.indexOf(H)+1});C(N)},F=H=>{if(typeof H=="number")return;const N=x.set({year:parseInt(H,10)});C(N)},W=Zp(p,o);return l.jsx(Gp,{dateFormatter:E,cellDateFormatter:V,textValueFormatter:M,children:l.jsxs(G,{ref:a,direction:"column",alignItems:"stretch",padding:4,...i,children:[l.jsxs(Xp,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[l.jsx(Wn,{children:l.jsx(z0,{"aria-label":e,value:R[x.month-1],onChange:k,children:R.map(H=>l.jsx(N0,{value:H,children:H},H))})}),l.jsx(Wn,{children:l.jsx(z0,{value:x.year.toString(),"aria-label":n,onChange:F,children:y.map(H=>l.jsx(N0,{value:H,children:H},H))})})]}),l.jsxs("table",{role:"grid",children:[l.jsx("thead",{"aria-hidden":!0,children:l.jsx("tr",{"aria-rowindex":0,children:I.map((H,N)=>l.jsx(Qp,{"aria-colindex":N,children:H},H))})}),l.jsx("tbody",{children:[...new Array(6).keys()].map(H=>l.jsx("tr",{"aria-rowindex":H+2,children:W(H).map((N,Y)=>N?l.jsx(e9,{"aria-colindex":Y+1,date:N,startDate:p,disabled:u.compare(N)>0||N.compare(m)>0},N.toString()):l.jsx(o2,{"aria-colindex":Y+1},Y+1))},H))})]})]})})}),Zp=(e,n)=>i=>{let a=e.add({weeks:i});const o=[];a=zl(a,n);const c=z6(a,n);for(let u=0;u<c;u++)o.push(null);for(;o.length<7;){o.push(a);const u=a.add({days:1});if(Nl(a,u))break;a=u}for(;o.length<7;)o.push(null);return o},Xp=T(G)`
  div[role='combobox'] {
    border: 1px solid transparent;
    background: transparent;
    font-weight: ${e=>e.theme.fontWeights.bold};

    svg {
      fill: ${({theme:e})=>e.colors.neutral500};
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};
    }
  }
`,Qp=h.forwardRef(({children:e,...n},i)=>l.jsx(Jp,{tag:"th",role:"gridcell",ref:i,...n,height:"2.4rem",width:"3.2rem",children:l.jsx(le,{variant:"pi",fontWeight:"bold",color:"neutral800",children:e.slice(0,2)})})),Jp=T(Z)`
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,Pp="DatePickerCalendarCell",e9=h.forwardRef(({date:e,startDate:n,disabled:i,...a},o)=>{const{timeZone:c,calendarDate:u,onValueChange:m,onOpenChange:x,onTextValueChange:C,onCalendarDateChange:p}=wr(Pp),{dateFormatter:y,cellDateFormatter:b,textValueFormatter:R}=Kp("DatePickerCalendarCell"),_=Nl(u,e),I=h.useMemo(()=>y.format(e.toDate(c)),[y,e,c]),E=h.useMemo(()=>b.formatToParts(e.toDate(c)).find(F=>F.type==="day").value,[b,e,c]),V=N6(n),M=e.compare(n)<0||e.compare(V)>0;let k="neutral900";return _?k="primary600":M&&(k="neutral600"),l.jsx(o2,{tag:"td",role:"gridcell",ref:o,"aria-selected":_,...a,hasRadius:!0,"aria-label":I,tabIndex:_?0:-1,background:_?"primary100":"neutral0",cursor:"pointer",onPointerDown:Hn(a.onPointerDown,F=>{F.preventDefault(),p(e),m(e),C(R.format(e.toDate(c))),x(!1)}),"aria-disabled":i,children:l.jsx(le,{variant:"pi",textColor:k,children:E})})}),o2=T(Z)`
  text-align: center;
  padding: 0.7rem;
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px !important;
  &[aria-disabled='true'] {
    pointer-events: none;
    opacity: 0.5;
  }

  &[aria-disabled='false'] {
    &:hover {
      background: ${({theme:e})=>e.colors.primary100};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Bn=e=>{const n=e.toISOString(),i=F6(n,"UTC");return k6(i)},t9=h.memo(Tp),S0=e=>!!e.match(/^[^a-zA-Z]*$/);function n9(e=""){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const r9=T(ep)`
  min-width: ${({onClear:e})=>e?"160px":"130px"};
`,o9=h.forwardRef(({step:e=15,value:n,defaultValue:i,onChange:a,...o},c)=>{const u=ii("TimePicker"),[m,x]=h.useState(""),[C,p]=Gt({prop:n,defaultProp:i,onChange:a}),y=on(u.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),b=h.useMemo(()=>{const F=y.formatToParts(new Date),{value:W}=F.find(H=>H.type==="literal");return W},[y]),R=h.useMemo(()=>{const F=60/e;return[...Array(24).keys()].flatMap(W=>[...Array(F).keys()].map(H=>y.format(new Date(0,0,0,W,H*e))))},[e,y]),_=F=>{(!F||S0(F))&&x(F)},I=F=>{const[W,H]=F.split(b);if(!W&&!H)return;const N=Number(W??"0"),Y=Number(H??"0");if(!(N>23||Y>59))return y.format(new Date(0,0,0,N,Y))},E=F=>{const W=I(F.target.value);W?(x(W),p(W)):x(C)},V=F=>{if(typeof F<"u"){const W=I(F);p(W)}else p(F)};h.useEffect(()=>{const F=typeof n>"u"?"":n;S0(F)&&x(F)},[n,x]);const k=`\\d{2}${n9(b)}\\d{2}`;return l.jsx(r9,{...o,ref:c,value:C,onChange:V,isPrintableCharacter:S0,allowCustomValue:!0,placeholder:`--${b}--`,autocomplete:"none",startIcon:l.jsx(vw,{fill:"neutral500"}),inputMode:"numeric",pattern:k,textValue:m,onTextValueChange:_,onBlur:E,children:R.map(F=>l.jsx(sp,{value:F,children:F},F))})});h.forwardRef(({clearLabel:e="clear",dateLabel:n="Choose date",timeLabel:i="Choose time",disabled:a=!1,hasError:o,onChange:c,onClear:u,required:m=!1,step:x,value:C,initialDate:p,size:y,...b},R)=>{const _=h.useRef(null),[I,E]=h.useState(!1),V=C?Dr(C,!1):void 0,[M,k]=Gt({defaultProp:p?Dr(p,!1):void 0,prop:I?void 0:V,onChange(Q){c&&c(Q?.toDate(_0()))}}),F=ii("DateTimePicker"),W=on(F.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),H=M?W.format(M.toDate(_0())):"",N=h.useRef(C);Cn(()=>{I&&M&&k(void 0)},[I,M,k]),Cn(()=>{const Q=N.current;C==null&&Q!=null&&M&&k(void 0),I&&C!==Q&&E(!1),N.current=C},[C,M,I,k,E]),Cn(()=>{I&&M===void 0&&C==null&&E(!1)},[I,M,C,E]);const Y=Q=>{let ae=Q?Dr(Q):void 0;if(H&&ae){const[je,_e]=H.split(":");ae=ae.set({hour:parseInt(je,10),minute:parseInt(_e,10)})}k(ae)},te=Q=>{if(!Q)return;const[ae,je]=Q.split(":"),_e=M?M.set({hour:parseInt(ae,10),minute:parseInt(je,10)}):Dr(new Date).set({hour:parseInt(ae,10),minute:parseInt(je,10)});k(_e)},ne=Q=>{Q.preventDefault(),E(!0),u&&u(Q)},Re=()=>{const Q=M?M.set({hour:0,minute:0}):Dr(new Date);k(Q)},re=xt(_,R),{error:de,id:he,labelNode:Ee}=vt("DateTimePicker"),Ve=!!de||o;return l.jsxs(G,{"aria-labelledby":Ee?`${he}-label`:void 0,role:"group",flex:"1",gap:1,wrap:"wrap",children:[l.jsx(Wn,{flex:"1",children:l.jsx(t9,{...b,hasError:Ve,size:y,value:M?.toDate("UTC"),onChange:Y,required:m,onClear:u?ne:void 0,clearLabel:`${e} date`,disabled:a,ref:re,"aria-label":n})}),l.jsx(Wn,{flex:"1",children:l.jsx(o9,{size:y,hasError:Ve,value:H,onChange:te,onClear:u&&H!==void 0&&H!=="00:00"?Re:void 0,clearLabel:`${e} time`,required:m,disabled:a,step:x,"aria-label":i})})]})});const Dr=(e,n=!0)=>{const i=e.toISOString();let a=W6(i);return n&&(a=a.set({hour:0,minute:0})),U6(a)},i9=h.forwardRef((e,n)=>l.jsx(a9,{ref:n,background:"neutral150",...e,"data-orientation":"horizontal",role:"separator",tag:"div"})),a9=T(Z)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,s9=T(Z)`
  svg {
    height: 8.8rem;
  }
`;h.forwardRef(({icon:e,content:n,action:i,hasRadius:a=!0,shadow:o="tableShadow"},c)=>l.jsxs(G,{ref:c,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:a,shadow:o,children:[e?l.jsx(s9,{paddingBottom:6,"aria-hidden":!0,children:e}):null,l.jsx(Z,{paddingBottom:4,children:l.jsx(le,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:n})}),i]}));const i2=Fl.define(),a2=Fl.define(),l9=kl.mark({attributes:{style:"background-color: yellow; color: black"}}),c9=q6.define({create(){return kl.none},update(e,n){return e=e.map(n.changes),n.effects.forEach(i=>{i.is(i2)?e=e.update({add:i.value,sort:!0}):i.is(a2)&&(e=e.update({filter:i.value}))}),e},provide:e=>G6.decorations.from(e)});h.forwardRef(({hasError:e,required:n,id:i,value:a="",disabled:o=!1,onChange:c=()=>null,...u},m)=>{const x=h.useRef(),C=h.useRef(),p=h.useRef(),{error:y,...b}=vt("JsonInput"),R=!!y||e,_=b.id??i,I=b.required||n;let E;y?E=`${_}-error`:b.hint&&(E=`${_}-hint`);const V=te=>{const ne=C.current?.doc;if(ne){const{text:Re,to:re}=ne.line(te),de=re-Re.trimStart().length;re>de&&p.current?.dispatch({effects:i2.of([l9.range(de,re)])})}},M=()=>{const te=C.current?.doc;if(te){const ne=te.length||0;p.current?.dispatch({effects:a2.of((Re,re)=>re<=0||Re>=ne)})}},k=({state:te,view:ne})=>{p.current=ne,C.current=te,M();const re=v4()(ne);re.length&&V(te.doc.lineAt(re[0].from).number)},F=(te,ne)=>{k(ne),c(te)},W=(te,ne)=>{p.current=te,C.current=ne,k({view:te,state:ne})},{setContainer:H,view:N}=K6({value:a,onCreateEditor:W,container:x.current,editable:!o,extensions:[Y6(),c9],onChange:F,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),Y=xt(x,H);return h.useImperativeHandle(m,()=>({...N?.dom,focus(){N&&N.focus()},scrollIntoView(te){N&&N.dom.scrollIntoView(te)}}),[N]),l.jsx(u9,{ref:Y,$disabled:o,$hasError:R,alignItems:"stretch",fontSize:2,hasRadius:!0,"aria-required":I,id:_,"aria-describedby":E,...u})});const u9=T(G)`
  line-height: ${({theme:e})=>e.lineHeights[2]};

  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
    cursor: ${({$disabled:e})=>e?"not-allowed":"text"};
  }

  .cm-scroller {
    border: 1px solid ${({theme:e,$hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${yn()}
  }

  .cm-editor,
  .cm-scroller {
    border-radius: ${({theme:e})=>e.borderRadius};
  }

  .cm-gutters,
  .cm-activeLineGutter {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral700 changes between themes 
     */
    background-color: #4a4a6a;
  }
`;dt(({disabled:e,...n},i)=>l.jsx(Zo,{ref:i,tag:Ur,tabIndex:e?-1:void 0,disabled:e,...n}));T(Z)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;T(Z)`
  text-decoration: none;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`;h.forwardRef((e,n)=>l.jsx(Z6,{...e,asChild:!0,ref:n}));h.forwardRef((e,n)=>l.jsx(X6,{children:l.jsx(d9,{children:l.jsx(h9,{ref:n,...e})})}));const d9=T(Q6)`
  background: ${e=>Yc(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Ue.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,h9=T(J6)`
  max-width: 83rem;
  max-height: 90vh;
  height: auto;
  width: calc(100% - ${({theme:e})=>e.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  ${({theme:e})=>e.breakpoints.medium} {
    width: calc(100% - ${({theme:e})=>e.spaces[9]});
  }
  > form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${Ue.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${Ue.modalPopOut};
    }
  }
`,f9=h.forwardRef((e,n)=>l.jsx(P6,{...e,asChild:!0,ref:n}));h.forwardRef(({children:e,closeLabel:n="Close modal",...i},a)=>l.jsxs(g9,{ref:a,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...i,tag:"header",children:[e,l.jsx(f9,{children:l.jsx(kn,{withTooltip:!1,label:n,children:l.jsx(fr,{})})})]}));const g9=T(G)`
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;h.forwardRef((e,n)=>l.jsx(e4,{asChild:!0,children:l.jsx(le,{tag:"h2",variant:"omega",fontWeight:"bold",ref:n,...e})}));h.forwardRef(({children:e,...n},i)=>l.jsx(m9,{ref:i,...n,children:e}));const m9=T(oi)`
  padding-inline: ${e=>e.theme.spaces[7]};

  & > div {
    padding-block: ${e=>e.theme.spaces[8]};
    /* Add negative margin and padding to avoid cropping the box shadow when the inputs are focused */
    margin: 0 -2px 0 -2px;
    padding-left: 2px;
    padding-right: 2px;

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`;h.forwardRef((e,n)=>l.jsx(w9,{ref:n,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...e,tag:"footer"}));const w9=T(G)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,x9="";h.forwardRef(({startAction:e,locale:n,onValueChange:i,value:a,step:o=1,disabled:c=!1,...u},m)=>{const x=ii("NumberInput"),C=n||x.locale,p=h.useRef(new t4(C,{style:"decimal"})),y=h.useRef(new n4(C,{maximumFractionDigits:20})),[b,R]=v9({prop(H){const N=String(a);return isNaN(Number(N))||N!==H&&H!==""?H:y.current.format(Number(a))},defaultProp:x9,onChange(H){if(!i)return;const N=p.current.parse(H??"");i(isNaN(N)?void 0:N)}}),_=H=>{R(String(H))},I=({target:{value:H}})=>{p.current.isValidPartialNumber(H)&&_(H)},V=(H=>{const N=H.toString();return N.includes(".")?N.split(".")[1].length:0})(o),M=()=>{if(!b){_(o);return}const H=p.current.parse(b),N=isNaN(H)?o:H+o,Y=parseFloat(N.toFixed(V));_(y.current.format(Y))},k=()=>{if(!b){_(-o);return}const H=p.current.parse(b),N=isNaN(H)?-o:H-o,Y=parseFloat(N.toFixed(V));_(y.current.format(Y))},F=H=>{if(!c)switch(H.key){case st.DOWN:{H.preventDefault(),k();break}case st.UP:{H.preventDefault(),M();break}}},W=()=>{if(b){const H=p.current.parse(b),N=isNaN(H)?"":y.current.format(H);_(N)}};return l.jsx(ri,{ref:m,startAction:e,disabled:c,type:"text",inputMode:"decimal",onChange:I,onKeyDown:F,onBlur:W,value:b,endAction:l.jsxs(G,{direction:"column",children:[l.jsx(yl,{disabled:c,"aria-hidden":!0,$reverse:!0,onClick:M,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:l.jsx(Fn,{fill:"neutral500"})}),l.jsx(yl,{disabled:c,"aria-hidden":!0,onClick:k,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:l.jsx(Fn,{fill:"neutral500"})})]}),...u})});const yl=T.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${({$reverse:e})=>e?"-2px":"2px"});
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  height: 1.1rem;

  svg {
    width: 1.2rem;
    transform: ${({$reverse:e})=>e?"rotateX(180deg)":void 0};
  }
`;function v9({prop:e,defaultProp:n,onChange:i=()=>{}}){const[a,o]=Mc({defaultProp:n,onChange:i}),c=e!==void 0,u=e instanceof Function?e(a):e,m=c?u:a,x=Q0(i),C=h.useCallback(p=>{if(c){const b=typeof p=="function"?p(u):p;b!==u&&(x(b),o(p))}else o(p)},[c,u,o,x]);return[m,C]}const p9=h.createContext({activePage:1,pageCount:1}),Sa=()=>h.useContext(p9);dt(({children:e,...n},i)=>{const{activePage:a}=Sa(),o=a===1;return l.jsxs(l2,{ref:i,"aria-disabled":o,tabIndex:o?-1:void 0,...n,children:[l.jsx(mr,{children:e}),l.jsx(Sc,{"aria-hidden":!0})]})});dt(({children:e,...n},i)=>{const{activePage:a,pageCount:o}=Sa(),c=a===o;return l.jsxs(l2,{ref:i,"aria-disabled":c,tabIndex:c?-1:void 0,...n,children:[l.jsx(mr,{children:e}),l.jsx(wa,{"aria-hidden":!0})]})});const s2=T(Ur)`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:n})=>e?n.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${ei}
`,l2=T(s2)`
  font-size: 1.1rem;

  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`;dt(({number:e,children:n,...i},a)=>{const{activePage:o}=Sa(),c=o===e;return l.jsxs(b9,{ref:a,...i,"aria-current":c,$active:c,children:[l.jsx(mr,{children:n}),l.jsx(le,{"aria-hidden":!0,fontWeight:c?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})});const b9=T(s2)`
  color: ${({theme:e,$active:n})=>n?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:n})=>n?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`;h.forwardRef((e,n)=>l.jsx(r4,{...e,asChild:!0,ref:n}));h.forwardRef((e,n)=>l.jsx(o4,{children:l.jsx(C9,{sideOffset:4,side:"bottom",align:"start",...e,ref:n})}));const C9=T(i4)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  background-color: ${e=>e.theme.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Ue.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Ue.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${Ue.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${Ue.slideDownOut};
      }
    }
  }
`;h.forwardRef(({children:e,intersectionId:n,onReachEnd:i,...a},o)=>{const c=h.useRef(null),u=xt(c,o),m=kt();return qr(c,i??(()=>{}),{selectorToWatch:`#${ur(m)}`,skipWhen:!n||!i}),l.jsxs($9,{ref:u,...a,children:[e,n&&i&&l.jsx(Z,{id:ur(m),width:"100%",height:"1px"})]})});const $9=T(oi)`
  height: 20rem;
`;h.forwardRef(({size:e="M",value:n,...i},a)=>l.jsx(y9,{ref:a,$size:e,...i,children:l.jsx(S9,{style:{transform:`translate3D(-${100-(n??0)}%, 0, 0)`}})}));const y9=T(a4)`
  position: relative;
  overflow: hidden;
  width: ${e=>e.$size==="S"?"7.8rem":"10.2rem"};
  height: ${e=>e.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${e=>e.theme.colors.neutral600};
  border-radius: ${e=>e.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,S9=T(s4)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[320]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;h.forwardRef((e,n)=>l.jsx(R9,{ref:n,...e}));const R9=T(l4)`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spaces[3]};
`;h.forwardRef(({children:e,id:n,...i},a)=>{const o=kt(n);return l.jsxs(G,{gap:2,children:[l.jsx(j9,{id:o,ref:a,...i,children:l.jsx(_9,{})}),l.jsx(le,{tag:"label",htmlFor:o,children:e})]})});const j9=T(c4)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  cursor: pointer;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }

  &[data-state='checked'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,_9=T(u4)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${Ue.popIn} ${e=>e.theme.motion.timings[200]};
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary600};
  }
`,A9=e=>{const n=e.querySelector('[tabindex="0"]');n&&n.focus()},c2=h.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),I9=()=>h.useContext(c2),M9=h.forwardRef(({colCount:e,rowCount:n,jumpStep:i=3,initialCol:a=0,initialRow:o=0,...c},u)=>{const m=h.useRef(null),x=h.useRef(!1),C=xt(m,u),[p,y]=h.useState(o),[b,R]=h.useState(a),_=h.useCallback(({colIndex:V,rowIndex:M})=>{R(V),y(M)},[]);h.useEffect(()=>{x.current&&A9(m.current),x.current||(x.current=!0)},[b,p]);const I=V=>{switch(V.key){case st.RIGHT:{V.preventDefault(),R(M=>M<e-1?M+1:M);break}case st.LEFT:{V.preventDefault(),R(M=>M>0?M-1:M);break}case st.UP:{V.preventDefault(),y(M=>M>0?M-1:M);break}case st.DOWN:{V.preventDefault(),y(M=>M<n-1?M+1:M);break}case st.HOME:{V.preventDefault(),V.ctrlKey&&y(0),R(0);break}case st.END:{V.preventDefault(),V.ctrlKey&&y(n-1),R(e-1);break}case st.PAGE_DOWN:{V.preventDefault(),y(M=>M+i<n?M+i:n-1);break}case st.PAGE_UP:{V.preventDefault(),y(M=>M-i>0?M-i:0);break}}},E=h.useMemo(()=>({rowIndex:p,colIndex:b,setTableValues:_}),[b,p,_]);return l.jsx(c2.Provider,{value:E,children:l.jsx("table",{role:"grid",ref:C,"aria-rowcount":n,"aria-colcount":e,onKeyDown:I,...c})})}),Or=(e,n)=>[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(o=>!o.hasAttribute("disabled")),R0=e=>e.filter(n=>n.tagName==="INPUT"?n.type!=="checkbox"&&n.type!=="radio":!1),u2=h.forwardRef(({coords:e={col:0,row:0},tag:n="td",...i},a)=>{const o=h.useRef(null),c=xt(a,o),{rowIndex:u,colIndex:m,setTableValues:x}=I9(),[C,p]=h.useState(!1),y=_=>{const I=Or(o.current);if(I.length===0||I.length===1&&R0(I).length===0)return;if(I.length>1&&!I.find(V=>V.tagName!=="BUTTON")){_.preventDefault();const V=I.findIndex(M=>M===document.activeElement);if(_.key===st.RIGHT){const M=I[V+1];M&&(_.stopPropagation(),M.focus())}else if(_.key===st.LEFT){const M=I[V-1];M&&(_.stopPropagation(),M.focus())}return}const E=_.key===st.ENTER;if(E&&!C)p(!0);else if((_.key===st.ESCAPE||E)&&C){if(E&&document.activeElement?.tagName==="A")return;p(!1),o.current.focus()}else C&&_.stopPropagation()},b=u===e.row-1&&m===e.col-1;Cn(()=>{const _=Or(o.current);_.length===0||_.length===1&&R0(_).length!==0||_.length>1&&_.find(I=>I.tagName!=="BUTTON")?(o.current.setAttribute("tabIndex",!C&&b?"0":"-1"),_.forEach((I,E)=>{I.setAttribute("tabIndex",C?"0":"-1"),C&&E===0&&I.focus()})):_.forEach(I=>{I.setAttribute("tabIndex",b?"0":"-1")})},[C,b]);const R=h.useCallback(()=>{const _=Or(o.current);_.length>=1&&(R0(_).length!==0||!_.find(I=>I.tagName!=="BUTTON"))&&p(!0),x({rowIndex:e.row-1,colIndex:e.col-1})},[e,x]);return Cn(()=>{const _=o.current;return Or(_).forEach(E=>{E.addEventListener("focus",R)}),()=>{Or(_).forEach(V=>{V.removeEventListener("focus",R)})}},[R]),l.jsx(Z,{role:"gridcell",tag:n,ref:c,onKeyDown:y,...i})}),T9=e=>l.jsx(u2,{...e,tag:"th"}),E9=({children:e,...n})=>{const i=h.Children.toArray(e).map(a=>h.isValidElement(a)?h.cloneElement(a,{"aria-rowindex":1}):a);return l.jsx("thead",{...n,children:i})},L9=({children:e,...n})=>{const i=h.Children.toArray(e).map((a,o)=>h.isValidElement(a)?h.cloneElement(a,{"aria-rowindex":o+2}):a);return l.jsx("tbody",{...n,children:i})},V9=({children:e,...n})=>{const i=h.Children.toArray(e).map((a,o)=>h.isValidElement(a)?h.cloneElement(a,{"aria-colindex":o+1,coords:{col:o+1,row:n["aria-rowindex"]}}):a);return l.jsx(Z,{tag:"tr",...n,children:i})},D9=T(fr)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,d2=T(Av)`
  font-size: 1rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,O9=T.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  &:focus-within {
    ${d2} {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,B9=T(ri)`
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  padding: 0 0 0 8px;
  color: ${({theme:e})=>e.colors.neutral800};

  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${yn()}

  > input::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  > input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  > input::-webkit-search-decoration,
  > input::-webkit-search-cancel-button,
  > input::-webkit-search-results-button,
  > input::-webkit-search-results-decoration {
    display: none;
  }
`;h.forwardRef(({name:e,children:n,value:i="",onClear:a,clearLabel:o="Clear",...c},u)=>{const m=h.useRef(null),x=i.length>0,C=y=>{a(y),m.current.focus()},p=Vc(u,m);return l.jsx(O9,{children:l.jsxs(Wn,{name:e,children:[l.jsx(mr,{children:l.jsx($a,{children:n})}),l.jsx(B9,{size:"S",type:"search",ref:p,value:i,startAction:l.jsx(d2,{"aria-hidden":!0}),onKeyDown:y=>{y.stopPropagation(),y.key==="Escape"&&x&&C(y)},endAction:x?l.jsx(kn,{onClick:C,onMouseDown:y=>{y.preventDefault()},label:o,size:"XS",variant:"ghost",type:"button",children:l.jsx(D9,{})}):void 0,...c})]})})});const H9=T(Z)`
  display: inline-flex;
  border: none;

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & > svg path {
    fill: ${({theme:e,...n})=>n["aria-disabled"]?e.colors.neutral600:e.colors.primary600};
  }

  &:hover {
    cursor: ${({$iconAction:e})=>e?"pointer":"initial"};
  }
`,z9=({children:e,icon:n,label:i,disabled:a=!1,onClick:o,...c})=>{const u=m=>{a||!o||o(m)};return l.jsxs(G,{inline:!0,background:a?"neutral200":"primary100",color:a?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:a?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...c,children:[l.jsx(N9,{$disabled:a,variant:"pi",fontWeight:"bold",children:e}),l.jsx(H9,{tag:"button",disabled:a,"aria-disabled":a,"aria-label":i,padding:2,onClick:u,$iconAction:!!o,children:n})]})},N9=T(le)`
  color: inherit;
  border-right: 1px solid ${({theme:e,$disabled:n})=>n?e.colors.neutral300:e.colors.primary200};
  padding-right: ${({theme:e})=>e.spaces[2]};
`;h.forwardRef(({children:e,clearLabel:n="Clear",customizeContent:i,disabled:a,hasError:o,id:c,name:u,onChange:m,onClear:x,onCloseAutoFocus:C,onReachEnd:p,placeholder:y,required:b,size:R,startIcon:_,value:I,withTags:E,...V},M)=>{const k=h.useRef(null),[F,W]=h.useState(),[H,N]=h.useState(!1),Y=be=>{m?m(be):W(be)},te=be=>()=>{const Ge=Array.isArray(I)?I.filter(Me=>Me!==be):(F??[]).filter(Me=>Me!==be);m?m(Ge):W(Ge)},ne=be=>{N(be)},Re=kt(),re=`intersection-${ur(Re)}`;qr(k,be=>{p&&p(be)},{selectorToWatch:`#${re}`,skipWhen:!H});const he=typeof I<"u"&&I!==null?I:F,Ee=be=>be&&typeof be=="object"&&be.value?l.jsx(z9,{tabIndex:-1,disabled:a,icon:l.jsx(fr,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:te(be.value),children:be.textValue},be.value):null,{error:Ve,...Q}=vt("MultiSelect"),ae=!!Ve||o,je=Q.id??c,_e=Q.name??u,we=Q.required??b;let Pe;return Ve?Pe=`${je}-error`:Q.hint&&(Pe=`${je}-hint`),l.jsxs(Xc,{onOpenChange:ne,disabled:a,required:we,onValueChange:Y,value:he,...V,multi:!0,children:[l.jsx(Qc,{ref:M,id:je,name:_e,"aria-label":V["aria-label"],"aria-describedby":Pe??V["aria-describedby"],startIcon:_,hasError:ae,disabled:a,clearLabel:n,onClear:he?.length?x:void 0,withTags:!!(E&&(he?.length??!1)),size:R,children:l.jsx(Jc,{placeholder:y,textColor:he?.length?"neutral800":"neutral600",children:he?.length?E?Ee:i?i(he):void 0:void 0})}),l.jsx(Pc,{children:l.jsx(e2,{position:"popper",sideOffset:4,onCloseAutoFocus:C,children:l.jsxs(t2,{ref:k,children:[e,l.jsx(Z,{id:re,width:"100%",height:"1px"})]})})})]})});const F9=h.forwardRef(({value:e,children:n,startIcon:i,...a},o)=>l.jsxs(ya,{ref:o,value:e.toString(),...a,children:[i&&l.jsx(Z,{tag:"span","aria-hidden":!0,children:i}),l.jsx(n2,{children:({isSelected:c,isIntermediate:u})=>l.jsx(Ca,{checked:u?"indeterminate":c})}),l.jsx(le,{children:l.jsx(r2,{children:n})})]}));h.forwardRef(({children:e,label:n,startIcon:i,values:a=[],...o},c)=>l.jsxs(Ap,{ref:c,children:[l.jsxs(ya,{value:a,...o,children:[i&&l.jsx(Z,{tag:"span","aria-hidden":!0,children:i}),l.jsx(n2,{children:({isSelected:u,isIntermediate:m})=>l.jsx(Ca,{checked:m?"indeterminate":u})}),l.jsx(le,{children:n})]}),e]}));T(F9)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`;const k9="23.2rem";h.forwardRef(({...e},n)=>l.jsx(W9,{ref:n,...e,tag:"nav"}));const W9=T(Z)`
  width: ${k9};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`;T(i9)`
  width: 2.4rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`;dt(({active:e,children:n,icon:i=null,withBullet:a=!1,isSubSectionChild:o=!1,...c},u)=>l.jsxs(U9,{background:"neutral100",paddingLeft:o?9:7,paddingBottom:2,paddingTop:2,ref:u,...c,children:[l.jsxs(G,{children:[i?l.jsx(q9,{children:i}):l.jsx(F0,{$active:e}),l.jsx(le,{paddingLeft:2,children:n})]}),a&&l.jsx(G,{paddingRight:4,children:l.jsx(F0,{$active:!0})})]}));const F0=T.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:e,$active:n})=>n?e.colors.primary600:e.colors.neutral600};
  border-radius: 50%;
`,U9=T(Ur)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>oe`
        background-color: ${e.colors.primary100};
        border-right: 2px solid ${e.colors.primary600};
        color: ${e.colors.primary700};
        font-weight: 500;
      `}

    ${F0} {
      background-color: ${({theme:e})=>e.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,q9=T.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;T.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;T(Z)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;h.forwardRef(({visibleLabels:e,onLabel:n="On",offLabel:i="Off",onCheckedChange:a,checked:o,defaultChecked:c,disabled:u,...m},x)=>{const[C,p]=Gt({prop:o,defaultProp:c}),y=b=>{p(b)};return l.jsxs(G,{gap:3,children:[l.jsx(G9,{ref:x,onCheckedChange:Hn(a,y),checked:C,disabled:u,...m,children:l.jsx(K9,{})}),e?l.jsx(Y9,{"aria-hidden":!0,"data-disabled":u,"data-state":C?"checked":"unchecked",children:C?n:i}):null]})});const G9=T(d4)`
  width: 4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({theme:e})=>e.colors.danger500};

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.success500};
  }

  &[data-disabled] {
    background-color: ${({theme:e})=>e.colors.neutral300};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,K9=T(h4)`
  display: block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.neutral0};
  transform: translateX(4px);

  &[data-state='checked'] {
    transform: translateX(20px);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Y9=T(le)`
  color: ${e=>e.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${e=>e.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral500};
  }
`,[Z9,Ra]=gr("Tabs");h.forwardRef(({disabled:e=!1,variant:n="regular",hasError:i,...a},o)=>l.jsx(Z9,{disabled:e,hasError:i,variant:n,children:l.jsx(X9,{ref:o,...a})}));const X9=T(f4)`
  width: 100%;
  position: relative;
`;h.forwardRef((e,n)=>{const{variant:i}=Ra("List");return l.jsx(Q9,{ref:n,...e,$variant:i})});const Q9=T(g4)`
  display: flex;
  align-items: ${e=>e.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`;h.forwardRef(({children:e,disabled:n,...i},a)=>{const{disabled:o,variant:c,hasError:u}=Ra("Trigger"),m=o===!0||o===i.value||n,x=u===i.value;return l.jsxs(J9,{ref:a,...i,$hasError:x,$variant:c,disabled:m,children:[l.jsx(f2,{fontWeight:"bold",variant:c==="simple"?"sigma":void 0,children:e}),c==="simple"?l.jsx(h2,{}):null]})});const h2=T.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,f2=T(le)``,J9=T(m4)`
  position: relative;
  color: ${e=>e.$hasError?e.theme.colors.danger600:e.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${e=>e.$variant==="simple"?oe`
        padding-block: ${n=>n.theme.spaces[4]};
        padding-inline: ${n=>n.theme.spaces[4]};

        & > ${f2} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};

          & > ${h2} {
            opacity: 1;
          }
        }
      `:oe`
        padding-block: ${n=>n.theme.spaces[3]};
        padding-inline: ${n=>n.theme.spaces[3]};
        flex: 1;
        background-color: ${n=>n.theme.colors.neutral100};
        border-bottom: solid 1px ${n=>n.theme.colors.neutral150};

        &:not([data-state='active']) + &:not([data-state='active']) {
          border-left: solid 1px ${n=>n.theme.colors.neutral150};
        }

        &[data-state='active'] {
          padding-block: ${n=>n.theme.spaces[4]};
          padding-inline: ${n=>n.theme.spaces[4]};
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};
          border-top-right-radius: ${n=>n.theme.borderRadius};
          border-top-left-radius: ${n=>n.theme.borderRadius};
          background-color: ${n=>n.theme.colors.neutral0};
          border-bottom: solid 1px ${n=>n.theme.colors.neutral0};
          box-shadow: ${e.theme.shadows.tableShadow};
          z-index: 1;
        }
      `}

  &[data-disabled] {
    cursor: not-allowed;
    color: ${e=>e.theme.colors.neutral400};
  }
`;h.forwardRef((e,n)=>{const{variant:i}=Ra("Content");return l.jsx(P9,{$variant:i,ref:n,...e})});const P9=T(w4)`
  ${e=>e.$variant==="simple"?oe``:oe`
        position: relative;
        z-index: 1;
        background-color: ${n=>n.theme.colors.neutral0};
      `}
`,eb=T(Z)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,tb=T(M9)`
  width: 100%;
  white-space: nowrap;
`,nb=T(Z)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="left"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="right"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    right: 0;
    top: 0;
  }
`,rb=T(Z)`
  overflow-x: auto;
`;h.forwardRef(({footer:e,...n},i)=>{const a=h.useRef(null),[o,c]=h.useState(),u=m=>{const x=m.target.scrollWidth-m.target.clientWidth;if(m.target.scrollLeft===0){c("right");return}if(m.target.scrollLeft===x){c("left");return}m.target.scrollLeft>0&&c("both")};return h.useEffect(()=>{a.current.scrollWidth>a.current.clientWidth&&c("right")},[]),l.jsxs(eb,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[l.jsx(nb,{$overflowing:o,position:"relative",children:l.jsx(rb,{ref:a,onScroll:u,paddingLeft:6,paddingRight:6,children:l.jsx(tb,{ref:i,...n})})}),e]})});T(L9)`
  & tr:last-of-type {
    border-bottom: none;
  }
`;T(E9)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;T(V9)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:e})=>e.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:e})=>e.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: 5.6rem;
  }
`;const g2=T(u2)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`;h.forwardRef(({children:e,action:n,...i},a)=>l.jsx(g2,{color:"neutral600",as:T9,ref:a,...i,children:l.jsxs(G,{children:[e,n]})}));h.forwardRef(({children:e,...n},i)=>l.jsx(g2,{color:"neutral800",ref:i,...n,children:e}));T(Z)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`;T(Z)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;dt(({children:e,startIcon:n,endIcon:i,disabled:a=!1,loading:o=!1,type:c="button",...u},m)=>{const x=a||o;return l.jsxs(ab,{ref:m,disabled:x,"aria-disabled":x,tag:"button",type:c,gap:2,...u,children:[o?l.jsx(ib,{"aria-hidden":!0,children:l.jsx(Rc,{})}):n,l.jsx(le,{variant:"pi",children:e}),i]})});const ob=at`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,ib=T.span`
  display: flex;
  animation: ${ob} 2s infinite linear;
  will-change: transform;
`,ab=T(G)`
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${e=>e.theme.colors.neutral600};
  }

  ${ei}
`,qo=h.forwardRef((e,n)=>l.jsx(ri,{ref:n,...e}));qo.displayName="TextInput";h.forwardRef(({disabled:e,hasError:n,id:i,name:a,required:o,resizable:c=!0,...u},m)=>{const{error:x,...C}=vt("Textarea"),p=!!x||n,y=C.id??i,b=C.name??a,R=C.required||o;let _;return x?_=`${y}-error`:C.hint&&(_=`${y}-hint`),l.jsx(sb,{borderColor:p?"danger600":"neutral200",$hasError:p,hasRadius:!0,children:l.jsx(lb,{"aria-invalid":p,"aria-required":R,tag:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,fontSize:2,hasRadius:!0,ref:m,lineHeight:4,padding:4,width:"100%",height:"100%",id:y,name:b,"aria-describedby":_,$resizable:c,...u})})});const sb=T(Z)`
  ${yn()}
`,lb=T(Z)`
  display: block;
  border: none;
  resize: ${({$resizable:e})=>e?"vertical":"none"};
  min-height: ${({minHeight:e})=>e||"10.5rem"};

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    font-size: ${({theme:e})=>e.fontSizes[2]};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;h.forwardRef(({offLabel:e,onLabel:n,disabled:i,hasError:a,required:o,id:c,name:u,checked:m,onChange:x,...C},p)=>{const[y=!1,b]=Gt({prop:m}),R=y!==null&&!y,{error:_,...I}=vt("Toggle"),E=!!_||a,V=I.id??c,M=I.name??u,k=I.required||o;let F;return _?F=`${V}-error`:I.hint&&(F=`${V}-hint`),l.jsxs(cb,{position:"relative",hasRadius:!0,padding:1,background:i?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:E?"danger600":"neutral200",wrap:"wrap",cursor:i?"not-allowed":"pointer",$hasError:E,children:[l.jsx(Sl,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:i&&R?"neutral200":R?"neutral0":"transparent",borderColor:i&&R?"neutral300":R?"neutral200":i?"neutral150":"neutral100",children:l.jsx(le,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:i?"neutral700":R?"danger700":"neutral600",children:e})}),l.jsx(Sl,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:i&&y?"neutral200":y?"neutral0":"transparent",borderColor:i&&y?"neutral300":y?"neutral200":i?"neutral150":"neutral100",children:l.jsx(le,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:i?"neutral700":y?"primary600":"neutral600",children:n})}),l.jsx(ub,{...C,id:V,name:M,ref:p,onChange:W=>{b(W.currentTarget.checked),x?.(W)},type:"checkbox","aria-required":k,disabled:i,"aria-disabled":i,checked:!!y,"aria-describedby":F})]})});const cb=T(G)`
  ${yn()}
`,Sl=T(G)`
  padding-block: 0.6rem;
`,ub=T.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`,db=(e,n)=>!e||!n?{}:{[e]:n[e]},hb=e=>(e?.inner||[]).reduce((n,i)=>(i.path&&(n[i.path.split("[").join(".").split("]").join("")]={id:i.message,defaultMessage:i.message,values:db(i?.type,i?.params)}),n),{}),Rl=p4().shape({email:b4().email(nl.email.id).required(nl.required.id)}),fb=T.a`
  color: ${({theme:e})=>e.colors.primary600};
`,xb=()=>l.jsx(Wo.Protect,{permissions:C4.settings,children:l.jsx(gb,{})}),gb=()=>{const{toggleNotification:e}=$4(),{formatMessage:n}=y4(),{get:i,post:a}=S4(),[o,c]=h.useState(""),[u,m]=h.useState(!1),[x,C]=h.useState({}),{data:p,isLoading:y}=R4(["email","settings"],async()=>{const I=await i("/email/settings"),{data:{config:E}}=I;return E}),b=j4(async I=>{await a("/email/test",I)},{onError(){e({type:"danger",message:n({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:o})})},onSuccess(){e({type:"success",message:n({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:o})})},retry:!1});h.useEffect(()=>{Rl.validate({email:o},{abortEarly:!1}).then(()=>m(!0)).catch(()=>m(!1))},[o]);const R=I=>{c(()=>I.target.value)},_=async I=>{I.preventDefault();try{await Rl.validate({email:o},{abortEarly:!1})}catch(E){E instanceof _4&&C(hb(E))}b.mutate({to:o})};return y?l.jsx(Wo.Loading,{}):l.jsxs(Wo.Main,{labelledBy:"title","aria-busy":y||b.isLoading,children:[l.jsx(Wo.Title,{children:n({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:n({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})})}),l.jsx(rl.Header,{id:"title",title:n({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:n({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),l.jsx(rl.Content,{children:p&&l.jsx("form",{onSubmit:_,children:l.jsxs(G,{direction:"column",alignItems:"stretch",gap:7,children:[l.jsx(Z,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:l.jsxs(G,{direction:"column",alignItems:"stretch",gap:4,children:[l.jsxs(G,{direction:"column",alignItems:"stretch",gap:1,children:[l.jsx(le,{variant:"delta",tag:"h2",children:n({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),l.jsx(le,{children:n({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:l.jsx(fb,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:n({id:"email.link",defaultMessage:"Link"})})})})]}),l.jsxs(On.Root,{gap:5,children:[l.jsx(On.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:l.jsxs(bn.Root,{name:"shipper-email",children:[l.jsx(bn.Label,{children:n({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"})}),l.jsx(qo,{placeholder:n({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,readOnly:!0,value:p.settings.defaultFrom,type:"email"})]})}),l.jsx(On.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:l.jsxs(bn.Root,{name:"response-email",children:[l.jsx(bn.Label,{children:n({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"})}),l.jsx(qo,{placeholder:n({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,readOnly:!0,value:p.settings.defaultReplyTo,type:"email"})]})}),l.jsx(On.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:l.jsxs(bn.Root,{name:"email-provider",children:[l.jsx(bn.Label,{children:n({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"})}),l.jsx(z0,{disabled:!0,value:p.provider,children:l.jsx(N0,{value:p.provider,children:p.provider})})]})})]})]})}),l.jsxs(G,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[l.jsx(le,{variant:"delta",tag:"h2",children:n({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),l.jsxs(On.Root,{gap:5,children:[l.jsx(On.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:l.jsxs(bn.Root,{name:"test-address",error:x.email?.id&&n({id:`email.${x.email?.id}`,defaultMessage:"This is not a valid email"}),children:[l.jsx(bn.Label,{children:n({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"})}),l.jsx(qo,{onChange:R,value:o,placeholder:n({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"}),type:"email"})]})}),l.jsx(On.Item,{col:7,xs:12,direction:"column",alignItems:"start",children:l.jsx(Zo,{loading:b.isLoading,disabled:!u,type:"submit",startIcon:l.jsx(zx,{}),children:n({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})};export{xb as ProtectedSettingsPage};
