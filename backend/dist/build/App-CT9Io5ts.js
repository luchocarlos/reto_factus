import{r as h,hu as Xe,j as l,hv as He,hy as _u,hJ as Na,hw as Le,hx as St,hD as sr,hA as zn,hz as Su,eB as ur,hs as Iu,ht as Ru,hB as Kb,hC as qb,hE as Tu,eG as Au,hN as Yb,hG as Fa,hH as Va,hK as Eu,hF as Zb,hI as ya,hL as ju,hM as Jc,hO as Xb,hP as Jb,hR as Or,l as E,ka as ku,hS as oe,ja as Qb,j8 as e1,j9 as t1,jb as n1,kb as Du,hU as Ou,hV as Pu,hW as Mu,ed as it,h$ as Lu,i0 as r1,i1 as o1,kc as Fn,i2 as i1,i3 as a1,i4 as s1,i5 as l1,i6 as c1,i7 as u1,i8 as d1,i9 as Nu,ia as f1,ib as h1,ic as p1,id as g1,kd as Wa,ie as m1,ig as x1,ke as b1,ih as v1,ii as $1,kf as Fu,hX as w1,hY as y1,hZ as C1,h_ as _1,kg as dr,ij as S1,ik as I1,il as R1,im as T1,io as A1,ip as E1,iq as j1,ir as k1,is as D1,it as Ca,iu as za,kh as O1,iv as _a,iw as Sa,ix as P1,iy as M1,iz as L1,iA as N1,iB as F1,iC as V1,iD as W1,iE as Vu,iF as z1,iG as Wu,iH as B1,iI as H1,iJ as U1,ki as G1,iK as K1,iL as q1,iM as zu,iN as Bu,iO as Y1,iP as Z1,iQ as X1,iR as J1,iS as Q1,iT as e2,iU as t2,iV as n2,iW as r2,iX as o2,iY as i2,iZ as a2,i_ as s2,i$ as l2,j0 as c2,j1 as u2,j2 as d2,j3 as f2,j4 as h2,j5 as p2,kj as g2,j6 as m2,j7 as x2,jc as Hu,hQ as b2,jd as v2,hT as $2,je as w2,kk as y2,a as Wr,kl as C2,km as _2,kn as S2,ko as I2,kp as R2,a2 as T2,a3 as Qc,bd as A2}from"./strapi-BHipHB00.js";var E2=function(n){if(typeof document>"u")return null;var i=Array.isArray(n)?n[0]:n;return i.ownerDocument.body},ir=new WeakMap,Wo=new WeakMap,zo={},xa=0,Uu=function(n){return n&&(n.host||Uu(n.parentNode))},j2=function(n,i){return i.map(function(r){if(n.contains(r))return r;var s=Uu(r);return s&&n.contains(s)?s:(console.error("aria-hidden",r,"in not contained inside",n,". Doing nothing"),null)}).filter(function(r){return!!r})},k2=function(n,i,r,s){var c=j2(i,Array.isArray(n)?n:[n]);zo[r]||(zo[r]=new WeakMap);var d=zo[r],p=[],g=new Set,x=new Set(c),w=function(C){!C||g.has(C)||(g.add(C),w(C.parentNode))};c.forEach(w);var v=function(C){!C||x.has(C)||Array.prototype.forEach.call(C.children,function($){if(g.has($))v($);else try{var S=$.getAttribute(s),R=S!==null&&S!=="false",A=(ir.get($)||0)+1,D=(d.get($)||0)+1;ir.set($,A),d.set($,D),p.push($),A===1&&R&&Wo.set($,!0),D===1&&$.setAttribute(r,"true"),R||$.setAttribute(s,"true")}catch(k){console.error("aria-hidden: cannot operate on ",$,k)}})};return v(i),g.clear(),xa++,function(){p.forEach(function(C){var $=ir.get(C)-1,S=d.get(C)-1;ir.set(C,$),d.set(C,S),$||(Wo.has(C)||C.removeAttribute(s),Wo.delete(C)),S||C.removeAttribute(r)}),xa--,xa||(ir=new WeakMap,ir=new WeakMap,Wo=new WeakMap,zo={})}},Gu=function(n,i,r){r===void 0&&(r="data-aria-hidden");var s=Array.from(Array.isArray(n)?n:[n]),c=E2(n);return c?(s.push.apply(s,Array.from(c.querySelectorAll("[aria-live]"))),k2(s,c,r,"aria-hidden")):function(){return null}};function D2(n){const i=`${n}CollectionProvider`,[r,s]=Iu(i),[c,d]=r(i,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),p=S=>{const{scope:R,children:A}=S,D=h.useRef(null),k=h.useRef(new Map).current,T=h.useRef(new Set).current;return l.jsx(c,{scope:R,itemMap:k,collectionRef:D,listeners:T,children:A})};p.displayName=i;const g=`${n}CollectionSlot`,x=h.forwardRef((S,R)=>{const{scope:A,children:D}=S,k=d(g,A),T=Xe(R,k.collectionRef);return l.jsx(ya,{ref:T,children:D})});x.displayName=g;const w=`${n}CollectionItemSlot`,v="data-radix-collection-item",C=h.forwardRef((S,R)=>{const{scope:A,children:D,...k}=S,T=h.useRef(null),W=Xe(R,T),V=d(w,A);return h.useEffect(()=>{const z=Array.from(V.itemMap.values());return V.itemMap.set(T,{ref:T,...k}),V.listeners.forEach(L=>L(Array.from(V.itemMap.values()),z)),()=>{const L=Array.from(V.itemMap.values());V.itemMap.delete(T),V.listeners.forEach(F=>F(Array.from(V.itemMap.values()),L))}}),l.jsx(ya,{[v]:"",ref:W,children:D})});C.displayName=w;function $(S){const R=d(`${n}CollectionConsumer`,S),A=h.useCallback(()=>{const k=R.collectionRef.current;if(!k)return[];const T=Array.from(k.querySelectorAll(`[${v}]`));return Array.from(R.itemMap.values()).sort((z,L)=>T.indexOf(z.ref.current)-T.indexOf(L.ref.current))},[R.collectionRef,R.itemMap]),D=h.useCallback(k=>(R.listeners.add(k),()=>R.listeners.delete(k)),[R.listeners]);return{getItems:A,subscribe:D}}return[{Provider:p,Slot:x,ItemSlot:C},$,s]}const ba=new Map;function O2(n,i){const r=n+(i?Object.entries(i).sort((c,d)=>c[0]<d[0]?-1:1).join():"");if(ba.has(r))return ba.get(r);const s=new Intl.Collator(n,i);return ba.set(r,s),s}function Ba(n,i){const r=O2(n,{usage:"search",...i});return{startsWith(s,c){return c.length===0?!0:(s=s.normalize("NFC"),c=c.normalize("NFC"),r.compare(s.slice(0,c.length),c)===0)},endsWith(s,c){return c.length===0?!0:(s=s.normalize("NFC"),c=c.normalize("NFC"),r.compare(s.slice(-c.length),c)===0)},contains(s,c){if(c.length===0)return!0;s=s.normalize("NFC"),c=c.normalize("NFC");let d=0;const p=c.length;for(;d+p<=s.length;d++){const g=s.slice(d,d+p);if(r.compare(c,g)===0)return!0}return!1}}}const P2=n=>{const i=h.useRef();return h.useEffect(()=>{i.current=n}),i.current},Ku=h.forwardRef(({children:n,estimatedItemSize:i=40,overscan:r=5,getItemCount:s,onViewportChange:c,...d},p)=>{const g=h.useRef(null),x=Xe(p,g,c),w=h.useMemo(()=>h.Children.toArray(n),[n]),v=Yb({count:s(),getScrollElement:()=>g.current,estimateSize:()=>i,overscan:r}),C=v.getVirtualItems();return l.jsxs(l.Fragment,{children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),l.jsx(He.div,{"data-radix-combobox-viewport":"",role:"presentation",...d,ref:x,style:{position:"relative",flex:1,overflow:"auto",...d.style},children:l.jsx("div",{style:{height:`${v.getTotalSize()}px`,width:"100%",position:"relative"},children:C.map($=>{const S=w[$.index];return l.jsx("div",{"data-index":$.index,ref:v.measureElement,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translateY(${$.start}px)`},children:S},$.key)})})})]})});Ku.displayName="VirtualizedViewport";const M2=[" ","Enter","ArrowUp","ArrowDown"],L2=["Enter"],N2=n=>!!(n.length===1&&n.match(/\S| /)),qu="Combobox",[Vn,zr]=D2(qu),[F2,qt]=Au(qu),V2=({children:n})=>l.jsx(Tu,{children:l.jsx(Vn.Provider,{scope:void 0,children:n})}),W2=n=>typeof n=="string"?n==="none"?{type:n,filter:void 0}:{type:n,filter:"startsWith"}:n,z2=n=>{const{allowCustomValue:i=!1,autocomplete:r="none",children:s,open:c,defaultOpen:d,onOpenChange:p,value:g,defaultValue:x,onValueChange:w,disabled:v,required:C=!1,locale:$="en-EN",onTextValueChange:S,textValue:R,defaultTextValue:A,filterValue:D,defaultFilterValue:k,onFilterValueChange:T,isPrintableCharacter:W=N2,visible:V=!1,virtualized:z="auto",estimatedItemSize:L=40,overscan:F=5}=n,[q,te]=h.useState(null),[ne,_e]=h.useState(null),[re,ue]=h.useState(null),[de,je]=h.useState(null),[De=!1,X]=sr({prop:c,defaultProp:d,onChange:p}),[ae,Se]=sr({prop:g,defaultProp:x,onChange:w}),[Ie,ge]=sr({prop:R,defaultProp:i&&!A?g:A,onChange:S}),[Je,ve]=sr({prop:D,defaultProp:k,onChange:T}),Ue=zn(),Ae=h.useCallback((Y,fe)=>{const Re=fe.map(he=>he.ref.current),[we,...me]=Re,[ye]=me.slice(-1),Ke=de??fe.find(he=>he.value===ae)?.ref.current;for(const he of Y){if(he===Ke)return;if(he?.scrollIntoView({block:"nearest"}),he===we&&ne&&(ne.scrollTop=0),he===ye&&ne&&(ne.scrollTop=ne.scrollHeight),je(he),r==="both"){const Ce=fe.find(dt=>dt.ref.current===he);Ce&&ge(Ce.textValue)}if(he!==Ke)return}},[r,ge,ne,de,ae]),Ge=W2(r);return h.useEffect(()=>{r!=="both"&&je(null)},[Ie,r]),h.useEffect(()=>{if(re&&q)return Gu([re,q])},[re,q]),l.jsx(V2,{children:l.jsx(F2,{allowCustomValue:i,autocomplete:Ge,required:C,trigger:q,onTriggerChange:te,contentId:Ue,value:ae,onValueChange:Se,open:De,onOpenChange:X,disabled:v,locale:$,focusFirst:Ae,textValue:Ie,onTextValueChange:ge,onViewportChange:_e,onContentChange:ue,visuallyFocussedItem:de,filterValue:Je,onFilterValueChange:ve,onVisuallyFocussedItemChange:je,isPrintableCharacter:W,visible:V,virtualized:z,estimatedItemSize:L,overscan:F,children:s})})},Yu="ComboboxTrigger",Zu=h.forwardRef((n,i)=>{const{...r}=n,s=qt(Yu),c=()=>{s.disabled||s.onOpenChange(!0)};return l.jsx(_u,{asChild:!0,children:l.jsx(Na,{asChild:!0,trapped:s.open,onMountAutoFocus:d=>{d.preventDefault()},onUnmountAutoFocus:d=>{s.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),d.preventDefault()},children:l.jsx("div",{ref:i,"data-disabled":s.disabled?"":void 0,...r,onClick:Le(r.onClick,d=>{if(s.disabled){d.preventDefault();return}s.trigger?.focus()}),onPointerDown:Le(r.onPointerDown,d=>{if(s.disabled){d.preventDefault();return}const p=d.target;p.hasPointerCapture(d.pointerId)&&p.releasePointerCapture(d.pointerId),(p.closest("button")??p.closest("div"))===d.currentTarget&&d.button===0&&d.ctrlKey===!1&&(c(),s.trigger?.focus())})})})})});Zu.displayName=Yu;const Xu="ComboboxInput",Ju=h.forwardRef((n,i)=>{const r=qt(Xu),s=h.useRef(null),{getItems:c}=zr(void 0),{startsWith:d}=Ba(r.locale,{sensitivity:"base"}),p=r.disabled,g=Xe(s,i,r.onTriggerChange),x=()=>{p||r.onOpenChange(!0)},w=P2(r.filterValue);return St(()=>{const v=setTimeout(()=>{if(r.textValue===""||r.textValue===void 0||r.filterValue===""||r.filterValue===void 0)return;const C=c().find(S=>S.type==="option"&&d(S.textValue,r.textValue)),$=rv(w??"",r.filterValue);C&&!r.visuallyFocussedItem&&$===r.filterValue.length&&s.current?.setSelectionRange(r.filterValue.length,r.textValue.length)});return()=>clearTimeout(v)},[r.textValue,r.filterValue,d,r.visuallyFocussedItem,c,w]),l.jsx("input",{type:"text",role:"combobox","aria-controls":r.contentId,"aria-expanded":r.open,"aria-required":r.required,"aria-autocomplete":r.autocomplete.type,"data-state":r.open?"open":"closed","aria-disabled":p,"aria-activedescendant":r.visuallyFocussedItem?.id,disabled:p,"data-disabled":p?"":void 0,"data-placeholder":r.textValue===void 0?"":void 0,value:r.textValue??"",...n,ref:g,onKeyDown:Le(n.onKeyDown,v=>{if(["ArrowUp","ArrowDown","Home","End"].includes(v.key))r.open||x(),setTimeout(()=>{let $=c().filter(S=>!S.disabled&&S.isVisible).map(S=>S.ref.current);if(["ArrowUp","End"].includes(v.key)&&($=$.slice().reverse()),["ArrowUp","ArrowDown"].includes(v.key)){const S=r.visuallyFocussedItem??c().find(R=>R.value===r.value)?.ref.current;if(S){let R=$.indexOf(S);R===$.length-1&&(R=-1),$=$.slice(R+1)}}if(["ArrowDown"].includes(v.key)&&r.autocomplete.type==="both"&&$.length>1){const[S,...R]=$,A=c().find(D=>D.ref.current===S).textValue;r.textValue===A&&($=R)}r.focusFirst($,c())}),v.preventDefault();else if(["Tab"].includes(v.key)&&r.open)v.preventDefault();else if(["Escape"].includes(v.key))r.open?r.onOpenChange(!1):(r.onValueChange(void 0),r.onTextValueChange("")),v.preventDefault();else if(L2.includes(v.key)){if(r.visuallyFocussedItem){const C=c().find($=>$.ref.current===r.visuallyFocussedItem);C&&(r.onValueChange(C.value),r.onTextValueChange(C.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(C.textValue),C.ref.current?.click())}else{const C=c().find($=>$.type==="option"&&!$.disabled&&$.textValue===r.textValue);C&&(r.onValueChange(C.value),r.onTextValueChange(C.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(C.textValue),C.ref.current?.click())}r.onOpenChange(!1),v.preventDefault()}else r.onVisuallyFocussedItemChange(null)}),onChange:Le(n.onChange,v=>{r.onTextValueChange(v.currentTarget.value),r.autocomplete.type==="both"&&r.onFilterValueChange(v.currentTarget.value)}),onKeyUp:Le(n.onKeyUp,v=>{if(!r.open&&(r.isPrintableCharacter(v.key)||["Backspace"].includes(v.key))&&x(),setTimeout(()=>{if(r.autocomplete.type==="both"&&r.isPrintableCharacter(v.key)&&r.filterValue!==void 0){const C=r.filterValue,$=c().find(S=>d(S.textValue,C));$&&r.onTextValueChange($.textValue)}}),r.autocomplete.type==="none"&&r.isPrintableCharacter(v.key)){const C=r.textValue??"",$=c().find(S=>d(S.textValue,C));$&&(r.onVisuallyFocussedItemChange($.ref.current),$.ref.current?.scrollIntoView())}}),onBlur:Le(n.onBlur,()=>{if(r.open)return;r.onVisuallyFocussedItemChange(null);const[v]=c().filter($=>$.textValue===r.textValue&&$.type==="option");if(v){r.onValueChange(v.value),r.autocomplete.type==="both"&&r.onFilterValueChange(v.textValue);return}if(r.allowCustomValue){r.onValueChange(r.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(r.textValue);return}const[C]=c().filter($=>$.value===r.value&&$.type==="option");C&&r.textValue!==""?(r.onTextValueChange(C.textValue),r.autocomplete.type==="both"&&r.onFilterValueChange(C.textValue)):(r.onValueChange(void 0),r.onTextValueChange(""))})})});Ju.displayName="ComboboxTextInput";const Qu=h.forwardRef((n,i)=>{const{children:r,...s}=n,c=qt(Xu),d=c.disabled,p=()=>{d||(c.onOpenChange(!0),c.trigger?.focus())};return l.jsx(He.button,{"aria-hidden":!0,type:"button","aria-disabled":d,"aria-controls":c.contentId,"aria-expanded":c.open,disabled:d,"data-disabled":d?"":void 0,...s,tabIndex:-1,ref:i,onClick:Le(s.onClick,()=>{c.trigger?.focus()}),onPointerDown:Le(s.onPointerDown,g=>{g.button===0&&g.ctrlKey===!1&&(p(),g.preventDefault())}),onKeyDown:Le(s.onKeyDown,g=>{M2.includes(g.key)&&(p(),g.preventDefault())}),children:r||"▼"})});Qu.displayName="ComboboxIcon";const B2="ComboboxPortal",ed=n=>l.jsx(Su,{asChild:!0,...n});ed.displayName=B2;const Ha="ComboboxContent",td=h.forwardRef((n,i)=>{const r=qt(Ha),{getItems:s}=zr(void 0),[c,d]=h.useState();if(St(()=>{d(new DocumentFragment)},[]),St(()=>{r.open&&r.autocomplete.type==="none"&&setTimeout(()=>{s().find(g=>g.value===r.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[s,r.autocomplete,r.value,r.open]),!r.open){const p=c;return p?ur.createPortal(l.jsx(Vn.Slot,{scope:void 0,children:l.jsx("div",{children:n.children})}),p):null}return l.jsx(nd,{...n,ref:i})});td.displayName=Ha;const H2=10,nd=h.forwardRef((n,i)=>{const{onEscapeKeyDown:r,onPointerDownOutside:s,...c}=n,d=qt(Ha),p=Xe(i,x=>d.onContentChange(x)),{onOpenChange:g}=d;return Fa(),h.useEffect(()=>{const x=()=>{g(!1)};return window.addEventListener("blur",x),window.addEventListener("resize",x),()=>{window.removeEventListener("blur",x),window.removeEventListener("resize",x)}},[g]),l.jsx(Va,{allowPinchZoom:!0,children:l.jsx(Eu,{asChild:!0,onEscapeKeyDown:r,onPointerDownOutside:s,onFocusOutside:x=>{x.preventDefault()},onDismiss:()=>{d.onOpenChange(!1),d.trigger?.focus({preventScroll:!0})},children:l.jsx(rd,{role:"listbox",id:d.contentId,"data-state":d.open?"open":"closed",onContextMenu:x=>x.preventDefault(),...c,ref:p,style:{display:"flex",flexDirection:"column",outline:"none",...c.style}})})})});nd.displayName="ComboboxContentImpl";const rd=h.forwardRef((n,i)=>{const{align:r="start",collisionPadding:s=H2,...c}=n;return l.jsx(ju,{...c,ref:i,align:r,collisionPadding:s,style:{boxSizing:"border-box",...c.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});rd.displayName="ComboboxPopperPosition";const od="ComboboxViewport",id=h.forwardRef((n,i)=>{const r=qt(od),s=Xe(i,r.onViewportChange),d=h.useMemo(()=>h.Children.toArray(n.children),[n.children]).length;return r.virtualized===!0||r.virtualized==="auto"&&d>100?l.jsx(Vn.Slot,{scope:void 0,children:l.jsx(Ku,{...n,ref:s,getItemCount:()=>d,estimatedItemSize:r.estimatedItemSize,overscan:r.overscan,onViewportChange:r.onViewportChange})}):l.jsxs(l.Fragment,{children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),l.jsx(Vn.Slot,{scope:void 0,children:l.jsx(He.div,{"data-radix-combobox-viewport":"",role:"presentation",...n,ref:s,style:{position:"relative",flex:1,overflow:"auto",...n.style}})})]})});id.displayName=od;const Ko="ComboboxItem",[eu,Ua]=Au(Ko),Ga=h.forwardRef((n,i)=>{const{value:r,disabled:s=!1,textValue:c,...d}=n,[p,g]=h.useState();St(()=>{g(new DocumentFragment)},[]);const{onTextValueChange:x,textValue:w,...v}=qt(Ko),C=zn(),[$,S]=h.useState(c??""),R=v.value===r,{startsWith:A,contains:D}=Ba(v.locale,{sensitivity:"base"}),k=h.useCallback(T=>{S(W=>W||(T?.textContent??"").trim())},[]);return h.useEffect(()=>{R&&w===void 0&&$!==""&&x($)},[$,R,w,x]),v.autocomplete.type==="both"&&$&&v.filterValue&&!A($,v.filterValue)||v.autocomplete.type==="list"&&v.autocomplete.filter==="startsWith"&&$&&w&&!A($,w)||v.autocomplete.type==="list"&&v.autocomplete.filter==="contains"&&$&&w&&!D($,w)?p?ur.createPortal(l.jsx(eu,{textId:C,onTextValueChange:k,isSelected:R,textValue:$,children:l.jsx(Vn.ItemSlot,{scope:void 0,value:r,textValue:$,disabled:s,type:"option",isVisible:!1,children:l.jsx(Ia,{ref:i,value:r,disabled:s,...d})})}),p):null:l.jsx(eu,{textId:C,onTextValueChange:k,isSelected:R,textValue:$,children:l.jsx(Vn.ItemSlot,{scope:void 0,value:r,textValue:$,disabled:s,type:"option",isVisible:!0,children:l.jsx(Ia,{ref:i,value:r,disabled:s,...d})})})});Ga.displayName=Ko;const ad="ComboboxItemImpl",Ia=h.forwardRef((n,i)=>{const{value:r,disabled:s=!1,...c}=n,d=h.useRef(null),p=Xe(i,d),{getItems:g}=zr(void 0),{onTextValueChange:x,visuallyFocussedItem:w,...v}=qt(Ko),{isSelected:C,textValue:$,textId:S}=Ua(ad),R=()=>{s||(v.onValueChange(r),x($),v.onOpenChange(!1),v.autocomplete.type==="both"&&v.onFilterValueChange($),v.trigger?.focus({preventScroll:!0}))},A=h.useMemo(()=>w===g().find(k=>k.ref.current===d.current)?.ref.current,[g,w]),D=zn();return l.jsx(He.div,{role:"option","aria-labelledby":S,"data-highlighted":A?"":void 0,"aria-selected":C&&A,"data-state":C?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...c,id:D,ref:p,onPointerUp:Le(c.onPointerUp,R)})});Ia.displayName=ad;const sd="ComboboxItemText",ld=h.forwardRef((n,i)=>{const{className:r,style:s,...c}=n,d=Ua(sd),p=Xe(i,d.onTextValueChange);return l.jsx(He.span,{id:d.textId,...c,ref:p})});ld.displayName=sd;const cd="ComboboxItemIndicator",ud=h.forwardRef((n,i)=>{const{isSelected:r}=Ua(cd);return r?l.jsx(He.span,{"aria-hidden":!0,...n,ref:i}):null});ud.displayName=cd;const Ka="ComboboxNoValueFound",dd=h.forwardRef((n,i)=>{const{textValue:r="",filterValue:s="",visible:c=!1,locale:d,autocomplete:p}=qt(Ka),[g,x]=h.useState([]),{subscribe:w}=zr(void 0),{startsWith:v,contains:C}=Ba(d,{sensitivity:"base"});return h.useEffect(()=>{const $=w(S=>{if(c){const R=S.filter(A=>A.type!=="create");x(R)}else x(S)});return()=>{$()}},[c,w]),p.type==="none"&&g.length>0||p.type==="list"&&p.filter==="startsWith"&&g.some($=>v($.textValue,r))||p.type==="both"&&g.some($=>v($.textValue,s))||p.type==="list"&&p.filter==="contains"&&g.some($=>C($.textValue,r))?null:l.jsx(He.div,{...n,ref:i})});dd.displayName=Ka;const fd=h.forwardRef((n,i)=>{const{disabled:r=!1,...s}=n,c=qt(Ka),{textValue:d,visuallyFocussedItem:p}=c,{getItems:g,subscribe:x}=zr(void 0),w=h.useRef(null),[v,C]=h.useState(!1),$=Xe(i,w),S=h.useMemo(()=>p===g().find(D=>D.ref.current===w.current)?.ref.current,[g,p]),R=zn(),A=()=>{!r&&d&&(c.onValueChange(d),c.onTextValueChange(d),c.onOpenChange(!1),c.autocomplete.type==="both"&&c.onFilterValueChange(d),c.trigger?.focus({preventScroll:!0}))};return St(()=>{const D=x(k=>{C(!k.some(T=>T.textValue===d&&T.type!=="create"))});return g().length===0&&C(!0),()=>{D()}},[d,x,g]),(!d||!v)&&!c.visible?null:l.jsx(Vn.ItemSlot,{scope:void 0,value:d??"",textValue:d??"",disabled:r,isVisible:!0,type:"create",children:l.jsx(He.div,{role:"option",tabIndex:r?void 0:-1,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,"data-highlighted":S?"":void 0,...s,id:R,ref:$,onPointerUp:Le(s.onPointerUp,A)})})});fd.displayName="ComboboxCreateItem";const U2=z2,G2=Zu,K2=Ju,q2=Qu,Y2=ed,Z2=td,X2=id,J2=Ga,Q2=ld,ev=ud,tv=dd,nv=fd;function rv(n,i){const r=Math.min(n.length,i.length);for(let s=0;s<r;s++)if(n[s]!==i[s])return s;return r}const Wt=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:Ga,Content:Z2,CreateItem:nv,Icon:q2,Item:J2,ItemIndicator:ev,ItemText:Q2,NoValueFound:tv,Portal:Y2,Root:U2,TextInput:K2,Trigger:G2,Viewport:X2},Symbol.toStringTag,{value:"Module"}));function qa(n){const i=h.useRef(n);return h.useEffect(()=>{i.current=n}),h.useMemo(()=>(...r)=>i.current?.(...r),[])}const ov=[" ","Enter","ArrowUp","ArrowDown"],iv=[" ","Enter"],Br="Select",[qo,Hr,av]=Zb(Br),[fr,sv]=Iu(Br,[av,Ru]),Yo=Ru(),[lv,sn]=fr(Br),[cv,uv]=fr(Br),Ya=n=>{const{__scopeSelect:i,children:r,open:s,defaultOpen:c,onOpenChange:d,value:p,defaultValue:g,onValueChange:x,dir:w,disabled:v,required:C,multi:$=!1}=n,S=Yo(i),[R,A]=h.useState(null),[D,k]=h.useState(null),[T,W]=h.useState(!1),V=qb(w),[z=!1,L]=sr({prop:s,defaultProp:c,onChange:d}),[F,q]=sr({prop:p,defaultProp:g,onChange(re){x&&(Array.isArray(re),x(re))}}),te=h.useRef(null),[ne,_e]=h.useState(new Set);return l.jsx(Tu,{...S,children:l.jsx(lv,{required:C,scope:i,trigger:R,onTriggerChange:A,valueNode:D,onValueNodeChange:k,valueNodeHasChildren:T,onValueNodeHasChildrenChange:W,contentId:zn(),value:F,onValueChange:q,open:z,onOpenChange:L,dir:V,triggerPointerDownPosRef:te,disabled:v,multi:$,children:l.jsx(qo.Provider,{scope:i,children:l.jsx(cv,{scope:n.__scopeSelect,onNativeOptionAdd:h.useCallback(re=>{_e(ue=>new Set(ue).add(re))},[]),onNativeOptionRemove:h.useCallback(re=>{_e(ue=>{const de=new Set(ue);return de.delete(re),de})},[]),children:r})})})})};Ya.displayName=Br;const hd="SelectTrigger",Za=h.forwardRef((n,i)=>{const{__scopeSelect:r,...s}=n,c=Yo(r),d=sn(hd,r),p=d.disabled,g=Xe(i,d.onTriggerChange),x=Hr(r),[w,v,C]=yd(S=>{const R=x().filter(k=>!k.disabled),A=R.find(k=>k.value===d.value),D=Cd(R,S,A);if(D!==void 0&&!Array.isArray(D.value)){const k=d.multi?[D.value]:D.value;d.onValueChange(k)}}),$=()=>{p||(d.onOpenChange(!0),C())};return l.jsx(_u,{asChild:!0,...c,children:l.jsx(He.div,{role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed","data-disabled":p?"":void 0,"data-placeholder":d.value===void 0?"":void 0,tabIndex:p?void 0:0,...s,ref:g,onClick:Le(s.onClick,S=>{S.currentTarget.focus()}),onPointerDown:Le(s.onPointerDown,S=>{const R=S.target;R.hasPointerCapture(S.pointerId)&&R.releasePointerCapture(S.pointerId),(R.closest("button")??R.closest("div"))===S.currentTarget&&S.button===0&&S.ctrlKey===!1&&($(),d.triggerPointerDownPosRef.current={x:Math.round(S.pageX),y:Math.round(S.pageY)},S.preventDefault())}),onKeyDown:Le(s.onKeyDown,S=>{const R=w.current!=="",A=S.ctrlKey||S.altKey||S.metaKey,D=S.target;(D.closest("button")??D.closest("div"))===S.currentTarget&&(!A&&S.key.length===1&&v(S.key),!(R&&S.key===" ")&&ov.includes(S.key)&&($(),S.preventDefault()))})})})});Za.displayName=hd;const pd="SelectValue",Xa=h.forwardRef((n,i)=>{const{__scopeSelect:r,children:s,placeholder:c,...d}=n,p=sn(pd,r),{onValueNodeHasChildrenChange:g}=p,x=s!==void 0,w=Xe(i,p.onValueNodeChange),[v,C]=h.useState([]),$=Hr(r);St(()=>{g(x)},[g,x]),h.useLayoutEffect(()=>{if(Array.isArray(p.value)&&v.length!==p.value.length){const R=setTimeout(()=>{const A=$().filter(D=>Array.isArray(D.value)?!1:p.value?.includes(D.value));C(A)});return()=>{clearTimeout(R)}}},[p.value,$,v]);let S;if((p.value===void 0||p.value.length===0)&&c!==void 0)S=l.jsx("span",{children:c});else if(typeof s=="function")if(Array.isArray(p.value)){const R=p.value.map(A=>{const D=v.find(k=>k.value===A);return D?s({value:A,textValue:D?.textValue}):null});S=R.every(A=>A===null)?c:R}else S=s(p.value);else S=s;return l.jsx(He.span,{...d,ref:w,children:S||null})});Xa.displayName=pd;const dv="SelectIcon",Ja=h.forwardRef((n,i)=>{const{__scopeSelect:r,children:s,...c}=n;return l.jsx(He.span,{"aria-hidden":!0,...c,ref:i,children:s||"▼"})});Ja.displayName=dv;const fv="SelectPortal",Qa=n=>l.jsx(Su,{asChild:!0,...n});Qa.displayName=fv;const Wn="SelectContent",es=h.forwardRef((n,i)=>{const r=sn(Wn,n.__scopeSelect),[s,c]=h.useState();if(St(()=>{c(new DocumentFragment)},[]),!r.open){const d=s;return d?ur.createPortal(l.jsx(gd,{scope:n.__scopeSelect,children:l.jsx(qo.Slot,{scope:n.__scopeSelect,children:l.jsx("div",{children:n.children})})}),d):null}return l.jsx(md,{...n,ref:i})});es.displayName=Wn;const on=10,[gd,Cn]=fr(Wn),hv="SelectContentImpl",md=h.forwardRef((n,i)=>{const{__scopeSelect:r,position:s="item-aligned",onCloseAutoFocus:c,onEscapeKeyDown:d,onPointerDownOutside:p,side:g,sideOffset:x,align:w,alignOffset:v,arrowPadding:C,collisionBoundary:$,collisionPadding:S,sticky:R,hideWhenDetached:A,avoidCollisions:D,...k}=n,T=sn(Wn,r),[W,V]=h.useState(null),[z,L]=h.useState(null),F=Xe(i,Y=>V(Y)),[q,te]=h.useState(null),[ne,_e]=h.useState(null),re=Hr(r),[ue,de]=h.useState(!1),je=h.useRef(!1);h.useEffect(()=>{if(W)return Gu(W)},[W]),Fa();const De=h.useCallback(Y=>{const[fe,...Re]=re().map(ye=>ye.ref.current),[we]=Re.slice(-1),me=document.activeElement;for(const ye of Y)if(ye===me||(ye?.scrollIntoView({block:"nearest"}),ye===fe&&z&&(z.scrollTop=0),ye===we&&z&&(z.scrollTop=z.scrollHeight),ye?.focus(),document.activeElement!==me))return},[re,z]),X=h.useCallback(()=>De([q,W]),[De,q,W]);h.useEffect(()=>{ue&&X()},[ue,X]);const{onOpenChange:ae,triggerPointerDownPosRef:Se}=T;h.useEffect(()=>{if(W){let Y={x:0,y:0};const fe=we=>{Y={x:Math.abs(Math.round(we.pageX)-(Se.current?.x??0)),y:Math.abs(Math.round(we.pageY)-(Se.current?.y??0))}},Re=we=>{Y.x<=10&&Y.y<=10?we.preventDefault():W.contains(we.target)||ae(!1),document.removeEventListener("pointermove",fe),Se.current=null};return Se.current!==null&&(document.addEventListener("pointermove",fe),document.addEventListener("pointerup",Re,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",fe),document.removeEventListener("pointerup",Re,{capture:!0})}}},[W,ae,Se]),h.useEffect(()=>{const Y=()=>ae(!1);return window.addEventListener("blur",Y),window.addEventListener("resize",Y),()=>{window.removeEventListener("blur",Y),window.removeEventListener("resize",Y)}},[ae]);const[Ie,ge]=yd(Y=>{const fe=re().filter(me=>!me.disabled),Re=fe.find(me=>me.ref.current===document.activeElement),we=Cd(fe,Y,Re);we&&setTimeout(()=>we.ref.current.focus())}),Je=h.useCallback((Y,fe,Re)=>{const we=!je.current&&!Re;(T.value!==void 0&&T.value===fe||we)&&(te(Y),we&&(je.current=!0))},[T.value]),ve=h.useCallback(()=>W?.focus(),[W]),Ue=h.useCallback((Y,fe,Re)=>{const we=!je.current&&!Re;(T.value!==void 0&&(Array.isArray(fe)?fe.every(ye=>T.value?.includes(ye)):T.value===fe)||we)&&_e(Y)},[T.value]),Ae=s==="popper"?Ra:xd,Ge=Ae===Ra?{side:g,sideOffset:x,align:w,alignOffset:v,arrowPadding:C,collisionBoundary:$,collisionPadding:S,sticky:R,hideWhenDetached:A,avoidCollisions:D}:{};return l.jsx(gd,{scope:r,content:W,viewport:z,onViewportChange:L,itemRefCallback:Je,selectedItem:q,onItemLeave:ve,itemTextRefCallback:Ue,focusSelectedItem:X,selectedItemText:ne,position:s,isPositioned:ue,searchRef:Ie,children:l.jsx(Va,{as:ya,allowPinchZoom:!0,children:l.jsx(Na,{asChild:!0,trapped:T.open,onMountAutoFocus:Y=>{Y.preventDefault()},onUnmountAutoFocus:Le(c,Y=>{T.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),Y.preventDefault()}),children:l.jsx(Eu,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:Y=>Y.preventDefault(),onDismiss:()=>T.onOpenChange(!1),children:l.jsx(Ae,{role:"listbox",id:T.contentId,"data-state":T.open?"open":"closed","aria-multiselectable":T.multi?"true":void 0,dir:T.dir,onContextMenu:Y=>Y.preventDefault(),...k,...Ge,onPlaced:()=>de(!0),ref:F,style:{display:"flex",flexDirection:"column",outline:"none",...k.style},onKeyDown:Le(k.onKeyDown,Y=>{const fe=Y.ctrlKey||Y.altKey||Y.metaKey;if(Y.key==="Tab"&&Y.preventDefault(),!fe&&Y.key.length===1&&ge(Y.key),["ArrowUp","ArrowDown","Home","End"].includes(Y.key)){let we=re().filter(me=>!me.disabled).map(me=>me.ref.current);if(["ArrowUp","End"].includes(Y.key)&&(we=we.slice().reverse()),["ArrowUp","ArrowDown"].includes(Y.key)){const me=Y.target,ye=we.indexOf(me);we=we.slice(ye+1)}setTimeout(()=>De(we)),Y.preventDefault()}})})})})})})});md.displayName=hv;const pv="SelectItemAlignedPosition",xd=h.forwardRef((n,i)=>{const{__scopeSelect:r,onPlaced:s,...c}=n,d=sn(Wn,r),p=Cn(Wn,r),[g,x]=h.useState(null),[w,v]=h.useState(null),C=Xe(i,F=>v(F)),$=Hr(r),S=h.useRef(!1),R=h.useRef(!0),{viewport:A,selectedItem:D,selectedItemText:k,focusSelectedItem:T}=p,W=h.useCallback(()=>{if(d.trigger&&d.valueNode&&g&&w&&A&&D&&k){const F=d.trigger.getBoundingClientRect(),q=w.getBoundingClientRect(),te=d.valueNode.getBoundingClientRect(),ne=k.getBoundingClientRect();if(d.dir!=="rtl"){const me=ne.left-q.left,ye=te.left-me,Ke=F.left-ye,he=F.width+Ke,Ce=Math.max(he,q.width),dt=window.innerWidth-on,qe=Jc(ye,[on,dt-Ce]);g.style.minWidth=`${he}px`,g.style.left=`${qe}px`}else{const me=q.right-ne.right,ye=window.innerWidth-te.right-me,Ke=window.innerWidth-F.right-ye,he=F.width+Ke,Ce=Math.max(he,q.width),dt=window.innerWidth-on,qe=Jc(ye,[on,dt-Ce]);g.style.minWidth=`${he}px`,g.style.right=`${qe}px`}const _e=$(),re=window.innerHeight-on*2,ue=A.scrollHeight,de=window.getComputedStyle(w),je=parseInt(de.borderTopWidth,10),De=parseInt(de.paddingTop,10),X=parseInt(de.borderBottomWidth,10),ae=parseInt(de.paddingBottom,10),Se=je+De+ue+ae+X,Ie=Math.min(D.offsetHeight*5,Se),ge=window.getComputedStyle(A),Je=parseInt(ge.paddingTop,10),ve=parseInt(ge.paddingBottom,10),Ue=F.top+F.height/2-on,Ae=re-Ue,Ge=D.offsetHeight/2,Y=D.offsetTop+Ge,fe=je+De+Y,Re=Se-fe;if(fe<=Ue){const me=D===_e[_e.length-1].ref.current;g.style.bottom="0px";const ye=w.clientHeight-A.offsetTop-A.offsetHeight,Ke=Math.max(Ae,Ge+(me?ve:0)+ye+X),he=fe+Ke;g.style.height=`${he}px`}else{const me=D===_e[0].ref.current;g.style.top="0px";const Ke=Math.max(Ue,je+A.offsetTop+(me?Je:0)+Ge)+Re;g.style.height=`${Ke}px`,A.scrollTop=fe-Ue+A.offsetTop}g.style.margin=`${on}px 0`,g.style.minHeight=`${Ie}px`,g.style.maxHeight=`${re}px`,s?.(),requestAnimationFrame(()=>S.current=!0)}},[$,d.trigger,d.valueNode,g,w,A,D,k,d.dir,s]);St(()=>W(),[W]);const[V,z]=h.useState();St(()=>{w&&z(window.getComputedStyle(w).zIndex)},[w]);const L=h.useCallback(F=>{F&&R.current===!0&&(W(),T?.(),R.current=!1)},[W,T]);return l.jsx(mv,{scope:r,contentWrapper:g,shouldExpandOnScrollRef:S,onScrollButtonChange:L,children:l.jsx("div",{ref:x,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:V},children:l.jsx(He.div,{...c,ref:C,style:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});xd.displayName=pv;const gv="SelectPopperPosition",Ra=h.forwardRef((n,i)=>{const{__scopeSelect:r,align:s="start",collisionPadding:c=on,...d}=n,p=Yo(r);return l.jsx(ju,{...p,...d,ref:i,align:s,collisionPadding:c,style:{boxSizing:"border-box",...d.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Ra.displayName=gv;const[mv,ts]=fr(Wn,{}),Ta="SelectViewport",ns=h.forwardRef((n,i)=>{const{__scopeSelect:r,...s}=n,c=Cn(Ta,r),d=ts(Ta,r),p=Xe(i,c.onViewportChange),g=h.useRef(0);return l.jsxs(l.Fragment,{children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),l.jsx(qo.Slot,{scope:r,children:l.jsx(He.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:p,style:{position:"relative",flex:1,overflow:"auto",...s.style},onScroll:Le(s.onScroll,x=>{const w=x.currentTarget,{contentWrapper:v,shouldExpandOnScrollRef:C}=d;if(C?.current&&v){const $=Math.abs(g.current-w.scrollTop);if($>0){const S=window.innerHeight-on*2,R=parseFloat(v.style.minHeight),A=parseFloat(v.style.height),D=Math.max(R,A);if(D<S){const k=D+$,T=Math.min(S,k),W=k-T;v.style.height=`${T}px`,v.style.bottom==="0px"&&(w.scrollTop=W>0?W:0,v.style.justifyContent="flex-end")}}}g.current=w.scrollTop})})})]})});ns.displayName=Ta;const bd="SelectGroup",[xv,bv]=fr(bd),rs=h.forwardRef((n,i)=>{const{__scopeSelect:r,...s}=n,c=zn();return l.jsx(xv,{scope:r,id:c,children:l.jsx(He.div,{role:"group","aria-labelledby":c,...s,ref:i})})});rs.displayName=bd;const vd="SelectLabel",os=h.forwardRef((n,i)=>{const{__scopeSelect:r,...s}=n,c=bv(vd,r);return l.jsx(He.div,{id:c.id,...s,ref:i})});os.displayName=vd;const Ho="SelectItem",[vv,$d]=fr(Ho),is=h.forwardRef((n,i)=>{const{__scopeSelect:r,value:s,disabled:c=!1,textValue:d,...p}=n,g=sn(Ho,r),x=Cn(Ho,r),w=typeof s=="string"?Array.isArray(g.value)?g.value.includes(s):g.value===s:s.every(T=>g.value?.includes(T)),v=Array.isArray(g.value)&&Array.isArray(s)&&s.some(T=>g.value?.includes(T)),[C,$]=h.useState(d??""),[S,R]=h.useState(!1),A=Xe(i,T=>x.itemRefCallback?.(T,s,c)),D=zn(),k=()=>{if(!c){let T=g.multi&&typeof s=="string"?[s]:s;v&&!w?g.onValueChange(T):Array.isArray(g.value)&&(T=_d(s,g.value)),g.onValueChange(T),g.multi||g.onOpenChange(!1)}};if(!g.multi&&Array.isArray(s))throw new Error("You can only pass an array of values in multi selects");return l.jsx(vv,{scope:r,value:s,disabled:c,textId:D,isSelected:w,isIntermediate:v,onItemTextChange:h.useCallback(T=>{$(W=>W||(T?.textContent??"").trim())},[]),children:l.jsx(qo.ItemSlot,{scope:r,value:s,disabled:c,textValue:C,children:l.jsx(He.div,{role:"option","aria-labelledby":D,"data-highlighted":S?"":void 0,"aria-selected":g.multi?void 0:w&&S,"aria-checked":g.multi?w:void 0,"data-state":w?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...p,ref:A,onFocus:Le(p.onFocus,()=>R(!0)),onBlur:Le(p.onBlur,()=>R(!1)),onPointerUp:Le(p.onPointerUp,k),onPointerMove:Le(p.onPointerMove,T=>{c?x.onItemLeave?.():T.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Le(p.onPointerLeave,T=>{T.currentTarget===document.activeElement&&x.onItemLeave?.()}),onKeyDown:Le(p.onKeyDown,T=>{x.searchRef?.current!==""&&T.key===" "||(iv.includes(T.key)&&k(),T.key===" "&&T.preventDefault())})})})})});is.displayName=Ho;const Lr="SelectItemText",as=h.forwardRef((n,i)=>{const{__scopeSelect:r,className:s,style:c,...d}=n,p=sn(Lr,r),g=Cn(Lr,r),x=$d(Lr,r),w=uv(Lr,r),[v,C]=h.useState(null),$=Xe(i,k=>C(k),x.onItemTextChange,k=>g.itemTextRefCallback?.(k,x.value,x.disabled)),S=v?.textContent,R=h.useMemo(()=>l.jsx("option",{value:x.value,disabled:x.disabled,children:S},Array.isArray(x.value)?x.value.join(";"):x.value),[x.disabled,x.value,S]),{onNativeOptionAdd:A,onNativeOptionRemove:D}=w;return St(()=>(A(R),()=>D(R)),[A,D,R]),l.jsxs(l.Fragment,{children:[l.jsx(He.span,{id:x.textId,...d,ref:$}),x.isSelected&&p.valueNode&&!p.valueNodeHasChildren?ur.createPortal(d.children,p.valueNode):null]})});as.displayName=Lr;const wd="SelectItemIndicator",ss=h.forwardRef((n,i)=>{const{__scopeSelect:r,children:s,...c}=n,d=$d(wd,r);return typeof s=="function"?l.jsx(He.span,{"aria-hidden":!0,...c,ref:i,children:s({isSelected:d.isSelected,isIntermediate:d.isIntermediate})}):d.isSelected?l.jsx(He.span,{"aria-hidden":!0,...c,ref:i,children:s}):null});ss.displayName=wd;const Aa="SelectScrollUpButton",ls=h.forwardRef((n,i)=>{const r=Cn(Aa,n.__scopeSelect),s=ts(Aa,n.__scopeSelect),[c,d]=h.useState(!1),p=Xe(i,s.onScrollButtonChange);return St(()=>{if(r.viewport&&r.isPositioned){const g=r.viewport,x=()=>{const w=g.scrollTop>0;d(w)};return x(),g.addEventListener("scroll",x),()=>g.removeEventListener("scroll",x)}},[r.viewport,r.isPositioned]),c?l.jsx(us,{...n,ref:p,onAutoScroll:()=>{const{viewport:g,selectedItem:x}=r;g&&x&&(g.scrollTop-=x.offsetHeight)}}):null});ls.displayName=Aa;const Ea="SelectScrollDownButton",cs=h.forwardRef((n,i)=>{const r=Cn(Ea,n.__scopeSelect),s=ts(Ea,n.__scopeSelect),[c,d]=h.useState(!1),p=Xe(i,s.onScrollButtonChange);return St(()=>{if(r.viewport&&r.isPositioned){const g=r.viewport,x=()=>{const w=g.scrollHeight-g.clientHeight,v=Math.ceil(g.scrollTop)<w;d(v)};return x(),g.addEventListener("scroll",x),()=>g.removeEventListener("scroll",x)}},[r.viewport,r.isPositioned]),c?l.jsx(us,{...n,ref:p,onAutoScroll:()=>{const{viewport:g,selectedItem:x}=r;g&&x&&(g.scrollTop+=x.offsetHeight)}}):null});cs.displayName=Ea;const us=h.forwardRef((n,i)=>{const{__scopeSelect:r,onAutoScroll:s,...c}=n,d=Cn("SelectScrollButton",r),p=h.useRef(null),g=Hr(r),x=h.useCallback(()=>{p.current!==null&&(window.clearInterval(p.current),p.current=null)},[]);return h.useEffect(()=>()=>x(),[x]),St(()=>{g().find(v=>v.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[g]),l.jsx(He.div,{"aria-hidden":!0,...c,ref:i,style:{flexShrink:0,...c.style},onPointerMove:Le(c.onPointerMove,()=>{d.onItemLeave?.(),p.current===null&&(p.current=window.setInterval(s,50))}),onPointerLeave:Le(c.onPointerLeave,()=>{x()})})});us.displayName="SelectScrollButtonImpl";const $v="SelectSeparator",ds=h.forwardRef((n,i)=>{const{__scopeSelect:r,...s}=n;return l.jsx(He.div,{"aria-hidden":!0,...s,ref:i})});ds.displayName=$v;const ja="SelectArrow",fs=h.forwardRef((n,i)=>{const{__scopeSelect:r,...s}=n,c=Yo(r),d=sn(ja,r),p=Cn(ja,r);return d.open&&p.position==="popper"?l.jsx(Kb,{...c,...s,ref:i}):null});fs.displayName=ja;const wv="BubbleSelect",yv=h.forwardRef((n,i)=>{const{value:r,...s}=n,c=h.useRef(null),d=Xe(i,c),p=Xb(r),g=sn(wv,void 0);h.useEffect(()=>{const w=c.current,v=window.HTMLSelectElement.prototype,$=Object.getOwnPropertyDescriptor(v,"value").set;if(p!==r&&$){const S=new Event("change",{bubbles:!0});$.call(w,r),w.dispatchEvent(S)}},[p,r]);let x=r;return g.multi&&!Array.isArray(r)&&(x=[]),l.jsx(Jb,{asChild:!0,children:l.jsx("select",{...s,multiple:g.multi?!0:void 0,ref:d,defaultValue:x})})});yv.displayName="BubbleSelect";function yd(n){const i=qa(n),r=h.useRef(""),s=h.useRef(0),c=h.useCallback(p=>{const g=r.current+p;i(g),function x(w){r.current=w,window.clearTimeout(s.current),w!==""&&(s.current=window.setTimeout(()=>x(""),1e3))}(g)},[i]),d=h.useCallback(()=>{r.current="",window.clearTimeout(s.current)},[]);return h.useEffect(()=>()=>window.clearTimeout(s.current),[]),[r,c,d]}function Cd(n,i,r){const c=i.length>1&&Array.from(i).every(w=>w===i[0])?i[0]:i,d=r?n.indexOf(r):-1;let p=Cv(n,Math.max(d,0));c.length===1&&(p=p.filter(w=>w!==r));const x=p.find(w=>w.textValue.toLowerCase().startsWith(c.toLowerCase()));return x!==r?x:void 0}function Cv(n,i){return n.map((r,s)=>n[(i+s)%n.length])}const _d=(n,i=[])=>{if(Array.isArray(n))return n.reduce((s,c)=>_d(c,s),i);const r=i.indexOf(n);return r===-1?[...i,n]:[...i.slice(0,r),...i.slice(r+1)]},_v=Ya,Sv=Za,Iv=Xa,Rv=Ja,Tv=Qa,Av=es,Ev=ns,jv=rs,kv=os,Dv=is,Ov=as,Pv=ss,Mv=ls,Lv=cs,Nv=ds,Fv=fs,zt=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Fv,Content:Av,Group:jv,Icon:Rv,Item:Dv,ItemIndicator:Pv,ItemText:Ov,Label:kv,Portal:Tv,Root:_v,ScrollDownButton:Lv,ScrollUpButton:Mv,Select:Ya,SelectArrow:fs,SelectContent:es,SelectGroup:rs,SelectIcon:Ja,SelectItem:is,SelectItemIndicator:ss,SelectItemText:as,SelectLabel:os,SelectPortal:Qa,SelectScrollDownButton:cs,SelectScrollUpButton:ls,SelectSeparator:ds,SelectTrigger:Za,SelectValue:Xa,SelectViewport:ns,Separator:Nv,Trigger:Sv,Value:Iv,Viewport:Ev,createSelectScope:sv},Symbol.toStringTag,{value:"Module"}));function Nn(n,i,{checkForDefaultPrevented:r=!0}={}){return function(c){if(n?.(c),r===!1||!c.defaultPrevented)return i?.(c)}}var Uo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Uo.exports;(function(n,i){(function(){var r,s="4.17.21",c=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",p="Expected a function",g="Invalid `variable` option passed into `_.template`",x="__lodash_hash_undefined__",w=500,v="__lodash_placeholder__",C=1,$=2,S=4,R=1,A=2,D=1,k=2,T=4,W=8,V=16,z=32,L=64,F=128,q=256,te=512,ne=30,_e="...",re=800,ue=16,de=1,je=2,De=3,X=1/0,ae=9007199254740991,Se=17976931348623157e292,Ie=NaN,ge=4294967295,Je=ge-1,ve=ge>>>1,Ue=[["ary",F],["bind",D],["bindKey",k],["curry",W],["curryRight",V],["flip",te],["partial",z],["partialRight",L],["rearg",q]],Ae="[object Arguments]",Ge="[object Array]",Y="[object AsyncFunction]",fe="[object Boolean]",Re="[object Date]",we="[object DOMException]",me="[object Error]",ye="[object Function]",Ke="[object GeneratorFunction]",he="[object Map]",Ce="[object Number]",dt="[object Null]",qe="[object Object]",qr="[object Promise]",ni="[object Proxy]",ln="[object RegExp]",bt="[object Set]",cn="[object String]",un="[object Symbol]",Bn="[object Undefined]",Sn="[object WeakMap]",xr="[object WeakSet]",In="[object ArrayBuffer]",dn="[object DataView]",Yr="[object Float32Array]",Hn="[object Float64Array]",Zr="[object Int8Array]",Xr="[object Int16Array]",br="[object Int32Array]",Rn="[object Uint8Array]",et="[object Uint8ClampedArray]",ri="[object Uint16Array]",oi="[object Uint32Array]",pf=/\b__p \+= '';/g,gf=/\b(__p \+=) '' \+/g,mf=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Cs=/&(?:amp|lt|gt|quot|#39);/g,_s=/[&<>"']/g,xf=RegExp(Cs.source),bf=RegExp(_s.source),vf=/<%-([\s\S]+?)%>/g,$f=/<%([\s\S]+?)%>/g,Ss=/<%=([\s\S]+?)%>/g,wf=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yf=/^\w*$/,Cf=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ii=/[\\^$.*+?()[\]{}|]/g,_f=RegExp(ii.source),ai=/^\s+/,Sf=/\s/,If=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Rf=/\{\n\/\* \[wrapped with (.+)\] \*/,Tf=/,? & /,Af=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ef=/[()=,{}\[\]\/\s]/,jf=/\\(\\)?/g,kf=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Is=/\w*$/,Df=/^[-+]0x[0-9a-f]+$/i,Of=/^0b[01]+$/i,Pf=/^\[object .+?Constructor\]$/,Mf=/^0o[0-7]+$/i,Lf=/^(?:0|[1-9]\d*)$/,Nf=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Jr=/($^)/,Ff=/['\n\r\u2028\u2029\\]/g,Qr="\\ud800-\\udfff",Vf="\\u0300-\\u036f",Wf="\\ufe20-\\ufe2f",zf="\\u20d0-\\u20ff",Rs=Vf+Wf+zf,Ts="\\u2700-\\u27bf",As="a-z\\xdf-\\xf6\\xf8-\\xff",Bf="\\xac\\xb1\\xd7\\xf7",Hf="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Uf="\\u2000-\\u206f",Gf=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Es="A-Z\\xc0-\\xd6\\xd8-\\xde",js="\\ufe0e\\ufe0f",ks=Bf+Hf+Uf+Gf,si="['’]",Kf="["+Qr+"]",Ds="["+ks+"]",eo="["+Rs+"]",Os="\\d+",qf="["+Ts+"]",Ps="["+As+"]",Ms="[^"+Qr+ks+Os+Ts+As+Es+"]",li="\\ud83c[\\udffb-\\udfff]",Yf="(?:"+eo+"|"+li+")",Ls="[^"+Qr+"]",ci="(?:\\ud83c[\\udde6-\\uddff]){2}",ui="[\\ud800-\\udbff][\\udc00-\\udfff]",Un="["+Es+"]",Ns="\\u200d",Fs="(?:"+Ps+"|"+Ms+")",Zf="(?:"+Un+"|"+Ms+")",Vs="(?:"+si+"(?:d|ll|m|re|s|t|ve))?",Ws="(?:"+si+"(?:D|LL|M|RE|S|T|VE))?",zs=Yf+"?",Bs="["+js+"]?",Xf="(?:"+Ns+"(?:"+[Ls,ci,ui].join("|")+")"+Bs+zs+")*",Jf="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Qf="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Hs=Bs+zs+Xf,eh="(?:"+[qf,ci,ui].join("|")+")"+Hs,th="(?:"+[Ls+eo+"?",eo,ci,ui,Kf].join("|")+")",nh=RegExp(si,"g"),rh=RegExp(eo,"g"),di=RegExp(li+"(?="+li+")|"+th+Hs,"g"),oh=RegExp([Un+"?"+Ps+"+"+Vs+"(?="+[Ds,Un,"$"].join("|")+")",Zf+"+"+Ws+"(?="+[Ds,Un+Fs,"$"].join("|")+")",Un+"?"+Fs+"+"+Vs,Un+"+"+Ws,Qf,Jf,Os,eh].join("|"),"g"),ih=RegExp("["+Ns+Qr+Rs+js+"]"),ah=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,sh=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],lh=-1,Me={};Me[Yr]=Me[Hn]=Me[Zr]=Me[Xr]=Me[br]=Me[Rn]=Me[et]=Me[ri]=Me[oi]=!0,Me[Ae]=Me[Ge]=Me[In]=Me[fe]=Me[dn]=Me[Re]=Me[me]=Me[ye]=Me[he]=Me[Ce]=Me[qe]=Me[ln]=Me[bt]=Me[cn]=Me[Sn]=!1;var Pe={};Pe[Ae]=Pe[Ge]=Pe[In]=Pe[dn]=Pe[fe]=Pe[Re]=Pe[Yr]=Pe[Hn]=Pe[Zr]=Pe[Xr]=Pe[br]=Pe[he]=Pe[Ce]=Pe[qe]=Pe[ln]=Pe[bt]=Pe[cn]=Pe[un]=Pe[Rn]=Pe[et]=Pe[ri]=Pe[oi]=!0,Pe[me]=Pe[ye]=Pe[Sn]=!1;var ch={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},uh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},dh={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},fh={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},hh=parseFloat,ph=parseInt,Us=typeof Or=="object"&&Or&&Or.Object===Object&&Or,gh=typeof self=="object"&&self&&self.Object===Object&&self,tt=Us||gh||Function("return this")(),fi=i&&!i.nodeType&&i,Tn=fi&&!0&&n&&!n.nodeType&&n,Gs=Tn&&Tn.exports===fi,hi=Gs&&Us.process,Rt=function(){try{var _=Tn&&Tn.require&&Tn.require("util").types;return _||hi&&hi.binding&&hi.binding("util")}catch{}}(),Ks=Rt&&Rt.isArrayBuffer,qs=Rt&&Rt.isDate,Ys=Rt&&Rt.isMap,Zs=Rt&&Rt.isRegExp,Xs=Rt&&Rt.isSet,Js=Rt&&Rt.isTypedArray;function vt(_,O,j){switch(j.length){case 0:return _.call(O);case 1:return _.call(O,j[0]);case 2:return _.call(O,j[0],j[1]);case 3:return _.call(O,j[0],j[1],j[2])}return _.apply(O,j)}function mh(_,O,j,G){for(var ie=-1,Te=_==null?0:_.length;++ie<Te;){var Ye=_[ie];O(G,Ye,j(Ye),_)}return G}function Tt(_,O){for(var j=-1,G=_==null?0:_.length;++j<G&&O(_[j],j,_)!==!1;);return _}function xh(_,O){for(var j=_==null?0:_.length;j--&&O(_[j],j,_)!==!1;);return _}function Qs(_,O){for(var j=-1,G=_==null?0:_.length;++j<G;)if(!O(_[j],j,_))return!1;return!0}function fn(_,O){for(var j=-1,G=_==null?0:_.length,ie=0,Te=[];++j<G;){var Ye=_[j];O(Ye,j,_)&&(Te[ie++]=Ye)}return Te}function to(_,O){var j=_==null?0:_.length;return!!j&&Gn(_,O,0)>-1}function pi(_,O,j){for(var G=-1,ie=_==null?0:_.length;++G<ie;)if(j(O,_[G]))return!0;return!1}function Ne(_,O){for(var j=-1,G=_==null?0:_.length,ie=Array(G);++j<G;)ie[j]=O(_[j],j,_);return ie}function hn(_,O){for(var j=-1,G=O.length,ie=_.length;++j<G;)_[ie+j]=O[j];return _}function gi(_,O,j,G){var ie=-1,Te=_==null?0:_.length;for(G&&Te&&(j=_[++ie]);++ie<Te;)j=O(j,_[ie],ie,_);return j}function bh(_,O,j,G){var ie=_==null?0:_.length;for(G&&ie&&(j=_[--ie]);ie--;)j=O(j,_[ie],ie,_);return j}function mi(_,O){for(var j=-1,G=_==null?0:_.length;++j<G;)if(O(_[j],j,_))return!0;return!1}var vh=xi("length");function $h(_){return _.split("")}function wh(_){return _.match(Af)||[]}function el(_,O,j){var G;return j(_,function(ie,Te,Ye){if(O(ie,Te,Ye))return G=Te,!1}),G}function no(_,O,j,G){for(var ie=_.length,Te=j+(G?1:-1);G?Te--:++Te<ie;)if(O(_[Te],Te,_))return Te;return-1}function Gn(_,O,j){return O===O?Dh(_,O,j):no(_,tl,j)}function yh(_,O,j,G){for(var ie=j-1,Te=_.length;++ie<Te;)if(G(_[ie],O))return ie;return-1}function tl(_){return _!==_}function nl(_,O){var j=_==null?0:_.length;return j?vi(_,O)/j:Ie}function xi(_){return function(O){return O==null?r:O[_]}}function bi(_){return function(O){return _==null?r:_[O]}}function rl(_,O,j,G,ie){return ie(_,function(Te,Ye,Oe){j=G?(G=!1,Te):O(j,Te,Ye,Oe)}),j}function Ch(_,O){var j=_.length;for(_.sort(O);j--;)_[j]=_[j].value;return _}function vi(_,O){for(var j,G=-1,ie=_.length;++G<ie;){var Te=O(_[G]);Te!==r&&(j=j===r?Te:j+Te)}return j}function $i(_,O){for(var j=-1,G=Array(_);++j<_;)G[j]=O(j);return G}function _h(_,O){return Ne(O,function(j){return[j,_[j]]})}function ol(_){return _&&_.slice(0,ll(_)+1).replace(ai,"")}function $t(_){return function(O){return _(O)}}function wi(_,O){return Ne(O,function(j){return _[j]})}function vr(_,O){return _.has(O)}function il(_,O){for(var j=-1,G=_.length;++j<G&&Gn(O,_[j],0)>-1;);return j}function al(_,O){for(var j=_.length;j--&&Gn(O,_[j],0)>-1;);return j}function Sh(_,O){for(var j=_.length,G=0;j--;)_[j]===O&&++G;return G}var Ih=bi(ch),Rh=bi(uh);function Th(_){return"\\"+fh[_]}function Ah(_,O){return _==null?r:_[O]}function Kn(_){return ih.test(_)}function Eh(_){return ah.test(_)}function jh(_){for(var O,j=[];!(O=_.next()).done;)j.push(O.value);return j}function yi(_){var O=-1,j=Array(_.size);return _.forEach(function(G,ie){j[++O]=[ie,G]}),j}function sl(_,O){return function(j){return _(O(j))}}function pn(_,O){for(var j=-1,G=_.length,ie=0,Te=[];++j<G;){var Ye=_[j];(Ye===O||Ye===v)&&(_[j]=v,Te[ie++]=j)}return Te}function ro(_){var O=-1,j=Array(_.size);return _.forEach(function(G){j[++O]=G}),j}function kh(_){var O=-1,j=Array(_.size);return _.forEach(function(G){j[++O]=[G,G]}),j}function Dh(_,O,j){for(var G=j-1,ie=_.length;++G<ie;)if(_[G]===O)return G;return-1}function Oh(_,O,j){for(var G=j+1;G--;)if(_[G]===O)return G;return G}function qn(_){return Kn(_)?Mh(_):vh(_)}function Mt(_){return Kn(_)?Lh(_):$h(_)}function ll(_){for(var O=_.length;O--&&Sf.test(_.charAt(O)););return O}var Ph=bi(dh);function Mh(_){for(var O=di.lastIndex=0;di.test(_);)++O;return O}function Lh(_){return _.match(di)||[]}function Nh(_){return _.match(oh)||[]}var Fh=function _(O){O=O==null?tt:Yn.defaults(tt.Object(),O,Yn.pick(tt,sh));var j=O.Array,G=O.Date,ie=O.Error,Te=O.Function,Ye=O.Math,Oe=O.Object,Ci=O.RegExp,Vh=O.String,At=O.TypeError,oo=j.prototype,Wh=Te.prototype,Zn=Oe.prototype,io=O["__core-js_shared__"],ao=Wh.toString,ke=Zn.hasOwnProperty,zh=0,cl=function(){var e=/[^.]+$/.exec(io&&io.keys&&io.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),so=Zn.toString,Bh=ao.call(Oe),Hh=tt._,Uh=Ci("^"+ao.call(ke).replace(ii,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),lo=Gs?O.Buffer:r,gn=O.Symbol,co=O.Uint8Array,ul=lo?lo.allocUnsafe:r,uo=sl(Oe.getPrototypeOf,Oe),dl=Oe.create,fl=Zn.propertyIsEnumerable,fo=oo.splice,hl=gn?gn.isConcatSpreadable:r,$r=gn?gn.iterator:r,An=gn?gn.toStringTag:r,ho=function(){try{var e=On(Oe,"defineProperty");return e({},"",{}),e}catch{}}(),Gh=O.clearTimeout!==tt.clearTimeout&&O.clearTimeout,Kh=G&&G.now!==tt.Date.now&&G.now,qh=O.setTimeout!==tt.setTimeout&&O.setTimeout,po=Ye.ceil,go=Ye.floor,_i=Oe.getOwnPropertySymbols,Yh=lo?lo.isBuffer:r,pl=O.isFinite,Zh=oo.join,Xh=sl(Oe.keys,Oe),Ze=Ye.max,rt=Ye.min,Jh=G.now,Qh=O.parseInt,gl=Ye.random,ep=oo.reverse,Si=On(O,"DataView"),wr=On(O,"Map"),Ii=On(O,"Promise"),Xn=On(O,"Set"),yr=On(O,"WeakMap"),Cr=On(Oe,"create"),mo=yr&&new yr,Jn={},tp=Pn(Si),np=Pn(wr),rp=Pn(Ii),op=Pn(Xn),ip=Pn(yr),xo=gn?gn.prototype:r,_r=xo?xo.valueOf:r,ml=xo?xo.toString:r;function f(e){if(Ve(e)&&!se(e)&&!(e instanceof be)){if(e instanceof Et)return e;if(ke.call(e,"__wrapped__"))return xc(e)}return new Et(e)}var Qn=function(){function e(){}return function(t){if(!Fe(t))return{};if(dl)return dl(t);e.prototype=t;var o=new e;return e.prototype=r,o}}();function bo(){}function Et(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}f.templateSettings={escape:vf,evaluate:$f,interpolate:Ss,variable:"",imports:{_:f}},f.prototype=bo.prototype,f.prototype.constructor=f,Et.prototype=Qn(bo.prototype),Et.prototype.constructor=Et;function be(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ge,this.__views__=[]}function ap(){var e=new be(this.__wrapped__);return e.__actions__=ft(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ft(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ft(this.__views__),e}function sp(){if(this.__filtered__){var e=new be(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function lp(){var e=this.__wrapped__.value(),t=this.__dir__,o=se(e),a=t<0,u=o?e.length:0,m=$0(0,u,this.__views__),b=m.start,y=m.end,I=y-b,P=a?y:b-1,M=this.__iteratees__,N=M.length,B=0,K=rt(I,this.__takeCount__);if(!o||!a&&u==I&&K==I)return Vl(e,this.__actions__);var Q=[];e:for(;I--&&B<K;){P+=t;for(var ce=-1,ee=e[P];++ce<N;){var xe=M[ce],$e=xe.iteratee,Ct=xe.type,ct=$e(ee);if(Ct==je)ee=ct;else if(!ct){if(Ct==de)continue e;break e}}Q[B++]=ee}return Q}be.prototype=Qn(bo.prototype),be.prototype.constructor=be;function En(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var a=e[t];this.set(a[0],a[1])}}function cp(){this.__data__=Cr?Cr(null):{},this.size=0}function up(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function dp(e){var t=this.__data__;if(Cr){var o=t[e];return o===x?r:o}return ke.call(t,e)?t[e]:r}function fp(e){var t=this.__data__;return Cr?t[e]!==r:ke.call(t,e)}function hp(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=Cr&&t===r?x:t,this}En.prototype.clear=cp,En.prototype.delete=up,En.prototype.get=dp,En.prototype.has=fp,En.prototype.set=hp;function Yt(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var a=e[t];this.set(a[0],a[1])}}function pp(){this.__data__=[],this.size=0}function gp(e){var t=this.__data__,o=vo(t,e);if(o<0)return!1;var a=t.length-1;return o==a?t.pop():fo.call(t,o,1),--this.size,!0}function mp(e){var t=this.__data__,o=vo(t,e);return o<0?r:t[o][1]}function xp(e){return vo(this.__data__,e)>-1}function bp(e,t){var o=this.__data__,a=vo(o,e);return a<0?(++this.size,o.push([e,t])):o[a][1]=t,this}Yt.prototype.clear=pp,Yt.prototype.delete=gp,Yt.prototype.get=mp,Yt.prototype.has=xp,Yt.prototype.set=bp;function Zt(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var a=e[t];this.set(a[0],a[1])}}function vp(){this.size=0,this.__data__={hash:new En,map:new(wr||Yt),string:new En}}function $p(e){var t=jo(this,e).delete(e);return this.size-=t?1:0,t}function wp(e){return jo(this,e).get(e)}function yp(e){return jo(this,e).has(e)}function Cp(e,t){var o=jo(this,e),a=o.size;return o.set(e,t),this.size+=o.size==a?0:1,this}Zt.prototype.clear=vp,Zt.prototype.delete=$p,Zt.prototype.get=wp,Zt.prototype.has=yp,Zt.prototype.set=Cp;function jn(e){var t=-1,o=e==null?0:e.length;for(this.__data__=new Zt;++t<o;)this.add(e[t])}function _p(e){return this.__data__.set(e,x),this}function Sp(e){return this.__data__.has(e)}jn.prototype.add=jn.prototype.push=_p,jn.prototype.has=Sp;function Lt(e){var t=this.__data__=new Yt(e);this.size=t.size}function Ip(){this.__data__=new Yt,this.size=0}function Rp(e){var t=this.__data__,o=t.delete(e);return this.size=t.size,o}function Tp(e){return this.__data__.get(e)}function Ap(e){return this.__data__.has(e)}function Ep(e,t){var o=this.__data__;if(o instanceof Yt){var a=o.__data__;if(!wr||a.length<c-1)return a.push([e,t]),this.size=++o.size,this;o=this.__data__=new Zt(a)}return o.set(e,t),this.size=o.size,this}Lt.prototype.clear=Ip,Lt.prototype.delete=Rp,Lt.prototype.get=Tp,Lt.prototype.has=Ap,Lt.prototype.set=Ep;function xl(e,t){var o=se(e),a=!o&&Mn(e),u=!o&&!a&&$n(e),m=!o&&!a&&!u&&rr(e),b=o||a||u||m,y=b?$i(e.length,Vh):[],I=y.length;for(var P in e)(t||ke.call(e,P))&&!(b&&(P=="length"||u&&(P=="offset"||P=="parent")||m&&(P=="buffer"||P=="byteLength"||P=="byteOffset")||en(P,I)))&&y.push(P);return y}function bl(e){var t=e.length;return t?e[Li(0,t-1)]:r}function jp(e,t){return ko(ft(e),kn(t,0,e.length))}function kp(e){return ko(ft(e))}function Ri(e,t,o){(o!==r&&!Nt(e[t],o)||o===r&&!(t in e))&&Xt(e,t,o)}function Sr(e,t,o){var a=e[t];(!(ke.call(e,t)&&Nt(a,o))||o===r&&!(t in e))&&Xt(e,t,o)}function vo(e,t){for(var o=e.length;o--;)if(Nt(e[o][0],t))return o;return-1}function Dp(e,t,o,a){return mn(e,function(u,m,b){t(a,u,o(u),b)}),a}function vl(e,t){return e&&Ut(t,Qe(t),e)}function Op(e,t){return e&&Ut(t,pt(t),e)}function Xt(e,t,o){t=="__proto__"&&ho?ho(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}function Ti(e,t){for(var o=-1,a=t.length,u=j(a),m=e==null;++o<a;)u[o]=m?r:la(e,t[o]);return u}function kn(e,t,o){return e===e&&(o!==r&&(e=e<=o?e:o),t!==r&&(e=e>=t?e:t)),e}function jt(e,t,o,a,u,m){var b,y=t&C,I=t&$,P=t&S;if(o&&(b=u?o(e,a,u,m):o(e)),b!==r)return b;if(!Fe(e))return e;var M=se(e);if(M){if(b=y0(e),!y)return ft(e,b)}else{var N=ot(e),B=N==ye||N==Ke;if($n(e))return Bl(e,y);if(N==qe||N==Ae||B&&!u){if(b=I||B?{}:lc(e),!y)return I?d0(e,Op(b,e)):u0(e,vl(b,e))}else{if(!Pe[N])return u?e:{};b=C0(e,N,y)}}m||(m=new Lt);var K=m.get(e);if(K)return K;m.set(e,b),Lc(e)?e.forEach(function(ee){b.add(jt(ee,t,o,ee,e,m))}):Pc(e)&&e.forEach(function(ee,xe){b.set(xe,jt(ee,t,o,xe,e,m))});var Q=P?I?qi:Ki:I?pt:Qe,ce=M?r:Q(e);return Tt(ce||e,function(ee,xe){ce&&(xe=ee,ee=e[xe]),Sr(b,xe,jt(ee,t,o,xe,e,m))}),b}function Pp(e){var t=Qe(e);return function(o){return $l(o,e,t)}}function $l(e,t,o){var a=o.length;if(e==null)return!a;for(e=Oe(e);a--;){var u=o[a],m=t[u],b=e[u];if(b===r&&!(u in e)||!m(b))return!1}return!0}function wl(e,t,o){if(typeof e!="function")throw new At(p);return kr(function(){e.apply(r,o)},t)}function Ir(e,t,o,a){var u=-1,m=to,b=!0,y=e.length,I=[],P=t.length;if(!y)return I;o&&(t=Ne(t,$t(o))),a?(m=pi,b=!1):t.length>=c&&(m=vr,b=!1,t=new jn(t));e:for(;++u<y;){var M=e[u],N=o==null?M:o(M);if(M=a||M!==0?M:0,b&&N===N){for(var B=P;B--;)if(t[B]===N)continue e;I.push(M)}else m(t,N,a)||I.push(M)}return I}var mn=ql(Ht),yl=ql(Ei,!0);function Mp(e,t){var o=!0;return mn(e,function(a,u,m){return o=!!t(a,u,m),o}),o}function $o(e,t,o){for(var a=-1,u=e.length;++a<u;){var m=e[a],b=t(m);if(b!=null&&(y===r?b===b&&!yt(b):o(b,y)))var y=b,I=m}return I}function Lp(e,t,o,a){var u=e.length;for(o=le(o),o<0&&(o=-o>u?0:u+o),a=a===r||a>u?u:le(a),a<0&&(a+=u),a=o>a?0:Fc(a);o<a;)e[o++]=t;return e}function Cl(e,t){var o=[];return mn(e,function(a,u,m){t(a,u,m)&&o.push(a)}),o}function nt(e,t,o,a,u){var m=-1,b=e.length;for(o||(o=S0),u||(u=[]);++m<b;){var y=e[m];t>0&&o(y)?t>1?nt(y,t-1,o,a,u):hn(u,y):a||(u[u.length]=y)}return u}var Ai=Yl(),_l=Yl(!0);function Ht(e,t){return e&&Ai(e,t,Qe)}function Ei(e,t){return e&&_l(e,t,Qe)}function wo(e,t){return fn(t,function(o){return tn(e[o])})}function Dn(e,t){t=bn(t,e);for(var o=0,a=t.length;e!=null&&o<a;)e=e[Gt(t[o++])];return o&&o==a?e:r}function Sl(e,t,o){var a=t(e);return se(e)?a:hn(a,o(e))}function st(e){return e==null?e===r?Bn:dt:An&&An in Oe(e)?v0(e):k0(e)}function ji(e,t){return e>t}function Np(e,t){return e!=null&&ke.call(e,t)}function Fp(e,t){return e!=null&&t in Oe(e)}function Vp(e,t,o){return e>=rt(t,o)&&e<Ze(t,o)}function ki(e,t,o){for(var a=o?pi:to,u=e[0].length,m=e.length,b=m,y=j(m),I=1/0,P=[];b--;){var M=e[b];b&&t&&(M=Ne(M,$t(t))),I=rt(M.length,I),y[b]=!o&&(t||u>=120&&M.length>=120)?new jn(b&&M):r}M=e[0];var N=-1,B=y[0];e:for(;++N<u&&P.length<I;){var K=M[N],Q=t?t(K):K;if(K=o||K!==0?K:0,!(B?vr(B,Q):a(P,Q,o))){for(b=m;--b;){var ce=y[b];if(!(ce?vr(ce,Q):a(e[b],Q,o)))continue e}B&&B.push(Q),P.push(K)}}return P}function Wp(e,t,o,a){return Ht(e,function(u,m,b){t(a,o(u),m,b)}),a}function Rr(e,t,o){t=bn(t,e),e=fc(e,t);var a=e==null?e:e[Gt(Dt(t))];return a==null?r:vt(a,e,o)}function Il(e){return Ve(e)&&st(e)==Ae}function zp(e){return Ve(e)&&st(e)==In}function Bp(e){return Ve(e)&&st(e)==Re}function Tr(e,t,o,a,u){return e===t?!0:e==null||t==null||!Ve(e)&&!Ve(t)?e!==e&&t!==t:Hp(e,t,o,a,Tr,u)}function Hp(e,t,o,a,u,m){var b=se(e),y=se(t),I=b?Ge:ot(e),P=y?Ge:ot(t);I=I==Ae?qe:I,P=P==Ae?qe:P;var M=I==qe,N=P==qe,B=I==P;if(B&&$n(e)){if(!$n(t))return!1;b=!0,M=!1}if(B&&!M)return m||(m=new Lt),b||rr(e)?ic(e,t,o,a,u,m):x0(e,t,I,o,a,u,m);if(!(o&R)){var K=M&&ke.call(e,"__wrapped__"),Q=N&&ke.call(t,"__wrapped__");if(K||Q){var ce=K?e.value():e,ee=Q?t.value():t;return m||(m=new Lt),u(ce,ee,o,a,m)}}return B?(m||(m=new Lt),b0(e,t,o,a,u,m)):!1}function Up(e){return Ve(e)&&ot(e)==he}function Di(e,t,o,a){var u=o.length,m=u,b=!a;if(e==null)return!m;for(e=Oe(e);u--;){var y=o[u];if(b&&y[2]?y[1]!==e[y[0]]:!(y[0]in e))return!1}for(;++u<m;){y=o[u];var I=y[0],P=e[I],M=y[1];if(b&&y[2]){if(P===r&&!(I in e))return!1}else{var N=new Lt;if(a)var B=a(P,M,I,e,t,N);if(!(B===r?Tr(M,P,R|A,a,N):B))return!1}}return!0}function Rl(e){if(!Fe(e)||R0(e))return!1;var t=tn(e)?Uh:Pf;return t.test(Pn(e))}function Gp(e){return Ve(e)&&st(e)==ln}function Kp(e){return Ve(e)&&ot(e)==bt}function qp(e){return Ve(e)&&No(e.length)&&!!Me[st(e)]}function Tl(e){return typeof e=="function"?e:e==null?gt:typeof e=="object"?se(e)?jl(e[0],e[1]):El(e):Zc(e)}function Oi(e){if(!jr(e))return Xh(e);var t=[];for(var o in Oe(e))ke.call(e,o)&&o!="constructor"&&t.push(o);return t}function Yp(e){if(!Fe(e))return j0(e);var t=jr(e),o=[];for(var a in e)a=="constructor"&&(t||!ke.call(e,a))||o.push(a);return o}function Pi(e,t){return e<t}function Al(e,t){var o=-1,a=ht(e)?j(e.length):[];return mn(e,function(u,m,b){a[++o]=t(u,m,b)}),a}function El(e){var t=Zi(e);return t.length==1&&t[0][2]?uc(t[0][0],t[0][1]):function(o){return o===e||Di(o,e,t)}}function jl(e,t){return Ji(e)&&cc(t)?uc(Gt(e),t):function(o){var a=la(o,e);return a===r&&a===t?ca(o,e):Tr(t,a,R|A)}}function yo(e,t,o,a,u){e!==t&&Ai(t,function(m,b){if(u||(u=new Lt),Fe(m))Zp(e,t,b,o,yo,a,u);else{var y=a?a(ea(e,b),m,b+"",e,t,u):r;y===r&&(y=m),Ri(e,b,y)}},pt)}function Zp(e,t,o,a,u,m,b){var y=ea(e,o),I=ea(t,o),P=b.get(I);if(P){Ri(e,o,P);return}var M=m?m(y,I,o+"",e,t,b):r,N=M===r;if(N){var B=se(I),K=!B&&$n(I),Q=!B&&!K&&rr(I);M=I,B||K||Q?se(y)?M=y:We(y)?M=ft(y):K?(N=!1,M=Bl(I,!0)):Q?(N=!1,M=Hl(I,!0)):M=[]:Dr(I)||Mn(I)?(M=y,Mn(y)?M=Vc(y):(!Fe(y)||tn(y))&&(M=lc(I))):N=!1}N&&(b.set(I,M),u(M,I,a,m,b),b.delete(I)),Ri(e,o,M)}function kl(e,t){var o=e.length;if(o)return t+=t<0?o:0,en(t,o)?e[t]:r}function Dl(e,t,o){t.length?t=Ne(t,function(m){return se(m)?function(b){return Dn(b,m.length===1?m[0]:m)}:m}):t=[gt];var a=-1;t=Ne(t,$t(J()));var u=Al(e,function(m,b,y){var I=Ne(t,function(P){return P(m)});return{criteria:I,index:++a,value:m}});return Ch(u,function(m,b){return c0(m,b,o)})}function Xp(e,t){return Ol(e,t,function(o,a){return ca(e,a)})}function Ol(e,t,o){for(var a=-1,u=t.length,m={};++a<u;){var b=t[a],y=Dn(e,b);o(y,b)&&Ar(m,bn(b,e),y)}return m}function Jp(e){return function(t){return Dn(t,e)}}function Mi(e,t,o,a){var u=a?yh:Gn,m=-1,b=t.length,y=e;for(e===t&&(t=ft(t)),o&&(y=Ne(e,$t(o)));++m<b;)for(var I=0,P=t[m],M=o?o(P):P;(I=u(y,M,I,a))>-1;)y!==e&&fo.call(y,I,1),fo.call(e,I,1);return e}function Pl(e,t){for(var o=e?t.length:0,a=o-1;o--;){var u=t[o];if(o==a||u!==m){var m=u;en(u)?fo.call(e,u,1):Vi(e,u)}}return e}function Li(e,t){return e+go(gl()*(t-e+1))}function Qp(e,t,o,a){for(var u=-1,m=Ze(po((t-e)/(o||1)),0),b=j(m);m--;)b[a?m:++u]=e,e+=o;return b}function Ni(e,t){var o="";if(!e||t<1||t>ae)return o;do t%2&&(o+=e),t=go(t/2),t&&(e+=e);while(t);return o}function pe(e,t){return ta(dc(e,t,gt),e+"")}function e0(e){return bl(or(e))}function t0(e,t){var o=or(e);return ko(o,kn(t,0,o.length))}function Ar(e,t,o,a){if(!Fe(e))return e;t=bn(t,e);for(var u=-1,m=t.length,b=m-1,y=e;y!=null&&++u<m;){var I=Gt(t[u]),P=o;if(I==="__proto__"||I==="constructor"||I==="prototype")return e;if(u!=b){var M=y[I];P=a?a(M,I,y):r,P===r&&(P=Fe(M)?M:en(t[u+1])?[]:{})}Sr(y,I,P),y=y[I]}return e}var Ml=mo?function(e,t){return mo.set(e,t),e}:gt,n0=ho?function(e,t){return ho(e,"toString",{configurable:!0,enumerable:!1,value:da(t),writable:!0})}:gt;function r0(e){return ko(or(e))}function kt(e,t,o){var a=-1,u=e.length;t<0&&(t=-t>u?0:u+t),o=o>u?u:o,o<0&&(o+=u),u=t>o?0:o-t>>>0,t>>>=0;for(var m=j(u);++a<u;)m[a]=e[a+t];return m}function o0(e,t){var o;return mn(e,function(a,u,m){return o=t(a,u,m),!o}),!!o}function Co(e,t,o){var a=0,u=e==null?a:e.length;if(typeof t=="number"&&t===t&&u<=ve){for(;a<u;){var m=a+u>>>1,b=e[m];b!==null&&!yt(b)&&(o?b<=t:b<t)?a=m+1:u=m}return u}return Fi(e,t,gt,o)}function Fi(e,t,o,a){var u=0,m=e==null?0:e.length;if(m===0)return 0;t=o(t);for(var b=t!==t,y=t===null,I=yt(t),P=t===r;u<m;){var M=go((u+m)/2),N=o(e[M]),B=N!==r,K=N===null,Q=N===N,ce=yt(N);if(b)var ee=a||Q;else P?ee=Q&&(a||B):y?ee=Q&&B&&(a||!K):I?ee=Q&&B&&!K&&(a||!ce):K||ce?ee=!1:ee=a?N<=t:N<t;ee?u=M+1:m=M}return rt(m,Je)}function Ll(e,t){for(var o=-1,a=e.length,u=0,m=[];++o<a;){var b=e[o],y=t?t(b):b;if(!o||!Nt(y,I)){var I=y;m[u++]=b===0?0:b}}return m}function Nl(e){return typeof e=="number"?e:yt(e)?Ie:+e}function wt(e){if(typeof e=="string")return e;if(se(e))return Ne(e,wt)+"";if(yt(e))return ml?ml.call(e):"";var t=e+"";return t=="0"&&1/e==-X?"-0":t}function xn(e,t,o){var a=-1,u=to,m=e.length,b=!0,y=[],I=y;if(o)b=!1,u=pi;else if(m>=c){var P=t?null:g0(e);if(P)return ro(P);b=!1,u=vr,I=new jn}else I=t?[]:y;e:for(;++a<m;){var M=e[a],N=t?t(M):M;if(M=o||M!==0?M:0,b&&N===N){for(var B=I.length;B--;)if(I[B]===N)continue e;t&&I.push(N),y.push(M)}else u(I,N,o)||(I!==y&&I.push(N),y.push(M))}return y}function Vi(e,t){return t=bn(t,e),e=fc(e,t),e==null||delete e[Gt(Dt(t))]}function Fl(e,t,o,a){return Ar(e,t,o(Dn(e,t)),a)}function _o(e,t,o,a){for(var u=e.length,m=a?u:-1;(a?m--:++m<u)&&t(e[m],m,e););return o?kt(e,a?0:m,a?m+1:u):kt(e,a?m+1:0,a?u:m)}function Vl(e,t){var o=e;return o instanceof be&&(o=o.value()),gi(t,function(a,u){return u.func.apply(u.thisArg,hn([a],u.args))},o)}function Wi(e,t,o){var a=e.length;if(a<2)return a?xn(e[0]):[];for(var u=-1,m=j(a);++u<a;)for(var b=e[u],y=-1;++y<a;)y!=u&&(m[u]=Ir(m[u]||b,e[y],t,o));return xn(nt(m,1),t,o)}function Wl(e,t,o){for(var a=-1,u=e.length,m=t.length,b={};++a<u;){var y=a<m?t[a]:r;o(b,e[a],y)}return b}function zi(e){return We(e)?e:[]}function Bi(e){return typeof e=="function"?e:gt}function bn(e,t){return se(e)?e:Ji(e,t)?[e]:mc(Ee(e))}var i0=pe;function vn(e,t,o){var a=e.length;return o=o===r?a:o,!t&&o>=a?e:kt(e,t,o)}var zl=Gh||function(e){return tt.clearTimeout(e)};function Bl(e,t){if(t)return e.slice();var o=e.length,a=ul?ul(o):new e.constructor(o);return e.copy(a),a}function Hi(e){var t=new e.constructor(e.byteLength);return new co(t).set(new co(e)),t}function a0(e,t){var o=t?Hi(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function s0(e){var t=new e.constructor(e.source,Is.exec(e));return t.lastIndex=e.lastIndex,t}function l0(e){return _r?Oe(_r.call(e)):{}}function Hl(e,t){var o=t?Hi(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function Ul(e,t){if(e!==t){var o=e!==r,a=e===null,u=e===e,m=yt(e),b=t!==r,y=t===null,I=t===t,P=yt(t);if(!y&&!P&&!m&&e>t||m&&b&&I&&!y&&!P||a&&b&&I||!o&&I||!u)return 1;if(!a&&!m&&!P&&e<t||P&&o&&u&&!a&&!m||y&&o&&u||!b&&u||!I)return-1}return 0}function c0(e,t,o){for(var a=-1,u=e.criteria,m=t.criteria,b=u.length,y=o.length;++a<b;){var I=Ul(u[a],m[a]);if(I){if(a>=y)return I;var P=o[a];return I*(P=="desc"?-1:1)}}return e.index-t.index}function Gl(e,t,o,a){for(var u=-1,m=e.length,b=o.length,y=-1,I=t.length,P=Ze(m-b,0),M=j(I+P),N=!a;++y<I;)M[y]=t[y];for(;++u<b;)(N||u<m)&&(M[o[u]]=e[u]);for(;P--;)M[y++]=e[u++];return M}function Kl(e,t,o,a){for(var u=-1,m=e.length,b=-1,y=o.length,I=-1,P=t.length,M=Ze(m-y,0),N=j(M+P),B=!a;++u<M;)N[u]=e[u];for(var K=u;++I<P;)N[K+I]=t[I];for(;++b<y;)(B||u<m)&&(N[K+o[b]]=e[u++]);return N}function ft(e,t){var o=-1,a=e.length;for(t||(t=j(a));++o<a;)t[o]=e[o];return t}function Ut(e,t,o,a){var u=!o;o||(o={});for(var m=-1,b=t.length;++m<b;){var y=t[m],I=a?a(o[y],e[y],y,o,e):r;I===r&&(I=e[y]),u?Xt(o,y,I):Sr(o,y,I)}return o}function u0(e,t){return Ut(e,Xi(e),t)}function d0(e,t){return Ut(e,ac(e),t)}function So(e,t){return function(o,a){var u=se(o)?mh:Dp,m=t?t():{};return u(o,e,J(a,2),m)}}function er(e){return pe(function(t,o){var a=-1,u=o.length,m=u>1?o[u-1]:r,b=u>2?o[2]:r;for(m=e.length>3&&typeof m=="function"?(u--,m):r,b&&lt(o[0],o[1],b)&&(m=u<3?r:m,u=1),t=Oe(t);++a<u;){var y=o[a];y&&e(t,y,a,m)}return t})}function ql(e,t){return function(o,a){if(o==null)return o;if(!ht(o))return e(o,a);for(var u=o.length,m=t?u:-1,b=Oe(o);(t?m--:++m<u)&&a(b[m],m,b)!==!1;);return o}}function Yl(e){return function(t,o,a){for(var u=-1,m=Oe(t),b=a(t),y=b.length;y--;){var I=b[e?y:++u];if(o(m[I],I,m)===!1)break}return t}}function f0(e,t,o){var a=t&D,u=Er(e);function m(){var b=this&&this!==tt&&this instanceof m?u:e;return b.apply(a?o:this,arguments)}return m}function Zl(e){return function(t){t=Ee(t);var o=Kn(t)?Mt(t):r,a=o?o[0]:t.charAt(0),u=o?vn(o,1).join(""):t.slice(1);return a[e]()+u}}function tr(e){return function(t){return gi(qc(Kc(t).replace(nh,"")),e,"")}}function Er(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var o=Qn(e.prototype),a=e.apply(o,t);return Fe(a)?a:o}}function h0(e,t,o){var a=Er(e);function u(){for(var m=arguments.length,b=j(m),y=m,I=nr(u);y--;)b[y]=arguments[y];var P=m<3&&b[0]!==I&&b[m-1]!==I?[]:pn(b,I);if(m-=P.length,m<o)return tc(e,t,Io,u.placeholder,r,b,P,r,r,o-m);var M=this&&this!==tt&&this instanceof u?a:e;return vt(M,this,b)}return u}function Xl(e){return function(t,o,a){var u=Oe(t);if(!ht(t)){var m=J(o,3);t=Qe(t),o=function(y){return m(u[y],y,u)}}var b=e(t,o,a);return b>-1?u[m?t[b]:b]:r}}function Jl(e){return Qt(function(t){var o=t.length,a=o,u=Et.prototype.thru;for(e&&t.reverse();a--;){var m=t[a];if(typeof m!="function")throw new At(p);if(u&&!b&&Eo(m)=="wrapper")var b=new Et([],!0)}for(a=b?a:o;++a<o;){m=t[a];var y=Eo(m),I=y=="wrapper"?Yi(m):r;I&&Qi(I[0])&&I[1]==(F|W|z|q)&&!I[4].length&&I[9]==1?b=b[Eo(I[0])].apply(b,I[3]):b=m.length==1&&Qi(m)?b[y]():b.thru(m)}return function(){var P=arguments,M=P[0];if(b&&P.length==1&&se(M))return b.plant(M).value();for(var N=0,B=o?t[N].apply(this,P):M;++N<o;)B=t[N].call(this,B);return B}})}function Io(e,t,o,a,u,m,b,y,I,P){var M=t&F,N=t&D,B=t&k,K=t&(W|V),Q=t&te,ce=B?r:Er(e);function ee(){for(var xe=arguments.length,$e=j(xe),Ct=xe;Ct--;)$e[Ct]=arguments[Ct];if(K)var ct=nr(ee),_t=Sh($e,ct);if(a&&($e=Gl($e,a,u,K)),m&&($e=Kl($e,m,b,K)),xe-=_t,K&&xe<P){var ze=pn($e,ct);return tc(e,t,Io,ee.placeholder,o,$e,ze,y,I,P-xe)}var Ft=N?o:this,rn=B?Ft[e]:e;return xe=$e.length,y?$e=D0($e,y):Q&&xe>1&&$e.reverse(),M&&I<xe&&($e.length=I),this&&this!==tt&&this instanceof ee&&(rn=ce||Er(rn)),rn.apply(Ft,$e)}return ee}function Ql(e,t){return function(o,a){return Wp(o,e,t(a),{})}}function Ro(e,t){return function(o,a){var u;if(o===r&&a===r)return t;if(o!==r&&(u=o),a!==r){if(u===r)return a;typeof o=="string"||typeof a=="string"?(o=wt(o),a=wt(a)):(o=Nl(o),a=Nl(a)),u=e(o,a)}return u}}function Ui(e){return Qt(function(t){return t=Ne(t,$t(J())),pe(function(o){var a=this;return e(t,function(u){return vt(u,a,o)})})})}function To(e,t){t=t===r?" ":wt(t);var o=t.length;if(o<2)return o?Ni(t,e):t;var a=Ni(t,po(e/qn(t)));return Kn(t)?vn(Mt(a),0,e).join(""):a.slice(0,e)}function p0(e,t,o,a){var u=t&D,m=Er(e);function b(){for(var y=-1,I=arguments.length,P=-1,M=a.length,N=j(M+I),B=this&&this!==tt&&this instanceof b?m:e;++P<M;)N[P]=a[P];for(;I--;)N[P++]=arguments[++y];return vt(B,u?o:this,N)}return b}function ec(e){return function(t,o,a){return a&&typeof a!="number"&&lt(t,o,a)&&(o=a=r),t=nn(t),o===r?(o=t,t=0):o=nn(o),a=a===r?t<o?1:-1:nn(a),Qp(t,o,a,e)}}function Ao(e){return function(t,o){return typeof t=="string"&&typeof o=="string"||(t=Ot(t),o=Ot(o)),e(t,o)}}function tc(e,t,o,a,u,m,b,y,I,P){var M=t&W,N=M?b:r,B=M?r:b,K=M?m:r,Q=M?r:m;t|=M?z:L,t&=~(M?L:z),t&T||(t&=-4);var ce=[e,t,u,K,N,Q,B,y,I,P],ee=o.apply(r,ce);return Qi(e)&&hc(ee,ce),ee.placeholder=a,pc(ee,e,t)}function Gi(e){var t=Ye[e];return function(o,a){if(o=Ot(o),a=a==null?0:rt(le(a),292),a&&pl(o)){var u=(Ee(o)+"e").split("e"),m=t(u[0]+"e"+(+u[1]+a));return u=(Ee(m)+"e").split("e"),+(u[0]+"e"+(+u[1]-a))}return t(o)}}var g0=Xn&&1/ro(new Xn([,-0]))[1]==X?function(e){return new Xn(e)}:pa;function nc(e){return function(t){var o=ot(t);return o==he?yi(t):o==bt?kh(t):_h(t,e(t))}}function Jt(e,t,o,a,u,m,b,y){var I=t&k;if(!I&&typeof e!="function")throw new At(p);var P=a?a.length:0;if(P||(t&=-97,a=u=r),b=b===r?b:Ze(le(b),0),y=y===r?y:le(y),P-=u?u.length:0,t&L){var M=a,N=u;a=u=r}var B=I?r:Yi(e),K=[e,t,o,a,u,M,N,m,b,y];if(B&&E0(K,B),e=K[0],t=K[1],o=K[2],a=K[3],u=K[4],y=K[9]=K[9]===r?I?0:e.length:Ze(K[9]-P,0),!y&&t&(W|V)&&(t&=-25),!t||t==D)var Q=f0(e,t,o);else t==W||t==V?Q=h0(e,t,y):(t==z||t==(D|z))&&!u.length?Q=p0(e,t,o,a):Q=Io.apply(r,K);var ce=B?Ml:hc;return pc(ce(Q,K),e,t)}function rc(e,t,o,a){return e===r||Nt(e,Zn[o])&&!ke.call(a,o)?t:e}function oc(e,t,o,a,u,m){return Fe(e)&&Fe(t)&&(m.set(t,e),yo(e,t,r,oc,m),m.delete(t)),e}function m0(e){return Dr(e)?r:e}function ic(e,t,o,a,u,m){var b=o&R,y=e.length,I=t.length;if(y!=I&&!(b&&I>y))return!1;var P=m.get(e),M=m.get(t);if(P&&M)return P==t&&M==e;var N=-1,B=!0,K=o&A?new jn:r;for(m.set(e,t),m.set(t,e);++N<y;){var Q=e[N],ce=t[N];if(a)var ee=b?a(ce,Q,N,t,e,m):a(Q,ce,N,e,t,m);if(ee!==r){if(ee)continue;B=!1;break}if(K){if(!mi(t,function(xe,$e){if(!vr(K,$e)&&(Q===xe||u(Q,xe,o,a,m)))return K.push($e)})){B=!1;break}}else if(!(Q===ce||u(Q,ce,o,a,m))){B=!1;break}}return m.delete(e),m.delete(t),B}function x0(e,t,o,a,u,m,b){switch(o){case dn:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case In:return!(e.byteLength!=t.byteLength||!m(new co(e),new co(t)));case fe:case Re:case Ce:return Nt(+e,+t);case me:return e.name==t.name&&e.message==t.message;case ln:case cn:return e==t+"";case he:var y=yi;case bt:var I=a&R;if(y||(y=ro),e.size!=t.size&&!I)return!1;var P=b.get(e);if(P)return P==t;a|=A,b.set(e,t);var M=ic(y(e),y(t),a,u,m,b);return b.delete(e),M;case un:if(_r)return _r.call(e)==_r.call(t)}return!1}function b0(e,t,o,a,u,m){var b=o&R,y=Ki(e),I=y.length,P=Ki(t),M=P.length;if(I!=M&&!b)return!1;for(var N=I;N--;){var B=y[N];if(!(b?B in t:ke.call(t,B)))return!1}var K=m.get(e),Q=m.get(t);if(K&&Q)return K==t&&Q==e;var ce=!0;m.set(e,t),m.set(t,e);for(var ee=b;++N<I;){B=y[N];var xe=e[B],$e=t[B];if(a)var Ct=b?a($e,xe,B,t,e,m):a(xe,$e,B,e,t,m);if(!(Ct===r?xe===$e||u(xe,$e,o,a,m):Ct)){ce=!1;break}ee||(ee=B=="constructor")}if(ce&&!ee){var ct=e.constructor,_t=t.constructor;ct!=_t&&"constructor"in e&&"constructor"in t&&!(typeof ct=="function"&&ct instanceof ct&&typeof _t=="function"&&_t instanceof _t)&&(ce=!1)}return m.delete(e),m.delete(t),ce}function Qt(e){return ta(dc(e,r,$c),e+"")}function Ki(e){return Sl(e,Qe,Xi)}function qi(e){return Sl(e,pt,ac)}var Yi=mo?function(e){return mo.get(e)}:pa;function Eo(e){for(var t=e.name+"",o=Jn[t],a=ke.call(Jn,t)?o.length:0;a--;){var u=o[a],m=u.func;if(m==null||m==e)return u.name}return t}function nr(e){var t=ke.call(f,"placeholder")?f:e;return t.placeholder}function J(){var e=f.iteratee||fa;return e=e===fa?Tl:e,arguments.length?e(arguments[0],arguments[1]):e}function jo(e,t){var o=e.__data__;return I0(t)?o[typeof t=="string"?"string":"hash"]:o.map}function Zi(e){for(var t=Qe(e),o=t.length;o--;){var a=t[o],u=e[a];t[o]=[a,u,cc(u)]}return t}function On(e,t){var o=Ah(e,t);return Rl(o)?o:r}function v0(e){var t=ke.call(e,An),o=e[An];try{e[An]=r;var a=!0}catch{}var u=so.call(e);return a&&(t?e[An]=o:delete e[An]),u}var Xi=_i?function(e){return e==null?[]:(e=Oe(e),fn(_i(e),function(t){return fl.call(e,t)}))}:ga,ac=_i?function(e){for(var t=[];e;)hn(t,Xi(e)),e=uo(e);return t}:ga,ot=st;(Si&&ot(new Si(new ArrayBuffer(1)))!=dn||wr&&ot(new wr)!=he||Ii&&ot(Ii.resolve())!=qr||Xn&&ot(new Xn)!=bt||yr&&ot(new yr)!=Sn)&&(ot=function(e){var t=st(e),o=t==qe?e.constructor:r,a=o?Pn(o):"";if(a)switch(a){case tp:return dn;case np:return he;case rp:return qr;case op:return bt;case ip:return Sn}return t});function $0(e,t,o){for(var a=-1,u=o.length;++a<u;){var m=o[a],b=m.size;switch(m.type){case"drop":e+=b;break;case"dropRight":t-=b;break;case"take":t=rt(t,e+b);break;case"takeRight":e=Ze(e,t-b);break}}return{start:e,end:t}}function w0(e){var t=e.match(Rf);return t?t[1].split(Tf):[]}function sc(e,t,o){t=bn(t,e);for(var a=-1,u=t.length,m=!1;++a<u;){var b=Gt(t[a]);if(!(m=e!=null&&o(e,b)))break;e=e[b]}return m||++a!=u?m:(u=e==null?0:e.length,!!u&&No(u)&&en(b,u)&&(se(e)||Mn(e)))}function y0(e){var t=e.length,o=new e.constructor(t);return t&&typeof e[0]=="string"&&ke.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function lc(e){return typeof e.constructor=="function"&&!jr(e)?Qn(uo(e)):{}}function C0(e,t,o){var a=e.constructor;switch(t){case In:return Hi(e);case fe:case Re:return new a(+e);case dn:return a0(e,o);case Yr:case Hn:case Zr:case Xr:case br:case Rn:case et:case ri:case oi:return Hl(e,o);case he:return new a;case Ce:case cn:return new a(e);case ln:return s0(e);case bt:return new a;case un:return l0(e)}}function _0(e,t){var o=t.length;if(!o)return e;var a=o-1;return t[a]=(o>1?"& ":"")+t[a],t=t.join(o>2?", ":" "),e.replace(If,`{
/* [wrapped with `+t+`] */
`)}function S0(e){return se(e)||Mn(e)||!!(hl&&e&&e[hl])}function en(e,t){var o=typeof e;return t=t??ae,!!t&&(o=="number"||o!="symbol"&&Lf.test(e))&&e>-1&&e%1==0&&e<t}function lt(e,t,o){if(!Fe(o))return!1;var a=typeof t;return(a=="number"?ht(o)&&en(t,o.length):a=="string"&&t in o)?Nt(o[t],e):!1}function Ji(e,t){if(se(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||yt(e)?!0:yf.test(e)||!wf.test(e)||t!=null&&e in Oe(t)}function I0(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Qi(e){var t=Eo(e),o=f[t];if(typeof o!="function"||!(t in be.prototype))return!1;if(e===o)return!0;var a=Yi(o);return!!a&&e===a[0]}function R0(e){return!!cl&&cl in e}var T0=io?tn:ma;function jr(e){var t=e&&e.constructor,o=typeof t=="function"&&t.prototype||Zn;return e===o}function cc(e){return e===e&&!Fe(e)}function uc(e,t){return function(o){return o==null?!1:o[e]===t&&(t!==r||e in Oe(o))}}function A0(e){var t=Mo(e,function(a){return o.size===w&&o.clear(),a}),o=t.cache;return t}function E0(e,t){var o=e[1],a=t[1],u=o|a,m=u<(D|k|F),b=a==F&&o==W||a==F&&o==q&&e[7].length<=t[8]||a==(F|q)&&t[7].length<=t[8]&&o==W;if(!(m||b))return e;a&D&&(e[2]=t[2],u|=o&D?0:T);var y=t[3];if(y){var I=e[3];e[3]=I?Gl(I,y,t[4]):y,e[4]=I?pn(e[3],v):t[4]}return y=t[5],y&&(I=e[5],e[5]=I?Kl(I,y,t[6]):y,e[6]=I?pn(e[5],v):t[6]),y=t[7],y&&(e[7]=y),a&F&&(e[8]=e[8]==null?t[8]:rt(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=u,e}function j0(e){var t=[];if(e!=null)for(var o in Oe(e))t.push(o);return t}function k0(e){return so.call(e)}function dc(e,t,o){return t=Ze(t===r?e.length-1:t,0),function(){for(var a=arguments,u=-1,m=Ze(a.length-t,0),b=j(m);++u<m;)b[u]=a[t+u];u=-1;for(var y=j(t+1);++u<t;)y[u]=a[u];return y[t]=o(b),vt(e,this,y)}}function fc(e,t){return t.length<2?e:Dn(e,kt(t,0,-1))}function D0(e,t){for(var o=e.length,a=rt(t.length,o),u=ft(e);a--;){var m=t[a];e[a]=en(m,o)?u[m]:r}return e}function ea(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var hc=gc(Ml),kr=qh||function(e,t){return tt.setTimeout(e,t)},ta=gc(n0);function pc(e,t,o){var a=t+"";return ta(e,_0(a,O0(w0(a),o)))}function gc(e){var t=0,o=0;return function(){var a=Jh(),u=ue-(a-o);if(o=a,u>0){if(++t>=re)return arguments[0]}else t=0;return e.apply(r,arguments)}}function ko(e,t){var o=-1,a=e.length,u=a-1;for(t=t===r?a:t;++o<t;){var m=Li(o,u),b=e[m];e[m]=e[o],e[o]=b}return e.length=t,e}var mc=A0(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Cf,function(o,a,u,m){t.push(u?m.replace(jf,"$1"):a||o)}),t});function Gt(e){if(typeof e=="string"||yt(e))return e;var t=e+"";return t=="0"&&1/e==-X?"-0":t}function Pn(e){if(e!=null){try{return ao.call(e)}catch{}try{return e+""}catch{}}return""}function O0(e,t){return Tt(Ue,function(o){var a="_."+o[0];t&o[1]&&!to(e,a)&&e.push(a)}),e.sort()}function xc(e){if(e instanceof be)return e.clone();var t=new Et(e.__wrapped__,e.__chain__);return t.__actions__=ft(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function P0(e,t,o){(o?lt(e,t,o):t===r)?t=1:t=Ze(le(t),0);var a=e==null?0:e.length;if(!a||t<1)return[];for(var u=0,m=0,b=j(po(a/t));u<a;)b[m++]=kt(e,u,u+=t);return b}function M0(e){for(var t=-1,o=e==null?0:e.length,a=0,u=[];++t<o;){var m=e[t];m&&(u[a++]=m)}return u}function L0(){var e=arguments.length;if(!e)return[];for(var t=j(e-1),o=arguments[0],a=e;a--;)t[a-1]=arguments[a];return hn(se(o)?ft(o):[o],nt(t,1))}var N0=pe(function(e,t){return We(e)?Ir(e,nt(t,1,We,!0)):[]}),F0=pe(function(e,t){var o=Dt(t);return We(o)&&(o=r),We(e)?Ir(e,nt(t,1,We,!0),J(o,2)):[]}),V0=pe(function(e,t){var o=Dt(t);return We(o)&&(o=r),We(e)?Ir(e,nt(t,1,We,!0),r,o):[]});function W0(e,t,o){var a=e==null?0:e.length;return a?(t=o||t===r?1:le(t),kt(e,t<0?0:t,a)):[]}function z0(e,t,o){var a=e==null?0:e.length;return a?(t=o||t===r?1:le(t),t=a-t,kt(e,0,t<0?0:t)):[]}function B0(e,t){return e&&e.length?_o(e,J(t,3),!0,!0):[]}function H0(e,t){return e&&e.length?_o(e,J(t,3),!0):[]}function U0(e,t,o,a){var u=e==null?0:e.length;return u?(o&&typeof o!="number"&&lt(e,t,o)&&(o=0,a=u),Lp(e,t,o,a)):[]}function bc(e,t,o){var a=e==null?0:e.length;if(!a)return-1;var u=o==null?0:le(o);return u<0&&(u=Ze(a+u,0)),no(e,J(t,3),u)}function vc(e,t,o){var a=e==null?0:e.length;if(!a)return-1;var u=a-1;return o!==r&&(u=le(o),u=o<0?Ze(a+u,0):rt(u,a-1)),no(e,J(t,3),u,!0)}function $c(e){var t=e==null?0:e.length;return t?nt(e,1):[]}function G0(e){var t=e==null?0:e.length;return t?nt(e,X):[]}function K0(e,t){var o=e==null?0:e.length;return o?(t=t===r?1:le(t),nt(e,t)):[]}function q0(e){for(var t=-1,o=e==null?0:e.length,a={};++t<o;){var u=e[t];a[u[0]]=u[1]}return a}function wc(e){return e&&e.length?e[0]:r}function Y0(e,t,o){var a=e==null?0:e.length;if(!a)return-1;var u=o==null?0:le(o);return u<0&&(u=Ze(a+u,0)),Gn(e,t,u)}function Z0(e){var t=e==null?0:e.length;return t?kt(e,0,-1):[]}var X0=pe(function(e){var t=Ne(e,zi);return t.length&&t[0]===e[0]?ki(t):[]}),J0=pe(function(e){var t=Dt(e),o=Ne(e,zi);return t===Dt(o)?t=r:o.pop(),o.length&&o[0]===e[0]?ki(o,J(t,2)):[]}),Q0=pe(function(e){var t=Dt(e),o=Ne(e,zi);return t=typeof t=="function"?t:r,t&&o.pop(),o.length&&o[0]===e[0]?ki(o,r,t):[]});function eg(e,t){return e==null?"":Zh.call(e,t)}function Dt(e){var t=e==null?0:e.length;return t?e[t-1]:r}function tg(e,t,o){var a=e==null?0:e.length;if(!a)return-1;var u=a;return o!==r&&(u=le(o),u=u<0?Ze(a+u,0):rt(u,a-1)),t===t?Oh(e,t,u):no(e,tl,u,!0)}function ng(e,t){return e&&e.length?kl(e,le(t)):r}var rg=pe(yc);function yc(e,t){return e&&e.length&&t&&t.length?Mi(e,t):e}function og(e,t,o){return e&&e.length&&t&&t.length?Mi(e,t,J(o,2)):e}function ig(e,t,o){return e&&e.length&&t&&t.length?Mi(e,t,r,o):e}var ag=Qt(function(e,t){var o=e==null?0:e.length,a=Ti(e,t);return Pl(e,Ne(t,function(u){return en(u,o)?+u:u}).sort(Ul)),a});function sg(e,t){var o=[];if(!(e&&e.length))return o;var a=-1,u=[],m=e.length;for(t=J(t,3);++a<m;){var b=e[a];t(b,a,e)&&(o.push(b),u.push(a))}return Pl(e,u),o}function na(e){return e==null?e:ep.call(e)}function lg(e,t,o){var a=e==null?0:e.length;return a?(o&&typeof o!="number"&&lt(e,t,o)?(t=0,o=a):(t=t==null?0:le(t),o=o===r?a:le(o)),kt(e,t,o)):[]}function cg(e,t){return Co(e,t)}function ug(e,t,o){return Fi(e,t,J(o,2))}function dg(e,t){var o=e==null?0:e.length;if(o){var a=Co(e,t);if(a<o&&Nt(e[a],t))return a}return-1}function fg(e,t){return Co(e,t,!0)}function hg(e,t,o){return Fi(e,t,J(o,2),!0)}function pg(e,t){var o=e==null?0:e.length;if(o){var a=Co(e,t,!0)-1;if(Nt(e[a],t))return a}return-1}function gg(e){return e&&e.length?Ll(e):[]}function mg(e,t){return e&&e.length?Ll(e,J(t,2)):[]}function xg(e){var t=e==null?0:e.length;return t?kt(e,1,t):[]}function bg(e,t,o){return e&&e.length?(t=o||t===r?1:le(t),kt(e,0,t<0?0:t)):[]}function vg(e,t,o){var a=e==null?0:e.length;return a?(t=o||t===r?1:le(t),t=a-t,kt(e,t<0?0:t,a)):[]}function $g(e,t){return e&&e.length?_o(e,J(t,3),!1,!0):[]}function wg(e,t){return e&&e.length?_o(e,J(t,3)):[]}var yg=pe(function(e){return xn(nt(e,1,We,!0))}),Cg=pe(function(e){var t=Dt(e);return We(t)&&(t=r),xn(nt(e,1,We,!0),J(t,2))}),_g=pe(function(e){var t=Dt(e);return t=typeof t=="function"?t:r,xn(nt(e,1,We,!0),r,t)});function Sg(e){return e&&e.length?xn(e):[]}function Ig(e,t){return e&&e.length?xn(e,J(t,2)):[]}function Rg(e,t){return t=typeof t=="function"?t:r,e&&e.length?xn(e,r,t):[]}function ra(e){if(!(e&&e.length))return[];var t=0;return e=fn(e,function(o){if(We(o))return t=Ze(o.length,t),!0}),$i(t,function(o){return Ne(e,xi(o))})}function Cc(e,t){if(!(e&&e.length))return[];var o=ra(e);return t==null?o:Ne(o,function(a){return vt(t,r,a)})}var Tg=pe(function(e,t){return We(e)?Ir(e,t):[]}),Ag=pe(function(e){return Wi(fn(e,We))}),Eg=pe(function(e){var t=Dt(e);return We(t)&&(t=r),Wi(fn(e,We),J(t,2))}),jg=pe(function(e){var t=Dt(e);return t=typeof t=="function"?t:r,Wi(fn(e,We),r,t)}),kg=pe(ra);function Dg(e,t){return Wl(e||[],t||[],Sr)}function Og(e,t){return Wl(e||[],t||[],Ar)}var Pg=pe(function(e){var t=e.length,o=t>1?e[t-1]:r;return o=typeof o=="function"?(e.pop(),o):r,Cc(e,o)});function _c(e){var t=f(e);return t.__chain__=!0,t}function Mg(e,t){return t(e),e}function Do(e,t){return t(e)}var Lg=Qt(function(e){var t=e.length,o=t?e[0]:0,a=this.__wrapped__,u=function(m){return Ti(m,e)};return t>1||this.__actions__.length||!(a instanceof be)||!en(o)?this.thru(u):(a=a.slice(o,+o+(t?1:0)),a.__actions__.push({func:Do,args:[u],thisArg:r}),new Et(a,this.__chain__).thru(function(m){return t&&!m.length&&m.push(r),m}))});function Ng(){return _c(this)}function Fg(){return new Et(this.value(),this.__chain__)}function Vg(){this.__values__===r&&(this.__values__=Nc(this.value()));var e=this.__index__>=this.__values__.length,t=e?r:this.__values__[this.__index__++];return{done:e,value:t}}function Wg(){return this}function zg(e){for(var t,o=this;o instanceof bo;){var a=xc(o);a.__index__=0,a.__values__=r,t?u.__wrapped__=a:t=a;var u=a;o=o.__wrapped__}return u.__wrapped__=e,t}function Bg(){var e=this.__wrapped__;if(e instanceof be){var t=e;return this.__actions__.length&&(t=new be(this)),t=t.reverse(),t.__actions__.push({func:Do,args:[na],thisArg:r}),new Et(t,this.__chain__)}return this.thru(na)}function Hg(){return Vl(this.__wrapped__,this.__actions__)}var Ug=So(function(e,t,o){ke.call(e,o)?++e[o]:Xt(e,o,1)});function Gg(e,t,o){var a=se(e)?Qs:Mp;return o&&lt(e,t,o)&&(t=r),a(e,J(t,3))}function Kg(e,t){var o=se(e)?fn:Cl;return o(e,J(t,3))}var qg=Xl(bc),Yg=Xl(vc);function Zg(e,t){return nt(Oo(e,t),1)}function Xg(e,t){return nt(Oo(e,t),X)}function Jg(e,t,o){return o=o===r?1:le(o),nt(Oo(e,t),o)}function Sc(e,t){var o=se(e)?Tt:mn;return o(e,J(t,3))}function Ic(e,t){var o=se(e)?xh:yl;return o(e,J(t,3))}var Qg=So(function(e,t,o){ke.call(e,o)?e[o].push(t):Xt(e,o,[t])});function em(e,t,o,a){e=ht(e)?e:or(e),o=o&&!a?le(o):0;var u=e.length;return o<0&&(o=Ze(u+o,0)),Fo(e)?o<=u&&e.indexOf(t,o)>-1:!!u&&Gn(e,t,o)>-1}var tm=pe(function(e,t,o){var a=-1,u=typeof t=="function",m=ht(e)?j(e.length):[];return mn(e,function(b){m[++a]=u?vt(t,b,o):Rr(b,t,o)}),m}),nm=So(function(e,t,o){Xt(e,o,t)});function Oo(e,t){var o=se(e)?Ne:Al;return o(e,J(t,3))}function rm(e,t,o,a){return e==null?[]:(se(t)||(t=t==null?[]:[t]),o=a?r:o,se(o)||(o=o==null?[]:[o]),Dl(e,t,o))}var om=So(function(e,t,o){e[o?0:1].push(t)},function(){return[[],[]]});function im(e,t,o){var a=se(e)?gi:rl,u=arguments.length<3;return a(e,J(t,4),o,u,mn)}function am(e,t,o){var a=se(e)?bh:rl,u=arguments.length<3;return a(e,J(t,4),o,u,yl)}function sm(e,t){var o=se(e)?fn:Cl;return o(e,Lo(J(t,3)))}function lm(e){var t=se(e)?bl:e0;return t(e)}function cm(e,t,o){(o?lt(e,t,o):t===r)?t=1:t=le(t);var a=se(e)?jp:t0;return a(e,t)}function um(e){var t=se(e)?kp:r0;return t(e)}function dm(e){if(e==null)return 0;if(ht(e))return Fo(e)?qn(e):e.length;var t=ot(e);return t==he||t==bt?e.size:Oi(e).length}function fm(e,t,o){var a=se(e)?mi:o0;return o&&lt(e,t,o)&&(t=r),a(e,J(t,3))}var hm=pe(function(e,t){if(e==null)return[];var o=t.length;return o>1&&lt(e,t[0],t[1])?t=[]:o>2&&lt(t[0],t[1],t[2])&&(t=[t[0]]),Dl(e,nt(t,1),[])}),Po=Kh||function(){return tt.Date.now()};function pm(e,t){if(typeof t!="function")throw new At(p);return e=le(e),function(){if(--e<1)return t.apply(this,arguments)}}function Rc(e,t,o){return t=o?r:t,t=e&&t==null?e.length:t,Jt(e,F,r,r,r,r,t)}function Tc(e,t){var o;if(typeof t!="function")throw new At(p);return e=le(e),function(){return--e>0&&(o=t.apply(this,arguments)),e<=1&&(t=r),o}}var oa=pe(function(e,t,o){var a=D;if(o.length){var u=pn(o,nr(oa));a|=z}return Jt(e,a,t,o,u)}),Ac=pe(function(e,t,o){var a=D|k;if(o.length){var u=pn(o,nr(Ac));a|=z}return Jt(t,a,e,o,u)});function Ec(e,t,o){t=o?r:t;var a=Jt(e,W,r,r,r,r,r,t);return a.placeholder=Ec.placeholder,a}function jc(e,t,o){t=o?r:t;var a=Jt(e,V,r,r,r,r,r,t);return a.placeholder=jc.placeholder,a}function kc(e,t,o){var a,u,m,b,y,I,P=0,M=!1,N=!1,B=!0;if(typeof e!="function")throw new At(p);t=Ot(t)||0,Fe(o)&&(M=!!o.leading,N="maxWait"in o,m=N?Ze(Ot(o.maxWait)||0,t):m,B="trailing"in o?!!o.trailing:B);function K(ze){var Ft=a,rn=u;return a=u=r,P=ze,b=e.apply(rn,Ft),b}function Q(ze){return P=ze,y=kr(xe,t),M?K(ze):b}function ce(ze){var Ft=ze-I,rn=ze-P,Xc=t-Ft;return N?rt(Xc,m-rn):Xc}function ee(ze){var Ft=ze-I,rn=ze-P;return I===r||Ft>=t||Ft<0||N&&rn>=m}function xe(){var ze=Po();if(ee(ze))return $e(ze);y=kr(xe,ce(ze))}function $e(ze){return y=r,B&&a?K(ze):(a=u=r,b)}function Ct(){y!==r&&zl(y),P=0,a=I=u=y=r}function ct(){return y===r?b:$e(Po())}function _t(){var ze=Po(),Ft=ee(ze);if(a=arguments,u=this,I=ze,Ft){if(y===r)return Q(I);if(N)return zl(y),y=kr(xe,t),K(I)}return y===r&&(y=kr(xe,t)),b}return _t.cancel=Ct,_t.flush=ct,_t}var gm=pe(function(e,t){return wl(e,1,t)}),mm=pe(function(e,t,o){return wl(e,Ot(t)||0,o)});function xm(e){return Jt(e,te)}function Mo(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new At(p);var o=function(){var a=arguments,u=t?t.apply(this,a):a[0],m=o.cache;if(m.has(u))return m.get(u);var b=e.apply(this,a);return o.cache=m.set(u,b)||m,b};return o.cache=new(Mo.Cache||Zt),o}Mo.Cache=Zt;function Lo(e){if(typeof e!="function")throw new At(p);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function bm(e){return Tc(2,e)}var vm=i0(function(e,t){t=t.length==1&&se(t[0])?Ne(t[0],$t(J())):Ne(nt(t,1),$t(J()));var o=t.length;return pe(function(a){for(var u=-1,m=rt(a.length,o);++u<m;)a[u]=t[u].call(this,a[u]);return vt(e,this,a)})}),ia=pe(function(e,t){var o=pn(t,nr(ia));return Jt(e,z,r,t,o)}),Dc=pe(function(e,t){var o=pn(t,nr(Dc));return Jt(e,L,r,t,o)}),$m=Qt(function(e,t){return Jt(e,q,r,r,r,t)});function wm(e,t){if(typeof e!="function")throw new At(p);return t=t===r?t:le(t),pe(e,t)}function ym(e,t){if(typeof e!="function")throw new At(p);return t=t==null?0:Ze(le(t),0),pe(function(o){var a=o[t],u=vn(o,0,t);return a&&hn(u,a),vt(e,this,u)})}function Cm(e,t,o){var a=!0,u=!0;if(typeof e!="function")throw new At(p);return Fe(o)&&(a="leading"in o?!!o.leading:a,u="trailing"in o?!!o.trailing:u),kc(e,t,{leading:a,maxWait:t,trailing:u})}function _m(e){return Rc(e,1)}function Sm(e,t){return ia(Bi(t),e)}function Im(){if(!arguments.length)return[];var e=arguments[0];return se(e)?e:[e]}function Rm(e){return jt(e,S)}function Tm(e,t){return t=typeof t=="function"?t:r,jt(e,S,t)}function Am(e){return jt(e,C|S)}function Em(e,t){return t=typeof t=="function"?t:r,jt(e,C|S,t)}function jm(e,t){return t==null||$l(e,t,Qe(t))}function Nt(e,t){return e===t||e!==e&&t!==t}var km=Ao(ji),Dm=Ao(function(e,t){return e>=t}),Mn=Il(function(){return arguments}())?Il:function(e){return Ve(e)&&ke.call(e,"callee")&&!fl.call(e,"callee")},se=j.isArray,Om=Ks?$t(Ks):zp;function ht(e){return e!=null&&No(e.length)&&!tn(e)}function We(e){return Ve(e)&&ht(e)}function Pm(e){return e===!0||e===!1||Ve(e)&&st(e)==fe}var $n=Yh||ma,Mm=qs?$t(qs):Bp;function Lm(e){return Ve(e)&&e.nodeType===1&&!Dr(e)}function Nm(e){if(e==null)return!0;if(ht(e)&&(se(e)||typeof e=="string"||typeof e.splice=="function"||$n(e)||rr(e)||Mn(e)))return!e.length;var t=ot(e);if(t==he||t==bt)return!e.size;if(jr(e))return!Oi(e).length;for(var o in e)if(ke.call(e,o))return!1;return!0}function Fm(e,t){return Tr(e,t)}function Vm(e,t,o){o=typeof o=="function"?o:r;var a=o?o(e,t):r;return a===r?Tr(e,t,r,o):!!a}function aa(e){if(!Ve(e))return!1;var t=st(e);return t==me||t==we||typeof e.message=="string"&&typeof e.name=="string"&&!Dr(e)}function Wm(e){return typeof e=="number"&&pl(e)}function tn(e){if(!Fe(e))return!1;var t=st(e);return t==ye||t==Ke||t==Y||t==ni}function Oc(e){return typeof e=="number"&&e==le(e)}function No(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ae}function Fe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Ve(e){return e!=null&&typeof e=="object"}var Pc=Ys?$t(Ys):Up;function zm(e,t){return e===t||Di(e,t,Zi(t))}function Bm(e,t,o){return o=typeof o=="function"?o:r,Di(e,t,Zi(t),o)}function Hm(e){return Mc(e)&&e!=+e}function Um(e){if(T0(e))throw new ie(d);return Rl(e)}function Gm(e){return e===null}function Km(e){return e==null}function Mc(e){return typeof e=="number"||Ve(e)&&st(e)==Ce}function Dr(e){if(!Ve(e)||st(e)!=qe)return!1;var t=uo(e);if(t===null)return!0;var o=ke.call(t,"constructor")&&t.constructor;return typeof o=="function"&&o instanceof o&&ao.call(o)==Bh}var sa=Zs?$t(Zs):Gp;function qm(e){return Oc(e)&&e>=-ae&&e<=ae}var Lc=Xs?$t(Xs):Kp;function Fo(e){return typeof e=="string"||!se(e)&&Ve(e)&&st(e)==cn}function yt(e){return typeof e=="symbol"||Ve(e)&&st(e)==un}var rr=Js?$t(Js):qp;function Ym(e){return e===r}function Zm(e){return Ve(e)&&ot(e)==Sn}function Xm(e){return Ve(e)&&st(e)==xr}var Jm=Ao(Pi),Qm=Ao(function(e,t){return e<=t});function Nc(e){if(!e)return[];if(ht(e))return Fo(e)?Mt(e):ft(e);if($r&&e[$r])return jh(e[$r]());var t=ot(e),o=t==he?yi:t==bt?ro:or;return o(e)}function nn(e){if(!e)return e===0?e:0;if(e=Ot(e),e===X||e===-X){var t=e<0?-1:1;return t*Se}return e===e?e:0}function le(e){var t=nn(e),o=t%1;return t===t?o?t-o:t:0}function Fc(e){return e?kn(le(e),0,ge):0}function Ot(e){if(typeof e=="number")return e;if(yt(e))return Ie;if(Fe(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Fe(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ol(e);var o=Of.test(e);return o||Mf.test(e)?ph(e.slice(2),o?2:8):Df.test(e)?Ie:+e}function Vc(e){return Ut(e,pt(e))}function ex(e){return e?kn(le(e),-ae,ae):e===0?e:0}function Ee(e){return e==null?"":wt(e)}var tx=er(function(e,t){if(jr(t)||ht(t)){Ut(t,Qe(t),e);return}for(var o in t)ke.call(t,o)&&Sr(e,o,t[o])}),Wc=er(function(e,t){Ut(t,pt(t),e)}),Vo=er(function(e,t,o,a){Ut(t,pt(t),e,a)}),nx=er(function(e,t,o,a){Ut(t,Qe(t),e,a)}),rx=Qt(Ti);function ox(e,t){var o=Qn(e);return t==null?o:vl(o,t)}var ix=pe(function(e,t){e=Oe(e);var o=-1,a=t.length,u=a>2?t[2]:r;for(u&&lt(t[0],t[1],u)&&(a=1);++o<a;)for(var m=t[o],b=pt(m),y=-1,I=b.length;++y<I;){var P=b[y],M=e[P];(M===r||Nt(M,Zn[P])&&!ke.call(e,P))&&(e[P]=m[P])}return e}),ax=pe(function(e){return e.push(r,oc),vt(zc,r,e)});function sx(e,t){return el(e,J(t,3),Ht)}function lx(e,t){return el(e,J(t,3),Ei)}function cx(e,t){return e==null?e:Ai(e,J(t,3),pt)}function ux(e,t){return e==null?e:_l(e,J(t,3),pt)}function dx(e,t){return e&&Ht(e,J(t,3))}function fx(e,t){return e&&Ei(e,J(t,3))}function hx(e){return e==null?[]:wo(e,Qe(e))}function px(e){return e==null?[]:wo(e,pt(e))}function la(e,t,o){var a=e==null?r:Dn(e,t);return a===r?o:a}function gx(e,t){return e!=null&&sc(e,t,Np)}function ca(e,t){return e!=null&&sc(e,t,Fp)}var mx=Ql(function(e,t,o){t!=null&&typeof t.toString!="function"&&(t=so.call(t)),e[t]=o},da(gt)),xx=Ql(function(e,t,o){t!=null&&typeof t.toString!="function"&&(t=so.call(t)),ke.call(e,t)?e[t].push(o):e[t]=[o]},J),bx=pe(Rr);function Qe(e){return ht(e)?xl(e):Oi(e)}function pt(e){return ht(e)?xl(e,!0):Yp(e)}function vx(e,t){var o={};return t=J(t,3),Ht(e,function(a,u,m){Xt(o,t(a,u,m),a)}),o}function $x(e,t){var o={};return t=J(t,3),Ht(e,function(a,u,m){Xt(o,u,t(a,u,m))}),o}var wx=er(function(e,t,o){yo(e,t,o)}),zc=er(function(e,t,o,a){yo(e,t,o,a)}),yx=Qt(function(e,t){var o={};if(e==null)return o;var a=!1;t=Ne(t,function(m){return m=bn(m,e),a||(a=m.length>1),m}),Ut(e,qi(e),o),a&&(o=jt(o,C|$|S,m0));for(var u=t.length;u--;)Vi(o,t[u]);return o});function Cx(e,t){return Bc(e,Lo(J(t)))}var _x=Qt(function(e,t){return e==null?{}:Xp(e,t)});function Bc(e,t){if(e==null)return{};var o=Ne(qi(e),function(a){return[a]});return t=J(t),Ol(e,o,function(a,u){return t(a,u[0])})}function Sx(e,t,o){t=bn(t,e);var a=-1,u=t.length;for(u||(u=1,e=r);++a<u;){var m=e==null?r:e[Gt(t[a])];m===r&&(a=u,m=o),e=tn(m)?m.call(e):m}return e}function Ix(e,t,o){return e==null?e:Ar(e,t,o)}function Rx(e,t,o,a){return a=typeof a=="function"?a:r,e==null?e:Ar(e,t,o,a)}var Hc=nc(Qe),Uc=nc(pt);function Tx(e,t,o){var a=se(e),u=a||$n(e)||rr(e);if(t=J(t,4),o==null){var m=e&&e.constructor;u?o=a?new m:[]:Fe(e)?o=tn(m)?Qn(uo(e)):{}:o={}}return(u?Tt:Ht)(e,function(b,y,I){return t(o,b,y,I)}),o}function Ax(e,t){return e==null?!0:Vi(e,t)}function Ex(e,t,o){return e==null?e:Fl(e,t,Bi(o))}function jx(e,t,o,a){return a=typeof a=="function"?a:r,e==null?e:Fl(e,t,Bi(o),a)}function or(e){return e==null?[]:wi(e,Qe(e))}function kx(e){return e==null?[]:wi(e,pt(e))}function Dx(e,t,o){return o===r&&(o=t,t=r),o!==r&&(o=Ot(o),o=o===o?o:0),t!==r&&(t=Ot(t),t=t===t?t:0),kn(Ot(e),t,o)}function Ox(e,t,o){return t=nn(t),o===r?(o=t,t=0):o=nn(o),e=Ot(e),Vp(e,t,o)}function Px(e,t,o){if(o&&typeof o!="boolean"&&lt(e,t,o)&&(t=o=r),o===r&&(typeof t=="boolean"?(o=t,t=r):typeof e=="boolean"&&(o=e,e=r)),e===r&&t===r?(e=0,t=1):(e=nn(e),t===r?(t=e,e=0):t=nn(t)),e>t){var a=e;e=t,t=a}if(o||e%1||t%1){var u=gl();return rt(e+u*(t-e+hh("1e-"+((u+"").length-1))),t)}return Li(e,t)}var Mx=tr(function(e,t,o){return t=t.toLowerCase(),e+(o?Gc(t):t)});function Gc(e){return ua(Ee(e).toLowerCase())}function Kc(e){return e=Ee(e),e&&e.replace(Nf,Ih).replace(rh,"")}function Lx(e,t,o){e=Ee(e),t=wt(t);var a=e.length;o=o===r?a:kn(le(o),0,a);var u=o;return o-=t.length,o>=0&&e.slice(o,u)==t}function Nx(e){return e=Ee(e),e&&bf.test(e)?e.replace(_s,Rh):e}function Fx(e){return e=Ee(e),e&&_f.test(e)?e.replace(ii,"\\$&"):e}var Vx=tr(function(e,t,o){return e+(o?"-":"")+t.toLowerCase()}),Wx=tr(function(e,t,o){return e+(o?" ":"")+t.toLowerCase()}),zx=Zl("toLowerCase");function Bx(e,t,o){e=Ee(e),t=le(t);var a=t?qn(e):0;if(!t||a>=t)return e;var u=(t-a)/2;return To(go(u),o)+e+To(po(u),o)}function Hx(e,t,o){e=Ee(e),t=le(t);var a=t?qn(e):0;return t&&a<t?e+To(t-a,o):e}function Ux(e,t,o){e=Ee(e),t=le(t);var a=t?qn(e):0;return t&&a<t?To(t-a,o)+e:e}function Gx(e,t,o){return o||t==null?t=0:t&&(t=+t),Qh(Ee(e).replace(ai,""),t||0)}function Kx(e,t,o){return(o?lt(e,t,o):t===r)?t=1:t=le(t),Ni(Ee(e),t)}function qx(){var e=arguments,t=Ee(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var Yx=tr(function(e,t,o){return e+(o?"_":"")+t.toLowerCase()});function Zx(e,t,o){return o&&typeof o!="number"&&lt(e,t,o)&&(t=o=r),o=o===r?ge:o>>>0,o?(e=Ee(e),e&&(typeof t=="string"||t!=null&&!sa(t))&&(t=wt(t),!t&&Kn(e))?vn(Mt(e),0,o):e.split(t,o)):[]}var Xx=tr(function(e,t,o){return e+(o?" ":"")+ua(t)});function Jx(e,t,o){return e=Ee(e),o=o==null?0:kn(le(o),0,e.length),t=wt(t),e.slice(o,o+t.length)==t}function Qx(e,t,o){var a=f.templateSettings;o&&lt(e,t,o)&&(t=r),e=Ee(e),t=Vo({},t,a,rc);var u=Vo({},t.imports,a.imports,rc),m=Qe(u),b=wi(u,m),y,I,P=0,M=t.interpolate||Jr,N="__p += '",B=Ci((t.escape||Jr).source+"|"+M.source+"|"+(M===Ss?kf:Jr).source+"|"+(t.evaluate||Jr).source+"|$","g"),K="//# sourceURL="+(ke.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++lh+"]")+`
`;e.replace(B,function(ee,xe,$e,Ct,ct,_t){return $e||($e=Ct),N+=e.slice(P,_t).replace(Ff,Th),xe&&(y=!0,N+=`' +
__e(`+xe+`) +
'`),ct&&(I=!0,N+=`';
`+ct+`;
__p += '`),$e&&(N+=`' +
((__t = (`+$e+`)) == null ? '' : __t) +
'`),P=_t+ee.length,ee}),N+=`';
`;var Q=ke.call(t,"variable")&&t.variable;if(!Q)N=`with (obj) {
`+N+`
}
`;else if(Ef.test(Q))throw new ie(g);N=(I?N.replace(pf,""):N).replace(gf,"$1").replace(mf,"$1;"),N="function("+(Q||"obj")+`) {
`+(Q?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(y?", __e = _.escape":"")+(I?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+N+`return __p
}`;var ce=Yc(function(){return Te(m,K+"return "+N).apply(r,b)});if(ce.source=N,aa(ce))throw ce;return ce}function eb(e){return Ee(e).toLowerCase()}function tb(e){return Ee(e).toUpperCase()}function nb(e,t,o){if(e=Ee(e),e&&(o||t===r))return ol(e);if(!e||!(t=wt(t)))return e;var a=Mt(e),u=Mt(t),m=il(a,u),b=al(a,u)+1;return vn(a,m,b).join("")}function rb(e,t,o){if(e=Ee(e),e&&(o||t===r))return e.slice(0,ll(e)+1);if(!e||!(t=wt(t)))return e;var a=Mt(e),u=al(a,Mt(t))+1;return vn(a,0,u).join("")}function ob(e,t,o){if(e=Ee(e),e&&(o||t===r))return e.replace(ai,"");if(!e||!(t=wt(t)))return e;var a=Mt(e),u=il(a,Mt(t));return vn(a,u).join("")}function ib(e,t){var o=ne,a=_e;if(Fe(t)){var u="separator"in t?t.separator:u;o="length"in t?le(t.length):o,a="omission"in t?wt(t.omission):a}e=Ee(e);var m=e.length;if(Kn(e)){var b=Mt(e);m=b.length}if(o>=m)return e;var y=o-qn(a);if(y<1)return a;var I=b?vn(b,0,y).join(""):e.slice(0,y);if(u===r)return I+a;if(b&&(y+=I.length-y),sa(u)){if(e.slice(y).search(u)){var P,M=I;for(u.global||(u=Ci(u.source,Ee(Is.exec(u))+"g")),u.lastIndex=0;P=u.exec(M);)var N=P.index;I=I.slice(0,N===r?y:N)}}else if(e.indexOf(wt(u),y)!=y){var B=I.lastIndexOf(u);B>-1&&(I=I.slice(0,B))}return I+a}function ab(e){return e=Ee(e),e&&xf.test(e)?e.replace(Cs,Ph):e}var sb=tr(function(e,t,o){return e+(o?" ":"")+t.toUpperCase()}),ua=Zl("toUpperCase");function qc(e,t,o){return e=Ee(e),t=o?r:t,t===r?Eh(e)?Nh(e):wh(e):e.match(t)||[]}var Yc=pe(function(e,t){try{return vt(e,r,t)}catch(o){return aa(o)?o:new ie(o)}}),lb=Qt(function(e,t){return Tt(t,function(o){o=Gt(o),Xt(e,o,oa(e[o],e))}),e});function cb(e){var t=e==null?0:e.length,o=J();return e=t?Ne(e,function(a){if(typeof a[1]!="function")throw new At(p);return[o(a[0]),a[1]]}):[],pe(function(a){for(var u=-1;++u<t;){var m=e[u];if(vt(m[0],this,a))return vt(m[1],this,a)}})}function ub(e){return Pp(jt(e,C))}function da(e){return function(){return e}}function db(e,t){return e==null||e!==e?t:e}var fb=Jl(),hb=Jl(!0);function gt(e){return e}function fa(e){return Tl(typeof e=="function"?e:jt(e,C))}function pb(e){return El(jt(e,C))}function gb(e,t){return jl(e,jt(t,C))}var mb=pe(function(e,t){return function(o){return Rr(o,e,t)}}),xb=pe(function(e,t){return function(o){return Rr(e,o,t)}});function ha(e,t,o){var a=Qe(t),u=wo(t,a);o==null&&!(Fe(t)&&(u.length||!a.length))&&(o=t,t=e,e=this,u=wo(t,Qe(t)));var m=!(Fe(o)&&"chain"in o)||!!o.chain,b=tn(e);return Tt(u,function(y){var I=t[y];e[y]=I,b&&(e.prototype[y]=function(){var P=this.__chain__;if(m||P){var M=e(this.__wrapped__),N=M.__actions__=ft(this.__actions__);return N.push({func:I,args:arguments,thisArg:e}),M.__chain__=P,M}return I.apply(e,hn([this.value()],arguments))})}),e}function bb(){return tt._===this&&(tt._=Hh),this}function pa(){}function vb(e){return e=le(e),pe(function(t){return kl(t,e)})}var $b=Ui(Ne),wb=Ui(Qs),yb=Ui(mi);function Zc(e){return Ji(e)?xi(Gt(e)):Jp(e)}function Cb(e){return function(t){return e==null?r:Dn(e,t)}}var _b=ec(),Sb=ec(!0);function ga(){return[]}function ma(){return!1}function Ib(){return{}}function Rb(){return""}function Tb(){return!0}function Ab(e,t){if(e=le(e),e<1||e>ae)return[];var o=ge,a=rt(e,ge);t=J(t),e-=ge;for(var u=$i(a,t);++o<e;)t(o);return u}function Eb(e){return se(e)?Ne(e,Gt):yt(e)?[e]:ft(mc(Ee(e)))}function jb(e){var t=++zh;return Ee(e)+t}var kb=Ro(function(e,t){return e+t},0),Db=Gi("ceil"),Ob=Ro(function(e,t){return e/t},1),Pb=Gi("floor");function Mb(e){return e&&e.length?$o(e,gt,ji):r}function Lb(e,t){return e&&e.length?$o(e,J(t,2),ji):r}function Nb(e){return nl(e,gt)}function Fb(e,t){return nl(e,J(t,2))}function Vb(e){return e&&e.length?$o(e,gt,Pi):r}function Wb(e,t){return e&&e.length?$o(e,J(t,2),Pi):r}var zb=Ro(function(e,t){return e*t},1),Bb=Gi("round"),Hb=Ro(function(e,t){return e-t},0);function Ub(e){return e&&e.length?vi(e,gt):0}function Gb(e,t){return e&&e.length?vi(e,J(t,2)):0}return f.after=pm,f.ary=Rc,f.assign=tx,f.assignIn=Wc,f.assignInWith=Vo,f.assignWith=nx,f.at=rx,f.before=Tc,f.bind=oa,f.bindAll=lb,f.bindKey=Ac,f.castArray=Im,f.chain=_c,f.chunk=P0,f.compact=M0,f.concat=L0,f.cond=cb,f.conforms=ub,f.constant=da,f.countBy=Ug,f.create=ox,f.curry=Ec,f.curryRight=jc,f.debounce=kc,f.defaults=ix,f.defaultsDeep=ax,f.defer=gm,f.delay=mm,f.difference=N0,f.differenceBy=F0,f.differenceWith=V0,f.drop=W0,f.dropRight=z0,f.dropRightWhile=B0,f.dropWhile=H0,f.fill=U0,f.filter=Kg,f.flatMap=Zg,f.flatMapDeep=Xg,f.flatMapDepth=Jg,f.flatten=$c,f.flattenDeep=G0,f.flattenDepth=K0,f.flip=xm,f.flow=fb,f.flowRight=hb,f.fromPairs=q0,f.functions=hx,f.functionsIn=px,f.groupBy=Qg,f.initial=Z0,f.intersection=X0,f.intersectionBy=J0,f.intersectionWith=Q0,f.invert=mx,f.invertBy=xx,f.invokeMap=tm,f.iteratee=fa,f.keyBy=nm,f.keys=Qe,f.keysIn=pt,f.map=Oo,f.mapKeys=vx,f.mapValues=$x,f.matches=pb,f.matchesProperty=gb,f.memoize=Mo,f.merge=wx,f.mergeWith=zc,f.method=mb,f.methodOf=xb,f.mixin=ha,f.negate=Lo,f.nthArg=vb,f.omit=yx,f.omitBy=Cx,f.once=bm,f.orderBy=rm,f.over=$b,f.overArgs=vm,f.overEvery=wb,f.overSome=yb,f.partial=ia,f.partialRight=Dc,f.partition=om,f.pick=_x,f.pickBy=Bc,f.property=Zc,f.propertyOf=Cb,f.pull=rg,f.pullAll=yc,f.pullAllBy=og,f.pullAllWith=ig,f.pullAt=ag,f.range=_b,f.rangeRight=Sb,f.rearg=$m,f.reject=sm,f.remove=sg,f.rest=wm,f.reverse=na,f.sampleSize=cm,f.set=Ix,f.setWith=Rx,f.shuffle=um,f.slice=lg,f.sortBy=hm,f.sortedUniq=gg,f.sortedUniqBy=mg,f.split=Zx,f.spread=ym,f.tail=xg,f.take=bg,f.takeRight=vg,f.takeRightWhile=$g,f.takeWhile=wg,f.tap=Mg,f.throttle=Cm,f.thru=Do,f.toArray=Nc,f.toPairs=Hc,f.toPairsIn=Uc,f.toPath=Eb,f.toPlainObject=Vc,f.transform=Tx,f.unary=_m,f.union=yg,f.unionBy=Cg,f.unionWith=_g,f.uniq=Sg,f.uniqBy=Ig,f.uniqWith=Rg,f.unset=Ax,f.unzip=ra,f.unzipWith=Cc,f.update=Ex,f.updateWith=jx,f.values=or,f.valuesIn=kx,f.without=Tg,f.words=qc,f.wrap=Sm,f.xor=Ag,f.xorBy=Eg,f.xorWith=jg,f.zip=kg,f.zipObject=Dg,f.zipObjectDeep=Og,f.zipWith=Pg,f.entries=Hc,f.entriesIn=Uc,f.extend=Wc,f.extendWith=Vo,ha(f,f),f.add=kb,f.attempt=Yc,f.camelCase=Mx,f.capitalize=Gc,f.ceil=Db,f.clamp=Dx,f.clone=Rm,f.cloneDeep=Am,f.cloneDeepWith=Em,f.cloneWith=Tm,f.conformsTo=jm,f.deburr=Kc,f.defaultTo=db,f.divide=Ob,f.endsWith=Lx,f.eq=Nt,f.escape=Nx,f.escapeRegExp=Fx,f.every=Gg,f.find=qg,f.findIndex=bc,f.findKey=sx,f.findLast=Yg,f.findLastIndex=vc,f.findLastKey=lx,f.floor=Pb,f.forEach=Sc,f.forEachRight=Ic,f.forIn=cx,f.forInRight=ux,f.forOwn=dx,f.forOwnRight=fx,f.get=la,f.gt=km,f.gte=Dm,f.has=gx,f.hasIn=ca,f.head=wc,f.identity=gt,f.includes=em,f.indexOf=Y0,f.inRange=Ox,f.invoke=bx,f.isArguments=Mn,f.isArray=se,f.isArrayBuffer=Om,f.isArrayLike=ht,f.isArrayLikeObject=We,f.isBoolean=Pm,f.isBuffer=$n,f.isDate=Mm,f.isElement=Lm,f.isEmpty=Nm,f.isEqual=Fm,f.isEqualWith=Vm,f.isError=aa,f.isFinite=Wm,f.isFunction=tn,f.isInteger=Oc,f.isLength=No,f.isMap=Pc,f.isMatch=zm,f.isMatchWith=Bm,f.isNaN=Hm,f.isNative=Um,f.isNil=Km,f.isNull=Gm,f.isNumber=Mc,f.isObject=Fe,f.isObjectLike=Ve,f.isPlainObject=Dr,f.isRegExp=sa,f.isSafeInteger=qm,f.isSet=Lc,f.isString=Fo,f.isSymbol=yt,f.isTypedArray=rr,f.isUndefined=Ym,f.isWeakMap=Zm,f.isWeakSet=Xm,f.join=eg,f.kebabCase=Vx,f.last=Dt,f.lastIndexOf=tg,f.lowerCase=Wx,f.lowerFirst=zx,f.lt=Jm,f.lte=Qm,f.max=Mb,f.maxBy=Lb,f.mean=Nb,f.meanBy=Fb,f.min=Vb,f.minBy=Wb,f.stubArray=ga,f.stubFalse=ma,f.stubObject=Ib,f.stubString=Rb,f.stubTrue=Tb,f.multiply=zb,f.nth=ng,f.noConflict=bb,f.noop=pa,f.now=Po,f.pad=Bx,f.padEnd=Hx,f.padStart=Ux,f.parseInt=Gx,f.random=Px,f.reduce=im,f.reduceRight=am,f.repeat=Kx,f.replace=qx,f.result=Sx,f.round=Bb,f.runInContext=_,f.sample=lm,f.size=dm,f.snakeCase=Yx,f.some=fm,f.sortedIndex=cg,f.sortedIndexBy=ug,f.sortedIndexOf=dg,f.sortedLastIndex=fg,f.sortedLastIndexBy=hg,f.sortedLastIndexOf=pg,f.startCase=Xx,f.startsWith=Jx,f.subtract=Hb,f.sum=Ub,f.sumBy=Gb,f.template=Qx,f.times=Ab,f.toFinite=nn,f.toInteger=le,f.toLength=Fc,f.toLower=eb,f.toNumber=Ot,f.toSafeInteger=ex,f.toString=Ee,f.toUpper=tb,f.trim=nb,f.trimEnd=rb,f.trimStart=ob,f.truncate=ib,f.unescape=ab,f.uniqueId=jb,f.upperCase=sb,f.upperFirst=ua,f.each=Sc,f.eachRight=Ic,f.first=wc,ha(f,function(){var e={};return Ht(f,function(t,o){ke.call(f.prototype,o)||(e[o]=t)}),e}(),{chain:!1}),f.VERSION=s,Tt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){f[e].placeholder=f}),Tt(["drop","take"],function(e,t){be.prototype[e]=function(o){o=o===r?1:Ze(le(o),0);var a=this.__filtered__&&!t?new be(this):this.clone();return a.__filtered__?a.__takeCount__=rt(o,a.__takeCount__):a.__views__.push({size:rt(o,ge),type:e+(a.__dir__<0?"Right":"")}),a},be.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),Tt(["filter","map","takeWhile"],function(e,t){var o=t+1,a=o==de||o==De;be.prototype[e]=function(u){var m=this.clone();return m.__iteratees__.push({iteratee:J(u,3),type:o}),m.__filtered__=m.__filtered__||a,m}}),Tt(["head","last"],function(e,t){var o="take"+(t?"Right":"");be.prototype[e]=function(){return this[o](1).value()[0]}}),Tt(["initial","tail"],function(e,t){var o="drop"+(t?"":"Right");be.prototype[e]=function(){return this.__filtered__?new be(this):this[o](1)}}),be.prototype.compact=function(){return this.filter(gt)},be.prototype.find=function(e){return this.filter(e).head()},be.prototype.findLast=function(e){return this.reverse().find(e)},be.prototype.invokeMap=pe(function(e,t){return typeof e=="function"?new be(this):this.map(function(o){return Rr(o,e,t)})}),be.prototype.reject=function(e){return this.filter(Lo(J(e)))},be.prototype.slice=function(e,t){e=le(e);var o=this;return o.__filtered__&&(e>0||t<0)?new be(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),t!==r&&(t=le(t),o=t<0?o.dropRight(-t):o.take(t-e)),o)},be.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},be.prototype.toArray=function(){return this.take(ge)},Ht(be.prototype,function(e,t){var o=/^(?:filter|find|map|reject)|While$/.test(t),a=/^(?:head|last)$/.test(t),u=f[a?"take"+(t=="last"?"Right":""):t],m=a||/^find/.test(t);u&&(f.prototype[t]=function(){var b=this.__wrapped__,y=a?[1]:arguments,I=b instanceof be,P=y[0],M=I||se(b),N=function(xe){var $e=u.apply(f,hn([xe],y));return a&&B?$e[0]:$e};M&&o&&typeof P=="function"&&P.length!=1&&(I=M=!1);var B=this.__chain__,K=!!this.__actions__.length,Q=m&&!B,ce=I&&!K;if(!m&&M){b=ce?b:new be(this);var ee=e.apply(b,y);return ee.__actions__.push({func:Do,args:[N],thisArg:r}),new Et(ee,B)}return Q&&ce?e.apply(this,y):(ee=this.thru(N),Q?a?ee.value()[0]:ee.value():ee)})}),Tt(["pop","push","shift","sort","splice","unshift"],function(e){var t=oo[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",a=/^(?:pop|shift)$/.test(e);f.prototype[e]=function(){var u=arguments;if(a&&!this.__chain__){var m=this.value();return t.apply(se(m)?m:[],u)}return this[o](function(b){return t.apply(se(b)?b:[],u)})}}),Ht(be.prototype,function(e,t){var o=f[t];if(o){var a=o.name+"";ke.call(Jn,a)||(Jn[a]=[]),Jn[a].push({name:t,func:o})}}),Jn[Io(r,k).name]=[{name:"wrapper",func:r}],be.prototype.clone=ap,be.prototype.reverse=sp,be.prototype.value=lp,f.prototype.at=Lg,f.prototype.chain=Ng,f.prototype.commit=Fg,f.prototype.next=Vg,f.prototype.plant=zg,f.prototype.reverse=Bg,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=Hg,f.prototype.first=f.prototype.head,$r&&(f.prototype[$r]=Wg),f},Yn=Fh();Tn?((Tn.exports=Yn)._=Yn,fi._=Yn):tt._=Yn}).call(Or)})(Uo,Uo.exports);Uo.exports;const hr=(n,i)=>{const r=h.createContext(i),s=d=>{const{children:p,...g}=d,x=h.useMemo(()=>g,Object.values(g));return l.jsx(r.Provider,{value:x,children:p})};function c(d){const p=h.useContext(r);if(p)return p;if(i!==void 0)return i;throw new Error(`\`${d}\` must be used within \`${n}\``)}return s.displayName=`${n}Provider`,[s,c]};function Vv(n,i){return typeof n=="string"?!1:i in n}function Bo(n,i,r){return n&&i&&Vv(n,i)?n[i]:r}const tu={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},Wv=n=>{const[i,r,s,c]=n,d=r??i;return[i,d,s??i,c??d]};function zv(n,i){switch(n){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return i.spaces;case"color":case"background":case"borderColor":return i.colors;case"fontSize":return i.fontSizes;case"fontWeight":return i.fontWeights;case"lineHeight":return i.lineHeights;case"zIndex":return i.zIndices;case"boxShadow":return i.shadows;default:return null}}const Zo=(n,i)=>{const r=Object.entries(n).reduce((s,c)=>{const[d,p]=c,g=zv(d,i),x=Object.prototype.hasOwnProperty.call(tu,d)?tu[d]:d;return x&&(p||p===0)&&(typeof p=="object"&&!Array.isArray(p)?Object.entries(p).forEach(([w,v])=>{s[w]={...s[w],...nu(x,v,g)}}):s.initial={...s.initial,...nu(x,p,g)}),s},{initial:{},small:{},medium:{},large:{}});return Object.entries(r).reduce((s,[c,d])=>{if(d&&Object.keys(d).length>0){const p=Object.entries(d).reduce((g,[x,w])=>(g.push(`${x}: ${w};`),g),[]).join(`
`);c==="initial"?s.push(p):s.push(`${i.breakpoints[c]}{ ${p} }`)}return s},[]).join(`
`)},nu=(n,i,r)=>{if(Array.isArray(n)&&Array.isArray(i)){const s=Wv(i);return n.reduce((c,d,p)=>(c[d]=Bo(r,s[p],s[p]),c),{})}else return Array.isArray(n)&&!Array.isArray(i)?n.reduce((s,c)=>(s[c]=Bo(r,i,i),s),{}):!Array.isArray(n)&&!Array.isArray(i)?{[n]:Bo(r,i,i)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},ut=h.forwardRef,H=ut((n,i)=>{const{background:r,basis:s,borderColor:c,color:d,flex:p,fontSize:g,grow:x,hasRadius:w,padding:v,paddingBottom:C,paddingLeft:$,paddingRight:S,paddingTop:R,margin:A,marginLeft:D,marginBottom:k,marginRight:T,marginTop:W,shadow:V,shrink:z,lineHeight:L,fontWeight:F,width:q,minWidth:te,maxWidth:ne,height:_e,minHeight:re,maxHeight:ue,top:de,left:je,bottom:De,right:X,borderRadius:ae,borderStyle:Se,borderWidth:Ie,tag:ge,pointerEvents:Je,display:ve,position:Ue,zIndex:Ae,overflow:Ge,cursor:Y,transition:fe,transform:Re,animation:we,textAlign:me,textTransform:ye,...Ke}=n,he=ge||"div",Ce={$background:r,$basis:s,$borderColor:c,$color:d,$flex:p,$fontSize:g,$grow:x,$hasRadius:w,$padding:v,$paddingBottom:C,$paddingLeft:$,$paddingRight:S,$paddingTop:R,$margin:A,$marginLeft:D,$marginBottom:k,$marginRight:T,$marginTop:W,$shadow:V,$shrink:z,$lineHeight:L,$fontWeight:F,$width:q,$minWidth:te,$maxWidth:ne,$height:_e,$minHeight:re,$maxHeight:ue,$top:de,$left:je,$bottom:De,$right:X,$borderRadius:ae,$borderStyle:Se,$borderWidth:Ie,$pointerEvents:Je,$display:ve,$position:Ue,$zIndex:Ae,$overflow:Ge,$cursor:Y,$transition:fe,$transform:Re,$animation:we,$textAlign:me,$textTransform:ye};return l.jsx(Bv,{as:he,ref:i,...Ce,...Ke})}),Bv=E.div`
  ${({theme:n,...i})=>Zo({padding:i.$padding,paddingTop:i.$paddingTop,paddingBottom:i.$paddingBottom,paddingLeft:i.$paddingLeft,paddingRight:i.$paddingRight,margin:i.$margin,marginTop:i.$marginTop,marginBottom:i.$marginBottom,marginLeft:i.$marginLeft,marginRight:i.$marginRight,top:i.$top,left:i.$left,bottom:i.$bottom,right:i.$right,width:i.$width,minWidth:i.$minWidth,maxWidth:i.$maxWidth,height:i.$height,minHeight:i.$minHeight,maxHeight:i.$maxHeight,color:i.$color,background:i.$background,fontSize:i.$fontSize,fontWeight:i.$fontWeight,lineHeight:i.$lineHeight,borderRadius:i.$hasRadius?n.borderRadius:i.$borderRadius,borderStyle:i.$borderColor&&!i.$borderStyle?"solid":i.$borderStyle,borderWidth:i.$borderColor&&!i.$borderWidth?"1px":i.$borderWidth,borderColor:i.$borderColor,zIndex:i.$zIndex,boxShadow:i.$shadow,display:i.$display,pointerEvents:i.$pointerEvents,cursor:i.$cursor,textAlign:i.$textAlign,textTransform:i.$textTransform,transition:i.$transition,transform:i.$transform,animation:i.$animation,position:i.$position,overflow:i.$overflow,flex:i.$flex,flexShrink:i.$shrink,flexGrow:i.$grow,flexBasis:i.$basis},n)};
`,U=ut((n,i)=>{const{className:r,alignItems:s,direction:c,inline:d,gap:p,justifyContent:g,wrap:x,...w}=n,v={$alignItems:s,$direction:c,$gap:p,$justifyContent:g,$wrap:x,$inline:d};return l.jsx(Hv,{className:r,ref:i,...v,...w})}),Hv=E(H)`
  ${({theme:n,$display:i="flex",$alignItems:r="center",$direction:s="row",...c})=>Zo({gap:c.$gap,alignItems:r,justifyContent:c.$justifyContent,flexWrap:c.$wrap,flexDirection:s,display:c.$inline?"inline-flex":i},n)};
`,Uv="alpha",Gv="beta",Kv="delta",qv="epsilon",ru="omega",Yv="pi",Zv="sigma",Sd=oe`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Xv=({$variant:n=ru,theme:i})=>{switch(n){case Uv:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[5]};
        line-height: ${i.lineHeights[2]};
      `;case Gv:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[4]};
        line-height: ${i.lineHeights[1]};
      `;case Kv:return`
        font-weight: ${i.fontWeights.semiBold};
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[2]};
      `;case qv:return`
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[6]};
      `;case ru:return`
        font-size: ${i.fontSizes[2]};
        line-height: ${i.lineHeights[4]};
      `;case Yv:return`
        font-size: ${i.fontSizes[1]};
        line-height: ${i.lineHeights[3]};
      `;case Zv:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[0]};
        line-height: ${i.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${i.fontSizes[2]};
      `}},Z=ut((n,i)=>{const{ellipsis:r,textColor:s="currentcolor",textDecoration:c,textTransform:d,variant:p,lineHeight:g,fontWeight:x,fontSize:w,...v}=n,C={$ellipsis:r,$textColor:s,$textDecoration:c,$textTransform:d,$variant:p,$lineHeight:g,$fontWeight:x,$fontSize:w};return l.jsx(Jv,{ref:i,tag:"span",...C,...v})}),Jv=E(H)`
  ${Xv}
  ${({$ellipsis:n})=>n?Sd:""}

  ${({theme:n,...i})=>Zo({color:i.$textColor,textDecoration:i.$textDecoration,textTransform:i.$textTransform,lineHeight:i.$lineHeight,fontWeight:i.$fontWeight,fontSize:i.$fontSize},n)}
`,[Qv,hs]=hr("Accordion");h.forwardRef(({children:n,size:i="S",...r},s)=>l.jsx(e$,{ref:s,$size:i,collapsible:!0,...r,type:"single",children:l.jsx(Qv,{size:i,children:n})}));const e$=E(r1)`
  background-color: ${n=>n.theme.colors.neutral0};

  ${n=>n.$size==="S"?oe`
        border-radius: ${i=>i.theme.borderRadius};
        border: solid 1px ${i=>i.theme.colors.neutral200};
      `:oe``}
`;h.forwardRef((n,i)=>{const{size:r}=hs("Item");return l.jsx(t$,{$size:r,"data-size":r,ref:i,...n})});const t$=E(o1)`
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
      border-top: solid 1px ${n=>n.theme.colors.neutral200};
    }
  }

  &[data-state='open'] {
    box-shadow: 0 0 0 1px ${n=>n.theme.colors.primary600};
  }

  &:not([data-disabled]):hover {
    box-shadow: 0 0 0 1px ${n=>n.theme.colors.primary600};
  }

  /* This applies our desired focus effect correctly. */
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px ${n=>n.theme.colors.primary600};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow ${n=>n.theme.motion.timings[120]}
      ${n=>n.theme.motion.easings.easeOutQuad};
  }
`;h.forwardRef(({caretPosition:n="left",description:i,icon:r,iconProps:s,children:c,...d},p)=>{const{size:g}=hs("Trigger");return l.jsxs(Rd,{$caretPosition:n,$size:g,ref:p,...d,children:[n==="left"?l.jsx(Go,{$size:g,children:l.jsx(Fn,{width:g==="S"?"1.2rem":"1.6rem",height:g==="S"?"1.2rem":"1.6rem"})}):null,l.jsxs(U,{tag:"span",gap:2,overflow:"hidden",children:[r&&g==="S"?l.jsx(Id,{children:l.jsx(r,{...s})}):null,l.jsxs(U,{alignItems:"flex-start",direction:"column",tag:"span",ref:p,overflow:"hidden",children:[l.jsx(Z,{fontWeight:g==="S"?"bold":void 0,ellipsis:!0,variant:g==="M"?"delta":void 0,textAlign:"left",width:"100%",children:c}),i&&g==="M"?l.jsx(Z,{textAlign:"left",children:i}):null]})]}),n==="right"?l.jsx(Go,{$size:g,children:l.jsx(Fn,{width:g==="S"?"1.2rem":"1.6rem",height:g==="S"?"1.2rem":"1.6rem"})}):null]})});const Id=E(H)`
  color: ${n=>n.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${n=>n.theme.transitions.color};
  }
`,Go=E(U).attrs(n=>({...n,tag:"span"}))`
  background-color: ${n=>n.theme.colors.neutral200};
  width: ${n=>n.$size==="S"?"2.4rem":"3.2rem"};
  height: ${n=>n.$size==="S"?"2.4rem":"3.2rem"};
  flex: ${n=>n.$size==="S"?"0 0 2.4rem":"0 0 3.2rem"};
  border-radius: 50%;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform ${n=>n.theme.motion.timings[200]} ${n=>n.theme.motion.easings.authenticMotion},
      ${n=>n.theme.transitions.backgroundColor};
  }
`,Rd=E(i1)`
  display: flex;
  align-items: center;
  justify-content: ${n=>n.$caretPosition==="left"?"flex-start":"space-between"};
  width: 100%;
  gap: ${n=>n.theme.spaces[4]};
  padding-inline: ${n=>n.$size==="S"?n.theme.spaces[4]:n.theme.spaces[6]};
  padding-block: ${n=>n.$size==="S"?n.theme.spaces[3]:n.theme.spaces[6]};
  cursor: pointer;
  color: ${n=>n.theme.colors.neutral800};
  overflow: hidden;

  &[data-disabled] {
    cursor: default;
    color: ${n=>n.theme.colors.neutral600};
  }

  &[data-state='open'] > ${Go} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${n=>n.theme.transitions.color};
  }
`;h.forwardRef((n,i)=>{const{size:r}=hs("Trigger");return l.jsx(Td,{$size:r,...n,ref:i})});const Td=E(U).attrs(n=>({...n,tag:"span"}))`
  padding-inline: ${n=>n.$size==="S"?n.theme.spaces[2]:n.theme.spaces[6]};
  padding-block: ${n=>n.$size==="S"?n.theme.spaces[2]:n.theme.spaces[6]};

  // Remove default IconButton styles so there are no backgrounds or borders.
  & > button {
    border: none;
    background: none;
    color: ${n=>n.theme.colors.neutral600};

    @media (prefers-reduced-motion: no-preference) {
      transition: ${n=>n.theme.transitions.color};
    }
  }
`;h.forwardRef(({variant:n="primary",...i},r)=>l.jsx(n$,{$variant:n,ref:r,...i}));const n$=E(a1)`
  display: flex;
  align-items: center;
  background-color: ${n=>n.$variant==="primary"?n.theme.colors.neutral0:n.theme.colors.neutral100};

  &[data-disabled] {
    background-color: ${n=>n.theme.colors.neutral150};
  }

  &:not([data-disabled]) {
    &:hover,
    &[data-state='open'] {
      background-color: ${n=>n.theme.colors.primary100};

      & > ${Rd} {
        color: ${n=>n.theme.colors.primary600};

        & ${Id} {
          color: ${n=>n.theme.colors.primary600};
        }

        & ${Go} {
          background-color: ${n=>n.theme.colors.primary200};
        }
      }

      & > ${Td} > button {
        color: ${n=>n.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${n=>n.theme.transitions.backgroundColor};
  }
`;h.forwardRef((n,i)=>l.jsx(i$,{ref:i,...n}));const r$=it`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,o$=it`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,i$=E(s1)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${r$} ${n=>n.theme.motion.timings[320]}
        ${n=>n.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${o$} ${n=>n.theme.motion.timings[320]}
        ${n=>n.theme.motion.easings.authenticMotion};
    }
  }
`,Xo=oe`
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
      border: 2px solid ${n=>n.theme.colors.primary600};
    }
  }
`,pr=({tag:n,...i})=>{const r=n||"span";return l.jsx(a$,{...i,as:r})},a$=E.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,Fr=({children:n,label:i})=>{const r=h.Children.only(n);return l.jsxs(l.Fragment,{children:[h.cloneElement(r,{"aria-hidden":"true",focusable:"false"}),l.jsx(pr,{children:i})]})};Fr.displayName="AccessibleIcon";const ka=({theme:n,$variant:i})=>i==="danger"?n.colors.danger700:i==="success"?n.colors.success700:i==="warning"?n.colors.warning700:n.colors.primary700;E(H)`
  ${Xo};
`;E(U)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${ka};
    }
  }
`;E(H)`
  & a > span {
    color: ${ka};
  }

  svg path {
    fill: ${ka};
  }
`;function Kt({prop:n,defaultProp:i,onChange:r=()=>{}}){const[s,c]=Ad({defaultProp:i,onChange:r}),d=n!==void 0,p=d?n:s,g=Hu(r),x=h.useCallback(w=>{if(d){const C=typeof w=="function"?w(n):w;C!==n&&g(C)}else c(w)},[d,n,c,g]);return[p,x]}function Ad({defaultProp:n,onChange:i}){const r=h.useState(n),[s]=r,c=h.useRef(s),d=Hu(i);return h.useEffect(()=>{c.current!==s&&(d(s),c.current=s)},[s,c,d]),r}const ou={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},iu={120:"120ms"};`${iu[120]}${ou.easeOutQuad}`,`${iu[120]}${ou.easeOutQuad}`;const Be={overlayFadeIn:it`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  `,modalPopIn:it`
    from {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  `,modalPopOut:it`
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
  `,popIn:it`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,popOut:it`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  `,slideDownIn:it`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideDownOut:it`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `,slideUpIn:it`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideUpOut:it`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `,fadeIn:it`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,fadeOut:it`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `},Vr=32,au=2;h.forwardRef(({onLoadingStatusChange:n,delayMs:i=600,src:r,alt:s,fallback:c,preview:d=!1,...p},g)=>{const[x,w]=Kt({onChange:n}),[v,C]=h.useState(!1),$=d&&x==="loaded",S=R=>{$&&C(R)};return l.jsxs(Ou,{onOpenChange:S,children:[l.jsx(Pu,{asChild:!0,children:l.jsxs(Da,{ref:g,...p,children:[$?l.jsx(s$,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:v?.4:0}}):null,l.jsx(l$,{src:r,alt:s,onLoadingStatusChange:w}),l.jsx(l1,{delayMs:i,children:l.jsx(Z,{fontWeight:"bold",textTransform:"uppercase",children:c})})]})}),$?l.jsx(Mu,{children:l.jsx(c$,{side:"top",sideOffset:4,children:l.jsx(u$,{src:r,alt:s})})}):null]})});const Ed=oe`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,jd=oe`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,Da=E(c1)`
  position: relative;
  z-index: 0;
  ${Ed}
  width: ${Vr/10}rem;
  height: ${Vr/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${n=>n.theme.colors.primary600};
  color: ${n=>n.theme.colors.neutral0};
`,s$=E(H)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${n=>n.theme.motion.timings[200]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,l$=E(u1)`
  ${jd}
`,c$=E(Lu)`
  ${Ed}
  width: ${Vr*au/10}rem;
  height: ${Vr*au/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Be.fadeIn} ${n=>n.theme.motion.timings[200]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,u$=E.img`
  ${jd}
`;h.forwardRef((n,i)=>l.jsx(d$,{...n,ref:i,tag:"div"}));const d$=E(U)`
  & > ${Da} + ${Da} {
    margin-left: -${Vr/10/2}rem;
  }
`,kd=({active:n=!1,size:i="M",textColor:r="neutral600",backgroundColor:s="neutral150",variant:c,children:d,minWidth:p=5,...g})=>{const x=i==="S"?1:2,w=c?{backgroundColor:`${c}200`,textColor:`${c}700`}:{backgroundColor:s,textColor:r};return l.jsx(f$,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:p,paddingLeft:x,paddingRight:x,background:n?"primary200":w.backgroundColor,$size:i,...g,children:l.jsx(Z,{variant:"sigma",textColor:n?"primary600":w.textColor,lineHeight:"1rem",children:d})})},f$=E(U)`
  border-radius: ${({theme:n,$size:i})=>i==="S"?"2px":n.borderRadius};
  ${({$size:n,theme:i})=>n==="S"?oe`
        padding-block: 0.3rem;
        padding-inline ${i.spaces[1]}
      `:oe`
      padding-block: 0.7rem;
      padding-inline ${i.spaces[2]}
    `};
`,h$=E(H)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,gr=ut(({href:n,disabled:i=!1,isExternal:r=!1,...s},c)=>l.jsx(h$,{tag:"a",ref:c,target:r?"_blank":void 0,rel:r?"noreferrer noopener":void 0,href:n,tabIndex:i?-1:void 0,"aria-disabled":i,pointerEvents:i?"none":void 0,cursor:i?void 0:"pointer",...s})),Dd=()=>l.jsx(H,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:l.jsx(Z,{variant:"pi",textColor:"neutral500",children:"/"})});Dd.displayName="Divider";const p$=E(U)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:n})=>`calc(-1*${n.spaces[2]})`};
  }
`,g$=h.forwardRef(({label:n,children:i,...r},s)=>{const c=h.Children.toArray(i);return l.jsx(H,{"aria-label":n,tag:"nav",...r,ref:s,children:l.jsx(p$,{tag:"ol",children:h.Children.map(c,(d,p)=>{const g=c.length>1&&p+1<c.length;return l.jsxs(U,{inline:!0,tag:"li",children:[d,g&&l.jsx(Dd,{})]})})})})});g$.displayName="Breadcrumbs";const m$=h.forwardRef(({children:n,isCurrent:i=!1,...r},s)=>l.jsx(H,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:s,children:l.jsx(Z,{variant:"pi",textColor:"neutral800",fontWeight:i?"bold":"regular","aria-current":i,...r,children:n})}));m$.displayName="Crumb";const x$=E(gr)`
  border-radius: ${({theme:n})=>n.borderRadius};
  color: ${({theme:n})=>n.colors.neutral600};
  font-size: ${({theme:n})=>n.fontSizes[1]};
  line-height: ${({theme:n})=>n.lineHeights[4]};
  padding: ${({theme:n})=>`${n.spaces[1]} ${n.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:n})=>n.colors.neutral200};
    color: ${({theme:n})=>n.colors.neutral700};
  }
