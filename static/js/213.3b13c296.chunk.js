"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[213],{98947:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(30575),a=i(55102),s=i(12058),r=i(43108);let o=(0,s.default)(r.dL).withConfig({displayName:"Resource__ResourceLink",componentId:"sc-6427f1cf-0"})`
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
`;function d({name:e,link:t}){return(0,n.jsxs)(o,{href:t,children:[e,(0,n.jsx)("sup",{children:"↗"})]})}},39382:function(e,t,i){i.r(t),i.d(t,{default:function(){return tL}});var n,a,s=i(30575),r=i(94869),o=i(66196),d=i(45825),l=i(25599),c=i(99430),p=i(63505),x=i(79954);(0,l.ZP)`
  query Details($address: String!, $tokenId: String!) {
    nftAssets(address: $address, filter: { listed: false, tokenIds: [$tokenId] }) {
      edges {
        node {
          id
          name
          ownerAddress
          image {
            url
          }
          smallImage {
            url
          }
          originalImage {
            url
          }
          tokenId
          description
          animationUrl
          suspiciousFlag
          creator {
            address
            profileImage {
              url
            }
            isVerified
          }
          collection {
            name
            isVerified
            numAssets
            twitterName
            discordUrl
            homepageUrl
            image {
              url
            }
            nftContracts {
              address
              standard
            }
            description
          }
          listings(first: 1) {
            edges {
              node {
                address
                createdAt
                endAt
                id
                maker
                marketplace
                marketplaceUrl
                orderHash
                price {
                  currency
                  value
                }
                quantity
                startAt
                status
                taker
                tokenId
                type
                protocolParameters
              }
              cursor
            }
          }
          rarities {
            provider
            rank
            score
          }
          metadataUrl
          traits {
            name
            value
          }
        }
      }
    }
  }
`;var m=i(62329),h=i(98947),f=i(65647),g=i(35253),u=i(64709),y=i(17749),C=i(17669),w="_1cf9gnw1";let j=()=>(0,s.jsxs)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M17.8281 10.834C17.6159 9.88757 17.4333 9.13689 17.291 8.58997C17.1751 8.11971 16.9497 7.68339 16.6331 7.31649C16.2834 6.97574 15.8515 6.731 15.3791 6.60601C14.8206 6.43175 14.0365 6.24408 13.0457 6.04301C12.7771 5.98134 12.6321 5.83926 12.6321 5.61405C12.6286 5.56049 12.6369 5.50679 12.6564 5.45676C12.6758 5.40674 12.7061 5.36159 12.7449 5.32448C12.8303 5.25054 12.9343 5.20142 13.0457 5.18241C13.8337 5.03623 14.6127 4.84557 15.3791 4.61136C15.8508 4.48054 16.282 4.23345 16.6331 3.89283C16.9497 3.52593 17.1751 3.08961 17.291 2.61935C17.4468 2.06885 17.6258 1.32623 17.8281 0.39145C17.8791 0.123349 18.016 0 18.2416 0C18.4671 0 18.6095 0.131392 18.6739 0.39145C18.8726 1.32623 19.0516 2.06885 19.211 2.61935C19.3304 3.08988 19.5585 3.52599 19.8769 3.89283C20.229 4.23347 20.6611 4.48052 21.1336 4.61136C21.8997 4.84657 22.6788 5.03724 23.467 5.18241C23.576 5.18865 23.6782 5.23739 23.7515 5.31813C23.8249 5.39887 23.8635 5.50515 23.8591 5.61405C23.8591 5.83926 23.7275 5.98134 23.467 6.04301C22.6802 6.19136 21.9014 6.37926 21.1336 6.60601C20.6605 6.73103 20.2276 6.97574 19.8769 7.31649C19.5585 7.68333 19.3304 8.11943 19.211 8.58997C19.0472 9.12617 18.8672 9.88757 18.6739 10.834C18.6095 11.1021 18.4671 11.2281 18.2416 11.2281C18.016 11.2281 17.8737 11.0967 17.8281 10.834Z",fill:C.Z4.colors.textSecondary,className:w}),(0,s.jsx)("path",{d:"M32.4448 19.8364C32.2192 18.6679 32.0079 17.7366 31.8166 17.0452C31.6743 16.4509 31.3902 15.8999 30.9885 15.4396C30.5445 15.0113 29.9992 14.7027 29.4037 14.5425C28.4447 14.2629 27.4703 14.0397 26.4853 13.874C26.1398 13.8226 25.9656 13.6426 25.9656 13.3369C25.9618 13.2674 25.9723 13.1978 25.9964 13.1324C26.0204 13.0671 26.0576 13.0074 26.1055 12.9569C26.2105 12.8597 26.3433 12.7977 26.4853 12.7798C27.4694 12.6134 28.4437 12.3931 29.4037 12.1198C30.0021 11.9667 30.549 11.6571 30.9885 11.2228C31.389 10.7583 31.6729 10.2049 31.8166 9.60859C32.0079 8.91721 32.2192 7.98584 32.4448 6.81449C32.4458 6.74608 32.4607 6.67858 32.4886 6.61609C32.5164 6.5536 32.5567 6.49743 32.6068 6.45096C32.657 6.40448 32.7161 6.3687 32.7806 6.34574C32.845 6.32278 32.9134 6.31313 32.9816 6.31739C33.2672 6.31739 33.4528 6.48309 33.5213 6.81449C33.7479 7.98584 33.9573 8.91721 34.1495 9.60859C34.2907 10.2036 34.5706 10.7567 34.9662 11.2228C35.404 11.6593 35.9516 11.9693 36.551 12.1198C37.515 12.3926 38.493 12.6129 39.4808 12.7798C39.5532 12.7803 39.6248 12.7958 39.6909 12.8254C39.757 12.855 39.8162 12.8981 39.8648 12.9518C39.9134 13.0055 39.9503 13.0687 39.9732 13.1375C39.9961 13.2063 40.0044 13.279 39.9977 13.3512C39.9977 13.6569 39.8263 13.8369 39.4808 13.8883C38.4922 14.0545 37.514 14.2778 36.551 14.5568C35.9543 14.7142 35.4084 15.0232 34.9662 15.4539C34.5695 15.916 34.2894 16.4666 34.1495 17.0595C33.9592 17.7509 33.7498 18.6813 33.5213 19.8507C33.4528 20.185 33.2758 20.3507 32.9816 20.3507C32.912 20.3546 32.8424 20.3442 32.777 20.32C32.7116 20.2958 32.6519 20.2585 32.6015 20.2103C32.5512 20.1621 32.5113 20.104 32.4843 20.0396C32.4573 19.9753 32.4439 19.9062 32.4448 19.8364Z",fill:C.Z4.colors.textSecondary,className:w}),(0,s.jsx)("path",{d:"M12.6196 40.6995C12.5109 40.7023 12.4027 40.6829 12.3013 40.6422C12.2 40.6016 12.1075 40.5405 12.0294 40.4627C11.8673 40.3009 11.7574 40.0919 11.7145 39.8639C11.418 38.0492 11.1251 36.5322 10.8358 35.3128C10.6133 34.2663 10.2461 33.258 9.74531 32.3187C9.32818 31.5649 8.73049 30.9334 8.00907 30.4841C7.132 29.9745 6.18128 29.6124 5.19297 29.4117C4.03371 29.1449 2.58684 28.8918 0.852359 28.6523C0.616735 28.6254 0.397657 28.5147 0.23303 28.3393C0.0804808 28.1721 -0.00302245 27.9506 0.000117795 27.7214C-0.00358202 27.4921 0.0799998 27.2703 0.23303 27.1035C0.396979 26.9271 0.616416 26.8162 0.852359 26.7905C2.5886 26.5618 4.03812 26.3114 5.20091 26.0392C6.20136 25.8286 7.16449 25.4614 8.05671 24.9505C8.7902 24.5064 9.40286 23.8792 9.83794 23.1268C10.3473 22.1993 10.7151 21.1968 10.9284 20.1545C11.2054 18.9369 11.4701 17.4162 11.7224 15.5925C11.7547 15.3608 11.8619 15.147 12.0268 14.9855C12.1058 14.9052 12.1997 14.8418 12.3028 14.7993C12.406 14.7567 12.5164 14.7359 12.6276 14.7378C12.7392 14.7338 12.8506 14.7526 12.9551 14.7933C13.0596 14.834 13.1552 14.8956 13.2363 14.9747C13.398 15.1367 13.5079 15.3456 13.5513 15.5735C13.8583 17.3972 14.1565 18.9178 14.4459 20.1354C14.6712 21.1811 15.0382 22.189 15.5363 23.1295C15.9558 23.8807 16.5531 24.5108 17.2726 24.9614C18.1474 25.4733 19.095 25.8407 20.0807 26.0501C21.2347 26.3223 22.6789 26.5727 24.4134 26.8014C24.6493 26.8271 24.8688 26.938 25.0327 27.1144C25.185 27.2815 25.2677 27.5033 25.263 27.7323C25.2662 27.9634 25.1839 28.1872 25.0327 28.3583C24.8722 28.5382 24.6503 28.6474 24.4134 28.6632C22.9509 28.7659 21.4954 28.9559 20.0542 29.232C19.046 29.4136 18.075 29.7698 17.1826 30.2854C16.4365 30.7497 15.8216 31.4065 15.3987 32.1908C14.8949 33.1535 14.531 34.187 14.3188 35.2584C14.04 36.5068 13.7842 38.0429 13.5513 39.8666C13.5238 40.1013 13.4192 40.3193 13.2548 40.4845C13.1681 40.5618 13.0673 40.6207 12.9583 40.6576C12.8492 40.6945 12.7341 40.7087 12.6196 40.6995Z",fill:C.Z4.colors.textSecondary,className:w})]});var _=i(38414),v=i(48571),b=i(5570),I=i(79131),A=i(39401),N=i(21312),k=i.n(N);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var D=(0,p.forwardRef)(function(e,t){var i=e.color,n=e.size,a=void 0===n?24:n,s=function(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}(e,["color","size"]);return p.createElement("svg",$({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),p.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),p.createElement("polyline",{points:"17 8 12 3 7 8"}),p.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"15"}))});D.propTypes={color:k().string,size:k().oneOfType([k().string,k().number])},D.displayName="Upload";var S=i(34822),P=i(11001),T=i(27591),H=i(12058),L=i(43108),z=i(83777);let U=(0,H.css)`
  :hover::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.stateOverlayHover};
    z-index: 0;
  }

  :active::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.stateOverlayPressed};
    z-index: 0;
  }
