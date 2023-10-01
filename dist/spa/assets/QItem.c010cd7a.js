import{c as C,a as p,h as y,b as L,g as I,T as F,U as Y,j as b,V as $,W as j,X as q,Y as k,Z as A,$ as E,a0 as B,a1 as _,s as P,a2 as K,a3 as N,r as D,a4 as U,d as W}from"./index.1fb68903.js";var ee=C({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(t,{slots:n}){const i=p(()=>parseInt(t.lines,10)),o=p(()=>"q-item__label"+(t.overline===!0?" q-item__label--overline text-overline":"")+(t.caption===!0?" q-item__label--caption text-caption":"")+(t.header===!0?" q-item__label--header":"")+(i.value===1?" ellipsis":"")),e=p(()=>t.lines!==void 0&&i.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":i.value}:null);return()=>y("div",{style:e.value,class:o.value},L(n.default))}});const R={dark:{type:Boolean,default:null}};function z(t,n){return p(()=>t.dark===null?n.dark.isActive:t.dark)}var te=C({name:"QList",props:{...R,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:n}){const i=I(),o=z(t,i.proxy.$q),e=p(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>y(t.tag,{class:e.value},L(n.default))}});const S={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},H=Object.keys(S);S.all=!0;function M(t){const n={};for(const i of H)t[i]===!0&&(n[i]=!0);return Object.keys(n).length===0?S:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const V=["INPUT","TEXTAREA"];function T(t,n){return n.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof n.handler=="function"&&V.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(n.uid)===-1)}function Z(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),F.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function w(t,n,i){const o=B(t);let e,a=o.left-n.event.x,r=o.top-n.event.y,s=Math.abs(a),l=Math.abs(r);const u=n.direction;u.horizontal===!0&&u.vertical!==!0?e=a<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?e=r<0?"up":"down":u.up===!0&&r<0?(e="up",s>l&&(u.left===!0&&a<0?e="left":u.right===!0&&a>0&&(e="right"))):u.down===!0&&r>0?(e="down",s>l&&(u.left===!0&&a<0?e="left":u.right===!0&&a>0&&(e="right"))):u.left===!0&&a<0?(e="left",s<l&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down"))):u.right===!0&&a>0&&(e="right",s<l&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down")));let f=!1;if(e===void 0&&i===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,f=!0,e==="left"||e==="right"?(o.left-=a,s=0,a=0):(o.top-=r,l=0,r=0)}return{synthetic:f,payload:{evt:t,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:o,direction:e,isFirst:n.event.isFirst,isFinal:i===!0,duration:Date.now()-n.event.time,distance:{x:s,y:l},offset:{x:a,y:r},delta:{x:o.left-n.event.lastX,y:o.top-n.event.lastY}}}}let G=0;var ne=Y({name:"touch-pan",beforeMount(t,{value:n,modifiers:i}){if(i.mouse!==!0&&b.has.touch!==!0)return;function o(a,r){i.mouse===!0&&r===!0?P(a):(i.stop===!0&&E(a),i.prevent===!0&&A(a))}const e={uid:"qvtp_"+G++,handler:n,modifiers:i,direction:M(i),noop:$,mouseStart(a){T(a,e)&&j(a)&&(q(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(T(a,e)){const r=a.target;q(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,r){if(b.is.firefox===!0&&k(t,!0),e.lastEvt=a,r===!0||i.stop===!0){if(e.direction.all!==!0&&(r!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const u=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&A(u),a.cancelBubble===!0&&E(u),Object.assign(u,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:u}}E(a)}const{left:s,top:l}=B(a);e.event={x:s,y:l,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:l}},move(a){if(e.event===void 0)return;const r=B(a),s=r.left-e.event.x,l=r.top-e.event.y;if(s===0&&l===0)return;e.lastEvt=a;const u=e.event.mouse===!0,f=()=>{o(a,u);let c;i.preserveCursor!==!0&&i.preservecursor!==!0&&(c=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Z(),e.styleCleanup=h=>{if(e.styleCleanup=void 0,c!==void 0&&(document.documentElement.style.cursor=c),document.body.classList.remove("non-selectable"),u===!0){const g=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{g(),h()},50):g()}else h!==void 0&&h()}};if(e.event.detected===!0){e.event.isFirst!==!0&&o(a,e.event.mouse);const{payload:c,synthetic:h}=w(a,e,!1);c!==void 0&&(e.handler(c)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&f(),e.event.lastX=c.position.left,e.event.lastY=c.position.top,e.event.lastDir=h===!0?void 0:c.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||u===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){f(),e.event.detected=!0,e.move(a);return}const v=Math.abs(s),m=Math.abs(l);v!==m&&(e.direction.horizontal===!0&&v>m||e.direction.vertical===!0&&v<m||e.direction.up===!0&&v<m&&l<0||e.direction.down===!0&&v<m&&l>0||e.direction.left===!0&&v>m&&s<0||e.direction.right===!0&&v>m&&s>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,r){if(e.event!==void 0){if(_(e,"temp"),b.is.firefox===!0&&k(t,!1),r===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(w(a===void 0?e.lastEvt:a,e).payload);const{payload:s}=w(a===void 0?e.lastEvt:a,e,!0),l=()=>{e.handler(s)};e.styleCleanup!==void 0?e.styleCleanup(l):l()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";q(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}b.has.touch===!0&&q(e,"main",[[t,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const i=t.__qtouchpan;i!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&i.end(),i.handler=n.value),i.direction=M(n.modifiers))},beforeUnmount(t){const n=t.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),_(n,"main"),_(n,"temp"),b.is.firefox===!0&&k(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchpan)}});function ae(t,n,i){return i<=n?n:Math.min(i,Math.max(n,t))}function ie(t,n,i){if(i<=n)return n;const o=i-n+1;let e=n+(t-n)%o;return e<n&&(e=o+e),e===0?0:e}var re=C({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:n}){const i=p(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>y("div",{class:i.value},L(n.default))}}),ue=C({name:"QItem",props:{...R,...K,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:n,emit:i}){const{proxy:{$q:o}}=I(),e=z(t,o),{hasLink:a,linkAttrs:r,linkClass:s,linkTag:l,navigateOnClick:u}=N(),f=D(null),v=D(null),m=p(()=>t.clickable===!0||a.value===!0||t.tag==="label"),c=p(()=>t.disable!==!0&&m.value===!0),h=p(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(e.value===!0?" q-item--dark":"")+(a.value===!0&&t.active===null?s.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(c.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),g=p(()=>{if(t.insetLevel===void 0)return null;const d=o.lang.rtl===!0?"Right":"Left";return{["padding"+d]:16+t.insetLevel*56+"px"}});function O(d){c.value===!0&&(v.value!==null&&(d.qKeyEvent!==!0&&document.activeElement===f.value?v.value.focus():document.activeElement===v.value&&f.value.focus()),u(d))}function Q(d){if(c.value===!0&&U(d,13)===!0){P(d),d.qKeyEvent=!0;const x=new MouseEvent("click",d);x.qKeyEvent=!0,f.value.dispatchEvent(x)}i("keyup",d)}function X(){const d=W(n.default,[]);return c.value===!0&&d.unshift(y("div",{class:"q-focus-helper",tabindex:-1,ref:v})),d}return()=>{const d={ref:f,class:h.value,style:g.value,role:"listitem",onClick:O,onKeyup:Q};return c.value===!0?(d.tabindex=t.tabindex||"0",Object.assign(d,r.value)):m.value===!0&&(d["aria-disabled"]="true"),y(l.value,d,X())}}});export{re as Q,ne as T,z as a,ae as b,ee as c,ue as d,te as e,Z as f,M as g,ie as n,T as s,R as u};