`,b$=h.forwardRef(({children:n,...i},r)=>l.jsx(x$,{ref:r,...i,children:n}));b$.displayName="CrumbLink";const lr=n=>n.replaceAll(":","");function v$(n,i){typeof n=="function"?n(i):n!=null&&(n.current=i)}function Od(...n){return i=>n.forEach(r=>v$(r,i))}function xt(...n){return h.useCallback(Od(...n),n)}const $$=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),wn=$$()?h.useEffect:h.useLayoutEffect,w$=$2.useId||(()=>{});let y$=0;const Bt=n=>{const[i,r]=h.useState(w$());return wn(()=>{n||r(s=>s??String(y$++))},[n]),n?.toString()??(i||"")},Ur=(n,i,{selectorToWatch:r,skipWhen:s=!1})=>{const c=qa(i);h.useEffect(()=>{if(s||!n.current)return;const d={root:n.current,rootMargin:"0px"},p=w=>{w.forEach(v=>{v.isIntersecting&&n.current&&n.current.scrollHeight>n.current.clientHeight&&c(v)})},g=new IntersectionObserver(p,d),x=n.current.querySelector(r);return x&&g.observe(x),()=>{g.disconnect()}},[s,c,r,n])},ps="success-light",gs="danger-light",Jo="default",Gr="tertiary",Kr="secondary",Pd="danger",Md="success",Qo="ghost",ms=[ps,gs],C$=[Jo,Gr,Kr,Pd,Md,Qo,...ms],_$=["XS","S","M","L"],Vt=n=>n===ps||n===gs?`${n.substring(0,n.lastIndexOf("-"))}`:n===Gr?"neutral":n===Jo||n===Kr||C$.every(i=>i!==n)?"primary":`${n}`,Ld=({theme:n})=>oe`
    border: 1px solid ${n.colors.neutral200};
    background: ${n.colors.neutral150};
    color: ${n.colors.neutral600};
    cursor: default;
  `,Nd=({theme:n,$variant:i})=>[...ms,Kr].includes(i)?oe`
      background-color: ${n.colors.neutral0};
    `:i===Gr?oe`
      background-color: ${n.colors.neutral100};
    `:i===Qo?oe`
      background-color: ${n.colors.neutral100};
    `:i===Jo?oe`
      border: 1px solid ${n.colors.buttonPrimary500};
      background: ${n.colors.buttonPrimary500};
    `:oe`
    border: 1px solid ${n.colors[`${Vt(i)}500`]};
    background: ${n.colors[`${Vt(i)}500`]};
  `,Fd=({theme:n,$variant:i})=>[...ms,Kr].includes(i)?oe`
      background-color: ${n.colors.neutral0};
      border: 1px solid ${n.colors[`${Vt(i)}600`]};
      color: ${n.colors[`${Vt(i)}600`]};
    `:i===Gr||i===Qo?oe`
      background-color: ${n.colors.neutral150};
    `:oe`
    border: 1px solid ${n.colors[`${Vt(i)}600`]};
    background: ${n.colors[`${Vt(i)}600`]};
  `,Vd=({theme:n,$variant:i})=>{switch(i){case gs:case ps:case Kr:return oe`
        border: 1px solid ${n.colors[`${Vt(i)}200`]};
        background: ${n.colors[`${Vt(i)}100`]};
        color: ${n.colors[`${Vt(i)}700`]};
      `;case Gr:return oe`
        border: 1px solid ${n.colors.neutral200};
        background: ${n.colors.neutral0};
        color: ${n.colors.neutral800};
      `;case Qo:return oe`
        border: 1px solid transparent;
        background: transparent;
        color: ${n.colors.neutral800};

        svg {
          fill: ${n.colors.neutral500};
        }
      `;case Md:case Pd:return oe`
        border: 1px solid ${n.colors[`${Vt(i)}600`]};
        background: ${n.colors[`${Vt(i)}600`]};
        color: ${n.colors.neutral0};
      `;default:return oe`
        border: 1px solid ${n.colors.buttonPrimary600};
        background: ${n.colors.buttonPrimary600};
        color: ${n.colors.buttonNeutral0};
      `}},Oa=ut(({variant:n=Jo,startIcon:i,endIcon:r,disabled:s=!1,children:c,onClick:d,size:p=_$[1],loading:g=!1,fullWidth:x=!1,type:w="button",...v},C)=>{const $=s||g,S=D=>{!$&&d&&d(D)},R=v.tag??"button",A=R==="button"||R==="input"?w:void 0;return l.jsxs(R$,{ref:C,"aria-disabled":$,disabled:$,$size:p,$variant:n,tag:"button",onClick:S,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:x?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",type:A,...v,children:[(i||g)&&l.jsx(U,{tag:"span","aria-hidden":!0,children:g?l.jsx(I$,{}):i}),l.jsx(Z,{variant:p==="S"?"pi":void 0,fontWeight:"bold",children:c}),r&&l.jsx(U,{tag:"span","aria-hidden":!0,children:r})]})}),S$=it`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,I$=E(Du)`
  animation: ${S$} 2s infinite linear;
  will-change: transform;
`,R$=E(U)`
  height: ${({theme:n,$size:i})=>n.sizes.button[i]};
  text-decoration: none;
  ${Vd}

  &:hover {
    ${Nd}
  }

  &:active {
    ${Fd}
  }

  &[aria-disabled='true'] {
    ${Ld}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${n=>n.theme.transitions.backgroundColor},
      ${n=>n.theme.transitions.color},
      border-color ${n=>n.theme.motion.timings[200]} ${n=>n.theme.motion.easings.easeOutQuad};
  }
`,xs=h.forwardRef(({children:n,description:i,label:r,defaultOpen:s,open:c,onOpenChange:d,delayDuration:p=500,disableHoverableContent:g,...x},w)=>!r&&!i?n:l.jsxs(Ou,{defaultOpen:s,open:c,onOpenChange:d,delayDuration:p,disableHoverableContent:g,children:[l.jsx(Pu,{asChild:!0,children:n}),l.jsx(Mu,{children:l.jsx(T$,{ref:w,sideOffset:8,...x,children:l.jsx(Z,{variant:"pi",fontWeight:"bold",children:r||i})})})]})),T$=E(Lu)`
  background-color: ${n=>n.theme.colors.neutral900};
  color: ${n=>n.theme.colors.neutral0};
  padding-inline: ${n=>n.theme.spaces[2]};
  padding-block: ${n=>n.theme.spaces[2]};
  border-radius: ${n=>n.theme.borderRadius};
  z-index: ${n=>n.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Be.fadeIn} ${n=>n.theme.motion.timings[200]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,yn=ut(({label:n,background:i,children:r,disabled:s=!1,onClick:c,size:d="S",variant:p="tertiary",withTooltip:g=!0,type:x="button",...w},v)=>{const C=S=>{!s&&c&&c(S)},$=l.jsx(Nr,{"aria-disabled":s,background:s?"neutral150":i,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...w,ref:v,$size:d,onClick:C,$variant:p,type:x,children:l.jsx(Fr,{label:n,children:r})});return g?l.jsx(xs,{label:n,children:$}):$}),Nr=E(U)`
  text-decoration: none;

  ${n=>{switch(n.$size){case"XS":return oe`
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
  ${Vd}
  ${n=>n.$variant==="tertiary"?oe`
          color: ${n.theme.colors.neutral500};
        `:""}

  &:hover {
    ${Nd}
    ${n=>n.$variant==="tertiary"?oe`
            color: ${n.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${Fd}
  }

  &[aria-disabled='true'] {
    ${Ld}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${n=>n.theme.transitions.backgroundColor},
      ${n=>n.theme.transitions.color},
      border-color ${n=>n.theme.motion.timings[200]} ${n=>n.theme.motion.easings.easeOutQuad};
  }
`;E(U)`
  & ${Nr}:first-child {
    border-radius: ${({theme:n})=>`${n.borderRadius} 0 0 ${n.borderRadius}`};
  }

  & ${Nr}:last-child {
    border-radius: ${({theme:n})=>`0 ${n.borderRadius} ${n.borderRadius} 0`};
  }

  & ${Nr} {
    border-radius: 0;

    & + ${Nr} {
      border-left: none;
    }
  }
`;const Pa=ut(({children:n,href:i,disabled:r=!1,startIcon:s,endIcon:c,isExternal:d=!1,color:p="primary600",activeColor:g="primary700",...x},w)=>l.jsxs(A$,{ref:w,href:i,disabled:r,isExternal:d,$activeColor:g,$color:p,...x,children:[s,l.jsx(Z,{textColor:r?"neutral600":p,children:n}),c,i&&!c&&d&&l.jsx(ku,{fill:p})]})),A$=E(gr)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:n})=>n.spaces[2]};
  pointer-events: ${({disabled:n})=>n?"none":void 0};

  svg {
    font-size: 1rem;

    path {
      fill: ${({disabled:n,$color:i,theme:r})=>n?r.colors.neutral600:r.colors[i||"primary600"]};
    }
  }

  &:hover {
    & > span {
      color: ${({theme:n,$color:i})=>n.colors[i||"primary600"]};
    }

    svg path {
      fill: ${({theme:n,$color:i})=>n.colors[i||"primary600"]};
    }
  }

  &:active {
    color: ${({theme:n,$activeColor:i})=>n.colors[i||"primary700"]};
  }

  ${Xo};
`,E$=n=>{switch(n){case"danger":return"danger100";default:return"primary100"}},j$=(n,i)=>{switch(n){case"danger":return"danger700";default:return"neutral800"}},va=(n,i)=>{switch(n){case"danger":return i?"danger500":"danger700";default:return i?"neutral300":"neutral500"}},k$=x1,D$=h.forwardRef(({label:n,endIcon:i=l.jsx(Fn,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:r=Oa,icon:s,...c},d)=>{const p={...c,ref:d,type:"button"};return l.jsx(d1,{asChild:!0,disabled:p.disabled,children:r===yn?l.jsx(yn,{label:n,variant:"tertiary",...p,children:s}):l.jsx(Oa,{endIcon:i,variant:"ghost",...p})})}),O$=h.forwardRef(({children:n,intersectionId:i,onCloseAutoFocus:r,popoverPlacement:s="bottom-start",...c},d)=>{const[p,g]=s.split("-");return l.jsx(Nu,{children:l.jsx(P$,{align:g,side:p,loop:!0,onCloseAutoFocus:r,asChild:!0,children:l.jsxs(Wd,{ref:d,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...c,children:[n,l.jsx(H,{id:i,width:"100%",height:"1px"})]})})})}),Wd=E(U)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  z-index: ${n=>n.theme.zIndices.popover};

  &::-webkit-scrollbar {
    display: none;
  }
`,P$=E(f1)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${n=>n.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Be.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Be.slideDownIn};
      }
    }
  }
`,zd=({theme:n,$variant:i})=>oe`
  text-align: left;
  width: 100%;
  border-radius: ${n.borderRadius};
  padding: ${n.spaces[2]} ${n.spaces[4]};

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  &[data-highlighted] {
    background-color: ${n.colors[E$(i)]};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }

  color: ${n.colors[j$(i)]};
`,M$=E(U)`
  ${({theme:n,$variant:i})=>zd({theme:n,$variant:i})}
`;E(Pa)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:n,color:i})=>Bo(n.colors,i,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;

    > svg {
      path {
        fill: ${({theme:n,$variant:i})=>n.colors[va(i,!1)]};
      }
    }
  }
  > svg {
    path {
      fill: ${({theme:n,$variant:i})=>n.colors[va(i,!1)]};
    }
  }
  &[aria-disabled='true'] {
    pointer-events: none;

    > svg {
      path {
        fill: ${({theme:n,$variant:i})=>n.colors[va(i,!0)]};
      }
    }
  }

  ${({theme:n,$variant:i})=>zd({theme:n,$variant:i})}
`;const L$=E(H)`
  /* Negative horizontal margin to compensate Menu.Content's padding */
  margin: ${({theme:n})=>n.spaces[1]} -${({theme:n})=>n.spaces[1]};
  width: calc(100% + ${({theme:n})=>n.spaces[2]});
  /* Hide separator if there's nothing above in the menu */
  &:first-child {
    display: none;
  }
`;h.forwardRef((n,i)=>l.jsx(h1,{...n,asChild:!0,children:l.jsx(L$,{height:"1px",shrink:0,background:"neutral150",ref:i})}));h.forwardRef((n,i)=>l.jsx(p1,{asChild:!0,children:l.jsx(N$,{ref:i,variant:"sigma",textColor:"neutral600",...n})}));const N$=E(Z)`
  padding: ${({theme:n})=>n.spaces[2]} ${({theme:n})=>n.spaces[4]};
`;h.forwardRef(({disabled:n=!1,...i},r)=>l.jsx(g1,{asChild:!0,disabled:n,children:l.jsxs(F$,{ref:r,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...i,children:[l.jsx(Z,{children:i.children}),l.jsx(Wa,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const F$=E(M$)`
  &[data-state='open'] {
    background-color: ${({theme:n})=>n.colors.primary100};
  }
`;h.forwardRef((n,i)=>l.jsx(Nu,{children:l.jsx(m1,{sideOffset:8,asChild:!0,children:l.jsx(Wd,{ref:i,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...n})})}));const V$=k$,W$=D$,z$=O$,B$=h.forwardRef(({children:n,onOpen:i,onClose:r,popoverPlacement:s,onReachEnd:c,...d},p)=>{const g=h.useRef(null),x=xt(p,g),w=h.useRef(null),[v,C]=h.useState(!1),$=D=>{c&&c(D)},S=D=>{D&&typeof i=="function"?i():!D&&typeof r=="function"&&r(),C(D)},R=Bt(),A=`intersection-${lr(R)}`;return Ur(w,$,{selectorToWatch:`#${A}`,skipWhen:!v}),l.jsxs(V$,{onOpenChange:S,children:[l.jsx(W$,{ref:x,...d,children:d.label}),l.jsx(z$,{ref:w,intersectionId:A,popoverPlacement:s,children:n})]})}),H$=E(B$)`
  padding: ${({theme:n})=>`${n.spaces[1]} ${n.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:n})=>n.colors.neutral200};
  }
`,U$=h.forwardRef(({children:n,...i},r)=>l.jsx(H$,{ref:r,endIcon:null,size:"S",...i,children:n}));U$.displayName="CrumbSimpleMenu";const Bd=h.createContext({id:""}),G$=()=>h.useContext(Bd);h.forwardRef(({id:n,...i},r)=>{const s=Bt(n),c=h.useMemo(()=>({id:s}),[s]);return l.jsx(Bd.Provider,{value:c,children:l.jsx(H,{ref:r,id:n,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${s}-title`,...i})})});const K$=h.forwardRef(({position:n,...i},r)=>l.jsx(q$,{ref:r,$position:n,...i,direction:"row",gap:2})),q$=E(U)`
  position: absolute;
  top: ${({theme:n})=>n.spaces[3]};
  right: ${({$position:n,theme:i})=>{if(n==="end")return i.spaces[3]}};
  left: ${({$position:n,theme:i})=>{if(n==="start")return i.spaces[3]}};
`;E.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;E.div`
  display: flex;
  justify-content: center;
  height: ${({$size:n})=>n==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:n})=>n.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:n})=>n.borderRadius};
  border-top-right-radius: ${({theme:n})=>n.borderRadius};
`;E.div`
  margin-left: auto;
  flex-shrink: 0;
`;E(kd)`
  margin-left: ${({theme:n})=>n.spaces[1]};
`;const Y$=({fill:n,...i})=>{const{colors:r}=b2();return l.jsx(H,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:n?r[n]:void 0,...i,children:l.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},su=h.forwardRef(({defaultChecked:n,checked:i,onCheckedChange:r,...s},c)=>{const d=h.useRef(null),[p,g]=Kt({defaultProp:n,prop:i,onChange:r}),x=xt(d,c);return l.jsx(Z$,{ref:x,checked:p,onCheckedChange:g,...s,children:l.jsxs(X$,{forceMount:!0,children:[p===!0?l.jsx(Y$,{width:"1.6rem",fill:"neutral0"}):null,p==="indeterminate"?l.jsx(b1,{fill:"neutral0"}):null]})})}),Z$=E(v1)`
  background: ${n=>n.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  border-radius: ${n=>n.theme.borderRadius};
  border: 1px solid ${n=>n.theme.colors.neutral300};
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // this ensures the checkbox is always a square even in flex-containers.
  flex: 0 0 2rem;

  &[data-state='checked']:not([data-disabled]),
  &[data-state='indeterminate']:not([data-disabled]) {
    border: 1px solid ${n=>n.theme.colors.primary600};
    background-color: ${n=>n.theme.colors.primary600};
  }

  &[data-disabled] {
    background-color: ${n=>n.theme.colors.neutral200};
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
`,X$=E($1)`
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
`,bs=h.forwardRef(({children:n,...i},r)=>{const s=Bt(i.id);return n?l.jsxs(U,{gap:2,children:[l.jsx(su,{id:s,...i}),l.jsx(Z,{tag:"label",textColor:"neutral800",htmlFor:s,children:n})]}):l.jsx(su,{ref:r,...i})});h.forwardRef((n,i)=>{const{id:r}=G$();return l.jsx(K$,{position:"start",children:l.jsx(bs,{"aria-labelledby":`${r}-title`,...n,ref:i})})});E(H)`
  word-break: break-all;
`;E(U)`
  border-bottom: 1px solid ${({theme:n})=>n.colors.neutral150};
`;const at={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},J$=E(H)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,Q$=E(U)`
  grid-area: slides;
`,lu=E(H)`
  grid-area: ${({$area:n})=>n};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:n})=>n.colors.neutral900};
  }
`,ew=h.forwardRef(({actions:n,children:i,label:r,nextLabel:s,onNext:c,onPrevious:d,previousLabel:p,secondaryLabel:g,selectedSlide:x,...w},v)=>{const C=h.useRef(null),$=h.useRef(null),S=h.Children.map(i,(A,D)=>h.cloneElement(A,{selected:D===x})),R=A=>{switch(A.key){case at.RIGHT:{A.preventDefault(),$?.current&&$.current.focus(),c&&c();break}case at.LEFT:{A.preventDefault(),C?.current&&C.current.focus(),d&&d();break}}};return l.jsx(H,{ref:v,...w,onKeyDown:R,children:l.jsxs(H,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[l.jsxs(J$,{tag:"section","aria-roledescription":"carousel","aria-label":r,display:"grid",position:"relative",children:[S&&S.length>1&&l.jsxs(l.Fragment,{children:[l.jsx(lu,{tag:"button",onClick:d,$area:"startAction",ref:C,type:"button",children:l.jsx(Fr,{label:p,children:l.jsx(Fu,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),l.jsx(lu,{tag:"button",onClick:c,$area:"endAction",ref:$,type:"button",children:l.jsx(Fr,{label:s,children:l.jsx(Wa,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),l.jsx(Q$,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:S}),n]}),g&&l.jsx(H,{paddingTop:2,paddingLeft:4,paddingRight:4,children:l.jsx(xs,{label:g,children:l.jsx(U,{justifyContent:"center",children:l.jsx(Z,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:g})})})})]})})}),_n=(n="&")=>({theme:i,$hasError:r=!1})=>oe`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${n}:focus-within {
      border: 1px solid ${r?i.colors.danger600:i.colors.primary600};
      box-shadow: ${r?i.colors.danger600:i.colors.primary600} 0px 0px 0px 2px;
    }
  `,[tw,It]=hr("Field",{}),cr=h.forwardRef(({children:n,name:i,error:r=!1,hint:s,id:c,required:d=!1,...p},g)=>{const x=Bt(c),[w,v]=h.useState();return l.jsx(tw,{name:i,id:x,error:r,hint:s,required:d,labelNode:w,setLabelNode:v,children:l.jsx(U,{direction:"column",alignItems:"stretch",gap:1,ref:g,...p,children:n})})}),Hd=h.forwardRef(({children:n,action:i,...r},s)=>{const{id:c,required:d,setLabelNode:p}=It("Label"),g=xt(s,p);return n?l.jsxs(nw,{ref:g,variant:"pi",textColor:"neutral800",fontWeight:"bold",...r,id:`${c}-label`,htmlFor:c,tag:"label",ellipsis:!0,children:[n,d&&l.jsx(Z,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"}),i&&l.jsx(rw,{marginLeft:1,children:i})]}):null}),nw=E(Z)`
  display: flex;
`,rw=E(U)`
  line-height: 0;
  color: ${({theme:n})=>n.colors.neutral500};
`,vs=h.forwardRef(({endAction:n,startAction:i,disabled:r=!1,onChange:s,hasError:c,required:d,className:p,size:g="M",...x},w)=>{const{id:v,error:C,hint:$,name:S,required:R}=It("Input");let A;C?A=`${v}-error`:$&&(A=`${v}-hint`);const D=!!C,k=h.useRef(null),T=h.useRef(null),W=xt(T,w),V=z=>{!r&&s&&s(z)};return h.useLayoutEffect(()=>{if(k.current&&T.current){const z=k.current.offsetWidth,L=T.current;if(L){const F=z+8+16;L.style.paddingRight=`${F}px`}}},[n]),l.jsxs(aw,{gap:2,justifyContent:"space-between",$hasError:D||c,$disabled:r,$size:g,$hasLeftAction:!!i,$hasRightAction:!!n,className:p,children:[i,l.jsx(ow,{id:v,name:S,ref:W,$size:g,"aria-describedby":A,"aria-invalid":D||c,"aria-disabled":r,disabled:r,"data-disabled":r?"":void 0,onChange:V,"aria-required":R||d,$hasLeftAction:!!i,$hasRightAction:!!n,...x}),n&&l.jsx(iw,{ref:k,children:n})]})}),ow=E.input`
  border: none;
  border-radius: ${({theme:n})=>n.borderRadius};
  cursor: ${n=>n["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:n})=>n.colors.neutral800};
  font-weight: 400;
  font-size: ${n=>n.theme.fontSizes[2]};
  line-height: 2.2rem;
  display: block;
  width: 100%;
  background: inherit;

  &::placeholder {
    color: ${({theme:n})=>n.colors.neutral600};
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

  ${n=>{switch(n.$size){case"S":return oe`
          padding-inline-start: ${n.$hasLeftAction?0:n.theme.spaces[4]};
          padding-inline-end: ${n.$hasRightAction?0:n.theme.spaces[4]};
          padding-block: ${n.theme.spaces[1]};
        `;default:return oe`
          padding-inline-start: ${n.$hasLeftAction?0:n.theme.spaces[4]};
          padding-inline-end: ${n.$hasRightAction?0:n.theme.spaces[4]};
          padding-block: ${n.theme.spaces[2]};
        `}}}
`,iw=E(U)`
  position: absolute;
  right: ${({theme:n})=>n.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,aw=E(U)`
  border: 1px solid ${({theme:n,$hasError:i})=>i?n.colors.danger600:n.colors.neutral200};
  border-radius: ${({theme:n})=>n.borderRadius};
  background: ${({theme:n})=>n.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:n,theme:i})=>n?i.spaces[4]:0};
  position: relative;

  ${_n()}
  ${({theme:n,$disabled:i})=>i?oe`
          color: ${n.colors.neutral600};
          background: ${n.colors.neutral150};
        `:void 0};
`,sw=()=>{const{id:n,hint:i,error:r}=It("Hint");return!i||r?null:l.jsx(Z,{variant:"pi",tag:"p",id:`${n}-hint`,textColor:"neutral600",children:i})},lw=()=>{const{id:n,error:i}=It("Error");return!i||typeof i!="string"?null:l.jsx(Z,{variant:"pi",tag:"p",id:`${n}-error`,textColor:"danger600","data-strapi-field-error":!0,children:i})};h.forwardRef(({label:n,children:i,...r},s)=>l.jsx(cw,{justifyContent:"unset",background:"transparent",borderStyle:"none",...r,type:"button",tag:"button",ref:s,children:l.jsx(Fr,{label:n,children:i})}));const cw=E(U)`
  font-size: 1.6rem;
  padding: 0;
`;h.forwardRef(({actions:n,children:i,error:r,hint:s,label:c,labelAction:d,nextLabel:p,onNext:g,onPrevious:x,previousLabel:w,required:v,secondaryLabel:C,selectedSlide:$,id:S,...R},A)=>{const D=Bt(S);return l.jsx(cr,{hint:s,error:r,id:D,required:v,children:l.jsxs(U,{direction:"column",alignItems:"stretch",gap:1,children:[c&&l.jsx(Hd,{action:d,children:c}),l.jsx(ew,{ref:A,actions:n,label:c,nextLabel:p,onNext:g,onPrevious:x,previousLabel:w,secondaryLabel:C,selectedSlide:$,id:D,...R,children:i}),l.jsx(sw,{}),l.jsx(lw,{})]})})});E(H)`
  ${Sd}
`;E(U)`
  display: ${({$selected:n})=>n?"flex":"none"};
`;const ei=h.forwardRef(({children:n,viewportRef:i,...r},s)=>l.jsxs(uw,{ref:s,...r,children:[l.jsx(dw,{ref:i,children:n}),l.jsx(cu,{orientation:"vertical",children:l.jsx(uu,{})}),l.jsx(cu,{orientation:"horizontal",children:l.jsx(uu,{})})]})),uw=E(w1)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,dw=E(y1)`
  min-width: 100%;
`,cu=E(C1)`
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
`,uu=E(_1)`
  position: relative;
  flex: 1;
  background-color: ${n=>n.theme.colors.neutral150};
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
`,fw="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",hw=h.forwardRef(({children:n,small:i=!1,...r},s)=>l.jsxs("div",{role:"alert","aria-live":"assertive",ref:s,...r,children:[l.jsx(pr,{children:n}),l.jsx(gw,{src:fw,"aria-hidden":!0,$small:i})]})),pw=it`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,gw=E.img`
  animation: ${pw} 1s infinite linear;
  will-change: transform;
  ${({$small:n,theme:i})=>n&&`width: ${i.spaces[6]}; height: ${i.spaces[6]};`}
`;function ar(n,i,r){let s=r.initialDeps??[],c;function d(){var p,g,x,w;let v;r.key&&((p=r.debug)!=null&&p.call(r))&&(v=Date.now());const C=n();if(!(C.length!==s.length||C.some((R,A)=>s[A]!==R)))return c;s=C;let S;if(r.key&&((g=r.debug)!=null&&g.call(r))&&(S=Date.now()),c=i(...C),r.key&&((x=r.debug)!=null&&x.call(r))){const R=Math.round((Date.now()-v)*100)/100,A=Math.round((Date.now()-S)*100)/100,D=A/16,k=(T,W)=>{for(T=String(T);T.length<W;)T=" "+T;return T};console.info(`%c⏱ ${k(A,5)} /${k(R,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*D,120))}deg 100% 31%);`,r?.key)}return(w=r?.onChange)==null||w.call(r,c),c}return d.updateDeps=p=>{s=p},d}function du(n,i){if(n===void 0)throw new Error("Unexpected undefined");return n}const mw=(n,i)=>Math.abs(n-i)<1.01,xw=(n,i,r)=>{let s;return function(...c){n.clearTimeout(s),s=n.setTimeout(()=>i.apply(this,c),r)}},fu=n=>{const{offsetWidth:i,offsetHeight:r}=n;return{width:i,height:r}},bw=n=>n,vw=n=>{const i=Math.max(n.startIndex-n.overscan,0),r=Math.min(n.endIndex+n.overscan,n.count-1),s=[];for(let c=i;c<=r;c++)s.push(c);return s},$w=(n,i)=>{const r=n.scrollElement;if(!r)return;const s=n.targetWindow;if(!s)return;const c=p=>{const{width:g,height:x}=p;i({width:Math.round(g),height:Math.round(x)})};if(c(fu(r)),!s.ResizeObserver)return()=>{};const d=new s.ResizeObserver(p=>{const g=()=>{const x=p[0];if(x?.borderBoxSize){const w=x.borderBoxSize[0];if(w){c({width:w.inlineSize,height:w.blockSize});return}}c(fu(r))};n.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(g):g()});return d.observe(r,{box:"border-box"}),()=>{d.unobserve(r)}},hu={passive:!0},pu=typeof window>"u"?!0:"onscrollend"in window,ww=(n,i)=>{const r=n.scrollElement;if(!r)return;const s=n.targetWindow;if(!s)return;let c=0;const d=n.options.useScrollendEvent&&pu?()=>{}:xw(s,()=>{i(c,!1)},n.options.isScrollingResetDelay),p=v=>()=>{const{horizontal:C,isRtl:$}=n.options;c=C?r.scrollLeft*($&&-1||1):r.scrollTop,d(),i(c,v)},g=p(!0),x=p(!1);x(),r.addEventListener("scroll",g,hu);const w=n.options.useScrollendEvent&&pu;return w&&r.addEventListener("scrollend",x,hu),()=>{r.removeEventListener("scroll",g),w&&r.removeEventListener("scrollend",x)}},yw=(n,i,r)=>{if(i?.borderBoxSize){const s=i.borderBoxSize[0];if(s)return Math.round(s[r.options.horizontal?"inlineSize":"blockSize"])}return n[r.options.horizontal?"offsetWidth":"offsetHeight"]},Cw=(n,{adjustments:i=0,behavior:r},s)=>{var c,d;const p=n+i;(d=(c=s.scrollElement)==null?void 0:c.scrollTo)==null||d.call(c,{[s.options.horizontal?"left":"top"]:p,behavior:r})};class _w{constructor(i){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let r=null;const s=()=>r||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:r=new this.targetWindow.ResizeObserver(c=>{c.forEach(d=>{const p=()=>{this._measureElement(d.target,d)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(p):p()})}));return{disconnect:()=>{var c;(c=s())==null||c.disconnect(),r=null},observe:c=>{var d;return(d=s())==null?void 0:d.observe(c,{box:"border-box"})},unobserve:c=>{var d;return(d=s())==null?void 0:d.unobserve(c)}}})(),this.range=null,this.setOptions=r=>{Object.entries(r).forEach(([s,c])=>{typeof c>"u"&&delete r[s]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:bw,rangeExtractor:vw,onChange:()=>{},measureElement:yw,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...r}},this.notify=r=>{var s,c;(c=(s=this.options).onChange)==null||c.call(s,this,r)},this.maybeNotify=ar(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),r=>{this.notify(r)},{key:"maybeNotify",debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(r=>r()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var r;const s=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==s){if(this.cleanup(),!s){this.maybeNotify();return}this.scrollElement=s,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((r=this.scrollElement)==null?void 0:r.window)??null,this.elementsCache.forEach(c=>{this.observer.observe(c)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,c=>{this.scrollRect=c,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(c,d)=>{this.scrollAdjustments=0,this.scrollDirection=d?this.getScrollOffset()<c?"forward":"backward":null,this.scrollOffset=c,this.isScrolling=d,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(r,s)=>{const c=new Map,d=new Map;for(let p=s-1;p>=0;p--){const g=r[p];if(c.has(g.lane))continue;const x=d.get(g.lane);if(x==null||g.end>x.end?d.set(g.lane,g):g.end<x.end&&c.set(g.lane,!0),c.size===this.options.lanes)break}return d.size===this.options.lanes?Array.from(d.values()).sort((p,g)=>p.end===g.end?p.index-g.index:p.end-g.end)[0]:void 0},this.getMeasurementOptions=ar(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(r,s,c,d,p)=>(this.pendingMeasuredCacheIndexes=[],{count:r,paddingStart:s,scrollMargin:c,getItemKey:d,enabled:p}),{key:!1}),this.getMeasurements=ar(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:r,paddingStart:s,scrollMargin:c,getItemKey:d,enabled:p},g)=>{if(!p)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(v=>{this.itemSizeCache.set(v.key,v.size)}));const x=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const w=this.measurementsCache.slice(0,x);for(let v=x;v<r;v++){const C=d(v),$=this.options.lanes===1?w[v-1]:this.getFurthestMeasurement(w,v),S=$?$.end+this.options.gap:s+c,R=g.get(C),A=typeof R=="number"?R:this.options.estimateSize(v),D=S+A,k=$?$.lane:v%this.options.lanes;w[v]={index:v,start:S,size:A,end:D,key:C,lane:k}}return this.measurementsCache=w,w},{key:"getMeasurements",debug:()=>this.options.debug}),this.calculateRange=ar(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(r,s,c,d)=>this.range=r.length>0&&s>0?Sw({measurements:r,outerSize:s,scrollOffset:c,lanes:d}):null,{key:"calculateRange",debug:()=>this.options.debug}),this.getVirtualIndexes=ar(()=>{let r=null,s=null;const c=this.calculateRange();return c&&(r=c.startIndex,s=c.endIndex),this.maybeNotify.updateDeps([this.isScrolling,r,s]),[this.options.rangeExtractor,this.options.overscan,this.options.count,r,s]},(r,s,c,d,p)=>d===null||p===null?[]:r({startIndex:d,endIndex:p,overscan:s,count:c}),{key:"getVirtualIndexes",debug:()=>this.options.debug}),this.indexFromElement=r=>{const s=this.options.indexAttribute,c=r.getAttribute(s);return c?parseInt(c,10):(console.warn(`Missing attribute name '${s}={index}' on measured element.`),-1)},this._measureElement=(r,s)=>{const c=this.indexFromElement(r),d=this.measurementsCache[c];if(!d)return;const p=d.key,g=this.elementsCache.get(p);g!==r&&(g&&this.observer.unobserve(g),this.observer.observe(r),this.elementsCache.set(p,r)),r.isConnected&&this.resizeItem(c,this.options.measureElement(r,s,this))},this.resizeItem=(r,s)=>{const c=this.measurementsCache[r];if(!c)return;const d=this.itemSizeCache.get(c.key)??c.size,p=s-d;p!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(c,p,this):c.start<this.getScrollOffset()+this.scrollAdjustments)&&(this.options.debug&&console.info("correction",p),this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=p,behavior:void 0})),this.pendingMeasuredCacheIndexes.push(c.index),this.itemSizeCache=new Map(this.itemSizeCache.set(c.key,s)),this.notify(!1))},this.measureElement=r=>{if(!r){this.elementsCache.forEach((s,c)=>{s.isConnected||(this.observer.unobserve(s),this.elementsCache.delete(c))});return}this._measureElement(r,void 0)},this.getVirtualItems=ar(()=>[this.getVirtualIndexes(),this.getMeasurements()],(r,s)=>{const c=[];for(let d=0,p=r.length;d<p;d++){const g=r[d],x=s[g];c.push(x)}return c},{key:"getVirtualItems",debug:()=>this.options.debug}),this.getVirtualItemForOffset=r=>{const s=this.getMeasurements();if(s.length!==0)return du(s[Ud(0,s.length-1,c=>du(s[c]).start,r)])},this.getOffsetForAlignment=(r,s,c=0)=>{const d=this.getSize(),p=this.getScrollOffset();s==="auto"&&(s=r>=p+d?"end":"start"),s==="center"?r+=(c-d)/2:s==="end"&&(r-=d);const g=this.getTotalSize()+this.options.scrollMargin-d;return Math.max(Math.min(g,r),0)},this.getOffsetForIndex=(r,s="auto")=>{r=Math.max(0,Math.min(r,this.options.count-1));const c=this.measurementsCache[r];if(!c)return;const d=this.getSize(),p=this.getScrollOffset();if(s==="auto")if(c.end>=p+d-this.options.scrollPaddingEnd)s="end";else if(c.start<=p+this.options.scrollPaddingStart)s="start";else return[p,s];const g=s==="end"?c.end+this.options.scrollPaddingEnd:c.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(g,s,c.size),s]},this.isDynamicMode=()=>this.elementsCache.size>0,this.scrollToOffset=(r,{align:s="start",behavior:c}={})=>{c==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(r,s),{adjustments:void 0,behavior:c})},this.scrollToIndex=(r,{align:s="auto",behavior:c}={})=>{c==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),r=Math.max(0,Math.min(r,this.options.count-1));let d=0;const p=10,g=w=>{if(!this.targetWindow)return;const v=this.getOffsetForIndex(r,w);if(!v){console.warn("Failed to get offset for index:",r);return}const[C,$]=v;this._scrollToOffset(C,{adjustments:void 0,behavior:c}),this.targetWindow.requestAnimationFrame(()=>{const S=this.getScrollOffset(),R=this.getOffsetForIndex(r,$);if(!R){console.warn("Failed to get offset for index:",r);return}mw(R[0],S)||x($)})},x=w=>{this.targetWindow&&(d++,d<p?(this.options.debug&&console.info("Schedule retry",d,p),this.targetWindow.requestAnimationFrame(()=>g(w))):console.warn(`Failed to scroll to index ${r} after ${p} attempts.`))};g(s)},this.scrollBy=(r,{behavior:s}={})=>{s==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+r,{adjustments:void 0,behavior:s})},this.getTotalSize=()=>{var r;const s=this.getMeasurements();let c;if(s.length===0)c=this.options.paddingStart;else if(this.options.lanes===1)c=((r=s[s.length-1])==null?void 0:r.end)??0;else{const d=Array(this.options.lanes).fill(null);let p=s.length-1;for(;p>=0&&d.some(g=>g===null);){const g=s[p];d[g.lane]===null&&(d[g.lane]=g.end),p--}c=Math.max(...d.filter(g=>g!==null))}return Math.max(c-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(r,{adjustments:s,behavior:c})=>{this.options.scrollToFn(r,{behavior:c,adjustments:s},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(i)}}const Ud=(n,i,r,s)=>{for(;n<=i;){const c=(n+i)/2|0,d=r(c);if(d<s)n=c+1;else if(d>s)i=c-1;else return c}return n>0?n-1:0};function Sw({measurements:n,outerSize:i,scrollOffset:r,lanes:s}){const c=n.length-1,d=x=>n[x].start;if(n.length<=s)return{startIndex:0,endIndex:c};let p=Ud(0,c,d,r),g=p;if(s===1)for(;g<c&&n[g].end<r+i;)g++;else if(s>1){const x=Array(s).fill(0);for(;g<c&&x.some(v=>v<r+i);){const v=n[g];x[v.lane]=v.end,g++}const w=Array(s).fill(r+i);for(;p>=0&&w.some(v=>v>=r);){const v=n[p];w[v.lane]=v.start,p--}p=Math.max(0,p-p%s),g=Math.min(c,g+(s-1-g%s))}return{startIndex:p,endIndex:g}}const gu=typeof document<"u"?h.useLayoutEffect:h.useEffect;function Iw(n){const i=h.useReducer(()=>({}),{})[1],r={...n,onChange:(c,d)=>{var p;d?ur.flushSync(i):i(),(p=n.onChange)==null||p.call(n,c,d)}},[s]=h.useState(()=>new _w(r));return s.setOptions(r),gu(()=>s._didMount(),[]),gu(()=>s._willUpdate()),s}function Rw(n){return Iw({observeElementRect:$w,observeElementOffset:ww,scrollToFn:Cw,...n})}ut((n,i)=>{const{gap:r=0,gridCols:s=12,...c}=n;return l.jsx(Tw,{ref:i,$gap:r,$gridCols:s,...c})});const Tw=E(H)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:n})=>n}, 1fr);
  ${({theme:n,$gap:i})=>Zo({gap:i},n)}
`;ut(({col:n,s:i,xs:r,m:s,...c},d)=>l.jsx(Aw,{ref:d,$col:n,$s:i,$xs:r,$m:s,...c}));const Aw=E(U)`
  grid-column: span ${({$xs:n,$col:i})=>n??i??12};
  max-width: 100%;

  ${({theme:n})=>n.breakpoints.small} {
    grid-column: span ${({$s:n,$xs:i,$col:r})=>n??i??r??12};
  }

  ${({theme:n})=>n.breakpoints.medium} {
    grid-column: span ${({$m:n,$s:i,$xs:r,$col:s})=>n??i??r??s??12};
  }

  ${({theme:n})=>n.breakpoints.large} {
    grid-column: span ${({$col:n,$m:i,$s:r,$xs:s})=>n??i??r??s??12};
  }
`,Ew=({children:n,estimatedItemSize:i=40,overscan:r=10,itemCount:s,renderItem:c})=>{const d=h.useRef(null),[p,g]=h.useState(!1),x=h.useRef(!0);h.useEffect(()=>(x.current=!0,typeof h.startTransition=="function"&&h.startTransition(()=>{x.current&&g(!0)}),()=>{x.current=!1}),[]);const w=h.useMemo(()=>c&&s!==void 0?[]:h.Children.toArray(n),[n,c,s]),v=s??w.length,C=Rw({count:v,getScrollElement:()=>d.current??null,estimateSize:h.useCallback(()=>i,[i]),overscan:r,scrollMargin:0,measureElement:void 0,lanes:1}),$=p&&x.current?C.getVirtualItems():[];return p?l.jsx(H,{ref:d,height:`${C.getTotalSize()>0?C.getTotalSize():0}px`,width:"100%",position:"relative","data-testid":"virtualized-list",style:{willChange:"transform"},children:$.map(S=>{const R=c?c(S.index):w[S.index];return l.jsx(H,{"data-index":S.index,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translate3d(0, ${S.start}px, 0)`},children:R},S.key)})}):l.jsx(H,{ref:d,height:"40px",width:"100%",position:"relative"})},jw=h.forwardRef(({allowCustomValue:n,autocomplete:i,children:r,className:s,clearLabel:c="Clear",creatable:d=!1,creatableDisabled:p=!1,creatableStartIcon:g,createMessage:x=ve=>`Create "${ve}"`,defaultFilterValue:w,defaultTextValue:v,defaultOpen:C=!1,open:$,onOpenChange:S,disabled:R=!1,hasError:A,id:D,filterValue:k,hasMoreItems:T=!1,isPrintableCharacter:W,loading:V=!1,loadingMessage:z="Loading content...",name:L,noOptionsMessage:F=()=>"No results found",onChange:q,onClear:te,onCreateOption:ne,onFilterValueChange:_e,onInputChange:re,onTextValueChange:ue,onLoadMore:de,placeholder:je="Select or enter a value",required:De=!1,size:X="M",startIcon:ae,textValue:Se,value:Ie,...ge},Je)=>{const[ve,Ue]=Kt({prop:$,defaultProp:C,onChange:S}),[Ae,Ge]=Kt({prop:Se,defaultProp:n&&!v?Ie:v,onChange:ue}),[Y,fe]=Kt({prop:k,defaultProp:w,onChange:_e}),Re=h.useRef(null),we=h.useRef(null),me=xt(we,Je),ye=h.useRef(null),Ke=et=>{te&&!R&&(Ge(""),fe(""),te(et),we.current.focus())},he=et=>{Ue(et)},Ce=et=>{Ge(et)},dt=et=>{fe(et)},qe=et=>{re&&re(et)},qr=et=>{q&&q(et)},ni=et=>{de&&T&&!V&&de(et)},ln=()=>{ne&&Ae&&d!=="visible"?ne(Ae):ne&&d==="visible"&&(ne(),Ue(!1))},bt=Bt(),cn=`intersection-${lr(bt)}`;Ur(Re,ni,{selectorToWatch:`#${cn}`,skipWhen:!ve});const{error:un,...Bn}=It("Combobox"),Sn=!!un||A,xr=Bn.id??D,In=Bn.name??L,dn=Bn.required||De,Hn=h.Children.toArray(r).filter(Boolean).length,br=!!!(Ae&&Ae!==""||Y&&Y!=="")&&Hn>100;let Rn;return un?Rn=`${xr}-error`:Bn.hint&&(Rn=`${xr}-hint`),l.jsxs(Wt.Root,{autocomplete:i||(d===!0?"list":"both"),onOpenChange:he,open:ve,onTextValueChange:Ce,textValue:Ae,allowCustomValue:!!d||n,disabled:R,required:dn,value:Ie,onValueChange:qr,filterValue:Y,onFilterValueChange:dt,isPrintableCharacter:W,visible:d==="visible",children:[l.jsxs(kw,{$hasError:Sn,$size:X,className:s,children:[l.jsxs(U,{flex:"1",tag:"span",gap:3,children:[ae?l.jsx(U,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:ae}):null,l.jsx(Dw,{placeholder:je,id:xr,"aria-invalid":!!un,onChange:qe,ref:me,name:In,"aria-describedby":Rn,...ge})]}),l.jsxs(U,{tag:"span",gap:3,children:[Ae&&te?l.jsx(yn,{size:"XS",variant:"ghost",onClick:Ke,"aria-disabled":R,"aria-label":c,label:c,ref:ye,children:l.jsx(dr,{})}):null,l.jsx(Ow,{children:l.jsx(Fn,{fill:"neutral500"})})]})]}),l.jsx(Wt.Portal,{children:l.jsx(Pw,{sideOffset:4,children:l.jsxs(Wt.Viewport,{ref:Re,children:[l.jsxs(Lw,{children:[br?l.jsx(Ew,{itemCount:Hn,children:r}):r,d!==!0&&!V?l.jsx(Wt.NoValueFound,{asChild:!0,children:l.jsx(Ma,{$hasHover:!1,children:l.jsx(Z,{children:F(Ae??"")})})}):null,V?l.jsx(U,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:l.jsx(hw,{small:!0,children:z})}):null,l.jsx(H,{id:cn,width:"100%",height:"1px"})]}),d?l.jsx(Mw,{onPointerUp:ln,onClick:ln,disabled:p,asChild:!0,children:l.jsx(Ma,{children:l.jsxs(U,{gap:2,children:[g&&l.jsx(H,{tag:"span","aria-hidden":!0,display:"inline-flex",children:g}),l.jsx(Z,{children:x(Ae??"")})]})})}):null]})})})]})}),kw=E(Wt.Trigger)`
  position: relative;
  border: 1px solid ${({theme:n,$hasError:i})=>i?n.colors.danger600:n.colors.neutral200};
  border-radius: ${({theme:n})=>n.borderRadius};
  background: ${({theme:n})=>n.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:n})=>n.spaces[4]};

  ${n=>{switch(n.$size){case"S":return oe`
          padding-inline-start: ${({theme:i})=>i.spaces[4]};
          padding-inline-end: ${({theme:i})=>i.spaces[3]};
          padding-block: ${({theme:i})=>i.spaces[1]};
        `;default:return oe`
          padding-inline-start: ${({theme:i})=>i.spaces[4]};
          padding-inline-end: ${({theme:i})=>i.spaces[3]};
          padding-block: ${({theme:i})=>i.spaces[2]};
        `}}}

  &[data-disabled] {
    color: ${({theme:n})=>n.colors.neutral600};
    background: ${({theme:n})=>n.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:n,$hasError:i})=>_n()({theme:n,$hasError:i})};
`,Dw=E(Wt.TextInput)`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:n})=>n.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:n})=>n.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Ow=E(Wt.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:n})=>n.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Pw=E(Wt.Content)`
  background: ${({theme:n})=>n.colors.neutral0};
  box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:n})=>n.zIndices.popover};

  &:focus-visible {
    outline: ${({theme:n})=>`2px solid ${n.colors.primary600}`};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${n=>n.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Be.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Be.slideDownIn};
      }
    }
  }
`,Mw=E(Wt.CreateItem)`
  && {
    border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: ${({theme:n})=>n.colors.neutral0};
    cursor: pointer;
    padding: ${({theme:n})=>n.spaces[1]};
    position: sticky;
    bottom: 0;
    left: 0;
  }
  &&:hover,
  &&[data-highlighted] {
    background: ${({theme:n})=>n.colors.neutral0};
  }
  &&[data-disabled] {
    color: ${({theme:n})=>n.colors.neutral600};
    cursor: not-allowed;
  }
  &&[data-disabled] svg {
    fill: ${({theme:n})=>n.colors.neutral300};
  }
  && > div {
    padding: ${({theme:n})=>n.spaces[2]} ${({theme:n})=>n.spaces[4]};
  }
  && > div:hover,
  &&[data-highlighted] > div {
    background-color: ${({theme:n})=>n.colors.primary100};
    border-radius: ${({theme:n})=>n.borderRadius};
  }
  &&[data-disabled] > div {
    background-color: inherit;
  }
`,Lw=E(ei)`
  padding: ${({theme:n})=>n.spaces[1]};
`,Nw=h.forwardRef(({children:n,value:i,disabled:r,textValue:s,...c},d)=>l.jsx(Wt.ComboboxItem,{asChild:!0,value:i,disabled:r,textValue:s,children:l.jsx(Ma,{ref:d,...c,children:l.jsx(Wt.ItemText,{asChild:!0,children:l.jsx(Z,{children:n})})})})),Ma=E.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:n})=>n.spaces[2]} ${({theme:n})=>n.spaces[4]};
  background-color: ${({theme:n})=>n.colors.neutral0};
  border-radius: ${({theme:n})=>n.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:n})=>n.colors.primary100};
    color: ${({theme:n})=>n.colors.primary600};
    font-weight: bold;
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:n,$hasHover:i=!0})=>i?n.colors.primary100:n.colors.neutral0};
  }

  &[data-highlighted] {
    color: ${({theme:n})=>n.colors.primary600};
    font-weight: bold;
  }
