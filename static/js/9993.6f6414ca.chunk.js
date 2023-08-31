"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9993],{21162:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var i,a,o,d,r=n(30575),s=n(20691),p=n(34999),l=n(38414),c=JSON.parse('[{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"},{"internalType":"uint256","name":"endTime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyClaimed","type":"error"},{"inputs":[],"name":"ClaimWindowFinished","type":"error"},{"inputs":[],"name":"EndTimeInPast","type":"error"},{"inputs":[],"name":"InvalidProof","type":"error"},{"inputs":[],"name":"NoWithdrawDuringClaim","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"isClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),u=n.p+"static/media/airdopBackground.7f54f314ceca6a012b57.png",m=n(88850),f=n(62329),h=n(25575),y=n(36665),x=n(5570),g=n(634);let w=async e=>{let t=`https://temp.api.uniswap.org/v1/nft/rewards/${e}?category=GENIE_UNISWAP_USDC_AIRDROP`,n=new AbortController,i=setTimeout(()=>n.abort(),3e3),a=await fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}});clearInterval(i);let o=await a.json();return o};(i=o||(o={})).LOOKS_RARE_NFT_COMMERCE_REWARDS="LOOKS_RARE_NFT_COMMERCE_REWARDS",i.GENIE_UNISWAP_USDC_AIRDROP="GENIE_UNISWAP_USDC_AIRDROP";var _=n(63505),b=n(50958),C=n(56564),A=n(13120),I=n(12058),T=n(43108),N=n(79371);let M=I.default.div.withConfig({displayName:"AirdropModal__ModalWrap",componentId:"sc-abdf66e8-0"})`
  display: flex;
  flex-direction: column;
`,R=I.default.div.withConfig({displayName:"AirdropModal__Body",componentId:"sc-abdf66e8-1"})`
  padding: 28px 20px 20px 20px;
`,j=(0,I.default)(m.UH).withConfig({displayName:"AirdropModal__ClaimButton",componentId:"sc-abdf66e8-2"})`
  width: 100%;
  background-color: ${({theme:e})=>e.accentAction};
  border-radius: 12px;
  color: ${({theme:e})=>e.white};
`,S=I.default.div.withConfig({displayName:"AirdropModal__Line",componentId:"sc-abdf66e8-3"})`
  height: 1px;
  width: 100%;
  background-color: ${({theme:e})=>e.white};
  opacity: 0.24;
  margin-top: 12px;
  margin-bottom: 12px;
`,k=I.default.a.withConfig({displayName:"AirdropModal__LinkWrap",componentId:"sc-abdf66e8-4"})`
  text-decoration: none;
  ${f.c}
`,v=I.default.div.withConfig({displayName:"AirdropModal__ImageContainer",componentId:"sc-abdf66e8-5"})`
  position: relative;
  width: 100%;
`,D=I.default.img.withConfig({displayName:"AirdropModal__StyledImage",componentId:"sc-abdf66e8-6"})`
  width: 100%;
  height: 170px;
`,E=I.default.div.withConfig({displayName:"AirdropModal__USDCLabel",componentId:"sc-abdf66e8-7"})`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  margin-top: 8px;
  color: white;
`,U=I.default.div.withConfig({displayName:"AirdropModal__TextContainer",componentId:"sc-abdf66e8-8"})`
  position: absolute;
  left: 16px;
  top: 16px;
  right: 16px;
`,O=I.default.div.withConfig({displayName:"AirdropModal__RewardsDetailsContainer",componentId:"sc-abdf66e8-9"})`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,P=I.default.span.withConfig({displayName:"AirdropModal__CurrencyText",componentId:"sc-abdf66e8-10"})`
  color: white;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.5px;
`,W=I.default.div.withConfig({displayName:"AirdropModal__ClaimContainer",componentId:"sc-abdf66e8-11"})`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 380px;
  padding: 60px 28px;
  padding-bottom: 20px;
`,L=I.default.div.withConfig({displayName:"AirdropModal__SuccessText",componentId:"sc-abdf66e8-12"})`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 8px;
`,$=I.default.a.withConfig({displayName:"AirdropModal__EtherscanLink",componentId:"sc-abdf66e8-13"})`
  text-decoration: none;

  ${f.c}
`,F=(0,I.default)(m.UH).withConfig({displayName:"AirdropModal__CloseButton",componentId:"sc-abdf66e8-14"})`
  max-width: 68px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
`,z=(0,I.default)(T.Tw).withConfig({displayName:"AirdropModal__SyledCloseIcon",componentId:"sc-abdf66e8-15"})`
  float: right;
  height: 24px;

  ${f.c}
`,G=I.default.div.withConfig({displayName:"AirdropModal__Error",componentId:"sc-abdf66e8-16"})`
  display: flex;
  color: ${({theme:e})=>e.accentCritical};
  font-weight: 500;
  line-height: 24px;
  border-radius: 16px;
  padding: 12px 20px;
  font-size: 14px;
  align-items: center;
  gap: 12px;
`,B=I.default.div.withConfig({displayName:"AirdropModal__ReactLinkWrap",componentId:"sc-abdf66e8-17"})`
  margin-bottom: 40px;
