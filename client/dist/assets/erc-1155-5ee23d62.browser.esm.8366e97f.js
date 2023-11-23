var rt=Object.defineProperty;var et=(y,t,a)=>t in y?rt(y,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):y[t]=a;var l=(y,t,a)=>(et(y,typeof t!="symbol"?t+"":t,a),a);import{aT as nt,B as T,aq as j,aw as L,aU as it,aF as g,ar as h,as as E,ao as S,aV as v,aW as P,aX as G,aY as N,aZ as K,a_ as x,a$ as X,b0 as J,b1 as q,b2 as st,b3 as tt,aG as k,b4 as D,b5 as I,b6 as ot,aQ as ct,aL as lt,b7 as F,b8 as _,b9 as pt,ba as ht,_ as dt,al as ut,bb as mt,bc as gt,bd as ft}from"./index.0708ba85.js";import{a as b}from"./assertEnabled-bf987093.browser.esm.b8916aaa.js";import{d as C,h as R,C as wt}from"./contract-appuri-2a88c8fb.browser.esm.25c28503.js";import{F as Ct,a as yt,D as O,u as B,b as Wt}from"./QueryParams-8a30379b.browser.esm.10f5a076.js";import{D as bt,c as Et}from"./contract-owner-2ddff556.browser.esm.add7f4e2.js";import{f as Tt}from"./index.c05fda0a.js";import{S as At,b as St,M as Mt,t as U,l as z,n as V,C as w,c as $,f as vt,p as Pt,d as Q,e as Z,u as Nt,g as It,h as Y}from"./signature-ff05b7f7.browser.esm.be1d49c2.js";import{s as Dt}from"./setErc20Allowance-f181219a.browser.esm.a541b727.js";class Rt{constructor(t,a,e){l(this,"set",h((()=>{var t=this;return async function(a,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return t.setBatch.prepare([{tokenId:a,claimConditions:e}],r)}})()));l(this,"setBatch",h((()=>{var t=this;return async function(a){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const r={},n=await Promise.all(a.map(async s=>{let{tokenId:p,claimConditions:d}=s,f=d;if(t.isLegacySinglePhaseDrop(t.contractWrapper)){if(e=!0,d.length===0)f=[{startTime:new Date(0),currencyAddress:j,price:0,maxClaimableSupply:0,maxClaimablePerWallet:0,waitInSeconds:0,merkleRootHash:mt([0],32),snapshot:[]}];else if(d.length>1)throw new Error("Single phase drop contract cannot have multiple claim conditions, only one is allowed")}(t.isNewSinglePhaseDrop(t.contractWrapper)||t.isNewMultiphaseDrop(t.contractWrapper))&&f.forEach(o=>{var W;if(o.snapshot&&o.snapshot.length>0&&(o.maxClaimablePerWallet===void 0||o.maxClaimablePerWallet==="unlimited"))throw new Error(`maxClaimablePerWallet must be set to a specific value when an allowlist is set.
Set it to 0 to only allow addresses in the allowlist to claim the amount specified in the allowlist.

ex:
contract.claimConditions.set(tokenId, [{ snapshot: [{ address: '0x...', maxClaimable: 1 }], maxClaimablePerWallet: 0 }])`);if(o.snapshot&&o.snapshot.length>0&&((W=o.maxClaimablePerWallet)==null?void 0:W.toString())==="0"&&o.snapshot.map(A=>{var M;return typeof A=="string"?0:Number(((M=A.maxClaimable)==null?void 0:M.toString())||0)}).reduce((A,M)=>A+M,0)===0)throw new Error("maxClaimablePerWallet is set to 0, and all addresses in the allowlist have max claimable 0. This means that no one can claim.")});const{snapshotInfos:m,sortedConditions:u}=await Pt(f,0,t.contractWrapper.getProvider(),t.storage,t.getSnapshotFormatVersion());return m.forEach(o=>{r[o.merkleRoot]=o.snapshotUri}),{tokenId:p,sortedConditions:u}})),i=await t.metadata.get(),c=[];for(const s of Object.keys(i.merkle||{}))r[s]=i.merkle[s];if(!Tt(i.merkle,r)){const s=await t.metadata.parseInputMetadata({...i,merkle:r}),p=await t.metadata._parseAndUploadMetadata(s);if(R("setContractURI",t.contractWrapper)){const d=new S(t.contractWrapper);c.push(d.encode("setContractURI",[p]))}else throw new Error("Setting a merkle root requires implementing ContractMetadata in your contract to support storing a merkle root.")}if(n.forEach(s=>{let{tokenId:p,sortedConditions:d}=s;const f=new S(t.contractWrapper);if(t.isLegacySinglePhaseDrop(t.contractWrapper)){const m=new S(t.contractWrapper);c.push(m.encode("setClaimConditions",[p,Q(d[0]),e]))}else if(t.isLegacyMultiPhaseDrop(t.contractWrapper))c.push(f.encode("setClaimConditions",[p,d.map(Q),e]));else if(t.isNewSinglePhaseDrop(t.contractWrapper))c.push(f.encode("setClaimConditions",[p,Z(d[0]),e]));else if(t.isNewMultiphaseDrop(t.contractWrapper))c.push(f.encode("setClaimConditions",[p,d.map(Z),e]));else throw new Error("Contract does not support claim conditions")}),R("multicall",t.contractWrapper))return E.fromContractWrapper({contractWrapper:t.contractWrapper,method:"multicall",args:[c]});throw new Error("Contract does not support multicall")}})()));l(this,"update",h(async(t,a,e)=>{const r=await this.getAll(t),n=await Nt(a,e,r);return await this.set.prepare(t,n)}));this.storage=e,this.contractWrapper=t,this.metadata=a}async getActive(t,a){const e=await this.get(t),r=await this.metadata.get();return await U(e,0,this.contractWrapper.getProvider(),r.merkle,this.storage,(a==null?void 0:a.withAllowList)||!1)}async get(t,a){if(this.isLegacySinglePhaseDrop(this.contractWrapper)){const e=await this.contractWrapper.read("claimCondition",[t]);return z(e)}else if(this.isLegacyMultiPhaseDrop(this.contractWrapper)){const e=a!==void 0?a:await this.contractWrapper.read("getActiveClaimConditionId",[t]),r=await this.contractWrapper.read("getClaimConditionById",[t,e]);return z(r)}else if(this.isNewSinglePhaseDrop(this.contractWrapper)){const e=await this.contractWrapper.read("claimCondition",[t]);return V(e)}else if(this.isNewMultiphaseDrop(this.contractWrapper)){const e=a!==void 0?a:await this.contractWrapper.read("getActiveClaimConditionId",[t]),r=await this.contractWrapper.read("getClaimConditionById",[t,e]);return V(r)}else throw new Error("Contract does not support claim conditions")}async getAll(t,a){if(this.isLegacyMultiPhaseDrop(this.contractWrapper)||this.isNewMultiphaseDrop(this.contractWrapper)){const e=await this.contractWrapper.read("claimCondition",[t]),r=e.currentStartId.toNumber(),n=e.count.toNumber(),i=[];for(let s=r;s<r+n;s++)i.push(await this.get(t,s));const c=await this.metadata.get();return Promise.all(i.map(s=>U(s,0,this.contractWrapper.getProvider(),c.merkle,this.storage,(a==null?void 0:a.withAllowList)||!1)))}else return[await this.getActive(t,a)]}async canClaim(t,a,e){return e&&(e=await g(e)),(await this.getClaimIneligibilityReasons(t,a,e)).length===0}async getClaimIneligibilityReasons(t,a,e){const r=[];let n,i;if(e===void 0)try{e=await this.contractWrapper.getSignerAddress()}catch(o){console.warn("failed to get signer address",o)}if(!e)return[w.NoWallet];const c=await g(e);try{i=await this.getActive(t)}catch(o){return F(o,"!CONDITION")||F(o,"no active mint condition")?(r.push(w.NoClaimConditionSet),r):(r.push(w.Unknown),r)}if(i.availableSupply!=="unlimited"&&T.from(i.availableSupply).lt(a))return r.push(w.NotEnoughSupply),r;const p=_(i.merkleRootHash).length>0;let d=null;if(p){if(d=await this.getClaimerProofs(t,c),!d&&(this.isLegacySinglePhaseDrop(this.contractWrapper)||this.isLegacyMultiPhaseDrop(this.contractWrapper)))return r.push(w.AddressNotAllowed),r;if(d)try{const o=await this.prepareClaim(t,a,!1,c);let W;if(this.isLegacyMultiPhaseDrop(this.contractWrapper)){if(n=await this.contractWrapper.read("getActiveClaimConditionId",[t]),[W]=await this.contractWrapper.read("verifyClaimMerkleProof",[n,c,t,a,o.proofs,o.maxClaimable]),!W)return r.push(w.AddressNotAllowed),r}else if(this.isLegacySinglePhaseDrop(this.contractWrapper)){if([W]=await this.contractWrapper.read("verifyClaimMerkleProof",[t,c,a,{proof:o.proofs,maxQuantityInAllowlist:o.maxClaimable}]),!W)return r.push(w.AddressNotAllowed),r}else this.isNewSinglePhaseDrop(this.contractWrapper)?await this.contractWrapper.read("verifyClaim",[t,c,a,o.currencyAddress,o.price,{proof:o.proofs,quantityLimitPerWallet:o.maxClaimable,currency:o.currencyAddressInProof,pricePerToken:o.priceInProof}]):this.isNewMultiphaseDrop(this.contractWrapper)&&(n=await this.contractWrapper.read("getActiveClaimConditionId",[t]),await this.contractWrapper.read("verifyClaim",[n,c,t,a,o.currencyAddress,o.price,{proof:o.proofs,quantityLimitPerWallet:o.maxClaimable,currency:o.currencyAddressInProof,pricePerToken:o.priceInProof}]))}catch(o){switch(console.warn("Merkle proof verification failed:","reason"in o?o.reason:o),o.reason){case"!Qty":r.push(w.OverMaxClaimablePerWallet);break;case"!PriceOrCurrency":r.push(w.WrongPriceOrCurrency);break;case"!MaxSupply":r.push(w.NotEnoughSupply);break;case"cant claim yet":r.push(w.ClaimPhaseNotStarted);break;default:{r.push(w.AddressNotAllowed);break}}return r}}if(this.isNewSinglePhaseDrop(this.contractWrapper)||this.isNewMultiphaseDrop(this.contractWrapper)){let o=T.from(0),W=$(i.maxClaimablePerWallet,0);try{o=await this.getSupplyClaimedByWallet(t,c)}catch{}if(d&&(W=$(d.maxClaimable,0)),W.gt(0)&&W.lt(o.add(a)))return r.push(w.OverMaxClaimablePerWallet),r;if((!p||p&&!d)&&(W.lte(o)||W.eq(0)))return r.push(w.AddressNotAllowed),r}let[f,m]=[T.from(0),T.from(0)];this.isLegacyMultiPhaseDrop(this.contractWrapper)?(n=await this.contractWrapper.read("getActiveClaimConditionId",[t]),[f,m]=await this.contractWrapper.read("getClaimTimestamp",[t,n,c])):this.isLegacySinglePhaseDrop(this.contractWrapper)&&([f,m]=await this.contractWrapper.read("getClaimTimestamp",[t,c]));const u=T.from(Date.now()).div(1e3);if(f.gt(0)&&u.lt(m))return m.eq(D)?r.push(w.AlreadyClaimed):r.push(w.WaitBeforeNextClaimTransaction),r;if(i.price.gt(0)&&pt()){const o=i.price.mul(a),W=this.contractWrapper.getProvider();if(ht(i.currencyAddress))(await W.getBalance(c)).lt(o)&&r.push(w.NotEnoughTokens);else{const A=(await dt(()=>import("./index.0708ba85.js").then(at=>at.fr),["assets/index.0708ba85.js","assets/index.63cb93ae.css"])).default;(await new ut(W,i.currencyAddress,A,{},this.storage).read("balanceOf",[c])).lt(o)&&r.push(w.NotEnoughTokens)}}return r}async getClaimerProofs(t,a,e){const n=(await this.get(t,e)).merkleRoot;if(_(n).length>0){const c=await this.metadata.get(),s=await g(a);return await vt(s,n.toString(),c.merkle,this.contractWrapper.getProvider(),this.storage,this.getSnapshotFormatVersion())}else return null}async getSupplyClaimedByWallet(t,a){const e=await g(a);if(this.isNewSinglePhaseDrop(this.contractWrapper))return await this.contractWrapper.read("getSupplyClaimedByWallet",[t,e]);if(this.isNewMultiphaseDrop(this.contractWrapper)){const r=await this.contractWrapper.read("getActiveClaimConditionId",[t]);return await this.contractWrapper.read("getSupplyClaimedByWallet",[t,r,e])}throw new Error("This contract does not support the getSupplyClaimedByWallet function")}async prepareClaim(t,a,e,r){const n=await g(r||await this.contractWrapper.getSignerAddress());return It(n,a,await this.getActive(t),async()=>(await this.metadata.get()).merkle,0,this.contractWrapper,this.storage,e,this.getSnapshotFormatVersion())}async getClaimArguments(t,a,e,r){const n=await g(a);return this.isLegacyMultiPhaseDrop(this.contractWrapper)?[n,t,e,r.currencyAddress,r.price,r.proofs,r.maxClaimable]:this.isLegacySinglePhaseDrop(this.contractWrapper)?[n,t,e,r.currencyAddress,r.price,{proof:r.proofs,maxQuantityInAllowlist:r.maxClaimable},k("")]:[n,t,e,r.currencyAddress,r.price,{proof:r.proofs,quantityLimitPerWallet:r.maxClaimable,pricePerToken:r.priceInProof,currency:r.currencyAddressInProof},k("")]}async getClaimTransaction(t,a,e,r){if(r!=null&&r.pricePerToken)throw new Error("Price per token should be set via claim conditions by calling `contract.erc1155.claimConditions.set()`");const n=await this.prepareClaim(a,e,(r==null?void 0:r.checkERC20Allowance)||!0);return E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:await this.getClaimArguments(a,t,e,n),overrides:n.overrides})}isNewSinglePhaseDrop(t){return C(t,"ERC1155ClaimConditionsV2")}isNewMultiphaseDrop(t){return C(t,"ERC1155ClaimPhasesV2")}isLegacySinglePhaseDrop(t){return C(t,"ERC1155ClaimConditionsV1")}isLegacyMultiPhaseDrop(t){return C(t,"ERC1155ClaimPhasesV1")}getSnapshotFormatVersion(){return this.isLegacyMultiPhaseDrop(this.contractWrapper)||this.isLegacySinglePhaseDrop(this.contractWrapper)?Y.V1:Y.V2}}class Lt{constructor(t,a,e){l(this,"featureName",G.name);l(this,"to",h(async(t,a)=>{const e=a.map(p=>p.metadata),r=a.map(p=>p.supply),n=await B(e,this.storage),i=await g(t),c=new S(this.contractWrapper),s=await Promise.all(n.map(async(p,d)=>c.encode("mintTo",[i,D,p,r[d]])));return E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[s],parse:p=>{const d=this.contractWrapper.parseLogs("TokensMinted",p.logs);if(d.length===0||d.length<e.length)throw new Error("TokenMinted event not found, minting failed");return d.map(f=>{const m=f.args.tokenIdMinted;return{id:m,receipt:p,data:()=>this.erc1155.get(m)}})}})}));this.erc1155=t,this.contractWrapper=a,this.storage=e}}class xt{constructor(t){l(this,"featureName",N.name);l(this,"tokens",h(async(t,a)=>{const e=await this.contractWrapper.getSignerAddress();return this.from.prepare(e,t,a)}));l(this,"from",h(async(t,a,e)=>E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[await g(t),a,e]})));l(this,"batch",h(async(t,a)=>{const e=await this.contractWrapper.getSignerAddress();return this.batchFrom.prepare(e,t,a)}));l(this,"batchFrom",h(async(t,a,e)=>E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burnBatch",args:[await g(t),a,e]})));this.contractWrapper=t}}class kt{constructor(t,a){l(this,"featureName",v.name);this.erc1155=t,this.contractWrapper=a}async all(t){const a=T.from((t==null?void 0:t.start)||0).toNumber(),e=T.from((t==null?void 0:t.count)||O).toNumber(),r=Math.min((await this.totalCount()).toNumber(),a+e);return await Promise.all([...Array(r-a).keys()].map(n=>this.erc1155.get((a+n).toString())))}async totalCount(){return await this.contractWrapper.read("nextTokenIdToMint",[])}async totalCirculatingSupply(t){return await this.contractWrapper.read("totalSupply",[t])}async owned(t,a){const[e,r]=await Promise.all([g(t||await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("nextTokenIdToMint",[])]);let i=(await this.contractWrapper.read("balanceOfBatch",[Array(r.toNumber()).fill(e),Array.from(Array(r.toNumber()).keys())])).map((s,p)=>({tokenId:p,balance:s})).filter(s=>s.balance.gt(0));if(a){const s=(a==null?void 0:a.start)||0,p=(a==null?void 0:a.count)||O;i=i.slice(s,s+p)}return(await Promise.all(i.map(s=>this.erc1155.get(s.tokenId.toString())))).map((s,p)=>({...s,owner:e,quantityOwned:i[p].balance.toString()}))}}class Bt{constructor(t,a,e){l(this,"featureName",K.name);l(this,"lazyMint",h(async(t,a)=>{const e=await this.erc1155.nextTokenIdToMint(),r=await B(t,this.storage,e.toNumber(),a),n=r[0].substring(0,r[0].lastIndexOf("/"));for(let s=0;s<r.length;s++){const p=r[s].substring(0,r[s].lastIndexOf("/"));if(n!==p)throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${n}' but got '${p}'`)}const i=s=>{const p=this.contractWrapper.parseLogs("TokensLazyMinted",s==null?void 0:s.logs),d=p[0].args.startTokenId,f=p[0].args.endTokenId,m=[];for(let u=d;u.lte(f);u=u.add(1))m.push({id:u,receipt:s,data:()=>this.erc1155.getTokenMetadata(u)});return m},c=await tt(this.contractWrapper.address,this.contractWrapper.getProvider());return this.isLegacyEditionDropContract(this.contractWrapper,c)?E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[r.length,`${n.endsWith("/")?n:`${n}/`}`],parse:i}):E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[r.length,`${n.endsWith("/")?n:`${n}/`}`,k("")],parse:i})}));this.erc1155=t,this.contractWrapper=a,this.storage=e,this.revealer=this.detectErc1155Revealable()}detectErc1155Revealable(){if(C(this.contractWrapper,"ERC1155Revealable"))return new bt(this.contractWrapper,this.storage,q.name,()=>this.erc1155.nextTokenIdToMint())}isLegacyEditionDropContract(t,a){return a&&a.type==="DropERC1155"&&a.version<3||!1}}class Ft{constructor(t,a,e){l(this,"featureName",P.name);l(this,"to",h(async(t,a)=>{const e=await this.getMintTransaction(t,a);return e.setParse(r=>{const n=this.contractWrapper.parseLogs("TransferSingle",r==null?void 0:r.logs);if(n.length===0)throw new Error("TransferSingleEvent event not found");const i=n[0].args.id;return{id:i,receipt:r,data:()=>this.erc1155.get(i.toString())}}),e}));l(this,"additionalSupplyTo",h(async(t,a,e)=>{const r=await this.erc1155.getTokenMetadata(a);return E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[await g(t),a,r.uri,e],parse:n=>({id:T.from(a),receipt:n,data:()=>this.erc1155.get(a)})})}));this.erc1155=t,this.contractWrapper=a,this.storage=e,this.batch=this.detectErc1155BatchMintable()}async getMintTransaction(t,a){const e=await Wt(a.metadata,this.storage);return E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[await g(t),D,e,a.supply]})}detectErc1155BatchMintable(){if(C(this.contractWrapper,"ERC1155BatchMintable"))return new Lt(this.erc1155,this.contractWrapper,this.storage)}}const H=(()=>I.object({address:gt,quantity:ft.default(1)}))(),_t=(()=>I.union([I.array(I.string()).transform(async y=>await Promise.all(y.map(t=>H.parseAsync({address:t})))),I.array(H)]))();class Ot{constructor(t){l(this,"featureName",x.name);l(this,"to",h(async(t,a,e,r)=>await this.getClaimTransaction(t,a,e,r)));this.contractWrapper=t}async getClaimTransaction(t,a,e,r){let n={};return r&&r.pricePerToken&&(n=await Et(this.contractWrapper,r.pricePerToken,e,r.currencyAddress,r.checkERC20Allowance)),E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:[await g(t),a,e],overrides:n})}}class Ut{constructor(t,a){l(this,"featureName",X.name);l(this,"to",h(async(t,a,e,r)=>await this.conditions.getClaimTransaction(t,a,e,r)));this.contractWrapper=t,this.storage=a;const e=new wt(this.contractWrapper,ot,this.storage);this.conditions=new Rt(t,e,this.storage)}}class zt{constructor(t,a,e){l(this,"featureName",J.name);l(this,"mint",h(async t=>{const a=t.payload,e=t.signature,[r,n]=await Promise.all([this.mapPayloadToContractStruct(a),this.contractWrapper.getCallOverrides()]);return await Dt(this.contractWrapper,r.pricePerToken.mul(r.quantity),a.currencyAddress,n),E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[r,e],overrides:n,parse:i=>{const c=this.contractWrapper.parseLogs("TokensMintedWithSignature",i.logs);if(c.length===0)throw new Error("No MintWithSignature event found");return{id:c[0].args.tokenIdMinted,receipt:i}}})}));l(this,"mintBatch",h(async t=>{const a=await Promise.all(t.map(i=>this.mapPayloadToContractStruct(i.payload))),e=t.map((i,c)=>{const s=a[c],p=i.signature,d=i.payload.price;if(T.from(d).gt(0))throw new Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:s,signature:p}}),r=new S(this.contractWrapper),n=e.map(i=>r.encode("mintWithSignature",[i.message,i.signature]));if(R("multicall",this.contractWrapper))return E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[n],parse:i=>{const c=this.contractWrapper.parseLogs("TokensMintedWithSignature",i.logs);if(c.length===0)throw new Error("No MintWithSignature event found");return c.map(s=>({id:s.args.tokenIdMinted,receipt:i}))}});throw new Error("Multicall not supported on this contract!")}));this.contractWrapper=t,this.storage=a,this.roles=e}async verify(t){const a=t.payload,e=t.signature,r=await this.mapPayloadToContractStruct(a);return(await this.contractWrapper.read("verify",[r,e]))[0]}async generate(t){const a={...t,tokenId:D};return this.generateFromTokenId(a)}async generateFromTokenId(t){return(await this.generateBatchFromTokenIds([t]))[0]}async generateBatch(t){const a=t.map(e=>({...e,tokenId:D}));return this.generateBatchFromTokenIds(a)}async generateBatchFromTokenIds(t){var m;const a=this.contractWrapper.getSigner();ct(a,"No signer available"),await((m=this.roles)==null?void 0:m.verify(["minter"],await a.getAddress()));const e=await Promise.all(t.map(u=>At.parseAsync(u))),r=e.map(u=>u.metadata),[n,i,c]=await Promise.all([B(r,this.storage),this.contractWrapper.getChainID(),tt(this.contractWrapper.address,this.contractWrapper.getProvider())]),s=await Promise.all(e.map((u,o)=>St.parseAsync({...u,uri:n[o]}))),p=await Promise.all(s.map(u=>this.mapPayloadToContractStruct(u))),d=(c==null?void 0:c.type)==="TokenERC1155";return(await Promise.all(p.map(u=>this.contractWrapper.signTypedData(a,{name:d?"TokenERC1155":"SignatureMintERC1155",version:"1",chainId:i,verifyingContract:this.contractWrapper.address},{MintRequest:Mt},u)))).map((u,o)=>({payload:s[o],signature:u.toString()}))}async mapPayloadToContractStruct(t){const a=await lt(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,tokenId:t.tokenId,uri:t.uri,quantity:t.quantity,pricePerToken:a,currency:t.currencyAddress,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,uid:t.uid,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient}}}class Jt{constructor(t,a,e){l(this,"featureName",nt.name);l(this,"transfer",h((()=>{var t=this;return async function(a,e,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[0];const i=await t.contractWrapper.getSignerAddress();return E.fromContractWrapper({contractWrapper:t.contractWrapper,method:"safeTransferFrom",args:[i,await g(a),e,r,n]})}})()));l(this,"transferFrom",h((()=>{var t=this;return async function(a,e,r,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[0];return E.fromContractWrapper({contractWrapper:t.contractWrapper,method:"safeTransferFrom",args:[await g(a),await g(e),r,n,i]})}})()));l(this,"setApprovalForAll",h(async(t,a)=>E.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setApprovalForAll",args:[t,a]})));l(this,"airdrop",h((()=>{var t=this;return async function(a,e,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[0];const i=r?await g(r):await t.contractWrapper.getSignerAddress(),c=await t.balanceOf(i,a),s=await _t.parseAsync(e),p=s.reduce((m,u)=>T.from(m).add(T.from((u==null?void 0:u.quantity)||1)),T.from(0));if(c.lt(T.from(p)))throw new Error(`The caller owns ${c.toString()} NFTs, but wants to airdrop ${p.toString()} NFTs.`);const d=new S(t.contractWrapper),f=s.map(m=>{let{address:u,quantity:o}=m;return d.encode("safeTransferFrom",[i,u,a,o,n])});return E.fromContractWrapper({contractWrapper:t.contractWrapper,method:"multicall",args:[f]})}})()));l(this,"mint",h(async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t)));l(this,"mintTo",h(async(t,a)=>b(this.mintable,P).to.prepare(t,a)));l(this,"mintAdditionalSupply",h(async(t,a)=>b(this.mintable,P).additionalSupplyTo.prepare(await this.contractWrapper.getSignerAddress(),t,a)));l(this,"mintAdditionalSupplyTo",h(async(t,a,e)=>b(this.mintable,P).additionalSupplyTo.prepare(t,a,e)));l(this,"mintBatch",h(async t=>this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(),t)));l(this,"mintBatchTo",h(async(t,a)=>{var e;return b((e=this.mintable)==null?void 0:e.batch,G).to.prepare(t,a)}));l(this,"burn",h(async(t,a)=>b(this.burnable,N).tokens.prepare(t,a)));l(this,"burnFrom",h(async(t,a,e)=>b(this.burnable,N).from.prepare(t,a,e)));l(this,"burnBatch",h(async(t,a)=>b(this.burnable,N).batch.prepare(t,a)));l(this,"burnBatchFrom",h(async(t,a,e)=>b(this.burnable,N).batchFrom.prepare(t,a,e)));l(this,"lazyMint",h(async(t,a)=>b(this.lazyMintable,K).lazyMint.prepare(t,a)));l(this,"claim",h(async(t,a,e)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,a,e)));l(this,"claimTo",h(async(t,a,e,r)=>{const n=this.claimWithConditions,i=this.claimCustom;if(n)return n.to.prepare(t,a,e,r);if(i)return i.to.prepare(t,a,e,r);throw new L(x)}));this.contractWrapper=t,this.storage=a,this.query=this.detectErc1155Enumerable(),this.mintable=this.detectErc1155Mintable(),this.burnable=this.detectErc1155Burnable(),this.lazyMintable=this.detectErc1155LazyMintable(),this.signatureMintable=this.detectErc1155SignatureMintable(),this.claimCustom=this.detectErc1155Claimable(),this.claimWithConditions=this.detectErc1155ClaimableWithConditions(),this._chainId=e}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const[a,e]=await Promise.all([this.contractWrapper.read("totalSupply",[t]).catch(()=>T.from(0)),this.getTokenMetadata(t).catch(()=>({id:t.toString(),uri:"",...Ct}))]);return{owner:j,metadata:e,type:"ERC1155",supply:a.toString()}}async totalSupply(t){if(C(this.contractWrapper,"ERC1155Supply"))return await this.contractWrapper.read("totalSupply",[t]);throw new L(it)}async balanceOf(t,a){return await this.contractWrapper.read("balanceOf",[await g(t),a])}async balance(t){return await this.balanceOf(await this.contractWrapper.getSignerAddress(),t)}async isApproved(t,a){return await this.contractWrapper.read("isApprovedForAll",[await g(t),await g(a)])}async nextTokenIdToMint(){if(R("nextTokenIdToMint",this.contractWrapper))return await this.contractWrapper.read("nextTokenIdToMint",[]);throw new Error("Contract requires the `nextTokenIdToMint` function available to determine the next token ID to mint")}async getAll(t){return b(this.query,v).all(t)}async totalCount(){return b(this.query,v).totalCount()}async totalCirculatingSupply(t){return b(this.query,v).totalCirculatingSupply(t)}async getOwned(t,a){return t&&(t=await g(t)),b(this.query,v).owned(t,a)}async getMintTransaction(t,a){return b(this.mintable,P).getMintTransaction(t,a)}async getClaimTransaction(t,a,e,r){const n=this.claimWithConditions,i=this.claimCustom;if(n)return n.conditions.getClaimTransaction(t,a,e,r);if(i)return i.getClaimTransaction(t,a,e,r);throw new L(x)}get claimConditions(){return b(this.claimWithConditions,X).conditions}get signature(){return b(this.signatureMintable,J)}get revealer(){var t;return b((t=this.lazyMintable)==null?void 0:t.revealer,q)}async getTokenMetadata(t){const a=await this.contractWrapper.read("uri",[t]);if(!a)throw new st;return yt(t,a,this.storage)}detectErc1155Enumerable(){if(C(this.contractWrapper,"ERC1155Enumerable"))return new kt(this,this.contractWrapper)}detectErc1155Mintable(){if(C(this.contractWrapper,"ERC1155Mintable"))return new Ft(this,this.contractWrapper,this.storage)}detectErc1155Burnable(){if(C(this.contractWrapper,"ERC1155Burnable"))return new xt(this.contractWrapper)}detectErc1155LazyMintable(){if(C(this.contractWrapper,"ERC1155LazyMintableV1")||C(this.contractWrapper,"ERC1155LazyMintableV2"))return new Bt(this,this.contractWrapper,this.storage)}detectErc1155SignatureMintable(){if(C(this.contractWrapper,"ERC1155SignatureMintable"))return new zt(this.contractWrapper,this.storage)}detectErc1155Claimable(){if(C(this.contractWrapper,"ERC1155ClaimCustom"))return new Ot(this.contractWrapper)}detectErc1155ClaimableWithConditions(){if(C(this.contractWrapper,"ERC1155ClaimConditionsV1")||C(this.contractWrapper,"ERC1155ClaimConditionsV2")||C(this.contractWrapper,"ERC1155ClaimPhasesV1")||C(this.contractWrapper,"ERC1155ClaimPhasesV2"))return new Ut(this.contractWrapper,this.storage)}}export{Rt as D,Jt as E,zt as a};