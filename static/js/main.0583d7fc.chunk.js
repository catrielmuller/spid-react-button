(this["webpackJsonpspid-react-button-example"]=this["webpackJsonpspid-react-button-example"]||[]).push([[0],{176:function(e,t,n){e.exports=n(245)},177:function(e,t,n){},189:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);n(177);var a=n(0),i=n.n(a),r=n(19),o=n.n(r),l=n(45),c=n(41),s=n(10),u=n(13),d=n(143),p=n.n(d),m=n(144),E=n.n(m),f=n(145),v=n.n(f),g=n(146),h=n.n(g),b=n(147),y=n.n(b),I=n(148),N=n.n(I),_=n(149),D=n.n(_),P=n(150),S=n.n(P),O=n(151),k=n.n(O),j=n(63),w=n.n(j),T=n(64),x=n.n(T),C=n(152),L=n.n(C),M=n(153),A=n.n(M),R=n(154),G=n.n(R);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var z=[{protocols:["SAML"],entityName:"Aruba ID",logo:p.a,entityID:"https://loginspid.aruba.it",active:!0},{protocols:["SAML"],entityName:"Infocert ",logo:E.a,entityID:"https://identity.infocert.it",active:!0},{protocols:["SAML"],entityName:"Poste ID",logo:v.a,entityID:"https://posteid.poste.it",active:!0},{protocols:["SAML"],entityName:"Sielte",logo:h.a,entityID:"https://identity.sieltecloud.it",active:!0},{protocols:["SAML"],entityName:"Tim ID",logo:y.a,entityID:"https://login.id.tim.it/affwebservices/public/saml2sso",active:!0},{protocols:["SAML"],entityName:"Namirial ID",logo:N.a,entityID:"https://idp.namirialtsp.com/idp",active:!0},{protocols:["SAML"],entityName:"SPIDItalia Register.it",logo:D.a,entityID:"https://spid.register.it",active:!0},{protocols:["SAML"],entityName:"Intesa ID",logo:S.a,entityID:"https://spid.intesa.it",active:!0},{protocols:["SAML"],entityName:"Lepida ID",logo:k.a,entityID:"https://id.lepida.it/idp/shibboleth",active:!0}];function V(e,t){return[].concat(e.map((function(e){return B({},e,{active:!t.length})})),t.map((function(e){var t;return B({},e,{protocols:null!=(t=e.protocols)?t:["SAML"],active:!0})})))}function U(e){if(null==e||e.indexOf("{{idp}}")<0)throw Error('URL parameter must contain the "{{idp}} string')}function X(e){return"GET"===e.method.toUpperCase()}var F,H=(F=z,JSON.parse(JSON.stringify(F)));function W(){return H.sort((function(){return Math.random()-.5}))}function Y(e,t,n,a){var i=a.some((function(t){return t.entityID===e.entityID}));return t.indexOf(e.entityID)>-1&&e.protocols.indexOf(n)>-1&&(0===a.length||i)&&e.active}var J={it:{naviga_indietro:"Torna indietro",alt_logo_SPID:"Logo SPID",scegli_provider_SPID:"Scegli il tuo provider SPID",annulla_accesso:"Annulla",non_hai_SPID:"Non hai SPID?",cosa_SPID:"Cos'\xe8 SPID?",entra_con_SPID:"Entra con SPID",scopri_di_piu:"Scopri di pi\xf9.",accedi_con_idp:"Accedi a SPID con {0}",idp_disabled:"Provider non attivo",maggiori_info:"Maggiori info"},en:{naviga_indietro:"Go back",alt_logo_SPID:"SPID logo",scegli_provider_SPID:"Choose your SPID provider",annulla_accesso:"Cancel",non_hai_SPID:"Don't have SPID?",cosa_SPID:"What is SPID?",entra_con_SPID:"Sign in with SPID",scopri_di_piu:"Learn more.",accedi_con_idp:"Access to SPID with {0}",idp_disabled:"Provider not enabled",maggiori_info:"More info"},de:{naviga_indietro:"Gehen Sie zur\xfcck",alt_logo_SPID:"SPID Logo",scegli_provider_SPID:"W\xe4hle Ihren SPIDProvider",annulla_accesso:"Zur\xfccknehmen",non_hai_SPID:"Haben Sie nicht SPID?",cosa_SPID:"Was ist SPID?",entra_con_SPID:"Loggen Sie mit SPID",scopri_di_piu:"Finde mehr heraus.",accedi_con_idp:"Zugriff auf SPID mit {0}",idp_disabled:"Provider nicht aktiviert",maggiori_info:"Mehr info"}},Z="it",q=function(e){return Z=e,function(e,t){var n,a=null===(n=J[Z])||void 0===n?void 0:n[e];if(!a)throw Error("labelKey "+e+" non presente per la lingua selezionata "+Z);return null!=t?a.replace(/\{\d}/,t):a}},K={INIT:{type:"init"},ENTERING:{type:"entering"},ENTERED:{type:"entered"},EXITING:{type:"exiting"},EXITED:{type:"exited"}},Q={sm:"small",md:"medium",l:"large"};function $(e){return e.type.includes("enter")}var ee=function(e){var t=e.entityName,n=e.logo;return null==n?i.a.createElement("span",null,t):i.a.createElement("img",{src:""+n,alt:t,style:{maxWidth:170}})},te=function(e){var t=e.idp,n=e.entityID,a=e.url,r=e.i18n,o=e.isActive,l=e.delay,c=e.visibility,s=e.configuration,u=e.onProviderClicked,d=a.replace("{{idp}}",encodeURIComponent(n)),p=o?r("accedi_con_idp",t.entityName):r("idp_disabled"),m=$(c)&&c.type===K.ENTERING.type?{classNames:"spid-button-idp-fade-in",style:{animationDelay:l+"s"}}:{classNames:""},E=m.classNames,f=m.style;if(X(s))return i.a.createElement("span",{className:"spid-button-idp "+E,style:f},i.a.createElement("a",{id:n,title:p,href:o?d:void 0,disabled:!o,onClick:function(e){return null===u||void 0===u?void 0:u(t,e)},role:"link"},i.a.createElement(ee,{entityName:t.entityName,logo:t.logo})));var v=s.fieldName,g=s.extraFields,h=void 0===g?{}:g;return i.a.createElement("span",{className:"spid-button-idp"},i.a.createElement("form",{action:d,method:"POST"},i.a.createElement("button",{id:n,type:"submit",className:"spid-button-idp-button",title:p,disabled:!o,onClick:function(e){return null===u||void 0===u?void 0:u(t,e)}},i.a.createElement(ee,{entityName:t.entityName,logo:t.logo})),i.a.createElement("input",{type:"hidden",name:v,value:n}),Object.entries(h).map((function(e){var t=e[0],n=e[1];return i.a.createElement("input",{key:t,type:"hidden",name:t,value:n})}))))},ne=function(e){var t=e.url,n=e.altText;return i.a.createElement("img",{"aria-hidden":"true",src:t,alt:n,style:{float:"left"}})};var ae=function(e){var t=e.i18n,n=e.mapping,a=e.visibility,r=e.extraProviders,o=void 0===r?[]:r,l=e.supported,c=e.providers,s=e.protocol,u=e.url,d=e.closeModal,p=e.configuration,m=e.onProviderClicked,E=function(e){switch(e.type){case K.ENTERING.type:return{panel:"spid-button-panel-anim",buttonLogo:"spid-button-fade-in-left",buttonClose:"spid-button-fade-in-left",buttonManIcon:""};case K.EXITING.type:return{panel:"spid-button-panel-anim",buttonLogo:"",buttonClose:"",buttonManIcon:"spid-button-logo-animation-out"};case K.ENTERED.type:case K.EXITED.type:case K.INIT.type:return{panel:"",buttonLogo:"",buttonClose:"",buttonManIcon:""}}}(a),f=E.panel,v=E.buttonClose,g=E.buttonLogo,h=E.buttonManIcon;return i.a.createElement("section",{className:"spid-enter-container",hidden:!$(a)},i.a.createElement("div",{className:"spid-enter"},i.a.createElement("section",{className:"spid-button-panel spid-button-panel-select "+f,"aria-label":t("scegli_provider_SPID"),tabIndex:0},i.a.createElement("header",{className:"spid-button-header"},i.a.createElement("div",{className:"spid-button-panel-back"},i.a.createElement("div",{className:"spid-button-logo "+g},i.a.createElement(ne,{url:A.a,altText:t("alt_logo_SPID")})),i.a.createElement("div",{className:"spid-button-close-button spid-button-fade-out-right "+v},i.a.createElement("button",{tabIndex:0,className:"spid-button-panel-close-button spid-button-navigable","aria-label":t("naviga_indietro"),onClick:d},i.a.createElement(ne,{url:G.a,altText:t("naviga_indietro")}))))),i.a.createElement("div",{className:"spid-button-panel-content"},i.a.createElement("img",{className:"spid-button-little-man-icon "+h,src:L.a,alt:t("entra_con_SPID")}),i.a.createElement("div",{className:"spid-button-panel-content-center"},i.a.createElement("h1",{className:"spid-enter-title-page spid-button-fade-in-bottom spid-button-fade-out-bottom"},t("scegli_provider_SPID")),i.a.createElement("div",{className:"spid-idp-list"},c.map((function(e,r){var c=Y(e,l,s,o),d=e.entityID in n?n[e.entityID]:e.entityID;return i.a.createElement(te,{key:d,idp:e,entityID:d,url:u,isActive:c,i18n:t,visibility:a,delay:1.1+.1*(r+1),configuration:p,onProviderClicked:m})}))),i.a.createElement("div",{className:"spid-non-hai-spid"},t("non_hai_SPID")," ",i.a.createElement("a",{href:"https://www.spid.gov.it/richiedi-spid",target:"_blank noreferrer"},t("scopri_di_piu")))),i.a.createElement("div",{className:"spid-foot-btn"},i.a.createElement("button",{className:"spid-cancel-access-button",onClick:d},t("annulla_accesso")))))))},ie=W(),re=function(e){var t=e.i18n,n=e.theme,a=e.corners,r=e.fluid,o=e.size,l=e.toggleModal,c=e.modalVisibility,s=function(e){var t,n=e.theme,a=e.corners,i=e.size,r=e.fluid;return"xl"===i&&console.log('Size "xl" is not supported by SPID React Button with Modal variant'),[n,a,i?"size-"+(null!=(t=Q[i])?t:"large"):null,r?"fluid":null].map((function(e){return null!=e?"spid-button-"+e:null})).filter(Boolean).join(" ")}({theme:n,corners:a,size:o,fluid:r}),u=function(e){switch(e.type){case K.ENTERING.type:return{wrapper:"spid-button-transition",icon:"spid-button-icon-animation in"};case K.ENTERED.type:return{wrapper:"",icon:"spid-button-icon-animation in"};case K.EXITING.type:return{wrapper:"spid-button-reverse-enter-transition",icon:"spid-button-icon-animation"};case K.EXITED.type:case K.INIT.type:return{wrapper:"",icon:"spid-button-icon-animation"}}}(c),d=u.wrapper,p=u.icon,m="negative"===n?w.a:x.a;return i.a.createElement("button",{className:"spid-button "+s+" "+d,onClick:function(){return l(!0)}},i.a.createElement("span",{"aria-hidden":!$(c),className:"spid-button-icon "+p},i.a.createElement("img",{src:m,alt:t("entra_con_SPID")})),i.a.createElement("span",{className:"spid-button-text"},t("entra_con_SPID")))},oe=function(e){var t=e.lang,n=void 0===t?"it":t,r=e.extraProviders,o=void 0===r?[]:r,l=e.corners,c=void 0===l?"rounded":l,s=e.fluid,u=void 0===s||s,d=e.size,p=void 0===d?"md":d,m=e.theme,E=void 0===m?"positive":m,f=e.configuration,v=void 0===f?{method:"GET"}:f,g=e.mapping,h=void 0===g?{}:g,b=e.protocol,y=void 0===b?"SAML":b,I=e.url,N=e.supported,_=void 0===N?ie.map((function(e){return e.entityID})):N,D=e.onProvidersShown,P=e.onProvidersHidden,S=e.onProviderClicked,O=Object(a.useState)(K.INIT),k=O[0],j=O[1];Object(a.useEffect)((function(){var e=function(e){27===e.keyCode&&j(K.EXITING)};return $(k)&&document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[k]),Object(a.useEffect)((function(){k.type===K.ENTERING.type&&D&&D(),k.type===K.EXITING.type&&P&&P()}),[k]),Object(a.useEffect)((function(){var e;return k.type===K.ENTERING.type&&(e=setTimeout((function(){return j(K.ENTERED)}),2e3)),k.type===K.EXITING.type&&(e=setTimeout((function(){return j(K.EXITED)}),2e3)),function(){null!=e&&clearTimeout(e)}}),[k]),U(I);var w=q(n),T={theme:E,corners:c,fluid:u,size:p},x={extraProviders:o,configuration:v,url:I,mapping:h,protocol:y,supported:_,onProviderClicked:S},C=V(ie,o);return i.a.createElement("div",{"aria-live":"polite"},i.a.createElement(ae,Object.assign({visibility:k,i18n:w,providers:C,closeModal:function(){return j(K.EXITING)}},x)),i.a.createElement(re,Object.assign({modalVisibility:k,i18n:w,toggleModal:function(e){return j(e?K.ENTERING:K.EXITING)}},T)))},le={container:"_3fM8l",button:"_3KoyM",buttonIcon:"_1N2Gm",buttonText:"_3Y6Uy",theme:"_3nnX2",themeNegative:"_34hSf",block:"_2YBG4",small:"_1nnOC",medium:"_fufY9",large:"_1t2ay",extraLarge:"_2RDg8",idpButton:"_2MOel",idpButtonMenu:"_2ZNoV",idpButtonPanel:"_2fv_g",idpButtonSmall:"_2Xqdi",idpButtonMedium:"_oYtNc",idpButtonLarge:"__96uF",idpButtonExtraLarge:"_3x_V1",idpButtonTip:"_26Zsw",idpButtonTipAnchorRight:"_2NcMo",idpButtonScroll:"_1xsHh",idpLogo:"_1l0mt",topMenuSpace10:"__SNdl",topMenuSpace20:"_3PWn6",topMenuLine:"_1A_0H",supportLink:"_5Fo33",srOnly:"_38iC-",disabled:"_2EZDG"},ce={sm:"small",md:"medium",l:"large",xl:"extraLarge"},se=function(e){return ce[e]},ue=function(e){var t=ce[e];return"idpButton"+t[0].toUpperCase()+t.slice(1)},de=function(e){var t=e.configuration,n=e.supported,a=e.url,r=e.mapping,o=e.i18n,l=e.size,c=e.protocol,s=e.providers,u=e.extraProviders,d=e.onProviderClicked;return i.a.createElement("div",{className:le.idpButton+" "+le.idpButtonTip+" "+le[ue(l)]},i.a.createElement("ul",{className:le.idpButtonMenu,"aria-labelledby":"spid-idp"},s.map((function(e){var l=Y(e,n,c,u);return i.a.createElement("li",{"data-idp":e.entityName,key:e.entityName},i.a.createElement(pe,{idp:e,url:a,isActive:l,mapping:r,i18n:o,configuration:t,onProviderClicked:d}))})),i.a.createElement("li",{className:le.supportLink},i.a.createElement("a",{id:"collegamentospid",href:"http://www.spid.gov.it"},o("maggiori_info"))),i.a.createElement("li",{className:le.supportLink},i.a.createElement("a",{id:"collegamentospid",href:"http://www.spid.gov.it/#registrati"},o("non_hai_SPID")))))},pe=function(e){var t=e.idp,n=e.configuration,a=e.url,r=e.isActive,o=e.mapping,l=e.i18n,c=e.onProviderClicked,s=t.entityID in o?o[t.entityID]:t.entityID,u=a.replace("{{idp}}",encodeURIComponent(s)),d=r?l("accedi_con_idp",t.entityName):l("idp_disabled");if(X(n))return i.a.createElement("a",{title:d,href:r?u:void 0,disabled:!r,className:le.idpLogo+" "+(r?"":le.disabled),onClick:function(e){return null===c||void 0===c?void 0:c(t,e)},role:"link",id:s},i.a.createElement(me,{idp:t,title:d}));var p=n.fieldName,m=n.extraFields,E=void 0===m?{}:m;return i.a.createElement("form",{name:"spid_idp_access",action:u,method:"POST"},i.a.createElement("button",{className:le.idpLogo+" "+(r?"":le.disabled),id:t.entityID,name:d,title:d,type:"submit",onClick:function(e){return null===c||void 0===c?void 0:c(t,e)}},i.a.createElement(me,{idp:t,title:d})),i.a.createElement("input",{type:"hidden",name:p,value:s}),Object.entries(E).map((function(e){var t=e[0],n=e[1];return i.a.createElement("input",{key:t,type:"hidden",name:t,value:n})})))},me=function(e){var t=e.idp,n=e.title;return null==t.logo?i.a.createElement("span",null,t.entityName):i.a.createElement("span",null,i.a.createElement("span",{className:le.srOnly},n),i.a.createElement("img",{src:t.logo,alt:t.entityName,title:t.entityName}))},Ee=W(),fe=function(e){var t=e.url,n=e.lang,r=void 0===n?"it":n,o=e.supported,l=void 0===o?Ee.map((function(e){return e.entityID})):o,c=e.mapping,s=void 0===c?{}:c,u=e.size,d=void 0===u?"md":u,p=e.configuration,m=void 0===p?{method:"GET"}:p,E=e.theme,f=void 0===E?"positive":E,v=e.protocol,g=void 0===v?"SAML":v,h=e.extraProviders,b=void 0===h?[]:h,y=e.onProviderClicked,I=e.onProvidersHidden,N=e.onProvidersShown,_=Object(a.useState)(void 0),D=_[0],P=_[1],S=q(r);Object(a.useEffect)((function(){D&&N&&N(),!1===D&&I&&I()}),[D]),U(t);var O=V(Ee,b),k="negative"===f?w.a:x.a;return i.a.createElement("div",{className:le.container},i.a.createElement("a",{href:"#",className:le.button+" "+le[se(d)]+" "+("positive"===f?le.theme:le.themeNegative),"aria-haspopup":"true","aria-expanded":D,onClick:function(){return P(!D)}},i.a.createElement("span",{className:le.buttonIcon},i.a.createElement("img",{src:k,alt:S("entra_con_SPID")})),i.a.createElement("span",{className:le.buttonText},S("entra_con_SPID"))),D&&i.a.createElement(de,{supported:l,url:t,mapping:s,i18n:S,size:d,configuration:m,protocol:g,providers:O,extraProviders:b,onProviderClicked:y}))},ve=function(e){var t=e.type,n=void 0===t?"modal":t,a=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["type"]);return"modal"===n?i.a.createElement(oe,Object.assign({},a)):i.a.createElement(fe,Object.assign({},a))},ge=(n(184),n(185),n(186),n(187),n(188),n(189),n(55)),he=n(52),be=n(51),ye=n(8),Ie=function(){return i.a.createElement(ye.a,{type:"center"},i.a.createElement(ye.c,null,i.a.createElement(ye.b,{iconName:"it-code-circle",tag:"a"},i.a.createElement("h2",null,"SPID React button"),i.a.createElement("h3",null,"The React component for the SPID smart button")),i.a.createElement(ye.d,null,i.a.createElement(ye.e,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{"aria-label":"Github",href:"####",target:"_blank"},i.a.createElement(ye.f,{color:"",icon:"it-github",padding:!1,size:""}))))))))},Ne="/myLogin/idp={{idp}}",_e=W(),De=["it","en","de"],Pe=[{method:"GET"},{method:"POST",fieldName:"prova"}],Se=["SAML","OIDC"],Oe=["sm","md","l"],ke=["positive","negative"],je=["rounded","sharp"],we=["modal","dropdown"],Te={lang:De[0],url:Ne,mapping:{},supported:_e.slice(0,4).map((function(e){return e.entityID})),protocol:Se[0],size:Oe[1],theme:ke[0],fluid:!1,corners:je[0],configuration:Pe[0],extraProviders:[],type:we[0]},xe=n(39),Ce=n(30),Le=n(5),Me=n(160),Ae=function(e){return i.a.createElement("div",{className:"select-pill text-primary"},i.a.createElement(Le.l.Option,e))},Re=function(e){return i.a.createElement(Le.l.DropdownIndicator,e,i.a.createElement(ye.f,{icon:"it-arrow-down-triangle","aria-hidden":!0}))},Ge={},Be=function(e){return Ge[e]=Ge[e]||"selectExampleClassic-".concat(0),Ge[e]};function ze(e){var t=e.options,n=e.onChange,a=e.label,r=e.selectedValue;return i.a.createElement("div",{className:"bootstrap-select-wrapper"},i.a.createElement("label",{htmlFor:Be(a)},a),i.a.createElement(Me.a,{components:{Option:Ae,DropdownIndicator:Re,IndicatorSeparator:null},styles:{container:function(e){return Object(s.a)(Object(s.a)({},e),{},{height:"2.5rem"})},valueContainer:function(e){return Object(s.a)(Object(s.a)({},e),{},{height:"2.5rem"})},control:function(e){return Object(s.a)(Object(s.a)({},e),{},{height:"2.5rem"})}},id:Be(a),onChange:n,options:t,placeholder:a,"aria-label":a,classNamePrefix:"react-select",value:r}))}function Ve(e,t,n,a){var i=e.map((function(e,n){return{label:e,value:t[n]}})),r=i.find((function(e){return e.value===n[a]}));return{options:i,selection:r}}var Ue=function(e){var t=e.buttonProps,n=e.updateProp,a=e.setValidURL,r=e.isValidURL,o=Ve(["Italiano","English","Deutsche"],De,t,"lang"),c=o.options,s=o.selection,u=Ve(["Small","Medium","Large"],Oe,t,"size"),d=u.options,p=u.selection,m=Ve(["Positive","Negative"],ke,t,"theme"),E=m.options,f=m.selection,v=Ve(["SAML","OIDC"],Se,t,"protocol"),g=v.options,h=v.selection,b=Ve(["Rounded","Sharp"],je,t,"corners"),y=b.options,I=b.selection,N=Ve(["GET","POST"],Pe,t,"configuration"),_=N.options,D=N.selection,P=Ve(["Modal","Dropown"],we,t,"type"),S=P.options,O=P.selection,k=r?{valid:!0}:{invalid:!0};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"form-row"},i.a.createElement(be.a,{md:6},i.a.createElement(ye.g,Object.assign({label:"URL - must contain '{{idp}}':",placeholder:"Add a URL",value:t.url},k,{infoText:r?"":'Please add the "{{idp}}" string in it',onChange:function(e){var t=e.target.value;a(t.indexOf("{{idp}}")>-1),n("url",t)}}))),i.a.createElement(be.a,null,i.a.createElement(xe.a,{className:"m-8"},i.a.createElement(ze,{label:"Method:",selectedValue:D,options:_,onChange:function(e){null!=e&&Pe.includes(e.value)&&n("configuration",e.value)}})))),i.a.createElement("div",{className:"form-row"},i.a.createElement(be.a,{md:6},i.a.createElement(xe.a,{className:"m-8"},i.a.createElement(ze,{label:"Language:",selectedValue:s,options:c,onChange:function(e){null!=e&&De.includes(e.value)&&n("lang",e.value)}}))),i.a.createElement(be.a,{md:6},i.a.createElement(xe.a,{className:"m-8"},i.a.createElement(ze,{label:"Size:",selectedValue:p,options:d,onChange:function(e){null!=e&&Oe.includes(e.value)&&n("size",e.value)}})))),i.a.createElement("div",{className:"form-row"},i.a.createElement(be.a,{md:6},i.a.createElement(xe.a,{className:"m-8"},i.a.createElement(ze,{label:"Theme:",selectedValue:f,options:E,onChange:function(e){null!=e&&ke.includes(e.value)&&n("theme",e.value)}}))),i.a.createElement(be.a,{md:6},i.a.createElement(xe.a,{className:"m-8"},i.a.createElement(ze,{label:"Corners style:",selectedValue:I,options:y,onChange:function(e){null!=e&&je.includes(e.value)&&n("corners",e.value)}})))),i.a.createElement("div",{className:"form-row"},i.a.createElement(be.a,null,i.a.createElement(xe.a,{check:!0},i.a.createElement(ye.h,{label:"Fluid",checked:t.fluid,onChange:function(e){var t=e.target;n("fluid",t.checked)}}))),i.a.createElement(be.a,{md:4},i.a.createElement(ze,{label:"Type",selectedValue:O,options:S,onChange:function(e){null!=e&&we.includes(e.value)&&n("type",e.value)}})),i.a.createElement(be.a,{md:4},i.a.createElement(ze,{label:"Protocol",selectedValue:h,options:g,onChange:function(e){null!=e&&Se.includes(e.value)&&n("protocol",e.value)}}))),i.a.createElement(he.a,null,i.a.createElement("fieldset",null,i.a.createElement("legend",null,"Provider supported:"),i.a.createElement(xe.a,{check:!0},_e.map((function(e){var a=e.entityID,r=e.entityName,o=e.logo;return i.a.createElement("div",{key:r},i.a.createElement(ye.g,{id:r,type:"checkbox",checked:t.supported.includes(a),onChange:function(e){var i=e.target.checked;n("supported",i?[].concat(Object(l.a)(t.supported),[a]):t.supported.filter((function(e){return a!==e})))}}),i.a.createElement(Ce.a,{htmlFor:r,check:!0},i.a.createElement("img",{src:o,alt:r,height:20})))}))))))},Xe=function(e){var t=e.events;return i.a.createElement("div",{className:"tableFixHead"},i.a.createElement("table",{className:"table table-hover"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"#"),i.a.createElement("th",{scope:"col"},"Type"),i.a.createElement("th",{scope:"col"},"Event"),i.a.createElement("th",{scope:"col"},"Arg"))),i.a.createElement("tbody",null,t.map((function(e,n){var a=e.type,r=e.name,o=e.arg;return i.a.createElement("tr",{key:r+n},i.a.createElement("th",{scope:"row"},t.length-n),i.a.createElement("td",null,a),i.a.createElement("td",null,r),i.a.createElement("td",null,o||""))})))))},Fe=n(155),He=n(156),We=n(249),Ye=n(158),Je=n(248),Ze=n(157);function qe(e,t){var n={name:"spid-react-button-example",version:"1.0.0",description:"SPID React button example starter project",keywords:["react","starter","spid","spid-button"],main:"src/index.js",dependencies:{react:"17.0.2","react-dom":"17.0.2","react-scripts":"4.0.0","spid-react-button":"latest"},devDependencies:{"@babel/runtime":"7.13.8",typescript:"4.1.3"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]};return t&&(n.dependencies["spid-smart-button"]="latest"),Object(Ze.getParameters)({files:{"App.js":{content:e},"index.js":{content:'import { StrictMode } from "react";\nimport ReactDOM from "react-dom";\n\nimport App from "./App";\n\nconst rootElement = document.getElementById("root");\nReactDOM.render(\n  <StrictMode>\n    <App />\n  </StrictMode>,\n  rootElement\n);'},"package.json":{content:n}}})}var Ke=function(e){var t=e.code,n=e.addDependency;return i.a.createElement("a",{target:"_blank noreferral",href:"https://codesandbox.io/api/v1/sandboxes/define?parameters=".concat(qe(t,n)),className:"float-right"},i.a.createElement(ye.f,{icon:"it-software"})," Open it Codesandbox")};We.a.registerLanguage("jsx",Ye.a);var Qe={modal:"// requires the \"spid-smart-button\" dependency\nimport 'spid-smart-button/dist/spid-button.min.css';",dropdown:"import 'spid-react-button/dist/index.css';"},$e=function(e){var t=Object.entries(e),n="import { SPIDReactButton } from 'spid-react-button'\n    ".concat(Qe[e.type],"\n    \n    function mySPIDButton(props){\n        return (\n            <SPIDReactButton \n                ").concat(t.filter((function(e){var t=Object(u.a)(e,2);return!function(e,t){return"url"!==e&&(Array.isArray(t)?t.length===Te[e].length&&Te[e].every((function(e,n){return e===t[n]})):Te[e]===t)}(t[0],t[1])})).map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return"".concat(n,"={").concat(JSON.stringify(a,null,2),"}")})).join("\n            "),"\n            />\n        );\n    }");return i.a.createElement("div",null,i.a.createElement(We.a,{language:"javascript",showLineNumbers:!0,wrapLines:!0,style:Je.a},n),i.a.createElement(Ke,{code:n,addDependency:"modal"===e.type}))},et={state:"init"},tt={state:"loaded",payload:""},nt={state:"error"},at=function(e){var t=Object(a.useState)(et),n=Object(u.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){var e;Promise.all([fetch("./doc.md").then((function(e){return e.text()})),(e=1500,new Promise((function(t){return setTimeout(t,e)})))]).then((function(e){var t=Object(u.a)(e,1)[0];return o(Object(s.a)(Object(s.a)({},tt),{},{payload:t}))})).catch((function(){return o(nt)}))}),[o]),i.a.createElement("div",null,i.a.createElement("h1",null,"Reference API"),i.a.createElement($e,Object.assign({},e,{url:e.url})),"init"===r.state&&i.a.createElement(He.Puff,{stroke:"#0073e6",strokeOpacity:".5"}),"loaded"===r.state?i.a.createElement(Fe.a,null,r.payload):null,"error"===r.state&&i.a.createElement("p",null,"An error occurred when loading the documentation from the server"))},it=function(){var e=Object(a.useState)(Te),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!0),d=Object(u.a)(o,2),p=d[0],m=d[1],E=Object(a.useState)([]),f=Object(u.a)(E,2),v=f[0],g=f[1],h=Object(a.useCallback)((function(e,t){return r((function(n){return Object(s.a)(Object(s.a)({},n),{},Object(c.a)({},e,t))}))}),[r]),b=Object(a.useCallback)((function(e){g((function(t){return[e].concat(Object(l.a)(t))}))}),[g]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(Ie,null),i.a.createElement("section",{id:"main"},i.a.createElement(ge.a,{tag:"div"},i.a.createElement(he.a,null,i.a.createElement(be.a,{md:"6"},i.a.createElement(he.a,null,i.a.createElement(be.a,null,i.a.createElement("legend",null,n.type.toUpperCase()," version"),i.a.createElement(ve,Object.assign({},n,{url:p?n.url:Ne,onProvidersShown:function(){return b({type:n.type,name:"onProvidersShown"})},onProvidersHidden:function(){return b({type:n.type,name:"onProvidersHidden"})},onProviderClicked:function(e,t){t.preventDefault(),b({type:n.type,name:"onProvidersClicked",arg:JSON.stringify(e,null,2)})}})),i.a.createElement(Xe,{events:v})))),i.a.createElement(be.a,null,i.a.createElement(Ue,{updateProp:h,setValidURL:m,isValidURL:p,buttonProps:n}))),i.a.createElement(he.a,null,i.a.createElement(be.a,null,i.a.createElement(he.a,null,i.a.createElement("h1",null,"F.A.Q.")),i.a.createElement(he.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"7 kb (gzipped) is too much for my project! Is it possible to treeshake it?"))),i.a.createElement(he.a,null,i.a.createElement("p",null,"Yes. If you know already you're going to use only one type of button, you can just pick it: just import ",i.a.createElement("code",null,"SPIDReactButtonModal")," or ",i.a.createElement("code",null,"SPIDReactButtonDropdown")," and experice full treeshake.")),i.a.createElement(he.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Is this project official?"))),i.a.createElement(he.a,null,i.a.createElement("p",null,"No, this is not an official project.")),i.a.createElement(he.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Is the providers list official?"))),i.a.createElement(he.a,null,i.a.createElement("p",null,"No, as this is not an official project, the list may not be super up-to-date (we check pretty often tho). This official list of SPID provideers is avilable ",i.a.createElement("a",{href:"https://github.com/italia/spid-sp-access-button",target:"_blank noreferrer"},"here"))),i.a.createElement(he.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Where the modal version comes from? Is that official?"))),i.a.createElement(he.a,null,i.a.createElement("p",null,"The modal version of this component comes from these other project ",i.a.createElement("a",{href:"https://github.com/italia/spid-smart-button",target:"_blank noreferrer"},"spid-smart-button"))),i.a.createElement(he.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Does this component goes in conflict with the ",i.a.createElement("code",null,"design-react-kit"),"?"))),i.a.createElement(he.a,null,i.a.createElement("p",null,"No. This page was in fact built using components from the ",i.a.createElement("code",null,"design-react-kit"),". If you find any conflicting issue with it, please report it to this repository.")),i.a.createElement(he.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Why did you write all of this in English rather than Italian?"))),i.a.createElement(he.a,null,i.a.createElement("p",null,"I guess I've started it in English and just finished it. As open source project PR aree very welcome, expecially for translations!")),i.a.createElement(he.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Does the project have Typescript types?"))),i.a.createElement(he.a,null,i.a.createElement("p",null,"Yes, they are in the package. The API documentation is automatically extracted from types.")),i.a.createElement(he.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Can I contribute somehow to the project?"))),i.a.createElement(he.a,null,i.a.createElement("p",null,"Of course you can, glad you've asked. You can report bugs or issues with the project to start with at this repository, or even enhance it with a PR!")),i.a.createElement(he.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"What's the license of this project?"))),i.a.createElement(he.a,null,i.a.createElement("p",null,"EUPL 1.2, European Union Public Licence V. 1.2")))))),i.a.createElement("section",{id:"api"},i.a.createElement(ge.a,null,i.a.createElement(he.a,null,i.a.createElement(be.a,null,i.a.createElement(at,Object.assign({},n,{url:p?n.url:Ne})))))),i.a.createElement("footer",{className:"it-footer"},i.a.createElement("div",{className:"it-footer-main"},i.a.createElement(ge.a,{tag:"div"},i.a.createElement("h5",null,"Note"),i.a.createElement("p",null,"All logos of each Identity Provider is a registered trademark of their respective owners"),i.a.createElement("p",null,"The SPID logo is a registered trademark of AGID, Agenzia per l'Italia Digitale della Presidenza del Consiglio dei Ministri"))),i.a.createElement("div",{className:"it-footer-small-prints clearfix"},i.a.createElement(ge.a,{tag:"div"}))))};o.a.render(i.a.createElement(it,null),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.0583d7fc.chunk.js.map