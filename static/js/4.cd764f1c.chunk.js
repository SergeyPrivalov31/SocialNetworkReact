(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{294:function(e,s,t){"use strict";s.a=t.p+"static/media/lunatiki.e0a5dc02.png"},296:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__14XSY",dialogsItems:"Dialogs_dialogsItems__3_NFN",dialog:"Dialogs_dialog__364hk",active:"Dialogs_active__qR14H",messages:"Dialogs_messages__1GZZc",message:"Dialogs_message__1By2v"}},297:function(e,s,t){e.exports={item:"Message_item__7xw1S",alt:"Message_alt___7kkl"}},301:function(e,s,t){"use strict";t.r(s);var a=t(0),i=t.n(a),n=t(1),c=t(296),o=t.n(c),r=t(19),d=function(e){var s="/dialogs/"+e.id;return Object(n.jsx)("div",{className:o.a.dialog+" "+o.a.active,children:Object(n.jsx)(r.b,{to:s,children:e.name})})},j=t(297),l=t.n(j),u=t(294),b=function(e){return Object(n.jsx)("div",{className:l.a.item,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:u.a,alt:" "}),Object(n.jsxs)("span",{children:[" ",e.message," "]})]})})},g=t(7),m=t(90),O=t(130),h=t(66),_=t(26),p=Object(h.a)(50),x=Object(O.a)({form:"dialogAddMessageForm"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{children:Object(n.jsx)(m.a,{component:_.b,validate:[h.b,p],placeholder:"Enter your message",name:"newMessageBody"})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Send"})})]})})),f=function(e){var s=e.dialogsPage,t=s.dialogs.map((function(e){return Object(n.jsx)(d,{name:e.name,id:e.id})})),a=s.messages.map((function(e){return Object(n.jsx)(b,{message:e.message})}));return e.isAuth?Object(n.jsxs)("div",{className:o.a.dialogs,children:[Object(n.jsx)("div",{className:o.a.dialogsItems,children:t}),Object(n.jsxs)("div",{className:o.a.messages,children:[Object(n.jsx)("div",{children:a}),Object(n.jsx)("div",{children:Object(n.jsx)(x,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})})]})]}):Object(n.jsx)(g.a,{to:"/login"})},v=t(129),y=t(18),k=t(3),M=t(36),N=t(37),D=t(39),S=t(38),w=function(e){return{isAuth:e.auth.isAuth}},A=t(11);s.default=Object(A.d)(Object(y.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(v.b)(s))}}})),(function(e){var s=function(s){Object(D.a)(a,s);var t=Object(S.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(n.jsx)(e,Object(k.a)({},this.props)):Object(n.jsx)(g.a,{to:"/login"})}}]),a}(i.a.Component);return Object(y.b)(w)(s)}))(f)}}]);
//# sourceMappingURL=4.cd764f1c.chunk.js.map