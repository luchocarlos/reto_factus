import{bh as Q,mv as We,bP as Ke,h7 as de,mw as ve,mx as Te,my as Xe,mz as Ye,mA as ze,mB as qe,mC as Je,eG as Qe,ha as Me,mD as Ze,mE as Ue,mF as es,mG as ss,mH as ts,mI as ns,mJ as me,mK as N,mL as os,mM as is,mN as we,l as v,ak as j,j as o,ay as O,a as _,cm as L,am as E,r as A,mO as k,hS as rs,mP as as,bt as re,mg as ls,e3 as F,e4 as cs,e5 as ds,bL as ps,mQ as us,dd as _e,mR as pe,mS as hs,mT as gs,me as z,bJ as fe,eH as H}from"./strapi-BHipHB00.js";import{c as ie}from"./cloneDeep-j0_M_w6S.js";import{a as ms,_ as fs}from"./_baseEach-D_-91BSR.js";var xs=Object.prototype,bs=xs.hasOwnProperty;function Cs(e,s){return e!=null&&bs.call(e,s)}var ys=Cs,js=ys,As=We;function ks(e,s){return e!=null&&As(e,s,js)}var $s=ks;const ee=Q($s);var Os=qe,Ss=Ye,vs=Xe,Ts=de,Ms=Ke,ws=ve,_s=ze,Ps=Te,Es="[object Map]",Ls="[object Set]",Rs=Object.prototype,Ds=Rs.hasOwnProperty;function Fs(e){if(e==null)return!0;if(Ms(e)&&(Ts(e)||typeof e=="string"||typeof e.splice=="function"||ws(e)||Ps(e)||vs(e)))return!e.length;var s=Ss(e);if(s==Es||s==Ls)return!e.size;if(_s(e))return!Os(e).length;for(var n in e)if(Ds.call(e,n))return!1;return!0}var Ns=Fs;const J=Q(Ns);var Is=Je;function Bs(e,s,n){return e==null?e:Is(e,s,n)}var Hs=Bs;const R=Q(Hs),[Gs,Vs]=Qe("PermissionsDataManager"),Y=()=>Vs("usePermissionsDataManager");var Ws=ts,Ks=es,Xs=ms,Ys=Me,zs=ss,qs=de,Js=ve,Qs=Ue,Zs=Ze,Us=Te;function et(e,s,n){var t=qs(e),i=t||Js(e)||Us(e);if(s=Ys(s),n==null){var a=e&&e.constructor;i?n=t?new a:[]:Zs(e)?n=Qs(a)?Ks(zs(e)):{}:n={}}return(i?Ws:Xs)(e,function(l,r,c){return s(n,l,r,c)}),n}var st=et;const tt=Q(st);function xe(e,s){function n(t,i){return tt(t,(a,l,r)=>(ns(l,i[r])||(a[r]=me(l)&&me(i[r])?n(l,i[r]):l),a))}return n(e,s)}const Pe=e=>Array.isArray(e)?e.reduce((s,n)=>(Array.isArray(n)?s.push(...Pe(n)):s.push(n),s),[]):[],G=e=>N(e)?Pe(Object.values(e).map(s=>N(s)?G(s):s)):[],Ee=(e,s,n)=>e.find(t=>t.action===s&&t.subject===n),nt=e=>{const s=be(e.plugins),n=be(e.settings),t=Ce(e.collectionTypes),i=Ce(e.singleTypes);return[...s,...n,...t,...i]},be=e=>Object.values(e).reduce((s,n)=>{const t=Object.values(n).reduce((i,a)=>{const l=Object.entries(a).reduce((r,[c,{conditions:d,properties:{enabled:p}}])=>(p&&r.push({action:c,subject:null,conditions:ae(d),properties:{}}),r),[]);return[...i,...l]},[]);return[...s,...t]},[]),Ce=e=>Object.entries(e).reduce((n,t)=>{const[i,a]=t,l=Object.entries(a).reduce((r,c)=>{const[d,p]=c;if(!G(p).some(h=>h))return r;if(!p?.properties?.enabled){const h=Object.entries(p.properties).reduce((b,f)=>{const[u,m]=f;return b.properties[u]=Le(m),b},{action:d,subject:i,conditions:ae(p.conditions),properties:{}});return[...r,h]}return p.properties.enabled&&r.push({action:d,subject:i,properties:{},conditions:ae(p.conditions)}),r},[]);return[...n,...l]},[]),Le=(e,s="")=>Object.entries(e).reduce((n,t)=>{const[i,a]=t;return N(a)?[...n,...Le(a,`${s}${i}.`)]:(a&&!N(a)&&n.push(`${s}${i}`),n)},[]),ae=e=>Object.entries(e).filter(([,s])=>s).map(([s])=>s),Re=(e,s=[])=>e.reduce((n,t)=>(n[t.id]=s.indexOf(t.id)!==-1,n),{}),ye=(e,s,n=[])=>e.reduce((t,{categoryId:i,childrenForm:a})=>{const l=a.reduce((r,c)=>(r[c.subCategoryId]=c.actions.reduce((d,p)=>{const g=Ee(n,p.action,null);return d[p.action]={properties:{enabled:g!==void 0},conditions:Re(s,g?.conditions??[])},d},{}),r),{});return t[i]=l,t},{}),ot=(e,s,n)=>{const t=({children:i=[]},a,l="")=>i.reduce((r,c)=>{if(c.children)return{...r,[c.value]:t(c,a,`${l}${c.value}.`)};const d=a.indexOf(`${l}${c.value}`)!==-1;return r[c.value]=d,r},{});return e.reduce((i,a)=>{const l=s.properties.find(({value:r})=>r===a);if(l){const r=n?.properties[l.value]??[],c=t(l,r);i.properties[a]=c}return i},{properties:{}})},je=({subjects:e,actions:s=[]},n,t=[])=>s.reduce((i,a)=>{const l=a.subjects.reduce((c,d)=>{const p=e.find(({uid:g})=>g===d)||null;return p&&(c[d]=p),c},{});if(J(l))return i;const r=Object.keys(l).reduce((c,d)=>{const{actionId:p,applyToProperties:g}=a,f=l[d].properties.map(({value:x})=>x).every(x=>(g||[]).indexOf(x)===-1),u=Ee(t,p,d),m=Re(n,u?.conditions??[]);if(c[d]||(c[d]={}),J(g)||f)return c[d][p]={properties:{enabled:u!==void 0},conditions:m},c;const C=ot(g,l[d],u);return c[d][p]={...C,conditions:m},c},{});return os(i,r)},{});function it(e,s,n,t){for(var i=-1,a=e==null?0:e.length;++i<a;){var l=e[i];s(t,l,n(l),e)}return t}var rt=it,at=fs;function lt(e,s,n,t){return at(e,function(i,a,l){s(t,i,n(i),l)}),t}var ct=lt,dt=rt,pt=ct,ut=Me,ht=de;function gt(e,s){return function(n,t){var i=ht(n)?dt:pt,a=s?s():{};return i(n,e,ut(t),a)}}var mt=gt,ft=is,xt=mt,bt=Object.prototype,Ct=bt.hasOwnProperty,yt=xt(function(e,s,n){Ct.call(e,n)?e[n].push(s):ft(e,n,[s])}),jt=yt;const le=Q(jt),Ae=(e,s)=>Object.entries(le(e,s)).map(([n,t])=>({category:n,categoryId:n.split(" ").join("-"),childrenForm:Object.entries(le(t,"subCategory")).map(([i,a])=>({subCategoryName:i,subCategoryId:i.split(" ").join("-"),actions:a}))})),U=e=>Object.keys(e).reduce((s,n)=>{const t=e[n];if(N(t)&&!ee(t,"conditions"))return{...s,[n]:U(t)};if(N(t)&&ee(t,"conditions")&&!G(we(t,"conditions")).some(a=>a)){const a=Object.keys(t.conditions).reduce((l,r)=>(l[r]=!1,l),{});return{...s,[n]:{...t,conditions:a}}}return s[n]=t,s},{}),q=(e,s,n=!1)=>Object.keys(e).reduce((t,i)=>{const a=e[i];return i==="conditions"&&!n?(t[i]=a,t):N(a)?{...t,[i]:q(a,s,i==="fields")}:(t[i]=s,t)},{}),D="12rem",ue="20rem",te="5.3rem",he=e=>e?Object.entries(e).reduce((s,[n,t])=>(n!=="conditions"&&(s[n]=t),s),{}):null,V=e=>{const s=he(e),n=G(s);if(!n.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const t=n.every(a=>a),i=n.some(a=>a)&&!t;return{hasAllActionsSelected:t,hasSomeActionsSelected:i}},De=v(j)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({$isCollapsable:e})=>e&&"cursor: pointer;"}
`,ge=v.div`
  width: ${D};
