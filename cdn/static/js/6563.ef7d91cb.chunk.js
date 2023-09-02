"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6563],{25496:function(){},69518:function(e,t,i){var n=i(63505),o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},r=function(){return(r=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s={Pixel:"Pixel",Percent:"Percent"},a={unit:s.Percent,value:.8};function l(e){return"number"==typeof e?{unit:s.Percent,value:100*e}:"string"==typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:s.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:s.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),a):(console.warn("scrollThreshold should be string or number"),a)}var d=function(e){function t(t){var i=e.call(this,t)||this;return i.lastScrollTop=0,i.actionTriggered=!1,i.startY=0,i.currentY=0,i.dragging=!1,i.maxPullDownDistance=0,i.getScrollableTarget=function(){return i.props.scrollableTarget instanceof HTMLElement?i.props.scrollableTarget:"string"==typeof i.props.scrollableTarget?document.getElementById(i.props.scrollableTarget):(null===i.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},i.onStart=function(e){!i.lastScrollTop&&(i.dragging=!0,e instanceof MouseEvent?i.startY=e.pageY:e instanceof TouchEvent&&(i.startY=e.touches[0].pageY),i.currentY=i.startY,i._infScroll&&(i._infScroll.style.willChange="transform",i._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},i.onMove=function(e){i.dragging&&(e instanceof MouseEvent?i.currentY=e.pageY:e instanceof TouchEvent&&(i.currentY=e.touches[0].pageY),i.currentY<i.startY||(i.currentY-i.startY>=Number(i.props.pullDownToRefreshThreshold)&&i.setState({pullToRefreshThresholdBreached:!0}),i.currentY-i.startY>1.5*i.maxPullDownDistance||!i._infScroll||(i._infScroll.style.overflow="visible",i._infScroll.style.transform="translate3d(0px, "+(i.currentY-i.startY)+"px, 0px)")))},i.onEnd=function(){i.startY=0,i.currentY=0,i.dragging=!1,i.state.pullToRefreshThresholdBreached&&(i.props.refreshFunction&&i.props.refreshFunction(),i.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){i._infScroll&&(i._infScroll.style.overflow="auto",i._infScroll.style.transform="none",i._infScroll.style.willChange="unset")})},i.onScrollListener=function(e){"function"==typeof i.props.onScroll&&setTimeout(function(){return i.props.onScroll&&i.props.onScroll(e)},0);var t=i.props.height||i._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;i.actionTriggered||((i.props.inverse?i.isElementAtTop(t,i.props.scrollThreshold):i.isElementAtBottom(t,i.props.scrollThreshold))&&i.props.hasMore&&(i.actionTriggered=!0,i.setState({showLoader:!0}),i.props.next&&i.props.next()),i.lastScrollTop=t.scrollTop)},i.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},i.throttledOnScrollListener=(function(e,t,i,n){var o,r=!1,s=0;function a(){o&&clearTimeout(o)}function l(){var l=this,d=Date.now()-s,c=arguments;function p(){s=Date.now(),i.apply(l,c)}r||(n&&!o&&p(),a(),void 0===n&&d>e?p():!0!==t&&(o=setTimeout(n?function(){o=void 0}:p,void 0===n?e-d:e)))}return"boolean"!=typeof t&&(n=i,i=t,t=void 0),l.cancel=function(){a(),r=!0},l})(150,i.onScrollListener).bind(i),i.onStart=i.onStart.bind(i),i.onMove=i.onMove.bind(i),i.onEnd=i.onEnd.bind(i),i}return!function(e,t){function i(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?r(r({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var i=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=l(t);return n.unit===s.Pixel?e.scrollTop<=n.value+i-e.scrollHeight+1:e.scrollTop<=n.value/100+i-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var i=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=l(t);return n.unit===s.Pixel?e.scrollTop+i>=e.scrollHeight-n.value:e.scrollTop+i>=n.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=r({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),i=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return n.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},n.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&n.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},n.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!i&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(n.Component);t.Z=d},98947:function(e,t,i){i.d(t,{Z:function(){return l}});var n=i(30575),o=i(55102),r=i(12058),s=i(43108);let a=(0,r.default)(s.dL).withConfig({displayName:"Resource__ResourceLink",componentId:"sc-6427f1cf-0"})`
  display: flex;
  color: ${({theme:e})=>e.accentAction};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,o._j)(.1,e.accentAction)};
    text-decoration: none;
  }
