"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9765],{29765:function(e,t,n){n.r(t),n.d(t,{BAG_WIDTH:function(){return ta},XXXL_BAG_WIDTH:function(){return td},default:function(){return tx}});var i,r,s=n(30575),o=n(45938),a=n(94869),d=n(66196),l=n(62069),c=n(45825),u=n(14099),p=n(34999),x=n(38414),g=n(83125),m=n(60476),h=n(25575),I=n(56823),f=n(2304),N=n(84362),_=n(80343),T=n(65647),C=n(48141),A=n(20216),E=n(25599),j=n(79954);(0,E.ZP)`
  query NftUniversalRouterAddress($chain: Chain = ETHEREUM) {
    nftRoute(chain: $chain, senderAddress: "", nftTrades: []) {
      toAddress
    }
  }
`;var v=n(15627),w=n(79741),y=n(95202),b=n(97901),O=n(79847),R=n(4572),P=n(98841),k=n(50026),S=n(83884),L=n(64803),z=n(63505),B=n(69574),D=n(58336),F=n(39401),U=n(99430),H=n(68044),G=n(57174);function W(e){return{action:F.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}var M=n(26918),$=n(22495),V=n(45239),Z=n(98685),X=n(64127);let q=(0,Z.Ue)()((0,X.mW)(e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e(()=>({inputCurrency:t})),clearInputCurrency:()=>e(()=>({inputCurrency:void 0})),setTokenTradeInput:t=>e(()=>({tokenTradeInput:t}))}),{name:"useTokenInput"}));var Y=n(53960);function K(e){var t;return{inputAmount:{amount:(t={inputAmount:e.inputAmount,outputAmount:e.outputAmount}).inputAmount.quotient.toString(),token:{address:t.inputAmount.currency.isToken?t.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:t.inputAmount.currency.chainId,decimals:t.inputAmount.currency.decimals,isNative:t.inputAmount.currency.isNative}},outputAmount:{amount:t.outputAmount.quotient.toString(),token:{address:t.outputAmount.currency.isToken?t.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:t.outputAmount.currency.chainId,decimals:t.outputAmount.currency.decimals,isNative:t.outputAmount.currency.isNative}},pools:e.route.pools.map(e=>(function(e){let t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}})(e))}}var J=n(12058),Q=n(74969),ee=n(8586),et=n(50958),en=n(59801),ei=n(43108);function er(e,t,n,i,a){let d={handleClick:()=>void 0,buttonText:(0,s.jsx)(o.cC,{id:"nwtY4N"}),disabled:!0,warningText:void 0,warningTextColor:t.accentWarning,helperText:void 0,helperTextColor:t.textSecondary,buttonColor:t.accentAction,buttonTextColor:t.accentTextLightPrimary},l={[r.WALLET_NOT_CONNECTED]:{...d,handleClick:n??(()=>void 0),disabled:!1,buttonText:(0,s.jsx)(o.cC,{id:"VHOVEJ"})},[r.NOT_SUPPORTED_CHAIN]:{...d,handleClick:n??(()=>void 0),buttonText:(0,s.jsx)(o.cC,{id:"ffOtfc"}),disabled:!1,warningText:(0,s.jsx)(o.cC,{id:"IwI0rY"})},[r.INSUFFICIENT_BALANCE]:{...d,buttonText:(0,s.jsx)(o.cC,{id:"4fL/V7"}),warningText:(0,s.jsx)(o.cC,{id:"cPcTW+"})},[r.ERROR]:{...d,warningText:(0,s.jsx)(o.cC,{id:"fWsBTs"})},[r.IN_WALLET_CONFIRMATION]:{...d,buttonText:(0,s.jsx)(o.cC,{id:"CpEYLQ"})},[r.PROCESSING_TRANSACTION]:{...d,buttonText:(0,s.jsx)(o.cC,{id:"SqYgw0"})},[r.FETCHING_TOKEN_ROUTE]:{...d,buttonText:(0,s.jsx)(o.cC,{id:"YyaKjU"})},[r.INVALID_TOKEN_ROUTE]:{...d,buttonText:(0,s.jsx)(o.cC,{id:"4fL/V7"})},[r.NO_TOKEN_ROUTE_FOUND]:{...d,buttonText:(0,s.jsx)(o.cC,{id:"dLAScn"}),buttonColor:t.backgroundInteractive,buttonTextColor:t.textPrimary,helperText:(0,s.jsx)(o.cC,{id:"1u70J/"})},[r.LOADING_ALLOWANCE]:{...d,buttonText:(0,s.jsx)(o.cC,{id:"Rs3IwW"})},[r.IN_WALLET_ALLOWANCE_APPROVAL]:{...d,buttonText:(0,s.jsx)(o.cC,{id:"4k/lBP"})},[r.PROCESSING_APPROVAL]:{...d,buttonText:(0,s.jsx)(o.cC,{id:"gHko4n"})},[r.REQUIRE_APPROVAL]:{...d,disabled:!1,handleClick:n??(()=>void 0),helperText:(0,s.jsx)(o.cC,{id:"kpa6xe"}),buttonText:(0,s.jsx)(o.cC,{id:"Z7ZXbT"})},[r.CONFIRM_UPDATED_PRICE]:{...d,handleClick:n??(()=>void 0),disabled:!1,warningTextColor:t.accentAction,warningText:(0,s.jsx)(o.cC,{id:"Ejd0wH"}),buttonText:(0,s.jsx)(o.cC,{id:"4fL/V7"})},[r.PRICE_IMPACT_HIGH]:{...d,handleClick:n??(()=>void 0),disabled:!1,buttonColor:a?a.priceImpactSeverity.color:d.buttonColor,helperText:(0,s.jsx)(o.cC,{id:"NF0esC"}),helperTextColor:a?a.priceImpactSeverity.color:d.helperTextColor,buttonText:(0,s.jsx)(o.cC,{id:"2AEplS"})},[r.PAY]:{...d,handleClick:n??(()=>void 0),disabled:!1,buttonText:(0,s.jsx)(o.cC,{id:"4fL/V7"}),helperText:i?(0,s.jsx)(o.cC,{id:"3BWxOM"}):void 0}};return l[e]}(i=r||(r={}))[i.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",i[i.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",i[i.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",i[i.ERROR=3]="ERROR",i[i.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",i[i.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",i[i.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",i[i.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",i[i.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",i[i.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",i[i.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",i[i.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",i[i.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",i[i.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",i[i.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",i[i.PAY=15]="PAY";let es=J.default.div.withConfig({displayName:"BagFooter__FooterContainer",componentId:"sc-2ece965-0"})`
  padding: 0px 12px;
