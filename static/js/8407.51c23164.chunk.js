"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8407],{57502:function(e,t,n){var i=n(63505),a=n(21312),o=n.n(a);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var d=(0,i.forwardRef)(function(e,t){var n=e.color,a=e.size,o=void 0===a?24:a,d=function(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["color","size"]);return i.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),i.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))});d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="Link",t.Z=d},73681:function(e,t,n){var i=n(63505),a=n(21312),o=n.n(a);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var d=(0,i.forwardRef)(function(e,t){var n=e.color,a=e.size,o=void 0===a?24:a,d=function(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["color","size"]);return i.createElement("svg",r({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))});d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="Twitter",t.Z=d},98947:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(30575),a=n(55102),o=n(12058),r=n(43108);let d=(0,o.default)(r.dL).withConfig({displayName:"Resource__ResourceLink",componentId:"sc-6427f1cf-0"})`
  display: flex;
  color: ${({theme:e})=>e.accentAction};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,a._j)(.1,e.accentAction)};
    text-decoration: none;
  }
`;function s({name:e,link:t}){return(0,i.jsxs)(d,{href:t,children:[e,(0,i.jsx)("sup",{children:"↗"})]})}},38407:function(e,t,n){n.r(t),n.d(t,{default:function(){return t4},pageTimePeriodAtom:function(){return t5}});var i,a,o,r=n(30575),d=n(45938),s=n(94869),l=n(38414),c=n(66196),p=n(56823),x=n(34999),u=n(52553),f=n(55102),h=n(63505),m=n(12058),g=n(43108),y=n(47371),w=n(98947);let j=m.default.span.withConfig({displayName:"About__NoInfoAvailable",componentId:"sc-445fe45c-0"})`
  color: ${({theme:e})=>e.textTertiary};
  font-weight: 400;
  font-size: 16px;
`,b=m.default.div.withConfig({displayName:"About__TokenDescriptionContainer",componentId:"sc-445fe45c-1"})`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  max-height: fit-content;
  padding-top: 16px;
  line-height: 24px;
  white-space: pre-wrap;
`,v=m.default.div.withConfig({displayName:"About__TruncateDescriptionButton",componentId:"sc-445fe45c-2"})`
  color: ${({theme:e})=>e.textSecondary};
  font-weight: 400;
  font-size: 0.85em;
  padding-top: 0.5em;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,f._j)(.1,e.textSecondary)};
    cursor: pointer;
  }
`,k=e=>{let t=e.slice(0,C);return`${t.slice(0,Math.min(t.length,t.lastIndexOf(" ")))}...`},C=400,_=m.default.div.withConfig({displayName:"About__AboutContainer",componentId:"sc-445fe45c-3"})`
  gap: 16px;
  padding: 24px 0px;
  ${y.Sj}
`,S=(0,m.default)(g.Tv.MediumHeader).withConfig({displayName:"About__AboutHeader",componentId:"sc-445fe45c-4"})`
  font-size: 28px !important;
`,I=m.default.div.withConfig({displayName:"About__ResourcesContainer",componentId:"sc-445fe45c-5"})`
  display: flex;
  padding-top: 12px;
  gap: 14px;
`;function N({address:e,chainId:t,description:n,homepageUrl:i,twitterName:a}){let[o,s]=(0,h.useState)(!0),l=!!n&&n.length>C,c=l&&o?k(n):n,{explorer:p,infoLink:f}=(0,u.bt)(t);return(0,r.jsxs)(_,{"data-testid":"token-details-about-section",children:[(0,r.jsx)(S,{children:(0,r.jsx)(d.cC,{id:"uyJsf6"})}),(0,r.jsxs)(b,{children:[!n&&(0,r.jsx)(j,{children:(0,r.jsx)(d.cC,{id:"kXI9SA"})}),c,l&&(0,r.jsx)(v,{onClick:()=>s(!o),children:o?(0,r.jsx)(d.cC,{id:"fMPkxb"}):(0,r.jsx)(d.cC,{id:"vLyv1R"})})]}),(0,r.jsx)("br",{}),(0,r.jsx)(g.Tv.SubHeaderSmall,{children:(0,r.jsx)(d.cC,{id:"Rj01Fz"})}),(0,r.jsxs)(I,{"data-cy":"resources-container",children:[(0,r.jsx)(w.Z,{name:t===x.ChainId.MAINNET?"Etherscan":"Block Explorer",link:`${p}${"NATIVE"===e?"":"address/"+e}`}),(0,r.jsx)(w.Z,{name:"More analytics",link:`${f}tokens/${e}`}),i&&(0,r.jsx)(w.Z,{name:"Website",link:i}),a&&(0,r.jsx)(w.Z,{name:"Twitter",link:`https://twitter.com/${a}`})]})]})}let T=m.default.div.withConfig({displayName:"AddressSection__ContractAddressSection",componentId:"sc-d395784c-0"})`
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.textSecondary};
  font-size: 0.9em;
  gap: 4px;
  padding: 4px 0px;
`,$=m.default.button.withConfig({displayName:"AddressSection__ContractAddress",componentId:"sc-d395784c-1"})`
  display: flex;
  color: ${({theme:e})=>e.textPrimary};
  gap: 10px;
  align-items: center;
  background: transparent;
  border: none;
  min-height: 38px;
  padding: 0px;