`,Gd=(n,i)=>`${n}${Math.floor(i*255).toString(16).padStart(2,"0")}`;h.forwardRef((n,i)=>l.jsx(S1,{...n,asChild:!0,ref:i}));h.forwardRef((n,i)=>l.jsx(I1,{children:l.jsx(Fw,{children:l.jsx(Vw,{ref:i,...n})})}));const Fw=E(R1)`
  background: ${n=>Gd(n.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${n=>n.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Be.overlayFadeIn} ${n=>n.theme.motion.timings[200]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,Vw=E(T1)`
  max-width: 42rem;
  height: min-content;
  width: calc(100% - ${({theme:n})=>n.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${n=>n.theme.borderRadius};
  background-color: ${n=>n.theme.colors.neutral0};
  box-shadow: ${n=>n.theme.shadows.popupShadow};
  z-index: ${n=>n.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${n=>n.theme.motion.timings[200]};
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};
      animation-name: ${Be.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${n=>n.theme.motion.timings[120]};
      animation-timing-function: ${n=>n.theme.motion.easings.easeOutQuad};
      animation-name: ${Be.modalPopOut};
    }
  }
`;h.forwardRef(({children:n,...i},r)=>l.jsx(A1,{asChild:!0,children:l.jsx(Ww,{tag:"h2",variant:"beta",ref:r,padding:6,fontWeight:"bold",...i,children:n})}));const Ww=E(Z)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${n=>n.theme.colors.neutral150};
`;h.forwardRef(({children:n,icon:i,...r},s)=>l.jsx(U,{ref:s,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...r,children:typeof n=="string"?l.jsxs(l.Fragment,{children:[i?h.cloneElement(i,{width:24,height:24}):null,l.jsx(zw,{children:n})]}):n}));const zw=h.forwardRef((n,i)=>l.jsx(E1,{asChild:!0,children:l.jsx(Z,{ref:i,variant:"omega",...n,tag:"p"})}));h.forwardRef((n,i)=>l.jsx(Bw,{ref:i,gap:2,padding:4,justifyContent:"space-between",...n,tag:"footer"}));const Bw=E(U)`
  border-top: solid 1px ${n=>n.theme.colors.neutral150};
  flex: 1;
`;h.forwardRef((n,i)=>l.jsx(j1,{...n,asChild:!0,ref:i}));h.forwardRef((n,i)=>l.jsx(k1,{...n,asChild:!0,ref:i}));function an(n,i){const r=h.useRef(null);return i&&r.current&&Hw(i,r.current)&&(i=r.current),r.current=i??null,h.useMemo(()=>new v2(n,i),[n,i])}function Hw(n,i){if(n===i)return!0;const r=Object.keys(n),s=Object.keys(i);if(r.length!==s.length)return!1;for(const c of r)if(i[c]!==n[c])return!1;return!0}D1`
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
    color: ${({theme:n})=>n.colors.neutral800};
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
    outline: 2px solid ${({theme:n})=>n.colors.primary600};
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
`;const mu="en-EN",Uw=()=>typeof navigator>"u"?mu:navigator.language?navigator.language:mu,[QC,ti]=hr("StrapiDesignSystem",{locale:Uw()}),Gw=V1,Kd=h.forwardRef(({container:n=globalThis?.document?.body,...i},r)=>n?ur.createPortal(l.jsx(H,{ref:r,...i}),n):null);Kd.displayName="Portal";const Kw=h.forwardRef(({onClear:n,clearLabel:i="Clear",startIcon:r,disabled:s,hasError:c,children:d,id:p,size:g="M",withTags:x,...w},v)=>{const C=h.useRef(null),$=A=>{n&&!s&&(n(A),C.current.focus())},{labelNode:S}=It("SelectTrigger"),R=xt(C,v);return l.jsx(zt.Trigger,{asChild:!0,children:l.jsxs(qw,{"aria-disabled":s,$hasError:c,ref:R,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:s?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":S?`${p}-label`:void 0,$size:g,$withTags:x,...w,children:[l.jsxs(U,{flex:"1",tag:"span",gap:3,children:[r&&l.jsx(U,{tag:"span","aria-hidden":!0,children:r}),d]}),l.jsxs(U,{tag:"span",gap:3,children:[n?l.jsx(yn,{size:"XS",variant:"ghost",onClick:$,"aria-disabled":s,"aria-label":i,label:i,children:l.jsx(dr,{})}):null,l.jsx(Yw,{children:l.jsx(Fn,{})})]})]})})}),qw=E(U)`
  border: 1px solid ${({theme:n,$hasError:i})=>i?n.colors.danger600:n.colors.neutral200};
  ${n=>{switch(n.$size){case"S":return oe`
          padding-block: ${n.theme.spaces[1]};
          padding-inline-start: ${n.$withTags?n.theme.spaces[1]:n.theme.spaces[4]};
          padding-inline-end: ${n.theme.spaces[3]};
        `;default:return oe`
          padding-block: ${n.$withTags?"0.3rem":n.theme.spaces[2]};
          padding-inline-start: ${n.$withTags?n.theme.spaces[1]:n.theme.spaces[4]};
          padding-inline-end: ${n.theme.spaces[3]};
        `}}}
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${n=>n.theme.colors.neutral500};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:n,$hasError:i})=>_n()({theme:n,$hasError:i})};
`,Yw=E(zt.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:n})=>n.colors.neutral500};
  }
`,Zw=h.forwardRef(({children:n,placeholder:i,...r},s)=>l.jsx(Xw,{ref:s,ellipsis:!0,...r,children:l.jsx(Jw,{placeholder:i,children:n})})),Xw=E(Z)`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.2rem;
  min-height: 2.2rem;
`,Jw=E(zt.Value)`
  display: flex;
  gap: ${({theme:n})=>n.spaces[1]};
  flex-wrap: wrap;
`,Qw=h.forwardRef((n,i)=>l.jsx(ey,{ref:i,...n,children:l.jsx(ei,{children:n.children})})),ey=E(zt.Content)`
  background: ${({theme:n})=>n.colors.neutral0};
  box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  min-width: var(--radix-select-trigger-width);
  max-height: 15.6rem;
  z-index: ${({theme:n})=>n.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${n=>n.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Be.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Be.slideDownIn};
      }
    }
  }
`,ty=E(zt.Viewport)`
  padding: ${({theme:n})=>n.spaces[1]};
`,ny=h.forwardRef((n,i)=>l.jsx(oy,{ref:i,...n})),ry=oe`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${n=>n.theme.borderRadius};
  padding: ${n=>`${n.theme.spaces[2]} ${n.theme.spaces[4]}`};
  padding-left: ${({theme:n})=>n.spaces[4]};
  background-color: ${({theme:n})=>n.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spaces[2]};
  white-space: nowrap;
  user-select: none;
  color: ${({theme:n})=>n.colors.neutral800};

  &:focus-visible {
    outline: none;
    background-color: ${({theme:n})=>n.colors.primary100};
    cursor: pointer;
  }
`,oy=E(zt.Item)`
  ${ry}

  &:hover {
    background-color: ${({theme:n})=>n.colors.primary100};
    cursor: pointer;
  }
`,qd=zt.Root,Yd=Kw,Zd=Zw,Xd=zt.Portal,Jd=Qw,Qd=ty,$s=ny,ef=zt.ItemIndicator,tf=zt.ItemText,iy=zt.Group,xu=h.forwardRef(({children:n,clearLabel:i="Clear",customizeContent:r,disabled:s,hasError:c,id:d,name:p,onChange:g,onClear:x,onCloseAutoFocus:w,onReachEnd:v,placeholder:C,required:$,size:S,startIcon:R,value:A,...D},k)=>{const[T,W]=h.useState(),[V,z]=h.useState(!1),L=ge=>{z(ge)},F=ge=>{x&&x(ge),g||W("")},q=ge=>{g?g(typeof A=="number"?Number(ge):ge):W(ge)},te=h.useRef(null),ne=Bt(),_e=`intersection-${lr(ne)}`;Ur(te,ge=>{v&&v(ge)},{selectorToWatch:`#${_e}`,skipWhen:!V});const{error:ue,required:de,...je}=It("SingleSelect"),De=!!ue||c,X=je.id??d,ae=je.name??p;let Se;ue?Se=`${X}-error`:je.hint&&(Se=`${X}-hint`);const Ie=(typeof A<"u"&&A!==null?A.toString():T)??"";return l.jsxs(qd,{onOpenChange:L,disabled:s,required:de??$,onValueChange:q,value:Ie,...D,children:[l.jsx(Yd,{ref:k,id:X,name:ae,startIcon:R,hasError:De,disabled:s,clearLabel:i,onClear:Ie&&x?F:void 0,"aria-label":D["aria-label"],"aria-describedby":Se??D["aria-describedby"],size:S,children:l.jsx(Zd,{placeholder:C,textColor:Ie?"neutral800":"neutral600",children:Ie&&r?r(Ie):void 0})}),l.jsx(Xd,{children:l.jsx(Jd,{position:"popper",sideOffset:4,onCloseAutoFocus:w,children:l.jsxs(Qd,{ref:te,children:[n,l.jsx(H,{id:_e,width:"100%",height:"1px"})]})})})]})}),bu=h.forwardRef(({value:n,startIcon:i,children:r,...s},c)=>l.jsxs($s,{ref:c,value:n.toString(),...s,children:[i&&l.jsx(U,{tag:"span","aria-hidden":!0,children:i}),l.jsx(Z,{lineHeight:"20px",width:"100%",children:l.jsx(tf,{children:r})})]})),ay=200,vu=15,[sy,mr]=hr("DatePicker"),ly=h.forwardRef(({calendarLabel:n,className:i,initialDate:r,locale:s,maxDate:c,minDate:d,monthSelectLabel:p="Month",onChange:g,value:x,yearSelectLabel:w="Year",hasError:v,id:C,name:$,disabled:S=!1,required:R=!1,onClear:A,clearLabel:D="Clear",size:k="M",...T},W)=>{const V=Ca(),z=ti("DatePicker"),L=s??z.locale,F=an(L,{day:"2-digit",month:"2-digit",year:"numeric"}),[q,te]=h.useState(!1),[ne,_e]=h.useState(null),[re,ue]=h.useState(null),[de,je]=h.useState(null),[De,X]=h.useState(),[ae,Se]=Kt({defaultProp:r?Ln(r):void 0,prop:x?Ln(x):void 0,onChange(Ce){g&&g(Ce?.toDate(V))}}),[Ie,ge]=h.useMemo(()=>{const Ce=r?Ln(r):za("UTC"),dt=d?Ln(d):Ce.set({day:1,month:1,year:Ce.year-ay});let qe=c?Ln(c):Ce.set({day:31,month:12,year:Ce.year+vu});return qe.compare(dt)<0&&(qe=dt.set({day:31,month:12,year:dt.year+vu})),[dt,qe]},[d,c,r]),[Je,ve]=h.useState(cy({currentValue:ae,minDate:Ie,maxDate:ge})),Ue=Bt(),Ae=h.useRef(null),Ge=Ce=>{A&&!S&&(X(""),Se(void 0),A(Ce),re?.focus())},Y=h.useCallback(Ce=>{Ce&&ae&&ve(ae),te(Ce)},[ae]);wn(()=>{if(x){const Ce=Ln(x);X(F.format(Ce.toDate(V))),ve(Ce)}else X("")},[x,F,V]),wn(()=>{if(r&&De===void 0){const Ce=Ln(r);X(F.format(Ce.toDate(V)))}},[r,De,F,V]);const{error:fe,...Re}=It("Combobox"),we=!!fe||v,me=Re.id??C,ye=Re.name??$,Ke=Re.required||R;let he;return fe?he=`${me}-error`:Re.hint&&(he=`${me}-hint`),l.jsxs(sy,{calendarDate:Je,content:de,contentId:Ue,disabled:S,locale:L,minDate:Ie,maxDate:ge,open:q,onCalendarDateChange:ve,onContentChange:je,onOpenChange:Y,onTextInputChange:ue,onTextValueChange:X,onTriggerChange:_e,onValueChange:Se,onClear:A,required:Ke,textInput:re,textValue:De,timeZone:V,trigger:ne,value:ae,children:[l.jsxs(dy,{className:i,hasError:we,size:k,children:[l.jsx(O1,{fill:"neutral500","aria-hidden":!0}),l.jsx(py,{ref:W,"aria-describedby":he,id:me,name:ye,...T}),De&&A?l.jsx(yn,{size:"XS",variant:"ghost",onClick:Ge,"aria-disabled":S,"aria-label":D,label:D,ref:Ae,children:l.jsx(dr,{})}):null]}),l.jsx(Kd,{children:l.jsx(by,{label:n,children:l.jsx(Sy,{monthSelectLabel:p,yearSelectLabel:w})})})]})}),$u=n=>!!n.match(/^[^a-zA-Z]*$/),cy=({currentValue:n,minDate:i,maxDate:r})=>{const s=za("UTC");return n||(_a(i,s)===i&&Sa(r,s)===r?s:_a(i,s)===s?i:Sa(r,s)===s?r:s)},uy="DatePickerTrigger",dy=h.forwardRef(({hasError:n,size:i,...r},s)=>{const c=mr(uy),d=xt(s,g=>c.onTriggerChange(g)),p=()=>{c.disabled||c.onOpenChange(!0)};return l.jsx(Na,{asChild:!0,trapped:c.open,onMountAutoFocus:g=>{g.preventDefault()},onUnmountAutoFocus:g=>{document.getSelection()?.empty(),g.preventDefault()},children:l.jsx(fy,{ref:d,$hasError:n,$size:i,$hasOnClear:!!c.onClear,...r,hasRadius:!0,gap:3,overflow:"hidden",background:c.disabled?"neutral150":"neutral0",onClick:Nn(r.onClick,()=>{c.textInput?.focus()}),onPointerDown:Nn(r.onPointerDown,g=>{const x=g.target;x.hasPointerCapture(g.pointerId)&&x.releasePointerCapture(g.pointerId),(x.closest("button")??x.closest("div"))===g.currentTarget&&g.button===0&&g.ctrlKey===!1&&(p(),c.textInput?.focus())})})})}),fy=E(U)`
  min-width: ${({$hasOnClear:n})=>n?"160px":"130px"};
  border: 1px solid ${({theme:n,$hasError:i})=>i?n.colors.danger600:n.colors.neutral200};
  ${n=>{switch(n.$size){case"S":return oe`
          padding-block: ${n.theme.spaces[1]};
          padding-inline: ${n.theme.spaces[3]};
        `;default:return oe`
          padding-block: ${n.theme.spaces[2]};
          padding-inline: ${n.theme.spaces[3]};
        `}}}

  & > svg {
    flex: 1 0 auto;
  }

  &[data-disabled] {
    color: ${({theme:n})=>n.colors.neutral600};
    background: ${({theme:n})=>n.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:n,$hasError:i})=>_n()({theme:n,$hasError:i})};
`,hy="DatePickerTextInput",py=h.forwardRef(({placeholder:n,...i},r)=>{const s=mr(hy),{onTextValueChange:c,textValue:d,onTextInputChange:p,onOpenChange:g,disabled:x,locale:w}=s,v=xt(r,k=>p(k)),C=()=>{x||g(!0)},$=an(w,{year:"numeric",month:"2-digit",day:"2-digit"}),[S,R,A]=h.useMemo(()=>{const k=$.formatToParts(new Date),T=k.filter(z=>z.type==="year"||z.type==="month"||z.type==="day"),W=T.map(z=>{switch(z.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),V=k.find(z=>z.type==="literal")?.value??"";return[W,V,T]},[$]),D=S.map(k=>`\\d{${k.length}}`).join(`\\${R}`);return l.jsx(my,{role:"combobox",type:"text",inputMode:"numeric",ref:v,"aria-autocomplete":"none","aria-controls":s.contentId,"aria-disabled":s.disabled,"aria-expanded":s.open,"aria-required":s.required,"aria-haspopup":"dialog","data-state":s.open?"open":"closed",disabled:x,"data-disabled":x?"":void 0,pattern:D,placeholder:n??S.join(R),...i,value:d??"",onBlur:Nn(i.onBlur,()=>{if(!s.textValue){s.onValueChange(void 0);return}s.onTextValueChange($.format(s.calendarDate.toDate(s.timeZone))),s.onValueChange(s.calendarDate)}),onChange:Nn(i.onChange,k=>{if($u(k.target.value)){const T=k.target.value.split(R),[W,V,z]=A.map((ue,de)=>{const je=T[de];return{...ue,value:je}}).sort((ue,de)=>ue.type==="year"?1:de.type==="year"?-1:ue.type==="month"?1:de.type==="month"?-1:0).map(ue=>ue.value),L=s.calendarDate.year;let F=s.calendarDate.year;if(z){const ue=z.length===1?`0${z}`:z;F=z.length<3?Number(`${L}`.slice(0,4-ue.length)+ue):Number(ue)}z&&z.length<3&&F>s.maxDate.year&&(F-=100);const q=s.calendarDate.set({year:F}),te=q.calendar.getMonthsInYear(q),ne=q.set({month:V&&Number(V)<=te?Number(V):void 0}),_e=ne.calendar.getDaysInMonth(ne),re=ne.set({day:W&&Number(W)<=_e?Number(W):void 0});s.onCalendarDateChange(gy(re,s.minDate,s.maxDate)),s.onTextValueChange(k.target.value)}}),onKeyDown:Nn(i.onKeyDown,k=>{if(!s.open&&($u(k.key)||["ArrowDown","Backspace"].includes(k.key)))C();else if(["Tab"].includes(k.key)&&s.open)k.preventDefault();else if(["Escape"].includes(k.key))s.open?s.onOpenChange(!1):(s.onValueChange(void 0),s.onTextValueChange("")),k.preventDefault();else if(s.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(k.key))switch(k.preventDefault(),k.key){case"ArrowDown":{const T=s.calendarDate.add({weeks:1});if(s.maxDate&&T.compare(s.maxDate)>0)return;s.onCalendarDateChange(T);return}case"ArrowRight":{const T=s.calendarDate.add({days:1});if(s.maxDate&&T.compare(s.maxDate)>0)return;s.onCalendarDateChange(T);return}case"ArrowUp":{const T=s.calendarDate.subtract({weeks:1});if(s.minDate&&T.compare(s.minDate)<0)return;s.onCalendarDateChange(T);return}case"ArrowLeft":{const T=s.calendarDate.subtract({days:1});if(s.minDate&&T.compare(s.minDate)<0)return;s.onCalendarDateChange(T)}}else s.open&&["Enter"].includes(k.key)&&(k.preventDefault(),c($.format(s.calendarDate.toDate(s.timeZone))),s.onValueChange(s.calendarDate),s.onOpenChange(!1))})})});function gy(n,i,r){return i&&(n=Sa(n,i)),r&&(n=_a(n,r)),n}const my=E.input`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:n})=>n.colors.neutral800};
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:n})=>n.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,xy="DatePickerContent",by=h.forwardRef((n,i)=>{const r=mr(xy),[s,c]=h.useState(!1);return h.useEffect(()=>{r.open&&!s&&c(!0)},[r.open,s]),!r.open&&!s||!r.open?null:l.jsx($y,{...n,ref:i})}),vy="DatePickerContent",$y=h.forwardRef((n,i)=>{const{label:r="Choose date",...s}=n,{onOpenChange:c,...d}=mr(vy),{x:p,y:g,refs:x,strategy:w,placement:v}=P1({strategy:"fixed",placement:"bottom-start",middleware:[L1({mainAxis:4}),N1(),F1()],elements:{reference:d.trigger},whileElementsMounted:M1});h.useEffect(()=>{const $=()=>{c(!1)};return window.addEventListener("blur",$),window.addEventListener("resize",$),()=>{window.removeEventListener("blur",$),window.removeEventListener("resize",$)}},[c]);const C=xt(i,$=>d.onContentChange($),x.setFloating);return Fa(),l.jsx(Va,{allowPinchZoom:!0,children:l.jsx(Gw,{asChild:!0,onFocusOutside:$=>{$.preventDefault()},onDismiss:()=>{c(!1)},children:l.jsx(wy,{ref:C,"data-state":d.open?"open":"closed","data-side":v.includes("top")?"top":"bottom",onContextMenu:$=>$.preventDefault(),id:d.contentId,role:"dialog","aria-modal":"true","aria-label":r,style:{left:p,top:g,position:w},hasRadius:!0,background:"neutral0",padding:1,...s})})})}),wy=E(H)`
  box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  z-index: ${({theme:n})=>n.zIndices.popover};
  border: 1px solid ${({theme:n})=>n.colors.neutral150};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${n=>n.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Be.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Be.slideDownIn};
      }
    }
  }