`,O=H.default.div.withConfig({displayName:"AssetPriceDetails__Container",componentId:"sc-54829502-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: calc(960px + 1px)) {
    position: fixed;
    width: 360px;
    margin-top: 20px;
  }
`,B=H.default.div.withConfig({displayName:"AssetPriceDetails__BestPriceContainer",componentId:"sc-54829502-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background-color: ${({theme:e})=>e.backgroundSurface};
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-radius: 16px;
`,E=H.default.div.withConfig({displayName:"AssetPriceDetails__HeaderRow",componentId:"sc-54829502-2"})`
  display: flex;
  justify-content: space-between;
`,Z=H.default.div.withConfig({displayName:"AssetPriceDetails__PriceRow",componentId:"sc-54829502-3"})`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`,M=H.default.div.withConfig({displayName:"AssetPriceDetails__BuyNowButton",componentId:"sc-54829502-4"})`
  position: relative;
  width: 100%;
  background-color: ${({theme:e,assetInBag:t,useAccentColor:i})=>t?e.accentFailure:i?e.accentAction:e.backgroundInteractive};
  border-radius: 12px;
  padding: 10px 12px;
  margin-top: ${({margin:e})=>e?"12px":"0px"};
  text-align: center;
  cursor: pointer;

  ${U}
`,F=H.default.div.withConfig({displayName:"AssetPriceDetails__BuyNowButtonContainer",componentId:"sc-54829502-5"})`
  position: relative;
`,R=(0,H.default)(L.Tv.BodySecondary).withConfig({displayName:"AssetPriceDetails__Tertiary",componentId:"sc-54829502-6"})`
  color: ${({theme:e})=>e.textTertiary};
`,V=H.default.a.withConfig({displayName:"AssetPriceDetails__UploadLink",componentId:"sc-54829502-7"})`
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;

  ${m.c}
`,X=H.default.div.withConfig({displayName:"AssetPriceDetails__NotForSaleContainer",componentId:"sc-54829502-8"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 48px 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,G=H.default.div.withConfig({displayName:"AssetPriceDetails__DiscoveryContainer",componentId:"sc-54829502-9"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,W=H.default.a.withConfig({displayName:"AssetPriceDetails__OwnerText",componentId:"sc-54829502-10"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${({theme:e})=>e.textSecondary};
  text-decoration: none;

  ${m.c}
`,Y=H.default.div.withConfig({displayName:"AssetPriceDetails__OwnerInformationContainer",componentId:"sc-54829502-11"})`
  color: ${({theme:e})=>e.textSecondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8px;
`,Q=H.default.div.withConfig({displayName:"AssetPriceDetails__AssetInfoContainer",componentId:"sc-54829502-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,q=H.default.div.withConfig({displayName:"AssetPriceDetails__AssetHeader",componentId:"sc-54829502-13"})`
  display: -webkit-box;
  align-items: center;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.textPrimary};
`,J=H.default.div.withConfig({displayName:"AssetPriceDetails__CollectionNameContainer",componentId:"sc-54829502-14"})`
  display: flex;
  justify-content: space-between;
`,K=H.default.span.withConfig({displayName:"AssetPriceDetails__CollectionHeader",componentId:"sc-54829502-15"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({theme:e})=>e.textPrimary};
  text-decoration: none;
  ${m.c};
`,ee=H.default.span.withConfig({displayName:"AssetPriceDetails__VerifiedIconContainer",componentId:"sc-54829502-16"})`
  position: relative;
`,et=(0,H.default)(b.SA).withConfig({displayName:"AssetPriceDetails__StyledVerifiedIcon",componentId:"sc-54829502-17"})`
  position: absolute;
  top: 0px;
`,ei=(0,H.default)(P.rU).withConfig({displayName:"AssetPriceDetails__DefaultLink",componentId:"sc-54829502-18"})`
  text-decoration: none;
`,en=(0,H.default)(L.dL).withConfig({displayName:"AssetPriceDetails__MarketplaceIcon",componentId:"sc-54829502-19"})`
  display: flex;
  align-items: center;
`,ea=({asset:e})=>{let t=(0,T.s0)(),{data:i}=(0,S.useQuery)(["fetchPrice",{}],()=>(0,c.tw)(),{}),n=(0,I.aO)(e=>e.setProfilePageState),a=(0,I.Pc)(e=>e.selectSellAsset),d=(0,I.Pc)(e=>e.reset),l=e.sellOrders&&e.sellOrders.length>0?e.sellOrders[0]:void 0,x=l?.endAt?new Date(l.endAt):void 0,m=(0,p.useMemo)(()=>i&&e.floor_sell_order_price?i*e.floor_sell_order_price:void 0,[i,e.floor_sell_order_price]),h=(0,o.oO)(),f=()=>{d(),t("/nfts/profile"),a(e),(0,o._P)(r.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...h}),n(A.HA.LISTING)};return(0,s.jsxs)(B,{children:[(0,s.jsxs)(E,{children:[(0,s.jsx)(L.Tv.SubHeader,{color:"accentAction",children:l?"Your Price":"List for Sale"}),l&&(0,s.jsx)(en,{href:l.marketplaceUrl,children:(0,c.Dp)(l.marketplace,"20")})]}),(0,s.jsx)(Z,{children:l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(L.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[(0,c.IA)(e.priceInfo?.ETHPrice)," ETH"]}),m&&(0,s.jsx)(L.Tv.BodySecondary,{lineHeight:"24px",children:(0,c.Nd)(m,!0,!0)})]}):(0,s.jsx)(L.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Get the best price for your NFT by selling with Uniswap."})}),x&&(0,s.jsxs)(L.Tv.BodySecondary,{fontSize:"14px",children:["Sale ends: ",(0,c.zO)(x)]}),l?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(M,{assetInBag:!1,margin:!0,useAccentColor:!1,onClick:f,children:(0,s.jsx)(L.Tv.SubHeader,{lineHeight:"20px",children:"Adjust listing"})})}):(0,s.jsx)(M,{assetInBag:!1,margin:!0,useAccentColor:!0,onClick:f,children:(0,s.jsx)(L.Tv.SubHeader,{lineHeight:"20px",color:"white",children:"List"})})]})},es=(0,H.default)(P.rU).withConfig({displayName:"AssetPriceDetails__StyledLink",componentId:"sc-54829502-20"})`
  text-decoration: none;
  ${m.c}
`,er=({collectionName:e,collectionUrl:t})=>{let i=(0,H.useTheme)();return(0,s.jsx)(B,{children:(0,s.jsxs)(X,{children:[(0,s.jsx)(b.Io,{width:"79px",height:"79px",color:i.textTertiary}),(0,s.jsx)(L.Tv.SubHeader,{children:"Not for sale"}),(0,s.jsxs)(G,{children:[(0,s.jsx)(L.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Discover similar NFTs for sale in"}),(0,s.jsx)(es,{to:`/nfts/collection/${t}`,children:(0,s.jsx)(L.Tv.Link,{lineHeight:"20px",children:e})})]})]})})},eo=({asset:e,collection:t})=>{let{account:i}=(0,_.useWeb3React)(),n=e.sellorders&&e.sellorders.length>0?e.sellorders[0]:void 0,a=n?.endAt?new Date(n.endAt):void 0,r=(0,I.cP)(e=>e.itemsInBag),o=(0,I.cP)(e=>e.addAssetsToBag),d=(0,I.cP)(e=>e.removeAssetsFromBag),l=(0,I.cP)(e=>e.toggleBag),x=(0,I.cP)(e=>e.bagExpanded),m=(0,c.Kz)(e),h=[{address:e.address,tokenId:e.tokenId}],{walletAssets:f}=(0,v.b)(i??"",[],h,1),g=(0,p.useMemo)(()=>f?.[0],[f]),{assetInBag:u}=(0,p.useMemo)(()=>({assetInBag:r.some(t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)}),[e,r]),y=e.ownerAddress&&!!g&&i?.toLowerCase()===e.ownerAddress?.toLowerCase(),C=n&&e.priceInfo;return(0,s.jsxs)(O,{children:[(0,s.jsxs)(Q,{children:[(0,s.jsxs)(J,{children:[(0,s.jsx)(ei,{to:`/nfts/collection/${e.address}`,children:(0,s.jsxs)(K,{children:[t.collectionName,(0,s.jsx)(ee,{children:t.isVerified&&(0,s.jsx)(et,{})})]})}),(0,s.jsx)(V,{onClick:()=>{window.open((0,c.Lr)(e),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,s.jsx)(D,{size:20,strokeWidth:2})})]}),(0,s.jsx)(q,{children:e.name??`${e.collectionName} #${e.tokenId}`})]}),y?(0,s.jsx)(ea,{asset:g}):C?(0,s.jsxs)(B,{children:[(0,s.jsxs)(E,{children:[(0,s.jsx)(L.Tv.SubHeader,{color:"accentAction",children:"Best Price"}),(0,s.jsx)(en,{href:n.marketplaceUrl,children:(0,c.Dp)(n.marketplace,"20")})]}),(0,s.jsxs)(Z,{children:[(0,s.jsxs)(L.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[(0,c.IA)(e.priceInfo.ETHPrice)," ETH"]}),m&&(0,s.jsx)(L.Tv.BodySecondary,{lineHeight:"24px",children:(0,c.Nd)(m,!0,!0)})]}),a&&a>new Date&&(0,s.jsxs)(R,{fontSize:"14px",children:["Sale ends: ",(0,c.zO)(a)]}),(0,s.jsx)("div",{children:(0,s.jsx)(F,{children:(0,s.jsx)(M,{assetInBag:u,margin:!0,useAccentColor:!0,onClick:()=>{u?d([e]):o([e]),u||x||l()},children:(0,s.jsx)(L.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,s.jsx)("span",{"data-testid":"nft-details-toggle-bag",children:u?"Remove":"Add to Bag"})})})})})]}):(0,s.jsx)(er,{collectionName:t.collectionName??"this collection",collectionUrl:e.address}),C&&(0,s.jsxs)(Y,{children:["ERC1155"!==e.tokenType&&e.ownerAddress&&(0,s.jsx)(L.Tv.BodySmall,{color:"textSecondary",lineHeight:"20px",children:"Seller:"}),(0,s.jsx)(W,{target:"_blank",href:`https://etherscan.io/address/${e.ownerAddress}`,rel:"noopener noreferrer",children:"ERC1155"===e.tokenType?"":(0,s.jsxs)("span",{children:[" ",y?"You":e.ownerAddress&&(0,z.X)(e.ownerAddress,2)]})})]})]})};var ed=i(2994),el=i(39472),ec=i(17380),ep=i(60858),ex=i(5051),em=i(69518),eh=i(78174),ef=i(45938),eg=i(80343),eu=i(61984),ey=i(3406);let eC=H.default.tr.withConfig({displayName:"AssetActivity__TR",componentId:"sc-8f4197cc-0"})`
  border-bottom: ${({theme:e})=>`1px solid ${e.backgroundOutline}`};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`,ew=H.default.th.withConfig({displayName:"AssetActivity__TH",componentId:"sc-8f4197cc-1"})`
  color: ${({theme:e})=>e.textSecondary};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,ej=H.default.table.withConfig({displayName:"AssetActivity__Table",componentId:"sc-8f4197cc-2"})`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
`,e_=H.default.td.withConfig({displayName:"AssetActivity__TD",componentId:"sc-8f4197cc-3"})`
  height: 56px;
  padding: 8px 0px;
  text-align: left;
  vertical-align: middle;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,ev=H.default.div.withConfig({displayName:"AssetActivity__PriceContainer",componentId:"sc-8f4197cc-4"})`
  align-items: center;
  display: flex;
  gap: 8px;
`,eb=H.default.a.withConfig({displayName:"AssetActivity__Link",componentId:"sc-8f4197cc-5"})`
  color: ${({theme:e})=>e.textPrimary};
  text-decoration: none;

  ${m.c}
`,eI=H.default.div.withConfig({displayName:"AssetActivity__ActivityContainer",componentId:"sc-8f4197cc-6"})`
  max-height: 310px;
  overflow: auto;

  ${m.Z}
`,eA=(0,H.default)(eg.X).withConfig({displayName:"AssetActivity__LoadingCell",componentId:"sc-8f4197cc-7"})`
  height: 20px;
  width: 80px;
`,eN=({children:e})=>(0,s.jsx)(eI,{id:"activityContainer",children:(0,s.jsxs)(ej,{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)(eC,{children:[(0,s.jsx)(ew,{children:(0,s.jsx)(ef.cC,{id:"0pC/y6"})}),(0,s.jsx)(ew,{children:(0,s.jsx)(ef.cC,{id:"a7u1N9"})}),(0,s.jsx)(ew,{children:(0,s.jsx)(ef.cC,{id:"g+0MOn"})}),(0,s.jsx)(ew,{children:(0,s.jsx)(ef.cC,{id:"/jQctM"})}),(0,s.jsx)(ew,{children:(0,s.jsx)(ef.cC,{id:"LhMjLm"})})]})}),(0,s.jsx)("tbody",{children:e})]})}),ek=({cellCount:e})=>(0,s.jsx)(eC,{children:Array(e).fill(null).map((e,t)=>(0,s.jsx)(e_,{children:(0,s.jsx)(eA,{})},t))}),e$=({rowCount:e})=>(0,s.jsx)(eN,{children:Array(e).fill(null).map((e,t)=>(0,s.jsx)(ek,{cellCount:5},t))});var eD=({events:e})=>(0,s.jsx)(eN,{children:e&&e.map((e,t)=>{let{eventTimestamp:i,eventType:n,fromAddress:a,marketplace:r,price:o,toAddress:d,transactionHash:l}=e,p=o?(0,el.GA)(parseFloat(o??"")):null;return n?(0,s.jsxs)(eC,{children:[(0,s.jsx)(e_,{children:(0,s.jsx)(eu.VM,{eventType:n,eventTimestamp:i,eventTransactionHash:l,eventOnly:!0})}),(0,s.jsx)(e_,{children:p&&(0,s.jsxs)(ev,{children:[r&&(0,c.Dp)(r,"16"),p," ETH"]})}),(0,s.jsx)(e_,{children:a&&(0,s.jsx)(eb,{href:`https://etherscan.io/address/${a}`,target:"_blank",rel:"noopener noreferrer",children:(0,z.X)(a,2)})}),(0,s.jsx)(e_,{children:d&&(0,s.jsx)(eb,{href:`https://etherscan.io/address/${d}`,target:"_blank",rel:"noopener noreferrer",children:(0,z.X)(d,2)})}),(0,s.jsx)(e_,{children:i&&(0,ey.F)(i.toString())})]},t):null})});i(74602),i(46728);var eS="_1yohfdw1 rgw6ez7bv rgw6ez1dv rgw6ez4p",eP=i(38641),eT=i(28285);let eH=H.default.div.withConfig({displayName:"DetailsContainer__Details",componentId:"sc-a3772d9f-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`,eL=H.default.div.withConfig({displayName:"DetailsContainer__Header",componentId:"sc-a3772d9f-1"})`
  color: ${({theme:e})=>e.textSecondary};
  font-size: 14px;
  line-height: 20px;
`,ez=H.default.div.withConfig({displayName:"DetailsContainer__Body",componentId:"sc-a3772d9f-2"})`
  color: ${({theme:e})=>e.textPrimary};
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`,eU=H.default.span.withConfig({displayName:"DetailsContainer__Center",componentId:"sc-a3772d9f-3"})`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;

  ${m.c}
`,eO=H.default.a.withConfig({displayName:"DetailsContainer__CreatorLink",componentId:"sc-a3772d9f-4"})`
  color: ${({theme:e})=>e.textPrimary};
  text-decoration: none;

  ${m.c}
`,eB=(0,H.default)(eT.Z).withConfig({displayName:"DetailsContainer__CopyIcon",componentId:"sc-a3772d9f-5"})`
  cursor: pointer;
`,eE=({header:e,body:t})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(eL,{children:e}),(0,s.jsx)(ez,{children:t})]}),eZ=e=>`${e.substring(0,4)}...${e.substring(e.length-4,e.length)}`;var eM=({asset:e,collection:t})=>{let{address:i,tokenId:n,tokenType:a,creator:r}=e,{totalSupply:o}=t,[,d]=(0,eP.Z)(),l=(0,p.useCallback)(()=>{d(i??"")},[i,d]);return(0,s.jsxs)(eH,{children:[(0,s.jsx)(eE,{header:"Contract address",body:(0,s.jsxs)(eU,{onClick:l,children:[(0,z.X)(i,2)," ",(0,s.jsx)(eB,{size:13})]})}),(0,s.jsx)(eE,{header:"Token ID",body:n.length>9?eZ(n):n}),(0,s.jsx)(eE,{header:"Token standard",body:a}),(0,s.jsx)(eE,{header:"Blockchain",body:"Ethereum"}),(0,s.jsx)(eE,{header:"Total supply",body:`${(0,c.Ux)(o??0)}`}),(0,s.jsx)(eE,{header:"Creator",body:r?.address&&(0,s.jsx)(eO,{href:`https://etherscan.io/address/${r.address}`,rel:"noopener noreferrer",target:"_blank",children:(0,z.X)(r.address,2)})})]})},eF=i(86532),eR=i(59801);let eV=H.default.div.withConfig({displayName:"InfoContainer__Header",componentId:"sc-36739395-0"})`
  display: flex;
  border-radius: ${({isOpen:e})=>e?"16px 16px 0px 0px":"16px"};
  justify-content: space-between;
  background-color: ${({theme:e})=>e.backgroundSurface};
  padding: 14px 20px;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  margin-top: 28px;
  width: 100%;
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.stateOverlayHover};
  }

  &:active {
    background-color: ${({theme:e})=>e.stateOverlayPressed};
  }

  transition: ${({theme:{transition:{duration:e,timing:t}}})=>(0,H.css)`background-color ${e.medium} ${t.ease}`};
`,eX=H.default.span.withConfig({displayName:"InfoContainer__PrimaryHeader",componentId:"sc-36739395-1"})`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({theme:e})=>e.textPrimary};
  font-weight: 500;
  line-height: 28px;
  font-size: 20px;
`,eG=H.default.span.withConfig({displayName:"InfoContainer__SecondaryHeader",componentId:"sc-36739395-2"})`
  font-size: 12px;
  color: ${({theme:e})=>e.textSecondary};
`,eW=H.default.span.withConfig({displayName:"InfoContainer__SecondaryHeaderContainer",componentId:"sc-36739395-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: ${({theme:e})=>e.textPrimary};
`,eY=H.default.div.withConfig({displayName:"InfoContainer__ContentContainer",componentId:"sc-36739395-4"})`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-top: none;
  border-radius: 0px 0px 16px 16px;
  background-color: ${({theme:e})=>e.backgroundSurface};
`;var eQ=({children:e,primaryHeader:t,secondaryHeader:i,defaultOpen:n,...a})=>{let[r,o]=(0,p.useState)(!!n);return(0,s.jsxs)("div",{children:[(0,s.jsxs)(eV,{...a,isOpen:r,onClick:()=>o(!r),children:[(0,s.jsxs)(eX,{children:[t," ",(0,s.jsx)(eG,{children:i})]}),(0,s.jsx)(eW,{children:r?(0,s.jsx)(eF.Z,{}):(0,s.jsx)(eR.Z,{})})]}),r&&(0,s.jsx)(eY,{children:e})]})},eq=i(93343);let eJ=H.default.div.withConfig({displayName:"TraitsContainer__Grid",componentId:"sc-6d624bb5-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  max-width: 780px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }
`,eK=(0,H.default)(P.rU).withConfig({displayName:"TraitsContainer__GridItemContainer",componentId:"sc-6d624bb5-1"})`
  background-color: ${({theme:e})=>e.backgroundInteractive};
  border-radius: 12px;
  cursor: pointer;
  padding: 12px;
  text-decoration: none;

  ${m.c}
  min-width: 0;
`,e0=H.default.div.withConfig({displayName:"TraitsContainer__TraitType",componentId:"sc-6d624bb5-2"})`
  color: ${({theme:e})=>e.textSecondary};
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  white-space: nowrap;
  width: 100%;
`,e1=H.default.div.withConfig({displayName:"TraitsContainer__TraitValue",componentId:"sc-6d624bb5-3"})`
  color: ${({theme:e})=>e.textPrimary};
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  display: inline-block;

  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,e2=({trait:e,collectionAddress:t})=>{let{trait_type:i,trait_value:n}=e,a=eq.stringify({traits:[`("${i}","${n}")`]},{arrayFormat:"comma"});return(0,s.jsxs)(eK,{to:`/nfts/collection/${t}?${a}`,children:[(0,s.jsx)(e0,{children:i}),(0,s.jsx)(e1,{children:n})]})};var e3=({asset:e})=>{let t=(0,p.useMemo)(()=>e.traits?.sort((e,t)=>e.trait_type.localeCompare(t.trait_type)),[e]);return(0,s.jsx)(eJ,{children:t?.map(t=>s.jsx(e2,{trait:t,collectionAddress:e.address},t.trait_type))})};let e4=H.default.div.withConfig({displayName:"AssetDetails__AssetPriceDetailsContainer",componentId:"sc-841605cd-0"})`
  margin-top: 20px;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`,e5=H.default.div.withConfig({displayName:"AssetDetails__MediaContainer",componentId:"sc-841605cd-1"})`
  display: flex;
  justify-content: center;
`,e6=H.default.div.withConfig({displayName:"AssetDetails__Column",componentId:"sc-841605cd-2"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 780px;
`,e8=H.default.a.withConfig({displayName:"AssetDetails__AddressTextLink",componentId:"sc-841605cd-3"})`
  display: inline-block;
  color: ${({theme:e})=>e.textSecondary};
  text-decoration: none;
  max-width: 100%;
  word-wrap: break-word;
  ${m.c};
`,e9=H.default.div.withConfig({displayName:"AssetDetails__SocialsContainer",componentId:"sc-841605cd-4"})`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`,e7=H.default.div.withConfig({displayName:"AssetDetails__DescriptionText",componentId:"sc-841605cd-5"})`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
`,te=H.default.span.withConfig({displayName:"AssetDetails__RarityWrap",componentId:"sc-841605cd-6"})`
  display: flex;
  color: ${({theme:e})=>e.textSecondary};
  padding: 2px 4px;
  border-radius: 4px;
  align-items: center;
  gap: 4px;
`,tt=H.default.div.withConfig({displayName:"AssetDetails__EmptyActivitiesContainer",componentId:"sc-841605cd-7"})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 28px;
  line-height: 36px;
  padding: 56px 0px;
`,ti=(0,H.default)(P.rU).withConfig({displayName:"AssetDetails__Link",componentId:"sc-841605cd-8"})`
  color: ${({theme:e})=>e.accentAction};
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  margin-top: 12px;
  cursor: pointer;
  ${m.c};
`,tn=H.default.div.withConfig({displayName:"AssetDetails__ActivitySelectContainer",componentId:"sc-841605cd-9"})`
  display: flex;
  gap: 8px;
  margin-bottom: 34px;
  overflow-x: auto;
  ${m.Z}

  @media (max-width: 720px) {
    padding-bottom: 8px;
  }
`,ta=H.default.div.withConfig({displayName:"AssetDetails__ContentNotAvailable",componentId:"sc-841605cd-10"})`
  display: flex;
  background-color: ${({theme:e})=>e.backgroundSurface};
  color: ${({theme:e})=>e.textSecondary};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 450px;
  height: 450px;
`,ts=H.default.div.withConfig({displayName:"AssetDetails__FilterBox",componentId:"sc-841605cd-11"})`
  box-sizing: border-box;
  background-color: ${({backgroundColor:e})=>e};
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  color: ${({theme:e})=>e.textPrimary};
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  ${m.c};
`,tr=H.default.span.withConfig({displayName:"AssetDetails__ByText",componentId:"sc-841605cd-12"})`
  font-size: 14px;
  line-height: 20px;
`,to=H.default.img.withConfig({displayName:"AssetDetails__Img",componentId:"sc-841605cd-13"})`
  background-color: white;
`,td=H.default.div.withConfig({displayName:"AssetDetails__HoverImageContainer",componentId:"sc-841605cd-14"})`
  display: flex;
  margin-right: 4px;
`,tl=H.default.div.withConfig({displayName:"AssetDetails__HoverContainer",componentId:"sc-841605cd-15"})`
  display: flex;
`,tc=H.default.span.withConfig({displayName:"AssetDetails__ContainerText",componentId:"sc-841605cd-16"})`
  font-size: 14px;
`,tp=({imageUrl:e,animationUrl:t,name:i,collectionName:n,dominantColor:a})=>(0,s.jsxs)(u.n,{position:"relative",display:"inline-block",alignSelf:"center",children:[(0,s.jsx)(u.n,{as:"audio",className:"_1yohfdwd",width:"292",controls:!0,src:t}),(0,s.jsx)("img",{className:eS,src:e,alt:i||n,style:{"--shadow":`rgba(${a.join(", ")}, 0.5)`,minWidth:"300px",minHeight:"300px"}})]}),tx={[A.n$.Listing]:!0,[A.n$.Sale]:!0,[A.n$.Transfer]:!1,[A.n$.CancelListing]:!1};(n=a||(a={})).Audio="audio",n.Video="video",n.Image="image",n.Embed="embed";let tm=({mediaType:e,asset:t,dominantColor:i})=>{let n={"--shadow":`rgba(${i.join(", ")}, 0.5)`};switch(e){case a.Video:return(0,s.jsx)("video",{src:t.animationUrl,className:eS,autoPlay:!0,controls:!0,muted:!0,loop:!0,style:n});case a.Image:return(0,s.jsx)("img",{className:eS,src:t.imageUrl,alt:t.name||t.collectionName,style:n});case a.Audio:return(0,s.jsx)(tp,{...t,dominantColor:i});case a.Embed:return(0,s.jsx)("div",{className:"_1yohfdw2",children:(0,s.jsx)("iframe",{title:t.name??`${t.collectionName} #${t.tokenId}`,src:t.animationUrl,className:"_1yohfdw3 _1yohfdw1 rgw6ez7bv rgw6ez1dv rgw6ez4p",style:n,frameBorder:0,height:"100%",width:"100%",sandbox:"allow-scripts",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},th=({asset:e,collection:t})=>{let[i]=(0,p.useState)([0,0,0]),{rarityProvider:n}=(0,p.useMemo)(()=>e.rarity?{rarityProvider:e?.rarity?.providers?.find(({provider:t})=>t===e.rarity?.primaryProvider)}:{},[e.rarity]),r=(0,p.useMemo)(()=>(0,ec.F)(e.animationUrl??"")?a.Audio:(0,ep.W)(e.animationUrl??"")?a.Video:e.animationUrl?a.Embed:a.Image,[e]),{address:o,tokenId:d}=e,{nftActivity:l}=(0,g.m)({activityTypes:[x.y3.Sale],address:o,tokenId:d},1,"no-cache"),c=l?.[0]?.price,m=c?(0,el.GA)(parseFloat(c)):void 0,[u,w]=(0,p.useReducer)(y.YQ,tx),_=(0,p.useCallback)(function({eventType:e}){let t=u[e],i=(0,eh.Gv)();return(0,s.jsx)(ts,{backgroundColor:t?i?C.gR.color.gray500:C.gR.color.gray200:C.Z4.colors.backgroundInteractive,onClick:()=>w({eventType:e}),children:e===A.n$.CancelListing?"Cancellations":e.charAt(0)+e.slice(1).toLowerCase()+"s"})},[u]),{nftActivity:v,hasNext:b,loadMore:I,loading:N,error:k}=(0,g.m)({activityTypes:Object.keys(u).map(e=>e).filter(e=>u[e]),address:o,tokenId:d},25),$=e?.rarity?.providers?.[0],[D,S]=(0,p.useState)(!1);return(0,s.jsxs)(e6,{children:[(0,s.jsx)(e5,{children:void 0===e.imageUrl||D?(0,s.jsx)(ta,{children:"Content not available yet"}):r===a.Image?(0,s.jsx)(to,{className:eS,src:e.imageUrl,alt:e.name||t.collectionName,onError:()=>S(!0)}):(0,s.jsx)(tm,{asset:e,mediaType:r,dominantColor:i})}),(0,s.jsx)(e4,{children:(0,s.jsx)(eo,{asset:e,collection:t})}),e.traits&&(0,s.jsx)(eQ,{"data-testid":"nft-details-traits",primaryHeader:"Traits",defaultOpen:!0,secondaryHeader:n&&$&&$.score?(0,s.jsx)(f.ud,{text:(0,s.jsxs)(tl,{children:[(0,s.jsx)(td,{children:(0,s.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,s.jsx)(tc,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,s.jsxs)(te,{children:["Rarity: ",(0,ex.U)($.score)]})}):null,children:(0,s.jsx)(e3,{asset:e})}),(0,s.jsx)(eQ,{primaryHeader:"Activity",defaultOpen:!0,secondaryHeader:m?`Last Sale: ${m} ETH`:void 0,"data-testid":"nft-details-activity",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(tn,{$isHorizontalScroll:!0,children:[(0,s.jsx)(_,{eventType:A.n$.Listing}),(0,s.jsx)(_,{eventType:A.n$.Sale}),(0,s.jsx)(_,{eventType:A.n$.Transfer}),(0,s.jsx)(_,{eventType:A.n$.CancelListing})]}),N?(0,s.jsx)(e$,{rowCount:10}):v&&v.length>0?(0,s.jsx)(em.Z,{next:I,hasMore:!!b,loader:N&&(0,s.jsx)(ed.M5,{children:(0,s.jsx)(j,{})}),dataLength:v?.length??0,scrollableTarget:"activityContainer",children:(0,s.jsx)(eD,{events:v})}):(0,s.jsx)(s.Fragment,{children:!k&&v&&(0,s.jsxs)(tt,{children:[(0,s.jsx)("div",{children:"No activities yet"}),(0,s.jsx)(ti,{to:`/nfts/collection/${e.address}`,children:"View collection items"})," "]})})]})}),(0,s.jsx)(eQ,{primaryHeader:"Description",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-description",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(tr,{children:"By "}),e?.creator&&e.creator?.address&&(0,s.jsx)(e8,{href:`https://etherscan.io/address/${e.creator.address}`,target:"_blank",rel:"noopener noreferrer",children:(0,z.X)(e.creator.address,2)}),(0,s.jsx)(e7,{"data-testid":"nft-details-description-text",children:t.collectionDescription}),(0,s.jsxs)(e9,{children:[t.externalUrl&&(0,s.jsx)(h.Z,{name:"Website",link:`${t.externalUrl}`}),t.twitterUrl&&(0,s.jsx)(h.Z,{name:"Twitter",link:`https://twitter.com/${t.twitterUrl}`}),t.discordUrl&&(0,s.jsx)(h.Z,{name:"Discord",link:t.discordUrl})]})]})}),(0,s.jsx)(eQ,{primaryHeader:"Details",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-asset-details",children:(0,s.jsx)(eM,{asset:e,collection:t})})]})};var tf=i(60476),tg=i(25575),tu=i(18683);let ty="960px",tC=(0,H.default)(eg.X).withConfig({displayName:"AssetDetailsLoading__Title",componentId:"sc-12ae3a71-0"})`
  height: 16px;
  width: 136px;
`,tw=(0,H.default)(eg.X).withConfig({displayName:"AssetDetailsLoading__SubTitle",componentId:"sc-12ae3a71-1"})`
  height: 40px;
  width: 200px;
  margin-top: 8px;

  @media (max-width: ${ty}) {
    width: 100%;
  }
`,tj=(0,H.default)(eg.X).withConfig({displayName:"AssetDetailsLoading__Seller",componentId:"sc-12ae3a71-2"})`
  height: 16px;
  width: 40px;
`,t_=(0,H.default)(eg.X).withConfig({displayName:"AssetDetailsLoading__SellerAddress",componentId:"sc-12ae3a71-3"})`
  margin-top: 4px;
  height: 24px;
  width: 95px;
`,tv=(0,H.default)(eg.X).withConfig({displayName:"AssetDetailsLoading__PrimaryBody",componentId:"sc-12ae3a71-4"})`
  width: 100%;
  height: 260px;
`,tb=(0,H.default)(eg.X).withConfig({displayName:"AssetDetailsLoading__ActivityLoader",componentId:"sc-12ae3a71-5"})`
  width: 100%;
  height: 428px;
`,tI=(0,H.default)(tf.ZP).withConfig({displayName:"AssetDetailsLoading__PrimaryContent",componentId:"sc-12ae3a71-6"})`
  max-width: 780px;
  margin-top: 28px;
  width: 100%;
  gap: 28px;

  @media (max-width: ${ty}) {
    max-width: 100%;
  }
`,tA=H.default.div.withConfig({displayName:"AssetDetailsLoading__LoaderContainer",componentId:"sc-12ae3a71-7"})`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`,tN=(0,H.default)(eg.X).withConfig({displayName:"AssetDetailsLoading__BuyNowContainer",componentId:"sc-12ae3a71-8"})`
  height: 180px;
  width: 360px;

  @media (max-width: ${ty}) {
    width: 100%;
  }
`,tk=H.default.div.withConfig({displayName:"AssetDetailsLoading__LoadingContainer",componentId:"sc-12ae3a71-9"})`
  display: flex;
  margin-top: 48px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1296px;

  ${tu.bc}

  @media (max-width: ${ty}) {
    max-width: 100%;
    margin-top: 0;
  }
`,t$=(0,H.default)(tf.ZP).withConfig({displayName:"AssetDetailsLoading__StyledColumn",componentId:"sc-12ae3a71-10"})`
  max-width: 780px;
  width: 100%;

  @media (max-width: ${ty}) {
    max-width: 100%;
  }
`,tD=(0,H.default)(tf.ZP).withConfig({displayName:"AssetDetailsLoading__BuyNowLoadingDesktop",componentId:"sc-12ae3a71-11"})`
  margin-top: 20px;
  padding-left: 60px;
  gap: 24px;

  @media (max-width: ${ty}) {
    display: none;
  }
`,tS=(0,H.default)(tf.ZP).withConfig({displayName:"AssetDetailsLoading__BuyNowLoadingMobile",componentId:"sc-12ae3a71-12"})`
  display: none;
  margin-top: 16px;
  gap: 24px;

  @media (max-width: ${ty}) {
    display: flex;
  }
`,tP=()=>{let e=(0,H.useTheme)();return(0,s.jsxs)(tk,{children:[(0,s.jsxs)(t$,{children:[(0,s.jsx)(tA,{children:(0,s.jsx)(tg.ZP,{stroke:e.accentAction,size:"40px"})}),(0,s.jsxs)(tS,{children:[(0,s.jsxs)(tf.ZP,{children:[(0,s.jsx)(tC,{}),(0,s.jsx)(tw,{})]}),(0,s.jsx)(tN,{}),(0,s.jsxs)(tf.ZP,{children:[(0,s.jsx)(tj,{}),(0,s.jsx)(t_,{})]})]}),(0,s.jsxs)(tI,{children:[(0,s.jsx)(tv,{}),(0,s.jsx)(tb,{}),(0,s.jsx)(tv,{}),(0,s.jsx)(tv,{})]})]}),(0,s.jsxs)(tD,{children:[(0,s.jsxs)(tf.ZP,{children:[(0,s.jsx)(tC,{}),(0,s.jsx)(tw,{})]}),(0,s.jsx)(tN,{}),(0,s.jsxs)(tf.ZP,{children:[(0,s.jsx)(tj,{}),(0,s.jsx)(t_,{})]})]})]})},tT=H.default.div.withConfig({displayName:"Asset__AssetContainer",componentId:"sc-8bdece75-0"})`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 60px;
  padding: 48px 48px 0 48px;

  @media (max-width: 960px) {
    padding: 40px 40px 0 40px;
  }
  @media (max-width: 540px) {
    padding: 20px 20px 0 20px;
  }
  @media (max-width: 420px) {
    padding: 16px 16px 0 16px;
  }
`,tH=H.default.div.withConfig({displayName:"Asset__AssetPriceDetailsContainer",componentId:"sc-8bdece75-1"})`
  min-width: 360px;
  position: relative;

  @media (max-width: 960px) {
    display: none;
  }
`;var tL=()=>{let{tokenId:e="",contractAddress:t=""}=(0,T.UO)(),{data:i,loading:n}=function(e,t){let{data:i,loading:n}=(0,x.xw)({variables:{address:e,tokenId:t}}),a=i?.nftAssets?.edges[0]?.node,s=a?.collection,r=a?.listings?.edges[0]?.node,o=(0,d.parseEther)((0,c.K3)(r?.price?.value?.toString()??"0")).toString();return(0,p.useMemo)(()=>({data:[{id:a?.id,address:e,notForSale:a?.listings===null,collectionName:a?.collection?.name,collectionSymbol:a?.collection?.image?.url,imageUrl:a?.image?.url,animationUrl:a?.animationUrl,marketplace:r?.marketplace.toLowerCase(),name:a?.name,priceInfo:{ETHPrice:o,baseAsset:"ETH",baseDecimals:"18",basePrice:o},susFlag:a?.suspiciousFlag,sellorders:a?.listings?.edges.map(e=>({...e.node,protocolParameters:e.node.protocolParameters?JSON.parse(e.node.protocolParameters.toString()):void 0})),smallImageUrl:a?.smallImage?.url,tokenId:t,tokenType:a?.collection?.nftContracts?.[0]?.standard,collectionIsVerified:a?.collection?.isVerified,rarity:{primaryProvider:"Rarity Sniper",providers:a?.rarities?.map(e=>({rank:e.rank,score:e.score,provider:"Rarity Sniper"}))},ownerAddress:a?.ownerAddress,creator:{profile_img_url:a?.creator?.profileImage?.url??"",address:a?.creator?.address??""},metadataUrl:a?.metadataUrl??"",traits:a?.traits?.map(e=>({trait_type:e.name??"",trait_value:e.value??""}))},{collectionDescription:s?.description,collectionImageUrl:s?.image?.url,collectionName:s?.name,isVerified:s?.isVerified,totalSupply:s?.numAssets,twitterUrl:s?.twitterName,discordUrl:s?.discordUrl,externalUrl:s?.homepageUrl}],loading:n}),[e,a,s,o,r?.marketplace,n,t])}(t,e),[a,l]=i;return n?(0,s.jsx)(tP,{}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.fM,{page:r.yJ.NFT_DETAILS_PAGE,properties:{collection_address:t,token_id:e},shouldLogImpression:!0,children:a&&l?(0,s.jsxs)(tT,{children:[(0,s.jsx)(th,{collection:l,asset:a}),(0,s.jsx)(tH,{children:(0,s.jsx)(eo,{collection:l,asset:a})})]}):null})})}}}]);
//# sourceMappingURL=213.3b13c296.chunk.js.map