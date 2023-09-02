"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8597],{20555:function(e,t,r){r.d(t,{K:function(){return s}});var i=r(25599),a=r(63505),n=r(79954);function s(e,t){let{data:r,loading:i}=(0,n.aG)({variables:{addresses:e},skip:t}),s=r?.nftCollections?.edges?.[0]?.node;return(0,a.useMemo)(()=>({data:function(e,t){let r=e?.markets?.[0];if(!t&&!e?.nftContracts?.[0]?.address)return{};let i={};return e?.traits&&e?.traits.forEach(e=>{e.name&&e.stats&&(i[e.name]=e.stats.map(e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets})))}),{address:t??e?.nftContracts?.[0]?.address??"",isVerified:e?.isVerified,name:e?.name,description:e?.description,standard:e?.nftContracts?.[0]?.standard,bannerImageUrl:e?.bannerImage?.url,stats:{num_owners:r?.owners,floor_price:r?.floorPrice?.value,one_day_volume:r?.volume?.value,one_day_change:r?.volumePercentChange?.value,one_day_floor_change:r?.floorPricePercentChange?.value,banner_image_url:e?.bannerImage?.url,total_supply:e?.numAssets,total_listings:r?.listings?.value,total_volume:r?.totalVolume?.value},traits:i,marketplaceCount:r?.marketplaces?.map(e=>({marketplace:e.marketplace?.toLowerCase()??"",count:e.listings??0,floorPrice:e.floorPrice??0})),imageUrl:e?.image?.url??"",twitterUrl:e?.twitterName,instagram:e?.instagramName,discordUrl:e?.discordUrl,externalUrl:e?.homepageUrl,rarityVerified:!1}}(s,e),loading:i}),[e,i,s])}(0,i.ZP)`
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
`},32756:function(e,t,r){r.r(t),r.d(t,{BannerWrapper:function(){return t2},CollectionBannerLoading:function(){return tq},default:function(){return t5}});var i,a,n=r(30575),s=r(94869),o=r(38414),l=r(66196),d=r(60476),c=r(62329),p=r(2304),g=r(80343),h=r(20555),u=r(49912),m=r(29765),x=r(64709),f=r(2994),w=r(15655),b=r(79131),y=r(50026),j=r(99430);r(74602),r(46728);let v=()=>{let e=(0,b.cP)(e=>e.itemsInBag),t=(0,b.cP)(e=>e.toggleBag),r=(0,y.P)(),i=(0,y.B)(),a=e.length>0;return(0,n.jsxs)(f.X2,{display:{sm:a?"flex":"none",md:"none"},className:"rgw6ez48v rgw6ez32j rgw6ez35p rgw6ez3b7 rgw6ez4p1 rgw6ez2u1 rgw6ez3qv rgw6ez7bb rgw6ez48j",children:[(0,n.jsxs)(f.X2,{gap:"8",children:[(0,n.jsx)(x.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map((e,t)=>(0,n.jsx)(x.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t))}),(0,n.jsxs)(f.sg,{children:[(0,n.jsx)(x.n,{className:w.d1,fontWeight:"semibold",children:(0,j.t)(e.length,"NFT")}),(0,n.jsxs)(f.X2,{gap:"8",children:[(0,n.jsxs)(x.n,{className:w.d1,children:[`${(0,j.zb)(r.toString())}`," ETH"]}),(0,n.jsx)(x.n,{color:"textSecondary",className:w.Km,children:(0,j.Nd)(i,!0)})]})]})]}),(0,n.jsx)(x.n,{className:"rgw6ezd1 rgw6ezav rgw6eze1 rgw6ez2ed rgw6ez2jv rgw6ez2oj rgw6ez281 rgw6ez4c7 rgw6ez6ap rgw6ez7bj rgw6ez79z",onClick:t,children:"View bag"})]})};var C=r(17749),_=r(12058);r(25496);var k="_1wiwg131 rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez491 rgw6ez4sj rgw6ez7iz rgw6ez79z rgw6ezg1 rgw6ez4ep",S="_1wiwg135 _1wiwg131 rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez491 rgw6ez4sj rgw6ez7iz rgw6ez79z rgw6ezg1 rgw6ez4ej";let I=(0,_.default)(f.X2).withConfig({displayName:"ActivitySwitcher__BaseActivityContainer",componentId:"sc-101fb8eb-0"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.backgroundInteractive};
  margin-right: 12px;
`,T=[,,].fill(null).map((e,t)=>(0,n.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj"},`ActivitySwitcherLoading-key-${t}`)),N=({showActivity:e,toggleActivity:t})=>{let r=(0,b.Iv)(e=>e.isCollectionStatsLoading);return(0,n.jsx)(I,{gap:"24",marginBottom:"16",children:r?T:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.n,{as:"button",className:e?k:S,onClick:()=>e&&t(),children:"Items"}),(0,n.jsx)(l.M8,{events:[s.TM.onClick],element:s.xo.NFT_ACTIVITY_TAB,name:s.Yz.NFT_ACTIVITY_SELECTED,children:(0,n.jsx)(x.n,{as:"button",className:e?S:k,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var z=r(20691),P=r(45825),$=r(84893),E=r(79954),R=r(24295),F=r(14526),M=r(45938),B=r(14327),A=r(83164),L=r(63505);let H=({asset:e,isMobile:t,mediaShouldBePlaying:r,setCurrentTokenPlayingMedia:i,uniformAspectRatio:a,setUniformAspectRatio:o,renderedHeight:d,setRenderedHeight:c})=>{let p=(0,b.cP)(e=>e.bagManuallyClosed),g=(0,b.cP)(e=>e.addAssetsToBag),h=(0,b.cP)(e=>e.removeAssetsFromBag),u=(0,b.cP)(e=>e.itemsInBag),m=(0,b.cP)(e=>e.bagExpanded),x=(0,b.cP)(e=>e.setBagExpanded),f=(0,l.oO)({page:s.yJ.NFT_COLLECTION_PAGE}),{isSelected:w}=(0,L.useMemo)(()=>{let t=u.filter(t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address),r=t.length>0;return{isSelected:r}},[e,u]),y=e.notForSale||z.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),v=e?.rarity?.providers?e.rarity.providers[0]:void 0,C=(0,L.useCallback)(()=>{z.O$.from(e.priceInfo?.ETHPrice??0).gt(0)&&(g([e]),m||t||p||x({bagExpanded:!0}),(0,l._P)(s.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...f}))},[g,e,m,p,t,x,f]),_=(0,L.useCallback)(()=>{h([e])},[e,h]),k=(0,L.useMemo)(()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,n.jsx)(A.yT,{}):null,primaryInfoRight:e.rarity&&v?(0,n.jsx)(A.SD,{provider:v}):null,secondaryInfo:y?"":`${(0,j.zb)(e.priceInfo.ETHPrice,!0)} ETH`,selectedInfo:(0,n.jsx)(M.cC,{id:"77UrnP"}),notSelectedInfo:(0,n.jsx)(M.cC,{id:"2RtVHm"}),disabledInfo:(0,n.jsx)(M.cC,{id:"i/2ImT"})}),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,y,v]);return(0,n.jsx)(B.y,{asset:e,display:k,isSelected:w,isDisabled:!!e.notForSale,selectAsset:C,unselectAsset:_,mediaShouldBePlaying:r,uniformAspectRatio:a,setUniformAspectRatio:o,renderedHeight:d,setRenderedHeight:c,setCurrentTokenPlayingMedia:i,testId:"nft-collection-asset"})};var O=r(42223),Y="_10b1b4ve rgw6ez4ep rgw6ez457 rgw6ez19v rgw6ez12v rgw6ez7on",D="_10b1b4vc",X="rgw6ez7az rgw6ez60j rgw6ez7lb rgw6ez7m3 rgw6ezw1 rgw6ezfj",W="_10b1b4vb rgw6ez7ar rgw6ez5op rgw6ez7kj rgw6ez2cp rgw6ez281",U="rgw6ez44v rgw6ez2jp rgw6ez79z rgw6ezb1 rgw6eze7 rgw6ez48j rgw6ez3j rgw6ez2dv rgw6ez2op rgw6ez287",Z="_10b1b4v2",V=r(5570),G=r(50413),K=r(98685),q=r(64127);(i=a||(a={}))[i.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",i[i.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",i[i.TRAIT_START_INDEX=2]="TRAIT_START_INDEX";let J=(0,K.Ue)()((0,q.mW)(e=>({traitsOpen:{},setTraitsOpen:(t,r)=>{e(({traitsOpen:e})=>({traitsOpen:{...e,[t]:r}}))}}),{name:"useTraitsOpen"}));var Q=r(43108),ee=r(71814);let et=(0,_.default)(f.X2).withConfig({displayName:"MarketplaceSelect__FilterItemWrapper",componentId:"sc-16a7c9c9-0"})`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.backgroundInteractive};
  }
`,er=(0,_.default)(f.X2).withConfig({displayName:"MarketplaceSelect__MarketNameWrapper",componentId:"sc-16a7c9c9-1"})`
  gap: 10px;
`,ei={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},ea=({title:e,element:t,onClick:r})=>(0,n.jsxs)(et,{onClick:r,children:[(0,n.jsx)(Q.Tv.BodyPrimary,{children:e}),(0,n.jsx)(Q.Tv.SubHeaderSmall,{children:t})]}),en=({title:e,value:t,addMarket:r,removeMarket:i,isMarketSelected:a,count:o})=>{let[d,c]=(0,L.useState)(!1),[p,g]=(0,L.useReducer)(e=>!e,!1);(0,L.useEffect)(()=>{c(a)},[a]);let h=e=>{e.preventDefault(),d?(i(t),c(!1)):(r(t),c(!0)),(0,l._P)(s.Yz.NFT_FILTER_SELECTED,{filter_type:s.fm.MARKETPLACE})},u=(0,n.jsx)(ee.X,{checked:d,hovered:p,onChange:h,children:(0,n.jsx)(x.n,{as:"span",color:"textSecondary",marginLeft:"4",paddingRight:"12",children:o})}),m=(0,n.jsxs)(er,{children:[(0,j.Dp)(e,"16"),e]});return(0,n.jsx)("div",{onMouseEnter:g,onMouseLeave:g,children:(0,n.jsx)(ea,{title:m,element:u,onClick:h})},t)},es=({title:e,items:t,onClick:r,isOpen:i})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.n,{className:X,opacity:i?"1":"0"}),(0,n.jsxs)(x.n,{as:"details",className:(0,$.default)(w.Nf,!i&&Z),open:i,borderRadius:i?"0":"12",children:[(0,n.jsxs)(x.n,{as:"summary",className:`${U} ${Z}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:r,children:[e,(0,n.jsx)(x.n,{display:"flex",alignItems:"center",children:(0,n.jsx)(x.n,{className:Y,style:{transform:`rotate(${i?0:180}deg)`},children:(0,n.jsx)(V.g8,{className:D})})})]}),(0,n.jsx)(f.sg,{className:W,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),eo=()=>{let{addMarket:e,removeMarket:t,markets:r,marketCount:i}=(0,G.PY)(({markets:e,marketCount:t,removeMarket:r,addMarket:i})=>({markets:e,marketCount:t,removeMarket:r,addMarket:i})),[s,o]=(0,L.useState)(!!r.length),l=J(e=>e.setTraitsOpen),d=(0,L.useMemo)(()=>Object.entries(ei).map(([a,s])=>(0,n.jsx)(en,{title:s,value:a,count:i?.[a]||0,addMarket:e,removeMarket:t,isMarketSelected:r.includes(a)},a)),[e,i,t,r]);return(0,n.jsx)(es,{title:"Marketplaces",items:d,onClick:e=>{e.preventDefault(),o(!s),l(a.MARKPLACE_INDEX,!s)},isOpen:s})},el=({sortDropDownOptions:e})=>{let[t,r]=(0,L.useState)(!1),i=e=>{e.preventDefault(),r(!t)},a=e.map(e=>(0,n.jsx)(ed,{dropDownOption:e,parentOnClick:i},e.displayText));return(0,n.jsx)(es,{title:"Sort by",items:a,onClick:i,isOpen:t})},ed=({dropDownOption:e,parentOnClick:t})=>{let r=(0,b.PY)(e=>e.sortBy),i=void 0!==e.sortBy&&r===e.sortBy?(0,n.jsx)(x.n,{as:"img",alt:e.displayText,width:"20",height:"20",objectFit:"cover",src:"/nft/svgs/checkmark.svg"}):(0,n.jsx)(n.Fragment,{});return(0,n.jsx)(ea,{title:e.displayText,element:i,onClick:r=>{r.preventDefault(),t(r),e.onClick()}})};var ec=r(55338),ep=r(17669);let eg=({dropDownOptions:e,inFilters:t,mini:r,miniPrompt:i,top:a,left:s})=>{let o=(0,b.PY)(e=>e.sortBy),[l,d]=(0,L.useReducer)(e=>!e,!1),[c,p]=(0,L.useReducer)(e=>!e,!1),[g,h]=(0,L.useState)(o),u=(0,b.Iv)(e=>e.isCollectionStatsLoading),[m,y]=(0,L.useState)(0);(0,L.useEffect)(()=>{h(o)},[o]);let j=(0,L.useRef)(null);(0,ec.t)(j,()=>l&&d()),(0,L.useEffect)(()=>y(0),[e]);let v=(0,L.useMemo)(()=>e[g].reverseOnClick||e[g].reverseIndex,[g,e]),C=u?220:t?"full":r?"min":m||"300px";return(0,n.jsxs)(x.n,{ref:j,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:C},children:[(0,n.jsx)(x.n,{as:"button",fontSize:"14",borderRadius:"12",borderStyle:l&&!r?"solid":"none",background:r?"none":"backgroundInteractive",borderColor:"backgroundOutline",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":r?"0":"8",color:"textPrimary",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",alignItems:"center",width:t?"full":"inherit",onClick:d,cursor:"pointer",className:u?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez1ap":(0,$.default)(l&&!r&&"_12q7kth0"),children:!u&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.n,{display:"flex",alignItems:"center",color:"textPrimary",children:[!l&&v&&(0,n.jsxs)(f.X2,{onClick:t=>{if(t.stopPropagation(),e[g].reverseOnClick)e[g].reverseOnClick?.(),p();else{let t=e[g].reverseIndex??1;e[t-1].onClick(),h(t-1)}},children:[e[g].reverseOnClick&&(c?(0,n.jsx)(V.iB,{}):(0,n.jsx)(V.L7,{})),e[g].reverseIndex&&(g>(e[g].reverseIndex??1)-1?(0,n.jsx)(V.iB,{}):(0,n.jsx)(V.L7,{}))]}),(0,n.jsx)(x.n,{marginLeft:v?"4":"0",marginRight:r?"2":"0",color:"textPrimary",className:w.km,children:r?i:l?"Sort by":e[g].displayText})]}),(0,n.jsx)(V.g8,{secondaryColor:r?ep.Z4.colors.textPrimary:void 0,secondaryWidth:r?"20":void 0,secondaryHeight:r?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,n.jsx)(x.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"backgroundModule",borderStyle:"solid",borderColor:"backgroundOutline",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:r?void 0:"0",borderTopRightRadius:r?void 0:"0",overflowY:"hidden",transition:"250",display:l||!m?"block":"none",visibility:m?"visible":"hidden",marginTop:r?"12":"0",className:(0,$.default)(!r&&"_12q7kth1"),style:{top:a?`${a}px`:"inherit",left:t?"16px":s?`${s}px`:"inherit"},children:m?l&&e.map((t,i)=>(0,n.jsx)(eh,{option:t,index:i,mini:r,onClick:()=>{e[i].onClick(),h(i),d(),c&&p()}},i)):[e.reduce((e,t)=>t.displayText.length>=e.displayText.length?t:e,e[0])].map((e,t)=>(0,n.jsx)(eu,{option:e,index:t,setMaxWidth:y},t))})]})},eh=({option:e,index:t,onClick:r,mini:i})=>(0,n.jsx)(x.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:i?"20":"0",width:"full",background:{default:"backgroundModule",hover:"backgroundInteractive"},color:"textPrimary",onClick:r,cursor:"pointer",children:(0,n.jsx)(x.n,{marginLeft:"8",className:w.km,children:e.displayText})},t),eu=({option:e,index:t,setMaxWidth:r})=>{let i=(0,L.useRef)(null);return(0,L.useLayoutEffect)(()=>{i&&i.current&&r(Math.ceil(i.current.getBoundingClientRect().width)+52)}),(0,n.jsx)(x.n,{position:"absolute",ref:i,children:(0,n.jsx)(eh,{option:e,index:t})},t)};var em=r(70453),ex=r(37506);let ef=(0,K.Ue)()((0,q.mW)(e=>({priceRangeLow:"",setPriceRangeLow:t=>{e(()=>({priceRangeLow:t}))},priceRangeHigh:"",setPriceRangeHigh:t=>{e(()=>({priceRangeHigh:t}))},prevMinMax:[0,100],setPrevMinMax:t=>{e(()=>({prevMinMax:t}))}}),{name:"usePriceRange"}));var ew=r(39401);let eb="undefined"!=typeof window,ey=()=>{let e=!!eb&&window.innerWidth<ep.AV.sm;window.document.getElementById(e?"nft-anchor-mobile":"nft-anchor")?.scrollIntoView({behavior:"smooth"})};var ej=r(93343);let ev=e=>e.substring(1,e.length-1),eC={removeDefaults:e=>{let t={...e};for(let e in t){let r=t[e],i=b.initialCollectionFilterState[e];JSON.stringify(r)===JSON.stringify(i)&&delete t[e]}t.all!==b.initialCollectionFilterState.buyNow&&delete t.all;let r=b.i9[b.initialCollectionFilterState.sortBy];return t.sort===r&&delete t.sort,t},buildQuery:(e,t)=>{let r={...e};["traits","markets"].forEach(e=>{r[e]||(r[e]=[]),r[e]&&"string"==typeof r[e]&&(r[e]=[r[e]])});try{let{buyNow:e,search:i}=b.initialCollectionFilterState;if(Object.entries(b.i9).forEach(([e,t])=>{t===r.sort&&(r.sortBy=Number(e))}),r.buyNow=!(void 0===r.all?!e:r.all),r.search=void 0===r.search?i:String(r.search),2===r.traits.length){let[e,t]=r.traits,i=`${e}${t}`;!i.includes(",")&&e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(r.traits=[`${e},${t}`])}r.traits=r.traits.map(e=>{let r=ev(e.replace(/(")/g,"")),[i,a]=r.split(","),n=t.traits&&t.traits[i].find(e=>e.trait_value===a),s=n??{trait_type:i,trait_value:a,trait_count:0};return s})}catch(e){r.traits=[]}return r}},e_=e=>{let t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach(r=>{switch(r){case"traits":{let r=e.traits.map(({trait_type:e,trait_value:t})=>`("${e}","${t}")`);t.traits=r;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=b.i9[e.sortBy];break;default:t[r]=e[r]}});let r=eC.removeDefaults(t),i=window.location.href.split("?")[0],a=ej.stringify(r,{arrayFormat:"comma"});window.history.replaceState({},"",`${i}${a&&`?${a}`}`)},ek=(e,t)=>{if(!e.search)return;let r=ej.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0}),i=eC.buildQuery(r,t);return i};var eS=r(69518),eI=r(27591),eT=r(35837),eN=r(21849);r(6754);var ez=r(95792);let eP=_.default.div.withConfig({displayName:"Sweep__SweepContainer",componentId:"sc-52234eae-0"})`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.backgroundSurface};
  justify-content: space-between;
  background: linear-gradient(${({theme:e})=>e.backgroundSurface}, ${({theme:e})=>e.backgroundSurface})
      padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,e$=(0,_.default)(ez.Z).withConfig({displayName:"Sweep__StyledSlider",componentId:"sc-52234eae-1"})`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,eE=_.default.div.withConfig({displayName:"Sweep__SweepLeftmostContainer",componentId:"sc-52234eae-2"})`
  display: flex;
  width: 100%;
  gap: 24px;
`,eR=_.default.div.withConfig({displayName:"Sweep__SweepRightmostContainer",componentId:"sc-52234eae-3"})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,eF=_.default.div.withConfig({displayName:"Sweep__SweepHeaderContainer",componentId:"sc-52234eae-4"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,eM=_.default.div.withConfig({displayName:"Sweep__SweepSubContainer",componentId:"sc-52234eae-5"})`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,eB=_.default.input.withConfig({displayName:"Sweep__InputContainer",componentId:"sc-52234eae-6"})`
  width: 96px;
  color: ${({theme:e})=>e.textPrimary};
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 400px;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accentAction};
  }