`,yy="DatePickerCalendar",[Cy,_y]=hr("DateFormatters"),Sy=h.forwardRef(({monthSelectLabel:n,yearSelectLabel:i,...r},s)=>{const{locale:c,timeZone:d,minDate:p,maxDate:g,calendarDate:x,onCalendarDateChange:w}=mr(yy),v=W1(x),C=h.useMemo(()=>{const L=p.year,F=g.year;return[...Array(F-L+1).keys()].map(q=>(L+q).toString())},[p,g]),$=an(c,{month:"long"}),S=h.useMemo(()=>[...Array(x.calendar.getMonthsInYear(x)).keys()].map(L=>$.format(x.set({month:L+1}).toDate(d))),[x,$,d]),R=an(c,{weekday:"short"}),A=h.useMemo(()=>{const L=Vu(za(d),c);return[...new Array(7).keys()].map(F=>{const te=L.add({days:F}).toDate(d);return R.format(te)})},[d,c,R]),D=an(c,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),k=an(c,{day:"numeric",calendar:x.calendar.identifier}),T=an(c,{day:"2-digit",month:"2-digit",year:"numeric"}),W=L=>{if(typeof L=="number")return;const F=x.set({month:S.indexOf(L)+1});w(F)},V=L=>{if(typeof L=="number")return;const F=x.set({year:parseInt(L,10)});w(F)},z=Iy(v,c);return l.jsx(Cy,{dateFormatter:D,cellDateFormatter:k,textValueFormatter:T,children:l.jsxs(U,{ref:s,direction:"column",alignItems:"stretch",padding:4,...r,children:[l.jsxs(Ry,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[l.jsx(cr,{children:l.jsx(xu,{"aria-label":n,value:S[x.month-1],onChange:W,children:S.map(L=>l.jsx(bu,{value:L,children:L},L))})}),l.jsx(cr,{children:l.jsx(xu,{value:x.year.toString(),"aria-label":i,onChange:V,children:C.map(L=>l.jsx(bu,{value:L,children:L},L))})})]}),l.jsxs("table",{role:"grid",children:[l.jsx("thead",{"aria-hidden":!0,children:l.jsx("tr",{"aria-rowindex":0,children:A.map((L,F)=>l.jsx(Ty,{"aria-colindex":F,children:L},L))})}),l.jsx("tbody",{children:[...new Array(6).keys()].map(L=>l.jsx("tr",{"aria-rowindex":L+2,children:z(L).map((F,q)=>F?l.jsx(jy,{"aria-colindex":q+1,date:F,startDate:v,disabled:p.compare(F)>0||F.compare(g)>0},F.toString()):l.jsx(nf,{"aria-colindex":q+1},q+1))},L))})]})]})})}),Iy=(n,i)=>r=>{let s=n.add({weeks:r});const c=[];s=Vu(s,i);const d=z1(s,i);for(let p=0;p<d;p++)c.push(null);for(;c.length<7;){c.push(s);const p=s.add({days:1});if(Wu(s,p))break;s=p}for(;c.length<7;)c.push(null);return c},Ry=E(U)`
  div[role='combobox'] {
    border: 1px solid transparent;
    background: transparent;
    font-weight: ${n=>n.theme.fontWeights.bold};

    svg {
      fill: ${({theme:n})=>n.colors.neutral500};
    }

    &:hover {
      background-color: ${({theme:n})=>n.colors.neutral100};
    }
  }
