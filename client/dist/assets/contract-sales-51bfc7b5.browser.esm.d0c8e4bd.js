var c=Object.defineProperty;var n=(a,r,t)=>r in a?c(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;var e=(a,r,t)=>(n(a,typeof r!="symbol"?r+"":r,t),t);import{aS as s,ar as i,as as o}from"./index.0708ba85.js";class u{constructor(r){e(this,"featureName",s.name);e(this,"setRecipient",i(async r=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[r]})));this.contractWrapper=r}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}export{u as C};