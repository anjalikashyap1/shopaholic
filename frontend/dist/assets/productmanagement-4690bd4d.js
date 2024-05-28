import{f as R,T as H,l as M,U as T,r,V as L,W as $,j as e,N as Q,S as V,s as W,e as q}from"./index-24ae16bc.js";import{A as z}from"./AdminSidebar-9bc43de0.js";import{r as S}from"./features-63f97d2a.js";import"./index.esm-529d8831.js";const O=()=>{const{user:o}=R(s=>s.userReducer),N=H(),u=M(),{data:t,isLoading:P,isError:U}=T(N.id),{price:m,photo:k,name:h,stock:c,category:C}=(t==null?void 0:t.product)||{photo:"",category:"",name:"",stock:0,price:0},[i,x]=r.useState(m),[d,g]=r.useState(c),[l,j]=r.useState(h),[p,f]=r.useState(C),[v,D]=r.useState(""),[b,I]=r.useState(),[F]=L(),[w]=$(),A=s=>{var y;const a=(y=s.target.files)==null?void 0:y[0],n=new FileReader;a&&(n.readAsDataURL(a),n.onloadend=()=>{typeof n.result=="string"&&(D(n.result),I(a))})},_=async s=>{s.preventDefault();const a=new FormData;l&&a.set("name",l),i&&a.set("price",i.toString()),d!==void 0&&a.set("stock",d.toString()),b&&a.set("photo",b),p&&a.set("category",p);const n=await F({formData:a,userId:o==null?void 0:o._id,productId:t==null?void 0:t.product._id});S(n,u,"/admin/product")},E=async()=>{const s=await w({userId:o==null?void 0:o._id,productId:t==null?void 0:t.product._id});S(s,u,"/admin/product")};return r.useEffect(()=>{t&&(j(t.product.name),x(t.product.price),g(t.product.stock),f(t.product.category))},[t]),U?e.jsx(Q,{to:"/404"}):e.jsxs("div",{className:"admin-container",children:[e.jsx(z,{}),e.jsx("main",{className:"product-management",children:P?e.jsx(V,{length:20}):e.jsxs(e.Fragment,{children:[e.jsxs("section",{children:[e.jsxs("strong",{children:["ID - ",t==null?void 0:t.product._id]}),e.jsx("img",{src:`${W}/${k}`,alt:"Product"}),e.jsx("p",{children:h}),c>0?e.jsxs("span",{className:"green",children:[c," Available"]}):e.jsx("span",{className:"red",children:" Not Available"}),e.jsxs("h3",{children:["₹",m]})]}),e.jsxs("article",{children:[e.jsx("button",{className:"product-delete-btn",onClick:E,children:e.jsx(q,{})}),e.jsxs("form",{onSubmit:_,children:[e.jsx("h2",{children:"Manage"}),e.jsxs("div",{children:[e.jsx("label",{children:"Name"}),e.jsx("input",{type:"text",placeholder:"Name",value:l,onChange:s=>j(s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Price"}),e.jsx("input",{type:"number",placeholder:"Price",value:i,onChange:s=>x(Number(s.target.value))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Stock"}),e.jsx("input",{type:"number",placeholder:"Stock",value:d,onChange:s=>g(Number(s.target.value))})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Category"}),e.jsx("input",{type:"text",placeholder:"eg. laptop, camera etc",value:p,onChange:s=>f(s.target.value)})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Photo"}),e.jsx("input",{type:"file",onChange:A})]}),v&&e.jsx("img",{src:v,alt:"New Image"}),e.jsx("button",{type:"submit",children:"Update"})]})]})]})})]})};export{O as default};
