(this["webpackJsonpfinmcdade-client"]=this["webpackJsonpfinmcdade-client"]||[]).push([[0],{21:function(e,t,c){},36:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var s,a=c(1),o=c.n(a),n=c(11),i=c.n(n),r=(c(36),c(2)),l=c(8),j=c(5),d=Object(a.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}}),b=c(3),u=c(4),h=c.n(u),m=c(6),O=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1],o=Object(a.useState)(),n=Object(j.a)(o,2),i=n[0],r=n[1],l=Object(a.useRef)([]),d=Object(a.useCallback)(function(){var e=Object(m.a)(h.a.mark((function e(t){var c,a,o,n,i,j,d=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=d.length>1&&void 0!==d[1]?d[1]:"GET",a=d.length>2&&void 0!==d[2]?d[2]:null,o=d.length>3&&void 0!==d[3]?d[3]:{},s(!0),n=new AbortController,l.current.push(n),e.prev=6,e.next=9,fetch(t,{method:c,body:a,headers:o,signal:n.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(j=e.sent,l.current=l.current.filter((function(e){return e!==n})),i.ok){e.next=16;break}throw new Error(j.message);case 16:return s(!1),e.abrupt("return",j);case 20:throw e.prev=20,e.t0=e.catch(6),r(e.t0.message),s(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){return function(){l.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:c,error:i,sendRequest:d,clearError:function(){r(null)}}},p=(c(38),c(50),c(7)),x=c(27),f=(c(51),c(17)),v=c(57),g=c(0),k=function(e){var t=Object(g.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[Object(g.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:Object(g.jsx)("h2",{children:e.header})}),Object(g.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[Object(g.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),Object(g.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return i.a.createPortal(t,document.getElementById("modal-hook"))},N=function(e){return Object(g.jsx)(v.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:Object(g.jsx)(k,Object(b.a)({},e))})},B=function(e){return Object(g.jsx)(N,{onCancel:e.onClear,header:"Problem!",show:!!e.error,footer:Object(g.jsxs)("button",{className:"modalButton",onClick:e.onClear,children:[" ","okay"," "]}),children:Object(g.jsx)("p",{children:e.error})})},y=c.p+"static/media/opaque_spinner.95c33229.gif",I=function(e){return Object(g.jsx)("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay"),children:Object(g.jsx)("img",{src:y,alt:"spinner"})})},w=function(){var e=Object(a.useState)(),t=Object(j.a)(e,2),c=t[0],s=t[1],o=Object(a.useState)(),n=Object(j.a)(o,2),i=n[0],l=n[1],u=Object(a.useState)(!1),v=Object(j.a)(u,2),k=(v[0],v[1]),N=Object(a.useContext)(d),y=O(),w=y.isLoading,P=y.error,C=y.sendRequest,L=y.clearError,S=Object(r.f)(),F=Object(f.b)({picture:null,type:"",description:""}),E=F.register,D=F.handleSubmit,_=F.reset,T=(F.trigger,F.setError,F.control),U=F.formState.isSubmitSuccessful,A=Object(f.a)({control:T,name:"pics"}),R=Object(f.a)({control:T,name:"materialsUsed"});Object(a.useEffect)((function(){U&&_({description:"",materialsUsed:[]}),l(null)}),[_,U]),Object(a.useEffect)((function(){if(c){var e=new FileReader;e.onload=function(){l(e.result)},e.readAsDataURL(c)}}),[c]);var z=Object(a.useRef)(null),q=function(){var e=Object(m.a)(h.a.mark((function e(t){var s,a,o,n,i,r,l,j;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(console.log(t),s=z.current,console.log(s),e.prev=3,a=new FormData,o=s.cropper.getCroppedCanvas().toDataURL(),n=atob(o.split(",")[1]),i=[],r=0;r<n.length;r++)i.push(n.charCodeAt(r));if(l=new Blob([new Uint8Array(i)],{type:c.type}),t.pics){for(console.log(c),j=0;j<t.pics.length;j++)a.append(j,t.pics[j].picture[0]);console.log(o),a.append(t.pics.length,l)}else t.pics||a.append("0",l);return t.materialsUsed&&a.append("materialsUsed",JSON.stringify(t.materialsUsed)),a.append("type",t.type),a.append("description",t.description),e.next=15,C("".concat("https://fintasticcarpentry.herokuapp.com/api","/admin/createProject"),"POST",a,{Authorization:"Bearer "+N.token});case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}(),G=Object(a.useState)(),J=Object(j.a)(G,2);J[0],J[1];return Object(g.jsxs)("div",{className:"dashboard",children:[Object(g.jsx)(B,{error:P,onClear:L}),w&&Object(g.jsx)(I,{asOverlay:!0}),Object(g.jsxs)("div",{onClick:function(){S("/")},className:"dashboard-homeNav",children:[Object(g.jsx)("svg",{width:"0",height:"0",children:Object(g.jsxs)("linearGradient",{id:"blue-gradient",x1:"100%",y1:"100%",x2:"0%",y2:"0%",children:[Object(g.jsx)("stop",{stopColor:"#33D4FF",offset:"0%"}),Object(g.jsx)("stop",{stopColor:"#015CD0",offset:"100%"})]})}),Object(g.jsx)(p.g,{style:{stroke:"url(#blue-gradient)"}})]}),Object(g.jsxs)("div",{onClick:function(){N.logout()},className:"dashboard-logout",children:[Object(g.jsx)("svg",{width:"0",height:"0",children:Object(g.jsxs)("linearGradient",{id:"blue-gradient",x1:"100%",y1:"100%",x2:"0%",y2:"0%",children:[Object(g.jsx)("stop",{stopColor:"#33D4FF",offset:"0%"}),Object(g.jsx)("stop",{stopColor:"#015CD0",offset:"100%"})]})}),Object(g.jsx)(p.i,{style:{stroke:"url(#blue-gradient)"}})]}),Object(g.jsx)("div",{className:"dashboard-addPhotos",children:Object(g.jsx)("form",{className:"addItem-form",onSubmit:D(q),children:Object(g.jsxs)("div",{className:"dashboard-inputs",children:[Object(g.jsxs)("div",{className:"dashboard-type",children:[Object(g.jsx)("label",{className:"addItem-picInput-label",children:"type: "}),Object(g.jsxs)("select",Object(b.a)(Object(b.a)({defaultValue:"roofing"},E("type")),{},{children:[Object(g.jsx)("option",{value:"roofing",children:"roofing"}),Object(g.jsx)("option",{value:"siding",children:"siding"}),Object(g.jsx)("option",{value:"carpentry",children:"carpentry"})]}))]}),Object(g.jsxs)("div",{className:"dashboard-description",children:[Object(g.jsxs)("label",{className:"dashboard-description-indiv",children:["description:"," "]}),Object(g.jsx)("textarea",Object(b.a)(Object(b.a)({className:"dashboard-description-indiv dashboard-textarea"},E("description")),{},{type:"text"}))]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{className:"dashboard-coverPhoto",children:"cover photo: "}),Object(g.jsx)("label",{className:"dashboard-coverPhoto-inputIcon",for:"coverPhoto",children:Object(g.jsx)(p.b,{})}),Object(g.jsx)("input",Object(b.a)(Object(b.a)({id:"coverPhoto"},E("picture")),{},{ref:z,type:"file",accept:".jpg,.png,.jpeg",onChange:function(e){var t;e.target.files||1===e.target.files.length?(t=e.target.files[0],s(t),k(!0)):k(!1)},className:"dashboard-picDisplay"}))]}),i&&Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{className:"image-upload__preview",src:i,alt:"preview"}),Object(g.jsx)("div",{className:"image-upload__preview",children:Object(g.jsx)(x.a,{src:i,initialAspectRatio:12/9,ref:z})})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{className:"dashboard-pPics-title",children:"project pics: "}),Object(g.jsx)("span",{className:"dashboard-coverPhoto-iconFont",type:"button",onClick:function(){return A.append({picture:null})},children:Object(g.jsx)(p.b,{})})]}),A.fields.map((function(e,t){return Object(g.jsxs)("li",{className:"dashboard-pPics-listItems",children:[Object(g.jsx)("label",{children:"photo:"}),Object(g.jsx)("input",Object(b.a)(Object(b.a)({className:"dashboard-choosePhoto"},E("pics.".concat(t,".picture"))),{},{type:"file",accept:".jpg,.png,.jpeg"})),Object(g.jsx)("button",{className:"dashboard-xButton",type:"button",onClick:function(){return A.remove(t)},children:Object(g.jsx)(p.e,{})})]},e.id)})),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{className:"dashboard-materials-title",children:"materials: (optional)"}),Object(g.jsx)("span",{className:"dashboard-coverPhoto-iconFont",type:"button",onClick:function(){return R.append({name:"",dimensions:""})},children:Object(g.jsx)(p.b,{})})]}),R.fields.map((function(e,t){return Object(g.jsxs)("li",{className:"dashboard-materials-listItems",children:[Object(g.jsxs)("div",{className:"mobileBlock",children:[Object(g.jsx)("label",{children:"description:"}),Object(g.jsx)("input",Object(b.a)({},E("materialsUsed.".concat(t,".name"))))]}),Object(g.jsxs)("div",{className:"mobileBlock",children:[Object(g.jsx)("label",{className:"marginleft",children:"dimensions:(optional)"}),Object(g.jsx)("input",Object(b.a)({defaultValue:null},E("materialsUsed.".concat(t,".dimensions"))))]}),Object(g.jsx)("button",{className:"dashboard-xButton",type:"button",onClick:function(){return R.remove(t)},children:Object(g.jsx)(p.e,{})})]},e.id)})),Object(g.jsxs)("button",{className:"dashboard-submit",children:[Object(g.jsx)(p.d,{})," "]})]})})})]})},P=c.p+"static/media/fintasticCover.c52dd4f5.JPG",C=(c(21),function(e){return Object(g.jsx)(l.b,{to:"/roofing/".concat(e._id),children:Object(g.jsxs)("div",{className:"home-roofingBlock-itemBlock",children:[Object(g.jsx)("div",{className:"inlineBlock verticalAlign",children:Object(g.jsx)("div",{className:"home-roofingBlock-itemBlock-imgBlock",children:Object(g.jsx)("img",{className:"home-roofingBlock-itemBlock-imgBlock-img",src:"https://s3.us-east-1.amazonaws.com/".concat("fintasticbucket","/").concat(e.coverPhotoBucketId),alt:e.details})})}),Object(g.jsx)("div",{className:"home-roofingBlock-itemBlock-text inlineBlock verticalAlign",children:Object(g.jsx)("p",{children:e.description})}),e.photosPhotoBucketIds.length>0&&Object(g.jsx)("div",{className:"cardTie-bottom-right",children:Object(g.jsxs)("div",{className:"cardTie-bottom-right-font",children:["+",e.photosPhotoBucketIds.length," ",Object(g.jsx)(p.h,{})]})})]})})}),L=function(e){return Object(g.jsxs)("div",{className:"home-roofingBlock-listBlock",children:[Object(g.jsx)("div",{className:"home-roofingBlock-listBlock-title",children:Object(g.jsx)("h1",{children:"Roofing"})}),e.items.map((function(e){return Object(g.jsx)(C,{_id:e._id,description:e.description,materialsUsed:e.materialsUsed,coverPhotoBucketId:e.coverPhotoBucketId,photosPhotoBucketIds:e.photosPhotoBucketIds},e._id)}))]})},S=function(e){return Object(g.jsx)(l.b,{to:"/siding/".concat(e._id),children:Object(g.jsxs)("div",{className:"home-roofingBlock-itemBlock",children:[Object(g.jsx)("div",{className:"inlineBlock verticalAlign",children:Object(g.jsx)("div",{className:"home-roofingBlock-itemBlock-imgBlock",children:Object(g.jsx)("img",{className:"home-roofingBlock-itemBlock-imgBlock-img",src:"https://s3.us-east-1.amazonaws.com/".concat("fintasticbucket","/").concat(e.coverPhotoBucketId),alt:e.details})})}),Object(g.jsx)("div",{className:"home-roofingBlock-itemBlock-text inlineBlock verticalAlign",children:Object(g.jsx)("p",{children:e.description})}),e.photosPhotoBucketIds.length>0&&Object(g.jsx)("div",{className:"cardTie-bottom-right",children:Object(g.jsxs)("div",{className:"cardTie-bottom-right-font",children:["+",e.photosPhotoBucketIds.length," ",Object(g.jsx)(p.h,{})]})})]})})},F=function(e){return Object(g.jsxs)("div",{className:"home-roofingBlock-listBlock",children:[Object(g.jsx)("div",{className:"home-roofingBlock-listBlock-title",children:Object(g.jsx)("h1",{children:"Siding"})}),e.items.map((function(e){return Object(g.jsx)(S,{_id:e._id,description:e.description,materialsUsed:e.materialsUsed,coverPhotoBucketId:e.coverPhotoBucketId,photosPhotoBucketIds:e.photosPhotoBucketIds},e._id)}))]})},E=function(e){return Object(g.jsx)(l.b,{to:"/carpentry/".concat(e._id),children:Object(g.jsxs)("div",{className:"home-roofingBlock-itemBlock",children:[Object(g.jsx)("div",{className:"inlineBlock verticalAlign",children:Object(g.jsx)("div",{className:"home-roofingBlock-itemBlock-imgBlock",children:Object(g.jsx)("img",{className:"home-roofingBlock-itemBlock-imgBlock-img",src:"https://s3.us-east-1.amazonaws.com/".concat("fintasticbucket","/").concat(e.coverPhotoBucketId),alt:e.details})})}),Object(g.jsx)("div",{className:"home-roofingBlock-itemBlock-text inlineBlock verticalAlign",children:Object(g.jsx)("p",{children:e.description})}),e.photosPhotoBucketIds.length>0&&Object(g.jsx)("div",{className:"cardTie-bottom-right",children:Object(g.jsxs)("div",{className:"cardTie-bottom-right-font",children:["+",e.photosPhotoBucketIds.length," ",Object(g.jsx)(p.h,{})]})})]})})},D=function(e){return Object(g.jsxs)("div",{className:"home-roofingBlock-listBlock",children:[Object(g.jsx)("div",{className:"home-roofingBlock-listBlock-title",children:Object(g.jsx)("h1",{children:"carpentry"})}),e.items.map((function(e){return Object(g.jsx)(E,{_id:e._id,description:e.description,materialsUsed:e.materialsUsed,coverPhotoBucketId:e.coverPhotoBucketId,photosPhotoBucketIds:e.photosPhotoBucketIds},e._id)}))]})},_=function(){var e=O(),t=(e.isLoading,e.error,e.sendRequest),c=(e.clearError,Object(a.useState)()),s=Object(j.a)(c,2),o=s[0],n=s[1],i=Object(a.useState)(),b=Object(j.a)(i,2),u=b[0],x=b[1],f=Object(a.useState)(),v=Object(j.a)(f,2),k=v[0],N=v[1],B=Object(a.useContext)(d),y=Object(r.f)();return Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(h.a.mark((function e(){var c,s,a,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("".concat("https://fintasticcarpentry.herokuapp.com/api","/global/getProjects"));case 3:c=e.sent,console.log(c),s=c.findProjects.filter((function(e){return"roofing"===e.type})),a=c.findProjects.filter((function(e){return"siding"===e.type})),o=c.findProjects.filter((function(e){return"carpentry"===e.type})),console.log(a),N(s),n(o),x(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"home",children:[Object(g.jsx)("img",{className:"home-img",src:P,alt:"fintastic roofing carpentry and shingles, go with us!"}),B.token&&Object(g.jsxs)("div",{onClick:function(){y("/dashboard")},className:"home-dashBoard",children:[Object(g.jsx)("svg",{width:"0",height:"0",children:Object(g.jsxs)("linearGradient",{id:"blue-gradient",x1:"100%",y1:"100%",x2:"0%",y2:"0%",children:[Object(g.jsx)("stop",{stopColor:"#33D4FF",offset:"0%"}),Object(g.jsx)("stop",{stopColor:"#015CD0",offset:"100%"})]})}),Object(g.jsx)(p.f,{style:{stroke:"url(#blue-gradient)"}})]}),Object(g.jsxs)("div",{className:"home-aboutUs",children:[Object(g.jsxs)("div",{className:"home-cBox italicFont",children:["Let us serve you ",Object(g.jsx)("br",{})," New England!",Object(g.jsx)("br",{})," We're ",Object(g.jsx)("br",{})," - Fintastic -"]}),Object(g.jsx)(l.b,{to:"/consultation",children:Object(g.jsx)("div",{className:"home-aboutUs-consultation",children:"consultation"})})]}),Object(g.jsxs)("div",{className:"home-mobileCatagories",children:[Object(g.jsxs)("div",{className:"home-carpentry",children:[Object(g.jsx)("span",{className:"tie-left"}),"carpentry ",Object(g.jsx)("span",{className:"tie-right"})]}),Object(g.jsxs)("div",{className:"home-roofing",children:[" ",Object(g.jsx)("span",{className:"tie-left"}),"roofing ",Object(g.jsx)("span",{className:"tie-right"})]}),Object(g.jsxs)("div",{className:"home-siding",children:[Object(g.jsx)("span",{className:"tie-left"})," siding"," ",Object(g.jsx)("span",{className:"tie-right"})," "]})]})]}),k&&k.length>0&&Object(g.jsx)("div",{className:"home-roofingBlock",children:Object(g.jsx)(L,{items:k})}),u&&u.length>0&&Object(g.jsx)("div",{className:"home-sidingBlock",children:Object(g.jsx)(F,{items:u})}),o&&o.length>0&&Object(g.jsx)("div",{className:"home-carpentryBlock",children:Object(g.jsx)(D,{items:o})})]})},T=function(){var e=Object(a.useContext)(d),t=Object(f.b)({}),c=t.register,s=t.handleSubmit,o=O(),n=(o.isLoading,o.error),i=o.sendRequest,l=o.clearError,u=Object(r.f)(),p=Object(a.useState)("password"),x=Object(j.a)(p,2),v=x[0],k=(x[1],function(){var t=Object(m.a)(h.a.mark((function t(c){var s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i("".concat("https://fintasticcarpentry.herokuapp.com/api","/admin/login"),"POST",JSON.stringify({username:c.login,password:c.password}),{"Content-Type":"application/json"});case 3:s=t.sent,e.login(s.userId,s.token),u("/dashboard"),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}());return Object(g.jsxs)("div",{className:"login",children:[Object(g.jsx)(B,{error:n,onClear:l}),Object(g.jsxs)("div",{className:"login-port",children:[Object(g.jsx)("span",{className:"login-tie-top-right"}),Object(g.jsx)("span",{className:"login-tie-top-left"}),Object(g.jsx)("span",{className:"login-tie-bottom-right"}),Object(g.jsx)("span",{className:"login-tie-bottom-left"}),Object(g.jsxs)("form",{onSubmit:s(k),className:"login-inputs-firstChild",children:[Object(g.jsx)("label",{children:"LOGIN"}),Object(g.jsx)("input",Object(b.a)({className:"login-inputs"},c("login"))),Object(g.jsx)("label",{children:"PASSWORD"}),Object(g.jsx)("input",Object(b.a)({className:"login-inputs",type:v},c("password"))),Object(g.jsx)("button",{className:"login-button",children:"LOGIN"})]})]})]})},U=c(12),A=function(){var e=Object(r.g)().sId,t=O(),c=(t.isLoading,t.error,t.sendRequest),s=(t.clearError,Object(a.useState)()),o=Object(j.a)(s,2),n=o[0],i=o[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(m.a)(h.a.mark((function t(){var s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("".concat("https://fintasticcarpentry.herokuapp.com/api","/global/getAProject/").concat(e));case 2:s=t.sent,i(s.findProject);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[c,e]),Object(g.jsx)("div",{className:"use-bootstrap",children:Object(g.jsxs)("div",{className:"projectLook",children:[Object(g.jsx)(l.b,{to:"/",children:Object(g.jsx)("div",{className:"projectLook-goBack",children:Object(g.jsx)(p.a,{})})}),Object(g.jsxs)("div",{className:"projectLook-box",children:[Object(g.jsx)("div",{children:n&&Object(g.jsx)("div",{className:"projectLook-carousel-box",children:Object(g.jsxs)(U.a,{variant:"dark",children:[Object(g.jsx)(U.a.Item,{interval:1e8,children:Object(g.jsx)("div",{className:"projectLook-carousel-box",children:Object(g.jsx)("img",{className:"d-block projectLook-carousel",src:"https://s3.us-east-1.amazonaws.com/".concat("fintasticbucket","/").concat(n.coverPhotoBucketId),alt:"First slide"})})}),n.photosPhotoBucketIds.map((function(e,t){return Object(g.jsx)(U.a.Item,{interval:1e8,children:Object(g.jsx)("div",{className:"projectLook-carousel-box",children:Object(g.jsx)("img",{className:"d-block projectLook-carousel",src:"https://s3.us-east-1.amazonaws.com/".concat("fintasticbucket","/").concat(e),alt:"First slide"})})})}))]})})}),n&&Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"projectLook-text-job",children:[Object(g.jsx)("p",{className:"inlineBlock",children:n.description}),Object(g.jsx)("div",{children:n.materialsUsed.map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{className:"inlineBlock",children:[e.name," "]}),"    ",Object(g.jsx)("h2",{className:"inlineBlock",children:e.dimensions})]})}))})]})})]})]})})},R=function(){var e=Object(r.g)().rId,t=Object(r.f)(),c=Object(a.useContext)(d),s=O(),o=(s.isLoading,s.error,s.sendRequest),n=(s.clearError,Object(a.useState)()),i=Object(j.a)(n,2),b=i[0],u=i[1],x=function(){var s=Object(m.a)(h.a.mark((function s(){return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,o("".concat("https://fintasticcarpentry.herokuapp.com/api","/admin/deleteProject/").concat(e),"DELETE",null,{Authorization:"Bearer "+c.token});case 3:t("/"),s.next=8;break;case 6:s.prev=6,s.t0=s.catch(0);case 8:case"end":return s.stop()}}),s,null,[[0,6]])})));return function(){return s.apply(this,arguments)}}();Object(a.useEffect)((function(){var t=function(){var t=Object(m.a)(h.a.mark((function t(){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("".concat("https://fintasticcarpentry.herokuapp.com/api","/global/getAProject/").concat(e));case 2:c=t.sent,u(c.findProject);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[o,e]);var f=Object(a.useState)("projectLook-displayNone"),v=Object(j.a)(f,2),k=v[0],N=v[1],B=function(){"projectLook-displayNone"===k?N("projectLook-modal"):"projectLook-modal"===k&&N("projectLook-displayNone")};return Object(g.jsxs)("div",{className:"use-bootstrap",children:[Object(g.jsxs)("div",{className:"".concat(k),children:[Object(g.jsx)("div",{className:"projectLook-modal-header",children:"Are you sure?"}),Object(g.jsx)("div",{className:"projectLook-modal-buttons",onClick:x,children:"yes"}),Object(g.jsx)("div",{className:"projectLook-modal-buttons",onClick:B,children:"no"})]}),Object(g.jsxs)("div",{className:"projectLook",children:[Object(g.jsx)(l.b,{to:"/",children:Object(g.jsx)("div",{className:"projectLook-goBack",children:Object(g.jsx)(p.a,{})})}),Object(g.jsxs)("div",{className:"projectLook-box",children:[c.token&&Object(g.jsx)("div",{className:"projectLook-deleteButton",onClick:B,children:Object(g.jsx)(p.c,{})}),Object(g.jsx)("div",{children:b&&Object(g.jsx)("div",{className:"projectLook-carousel-box",children:Object(g.jsxs)(U.a,{variant:"dark",children:[Object(g.jsx)(U.a.Item,{interval:1e8,children:Object(g.jsx)("div",{className:"projectLook-carousel-box",children:Object(g.jsx)("img",{className:"d-block projectLook-carousel",src:"https://s3.us-east-1.amazonaws.com/".concat("fintasticbucket","/").concat(b.coverPhotoBucketId),alt:"First slide"})})}),b.photosPhotoBucketIds.map((function(e,t){return Object(g.jsx)(U.a.Item,{interval:1e8,children:Object(g.jsx)("div",{className:"projectLook-carousel-box",children:Object(g.jsx)("img",{className:"d-block projectLook-carousel",src:"https://s3.us-east-1.amazonaws.com/".concat("fintasticbucket","/").concat(e),alt:"First slide"})},e)})}))]})})}),b&&Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"projectLook-text-job",children:[Object(g.jsx)("p",{className:"inlineBlock",children:b.description}),Object(g.jsx)("div",{children:b.materialsUsed.map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{className:"inlineBlock",children:[e.name," "]}),"    ",Object(g.jsx)("h2",{className:"inlineBlock",children:e.dimensions})]},e.name)}))})]})})]})]})]})},z=function(){var e=Object(r.g)().cId,t=O(),c=(t.isLoading,t.error,t.sendRequest),s=(t.clearError,Object(a.useState)()),o=Object(j.a)(s,2),n=o[0],i=o[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(m.a)(h.a.mark((function t(){var s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("".concat("https://fintasticcarpentry.herokuapp.com/api","/global/getAProject/").concat(e));case 2:s=t.sent,i(s.findProject);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[c,e]),Object(g.jsx)("div",{className:"use-bootstrap",children:Object(g.jsxs)("div",{className:"projectLook",children:[Object(g.jsx)(l.b,{to:"/",children:Object(g.jsx)("div",{className:"projectLook-goBack",children:Object(g.jsx)(p.a,{})})}),Object(g.jsxs)("div",{className:"projectLook-box",children:[Object(g.jsx)("div",{children:n&&Object(g.jsx)("div",{className:"projectLook-carousel-box",children:Object(g.jsxs)(U.a,{variant:"dark",children:[Object(g.jsx)(U.a.Item,{interval:1e8,children:Object(g.jsx)("div",{className:"projectLook-carousel-box",children:Object(g.jsx)("div",{className:"projectLook-spacing",children:Object(g.jsx)("img",{className:"d-block projectLook-carousel",src:"https://s3.us-east-1.amazonaws.com/".concat("fintasticbucket","/").concat(n.coverPhotoBucketId),alt:"First slide"})})})}),n.photosPhotoBucketIds.map((function(e,t){return Object(g.jsx)(U.a.Item,{interval:1e8,children:Object(g.jsx)("div",{className:"projectLook-carousel-box",children:Object(g.jsx)("div",{className:"projectLook-spacing",children:Object(g.jsx)("img",{className:"d-block projectLook-carousel",src:"https://s3.us-east-1.amazonaws.com/".concat("fintasticbucket","/").concat(e),alt:"First slide"})})})})}))]})})}),n&&Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"projectLook-text-job",children:[Object(g.jsx)("p",{className:"inlineBlock",children:n.description}),Object(g.jsx)("div",{children:n.materialsUsed.map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{className:"inlineBlock",children:[e.name," "]}),"    ",Object(g.jsx)("h2",{className:"inlineBlock",children:e.dimensions})]})}))})]})})]})]})})},q=c.p+"static/media/consultation-photo.3dc50b1a.jpeg",G=function(){var e=Object(f.b)({firstName:"",lastName:"",phoneNumber:"",email:"",street:"",city:"",state:"",zipCode:"",hour:"",date:"",details:""}),t=e.register,c=e.handleSubmit,s=e.reset,o=e.formState.isSubmitSuccessful;Object(a.useEffect)((function(){o&&s({firstName:"",lastName:"",phoneNumber:"",email:"",street:"",city:"",state:"",zipCode:"",hour:"",date:"",details:""})}),[s,o]);var n=O(),i=(n.isLoading,n.error),r=n.sendRequest,j=n.clearError,d=function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(t.email),e.prev=2,e.next=5,r("".concat("https://fintasticcarpentry.herokuapp.com/api","/global/consultationRequest"),"POST",JSON.stringify({firstName:t.firstName,lastName:t.lastName,phoneNumber:t.phoneNumber,email:t.email,street:t.street,city:t.city,state:t.state,zipCode:t.zipCode,hour:t.hour,date:t.date,details:t.details}),{"Content-Type":"application/json"});case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"consultation",children:[Object(g.jsx)("img",{className:"consultation-img",src:q,alt:"Let's get started!"}),Object(g.jsx)(B,{error:i,onClear:j}),Object(g.jsxs)("div",{className:"consultation-box",children:[Object(g.jsx)(l.b,{to:"/",children:Object(g.jsx)("div",{className:"consultation-backToHome",children:Object(g.jsx)(p.a,{})})}),Object(g.jsxs)("div",{className:"consultation-title",children:[Object(g.jsx)("h1",{className:"italicFont",children:"You're better off with us!"}),Object(g.jsx)("h3",{children:"Fill out the form, and let us reach out to you."})]}),Object(g.jsxs)("div",{className:"consultation-hours",children:[Object(g.jsx)("div",{className:"consultation-hours-title italicFont",children:"Reach Out"}),Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"consultation-hours-paragraph",children:["We're available every day ",Object(g.jsx)("br",{})," ",Object(g.jsx)("span",{children:"7am - 7pm"})," ",Object(g.jsx)("br",{})," ","Give us a call at ",Object(g.jsx)("br",{})," ",Object(g.jsx)("span",{children:"(603) 374-4323"})," ",Object(g.jsx)("br",{}),"Shoot us an email at",Object(g.jsx)("br",{}),"fin@fintasticcarpentry.com ",Object(g.jsx)("br",{})," We would love to hear from you!"]})})]}),Object(g.jsx)("div",{className:"consultation-form",children:Object(g.jsxs)("form",{children:[Object(g.jsxs)("div",{className:"block",children:[Object(g.jsxs)("div",{className:"inlineBlock consultation-form-blocks",children:[Object(g.jsx)("label",{children:"First Name:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",Object(b.a)({className:"getFont"},t("firstName")))]}),Object(g.jsxs)("div",{className:"inlineBlock consultation-form-blocks",children:[Object(g.jsx)("label",{children:"Last Name:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",Object(b.a)({className:"getFont"},t("lastName")))]})]}),Object(g.jsxs)("div",{className:"block",children:[Object(g.jsxs)("div",{className:"inlineBlock consultation-form-blocks",children:[Object(g.jsx)("label",{children:"Phone:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",Object(b.a)({className:"getFont"},t("phoneNumber")))]}),Object(g.jsxs)("div",{className:"inlineBlock consultation-form-blocks",children:[Object(g.jsx)("label",{children:"Email:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",Object(b.a)({className:"getFont"},t("email")))]})]}),Object(g.jsxs)("div",{className:"consultation-form-blocks",children:[Object(g.jsx)("label",{children:"Street:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",Object(b.a)(Object(b.a)({},t("street")),{},{className:"consultation-form-streetInput getFont"}))]}),Object(g.jsxs)("div",{className:"inlineBlock consultation-form-blocks",children:[Object(g.jsx)("label",{children:"City:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",Object(b.a)({},t("city")))]}),Object(g.jsxs)("div",{className:"inlineBlock consultation-form-blocks",children:[Object(g.jsx)("label",{children:"State:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",Object(b.a)({className:"getFont"},t("state")))]}),Object(g.jsxs)("div",{className:"consultation-form-blocks",children:[Object(g.jsx)("label",{children:"Zip Code:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",Object(b.a)({className:"getFont"},t("zipCode")))]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{children:"What hour of the day may we reach out to you?"}),Object(g.jsxs)("div",{className:"inlineBlock consultation-form-blocks",children:[Object(g.jsx)("label",{children:"Hour:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",Object(b.a)({className:"getFont"},t("hour")))]}),Object(g.jsxs)("div",{className:"inlineBlock consultation-form-blocks",children:[Object(g.jsx)("label",{children:"Date:"}),Object(g.jsx)("br",{}),Object(g.jsx)("input",Object(b.a)({className:"getFont"},t("date")))]})]}),Object(g.jsxs)("div",{className:" consultation-form-blocks",children:[Object(g.jsx)("label",{children:"Details:"}),Object(g.jsx)("br",{}),Object(g.jsx)("textarea",Object(b.a)(Object(b.a)({},t("details")),{},{className:"consultation-textArea getFont"}))]}),Object(g.jsx)("div",{onClick:c(d),className:"consultation-button",children:"submit"})]})})]})]})},J=function(){var e,t=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],o=t[1],n=Object(a.useState)(),i=Object(j.a)(n,2),r=i[0],l=i[1],d=Object(a.useState)(!1),b=Object(j.a)(d,2),u=b[0],h=b[1],m=Object(a.useCallback)((function(e,t,c){o(t),h(e);var s=c||new Date((new Date).getTime()+864e5);l(s),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:s.toISOString()}))}),[]),O=Object(a.useCallback)((function(){o(null),l(null),h(null),localStorage.removeItem("userData")}),[]);return Object(a.useEffect)((function(){if(c&&r){var e=r.getTime()-(new Date).getTime();s=setTimeout(O,e)}else clearTimeout(s)}),[c,O,r]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&m(e.userId,e.token,new Date(e.expiration))}),[m]),{token:c,login:m,logout:O,userId:u}}(),c=t.token,o=t.login,n=t.logout,i=t.userId;return c&&(e=Object(g.jsxs)(r.c,{children:[Object(g.jsx)(r.a,{path:"/consultation",element:Object(g.jsx)(G,{})}),Object(g.jsx)(r.a,{path:"/siding/:sId",element:Object(g.jsx)(A,{})}),Object(g.jsx)(r.a,{path:"/roofing/:rId",element:Object(g.jsx)(R,{})}),Object(g.jsx)(r.a,{path:"/carpentry/:cId",element:Object(g.jsx)(z,{})}),Object(g.jsx)(r.a,{path:"/dashboard",element:Object(g.jsx)(w,{})}),Object(g.jsx)(r.a,{path:"/",element:Object(g.jsx)(_,{})}),Object(g.jsx)(r.a,{path:"*",element:Object(g.jsx)(w,{})})]})),c||(e=Object(g.jsxs)(r.c,{children:[Object(g.jsx)(r.a,{path:"/consultation",element:Object(g.jsx)(G,{})}),Object(g.jsx)(r.a,{path:"/siding/:sId",element:Object(g.jsx)(A,{})}),Object(g.jsx)(r.a,{path:"/roofing/:rId",element:Object(g.jsx)(R,{})}),Object(g.jsx)(r.a,{path:"/carpentry/:cId",element:Object(g.jsx)(z,{})}),Object(g.jsx)(r.a,{path:"/login",element:Object(g.jsx)(T,{})}),Object(g.jsx)(r.a,{path:"/",element:Object(g.jsx)(_,{})}),Object(g.jsx)(r.a,{path:"*",element:Object(g.jsx)(_,{})})]})),Object(g.jsx)(d.Provider,{value:{isLoggedIn:!!c,token:c,userId:i,login:o,logout:n},children:Object(g.jsx)(l.a,{children:e})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),o(e),n(e)}))};i.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(J,{})}),document.getElementById("root")),W()}},[[56,1,2]]]);
//# sourceMappingURL=main.1ed7234e.chunk.js.map