`,Fe=()=>o.jsx(O,{color:"danger700",paddingLeft:1,children:"*"}),Ne=({checkboxName:e="",children:s,isActive:n=!1,isCollapsable:t=!1,isFormDisabled:i=!1,label:a,onChange:l,onClick:r,someChecked:c=!1,value:d})=>{const{formatMessage:p}=_(),g={title:a,alignItems:"center",$isCollapsable:t};return t&&Object.assign(g,{onClick:r,"aria-expanded":n,onKeyDown({key:h}){(h==="Enter"||h===" ")&&r()},tabIndex:0,role:"button"}),o.jsxs(j,{alignItems:"center",paddingLeft:6,width:ue,shrink:0,children:[o.jsx(O,{paddingRight:2,children:o.jsx(L,{name:e,"aria-label":p({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:i,onCheckedChange:h=>l({target:{name:e,value:!!h}}),checked:c?"indeterminate":d})}),o.jsxs(De,{...g,children:[o.jsx(E,{ellipsis:!0,children:a}),s]})]})},At=({availableActions:e=[],childrenForm:s=[],isFormDisabled:n,label:t,pathToData:i,propertyName:a})=>{const l=A.useMemo(()=>e.map(r=>{const c=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(a)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:c}}),[e,a]);return o.jsxs(j,{display:"inline-flex",direction:"column",alignItems:"stretch",minWidth:0,children:[o.jsx(Pt,{label:t,headers:l}),o.jsx(O,{children:s.map(({children:r,label:c,value:d,required:p},g)=>o.jsx(kt,{childrenForm:r,label:c,isFormDisabled:n,name:d,required:p,propertyActions:l,pathToData:i,propertyName:a,isOdd:g%2===0},d))})]})},kt=({childrenForm:e=[],label:s,isFormDisabled:n=!1,name:t,required:i=!1,pathToData:a,propertyActions:l,propertyName:r,isOdd:c=!1})=>{const{formatMessage:d}=_(),[p,g]=A.useState(null),{modifiedData:h,onChangeCollectionTypeLeftActionRowCheckbox:b,onChangeParentCheckbox:f,onChangeSimpleCheckbox:u}=Y(),m=p===t,C=A.useMemo(()=>Array.isArray(e)?e:[],[e]),x=C.length>0,y=A.useCallback(()=>{x&&g($=>$===t?null:t)},[x,t]),S=({target:{value:$}})=>{b(a,r,t,$)},{hasAllActionsSelected:M,hasSomeActionsSelected:w}=A.useMemo(()=>$t(l,h,a,r,t),[l,h,a,r,t]);return o.jsxs(o.Fragment,{children:[o.jsx(Ot,{alignItems:"center",$isCollapsable:x,$isActive:m,background:c?"neutral100":"neutral0",children:o.jsxs(j,{children:[o.jsxs(Ne,{onChange:S,onClick:y,isCollapsable:x,isFormDisabled:n,label:s,someChecked:w,value:M,isActive:m,children:[i&&o.jsx(Fe,{}),o.jsx(Z,{$isActive:m})]}),o.jsx(j,{children:l.map(({label:$,isActionRelatedToCurrentProperty:P,actionId:W})=>{if(!P)return o.jsx(ge,{},$);const T=[...a.split(".."),W,"properties",r,t];if(!x){const B=k(h,T,!1);return o.jsx(j,{width:D,position:"relative",justifyContent:"center",alignItems:"center",children:o.jsx(L,{disabled:n,name:T.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${$}`}),onCheckedChange:Ve=>{u({target:{name:T.join(".."),value:!!Ve}})},checked:B})},W)}const K=k(h,T,{}),{hasAllActionsSelected:I,hasSomeActionsSelected:oe}=V(K);return o.jsx(j,{width:D,position:"relative",justifyContent:"center",alignItems:"center",children:o.jsx(L,{disabled:n,name:T.join(".."),onCheckedChange:B=>{f({target:{name:T.join(".."),value:!!B}})},"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${$}`}),checked:oe?"indeterminate":I})},$)})})]})}),m&&o.jsx(Ie,{childrenForm:C,isFormDisabled:n,parentName:t,pathToDataFromActionRow:a,propertyName:r,propertyActions:l,recursiveLevel:0})]})},$t=(e,s,n,t,i)=>{const l=e.reduce((r,c)=>(c.isActionRelatedToCurrentProperty&&r.push(c.actionId),r),[]).reduce((r,c)=>{const d=k(s,[...n.split(".."),c,"properties",t,i],!1);return r[c]=d,r},{});return V(l)},Ot=v(j)`
  height: ${te};
  flex: 1;

  &:hover {
    ${({$isCollapsable:e,theme:s})=>e&&se(s)}
  }

  ${({$isCollapsable:e})=>e&&`
      ${Z} {
        display: flex;
      }
  `}
  ${({$isActive:e,theme:s})=>e&&se(s)};
`,Z=v(as)`
  display: none;

  svg {
    width: 1.4rem;
  }

  path {
    fill: ${({theme:e})=>e.colors.neutral200};
  }

  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,Ie=({childrenForm:e=[],isFormDisabled:s,recursiveLevel:n,pathToDataFromActionRow:t,propertyActions:i,parentName:a,propertyName:l})=>{const{formatMessage:r}=_(),{modifiedData:c,onChangeParentCheckbox:d,onChangeSimpleCheckbox:p}=Y(),[g,h]=A.useState(null),b=u=>{h(m=>m===u?null:u)},f=A.useMemo(()=>g?e.find(({value:u})=>u===g):null,[g,e]);return o.jsxs(O,{paddingLeft:"3.2rem",children:[o.jsx(Mt,{}),e.map(({label:u,value:m,required:C,children:x},y)=>{const S=y+1<e.length,M=Array.isArray(x),w=g===m;return o.jsxs(St,{$isVisible:S,children:[o.jsxs(j,{height:te,children:[o.jsx(wt,{children:o.jsx(_t,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",$color:"primary200",children:o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),o.jsxs(j,{style:{flex:1},children:[o.jsx(vt,{$level:n,$isActive:w,$isCollapsable:M,children:o.jsxs(De,{alignItems:"center",$isCollapsable:M,...M&&{onClick:()=>b(m),"aria-expanded":w,onKeyDown:({key:$})=>($==="Enter"||$===" ")&&b(m),tabIndex:0,role:"button"},title:u,children:[o.jsx(Tt,{ellipsis:!0,children:u}),C&&o.jsx(Fe,{}),o.jsx(Z,{$isActive:w})]})}),o.jsx(j,{style:{flex:1},children:i.map(({actionId:$,label:P,isActionRelatedToCurrentProperty:W})=>{if(!W)return o.jsx(ge,{},$);const T=[...t.split(".."),$,"properties",l,...a.split(".."),m],K=k(c,T,!1);if(!x)return o.jsx(j,{position:"relative",width:D,justifyContent:"center",alignItems:"center",children:o.jsx(L,{disabled:s,name:T.join(".."),"aria-label":r({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${u} ${P}`}),onCheckedChange:B=>{p({target:{name:T.join(".."),value:!!B}})},checked:K})},P);const{hasAllActionsSelected:I,hasSomeActionsSelected:oe}=V(K);return o.jsx(j,{position:"relative",width:D,justifyContent:"center",alignItems:"center",children:o.jsx(L,{disabled:s,name:T.join(".."),"aria-label":r({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${u} ${P}`}),onCheckedChange:B=>{d({target:{name:T.join(".."),value:!!B}})},checked:oe?"indeterminate":I},P)},P)})})]})]}),f&&w&&o.jsx(O,{paddingBottom:2,children:o.jsx(Ie,{isFormDisabled:s,parentName:`${a}..${m}`,pathToDataFromActionRow:t,propertyActions:i,propertyName:l,recursiveLevel:n+1,childrenForm:f.children})})]},m)})]})},St=v(O)`
  border-left: ${({$isVisible:e,theme:s})=>e?`4px solid ${s.colors.primary200}`:"4px solid transparent"};
`,vt=v(j)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({$level:e})=>145-e*36}px;

  &:hover {
    ${({$isCollapsable:e,theme:s})=>e&&se(s)}
  }

  ${({$isCollapsable:e})=>e&&`
      ${Z} {
        display: flex;
      }
  `}
  ${({$isActive:e,theme:s})=>e&&se(s)};
`,Tt=v(E)``,Mt=v.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: 0.4rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,wt=v(O)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: 0.4rem;
    height: 1.2rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,_t=v.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,$color:s})=>e.colors[s]};
  }
`,Pt=({headers:e=[],label:s})=>{const{formatMessage:n}=_();return o.jsxs(j,{children:[o.jsx(j,{width:ue,height:te,shrink:0,alignItems:"center",paddingLeft:6,children:o.jsx(E,{variant:"sigma",textColor:"neutral500",children:n({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:s})})}),e.map(t=>t.isActionRelatedToCurrentProperty?o.jsx(j,{width:D,shrink:0,justifyContent:"center",children:o.jsx(E,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${t.label.toLowerCase()}`,defaultMessage:t.label})})},t.label):o.jsx(j,{width:D,shrink:0},t.label))]})},se=e=>rs`
  color: ${e.colors.primary600};
  font-weight: ${e.fontWeights.bold};

  ${Z} {
    path {
      fill: ${e.colors.primary600};
    }
  }
`,Et=A.forwardRef(({onClick:e,className:s,hasConditions:n=!1,variant:t="tertiary"},i)=>{const{formatMessage:a}=_();return o.jsx(Lt,{$hasConditions:n,className:s,children:o.jsx(re,{variant:t,startIcon:o.jsx(ls,{}),onClick:e,ref:i,type:"button",children:a({id:"global.settings",defaultMessage:"Settings"})})})}),Lt=v(O)`
  ${({$hasConditions:e,theme:s})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: 2rem;
      background: ${s.colors.primary600};
    }
  `}
`,ne=v(Et)``,Be=({actions:e=[],headerBreadCrumbs:s=[],isFormDisabled:n,onClose:t})=>{const{formatMessage:i}=_(),{availableConditions:a,modifiedData:l,onChangeConditions:r}=Y(),c=A.useMemo(()=>Object.entries(le(a,"category")),[a]),d=e.filter(({isDisplayed:u,hasSomeActionsSelected:m,hasAllActionsSelected:C})=>u&&!!(m||C)),[p,g]=A.useState(ke(d,l,c)),h=(u,m)=>{g(_e(C=>{C[u]||(C[u]={}),C[u].default||(C[u].default={}),C[u].default=m}))},b=()=>{const u=Object.entries(p).reduce((m,C)=>{const[x,y]=C,S=Object.values(y).reduce((M,w)=>({...M,...w}),{});return m[x]=S,m},{});r(u),t&&t()},f=()=>{g(ke(d,l,c)),t&&t()};return o.jsxs(F.Content,{children:[o.jsx(F.Header,{children:o.jsx(cs,{id:"condition-modal-breadcrumbs",label:s.join(", "),children:s.map((u,m,C)=>o.jsx(ds,{isCurrent:m===C.length-1,children:ps(i({id:u,defaultMessage:u}))},u))})}),o.jsxs(F.Body,{children:[d.length===0&&o.jsx(E,{children:i({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),o.jsx("ul",{children:d.map(({actionId:u,label:m,pathToConditionsObject:C},x)=>{const y=C.join("..");return o.jsx(Rt,{arrayOfOptionsGroupedByCategory:c,label:m,isFormDisabled:n,isGrey:x%2===0,name:y,onChange:h,value:k(p,y,{})},u)})})]}),o.jsxs(F.Footer,{children:[o.jsx(re,{variant:"tertiary",onClick:()=>f(),children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),o.jsx(re,{onClick:b,children:i({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})]})]})},ke=(e,s,n)=>e.reduce((t,i)=>{const a=k(s,[...i.pathToConditionsObject,"conditions"],{}),l=n.reduce((r,c)=>{const[d,p]=c,g=p.reduce((h,b)=>(h[b.id]=k(a,b.id,!1),h),{});return r[d]=g,r},{});return t[i.pathToConditionsObject.join("..")]=l,t},{}),Rt=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:s=!1,isGrey:n=!1,label:t,name:i,onChange:a,value:l})=>{const{formatMessage:r}=_(),c=d=>{a&&a(i,Nt(e,d))};return o.jsxs(j,{tag:"li",background:n?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,justifyContent:"space-evenly",children:[o.jsxs(j,{style:{width:180},children:[o.jsxs(E,{variant:"sigma",textColor:"neutral600",children:[r({id:"Settings.permissions.conditions.can",defaultMessage:"Can"})," "]}),o.jsx(E,{variant:"sigma",title:t,textColor:"primary600",ellipsis:!0,children:r({id:`Settings.roles.form.permissions.${t.toLowerCase()}`,defaultMessage:t})}),o.jsxs(E,{variant:"sigma",textColor:"neutral600",children:[" ",r({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),o.jsx(O,{style:{maxWidth:430,width:"100%"},children:o.jsx(us,{id:i,customizeContent:(d=[])=>`${d.length} currently selected`,onChange:c,value:Dt(l),options:Ft(e),disabled:s})})]})},Dt=e=>Object.values(e).map(s=>Object.entries(s).filter(([,n])=>n).map(([n])=>n)).flat(),Ft=e=>e.reduce((s,[n,t])=>(s.push({label:pe(n),children:t.map(i=>({label:i.displayName,value:i.id}))}),s),[]),Nt=(e,s)=>e.map(([,n])=>n).flat().reduce((n,t)=>({[t.id]:s.includes(t.id),...n}),{}),It=({actions:e=[],isFormDisabled:s,pathToData:n,subjects:t=[]})=>{const[i,a]=A.useState(null),l=r=>()=>{a(i===r?null:r)};return o.jsx(o.Fragment,{children:t.map(({uid:r,label:c,properties:d},p)=>{const g=i===r,h=e.map(b=>({...b,isDisplayed:Array.isArray(b.subjects)&&b.subjects.indexOf(r)!==-1}));return o.jsxs(j,{direction:"column",display:"inline-flex",alignItems:"stretch",minWidth:"100%",borderColor:g?"primary600":void 0,children:[o.jsx(Bt,{availableActions:h,isActive:g,isGrey:p%2===0,isFormDisabled:s,label:c,onClickToggle:l(r),pathToData:[n,r].join("..")}),g&&d.map(({label:b,value:f,children:u})=>o.jsx(At,{availableActions:h,childrenForm:u,isFormDisabled:s,label:b,pathToData:[n,r].join(".."),propertyName:f},f))]},r)})})},Bt=({availableActions:e=[],isActive:s=!1,isGrey:n=!1,isFormDisabled:t=!1,label:i,onClickToggle:a,pathToData:l})=>{const{formatMessage:r}=_(),{modifiedData:c,onChangeParentCheckbox:d,onChangeSimpleCheckbox:p}=Y(),[g,h]=A.useState(!1),b=k(c,l.split(".."),{}),f=A.useMemo(()=>Object.keys(b).reduce((y,S)=>(y[S]=we(b[S],"conditions"),y),{}),[b]),{hasAllActionsSelected:u,hasSomeActionsSelected:m}=V(f),C=A.useMemo(()=>Ht(e,c,l),[e,c,l]),x=C.some(y=>y.hasConditions);return o.jsxs(Gt,{$isActive:s,children:[o.jsxs(He,{height:te,flex:1,alignItems:"center",background:n?"neutral100":"neutral0",children:[o.jsx(Ne,{isCollapsable:!0,isFormDisabled:t,label:pe(i),checkboxName:l,onChange:d,onClick:a,someChecked:m,value:u,isActive:s,children:o.jsx(Ge,{paddingLeft:2,children:s?o.jsx(hs,{}):o.jsx(gs,{})})}),o.jsx(j,{style:{flex:1},children:C.map(({actionId:y,hasSomeActionsSelected:S,isDisplayed:M,...w})=>{if(!M)return o.jsx(ge,{},y);const{hasConditions:$,hasAllActionsSelected:P,isParentCheckbox:W,checkboxName:T,label:K}=w;return W?o.jsx($e,{justifyContent:"center",alignItems:"center",children:o.jsxs(O,{position:"relative",zIndex:1,children:[$&&o.jsx(O,{tag:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),o.jsx(L,{disabled:t,name:T,"aria-label":r({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${K} ${i}`}),onCheckedChange:I=>{d({target:{name:T,value:!!I}})},checked:S?"indeterminate":P})]})},y):o.jsxs($e,{justifyContent:"center",alignItems:"center",children:[$&&o.jsx(O,{tag:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),o.jsx(L,{disabled:t,name:T,onCheckedChange:I=>{p({target:{name:T,value:!!I}})},checked:$?"indeterminate":P})]},y)})})]}),o.jsx(O,{bottom:"10px",right:"9px",position:"absolute",children:o.jsxs(F.Root,{open:g,onOpenChange:()=>{h(y=>!y)},children:[o.jsx(F.Trigger,{children:o.jsx(ne,{hasConditions:x})}),o.jsx(Be,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:C,isFormDisabled:t,onClose:()=>{h(!1)}})]})})]})},Ht=(e,s,n)=>e.map(({actionId:t,isDisplayed:i,applyToProperties:a,label:l})=>{if(!i)return{actionId:t,hasSomeActionsSelected:!1,isDisplayed:i};const r=[...n.split(".."),t],c=J(a)?[...r,"properties","enabled"]:r,d=k(s,[...r,"conditions"],null),p={actionId:t,checkboxName:c.join(".."),hasConditions:G(d).some(f=>f),isDisplayed:i,label:l,pathToConditionsObject:r};if(J(a)){const f=k(s,c,!1);return{...p,hasAllActionsSelected:f,hasSomeActionsSelected:f,isParentCheckbox:!1}}const g=k(s,c,null),{hasAllActionsSelected:h,hasSomeActionsSelected:b}=V(g);return{...p,hasAllActionsSelected:h,hasSomeActionsSelected:b,isParentCheckbox:!0}}),ce=(e,s)=>`
  ${He} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${s?"2px 2px 0 0":"2px"};
    font-weight: ${e.fontWeights.bold};
  }

  ${Ge} {
    display: flex;
  }
  ${ne} {
    display: block;
  }

  &:focus-within {
    ${()=>ce(e,s)}
  }
`,He=v(j)`
  border: 1px solid transparent;
`,Gt=v.div`
  display: inline-flex;
  min-width: 100%;
  position: relative;

  ${ne} {
    display: none;
  }

  ${({$isActive:e,theme:s})=>e&&ce(s,e)}

  &:hover {
    ${({theme:e,$isActive:s})=>ce(e,s)}
  }
`,$e=v(j)`
  width: ${D};
  position: relative;
`,Ge=v(O)`
  display: none;

  svg {
    width: 1.4rem;
  }

  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Vt=({actions:e=[],isFormDisabled:s,kind:n})=>{const{formatMessage:t}=_(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:a}=Y(),l=e.filter(({subjects:c})=>c&&c.length),r=A.useMemo(()=>{const c=l.map(({actionId:h})=>h),d=i[n],p=c.reduce((h,b)=>(Object.keys(d).forEach(f=>{const u=k(d,[f,b]),m={[f]:he(u)};h[b]?h[b]={...h[b],...m}:h[b]=m}),h),{});return Object.keys(p).reduce((h,b)=>(h[b]=V(p[b]),h),{})},[i,l,n]);return o.jsx(O,{paddingBottom:4,paddingTop:6,style:{paddingLeft:ue},children:o.jsx(j,{gap:0,children:l.map(({label:c,actionId:d})=>o.jsxs(j,{shrink:0,width:D,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[o.jsx(E,{variant:"sigma",textColor:"neutral500",children:t({id:`Settings.roles.form.permissions.${c.toLowerCase()}`,defaultMessage:c})}),o.jsx(L,{disabled:s,onCheckedChange:p=>{a(n,d,!!p)},name:d,"aria-label":t({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:t({id:`Settings.roles.form.permissions.${c.toLowerCase()}`,defaultMessage:c})}),checked:k(r,[d,"hasSomeActionsSelected"],!1)?"indeterminate":k(r,[d,"hasAllActionsSelected"],!1)})]},d))})})},Oe=({isFormDisabled:e,kind:s,layout:{actions:n,subjects:t}})=>{const i=[...t].sort((a,l)=>a.label.localeCompare(l.label));return o.jsxs(O,{background:"neutral0",children:[o.jsx(Vt,{actions:n,kind:s,isFormDisabled:e}),o.jsx(It,{actions:n,isFormDisabled:e,pathToData:s,subjects:i})]})},Se=({layout:e,...s})=>o.jsx(O,{padding:6,background:"neutral0",children:o.jsx(z.Root,{size:"M",children:e.map(({category:n,categoryId:t,childrenForm:i},a)=>o.jsx(Wt,{childrenForm:i,variant:a%2===1?"primary":"secondary",name:n,pathToData:[s.kind,t],...s},n))})}),Wt=({childrenForm:e,kind:s,name:n,isFormDisabled:t=!1,variant:i,pathToData:a})=>{const{formatMessage:l}=_(),r=n.split("::").pop()??"",c=r==="upload"?"Media Library":pe(r.replace(/-/g," "));return o.jsxs(z.Item,{value:n,children:[o.jsx(z.Header,{variant:i,children:o.jsx(z.Trigger,{caretPosition:"right",description:`${l({id:"Settings.permissions.category",defaultMessage:r},{category:r})} ${s==="plugins"?"plugin":s}`,children:c})}),o.jsx(z.Content,{children:o.jsx(O,{padding:6,children:e.map(({actions:d,subCategoryName:p,subCategoryId:g})=>o.jsx(Kt,{actions:d,categoryName:r,isFormDisabled:t,subCategoryName:p,pathToData:[...a,g]},p))})})]})},Kt=({actions:e=[],categoryName:s,isFormDisabled:n,subCategoryName:t,pathToData:i})=>{const{modifiedData:a,onChangeParentCheckbox:l,onChangeSimpleCheckbox:r}=Y(),[c,d]=A.useState(!1),{formatMessage:p}=_(),g=k(a,i,{}),h=A.useMemo(()=>Object.keys(g).reduce((x,y)=>(x[y]=he(g[y]),x),{}),[g]),{hasAllActionsSelected:b,hasSomeActionsSelected:f}=V(h),u=A.useMemo(()=>e.map(x=>{const y=[...i,x.action,"properties","enabled"],S=k(a,y,!1),M=k(a,[...i,x.action,"conditions"],{}),w=G(M).some($=>$);return{...x,isDisplayed:S,checkboxName:y.join(".."),hasSomeActionsSelected:S,value:S,hasConditions:w,label:x.displayName,actionId:x.action,pathToConditionsObject:[...i,x.action]}}),[e,a,i]),m=k(a,[...i],{}),C=G(Object.entries(m).reduce((x,y)=>{const[S,{conditions:M}]=y;return x[S]=M,x},{})).some(x=>x);return o.jsx(o.Fragment,{children:o.jsxs(O,{children:[o.jsxs(j,{justifyContent:"space-between",alignItems:"center",children:[o.jsx(O,{paddingRight:4,children:o.jsx(E,{variant:"sigma",textColor:"neutral600",children:t})}),o.jsx(Xt,{flex:1}),o.jsx(O,{paddingLeft:4,children:o.jsx(L,{name:i.join(".."),disabled:n,onCheckedChange:x=>{l({target:{name:i.join(".."),value:!!x}})},checked:f?"indeterminate":b,children:p({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),o.jsxs(j,{paddingTop:6,paddingBottom:6,children:[o.jsx(fe.Root,{gap:2,style:{flex:1},children:u.map(({checkboxName:x,value:y,action:S,displayName:M,hasConditions:w})=>o.jsx(fe.Item,{col:4,m:6,xs:12,direction:"column",alignItems:"start",children:o.jsx(Yt,{$disabled:n,$hasConditions:w,children:o.jsx(L,{name:x,disabled:n,onCheckedChange:$=>{r({target:{name:x,value:!!$}})},checked:y,children:M})})},S))}),o.jsxs(F.Root,{open:c,onOpenChange:()=>{d(x=>!x)},children:[o.jsx(F.Trigger,{children:o.jsx(ne,{hasConditions:C})}),o.jsx(Be,{headerBreadCrumbs:[s,t],actions:u,isFormDisabled:n,onClose:()=>{d(!1)}})]})]})]})})},Xt=v(O)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Yt=v.div`
  position: relative;
  word-break: keep-all;
  ${({$hasConditions:e,$disabled:s,theme:n})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -0.4rem;
      left: -0.8rem;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 2rem;
      background: ${s?n.colors.neutral100:n.colors.primary600};
    }
  `}
`,X=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],en=A.forwardRef(({layout:e,isFormDisabled:s,permissions:n=[]},t)=>{const[{initialData:i,layouts:a,modifiedData:l},r]=A.useReducer(qt,zt,()=>Jt(e,n)),{formatMessage:c}=_();A.useImperativeHandle(t,()=>({getPermissions(){const f=xe(i.collectionTypes,l.collectionTypes),u=xe(i.singleTypes,l.singleTypes),m={...f,...u};let C;return J(m)?C=!1:C=Object.values(m).some((x={})=>Object.values(x).some(y=>ee(y,"conditions"))),{permissionsToSend:nt(l),didUpdateConditions:C}},resetForm(){r({type:"RESET_FORM"})},setFormAfterSubmit(){r({type:"SET_FORM_AFTER_SUBMIT"})}}));const d=(f,u,m,C)=>{r({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:f,propertyName:u,rowName:m,value:C})},p=(f,u,m)=>{r({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:f,actionId:u,value:m})},g=f=>{r({type:"ON_CHANGE_CONDITIONS",conditions:f})},h=A.useCallback(({target:{name:f,value:u}})=>{r({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:f,value:u})},[]),b=A.useCallback(({target:{name:f,value:u}})=>{r({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:f,value:u})},[]);return o.jsx(Gs,{availableConditions:e.conditions,modifiedData:l,onChangeConditions:g,onChangeSimpleCheckbox:h,onChangeParentCheckbox:b,onChangeCollectionTypeLeftActionRowCheckbox:d,onChangeCollectionTypeGlobalActionCheckbox:p,children:o.jsxs(H.Root,{defaultValue:X[0].id,children:[o.jsx(H.List,{"aria-label":c({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:X.map(f=>o.jsx(H.Trigger,{value:f.id,children:c({id:f.labelId,defaultMessage:f.defaultMessage})},f.id))}),o.jsx(H.Content,{value:X[0].id,children:o.jsx(Oe,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:s})}),o.jsx(H.Content,{value:X[1].id,children:o.jsx(Oe,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:s})}),o.jsx(H.Content,{value:X[2].id,children:o.jsx(Se,{layout:a.plugins,kind:"plugins",isFormDisabled:s})}),o.jsx(H.Content,{value:X[3].id,children:o.jsx(Se,{layout:a.settings,kind:"settings",isFormDisabled:s})})]})})}),zt={initialData:{},modifiedData:{},layouts:{}},qt=(e,s)=>_e(e,n=>{switch(s.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:t,actionId:i,value:a}=s,l=["modifiedData",t];Object.keys(k(e,l)).forEach(r=>{const c=k(e,[...l,r,i],void 0);if(c){let d=q(c,a);if(!a&&d.conditions){const p=q(d.conditions,!1);d={...d,conditions:p}}R(n,[...l,r,i],d)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:t,propertyName:i,rowName:a,value:l}=s;let r=ie(e.modifiedData);const c=t.split(".."),d=k(r,c,{});Object.keys(d).forEach(p=>{if(ee(d[p],`properties.${i}`)){const g=k(d,[p,"properties",i,a]),h=[...c,p,"properties",i,a];if(!N(g))R(r,h,l);else{const b=q(g,l);R(r,h,b)}}}),l||(r=U(r)),R(n,"modifiedData",r);break}case"ON_CHANGE_CONDITIONS":{Object.entries(s.conditions).forEach(t=>{const[i,a]=t;R(n,["modifiedData",...i.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let t=ie(e.modifiedData);R(t,[...s.keys.split("..")],s.value),s.value||(t=U(t)),R(n,"modifiedData",t);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:t,value:i}=s,a=[...t.split("..")];let l=ie(e.modifiedData);const r=k(l,a,{}),c=q(r,i);R(l,a,c),i||(l=U(l)),R(n,["modifiedData"],l);break}case"RESET_FORM":{n.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{n.initialData=e.modifiedData;break}default:return n}}),Jt=(e,s)=>{const{conditions:n,sections:{collectionTypes:t,singleTypes:i,plugins:a,settings:l}}=e,r={collectionTypes:t,singleTypes:i,plugins:Ae(a,"plugin"),settings:Ae(l,"category")},c={collectionTypes:je(t,n,s),singleTypes:je(i,n,s),plugins:ye(r.plugins,n,s),settings:ye(r.settings,n,s)};return{initialData:c,modifiedData:c,layouts:r}};export{en as P};
