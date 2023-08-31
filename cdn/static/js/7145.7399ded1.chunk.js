"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7145],{6754:function(){},95792:function(e,t,n){n.d(t,{Z:function(){return j}});var r,a,u=n(92167);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}}function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,u,o,l=[],i=!0,c=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=u.call(n)).done)&&(l.push(r.value),l.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||l(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=n(71002),s=n(63505),d=n(4976),v=n.n(d),m=n(69633),h=n.n(m);function b(e){var t=s.useRef();return t.current=e,s.useCallback(function(){for(var e,n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))},[])}var p="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect,y=function(e,t){var n=s.useRef(!0);p(function(){if(!n.current)return e()},t),p(function(){return n.current=!1,function(){n.current=!0}},[])};function g(e){return void 0!==e}(r=a||(a={}))[r.INNER=0]="INNER",r[r.PROP=1]="PROP";var E=n(87462),x=n(63366);function C(e,t){if(null==e)return{};var n,r,a=(0,x.Z)(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k=n(1413),M={PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},S=s.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0});function w(e,t,n,r){var a=(t-n)/(r-n),u={};switch(e){case"rtl":u.right="".concat(100*a,"%"),u.transform="translateX(50%)";break;case"btt":u.bottom="".concat(100*a,"%"),u.transform="translateY(50%)";break;case"ttb":u.top="".concat(100*a,"%"),u.transform="translateY(-50%)";break;default:u.left="".concat(100*a,"%"),u.transform="translateX(-50%)"}return u}function R(e,t){return Array.isArray(e)?e[t]:e}var O=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],N=s.forwardRef(function(e,t){var n,r,a=e.prefixCls,o=e.value,l=e.valueIndex,i=e.onStartMove,c=e.style,f=e.render,d=e.dragging,m=e.onOffsetChange,h=C(e,O),b=s.useContext(S),p=b.min,y=b.max,g=b.direction,x=b.disabled,N=b.range,I=b.tabIndex,P=b.ariaLabelForHandle,Z=b.ariaLabelledByForHandle,F=b.ariaValueTextFormatterForHandle,L="".concat(a,"-handle"),A=function(e){x||i(e,l)},D=w(g,o,p,y),H=s.createElement("div",(0,E.Z)({ref:t,className:v()(L,(n={},(0,u.Z)(n,"".concat(L,"-").concat(l+1),N),(0,u.Z)(n,"".concat(L,"-dragging"),d),n)),style:(0,k.Z)((0,k.Z)({},D),c),onMouseDown:A,onTouchStart:A,onKeyDown:function(e){if(!x){var t=null;switch(e.which||e.keyCode){case M.LEFT:t="ltr"===g||"btt"===g?-1:1;break;case M.RIGHT:t="ltr"===g||"btt"===g?1:-1;break;case M.UP:t="ttb"!==g?1:-1;break;case M.DOWN:t="ttb"!==g?-1:1;break;case M.HOME:t="min";break;case M.END:t="max";break;case M.PAGE_UP:t=2;break;case M.PAGE_DOWN:t=-2}null!==t&&(e.preventDefault(),m(t,l))}},tabIndex:x?null:R(I,l),role:"slider","aria-valuemin":p,"aria-valuemax":y,"aria-valuenow":o,"aria-disabled":x,"aria-label":R(P,l),"aria-labelledby":R(Z,l),"aria-valuetext":null===(r=R(F,l))||void 0===r?void 0:r(o)},h));return f&&(H=f(H,{index:l,prefixCls:a,value:o,dragging:d})),H}),I=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],P=s.forwardRef(function(e,t){var n=e.prefixCls,r=e.style,a=e.onStartMove,u=e.onOffsetChange,o=e.values,l=e.handleRender,i=e.draggingIndex,c=C(e,I),f=s.useRef({});return s.useImperativeHandle(t,function(){return{focus:function(e){var t;null===(t=f.current[e])||void 0===t||t.focus()}}}),s.createElement(s.Fragment,null,o.map(function(e,t){return s.createElement(N,(0,E.Z)({ref:function(e){e?f.current[t]=e:delete f.current[t]},dragging:i===t,prefixCls:n,style:R(r,t),key:t,value:e,valueIndex:t,onStartMove:a,onOffsetChange:u,render:l},c))}))});function Z(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function F(e){var t=e.prefixCls,n=e.style,r=e.start,a=e.end,u=e.index,o=e.onStartMove,l=s.useContext(S),i=l.direction,c=l.min,f=l.max,d=l.disabled,m=l.range,h="".concat(t,"-track"),b=(r-c)/(f-c),p=(a-c)/(f-c),y=function(e){!d&&o&&o(e,-1)},g={};switch(i){case"rtl":g.right="".concat(100*b,"%"),g.width="".concat(100*p-100*b,"%");break;case"btt":g.bottom="".concat(100*b,"%"),g.height="".concat(100*p-100*b,"%");break;case"ttb":g.top="".concat(100*b,"%"),g.height="".concat(100*p-100*b,"%");break;default:g.left="".concat(100*b,"%"),g.width="".concat(100*p-100*b,"%")}return s.createElement("div",{className:v()(h,m&&"".concat(h,"-").concat(u+1)),style:(0,k.Z)((0,k.Z)({},g),n),onMouseDown:y,onTouchStart:y})}function L(e){var t=e.prefixCls,n=e.style,r=e.values,a=e.startPoint,u=e.onStartMove,o=s.useContext(S),l=o.included,i=o.range,c=o.min,f=s.useMemo(function(){if(!i){if(0===r.length)return[];var e=null!=a?a:c,t=r[0];return[{start:Math.min(e,t),end:Math.max(e,t)}]}for(var n=[],u=0;u<r.length-1;u+=1)n.push({start:r[u],end:r[u+1]});return n},[r,i,a,c]);return l?f.map(function(e,r){var a=e.start,o=e.end;return s.createElement(F,{index:r,prefixCls:t,style:R(n,r),start:a,end:o,key:r,onStartMove:u})}):null}function A(e){var t=e.prefixCls,n=e.style,r=e.children,a=e.value,o=e.onClick,l=s.useContext(S),i=l.min,c=l.max,f=l.direction,d=l.includedStart,m=l.includedEnd,h=l.included,b="".concat(t,"-text"),p=w(f,a,i,c);return s.createElement("span",{className:v()(b,(0,u.Z)({},"".concat(b,"-active"),h&&d<=a&&a<=m)),style:(0,k.Z)((0,k.Z)({},p),n),onMouseDown:function(e){e.stopPropagation()},onClick:function(){o(a)}},r)}function D(e){var t=e.prefixCls,n=e.marks,r=e.onClick,a="".concat(t,"-mark");return n.length?s.createElement("div",{className:a},n.map(function(e){var t=e.value,n=e.style,u=e.label;return s.createElement(A,{key:t,prefixCls:a,style:n,value:t,onClick:r},u)})):null}function H(e){var t=e.prefixCls,n=e.value,r=e.style,a=e.activeStyle,o=s.useContext(S),l=o.min,i=o.max,c=o.direction,f=o.included,d=o.includedStart,m=o.includedEnd,h="".concat(t,"-dot"),b=f&&d<=n&&n<=m,p=(0,k.Z)((0,k.Z)({},w(c,n,l,i)),"function"==typeof r?r(n):r);return b&&(p=(0,k.Z)((0,k.Z)({},p),"function"==typeof a?a(n):a)),s.createElement("span",{className:v()(h,(0,u.Z)({},"".concat(h,"-active"),b)),style:p})}function T(e){var t=e.prefixCls,n=e.marks,r=e.dots,a=e.style,u=e.activeStyle,o=s.useContext(S),l=o.min,i=o.max,c=o.step,f=s.useMemo(function(){var e=new Set;if(n.forEach(function(t){e.add(t.value)}),r&&null!==c)for(var t=l;t<=i;)e.add(t),t+=c;return Array.from(e)},[l,i,c,r,n]);return s.createElement("div",{className:"".concat(t,"-step")},f.map(function(e){return s.createElement(H,{prefixCls:t,key:e,value:e,style:a,activeStyle:u})}))}var j=s.forwardRef(function(e,t){var n,r,o,l,d,m,E,x,C,k,M,w,R,O,N,I,F,A,H,j,B,_,X,Y,G,V,U,W,z,K,$,q,J,Q,ee,et,en,er,ea,eu,eo,el,ei=e.prefixCls,ec=void 0===ei?"rc-slider":ei,ef=e.className,es=e.style,ed=e.disabled,ev=void 0!==ed&&ed,em=e.autoFocus,eh=e.onFocus,eb=e.onBlur,ep=e.min,ey=void 0===ep?0:ep,eg=e.max,eE=void 0===eg?100:eg,ex=e.step,eC=void 0===ex?1:ex,ek=e.value,eM=e.defaultValue,eS=e.range,ew=e.count,eR=e.onChange,eO=e.onBeforeChange,eN=e.onAfterChange,eI=e.allowCross,eP=void 0===eI||eI,eZ=e.pushable,eF=void 0!==eZ&&eZ,eL=e.draggableTrack,eA=e.reverse,eD=e.vertical,eH=e.included,eT=void 0===eH||eH,ej=e.startPoint,eB=e.trackStyle,e_=e.handleStyle,eX=e.railStyle,eY=e.dotStyle,eG=e.activeDotStyle,eV=e.marks,eU=e.dots,eW=e.handleRender,ez=e.tabIndex,eK=void 0===ez?0:ez,e$=e.ariaLabelForHandle,eq=e.ariaLabelledByForHandle,eJ=e.ariaValueTextFormatterForHandle,eQ=s.useRef(),e0=s.useRef(),e1=s.useMemo(function(){return eD?eA?"ttb":"btt":eA?"rtl":"ltr"},[eA,eD]),e3=s.useMemo(function(){return isFinite(ey)?ey:0},[ey]),e2=s.useMemo(function(){return isFinite(eE)?eE:100},[eE]),e6=s.useMemo(function(){return null!==eC&&eC<=0?1:eC},[eC]),e5=s.useMemo(function(){return!0===eF?e6:eF>=0&&eF},[eF,e6]),e4=s.useMemo(function(){return Object.keys(eV||{}).map(function(e){var t=eV[e],n={value:Number(e)};return t&&"object"===(0,f.Z)(t)&&!s.isValidElement(t)&&("label"in t||"style"in t)?(n.style=t.style,n.label=t.label):n.label=t,n}).filter(function(e){var t=e.label;return t||"number"==typeof t}).sort(function(e,t){return e.value-t.value})},[eV]),e7=c((n=s.useCallback(function(e){return isFinite(e),Math.max(e3,Math.min(e2,e))},[e3,e2]),r=s.useCallback(function(e){if(null!==e6){var t=e3+Math.round((n(e)-e3)/e6)*e6,r=function(e){return(String(e).split(".")[1]||"").length},a=Math.max(r(e6),r(e2),r(e3)),u=Number(t.toFixed(a));return e3<=u&&u<=e2?u:null}return null},[e6,e3,e2,n]),o=s.useCallback(function(e){var t=n(e),a=e4.map(function(e){return e.value});null!==e6&&a.push(r(e)),a.push(e3,e2);var u=a[0],o=e2-e3;return a.forEach(function(e){var n=Math.abs(t-e);n<=o&&(u=e,o=n)}),u},[e3,e2,e4,e6,n,r]),l=function e(t,n,a){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof n){var o,l=t[a],c=l+n,f=[];e4.forEach(function(e){f.push(e.value)}),f.push(e3,e2),f.push(r(l));var s=n>0?1:-1;"unit"===u?f.push(r(l+s*e6)):f.push(r(c)),f=f.filter(function(e){return null!==e}).filter(function(e){return n<0?e<=l:e>=l}),"unit"===u&&(f=f.filter(function(e){return e!==l}));var d="unit"===u?l:c,v=Math.abs((o=f[0])-d);if(f.forEach(function(e){var t=Math.abs(e-d);t<v&&(o=e,v=t)}),void 0===o)return n<0?e3:e2;if("dist"===u)return o;if(Math.abs(n)>1){var m=i(t);return m[a]=o,e(m,n-s,a,u)}return o}return"min"===n?e3:"max"===n?e2:void 0},d=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e[n],u=l(e,t,n,r);return{value:u,changed:u!==a}},m=function(e){return null===e5&&0===e||"number"==typeof e5&&e<e5},[o,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",a=e.map(o),u=a[n],i=l(a,t,n,r);if(a[n]=i,!1===eP){var c=e5||0;n>0&&a[n-1]!==u&&(a[n]=Math.max(a[n],a[n-1]+c)),n<a.length-1&&a[n+1]!==u&&(a[n]=Math.min(a[n],a[n+1]-c))}else if("number"==typeof e5||null===e5){for(var f=n+1;f<a.length;f+=1)for(var s=!0;m(a[f]-a[f-1])&&s;){var v=d(a,1,f);a[f]=v.value,s=v.changed}for(var h=n;h>0;h-=1)for(var b=!0;m(a[h]-a[h-1])&&b;){var p=d(a,-1,h-1);a[h-1]=p.value,b=p.changed}for(var y=a.length-1;y>0;y-=1)for(var g=!0;m(a[y]-a[y-1])&&g;){var E=d(a,-1,y-1);a[y-1]=E.value,g=E.changed}for(var x=0;x<a.length-1;x+=1)for(var C=!0;m(a[x+1]-a[x])&&C;){var k=d(a,1,x+1);a[x+1]=k.value,C=k.changed}}return{value:a[n],values:a}}]),2),e9=e7[0],e8=e7[1],te=(x=(E={value:ek}).defaultValue,C=E.value,k=E.onChange,M=E.postState,w=s.useRef(!1),O=(R=c(s.useState(function(){var e,t=void 0;return g(C)?(t=C,e=a.PROP):g(x)?(t="function"==typeof x?x():x,e=a.PROP):(t="function"==typeof eM?eM():eM,e=a.INNER),[t,e,t]}),2))[0],N=R[1],s.useEffect(function(){return w.current=!1,function(){w.current=!0}},[]),F=(I=c([O,function(e,t){t&&w.current||N(e)}],2))[0],A=I[1],H=g(C)?C:F[0],j=M?M(H):H,y(function(){A(function(e){var t=c(e,1)[0];return[C,a.PROP,t]})},[C]),B=s.useRef(),_=b(function(e,t){A(function(t){var n=c(t,3),r=n[0],u=n[1],o=n[2],l="function"==typeof e?e(r):e;if(l===r)return t;var i=u===a.INNER&&B.current!==o?o:r;return[l,a.INNER,i]},t)}),X=b(k),p(function(){var e=c(F,3),t=e[0],n=e[1],r=e[2];t!==r&&n===a.INNER&&(X(t,r),B.current=r)},[F]),[j,_]),tt=c(te,2),tn=tt[0],tr=tt[1],ta=s.useMemo(function(){var e=null==tn?[]:Array.isArray(tn)?tn:[tn],t=c(e,1)[0],n=void 0===t?e3:t,r=null===tn?[]:[n];if(eS){if(r=i(e),ew||void 0===tn){var a,u=ew>=0?ew+1:2;for(r=r.slice(0,u);r.length<u;)r.push(null!==(a=r[r.length-1])&&void 0!==a?a:e3)}r.sort(function(e,t){return e-t})}return r.forEach(function(e,t){r[t]=e9(e)}),r},[tn,eS,e3,ew,e9]),tu=s.useRef(ta);tu.current=ta;var to=function(e){return eS?e:e[0]},tl=function(e){var t=i(e).sort(function(e,t){return e-t});eR&&!h()(t,tu.current)&&eR(to(t)),tr(t)},ti=function(e){if(!ev){var t=0,n=e2-e3;ta.forEach(function(r,a){var u=Math.abs(e-r);u<=n&&(n=u,t=a)});var r=i(ta);r[t]=e,eS&&!ta.length&&void 0===ew&&r.push(e),null==eO||eO(to(r)),tl(r),null==eN||eN(to(r))}},tc=c(s.useState(null),2),tf=tc[0],ts=tc[1];s.useEffect(function(){if(null!==tf){var e=ta.indexOf(tf);e>=0&&eQ.current.focus(e)}ts(null)},[tf]);var td=s.useMemo(function(){return(!eL||null!==e6)&&eL},[eL,e6]),tv=(Y=function(){null==eN||eN(to(tu.current))},V=(G=c(s.useState(null),2))[0],U=G[1],z=(W=c(s.useState(-1),2))[0],K=W[1],q=($=c(s.useState(ta),2))[0],J=$[1],ee=(Q=c(s.useState(ta),2))[0],et=Q[1],en=s.useRef(null),er=s.useRef(null),s.useEffect(function(){-1===z&&J(ta)},[ta,z]),s.useEffect(function(){return function(){document.removeEventListener("mousemove",en.current),document.removeEventListener("mouseup",er.current),document.removeEventListener("touchmove",en.current),document.removeEventListener("touchend",er.current)}},[]),ea=function(e,t){q.some(function(t,n){return t!==e[n]})&&(void 0!==t&&U(t),J(e),tl(e))},eu=function(e,t){if(-1===e){var n=ee[0],r=ee[ee.length-1],a=e3-n,u=t*(e2-e3);u=e9(n+(u=Math.min(u=Math.max(u,a),e2-r)))-n,ea(ee.map(function(e){return e+u}))}else{var o=i(q);o[e]=ee[e];var l=e8(o,(e2-e3)*t,e,"dist");ea(l.values,l.value)}},(eo=s.useRef(eu)).current=eu,[z,V,s.useMemo(function(){var e=i(ta).sort(function(e,t){return e-t}),t=i(q).sort(function(e,t){return e-t});return e.every(function(e,n){return e===t[n]})?q:ta},[ta,q]),function(e,t){e.stopPropagation();var n=ta[t];K(t),U(n),et(ta);var r=Z(e),a=r.pageX,u=r.pageY,o=function(e){e.preventDefault();var n,r=Z(e),o=r.pageX,l=r.pageY,i=o-a,c=l-u,f=e0.current.getBoundingClientRect(),s=f.width,d=f.height;switch(e1){case"btt":n=-c/d;break;case"ttb":n=c/d;break;case"rtl":n=-i/s;break;default:n=i/s}eo.current(t,n)},l=function e(t){t.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",o),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",o),en.current=null,er.current=null,K(-1),Y()};document.addEventListener("mouseup",l),document.addEventListener("mousemove",o),document.addEventListener("touchend",l),document.addEventListener("touchmove",o),en.current=o,er.current=l}]),tm=c(tv,4),th=tm[0],tb=tm[1],tp=tm[2],ty=tm[3],tg=function(e,t){ty(e,t),null==eO||eO(to(tu.current))},tE=-1!==th;s.useEffect(function(){if(!tE){var e=ta.lastIndexOf(tb);eQ.current.focus(e)}},[tE]);var tx=s.useMemo(function(){return i(tp).sort(function(e,t){return e-t})},[tp]),tC=c(s.useMemo(function(){return eS?[tx[0],tx[tx.length-1]]:[e3,tx[0]]},[tx,eS,e3]),2),tk=tC[0],tM=tC[1];s.useImperativeHandle(t,function(){return{focus:function(){eQ.current.focus(0)},blur:function(){var e=document.activeElement;e0.current.contains(e)&&(null==e||e.blur())}}}),s.useEffect(function(){em&&eQ.current.focus(0)},[]);var tS=s.useMemo(function(){return{min:e3,max:e2,direction:e1,disabled:ev,step:e6,included:eT,includedStart:tk,includedEnd:tM,range:eS,tabIndex:eK,ariaLabelForHandle:e$,ariaLabelledByForHandle:eq,ariaValueTextFormatterForHandle:eJ}},[e3,e2,e1,ev,e6,eT,tk,tM,eS,eK,e$,eq,eJ]);return s.createElement(S.Provider,{value:tS},s.createElement("div",{ref:e0,className:v()(ec,ef,(el={},(0,u.Z)(el,"".concat(ec,"-disabled"),ev),(0,u.Z)(el,"".concat(ec,"-vertical"),eD),(0,u.Z)(el,"".concat(ec,"-horizontal"),!eD),(0,u.Z)(el,"".concat(ec,"-with-marks"),e4.length),el)),style:es,onMouseDown:function(e){e.preventDefault();var t,n=e0.current.getBoundingClientRect(),r=n.width,a=n.height,u=n.left,o=n.top,l=n.bottom,i=n.right,c=e.clientX,f=e.clientY;switch(e1){case"btt":t=(l-f)/a;break;case"ttb":t=(f-o)/a;break;case"rtl":t=(i-c)/r;break;default:t=(c-u)/r}ti(e9(e3+t*(e2-e3)))}},s.createElement("div",{className:"".concat(ec,"-rail"),style:eX}),s.createElement(L,{prefixCls:ec,style:eB,values:tx,startPoint:ej,onStartMove:td?tg:null}),s.createElement(T,{prefixCls:ec,marks:e4,dots:eU,style:eY,activeStyle:eG}),s.createElement(P,{ref:eQ,prefixCls:ec,style:e_,values:tp,draggingIndex:th,onStartMove:tg,onOffsetChange:function(e,t){if(!ev){var n=e8(ta,e,t);null==eO||eO(to(ta)),tl(n.values),null==eN||eN(to(n.values)),ts(n.value)}},onFocus:eh,onBlur:eb,handleRender:eW}),s.createElement(D,{prefixCls:ec,marks:e4,onClick:ti})))})}}]);
//# sourceMappingURL=7145.7399ded1.chunk.js.map