`,eo=J.default.div.withConfig({displayName:"BagFooter__Footer",componentId:"sc-2ece965-1"})`
  border-top: 1px solid ${({theme:e})=>e.backgroundOutline};
  color: ${({theme:e})=>e.textPrimary};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,ea=(0,J.default)(m.ZP).withConfig({displayName:"BagFooter__FooterHeader",componentId:"sc-2ece965-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,ed=(0,J.default)(f.ZP).withConfig({displayName:"BagFooter__CurrencyRow",componentId:"sc-2ece965-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,el=(0,J.default)(m.ZP).withConfig({displayName:"BagFooter__TotalColumn",componentId:"sc-2ece965-4"})`
  text-align: end;
  overflow-x: hidden;
`,ec=(0,J.default)(et.Z).withConfig({displayName:"BagFooter__WarningIcon",componentId:"sc-2ece965-5"})`
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
`,ex=(0,J.default)(f.ZP).withConfig({displayName:"BagFooter__CurrencyInput",componentId:"sc-2ece965-8"})`
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
`,eh=(0,J.default)(f.ZP).withConfig({displayName:"BagFooter__PriceImpactContainer",componentId:"sc-2ece965-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,eI=(0,J.default)(f.ZP).withConfig({displayName:"BagFooter__PriceImpactRow",componentId:"sc-2ece965-12"})`
  align-items: center;
  gap: 8px;
`,ef=(0,J.default)(ei.Tv.BodyPrimary).withConfig({displayName:"BagFooter__ValueText",componentId:"sc-2ece965-13"})`
  line-height: 20px;
  font-weight: 500;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,eN=({color:e,children:t})=>t?(0,s.jsxs)(eu,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(ec,{}),t]}):null,e_=({children:e,color:t})=>e?(0,s.jsx)(ep,{lineHeight:"16px",$color:t,children:e}):null,eT=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:i,trade:r})=>e?i!==B.qx.LOADING||r?(0,s.jsx)(ef,{color:i===B.qx.LOADING?"textTertiary":"textPrimary",children:(0,U.Nd)(r?.inputAmount.toExact())}):(0,s.jsx)(ei.Tv.BodyPrimary,{color:"textTertiary",lineHeight:"20px",fontWeight:"500",children:(0,s.jsx)(o.cC,{id:"hwuHLB"})}):(0,s.jsxs)(ei.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"500",children:[(0,U.zb)(t.toString()),"\xa0",n?.symbol??"ETH"]}),eC=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:i})=>e?(0,s.jsxs)(eh,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(T.ud,{text:u.ag._({id:"KaCkzz"}),children:(0,s.jsxs)(eI,{children:[(0,s.jsx)(et.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)(ei.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",(0,s.jsx)(o.cC,{id:"J/hVSQ",values:{0:t.displayPercentage()}}),")"]})]})})}),(0,s.jsx)(ei.Tv.BodySmall,{color:"textTertiary",lineHeight:"20px",children:`${(0,U.Nd)(e?.toExact(),!0)}`})]}):i&&(n===B.qx.INVALID||n===B.qx.NO_ROUTE_FOUND)?null:(0,s.jsx)(em,{}),eA=[F.s.FETCHING_ROUTE,F.s.CONFIRMING_IN_WALLET,F.s.FETCHING_FINAL_ROUTE,F.s.PROCESSING_TRANSACTION],eE=({setModalIsOpen:e,eventProperties:t})=>{let n=(0,g.LK)(),i=(0,J.useTheme)(),{account:l,chainId:u,connector:f}=(0,x.useWeb3React)(),_=!!(l&&u),T=(0,k.P)(),{inputCurrency:E}=q(({inputCurrency:e})=>({inputCurrency:e}),M.X),Z=q(e=>e.setInputCurrency),X=(0,v.U8)("ETH"),et=(0,O.mM)(l??void 0,E&&E.isToken?E:void 0),{isLocked:ec,bagStatus:eu,setBagExpanded:ep,setBagStatus:em}=(0,P.c)(({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:i})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:i}),M.X),[eh,eI]=(0,z.useState)(!1),ef=eA.includes(eu),eE=E??X,ej=!!E&&u===p.ChainId.MAINNET,{universalRouterAddress:ev,universalRouterAddressIsLoading:ew}=function(){let{data:e,loading:t}=(0,j.Z6)({fetchPolicy:"no-cache"});return{universalRouterAddress:e?.nftRoute?.toAddress,universalRouterAddressIsLoading:t}}();!function(e){let t=(0,$.p)(e=>e.state),n=(0,$.p)(e=>e.setState),i=(0,z.useRef)(t),{setBagStatus:r,setLocked:s}=(0,P.c)(({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n}),M.X);(0,z.useEffect)(()=>{$.p.subscribe(e=>i.current=e.state)},[]),(0,z.useEffect)(()=>{i.current===F.c$.Confirming&&r(F.s.PROCESSING_TRANSACTION),(i.current===F.c$.Denied||i.current===F.c$.Invalid)&&(i.current===F.c$.Invalid?r(F.s.WARNING):r(F.s.CONFIRM_REVIEW),n(F.c$.New),s(!1),e(!1))},[s,r,e,n,i.current])}(e);let ey=function(){let{account:e}=(0,x.useWeb3React)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:r,isLocked:s,setLocked:o,setItemsInBag:a}=(0,P.c)(({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:i,isLocked:r,setLocked:s,setItemsInBag:o})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:i,isLocked:r,setLocked:s,setItemsInBag:o}),M.X),d=q(e=>e.tokenTradeInput),l=(0,z.useMemo)(()=>(0,U.G7)(t),[t]),[c]=(0,j.yo)(),u=function(){let{provider:e}=(0,x.useWeb3React)(),t=(0,$.p)(e=>e.sendTransaction),n=(0,V.J)(e=>e.setTransactionResponse),{setLocked:i,setBagExpanded:r,reset:s}=(0,P.c)(({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n}),M.X);return(0,z.useCallback)(async(o,a,d=!1)=>{if(!e)return;let l=await t(e.getSigner(),a,o,d);l&&(i(!1),n(l),r({bagExpanded:!1}),s())},[e,s,t,r,i,n])}(),p=(0,z.useCallback)(()=>{i&&r(!1),s||o(!0),n(F.s.FETCHING_ROUTE)},[s,i,o,n,r]);return(0,z.useCallback)(async()=>{p(),c({variables:{senderAddress:e||"",nftTrades:(0,U.hI)(l),tokenTrades:d||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route){n(F.s.ADDING_TO_BAG),o(!1);return}let t=l.filter(e=>e.status!==F.ZJ.UNAVAILABLE).map(e=>e.asset),i=!!d,{route:r,routeResponse:s}=function(e,t){let n=e.route?e.route.map(W):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}(e.nftRoute,i),{newBagItems:c,nextBagStatus:p}=function(e,t,n){let{hasPriceAdjustment:i,updatedAssets:r}=(0,H.$)(e,t),{unchanged:s,priceChanged:o,unavailable:a}=(0,G.Kr)(r),d=r.length>0,l=o.length>0,c=a.length>0,u=[...a.map(e=>({asset:e,status:F.ZJ.UNAVAILABLE})),...o.map(e=>({asset:e,status:F.ZJ.REVIEWING_PRICE_CHANGE})),...s.map(e=>({asset:e,status:F.ZJ.REVIEWED}))],p=d?l||c?l?F.s.IN_REVIEW:F.s.CONFIRM_REVIEW:i&&n?F.s.CONFIRM_QUOTE:F.s.CONFIRMING_IN_WALLET:F.s.ADDING_TO_BAG;return{newBagItems:u,nextBagStatus:p}}(t,r,i);if(a(c),n(p),p===F.s.CONFIRMING_IN_WALLET){u(s,t,i),o(!0);return}o(!1)}})},[e,c,l,u,p,o,n,a,d])}(),eb=(0,z.useMemo)(()=>(0,R.Z)((0,c.formatEther)(T.toString()),X??void 0),[X,T]),{state:eO,trade:eR,maximumAmountIn:eP,allowedSlippage:ek}=function(e,t){let{state:n,trade:i}=(0,L.C)(p.TradeType.EXACT_OUTPUT,t,e??void 0,B.R5.API),r=(0,S.Z)((0,D.pG)(i)?i:void 0),s=(0,z.useMemo)(()=>{let e=i?.maximumAmountIn(r);return e?.currency.isToken?e:void 0},[r,i]);return(0,z.useMemo)(()=>({state:n,trade:i,maximumAmountIn:s,allowedSlippage:r}),[r,s,n,i])}(ej?E:void 0,eb),eS=(0,w.Z)(eP,function(e,t){if(e)return e===p.ChainId.MAINNET?t??(0,A.UNIVERSAL_ROUTER_ADDRESS)(e):(0,C.EC)(e)?(0,A.UNIVERSAL_ROUTER_ADDRESS)(e):void 0}(u,ev),B.d7.Classic),eL=eS.state===w.K.LOADING||ew;!function(e,t,n){let i=q(e=>e.setTokenTradeInput),r=(0,D.pG)(e)&&e.routes,s=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,o=!!n&&!!t;(0,z.useEffect)(()=>{if(!r||!s||!o){i(void 0);return}let a=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:d,v2TokenTradeRouteInputs:l,v3TokenTradeRouteInputs:c}=function(e){let t=[],n=[],i=[],r=e.swaps;for(let e of r)e.route.protocol===Y.Protocol.MIXED?t.push(K(e)):e.route.protocol===Y.Protocol.V2?n.push(K(e)):i.push(K(e));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:i.length>0?i:void 0}}(e),u={mixedRoutes:d,tradeType:j.NS.ExactOutput,v2Routes:l,v3Routes:c},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;i({permit:p,routes:u,slippageToleranceBasisPoints:a,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})},[t,n,o,s,r,i,e])}(eR,eS,ek);let ez=function(e){let t=(0,J.useTheme)();return(0,z.useMemo)(()=>{let n=e?(0,Q.QW)(e):void 0,i=n?(0,Q.BK)(n):void 0,r="error"===i?t.accentCritical:"warning"===i?t.accentWarning:void 0;return n&&i&&r?{priceImpactSeverity:{type:i,color:r},displayPercentage:()=>(function(e){let t=e.lessThan(0)?"+":"",n=Number(e.numerator)/Number(e.denominator)*100;if(n<.005)return"0.00%";let i=parseFloat(e.multiply(-1)?.toFixed(2));return`${t}${i}%`})(n)}:void 0},[t.accentCritical,t.accentWarning,e])}(eR),eB=(0,y.sq)(eR?.inputAmount),eD=(0,y.sq)(eb),eF=ej?eB:eD,{balance:eU}=(0,ee.t)(),eH=(0,z.useMemo)(()=>{if(_&&u===p.ChainId.MAINNET){if(E){let e=eR?.inputAmount;if(!et||!e)return;return!et.lessThan(e)}return(0,c.parseEther)(eU).gte(T)}},[_,u,E,eU,T,eR?.inputAmount,et]);(0,z.useEffect)(()=>{em(F.s.ADDING_TO_BAG)},[E,em]);let eG=(0,b.o)(),{buttonText:eW,buttonTextColor:eM,disabled:e$,warningText:eV,warningTextColor:eZ,helperText:eX,helperTextColor:eq,handleClick:eY,buttonColor:eK}=(0,z.useMemo)(()=>{if(_&&u!==p.ChainId.MAINNET)return er(r.NOT_SUPPORTED_CHAIN,i,()=>eG(f,p.ChainId.MAINNET));if(!1===eH)return er(r.INSUFFICIENT_BALANCE,i);if(eu===F.s.WARNING)return er(r.ERROR,i);if(!_)return er(r.WALLET_NOT_CONNECTED,i,()=>{n(),ep({bagExpanded:!1})});if(eu===F.s.FETCHING_FINAL_ROUTE||eu===F.s.CONFIRMING_IN_WALLET)return er(r.IN_WALLET_CONFIRMATION,i);if(eu===F.s.PROCESSING_TRANSACTION)return er(r.PROCESSING_TRANSACTION,i);if(ej&&eO!==B.qx.VALID)return eO===B.qx.INVALID?er(r.INVALID_TOKEN_ROUTE,i):eO===B.qx.NO_ROUTE_FOUND?er(r.NO_TOKEN_ROUTE_FOUND,i):er(r.FETCHING_TOKEN_ROUTE,i);let e=eS.state===w.K.REQUIRED,t=()=>e&&eS.approveAndPermit();return eL?er(r.LOADING_ALLOWANCE,i,t):e?eS.isApprovalPending?er(r.IN_WALLET_ALLOWANCE_APPROVAL,i,t):eS.isApprovalLoading?er(r.PROCESSING_APPROVAL,i,t):er(r.REQUIRE_APPROVAL,i,t):eu===F.s.CONFIRM_QUOTE?er(r.CONFIRM_UPDATED_PRICE,i,ey):ez&&"error"===ez.priceImpactSeverity.type?er(r.PRICE_IMPACT_HIGH,i,ey,ej,ez):er(r.PAY,i,ey,ej)},[_,u,eH,eu,ej,eO,eL,eS,ez,i,ey,eG,f,n,ep]),eJ={usd_value:eF?.toExact(),using_erc20:!!E,...t};return(0,s.jsxs)(es,{children:[(0,s.jsxs)(eo,{children:[(0,s.jsxs)(ea,{gap:"xs",children:[(0,s.jsxs)(ed,{children:[(0,s.jsx)(m.ZP,{gap:"xs",children:(0,C.EC)(u)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ei.Tv.SubHeaderSmall,{children:(0,s.jsx)(o.cC,{id:"JQjhrO"})}),(0,s.jsxs)(ex,{onClick:()=>{ec||(eI(!0),(0,d._P)(a.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(I.Z,{currency:eE,size:"24px"}),(0,s.jsx)(ei.Tv.HeadlineSmall,{fontWeight:500,lineHeight:"24px",children:eE?.symbol}),(0,s.jsx)(en.Z,{size:20,color:i.textSecondary})]})]})}),(0,s.jsxs)(el,{gap:"xs",children:[(0,s.jsx)(ei.Tv.SubHeaderSmall,{marginBottom:"4px",children:(0,s.jsx)(o.cC,{id:"72c5Qo"})}),(0,s.jsx)(eT,{usingPayWithAnyToken:ej,totalEthPrice:T,activeCurrency:eE,tradeState:eO,trade:eR})]})]}),(0,s.jsx)(eC,{usdcValue:eF,priceImpact:ez,tradeState:eO,usingPayWithAnyToken:ej})]}),(0,s.jsxs)(d.M8,{events:[a.TM.onClick],name:a.Yz.NFT_BUY_BAG_PAY,element:a.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...eJ},shouldLogImpression:_&&!e$,children:[(0,s.jsx)(eN,{color:eZ,children:eV}),(0,s.jsx)(e_,{color:eq,children:eX}),(0,s.jsxs)(eg,{"data-testid":"nft-buy-button",onClick:eY,disabled:e$||ef,$backgroundColor:eK,$color:eM,children:[ef&&(0,s.jsx)(h.ZP,{size:"20px",stroke:"white"}),eW]})]})]}),(0,s.jsx)(N.Z,{isOpen:eh,onDismiss:()=>eI(!1),onCurrencySelect:e=>{Z(e.isNative?void 0:e),e.isToken&&(0,d._P)(a.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:eE??void 0,onlyShowCurrenciesWithBalance:!0})]})};var ej=n(64709),ev=n(9867),ew=n(2994),ey=n(54212),eb=n(79131),eO=n(437);n(74602);var eR=n(20691),eP=n(84893),ek=n(88850);let eS=(0,J.keyframes)`
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
`,ez=()=>(0,s.jsx)(ej.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(eL,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var eB=n(83164),eD=n(5570),eF=n(15655),eU=n(70453),eH=n(11001);n(46728);var eG="_1kuawcb rgw6ezb1 rgw6ezcv rgw6ez7m3 rgw6ez45v rgw6ez45p",eW="_1kuawc1 rgw6ez2dv rgw6ez2jd rgw6ez2oj rgw6ez281 rgw6ez4ej rgw6ez3tj rgw6ez79z rgw6ez1dv rgw6ez7bj",eM="rgw6ez14d rgw6ez1bd rgw6ez49p rgw6ez7bb",e$="rgw6ezcp rgw6ezav rgw6eze7 rgw6ez7m3 rgw6ez45p rgw6ez45v rgw6ez4ep",eV="_1kuawc7",eZ="rgw6ez3xv";let eX=(0,J.default)(ek.UH).withConfig({displayName:"BagRow__RemoveButton",componentId:"sc-8d05d09e-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,eq=(0,J.default)(ek.UH).withConfig({displayName:"BagRow__ReviewButton",componentId:"sc-8d05d09e-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,eY=J.default.div.withConfig({displayName:"BagRow__RemoveAssetOverlay",componentId:"sc-8d05d09e-2"})`
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
`,eK=({onClick:e})=>(0,s.jsx)(eY,{onClick:e,children:(0,s.jsx)(eD.Xv,{})}),eJ=()=>(0,s.jsx)(ej.n,{position:"relative",background:"loadingBackground",className:eM,children:(0,s.jsxs)(ej.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"normal",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),eQ=({asset:e,usdPrice:t,removeAsset:n,showRemove:i,grayscale:r,isMobile:o})=>{let[a,d]=(0,z.useState)(!1),[l,u]=(0,z.useState)(!e.smallImageUrl),[p,x]=(0,z.useState)(!1),g=(0,z.useCallback)(()=>x(!0),[]),m=(0,z.useCallback)(()=>x(!1),[]),h=!!(i&&p&&!o),I=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,f=(0,U.zb)(I),N=(0,U.Nd)(t?parseFloat((0,c.formatEther)(I))*t:t,!0),_=(0,z.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),n([e])},[e,n]);return(0,s.jsx)(eH.rU,{to:(0,U.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(ew.X2,{className:eW,onMouseEnter:g,onMouseLeave:m,children:[(0,s.jsxs)(ej.n,{position:"relative",display:"flex",children:[i&&o&&(0,s.jsx)(eK,{onClick:_}),!l&&(0,s.jsx)(ej.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,eP.default)(eM,r&&!p&&eV),onLoad:()=>{d(!0)},onError:()=>{u(!0)},visibility:a?"visible":"hidden"}),!a&&(0,s.jsx)(ej.n,{position:"absolute",className:`${eM} ${eU.L}`}),l&&(0,s.jsx)(eJ,{})]}),(0,s.jsxs)(ew.sg,{overflow:"hidden",width:"full",color:r?"textSecondary":"textPrimary",children:[(0,s.jsxs)(ew.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(ej.n,{className:eG,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)(eB.yT,{})]}),(0,s.jsxs)(ew.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(ej.n,{className:e$,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(eD.SA,{className:eZ})]})]}),h&&(0,s.jsx)(eX,{onClick:_,emphasis:ek.eI.medium,size:ek.qE.medium,children:"Remove"}),(!h||o)&&(0,s.jsxs)(ew.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(ej.n,{className:"_1kuawc9 rgw6ez3sv rgw6ezb1 rgw6ezd1 rgw6ez3xv",children:[f,"\xa0ETH"]}),(0,s.jsx)(ej.n,{className:e$,children:N})]})]})})},e0=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:i,isMobile:r})=>{let o=eR.O$.from(e.updatedPriceInfo?.ETHPrice).gt(eR.O$.from(e.priceInfo.ETHPrice)),a=(0,z.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),n(e,!1)},[e,n]),d=(0,z.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),n(e,!0)},[e,n]);return(0,s.jsxs)(ew.sg,{className:"rgw6ez2p7 rgw6ez28p rgw6ezlj rgw6ezr1 rgw6ez4sj rgw6ez3t7 rgw6ez4ej rgw6ez7ab rgw6ez7jr rgw6ez547 rgw6ez5op rgw6ez1dv rgw6ez79z",borderTopColor:i?"backgroundOutline":"transparent",children:[(0,s.jsxs)(ew.X2,{className:"rgw6ezcp rgw6ezav rgw6eze7 rgw6ez4cd rgw6ez3sv",children:[o?(0,s.jsx)(eD.PH,{}):(0,s.jsx)(eD.HE,{}),(0,s.jsx)(ej.n,{children:`Price ${o?"increased":"decreased"} from ${(0,U.zb)(e.priceInfo.ETHPrice)} ETH`})]}),(0,s.jsx)(ej.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(eQ,{asset:e,usdPrice:t,removeAsset:()=>void 0,isMobile:r})}),(0,s.jsxs)(ew.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(eq,{onClick:a,emphasis:ek.eI.medium,size:ek.qE.small,children:"Remove"}),(0,s.jsx)(eq,{onClick:d,emphasis:ek.eI.high,size:ek.qE.small,children:"Keep"})]})]})},e1=({assets:e})=>(0,s.jsx)(ew.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:`${32+(e.length-1)*20}px`},children:e.map((e,t)=>(0,s.jsx)(ej.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"backgroundSurface",borderRadius:"4",style:{zIndex:t},className:eV},`${e.address}-${e.tokenId}`))}),e6=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:r,isMobile:o})=>{let[a,d]=(0,z.useReducer)(e=>!e,!1),[l,c]=(0,z.useState)(8);if((0,z.useEffect)(()=>{if(!l){i||(n(),r(!1));return}let e=setInterval(()=>{c(l-1)},1e3);return()=>clearInterval(e)},[l,n,i,r]),!e||0===e.length)return null;let u=e.length>1,p=a||!u;return(0,s.jsx)(ew.sg,{className:"rgw6ez2p7 rgw6ez28p rgw6ezlj rgw6ezr1 rgw6ez4sj rgw6ez3tj rgw6ez4ej rgw6ez7ab rgw6ez7jr rgw6ez547 rgw6ez60j rgw6ez5op rgw6ez1dv",children:(0,s.jsxs)(ew.sg,{children:[(0,s.jsxs)(ew.X2,{justifyContent:"space-between",marginBottom:p?"12":"0",cursor:u?"pointer":"default",onClick:()=>{u&&(i||r(!0),d())},children:[(0,s.jsxs)(ew.X2,{gap:"12",color:"textSecondary",className:eF.Km,children:[!p&&(0,s.jsx)(e1,{assets:e.slice(0,5)}),"No longer available"]}),u&&(0,s.jsx)(ew.X2,{color:"textSecondary",children:a?(0,s.jsx)(eD.X_,{}):(0,s.jsx)(eD.Xs,{})}),!i&&(0,s.jsxs)(ew.X2,{position:"relative",width:"20",height:"20",color:"textPrimary",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(ez,{}),(0,s.jsx)(eD.Nb,{})]})]}),(0,s.jsx)(ew.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:p&&e.map(e=>(0,s.jsx)(eQ,{asset:e,usdPrice:t,removeAsset:()=>void 0,grayscale:!0,isMobile:o},e.id))})]})})};var e2=n(34822);let e5=()=>{let e=(0,eb.cP)(e=>e.bagStatus),t=(0,eb.cP)(e=>e.setBagStatus),n=(0,eb.cP)(e=>e.markAssetAsReviewed),i=(0,eb.cP)(e=>e.didOpenUnavailableAssets),r=(0,eb.cP)(e=>e.setDidOpenUnavailableAssets),o=(0,eb.cP)(e=>e.itemsInBag),l=(0,eb.cP)(e=>e.setItemsInBag),c=(0,eb.cP)(e=>e.removeAssetsFromBag),u=(0,eb.dD)(),p=(0,z.useMemo)(()=>(0,U.G7)(o),[o]),{data:x}=(0,e2.useQuery)(["fetchPrice",{}],()=>(0,U.tw)(),{}),{unchangedAssets:g,priceChangedAssets:m,unavailableAssets:h,availableItems:I}=(0,z.useMemo)(()=>{let e=p.filter(e=>e.status===F.ZJ.ADDED_TO_BAG||e.status===F.ZJ.REVIEWED).map(e=>e.asset),t=p.filter(e=>e.status===F.ZJ.REVIEWING_PRICE_CHANGE).map(e=>e.asset),n=p.filter(e=>e.status===F.ZJ.UNAVAILABLE).map(e=>e.asset),i=p.filter(e=>e.status!==F.ZJ.UNAVAILABLE);return{unchangedAssets:e,priceChangedAssets:t,unavailableAssets:n,availableItems:i}},[p]);return(0,z.useEffect)(()=>{let n=m.length>0,i=p.length>0;n&&(0,d._P)(a.Yz.NFT_BUY_BAG_CHANGED,{usd_value:x,bag_quantity:p,...(0,U.Hj)(m)}),e!==F.s.IN_REVIEW||n||(i?t(F.s.CONFIRM_REVIEW):t(F.s.ADDING_TO_BAG)),e!==F.s.CONFIRM_REVIEW||i||t(F.s.ADDING_TO_BAG)},[e,p,m,t,x]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(ew.sg,{display:m.length>0||h.length>0?"flex":"none",children:[h.length>0&&(0,s.jsx)(d.fM,{name:a.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:x,bag_quantity:p.length,...(0,U.Hj)(h)},shouldLogImpression:!0,children:(0,s.jsx)(e6,{assets:h,usdPrice:x,clearUnavailableAssets:()=>l(I),didOpenUnavailableAssets:i,setDidOpenUnavailableAssets:r,isMobile:u})}),m.map((e,t)=>(0,s.jsx)(e0,{asset:e,usdPrice:x,markAssetAsReviewed:n,top:0===t&&0===h.length,isMobile:u},e.id))]}),(0,s.jsx)(ew.sg,{children:g.slice(0).reverse().map(e=>(0,s.jsx)(eQ,{asset:e,usdPrice:x,removeAsset:c,showRemove:!0,isMobile:u},e.id))})]})};var e4=n(62329);let e8=(0,J.default)(ei.oD).withConfig({displayName:"BagHeader__ClearButton",componentId:"sc-d761a2a3-0"})`
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
`,e3=J.default.div.withConfig({displayName:"BagHeader__Wrapper",componentId:"sc-d761a2a3-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,te=e=>{let t=e.toString().length;return`${14+6*t}px`},tt=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:i})=>{let r=(0,z.useMemo)(()=>te(e),[e]);return(0,s.jsxs)(e3,{children:[(0,s.jsx)(ei.Tv.HeadlineSmall,{children:i?(0,s.jsx)(o.cC,{id:"xNB0TS"}):(0,s.jsx)(o.cC,{id:"EnO7qf"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e7,{sizing:r,children:e}),(0,s.jsx)(e8,{onClick:n,children:(0,s.jsx)(o.cC,{id:"yYxB17"})})]}),(0,s.jsx)(e9,{onClick:t,children:(0,s.jsx)(eD.BW,{"data-testid":"nft-bag-close-icon"})})]})};var tn=n(17669);let ti=(0,J.default)(ew.sg).withConfig({displayName:"EmptyContent__StyledColumn",componentId:"sc-328ca12-0"})`
  gap: 12px;
  margin-top: 68px;
`;var tr=()=>{let e=(0,l.e5)();return(0,s.jsxs)(ti,{children:[(0,s.jsx)(ew.M5,{children:e?(0,s.jsx)(eD.JP,{color:tn.Z4.colors.textTertiary}):(0,s.jsx)(eD.Ln,{color:tn.Z4.colors.textTertiary,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(ew.M5,{"data-testid":"nft-no-nfts-selected",className:eF.v4,children:"No NFTs selected"}):(0,s.jsxs)(ew.sg,{gap:"16",children:[(0,s.jsx)(ew.M5,{"data-testid":"nft-empty-bag",className:eF.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(ew.M5,{fontSize:"12",fontWeight:"normal",color:"textSecondary",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})},ts=({asset:e})=>{let t=(0,eb.Pc)(e=>e.removeSellAsset),n=(0,eb.dD)(),[i,r]=(0,z.useState)(!1),o=()=>r(!i),a=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(ew.X2,{className:eW,onMouseEnter:o,onMouseLeave:o,children:[(0,s.jsxs)(ej.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(eK,{onClick:a}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:eM})]}),(0,s.jsxs)(ew.sg,{overflow:"hidden",width:"full",color:"textPrimary",children:[(0,s.jsx)(ew.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(ej.n,{className:eG,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(ew.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(ej.n,{className:e$,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(eD.SA,{className:eZ})]})]}),i&&!n&&(0,s.jsx)(eX,{onClick:a,emphasis:ek.eI.medium,size:ek.qE.medium,children:"Remove"})]})};let to=()=>{let e=(0,eb.Pc)(e=>e.sellAssets);return(0,s.jsx)(ew.sg,{children:e.length?e.map((e,t)=>(0,s.jsx)(ts,{asset:e},t)):null})},ta=320,td=360,tl=J.default.div.withConfig({displayName:"Bag__BagContainer",componentId:"sc-1a600dfd-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${ta}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.backgroundSurface};
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?eO.k.modalOverTooltip:eO.k.modalBackdrop-1:3};

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
`,tc=J.default.div.withConfig({displayName:"Bag__DetailsPageBackground",componentId:"sc-1a600dfd-1"})`
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
`,tp=({top:e,show:t})=>(0,s.jsx)(ej.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"backgroundOutline",borderBottomColor:e?"backgroundOutline":"transparent",opacity:t?"1":"0",transition:"250"});var tx=()=>{let{resetSellAssets:e,sellAssets:t}=(0,eb.Pc)(({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}),M.X),{setProfilePageState:n}=(0,eb.aO)(({setProfilePageState:e})=>({setProfilePageState:e})),{bagStatus:i,bagIsLocked:r,reset:c,bagExpanded:u,toggleBag:p,setBagExpanded:x}=(0,eb.cP)(e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}),M.X),{uncheckedItemsInBag:g}=(0,eb.cP)(({itemsInBag:e})=>({uncheckedItemsInBag:e})),m=(0,l.e5)(),h=(0,l._3)(),I=(0,l.GZ)(),f=(0,eb.dD)(),N=(0,z.useMemo)(()=>(0,U.G7)(g),[g]),[_,T]=(0,z.useState)(!1),{userCanScroll:C,scrollRef:A,scrollProgress:E,scrollHandler:j}=(0,eb.uh)(),v=(0,z.useCallback)(()=>{x({bagExpanded:!1,manualClose:!0})},[x]);(0,z.useEffect)(()=>{r&&!_&&T(!0)},[r,_]);let w=N.length>0,y=N.length>0,b=t.length>0,O=!!(!m&&!y&&i===F.s.ADDING_TO_BAG||m&&!b),R=(0,z.useMemo)(()=>({...(0,U.Hj)(N.map(e=>e.asset))}),[N]);return u&&I?(0,s.jsxs)(ev.h,{children:[(0,s.jsxs)(tl,{"data-testid":"nft-bag",raiseZIndex:f||_,isProfilePage:m,children:[(0,s.jsx)(tt,{numberOfAssets:m?t.length:N.length,closeBag:v,resetFlow:m?e:c,isProfilePage:m}),O&&(0,s.jsx)(tr,{}),(0,s.jsx)(tp,{top:!0,show:C&&E>0}),(0,s.jsx)(ew.sg,{ref:A,className:"_1jcz50r1 rgw6ez2ej rgw6ez2k1 rgw6ez1yv rgw6ez7nf",onScroll:j,gap:"12",children:m?(0,s.jsx)(to,{}):(0,s.jsx)(e5,{})}),w&&!m&&(0,s.jsx)(eE,{setModalIsOpen:T,eventProperties:R}),b&&m&&(0,s.jsx)(tu,{onClick:()=>{p(),n(F.HA.LISTING),(0,d._P)(a.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map(e=>e.asset_contract.address),token_ids:t.map(e=>e.tokenId)})},children:(0,s.jsx)(o.cC,{id:"xGVfLh"})})]}),h?(0,s.jsx)(tc,{onClick:p}):_&&(0,s.jsx)(ey.a,{onClick:()=>r?void 0:T(!1)})]}):null}},50026:function(e,t,n){n.d(t,{B:function(){return p},P:function(){return u}});var i=n(20691),r=n(45825),s=n(15627),o=n(95202),a=n(4572),d=n(39401),l=n(63505),c=n(98841);function u(){let e=(0,c.c)(e=>e.itemsInBag);return(0,l.useMemo)(()=>{let t=e.reduce((e,t)=>t.status!==d.ZJ.UNAVAILABLE?e.add(i.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e,i.O$.from(0));return t},[e])}function p(){let e=u(),t=(0,s.U8)("ETH"),n=(0,l.useMemo)(()=>(0,a.Z)((0,r.formatEther)(e.toString()),t??void 0),[t,e]),i=(0,o.sq)(n);return(0,l.useMemo)(()=>i?.toExact(),[i])}}}]);
//# sourceMappingURL=9765.ede1bbfd.chunk.js.map