(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"ContactForm_form__5ktXr",title:"ContactForm_title__1PGur",btn:"ContactForm_btn__1lYLs"}},,,,,,function(e,t,n){e.exports={block:"Filter_block__3fPw6",title:"Filter_title__1Xhq-",input:"Filter_input__3xb-L"}},function(e,t,n){e.exports={block:"Contacts_block__3XNLU"}},,function(e,t,n){e.exports={btn:"ContactListItem_btn__xH8js",textContent:"ContactListItem_textContent__8C-K3"}},,function(e,t,n){e.exports={ul:"ContactList_ul__IZGvI"}},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),s=n(14),l=n(3),o=n(4),u=n(5),b=n(7),m=n(6),h=n(23),d=n(2),j=n.n(d),f=n(0),O=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={id:Object(h.a)(),name:"",number:""},e.handleChange=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.handleSubmit(e.state),e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.onSubmit,children:[Object(f.jsx)("span",{className:j.a.title,children:"Name"}),Object(f.jsx)("input",{onChange:this.handleChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(f.jsx)("span",{className:j.a.title,children:"Number"}),Object(f.jsx)("input",{name:"number",type:"tel",onChange:this.handleChange,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(f.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),x=n(8),p=n.n(x),C=function(e){var t=e.handleChange,n=e.filter;return Object(f.jsxs)("div",{className:p.a.block,children:[Object(f.jsx)("label",{className:p.a.title,htmlFor:"filter",children:"Find contacts by name:"}),Object(f.jsx)("input",{id:"filter",name:"filter",type:"text",className:p.a.input,onChange:t,value:n})]})},_=n(11),v=n.n(_),g=function(e){var t=e.item,n=e.handleDelete,a=t.name,c=t.number;return Object(f.jsx)("p",{children:Object(f.jsxs)("div",{className:v.a.textContent,children:[Object(f.jsxs)("span",{children:[a,": ",c]}),Object(f.jsx)("button",{className:v.a.btn,onClick:n,children:"Delete"})]})})},N=n(13),k=n.n(N),S=function(e){var t=e.items,n=e.handleDelete;return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{className:k.a.ul,children:t.map((function(e){return Object(f.jsx)(g,{item:e,handleDelete:function(){return n(e.id)}},e.id)}))})})},y=n(9),w=n.n(y),A=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={items:[],filter:""},e.handleDelete=function(t){e.setState((function(e){return{items:e.items.filter((function(e){return e.id!==t}))}}))},e.handleChange=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){if(t)if(e.state.items.some((function(e){return e.name===t.name})))alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442: "+t.name+" \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 ");else{var n={id:Object(h.a)(),name:t.name,number:t.number};e.setState((function(e){return{items:[n].concat(Object(s.a)(e.items))}}))}else alert("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!")},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.items,n=e.filter,a=n.toLowerCase().trim(),c=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:w.a.title,children:"Phonebook"}),Object(f.jsx)(O,{handleSubmit:this.handleSubmit}),Object(f.jsx)("h2",{className:w.a.titleContact,children:"Contacts"}),Object(f.jsxs)("div",{className:w.a.block,children:[Object(f.jsx)(C,{filter:n,handleChange:this.handleChange}),Object(f.jsx)(S,{items:c,handleDelete:this.handleDelete})]})]})}}]),n}(a.Component),D=function(){return Object(f.jsx)("div",{className:"cont",children:Object(f.jsx)(A,{})})};n(21);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.91a03841.chunk.js.map