`;function O({address:e}){return(0,r.jsxs)(T,{children:[(0,r.jsx)(g.Tv.SubHeaderSmall,{children:(0,r.jsx)(d.cC,{id:"TPQ9LW"})}),(0,r.jsx)($,{children:(0,r.jsx)(g.Qv,{address:e})})]})}var P=n(48141),A=n(95202),L=n(79847),B=n(38491);let z=m.default.div.withConfig({displayName:"BalanceSummary__BalancesCard",componentId:"sc-c5ae582c-0"})`
  box-shadow: ${({theme:e})=>e.shallowShadow};
  background-color: ${({theme:e})=>e.backgroundSurface};
  border: ${({theme:e})=>`1px solid ${e.backgroundOutline}`};
  border-radius: 16px;
  color: ${({theme:e})=>e.textPrimary};
  display: none;
  height: fit-content;
  padding: 20px;
  width: 100%;

  // 768 hardcoded to match NFT-redesign navbar breakpoints
  // src/nft/css/sprinkles.css.ts
  // change to match theme breakpoints when this navbar is updated
  @media screen and (min-width: 768px) {
    display: flex;
  }
`,W=m.default.div.withConfig({displayName:"BalanceSummary__BalanceSection",componentId:"sc-c5ae582c-1"})`
  height: fit-content;
  width: 100%;