`,Ty=h.forwardRef(({children:n,...i},r)=>l.jsx(Ay,{tag:"th",role:"gridcell",ref:r,...i,height:"2.4rem",width:"3.2rem",children:l.jsx(Z,{variant:"pi",fontWeight:"bold",color:"neutral800",children:n.slice(0,2)})})),Ay=E(H)`
  border-radius: ${({theme:n})=>n.borderRadius};
  text-transform: capitalize;
`,Ey="DatePickerCalendarCell",jy=h.forwardRef(({date:n,startDate:i,disabled:r,...s},c)=>{const{timeZone:d,calendarDate:p,onValueChange:g,onOpenChange:x,onTextValueChange:w,onCalendarDateChange:v}=mr(Ey),{dateFormatter:C,cellDateFormatter:$,textValueFormatter:S}=_y("DatePickerCalendarCell"),R=Wu(p,n),A=h.useMemo(()=>C.format(n.toDate(d)),[C,n,d]),D=h.useMemo(()=>$.formatToParts(n.toDate(d)).find(V=>V.type==="day").value,[$,n,d]),k=B1(i),T=n.compare(i)<0||n.compare(k)>0;let W="neutral900";return R?W="primary600":T&&(W="neutral600"),l.jsx(nf,{tag:"td",role:"gridcell",ref:c,"aria-selected":R,...s,hasRadius:!0,"aria-label":A,tabIndex:R?0:-1,background:R?"primary100":"neutral0",cursor:"pointer",onPointerDown:Nn(s.onPointerDown,V=>{V.preventDefault(),v(n),g(n),w(S.format(n.toDate(d))),x(!1)}),"aria-disabled":r,children:l.jsx(Z,{variant:"pi",textColor:W,children:D})})}),nf=E(H)`
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
      background: ${({theme:n})=>n.colors.primary100};
      color: ${({theme:n})=>n.colors.primary600};
    }
  }
