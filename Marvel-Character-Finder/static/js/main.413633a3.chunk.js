(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),m=a(3),i=a(4),s=a(6),u=a(5),o=(a(12),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){e.preventDefault(),e.persist(),n.setState({field:e.target.value})},n.handleSubmit=function(e){e.preventDefault();fetch("https://gateway.marvel.com:443/v1/public/characters?name="+n.state.field+"&apikey=b48ba2026b914d5aa32bb13028f220ea",{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){e.data.results[0].name&&n.setState({final:e.data.results})})).catch((function(){alert("Could not find that character.")})),n.setState({field:""})},n.state={field:"",final:[]},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("small",null,'To search for a character, enter a name. If there are two words in the name, make sure to put a dash between both words. For example, "Spider-Man".'),l.a.createElement("form",{onSubmit:this.handleSubmit,className:"form"},l.a.createElement("label",{htmlFor:"field"},"Type in a Marvel character"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:this.state.field,name:"field",onChange:this.handleChange,className:"form-input"}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"form-button"},"Submit")),this.state.final.map((function(e){return l.a.createElement("div",{key:e.id,className:"char-info"},l.a.createElement("h1",null,e.name),l.a.createElement("p",null,e.description),l.a.createElement("h2",null,"Five comics:"),l.a.createElement("p",null,e.comics.items[0].name),l.a.createElement("p",null,e.comics.items[1].name),l.a.createElement("p",null,e.comics.items[2].name),l.a.createElement("p",null,e.comics.items[3].name),l.a.createElement("p",null,e.comics.items[4].name))})))}}]),a}(n.Component));c.a.render(l.a.createElement(o,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.413633a3.chunk.js.map