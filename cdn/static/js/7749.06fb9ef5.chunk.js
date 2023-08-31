"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7749],{17769:function(e,r,t){t.d(r,{R_:function(){return n},gS:function(){return a},xr:function(){return s},oj:function(){return i},Co:function(){return o},Yb:function(){return l},fb:function(){return d},hX:function(){return c},rG:function(){return g},FC:function(){return u},rZ:function(){return m}}),t(74602),t(46728);var n="e2d0r6e rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez4ej rgw6ez1dv rgw6ez47p rgw6ez2d1",a="e2d0r6h e2d0r6g rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez2e7 rgw6ez2jp rgw6ez2ov rgw6ez28d rgw6ez177 rgw6ez4sj rgw6ez7iz rgw6ez7bj rgw6ez7on",s="rgw6ez14j rgw6ez1bj rgw6ez7bb",i="rgw6ezcp rgw6ezb1 rgw6ezed rgw6ezfv rgw6ez7m3 rgw6ez45p rgw6ez45v",o="e2d0r6a rgw6ezcv rgw6ezb1 rgw6ezed rgw6ez3t7",l="e2d0r63 e2d0r61 rgw6ez45d rgw6ez2d7 rgw6ez2e8 rgw6ez2ip rgw6ez2jq rgw6ez2ov rgw6ez28d rgw6ez4ej rgw6ez79z rgw6ez7jr rgw6ez7ab rgw6ez547 rgw6ez5op",d="e2d0r6c rgw6ezcp rgw6ezav rgw6eze7 rgw6ez4ep",c="e2d0r6l rgw6ezcv rgw6ezav rgw6ezdv rgw6ez2e7 rgw6ez2jp rgw6ez2ov rgw6ez28d rgw6ez4ov rgw6ez4ej rgw6ez7bj rgw6ez79z",g="e2d0r65 e2d0r61 rgw6ez45d rgw6ez2e7 rgw6ez2jp rgw6ez281 rgw6ez4ep rgw6ezap rgw6ezd1",u="e2d0r6n rgw6ez2d7 rgw6ez2ip rgw6ez44v rgw6ez7b7 rgw6ez191 rgw6ez171 rgw6ez4ej rgw6ez4ov rgw6ezaj rgw6ezd1 rgw6ez79z",m="e2d0r6j e2d0r6g rgw6ezd1 rgw6ezb1 rgw6eze7 rgw6ez2e7 rgw6ez2jp rgw6ez2ov rgw6ez28d rgw6ez177 rgw6ez4sj rgw6ez7iz rgw6ez7bj rgw6ez7on rgw6ez4bd rgw6ez79z"},35253:function(e,r,t){t.d(r,{m:function(){return o}});var n=t(25599),a=t(99430),s=t(63505),i=t(79954);function o(e,r,t){let{data:n,loading:o,fetchMore:l,error:d}=(0,i.YV)({variables:{filter:e,first:r},fetchPolicy:t}),c=n?.nftActivity?.pageInfo?.hasNextPage,g=(0,s.useCallback)(()=>l({variables:{after:n?.nftActivity?.pageInfo?.endCursor}}),[n,l]),u=(0,s.useMemo)(()=>n?.nftActivity?.edges?.map(e=>{let r=e?.node,t=r?.asset;return{collectionAddress:r.address,tokenId:r.tokenId,tokenMetadata:{name:t?.name,imageUrl:t?.image?.url,smallImageUrl:t?.smallImage?.url,metadataUrl:t?.metadataUrl,rarity:{primaryProvider:"Rarity Sniper",providers:t?.rarities?.map(e=>({...e,provider:"Rarity Sniper"}))},suspiciousFlag:t?.suspiciousFlag,standard:t?.nftContract?.standard},eventType:r.type,marketplace:r.marketplace,fromAddress:r.fromAddress,toAddress:r.toAddress,transactionHash:r.transactionHash,orderStatus:r.orderStatus,price:a.K3(r.price?.value??0),symbol:t?.collection?.image?.url,quantity:r.quantity,url:r.url,eventTimestamp:1e3*r.timestamp}}),[n]);return(0,s.useMemo)(()=>({nftActivity:u,hasNext:c,loadMore:g,loading:o,error:d}),[c,g,o,u,d])}(0,n.ZP)`
  query NftActivity($filter: NftActivityFilterInput, $after: String, $first: Int) {
    nftActivity(filter: $filter, after: $after, first: $first) {
      edges {
        node {
          id
          address
          tokenId
          asset {
            id
            metadataUrl
            image {
              id
              url
            }
            smallImage {
              id
              url
            }
            name
            rarities {
              id
              provider
              rank
              score
            }
            suspiciousFlag
            nftContract {
              id
              standard
            }
            collection {
              id
              image {
                id
                url
              }
            }
          }
          type
          marketplace
          fromAddress
          toAddress
          transactionHash
          price {
            id
            value
          }
          orderStatus
          quantity
          url
          timestamp
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
`},17749:function(e,r,t){t.d(r,{cS:function(){return M},VJ:function(){return I},YQ:function(){return S}});var n,a,s=t(30575),i=t(62329),o=t(35253),l=t(64709),d=t(2994),c=t(17669),g=t(79131),u=t(39401),m=t(99747),p=t(63505),x=t(69518),w=t(11001),f=t(12058),h=t(78174),j=t(17769),z=t(61984);t(74602),t(25496);let y=()=>(0,s.jsx)(l.n,{className:"_2kdvfw1 rgw6ez14j rgw6ez1bj rgw6ez7bb"}),v=()=>(0,s.jsx)(l.n,{className:"fbjar43 _2kdvfw1 rgw6ez191 rgw6ez7cj"}),k=()=>(0,s.jsxs)(l.n,{as:"a",className:j.Yb,children:[(0,s.jsxs)(d.X2,{gap:"16",children:[(0,s.jsx)(y,{}),(0,s.jsx)(v,{})]}),(0,s.jsx)(d.X2,{children:(0,s.jsx)(v,{})}),(0,s.jsx)(d.X2,{display:{sm:"none",md:"flex"},children:(0,s.jsx)(v,{})}),(0,s.jsx)(d.X2,{display:{sm:"none",lg:"flex"},children:(0,s.jsx)(v,{})}),(0,s.jsx)(d.X2,{display:{sm:"none",xl:"flex"},children:(0,s.jsx)(v,{})})]}),b=({rowCount:e})=>(0,s.jsx)(s.Fragment,{children:[...Array(e)].map((e,r)=>(0,s.jsx)(k,{},r))}),C=()=>(0,s.jsxs)(d.sg,{marginTop:"36",children:[(0,s.jsx)(I,{}),(0,s.jsx)(b,{rowCount:10})]});(n=a||(a={})).Item="Item",n.Event="Event",n.Price="Price",n.By="By",n.To="To";let T=f.default.div.withConfig({displayName:"Activity__FilterBox",componentId:"sc-fe7d29ea-0"})`
  display: flex;
  background: ${({backgroundColor:e})=>e};
  ${i.c};
`,I=()=>(0,s.jsxs)(l.n,{className:j.rG,children:[(0,s.jsx)(l.n,{children:a.Item}),(0,s.jsx)(l.n,{children:a.Event}),(0,s.jsx)(l.n,{display:{sm:"none",md:"block"},children:a.Price}),(0,s.jsx)(l.n,{display:{sm:"none",xl:"block"},children:a.By}),(0,s.jsx)(l.n,{display:{sm:"none",xxl:"block"},children:a.To})]}),A={[u.n$.Listing]:!0,[u.n$.Sale]:!0,[u.n$.Transfer]:!1,[u.n$.CancelListing]:!1},S=(e,r)=>({...e,[r.eventType]:!e[r.eventType]}),M=({contractAddress:e,rarityVerified:r,collectionName:t,chainId:n})=>{let[a,i]=(0,p.useReducer)(S,A),{nftActivity:f,hasNext:y,loadMore:v,loading:k}=(0,o.m)({activityTypes:Object.keys(a).map(e=>e).filter(e=>a[e]),address:e},25),M=y&&f?.length,$=(0,g.cP)(e=>e.itemsInBag),F=(0,g.cP)(e=>e.addAssetsToBag),N=(0,g.cP)(e=>e.removeAssetsFromBag),P=(0,g.cP)(e=>e.bagExpanded),E=(0,g.cP)(e=>e.toggleBag),L=(0,g.dD)(),[U,_]=(0,p.useState)(0),X=(0,h.Gv)();(0,p.useEffect)(()=>{(0,m.tw)().then(e=>{_(e||0)})},[]);let D=(0,p.useCallback)(function({eventType:e}){let r=a[e],t=X?c.gR.color.gray500:c.gR.color.gray200;return(0,s.jsx)(T,{className:j.hX,backgroundColor:r?t:c.Z4.colors.backgroundInteractive,onClick:()=>i({eventType:e}),children:e.charAt(0)+e.slice(1).toLowerCase()+"s"})},[a,X]);return(0,s.jsxs)(l.n,{marginLeft:{sm:"16",md:"48"},children:[(0,s.jsxs)(d.X2,{gap:"8",paddingTop:{sm:"0",md:"16"},children:[(0,s.jsx)(D,{eventType:u.n$.Listing}),(0,s.jsx)(D,{eventType:u.n$.Sale}),(0,s.jsx)(D,{eventType:u.n$.Transfer})]}),k?(0,s.jsx)(C,{}):f&&(0,s.jsxs)(d.sg,{marginTop:"36",children:[(0,s.jsx)(I,{}),(0,s.jsx)(x.Z,{next:v,hasMore:!!y,loader:M?(0,s.jsx)(b,{rowCount:2}):null,dataLength:f?.length??0,style:{overflow:"unset"},children:f.map((e,a)=>e.eventType&&(0,s.jsxs)(l.n,{as:w.rU,"data-testid":"nft-activity-row",to:`/nfts/asset/${e.collectionAddress}/${e.tokenId}?origin=activity`,className:j.Yb,children:[(0,s.jsx)(z.Et,{event:e,rarityVerified:r,collectionName:t,eventTimestamp:e.eventTimestamp,isMobile:L}),(0,s.jsx)(z.VM,{eventType:e.eventType,eventTimestamp:e.eventTimestamp,eventTransactionHash:e.transactionHash,price:e.price,isMobile:L}),(0,s.jsx)(z.Ic,{marketplace:e.marketplace,price:e.price}),(0,s.jsx)(z.UM,{address:e.fromAddress,chainId:n}),(0,s.jsx)(z.UM,{address:e.toAddress,chainId:n,desktopLBreakpoint:!0}),(0,s.jsx)(z.Dg,{event:e,collectionName:t,selectAsset:F,removeAsset:N,itemsInBag:$,cartExpanded:P,toggleCart:E,isMobile:L,ethPriceInUSD:U})]},a))})]})]})}},61984:function(e,r,t){t.d(r,{UM:function(){return M},Dg:function(){return S},VM:function(){return U},Et:function(){return R},Ic:function(){return F}});var n=t(30575),a=t(45938),s=t(94869),i=t(34999),o=t(66196),l=t(65647),d=t(79954),c=t(64709),g=t(2994),u=t(5570),m=t(39401),p=t(99430),x=t(64451),w=t(39472);let f=(e,r,t)=>{let n=e.price?(0,w.GA)(parseFloat(e.price)*t):"0",a=e.price?(0,x.parseEther)(e.price):"";return{address:e.collectionAddress,collectionName:r,imageUrl:e.tokenMetadata?.imageUrl,marketplace:e.marketplace,name:e.tokenMetadata?.name,tokenId:e.tokenId,susFlag:e.tokenMetadata?.suspiciousFlag,smallImageUrl:e.tokenMetadata?.smallImageUrl,collectionSymbol:e.symbol,priceInfo:{USDPrice:n,ETHPrice:a,basePrice:a,baseAsset:"ETH"},tokenType:e.tokenMetadata?.standard}};var h=t(3406),j=t(5051),z=t(63505),y=t(12058),v=t(43108),k=t(83777),b=t(34120),C=t(17769);let T=(0,y.default)(v.dL).withConfig({displayName:"ActivityCells__AddressLink",componentId:"sc-f8c24f69-0"})`
  color: ${({theme:e})=>e.textPrimary};
  text-decoration: none;
  font-weight: 400;
  line-height: 20px;
  a {
    color: ${({theme:e})=>e.textPrimary};
    text-decoration: none;
  }
  a:hover {
    color: ${({theme:e})=>e.textPrimary};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  a:focus {
    color: ${({theme:e})=>e.textPrimary};
    text-decoration: none;
    opacity: ${({theme:e})=>e.opacity.click};
  }
`,I=(e,r)=>{if(!r||!e)return!1;let t=Object.keys(d.Wf).map(e=>e.toLowerCase()),n=e===d.iF.Valid,a=t.includes(r.toLowerCase());return n&&a},A=(e,r,t)=>{if(r)return t?(0,n.jsx)(a.cC,{id:"t/YqKh"}):(0,n.jsx)(a.cC,{id:"2RtVHm"});switch(e){case d.iF.Executed:return(0,n.jsx)(a.cC,{id:"s9KGXU"});case d.iF.Cancelled:return(0,n.jsx)(a.cC,{id:"vv7kpg"});case d.iF.Expired:return(0,n.jsx)(a.cC,{id:"M1RnFv"});case d.iF.Valid:return(0,n.jsx)(a.cC,{id:"jqzUyM"});default:return null}},S=({event:e,collectionName:r,selectAsset:t,removeAsset:a,itemsInBag:i,cartExpanded:l,toggleCart:u,isMobile:m,ethPriceInUSD:p})=>{let x=(0,z.useMemo)(()=>f(e,r,p),[e,r,p]),w=(0,z.useMemo)(()=>i.some(e=>x.tokenId===e.asset.tokenId&&x.address===e.asset.address),[x,i]),h=I(e.orderStatus,e.marketplace),j=(0,o.oO)({page:s.yJ.NFT_COLLECTION_PAGE}),y={collection_address:x.address,token_id:x.tokenId,token_type:x.tokenType,...j};return(0,n.jsx)(g.sg,{display:{sm:"none",lg:"flex"},height:"full",justifyContent:"center",marginX:"auto",children:e.eventType===d.y3.Listing&&e.orderStatus?(0,n.jsx)(c.n,{as:"button",className:h&&w?C.rZ:C.gS,onClick:e=>{e.preventDefault(),w?a([x]):t([x]),w||l||m||u(),w||(0,o._P)(s.Yz.NFT_BUY_ADDED,{eventProperties:y})},disabled:!h,children:A(e.orderStatus,h,w)}):"-"})},M=({address:e,desktopLBreakpoint:r,chainId:t})=>(0,n.jsx)(g.sg,{display:{sm:"none",xl:r?"none":"flex",xxl:"flex"},className:C.R_,children:(0,n.jsx)(T,{href:(0,b.E)(t??i.ChainId.MAINNET,e??"",b.r.ADDRESS),style:{textDecoration:"none"},children:(0,n.jsx)(c.n,{onClick:e=>e.stopPropagation(),children:e?(0,k.X)(e,2):"-"})})}),$=({price:e})=>(0,n.jsx)(l.ud,{text:(0,n.jsx)(c.n,{textAlign:"left",fontSize:"14",fontWeight:"normal",color:"textSecondary",children:`${e} ETH`}),placement:"top",children:(0,n.jsx)(c.n,{children:`${e.substring(0,5)}... ETH`})}),F=({marketplace:e,price:r})=>{let t=(0,z.useMemo)(()=>r?(0,w.GA)(parseFloat(r?.toString())):null,[r]);return(0,n.jsxs)(g.X2,{display:{sm:"none",md:"flex"},gap:"8",children:[e&&(0,p.Dp)(e,"16"),t?t.length>6?(0,n.jsx)($,{price:t}):(0,n.jsx)(n.Fragment,{children:`${t} ETH`}):(0,n.jsx)(n.Fragment,{children:"-"})]})},N=e=>{switch(e){case d.y3.Listing:return(0,n.jsx)(u.TV,{width:16,height:16});case d.y3.Sale:return(0,n.jsx)(u.QF,{width:16,height:16});case d.y3.Transfer:return(0,n.jsx)(u.dj,{width:16,height:16});case d.y3.CancelListing:return(0,n.jsx)(u.Io,{width:16,height:16});default:return null}},P=(e,r)=>{e.preventDefault(),window.open(`https://etherscan.io/tx/${r}`,"_blank","noopener,noreferrer")},E=({transactionHash:e})=>(0,n.jsx)(g.X2,{onClick:r=>P(r,e),marginLeft:"4",children:(0,n.jsx)(u.Bu,{})}),L=e=>({[d.y3.Listing]:"gold",[d.y3.Sale]:"green",[d.y3.Transfer]:"violet",[d.y3.CancelListing]:"accentFailure"})[e],U=({eventType:e,eventTimestamp:r,eventTransactionHash:t,eventOnly:a,price:s,isMobile:i})=>{let o=(0,z.useMemo)(()=>s?(0,w.GA)(parseFloat(s?.toString())):null,[s]);return(0,n.jsxs)(g.sg,{height:"full",justifyContent:"center",gap:"4",children:[(0,n.jsxs)(g.X2,{className:C.Co,color:L(e),children:[N(e),m.ze[e]]}),r&&!i&&!a&&(0,n.jsxs)(g.X2,{className:C.fb,children:[(0,h.F)(r.toString()),t&&(0,n.jsx)(E,{transactionHash:t})]}),i&&s&&(0,n.jsx)(g.X2,{fontSize:"16",fontWeight:"normal",color:"textPrimary",children:`${o} ETH`})]})},_=()=>(0,n.jsx)(c.n,{position:"relative",style:{background:"#24272e"},className:C.xr,children:(0,n.jsxs)(c.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"normal",children:["Image",(0,n.jsx)("br",{}),"not",(0,n.jsx)("br",{}),"available"]})}),X=({rarity:e,collectionName:r,rarityVerified:t})=>{let a=e.rank||e.providers?.[0].rank;return a?(0,n.jsx)(c.n,{children:(0,n.jsx)(l.ud,{text:(0,n.jsxs)(g.X2,{children:[(0,n.jsx)(c.n,{display:"flex",marginRight:"4",children:(0,n.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,n.jsx)(c.n,{width:"full",fontSize:"14",children:t?`Verified by ${r}`:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,n.jsxs)(c.n,{className:C.FC,children:[(0,n.jsx)(c.n,{paddingTop:"2",paddingBottom:"2",display:"flex",children:(0,j.U)(a)}),(0,n.jsx)(c.n,{display:"flex",height:"16",children:t?(0,n.jsx)(u.w,{}):null})]})})}):null},D=e=>e?.smallImageUrl||e?.imageUrl,R=({event:e,rarityVerified:r,collectionName:t,eventTimestamp:a,isMobile:s})=>{let[i,o]=(0,z.useState)(!1),[l,d]=(0,z.useState)(!D(e.tokenMetadata));return(0,n.jsxs)(g.X2,{gap:"16",overflow:"hidden",whiteSpace:"nowrap",children:[l?(0,n.jsx)(_,{}):(0,n.jsx)(c.n,{as:"img",alt:e.tokenMetadata?.name||e.tokenId,src:D(e.tokenMetadata),draggable:!1,className:C.xr,style:{background:i?"none":"#24272e"},onLoad:()=>o(!0),onError:()=>d(!0)}),(0,n.jsxs)(g.sg,{height:"full",justifyContent:"center",overflow:"hidden",whiteSpace:"nowrap",marginRight:"24",children:[(0,n.jsx)(c.n,{className:C.oj,children:e.tokenMetadata?.name||e.tokenId}),e.tokenMetadata?.rarity&&!s&&(0,n.jsx)(X,{rarity:e.tokenMetadata?.rarity,rarityVerified:r,collectionName:t}),s&&a&&(0,h.F)(a.toString())]})]})}},3406:function(e,r,t){t.d(r,{F:function(){return n}});let n=e=>{let r=parseFloat(e),t=new Date().getTime()-r,n=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),s=Math.floor(t%36e5/6e4);return n>0?`${n} day${n>1?"s":""} ago`:a>0?`${a} hour${a>1?"s":""} ago`:s>1?`${s} minutes ago`:"Just now"}}}]);
//# sourceMappingURL=7749.06fb9ef5.chunk.js.map