`,Ln=n=>{const i=n.toISOString(),r=H1(i,"UTC");return U1(r)},ky=h.memo(ly),$a=n=>!!n.match(/^[^a-zA-Z]*$/);function Dy(n=""){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const Oy=E(jw)`
  min-width: ${({onClear:n})=>n?"160px":"130px"};
`,Py=h.forwardRef(({step:n=15,value:i,defaultValue:r,onChange:s,...c},d)=>{const p=ti("TimePicker"),[g,x]=h.useState(""),[w,v]=Kt({prop:i,defaultProp:r,onChange:s}),C=an(p.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),$=h.useMemo(()=>{const V=C.formatToParts(new Date),{value:z}=V.find(L=>L.type==="literal");return z},[C]),S=h.useMemo(()=>{const V=60/n;return[...Array(24).keys()].flatMap(z=>[...Array(V).keys()].map(L=>C.format(new Date(0,0,0,z,L*n))))},[n,C]),R=V=>{(!V||$a(V))&&x(V)},A=V=>{const[z,L]=V.split($);if(!z&&!L)return;const F=Number(z??"0"),q=Number(L??"0");if(!(F>23||q>59))return C.format(new Date(0,0,0,F,q))},D=V=>{const z=A(V.target.value);z?(x(z),v(z)):x(w)},k=V=>{if(typeof V<"u"){const z=A(V);v(z)}else v(V)};h.useEffect(()=>{const V=typeof i>"u"?"":i;$a(V)&&x(V)},[i,x]);const W=`\\d{2}${Dy($)}\\d{2}`;return l.jsx(Oy,{...c,ref:d,value:w,onChange:k,isPrintableCharacter:$a,allowCustomValue:!0,placeholder:`--${$}--`,autocomplete:"none",startIcon:l.jsx(G1,{fill:"neutral500"}),inputMode:"numeric",pattern:W,textValue:g,onTextValueChange:R,onBlur:D,children:S.map(V=>l.jsx(Nw,{value:V,children:V},V))})});h.forwardRef(({clearLabel:n="clear",dateLabel:i="Choose date",timeLabel:r="Choose time",disabled:s=!1,hasError:c,onChange:d,onClear:p,required:g=!1,step:x,value:w,initialDate:v,size:C,...$},S)=>{const R=h.useRef(null),[A,D]=h.useState(!1),k=w?Pr(w,!1):void 0,[T,W]=Kt({defaultProp:v?Pr(v,!1):void 0,prop:A?void 0:k,onChange(X){d&&d(X?.toDate(Ca()))}}),V=ti("DateTimePicker"),z=an(V.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),L=T?z.format(T.toDate(Ca())):"",F=h.useRef(w);wn(()=>{A&&T&&W(void 0)},[A,T,W]),wn(()=>{const X=F.current;w==null&&X!=null&&T&&W(void 0),A&&w!==X&&D(!1),F.current=w},[w,T,A,W,D]),wn(()=>{A&&T===void 0&&w==null&&D(!1)},[A,T,w,D]);const q=X=>{let ae=X?Pr(X):void 0;if(L&&ae){const[Se,Ie]=L.split(":");ae=ae.set({hour:parseInt(Se,10),minute:parseInt(Ie,10)})}W(ae)},te=X=>{if(!X)return;const[ae,Se]=X.split(":"),Ie=T?T.set({hour:parseInt(ae,10),minute:parseInt(Se,10)}):Pr(new Date).set({hour:parseInt(ae,10),minute:parseInt(Se,10)});W(Ie)},ne=X=>{X.preventDefault(),D(!0),p&&p(X)},_e=()=>{const X=T?T.set({hour:0,minute:0}):Pr(new Date);W(X)},re=xt(R,S),{error:ue,id:de,labelNode:je}=It("DateTimePicker"),De=!!ue||c;return l.jsxs(U,{"aria-labelledby":je?`${de}-label`:void 0,role:"group",flex:"1",gap:1,wrap:"wrap",children:[l.jsx(cr,{flex:"1",children:l.jsx(ky,{...$,hasError:De,size:C,value:T?.toDate("UTC"),onChange:q,required:g,onClear:p?ne:void 0,clearLabel:`${n} date`,disabled:s,ref:re,"aria-label":i})}),l.jsx(cr,{flex:"1",children:l.jsx(Py,{size:C,hasError:De,value:L,onChange:te,onClear:p&&L!==void 0&&L!=="00:00"?_e:void 0,clearLabel:`${n} time`,required:g,disabled:s,step:x,"aria-label":r})})]})});const Pr=(n,i=!0)=>{const r=n.toISOString();let s=K1(r);return i&&(s=s.set({hour:0,minute:0})),q1(s)},My=h.forwardRef((n,i)=>l.jsx(Ly,{ref:i,background:"neutral150",...n,"data-orientation":"horizontal",role:"separator",tag:"div"})),Ly=E(H)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,Ny=E(H)`
  svg {
    height: 8.8rem;
  }
