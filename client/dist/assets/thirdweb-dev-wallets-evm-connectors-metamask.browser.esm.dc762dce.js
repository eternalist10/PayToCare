import{b as m,w as p,f as l,i as w,j as f,cp as g,R as v}from"./index.0708ba85.js";import{a as C,U as u,R as I}from"./errors-3055a99c.browser.esm.8fe1885c.js";import{InjectedConnector as _}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.ddadbb85.js";import"./url-bc88b2b6.browser.esm.d6c70971.js";import"./normalizeChainId-e4cc0175.browser.esm.042707b7.js";var c=new WeakMap;class A extends _{constructor(t){const s={...{name:"MetaMask",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:v},...t.options};super({chains:t.chains,options:s,connectorStorage:t.connectorStorage}),m(this,"id",p.metamask),l(this,c,{writable:!0,value:void 0}),w(this,c,s.UNSTABLE_shimOnConnectSelectAccount)}async connect(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new C;this.setupListeners(),this.emit("message",{type:"connecting"});let i=null;if(f(this,c)&&((r=this.options)==null?void 0:r.shimDisconnect)&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))&&(i=await this.getAccount().catch(()=>null),!!i))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(d){if(this.isUserRejectedRequestError(d))throw new u(d)}if(!i){const o=await e.request({method:"eth_requestAccounts"});i=g(o[0])}let n=await this.getChainId(),a=this.isChainUnsupported(n);if(t.chainId&&n!==t.chainId)try{await this.switchChain(t.chainId),n=t.chainId,a=this.isChainUnsupported(t.chainId)}catch(o){console.error(`Could not switch to chain id : ${t.chainId}`,o)}(s=this.options)!=null&&s.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={chain:{id:n,unsupported:a},provider:e,account:i};return this.emit("connect",h),h}catch(e){throw this.isUserRejectedRequestError(e)?new u(e):e.code===-32002?new I(e):e}}async switchAccount(){await(await this.getProvider()).request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}export{A as MetaMaskConnector};