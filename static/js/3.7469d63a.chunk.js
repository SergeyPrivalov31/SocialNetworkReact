(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{294:function(t,e,s){"use strict";e.a=s.p+"static/media/lunatiki.e0a5dc02.png"},295:function(t,e,s){t.exports={ava_description:"ProfileInfo_ava_description__35Zjp",ava:"ProfileInfo_ava__1TGaY",description:"ProfileInfo_description__2YnXW",statusBlock:"ProfileInfo_statusBlock__143__",contact:"ProfileInfo_contact__1u2Cq",contacts:"ProfileInfo_contacts__1MsO3"}},298:function(t,e,s){t.exports={content:"MyPosts_content__rm9kb",textArea:"MyPosts_textArea__3axZ3",button:"MyPosts_button__6pElG"}},299:function(t,e,s){t.exports={item:"Post_item__1Fevu",like:"Post_like__3ehFK"}},300:function(t,e,s){"use strict";s.r(e);var c=s(3),i=s(1),n=s(36),o=s(37),r=s(39),a=s(38),j=s(0),l=s.n(j),u=s(97),b=s(295),d=s.n(b),h=s(42),p=function(t){var e=Object(j.useState)(!1),s=Object(u.a)(e,2),c=s[0],n=s[1],o=Object(j.useState)(t.status),r=Object(u.a)(o,2),a=r[0],l=r[1];Object(j.useEffect)((function(){l(t.status)}),[t.status]);return Object(i.jsxs)("div",{children:[!c&&Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Status"}),":",Object(i.jsx)("span",{onDoubleClick:function(){n(!0)},className:d.a.statusBlock,children:t.status||"-----"})]}),c&&Object(i.jsx)("div",{children:Object(i.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(a)},value:a})})]})},O=s(99),f=s(52),x=s(26),v=s(130),m=s(49),P=s.n(m),_=Object(v.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,c=Object(f.a)(t,["handleSubmit","profile"]);return Object(i.jsxs)("form",{onSubmit:e,children:[Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"save"})}),c.error&&Object(i.jsx)("div",{className:P.a.formSummaryError,children:c.error}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Full name"}),":",Object(x.c)("Full name","fullName",[],x.a)]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Looking for a job"}),":",Object(x.c)("","lookingForAJob",[],x.a,{type:"checkbox"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"My professional skills"}),":",Object(x.c)("My professional skills","lookingForAJobDescription",[],x.b)]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"About me"}),":",Object(x.c)("About me","aboutMe",[],x.b)]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Contacts"})," ",Object.keys(s.contacts).map((function(t){return Object(i.jsx)("div",{className:d.a.contact,children:Object(i.jsxs)("b",{children:[t,": ",Object(x.c)(t,"contacts."+t,[],x.a)]})},t)}))]})]})})),g=function(t){var e=t.profile,s=t.isOwner,c=t.goToEditMode;return Object(i.jsxs)("div",{className:d.a.description,children:[s&&Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:c,children:"edit"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Full name: "}),e.fullName]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{className:d.a.contacts,children:"Contacts"})," ",Object.keys(e.contacts).map((function(t){return Object(i.jsx)(k,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},k=function(t){var e=t.contactTitle,s=t.contactValue;return Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:e}),": ",s]})},S=function(t){var e=t.profile,s=t.isOwner,c=t.savePhoto,n=t.status,o=t.updateStatus,r=t.saveProfile,a=Object(j.useState)(!1),l=Object(u.a)(a,2),b=l[0],f=l[1];if(!e)return Object(i.jsx)(h.a,{});return Object(i.jsxs)("div",{className:d.a.ava_description,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{className:d.a.ava,src:e.photos.large||O.a,alt:" "}),s&&Object(i.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&c(t.target.files[0])}}),Object(i.jsx)(p,{status:n,updateStatus:o})]}),Object(i.jsx)("div",{children:b?Object(i.jsx)(_,{initialValues:e,profile:e,onSubmit:function(t){r(t).then((function(){f(!1)}))}}):Object(i.jsx)(g,{goToEditMode:function(){f(!0)},profile:e,isOwner:s})})]})},y=s(96),N=s(41),w=s(298),A=s.n(w),I=s(299),M=s.n(I),C=s(294),F=function(t){return Object(i.jsxs)("div",{className:M.a.item,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:C.a}),Object(i.jsxs)("span",{children:[" ",t.message," "]})]}),Object(i.jsxs)("div",{className:M.a.like,children:[Object(i.jsx)("img",{src:"https://media.istockphoto.com/vectors/logo-heart-illustrationred-heart-design-icon-flat-modern-flat-love-vector-id1095022948?k=6&m=1095022948&s=170667a&w=0&h=-jGcCNLSkLNZpU4VylJdQgeLI830TR8loHOPiNw6zfw="}),t.likesCount]})]})},T=s(90),J=s(66),D=Object(J.a)(10),E=Object(v.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(i.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(i.jsx)("div",{children:Object(i.jsx)(T.a,{component:x.b,name:"newPostText",validate:[J.b,D]})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"Add Post"})})]})})),L=l.a.memo((function(t){var e=Object(N.a)(t.posts).reverse().map((function(t){return Object(i.jsx)(F,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(i.jsxs)("div",{className:A.a.content,children:["My Posts",Object(i.jsx)(E,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(i.jsx)("div",{className:A.a.posts,children:e})]})})),B=s(18),U=Object(B.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(y.a)(e))}}}))(L),V=function(t){return Object(i.jsxs)("div",{children:[Object(i.jsx)(S,{isOwner:t.isOwner,profile:t.profile,saveProfile:t.saveProfile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto}),Object(i.jsx)("div",{children:Object(i.jsx)(U,{})})]})},z=s(7),G=s(11),Z=function(t){Object(r.a)(s,t);var e=Object(a.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(V,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),s}(l.a.Component);e.default=Object(G.d)(Object(B.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:y.c,getStatus:y.d,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),z.g)(Z)}}]);
//# sourceMappingURL=3.7469d63a.chunk.js.map