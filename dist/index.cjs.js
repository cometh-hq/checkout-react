"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react"),T=require("@cometh/checkout-sdk"),I=1e3;var g=(e=>(e.INITIATED="initiated",e.CASHED="cashed",e.RELAYED="relayed",e.REVERTED="reverted",e.CANCELLED="cancelled",e.COMPLETED="completed",e))(g||{});const y=["reverted","cancelled","completed"];function R(e,t="https://checkout.cometh.io/v1"){return new T.CheckoutAPI({BASE:t,HEADERS:{apikey:e}})}function f(e,t){return n.useMemo(()=>R(e,t),[e,t])}const L=(e,t,s,a,h,r,k,C,l,u,c)=>{const o=f(e,t),[S,d]=n.useState(!1),A=n.useCallback(async()=>{try{d(!0);const i=await o.checkoutSessions.createCheckoutSession({requestBody:{productId:s,userAddress:a,email:h,parameters:r,successUrl:k,failUrl:C}});if(c&&c(i.transactionId),l){const E=document.createElement("a");E.href=i.url,E.target="_blank",E.click(),E.remove();return}else window.location.href=i.url}catch(i){console.error("Error during redirection",i),u&&u(i)}finally{d(!1)}},[o,s,a,h,r,k,C,l,u,c]);return{isLoading:S,redirectToCheckoutSession:A}},m=(e,t,s)=>{const a=f(e,t),[h,r]=n.useState(!0),[k,C]=n.useState(null),[l,u]=n.useState(null),c=n.useCallback(async()=>{try{r(!0);const o=await a.transactions.getTransactionById({transactionId:s});y.includes(o.status)?(C(o),r(!1)):setTimeout(c,I)}catch(o){console.error("Error during transaction polling",o),u(o),r(!1)}},[a,s]);return n.useEffect(()=>{c()},[c]),{isLoading:h,transaction:k,error:l}},D=({apikey:e,apiUrl:t,productId:s,userAddress:a,email:h,parameters:r,successUrl:k,failUrl:C,children:l,loadingComponent:u,openInNewTab:c,onError:o,onNewTransaction:S,...d})=>{const{isLoading:A,redirectToCheckoutSession:i}=L(e,t,s,a,h,r,k,C,c,o,S);return n.createElement("button",{...d,onClick:i},A?u||"Redirecting...":l||"Checkout now")};exports.CheckoutButton=D;exports.TransactionStatus=g;exports.useCheckoutClient=f;exports.useCheckoutSession=L;exports.useWaitForTransaction=m;
//# sourceMappingURL=index.cjs.js.map
