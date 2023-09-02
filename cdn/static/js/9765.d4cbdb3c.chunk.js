"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9765],{70453:function(e,t,n){n.d(t,{L:function(){return r},S:function(){return i}}),n(74602),n(25496);var i="_2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj",r="_2kdvfw1"},25496:function(){},29765:function(e,t,n){n.r(t),n.d(t,{BAG_WIDTH:function(){return ts},XXXL_BAG_WIDTH:function(){return td},default:function(){return tx}});var i,r,o=n(30575),a=n(45938),s=n(94869),d=n(66196),c=n(62069),l=n(45825),u=n(14099),p=n(34999),x=n(38414),g=n(95512),m=n(60476),h=n(25575),f=n(56823),I=n(2304),N=n(84362),_=n(80343),C=n(65647),T=n(48141),A=n(20216),j=n(25599),y=n(79954);(0,j.ZP)`
  query NftUniversalRouterAddress($chain: Chain = ETHEREUM) {
    nftRoute(chain: $chain, senderAddress: "", nftTrades: []) {
      toAddress
    }
  }
`;var E=n(15627),v=n(79741),w=n(95202),b=n(97901),k=n(79847),R=n(4572),P=n(98841),O=n(50026),S=n(83884),L=n(64803),z=n(63505),B=n(69574),$=n(58336),D=n(39401),F=n(99430),U=n(68044),H=n(57174);function G(e){return{action:D.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}var M=n(26918),W=n(22495),V=n(45239),Z=n(98685),X=n(64127);let Y=(0,Z.Ue)()((0,X.mW)(e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e(()=>({inputCurrency:t})),clearInputCurrency:()=>e(()=>({inputCurrency:void 0})),setTokenTradeInput:t=>e(()=>({tokenTradeInput:t}))}),{name:"useTokenInput"}));var q=n(53960);function K(e){var t;return{inputAmount:{amount:(t={inputAmount:e.inputAmount,outputAmount:e.outputAmount}).inputAmount.quotient.toString(),token:{address:t.inputAmount.currency.isToken?t.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:t.inputAmount.currency.chainId,decimals:t.inputAmount.currency.decimals,isNative:t.inputAmount.currency.isNative}},outputAmount:{amount:t.outputAmount.quotient.toString(),token:{address:t.outputAmount.currency.isToken?t.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:t.outputAmount.currency.chainId,decimals:t.outputAmount.currency.decimals,isNative:t.outputAmount.currency.isNative}},pools:e.route.pools.map(e=>(function(e){let t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}})(e))}}var J=n(12058),Q=n(74969),ee=n(8586),et=n(50958),en=n(59801),ei=n(43108);function er(e,t,n,i,s){let d={handleClick:()=>void 0,buttonText:(0,o.jsx)(a.cC,{id:"nwtY4N"}),disabled:!0,warningText:void 0,warningTextColor:t.accentWarning,helperText:void 0,helperTextColor:t.textSecondary,buttonColor:t.accentAction,buttonTextColor:t.accentTextLightPrimary},c={[r.WALLET_NOT_CONNECTED]:{...d,handleClick:n??(()=>void 0),disabled:!1,buttonText:(0,o.jsx)(a.cC,{id:"VHOVEJ"})},[r.NOT_SUPPORTED_CHAIN]:{...d,handleClick:n??(()=>void 0),buttonText:(0,o.jsx)(a.cC,{id:"ffOtfc"}),disabled:!1,warningText:(0,o.jsx)(a.cC,{id:"IwI0rY"})},[r.INSUFFICIENT_BALANCE]:{...d,buttonText:(0,o.jsx)(a.cC,{id:"4fL/V7"}),warningText:(0,o.jsx)(a.cC,{id:"cPcTW+"})},[r.ERROR]:{...d,warningText:(0,o.jsx)(a.cC,{id:"fWsBTs"})},[r.IN_WALLET_CONFIRMATION]:{...d,buttonText:(0,o.jsx)(a.cC,{id:"CpEYLQ"})},[r.PROCESSING_TRANSACTION]:{...d,buttonText:(0,o.jsx)(a.cC,{id:"SqYgw0"})},[r.FETCHING_TOKEN_ROUTE]:{...d,buttonText:(0,o.jsx)(a.cC,{id:"YyaKjU"})},[r.INVALID_TOKEN_ROUTE]:{...d,buttonText:(0,o.jsx)(a.cC,{id:"4fL/V7"})},[r.NO_TOKEN_ROUTE_FOUND]:{...d,buttonText:(0,o.jsx)(a.cC,{id:"dLAScn"}),buttonColor:t.backgroundInteractive,buttonTextColor:t.textPrimary,helperText:(0,o.jsx)(a.cC,{id:"1u70J/"})},[r.LOADING_ALLOWANCE]:{...d,buttonText:(0,o.jsx)(a.cC,{id:"Rs3IwW"})},[r.IN_WALLET_ALLOWANCE_APPROVAL]:{...d,buttonText:(0,o.jsx)(a.cC,{id:"4k/lBP"})},[r.PROCESSING_APPROVAL]:{...d,buttonText:(0,o.jsx)(a.cC,{id:"gHko4n"})},[r.REQUIRE_APPROVAL]:{...d,disabled:!1,handleClick:n??(()=>void 0),helperText:(0,o.jsx)(a.cC,{id:"kpa6xe"}),buttonText:(0,o.jsx)(a.cC,{id:"Z7ZXbT"})},[r.CONFIRM_UPDATED_PRICE]:{...d,handleClick:n??(()=>void 0),disabled:!1,warningTextColor:t.accentAction,warningText:(0,o.jsx)(a.cC,{id:"Ejd0wH"}),buttonText:(0,o.jsx)(a.cC,{id:"4fL/V7"})},[r.PRICE_IMPACT_HIGH]:{...d,handleClick:n??(()=>void 0),disabled:!1,buttonColor:s?s.priceImpactSeverity.color:d.buttonColor,helperText:(0,o.jsx)(a.cC,{id:"NF0esC"}),helperTextColor:s?s.priceImpactSeverity.color:d.helperTextColor,buttonText:(0,o.jsx)(a.cC,{id:"2AEplS"})},[r.PAY]:{...d,handleClick:n??(()=>void 0),disabled:!1,buttonText:(0,o.jsx)(a.cC,{id:"4fL/V7"}),helperText:i?(0,o.jsx)(a.cC,{id:"3BWxOM"}):void 0}};return c[e]}(i=r||(r={}))[i.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",i[i.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",i[i.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",i[i.ERROR=3]="ERROR",i[i.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",i[i.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",i[i.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",i[i.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",i[i.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",i[i.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",i[i.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",i[i.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",i[i.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",i[i.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",i[i.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",i[i.PAY=15]="PAY";let eo=J.default.div.withConfig({displayName:"BagFooter__FooterContainer",componentId:"sc-2ece965-0"})`
  padding: 0px 12px;