`;h.forwardRef(({icon:n,content:i,action:r,hasRadius:s=!0,shadow:c="tableShadow"},d)=>l.jsxs(U,{ref:d,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:s,shadow:c,children:[n?l.jsx(Ny,{paddingBottom:6,"aria-hidden":!0,children:n}):null,l.jsx(H,{paddingBottom:4,children:l.jsx(Z,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:i})}),r]}));const rf=zu.define(),of=zu.define(),Fy=Bu.mark({attributes:{style:"background-color: yellow; color: black"}}),Vy=Y1.define({create(){return Bu.none},update(n,i){return n=n.map(i.changes),i.effects.forEach(r=>{r.is(rf)?n=n.update({add:r.value,sort:!0}):r.is(of)&&(n=n.update({filter:r.value}))}),n},provide:n=>Z1.decorations.from(n)});h.forwardRef(({hasError:n,required:i,id:r,value:s="",disabled:c=!1,onChange:d=()=>null,...p},g)=>{const x=h.useRef(),w=h.useRef(),v=h.useRef(),{error:C,...$}=It("JsonInput"),S=!!C||n,R=$.id??r,A=$.required||i;let D;C?D=`${R}-error`:$.hint&&(D=`${R}-hint`);const k=te=>{const ne=w.current?.doc;if(ne){const{text:_e,to:re}=ne.line(te),ue=re-_e.trimStart().length;re>ue&&v.current?.dispatch({effects:rf.of([Fy.range(ue,re)])})}},T=()=>{const te=w.current?.doc;if(te){const ne=te.length||0;v.current?.dispatch({effects:of.of((_e,re)=>re<=0||_e>=ne)})}},W=({state:te,view:ne})=>{v.current=ne,w.current=te,T();const re=w2()(ne);re.length&&k(te.doc.lineAt(re[0].from).number)},V=(te,ne)=>{W(ne),d(te)},z=(te,ne)=>{v.current=te,w.current=ne,W({view:te,state:ne})},{setContainer:L,view:F}=X1({value:s,onCreateEditor:z,container:x.current,editable:!c,extensions:[J1(),Vy],onChange:V,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),q=xt(x,L);return h.useImperativeHandle(g,()=>({...F?.dom,focus(){F&&F.focus()},scrollIntoView(te){F&&F.dom.scrollIntoView(te)}}),[F]),l.jsx(Wy,{ref:q,$disabled:c,$hasError:S,alignItems:"stretch",fontSize:2,hasRadius:!0,"aria-required":A,id:R,"aria-describedby":D,...p})});const Wy=E(U)`
  line-height: ${({theme:n})=>n.lineHeights[2]};

  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
    cursor: ${({$disabled:n})=>n?"not-allowed":"text"};
  }

  .cm-scroller {
    border: 1px solid ${({theme:n,$hasError:i})=>i?n.colors.danger600:n.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${_n()}
  }

  .cm-editor,
  .cm-scroller {
    border-radius: ${({theme:n})=>n.borderRadius};
  }

  .cm-gutters,
  .cm-activeLineGutter {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral700 changes between themes 
     */
    background-color: #4a4a6a;
  }
`,zy=ut(({disabled:n,...i},r)=>l.jsx(Oa,{ref:r,tag:gr,tabIndex:n?-1:void 0,disabled:n,...i}));E(H)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;E(H)`
  text-decoration: none;

  &:focus {
    left: ${({theme:n})=>n.spaces[3]};
    top: ${({theme:n})=>n.spaces[3]};
  }
`;h.forwardRef((n,i)=>l.jsx(Q1,{...n,asChild:!0,ref:i}));h.forwardRef((n,i)=>l.jsx(e2,{children:l.jsx(By,{children:l.jsx(Hy,{ref:i,...n})})}));const By=E(t2)`
  background: ${n=>Gd(n.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${n=>n.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Be.overlayFadeIn} ${n=>n.theme.motion.timings[200]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,Hy=E(n2)`
  max-width: 83rem;
  max-height: 90vh;
  height: auto;
  width: calc(100% - ${({theme:n})=>n.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${n=>n.theme.borderRadius};
  background-color: ${n=>n.theme.colors.neutral0};
  box-shadow: ${n=>n.theme.shadows.popupShadow};
  z-index: ${n=>n.theme.zIndices.modal};

  ${({theme:n})=>n.breakpoints.medium} {
    width: calc(100% - ${({theme:n})=>n.spaces[9]});
  }
  > form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${n=>n.theme.motion.timings[200]};
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};
      animation-name: ${Be.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${n=>n.theme.motion.timings[120]};
      animation-timing-function: ${n=>n.theme.motion.easings.easeOutQuad};
      animation-name: ${Be.modalPopOut};
    }
  }
`,Uy=h.forwardRef((n,i)=>l.jsx(r2,{...n,asChild:!0,ref:i}));h.forwardRef(({children:n,closeLabel:i="Close modal",...r},s)=>l.jsxs(Gy,{ref:s,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...r,tag:"header",children:[n,l.jsx(Uy,{children:l.jsx(yn,{withTooltip:!1,label:i,children:l.jsx(dr,{})})})]}));const Gy=E(U)`
  border-bottom: solid 1px ${n=>n.theme.colors.neutral150};
`;h.forwardRef((n,i)=>l.jsx(o2,{asChild:!0,children:l.jsx(Z,{tag:"h2",variant:"omega",fontWeight:"bold",ref:i,...n})}));h.forwardRef(({children:n,...i},r)=>l.jsx(Ky,{ref:r,...i,children:n}));const Ky=E(ei)`
  padding-inline: ${n=>n.theme.spaces[7]};

  & > div {
    padding-block: ${n=>n.theme.spaces[8]};
    /* Add negative margin and padding to avoid cropping the box shadow when the inputs are focused */
    margin: 0 -2px 0 -2px;
    padding-left: 2px;
    padding-right: 2px;

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`;h.forwardRef((n,i)=>l.jsx(qy,{ref:i,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...n,tag:"footer"}));const qy=E(U)`
  border-top: solid 1px ${n=>n.theme.colors.neutral150};
  flex: 1;
`,Yy="";h.forwardRef(({startAction:n,locale:i,onValueChange:r,value:s,step:c=1,disabled:d=!1,...p},g)=>{const x=ti("NumberInput"),w=i||x.locale,v=h.useRef(new i2(w,{style:"decimal"})),C=h.useRef(new a2(w,{maximumFractionDigits:20})),[$,S]=Zy({prop(L){const F=String(s);return isNaN(Number(F))||F!==L&&L!==""?L:C.current.format(Number(s))},defaultProp:Yy,onChange(L){if(!r)return;const F=v.current.parse(L??"");r(isNaN(F)?void 0:F)}}),R=L=>{S(String(L))},A=({target:{value:L}})=>{v.current.isValidPartialNumber(L)&&R(L)},k=(L=>{const F=L.toString();return F.includes(".")?F.split(".")[1].length:0})(c),T=()=>{if(!$){R(c);return}const L=v.current.parse($),F=isNaN(L)?c:L+c,q=parseFloat(F.toFixed(k));R(C.current.format(q))},W=()=>{if(!$){R(-c);return}const L=v.current.parse($),F=isNaN(L)?-c:L-c,q=parseFloat(F.toFixed(k));R(C.current.format(q))},V=L=>{if(!d)switch(L.key){case at.DOWN:{L.preventDefault(),W();break}case at.UP:{L.preventDefault(),T();break}}},z=()=>{if($){const L=v.current.parse($),F=isNaN(L)?"":C.current.format(L);R(F)}};return l.jsx(vs,{ref:g,startAction:n,disabled:d,type:"text",inputMode:"decimal",onChange:A,onKeyDown:V,onBlur:z,value:$,endAction:l.jsxs(U,{direction:"column",children:[l.jsx(wu,{disabled:d,"aria-hidden":!0,$reverse:!0,onClick:T,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:l.jsx(Fn,{fill:"neutral500"})}),l.jsx(wu,{disabled:d,"aria-hidden":!0,onClick:W,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:l.jsx(Fn,{fill:"neutral500"})})]}),...p})});const wu=E.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${({$reverse:n})=>n?"-2px":"2px"});
  cursor: ${({disabled:n})=>n?"not-allowed":void 0};
  height: 1.1rem;

  svg {
    width: 1.2rem;
    transform: ${({$reverse:n})=>n?"rotateX(180deg)":void 0};
  }
`;function Zy({prop:n,defaultProp:i,onChange:r=()=>{}}){const[s,c]=Ad({defaultProp:i,onChange:r}),d=n!==void 0,p=n instanceof Function?n(s):n,g=d?p:s,x=qa(r),w=h.useCallback(v=>{if(d){const $=typeof v=="function"?v(p):v;$!==p&&(x($),c(v))}else c(v)},[d,p,c,x]);return[g,w]}const Xy=h.createContext({activePage:1,pageCount:1}),ws=()=>h.useContext(Xy);ut(({children:n,...i},r)=>{const{activePage:s}=ws(),c=s===1;return l.jsxs(sf,{ref:r,"aria-disabled":c,tabIndex:c?-1:void 0,...i,children:[l.jsx(pr,{children:n}),l.jsx(Fu,{"aria-hidden":!0})]})});ut(({children:n,...i},r)=>{const{activePage:s,pageCount:c}=ws(),d=s===c;return l.jsxs(sf,{ref:r,"aria-disabled":d,tabIndex:d?-1:void 0,...i,children:[l.jsx(pr,{children:n}),l.jsx(Wa,{"aria-hidden":!0})]})});const af=E(gr)`
  padding: ${({theme:n})=>n.spaces[3]};
  border-radius: ${({theme:n})=>n.borderRadius};
  box-shadow: ${({$active:n,theme:i})=>n?i.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${Xo}
`,sf=E(af)`
  font-size: 1.1rem;

  svg path {
    fill: ${n=>n["aria-disabled"]?n.theme.colors.neutral300:n.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${n=>n["aria-disabled"]?n.theme.colors.neutral300:n.theme.colors.neutral700};
    }
  }

  ${n=>n["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`;ut(({number:n,children:i,...r},s)=>{const{activePage:c}=ws(),d=c===n;return l.jsxs(Jy,{ref:s,...r,"aria-current":d,$active:d,children:[l.jsx(pr,{children:i}),l.jsx(Z,{"aria-hidden":!0,fontWeight:d?"bold":void 0,lineHeight:"revert",variant:"pi",children:n})]})});const Jy=E(af)`
  color: ${({theme:n,$active:i})=>i?n.colors.primary700:n.colors.neutral800};
  background: ${({theme:n,$active:i})=>i?n.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  }
`;h.forwardRef((n,i)=>l.jsx(s2,{...n,asChild:!0,ref:i}));h.forwardRef((n,i)=>l.jsx(l2,{children:l.jsx(Qy,{sideOffset:4,side:"bottom",align:"start",...n,ref:i})}));const Qy=E(c2)`
  box-shadow: ${({theme:n})=>n.shadows.filterShadow};
  z-index: ${({theme:n})=>n.zIndices.popover};
  background-color: ${n=>n.theme.colors.neutral0};
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${n=>n.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${n=>n.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Be.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Be.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${n=>n.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${Be.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${Be.slideDownOut};
      }
    }
  }
`;h.forwardRef(({children:n,intersectionId:i,onReachEnd:r,...s},c)=>{const d=h.useRef(null),p=xt(d,c),g=Bt();return Ur(d,r??(()=>{}),{selectorToWatch:`#${lr(g)}`,skipWhen:!i||!r}),l.jsxs(eC,{ref:p,...s,children:[n,i&&r&&l.jsx(H,{id:lr(g),width:"100%",height:"1px"})]})});const eC=E(ei)`
  height: 20rem;
`;h.forwardRef(({size:n="M",value:i,...r},s)=>l.jsx(tC,{ref:s,$size:n,...r,children:l.jsx(nC,{style:{transform:`translate3D(-${100-(i??0)}%, 0, 0)`}})}));const tC=E(u2)`
  position: relative;
  overflow: hidden;
  width: ${n=>n.$size==="S"?"7.8rem":"10.2rem"};
  height: ${n=>n.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${n=>n.theme.colors.neutral600};
  border-radius: ${n=>n.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,nC=E(d2)`
  background-color: ${({theme:n})=>n.colors.neutral0};
  border-radius: ${({theme:n})=>n.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${n=>n.theme.motion.timings[320]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`;h.forwardRef((n,i)=>l.jsx(rC,{ref:i,...n}));const rC=E(f2)`
  display: flex;
  flex-direction: column;
  gap: ${n=>n.theme.spaces[3]};
`;h.forwardRef(({children:n,id:i,...r},s)=>{const c=Bt(i);return l.jsxs(U,{gap:2,children:[l.jsx(oC,{id:c,ref:s,...r,children:l.jsx(iC,{})}),l.jsx(Z,{tag:"label",htmlFor:c,children:n})]})});const oC=E(h2)`
  background: ${n=>n.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 50%;
  border: 1px solid ${n=>n.theme.colors.neutral300};
  position: relative;
  cursor: pointer;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${n=>n.theme.motion.timings[120]}
      ${n=>n.theme.motion.easings.easeOutQuad};
  }

  &[data-state='checked'] {
    border: 1px solid ${n=>n.theme.colors.primary600};
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: ${n=>n.theme.colors.neutral200};
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
`,iC=E(p2)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${Be.popIn} ${n=>n.theme.motion.timings[200]};
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${n=>n.theme.colors.primary600};
  }
`,aC=n=>{const i=n.querySelector('[tabindex="0"]');i&&i.focus()},lf=h.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),sC=()=>h.useContext(lf),lC=h.forwardRef(({colCount:n,rowCount:i,jumpStep:r=3,initialCol:s=0,initialRow:c=0,...d},p)=>{const g=h.useRef(null),x=h.useRef(!1),w=xt(g,p),[v,C]=h.useState(c),[$,S]=h.useState(s),R=h.useCallback(({colIndex:k,rowIndex:T})=>{S(k),C(T)},[]);h.useEffect(()=>{x.current&&aC(g.current),x.current||(x.current=!0)},[$,v]);const A=k=>{switch(k.key){case at.RIGHT:{k.preventDefault(),S(T=>T<n-1?T+1:T);break}case at.LEFT:{k.preventDefault(),S(T=>T>0?T-1:T);break}case at.UP:{k.preventDefault(),C(T=>T>0?T-1:T);break}case at.DOWN:{k.preventDefault(),C(T=>T<i-1?T+1:T);break}case at.HOME:{k.preventDefault(),k.ctrlKey&&C(0),S(0);break}case at.END:{k.preventDefault(),k.ctrlKey&&C(i-1),S(n-1);break}case at.PAGE_DOWN:{k.preventDefault(),C(T=>T+r<i?T+r:i-1);break}case at.PAGE_UP:{k.preventDefault(),C(T=>T-r>0?T-r:0);break}}},D=h.useMemo(()=>({rowIndex:v,colIndex:$,setTableValues:R}),[$,v,R]);return l.jsx(lf.Provider,{value:D,children:l.jsx("table",{role:"grid",ref:w,"aria-rowcount":i,"aria-colcount":n,onKeyDown:A,...d})})}),Mr=(n,i)=>[...n.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(c=>!c.hasAttribute("disabled")),wa=n=>n.filter(i=>i.tagName==="INPUT"?i.type!=="checkbox"&&i.type!=="radio":!1),cf=h.forwardRef(({coords:n={col:0,row:0},tag:i="td",...r},s)=>{const c=h.useRef(null),d=xt(s,c),{rowIndex:p,colIndex:g,setTableValues:x}=sC(),[w,v]=h.useState(!1),C=R=>{const A=Mr(c.current);if(A.length===0||A.length===1&&wa(A).length===0)return;if(A.length>1&&!A.find(k=>k.tagName!=="BUTTON")){R.preventDefault();const k=A.findIndex(T=>T===document.activeElement);if(R.key===at.RIGHT){const T=A[k+1];T&&(R.stopPropagation(),T.focus())}else if(R.key===at.LEFT){const T=A[k-1];T&&(R.stopPropagation(),T.focus())}return}const D=R.key===at.ENTER;if(D&&!w)v(!0);else if((R.key===at.ESCAPE||D)&&w){if(D&&document.activeElement?.tagName==="A")return;v(!1),c.current.focus()}else w&&R.stopPropagation()},$=p===n.row-1&&g===n.col-1;wn(()=>{const R=Mr(c.current);R.length===0||R.length===1&&wa(R).length!==0||R.length>1&&R.find(A=>A.tagName!=="BUTTON")?(c.current.setAttribute("tabIndex",!w&&$?"0":"-1"),R.forEach((A,D)=>{A.setAttribute("tabIndex",w?"0":"-1"),w&&D===0&&A.focus()})):R.forEach(A=>{A.setAttribute("tabIndex",$?"0":"-1")})},[w,$]);const S=h.useCallback(()=>{const R=Mr(c.current);R.length>=1&&(wa(R).length!==0||!R.find(A=>A.tagName!=="BUTTON"))&&v(!0),x({rowIndex:n.row-1,colIndex:n.col-1})},[n,x]);return wn(()=>{const R=c.current;return Mr(R).forEach(D=>{D.addEventListener("focus",S)}),()=>{Mr(R).forEach(k=>{k.removeEventListener("focus",S)})}},[S]),l.jsx(H,{role:"gridcell",tag:i,ref:d,onKeyDown:C,...r})}),cC=n=>l.jsx(cf,{...n,tag:"th"}),uC=({children:n,...i})=>{const r=h.Children.toArray(n).map(s=>h.isValidElement(s)?h.cloneElement(s,{"aria-rowindex":1}):s);return l.jsx("thead",{...i,children:r})},dC=({children:n,...i})=>{const r=h.Children.toArray(n).map((s,c)=>h.isValidElement(s)?h.cloneElement(s,{"aria-rowindex":c+2}):s);return l.jsx("tbody",{...i,children:r})},fC=({children:n,...i})=>{const r=h.Children.toArray(n).map((s,c)=>h.isValidElement(s)?h.cloneElement(s,{"aria-colindex":c+1,coords:{col:c+1,row:i["aria-rowindex"]}}):s);return l.jsx(H,{tag:"tr",...i,children:r})},hC=E(dr)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:n})=>n.colors.neutral500};
  }
`,uf=E(g2)`
  font-size: 1rem;
  path {
    fill: ${({theme:n})=>n.colors.neutral500};
  }
`,pC=E.div`
  border-radius: ${({theme:n})=>n.borderRadius};
  border: 1px solid ${({theme:n})=>n.colors.neutral150};

  &:focus-within {
    ${uf} {
      fill: ${({theme:n})=>n.colors.primary600};
    }
  }
`,gC=E(vs)`
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  padding: 0 0 0 8px;
  color: ${({theme:n})=>n.colors.neutral800};

  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${_n()}

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
`;h.forwardRef(({name:n,children:i,value:r="",onClear:s,clearLabel:c="Clear",...d},p)=>{const g=h.useRef(null),x=r.length>0,w=C=>{s(C),g.current.focus()},v=Od(p,g);return l.jsx(pC,{children:l.jsxs(cr,{name:n,children:[l.jsx(pr,{children:l.jsx(Hd,{children:i})}),l.jsx(gC,{size:"S",type:"search",ref:v,value:r,startAction:l.jsx(uf,{"aria-hidden":!0}),onKeyDown:C=>{C.stopPropagation(),C.key==="Escape"&&x&&w(C)},endAction:x?l.jsx(yn,{onClick:w,onMouseDown:C=>{C.preventDefault()},label:c,size:"XS",variant:"ghost",type:"button",children:l.jsx(hC,{})}):void 0,...d})]})})});const mC=E(H)`
  display: inline-flex;
  border: none;

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & > svg path {
    fill: ${({theme:n,...i})=>i["aria-disabled"]?n.colors.neutral600:n.colors.primary600};
  }

  &:hover {
    cursor: ${({$iconAction:n})=>n?"pointer":"initial"};
  }
`,xC=({children:n,icon:i,label:r,disabled:s=!1,onClick:c,...d})=>{const p=g=>{s||!c||c(g)};return l.jsxs(U,{inline:!0,background:s?"neutral200":"primary100",color:s?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:s?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...d,children:[l.jsx(bC,{$disabled:s,variant:"pi",fontWeight:"bold",children:n}),l.jsx(mC,{tag:"button",disabled:s,"aria-disabled":s,"aria-label":r,padding:2,onClick:p,$iconAction:!!c,children:i})]})},bC=E(Z)`
  color: inherit;
  border-right: 1px solid ${({theme:n,$disabled:i})=>i?n.colors.neutral300:n.colors.primary200};
  padding-right: ${({theme:n})=>n.spaces[2]};
`;h.forwardRef(({children:n,clearLabel:i="Clear",customizeContent:r,disabled:s,hasError:c,id:d,name:p,onChange:g,onClear:x,onCloseAutoFocus:w,onReachEnd:v,placeholder:C,required:$,size:S,startIcon:R,value:A,withTags:D,...k},T)=>{const W=h.useRef(null),[V,z]=h.useState(),[L,F]=h.useState(!1),q=ve=>{g?g(ve):z(ve)},te=ve=>()=>{const Ue=Array.isArray(A)?A.filter(Ae=>Ae!==ve):(V??[]).filter(Ae=>Ae!==ve);g?g(Ue):z(Ue)},ne=ve=>{F(ve)},_e=Bt(),re=`intersection-${lr(_e)}`;Ur(W,ve=>{v&&v(ve)},{selectorToWatch:`#${re}`,skipWhen:!L});const de=typeof A<"u"&&A!==null?A:V,je=ve=>ve&&typeof ve=="object"&&ve.value?l.jsx(xC,{tabIndex:-1,disabled:s,icon:l.jsx(dr,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:te(ve.value),children:ve.textValue},ve.value):null,{error:De,...X}=It("MultiSelect"),ae=!!De||c,Se=X.id??d,Ie=X.name??p,ge=X.required??$;let Je;return De?Je=`${Se}-error`:X.hint&&(Je=`${Se}-hint`),l.jsxs(qd,{onOpenChange:ne,disabled:s,required:ge,onValueChange:q,value:de,...k,multi:!0,children:[l.jsx(Yd,{ref:T,id:Se,name:Ie,"aria-label":k["aria-label"],"aria-describedby":Je??k["aria-describedby"],startIcon:R,hasError:ae,disabled:s,clearLabel:i,onClear:de?.length?x:void 0,withTags:!!(D&&(de?.length??!1)),size:S,children:l.jsx(Zd,{placeholder:C,textColor:de?.length?"neutral800":"neutral600",children:de?.length?D?je:r?r(de):void 0:void 0})}),l.jsx(Xd,{children:l.jsx(Jd,{position:"popper",sideOffset:4,onCloseAutoFocus:w,children:l.jsxs(Qd,{ref:W,children:[n,l.jsx(H,{id:re,width:"100%",height:"1px"})]})})})]})});const vC=h.forwardRef(({value:n,children:i,startIcon:r,...s},c)=>l.jsxs($s,{ref:c,value:n.toString(),...s,children:[r&&l.jsx(H,{tag:"span","aria-hidden":!0,children:r}),l.jsx(ef,{children:({isSelected:d,isIntermediate:p})=>l.jsx(bs,{checked:p?"indeterminate":d})}),l.jsx(Z,{children:l.jsx(tf,{children:i})})]}));h.forwardRef(({children:n,label:i,startIcon:r,values:s=[],...c},d)=>l.jsxs(iy,{ref:d,children:[l.jsxs($s,{value:s,...c,children:[r&&l.jsx(H,{tag:"span","aria-hidden":!0,children:r}),l.jsx(ef,{children:({isSelected:p,isIntermediate:g})=>l.jsx(bs,{checked:g?"indeterminate":p})}),l.jsx(Z,{children:i})]}),n]}));E(vC)`
  padding-left: ${({theme:n})=>n.spaces[7]};
`;const $C="23.2rem";h.forwardRef(({...n},i)=>l.jsx(wC,{ref:i,...n,tag:"nav"}));const wC=E(H)`
  width: ${$C};
  background: ${({theme:n})=>n.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:n})=>n.colors.neutral200};
  z-index: 1;
`;E(My)`
  width: 2.4rem;
  background-color: ${({theme:n})=>n.colors.neutral200};
`;ut(({active:n,children:i,icon:r=null,withBullet:s=!1,isSubSectionChild:c=!1,...d},p)=>l.jsxs(yC,{background:"neutral100",paddingLeft:c?9:7,paddingBottom:2,paddingTop:2,ref:p,...d,children:[l.jsxs(U,{children:[r?l.jsx(CC,{children:r}):l.jsx(La,{$active:n}),l.jsx(Z,{paddingLeft:2,children:i})]}),s&&l.jsx(U,{paddingRight:4,children:l.jsx(La,{$active:!0})})]}));const La=E.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:n,$active:i})=>i?n.colors.primary600:n.colors.neutral600};
  border-radius: 50%;
`,yC=E(gr)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:n})=>n.colors.neutral800};
  svg > * {
    fill: ${({theme:n})=>n.colors.neutral600};
  }

  &.active {
    ${({theme:n})=>oe`
        background-color: ${n.colors.primary100};
        border-right: 2px solid ${n.colors.primary600};
        color: ${n.colors.primary700};
        font-weight: 500;
      `}

    ${La} {
      background-color: ${({theme:n})=>n.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,CC=E.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;E.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;E(H)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:n})=>n.colors.neutral500};
  }
`;h.forwardRef(({visibleLabels:n,onLabel:i="On",offLabel:r="Off",onCheckedChange:s,checked:c,defaultChecked:d,disabled:p,...g},x)=>{const[w,v]=Kt({prop:c,defaultProp:d}),C=$=>{v($)};return l.jsxs(U,{gap:3,children:[l.jsx(_C,{ref:x,onCheckedChange:Nn(s,C),checked:w,disabled:p,...g,children:l.jsx(SC,{})}),n?l.jsx(IC,{"aria-hidden":!0,"data-disabled":p,"data-state":w?"checked":"unchecked",children:w?i:r}):null]})});const _C=E(m2)`
  width: 4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({theme:n})=>n.colors.danger500};

  &[data-state='checked'] {
    background-color: ${({theme:n})=>n.colors.success500};
  }

  &[data-disabled] {
    background-color: ${({theme:n})=>n.colors.neutral300};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${n=>n.theme.transitions.backgroundColor};
  }
`,SC=E(x2)`
  display: block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background-color: ${({theme:n})=>n.colors.neutral0};
  transform: translateX(4px);

  &[data-state='checked'] {
    transform: translateX(20px);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${n=>n.theme.motion.timings[120]}
      ${n=>n.theme.motion.easings.authenticMotion};
  }
`,IC=E(Z)`
  color: ${n=>n.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${n=>n.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:n})=>n.colors.neutral500};
  }
`,[RC,ys]=hr("Tabs"),TC=h.forwardRef(({disabled:n=!1,variant:i="regular",hasError:r,...s},c)=>l.jsx(RC,{disabled:n,hasError:r,variant:i,children:l.jsx(AC,{ref:c,...s})})),AC=E(e1)`
  width: 100%;
  position: relative;
`,EC=h.forwardRef((n,i)=>{const{variant:r}=ys("List");return l.jsx(jC,{ref:i,...n,$variant:r})}),jC=E(t1)`
  display: flex;
  align-items: ${n=>n.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`,kC=h.forwardRef(({children:n,disabled:i,...r},s)=>{const{disabled:c,variant:d,hasError:p}=ys("Trigger"),g=c===!0||c===r.value||i,x=p===r.value;return l.jsxs(DC,{ref:s,...r,$hasError:x,$variant:d,disabled:g,children:[l.jsx(ff,{fontWeight:"bold",variant:d==="simple"?"sigma":void 0,children:n}),d==="simple"?l.jsx(df,{}):null]})}),df=E.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,ff=E(Z)``,DC=E(Qb)`
  position: relative;
  color: ${n=>n.$hasError?n.theme.colors.danger600:n.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${n=>n.$variant==="simple"?oe`
        padding-block: ${i=>i.theme.spaces[4]};
        padding-inline: ${i=>i.theme.spaces[4]};

        & > ${ff} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${n.$hasError?n.theme.colors.danger600:n.theme.colors.primary700};

          & > ${df} {
            opacity: 1;
          }
        }
      `:oe`
        padding-block: ${i=>i.theme.spaces[3]};
        padding-inline: ${i=>i.theme.spaces[3]};
        flex: 1;
        background-color: ${i=>i.theme.colors.neutral100};
        border-bottom: solid 1px ${i=>i.theme.colors.neutral150};

        &:not([data-state='active']) + &:not([data-state='active']) {
          border-left: solid 1px ${i=>i.theme.colors.neutral150};
        }

        &[data-state='active'] {
          padding-block: ${i=>i.theme.spaces[4]};
          padding-inline: ${i=>i.theme.spaces[4]};
          color: ${n.$hasError?n.theme.colors.danger600:n.theme.colors.primary700};
          border-top-right-radius: ${i=>i.theme.borderRadius};
          border-top-left-radius: ${i=>i.theme.borderRadius};
          background-color: ${i=>i.theme.colors.neutral0};
          border-bottom: solid 1px ${i=>i.theme.colors.neutral0};
          box-shadow: ${n.theme.shadows.tableShadow};
          z-index: 1;
        }
      `}

  &[data-disabled] {
    cursor: not-allowed;
    color: ${n=>n.theme.colors.neutral400};
  }
`,OC=h.forwardRef((n,i)=>{const{variant:r}=ys("Content");return l.jsx(PC,{$variant:r,ref:i,...n})}),PC=E(n1)`
  ${n=>n.$variant==="simple"?oe``:oe`
        position: relative;
        z-index: 1;
        background-color: ${i=>i.theme.colors.neutral0};
      `}
`,Pt=Object.freeze(Object.defineProperty({__proto__:null,Content:OC,List:EC,Root:TC,Trigger:kC},Symbol.toStringTag,{value:"Module"})),MC=E(H)`
  overflow: hidden;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
`,LC=E(lC)`
  width: 100%;
  white-space: nowrap;
`,NC=E(H)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:n})=>n==="both"||n==="left"?"''":void 0};
    box-shadow: ${({theme:n})=>n.shadows.tableShadow};
    width: ${({theme:n})=>n.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:n})=>n==="both"||n==="right"?"''":void 0};
    box-shadow: ${({theme:n})=>n.shadows.tableShadow};
    width: ${({theme:n})=>n.spaces[2]};
    right: 0;
    top: 0;
  }