`,H=I.default.span.withConfig({displayName:"AirdropModal__RewardsText",componentId:"sc-abdf66e8-18"})`
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.white};

  &:first-child {
    margin-bottom: 8px;
  }
`,q=I.default.span.withConfig({displayName:"AirdropModal__RewardsInformationText",componentId:"sc-abdf66e8-19"})`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.textPrimary};
  margin-bottom: 28px;
`,Z=I.default.span.withConfig({displayName:"AirdropModal__MainHeader",componentId:"sc-abdf66e8-20"})`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.white};
`,K=I.default.div.withConfig({displayName:"AirdropModal__EtherscanLinkWrap",componentId:"sc-abdf66e8-21"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;(a=d||(d={}))[a.tradingRewardAmount=300]="tradingRewardAmount",a[a.holderRewardAmount=1e3]="holderRewardAmount",a[a.combinedAmount=1300]="combinedAmount";var J=()=>{let{account:e,provider:t}=(0,l.useWeb3React)(),[n,i]=(0,_.useState)(),[a,f]=(0,_.useState)(!1),[I,J]=(0,_.useState)(""),[X,Y]=(0,_.useState)(!1),Q=(0,g.k)(e=>e.setIsClaimAvailable),[V,ee]=(0,_.useState)(!1),[et,en]=(0,_.useState)(0),ei=(0,C.Wt)(A.Lk.UNISWAP_NFT_AIRDROP_CLAIM),ea=(0,C.xk)(A.Lk.UNISWAP_NFT_AIRDROP_CLAIM),eo=(0,y.cq)(p.UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS,c),ed=()=>{ee(!1),Y(!0),setTimeout(()=>{Y(!1)},5e3)};(0,_.useEffect)(()=>{e&&t&&eo&&(async()=>{try{let{data:n}=await w(e),a=n.find(e=>e?.rewardType===o.GENIE_UNISWAP_USDC_AIRDROP);if(!a)return;let[d]=await eo.connect(t).functions.isClaimed(a?.index);if(a&&!1===d){let e=s.O$.from(a.amount).div(1e6);i(a),en(e.toNumber()),Q(!0)}}catch(e){ed()}})()},[e,eo,t,Q]);let er=async()=>{try{if(eo&&n&&n.amount&&n.merkleProof&&t){ee(!0);let i=await eo.connect(t?.getSigner()).functions.claim(n.index,e,n?.amount,n?.merkleProof);await i.wait(),J(i.hash),ee(!1),f(!0),Q(!1)}}catch(e){ee(!1),ed()}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(N.Z,{hideBorder:!0,isOpen:ei,onDismiss:ea,maxHeight:90,maxWidth:400,children:(0,r.jsx)(M,{children:a?(0,r.jsxs)(W,{children:[(0,r.jsx)(T.Tv.HeadlineSmall,{children:"Congratulations!"}),(0,r.jsxs)(L,{children:["You have successfully claimed ",et," USDC. Thank you for supporting Genie.xyz."]}),(0,r.jsx)($,{href:`https://etherscan.io/tx/${I}`,target:"_blank",children:(0,r.jsx)(T.Tv.Link,{children:(0,r.jsxs)(K,{children:[(0,r.jsx)("span",{children:"Etherscan"}),(0,r.jsx)(x.XC,{})]})})}),(0,r.jsx)(F,{size:m.qE.medium,emphasis:m.eI.medium,onClick:ea,children:"Close"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v,{children:[(0,r.jsxs)(U,{children:[(0,r.jsx)(z,{onClick:ea,stroke:"white"}),(0,r.jsx)(Z,{children:"Uniswap NFT Airdrop"}),(0,r.jsxs)(E,{children:[et," USDC"]}),(0,r.jsx)(S,{}),(0,r.jsxs)(O,{children:[(0,r.jsx)(H,{children:"Trading rewards"})," ",(0,r.jsx)(P,{children:et===d.tradingRewardAmount||et===d.combinedAmount?`${d.tradingRewardAmount} USDC`:"0"})]}),(0,r.jsxs)(O,{children:[(0,r.jsx)(H,{children:"Genie NFT holder rewards"})," ",(0,r.jsx)(P,{children:et!==d.tradingRewardAmount?`${d.holderRewardAmount} USDC`:"0"})]})]}),(0,r.jsx)(D,{src:u})]}),(0,r.jsxs)(R,{children:[(0,r.jsxs)(q,{children:["As a long time supporter of Genie, you’ve been awarded ",et," USDC tokens."]}),(0,r.jsx)(B,{children:(0,r.jsx)(k,{href:"https://uniswap.org/blog/uniswap-nft-aggregator-announcement",target:"_blank",children:(0,r.jsx)(T.Tv.Link,{children:"Read more about Uniswap NFT."})})}),X&&(0,r.jsxs)(G,{children:[(0,r.jsx)(b.Z,{}),"Claim USDC failed. Please try again later"]}),(0,r.jsxs)(j,{onClick:er,size:m.qE.medium,emphasis:m.eI.medium,disabled:V,children:[V&&(0,r.jsx)(h.ZP,{stroke:"white"}),(0,r.jsxs)("span",{children:["Claim",V&&"ing"," USDC"]})]})]})]})})})})}}}]);
//# sourceMappingURL=9993.6f6414ca.chunk.js.map