`,ea=J.default.div.withConfig({displayName:"BagFooter__Footer",componentId:"sc-2ece965-1"})`
  border-top: 1px solid ${({theme:e})=>e.backgroundOutline};
  color: ${({theme:e})=>e.textPrimary};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,es=(0,J.default)(m.ZP).withConfig({displayName:"BagFooter__FooterHeader",componentId:"sc-2ece965-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,ed=(0,J.default)(I.ZP).withConfig({displayName:"BagFooter__CurrencyRow",componentId:"sc-2ece965-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,ec=(0,J.default)(m.ZP).withConfig({displayName:"BagFooter__TotalColumn",componentId:"sc-2ece965-4"})`
  text-align: end;
  overflow-x: hidden;
`,el=(0,J.default)(et.Z).withConfig({displayName:"BagFooter__WarningIcon",componentId:"sc-2ece965-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,eu=(0,J.default)(ei.Tv.BodyPrimary).withConfig({displayName:"BagFooter__WarningText",componentId:"sc-2ece965-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,ep=(0,J.default)(ei.Tv.Caption).withConfig({displayName:"BagFooter__HelperText",componentId:"sc-2ece965-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,ex=(0,J.default)(I.ZP).withConfig({displayName:"BagFooter__CurrencyInput",componentId:"sc-2ece965-8"})`
  gap: 8px;
  cursor: pointer;
`,eg=J.default.button.withConfig({displayName:"BagFooter__ActionButton",componentId:"sc-2ece965-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 600;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,em=(0,J.default)(_.X).withConfig({displayName:"BagFooter__FiatLoadingBubble",componentId:"sc-2ece965-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,eh=(0,J.default)(I.ZP).withConfig({displayName:"BagFooter__PriceImpactContainer",componentId:"sc-2ece965-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,ef=(0,J.default)(I.ZP).withConfig({displayName:"BagFooter__PriceImpactRow",componentId:"sc-2ece965-12"})`
  align-items: center;
  gap: 8px;
`,eI=(0,J.default)(ei.Tv.BodyPrimary).withConfig({displayName:"BagFooter__ValueText",componentId:"sc-2ece965-13"})`
  line-height: 20px;
  font-weight: 500;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,eN=({color:e,children:t})=>t?(0,o.jsxs)(eu,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,o.jsx)(el,{}),t]}):null,e_=({children:e,color:t})=>e?(0,o.jsx)(ep,{lineHeight:"16px",$color:t,children:e}):null,eC=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:i,trade:r})=>e?i!==B.qx.LOADING||r?(0,o.jsx)(eI,{color:i===B.qx.LOADING?"textTertiary":"textPrimary",children:(0,F.Nd)(r?.inputAmount.toExact())}):(0,o.jsx)(ei.Tv.BodyPrimary,{color:"textTertiary",lineHeight:"20px",fontWeight:"500",children:(0,o.jsx)(a.cC,{id:"hwuHLB"})}):(0,o.jsxs)(ei.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"500",children:[(0,F.zb)(t.toString()),"\xa0",n?.symbol??"ETH"]}),eT=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:i})=>e?(0,o.jsxs)(eh,{children:[t&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(C.ud,{text:u.ag._({id:"KaCkzz"}),children:(0,o.jsxs)(ef,{children:[(0,o.jsx)(et.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,o.jsxs)(ei.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",(0,o.jsx)(a.cC,{id:"J/hVSQ",values:{0:t.displayPercentage()}}),")"]})]})})}),(0,o.jsx)(ei.Tv.BodySmall,{color:"textTertiary",lineHeight:"20px",children:`${(0,F.Nd)(e?.toExact(),!0)}`})]}):i&&(n===B.qx.INVALID||n===B.qx.NO_ROUTE_FOUND)?null:(0,o.jsx)(em,{}),eA=[D.s.FETCHING_ROUTE,D.s.CONFIRMING_IN_WALLET,D.s.FETCHING_FINAL_ROUTE,D.s.PROCESSING_TRANSACTION],ej=({setModalIsOpen:e,eventProperties:t})=>{let n=(0,g.LK)(),i=(0,J.useTheme)(),{account:c,chainId:u,connector:I}=(0,x.useWeb3React)(),_=!!(c&&u),C=(0,O.P)(),{inputCurrency:j}=Y(({inputCurrency:e})=>({inputCurrency:e}),M.X),Z=Y(e=>e.setInputCurrency),X=(0,E.U8)("ETH"),et=(0,k.mM)(c??void 0,j&&j.isToken?j:void 0),{isLocked:el,bagStatus:eu,setBagExpanded:ep,setBagStatus:em}=(0,P.c)(({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:i})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:i}),M.X),[eh,ef]=(0,z.useState)(!1),eI=eA.includes(eu),ej=j??X,ey=!!j&&u===p.ChainId.MAINNET,{universalRouterAddress:eE,universalRouterAddressIsLoading:ev}=function(){let{data:e,loading:t}=(0,y.Z6)({fetchPolicy:"no-cache"});return{universalRouterAddress:e?.nftRoute?.toAddress,universalRouterAddressIsLoading:t}}();!function(e){let t=(0,W.p)(e=>e.state),n=(0,W.p)(e=>e.setState),i=(0,z.useRef)(t),{setBagStatus:r,setLocked:o}=(0,P.c)(({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n}),M.X);(0,z.useEffect)(()=>{W.p.subscribe(e=>i.current=e.state)},[]),(0,z.useEffect)(()=>{i.current===D.c$.Confirming&&r(D.s.PROCESSING_TRANSACTION),(i.current===D.c$.Denied||i.current===D.c$.Invalid)&&(i.current===D.c$.Invalid?r(D.s.WARNING):r(D.s.CONFIRM_REVIEW),n(D.c$.New),o(!1),e(!1))},[o,r,e,n,i.current])}(e);let ew=function(){let{account:e}=(0,x.useWeb3React)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:r,isLocked:o,setLocked:a,setItemsInBag:s}=(0,P.c)(({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:i,isLocked:r,setLocked:o,setItemsInBag:a})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:i,isLocked:r,setLocked:o,setItemsInBag:a}),M.X),d=Y(e=>e.tokenTradeInput),c=(0,z.useMemo)(()=>(0,F.G7)(t),[t]),[l]=(0,y.yo)(),u=function(){let{provider:e}=(0,x.useWeb3React)(),t=(0,W.p)(e=>e.sendTransaction),n=(0,V.J)(e=>e.setTransactionResponse),{setLocked:i,setBagExpanded:r,reset:o}=(0,P.c)(({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n}),M.X);return(0,z.useCallback)(async(a,s,d=!1)=>{if(!e)return;let c=await t(e.getSigner(),s,a,d);c&&(i(!1),n(c),r({bagExpanded:!1}),o())},[e,o,t,r,i,n])}(),p=(0,z.useCallback)(()=>{i&&r(!1),o||a(!0),n(D.s.FETCHING_ROUTE)},[o,i,a,n,r]);return(0,z.useCallback)(async()=>{p(),l({variables:{senderAddress:e||"",nftTrades:(0,F.hI)(c),tokenTrades:d||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route){n(D.s.ADDING_TO_BAG),a(!1);return}let t=c.filter(e=>e.status!==D.ZJ.UNAVAILABLE).map(e=>e.asset),i=!!d,{route:r,routeResponse:o}=function(e,t){let n=e.route?e.route.map(G):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}(e.nftRoute,i),{newBagItems:l,nextBagStatus:p}=function(e,t,n){let{hasPriceAdjustment:i,updatedAssets:r}=(0,U.$)(e,t),{unchanged:o,priceChanged:a,unavailable:s}=(0,H.Kr)(r),d=r.length>0,c=a.length>0,l=s.length>0,u=[...s.map(e=>({asset:e,status:D.ZJ.UNAVAILABLE})),...a.map(e=>({asset:e,status:D.ZJ.REVIEWING_PRICE_CHANGE})),...o.map(e=>({asset:e,status:D.ZJ.REVIEWED}))],p=d?c||l?c?D.s.IN_REVIEW:D.s.CONFIRM_REVIEW:i&&n?D.s.CONFIRM_QUOTE:D.s.CONFIRMING_IN_WALLET:D.s.ADDING_TO_BAG;return{newBagItems:u,nextBagStatus:p}}(t,r,i);if(s(l),n(p),p===D.s.CONFIRMING_IN_WALLET){u(o,t,i),a(!0);return}a(!1)}})},[e,l,c,u,p,a,n,s,d])}(),eb=(0,z.useMemo)(()=>(0,R.Z)((0,l.formatEther)(C.toString()),X??void 0),[X,C]),{state:ek,trade:eR,maximumAmountIn:eP,allowedSlippage:eO}=function(e,t){let{state:n,trade:i}=(0,L.C)(p.TradeType.EXACT_OUTPUT,t,e??void 0,B.R5.API),r=(0,S.Z)((0,$.pG)(i)?i:void 0),o=(0,z.useMemo)(()=>{let e=i?.maximumAmountIn(r);return e?.currency.isToken?e:void 0},[r,i]);return(0,z.useMemo)(()=>({state:n,trade:i,maximumAmountIn:o,allowedSlippage:r}),[r,o,n,i])}(ey?j:void 0,eb),eS=(0,v.Z)(eP,function(e,t){if(e)return e===p.ChainId.MAINNET?t??(0,A.UNIVERSAL_ROUTER_ADDRESS)(e):(0,T.EC)(e)?(0,A.UNIVERSAL_ROUTER_ADDRESS)(e):void 0}(u,eE),B.d7.Classic),eL=eS.state===v.K.LOADING||ev;!function(e,t,n){let i=Y(e=>e.setTokenTradeInput),r=(0,$.pG)(e)&&e.routes,o=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,a=!!n&&!!t;(0,z.useEffect)(()=>{if(!r||!o||!a){i(void 0);return}let s=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:d,v2TokenTradeRouteInputs:c,v3TokenTradeRouteInputs:l}=function(e){let t=[],n=[],i=[],r=e.swaps;for(let e of r)e.route.protocol===q.Protocol.MIXED?t.push(K(e)):e.route.protocol===q.Protocol.V2?n.push(K(e)):i.push(K(e));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:i.length>0?i:void 0}}(e),u={mixedRoutes:d,tradeType:y.NS.ExactOutput,v2Routes:c,v3Routes:l},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;i({permit:p,routes:u,slippageToleranceBasisPoints:s,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})},[t,n,a,o,r,i,e])}(eR,eS,eO);let ez=function(e){let t=(0,J.useTheme)();return(0,z.useMemo)(()=>{let n=e?(0,Q.QW)(e):void 0,i=n?(0,Q.BK)(n):void 0,r="error"===i?t.accentCritical:"warning"===i?t.accentWarning:void 0;return n&&i&&r?{priceImpactSeverity:{type:i,color:r},displayPercentage:()=>(function(e){let t=e.lessThan(0)?"+":"",n=Number(e.numerator)/Number(e.denominator)*100;if(n<.005)return"0.00%";let i=parseFloat(e.multiply(-1)?.toFixed(2));return`${t}${i}%`})(n)}:void 0},[t.accentCritical,t.accentWarning,e])}(eR),eB=(0,w.sq)(eR?.inputAmount),e$=(0,w.sq)(eb),eD=ey?eB:e$,{balance:eF}=(0,ee.t)(),eU=(0,z.useMemo)(()=>{if(_&&u===p.ChainId.MAINNET){if(j){let e=eR?.inputAmount;if(!et||!e)return;return!et.lessThan(e)}return(0,l.parseEther)(eF).gte(C)}},[_,u,j,eF,C,eR?.inputAmount,et]);(0,z.useEffect)(()=>{em(D.s.ADDING_TO_BAG)},[j,em]);let eH=(0,b.o)(),{buttonText:eG,buttonTextColor:eM,disabled:eW,warningText:eV,warningTextColor:eZ,helperText:eX,helperTextColor:eY,handleClick:eq,buttonColor:eK}=(0,z.useMemo)(()=>{if(_&&u!==p.ChainId.MAINNET)return er(r.NOT_SUPPORTED_CHAIN,i,()=>eH(I,p.ChainId.MAINNET));if(!1===eU)return er(r.INSUFFICIENT_BALANCE,i);if(eu===D.s.WARNING)return er(r.ERROR,i);if(!_)return er(r.WALLET_NOT_CONNECTED,i,()=>{n(),ep({bagExpanded:!1})});if(eu===D.s.FETCHING_FINAL_ROUTE||eu===D.s.CONFIRMING_IN_WALLET)return er(r.IN_WALLET_CONFIRMATION,i);if(eu===D.s.PROCESSING_TRANSACTION)return er(r.PROCESSING_TRANSACTION,i);if(ey&&ek!==B.qx.VALID)return ek===B.qx.INVALID?er(r.INVALID_TOKEN_ROUTE,i):ek===B.qx.NO_ROUTE_FOUND?er(r.NO_TOKEN_ROUTE_FOUND,i):er(r.FETCHING_TOKEN_ROUTE,i);let e=eS.state===v.K.REQUIRED,t=()=>e&&eS.approveAndPermit();return eL?er(r.LOADING_ALLOWANCE,i,t):e?eS.isApprovalPending?er(r.IN_WALLET_ALLOWANCE_APPROVAL,i,t):eS.isApprovalLoading?er(r.PROCESSING_APPROVAL,i,t):er(r.REQUIRE_APPROVAL,i,t):eu===D.s.CONFIRM_QUOTE?er(r.CONFIRM_UPDATED_PRICE,i,ew):ez&&"error"===ez.priceImpactSeverity.type?er(r.PRICE_IMPACT_HIGH,i,ew,ey,ez):er(r.PAY,i,ew,ey)},[_,u,eU,eu,ey,ek,eL,eS,ez,i,ew,eH,I,n,ep]),eJ={usd_value:eD?.toExact(),using_erc20:!!j,...t};return(0,o.jsxs)(eo,{children:[(0,o.jsxs)(ea,{children:[(0,o.jsxs)(es,{gap:"xs",children:[(0,o.jsxs)(ed,{children:[(0,o.jsx)(m.ZP,{gap:"xs",children:(0,T.EC)(u)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ei.Tv.SubHeaderSmall,{children:(0,o.jsx)(a.cC,{id:"JQjhrO"})}),(0,o.jsxs)(ex,{onClick:()=>{el||(ef(!0),(0,d._P)(s.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,o.jsx)(f.Z,{currency:ej,size:"24px"}),(0,o.jsx)(ei.Tv.HeadlineSmall,{fontWeight:500,lineHeight:"24px",children:ej?.symbol}),(0,o.jsx)(en.Z,{size:20,color:i.textSecondary})]})]})}),(0,o.jsxs)(ec,{gap:"xs",children:[(0,o.jsx)(ei.Tv.SubHeaderSmall,{marginBottom:"4px",children:(0,o.jsx)(a.cC,{id:"72c5Qo"})}),(0,o.jsx)(eC,{usingPayWithAnyToken:ey,totalEthPrice:C,activeCurrency:ej,tradeState:ek,trade:eR})]})]}),(0,o.jsx)(eT,{usdcValue:eD,priceImpact:ez,tradeState:ek,usingPayWithAnyToken:ey})]}),(0,o.jsxs)(d.M8,{events:[s.TM.onClick],name:s.Yz.NFT_BUY_BAG_PAY,element:s.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...eJ},shouldLogImpression:_&&!eW,children:[(0,o.jsx)(eN,{color:eZ,children:eV}),(0,o.jsx)(e_,{color:eY,children:eX}),(0,o.jsxs)(eg,{"data-testid":"nft-buy-button",onClick:eq,disabled:eW||eI,$backgroundColor:eK,$color:eM,children:[eI&&(0,o.jsx)(h.ZP,{size:"20px",stroke:"white"}),eG]})]})]}),(0,o.jsx)(N.Z,{isOpen:eh,onDismiss:()=>ef(!1),onCurrencySelect:e=>{Z(e.isNative?void 0:e),e.isToken&&(0,d._P)(s.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:ej??void 0,onlyShowCurrenciesWithBalance:!0})]})};var ey=n(64709),eE=n(9867),ev=n(2994),ew=n(54212),eb=n(79131),ek=n(437);n(74602);var eR=n(20691),eP=n(84893),eO=n(88850);let eS=(0,J.keyframes)`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,eL=J.default.circle.withConfig({displayName:"TimedLoader__Circle",componentId:"sc-9c2e484f-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${eS} linear;
  animation: ${eS} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accentAction};
`,ez=()=>(0,o.jsx)(ey.n,{display:"flex",position:"absolute",children:(0,o.jsx)("svg",{height:"18px",width:"18px",children:(0,o.jsx)(eL,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var eB=n(83164),e$=n(5570),eD=n(15655),eF=n(70453),eU=n(11001);n(46728);var eH="_1kuawcb rgw6ezb1 rgw6ezcv rgw6ez7m3 rgw6ez45v rgw6ez45p",eG="_1kuawc1 rgw6ez2dv rgw6ez2jd rgw6ez2oj rgw6ez281 rgw6ez4ej rgw6ez3tj rgw6ez79z rgw6ez1dv rgw6ez7bj",eM="rgw6ez14d rgw6ez1bd rgw6ez49p rgw6ez7bb",eW="rgw6ezcp rgw6ezav rgw6eze7 rgw6ez7m3 rgw6ez45p rgw6ez45v rgw6ez4ep",eV="_1kuawc7",eZ="rgw6ez3xv";let eX=(0,J.default)(eO.UH).withConfig({displayName:"BagRow__RemoveButton",componentId:"sc-8d05d09e-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,eY=(0,J.default)(eO.UH).withConfig({displayName:"BagRow__ReviewButton",componentId:"sc-8d05d09e-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,eq=J.default.div.withConfig({displayName:"BagRow__RemoveAssetOverlay",componentId:"sc-8d05d09e-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,eK=({onClick:e})=>(0,o.jsx)(eq,{onClick:e,children:(0,o.jsx)(e$.Xv,{})}),eJ=()=>(0,o.jsx)(ey.n,{position:"relative",background:"loadingBackground",className:eM,children:(0,o.jsxs)(ey.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"normal",children:["Image",(0,o.jsx)("br",{}),"not",(0,o.jsx)("br",{}),"available"]})}),eQ=({asset:e,usdPrice:t,removeAsset:n,showRemove:i,grayscale:r,isMobile:a})=>{let[s,d]=(0,z.useState)(!1),[c,u]=(0,z.useState)(!e.smallImageUrl),[p,x]=(0,z.useState)(!1),g=(0,z.useCallback)(()=>x(!0),[]),m=(0,z.useCallback)(()=>x(!1),[]),h=!!(i&&p&&!a),f=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,I=(0,F.zb)(f),N=(0,F.Nd)(t?parseFloat((0,l.formatEther)(f))*t:t,!0),_=(0,z.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),n([e])},[e,n]);return(0,o.jsx)(eU.rU,{to:(0,F.PZ)(e),style:{textDecoration:"none"},children:(0,o.jsxs)(ev.X2,{className:eG,onMouseEnter:g,onMouseLeave:m,children:[(0,o.jsxs)(ey.n,{position:"relative",display:"flex",children:[i&&a&&(0,o.jsx)(eK,{onClick:_}),!c&&(0,o.jsx)(ey.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,eP.default)(eM,r&&!p&&eV),onLoad:()=>{d(!0)},onError:()=>{u(!0)},visibility:s?"visible":"hidden"}),!s&&(0,o.jsx)(ey.n,{position:"absolute",className:`${eM} ${eF.L}`}),c&&(0,o.jsx)(eJ,{})]}),(0,o.jsxs)(ev.sg,{overflow:"hidden",width:"full",color:r?"textSecondary":"textPrimary",children:[(0,o.jsxs)(ev.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,o.jsx)(ey.n,{className:eH,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,o.jsx)(eB.yT,{})]}),(0,o.jsxs)(ev.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,o.jsx)(ey.n,{className:eW,children:e.collectionName}),e.collectionIsVerified&&(0,o.jsx)(e$.SA,{className:eZ})]})]}),h&&(0,o.jsx)(eX,{onClick:_,emphasis:eO.eI.medium,size:eO.qE.medium,children:"Remove"}),(!h||a)&&(0,o.jsxs)(ev.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,o.jsxs)(ey.n,{className:"_1kuawc9 rgw6ez3sv rgw6ezb1 rgw6ezd1 rgw6ez3xv",children:[I,"\xa0ETH"]}),(0,o.jsx)(ey.n,{className:eW,children:N})]})]})})},e0=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:i,isMobile:r})=>{let a=eR.O$.from(e.updatedPriceInfo?.ETHPrice).gt(eR.O$.from(e.priceInfo.ETHPrice)),s=(0,z.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),n(e,!1)},[e,n]),d=(0,z.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),n(e,!0)},[e,n]);return(0,o.jsxs)(ev.sg,{className:"rgw6ez2p7 rgw6ez28p rgw6ezlj rgw6ezr1 rgw6ez4sj rgw6ez3t7 rgw6ez4ej rgw6ez7ab rgw6ez7jr rgw6ez547 rgw6ez5op rgw6ez1dv rgw6ez79z",borderTopColor:i?"backgroundOutline":"transparent",children:[(0,o.jsxs)(ev.X2,{className:"rgw6ezcp rgw6ezav rgw6eze7 rgw6ez4cd rgw6ez3sv",children:[a?(0,o.jsx)(e$.PH,{}):(0,o.jsx)(e$.HE,{}),(0,o.jsx)(ey.n,{children:`Price ${a?"increased":"decreased"} from ${(0,F.zb)(e.priceInfo.ETHPrice)} ETH`})]}),(0,o.jsx)(ey.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,o.jsx)(eQ,{asset:e,usdPrice:t,removeAsset:()=>void 0,isMobile:r})}),(0,o.jsxs)(ev.X2,{gap:"8",justifyContent:"space-between",children:[(0,o.jsx)(eY,{onClick:s,emphasis:eO.eI.medium,size:eO.qE.small,children:"Remove"}),(0,o.jsx)(eY,{onClick:d,emphasis:eO.eI.high,size:eO.qE.small,children:"Keep"})]})]})},e1=({assets:e})=>(0,o.jsx)(ev.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:`${32+(e.length-1)*20}px`},children:e.map((e,t)=>(0,o.jsx)(ey.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"backgroundSurface",borderRadius:"4",style:{zIndex:t},className:eV},`${e.address}-${e.tokenId}`))}),e6=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:r,isMobile:a})=>{let[s,d]=(0,z.useReducer)(e=>!e,!1),[c,l]=(0,z.useState)(8);if((0,z.useEffect)(()=>{if(!c){i||(n(),r(!1));return}let e=setInterval(()=>{l(c-1)},1e3);return()=>clearInterval(e)},[c,n,i,r]),!e||0===e.length)return null;let u=e.length>1,p=s||!u;return(0,o.jsx)(ev.sg,{className:"rgw6ez2p7 rgw6ez28p rgw6ezlj rgw6ezr1 rgw6ez4sj rgw6ez3tj rgw6ez4ej rgw6ez7ab rgw6ez7jr rgw6ez547 rgw6ez60j rgw6ez5op rgw6ez1dv",children:(0,o.jsxs)(ev.sg,{children:[(0,o.jsxs)(ev.X2,{justifyContent:"space-between",marginBottom:p?"12":"0",cursor:u?"pointer":"default",onClick:()=>{u&&(i||r(!0),d())},children:[(0,o.jsxs)(ev.X2,{gap:"12",color:"textSecondary",className:eD.Km,children:[!p&&(0,o.jsx)(e1,{assets:e.slice(0,5)}),"No longer available"]}),u&&(0,o.jsx)(ev.X2,{color:"textSecondary",children:s?(0,o.jsx)(e$.X_,{}):(0,o.jsx)(e$.Xs,{})}),!i&&(0,o.jsxs)(ev.X2,{position:"relative",width:"20",height:"20",color:"textPrimary",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,o.jsx)(ez,{}),(0,o.jsx)(e$.Nb,{})]})]}),(0,o.jsx)(ev.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:p&&e.map(e=>(0,o.jsx)(eQ,{asset:e,usdPrice:t,removeAsset:()=>void 0,grayscale:!0,isMobile:a},e.id))})]})})};var e2=n(34822);let e5=()=>{let e=(0,eb.cP)(e=>e.bagStatus),t=(0,eb.cP)(e=>e.setBagStatus),n=(0,eb.cP)(e=>e.markAssetAsReviewed),i=(0,eb.cP)(e=>e.didOpenUnavailableAssets),r=(0,eb.cP)(e=>e.setDidOpenUnavailableAssets),a=(0,eb.cP)(e=>e.itemsInBag),c=(0,eb.cP)(e=>e.setItemsInBag),l=(0,eb.cP)(e=>e.removeAssetsFromBag),u=(0,eb.dD)(),p=(0,z.useMemo)(()=>(0,F.G7)(a),[a]),{data:x}=(0,e2.useQuery)(["fetchPrice",{}],()=>(0,F.tw)(),{}),{unchangedAssets:g,priceChangedAssets:m,unavailableAssets:h,availableItems:f}=(0,z.useMemo)(()=>{let e=p.filter(e=>e.status===D.ZJ.ADDED_TO_BAG||e.status===D.ZJ.REVIEWED).map(e=>e.asset),t=p.filter(e=>e.status===D.ZJ.REVIEWING_PRICE_CHANGE).map(e=>e.asset),n=p.filter(e=>e.status===D.ZJ.UNAVAILABLE).map(e=>e.asset),i=p.filter(e=>e.status!==D.ZJ.UNAVAILABLE);return{unchangedAssets:e,priceChangedAssets:t,unavailableAssets:n,availableItems:i}},[p]);return(0,z.useEffect)(()=>{let n=m.length>0,i=p.length>0;n&&(0,d._P)(s.Yz.NFT_BUY_BAG_CHANGED,{usd_value:x,bag_quantity:p,...(0,F.Hj)(m)}),e!==D.s.IN_REVIEW||n||(i?t(D.s.CONFIRM_REVIEW):t(D.s.ADDING_TO_BAG)),e!==D.s.CONFIRM_REVIEW||i||t(D.s.ADDING_TO_BAG)},[e,p,m,t,x]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(ev.sg,{display:m.length>0||h.length>0?"flex":"none",children:[h.length>0&&(0,o.jsx)(d.fM,{name:s.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:x,bag_quantity:p.length,...(0,F.Hj)(h)},shouldLogImpression:!0,children:(0,o.jsx)(e6,{assets:h,usdPrice:x,clearUnavailableAssets:()=>c(f),didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:r,isMobile:u})}),m.map((e,t)=>(0,o.jsx)(e0,{asset:e,usdPrice:x,markAssetAsReviewed:n,top:0===t&&0===h.length,isMobile:u},e.id))]}),(0,o.jsx)(ev.sg,{children:g.slice(0).reverse().map(e=>(0,o.jsx)(eQ,{asset:e,usdPrice:x,removeAsset:l,showRemove:!0,isMobile:u},e.id))})]})};var e4=n(62329);let e3=(0,J.default)(ei.oD).withConfig({displayName:"BagHeader__ClearButton",componentId:"sc-d761a2a3-0"})`
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,e9=J.default.button.withConfig({displayName:"BagHeader__IconWrapper",componentId:"sc-d761a2a3-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.textPrimary};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${e4.c}
`,e7=J.default.div.withConfig({displayName:"BagHeader__CounterDot",componentId:"sc-d761a2a3-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accentAction};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,e8=J.default.div.withConfig({displayName:"BagHeader__Wrapper",componentId:"sc-d761a2a3-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,te=e=>{let t=e.toString().length;return`${14+6*t}px`},tt=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:i})=>{let r=(0,z.useMemo)(()=>te(e),[e]);return(0,o.jsxs)(e8,{children:[(0,o.jsx)(ei.Tv.HeadlineSmall,{children:i?(0,o.jsx)(a.cC,{id:"xNB0TS"}):(0,o.jsx)(a.cC,{id:"EnO7qf"})}),e>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e7,{sizing:r,children:e}),(0,o.jsx)(e3,{onClick:n,children:(0,o.jsx)(a.cC,{id:"yYxB17"})})]}),(0,o.jsx)(e9,{onClick:t,children:(0,o.jsx)(e$.BW,{"data-testid":"nft-bag-close-icon"})})]})};var tn=n(17669);let ti=(0,J.default)(ev.sg).withConfig({displayName:"EmptyContent__StyledColumn",componentId:"sc-328ca12-0"})`
  gap: 12px;
  margin-top: 68px;
`;var tr=()=>{let e=(0,c.e5)();return(0,o.jsxs)(ti,{children:[(0,o.jsx)(ev.M5,{children:e?(0,o.jsx)(e$.JP,{color:tn.Z4.colors.textTertiary}):(0,o.jsx)(e$.Ln,{color:tn.Z4.colors.textTertiary,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,o.jsx)(ev.M5,{"data-testid":"nft-no-nfts-selected",className:eD.v4,children:"No NFTs selected"}):(0,o.jsxs)(ev.sg,{gap:"16",children:[(0,o.jsx)(ev.M5,{"data-testid":"nft-empty-bag",className:eD.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,o.jsx)(ev.M5,{fontSize:"12",fontWeight:"normal",color:"textSecondary",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})},to=({asset:e})=>{let t=(0,eb.Pc)(e=>e.removeSellAsset),n=(0,eb.dD)(),[i,r]=(0,z.useState)(!1),a=()=>r(!i),s=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,o.jsxs)(ev.X2,{className:eG,onMouseEnter:a,onMouseLeave:a,children:[(0,o.jsxs)(ey.n,{position:"relative",display:"flex",children:[n&&(0,o.jsx)(eK,{onClick:s}),(0,o.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:eM})]}),(0,o.jsxs)(ev.sg,{overflow:"hidden",width:"full",color:"textPrimary",children:[(0,o.jsx)(ev.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,o.jsx)(ey.n,{className:eH,children:e.name||`#${e.tokenId}`})}),(0,o.jsxs)(ev.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,o.jsx)(ey.n,{className:eW,children:e.asset_contract.name}),e.collectionIsVerified&&(0,o.jsx)(e$.SA,{className:eZ})]})]}),i&&!n&&(0,o.jsx)(eX,{onClick:s,emphasis:eO.eI.medium,size:eO.qE.medium,children:"Remove"})]})};let ta=()=>{let e=(0,eb.Pc)(e=>e.sellAssets);return(0,o.jsx)(ev.sg,{children:e.length?e.map((e,t)=>(0,o.jsx)(to,{asset:e},t)):null})},ts=320,td=360,tc=J.default.div.withConfig({displayName:"Bag__BagContainer",componentId:"sc-1a600dfd-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${ts}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.backgroundSurface};
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?ek.k.modalOverTooltip:ek.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${td}px;
  }
`,tl=J.default.div.withConfig({displayName:"Bag__DetailsPageBackground",componentId:"sc-1a600dfd-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,tu=J.default.div.withConfig({displayName:"Bag__ContinueButton",componentId:"sc-1a600dfd-2"})`
  background: ${({theme:e})=>e.accentAction};
  color: ${({theme:e})=>e.accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,tp=({top:e,show:t})=>(0,o.jsx)(ey.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"backgroundOutline",borderBottomColor:e?"backgroundOutline":"transparent",opacity:t?"1":"0",transition:"250"});var tx=()=>{let{resetSellAssets:e,sellAssets:t}=(0,eb.Pc)(({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}),M.X),{setProfilePageState:n}=(0,eb.aO)(({setProfilePageState:e})=>({setProfilePageState:e})),{bagStatus:i,bagIsLocked:r,reset:l,bagExpanded:u,toggleBag:p,setBagExpanded:x}=(0,eb.cP)(e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}),M.X),{uncheckedItemsInBag:g}=(0,eb.cP)(({itemsInBag:e})=>({uncheckedItemsInBag:e})),m=(0,c.e5)(),h=(0,c._3)(),f=(0,c.GZ)(),I=(0,eb.dD)(),N=(0,z.useMemo)(()=>(0,F.G7)(g),[g]),[_,C]=(0,z.useState)(!1),{userCanScroll:T,scrollRef:A,scrollProgress:j,scrollHandler:y}=(0,eb.uh)(),E=(0,z.useCallback)(()=>{x({bagExpanded:!1,manualClose:!0})},[x]);(0,z.useEffect)(()=>{r&&!_&&C(!0)},[r,_]);let v=N.length>0,w=N.length>0,b=t.length>0,k=!!(!m&&!w&&i===D.s.ADDING_TO_BAG||m&&!b),R=(0,z.useMemo)(()=>({...(0,F.Hj)(N.map(e=>e.asset))}),[N]);return u&&f?(0,o.jsxs)(eE.h,{children:[(0,o.jsxs)(tc,{"data-testid":"nft-bag",raiseZIndex:I||_,isProfilePage:m,children:[(0,o.jsx)(tt,{numberOfAssets:m?t.length:N.length,closeBag:E,resetFlow:m?e:l,isProfilePage:m}),k&&(0,o.jsx)(tr,{}),(0,o.jsx)(tp,{top:!0,show:T&&j>0}),(0,o.jsx)(ev.sg,{ref:A,className:"_1jcz50r1 rgw6ez2ej rgw6ez2k1 rgw6ez1yv rgw6ez7nf",onScroll:y,gap:"12",children:m?(0,o.jsx)(ta,{}):(0,o.jsx)(e5,{})}),v&&!m&&(0,o.jsx)(ej,{setModalIsOpen:C,eventProperties:R}),b&&m&&(0,o.jsx)(tu,{onClick:()=>{p(),n(D.HA.LISTING),(0,d._P)(s.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map(e=>e.asset_contract.address),token_ids:t.map(e=>e.tokenId)})},children:(0,o.jsx)(a.cC,{id:"xGVfLh"})})]}),h?(0,o.jsx)(tl,{onClick:p}):_&&(0,o.jsx)(ew.a,{onClick:()=>r?void 0:C(!1)})]}):null}},83164:function(e,t,n){n.d(t,{Ie:function(){return I},SD:function(){return A},yT:function(){return y}});var i=n(30575),r=n(45938),o=n(2304),a=n(65647),s=n(79954),d=n(68431),c=n(5570),l=n(99430),u=n(25494),p=n(7266),x=n(50958),g=n(12058),m=n(43108);let h=g.default.div.withConfig({displayName:"icons__StyledMarketplaceContainer",componentId:"sc-10a3df04-0"})`
  position: absolute;
  display: flex;
  top: 12px;
  left: 12px;
  height: 32px;
  width: ${({isText:e})=>e?"auto":"32px"};
  padding: ${({isText:e})=>e?"0px 8px":"0px"};
  background: rgba(93, 103, 133, 0.24);
  color: ${({theme:e})=>e.accentTextLightPrimary};
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  z-index: 2;
`,f=(0,g.default)(o.ZP).withConfig({displayName:"icons__ListPriceRowContainer",componentId:"sc-10a3df04-1"})`
  gap: 6px;
  color: ${({theme:e})=>e.accentTextLightPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  text-shadow: 1px 1px 3px rgba(51, 53, 72, 0.54);
`,I=({isSelected:e,marketplace:t,tokenType:n,listedPrice:r,hidePrice:o})=>e?t?(0,i.jsx)(h,{children:(0,i.jsx)(c.U1,{width:"20px",height:"20px",viewBox:"0 0 20 20"})}):(0,i.jsx)(h,{children:(0,i.jsx)(u.Z,{size:20})}):r&&!o?(0,i.jsx)(h,{isText:!0,children:(0,i.jsxs)(f,{children:[(0,i.jsx)(p.Z,{size:20}),r," ETH"]})}):t&&n!==s.hg.Erc1155?(0,i.jsx)(h,{children:(0,d.Dp)(t)}):null,N=(0,g.default)(x.Z).withConfig({displayName:"icons__SuspiciousIcon",componentId:"sc-10a3df04-2"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.accentFailure};
`,_=(0,g.default)(o.ZP).withConfig({displayName:"icons__RarityLogoContainer",componentId:"sc-10a3df04-3"})`
  margin-right: 8px;
  width: 16px;
`,C=(0,g.default)(m.Tv.BodySmall).withConfig({displayName:"icons__RarityText",componentId:"sc-10a3df04-4"})`
  display: flex;
`,T=(0,g.default)(m.Tv.Caption).withConfig({displayName:"icons__RarityInfo",componentId:"sc-10a3df04-5"})`
  flex-shrink: 0;
  color: ${({theme:e})=>e.textSecondary};
  background: ${({theme:e})=>e.backgroundInteractive};
  padding: 4px 6px;
  border-radius: 4px;
  font-weight: 700 !important;
  line-height: 12px;
  text-align: right;
  cursor: pointer;
`,A=({provider:e})=>e.rank?(0,i.jsx)(T,{children:(0,i.jsxs)(a.ud,{text:(0,i.jsxs)(o.ZP,{children:[(0,i.jsx)(_,{children:(0,i.jsx)("img",{src:"/nft/svgs/gem.svg",width:16,height:16})}),(0,i.jsx)(C,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:["# ",(0,l.Ux)(e.rank)]})}):null,j=(0,g.default)(o.ZP).withConfig({displayName:"icons__SuspiciousIconContainer",componentId:"sc-10a3df04-6"})`
  flex-shrink: 0;
`,y=()=>(0,i.jsx)(a.ud,{text:(0,i.jsx)(m.Tv.BodySmall,{children:(0,i.jsx)(r.cC,{id:"E7U2ed"})}),placement:"top",children:(0,i.jsx)(j,{children:(0,i.jsx)(N,{})})})},96670:function(e,t,n){n.d(t,{Dp:function(){return I},XN:function(){return m},Yo:function(){return f},cX:function(){return A}});var i=n(30575),r=n(45938),o=n(2304),a=n(68431),s=n(39401),d=n(63505),c=n(56384),l=n(58046),u=n(12058),p=n(43108),x=n(62878);let g=u.default.div.withConfig({displayName:"media__StyledImageContainer",componentId:"sc-da753e94-0"})`
  position: relative;
  pointer-events: auto;
  &:hover {
    opacity: ${({isDisabled:e,theme:t})=>e?t.opacity.disabled:t.opacity.enabled};
  }
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
`,m=({isDisabled:e,children:t})=>(0,i.jsx)(g,{isDisabled:e,children:t}),h=(0,u.default)(o.ZP).withConfig({displayName:"media__StyledMediaContainer",componentId:"sc-da753e94-1"})`
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`,f=u.default.img.withConfig({displayName:"media__StyledImage",componentId:"sc-da753e94-2"})`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} transform`};
  will-change: transform;
  object-fit: contain;
  visibility: ${({$hidden:e})=>e?"hidden":"visible"};
  background: ${({theme:e,imageLoading:t})=>t&&`linear-gradient(270deg, ${e.backgroundOutline} 0%, ${e.backgroundSurface} 100%)`};
`,I=({src:e,uniformAspectRatio:t=s.Yp.square,setUniformAspectRatio:n,renderedHeight:r,setRenderedHeight:o})=>{let[c,l]=(0,d.useState)(!e),[u,p]=(0,d.useState)(!1);return c?(0,i.jsx)(E,{height:(0,a.bn)(t,r)}):(0,i.jsx)(h,{children:(0,i.jsx)(f,{src:e,$aspectRatio:(0,a.Xm)(t,n),imageLoading:!u,draggable:!1,onError:()=>l(!0),onLoad:e=>{(0,a.lb)(t,e,n,r,o),p(!0)}})})},N=u.default.div.withConfig({displayName:"media__PlaybackButton",componentId:"sc-da753e94-3"})`
  display: ${({pauseButton:e})=>e?"block":"none"};
  color: ${({theme:e})=>e.accentAction};
  position: absolute;
  height: 40px;
  width: 40px;
  z-index: 1;
  margin-left: calc(100% - 50px);
  transform: translateY(-76px);

  @media screen and (max-width: ${p.j$.sm}px) {
    display: block;
  }

  ${g}:hover & {
    display: block;
  }
`,_=u.default.video.withConfig({displayName:"media__StyledVideo",componentId:"sc-da753e94-4"})`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
`,C=(0,u.default)(o.ZP).withConfig({displayName:"media__StyledInnerMediaContainer",componentId:"sc-da753e94-5"})`
  position: absolute;
  left: 0px;
  top: 0px;
`,T=u.default.audio.withConfig({displayName:"media__StyledAudio",componentId:"sc-da753e94-6"})`
  width: 100%;
  height: 100%;
`,A=({isAudio:e,src:t,mediaSrc:n,tokenId:r,uniformAspectRatio:o=s.Yp.square,setUniformAspectRatio:u,renderedHeight:p,setRenderedHeight:x,shouldPlay:g,setCurrentTokenPlayingMedia:m})=>{let I=(0,d.useRef)(null),[A,j]=(0,d.useState)(!t),[y,v]=(0,d.useState)(!1);return((0,d.useEffect)(()=>{g&&I.current?I.current.play():!g&&I.current&&I.current.pause()},[g]),A)?(0,i.jsx)(E,{height:(0,a.bn)(o,p)}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h,{children:(0,i.jsx)(f,{src:t,$aspectRatio:(0,a.Xm)(o,u),imageLoading:!y,draggable:!1,onError:()=>j(!0),onLoad:e=>{(0,a.lb)(o,e,u,p,x),v(!0)},$hidden:g&&!e})}),g?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N,{pauseButton:!0,children:(0,i.jsx)(c.Z,{size:"24px",onClick:e=>{e.preventDefault(),e.stopPropagation(),m(void 0)}})}),(0,i.jsx)(C,{children:e?(0,i.jsx)(T,{ref:I,onEnded:e=>{e.preventDefault(),m(void 0)},children:(0,i.jsx)("source",{src:n})}):(0,i.jsx)(_,{$aspectRatio:(0,a.Xm)(o,u),ref:I,onEnded:e=>{e.preventDefault(),m(void 0)},loop:!0,playsInline:!0,children:(0,i.jsx)("source",{src:n})})})]}):(0,i.jsx)(N,{children:(0,i.jsx)(l.Z,{size:"24px",onClick:e=>{e.preventDefault(),e.stopPropagation(),m(r)}})})]})},j=u.default.div.withConfig({displayName:"media__NoContentContainerBackground",componentId:"sc-da753e94-7"})`
  position: relative;
  width: 100%;
  height: ${({$height:e})=>e?`${e}px`:"auto"};
  padding-top: 100%;
  background: ${({theme:e})=>`linear-gradient(90deg, ${e.backgroundSurface} 0%, ${e.backgroundInteractive} 95.83%)`};
`,y=(0,u.default)(p.Tv.BodyPrimary).withConfig({displayName:"media__NoContentText",componentId:"sc-da753e94-8"})`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  color: ${x.O9.gray500};
`,E=({height:e})=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(j,{$height:e,children:(0,i.jsxs)(y,{children:[(0,i.jsx)(r.cC,{id:"cASU3N"}),(0,i.jsx)("br",{}),(0,i.jsx)(r.cC,{id:"zZ4uq1"})]})})})},68431:function(e,t,n){n.d(t,{Dp:function(){return h},VL:function(){return x},Xm:function(){return N},bn:function(){return I},i2:function(){return g},lb:function(){return f},xY:function(){return m}});var i,r,o=n(30575),a=n(96670),s=n(5570),d=n(39401),c=n(99430),l=n(63505);function u(e){return e.imageUrl||e.smallImageUrl}function p(e){return e.animationUrl}function x(e){return"address"in e?`/nfts/asset/${e.address}/${e.tokenId}?origin=collection`:"asset_contract"in e?`/nfts/asset/${e.asset_contract.address}/${e.tokenId}?origin=profile`:"/nfts/profile"}function g(e,t,n,i,s,d,l){let x;switch(x=r.Image,e.animationUrl&&((0,c.F0)(e.animationUrl)?x=r.Audio:(0,c.Wv)(e.animationUrl)&&(x=r.Video)),x){case r.Image:return(0,o.jsx)(a.Dp,{src:u(e),uniformAspectRatio:i,setUniformAspectRatio:s,renderedHeight:d,setRenderedHeight:l});case r.Video:return(0,o.jsx)(a.cX,{src:u(e),mediaSrc:p(e),tokenId:e.tokenId,shouldPlay:t,setCurrentTokenPlayingMedia:n,uniformAspectRatio:i,setUniformAspectRatio:s,renderedHeight:d,setRenderedHeight:l});case r.Audio:return(0,o.jsx)(a.cX,{isAudio:!0,src:u(e),mediaSrc:p(e),tokenId:e.tokenId,shouldPlay:t,setCurrentTokenPlayingMedia:n,uniformAspectRatio:i,setUniformAspectRatio:s,renderedHeight:d,setRenderedHeight:l})}}function m({selectAsset:e,unselectAsset:t,isSelected:n,isDisabled:i,onClick:r}){return(0,l.useCallback)(o=>{if(o.stopPropagation(),o.preventDefault(),!i){if(r){r();return}return n?t?.():e?.()}},[e,i,r,t,n])}function h(e){switch(e){case d.Fz.Opensea:return(0,o.jsx)(s.fP,{});case d.Fz.LooksRare:return(0,o.jsx)(s.XM,{});case d.Fz.X2Y2:return(0,o.jsx)(s.Bl,{});case d.Fz.Sudoswap:return(0,o.jsx)(s.OD,{});case d.Fz.NFT20:return(0,o.jsx)(s.p8,{});case d.Fz.NFTX:return(0,o.jsx)(s.R2,{});case d.Fz.Cryptopunks:return(0,o.jsx)(s.f7,{});default:return null}}(i=r||(r={}))[i.Image=0]="Image",i[i.Video=1]="Video",i[i.Audio=2]="Audio";let f=(e,t,n,i,r)=>{if(e!==d.Yp.square&&n){let o=t.currentTarget.clientHeight,a=t.currentTarget.clientWidth,s=a/o;(!i||i!==o)&&s<1&&e!==d.Yp.square&&r&&r(o),e===d.Yp.unset?n(s>=1?d.Yp.square:s):(s>e+.05||s<e-.05)&&(n(d.Yp.square),r&&r(void 0))}};function I(e,t){return e===d.Yp.square||e===d.Yp.unset?void 0:t}function N(e,t){return e!==d.Yp.square&&t?"auto":"1"}},50026:function(e,t,n){n.d(t,{B:function(){return p},P:function(){return u}});var i=n(20691),r=n(45825),o=n(15627),a=n(95202),s=n(4572),d=n(39401),c=n(63505),l=n(98841);function u(){let e=(0,l.c)(e=>e.itemsInBag);return(0,c.useMemo)(()=>{let t=e.reduce((e,t)=>t.status!==d.ZJ.UNAVAILABLE?e.add(i.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e,i.O$.from(0));return t},[e])}function p(){let e=u(),t=(0,o.U8)("ETH"),n=(0,c.useMemo)(()=>(0,s.Z)((0,r.formatEther)(e.toString()),t??void 0),[t,e]),i=(0,a.sq)(n);return(0,c.useMemo)(()=>i?.toExact(),[i])}}}]);
//# sourceMappingURL=9765.d4cbdb3c.chunk.js.map