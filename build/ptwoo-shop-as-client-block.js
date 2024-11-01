(()=>{var e={942:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=a(e,s(o)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return c.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)n.call(e,o)&&e[o]&&(t=a(t,o));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(c.default=c,e.exports=c):void 0===(o=function(){return c}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var c=t[n];if(void 0!==c)return c.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=window.React,n=window.wp.primitives,c=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{fillRule:"evenodd",d:"M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",clipRule:"evenodd"})),s=JSON.parse('{"apiVersion":2,"name":"woocommerce/ptwoo-shop-as-client","version":"0.1.0","title":"Shop As Client","category":"woocommerce","description":"","supports":{"html":false,"align":false,"multiple":false,"reusable":false},"parent":["woocommerce/checkout-fields-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":false}}},"textdomain":"shop-as-client"}'),a=window.wp.i18n,r={lock:{type:"object",default:{move:!1,remove:!0}},className:{type:"string",default:""},stepTitle:{type:"string",default:(0,a.__)("Shop as client","shop-as-client")},stepDescription:{type:"string",default:""},showStepNumber:{type:"boolean",default:!0}};var l=o(942),i=o.n(l);const p=window.wp.blockEditor,m=window.wp.components,u=window.wp.element,d=window.wp.data,h=window.wp.hooks,w=window.wc.blocksComponents,b=window.wc.wcSettings,k=window.wc.blocksCheckout,f=window.wc.wcBlocksData,_=({title:e,stepHeadingContent:o})=>(0,t.createElement)("div",{className:"wc-block-components-checkout-step__heading"},(0,t.createElement)("h2",{"aria-hidden":"true",className:"wc-block-components-checkout-step__title wc-block-components-title"},e),!!o&&(0,t.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},o)),E=({title:e="",description:o="",showStepNumber:n=!0,className:c="",children:s,stepHeadingContent:a=(()=>{}),blockPosition:r=""})=>{const l=e?"fieldset":"div";return(0,t.createElement)(l,{className:i()(c,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":n}),"data-position":r},e&&(0,t.createElement)("legend",{className:"screen-reader-text"},e),e&&(0,t.createElement)(_,{title:e,stepHeadingContent:a()}),(0,t.createElement)("div",{className:"wc-block-components-checkout-step__container"},o&&(0,t.createElement)("p",{className:"wc-block-components-checkout-step__description"},o),(0,t.createElement)("div",{className:"wc-block-components-checkout-step__content"},s)))},v="ptwoo-shop-as-client",{canCheckout:g,defaultShopAsClient:C,defaultCreateUser:N,showProAddOnNotice:y,blockPosition:S}=(0,b.getSetting)("ptwoo_shop_as_client_data"),x=(O=r,e=>o=>{const n=((e,t)=>{const o=[];return Object.keys(e).forEach((n=>{if(void 0!==t[n])switch(e[n].type){case"boolean":o[n]="false"!==t[n]&&!1!==t[n];break;case"number":o[n]=parseInt(t[n],10);break;case"array":case"object":o[n]=JSON.parse(t[n]);break;default:o[n]=t[n]}else o[n]=e[n].default})),o})(O,o);return(0,t.createElement)(e,{...o,...n})})((e=>{const{stepTitle:o,stepDescription:n,showStepNumber:c,className:s,inEditor:r}=e,[l,p]=(0,u.useState)(C),[b,_]=(0,u.useState)(N),{__internalIncrementCalculating:x,__internalDecrementCalculating:O}=(0,d.useDispatch)(f.CHECKOUT_STORE_KEY);(0,u.useEffect)((()=>((0,k.extensionCartUpdate)({namespace:v,data:{resetCustomerData:!0}}),()=>{})),[]),(0,u.useEffect)((()=>{x(),(0,k.extensionCartUpdate)({namespace:v,data:{shopAsClient:l,createUser:b},cartPropsToReceive:["extensions"]}).then((()=>{O()}))}),[k.extensionCartUpdate,l,b,x,O]);const A=(0,h.applyFilters)("shopAsClient.AddOns",null,{...e,canCheckout:g,shopAsClient:l,createUser:b});if(!g)return null;let P=(0,t.createElement)("div",{className:s},(0,t.createElement)(w.CheckboxControl,{label:(0,a.__)("Shop as client","shop-as-client"),checked:l,onChange:e=>{p(e),!1===e&&_(!1)}}),A,l&&(0,t.createElement)(w.CheckboxControl,{label:(0,a.__)("Create user (if not found by email)?","shop-as-client"),checked:b,onChange:_}),y&&(0,t.createElement)("div",{className:"wc-block-components-notices"},(0,u.createInterpolateElement)(sprintf("<a>%s<br/>%s</a>",(0,a.__)("Do you want to load the customer details automatically?","shop-as-client"),(0,a.__)("Get the PRO add-on!","shop-as-client")),{a:(0,t.createElement)(m.ExternalLink,{href:"https://ptwooplugins.com/product/shop-as-client-for-woocommerce-pro-add-on/"}),br:(0,t.createElement)("br",null)})));return r||(P=(0,t.createElement)(E,{title:o,description:n,showStepNumber:c,className:i()("wp-block-woocommerce-ptwoo-shop-as-client-block",s),blockPosition:S},P)),P}));var O;const A=({children:e,stepHeadingContent:o})=>(0,t.createElement)("div",{className:"wc-block-components-checkout-step__heading"},(0,t.createElement)(w.Title,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},e),!!o&&(0,t.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},o)),P=({attributes:e,setAttributes:o,className:n="",children:c})=>{const{stepTitle:s,stepDescription:r,showStepNumber:l}=e;return(0,t.createElement)("div",{className:i()(n,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":l})},(0,t.createElement)(A,null,(0,t.createElement)(p.PlainText,{value:s,onChange:e=>o({stepTitle:e}),style:{backgroundColor:"transparent"}})),(0,t.createElement)("div",{className:"wc-block-components-checkout-step__container"},(0,t.createElement)("p",{className:"wc-block-components-checkout-step__description"},(0,t.createElement)(p.PlainText,{className:r?"":"wc-block-components-checkout-step__description-placeholder",value:r,placeholder:(0,a.__)("Optional text for this form step.","shop-as-client"),onChange:e=>o({stepDescription:e}),style:{backgroundColor:"transparent"}})),(0,t.createElement)("div",{className:"wc-block-components-checkout-step__content"},c)))};(0,e.registerBlockType)({...s,attributes:{...r}},{icon:c,edit:function({attributes:e,setAttributes:o}){const{showStepNumber:n,className:c=""}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(p.InspectorControls,null,(0,t.createElement)(m.PanelBody,{title:(0,a.__)("Form Step Options","shop-as-client")},(0,t.createElement)(m.ToggleControl,{label:(0,a.__)("Show step number","shop-as-client"),checked:n,onChange:()=>o({showStepNumber:!n})}))),(0,t.createElement)(P,{setAttributes:o,attributes:e,className:i()("wp-block-woocommerce-ptwoo-shop-as-client-block",c)},(0,t.createElement)("div",{"aria-disabled":"true",style:{userSelect:"none",pointerEvents:"none",cursor:"normal"}},(0,t.createElement)(x,{inEditor:!0}))))},save:function({attributes:e}){const{text:o}=e;return(0,t.createElement)("div",{...p.useBlockProps.save()},(0,t.createElement)(p.RichText.Content,{value:o}))}})})()})();