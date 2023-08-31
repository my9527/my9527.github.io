"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[517],{20555:function(e,a,n){n.d(a,{K:function(){return o}});var t=n(25599),i=n(63505),r=n(79954);function o(e,a){let{data:n,loading:t}=(0,r.aG)({variables:{addresses:e},skip:a}),o=n?.nftCollections?.edges?.[0]?.node;return(0,i.useMemo)(()=>({data:function(e,a){let n=e?.markets?.[0];if(!a&&!e?.nftContracts?.[0]?.address)return{};let t={};return e?.traits&&e?.traits.forEach(e=>{e.name&&e.stats&&(t[e.name]=e.stats.map(e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets})))}),{address:a??e?.nftContracts?.[0]?.address??"",isVerified:e?.isVerified,name:e?.name,description:e?.description,standard:e?.nftContracts?.[0]?.standard,bannerImageUrl:e?.bannerImage?.url,stats:{num_owners:n?.owners,floor_price:n?.floorPrice?.value,one_day_volume:n?.volume?.value,one_day_change:n?.volumePercentChange?.value,one_day_floor_change:n?.floorPricePercentChange?.value,banner_image_url:e?.bannerImage?.url,total_supply:e?.numAssets,total_listings:n?.listings?.value,total_volume:n?.totalVolume?.value},traits:t,marketplaceCount:n?.marketplaces?.map(e=>({marketplace:e.marketplace?.toLowerCase()??"",count:e.listings??0,floorPrice:e.floorPrice??0})),imageUrl:e?.image?.url??"",twitterUrl:e?.twitterName,instagram:e?.instagramName,discordUrl:e?.discordUrl,externalUrl:e?.homepageUrl,rarityVerified:!1}}(o,e),loading:t}),[e,t,o])}(0,t.ZP)`
  query Collection($addresses: [String!]!) {
    nftCollections(filter: { addresses: $addresses }) {
      edges {
        cursor
        node {
          bannerImage {
            url
          }
          collectionId
          description
          discordUrl
          homepageUrl
          image {
            url
          }
          instagramName
          isVerified
          name
          numAssets
          twitterName
          nftContracts {
            address
            chain
            name
            standard
            symbol
            totalSupply
          }
          traits {
            name
            values
            stats {
              name
              value
              assets
              listings
            }
          }
          markets(currencies: ETH) {
            floorPrice {
              currency
              value
            }
            owners
            totalVolume {
              value
              currency
            }
            listings {
              value
            }
            volume(duration: DAY) {
              value
              currency
            }
            volumePercentChange(duration: DAY) {
              value
              currency
            }
            floorPricePercentChange(duration: DAY) {
              value
              currency
            }
            marketplaces {
              marketplace
              listings
              floorPrice
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`},80517:function(e,a,n){n.r(a),n.d(a,{default:function(){return e5}});var t,i,r=n(30575),o=n(94869),l=n(66196),s=n(79954),d=n(25599),c=n(63505);function p(e,a){let{data:n,loading:t,error:i}=(0,s.FH)({variables:{size:e,timePeriod:a}}),r=(0,c.useMemo)(()=>n?.topCollections?.edges?.map(e=>{let a=e?.node;return{name:a.name,address:a.nftContracts?.[0]?.address,imageUrl:a.image?.url,bannerImageUrl:a.bannerImage?.url,isVerified:a.isVerified,volume:a.markets?.[0]?.volume?.value,volumeChange:a.markets?.[0]?.volumePercentChange?.value,floor:a.markets?.[0]?.floorPrice?.value,floorChange:a.markets?.[0]?.floorPricePercentChange?.value,marketCap:a.markets?.[0]?.totalVolume?.value,percentListed:(a.markets?.[0]?.listings?.value??0)/(a.nftContracts?.[0]?.totalSupply??1),owners:a.markets?.[0]?.owners,sales:a.markets?.[0]?.sales?.value,totalSupply:a.nftContracts?.[0]?.totalSupply}}),[n?.topCollections?.edges]);return{data:r,loading:t,error:i}}(0,d.ZP)`
  query TrendingCollections($size: Int, $timePeriod: HistoryDuration) {
    topCollections(first: $size, duration: $timePeriod) {
      edges {
        node {
          name
          nftContracts {
            address
            totalSupply
          }
          image {
            url
          }
          bannerImage {
            url
          }
          isVerified
          markets(currencies: ETH) {
            floorPrice {
              value
            }
            owners
            totalVolume {
              value
            }
            volume(duration: $timePeriod) {
              value
            }
            volumePercentChange(duration: $timePeriod) {
              value
            }
            floorPricePercentChange(duration: $timePeriod) {
              value
            }
            sales {
              value
            }
            listings {
              value
            }
          }
        }
      }
    }
  }
`;var u=n(99430),m=n(27591),g=n(12058),h=n(18030),x=n(5570),f=n(48734);let C=g.default.div.withConfig({displayName:"Carousel__CarouselContainer",componentId:"sc-6b861646-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,y=g.default.div.withConfig({displayName:"Carousel__CarouselCardContainer",componentId:"sc-6b861646-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,b=(0,g.default)(f.a.div).withConfig({displayName:"Carousel__CarouselItemCard",componentId:"sc-6b861646-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,v=g.default.div.withConfig({displayName:"Carousel__CarouselItemIcon",componentId:"sc-6b861646-3"})`
  align-items: center;
  color: ${({theme:e})=>e.textPrimary};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,w=({children:e,activeIndex:a,toggleNextSlide:n})=>{let t=(0,c.useCallback)((a,n=e.length)=>(0,u.ef)(a,n),[e]),i=(0,c.useCallback)((e,a,n)=>(0,u.E)(e,a,n,t),[t]),[o,l]=(0,f.useSprings)(e.length,a=>({x:(a<e.length-1?a:-1)*800})),s=(0,c.useRef)([0,1]),d=(0,c.useCallback)((a,n)=>{let r=t(Math.floor(a/800)%e.length),o=n<0?e.length-2:1;l(t=>{let l=i(t,r,o),d=i(t,s.current[0],s.current[1]),c=(0,u.Z1)(r,o,l,e.length,a);return{x:-a%(800*e.length)+800*c,immediate:n<0?d>l:d<l,config:{tension:250,friction:30}}}),s.current=[r,o]},[t,i,l,e.length]),p=(0,c.useRef)(0);(0,c.useEffect)(()=>{d(800*a,p.current)},[a,d]);let m=(0,c.useCallback)(e=>{p.current=e,n(e)},[n]);return(0,c.useEffect)(()=>{let e=setInterval(async()=>{m(1)},7e3);return()=>{clearInterval(e)}},[m,a]),(0,r.jsxs)(C,{children:[(0,r.jsx)(v,{onClick:()=>m(-1),children:(0,r.jsx)(x.wy,{width:"16px",height:"16px"})}),(0,r.jsx)(y,{children:o.map(({x:a},n)=>(0,r.jsx)(b,{style:{x:a},children:e[n]},n))}),(0,r.jsx)(v,{onClick:()=>m(1),children:(0,r.jsx)(x.XC,{width:"16px",height:"16px"})})]})},j=({children:e})=>(0,r.jsx)(w,{activeIndex:0,toggleNextSlide:()=>void 0,children:[e]});var _=n(46760),k=n(80343),$=n(20555),I=n(39401),N=n(85325),T=n(38491);let S=g.default.div.withConfig({displayName:"CarouselCard__CarouselCardBorder",componentId:"sc-4bf45ab0-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.backgroundOutline};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,H=g.default.div.withConfig({displayName:"CarouselCard__CardHeaderContainer",componentId:"sc-4bf45ab0-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,z=g.default.div.withConfig({displayName:"CarouselCard__LoadingCardHeaderContainer",componentId:"sc-4bf45ab0-2"})`
  position: relative;
  animation: ${_.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.backgroundInteractive} 25%,
    ${({theme:e})=>e.backgroundOutline} 50%,
    ${({theme:e})=>e.backgroundInteractive} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,P=g.default.div.withConfig({displayName:"CarouselCard__CardHeaderColumn",componentId:"sc-4bf45ab0-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,F=g.default.div.withConfig({displayName:"CarouselCard__IconContainer",componentId:"sc-4bf45ab0-4"})`
  display: inline;
  vertical-align: text-bottom;
  margin-left: 2px;
`,E=g.default.div.withConfig({displayName:"CarouselCard__CollectionNameContainer",componentId:"sc-4bf45ab0-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,V=(0,g.default)(k.X).withConfig({displayName:"CarouselCard__LoadingCollectionNameContainer",componentId:"sc-4bf45ab0-6"})`
  width: 50%;
`,B=g.default.div.withConfig({displayName:"CarouselCard__HeaderOverlay",componentId:"sc-4bf45ab0-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,D=g.default.img.withConfig({displayName:"CarouselCard__CollectionImage",componentId:"sc-4bf45ab0-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.accentTextLightPrimary};
  border-radius: 100px;
`,O=g.default.div.withConfig({displayName:"CarouselCard__LoadingCollectionImage",componentId:"sc-4bf45ab0-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${_.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.backgroundInteractive} 25%,
    ${({theme:e})=>e.backgroundOutline} 50%,
    ${({theme:e})=>e.backgroundInteractive} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,L=(0,g.default)(k.X).withConfig({displayName:"CarouselCard__LoadingTableElement",componentId:"sc-4bf45ab0-10"})`
  width: 50px;
`,M=g.default.div.withConfig({displayName:"CarouselCard__TableElement",componentId:"sc-4bf45ab0-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,A=g.default.div.withConfig({displayName:"CarouselCard__FirstColumnTextWrapper",componentId:"sc-4bf45ab0-12"})``,X=g.default.div.withConfig({displayName:"CarouselCard__CardBottomContainer",componentId:"sc-4bf45ab0-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,R=g.default.img.withConfig({displayName:"CarouselCard__MarketplaceIcon",componentId:"sc-4bf45ab0-14"})`
  width: 20px;
  height: 20px;
`,U=g.default.div.withConfig({displayName:"CarouselCard__CarouselCardContainer",componentId:"sc-4bf45ab0-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.backgroundSurface};
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${M}:nth-child(3n-1), ${L}:nth-child(3n-1) {
    justify-self: center;
  }

  ${M}:nth-child(3n), ${L}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${A} {
      display: none;
    }
    ${M} {
      justify-self: left !important;
    }
    ${P} {
      padding: 0 20px;
    }
  }
`,G=({marketplace:e,floorInEth:a,listings:n})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(M,{children:[(0,r.jsx)(R,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,r.jsx)(A,{children:(0,r.jsx)(N.T.BodySmall,{color:"textSecondary",children:e})})]}),(0,r.jsx)(M,{children:(0,r.jsx)(N.T.BodySmall,{color:"textSecondary",children:Number(a)>0?`${(0,T.dZ)(a,T.sw.NFTTokenFloorPriceTrailingZeros)} ETH`:"-"})}),(0,r.jsx)(M,{children:(0,r.jsx)(N.T.BodySmall,{color:"textSecondary",children:Number(n)>0?n:"None"})})]}),W=[I.Fz.Opensea,I.Fz.X2Y2,I.Fz.LooksRare],Z={[I.Fz.Opensea]:"OpenSea",[I.Fz.X2Y2]:"X2Y2",[I.Fz.LooksRare]:"LooksRare"},Y=({collection:e,onClick:a})=>{let{data:n,loading:t}=(0,$.K)(e.address??"");return t?(0,r.jsx)(Q,{}):(0,r.jsx)(S,{children:(0,r.jsxs)(U,{onClick:a,children:[(0,r.jsx)(J,{collection:e}),(0,r.jsx)(X,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(M,{children:[(0,r.jsx)(x.pD,{width:"20",height:"20"}),(0,r.jsx)(A,{children:(0,r.jsx)(N.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,r.jsx)(M,{children:e.floor&&(0,r.jsxs)(N.T.SubHeaderSmall,{color:"userThemeColor",children:[(0,u.Nd)(e.floor)," ETH Floor"]})}),(0,r.jsx)(M,{children:(0,r.jsxs)(N.T.SubHeaderSmall,{color:"userThemeColor",children:[n.marketplaceCount?.reduce((e,a)=>e+a.count,0)," Listings"]})}),W.map(a=>{let t=n.marketplaceCount?.find(e=>e.marketplace===a);return t?(0,r.jsx)(G,{marketplace:Z[a],listings:t.count,floorInEth:t.floorPrice},`CarouselCard-key-${e.address}-${t.marketplace}`):null})]})})]})})},q=()=>(0,r.jsx)(r.Fragment,{children:[...Array(12)].map(e=>(0,r.jsx)(L,{},e))}),K=(0,g.default)(N.T.MediumHeader).withConfig({displayName:"CarouselCard__CollectionName",componentId:"sc-4bf45ab0-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,J=({collection:e})=>(0,r.jsxs)(H,{src:e.bannerImageUrl??"",children:[(0,r.jsxs)(P,{children:[(0,r.jsx)(D,{src:e.imageUrl}),(0,r.jsxs)(E,{children:[(0,r.jsx)(K,{color:"accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,r.jsx)(F,{children:(0,r.jsx)(x.SA,{width:"24px",height:"24px"})})]})]}),(0,r.jsx)(B,{})]}),Q=({collection:e})=>(0,r.jsx)(S,{children:(0,r.jsxs)(U,{children:[e?(0,r.jsx)(J,{collection:e}):(0,r.jsxs)(z,{children:[(0,r.jsxs)(P,{children:[(0,r.jsx)(O,{}),(0,r.jsx)(V,{})]}),(0,r.jsx)(B,{})]}),(0,r.jsx)(X,{children:(0,r.jsx)(q,{})})]})}),ee=g.default.div.withConfig({displayName:"Banner__BannerContainer",componentId:"sc-c8890ab5-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,ea=g.default.div.withConfig({displayName:"Banner__AbsoluteFill",componentId:"sc-c8890ab5-1"})`
  position: absolute;
  top: -96px;
  left: 0;
  right: 0;
  bottom: 0;
`,en=(0,g.default)(ea).withConfig({displayName:"Banner__BannerBackground",componentId:"sc-c8890ab5-2"})`
  transform: translate3d(0, 0, 0) scaleY(1.1);

  background-image: ${e=>`url(${e.backgroundImage})`};
  filter: blur(62px);

  opacity: ${({theme:e})=>e.darkMode?.3:.2};
`,et=(0,g.default)(ea).withConfig({displayName:"Banner__PlainBackground",componentId:"sc-c8890ab5-3"})`
  background: ${({theme:e})=>`linear-gradient(${(0,h.j)(10,e.userThemeColor)}, transparent)`};
`,ei=g.default.div.withConfig({displayName:"Banner__BannerMainArea",componentId:"sc-c8890ab5-4"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,er=g.default.div.withConfig({displayName:"Banner__HeaderContainer",componentId:"sc-c8890ab5-5"})`
  display: flex;
  max-width: 500px;
  font-weight: 500;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.textPrimary};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,eo=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"];var el=()=>{let e=(0,m.s0)(),{data:a}=p(5+eo.length,s._u.Day),n=(0,c.useMemo)(()=>a?.filter(e=>e.address&&!eo.includes(e.address)).slice(0,5),[a]),[t,i]=(0,c.useState)(0),o=(0,c.useCallback)(e=>{n&&i(a=>(0,u.ef)(a+e,n.length))},[n]),l=n?.[t];return(0,r.jsxs)(ee,{children:[l?l.bannerImageUrl?(0,r.jsx)(en,{backgroundImage:l.bannerImageUrl}):(0,r.jsx)(et,{}):null,(0,r.jsxs)(ei,{children:[(0,r.jsxs)(er,{children:["Better prices. ",(0,r.jsx)("br",{}),"More listings."]}),n?(0,r.jsx)(w,{activeIndex:t,toggleNextSlide:o,children:n.map(a=>(0,r.jsx)(Y,{collection:a,onClick:()=>e(`/nfts/collection/${a.address}`)},a.address))}):(0,r.jsx)(j,{children:(0,r.jsx)(Q,{})})]})]})},es=n(62329),ed=n(73859),ec=n.n(ed),ep=n(34822),eu=n(43108),em=n(95168),eg=n(45825),eh=n(79131);n(74602),n(46728);let ex=g.default.div.withConfig({displayName:"Cells__TruncatedText",componentId:"sc-c6cf6877-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ef=(0,g.default)(ex).withConfig({displayName:"Cells__CollectionNameContainer",componentId:"sc-c6cf6877-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,eC=(0,g.default)(ex).withConfig({displayName:"Cells__CollectionName",componentId:"sc-c6cf6877-2"})`
  margin-left: 8px;
`,ey=(0,g.default)(eu.Tv.SubHeader).withConfig({displayName:"Cells__TruncatedSubHeader",componentId:"sc-c6cf6877-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,eb=(0,g.default)(eu.Tv.SubHeaderSmall).withConfig({displayName:"Cells__TruncatedSubHeaderSmall",componentId:"sc-c6cf6877-4"})`
  color: ${({theme:e})=>`${e.textPrimary}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ev=g.default.div.withConfig({displayName:"Cells__RoundedImage",componentId:"sc-c6cf6877-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:a})=>e?`url(${e})`:a.backgroundModule};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,ew=g.default.div.withConfig({displayName:"Cells__ChangeCellContainer",componentId:"sc-c6cf6877-6"})`
  display: flex;
  color: ${({theme:e,change:a})=>a>=0?e.accentSuccess:e.accentFailure};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,ej=g.default.div.withConfig({displayName:"Cells__EthContainer",componentId:"sc-c6cf6877-7"})`
  display: flex;
  justify-content: flex-end;
`,e_=({value:e})=>{let a=(0,eh.dD)();return(0,r.jsxs)(ef,{children:[(0,r.jsx)(ev,{src:e.logo}),(0,r.jsx)(eC,{children:a?(0,r.jsx)(eb,{children:e.name}):(0,r.jsx)(ey,{children:e.name})}),e.isVerified&&(0,r.jsx)("span",{className:"rgw6ezl7 rgw6ez457 rgw6ez2o7 rgw6ez19v rgw6ez12v rgw6ez461",children:(0,r.jsx)(x.SA,{})})]})},ek=({value:e})=>(0,r.jsx)("span",{children:e.value?(0,u.Ci)(e.value):"-"}),e$=(e,a,n,t)=>e===I.VG.ETH?n:t&&n?t*(a?parseFloat((0,eg.formatEther)(n)):n):void 0,eI=({value:e,denomination:a,usdPrice:n})=>{let t=e$(a,!1,e,n),i=t?a===I.VG.ETH?(0,u.Nd)(t.toString(),!1,!0,!1)+" ETH":(0,u.Nd)(t,!0,!1,!0):"-",o=(0,eh.dD)(),l=o?eu.Tv.BodySmall:eu.Tv.BodyPrimary;return(0,r.jsx)(ej,{children:(0,r.jsx)(l,{children:e?i:"-"})})},eN=({value:e})=>(0,r.jsx)(eu.Tv.BodyPrimary,{children:e}),eT=({value:e,denomination:a,usdPrice:n})=>{let t=e$(a,!1,e,n),i=t?a===I.VG.ETH?(0,u.Nd)(t.toString(),!1,!1,!0)+" ETH":(0,u.Nd)(t,!0,!1,!0):"-";return(0,r.jsx)(ej,{children:(0,r.jsx)(eu.Tv.BodyPrimary,{children:e?i:"-"})})},eS=({change:e,children:a})=>{let n=(0,eh.dD)(),t=n?eu.Tv.Caption:eu.Tv.BodyPrimary;return(0,r.jsxs)(ew,{change:e??0,children:[!e||e>0?(0,r.jsx)(x.PH,{width:"20px",height:"20px"}):(0,r.jsx)(x.HE,{width:"20px",height:"20px"}),(0,r.jsx)(t,{color:"currentColor",children:a||`${e?Math.abs(Math.round(e)):0}%`})]})};var eH=n(38414),ez=n(32930),eP=n(7132),eF=n(64709),eE="_1mor7vea rgw6ez4pd rgw6ez16v rgw6ez7bj rgw6ez7a7",eV="_1mor7ved rgw6ezcp rgw6ezav rgw6eze7 rgw6ez4ep rgw6ez2ov rgw6ez28d",eB="rgw6ezrd rgw6ez50p rgw6ez7jr rgw6ez7ar";let eD=g.default.div.withConfig({displayName:"Table__RankCellContainer",componentId:"sc-4e3e7084-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,eO=g.default.tr.withConfig({displayName:"Table__StyledRow",componentId:"sc-4e3e7084-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.stateOverlayHover};
  }
  :active {
    background: ${({theme:e})=>e.stateOverlayPressed};
  }
`,eL=g.default.tr.withConfig({displayName:"Table__StyledLoadingRow",componentId:"sc-4e3e7084-2"})`
  height: 80px;
`,eM=g.default.th.withConfig({displayName:"Table__StyledHeader",componentId:"sc-4e3e7084-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:a})=>!a&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:a})=>!a&&`opacity: ${e.opacity.click};`}
  }
`,eA=g.default.div.withConfig({displayName:"Table__StyledLoadingHolder",componentId:"sc-4e3e7084-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,eX=g.default.div.withConfig({displayName:"Table__StyledCollectionNameHolder",componentId:"sc-4e3e7084-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,eR=(0,g.default)(k.X).withConfig({displayName:"Table__StyledImageHolder",componentId:"sc-4e3e7084-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,eU=(0,g.default)(k.X).withConfig({displayName:"Table__StyledRankHolder",componentId:"sc-4e3e7084-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`;function eG({columns:e,data:a,smallHiddenColumns:n,mediumHiddenColumns:t,largeHiddenColumns:s,...d}){let p=(0,g.useTheme)(),{chainId:u}=(0,eH.useWeb3React)(),{width:h}=(0,ez.i)(),f=(0,eh.dD)(),{getTableProps:C,getTableBodyProps:y,headerGroups:b,rows:v,prepareRow:w,setHiddenColumns:j,visibleColumns:_}=(0,eP.useTable)({columns:e,data:a,initialState:{sortBy:[{desc:!0,id:i.Volume}]},...d},eP.useSortBy),k=(0,m.s0)();return((0,c.useEffect)(()=>{h&&(h<=p.breakpoint.sm?j(n):h<=p.breakpoint.md?j(t):h<=p.breakpoint.lg?j(s):j([]))},[h,j,e,n,t,s,p.breakpoint]),0===a.length)?(0,r.jsx)(eW,{headerGroups:b,visibleColumns:_,...C()}):(0,r.jsx)(eu.Vj,{children:(0,r.jsxs)("table",{...C(),className:eE,children:[(0,r.jsx)("thead",{className:eB,children:b.map(e=>(0,c.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map((e,a)=>(0,c.createElement)(eM,{className:eV,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===a?"left":"right",paddingLeft:0===a?f?"16px":"52px":0},disabled:e.disableSortBy,key:a,children:[(0,r.jsx)(eF.n,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?(0,r.jsx)(x.LZ,{style:{transform:"rotate(90deg)",position:"absolute"}}):(0,r.jsx)(x.LZ,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),(0,r.jsx)(eF.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))}),(0,r.jsx)("tbody",{...y(),children:v.map((e,a)=>(w(e),(0,r.jsx)(l.M8,{events:[o.TM.onClick],name:o.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:u},element:o.xo.NFT_TRENDING_ROW,children:(0,c.createElement)(eO,{...e.getRowProps(),key:e.id,onClick:()=>k(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map((e,n)=>(0,c.createElement)("td",{className:"_1mor7vef rgw6ezcp rgw6ezb1 rgw6ezed rgw6ez2o7 rgw6ez27p rgw6ez1jp rgw6ez467 rgw6ez491",...e.getCellProps(),key:n,style:{maxWidth:0===n?f?"240px":"360px":"160px"}},0===n?(0,r.jsxs)(eD,{children:[!f&&(0,r.jsx)(eu.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:a+1}),e.render("Cell")]}):e.render("Cell"))))},a)))})]})})}function eW({headerGroups:e,visibleColumns:a,...n}){return(0,r.jsx)(eu.Vj,{children:(0,r.jsxs)("table",{...n,className:eE,children:[(0,r.jsx)("thead",{className:eB,children:e.map(e=>(0,c.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map((e,a)=>(0,c.createElement)(eM,{className:eV,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===a?"left":"right",paddingLeft:0===a?"52px":0},disabled:0===a,key:a,children:[(0,r.jsx)(eF.n,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?(0,r.jsx)(x.LZ,{style:{transform:"rotate(90deg)",position:"absolute"}}):(0,r.jsx)(x.LZ,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),(0,r.jsx)(eF.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))}),(0,r.jsx)("tbody",{...n,children:[...Array(10)].map((e,n)=>(0,r.jsx)(eL,{children:[...Array(a.length)].map((e,a)=>(0,r.jsx)("td",{className:"_1mor7veh rgw6ezcp rgw6ezb1 rgw6ezed rgw6ez2oj rgw6ez281 rgw6ez1jp rgw6ez467 rgw6ez491",children:0===a?(0,r.jsxs)(eX,{children:[(0,r.jsx)(eU,{}),(0,r.jsx)(eR,{}),(0,r.jsx)(k.X,{})]}):(0,r.jsx)(eA,{children:(0,r.jsx)(k.X,{})})},a))},n))})]})})}(t=i||(i={})).Volume="Volume",t.VolumeChange="Volume change",t.Floor="Floor",t.FloorChange="Floor change",t.Sales="Sales",t.Items="Items",t.Owners="Owners";let eZ=(e,a)=>e?a?Math.round(1e5*e)>=Math.round(1e5*a)?1:-1:1:-1;var eY=({data:e,timePeriod:a})=>{let n=(0,c.useMemo)(()=>(e,a)=>eZ(e.original.floor.value,a.original.floor.value),[]),t=(0,c.useMemo)(()=>(e,a)=>eZ(e.original.floor.change,a.original.floor.change),[]),o=(0,c.useMemo)(()=>(e,a)=>eZ(e.original.volume.value,a.original.volume.value),[]),l=(0,c.useMemo)(()=>(e,a)=>eZ(e.original.volume.change,a.original.volume.change),[]),s=(0,c.useMemo)(()=>[{Header:"Collection name",accessor:"collection",Cell:e_,disableSortBy:!0},{id:i.Floor,Header:i.Floor,accessor:({floor:e})=>e.value,sortType:n,Cell:function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(eI,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),a!==I.XH.AllTime&&(0,r.jsx)(em.SF,{children:(0,r.jsx)(eS,{change:e.row.original.floor.change})})]})}},{id:i.FloorChange,Header:i.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:a===I.XH.AllTime,sortType:t,Cell:function(e){return a===I.XH.AllTime?(0,r.jsx)(eN,{value:"-"}):(0,r.jsx)(eS,{change:e.row.original.floor.change})}},{id:i.Volume,Header:i.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:o,Cell:function(e){return(0,r.jsx)(eT,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:i.VolumeChange,Header:i.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:a===I.XH.AllTime,sortType:l,Cell:function(e){let{change:n}=e.row.original.volume;return a===I.XH.AllTime?(0,r.jsx)(eN,{value:"-"}):n&&n>=9999?(0,r.jsxs)(eS,{change:n,children:[">9999","%"]}):(0,r.jsx)(eS,{change:n})}},{id:i.Items,Header:i.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,r.jsx)(ek,{value:{value:e.row.original.totalSupply}})}},{Header:i.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,r.jsx)(ek,{value:e.row.original.owners})}}],[t,n,l,o,a]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(eG,{smallHiddenColumns:[i.Items,i.FloorChange,i.Volume,i.VolumeChange,i.Owners],mediumHiddenColumns:[i.Items,i.FloorChange,i.VolumeChange,i.Owners],largeHiddenColumns:[i.Items,i.Owners],data:e,columns:s})})};let eq=[{label:"1D",value:I.XH.OneDay},{label:"1W",value:I.XH.SevenDays},{label:"1M",value:I.XH.ThirtyDays},{label:"All",value:I.XH.AllTime}],eK=g.default.div.withConfig({displayName:"TrendingCollections__ExploreContainer",componentId:"sc-a2aefa69-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,eJ=g.default.div.withConfig({displayName:"TrendingCollections__StyledHeader",componentId:"sc-a2aefa69-1"})`
  color: ${({theme:e})=>e.textPrimary};
  font-size: 36px;
  line-height: 44px;
  font-weight: 500;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,eQ=g.default.div.withConfig({displayName:"TrendingCollections__FiltersRow",componentId:"sc-a2aefa69-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,e0=g.default.div.withConfig({displayName:"TrendingCollections__Filter",componentId:"sc-a2aefa69-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-radius: 16px;
  padding: 4px;
`,e1=g.default.div.withConfig({displayName:"TrendingCollections__Selector",componentId:"sc-a2aefa69-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:a})=>e?a.backgroundInteractive:"none"};
  cursor: pointer;

  ${es.c}
`,e6=(0,g.default)(eu.Tv.SubHeader).withConfig({displayName:"TrendingCollections__StyledSelectorText",componentId:"sc-a2aefa69-5"})`
  color: ${({theme:e,active:a})=>a?e.textPrimary:e.textSecondary};
`;var e4=()=>{let[e,a]=(0,c.useState)(I.XH.OneDay),[n,t]=(0,c.useState)(!0),{data:i,loading:o}=p(100,function(e){switch(e){case I.XH.OneDay:return s._u.Day;case I.XH.SevenDays:return s._u.Week;case I.XH.ThirtyDays:return s._u.Month;case I.XH.AllTime:return s._u.Max;default:return s._u.Day}}(e)),{data:l}=(0,ep.useQuery)(["fetchPrice",{}],()=>(0,u.tw)(),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:ec()("1m")}),d=(0,c.useMemo)(()=>!o&&i?i.map(e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:n?I.VG.ETH:I.VG.USD,usdPrice:l})):[],[i,o,n,l]);return(0,r.jsxs)(eK,{children:[(0,r.jsx)(eJ,{children:"Trending NFT collections"}),(0,r.jsxs)(eQ,{children:[(0,r.jsx)(e0,{children:eq.map(n=>(0,r.jsx)(e1,{active:n.value===e,onClick:()=>a(n.value),children:(0,r.jsx)(e6,{lineHeight:"20px",active:n.value===e,children:n.label})},n.value))}),(0,r.jsxs)(e0,{onClick:()=>t(!n),children:[(0,r.jsx)(e1,{active:n,children:(0,r.jsx)(e6,{lineHeight:"20px",active:n,children:"ETH"})}),(0,r.jsx)(e1,{active:!n,children:(0,r.jsx)(e6,{lineHeight:"20px",active:!n,children:"USD"})})]})]}),(0,r.jsx)(eY,{data:d,timePeriod:e})]})};let e2=g.default.div.withConfig({displayName:"explore__ExploreContainer",componentId:"sc-f5d86c41-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`;var e5=()=>{let e=(0,eh.cP)(e=>e.setBagExpanded);return(0,c.useEffect)(()=>{e({bagExpanded:!1,manualClose:!1})},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l.fM,{page:o.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,r.jsxs)(e2,{children:[(0,r.jsx)(el,{}),(0,r.jsx)(e4,{})]})})})}}}]);
//# sourceMappingURL=517.caf80eed.chunk.js.map