`,eA=_.default.div.withConfig({displayName:"Sweep__ToggleContainer",componentId:"sc-52234eae-7"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,eL=_.default.div.withConfig({displayName:"Sweep__ToggleSwitch",componentId:"sc-52234eae-8"})`
  color: ${({theme:e,active:t})=>t?e.textPrimary:e.textSecondary};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.backgroundInteractive:"none"};
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
`,eH=_.default.div.withConfig({displayName:"Sweep__NftDisplayContainer",componentId:"sc-52234eae-9"})`
  position: relative;
  width: 34px;
  height: 34px;
`,eO=_.default.div.withConfig({displayName:"Sweep__NftHolder",componentId:"sc-52234eae-10"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.textTertiary};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,eY=RegExp("^(0|[1-9][0-9]*)$"),eD=RegExp("^\\d*\\.?\\d{0,2}$"),eX=({nfts:e})=>(0,n.jsx)(eH,{children:[void 0,void 0,void 0].map((t,r)=>(0,n.jsx)(eO,{index:r,src:e.length-1>=r?e[e.length-1-r].smallImageUrl:void 0},r))}),eW=({contractAddress:e,minPrice:t,maxPrice:r})=>{let i=(0,_.useTheme)(),[a,s]=(0,L.useReducer)(e=>!e,!0),[o,l]=(0,L.useState)(""),d=(0,b.cP)(e=>e.addAssetsToBag),c=(0,b.cP)(e=>e.removeAssetsFromBag),p=(0,b.cP)(e=>e.itemsInBag),g=(0,b.cP)(e=>e.lockSweepItems),h=(0,b.cP)(e=>e.setBagExpanded),u=(0,b.PY)(e=>e.traits),m=(0,b.PY)(e=>e.markets),x=eZ(e,"others",t,r),f=eZ(e,ew.Fz.Sudoswap,t,r),w=eZ(e,ew.Fz.NFTX,t,r),y=eZ(e,ew.Fz.NFT20,t,r),{data:v}=(0,R.he)(x),{data:C}=(0,R.he)(f),{data:k}=(0,R.he)(w),{data:S}=(0,R.he)(y),{sortedAssets:I,sortedAssetsTotalEth:T}=(0,L.useMemo)(()=>{if(!v&&!C&&!k&&!S)return{sortedAssets:void 0,sortedAssetsTotalEth:z.O$.from(0)};let e=0,t=0,r=[];C&&(r=[...r,...C]),k&&(r=[...r,...k]),S&&(r=[...r,...S]);let i=r.filter(e=>e.marketplace===ew.Fz.Sudoswap&&!e.susFlag);r.forEach(r=>{if(!r.susFlag){if(r.marketplace===ew.Fz.Sudoswap){let e=(0,j.Pu)(r,i.filter(e=>(0,j.zA)(r,e)).findIndex(e=>e.tokenId===r.tokenId));r.priceInfo.ETHPrice=e??"0"}else{let i=r.marketplace===ew.Fz.NFTX,a=(0,j.Pu)(r,i?e:t);z.O$.from(a).gt(0)&&(i?e++:t++),r.priceInfo.ETHPrice=a}}}),(r=v?v.concat(r):r).sort((e,t)=>z.O$.from(e.priceInfo.ETHPrice).gt(z.O$.from(t.priceInfo.ETHPrice))?1:-1);let a=r.filter(e=>z.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag);return{sortedAssets:a=a.slice(0,Math.max(v?.length??0,C?.length??0,k?.length??0,S?.length??0)),sortedAssetsTotalEth:a.reduce((e,t)=>e.add(z.O$.from(t.priceInfo.ETHPrice)),z.O$.from(0))}},[v,C,k,S]),{sweepItemsInBag:N,sweepEthPrice:$}=(0,L.useMemo)(()=>{let t=p.filter(t=>t.inSweep&&t.asset.address===e).map(e=>e.asset),r=t.reduce((e,t)=>e.add(z.O$.from(t.priceInfo.ETHPrice)),z.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:r}},[p,e]);(0,L.useEffect)(()=>{0===N.length&&l("")},[N]),(0,L.useEffect)(()=>{g(e)},[e,u,m,t,r,g]);let E=()=>{l(""),c(N)},F=e=>{if(I){if(a)0===N.length&&e>0&&h({bagExpanded:!0}),N.length<e?d(I.slice(N.length,e),!0):c(N.slice(e,N.length),!0),l(e<1?"":e.toString());else{let t=(0,P.parseEther)(e.toString());if($.lte(t)){let e=N.length,r=$,i=[];for(;e<I.length&&r.add(z.O$.from(I[e].priceInfo.ETHPrice)).lte(t);)i.push(I[e]),r=r.add(z.O$.from(I[e].priceInfo.ETHPrice)),e++;i.length>0&&(0===N.length&&h({bagExpanded:!0}),d(i,!0))}else{let e=N.length-1,r=$,i=[];for(;e>=0&&r.gt(t);)i.push(N[e]),r=r.sub(z.O$.from(N[e].priceInfo.ETHPrice)),e--;i.length>0&&c(i,!0)}l(0===e?"":e.toFixed(2))}}},B=e=>{""===e?(F(0),l("")):a&&eY.test(e)?(F(parseFloat(e)),l(e)):!a&&eD.test(e)&&(F(parseFloat(e)),l(e))};return(0,n.jsxs)(eP,{"data-testid":"nft-sweep-slider",children:[(0,n.jsxs)(eE,{children:[(0,n.jsx)(eF,{children:(0,n.jsx)(Q.Tv.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,n.jsx)(M.cC,{id:"ZC4hNh"})})}),(0,n.jsxs)(eM,{children:[(0,n.jsx)(e$,{defaultValue:0,min:0,max:a?I?.length??0:parseFloat((0,P.formatEther)(T).toString()),value:a?N.length:parseFloat((0,j.zb)($.toString())),step:a?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${i.shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${i.backgroundInteractive}`},onChange:e=>{"number"==typeof e&&I&&(a?(Math.floor(e)!==Math.floor(""!==o?parseFloat(o):0)&&F(Math.floor(e)),l(e<1?"":e.toString())):(F(e),l(0===e?"":e.toFixed(2))))}}),(0,n.jsx)(eB,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:a&&""!==o?Math.floor(parseFloat(o)):o,onChange:e=>{B(e.target.value.replace(/,/g,"."))}}),(0,n.jsxs)(eA,{onClick:()=>{E(),s()},children:[(0,n.jsx)(eL,{active:a,children:"Items"}),(0,n.jsx)(eL,{active:!a,children:"ETH"})]})]})]}),(0,n.jsxs)(eR,{children:[(0,n.jsx)(Q.Tv.SubHeader,{"font-size":"14px",children:`${(0,j.zb)($.toString())} ETH`}),(0,n.jsx)(eX,{nfts:N})]})]})},eU=[ew.Fz.Opensea,ew.Fz.X2Y2,ew.Fz.LooksRare];function eZ(e,t,r,i){let a=(0,b.PY)(e=>e.traits),n=(0,b.PY)(e=>e.markets),s=!!n.length;return(0,L.useMemo)(()=>{if(s){if("others"===t){let t=n.filter(e=>!(0,ew.g7)(e));return t.length>0?{contractAddress:e,traits:a,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!n.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case ew.Fz.Sudoswap:case ew.Fz.NFTX:case ew.Fz.NFT20:return{contractAddress:e,traits:a,markets:[t],price:{low:r,high:i,symbol:"ETH"}};case"others":return{contractAddress:e,traits:a,markets:eU,price:{low:r,high:i,symbol:"ETH"}}}},[e,s,t,n,i,r,a])}let eV=_.default.div.withConfig({displayName:"TraitChip__TraitChipWrap",componentId:"sc-ef4e5ba6-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 600;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.backgroundInteractive};
  font-size: 14px;
`,eG=_.default.div.withConfig({displayName:"TraitChip__CrossIconWrap",componentId:"sc-ef4e5ba6-1"})`
  color: ${({theme:e})=>e.textSecondary};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,eK=({onClick:e,value:t})=>(0,n.jsxs)(eV,{children:[(0,n.jsx)("span",{children:t}),(0,n.jsx)(eG,{onClick:e,children:(0,n.jsx)(V.aM,{cursor:"pointer"})})]}),eq=new Map,eJ=(0,_.css)`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,eQ=_.default.div.withConfig({displayName:"CollectionNfts__ActionsContainer",componentId:"sc-beb20e5b-0"})`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${eJ}
`,e0=_.default.div.withConfig({displayName:"CollectionNfts__ActionsSubContainer",componentId:"sc-beb20e5b-1"})`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,e1=_.default.div.withConfig({displayName:"CollectionNfts__SortDropdownContainer",componentId:"sc-beb20e5b-2"})`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,e2=_.default.div.withConfig({displayName:"CollectionNfts__EmptyCollectionWrapper",componentId:"sc-beb20e5b-3"})`
  display: block;
  text-align: center;
`,e6=_.default.span.withConfig({displayName:"CollectionNfts__ViewFullCollection",componentId:"sc-beb20e5b-4"})`
  ${c.c}
`,e4=_.default.div.withConfig({displayName:"CollectionNfts__InfiniteScrollWrapper",componentId:"sc-beb20e5b-5"})`
  ${eJ}
`,e7=_.default.div.withConfig({displayName:"CollectionNfts__SweepButton",componentId:"sc-beb20e5b-6"})`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:r})=>e&&!t?r.accentTextLightPrimary:r.textPrimary};
  background: ${({theme:e,toggled:t,disabled:r})=>!r&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.backgroundInteractive};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.hoverState};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,e3=(0,_.default)(Q.Tv.BodyPrimary).withConfig({displayName:"CollectionNfts__SweepText",componentId:"sc-beb20e5b-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,e9=(0,_.default)(f.X2).withConfig({displayName:"CollectionNfts__MarketNameWrapper",componentId:"sc-beb20e5b-8"})`
  gap: 8px;
`,e8=({height:e})=>(0,n.jsx)(x.n,{width:"full",className:O.P,children:(0,n.jsx)(eT.p,{height:e})}),e5=()=>(0,n.jsx)(e4,{children:(0,n.jsxs)(f.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,n.jsxs)(f.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,n.jsx)(x.n,{className:em.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,n.jsx)(x.n,{className:em.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,n.jsx)(x.n,{className:em.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,n.jsx)(e8,{})]})}),te=(e,t)=>{let r=[{displayText:"Price: Low to High",onClick:()=>e(b.hn.LowToHigh),reverseIndex:2,sortBy:b.hn.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(b.hn.HighToLow),reverseIndex:1,sortBy:b.hn.HighToLow}];return t?r.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(b.hn.RareToCommon),reverseIndex:4,sortBy:b.hn.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(b.hn.CommonToRare),reverseIndex:3,sortBy:b.hn.CommonToRare}]):r},tt=({contractAddress:e,collectionStats:t,rarityVerified:r})=>{let{chainId:i}=(0,o.useWeb3React)(),a=(0,b.PY)(e=>e.traits),d=(0,b.PY)(e=>e.minPrice),c=(0,b.PY)(e=>e.maxPrice),p=(0,b.PY)(e=>e.markets),g=(0,b.PY)(e=>e.sortBy),h=(0,b.PY)(e=>e.search),m=(0,b.PY)(e=>e.setMarketCount),y=(0,b.PY)(e=>e.setSortBy),v=(0,b.PY)(e=>e.buyNow),C=ef(e=>e.setPriceRangeLow),_=ef(e=>e.priceRangeLow),k=ef(e=>e.priceRangeHigh),S=ef(e=>e.setPriceRangeHigh),I=ef(e=>e.setPrevMinMax),T=(0,ex.I)(e=>e.setIsCollectionNftsLoading),N=(0,b.PY)(e=>e.removeTrait),M=(0,b.PY)(e=>e.removeMarket),B=(0,b.PY)(e=>e.reset),A=(0,b.PY)(e=>e.setMinPrice),Y=(0,b.PY)(e=>e.setMaxPrice),D=(0,b.PY)(e=>e.setHasRarity),X=(0,b.cP)(e=>e.toggleBag),W=(0,b.cP)(e=>e.bagExpanded),U=(0,b.cP)(e=>e.itemsInBag),Z=(0,F.Z)(d,500),G=(0,F.Z)(c,500),K=(0,F.Z)(h,500),[q,J]=(0,L.useState)(ew.Yp.unset),[Q,ee]=(0,L.useState)(),[et,er]=(0,L.useState)(!1),ea={address:e,orderBy:b.AZ[g].field,asc:b.AZ[g].asc,filter:{listed:v,marketplaces:p.length>0?p.map(e=>e.toUpperCase()):void 0,maxPrice:G?(0,P.parseEther)(G.toString()).toString():void 0,minPrice:Z?(0,P.parseEther)(Z.toString()).toString():void 0,tokenSearchQuery:K,traits:a.length>0?a.map(e=>({name:e.trait_type,values:[e.trait_value]})):void 0},first:R.iQ},{data:en,loading:es,hasNext:eo,loadMore:el}=(0,R.gP)(ea),ed=(0,L.useCallback)(e=>{let t=U.some(t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address);if(e.marketplace===ew.Fz.Sudoswap){let r=U.filter(t=>(0,j.zA)(e,t.asset));return t?r.findIndex(t=>t.asset.tokenId===e.tokenId):r.length}return t?U.filter(t=>(0,j.H8)(e,t.asset)).findIndex(t=>t.asset.tokenId===e.tokenId):U.filter(t=>(0,j.H8)(e,t.asset)).length},[U]),ec=(0,L.useCallback)(e=>(0,j.Pu)(e,ed(e)),[ed]),ep=(0,L.useMemo)(()=>{if(!en||!en.some(e=>e.marketplace&&(0,ew.g7)(e.marketplace)))return en;let e=[...en];return e.forEach(e=>e.marketplace&&(0,ew.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=ec(e)??"0")),(g===b.hn.HighToLow||g===b.hn.LowToHigh)&&e.sort((e,t)=>{let r=z.O$.from(e.priceInfo?.ETHPrice??0),i=z.O$.from(t.priceInfo?.ETHPrice??0);if(r.gt(0)&&i.lte(0))return -1;if(i.gt(0)&&r.lte(0))return 1;let a=r.sub(i);return a.gt(0)?g===b.hn.LowToHigh?1:-1:a.lt(0)?g===b.hn.LowToHigh?-1:1:0}),e},[en,g,ec]),[eh,eu]=(0,L.useState)(),[em,eb]=(0,b.wx)(),ej=(0,L.useRef)(null),ev=(0,b.dD)(),eC=(0,u.e)();(0,L.useEffect)(()=>{T(es)},[es,T]);let ez=(0,L.useMemo)(()=>{let e=(0,j.oY)(eq,t?.address,ep)??!1;return D(e),e},[t.address,ep,D]),eP=(0,L.useMemo)(()=>te(y,ez),[ez,y]);(0,L.useEffect)(()=>(er(!1),()=>{b.PY.setState(b.initialCollectionFilterState)}),[e]);let e$=(0,L.useMemo)(()=>ep?ep.map(e=>(0,n.jsx)(H,{asset:e,isMobile:ev,mediaShouldBePlaying:e.tokenId===eh,setCurrentTokenPlayingMedia:eu,rarityVerified:r,uniformAspectRatio:q,setUniformAspectRatio:J,renderedHeight:Q,setRenderedHeight:ee},e.address+e.tokenId)):null,[ep,ev,eh,r,q,Q]),eE=ep&&ep.length>0,eR=eE&&ep[0]&&ep[0]?.tokenType===E.hg.Erc1155,eF=(0,L.useMemo)(()=>Z&&G?`Price: ${Z} - ${G} ETH`:Z?`Min. Price: ${Z} ETH`:G?`Max Price: ${G} ETH`:void 0,[Z,G]);(0,L.useEffect)(()=>{let e={};t?.marketplaceCount?.forEach(({marketplace:t,count:r})=>{e[t]=r}),m(e),ej.current=b.PY.getState()},[t?.marketplaceCount,m]);let eM=(0,eI.TH)();(0,L.useEffect)(()=>{if(t?.traits){let e=ek(eM,t);requestAnimationFrame(()=>{e&&b.PY.setState(e)}),b.PY.subscribe(e=>{JSON.stringify(ej.current)!==JSON.stringify(e)&&(e_(e),ej.current=e)})}},[eM]),(0,L.useEffect)(()=>{J(ew.Yp.unset),ee(void 0)},[e]),(0,L.useEffect)(()=>{if(t&&t.stats?.floor_price){let e=t.stats?.floor_price,r=10*t.stats?.floor_price;""===_&&C(e?.toFixed(2)),""===k&&S(r.toFixed(2))}},[t,_,k,S,C]);let eB=(0,L.useCallback)(()=>{eR||(et||(ey(),W||ev||X()),er(!et))},[W,eR,ev,et,X]),eA=(0,L.useCallback)(()=>{B(),I([0,100]),ey()},[B,I]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.x,{backgroundColor:"backgroundBackdrop",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,n.jsxs)(eQ,{children:[(0,n.jsxs)(e0,{children:[(0,n.jsx)(l.M8,{events:[s.TM.onClick],element:s.xo.NFT_FILTER_BUTTON,name:s.Yz.NFT_FILTER_OPENED,shouldLogImpression:!em,properties:{collection_address:e,chain_id:i},children:(0,n.jsx)(tI.L,{isMobile:ev,isFiltersExpanded:em,collectionCount:ep?.[0]?.totalCount??0,onClick:()=>{W&&!eC.xl&&X(),eb(!em)}})}),(0,n.jsx)(e1,{isFiltersExpanded:em,children:(0,n.jsx)(eg,{dropDownOptions:eP})}),(0,n.jsx)(tr,{})]}),!eR&&(0,n.jsxs)(e7,{toggled:et,disabled:eR,className:w.km,onClick:eB,"data-testid":"nft-sweep-button",children:[(0,n.jsx)(V.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,n.jsx)(e3,{fontWeight:600,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,n.jsxs)(e4,{children:[et&&(0,n.jsx)(eW,{contractAddress:e,minPrice:Z,maxPrice:G}),(0,n.jsxs)(f.X2,{paddingTop:p.length||a.length||eF?"12":"0",gap:"8",flexWrap:"wrap",children:[p.map(e=>(0,n.jsx)(eK,{value:(0,n.jsxs)(e9,{children:[(0,j.Dp)(e,"16"),ei[e]]}),onClick:()=>{ey(),M(e)}},e)),a.map(e=>(0,n.jsx)(eK,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,j._6)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{ey(),N(e)}},e.trait_value)),eF&&(0,n.jsx)(eK,{value:eF,onClick:()=>{ey(),A(""),Y(""),I([0,100])}}),!!(a.length||p.length||eF)&&(0,n.jsx)(eN.v,{onClick:eA,children:"Clear All"})]})]})]}),(0,n.jsx)(e4,{children:es?(0,n.jsx)(e8,{height:Q}):(0,n.jsx)(eS.Z,{next:el,hasMore:eo??!1,loader:!!(eo&&eE)&&(0,n.jsx)(eT.p,{}),dataLength:ep?.length??0,style:{overflow:"unset"},className:eE?O.P:void 0,children:eE?e$:(0,n.jsx)(f.M5,{width:"full",color:"textSecondary",textAlign:"center",style:{height:"60vh"},children:(0,n.jsxs)(e2,{children:[(0,n.jsx)("p",{className:w.Es,children:"No NFTS found"}),(0,n.jsx)(x.n,{onClick:B,type:"button",className:(0,$.default)(w.Km,w.km),color:"accentAction",cursor:"pointer",children:(0,n.jsx)(e6,{children:"View full collection"})})]})})})})]})},tr=()=>{let e=(0,G.PY)(e=>e.setSearch),t=(0,G.PY)(e=>e.search),r=(0,b.Iv)(e=>e.isCollectionStatsLoading);return(0,n.jsx)(x.n,{as:"input",flex:"1",borderColor:{default:"backgroundOutline",focus:"accentAction"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"backgroundSurface",maxWidth:"332",minWidth:"0",fontSize:"16",height:"44",color:{placeholder:"textTertiary",default:"textPrimary"},value:t,placeholder:r?"":"Search by name",className:(0,$.default)(r&&"_2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez7iz"),onChange:t=>{e(t.currentTarget.value)}})};var ti=r(21890),ta=r(27742),tn=r(31631),ts=r.n(tn),to="_2kdvfw1 jinxmn3 rgw6ez347 rgw6ez7ab rgw6ez7k7 rgw6ez517 rgw6ez7cj rgw6ez48p jinxmnf",tl="jinxmn3 rgw6ez347 rgw6ez7ab rgw6ez7k7 rgw6ez517 rgw6ez7cj rgw6ez48p rgw6ez6cj",td="jinxmn1 rgw6ezwj rgw6ezye rgw6ezf7 rgw6ezhe";let tc=_.default.div.withConfig({displayName:"CollectionStats__PercentChange",componentId:"sc-2ed191bb-0"})`
  color: ${({theme:e,isNegative:t})=>t?e.accentFailure:e.accentSuccess};
  display: flex;
  align-items: center;
  justify-content: center;
`,tp=_.default.div.withConfig({displayName:"CollectionStats__CollectionNameText",componentId:"sc-2ed191bb-1"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: ${({isVerified:e})=>e?"12px":"0px"};
`,tg=_.default.div.withConfig({displayName:"CollectionStats__CollectionNameTextLoading",componentId:"sc-2ed191bb-2"})`
  ${em.S}
  height: 32px;
  width: 236px;
`,th=_.default.div.withConfig({displayName:"CollectionStats__MobileSocialsOverflowIcon",componentId:"sc-2ed191bb-3"})`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,tu=({children:e,href:t})=>(0,n.jsx)(x.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"backgroundSurface",children:e}),tm=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:r})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(th,{onClick:r,children:t?(0,n.jsx)(V.DX,{width:"28",height:"28",fill:ep.Z4.colors.textSecondary}):(0,n.jsx)(V.ws,{width:"28",height:"20",fill:ep.Z4.colors.textSecondary})}),t&&(0,n.jsxs)(f.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,n.jsx)(tu,{href:e.discordUrl,children:(0,n.jsx)(x.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(V.D7,{width:28,height:28,color:ep.Z4.colors.textSecondary})})}):null,e.twitterUrl?(0,n.jsx)(tu,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(x.n,{margin:"auto",paddingTop:"6",children:(0,n.jsx)(V.Zm,{fill:ep.Z4.colors.textSecondary,color:ep.Z4.colors.textSecondary,width:"28px",height:"28px"})})}):null,e.instagram?(0,n.jsx)(tu,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(x.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,n.jsx)(V.yu,{fill:ep.Z4.colors.textSecondary,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,n.jsx)(tu,{href:e.externalUrl,children:(0,n.jsx)(x.n,{margin:"auto",paddingTop:"4",children:(0,n.jsx)(V.O1,{fill:ep.Z4.colors.textSecondary,width:"28px",height:"28px"})})}):null]})]}),tx=({children:e,href:t})=>(0,n.jsx)(f.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),tf=({collectionStats:e,name:t,isVerified:r,isMobile:i,collectionSocialsIsOpen:a,toggleCollectionSocials:s})=>{let o=(0,ex.I)(e=>e.isCollectionStatsLoading);return(0,n.jsxs)(f.X2,{justifyContent:"space-between",children:[(0,n.jsxs)(f.X2,{minWidth:"0",children:[o?(0,n.jsx)(tg,{}):(0,n.jsx)(tp,{isVerified:r,className:i?w.td:w.Es,children:t}),r&&(0,n.jsx)(V.SA,{style:{width:"32px",height:"32px"}}),(0,n.jsxs)(f.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,n.jsx)(tx,{href:e.discordUrl??"",children:(0,n.jsx)(V.D7,{fill:ep.Z4.colors.textSecondary,color:ep.Z4.colors.textSecondary,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,n.jsx)(tx,{href:"https://twitter.com/"+e.twitterUrl,children:(0,n.jsx)(V.Zm,{fill:ep.Z4.colors.textSecondary,color:ep.Z4.colors.textSecondary,width:"26px",height:"26px"})}):null,e.instagram?(0,n.jsx)(tx,{href:"https://instagram.com/"+e.instagram,children:(0,n.jsx)(V.yu,{fill:ep.Z4.colors.textSecondary,width:"26px",height:"26px"})}):null,e.externalUrl?(0,n.jsx)(tx,{href:e.externalUrl??"",children:(0,n.jsx)(V.O1,{fill:ep.Z4.colors.textSecondary,width:"26px",height:"26px"})}):null]})]}),i&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,n.jsx)(tm,{collectionStats:e,collectionSocialsIsOpen:a,toggleCollectionSocials:s})]})},tw=_.default.div.withConfig({displayName:"CollectionStats__CollectionDescriptionText",componentId:"sc-2ed191bb-4"})`
  vertical-align: top;
  text-overflow: ellipsis;

  ${({readMore:e})=>e?(0,_.css)`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:(0,_.css)`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.textSecondary};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,tb=_.default.span.withConfig({displayName:"CollectionStats__ReadMore",componentId:"sc-2ed191bb-5"})`
  vertical-align: top;
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;
  margin-left: 4px;
`,ty=()=>(0,n.jsx)(x.n,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez19d"}),tj=({description:e})=>{let[t,r]=(0,L.useState)(!1),[i,a]=(0,L.useReducer)(e=>!e,!1),s=(0,L.useRef)(null),o=(0,L.useRef)(null),l=(0,ex.I)(e=>e.isCollectionStatsLoading),d=(0,b.dD)();return(0,L.useEffect)(()=>{s&&o&&s.current&&o.current&&(o.current.getBoundingClientRect().width>=s.current?.getBoundingClientRect().width-112||o.current.getBoundingClientRect().width>=590)?r(!0):r(!1)},[o,s,l,e]),l?(0,n.jsx)(ty,{}):(0,n.jsxs)(x.n,{ref:s,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,n.jsx)(tw,{readMore:i,ref:o,className:d?w.Km:w.d1,children:(0,n.jsx)(ts(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,n.jsxs)(tb,{className:d?w.Km:w.d1,onClick:a,children:["show ",i?"less":"more"]})]})},tv=({children:e,label:t,shouldHide:r})=>(0,n.jsxs)(x.n,{display:r?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,n.jsx)(Q.Tv.SubHeader,{className:"jinxmn6 rgw6ezd1 rgw6ezb7 rgw6ezej",children:e}),(0,n.jsx)(x.n,{as:"span",className:"jinxmn5 rgw6ezcv rgw6ezav rgw6ezdv rgw6ez4ep rgw6ez45p",children:t})]}),tC=e=>Array(e?3:5).fill(null).map((t,r)=>(0,n.jsxs)(x.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,n.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez14j rgw6ez191"}),(0,n.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez14j rgw6ez19d rgw6ezwj"})]},`statsLoadingSkeleton-key-${r}`)),t_=({stats:e,isMobile:t,...r})=>{let i=e?.stats?.total_supply?(0,ta.rW)((e.stats.num_owners??0)/e.stats.total_supply*100):0,a=e.stats?(0,ta._o)(e.stats.total_supply??0):0,s=e?.stats?.total_supply?(0,ta.rW)((e.stats.total_listings??0)/e.stats.total_supply*100):0,o=(0,ex.I)(e=>e.isCollectionStatsLoading),l=(0,ta.Ci)(Number(e.stats?.total_volume)??0),d=(0,ta.ms)(e.stats?.floor_price??0),c=Math.round(Math.abs(e?.stats?.one_day_floor_change??0)),p=e?.stats?.one_day_floor_change?(0,ti.y7)(e.stats.one_day_floor_change):void 0,g=(0,b.cP)(e=>e.bagExpanded),h=(0,u.e)(),m=t||!h.lg&&g;return(0,n.jsx)(f.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...r,children:o?tC(t??!1):(0,n.jsxs)(n.Fragment,{children:[e.stats?.floor_price?(0,n.jsxs)(tv,{label:"Global floor",shouldHide:!1,children:[d," ETH"]}):null,e.stats?.one_day_floor_change!==void 0?(0,n.jsx)(tv,{label:"Floor 24H",shouldHide:!1,children:(0,n.jsxs)(tc,{isNegative:e.stats.one_day_floor_change<0,children:[p,c,"%"]})}):null,e.stats?.total_volume?(0,n.jsxs)(tv,{label:"Total volume",shouldHide:!1,children:[l," ETH"]}):null,a?(0,n.jsx)(tv,{label:"Items",shouldHide:t??!1,children:a}):null,i&&e.standard!==ew.iv.ERC1155?(0,n.jsxs)(tv,{label:"Unique owners",shouldHide:m??!1,children:[i,"%"]}):null,e.stats?.total_listings&&e.standard!==ew.iv.ERC1155?(0,n.jsxs)(tv,{label:"Listed",shouldHide:m??!1,children:[s,"%"]}):null]})})},tk=({isMobile:e})=>(0,n.jsxs)(f.sg,{position:"relative",width:"full",children:[(0,n.jsx)(x.n,{className:tl}),(0,n.jsx)(x.n,{className:to}),(0,n.jsxs)(x.n,{className:td,children:[(0,n.jsx)(x.n,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez7bj rgw6ez79v rgw6ez4gj rgw6ez1a1"}),!e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ty,{}),(0,n.jsx)(f.X2,{gap:"60",marginTop:"20",children:tC(!1)})]})]}),e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ty,{}),(0,n.jsx)(f.X2,{gap:"20",marginTop:"20",children:tC(!0)})]})]}),tS=({stats:e,isMobile:t})=>{let[r,i]=(0,L.useReducer)(e=>!e,!1),a=(0,ex.I)(e=>e.isCollectionStatsLoading);return(0,n.jsxs)(x.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?r?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[a&&(0,n.jsx)(x.n,{as:"div",borderRadius:"round",position:"absolute",className:tl}),(0,n.jsx)(x.n,{as:a?"div":"img",background:"explicitWhite",borderRadius:"round",position:"absolute",className:a?to:"jinxmn3 rgw6ez347 rgw6ez7ab rgw6ez7k7 rgw6ez517 rgw6ez7cj rgw6ez48p",src:e.imageUrl}),(0,n.jsxs)(x.n,{className:td,children:[(0,n.jsx)(tf,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:r,toggleCollectionSocials:i}),(e.description||a)&&!t&&(0,n.jsx)(tj,{description:e.description??""}),(0,n.jsx)(t_,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||a)&&t&&(0,n.jsx)(tj,{description:e.description??""}),(0,n.jsx)("div",{id:"nft-anchor-mobile"}),(0,n.jsx)(t_,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var tI=r(77331),tT=r(74090),tN=r(62878),tz="rgw6ezcp rgw6ezb1 rgw6ezed rgw6ez6fj rgw6ez2ud rgw6ez7bj rgw6ez7ab rgw6ez7jv";let tP=_.default.div.withConfig({displayName:"TraitsHeader__ChildreMobileWrapper",componentId:"sc-69c6ab3e-0"})`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,t$=e=>{let{children:t,index:r,title:i}=e,[s,o]=(0,L.useState)(!1),l=J(e=>e.traitsOpen),d=J(e=>e.setTraitsOpen),c=(0,b.dD)(),p=void 0!==r&&l[r-1],g=r!==a.TRAIT_START_INDEX;return(0,L.useEffect)(()=>{void 0!==r&&d(r,s)},[s,r,d]),(0,n.jsxs)(n.Fragment,{children:[g&&(0,n.jsx)(x.n,{className:(0,$.default)(w.Nf,!s&&Z,X),opacity:!p&&s&&0!==r?"1":"0",marginTop:p?"0":"8"}),(0,n.jsxs)(x.n,{as:"details",className:(0,$.default)(w.Nf,!s&&Z),open:s,children:[(0,n.jsxs)(x.n,{as:"summary",className:`${U} ${Z}`,onClick:e=>{e.preventDefault(),o(!s)},children:[i,(0,n.jsxs)(x.n,{display:"flex",alignItems:"center",children:[(0,n.jsx)(x.n,{color:"textTertiary",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,n.jsx)(x.n,{className:Y,style:{transform:`rotate(${s?0:180}deg)`},children:(0,n.jsx)(V.g8,{className:D})})]})]}),(0,n.jsx)(tP,{isMobile:c,children:t})]})]})},tE=(0,_.default)(ez.Z).withConfig({displayName:"PriceRange__StyledSlider",componentId:"sc-45cacef3-0"})`
  cursor: pointer;
`,tR=()=>{let[e,t]=(0,L.useState)(""),r=(0,G.PY)(e=>e.setMinPrice),i=(0,G.PY)(e=>e.setMaxPrice),o=(0,G.PY)(e=>e.minPrice),d=(0,G.PY)(e=>e.maxPrice),c=ef(e=>e.priceRangeLow),p=ef(e=>e.priceRangeHigh),g=ef(e=>e.setPriceRangeLow),h=ef(e=>e.setPriceRangeHigh),u=ef(e=>e.prevMinMax),m=ef(e=>e.setPrevMinMax),b=(0,_.useTheme)(),y=(0,eI.TH)();(0,L.useEffect)(()=>{r(""),i(""),g(""),h("")},[y.pathname,r,i,g,h]);let j=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},v=r=>{r.currentTarget.placeholder=e,t(""),(o||d)&&(0,l._P)(s.Yz.NFT_FILTER_SELECTED,{filter_type:s.fm.PRICE_RANGE})};return(0,n.jsxs)(t$,{title:"Price range",index:a.PRICE_RANGE_INDEX,children:[(0,n.jsxs)(f.X2,{marginTop:"12",color:"textPrimary",justifyContent:"space-between",children:[(0,n.jsx)(f.X2,{position:"relative",children:(0,n.jsx)(tT.A,{style:{width:"126px"},className:tz,placeholder:c,onChange:e=>{let[,t]=u;if(e.currentTarget.value){let r=parseInt(e.currentTarget.value)-parseInt(c),i=Math.floor(100*(r/(parseInt(p)-parseInt(c))));parseInt(e.currentTarget.value)>=parseInt(d)?m([t,t]):m([i,t])}else m([0,t]);r(e.currentTarget.value.toString()),ey()},onFocus:j,value:o,onBlur:v})}),(0,n.jsx)(x.n,{className:w.d1,children:"to"}),(0,n.jsx)(f.X2,{position:"relative",children:(0,n.jsx)(tT.A,{style:{width:"126px"},className:tz,placeholder:p,value:d,onChange:e=>{let[t]=u;if(e.currentTarget.value){let r=parseInt(p)-parseInt(e.currentTarget.value),i=Math.floor(100-100*(r/(parseInt(p)-parseInt(c))));parseInt(e.currentTarget.value)<=parseInt(o)?m([t,t]):m([t,i])}else m([t,100]);i(e.currentTarget.value),ey()},onFocus:j,onBlur:v})})]}),(0,n.jsx)(f.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,n.jsx)(tE,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:u,trackStyle:{top:"3px",height:"8px",background:`${b.accentAction}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:tN.$_.shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${b.accentActionSoft}`},onChange:e=>{if("number"==typeof e)return;let[t,a]=e,n=parseFloat(p.replace(/,/g,"")),s=parseFloat(c.replace(/,/g,"")),o=n-s;r((t/100*o+s).toFixed(2).toString()),i((n-(100-a)/100*o).toFixed(2).toString()),0===t&&r(""),100===a&&i(""),m(e)}})})]})};var tF=r(36633),tM=r(36450),tB=r(39799),tA=r(73504);let tL=({trait:e,addTrait:t,removeTrait:r,isTraitSelected:i,style:a})=>{let[o,d]=(0,L.useState)(!1),[c,p]=(0,L.useState)(!1),g=()=>p(!c),h=(0,G.PY)(e=>e.toggleShowFullTraitName),{shouldShow:u,trait_value:m,trait_type:b}=(0,G.PY)(e=>e.showFullTraitName),y=t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&h({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})};(0,L.useEffect)(()=>{d(i)},[i]);let j=i=>{i.preventDefault(),ey(),o?(r(e),d(!1)):(t(e),d(!0)),(0,l._P)(s.Yz.NFT_FILTER_SELECTED,{filter_type:s.fm.TRAIT})},v=u&&b===e.trait_type&&m===e.trait_value;return(0,n.jsxs)(f.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"normal",className:`${w.Nf} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...a},maxHeight:"44",onMouseEnter:g,onMouseLeave:g,onClick:j,children:[(0,n.jsx)(x.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:v?"full":"160",onMouseOver:e=>y(e),onMouseLeave:()=>h({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,tM._)(Number(e.trait_value))}`:e.trait_value}),(0,n.jsx)(ee.X,{checked:o,hovered:c,onChange:j,children:(0,n.jsx)(x.n,{as:"span",color:"textTertiary",minWidth:"8",paddingTop:"2",paddingRight:"12",position:"relative",children:!v&&e.trait_count})})]},e.trait_value)},tH=({traits:e,type:t,index:r})=>{let i=(0,G.PY)(e=>e.addTrait),a=(0,G.PY)(e=>e.removeTrait),s=(0,G.PY)(e=>e.traits),[o,l]=(0,L.useState)(""),d=(0,F.Z)(o,300),c=(0,L.useMemo)(()=>e.filter(e=>e.trait_value?.toString().toLowerCase().includes(d.toLowerCase())),[d,e]),p=(0,L.useCallback)(function({data:e,index:t,style:r}){let o=e[t],l=s.find(({trait_type:e,trait_value:t})=>e===o.trait_type&&String(t)===String(o.trait_value));return(0,n.jsx)(tL,{style:r,isTraitSelected:!!l,trait:o,addTrait:i,removeTrait:a})},[s,i,a]),g=(0,L.useCallback)((e,t)=>{let r=t[e];return`${r.trait_type}_${r.trait_value}_${e}`},[]);return e.length?(0,n.jsxs)(t$,{index:r,numTraits:e.length,title:t,children:[(0,n.jsx)(tT.I,{value:o,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,n.jsx)(f.sg,{className:W,style:{height:`${Math.min(44*c.length,302)}px`},children:(0,n.jsx)(tB.Z,{disableWidth:!0,children:({height:e})=>(0,n.jsx)(tA.t7,{height:e,width:"100%",itemData:c,itemCount:c.length,itemSize:44,itemKey:g,children:({index:e,style:t,data:r})=>(0,n.jsx)(p,{style:t,data:r,index:e},g(e,r))})})})]}):null},tO=({traitsByGroup:e})=>{let{buyNow:t,setBuyNow:r}=(0,b.PY)(e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow})),i=(0,b.PY)(e=>e.setSortBy),s=(0,b.PY)(e=>e.hasRarity),[o,l]=(0,L.useReducer)(e=>!e,!1),d=()=>{r(!t)},c=(0,L.useMemo)(()=>te(i,s??!1),[s,i]);return(0,n.jsxs)(x.n,{className:"_10b1b4v1 rgw6ez7mj rgw6ez1ej rgw6ez2o7 rgw6ezlj rgw6eznk",children:[(0,n.jsx)(f.X2,{width:"full",justifyContent:"space-between"}),(0,n.jsxs)(f.sg,{marginTop:"8",children:[(0,n.jsxs)(f.X2,{justifyContent:"space-between",className:`${U} ${Z}`,gap:"2",borderRadius:"12",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",onClick:e=>{e.preventDefault(),d()},onMouseEnter:l,onMouseLeave:l,children:[(0,n.jsx)(x.n,{"data-testid":"nft-collection-filter-buy-now",className:w.v4,children:"Buy now"}),(0,n.jsx)(ee.X,{hovered:o,checked:t,onClick:d,children:(0,n.jsx)("span",{})})]}),tF.tq&&(0,n.jsx)(el,{sortDropDownOptions:c}),(0,n.jsx)(eo,{}),(0,n.jsx)(tR,{}),Object.entries(e).length>0&&(0,n.jsx)(x.n,{as:"span",color:"textSecondary",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez7az rgw6ez60j rgw6ez7lb"}),(0,n.jsx)(f.sg,{children:Object.entries(e).map(([e,t],r)=>(0,n.jsx)(tH,{type:e,traits:t,index:r+a.TRAIT_START_INDEX},e))})]})]})};var tY=r(18683);let tD=(0,_.default)(d.ZP).withConfig({displayName:"CollectionPageSkeleton__CollectionDescriptionSection",componentId:"sc-15bf9a08-0"})`
  ${tY.bc}
`,tX=(0,_.default)(d.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledColumn",componentId:"sc-15bf9a08-1"})`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${m.BAG_WIDTH+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${m.XXXL_BAG_WIDTH+16}px)`:"100%"};
  }
`,tW=(0,_.default)(p.ZP).withConfig({displayName:"CollectionPageSkeleton__StyledRow",componentId:"sc-15bf9a08-2"})`
  gap: 24px;
  margin-bottom: 28px;
`,tU=()=>{let e=(0,b.cP)(e=>e.bagExpanded),t=(0,b.dD)();return(0,n.jsxs)(tX,{isBagExpanded:e,children:[(0,n.jsx)(t2,{children:(0,n.jsx)(tq,{})}),(0,n.jsxs)(tD,{children:[(0,n.jsx)(tk,{isMobile:t}),(0,n.jsx)(tW,{children:T})]}),(0,n.jsx)(e5,{})]})};var tZ=r(48734),tV=r(47371),tG=r(437);let tK={},tq=(0,_.default)(g.X).withConfig({displayName:"collection__CollectionBannerLoading",componentId:"sc-d8f4b999-0"})`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,tJ=(0,_.default)(d.ZP).withConfig({displayName:"collection__CollectionContainer",componentId:"sc-d8f4b999-1"})`
  width: 100%;
  align-self: start;
  will-change: width;
`,tQ=(0,tZ.animated)(tJ),t0=_.default.div.withConfig({displayName:"collection__CollectionAssetsContainer",componentId:"sc-d8f4b999-2"})`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,t1=(0,tZ.animated)(t0),t2=_.default.div.withConfig({displayName:"collection__BannerWrapper",componentId:"sc-d8f4b999-3"})`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,t6=_.default.div.withConfig({displayName:"collection__Banner",componentId:"sc-d8f4b999-4"})`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,t4=(0,_.default)(d.ZP).withConfig({displayName:"collection__CollectionDescriptionSection",componentId:"sc-d8f4b999-5"})`
  ${tY.bc}
`,t7=_.default.div.withConfig({displayName:"collection__FiltersContainer",componentId:"sc-d8f4b999-6"})`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.backgroundBackdrop:void 0};
  z-index: ${tG.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,t3=(0,_.default)(p.ZP).withConfig({displayName:"collection__MobileFilterHeader",componentId:"sc-d8f4b999-7"})`
  padding: 20px 16px;
  justify-content: space-between;
`,t9=(0,_.default)(p.ZP).withConfig({displayName:"collection__CollectionDisplaySection",componentId:"sc-d8f4b999-8"})`
  align-items: flex-start;
  position: relative;
`,t8=_.default.button.withConfig({displayName:"collection__IconWrapper",componentId:"sc-d8f4b999-9"})`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.textPrimary};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${c.c}
`;var t5=()=>{let{contractAddress:e}=(0,eI.UO)(),t=(0,b.dD)(),[r,i]=(0,b.wx)(),{pathname:a}=(0,eI.TH)(),d=(0,eI.s0)(),c=a.includes("/activity"),p=(0,b.PY)(e=>e.setMarketCount),g=(0,b.cP)(e=>e.bagExpanded),x=(0,b.cP)(e=>e.setBagExpanded),{chainId:f}=(0,o.useWeb3React)(),w=(0,u.e)(),{data:y,loading:_}=(0,h.K)(e),{CollectionContainerWidthChange:k}=(0,tZ.useSpring)({CollectionContainerWidthChange:g&&!t?(w.xxxl?m.XXXL_BAG_WIDTH:m.BAG_WIDTH)+16:0,config:{duration:tV.Kd.medium,easing:tZ.easings.easeOutSine}}),{gridWidthOffset:S}=(0,tZ.useSpring)({gridWidthOffset:r&&!t?332:0,config:{duration:tV.Kd.medium,easing:tZ.easings.easeOutSine}});if((0,L.useEffect)(()=>{let e={};y?.marketplaceCount?.forEach(({marketplace:t,count:r})=>{e[t]=r}),p(e)},[y?.marketplaceCount,p]),(0,L.useEffect)(()=>{g&&r&&!w.xl&&i(!1)},[g,r,w,i]),(0,L.useEffect)(()=>{x({bagExpanded:!1,manualClose:!1})},[]),_)return(0,n.jsx)(tU,{});let I=()=>{c?d(`/nfts/collection/${e}`):d(`/nfts/collection/${e}/activity`)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.fM,{page:s.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:e,chain_id:f,is_activity_view:c},shouldLogImpression:!0,children:(0,n.jsx)(tQ,{style:{width:k.to(e=>`calc(100% - ${e}px)`)},children:e&&!j._P.includes(e)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t2,{children:(0,n.jsx)(t6,{src:y?.bannerImageUrl?`${y.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,n.jsxs)(t4,{children:[y&&(0,n.jsx)(tS,{stats:y,isMobile:t}),(0,n.jsx)("div",{id:"nft-anchor"}),(0,n.jsx)(N,{showActivity:c,toggleActivity:()=>{r&&i(!1),I()}})]}),(0,n.jsxs)(t9,{children:[(0,n.jsx)(t7,{isMobile:t,isFiltersExpanded:r,children:r&&(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsxs)(t3,{children:[(0,n.jsx)(Q.Tv.HeadlineSmall,{children:"Filter"}),(0,n.jsx)(t8,{onClick:()=>i(!1),children:(0,n.jsx)(V.BW,{})})]}),(0,n.jsx)(tO,{traitsByGroup:y?.traits??tK})]})}),(0,n.jsx)(t1,{hideUnderneath:t&&(r||g),style:{transform:S.to(e=>`translate(${e}px)`),width:S.to(e=>`calc(100% - ${e}px)`)},children:c?e&&(0,n.jsx)(C.cS,{contractAddress:e,rarityVerified:y?.rarityVerified??!1,collectionName:y?.name??"",chainId:f}):e&&y&&(0,n.jsx)(L.Suspense,{fallback:(0,n.jsx)(e5,{}),children:(0,n.jsx)(tt,{collectionStats:y,contractAddress:e,rarityVerified:y?.rarityVerified})})})]})]}):(0,n.jsx)("div",{className:tY.x8,children:"No collection assets exist at this address"})})}),(0,n.jsx)(v,{})]})}}}]);
//# sourceMappingURL=8597.75155cc2.chunk.js.map