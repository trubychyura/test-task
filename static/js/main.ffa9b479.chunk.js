(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{239:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(23),a=n.n(c),i=(n(131),n(33)),o=n(24),s=n(125),d=n(38),j=n.n(d),b=n(112),u=n(44),l=n(15),O=n(74),m=j.a.mark(y),h=j.a.mark(k),x="LOAD_DATA",p="SET_DATA",f="SUBMIT_FORM",g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(t.payload.data);case f:return e.map((function(e){if(e.asin===t.payload.id){var n=[].concat(Object(l.a)(e.comments),[t.payload.data]);return Object(u.a)(Object(u.a)({},e),{},{comments:n})}return e}));default:return e}},v=function(e){return{type:p,payload:{data:e}}},w=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://demo8413434.mockable.io/");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.products);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function y(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(O.a)(w);case 2:return e=t.sent,t.next=5,Object(O.b)(v(e));case 5:case"end":return t.stop()}}),m)}function k(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.c)(x,y);case 2:case"end":return e.stop()}}),h)}var S=Object(o.c)({products:g}),E="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,_=Object(s.a)(),C=Object(o.e)(S,E(Object(o.a)(_)));_.run(k);var D,T,A,L,M,q,B,I,F,P,R,U,G,H,J,N,V,X=n(41),z=n(11),Y=n(10),K=n(242),Q=n(117),W=n(248),Z=n(243),$=n(12),ee=n(246),te=n(241),ne=Object(Y.b)(ee.a)(D||(D=Object($.a)(["\n  @media (max-width: ",") {\n    padding: 0 !important;\n  }\n\n  .modal-title {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  .modal-dialog {\n    max-width: 60%;\n    @media (max-width: ",") {\n      max-width: 70%;\n    }\n    @media (max-width: ",") {\n      max-width: 90%;\n      margin: auto;\n    }\n  }\n"])),(function(e){return e.theme.media.md}),(function(e){return e.theme.media.lg}),(function(e){return e.theme.media.md})),re=Object(Y.b)(te.a)(T||(T=Object($.a)(["\n  display: block;\n  max-height: 300px;\n  max-width: 100%;\n  margin: auto;\n"]))),ce=Object(Y.b)(Q.a)(A||(A=Object($.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),ae=Object(Y.b)(Q.a)(L||(L=Object($.a)(["\n  padding: 15px;\n"]))),ie=Object(Y.b)(K.a)(M||(M=Object($.a)(["\n  margin: 0;\n  justify-content: space-between;\n"]))),oe=n(4),se=Object(i.b)((function(e){return{products:e.products}}))((function(e){var t=e.products,n=Object(z.f)().id,r=Object(z.e)(),c=t.find((function(e){return e.asin===n}));if(!c)return null;return Object(oe.jsxs)(ne,{show:Boolean(n),onHide:function(){r.push("/")},children:[Object(oe.jsx)(ne.Header,{closeButton:!0,children:Object(oe.jsx)(ne.Title,{children:c.name})}),Object(oe.jsxs)(ne.Body,{as:K.a,children:[Object(oe.jsx)(Q.a,{lg:"auto",children:Object(oe.jsx)(re,{src:c.img})}),Object(oe.jsxs)(ce,{children:[Object(oe.jsx)("h5",{children:"Description:"}),Object(oe.jsx)("p",{children:Object(oe.jsx)("span",{children:c.name})})]}),Object(oe.jsxs)(ae,{lg:12,children:[Object(oe.jsx)("h5",{children:"Comments:"}),Object(oe.jsx)(W.a,{children:c.comments.map((function(e,t){return Object(oe.jsxs)(W.a.Item,{as:Z.a,children:[Object(oe.jsxs)(ie,{children:[Object(oe.jsx)("h6",{children:"Unknown user"}),Object(oe.jsx)(ge,{stars:e.rating})]}),Object(oe.jsx)("p",{children:e.text})]},t)}))})]})]}),Object(oe.jsx)(ne.Footer,{children:Object(oe.jsx)(Ce,{id:n})})]})})),de=Object(Y.b)(te.a)(q||(q=Object($.a)(["\n  max-height: 300px;\n  max-width: 100%;\n  display: block;\n"]))),je=Object(Y.b)(Q.a)(B||(B=Object($.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),be=Object(Y.b)(K.a)(I||(I=Object($.a)(["\n  border-bottom: 2px solid gray;\n  padding: 5px;\n"]))),ue=(Object(Y.b)(X.b)(F||(F=Object($.a)(["\n  display: block;\n"]))),function(e){var t=e.id,n=e.name,r=e.img;return Object(oe.jsxs)(be,{children:[Object(oe.jsx)(je,{children:Object(oe.jsx)(X.b,{to:"/".concat(t),children:n})}),Object(oe.jsx)(je,{children:Object(oe.jsx)(de,{src:r})})]})}),le=n(37),Oe=n(69),me=n(247),he=n(126),xe=Object(Y.b)(he.a)(P||(P=Object($.a)(["\n  transition: color 200ms;\n  width: 25px;\n  heidth: 25px;\n  ","\n  ","\n\n  @media (max-width: ",") {\n    width: 18px;\n    heidht: 18px;\n  }\n"])),(function(e){var t=e.value,n=e.rating,r=e.hover,c=e.theme;return"color: ".concat(t<=(r||n)?c.color.gold:c.color.silver,";")}),(function(e){return void 0!==e.hover&&"cursor: pointer;"}),(function(e){return e.theme.media.md})),pe=Object(Y.b)(me.a.Check)(R||(R=Object($.a)(["\n  display: none;\n"]))),fe=Object(Y.b)("div")(U||(U=Object($.a)(["\n  display: flex;\n"]))),ge=function(e){var t=e.name,n=e.stars,c=Object(r.useState)(null),a=Object(le.a)(c,2),i=a[0],o=a[1];return n?Object(oe.jsx)(fe,{children:Object(l.a)(Array(5)).map((function(e,t){return Object(oe.jsx)(xe,{value:t+1,rating:Math.round(n||0)},t)}))}):Object(oe.jsx)(fe,{children:Object(oe.jsx)(Oe.a,{name:t,children:function(e){var t=e.field;return Object(l.a)(Array(5)).map((function(e,n){var r=n+1;return Object(oe.jsxs)(me.a.Label,{htmlFor:"formRadio".concat(n),children:[Object(oe.jsx)(xe,{value:r,rating:t.value,hover:i,onMouseEnter:function(){return o(r)},onMouseLeave:function(){return o(0)}}),Object(oe.jsx)(pe,Object(u.a)(Object(u.a)({type:"radio",id:"formRadio".concat(n)},t),{},{value:r,checked:r===t.value}))]},n)}))}})})},ve=n(73),we=n(244),ye=n(245),ke=Object(Y.b)(me.a)(G||(G=Object($.a)(["\n  width: 100%;\n"]))),Se=Object(Y.b)(we.a)(H||(H=Object($.a)(["\n  font-size: 13px;\n  margin: 5px 0;\n  padding: 5px;\n"]))),Ee=Object(Y.b)(ye.a)(J||(J=Object($.a)(["\n  padding-left: 30px;\n  padding-right: 30px;\n"]))),_e={comment:"",rating:0},Ce=Object(i.b)(null,{handleSubmit:function(e,t){return{type:f,payload:{data:t,id:e}}}})((function(e){var t=e.id,n=e.handleSubmit;return Object(oe.jsx)(Oe.b,{initialValues:_e,onSubmit:function(e,r){var c=r.resetForm;n(t,{text:e.comment,rating:e.rating}),c()},validationSchema:ve.b({comment:ve.c().required("Comment is required!"),rating:ve.a().moreThan(0,"Product's rate is required!").required("Product's rate is required!")}),children:function(e){return Object(oe.jsxs)(ke,{onSubmit:e.handleSubmit,children:[Object(oe.jsxs)(ke.Group,{children:[Object(oe.jsx)(ke.Label,{children:"Products's rate:"}),Object(oe.jsx)(ge,{name:"rating"}),e.errors.rating&&e.touched.rating&&Object(oe.jsx)(Se,{variant:"danger",children:e.errors.rating})]}),Object(oe.jsxs)(ke.Group,{controlId:"formComment",children:[Object(oe.jsx)(ke.Label,{children:"Your comment:"}),Object(oe.jsx)(ke.Control,{as:"textarea",value:e.values.comment,placeholder:"Enter comment",name:"comment",onChange:e.handleChange}),e.errors.comment&&e.touched.comment&&Object(oe.jsx)(Se,{variant:"danger",children:e.errors.comment})]}),Object(oe.jsx)(Ee,{variant:"primary",type:"submit",children:"Send"})]})}})})),De=Object(Y.b)(Z.a)(N||(N=Object($.a)(["\n  padding: 20px 10px;\n"]))),Te=Object(Y.b)("h1")(V||(V=Object($.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),Ae=Object(i.b)((function(e){return{products:e.products}}),{loadData:function(){return{type:x}}})((function(e){var t=e.products,n=e.loadData;return Object(r.useEffect)((function(){n()}),[n]),Object(oe.jsxs)(De,{children:[Object(oe.jsx)(Te,{children:"List of products"}),t.map((function(e){var t=e.name,n=e.asin,r=e.img;return Object(oe.jsx)(ue,{id:n,name:t,img:r},n)}))]})})),Le={color:{gold:"gold",silver:"silver"},media:{md:"580px",lg:"1000px"}},Me=function(){return Object(oe.jsx)(Y.a,{theme:Le,children:Object(oe.jsxs)(X.a,{children:[Object(oe.jsx)(z.a,{path:"/",children:Object(oe.jsx)(Ae,{})}),Object(oe.jsx)(z.a,{path:"/:id",children:Object(oe.jsx)(se,{})})]})})};a.a.render(Object(oe.jsx)(i.a,{store:C,children:Object(oe.jsx)(Me,{})}),document.getElementById("root"))}},[[239,1,2]]]);
//# sourceMappingURL=main.ffa9b479.chunk.js.map