`,E=m.default.div.withConfig({displayName:"BalanceSummary__BalanceRow",componentId:"sc-c5ae582c-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`,H=m.default.div.withConfig({displayName:"BalanceSummary__BalanceItem",componentId:"sc-c5ae582c-3"})`
  display: flex;
  align-items: center;
`,M=m.default.div.withConfig({displayName:"BalanceSummary__BalanceContainer",componentId:"sc-c5ae582c-4"})`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  flex: 1;
`,Z=m.default.div.withConfig({displayName:"BalanceSummary__BalanceAmountsContainer",componentId:"sc-c5ae582c-5"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,R=m.default.div.withConfig({displayName:"BalanceSummary__StyledNetworkLabel",componentId:"sc-c5ae582c-6"})`
  color: ${({color:e})=>e};
  font-size: 12px;
  line-height: 16px;
`;function D({token:e}){let{account:t,chainId:n}=(0,l.useWeb3React)(),i=(0,m.useTheme)(),{label:a,color:o}=(0,u.bt)((0,P.oG)(n)??x.ChainId.MAINNET),s=(0,L.ZP)(t,e),c=(0,B.ZO)(s,B.sw.TokenNonTx),f=(0,B.ZO)((0,A.sq)(s),B.sw.FiatTokenStats);return t&&s?(0,r.jsx)(z,{children:(0,r.jsxs)(W,{children:[(0,r.jsx)(g.Tv.SubHeaderSmall,{color:i.textPrimary,children:(0,r.jsx)(d.cC,{id:"n3wXA/",values:{label:a}})}),(0,r.jsxs)(E,{children:[(0,r.jsx)(p.Z,{currency:e,size:"2rem",hideL2Icon:!1}),(0,r.jsxs)(M,{children:[(0,r.jsxs)(Z,{children:[(0,r.jsx)(H,{children:(0,r.jsxs)(g.Tv.SubHeader,{children:[c," ",e.symbol]})}),(0,r.jsx)(H,{children:(0,r.jsx)(g.Tv.BodyPrimary,{children:f})})]}),(0,r.jsx)(R,{color:o,children:a})]})]})]})}):null}var U=n(11001);let F=(0,m.default)(U.rU).withConfig({displayName:"BreadcrumbNavLink",componentId:"sc-33227190-0"})`
  display: flex;
  color: ${({theme:e})=>e.textSecondary};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  margin-bottom: 16px;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  width: fit-content;

  &:hover {
    color: ${({theme:e})=>e.textTertiary};
  }
`;var G=n(2618),Q=n(17190),V=n(89834),K=n(20095);let Y=(0,m.default)(K.nR).withConfig({displayName:"SwapSkeleton__StyledArrowWrapper",componentId:"sc-3e19f553-0"})`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`,X=m.default.div.withConfig({displayName:"SwapSkeleton__LoadingWrapper",componentId:"sc-3e19f553-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;

  padding: 8px;
  border: ${({theme:e})=>`1px solid ${e.backgroundOutline}`};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.backgroundSurface};
`,q=m.default.div.withConfig({displayName:"SwapSkeleton__Blob",componentId:"sc-3e19f553-2"})`
  background-color: ${({theme:e})=>e.backgroundModule};
  border-radius: ${({radius:e})=>(e??4)+"px"};
  height: 56px;
  width: ${({width:e})=>e?e+"px":"100%"};
`,J=(0,m.default)(q).withConfig({displayName:"SwapSkeleton__ModuleBlob",componentId:"sc-3e19f553-3"})`
  background-color: ${({theme:e})=>e.backgroundOutline};
  height: 36px;
`,ee=m.default.div.withConfig({displayName:"SwapSkeleton__TitleColumn",componentId:"sc-3e19f553-4"})`
  padding: 8px;
`,et=m.default.div.withConfig({displayName:"SwapSkeleton__Row",componentId:"sc-3e19f553-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,en=m.default.div.withConfig({displayName:"SwapSkeleton__InputColumn",componentId:"sc-3e19f553-6"})`
  display: flex;
  flex-flow: column;
  background-color: ${({theme:e})=>e.backgroundModule};
  border-radius: 16px;
  display: flex;
  gap: 30px;
  padding: 48px 12px;
`,ei=m.default.div.withConfig({displayName:"SwapSkeleton__OutputWrapper",componentId:"sc-3e19f553-7"})`
  position: relative;
`;function ea(){return(0,r.jsx)(ee,{children:(0,r.jsx)(g.Tv.SubHeader,{children:(0,r.jsx)(d.cC,{id:"vH2C/2"})})})}function eo(){return(0,r.jsxs)(et,{children:[(0,r.jsx)(J,{width:60}),(0,r.jsx)(J,{width:100,radius:16})]})}function er(){return(0,r.jsx)(q,{radius:16})}function ed(){let e=(0,m.useTheme)();return(0,r.jsxs)(X,{children:[(0,r.jsx)(ea,{}),(0,r.jsx)(en,{children:(0,r.jsx)(eo,{})}),(0,r.jsxs)(ei,{children:[(0,r.jsx)(Y,{clickable:!1,children:(0,r.jsx)(Q.Gz,{children:(0,r.jsx)(V.Z,{size:"16",color:e.textTertiary})})}),(0,r.jsx)(en,{children:(0,r.jsx)(eo,{})})]}),(0,r.jsx)(er,{})]})}var es=n(61525),el=n(27591),ec=n(80343),ep=n(21890),ex=n(65647),eu=n(35458),ef=n(86403),eh=n(79802);let em=m.default.div.withConfig({displayName:"StatsSection__StatWrapper",componentId:"sc-9ebd34d0-0"})`
  color: ${({theme:e})=>e.textSecondary};
  font-size: 14px;
  min-width: 168px;
  flex: 1;
  padding: 24px 0px;
`,eg=m.default.div.withConfig({displayName:"StatsSection__TokenStatsSection",componentId:"sc-9ebd34d0-1"})`
  display: flex;
  flex-wrap: wrap;
`,ey=m.default.div.withConfig({displayName:"StatsSection__StatPair",componentId:"sc-9ebd34d0-2"})`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`,ew=(0,m.default)(g.Tv.MediumHeader).withConfig({displayName:"StatsSection__Header",componentId:"sc-9ebd34d0-3"})`
  font-size: 28px !important;
`,ej=m.default.div.withConfig({displayName:"StatsSection__StatPrice",componentId:"sc-9ebd34d0-4"})`
  margin-top: 4px;
  font-size: 28px;
  color: ${({theme:e})=>e.textPrimary};
`,eb=m.default.div.withConfig({displayName:"StatsSection__NoData",componentId:"sc-9ebd34d0-5"})`
  color: ${({theme:e})=>e.textTertiary};
`,ev=m.default.div.withConfig({displayName:"StatsSection__StatsWrapper",componentId:"sc-9ebd34d0-6"})`
  gap: 16px;
  ${y.Sj}
`;function ek({dataCy:e,value:t,title:n,description:i}){return(0,r.jsxs)(em,{"data-cy":`${e}`,children:[(0,r.jsx)(ex.ud,{text:i,children:n}),(0,r.jsx)(ej,{children:(0,B.uf)(t,B.sw.FiatTokenStats)})]})}function eC(e){let{chainId:t,address:n,priceLow52W:i,priceHigh52W:a,TVL:o,volume24H:s}=e,{label:l,infoLink:c}=(0,u.bt)(t);return o||s||i||a?(0,r.jsxs)(ev,{"data-testid":"token-details-stats",children:[(0,r.jsx)(ew,{children:(0,r.jsx)(d.cC,{id:"29Hx9U"})}),(0,r.jsxs)(eg,{children:[(0,r.jsxs)(ey,{children:[(0,r.jsx)(ek,{dataCy:"tvl",value:o,description:eh.h8[ef.PU.TOTAL_VALUE_LOCKED],title:(0,r.jsx)(d.cC,{id:"FHKsZF"})}),(0,r.jsx)(ek,{dataCy:"volume-24h",value:s,description:(0,r.jsx)(d.cC,{id:"QENWO5"}),title:(0,r.jsx)(d.cC,{id:"0RweTm"})})]}),(0,r.jsxs)(ey,{children:[(0,r.jsx)(ek,{dataCy:"52w-low",value:i,title:(0,r.jsx)(d.cC,{id:"Dw2kwD"})}),(0,r.jsx)(ek,{dataCy:"52w-high",value:a,title:(0,r.jsx)(d.cC,{id:"eh5V57"})})]})]})]}):eu.N0.includes(t)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ew,{children:(0,r.jsx)(d.cC,{id:"29Hx9U"})}),(0,r.jsx)(g.Tv.BodySecondary,{paddingTop:"12px",children:(0,r.jsx)(d.cC,{id:"9BeptC",values:{label:l},components:{0:(0,r.jsx)(g.dL,{color:"currentColor",href:`${c}tokens/${n}`})}})})]}):(0,r.jsx)(eb,{children:"No stats available"})}let e_=m.default.hr.withConfig({displayName:"Skeleton__Hr",componentId:"sc-a3e60af1-0"})`
  background-color: ${({theme:e})=>e.backgroundOutline};
  border: none;
  height: 0.5px;
`,eS=m.default.div.withConfig({displayName:"Skeleton__TokenDetailsLayout",componentId:"sc-a3e60af1-1"})`
  display: flex;
  padding: 0 8px 52px;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    gap: 16px;
    padding: 0 16px 52px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    gap: 40px;
    padding: 48px 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,eI=m.default.div.withConfig({displayName:"Skeleton__LeftPanel",componentId:"sc-a3e60af1-2"})`
  flex: 1;
  max-width: 780px;
  overflow: hidden;
`,eN=m.default.div.withConfig({displayName:"Skeleton__RightPanel",componentId:"sc-a3e60af1-3"})`
  display: none;
  flex-direction: column;
  gap: 20px;
  width: ${360}px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: flex;
  }
`,eT=m.default.div.withConfig({displayName:"Skeleton__ChartContainer",componentId:"sc-a3e60af1-4"})`
  display: flex;
  flex-direction: column;
  height: 436px;
  margin-bottom: 24px;
  align-items: flex-start;
  width: 100%;
`,e$=m.default.div.withConfig({displayName:"Skeleton__LoadingChartContainer",componentId:"sc-a3e60af1-5"})`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 100%;
  margin-bottom: 44px;
  padding-bottom: 66px;
  overflow: hidden;
`,eO=m.default.div.withConfig({displayName:"Skeleton__TokenInfoContainer",componentId:"sc-a3e60af1-6"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  ${y.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,eP=m.default.div.withConfig({displayName:"Skeleton__TokenNameCell",componentId:"sc-a3e60af1-7"})`
  display: flex;
  gap: 8px;
  font-size: 20px;
  line-height: 28px;
  align-items: center;
`,eA=(0,m.default)(ec.X).withConfig({displayName:"Skeleton__DetailBubble",componentId:"sc-a3e60af1-8"})`
  height: 16px;
  width: 180px;
`,eL=(0,m.default)(eA).withConfig({displayName:"Skeleton__SquaredBubble",componentId:"sc-a3e60af1-9"})`
  height: 32px;
  border-radius: 8px;
`,eB=(0,m.default)(eA).withConfig({displayName:"Skeleton__TokenLogoBubble",componentId:"sc-a3e60af1-10"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,ez=(0,m.default)(eA).withConfig({displayName:"Skeleton__TitleBubble",componentId:"sc-a3e60af1-11"})`
  width: 136px;
`,eW=(0,m.default)(eL).withConfig({displayName:"Skeleton__PriceBubble",componentId:"sc-a3e60af1-12"})`
  margin-top: 4px;
  height: 40px;
`,eE=(0,m.default)(eL).withConfig({displayName:"Skeleton__SectionBubble",componentId:"sc-a3e60af1-13"})`
  width: 120px;
`,eH=(0,m.default)(eA).withConfig({displayName:"Skeleton__StatTitleBubble",componentId:"sc-a3e60af1-14"})`
  width: 80px;
  margin-bottom: 4px;
`,eM=(0,m.default)(eL).withConfig({displayName:"Skeleton__StatBubble",componentId:"sc-a3e60af1-15"})`
  width: 116px;
`,eZ=(0,m.default)(eA).withConfig({displayName:"Skeleton__WideBubble",componentId:"sc-a3e60af1-16"})`
  margin-bottom: 6px;
  width: 100%;
`,eR=(0,m.default)(eZ).withConfig({displayName:"Skeleton__ThinTitleBubble",componentId:"sc-a3e60af1-17"})`
  width: 120px;
`,eD=(0,m.default)(eZ).withConfig({displayName:"Skeleton__HalfWideBubble",componentId:"sc-a3e60af1-18"})`
  width: 50%;
`,eU=m.default.div.withConfig({displayName:"Skeleton__StatsLoadingContainer",componentId:"sc-a3e60af1-19"})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`,eF=m.default.div.withConfig({displayName:"Skeleton__ExtraDetailsContainer",componentId:"sc-a3e60af1-20"})`
  padding-top: 24px;
`,eG=m.default.div.withConfig({displayName:"Skeleton__ChartAnimation",componentId:"sc-a3e60af1-21"})`
  animation: wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  display: flex;
  overflow: hidden;
  margin-top: 90px;

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -800px;
    }
  }
`,eQ=m.default.div.withConfig({displayName:"Skeleton__Space",componentId:"sc-a3e60af1-22"})`
  height: ${({heightSize:e})=>`${e}px`};
`;function eV(){let e=(0,m.useTheme)();return(0,r.jsx)("svg",{width:"416",height:"160",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M 0 80 Q 104 10, 208 80 T 416 80",stroke:e.backgroundOutline,fill:"transparent",strokeWidth:"2"})})}function eK(){return(0,r.jsxs)(eT,{children:[(0,r.jsx)(ep.GI,{children:(0,r.jsx)(eW,{})}),(0,r.jsx)(eQ,{heightSize:6}),(0,r.jsx)(e$,{children:(0,r.jsx)("div",{children:(0,r.jsxs)(eG,{children:[(0,r.jsx)(eV,{}),(0,r.jsx)(eV,{}),(0,r.jsx)(eV,{}),(0,r.jsx)(eV,{}),(0,r.jsx)(eV,{})]})})})]})}function eY(){return(0,r.jsxs)(ev,{children:[(0,r.jsx)(eE,{}),(0,r.jsxs)(eU,{children:[(0,r.jsxs)(ey,{children:[(0,r.jsxs)(em,{children:[(0,r.jsx)(eH,{}),(0,r.jsx)(eM,{})]}),(0,r.jsxs)(em,{children:[(0,r.jsx)(eH,{}),(0,r.jsx)(eM,{})]})]}),(0,r.jsxs)(ey,{children:[(0,r.jsxs)(em,{children:[(0,r.jsx)(eH,{}),(0,r.jsx)(eM,{})]}),(0,r.jsxs)(em,{children:[(0,r.jsx)(eH,{}),(0,r.jsx)(eM,{})]})]})]})]})}function eX(){let{chainName:e}=(0,el.UO)();return(0,r.jsxs)(eI,{children:[(0,r.jsxs)(F,{to:e?`/tokens/${e}`:"/explore",children:[(0,r.jsx)(es.Z,{size:14})," Tokens"]}),(0,r.jsx)(eO,{children:(0,r.jsxs)(eP,{children:[(0,r.jsx)(eB,{}),(0,r.jsx)(ez,{})]})}),(0,r.jsx)(eK,{}),(0,r.jsx)(eQ,{heightSize:4}),(0,r.jsx)(eY,{}),(0,r.jsx)(e_,{}),(0,r.jsx)(_,{children:(0,r.jsx)(S,{children:(0,r.jsx)(eE,{})})}),(0,r.jsx)(eZ,{}),(0,r.jsx)(eZ,{}),(0,r.jsx)(eD,{style:{marginBottom:"24px"}}),(0,r.jsxs)(eF,{children:[(0,r.jsx)(eR,{}),(0,r.jsx)(eD,{})]}),(0,r.jsxs)(eF,{children:[(0,r.jsx)(eR,{}),(0,r.jsx)(eD,{})]})]})}function eq(){return(0,r.jsxs)(eS,{children:[(0,r.jsx)(eX,{}),(0,r.jsx)(eN,{children:(0,r.jsx)(ed,{})})]})}var eJ=n(17487),e0=n(17032),e1=n(1670);let e2=m.default.div.withConfig({displayName:"TimeSelector__TimeOptionsWrapper",componentId:"sc-83fe61e4-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,e3=m.default.div.withConfig({displayName:"TimeSelector__TimeOptionsContainer",componentId:"sc-83fe61e4-1"})`
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  gap: 4px;
  border-radius: 16px;
  height: 40px;
  padding: 4px;
  width: fit-content;

  @media only screen and (max-width: ${eu.Uw}) {
    width: 100%;
    justify-content: space-between;
    border: none;
  }
`,e5=m.default.button.withConfig({displayName:"TimeSelector__TimeButton",componentId:"sc-83fe61e4-2"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.backgroundInteractive:"transparent"};
  font-weight: 600;
  font-size: 16px;
  padding: 6px 12px;
  border-radius: 12px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  color: ${({theme:e,active:t})=>t?e.textPrimary:e.textSecondary};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  :hover {
    ${({active:e,theme:t})=>!e&&`opacity: ${t.opacity.hover};`}
  }
`;function e4({currentTimePeriod:e,onTimeChange:t}){let[n,i]=(0,h.useState)(e);return(0,r.jsx)(e2,{children:(0,r.jsx)(e3,{children:e1.W9.map(e=>(0,r.jsx)(e5,{active:n===e,onClick:()=>{(0,h.startTransition)(()=>t(e)),i(e)},children:e1.rD[e]},e1.rD[e]))})})}function e6({tokenPriceQuery:e,onChangeTimePeriod:t}){return e?(0,r.jsx)(h.Suspense,{fallback:(0,r.jsx)(eK,{}),children:(0,r.jsx)(eT,{children:(0,r.jsx)(e9,{tokenPriceQuery:e,onChangeTimePeriod:t})})}):(0,r.jsx)(eK,{})}function e9({tokenPriceQuery:e,onChangeTimePeriod:t}){let n=function(e){let t=(0,h.useMemo)(()=>{let t=e.token?.market,n=t?.priceHistory?.filter(eJ.yL),i=t?.price?.value;if(Array.isArray(n)&&void 0!==i){let e=Date.now()/1e3;return[...n,{timestamp:e,value:i}]}return n},[e]);return t}(e),i=(0,e0.Dv)(t5);return(0,r.jsxs)(eT,{"data-testid":"chart-container",children:[(0,r.jsx)(G.Z,{children:({width:e})=>(0,r.jsx)(ep.aU,{prices:n??null,width:e,height:436,timePeriod:i})}),(0,r.jsx)(e4,{currentTimePeriod:i,onTimeChange:e=>{(0,h.startTransition)(()=>t(e))}})]})}var e8=n(58025);let e7=m.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Wrapper",componentId:"sc-ba5338ce-0"})`
  align-content: center;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-bottom: none;
  background-color: ${({theme:e})=>e.backgroundSurface};
  border-radius: 20px 20px 0px 0px;
  bottom: 52px;
  color: ${({theme:e})=>e.textSecondary};
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-size: 14px;
  height: fit-content;
  justify-content: space-between;
  left: 0;
  line-height: 20px;
  padding: 12px 16px;
  position: fixed;
  width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    bottom: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    display: none;
  }
`,te=m.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceValue",componentId:"sc-ba5338ce-1"})`
  color: ${({theme:e})=>e.textPrimary};
  font-size: 20px;
  line-height: 28px;
  display: flex;
  gap: 8px;
`,tt=m.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__Balance",componentId:"sc-ba5338ce-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`,tn=m.default.div.withConfig({displayName:"MobileBalanceSummaryFooter__BalanceInfo",componentId:"sc-ba5338ce-3"})`
  display: flex;
  flex: 10 1 auto;
  flex-direction: column;
  justify-content: flex-start;
`,ti=m.default.span.withConfig({displayName:"MobileBalanceSummaryFooter__FiatValue",componentId:"sc-ba5338ce-4"})`
  font-size: 12px;
  line-height: 16px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    line-height: 24px;
  }
`,ta=(0,m.default)(g.m_).withConfig({displayName:"MobileBalanceSummaryFooter__SwapButton",componentId:"sc-ba5338ce-5"})`
  background-color: ${({theme:e})=>e.accentAction};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accentTextLightPrimary};
  display: flex;
  flex: 1 1 auto;
  padding: 12px 16px;
  font-size: 1em;
  font-weight: 600;
  height: 44px;
  justify-content: center;
  margin: auto;
  max-width: 100vw;
`;function to({token:e}){let{account:t}=(0,l.useWeb3React)(),n=(0,L.ZP)(t,e),i=(0,B.ZO)(n,B.sw.TokenNonTx),a=(0,B.ZO)((0,A.sq)(n),B.sw.FiatTokenStats),o=eJ.yC[e.chainId].toLowerCase();return(0,r.jsxs)(e7,{children:[!!(t&&n)&&(0,r.jsxs)(tn,{children:[(0,r.jsx)(d.cC,{id:"xn9ewN",values:{0:e.symbol}}),(0,r.jsxs)(tt,{children:[(0,r.jsxs)(te,{children:[i," ",e.symbol]}),(0,r.jsx)(ti,{children:a})]})]}),(0,r.jsx)(ta,{to:`/swap?chainName=${o}&outputCurrency=${e.isNative?e8.W0:e.address}`,children:(0,r.jsx)(d.cC,{id:"vH2C/2"})})]})}var tr=n(28156),td=n(55338),ts=n(57502),tl=n(73681),tc=n(56564),tp=n(13120),tx=n(62878),tu=n(18030),tf=n(437);function th(){return(th=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}let tm=h.forwardRef(function(e,t){let{title:n,titleId:a,...o}=e;return h.createElement("svg",th({xmlns:"http://www.w3.org/2000/svg",width:22,height:22,fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"#fff",ref:t,"aria-labelledby":a},o),n?h.createElement("title",{id:a},n):null,i||(i=h.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m14-7-5-5-5 5m5-5v12"})))});n.p;let tg=m.default.div.withConfig({displayName:"ShareButton__ShareButtonDisplay",componentId:"sc-10335800-0"})`
  display: flex;
  position: relative;
`,ty=(0,m.default)(tm).withConfig({displayName:"ShareButton__Share",componentId:"sc-10335800-1"})`
  stroke: ${({theme:e})=>e.textSecondary};
  height: 24px;
  width: 24px;
  ${g.iV}
  ${({open:e,theme:t})=>e&&`opacity: ${t.opacity.click} !important`};
`,tw=m.default.div.withConfig({displayName:"ShareButton__ShareActions",componentId:"sc-10335800-2"})`
  position: absolute;
  z-index: ${tf.k.dropdown};
  width: 240px;
  top: 36px;
  right: 0px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 8px;
  background-color: ${({theme:e})=>e.backgroundSurface};
  border: 0.5px solid ${({theme:e})=>e.backgroundOutline};
  box-shadow: ${({theme:e})=>e.deepShadow};
  border-radius: 12px;
`,tj=m.default.div.withConfig({displayName:"ShareButton__ShareAction",componentId:"sc-10335800-3"})`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  gap: 12px;
  height: 40px;
  color: ${({theme:e})=>e.textPrimary};
  cursor: pointer;
  :hover {
    background-color: ${({theme:e})=>(0,tu.j)(10,e.darkMode?tx.O9.gray200:tx.O9.gray300)};
  }
`;function tb({currency:e}){let t=(0,m.useTheme)(),n=(0,h.useRef)(null),i=(0,tc.Wt)(tp.Lk.SHARE),a=(0,tc.xk)(tp.Lk.SHARE);(0,td.t)(n,i?a:void 0);let o=(window.screen.width-560)/2,s=(window.screen.height-480)/2,l=e.isNative?e8.W0:e.wrapped.address;(0,tr.Z)(i);let c=(0,h.useRef)(null);return(0,r.jsxs)(tg,{ref:n,children:[(0,r.jsx)(ty,{onClick:a,"aria-label":"ShareOptions",open:i}),i&&(0,r.jsxs)(tw,{children:[(0,r.jsx)(tj,{onClick:()=>c.current?.forceCopy(),children:(0,r.jsx)(g.WD,{InitialIcon:ts.Z,color:t.textPrimary,iconPosition:"left",gap:12,toCopy:window.location.href,ref:c,children:(0,r.jsx)(d.cC,{id:"ENCIQz"})})}),(0,r.jsxs)(tj,{onClick:()=>{a(),window.open(`https://twitter.com/intent/tweet?text=Check%20out%20${e.name}%20(${e.symbol})%20https://app.uniswap.org/%23/tokens/${(0,eJ.Ld)(e.chainId).toLowerCase()}/${l}%20via%20@uniswap`,"newwindow",`left=${o}, top=${s}, width=560, height=480`)},children:[(0,r.jsx)(tl.Z,{color:t.textPrimary,size:20,strokeWidth:1.5}),(0,r.jsx)(d.cC,{id:"uvt91Z"})]})]})]})}var tv=n(94220),tk=n(77669),tC=n(50958),t_=n(2162),tS=n(80358);let tI=m.default.div.withConfig({displayName:"TokenSafetyMessage__Label",componentId:"sc-fb9faef2-0"})`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  color: ${({color:e})=>e};
`,tN=m.default.div.withConfig({displayName:"TokenSafetyMessage__TitleRow",componentId:"sc-fb9faef2-1"})`
  align-items: center;
  font-weight: 700;
  display: inline-flex;
`,tT=(0,m.default)(tS.xv).withConfig({displayName:"TokenSafetyMessage__Title",componentId:"sc-fb9faef2-2"})`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,t$=m.default.div.withConfig({displayName:"TokenSafetyMessage__DetailsRow",componentId:"sc-fb9faef2-3"})`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.textSecondary};
`,tO=(0,m.default)(g.dL).withConfig({displayName:"TokenSafetyMessage__StyledLink",componentId:"sc-fb9faef2-4"})`
  color: ${({theme:e})=>e.accentAction};

  font-weight: 700;
`;function tP({warning:e,tokenAddress:t}){let n=(0,tk.g)(e.level),i=(0,tk.A)(e.level),{heading:a,description:o}=(0,tv.N6)(e);return(0,r.jsxs)(tI,{"data-cy":"token-safety-message",color:i,backgroundColor:n,children:[(0,tv._x)(e)&&(0,r.jsxs)(tN,{children:[e.canProceed?(0,r.jsx)(tC.Z,{size:"16px"}):(0,r.jsx)(t_.Z,{size:"16px"}),(0,r.jsx)(tT,{marginLeft:"7px",children:e.message})]}),(0,r.jsxs)(t$,{children:[a,!!a&&" ",o,!!o&&" ",t&&(0,r.jsx)(tO,{href:tv.W3,children:(0,r.jsx)(d.cC,{id:"zwWKhA"})})]})]})}var tA=n(8356),tL=n(25599),tB=n(86545);(0,tL.ZP)`
  query Token($chain: Chain!, $address: String = null) {
    token(chain: $chain, address: $address) {
      id
      decimals
      name
      chain
      address
      symbol
      standard
      market(currency: USD) {
        id
        totalValueLocked {
          id
          value
          currency
        }
        price {
          id
          value
          currency
        }
        volume24H: volume(duration: DAY) {
          id
          value
          currency
        }
        priceHigh52W: priceHighLow(duration: YEAR, highLow: HIGH) {
          id
          value
        }
        priceLow52W: priceHighLow(duration: YEAR, highLow: LOW) {
          id
          value
        }
      }
      project {
        id
        description
        homepageUrl
        twitterName
        logoUrl
        tokens {
          id
          chain
          address
        }
      }
    }
  }
`;class tz extends tB.D{constructor(e,t,n){let i=(0,eJ.Tz)(t.chain);i&&super({chainId:i,address:e,decimals:t.decimals??e8.GW,symbol:t.symbol??"",name:t.name??"",logoURI:n??t.project?.logoUrl??void 0})}}let tW=e=>{let{chainId:t}=(0,l.useWeb3React)(),n=(0,eJ.Ld)(t),i=(0,h.useRef)(n);(0,h.useEffect)(()=>{i.current!==n&&e(n),i.current=n},[n])};var tE=n(97337),tH=n(92883),tM=n(83777),tZ=n(80608),tR=n(88850),tD=n(89882);function tU(){return(tU=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}let tF=h.forwardRef(function(e,t){let{title:n,titleId:i,...r}=e;return h.createElement("svg",tU({width:54,height:40,viewBox:"0 0 54 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),n?h.createElement("title",{id:i},n):null,a||(a=h.createElement("path",{d:"M1.3335 19.9997C1.3335 19.9997 10.6668 1.33301 27.0002 1.33301C43.3335 1.33301 52.6668 19.9997 52.6668 19.9997C52.6668 19.9997 43.3335 38.6663 27.0002 38.6663C10.6668 38.6663 1.3335 19.9997 1.3335 19.9997Z",stroke:"#98A1C0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=h.createElement("path",{d:"M27.0002 26.9997C30.8662 26.9997 34.0002 23.8657 34.0002 19.9997C34.0002 16.1337 30.8662 12.9997 27.0002 12.9997C23.1342 12.9997 20.0002 16.1337 20.0002 19.9997C20.0002 23.8657 23.1342 26.9997 27.0002 26.9997Z",stroke:"#98A1C0",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))});n.p;let tG=m.default.div.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsContainer",componentId:"sc-112e41b1-0"})`
  padding-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,tQ=m.default.span.withConfig({displayName:"InvalidTokenDetails__InvalidDetailsText",componentId:"sc-112e41b1-1"})`
  margin-top: 28px;
  margin-bottom: 20px;

  text-align: center;

  color: ${({theme:e})=>e.textSecondary};
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`,tV=(0,m.default)(tR.DF).withConfig({displayName:"InvalidTokenDetails__TokenExploreButton",componentId:"sc-112e41b1-2"})`
  width: fit-content;
  padding: 12px 16px;
  border-radius: 12px;

  color: ${({theme:e})=>e.textPrimary};
  font-size: 16px;
  font-weight: 600;
`;function tK({pageChainId:e,isInvalidAddress:t}){let{chainId:n}=(0,l.useWeb3React)(),i=(0,el.s0)(),a=(0,tD.Z)(),o=!t&&e===n,s=n?u.bt(n)?.label:void 0;return(0,r.jsxs)(tG,{children:[(0,r.jsx)(tF,{}),t||o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tQ,{children:(0,r.jsx)(d.cC,{id:"5pThdE"})}),(0,r.jsx)(tV,{onClick:()=>i("/tokens"),children:(0,r.jsx)(g.Tv.SubHeader,{children:(0,r.jsx)(d.cC,{id:"1ru2CS"})})})]}):(0,r.jsxs)(r.Fragment,{children:[s&&(0,r.jsx)(tQ,{children:(0,r.jsx)(d.cC,{id:"xNuZYG",values:{connectedChainLabel:s}})}),(0,r.jsx)(tV,{onClick:()=>a(e),children:(0,r.jsx)(g.Tv.SubHeader,{children:(0,r.jsx)(d.cC,{id:"1+P9RR",values:{0:(0,u.bt)(e).label}})})})]})]})}let tY=m.default.span.withConfig({displayName:"TokenDetails__TokenSymbol",componentId:"sc-9c0c5be0-0"})`
  text-transform: uppercase;
  color: ${({theme:e})=>e.textSecondary};
  margin-left: 8px;
`,tX=m.default.div.withConfig({displayName:"TokenDetails__TokenActions",componentId:"sc-9c0c5be0-1"})`
  display: flex;
  gap: 16px;
  color: ${({theme:e})=>e.textSecondary};
`,tq=m.default.div.withConfig({displayName:"TokenDetails__TokenTitle",componentId:"sc-9c0c5be0-2"})`
  display: flex;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.md}px) {
    display: inline;
  }
`;function tJ({urlAddress:e,inputTokenAddress:t,chain:n,tokenQuery:i,tokenPriceQuery:a,onChangeTimePeriod:o}){if(!e)throw Error("Invalid token details route: tokenAddress param is undefined");let x=(0,h.useMemo)(()=>e===e8.W0?e:(0,tM.U)(e)||void 0,[e]),{chainId:u}=(0,l.useWeb3React)(),f=(0,eJ.Tz)(n),m=i.token,g=(0,h.useMemo)(()=>m?.project?.tokens.reduce((e,t)=>(t&&(e[t.chain]=t.address),e),{})??{},[m]),{token:y,didFetchFromChain:w}=function(e,t,n){let{chainId:i}=(0,l.useWeb3React)(),a=(0,h.useMemo)(()=>{if(e){if(e===e8.W0)return(0,e8.gX)(t);if(n)return new tz(e,n)}},[t,e,n]),o=!!a||t!==i,r=function(e,t){let n=(0,tE.zA)(t||!e?void 0:e);if(!t&&e&&(!n||n?.symbol!==tE.eu))return n}(e,o);return(0,h.useMemo)(()=>({token:a??r,didFetchFromChain:!a}),[r,a])}(x,f,m),j=x?(0,tv.y8)(x):null,b=j?.canProceed===!1,v=(0,el.s0)(),[k,C]=(0,h.useTransition)(),_=(0,h.useCallback)(e=>{if(!x)return;let t=g[e];t?C(()=>v((0,eJ.dG)({address:t,chain:e}))):(w||y?.isNative)&&C(()=>v((0,eJ.dG)({address:x,chain:e})))},[x,g,w,v,y?.isNative]);tW(_);let S=(0,h.useCallback)(e=>{if((0,tZ.K)(e[tH.gN.INPUT]?.currencyId,x)||(0,tZ.K)(e[tH.gN.OUTPUT]?.currencyId,x))return;let t=e[tH.gN.OUTPUT]?.currencyId??e[tH.gN.INPUT]?.currencyId;C(()=>v((0,eJ.dG)({address:"ETH"===t?null:t,chain:n,inputAddress:e[tH.gN.INPUT]&&e[tH.gN.INPUT]?.currencyId!==t?e[tH.gN.INPUT]?.currencyId:null})))},[x,n,v]),[I,T]=(0,h.useState)(),[$,P]=(0,h.useState)(!1),A=(0,h.useCallback)(e=>{I?.resolve(e),T(void 0)},[I,T]);return void 0!==y&&x?(0,r.jsx)(c.fM,{page:s.yJ.TOKEN_DETAILS_PAGE,properties:{tokenAddress:x,tokenName:y?.name},shouldLogImpression:!0,children:(0,r.jsxs)(eS,{children:[y&&!k?(0,r.jsxs)(eI,{children:[(0,r.jsxs)(F,{to:`/tokens/${n.toLowerCase()}`,children:[(0,r.jsx)(es.Z,{"data-testid":"token-details-return-button",size:14})," Tokens"]}),(0,r.jsxs)(eO,{"data-testid":"token-info-container",children:[(0,r.jsxs)(eP,{children:[(0,r.jsx)(p.Z,{currency:y,size:"32px",hideL2Icon:!1}),(0,r.jsxs)(tq,{children:[y.name??(0,r.jsx)(d.cC,{id:"zKpHYG"}),(0,r.jsx)(tY,{children:y.symbol??(0,r.jsx)(d.cC,{id:"F2FJu3"})})]})]}),(0,r.jsx)(tX,{children:(0,r.jsx)(tb,{currency:y})})]}),(0,r.jsx)(e6,{tokenPriceQuery:a,onChangeTimePeriod:o}),(0,r.jsx)(eC,{chainId:f,address:x,TVL:m?.market?.totalValueLocked?.value,volume24H:m?.market?.volume24H?.value,priceHigh52W:m?.market?.priceHigh52W?.value,priceLow52W:m?.market?.priceLow52W?.value}),(0,r.jsx)(e_,{}),(0,r.jsx)(N,{address:x,chainId:f,description:m?.project?.description,homepageUrl:m?.project?.homepageUrl,twitterName:m?.project?.twitterName}),!y.isNative&&(0,r.jsx)(O,{address:x})]}):(0,r.jsx)(eX,{}),(0,r.jsxs)(eN,{onClick:()=>b&&P(!0),children:[(0,r.jsx)("div",{style:{pointerEvents:b?"none":"auto"},children:(0,r.jsx)(Q.HY,{chainId:f,prefilledState:{[tH.gN.INPUT]:{currencyId:t},[tH.gN.OUTPUT]:{currencyId:x===e8.W0?"ETH":x}},onCurrencyChange:S,disableTokenInputs:f!==u})}),j&&(0,r.jsx)(tP,{tokenAddress:x,warning:j}),y&&(0,r.jsx)(D,{token:y})]}),y&&(0,r.jsx)(to,{token:y}),(0,r.jsx)(tA.Z,{isOpen:$||!!I,tokenAddress:x,onContinue:()=>A(!0),onBlocked:()=>{P(!1)},onCancel:()=>A(!1),showCancel:!0})]})}):(0,r.jsx)(tK,{pageChainId:f,isInvalidAddress:!x})}var t0=n(79954),t1=n(42713),t2=n(38418),t3=n(41054);let t5=(0,e0.O4)("tokenDetailsTimePeriod",eJ.XH.DAY);function t4(){let{tokenAddress:e,chainName:t}=(0,el.UO)(),n=(0,eJ.Qj)(t),i=e===e8.W0,[a,o]=(0,t2.KO)(t5),[d,s]=(0,h.useMemo)(()=>[i?(0,t3.P)(n):e??"",(0,eJ.uw)(a)],[n,i,a,e]),l=(0,t1.Z)(),c=(0,h.useMemo)(()=>"string"==typeof l.inputCurrency?l.inputCurrency:void 0,[l]),{data:p}=(0,t0.rS)({variables:{address:d,chain:n},errorPolicy:"all"}),{data:x}=(0,t0.m)({variables:{address:d,chain:n,duration:s},errorPolicy:"all"}),[u,f]=(0,h.useState)(x);return((0,h.useEffect)(()=>{x&&f(x)},[f,x]),p)?(0,r.jsx)(tJ,{urlAddress:e,chain:n,tokenQuery:p,tokenPriceQuery:u,onChangeTimePeriod:o,inputTokenAddress:c}):(0,r.jsx)(eq,{})}}}]);
//# sourceMappingURL=8407.51c23164.chunk.js.map