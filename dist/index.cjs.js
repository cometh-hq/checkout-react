"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react"),L=require("@cometh/checkout-sdk"),I=1e3;var T=(e=>(e.INITIATED="initiated",e.CASHED="cashed",e.RELAYED="relayed",e.REVERTED="reverted",e.CANCELLED="cancelled",e.COMPLETED="completed",e))(T||{});const y=["reverted","cancelled","completed"];function R(e,t="https://checkout.cometh.io/v1"){return new L.CheckoutAPI({BASE:t,HEADERS:{apikey:e}})}function f(e,t){return n.useMemo(()=>R(e,t),[e,t])}const g=(e,t,s,a,h,r,k,C,l,u,o)=>{const c=f(e,t),[S,d]=n.useState(!1),A=n.useCallback(async()=>{try{d(!0);const i=await c.checkoutSessions.createCheckoutSession({requestBody:{productId:s,userAddress:a,email:h,parameters:r,successUrl:k,failUrl:C}});if(o&&o(i.transactionId),l){const E=document.createElement("a");E.href=i.url,E.target="_blank",E.click(),E.remove();return}else window.location.href=i.url}catch(i){console.error("Error during redirection",i),u&&u(i)}finally{d(!1)}},[c,s,a,h,r,k,C,l,u,o]);return{isLoading:S,redirectToCheckoutSession:A}},b=(e,t,s)=>{const a=f(e,t),[h,r]=n.useState(!0),[k,C]=n.useState(null),[l,u]=n.useState(null),o=n.useCallback(async()=>{try{r(!0);const c=await a.transactions.getPublicTransactionById({transactionId:s});C(c),y.includes(c.status)?r(!1):setTimeout(o,I)}catch(c){console.error("Error during transaction polling",c),u(c),r(!1)}},[a,s]);return n.useEffect(()=>{o()},[o]),{isLoading:h,transaction:k,error:l}},m=({apikey:e,apiUrl:t,productId:s,userAddress:a,email:h,parameters:r,successUrl:k,failUrl:C,children:l,loadingComponent:u,openInNewTab:o,onError:c,onNewTransaction:S,...d})=>{const{isLoading:A,redirectToCheckoutSession:i}=g(e,t,s,a,h,r,k,C,o,c,S);return n.createElement("button",{...d,onClick:i},A?u||"Redirecting...":l||"Checkout now")};exports.CheckoutButton=m;exports.TransactionStatus=T;exports.useCheckoutClient=f;exports.useCheckoutSession=g;exports.useWaitForTransaction=b;
//# sourceMappingURL=index.cjs.js.map
