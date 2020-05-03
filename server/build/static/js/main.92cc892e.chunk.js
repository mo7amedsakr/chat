(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{132:function(e,t){},155:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(76),s=a.n(c),l=(a(97),a(98),a(43)),u=a.n(l),o=a(167),i=a(77),m=a.n(i),d=function(e){return r.a.createElement("button",{className:[m.a.Btn,e.className].join(" "),onClick:e.onClick,type:e.type||null,disabled:e.disable},e.children)},f=a(48),p=a(8),h=a(44),g=a.n(h),E=a(18),_=a.n(E),b=a(5),v=a(29),j=a.n(v),O=function(e){return r.a.createElement(b.b,{to:e.to,className:_.a.Usr},r.a.createElement("div",{className:_.a.UsrPic},e.online?r.a.createElement("div",{className:_.a.UsrPicOnline}):null,r.a.createElement("img",{src:j.a,alt:"",className:_.a.UsrPic})),r.a.createElement("p",{className:_.a.UsrName},e.name))},C=a(79),x=a.n(C).a.connect("https://pacific-everglades-97653.herokuapp.com"),N=function(e){return x.emit("loggedIn",e)},w=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){x.on("userloggedin",(function(e){c(e)})),x.on("userloggedout",(function(e){c(e)}))}),[]),r.a.createElement("div",{className:g.a.Users},r.a.createElement("h2",{className:g.a.UsersTitle},"Users"),a.map((function(e){return r.a.createElement(O,{key:e.username,name:e.username,to:"/chat/".concat(e.username),online:e.online})})))},y=Object(n.createContext)({isDark:null,toggleTheme:function(){}}),U=function(e){var t=Object(n.useContext)(y),a=t.isDark,c=t.toggleTheme;return r.a.createElement(o.a,{container:!0,spacing:0,style:{overflow:"hidden"}},r.a.createElement(o.a,{item:!0,xs:2,className:u.a.Right},r.a.createElement(w,null),r.a.createElement(d,{className:u.a.ThemeBtn,onClick:c},a?r.a.createElement(f.a,null):r.a.createElement(f.b,null)," ",r.a.createElement("p",null,"Dark Mode"))),r.a.createElement(o.a,{item:!0,xs:10},e.children))},S=a(169),k=a(15),A=a(83),M=a.n(A),R=a(34),D=a.n(R),I=function(){var e=Object(k.h)().username;return r.a.createElement("div",{className:D.a.Header},r.a.createElement("img",{src:j.a,alt:e,className:D.a.HeaderImg}),r.a.createElement("p",{className:D.a.HeaderName},e))},L=a(90),H=a(84),T=a.n(H),P=a(19),B=a.n(P),Y=function(e){var t=new Date(e.createdAt),a="".concat(t.getHours(),":").concat(t.getMinutes());return r.a.createElement("div",{className:[B.a.Container,"recevied"===e.type?B.a.Recevied:"sent"===e.type?B.a.Sent:null].join(" ")},r.a.createElement("p",{className:B.a.Msg},e.msg),r.a.createElement("p",{className:B.a.Date},a))},J=Object(n.createContext)({user:null,setUser:function(){}}),W=function(){var e=Object(n.useRef)(null),t=Object(n.useContext)(J).user,a=Object(k.h)().username,c=Object(n.useState)([]),s=Object(p.a)(c,2),l=s[0],u=s[1],o=Object(n.useState)(!0),i=Object(p.a)(o,2),m=i[0],d=i[1];return Object(n.useEffect)((function(){console.log(m),console.log(l)})),Object(n.useEffect)((function(){e.current.scrollTop=e.current.scrollHeight}),[l,m]),Object(n.useEffect)((function(){d(!0),x.emit("room",{curUser:t.username,chatWith:a}),x.on("getAllMsgs",(function(e){console.log("getAllMsgs"),u(e),d(!1)}))}),[t,a]),Object(n.useEffect)((function(){x.on("sendmsg",(function(e){return u((function(t){return[].concat(Object(L.a)(t),[e])}))}))}),[]),r.a.createElement("div",{className:T.a.Msgs,ref:e},m?r.a.createElement("h1",null,"Loading..."):l.map((function(e,a){return r.a.createElement(Y,{key:"".concat(e.user,"-").concat(a),type:e.user===t.username?"sent":"recevied",createdAt:e.createdAt,msg:e.message})})))},q=a(35),K=a.n(q),G=a(168),z=a(85),F=function(e){var t=Object(n.useContext)(J).user,a=Object(k.h)().username,c=Object(n.useRef)(null),s=function(){if(""===c.current.value.trim())return c.current.value="";x.emit("sendmsg",{message:c.current.value,from:t.username,to:a}),c.current.value=""};return r.a.createElement("div",{className:K.a.Send},r.a.createElement(G.a,{placeholder:"Type a message...",className:K.a.SendTextarea,ref:c,onKeyDown:function(e){13!==e.keyCode||e.shiftKey||(e.preventDefault(),s())}}),r.a.createElement(d,{className:K.a.SendBtn,onClick:s},r.a.createElement(z.a,null)))},V=function(){return r.a.createElement("div",{className:M.a.Chat},r.a.createElement(I,null),r.a.createElement(W,null),r.a.createElement(F,null))},Z=a(24),Q=a.n(Z),$=a(86),X=a.n($),ee=Object(n.forwardRef)((function(e,t){return r.a.createElement("input",{type:e.type||"text",placeholder:e.placeholder,className:[X.a.Input,e.className].join(" "),required:!0,ref:t})})),te=a(25),ae=a.n(te),ne=a(49),re=a(87),ce=a.n(re).a.create({baseURL:"https://pacific-everglades-97653.herokuapp.com/api/v1",withCredentials:!0}),se=a(88),le=a.n(se),ue=a(89),oe=a.n(ue),ie=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(J).setUser,s=Object(n.useState)(!1),l=Object(p.a)(s,2),u=l[0],o=l[1],i=Object(k.g)(),m=Object(n.useCallback)(i.push,[]),d=Object(n.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/";c(e.data.data),N(e.data.data),o(!1),m(t)}),[c,m]);return{sendAuthReq:function(){var e=Object(ne.a)(ae.a.mark((function e(t,a){var n;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le()(a.email)&&oe()(a.password,{min:8})){e.next=2;break}return e.abrupt("return",r({message:"Try again with a valid values."}));case 2:if(!a.passwordConfirm||a.passwordConfirm===a.password){e.next=4;break}return e.abrupt("return",r({message:"Passwords does not match."}));case 4:return o(!0),e.prev=5,e.next=8,ce.post("/users".concat(t),a);case 8:n=e.sent,console.log(n.data.data),d(n),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),r(e.t0.response.data),o(!1);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,a){return e.apply(this,arguments)}}(),isLoading:u,error:a,getMe:Object(n.useCallback)(Object(ne.a)(ae.a.mark((function e(){var t;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,ce.get("/users/me");case 4:t=e.sent,d(t),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),r(!0),o(!1),m("/login");case 13:case"end":return e.stop()}}),e,null,[[1,8]])}))),[m,d])}},me=function(){var e=ie(),t=e.sendAuthReq,a=e.error,c=e.isLoading,s=Object(n.useRef)(null),l=Object(n.useRef)(null);return r.a.createElement("form",{className:Q.a.Auth,onSubmit:function(e){return e.preventDefault(),t("/login",{email:s.current.value,password:l.current.value})}},r.a.createElement("h2",null,"Log in"),a?r.a.createElement("p",{className:Q.a.AuthError},a.message):null,r.a.createElement(ee,{type:"email",placeholder:"Your E-mail",ref:s}),r.a.createElement(ee,{type:"password",placeholder:"Your Password",ref:l}),r.a.createElement(d,null,c?"Loading...":"Submit"),r.a.createElement(b.b,{to:"/signup"},"Create new account"))},de=function(){var e=ie(),t=e.sendAuthReq,a=e.error,c=e.isLoading,s=Object(n.useRef)(null),l=Object(n.useRef)(null),u=Object(n.useRef)(null),o=Object(n.useRef)(null);return r.a.createElement("form",{className:Q.a.Auth,onSubmit:function(e){return e.preventDefault(),t("/signup",{username:s.current.value,email:l.current.value,password:u.current.value,passwordConfirm:o.current.value})}},r.a.createElement("h2",null,"Sign up"),a?r.a.createElement("p",null,a.message):null,r.a.createElement(ee,{type:"text",placeholder:"Your Username",ref:s}),r.a.createElement(ee,{type:"email",placeholder:"Your E-mail",ref:l}),r.a.createElement(ee,{type:"password",placeholder:"Your Password",ref:u}),r.a.createElement(ee,{type:"password",placeholder:"Confirm Your Password",ref:o}),r.a.createElement(d,null,c?"Loading...":"Submit"),r.a.createElement(b.b,{to:"/login"},"Login to your account"))};var fe=function(){var e=Object(n.useContext)(y).isDark,t=Object(n.useContext)(J).user,a=ie().getMe;Object(n.useEffect)((function(){a()}),[a]);var c=r.a.createElement(U,null,r.a.createElement(k.d,null,r.a.createElement(k.b,{exact:!0,path:"/"},r.a.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("h1",null,"Select User"))),r.a.createElement(k.b,{path:"/chat/:username"},r.a.createElement(V,null)),r.a.createElement(k.a,{to:"/"})));return t||(c=r.a.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(S.a,{fixed:!0,maxWidth:"sm"},r.a.createElement(k.d,null,r.a.createElement(k.b,{path:"/login"},r.a.createElement(me,null)),r.a.createElement(k.b,{path:"/signup"},r.a.createElement(de,null)),r.a.createElement(k.a,{to:"/login"}))))),r.a.createElement("div",{className:["App",e?"Dark":"Light"].join(" ")},c)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=function(e){var t=Object(n.useState)(null),a=Object(p.a)(t,2),c=a[0],s=a[1];return r.a.createElement(J.Provider,{value:{user:c,setUser:s}},e.children)},he=function(e){var t=localStorage.getItem("isDark"),a=Object(n.useState)(!t||JSON.parse(t)),c=Object(p.a)(a,2),s=c[0],l=c[1];return r.a.createElement(y.Provider,{value:{isDark:s,toggleTheme:function(){return l((function(e){return localStorage.setItem("isDark",JSON.stringify(!e)),!e}))}}},e.children)},ge=r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null,r.a.createElement(he,null,r.a.createElement(b.a,null,r.a.createElement(fe,null)))));s.a.render(ge,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e,t,a){e.exports={Usr:"User_Usr__3MsOa",UsrPic:"User_UsrPic__109hm",UsrPicOnline:"User_UsrPicOnline__3nFIW",UsrName:"User_UsrName__yNN1i"}},19:function(e,t,a){e.exports={Container:"ChatMessage_Container__2IsQr",Msg:"ChatMessage_Msg__1U98C",Recevied:"ChatMessage_Recevied__1zSaq",Sent:"ChatMessage_Sent__Jfl94",Date:"ChatMessage_Date__2C6CW"}},24:function(e,t,a){e.exports={Auth:"Auth_Auth__28SGs",AuthError:"Auth_AuthError__3r9be"}},29:function(e,t,a){e.exports=a.p+"static/media/default.5881650b.jpg"},34:function(e,t,a){e.exports={Header:"Header_Header__2_ci0",HeaderImg:"Header_HeaderImg__YJ_cK",HeaderName:"Header_HeaderName__eYVeU"}},35:function(e,t,a){e.exports={Send:"ChattingSend_Send__1ztL_",SendTextarea:"ChattingSend_SendTextarea__1G_f3",SendBtn:"ChattingSend_SendBtn__Zjerc"}},43:function(e,t,a){e.exports={Right:"Layout_Right__2hNw0",Left:"Layout_Left__1eF2e",ThemeBtn:"Layout_ThemeBtn__oe5wA"}},44:function(e,t,a){e.exports={Users:"Users_Users__3Kw6G",UsersTitle:"Users_UsersTitle__1ioh4"}},77:function(e,t,a){e.exports={Btn:"Button_Btn__22W31"}},83:function(e,t,a){e.exports={Chat:"Chatting_Chat__KlwHr",Error:"Chatting_Error__3VsbA"}},84:function(e,t,a){e.exports={Msgs:"ChattingMessages_Msgs__h3PUO"}},86:function(e,t,a){e.exports={Input:"Input_Input__3nJZI"}},92:function(e,t,a){e.exports=a(155)},97:function(e,t,a){},98:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.92cc892e.chunk.js.map