`,FC=E(H)`
  overflow-x: auto;
`;h.forwardRef(({footer:n,...i},r)=>{const s=h.useRef(null),[c,d]=h.useState(),p=g=>{const x=g.target.scrollWidth-g.target.clientWidth;if(g.target.scrollLeft===0){d("right");return}if(g.target.scrollLeft===x){d("left");return}g.target.scrollLeft>0&&d("both")};return h.useEffect(()=>{s.current.scrollWidth>s.current.clientWidth&&d("right")},[]),l.jsxs(MC,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[l.jsx(NC,{$overflowing:c,position:"relative",children:l.jsx(FC,{ref:s,onScroll:p,paddingLeft:6,paddingRight:6,children:l.jsx(LC,{ref:r,...i})})}),n]})});E(dC)`
  & tr:last-of-type {
    border-bottom: none;
  }
`;E(uC)`
  border-bottom: 1px solid ${({theme:n})=>n.colors.neutral150};
`;E(fC)`
  border-bottom: 1px solid ${({theme:n})=>n.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:n})=>n.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:n})=>n.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: 5.6rem;
  }
`;const hf=E(cf)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`;h.forwardRef(({children:n,action:i,...r},s)=>l.jsx(hf,{color:"neutral600",as:cC,ref:s,...r,children:l.jsxs(U,{children:[n,i]})}));h.forwardRef(({children:n,...i},r)=>l.jsx(hf,{color:"neutral800",ref:r,...i,children:n}));E(H)`
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
    fill: ${({theme:n})=>n.colors.primary600};
  }
`;E(H)`
  border-radius: 0 0 ${({theme:n})=>n.borderRadius} ${({theme:n})=>n.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;ut(({children:n,startIcon:i,endIcon:r,disabled:s=!1,loading:c=!1,type:d="button",...p},g)=>{const x=s||c;return l.jsxs(zC,{ref:g,disabled:x,"aria-disabled":x,tag:"button",type:d,gap:2,...p,children:[c?l.jsx(WC,{"aria-hidden":!0,children:l.jsx(Du,{})}):i,l.jsx(Z,{variant:"pi",children:n}),r]})});const VC=it`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,WC=E.span`
  display: flex;
  animation: ${VC} 2s infinite linear;
  will-change: transform;
`,zC=E(U)`
  border: none;
  background-color: transparent;
  color: ${n=>n.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${n=>n.theme.colors.neutral600};
  }

  ${Xo}
`,BC=h.forwardRef((n,i)=>l.jsx(vs,{ref:i,...n}));BC.displayName="TextInput";h.forwardRef(({disabled:n,hasError:i,id:r,name:s,required:c,resizable:d=!0,...p},g)=>{const{error:x,...w}=It("Textarea"),v=!!x||i,C=w.id??r,$=w.name??s,S=w.required||c;let R;return x?R=`${C}-error`:w.hint&&(R=`${C}-hint`),l.jsx(HC,{borderColor:v?"danger600":"neutral200",$hasError:v,hasRadius:!0,children:l.jsx(UC,{"aria-invalid":v,"aria-required":S,tag:"textarea",background:n?"neutral150":"neutral0",color:n?"neutral600":"neutral800",disabled:n,fontSize:2,hasRadius:!0,ref:g,lineHeight:4,padding:4,width:"100%",height:"100%",id:C,name:$,"aria-describedby":R,$resizable:d,...p})})});const HC=E(H)`
  ${_n()}
`,UC=E(H)`
  display: block;
  border: none;
  resize: ${({$resizable:n})=>n?"vertical":"none"};
  min-height: ${({minHeight:n})=>n||"10.5rem"};

  &::placeholder {
    color: ${({theme:n})=>n.colors.neutral600};
    font-size: ${({theme:n})=>n.fontSizes[2]};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;h.forwardRef(({offLabel:n,onLabel:i,disabled:r,hasError:s,required:c,id:d,name:p,checked:g,onChange:x,...w},v)=>{const[C=!1,$]=Kt({prop:g}),S=C!==null&&!C,{error:R,...A}=It("Toggle"),D=!!R||s,k=A.id??d,T=A.name??p,W=A.required||c;let V;return R?V=`${k}-error`:A.hint&&(V=`${k}-hint`),l.jsxs(GC,{position:"relative",hasRadius:!0,padding:1,background:r?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:D?"danger600":"neutral200",wrap:"wrap",cursor:r?"not-allowed":"pointer",$hasError:D,children:[l.jsx(yu,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:r&&S?"neutral200":S?"neutral0":"transparent",borderColor:r&&S?"neutral300":S?"neutral200":r?"neutral150":"neutral100",children:l.jsx(Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:r?"neutral700":S?"danger700":"neutral600",children:n})}),l.jsx(yu,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:r&&C?"neutral200":C?"neutral0":"transparent",borderColor:r&&C?"neutral300":C?"neutral200":r?"neutral150":"neutral100",children:l.jsx(Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:r?"neutral700":C?"primary600":"neutral600",children:i})}),l.jsx(KC,{...w,id:k,name:T,ref:v,onChange:z=>{$(z.currentTarget.checked),x?.(z)},type:"checkbox","aria-required":W,disabled:r,"aria-disabled":r,checked:!!C,"aria-describedby":V})]})});const GC=E(U)`
  ${_n()}
`,yu=E(U)`
  padding-block: 0.6rem;
`,KC=E.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`,mt=n=>`${y2}.${n}`,Cu=({command:n})=>{const{formatMessage:i}=Wr(),{copy:r}=C2(),s=i({id:mt("Homepage.deploy.cli.copy"),defaultMessage:"Copy"}),c=async()=>await r(n);return l.jsx(xs,{label:s,children:l.jsx(yn,{size:"XS",variant:"ghost",label:s,onClick:c,children:l.jsx(_2,{})})})},qC=()=>{const{formatMessage:n}=Wr();return l.jsx(H,{minWidth:"28em",maxWidth:"28em",paddingTop:8,children:l.jsxs(Pt.Root,{defaultValue:"yarn",children:[l.jsxs(Pt.List,{"aria-label":n({id:mt("Homepage.deploy.cli.ariaLabel"),defaultMessage:"Package manager"}),children:[l.jsx(Pt.Trigger,{value:"yarn",children:l.jsx(Z,{variant:"omega",children:"Yarn"})}),l.jsx(Pt.Trigger,{value:"npm",children:l.jsx(Z,{variant:"omega",children:"NPM"})})]}),l.jsx(Pt.Content,{value:"yarn",children:l.jsx(H,{background:"neutral100",children:l.jsx(H,{padding:4,children:l.jsxs(U,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[l.jsx(Z,{tag:"code",textColor:"neutral800",children:"yarn strapi deploy"}),l.jsx(Cu,{command:"yarn strapi deploy"})]})})})}),l.jsx(Pt.Content,{value:"npm",children:l.jsx(H,{background:"neutral100",children:l.jsx(H,{padding:4,children:l.jsxs(U,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[l.jsx(Z,{tag:"code",textColor:"neutral800",children:"npm run deploy"}),l.jsx(Cu,{command:"npm run deploy"})]})})})})]})})},YC=()=>{const{formatMessage:n}=Wr(),i=n({id:mt("Homepage.deploy.documentation"),defaultMessage:"Having trouble? Check our documentation"});return l.jsxs(H,{paddingBottom:5,children:[l.jsx(U,{direction:"column",children:l.jsx(Z,{variant:"delta",paddingBottom:5,paddingTop:2,children:n({id:mt("Homepage.deploy.title"),defaultMessage:"Choose your preferred deployment method"})})}),l.jsxs(Pt.Root,{defaultValue:"cloud",variant:"simple",children:[l.jsx(U,{direction:"column",children:l.jsxs(Pt.List,{"aria-label":n({id:mt("Homepage.deploy.ariaLabel"),defaultMessage:"Deployment options"}),children:[l.jsx(Pt.Trigger,{value:"cloud",children:l.jsx(H,{minWidth:{initial:"10em",medium:"20em"},children:l.jsxs(U,{direction:"row",gap:2,justifyContent:"center",children:[l.jsx(Z,{variant:"omega",children:"Cloud"}),l.jsx(kd,{active:!0,children:n({id:mt("Homepage.deploy.git.badge"),defaultMessage:"Recommended"})})]})})}),l.jsx(Pt.Trigger,{value:"cli",children:l.jsx(H,{minWidth:{initial:"10em",medium:"20em"},children:l.jsx(U,{justifyContent:"center",children:l.jsx(Z,{variant:"omega",children:"CLI"})})})})]})}),l.jsxs(H,{children:[l.jsx(Pt.Content,{value:"cloud",children:l.jsxs(U,{direction:"column",paddingTop:6,children:[l.jsx(H,{children:l.jsx(gr,{isExternal:!0,href:"https://cloud.strapi.io/login?utm_campaign=Strapi%20Cloud%20Plugin&utm_source=In-Product&utm_medium=CTA",children:l.jsx(S2,{height:40,width:40,fill:"buttonPrimary600"})})}),l.jsx(H,{paddingBottom:2,paddingTop:5,children:l.jsx(Z,{variant:"delta",textColor:"neutral1000",children:n({id:mt("Homepage.deploy.git.title"),defaultMessage:"Deploy to Strapi Cloud"})})}),l.jsx(Z,{variant:"omega",textColor:"neutral600",children:n({id:mt("Homepage.deploy.git.subTitle"),defaultMessage:"Deploy a GitHub or GitLab project directly within Strapi Cloud"})}),l.jsx(H,{paddingTop:8,children:l.jsx(zy,{variant:"default",endIcon:l.jsx(ku,{fill:"neutral0"}),href:"https://cloud.strapi.io/login?utm_campaign=Strapi%20Cloud%20Plugin&utm_source=In-Product&utm_medium=CTA",isExternal:!0,size:"M",children:n({id:mt("Homepage.deploy.git.button"),defaultMessage:"Deploy to Strapi Cloud"})})}),l.jsx(H,{paddingTop:5,children:l.jsx(Pa,{isExternal:!0,href:"https://docs.strapi.io/cloud/getting-started/deployment",children:i})})]})}),l.jsx(Pt.Content,{value:"cli",children:l.jsxs(U,{direction:"column",paddingTop:6,children:[l.jsx(I2,{height:40,width:40,fill:"buttonPrimary600"}),l.jsx(H,{paddingBottom:2,paddingTop:5,children:l.jsx(Z,{variant:"delta",textColor:"neutral1000",children:n({id:mt("Homepage.deploy.cli.title"),defaultMessage:"Deploy via CLI"})})}),l.jsx(Z,{variant:"omega",textColor:"neutral600",children:n({id:mt("Homepage.deploy.cli.subTitle"),defaultMessage:"Use the command line to deploy your Strapi project directly"})}),l.jsx(qC,{}),l.jsx(H,{paddingTop:5,children:l.jsx(Pa,{isExternal:!0,href:"https://docs.strapi.io/cloud/getting-started/deployment-cli",children:i})})]})})]})]})]})},ZC=()=>{const{formatMessage:n}=Wr(),i=[{id:"api",message:"2.5K API requests"},{id:"storage",message:"10 GB storage"},{id:"bandwidth",message:"10 GB asset bandwidth"},{id:"cdn",message:"Global CDN"},{id:"pushToDeploy",message:"Push to deploy"}];return l.jsx(H,{children:l.jsx(H,{paddingBottom:10,children:l.jsx(U,{direction:"column",children:l.jsx(U,{direction:"row",wrap:"wrap",children:i.map(({id:r,message:s})=>l.jsxs(U,{paddingRight:5,children:[l.jsx(R2,{fill:"primary500"}),l.jsx(Z,{variant:"omega",paddingLeft:1,children:n({id:mt(`Homepage.freePlan.${r}`),defaultMessage:s})})]},r))})})})})},XC=()=>{const{formatMessage:n}=Wr();return l.jsxs(H,{paddingLeft:6,paddingRight:6,paddingTop:5,paddingBottom:3,background:"neutral100",children:[l.jsxs(U,{direction:"column",gap:2,children:[l.jsx(Z,{variant:"alpha",children:n({id:mt("Homepage.title"),defaultMessage:"Deploy with Strapi Cloud for Free!"})}),l.jsx(U,{direction:{initial:"row",medium:"column"},children:l.jsx(Z,{variant:"epsilon",textColor:"neutral600",children:n({id:mt("Homepage.subTitle"),defaultMessage:"Start with our completely free plan - no credit card required, no time limits."})})})]}),l.jsxs(H,{padding:8,children:[l.jsx(ZC,{}),l.jsx(H,{paddingTop:8,children:l.jsx(H,{padding:6,background:"neutral0",shadow:"tableShadow",children:l.jsx(YC,{})})})]})]})},e_=()=>l.jsx("div",{children:l.jsxs(T2,{children:[l.jsx(Qc,{index:!0,element:l.jsx(XC,{})}),l.jsx(Qc,{path:"*",element:l.jsx(A2.Error,{})})]})});export{e_ as App};
