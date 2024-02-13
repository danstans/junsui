import{r as t}from"./index.LFf77hJu.js";import{s as y,p as u}from"./factory.P08CoaBK.js";import{T as C}from"./token-content.FftrDdcu.js";import{T as b}from"./token-group.kTnyHrk0.js";import{t as f,g as k}from"./panda-context.YtxRu5Jn.js";import{I as T}from"./input.tWypQ7X1.js";import{g as S}from"./flex.5uO8MBAd.js";import{S as z}from"./sticky-top.c2PcK0d7.js";import{S as m}from"./stack.EKJsKtpq.js";import{H as w}from"./hstack.KgbrmnAD.js";import{G as R}from"./grid.s4xvKSTN.js";import"./index.jhg3dtMR.js";import"./hstack.kbGqP_Sr.js";const I=t.forwardRef(function(o,r){const[e,n]=y(o,["align","justify","direction","wrap","basis","grow","shrink"]),a=S(e),c={ref:r,...a,...n};return t.createElement(u.div,c)}),x=u("div",{base:{width:"full",height:"10",borderRadius:"sm",position:"relative",overflow:"hidden",shadow:"inset",_before:{content:"''",position:"absolute",borderRadius:"sm",width:"100%",height:"100%",backgroundSize:"24px",zIndex:"-1",backgroundImage:"check"}}}),g="uncategorized",P=(s,o)=>s.filter(e=>!e.isConditional&&!e.extensions.isVirtual).reduce((e,n)=>{if(!o?.(n))return e;const a=n.extensions.colorPalette||g;return a in e||(e[a]=[]),e[a].find(l=>l.name===n.name)||e[a].push(n),e},{}),W=(s,o)=>{const r=s.filter(e=>e.type==="color"&&e.isConditional&&!e.extensions?.isVirtual);return r.reduce((e,n)=>{if(!o)e.push(n);else{const a=r.filter(o);(o(n)||a.some(c=>c.name===n.name))&&e.push(n)}return e},[]).reduce((e,n)=>({...e,[n.extensions?.prop]:{...e[n.extensions?.prop],[n.extensions.condition]:{value:n.value,isReference:n.isReference},extensions:n.extensions}}),{})},F=f.allTokens,D=k("colors"),G=()=>{const[s,o]=t.useState(""),r=i=>[...i.path,i.originalValue,i.description,i.value,i.name,i.extensions?.var,i.extensions?.prop,...Object.values(i.extensions?.conditions||{})].filter(Boolean).some(p=>p.includes(s)),e=P(D,r),n=e[g],a=Object.entries(e).filter(([i])=>i!==g),c=Object.entries(W(F,r)),l=!!a.length||!!n?.length||!!Object.values(c).length;return{filterQuery:s,setFilterQuery:o,uncategorizedColors:n,categorizedColors:a,semanticTokens:c,hasResults:l}},h=s=>{const o=s.match(/var\(\s*--(.*?)\s*\)/);if(!o)return s;const r=o[1].replaceAll("-","."),e=f.getByName(r);if(!e){const n=f.getByName(`${r}.default`);return h(n?.value)}return e.value.startsWith("var(--")?h(e.value):e.value},O=s=>s.replace(/^_/,"");function v(s){const{value:o,condition:r}=s,e=h(o);return t.createElement(I,{direction:"column",w:"full"},t.createElement(x,{height:"12",style:{background:e}},t.createElement(u.span,{fontWeight:"medium",fontSize:"sm",minW:"5",bg:"neutral.800",px:"1",py:"1",color:"white",roundedBottomRight:"sm",borderWidth:"1px",borderColor:"neutral.700"},O(r))),t.createElement(u.div,{opacity:"0.7",fontSize:"sm"},o," ",o!==e&&`- ${e}`))}const j="uncategorized";function E(s){return s.match(/{colors\.(.*?)}/)?.[1]}function X(){const{filterQuery:s,setFilterQuery:o,semanticTokens:r,hasResults:e,uncategorizedColors:n,categorizedColors:a}=G(),c=()=>r.map(([l,i],p)=>t.createElement(m,{gap:"2",key:p,width:"full"},t.createElement(w,{gap:"1"},t.createElement(v,{value:i.base.value,condition:"base",token:E(i.extensions.conditions.base)}),t.createElement(v,{value:i[i.extensions.condition].value,condition:i.extensions.condition,token:E(i.extensions.conditions[i.extensions.condition])})),t.createElement(u.span,{fontWeight:"semibold"},l)));return t.createElement(b,null,t.createElement(z,null,t.createElement(T,{value:s,onChange:l=>o(l.target.value),placeholder:"Filter tokens by text, property or value"})),t.createElement(C,null,t.createElement(m,{gap:"10"},a.map(([l,i])=>t.createElement(d,{key:l,title:l,colors:i})),t.createElement(d,{title:j,colors:n}),!!r.length&&t.createElement(d,{title:"Semantic Tokens"},c()),!e&&t.createElement("div",null,"No result found! 🐼"))))}function B(s){const{values:o=[]}=s;return o.map((r,e)=>t.createElement(m,{gap:"1",key:e},t.createElement(x,{style:{background:r.value}}),t.createElement(m,{mt:"2",gap:"0.5"},t.createElement(u.div,{fontWeight:"medium"},r.extensions.prop),t.createElement(u.div,{opacity:"0.7",fontSize:"sm",textTransform:"uppercase"},r.value))))}function d(s){const{children:o,colors:r,title:e}=s,n=r==null||r.length===0;return!o&&n?null:t.createElement("div",null,t.createElement(u.span,{fontWeight:"medium",textTransform:"capitalize",fontSize:"xl"},e),o?t.createElement(m,{gap:"10",mt:"10"},o):t.createElement(R,{gap:"4",minChildWidth:"13rem",my:"5",mx:"0"},t.createElement(B,{values:r})))}export{X as default};
