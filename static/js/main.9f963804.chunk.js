(this.webpackJsonpmeusite=this.webpackJsonpmeusite||[]).push([[0],{30:function(e,a,t){e.exports=t.p+"static/media/logowpp.ace81c4d.png"},34:function(e,a,t){e.exports=t.p+"static/media/newLogoColor.62354bd4.svg"},35:function(e,a,t){e.exports=t(64)},40:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(28),l=t.n(o),c=(t(40),t(4)),u=t(1),i=t(2),s=t(13),p=t.n(s),m=function(e){return new URLSearchParams(Object(u.f)().search).get(e)},d=t(29),g=t.n(d).a.create({baseURL:"https://knots-whatsapp.herokuapp.com",timeout:3e4,headers:{"Content-Type":"application/json"}});var E=function(e){var a=e.data;return r.a.createElement(r.a.Fragment,null,a.url?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"groupCard",href:a.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"groupContent"},r.a.createElement("img",{src:a.avatar,alt:a.name}),r.a.createElement("div",{className:"groupDescription"},r.a.createElement("h2",null,a.name),a.description&&r.a.createElement("span",null,a.description))),r.a.createElement("button",{type:"button",className:"groupButton"},"Entrar"))):r.a.createElement(c.b,{className:"groupCard",to:"/group/".concat(a._id)},r.a.createElement("div",{className:"groupContent"},r.a.createElement("img",{src:a.avatar,alt:a.name}),r.a.createElement("div",{className:"groupDescription"},r.a.createElement("h2",null,a.name),a.description&&r.a.createElement("span",null,a.description)))))},v=t(30),f=t.n(v),h=t(7),b=t(8);function j(){var e=Object(h.a)(["\n  height: ",";\n"]);return j=function(){return e},e}var x=b.a.div(j(),(function(e){return e.active&&"150px"}));var q=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(!1),u=Object(i.a)(l,2),s=u[0],p=u[1];return Object(n.useEffect)((function(){g.get("/category").then((function(e){o(e.data.CategoryList)}))}),[]),r.a.createElement(x,{active:s,className:"category"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(c.b,{to:"/category/".concat(e.categoryName),key:e._id},r.a.createElement("li",null,r.a.createElement("img",{className:"icon",src:f.a,alt:e.categoryName}),e.categoryName))}))),r.a.createElement("button",{type:"button",onClick:function(){return p(!s)}},s?"ver menos":"ver mais"))};var N=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)({avatar:"".concat("".concat(m("avatar"),"&oh=").concat(m("oh"))),url:m("url"),name:m("name"),_id:1}),c=Object(i.a)(l,1)[0];return Object(n.useEffect)((function(){g.get("/category/Figurinhas").then((function(e){return o(e.data.GroupList)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement("h2",{className:"title"},"Grupos")),r.a.createElement("div",{className:"feed"},m("avatar")?r.a.createElement("div",{className:"group"},r.a.createElement(p.a.Google,{class:"adsbygoogle",style:{display:"inline-block",width:"728px",height:" 60px"},client:"ca-pub-2270636537108959",slot:"5480228173"}),r.a.createElement(E,{data:c}),r.a.createElement(p.a.Google,{class:"adsbygoogle",style:{display:"inline-block",width:"728px",height:" 60px"},client:"ca-pub-2270636537108959",slot:"9000794686"})):t.map((function(e){return r.a.createElement(E,{key:e._id,data:e})})))))};var O=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",null),r.a.createElement("div",null)))};var y=function(e){var a=e.page,t=Object(n.useState)(a||1);return Object(i.a)(t,1)[0],r.a.createElement("ul",null)};var A=function(e){var a=e.match,t=Object(n.useState)([]),o=Object(i.a)(t,2),l=o[0],c=o[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),p=s[0],m=s[1];return Object(n.useEffect)((function(){m(!0),g.get("/category/".concat(a.params.id)).then((function(e){return c(e.data.GroupList)})),m(!1)}),[a.params.id]),r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement("main",null,p?r.a.createElement(O,null):r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title"},a.params.id),r.a.createElement("div",{className:"feed"},l.map((function(e){return r.a.createElement(E,{key:e._id,data:e})})),r.a.createElement(y,{page:a.params.page})))))},C=function(){var e=Object(n.useState)(Object(u.g)()),a=Object(i.a)(e,1)[0],t=Object(n.useState)([]),o=Object(i.a)(t,2),l=o[0],c=o[1];return Object(n.useEffect)((function(){window.scrollTo(0,0),g.get("/groups/".concat(a.id)).then((function(e){return c(e.data.group)}))}),[]),r.a.createElement("main",null,r.a.createElement(q,null),r.a.createElement("div",{id:"groupDetails",className:"feed"},r.a.createElement("div",{className:"group"},r.a.createElement(E,{data:l}))))},k={default:"#09BC8A",chatBackground:"#ECE5DD",warmBlack:"#128C7E",premium:"#25D366",premiumItem:"#f3c623",yankeesBlue:"#172A3A",steelTeal:"#508991",magicMint:"#128C7E",black:"#000",white:"#fff",red:"red"};function w(){var e=Object(h.a)(["\n  font-size: 18px;\n  color: red;\n  position: absolute;\n  top: -10px;\n  left: 10px;\n  padding: 0 5px;\n  font-size: 14px;\n  background-color: ",";\n  z-index: 10;\n"]);return w=function(){return e},e}function W(){var e=Object(h.a)(["\n  font-size: 14px;\n  color: ",";\n  position: absolute;\n  top: -10px;\n  left: 10px;\n  padding: 0 5px;\n  background-color: ",";\n  z-index: 10;\n"]);return W=function(){return e},e}function S(){var e=Object(h.a)(["\n  padding: 10px;\n  width: 100%;\n  font-size: 16px;\n  color: ",";\n  background-color: transparent;\n  border-color: transparent;\n"]);return S=function(){return e},e}function L(){var e=Object(h.a)(["\n  padding: 10px;\n  width: 100%;\n  height: 50px;\n  font-size: 16px;\n  color: ",";\n  background-color: transparent;\n  border-color: transparent;\n"]);return L=function(){return e},e}function z(){var e=Object(h.a)(["\n  position: relative;\n  /* height: 56px; */\n  border-radius: 10px;\n  width: 100%;\n  margin: 10px 0;\n  background-color: ",";\n  border-color: ",";\n  border: 1px solid #ccc;\n  /* justify-content: center; */\n  /* align-items: center; */\n"]);return z=function(){return e},e}var P=b.a.div(z(),(function(e){return e.bg?e.bg:"transparent"}),(function(e){return e.error?k.red:"#000"})),D=b.a.input(L(),(function(e){return e.error?k.red:k.black})),G=b.a.textarea(S(),(function(e){return e.error?k.red:k.black})),B=b.a.span(W(),(function(e){return e.error?k.red:"#000"}),(function(e){return e.bg?k.chatBackground:"#fff"}));b.a.span(w(),(function(e){return e.bg?k.chatBackground:"#fff"}));function F(e){var a=e.bg,t=e.title,n=e.type,o=e.error,l=e.onChange,c=e.value,u=e.placeholder,i=e.rows,s=e.numberOfLines,p=e.maxLength,m=e.multiline,d=e.autoFocus,g=e.capitalize;e.props;return r.a.createElement(P,{bg:a,error:o},t&&r.a.createElement(B,{bg:a,error:o},t),"TextInput"===n?r.a.createElement(D,{props:!0,required:!0,value:c,onChange:l,textAlignVertical:"top",numberOfLines:s,maxLength:p,placeholder:u,error:o,multiline:m}):r.a.createElement(G,{required:!0,onChange:l,rows:i,maxLength:p,value:c,bg:a,resize:"false",placeholder:u,error:o,autoFocus:d,autoCapitalize:g||"none",secureTextEntry:"Password"===n}))}function T(){var e=Object(h.a)(["\n  opacity: ",";\n  opacity: ",";\n"]);return T=function(){return e},e}var I=b.a.button(T(),(function(e){return e.loading?"0.2":"1"}),(function(e){return e.active?"1":"0.2"}));var _=function(e){var a=e.history,t=Object(n.useState)({}),o=Object(i.a)(t,2),l=o[0],c=o[1],u=Object(n.useState)([]),s=Object(i.a)(u,2),p=s[0],m=s[1],d=Object(n.useState)(""),E=Object(i.a)(d,2),v=E[0],f=E[1],h=Object(n.useState)(""),b=Object(i.a)(h,2),j=b[0],x=b[1],q=Object(n.useState)(""),N=Object(i.a)(q,2),O=N[0],y=N[1],A=Object(n.useState)(!1),C=Object(i.a)(A,2),k=C[0],w=C[1];return Object(n.useEffect)((function(){g.get("/category").then((function(e){return m(e.data.CategoryList)}))}),[]),r.a.createElement("main",{id:"addGroup"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:l.avatar,alt:""})),l.name?r.a.createElement("div",{className:"formGroup"},r.a.createElement(F,{title:"Nome do Grupo",type:"TextInput",maxLength:"30",value:l.name,onChange:function(e){return f(e.target.value)}}),r.a.createElement(F,{maxLength:"210",title:"Descri\xe7\xe3o",type:"TextArea",rows:5,value:j,onChange:function(e){return x(e.target.value)}}),r.a.createElement(F,{maxLength:"70",title:"Link do Grupo",type:"TextInput",value:v,onChange:function(e){return f(e.target.value)}}),r.a.createElement("select",{onChange:function(e){return y(e.target.value)}},r.a.createElement("option",{value:""},"Selecione uma categoria"),p.map((function(e){return r.a.createElement("option",{key:e._id,value:e.categoryName},e.categoryName)}))),r.a.createElement(I,{loading:k,active:!0,type:"button",onClick:function(){return function(){if(!j||!O)return alert("Preencha todos os campos");w(!0),g.post("/groups",{name:l.name,description:j,url:l.url,avatar:l.avatar,category:O}).then((function(e){a.push("/?sucess=true")})).catch((function(e){w(!1),alert("Houve um erro")}))}()}},k?"Aguarde":"Enviar grupo")):r.a.createElement("div",{className:"groupValid"},r.a.createElement(F,{title:"Link do grupo",type:"TextInput",value:v,onChange:function(e){return f(e.target.value)}}),r.a.createElement(I,{loading:k,type:"button",active:v,onClick:function(){v&&(v.includes("https://chat.whatsapp.com/")?g.post("/groups/validate",{url:v}).then((function(e){return c(e.data)})):alert("Url invalida."))}},k?"Aguarde":"Validar")))))},R=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:N,exact:!0}),r.a.createElement(u.a,{path:"/category/:id/:page?",component:A}),r.a.createElement(u.a,{path:"/group/:id",component:C}),r.a.createElement(u.a,{path:"/new-group/",component:_}))},V=t(34),U=t.n(V),J=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"widthContainer"},r.a.createElement("ul",null,r.a.createElement("li",{className:"left"},r.a.createElement(c.b,{to:"/",className:"logo"},r.a.createElement("img",{src:U.a,alt:""}),r.a.createElement("span",null,"Knots - Grupos do zap"))),r.a.createElement("li",{className:"right"},r.a.createElement(c.b,{to:"/new-group"},"Adicionar grupo"),r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.knotsgrupos",target:"_blank",className:"playstore",rel:"noopener noreferrer"},"Baixe o Aplicativo")))))};var M=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"seo-content"},r.a.createElement("div",{className:"footer-text"},r.a.createElement("div",{className:"cWrap px-1"},r.a.createElement("h2",null,"O que \xe9 o gerazap"),r.a.createElement("p",null,"N\xf3s somos o melhor site de",r.a.createElement("strong",null,"Links de Grupos de WhatsApp")," na internet. Aqui voc\xea encontra os melhores grupos de whatsapp para participar. Al\xe9m disso, voc\xea tamb\xe9m pode cadastrar seu grupo do whatsapp enviando o link. Dessa forma, muitas pessoas encontrar\xe3o o seu grupo de whatsapp e voc\xea ter\xe1 muitos novos participantes. Voc\xea pode participar de quantos grupos do whatsapp desejar, sem limites, e tamb\xe9m pode enviar quantos grupos quiser."),r.a.createElement("h2",null,"Como criar um grupo de WhatsApp?"),r.a.createElement("p",null,"Criar um grupo de WhatsApp \xe9 muito f\xe1cil e r\xe1pido, veja s\xf3:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Abra seu WhatsApp e, na parte inferior, clique na aba",r.a.createElement("strong",null,"Conversas"),"."),r.a.createElement("li",null,"Em seguida, no canto superior direito, logo abaixo do campo de pesquisa, clique em ",r.a.createElement("strong",null,"Novo grupo"),"."),r.a.createElement("li",null,"Na lista de amigos, selecione os participantes do grupo inicial e clique em ",r.a.createElement("strong",null,"Avan\xe7ar"),"."),r.a.createElement("li",null,"Digite o nome do grupo de whatsapp que ser\xe1 criado."),r.a.createElement("li",null,"Clique no \xedcone da c\xe2mera e adicione uma foto ao seu grupo."),r.a.createElement("li",null,"Por fim, clique no bot\xe3o ",r.a.createElement("strong",null,"Criar"),".")),r.a.createElement("p",null,"Uma dica super importante para voc\xea ter sucesso com seu grupo do whatsapp: pense em um nome interessante para o seu grupo e escolha uma boa foto relacionada ao tema do grupo. Isso far\xe1 com que mais pessoas se interessem em participar do seu grupo de WhatsApp."),r.a.createElement("h2",null,"Como excluir um grupo de WhatsApp?"),r.a.createElement("ol",null,r.a.createElement("li",null,"Abra o WhatsApp e clique no grupo que deseja excluir."),r.a.createElement("li",null,"Com o grupo aberto, clique no nome do grupo na parte superior."),r.a.createElement("li",null,"Role para baixo at\xe9 a lista de participantes e remova todos os participantes, um por um."),r.a.createElement("li",null,"Role at\xe9 a parte inferior da tela e clique em",r.a.createElement("strong",null,"Sair do grupo"),"."),r.a.createElement("li",null,"Por fim, clique em ",r.a.createElement("strong",null,"Excluir grupo"),".")),r.a.createElement("p",null,"Dica: voc\xea deve primeiro remover todos os participantes do grupo antes de sair do grupo, pois, caso contr\xe1rio, o grupo n\xe3o ser\xe1 exclu\xeddo e algum dos participantes se tornar\xe1 o novo administrador do grupo."),r.a.createElement("h2",null,"Como encontrar um grupo de WhatsApp?"),r.a.createElement("p",null,"Para encontrar grupos do whatsapp, voc\xea deve ir ao nosso site (gruposwhats.app) e pesquisar entre as v\xe1rias categorias de grupos que temos. No momento, voc\xea n\xe3o pode procurar grupos de whatsapp no \u200b\u200bpr\xf3prio aplicativo."),r.a.createElement("h2",null,"Como entrar em um grupo de WhatsApp?"),r.a.createElement("p",null,"Para entrar em um grupo de WhatsApp, voc\xea deve:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Primeiro visite nosso site."),r.a.createElement("li",null,"Pesquise o grupo ao qual voc\xea deseja entrar nas v\xe1rias categorias do nosso site."),r.a.createElement("li",null,"Clique no grupo ao qual voc\xea deseja entrar."),r.a.createElement("li",null,"Na p\xe1gina que ser\xe1 aberta, clique em",r.a.createElement("strong",null,"Ingressar no grupo"),".")),r.a.createElement("h2",null,"Como sair de um grupo de WhatsApp?"),r.a.createElement("ol",null,r.a.createElement("li",null,"Abra o Whatsapp e clique no grupo que deseja sair."),r.a.createElement("li",null,"Com o grupo aberto, clique no nome do grupo na parte superior."),r.a.createElement("li",null,"Role at\xe9 a parte inferior da tela e clique em",r.a.createElement("strong",null,"Sair do grupo"),".")),r.a.createElement("h2",null,"Como adicionar algu\xe9m a um grupo de WhatsApp?"),r.a.createElement("p",null,"Para adicionar algu\xe9m a um grupo de WhatsApp, siga as etapas abaixo:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Abra o Whatsapp e clique no grupo que voc\xea deseja adicionar algu\xe9m."),r.a.createElement("li",null,"Clique no nome do grupo na parte superior."),r.a.createElement("li",null,"Role para baixo at\xe9 a lista de participantes e clique em",r.a.createElement("strong",null,"Adicionar participantes"),"."),r.a.createElement("li",null,"Na lista que ser\xe1 aberta, selecione todas as pessoas que voc\xea deseja adicionar ao grupo."),r.a.createElement("li",null,"Finalmente, clique no bot\xe3o ",r.a.createElement("strong",null,"Adicionar")," no canto superior direito.")),r.a.createElement("p",null,"Aten\xe7\xe3o: para adicionar participantes ao grupo do whatsapp, voc\xea deve ser administrador do grupo."),r.a.createElement("h2",null,"Como fazer uma chamada em grupo de WhatsApp?"),r.a.createElement("p",null,"Voc\xea sabia que pode fazer uma liga\xe7\xe3o em grupo no whatsapp? Sim, voc\xea pode fazer liga\xe7\xf5es em grupo de at\xe9 4 pessoas por vez, sendo voc\xea e mais 3. As chamadas podem ser de v\xeddeo ou \xe1udio. Siga os passos abaixo:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Abra o Whatsapp e clique no grupo que voc\xea deseja fazer a chamada."),r.a.createElement("li",null,"No canto superior direito do grupo, clique no \xedcone do telefone com um sinal de mais."),r.a.createElement("li",null,"Na lista que foi aberta, selecione at\xe9 3 pessoas."),r.a.createElement("li",null,"Por fim, clique no \xedcone da c\xe2mera de v\xeddeo se desejar criar uma chamada de v\xeddeo ou clique no \xedcone do telefone para criar uma chamada de \xe1udio.")),r.a.createElement("h2",null,"Quantas pessoas cabem em um grupo de WhatsApp?"),r.a.createElement("p",null,"Atualmente, um grupo de WhatsApp tem capacidade para at\xe9 256 pessoas. Por\xe9m, inicialmente s\xf3 eram permitidos 100 pessoas por grupo, mas com o passar do tempo e o crescimento exponencial do aplicativo, o WhatsApp decidiu no ano de 2016 aumentar a capacidade de 100 para 256."),r.a.createElement("h2",null,"Como criar uma p\xe1gina para o meu grupo de WhatsApp?"),r.a.createElement("p",null,"Criando uma p\xe1gina para o seu grupo de WhatsApp, voc\xea poder\xe1 dar mais informa\xe7\xf5es aos integrantes do seu grupo. Atrav\xe9s de uma p\xe1gina voc\xea pode cadastrar a descri\xe7\xe3o do grupo, regras que devem ser seguidas e at\xe9 mesmo quais s\xe3o os administradores do grupo."),r.a.createElement("p",null,"Dessa forma, voc\xea n\xe3o precisar\xe1 escrever uma descri\xe7\xe3o longa no seu grupo, basta compartilhar o link da p\xe1gina e pronto!"),r.a.createElement("p",null,"Pronto, a p\xe1gina do seu grupo de WhatsApp ser\xe1 criada e voc\xea j\xe1 poder\xe1 compartilhar com todos os integrantes do seu grupo.")))))};var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(J,null),r.a.createElement(R,null),r.a.createElement(M,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9f963804.chunk.js.map