`;function l({name:e,link:t}){return(0,n.jsxs)(a,{href:t,children:[e,(0,n.jsx)("sup",{children:"↗"})]})}},48571:function(e,t,i){i.d(t,{b:function(){return l}});var n=i(64451),o=i(25599),r=i(99430),s=i(63505),a=i(79954);function l(e,t,i,o,l,d,c,p=!1){let{data:h,loading:m,fetchMore:f}=(0,a.TG)({variables:{ownerAddress:e,filter:i&&i.length>0?{assets:i}:{addresses:t},first:o,after:l,last:d,before:c},skip:p}),x=h?.nftBalances?.pageInfo?.hasNextPage,u=(0,s.useCallback)(()=>f({variables:{after:h?.nftBalances?.pageInfo?.endCursor}}),[h?.nftBalances?.pageInfo?.endCursor,f]),g=h?.nftBalances?.edges?.map(e=>{let t=e?.node.ownedAsset,i=n.parseEther(r.K3(t?.listings?.edges[0]?.node.price.value??0)).toString();return{id:t?.id,imageUrl:t?.image?.url,smallImageUrl:t?.smallImage?.url,notForSale:t?.listings?.edges?.length===0,animationUrl:t?.animationUrl,susFlag:t?.suspiciousFlag,priceInfo:{ETHPrice:i,baseAsset:"ETH",baseDecimals:"18",basePrice:i},name:t?.name,tokenId:t?.tokenId,asset_contract:{address:t?.collection?.nftContracts?.[0]?.address,tokenType:t?.collection?.nftContracts?.[0]?.standard,name:t?.collection?.name,description:t?.description,image_url:t?.collection?.image?.url,payout_address:e?.node?.listingFees?.[0]?.payoutAddress},collection:{name:t.collection?.name,isVerified:t.collection?.isVerified,imageUrl:t.collection?.image?.url,twitterUrl:t.collection?.twitterName?`@${t.collection?.twitterName}`:void 0},collectionIsVerified:t?.collection?.isVerified,lastPrice:e.node.lastPrice?.value,floorPrice:t?.collection?.markets?.[0]?.floorPrice?.value,basisPoints:e?.node?.listingFees?.[0]?.basisPoints??0/1e4,listing_date:t?.listings?.edges?.[0]?.node?.createdAt?.toString(),date_acquired:e.node.lastPrice?.timestamp?.toString(),sellOrders:t?.listings?.edges.map(e=>e.node),floor_sell_order_price:t?.listings?.edges?.[0]?.node?.price?.value}});return(0,s.useMemo)(()=>({walletAssets:g,hasNext:x,loadMore:u,loading:m}),[x,u,m,g])}(0,o.ZP)`
  query NftBalance(
    $ownerAddress: String!
    $filter: NftBalancesFilterInput
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    nftBalances(
      ownerAddress: $ownerAddress
      filter: $filter
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      edges {
        node {
          ownedAsset {
            id
            animationUrl
            collection {
              id
              isVerified
              image {
                id
                url
              }
              name
              twitterName
              nftContracts {
                id
                address
                chain
                name
                standard
                symbol
                totalSupply
              }
              markets(currencies: ETH) {
                id
                floorPrice {
                  id
                  value
                }
              }
            }
            description
            flaggedBy
            image {
              id
              url
            }
            originalImage {
              id
              url
            }
            name
            ownerAddress
            smallImage {
              id
              url
            }
            suspiciousFlag
            tokenId
            thumbnail {
              id
              url
            }
            listings(first: 1) {
              edges {
                node {
                  price {
                    id
                    value
                    currency
                  }
                  createdAt
                  marketplace
                  endAt
                }
              }
            }
          }
          listedMarketplaces
          listingFees {
            id
            payoutAddress
            basisPoints
          }
          lastPrice {
            id
            currency
            timestamp
            value
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
`},39382:function(e,t,i){i.r(t),i.d(t,{default:function(){return tE}});var n,o,r=i(30575),s=i(94869),a=i(66196),l=i(45825),d=i(25599),c=i(99430),p=i(63505),h=i(79954);(0,d.ZP)`
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
`;var m=i(62329),f=i(98947),x=i(65647),u=i(35253),g=i(64709),y=i(17749),w=i(17669),C="_1cf9gnw1";let v=()=>(0,r.jsxs)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M17.8281 10.834C17.6159 9.88757 17.4333 9.13689 17.291 8.58997C17.1751 8.11971 16.9497 7.68339 16.6331 7.31649C16.2834 6.97574 15.8515 6.731 15.3791 6.60601C14.8206 6.43175 14.0365 6.24408 13.0457 6.04301C12.7771 5.98134 12.6321 5.83926 12.6321 5.61405C12.6286 5.56049 12.6369 5.50679 12.6564 5.45676C12.6758 5.40674 12.7061 5.36159 12.7449 5.32448C12.8303 5.25054 12.9343 5.20142 13.0457 5.18241C13.8337 5.03623 14.6127 4.84557 15.3791 4.61136C15.8508 4.48054 16.282 4.23345 16.6331 3.89283C16.9497 3.52593 17.1751 3.08961 17.291 2.61935C17.4468 2.06885 17.6258 1.32623 17.8281 0.39145C17.8791 0.123349 18.016 0 18.2416 0C18.4671 0 18.6095 0.131392 18.6739 0.39145C18.8726 1.32623 19.0516 2.06885 19.211 2.61935C19.3304 3.08988 19.5585 3.52599 19.8769 3.89283C20.229 4.23347 20.6611 4.48052 21.1336 4.61136C21.8997 4.84657 22.6788 5.03724 23.467 5.18241C23.576 5.18865 23.6782 5.23739 23.7515 5.31813C23.8249 5.39887 23.8635 5.50515 23.8591 5.61405C23.8591 5.83926 23.7275 5.98134 23.467 6.04301C22.6802 6.19136 21.9014 6.37926 21.1336 6.60601C20.6605 6.73103 20.2276 6.97574 19.8769 7.31649C19.5585 7.68333 19.3304 8.11943 19.211 8.58997C19.0472 9.12617 18.8672 9.88757 18.6739 10.834C18.6095 11.1021 18.4671 11.2281 18.2416 11.2281C18.016 11.2281 17.8737 11.0967 17.8281 10.834Z",fill:w.Z4.colors.textSecondary,className:C}),(0,r.jsx)("path",{d:"M32.4448 19.8364C32.2192 18.6679 32.0079 17.7366 31.8166 17.0452C31.6743 16.4509 31.3902 15.8999 30.9885 15.4396C30.5445 15.0113 29.9992 14.7027 29.4037 14.5425C28.4447 14.2629 27.4703 14.0397 26.4853 13.874C26.1398 13.8226 25.9656 13.6426 25.9656 13.3369C25.9618 13.2674 25.9723 13.1978 25.9964 13.1324C26.0204 13.0671 26.0576 13.0074 26.1055 12.9569C26.2105 12.8597 26.3433 12.7977 26.4853 12.7798C27.4694 12.6134 28.4437 12.3931 29.4037 12.1198C30.0021 11.9667 30.549 11.6571 30.9885 11.2228C31.389 10.7583 31.6729 10.2049 31.8166 9.60859C32.0079 8.91721 32.2192 7.98584 32.4448 6.81449C32.4458 6.74608 32.4607 6.67858 32.4886 6.61609C32.5164 6.5536 32.5567 6.49743 32.6068 6.45096C32.657 6.40448 32.7161 6.3687 32.7806 6.34574C32.845 6.32278 32.9134 6.31313 32.9816 6.31739C33.2672 6.31739 33.4528 6.48309 33.5213 6.81449C33.7479 7.98584 33.9573 8.91721 34.1495 9.60859C34.2907 10.2036 34.5706 10.7567 34.9662 11.2228C35.404 11.6593 35.9516 11.9693 36.551 12.1198C37.515 12.3926 38.493 12.6129 39.4808 12.7798C39.5532 12.7803 39.6248 12.7958 39.6909 12.8254C39.757 12.855 39.8162 12.8981 39.8648 12.9518C39.9134 13.0055 39.9503 13.0687 39.9732 13.1375C39.9961 13.2063 40.0044 13.279 39.9977 13.3512C39.9977 13.6569 39.8263 13.8369 39.4808 13.8883C38.4922 14.0545 37.514 14.2778 36.551 14.5568C35.9543 14.7142 35.4084 15.0232 34.9662 15.4539C34.5695 15.916 34.2894 16.4666 34.1495 17.0595C33.9592 17.7509 33.7498 18.6813 33.5213 19.8507C33.4528 20.185 33.2758 20.3507 32.9816 20.3507C32.912 20.3546 32.8424 20.3442 32.777 20.32C32.7116 20.2958 32.6519 20.2585 32.6015 20.2103C32.5512 20.1621 32.5113 20.104 32.4843 20.0396C32.4573 19.9753 32.4439 19.9062 32.4448 19.8364Z",fill:w.Z4.colors.textSecondary,className:C}),(0,r.jsx)("path",{d:"M12.6196 40.6995C12.5109 40.7023 12.4027 40.6829 12.3013 40.6422C12.2 40.6016 12.1075 40.5405 12.0294 40.4627C11.8673 40.3009 11.7574 40.0919 11.7145 39.8639C11.418 38.0492 11.1251 36.5322 10.8358 35.3128C10.6133 34.2663 10.2461 33.258 9.74531 32.3187C9.32818 31.5649 8.73049 30.9334 8.00907 30.4841C7.132 29.9745 6.18128 29.6124 5.19297 29.4117C4.03371 29.1449 2.58684 28.8918 0.852359 28.6523C0.616735 28.6254 0.397657 28.5147 0.23303 28.3393C0.0804808 28.1721 -0.00302245 27.9506 0.000117795 27.7214C-0.00358202 27.4921 0.0799998 27.2703 0.23303 27.1035C0.396979 26.9271 0.616416 26.8162 0.852359 26.7905C2.5886 26.5618 4.03812 26.3114 5.20091 26.0392C6.20136 25.8286 7.16449 25.4614 8.05671 24.9505C8.7902 24.5064 9.40286 23.8792 9.83794 23.1268C10.3473 22.1993 10.7151 21.1968 10.9284 20.1545C11.2054 18.9369 11.4701 17.4162 11.7224 15.5925C11.7547 15.3608 11.8619 15.147 12.0268 14.9855C12.1058 14.9052 12.1997 14.8418 12.3028 14.7993C12.406 14.7567 12.5164 14.7359 12.6276 14.7378C12.7392 14.7338 12.8506 14.7526 12.9551 14.7933C13.0596 14.834 13.1552 14.8956 13.2363 14.9747C13.398 15.1367 13.5079 15.3456 13.5513 15.5735C13.8583 17.3972 14.1565 18.9178 14.4459 20.1354C14.6712 21.1811 15.0382 22.189 15.5363 23.1295C15.9558 23.8807 16.5531 24.5108 17.2726 24.9614C18.1474 25.4733 19.095 25.8407 20.0807 26.0501C21.2347 26.3223 22.6789 26.5727 24.4134 26.8014C24.6493 26.8271 24.8688 26.938 25.0327 27.1144C25.185 27.2815 25.2677 27.5033 25.263 27.7323C25.2662 27.9634 25.1839 28.1872 25.0327 28.3583C24.8722 28.5382 24.6503 28.6474 24.4134 28.6632C22.9509 28.7659 21.4954 28.9559 20.0542 29.232C19.046 29.4136 18.075 29.7698 17.1826 30.2854C16.4365 30.7497 15.8216 31.4065 15.3987 32.1908C14.8949 33.1535 14.531 34.187 14.3188 35.2584C14.04 36.5068 13.7842 38.0429 13.5513 39.8666C13.5238 40.1013 13.4192 40.3193 13.2548 40.4845C13.1681 40.5618 13.0673 40.6207 12.9583 40.6576C12.8492 40.6945 12.7341 40.7087 12.6196 40.6995Z",fill:w.Z4.colors.textSecondary,className:C})]});var _=i(38414),j=i(48571),b=i(5570),A=i(79131),I=i(39401),T=i(21312),N=i.n(T);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var k=(0,p.forwardRef)(function(e,t){var i=e.color,n=e.size,o=void 0===n?24:n,r=function(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}(e,["color","size"]);return p.createElement("svg",S({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),p.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),p.createElement("polyline",{points:"17 8 12 3 7 8"}),p.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"15"}))});k.propTypes={color:N().string,size:N().oneOfType([N().string,N().number])},k.displayName="Upload";var $=i(34822),P=i(11001),D=i(27591),L=i(12058),E=i(43108),H=i(83777);let U=(0,L.css)`
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
`,O=L.default.div.withConfig({displayName:"AssetPriceDetails__Container",componentId:"sc-54829502-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: calc(960px + 1px)) {
    position: fixed;
    width: 360px;
    margin-top: 20px;
  }
`,B=L.default.div.withConfig({displayName:"AssetPriceDetails__BestPriceContainer",componentId:"sc-54829502-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background-color: ${({theme:e})=>e.backgroundSurface};
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-radius: 16px;
`,M=L.default.div.withConfig({displayName:"AssetPriceDetails__HeaderRow",componentId:"sc-54829502-2"})`
  display: flex;
  justify-content: space-between;
`,z=L.default.div.withConfig({displayName:"AssetPriceDetails__PriceRow",componentId:"sc-54829502-3"})`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`,F=L.default.div.withConfig({displayName:"AssetPriceDetails__BuyNowButton",componentId:"sc-54829502-4"})`
  position: relative;
  width: 100%;
  background-color: ${({theme:e,assetInBag:t,useAccentColor:i})=>t?e.accentFailure:i?e.accentAction:e.backgroundInteractive};
  border-radius: 12px;
  padding: 10px 12px;
  margin-top: ${({margin:e})=>e?"12px":"0px"};
  text-align: center;
  cursor: pointer;

  ${U}
`,R=L.default.div.withConfig({displayName:"AssetPriceDetails__BuyNowButtonContainer",componentId:"sc-54829502-5"})`
  position: relative;
`,Y=(0,L.default)(E.Tv.BodySecondary).withConfig({displayName:"AssetPriceDetails__Tertiary",componentId:"sc-54829502-6"})`
  color: ${({theme:e})=>e.textTertiary};
`,Z=L.default.a.withConfig({displayName:"AssetPriceDetails__UploadLink",componentId:"sc-54829502-7"})`
  color: ${({theme:e})=>e.textSecondary};
  cursor: pointer;

  ${m.c}
`,V=L.default.div.withConfig({displayName:"AssetPriceDetails__NotForSaleContainer",componentId:"sc-54829502-8"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 48px 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,X=L.default.div.withConfig({displayName:"AssetPriceDetails__DiscoveryContainer",componentId:"sc-54829502-9"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,G=L.default.a.withConfig({displayName:"AssetPriceDetails__OwnerText",componentId:"sc-54829502-10"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${({theme:e})=>e.textSecondary};
  text-decoration: none;

  ${m.c}
`,W=L.default.div.withConfig({displayName:"AssetPriceDetails__OwnerInformationContainer",componentId:"sc-54829502-11"})`
  color: ${({theme:e})=>e.textSecondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8px;
`,q=L.default.div.withConfig({displayName:"AssetPriceDetails__AssetInfoContainer",componentId:"sc-54829502-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,K=L.default.div.withConfig({displayName:"AssetPriceDetails__AssetHeader",componentId:"sc-54829502-13"})`
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
`,Q=L.default.div.withConfig({displayName:"AssetPriceDetails__CollectionNameContainer",componentId:"sc-54829502-14"})`
  display: flex;
  justify-content: space-between;
`,J=L.default.span.withConfig({displayName:"AssetPriceDetails__CollectionHeader",componentId:"sc-54829502-15"})`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({theme:e})=>e.textPrimary};
  text-decoration: none;
  ${m.c};
`,ee=L.default.span.withConfig({displayName:"AssetPriceDetails__VerifiedIconContainer",componentId:"sc-54829502-16"})`
  position: relative;
`,et=(0,L.default)(b.SA).withConfig({displayName:"AssetPriceDetails__StyledVerifiedIcon",componentId:"sc-54829502-17"})`
  position: absolute;
  top: 0px;
`,ei=(0,L.default)(P.rU).withConfig({displayName:"AssetPriceDetails__DefaultLink",componentId:"sc-54829502-18"})`
  text-decoration: none;
`,en=(0,L.default)(E.dL).withConfig({displayName:"AssetPriceDetails__MarketplaceIcon",componentId:"sc-54829502-19"})`
  display: flex;
  align-items: center;
`,eo=({asset:e})=>{let t=(0,D.s0)(),{data:i}=(0,$.useQuery)(["fetchPrice",{}],()=>(0,c.tw)(),{}),n=(0,A.aO)(e=>e.setProfilePageState),o=(0,A.Pc)(e=>e.selectSellAsset),l=(0,A.Pc)(e=>e.reset),d=e.sellOrders&&e.sellOrders.length>0?e.sellOrders[0]:void 0,h=d?.endAt?new Date(d.endAt):void 0,m=(0,p.useMemo)(()=>i&&e.floor_sell_order_price?i*e.floor_sell_order_price:void 0,[i,e.floor_sell_order_price]),f=(0,a.oO)(),x=()=>{l(),t("/nfts/profile"),o(e),(0,a._P)(s.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...f}),n(I.HA.LISTING)};return(0,r.jsxs)(B,{children:[(0,r.jsxs)(M,{children:[(0,r.jsx)(E.Tv.SubHeader,{color:"accentAction",children:d?"Your Price":"List for Sale"}),d&&(0,r.jsx)(en,{href:d.marketplaceUrl,children:(0,c.Dp)(d.marketplace,"20")})]}),(0,r.jsx)(z,{children:d?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(E.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[(0,c.IA)(e.priceInfo?.ETHPrice)," ETH"]}),m&&(0,r.jsx)(E.Tv.BodySecondary,{lineHeight:"24px",children:(0,c.Nd)(m,!0,!0)})]}):(0,r.jsx)(E.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Get the best price for your NFT by selling with Uniswap."})}),h&&(0,r.jsxs)(E.Tv.BodySecondary,{fontSize:"14px",children:["Sale ends: ",(0,c.zO)(h)]}),d?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(F,{assetInBag:!1,margin:!0,useAccentColor:!1,onClick:x,children:(0,r.jsx)(E.Tv.SubHeader,{lineHeight:"20px",children:"Adjust listing"})})}):(0,r.jsx)(F,{assetInBag:!1,margin:!0,useAccentColor:!0,onClick:x,children:(0,r.jsx)(E.Tv.SubHeader,{lineHeight:"20px",color:"white",children:"List"})})]})},er=(0,L.default)(P.rU).withConfig({displayName:"AssetPriceDetails__StyledLink",componentId:"sc-54829502-20"})`
  text-decoration: none;
  ${m.c}
`,es=({collectionName:e,collectionUrl:t})=>{let i=(0,L.useTheme)();return(0,r.jsx)(B,{children:(0,r.jsxs)(V,{children:[(0,r.jsx)(b.Io,{width:"79px",height:"79px",color:i.textTertiary}),(0,r.jsx)(E.Tv.SubHeader,{children:"Not for sale"}),(0,r.jsxs)(X,{children:[(0,r.jsx)(E.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Discover similar NFTs for sale in"}),(0,r.jsx)(er,{to:`/nfts/collection/${t}`,children:(0,r.jsx)(E.Tv.Link,{lineHeight:"20px",children:e})})]})]})})},ea=({asset:e,collection:t})=>{let{account:i}=(0,_.useWeb3React)(),n=e.sellorders&&e.sellorders.length>0?e.sellorders[0]:void 0,o=n?.endAt?new Date(n.endAt):void 0,s=(0,A.cP)(e=>e.itemsInBag),a=(0,A.cP)(e=>e.addAssetsToBag),l=(0,A.cP)(e=>e.removeAssetsFromBag),d=(0,A.cP)(e=>e.toggleBag),h=(0,A.cP)(e=>e.bagExpanded),m=(0,c.Kz)(e),f=[{address:e.address,tokenId:e.tokenId}],{walletAssets:x}=(0,j.b)(i??"",[],f,1),u=(0,p.useMemo)(()=>x?.[0],[x]),{assetInBag:g}=(0,p.useMemo)(()=>({assetInBag:s.some(t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)}),[e,s]),y=e.ownerAddress&&!!u&&i?.toLowerCase()===e.ownerAddress?.toLowerCase(),w=n&&e.priceInfo;return(0,r.jsxs)(O,{children:[(0,r.jsxs)(q,{children:[(0,r.jsxs)(Q,{children:[(0,r.jsx)(ei,{to:`/nfts/collection/${e.address}`,children:(0,r.jsxs)(J,{children:[t.collectionName,(0,r.jsx)(ee,{children:t.isVerified&&(0,r.jsx)(et,{})})]})}),(0,r.jsx)(Z,{onClick:()=>{window.open((0,c.Lr)(e),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,r.jsx)(k,{size:20,strokeWidth:2})})]}),(0,r.jsx)(K,{children:e.name??`${e.collectionName} #${e.tokenId}`})]}),y?(0,r.jsx)(eo,{asset:u}):w?(0,r.jsxs)(B,{children:[(0,r.jsxs)(M,{children:[(0,r.jsx)(E.Tv.SubHeader,{color:"accentAction",children:"Best Price"}),(0,r.jsx)(en,{href:n.marketplaceUrl,children:(0,c.Dp)(n.marketplace,"20")})]}),(0,r.jsxs)(z,{children:[(0,r.jsxs)(E.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[(0,c.IA)(e.priceInfo.ETHPrice)," ETH"]}),m&&(0,r.jsx)(E.Tv.BodySecondary,{lineHeight:"24px",children:(0,c.Nd)(m,!0,!0)})]}),o&&o>new Date&&(0,r.jsxs)(Y,{fontSize:"14px",children:["Sale ends: ",(0,c.zO)(o)]}),(0,r.jsx)("div",{children:(0,r.jsx)(R,{children:(0,r.jsx)(F,{assetInBag:g,margin:!0,useAccentColor:!0,onClick:()=>{g?l([e]):a([e]),g||h||d()},children:(0,r.jsx)(E.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,r.jsx)("span",{"data-testid":"nft-details-toggle-bag",children:g?"Remove":"Add to Bag"})})})})})]}):(0,r.jsx)(es,{collectionName:t.collectionName??"this collection",collectionUrl:e.address}),w&&(0,r.jsxs)(W,{children:["ERC1155"!==e.tokenType&&e.ownerAddress&&(0,r.jsx)(E.Tv.BodySmall,{color:"textSecondary",lineHeight:"20px",children:"Seller:"}),(0,r.jsx)(G,{target:"_blank",href:`https://etherscan.io/address/${e.ownerAddress}`,rel:"noopener noreferrer",children:"ERC1155"===e.tokenType?"":(0,r.jsxs)("span",{children:[" ",y?"You":e.ownerAddress&&(0,H.X)(e.ownerAddress,2)]})})]})]})};var el=i(2994),ed=i(39472),ec=i(17380),ep=i(60858),eh=i(5051),em=i(69518),ef=i(78174),ex=i(45938),eu=i(80343),eg=i(61984),ey=i(3406);let ew=L.default.tr.withConfig({displayName:"AssetActivity__TR",componentId:"sc-8f4197cc-0"})`
  border-bottom: ${({theme:e})=>`1px solid ${e.backgroundOutline}`};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`,eC=L.default.th.withConfig({displayName:"AssetActivity__TH",componentId:"sc-8f4197cc-1"})`
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
`,ev=L.default.table.withConfig({displayName:"AssetActivity__Table",componentId:"sc-8f4197cc-2"})`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
`,e_=L.default.td.withConfig({displayName:"AssetActivity__TD",componentId:"sc-8f4197cc-3"})`
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
`,ej=L.default.div.withConfig({displayName:"AssetActivity__PriceContainer",componentId:"sc-8f4197cc-4"})`
  align-items: center;
  display: flex;
  gap: 8px;
`,eb=L.default.a.withConfig({displayName:"AssetActivity__Link",componentId:"sc-8f4197cc-5"})`
  color: ${({theme:e})=>e.textPrimary};
  text-decoration: none;

  ${m.c}
`,eA=L.default.div.withConfig({displayName:"AssetActivity__ActivityContainer",componentId:"sc-8f4197cc-6"})`
  max-height: 310px;
  overflow: auto;

  ${m.Z}
`,eI=(0,L.default)(eu.X).withConfig({displayName:"AssetActivity__LoadingCell",componentId:"sc-8f4197cc-7"})`
  height: 20px;
  width: 80px;
`,eT=({children:e})=>(0,r.jsx)(eA,{id:"activityContainer",children:(0,r.jsxs)(ev,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)(ew,{children:[(0,r.jsx)(eC,{children:(0,r.jsx)(ex.cC,{id:"0pC/y6"})}),(0,r.jsx)(eC,{children:(0,r.jsx)(ex.cC,{id:"a7u1N9"})}),(0,r.jsx)(eC,{children:(0,r.jsx)(ex.cC,{id:"g+0MOn"})}),(0,r.jsx)(eC,{children:(0,r.jsx)(ex.cC,{id:"/jQctM"})}),(0,r.jsx)(eC,{children:(0,r.jsx)(ex.cC,{id:"LhMjLm"})})]})}),(0,r.jsx)("tbody",{children:e})]})}),eN=({cellCount:e})=>(0,r.jsx)(ew,{children:Array(e).fill(null).map((e,t)=>(0,r.jsx)(e_,{children:(0,r.jsx)(eI,{})},t))}),eS=({rowCount:e})=>(0,r.jsx)(eT,{children:Array(e).fill(null).map((e,t)=>(0,r.jsx)(eN,{cellCount:5},t))});var ek=({events:e})=>(0,r.jsx)(eT,{children:e&&e.map((e,t)=>{let{eventTimestamp:i,eventType:n,fromAddress:o,marketplace:s,price:a,toAddress:l,transactionHash:d}=e,p=a?(0,ed.GA)(parseFloat(a??"")):null;return n?(0,r.jsxs)(ew,{children:[(0,r.jsx)(e_,{children:(0,r.jsx)(eg.VM,{eventType:n,eventTimestamp:i,eventTransactionHash:d,eventOnly:!0})}),(0,r.jsx)(e_,{children:p&&(0,r.jsxs)(ej,{children:[s&&(0,c.Dp)(s,"16"),p," ETH"]})}),(0,r.jsx)(e_,{children:o&&(0,r.jsx)(eb,{href:`https://etherscan.io/address/${o}`,target:"_blank",rel:"noopener noreferrer",children:(0,H.X)(o,2)})}),(0,r.jsx)(e_,{children:l&&(0,r.jsx)(eb,{href:`https://etherscan.io/address/${l}`,target:"_blank",rel:"noopener noreferrer",children:(0,H.X)(l,2)})}),(0,r.jsx)(e_,{children:i&&(0,ey.F)(i.toString())})]},t):null})});i(74602),i(46728);var e$="_1yohfdw1 rgw6ez7bv rgw6ez1dv rgw6ez4p",eP=i(38641),eD=i(28285);let eL=L.default.div.withConfig({displayName:"DetailsContainer__Details",componentId:"sc-a3772d9f-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`,eE=L.default.div.withConfig({displayName:"DetailsContainer__Header",componentId:"sc-a3772d9f-1"})`
  color: ${({theme:e})=>e.textSecondary};
  font-size: 14px;
  line-height: 20px;
`,eH=L.default.div.withConfig({displayName:"DetailsContainer__Body",componentId:"sc-a3772d9f-2"})`
  color: ${({theme:e})=>e.textPrimary};
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`,eU=L.default.span.withConfig({displayName:"DetailsContainer__Center",componentId:"sc-a3772d9f-3"})`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;

  ${m.c}
`,eO=L.default.a.withConfig({displayName:"DetailsContainer__CreatorLink",componentId:"sc-a3772d9f-4"})`
  color: ${({theme:e})=>e.textPrimary};
  text-decoration: none;

  ${m.c}
`,eB=(0,L.default)(eD.Z).withConfig({displayName:"DetailsContainer__CopyIcon",componentId:"sc-a3772d9f-5"})`
  cursor: pointer;
`,eM=({header:e,body:t})=>(0,r.jsxs)("div",{children:[(0,r.jsx)(eE,{children:e}),(0,r.jsx)(eH,{children:t})]}),ez=e=>`${e.substring(0,4)}...${e.substring(e.length-4,e.length)}`;var eF=({asset:e,collection:t})=>{let{address:i,tokenId:n,tokenType:o,creator:s}=e,{totalSupply:a}=t,[,l]=(0,eP.Z)(),d=(0,p.useCallback)(()=>{l(i??"")},[i,l]);return(0,r.jsxs)(eL,{children:[(0,r.jsx)(eM,{header:"Contract address",body:(0,r.jsxs)(eU,{onClick:d,children:[(0,H.X)(i,2)," ",(0,r.jsx)(eB,{size:13})]})}),(0,r.jsx)(eM,{header:"Token ID",body:n.length>9?ez(n):n}),(0,r.jsx)(eM,{header:"Token standard",body:o}),(0,r.jsx)(eM,{header:"Blockchain",body:"Ethereum"}),(0,r.jsx)(eM,{header:"Total supply",body:`${(0,c.Ux)(a??0)}`}),(0,r.jsx)(eM,{header:"Creator",body:s?.address&&(0,r.jsx)(eO,{href:`https://etherscan.io/address/${s.address}`,rel:"noopener noreferrer",target:"_blank",children:(0,H.X)(s.address,2)})})]})},eR=i(86532),eY=i(59801);let eZ=L.default.div.withConfig({displayName:"InfoContainer__Header",componentId:"sc-36739395-0"})`
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

  transition: ${({theme:{transition:{duration:e,timing:t}}})=>(0,L.css)`background-color ${e.medium} ${t.ease}`};
`,eV=L.default.span.withConfig({displayName:"InfoContainer__PrimaryHeader",componentId:"sc-36739395-1"})`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({theme:e})=>e.textPrimary};
  font-weight: 500;
  line-height: 28px;
  font-size: 20px;
`,eX=L.default.span.withConfig({displayName:"InfoContainer__SecondaryHeader",componentId:"sc-36739395-2"})`
  font-size: 12px;
  color: ${({theme:e})=>e.textSecondary};
`,eG=L.default.span.withConfig({displayName:"InfoContainer__SecondaryHeaderContainer",componentId:"sc-36739395-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: ${({theme:e})=>e.textPrimary};
`,eW=L.default.div.withConfig({displayName:"InfoContainer__ContentContainer",componentId:"sc-36739395-4"})`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.backgroundOutline};
  border-top: none;
  border-radius: 0px 0px 16px 16px;
  background-color: ${({theme:e})=>e.backgroundSurface};
`;var eq=({children:e,primaryHeader:t,secondaryHeader:i,defaultOpen:n,...o})=>{let[s,a]=(0,p.useState)(!!n);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(eZ,{...o,isOpen:s,onClick:()=>a(!s),children:[(0,r.jsxs)(eV,{children:[t," ",(0,r.jsx)(eX,{children:i})]}),(0,r.jsx)(eG,{children:s?(0,r.jsx)(eR.Z,{}):(0,r.jsx)(eY.Z,{})})]}),s&&(0,r.jsx)(eW,{children:e})]})},eK=i(93343);let eQ=L.default.div.withConfig({displayName:"TraitsContainer__Grid",componentId:"sc-6d624bb5-0"})`
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
`,eJ=(0,L.default)(P.rU).withConfig({displayName:"TraitsContainer__GridItemContainer",componentId:"sc-6d624bb5-1"})`
  background-color: ${({theme:e})=>e.backgroundInteractive};
  border-radius: 12px;
  cursor: pointer;
  padding: 12px;
  text-decoration: none;

  ${m.c}
  min-width: 0;
`,e0=L.default.div.withConfig({displayName:"TraitsContainer__TraitType",componentId:"sc-6d624bb5-2"})`
  color: ${({theme:e})=>e.textSecondary};
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  white-space: nowrap;
  width: 100%;
`,e1=L.default.div.withConfig({displayName:"TraitsContainer__TraitValue",componentId:"sc-6d624bb5-3"})`
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
`,e2=({trait:e,collectionAddress:t})=>{let{trait_type:i,trait_value:n}=e,o=eK.stringify({traits:[`("${i}","${n}")`]},{arrayFormat:"comma"});return(0,r.jsxs)(eJ,{to:`/nfts/collection/${t}?${o}`,children:[(0,r.jsx)(e0,{children:i}),(0,r.jsx)(e1,{children:n})]})};var e3=({asset:e})=>{let t=(0,p.useMemo)(()=>e.traits?.sort((e,t)=>e.trait_type.localeCompare(t.trait_type)),[e]);return(0,r.jsx)(eQ,{children:t?.map(t=>r.jsx(e2,{trait:t,collectionAddress:e.address},t.trait_type))})};let e4=L.default.div.withConfig({displayName:"AssetDetails__AssetPriceDetailsContainer",componentId:"sc-841605cd-0"})`
  margin-top: 20px;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`,e5=L.default.div.withConfig({displayName:"AssetDetails__MediaContainer",componentId:"sc-841605cd-1"})`
  display: flex;
  justify-content: center;
`,e6=L.default.div.withConfig({displayName:"AssetDetails__Column",componentId:"sc-841605cd-2"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 780px;
`,e8=L.default.a.withConfig({displayName:"AssetDetails__AddressTextLink",componentId:"sc-841605cd-3"})`
  display: inline-block;
  color: ${({theme:e})=>e.textSecondary};
  text-decoration: none;
  max-width: 100%;
  word-wrap: break-word;
  ${m.c};
`,e9=L.default.div.withConfig({displayName:"AssetDetails__SocialsContainer",componentId:"sc-841605cd-4"})`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`,e7=L.default.div.withConfig({displayName:"AssetDetails__DescriptionText",componentId:"sc-841605cd-5"})`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
`,te=L.default.span.withConfig({displayName:"AssetDetails__RarityWrap",componentId:"sc-841605cd-6"})`
  display: flex;
  color: ${({theme:e})=>e.textSecondary};
  padding: 2px 4px;
  border-radius: 4px;
  align-items: center;
  gap: 4px;
`,tt=L.default.div.withConfig({displayName:"AssetDetails__EmptyActivitiesContainer",componentId:"sc-841605cd-7"})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({theme:e})=>e.textPrimary};
  font-size: 28px;
  line-height: 36px;
  padding: 56px 0px;
`,ti=(0,L.default)(P.rU).withConfig({displayName:"AssetDetails__Link",componentId:"sc-841605cd-8"})`
  color: ${({theme:e})=>e.accentAction};
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  margin-top: 12px;
  cursor: pointer;
  ${m.c};
`,tn=L.default.div.withConfig({displayName:"AssetDetails__ActivitySelectContainer",componentId:"sc-841605cd-9"})`
  display: flex;
  gap: 8px;
  margin-bottom: 34px;
  overflow-x: auto;
  ${m.Z}

  @media (max-width: 720px) {
    padding-bottom: 8px;
  }
`,to=L.default.div.withConfig({displayName:"AssetDetails__ContentNotAvailable",componentId:"sc-841605cd-10"})`
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
`,tr=L.default.div.withConfig({displayName:"AssetDetails__FilterBox",componentId:"sc-841605cd-11"})`
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
`,ts=L.default.span.withConfig({displayName:"AssetDetails__ByText",componentId:"sc-841605cd-12"})`
  font-size: 14px;
  line-height: 20px;
`,ta=L.default.img.withConfig({displayName:"AssetDetails__Img",componentId:"sc-841605cd-13"})`
  background-color: white;
`,tl=L.default.div.withConfig({displayName:"AssetDetails__HoverImageContainer",componentId:"sc-841605cd-14"})`
  display: flex;
  margin-right: 4px;
`,td=L.default.div.withConfig({displayName:"AssetDetails__HoverContainer",componentId:"sc-841605cd-15"})`
  display: flex;
`,tc=L.default.span.withConfig({displayName:"AssetDetails__ContainerText",componentId:"sc-841605cd-16"})`
  font-size: 14px;
`,tp=({imageUrl:e,animationUrl:t,name:i,collectionName:n,dominantColor:o})=>(0,r.jsxs)(g.n,{position:"relative",display:"inline-block",alignSelf:"center",children:[(0,r.jsx)(g.n,{as:"audio",className:"_1yohfdwd",width:"292",controls:!0,src:t}),(0,r.jsx)("img",{className:e$,src:e,alt:i||n,style:{"--shadow":`rgba(${o.join(", ")}, 0.5)`,minWidth:"300px",minHeight:"300px"}})]}),th={[I.n$.Listing]:!0,[I.n$.Sale]:!0,[I.n$.Transfer]:!1,[I.n$.CancelListing]:!1};(n=o||(o={})).Audio="audio",n.Video="video",n.Image="image",n.Embed="embed";let tm=({mediaType:e,asset:t,dominantColor:i})=>{let n={"--shadow":`rgba(${i.join(", ")}, 0.5)`};switch(e){case o.Video:return(0,r.jsx)("video",{src:t.animationUrl,className:e$,autoPlay:!0,controls:!0,muted:!0,loop:!0,style:n});case o.Image:return(0,r.jsx)("img",{className:e$,src:t.imageUrl,alt:t.name||t.collectionName,style:n});case o.Audio:return(0,r.jsx)(tp,{...t,dominantColor:i});case o.Embed:return(0,r.jsx)("div",{className:"_1yohfdw2",children:(0,r.jsx)("iframe",{title:t.name??`${t.collectionName} #${t.tokenId}`,src:t.animationUrl,className:"_1yohfdw3 _1yohfdw1 rgw6ez7bv rgw6ez1dv rgw6ez4p",style:n,frameBorder:0,height:"100%",width:"100%",sandbox:"allow-scripts",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},tf=({asset:e,collection:t})=>{let[i]=(0,p.useState)([0,0,0]),{rarityProvider:n}=(0,p.useMemo)(()=>e.rarity?{rarityProvider:e?.rarity?.providers?.find(({provider:t})=>t===e.rarity?.primaryProvider)}:{},[e.rarity]),s=(0,p.useMemo)(()=>(0,ec.F)(e.animationUrl??"")?o.Audio:(0,ep.W)(e.animationUrl??"")?o.Video:e.animationUrl?o.Embed:o.Image,[e]),{address:a,tokenId:l}=e,{nftActivity:d}=(0,u.m)({activityTypes:[h.y3.Sale],address:a,tokenId:l},1,"no-cache"),c=d?.[0]?.price,m=c?(0,ed.GA)(parseFloat(c)):void 0,[g,C]=(0,p.useReducer)(y.YQ,th),_=(0,p.useCallback)(function({eventType:e}){let t=g[e],i=(0,ef.Gv)();return(0,r.jsx)(tr,{backgroundColor:t?i?w.gR.color.gray500:w.gR.color.gray200:w.Z4.colors.backgroundInteractive,onClick:()=>C({eventType:e}),children:e===I.n$.CancelListing?"Cancellations":e.charAt(0)+e.slice(1).toLowerCase()+"s"})},[g]),{nftActivity:j,hasNext:b,loadMore:A,loading:T,error:N}=(0,u.m)({activityTypes:Object.keys(g).map(e=>e).filter(e=>g[e]),address:a,tokenId:l},25),S=e?.rarity?.providers?.[0],[k,$]=(0,p.useState)(!1);return(0,r.jsxs)(e6,{children:[(0,r.jsx)(e5,{children:void 0===e.imageUrl||k?(0,r.jsx)(to,{children:"Content not available yet"}):s===o.Image?(0,r.jsx)(ta,{className:e$,src:e.imageUrl,alt:e.name||t.collectionName,onError:()=>$(!0)}):(0,r.jsx)(tm,{asset:e,mediaType:s,dominantColor:i})}),(0,r.jsx)(e4,{children:(0,r.jsx)(ea,{asset:e,collection:t})}),e.traits&&(0,r.jsx)(eq,{"data-testid":"nft-details-traits",primaryHeader:"Traits",defaultOpen:!0,secondaryHeader:n&&S&&S.score?(0,r.jsx)(x.ud,{text:(0,r.jsxs)(td,{children:[(0,r.jsx)(tl,{children:(0,r.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,r.jsx)(tc,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,r.jsxs)(te,{children:["Rarity: ",(0,eh.U)(S.score)]})}):null,children:(0,r.jsx)(e3,{asset:e})}),(0,r.jsx)(eq,{primaryHeader:"Activity",defaultOpen:!0,secondaryHeader:m?`Last Sale: ${m} ETH`:void 0,"data-testid":"nft-details-activity",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(tn,{$isHorizontalScroll:!0,children:[(0,r.jsx)(_,{eventType:I.n$.Listing}),(0,r.jsx)(_,{eventType:I.n$.Sale}),(0,r.jsx)(_,{eventType:I.n$.Transfer}),(0,r.jsx)(_,{eventType:I.n$.CancelListing})]}),T?(0,r.jsx)(eS,{rowCount:10}):j&&j.length>0?(0,r.jsx)(em.Z,{next:A,hasMore:!!b,loader:T&&(0,r.jsx)(el.M5,{children:(0,r.jsx)(v,{})}),dataLength:j?.length??0,scrollableTarget:"activityContainer",children:(0,r.jsx)(ek,{events:j})}):(0,r.jsx)(r.Fragment,{children:!N&&j&&(0,r.jsxs)(tt,{children:[(0,r.jsx)("div",{children:"No activities yet"}),(0,r.jsx)(ti,{to:`/nfts/collection/${e.address}`,children:"View collection items"})," "]})})]})}),(0,r.jsx)(eq,{primaryHeader:"Description",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-description",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ts,{children:"By "}),e?.creator&&e.creator?.address&&(0,r.jsx)(e8,{href:`https://etherscan.io/address/${e.creator.address}`,target:"_blank",rel:"noopener noreferrer",children:(0,H.X)(e.creator.address,2)}),(0,r.jsx)(e7,{"data-testid":"nft-details-description-text",children:t.collectionDescription}),(0,r.jsxs)(e9,{children:[t.externalUrl&&(0,r.jsx)(f.Z,{name:"Website",link:`${t.externalUrl}`}),t.twitterUrl&&(0,r.jsx)(f.Z,{name:"Twitter",link:`https://twitter.com/${t.twitterUrl}`}),t.discordUrl&&(0,r.jsx)(f.Z,{name:"Discord",link:t.discordUrl})]})]})}),(0,r.jsx)(eq,{primaryHeader:"Details",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-asset-details",children:(0,r.jsx)(eF,{asset:e,collection:t})})]})};var tx=i(60476),tu=i(25575),tg=i(18683);let ty="960px",tw=(0,L.default)(eu.X).withConfig({displayName:"AssetDetailsLoading__Title",componentId:"sc-12ae3a71-0"})`
  height: 16px;
  width: 136px;
`,tC=(0,L.default)(eu.X).withConfig({displayName:"AssetDetailsLoading__SubTitle",componentId:"sc-12ae3a71-1"})`
  height: 40px;
  width: 200px;
  margin-top: 8px;

  @media (max-width: ${ty}) {
    width: 100%;
  }
`,tv=(0,L.default)(eu.X).withConfig({displayName:"AssetDetailsLoading__Seller",componentId:"sc-12ae3a71-2"})`
  height: 16px;
  width: 40px;
`,t_=(0,L.default)(eu.X).withConfig({displayName:"AssetDetailsLoading__SellerAddress",componentId:"sc-12ae3a71-3"})`
  margin-top: 4px;
  height: 24px;
  width: 95px;
`,tj=(0,L.default)(eu.X).withConfig({displayName:"AssetDetailsLoading__PrimaryBody",componentId:"sc-12ae3a71-4"})`
  width: 100%;
  height: 260px;
`,tb=(0,L.default)(eu.X).withConfig({displayName:"AssetDetailsLoading__ActivityLoader",componentId:"sc-12ae3a71-5"})`
  width: 100%;
  height: 428px;
`,tA=(0,L.default)(tx.ZP).withConfig({displayName:"AssetDetailsLoading__PrimaryContent",componentId:"sc-12ae3a71-6"})`
  max-width: 780px;
  margin-top: 28px;
  width: 100%;
  gap: 28px;

  @media (max-width: ${ty}) {
    max-width: 100%;
  }
`,tI=L.default.div.withConfig({displayName:"AssetDetailsLoading__LoaderContainer",componentId:"sc-12ae3a71-7"})`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`,tT=(0,L.default)(eu.X).withConfig({displayName:"AssetDetailsLoading__BuyNowContainer",componentId:"sc-12ae3a71-8"})`
  height: 180px;
  width: 360px;

  @media (max-width: ${ty}) {
    width: 100%;
  }
`,tN=L.default.div.withConfig({displayName:"AssetDetailsLoading__LoadingContainer",componentId:"sc-12ae3a71-9"})`
  display: flex;
  margin-top: 48px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1296px;

  ${tg.bc}

  @media (max-width: ${ty}) {
    max-width: 100%;
    margin-top: 0;
  }
`,tS=(0,L.default)(tx.ZP).withConfig({displayName:"AssetDetailsLoading__StyledColumn",componentId:"sc-12ae3a71-10"})`
  max-width: 780px;
  width: 100%;

  @media (max-width: ${ty}) {
    max-width: 100%;
  }
`,tk=(0,L.default)(tx.ZP).withConfig({displayName:"AssetDetailsLoading__BuyNowLoadingDesktop",componentId:"sc-12ae3a71-11"})`
  margin-top: 20px;
  padding-left: 60px;
  gap: 24px;

  @media (max-width: ${ty}) {
    display: none;
  }
`,t$=(0,L.default)(tx.ZP).withConfig({displayName:"AssetDetailsLoading__BuyNowLoadingMobile",componentId:"sc-12ae3a71-12"})`
  display: none;
  margin-top: 16px;
  gap: 24px;

  @media (max-width: ${ty}) {
    display: flex;
  }
`,tP=()=>{let e=(0,L.useTheme)();return(0,r.jsxs)(tN,{children:[(0,r.jsxs)(tS,{children:[(0,r.jsx)(tI,{children:(0,r.jsx)(tu.ZP,{stroke:e.accentAction,size:"40px"})}),(0,r.jsxs)(t$,{children:[(0,r.jsxs)(tx.ZP,{children:[(0,r.jsx)(tw,{}),(0,r.jsx)(tC,{})]}),(0,r.jsx)(tT,{}),(0,r.jsxs)(tx.ZP,{children:[(0,r.jsx)(tv,{}),(0,r.jsx)(t_,{})]})]}),(0,r.jsxs)(tA,{children:[(0,r.jsx)(tj,{}),(0,r.jsx)(tb,{}),(0,r.jsx)(tj,{}),(0,r.jsx)(tj,{})]})]}),(0,r.jsxs)(tk,{children:[(0,r.jsxs)(tx.ZP,{children:[(0,r.jsx)(tw,{}),(0,r.jsx)(tC,{})]}),(0,r.jsx)(tT,{}),(0,r.jsxs)(tx.ZP,{children:[(0,r.jsx)(tv,{}),(0,r.jsx)(t_,{})]})]})]})},tD=L.default.div.withConfig({displayName:"Asset__AssetContainer",componentId:"sc-8bdece75-0"})`
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
`,tL=L.default.div.withConfig({displayName:"Asset__AssetPriceDetailsContainer",componentId:"sc-8bdece75-1"})`
  min-width: 360px;
  position: relative;

  @media (max-width: 960px) {
    display: none;
  }
`;var tE=()=>{let{tokenId:e="",contractAddress:t=""}=(0,D.UO)(),{data:i,loading:n}=function(e,t){let{data:i,loading:n}=(0,h.xw)({variables:{address:e,tokenId:t}}),o=i?.nftAssets?.edges[0]?.node,r=o?.collection,s=o?.listings?.edges[0]?.node,a=(0,l.parseEther)((0,c.K3)(s?.price?.value?.toString()??"0")).toString();return(0,p.useMemo)(()=>({data:[{id:o?.id,address:e,notForSale:o?.listings===null,collectionName:o?.collection?.name,collectionSymbol:o?.collection?.image?.url,imageUrl:o?.image?.url,animationUrl:o?.animationUrl,marketplace:s?.marketplace.toLowerCase(),name:o?.name,priceInfo:{ETHPrice:a,baseAsset:"ETH",baseDecimals:"18",basePrice:a},susFlag:o?.suspiciousFlag,sellorders:o?.listings?.edges.map(e=>({...e.node,protocolParameters:e.node.protocolParameters?JSON.parse(e.node.protocolParameters.toString()):void 0})),smallImageUrl:o?.smallImage?.url,tokenId:t,tokenType:o?.collection?.nftContracts?.[0]?.standard,collectionIsVerified:o?.collection?.isVerified,rarity:{primaryProvider:"Rarity Sniper",providers:o?.rarities?.map(e=>({rank:e.rank,score:e.score,provider:"Rarity Sniper"}))},ownerAddress:o?.ownerAddress,creator:{profile_img_url:o?.creator?.profileImage?.url??"",address:o?.creator?.address??""},metadataUrl:o?.metadataUrl??"",traits:o?.traits?.map(e=>({trait_type:e.name??"",trait_value:e.value??""}))},{collectionDescription:r?.description,collectionImageUrl:r?.image?.url,collectionName:r?.name,isVerified:r?.isVerified,totalSupply:r?.numAssets,twitterUrl:r?.twitterName,discordUrl:r?.discordUrl,externalUrl:r?.homepageUrl}],loading:n}),[e,o,r,a,s?.marketplace,n,t])}(t,e),[o,d]=i;return n?(0,r.jsx)(tP,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.fM,{page:s.yJ.NFT_DETAILS_PAGE,properties:{collection_address:t,token_id:e},shouldLogImpression:!0,children:o&&d?(0,r.jsxs)(tD,{children:[(0,r.jsx)(tf,{collection:d,asset:o}),(0,r.jsx)(tL,{children:(0,r.jsx)(ea,{collection:d,asset:o})})]}):null})})}}}]);
//# sourceMappingURL=6563.ef7d91cb.chunk.js.map