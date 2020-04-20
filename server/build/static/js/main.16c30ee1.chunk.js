(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{126:function(e,t){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(74),s=a.n(c),o=(a(91),a(92),a(33)),u=a.n(o),l=a(158),i=a(75),m=a.n(i),d=function(e){return r.a.createElement("button",{className:[m.a.Btn,e.className].join(" "),onClick:e.onClick,type:e.type||"button"},e.children)},f=a(32),g=a(3),p=a(44),h=a.n(p),E=a(17),_=a.n(E),b=a(10),v=a(26),j=a.n(v),O=function(e){return r.a.createElement(b.b,{to:e.to,className:_.a.Usr},r.a.createElement("div",{className:_.a.UsrPic},e.online?r.a.createElement("div",{className:_.a.UsrPicOnline}):null,r.a.createElement("img",{src:j.a,alt:"",className:_.a.UsrPic})),r.a.createElement("p",{className:_.a.UsrName},e.name))},C=a(77),x=a.n(C).a.connect("http://127.0.0.1:4000"),y=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){x.on("userloggedin",(function(e){c(e)})),x.on("userloggedout",(function(e){c(e)}))}),[]),r.a.createElement("div",{className:h.a.Users},r.a.createElement("h2",{className:h.a.UsersTitle},"Users"),a.map((function(e){return r.a.createElement(O,{key:e.username,name:e.username,to:"/chat/".concat(e.username),online:e.online})})))},N=function(e){return r.a.createElement("div",{className:u.a.Layout},r.a.createElement(l.a,{container:!0,spacing:0},r.a.createElement(l.a,{item:!0,xs:2,className:u.a.Right},r.a.createElement(y,null),r.a.createElement(d,{className:u.a.Logout},r.a.createElement(f.a,null)," ",r.a.createElement("p",null,"Logout"))),r.a.createElement(l.a,{item:!0,xs:10},e.children)))},S=a(14),U=a(84),w=a(48),k=a.n(w),M=a(34),L=a.n(M),H=function(e){return r.a.createElement("div",{className:L.a.Header},r.a.createElement("img",{src:e.photo,alt:"",className:L.a.HeaderImg}),r.a.createElement("p",{className:L.a.HeaderName},e.name))},P=a(81),A=a.n(P),I=a(18),R=a.n(I),T=function(e){var t=new Date(e.createdAt),a="".concat(t.getHours(),":").concat(t.getMinutes());return r.a.createElement("div",{className:[R.a.Container,"recevied"===e.type?R.a.Recevied:"sent"===e.type?R.a.Sent:null].join(" ")},r.a.createElement("p",{className:R.a.Msg},e.children),r.a.createElement("p",{className:R.a.Date},a))},B=Object(n.createContext)({user:null,setUser:function(){}}),W=function(e){var t=Object(n.useRef)(null),a=Object(n.useContext)(B).user;return Object(n.useEffect)((function(){t.current.scrollTop=t.current.scrollHeight}),[e.msgs]),r.a.createElement("div",{className:A.a.Msgs,ref:t},e.msgs.map((function(e,t){return r.a.createElement(T,{key:"".concat(e.user,"-").concat(t),type:e.user===a.username?"sent":"recevied",createdAt:e.createdAt},e.message)})))},Y=a(35),D=a.n(Y),q=a(159),F=function(e){return r.a.createElement("div",{className:D.a.Send},r.a.createElement(q.a,{placeholder:"Type a message...",className:D.a.SendTextarea,value:e.msg,onChange:function(t){return e.setMsg(t.target.value)},onKeyDown:function(t){13!==t.keyCode||t.shiftKey||(t.preventDefault(),e.sendMsg())}}),r.a.createElement(d,{className:D.a.SendBtn,onClick:e.sendMsg},r.a.createElement(f.b,null)))},J=function(){var e=Object(n.useContext)(B).user,t=Object(S.h)().username,a=Object(n.useState)(!1),c=Object(g.a)(a,2),s=c[0],o=c[1],u=Object(n.useState)(null),l=Object(g.a)(u,2),i=l[0],m=l[1],d=Object(n.useState)([]),f=Object(g.a)(d,2),p=f[0],h=f[1],E=Object(n.useState)(""),_=Object(g.a)(E,2),b=_[0],v=_[1];Object(n.useEffect)((function(){console.log("render")})),Object(n.useEffect)((function(){return o(!0),s&&(m(null),v(null),v("")),function(){return o(!1)}}),[t,s]),Object(n.useEffect)((function(){return s&&(t===e.username?m(r.a.createElement("h1",{className:k.a.Error},"You can't chat with yourself")):(x.emit("room",{curUser:e.username,chatWith:t}),x.on("getAllMsgs",(function(e){h(e)})))),function(){return o(!1)}}),[e,t,s]),Object(n.useEffect)((function(){x.on("sendmsg",(function(e){return h((function(t){return[].concat(Object(U.a)(t),[e])}))}))}),[]);return r.a.createElement("div",{className:k.a.Chat},r.a.createElement(H,{photo:j.a,name:t}),i||r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{msgs:p}),r.a.createElement(F,{sendMsg:function(){if(""===b.trim())return v("");x.emit("sendmsg",{message:b,from:e.username,to:t}),v("")},msg:b,setMsg:v})))},K=a(30),Q=a.n(K),X=a(82),Z=a.n(X),z=function(e){return r.a.createElement("input",{type:e.type||"text",placeholder:e.placeholder,className:[Z.a.Input,e.className].join(" "),onChange:e.onChange,required:!0})},V=a(160),$=a(22),G=a.n($),ee=a(49),te=a(83),ae=a.n(te).a.create({baseURL:"https://desolate-shelf-39948.herokuapp.com/api/v1",withCredentials:!0}),ne=function(){var e=Object(n.useState)(null),t=Object(g.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(B).setUser,s=Object(S.g)().push,o=Object(n.useCallback)((function(e){var t;c(e.data.data),t=e.data.data,x.emit("loggedIn",t),s("/")}),[c,s]);return{sendAuthReq:function(){var e=Object(ee.a)(G.a.mark((function e(t,a){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.post("/users/".concat(t),a);case 3:n=e.sent,o(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),error:a,getMe:Object(n.useCallback)(Object(ee.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.get("/users/me");case 3:t=e.sent,o(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r(!0),s("/login");case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),[s,o])}},re=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(g.a)(s,2),u=o[0],l=o[1],i=ne(),m=i.sendAuthReq,f=i.error;Object(n.useEffect)((function(){console.log(f)}),[f]);return r.a.createElement(V.a,{maxWidth:"sm"},r.a.createElement("div",{className:Q.a.Auth},r.a.createElement("p",null,"Log in"),r.a.createElement(z,{type:"email",placeholder:"Your E-mail",onChange:function(e){return c(e.target.value)}}),r.a.createElement(z,{type:"password",placeholder:"Your Password",onChange:function(e){return l(e.target.value)}}),r.a.createElement(d,{onClick:function(){return m("/login",{email:a,password:u})}},"Submit"),r.a.createElement(b.b,{to:"/signup"},"Create a new account")))},ce=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(g.a)(s,2),u=o[0],l=o[1],i=Object(n.useState)(""),m=Object(g.a)(i,2),f=m[0],p=m[1],h=Object(n.useState)(""),E=Object(g.a)(h,2),_=E[0],v=E[1],j=ne(),O=j.sendAuthReq,C=j.error;Object(n.useEffect)((function(){console.log(C)}),[C]);return r.a.createElement(V.a,{maxWidth:"sm"},r.a.createElement("div",{className:Q.a.Auth},r.a.createElement("p",null,"Sign up"),r.a.createElement(z,{type:"text",placeholder:"Your Name",onChange:function(e){return c(e.target.value)}}),r.a.createElement(z,{type:"email",placeholder:"Your E-mail",onChange:function(e){return l(e.target.value)}}),r.a.createElement(z,{type:"password",placeholder:"Your Password",onChange:function(e){return p(e.target.value)}}),r.a.createElement(z,{type:"password",placeholder:"Confrim Your Password",onChange:function(e){return v(e.target.value)}}),r.a.createElement(d,{onClick:function(){return O("/signup",{username:a,email:u,password:f,passwordConfirm:_})}},"Submit"),r.a.createElement(b.b,{to:"/login"},"Login to your account")))};var se=function(){var e=Object(n.useContext)(B).user,t=ne(),a=t.getMe,c=t.error;Object(n.useEffect)((function(){a()}),[a]);var s=r.a.createElement(N,null,r.a.createElement(S.d,null,r.a.createElement(S.b,{exact:!0,path:"/"},r.a.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("h1",null,"Select User"))),r.a.createElement(S.b,{path:"/chat/:username"},r.a.createElement(J,null))));return e||(s=r.a.createElement("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}},c?r.a.createElement(S.d,null,r.a.createElement(S.b,{path:"/login"},r.a.createElement(re,null)),r.a.createElement(S.b,{path:"/signup"},r.a.createElement(ce,null)),r.a.createElement(S.a,{to:"/"})):r.a.createElement("h1",null,"Loading..."))),s};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=function(e){var t=Object(n.useState)(null),a=Object(g.a)(t,2),c=a[0],s=a[1];return r.a.createElement(B.Provider,{value:{user:c,setUser:s}},e.children)},ue=r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null,r.a.createElement(b.a,null,r.a.createElement(se,null))));s.a.render(ue,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,a){e.exports={Usr:"User_Usr__2ONx8",UsrPic:"User_UsrPic__2gE94",UsrPicOnline:"User_UsrPicOnline__27DWs",UsrName:"User_UsrName__3IkUZ"}},18:function(e,t,a){e.exports={Container:"ChatMessage_Container__2Cnpz",Msg:"ChatMessage_Msg__kFxk5",Recevied:"ChatMessage_Recevied__1YT_Q",Sent:"ChatMessage_Sent__3tWZH",Date:"ChatMessage_Date__1qCTj"}},26:function(e,t,a){e.exports=a.p+"static/media/jeffrey_000.1dad94d1.png"},30:function(e,t,a){e.exports={Auth:"Auth_Auth__3aB5K"}},33:function(e,t,a){e.exports={Layout:"Layout_Layout__2ugx7",Right:"Layout_Right__1Quyd",Left:"Layout_Left__1TEt3",Logout:"Layout_Logout__uaXam"}},34:function(e,t,a){e.exports={Header:"Header_Header__2W_-S",HeaderImg:"Header_HeaderImg__XxUoO",HeaderName:"Header_HeaderName__1tDVR"}},35:function(e,t,a){e.exports={Send:"ChattingSend_Send__CJ-Ny",SendTextarea:"ChattingSend_SendTextarea__1lYt8",SendBtn:"ChattingSend_SendBtn__2L8xx"}},44:function(e,t,a){e.exports={Users:"Users_Users__209Fa",UsersTitle:"Users_UsersTitle__20rPy"}},48:function(e,t,a){e.exports={Chat:"Chatting_Chat__1i6W-",Error:"Chatting_Error__3Qj7P"}},75:function(e,t,a){e.exports={Btn:"Button_Btn__3vq0b"}},81:function(e,t,a){e.exports={Msgs:"ChattingMessages_Msgs__3X1xr"}},82:function(e,t,a){e.exports={Input:"Input_Input__cbq6C"}},86:function(e,t,a){e.exports=a(146)},91:function(e,t,a){},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.16c30ee1.chunk.js.map