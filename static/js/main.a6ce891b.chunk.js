(this["webpackJsonpspid-react-button-example"]=this["webpackJsonpspid-react-button-example"]||[]).push([[0],{144:function(e,t,n){e.exports=n.p+"static/media/spid-idp-arubaid~biXjMUPd.1f6e95c7.svg"},145:function(e,t,n){e.exports=n.p+"static/media/spid-idp-infocertid~bmqXPBOx.ec5b92ef.svg"},146:function(e,t,n){e.exports=n.p+"static/media/spid-idp-posteid~PIAVTNQX.f12f868d.svg"},147:function(e,t,n){e.exports=n.p+"static/media/spid-idp-sielteid~gPbEKUHE.092e2208.svg"},148:function(e,t,n){e.exports=n.p+"static/media/spid-idp-timid~FIiWQnSz.b7e584e0.svg"},149:function(e,t,n){e.exports=n.p+"static/media/spid-idp-namirialid~PDxLtsax.745325fb.svg"},150:function(e,t,n){e.exports=n.p+"static/media/spid-idp-spiditalia~GdXfNloS.e45c9e05.svg"},151:function(e,t,n){e.exports=n.p+"static/media/spid-idp-intesaid~xcxRNxJf.a4ea157f.svg"},152:function(e,t,n){e.exports=n.p+"static/media/spid-idp-lepidaid~YGVaJzCf.34e0a1b5.svg"},153:function(e,t,n){e.exports=n.p+"static/media/spid-logo-animation-black~ZYbHBrkh.3fe355c4.svg"},154:function(e,t,n){e.exports=n.p+"static/media/spid-logo~zJjEzXFQ.b5234f51.svg"},155:function(e,t,n){e.exports=n.p+"static/media/close~hKFpNpUn.f2ec1f7d.svg"},179:function(e,t,n){e.exports=n(244)},180:function(e,t,n){},191:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t);n(180);var a=n(0),i=n.n(a),o=n(19),r=n.n(o),l=n(45),c=n(41),s=n(10),u=n(13),d=n(144),p=n.n(d),m=n(145),f=n.n(m),E=n(146),g=n.n(E),b=n(147),v=n.n(b),h=n(148),_=n.n(h),y=n(149),I=n.n(y),N=n(150),P=n.n(N),D=n(151),S=n.n(D),k=n(152),j=n.n(k),x=n(64),O=n.n(x),T=n(65),w=n.n(T),L=n(153),C=n.n(L),M=n(154),A=n.n(M),R=n(155),z=n.n(R);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var B=[{protocols:["SAML"],entityName:"Aruba ID",logo:p.a,entityID:"https://loginspid.aruba.it",active:!0},{protocols:["SAML"],entityName:"Infocert ",logo:f.a,entityID:"https://identity.infocert.it",active:!0},{protocols:["SAML"],entityName:"Poste ID",logo:g.a,entityID:"https://posteid.poste.it",active:!0},{protocols:["SAML"],entityName:"Sielte",logo:v.a,entityID:"https://identity.sieltecloud.it",active:!0},{protocols:["SAML"],entityName:"Tim ID",logo:_.a,entityID:"https://login.id.tim.it/affwebservices/public/saml2sso",active:!0},{protocols:["SAML"],entityName:"Namirial ID",logo:I.a,entityID:"https://idp.namirialtsp.com/idp",active:!0},{protocols:["SAML"],entityName:"SPIDItalia Register.it",logo:P.a,entityID:"https://spid.register.it",active:!0},{protocols:["SAML"],entityName:"Intesa ID",logo:S.a,entityID:"https://spid.intesa.it",active:!0},{protocols:["SAML"],entityName:"Lepida ID",logo:j.a,entityID:"https://id.lepida.it/idp/shibboleth",active:!0}],X="https://www.spid.gov.it";function V(e,t){return[].concat(e.map((function(e){return G({},e,{active:!t.length})})),t.map((function(e){var t;return G({},e,{protocols:null!=(t=e.protocols)?t:["SAML"],active:!0})})))}function U(e){if(null==e||e.indexOf("{{idp}}")<0)throw Error('URL parameter must contain the "{{idp}} string')}var F,K=(F=B,JSON.parse(JSON.stringify(F)));function J(){return K.sort((function(){return Math.random()-.5}))}function Y(e,t,n,a){var i=a.some((function(t){return t.entityID===e.entityID}));return t.indexOf(e.entityID)>-1&&e.protocols.indexOf(n)>-1&&(0===a.length||i)&&e.active}var Z={it:{naviga_indietro:"Torna indietro",alt_logo_SPID:"Logo SPID",scegli_provider_SPID:"Scegli il tuo provider SPID",annulla_accesso:"Annulla",non_hai_SPID:"Non hai SPID?",cosa_SPID:"Cos'\xe8 SPID?",entra_con_SPID:"Entra con SPID",scopri_di_piu:"Scopri di pi\xf9.",accedi_con_idp:"Accedi a SPID con {0}",idp_disabled:"Provider non attivo",maggiori_info:"Maggiori info"},en:{naviga_indietro:"Go back",alt_logo_SPID:"SPID logo",scegli_provider_SPID:"Choose your SPID provider",annulla_accesso:"Cancel",non_hai_SPID:"Don't have SPID?",cosa_SPID:"What is SPID?",entra_con_SPID:"Sign in with SPID",scopri_di_piu:"Learn more.",accedi_con_idp:"Access to SPID with {0}",idp_disabled:"Provider not enabled",maggiori_info:"More info"},de:{naviga_indietro:"Gehen Sie zur\xfcck",alt_logo_SPID:"SPID Logo",scegli_provider_SPID:"W\xe4hle Ihren SPIDProvider",annulla_accesso:"Zur\xfccknehmen",non_hai_SPID:"Haben Sie nicht SPID?",cosa_SPID:"Was ist SPID?",entra_con_SPID:"Loggen Sie mit SPID",scopri_di_piu:"Finde mehr heraus.",accedi_con_idp:"Zugriff auf SPID mit {0}",idp_disabled:"Provider nicht aktiviert",maggiori_info:"Mehr info"}},H="it",W=function(e){return H=e,function(e,t){var n,a=null===(n=Z[H])||void 0===n?void 0:n[e];if(!a)throw Error("labelKey "+e+" non presente per la lingua selezionata "+H);return null!=t?a.replace(/\{\d}/,t):a}},Q={INIT:{type:"init"},ENTERING:{type:"entering"},ENTERED:{type:"entered"},EXITING:{type:"exiting"},EXITED:{type:"exited"}},q={sm:"small",md:"medium",l:"large"},$={"spid-enter-container":"_cCdZZ","spid-idp-list":"_3Kl4y","spid-button-idp":"_LKckz","spid-button-idp-button":"_3Tob-","spid-button-logo":"_1lKvK","spid-button-close-button":"_2-fJt","spid-button":"_2QnKd","spid-cancel-access-button":"_1OUxg","spid-button-navigable":"_2y2KE","spid-non-hai-spid":"_3fX0d","spid-enter":"_1PpRy","spid-button-panel":"_14gd1","spid-button-header":"_1JIME","spid-button-panel-back":"_5CMZw","spid-button-panel-content":"_1MYq8","spid-enter-title-page":"_3CTDc","spid-button-panel-content-center":"_1f8Pp","spid-button-icon":"_2izcf","spid-button-little-man-icon":"_3-XVX","spid-button-text":"_2UEmQ","spid-button-size-small":"_3Otew","spid-button-size-medium":"_1e5UZ","spid-button-size-large":"_2y16B","spid-button-fluid":"_2ry0A","spid-button-col":"_2rEB8",xs12:"_2QCzb","spid-enter-title-container":"_vG92d","spid-button-action-button-container":"_2Mtb6","spid-button-action-button":"_2w-jv","spid-button-visibile":"_vYqK3","spid-button-positive":"_3VqKK","spid-button-negative":"_z74_-","spid-button-rounded":"_2dbjY","spid-button-sharp":"_2LEdl","spid-foot-btn":"_1RZht","spid-button-panel-anim":"_3DmkR","anim-panel-out":"_1g5r_","spid-button-fade-out-left":"_1AcG2","spid-button-logo-left-fade-out":"_U96wZ","spid-button-fade-out-right":"_4bJkX","spid-button-close-right-fade-out":"_rMjnb","spid-button-fade-out-bottom":"_30A8N","spid-button-title-fade-out":"_13pae","anim-panel-in":"_362tI","spid-button-fade-in-left":"_1oOqI","spid-button-logo-left-fade-in":"_35Xw6","spid-button-fade-in-right":"_28gE_","spid-button-close-right-fade-in":"_2fvIS","spid-button-fade-in-bottom":"_38Hat","spid-button-title-fade-in":"_19ue9","spid-button-idp-fade-in":"_1Fbhp","spid-button-anim-idp-fade-in":"_1dYFC","spid-button-idp-fade-out":"_3y9Gq","spid-button-anim-idp-fade-out":"_QIMMS","spid-button-transition":"_-zRgJ",fadeOutEnterBtn:"_2k2ra","spid-button-reverse-enter-transition":"_2ptp7",fadeInEnterBtn:"_1fN5V","spid-show-little-man":"_26ZNK","spid-button-icon-animation":"_2hUXa","spid-button-icon-smaller-logo":"_19xJD",in:"_Tfm-p","spid-button-icon-bigger-logo":"_2ExQV","spid-button-logo-animation-out":"_Kb49i","spid-hide-little-man":"_j62fh","anim-base-in":"_3PUzY","anim-base-out":"_18fzj","anim-icon-in":"_Gnu-k","anim-icon-out":"_2Ellr","hide-on-end":"_2h0xR"};function ee(e){return e.map((function(e){return e&&$[e]||""})).join(" ")}var te=[];function ne(e){return e.type.includes("enter")}var ae="_3o5cV",ie=function(e){var t=e.idp,n=e.configuration,a=e.url,o=e.isActive,r=e.mapping,l=e.i18n,c=e.onProviderClicked,s=e.className,u=e.type,d=t.entityID in r?r[t.entityID]:t.entityID,p=a.replace("{{idp}}",encodeURIComponent(d)),m=o?l("accedi_con_idp",t.entityName):l("idp_disabled"),f=o?p:void 0;return function(e){return"GET"===e.method.toUpperCase()}(n)?i.a.createElement("a",{title:m,href:f,disabled:!o,className:"modal"===u?"":s,onClick:function(e){return c&&c(t,f,e)},role:"link",id:d},i.a.createElement(oe,{idp:t,title:m,type:u})):i.a.createElement("form",{name:"spid_idp_access",action:p,method:"POST"},i.a.createElement("button",{className:s,id:d,name:m,title:m,type:"submit",onClick:function(e){return o||e.preventDefault(),c&&c(t,f,e)},disabled:!o},i.a.createElement(oe,{idp:t,title:m,type:u})),i.a.createElement("input",{type:"hidden",name:n.fieldName,value:d}),Object.entries(n.extraFields||{}).map((function(e){var t=e[0],n=e[1];return i.a.createElement("input",{key:t,type:"hidden",name:t,value:n})})))},oe=function(e){var t=e.idp,n=e.title,a=e.type;return null==t.logo?i.a.createElement("span",null,t.entityName):i.a.createElement("span",null,i.a.createElement("span",{className:ae},n),i.a.createElement("img",{src:t.logo,alt:t.entityName,title:t.entityName,style:"modal"===a?{maxWidth:"90%"}:{}}))},re=function(e){var t=e.url,n=e.altText;return i.a.createElement("img",{"aria-hidden":"true",src:t,alt:n,style:{float:"left"}})};var le=function(e){var t=e.i18n,n=e.mapping,a=e.visibility,o=e.extraProviders,r=void 0===o?[]:o,l=e.supported,c=e.providers,s=e.protocol,u=e.url,d=e.closeModal,p=e.configuration,m=e.onProviderClicked,f=function(e){switch(e.type){case Q.ENTERING.type:return{panel:"spid-button-panel-anim",buttonLogo:"spid-button-fade-in-left",buttonClose:"spid-button-fade-in-left"};case Q.EXITING.type:return{panel:"spid-button-panel-anim",buttonManIcon:"spid-button-logo-animation-out"};case Q.ENTERED.type:case Q.EXITED.type:case Q.INIT.type:return{}}}(a),E=f.panel,g=f.buttonClose,b=f.buttonLogo,v=f.buttonManIcon;return i.a.createElement("section",{className:ee(["spid-enter-container"]),hidden:!ne(a)},i.a.createElement("div",{className:ee(["spid-enter"])},i.a.createElement("section",{className:""+ee(["spid-button-panel","spid-button-panel-select",E]),"aria-label":t("scegli_provider_SPID"),tabIndex:0},i.a.createElement("header",{className:ee(["spid-button-header"])},i.a.createElement("div",{className:ee(["spid-button-panel-back"])},i.a.createElement("div",{className:""+ee(["spid-button-logo",b])},i.a.createElement(re,{url:A.a,altText:t("alt_logo_SPID")})),i.a.createElement("div",{className:""+ee(["spid-button-close-button","spid-button-fade-out-right",g])},i.a.createElement("button",{tabIndex:0,className:""+ee(["spid-button-panel-close-button","spid-button-navigable"]),"aria-label":t("naviga_indietro"),onClick:d},i.a.createElement(re,{url:z.a,altText:t("naviga_indietro")}))))),i.a.createElement("div",{className:ee(["spid-button-panel-content"])},i.a.createElement("img",{className:""+ee(["spid-button-little-man-icon",v]),src:C.a,alt:t("entra_con_SPID")}),i.a.createElement("div",{className:ee(["spid-button-panel-content-center"])},i.a.createElement("h1",{className:""+ee(["spid-enter-title-page","spid-button-fade-in-bottom","spid-button-fade-out-bottom"])},t("scegli_provider_SPID")),i.a.createElement("div",{className:ee(["spid-idp-list"])},c.map((function(e,o){var c=Y(e,l,s,r),d=a.type===Q.ENTERING.type?{classNames:"spid-button-idp-fade-in",style:{animationDelay:1.1+.1*(o+1)+"s"}}:{classNames:""},f=d.classNames,E=d.style;return i.a.createElement("span",{key:e.entityID,className:""+ee(["spid-button-idp",f]),style:E},i.a.createElement(ie,{idp:e,mapping:n,url:u,isActive:c,i18n:t,configuration:p,onProviderClicked:m,className:ee(["spid-button-idp-button"]),type:"modal"}))}))),i.a.createElement("div",{className:ee(["spid-non-hai-spid"])},t("non_hai_SPID")," ",i.a.createElement("a",{href:X+"/richiedi-spid",target:"_blank noreferrer"},t("scopri_di_piu")))),i.a.createElement("div",{className:ee(["spid-foot-btn"])},i.a.createElement("button",{className:ee(["spid-cancel-access-button"]),onClick:d},t("annulla_accesso")))))))},ce=J(),se=function(e){var t=e.i18n,n=e.theme,a=e.corners,o=e.fluid,r=e.size,l=e.toggleModal,c=e.modalVisibility,s=function(e){var t,n=e.theme,a=e.corners,i=e.size,o=e.fluid;return"xl"===i&&console.log('Size "xl" is not supported by SPID React Button with Modal variant'),[n,a,i?"size-"+(null!=(t=q[i])?t:"large"):null,o?"fluid":null].map((function(e){return null!=e?"spid-button-"+e:""})).filter(Boolean)}({theme:n,corners:a,size:r,fluid:o}),u=function(e){switch(e.type){case Q.ENTERING.type:return{wrapper:["spid-button-transition"],icon:["spid-button-icon-animation","in"]};case Q.ENTERED.type:return{wrapper:te,icon:["spid-button-icon-animation","in"]};case Q.EXITING.type:return{wrapper:["spid-button-reverse-enter-transition"],icon:["spid-button-icon-animation"]};case Q.EXITED.type:return{wrapper:te,icon:["spid-button-icon-animation"]};case Q.INIT.type:return{wrapper:te,icon:te}}}(c),d=u.wrapper,p=u.icon,m="negative"===n?O.a:w.a;return i.a.createElement("button",{className:""+ee(["spid-button"].concat(s,d)),onClick:function(){return l(!0)}},i.a.createElement("span",{"aria-hidden":!ne(c),className:""+ee(["spid-button-icon"].concat(p))},i.a.createElement("img",{src:m,alt:"Login logo"})),i.a.createElement("span",{className:ee(["spid-button-text"])},t("entra_con_SPID")))},ue=function(e){var t=e.lang,n=void 0===t?"it":t,o=e.extraProviders,r=void 0===o?[]:o,l=e.corners,c=void 0===l?"rounded":l,s=e.fluid,u=void 0===s||s,d=e.size,p=void 0===d?"md":d,m=e.theme,f=void 0===m?"positive":m,E=e.configuration,g=void 0===E?{method:"GET"}:E,b=e.mapping,v=void 0===b?{}:b,h=e.protocol,_=void 0===h?"SAML":h,y=e.url,I=e.supported,N=void 0===I?ce.map((function(e){return e.entityID})):I,P=e.onProvidersShown,D=e.onProvidersHidden,S=e.onProviderClicked,k=Object(a.useState)(Q.INIT),j=k[0],x=k[1];Object(a.useEffect)((function(){var e=function(e){27===e.keyCode&&x(Q.EXITING)};return ne(j)&&document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[j]),Object(a.useEffect)((function(){j.type===Q.ENTERING.type&&P&&P(),j.type===Q.EXITING.type&&D&&D()}),[j]),Object(a.useEffect)((function(){var e;return j.type===Q.ENTERING.type&&(e=setTimeout((function(){return x(Q.ENTERED)}),2e3)),j.type===Q.EXITING.type&&(e=setTimeout((function(){return x(Q.EXITED)}),2e3)),function(){null!=e&&clearTimeout(e)}}),[j]),U(y);var O=W(n),T={theme:f,corners:c,fluid:u,size:p},w={extraProviders:r,configuration:g,url:y,mapping:v,protocol:_,supported:N,onProviderClicked:S},L=V(ce,r);return i.a.createElement("div",{"aria-live":"polite"},i.a.createElement(le,Object.assign({visibility:j,i18n:O,providers:L,closeModal:function(){return x(Q.EXITING)}},w)),i.a.createElement(se,Object.assign({modalVisibility:j,i18n:O,toggleModal:function(e){return x(e?Q.ENTERING:Q.EXITING)}},T)))},de={container:"_3fM8l",button:"_3KoyM",buttonIcon:"_1N2Gm",buttonText:"_3Y6Uy",theme:"_3nnX2",themeNegative:"_34hSf",block:"_2YBG4",small:"_1nnOC",medium:"_fufY9",large:"_1t2ay",extraLarge:"_2RDg8",idpButton:"_2MOel",idpButtonMenu:"_2ZNoV",idpButtonPanel:"_2fv_g",idpButtonSmall:"_2Xqdi",idpButtonMedium:"_oYtNc",idpButtonLarge:"__96uF",idpButtonExtraLarge:"_3x_V1",idpButtonTip:"_26Zsw",idpButtonTipAnchorRight:"_2NcMo",idpButtonScroll:"_1xsHh",idpLogo:"_1l0mt",topMenuSpace10:"__SNdl",topMenuSpace20:"_3PWn6",topMenuLine:"_1A_0H",supportLink:"_5Fo33",disabled:"_2EZDG"},pe={sm:"small",md:"medium",l:"large",xl:"extraLarge"},me=function(e){return pe[e]},fe=function(e){var t=pe[e];return"idpButton"+t[0].toUpperCase()+t.slice(1)},Ee=function(e){var t=e.configuration,n=e.supported,a=e.url,o=e.mapping,r=e.i18n,l=e.size,c=e.protocol,s=e.providers,u=e.extraProviders,d=e.onProviderClicked;return i.a.createElement("div",{className:de.idpButton+" "+de.idpButtonTip+" "+de[fe(l)]},i.a.createElement("ul",{className:de.idpButtonMenu,"aria-label":r("scegli_provider_SPID")},s.map((function(e){var l=Y(e,n,c,u),s=de.idpLogo+" "+(l?"":de.disabled);return i.a.createElement("li",{"data-idp":e.entityName,key:e.entityName},i.a.createElement(ie,{idp:e,url:a,isActive:l,mapping:o,i18n:r,configuration:t,onProviderClicked:d,className:s,type:"dropdown"}))})),i.a.createElement("li",{className:de.supportLink},i.a.createElement("a",{href:X,target:"_blank noreferrer"},r("maggiori_info"))),i.a.createElement("li",{className:de.supportLink},i.a.createElement("a",{href:X+"/#registrati",target:"_blank noreferrer"},r("non_hai_SPID")))))},ge=J(),be=function(e){var t=e.url,n=e.lang,o=void 0===n?"it":n,r=e.supported,l=void 0===r?ge.map((function(e){return e.entityID})):r,c=e.mapping,s=void 0===c?{}:c,u=e.size,d=void 0===u?"md":u,p=e.configuration,m=void 0===p?{method:"GET"}:p,f=e.theme,E=void 0===f?"positive":f,g=e.protocol,b=void 0===g?"SAML":g,v=e.extraProviders,h=void 0===v?[]:v,_=e.onProviderClicked,y=e.onProvidersHidden,I=e.onProvidersShown,N=Object(a.useState)(void 0),P=N[0],D=N[1],S=W(o);Object(a.useEffect)((function(){P&&I&&I(),!1===P&&y&&y()}),[P]),U(t);var k=V(ge,h),j="negative"===E?O.a:w.a;return i.a.createElement("div",{className:de.container},i.a.createElement("a",{href:"#",className:de.button+" "+de[me(d)]+" "+("positive"===E?de.theme:de.themeNegative),"aria-haspopup":"true","aria-expanded":P,onClick:function(){return D(!P)}},i.a.createElement("span",{className:de.buttonIcon},i.a.createElement("img",{src:j,alt:"Login logo"})),i.a.createElement("span",{className:de.buttonText},S("entra_con_SPID"))),P&&i.a.createElement(Ee,{supported:l,url:t,mapping:s,i18n:S,size:d,configuration:m,protocol:b,providers:k,extraProviders:h,onProviderClicked:_}))},ve=function(e){return e.type&&"modal"!==e.type?i.a.createElement(be,Object.assign({},e)):i.a.createElement(ue,Object.assign({},e))},he=(n(187),n(188),n(189),n(190),n(191),n(55)),_e=n(52),ye=n(51),Ie=n(9),Ne=function(){return i.a.createElement(Ie.a,{type:"center"},i.a.createElement(Ie.c,null,i.a.createElement(Ie.b,{iconName:"it-code-circle",tag:"a"},i.a.createElement("h2",null,"SPID React button"),i.a.createElement("h3",null,"The React component for the SPID smart button")),i.a.createElement(Ie.d,null,i.a.createElement(Ie.e,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{"aria-label":"Github",href:"https://github.com/dej611/spid-react-button",target:"_blank noreferrer"},i.a.createElement(Ie.f,{color:"",icon:"it-github",padding:!1,size:""}))))))))},Pe="/myLogin/idp={{idp}}",De=J(),Se=["it","en","de"],ke=[{method:"GET"},{method:"POST",fieldName:"prova"}],je=["SAML","OIDC"],xe=["sm","md","l"],Oe=["positive","negative"],Te=["rounded","sharp"],we=["modal","dropdown"],Le={lang:Se[0],url:Pe,mapping:{},supported:De.slice(0,4).map((function(e){return e.entityID})),protocol:je[0],size:xe[1],theme:Oe[0],fluid:!1,corners:Te[0],configuration:ke[0],extraProviders:[],type:we[0]},Ce=n(39),Me=n(30),Ae=n(5),Re=n(163),ze=function(e){return i.a.createElement("div",{className:"select-pill text-primary"},i.a.createElement(Ae.l.Option,e))},Ge=function(e){return i.a.createElement(Ae.l.DropdownIndicator,e,i.a.createElement(Ie.f,{icon:"it-arrow-down-triangle","aria-hidden":!0}))},Be={},Xe=function(e){return Be[e]=Be[e]||"selectExampleClassic-".concat(0),Be[e]};function Ve(e){var t=e.options,n=e.onChange,a=e.label,o=e.selectedValue;return i.a.createElement("div",{className:"bootstrap-select-wrapper"},i.a.createElement("label",{htmlFor:Xe(a)},a),i.a.createElement(Re.a,{components:{Option:ze,DropdownIndicator:Ge,IndicatorSeparator:null},styles:{container:function(e){return Object(s.a)(Object(s.a)({},e),{},{height:"2.5rem"})},valueContainer:function(e){return Object(s.a)(Object(s.a)({},e),{},{height:"2.5rem"})},control:function(e){return Object(s.a)(Object(s.a)({},e),{},{height:"2.5rem"})}},id:Xe(a),onChange:n,options:t,placeholder:a,"aria-label":a,classNamePrefix:"react-select",value:o}))}function Ue(e,t,n,a){var i=e.map((function(e,n){return{label:e,value:t[n]}})),o=i.find((function(e){return e.value===n[a]}));return{options:i,selection:o}}var Fe=function(e){var t=e.buttonProps,n=e.updateProp,a=e.setValidURL,o=e.isValidURL,r=Ue(["Italiano","English","Deutsche"],Se,t,"lang"),c=r.options,s=r.selection,u=Ue(["Small","Medium","Large"],xe,t,"size"),d=u.options,p=u.selection,m=Ue(["Positive","Negative"],Oe,t,"theme"),f=m.options,E=m.selection,g=Ue(["SAML","OIDC"],je,t,"protocol"),b=g.options,v=g.selection,h=Ue(["Rounded","Sharp"],Te,t,"corners"),_=h.options,y=h.selection,I=Ue(["GET","POST"],ke,t,"configuration"),N=I.options,P=I.selection,D=Ue(["Modal","Dropown"],we,t,"type"),S=D.options,k=D.selection,j=o?{valid:!0}:{invalid:!0};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"form-row"},i.a.createElement(ye.a,{md:6},i.a.createElement(Ie.g,Object.assign({label:"URL - must contain '{{idp}}':",placeholder:"Add a URL",value:t.url},j,{infoText:o?"":'Please add the "{{idp}}" string in it',onChange:function(e){var t=e.target.value;a(t.indexOf("{{idp}}")>-1),n("url",t)}}))),i.a.createElement(ye.a,null,i.a.createElement(Ce.a,{className:"m-8"},i.a.createElement(Ve,{label:"Method:",selectedValue:P,options:N,onChange:function(e){null!=e&&ke.includes(e.value)&&n("configuration",e.value)}})))),i.a.createElement("div",{className:"form-row"},i.a.createElement(ye.a,{md:6},i.a.createElement(Ce.a,{className:"m-8"},i.a.createElement(Ve,{label:"Language:",selectedValue:s,options:c,onChange:function(e){null!=e&&Se.includes(e.value)&&n("lang",e.value)}}))),i.a.createElement(ye.a,{md:6},i.a.createElement(Ce.a,{className:"m-8"},i.a.createElement(Ve,{label:"Size:",selectedValue:p,options:d,onChange:function(e){null!=e&&xe.includes(e.value)&&n("size",e.value)}})))),i.a.createElement("div",{className:"form-row"},i.a.createElement(ye.a,{md:6},i.a.createElement(Ce.a,{className:"m-8"},i.a.createElement(Ve,{label:"Theme:",selectedValue:E,options:f,onChange:function(e){null!=e&&Oe.includes(e.value)&&n("theme",e.value)}}))),i.a.createElement(ye.a,{md:6},i.a.createElement(Ce.a,{className:"m-8"},i.a.createElement(Ve,{label:"Corners style:",selectedValue:y,options:_,onChange:function(e){null!=e&&Te.includes(e.value)&&n("corners",e.value)}})))),i.a.createElement("div",{className:"form-row"},i.a.createElement(ye.a,null,i.a.createElement(Ce.a,{check:!0},i.a.createElement(Ie.h,{label:"Fluid",checked:t.fluid,onChange:function(e){var t=e.target;n("fluid",t.checked)}}))),i.a.createElement(ye.a,{md:4},i.a.createElement(Ce.a,{className:"m-8"},i.a.createElement(Ve,{label:"Type",selectedValue:k,options:S,onChange:function(e){null!=e&&we.includes(e.value)&&n("type",e.value)}}))),i.a.createElement(ye.a,{md:4},i.a.createElement(Ce.a,{className:"m-8"},i.a.createElement(Ve,{label:"Protocol",selectedValue:v,options:b,onChange:function(e){null!=e&&je.includes(e.value)&&n("protocol",e.value)}})))),i.a.createElement(_e.a,null,i.a.createElement("fieldset",null,i.a.createElement("legend",null,"Provider supported:"),i.a.createElement(Ce.a,{check:!0},De.map((function(e){var a=e.entityID,o=e.entityName,r=e.logo;return i.a.createElement("div",{key:o},i.a.createElement(Ie.g,{id:o,type:"checkbox",checked:t.supported.includes(a),onChange:function(e){var i=e.target.checked;n("supported",i?[].concat(Object(l.a)(t.supported),[a]):t.supported.filter((function(e){return a!==e})))}}),i.a.createElement(Me.a,{htmlFor:o,check:!0},i.a.createElement("img",{src:r,alt:o,height:20})))}))))))},Ke=function(e){var t=e.events;return i.a.createElement("div",{className:"tableFixHead"},i.a.createElement("table",{className:"table table-hover"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"#"),i.a.createElement("th",{scope:"col"},"Type"),i.a.createElement("th",{scope:"col"},"Event"),i.a.createElement("th",{scope:"col"},"Arg"))),i.a.createElement("tbody",null,t.map((function(e,n){var a=e.type,o=e.name,r=e.arg;return i.a.createElement("tr",{key:o+n},i.a.createElement("th",{scope:"row"},t.length-n),i.a.createElement("td",null,a),i.a.createElement("td",null,o),i.a.createElement("td",null,r||""))})))))},Je=n(156),Ye=n(157),Ze=n(248),He=n(158),We=n(160),Qe=n(161),qe=n(247);Ze.a.registerLanguage("jsx",He.a),Ze.a.registerLanguage("css",We.a),Ze.a.registerLanguage("bash",Qe.a);var $e=function(e){var t=Object.entries(e),n="\nimport { SPIDReactButton } from '@dej611/spid-react-button';\nimport 'typeface-titillium-web';\nimport '@dej611/spid-react-button/dist/index.css';\n\nfunction mySPIDButton(props){\n    return (\n        <SPIDReactButton \n            ".concat(t.filter((function(e){var t=Object(u.a)(e,2);return!function(e,t){return"url"!==e&&(Array.isArray(t)?t.length===Le[e].length&&Le[e].every((function(e,n){return e===t[n]})):Le[e]===t)}(t[0],t[1])})).map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return"".concat(n,"={").concat(JSON.stringify(a,null,2),"}")})).join("\n            "),"\n        />\n    );\n}");return i.a.createElement("div",null,i.a.createElement(Ze.a,{language:"javascript",showLineNumbers:!0,wrapLines:!0,style:qe.a},n))},et=function(e){var t=e.code,n=e.lang;return i.a.createElement(Ze.a,{language:n,wrapLines:!0,style:qe.a},t)},tt={state:"init"},nt={state:"loaded",payload:""},at={state:"error"},it=function(e){var t=Object(a.useState)(tt),n=Object(u.a)(t,2),o=n[0],r=n[1];Object(a.useEffect)((function(){var e;Promise.all([fetch("./doc.md").then((function(e){return e.text()})),(e=1500,new Promise((function(t){return setTimeout(t,e)})))]).then((function(e){var t=Object(u.a)(e,1)[0];return r(Object(s.a)(Object(s.a)({},nt),{},{payload:t}))})).catch((function(){return r(at)}))}),[r]);return i.a.createElement("div",null,i.a.createElement("h1",null,"Getting started"),i.a.createElement(et,{code:"npm install --save @dej611/spid-react-button typeface-titillium-web",lang:"bash"}),"The package depends on the Titillium font. An alternative to installing the local package is to use it via CDN, adding this line to your css file:",i.a.createElement(et,{code:"@import url(https://fonts.googleapis.com/css?family=Titillium+Web:400,600,700,900);",lang:"css"}),i.a.createElement("a",{href:"https://github.com/dej611/spid-react-button",target:"_blank noreferrer"},"Github repository"),i.a.createElement("h1",null,"Reference API"),i.a.createElement($e,Object.assign({},e,{url:e.url})),"init"===o.state&&i.a.createElement(Ye.Puff,{stroke:"#0073e6",strokeOpacity:".5"}),"loaded"===o.state?i.a.createElement(Je.a,null,o.payload):null,"error"===o.state&&i.a.createElement("p",null,"An error occurred when loading the documentation from the server"))},ot=function(){var e=Object(a.useState)(Le),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!0),d=Object(u.a)(r,2),p=d[0],m=d[1],f=Object(a.useState)([]),E=Object(u.a)(f,2),g=E[0],b=E[1],v=Object(a.useCallback)((function(e,t){return o((function(n){return Object(s.a)(Object(s.a)({},n),{},Object(c.a)({},e,t))}))}),[o]),h=Object(a.useCallback)((function(e){b((function(t){return[e].concat(Object(l.a)(t))}))}),[b]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(Ne,null),i.a.createElement("section",{id:"main"},i.a.createElement(he.a,{tag:"div"},i.a.createElement(_e.a,null,i.a.createElement(ye.a,{md:"6"},i.a.createElement(_e.a,null,i.a.createElement(ye.a,null,i.a.createElement("legend",null,n.type.toUpperCase()," version"),i.a.createElement(ve,Object.assign({},n,{url:p?n.url:Pe,onProvidersShown:function(){return h({type:n.type,name:"onProvidersShown"})},onProvidersHidden:function(){return h({type:n.type,name:"onProvidersHidden"})},onProviderClicked:function(e,t,a){a.preventDefault(),h({type:n.type,name:"onProvidersClicked",arg:JSON.stringify({url:t,arg:e},null,2)})}})),i.a.createElement(Ke,{events:g})))),i.a.createElement(ye.a,null,i.a.createElement(Fe,{updateProp:v,setValidURL:m,isValidURL:p,buttonProps:n}))),i.a.createElement(_e.a,null,i.a.createElement(ye.a,null,i.a.createElement(_e.a,null,i.a.createElement("h1",null,"F.A.Q.")),i.a.createElement(_e.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"7 kb (gzipped) is too much for my project! Is it possible to treeshake it?"))),i.a.createElement(_e.a,null,i.a.createElement("p",null,"Yes. If you know already you're going to use only one type of button, you can just pick it: just import ",i.a.createElement("code",null,"SPIDReactButtonModal")," or ",i.a.createElement("code",null,"SPIDReactButtonDropdown")," and experice full treeshake.")),i.a.createElement(_e.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Is this project official?"))),i.a.createElement(_e.a,null,i.a.createElement("p",null,"No, this is not an official project.")),i.a.createElement(_e.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Is the providers list official?"))),i.a.createElement(_e.a,null,i.a.createElement("p",null,"No, as this is not an official project, the list may not be super up-to-date (we check pretty often tho). This official list of SPID providers is avilable ",i.a.createElement("a",{href:"https://github.com/italia/spid-sp-access-button",target:"_blank noreferrer"},"here"))),i.a.createElement(_e.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Where the modal version comes from? Is that official?"))),i.a.createElement(_e.a,null,i.a.createElement("p",null,"The modal version of this component comes from these other project ",i.a.createElement("a",{href:"https://github.com/italia/spid-smart-button",target:"_blank noreferrer"},"spid-smart-button"))),i.a.createElement(_e.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Does this component goes in conflict with the ",i.a.createElement("code",null,"design-react-kit"),"?"))),i.a.createElement(_e.a,null,i.a.createElement("p",null,"No. This page was in fact built using components from the ",i.a.createElement("code",null,"design-react-kit"),". If you find any conflicting issue with it, please report it to this repository.")),i.a.createElement(_e.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Why did you write all of this in English rather than Italian?"))),i.a.createElement(_e.a,null,i.a.createElement("p",null,"I guess I've started it in English and just finished it. As open source project PR are very welcome, expecially for translations!")),i.a.createElement(_e.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Does the project have Typescript types?"))),i.a.createElement(_e.a,null,i.a.createElement("p",null,"Yes, they are in the package. The API documentation is automatically extracted from types.")),i.a.createElement(_e.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"Can I contribute somehow to the project?"))),i.a.createElement(_e.a,null,i.a.createElement("p",null,"Of course you can, glad you've asked. You can report bugs or issues with the project to start with at this repository, or even enhance it with a PR!")),i.a.createElement(_e.a,null,i.a.createElement("p",null,i.a.createElement("strong",null,"What's the license of this project?"))),i.a.createElement(_e.a,null,i.a.createElement("p",null,"EUPL 1.2, European Union Public Licence V. 1.2")))))),i.a.createElement("section",{id:"api"},i.a.createElement(he.a,null,i.a.createElement(_e.a,null,i.a.createElement(ye.a,null,i.a.createElement(it,Object.assign({},n,{url:p?n.url:Pe})))))),i.a.createElement("footer",{className:"it-footer"},i.a.createElement("div",{className:"it-footer-main"},i.a.createElement(he.a,{tag:"div"},i.a.createElement("h5",null,"Note"),i.a.createElement("p",null,"All logos of each Identity Provider is a registered trademark of their respective owners"),i.a.createElement("p",null,"The SPID logo is a registered trademark of AGID, Agenzia per l'Italia Digitale della Presidenza del Consiglio dei Ministri"))),i.a.createElement("div",{className:"it-footer-small-prints clearfix"},i.a.createElement(he.a,{tag:"div"}))))};r.a.render(i.a.createElement(ot,null),document.getElementById("root"))},64:function(e,t,n){e.exports=n.p+"static/media/spid-ico-circle-lb~LegQefra.27197b71.svg"},65:function(e,t,n){e.exports=n.p+"static/media/spid-ico-circle-bb~bpKzRdOW.742f2939.svg"}},[[179,1,2]]]);
//# sourceMappingURL=main.a6ce891b.chunk.js.map