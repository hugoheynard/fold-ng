const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home.page-BMMOiW1I.js","assets/aside-layout.component-DNryXTAK.js","assets/avatar-detail.component-CKyrgbAs.js","assets/disclosure.component-Dgd5rwzk.js","assets/button.component-C27ambRQ.js","assets/spinner.component-CzShkmgh.js","assets/tokens.catalog-DF_6rd51.js","assets/callout.component-C83gHfis.js","assets/hero-section.component-D5Zy39d4.js","assets/page-section.component-C-pFuP0D.js","assets/element-title.component-BOx-Ocj7.js","assets/hero-card.page-B9wpR5HL.js","assets/kind-badge.component-Cda-anky.js","assets/sticky-column.page-CULtQqtD.js","assets/playground.component-Sh_rFbGJ.js","assets/slider.component-BdYXvBpq.js","assets/input-value-Co_u-z_8.js","assets/aside-layout.page-CdxnKeBT.js","assets/tab-layout.page-BSC_teR_.js","assets/tab-layout.component-BafDlKJJ.js","assets/tab-nav.component-SiTEDO98.js","assets/page-layout.page-CXTKTqaZ.js","assets/tab-nav.page-Cv3mmJ8q.js","assets/tab-panel.component-DDXrZ1tE.js","assets/page-section.page-DaDR0ham.js","assets/hero-section.page-CkM-bycF.js","assets/card.page-DGZk23qV.js","assets/button.page-CiF8FH_a.js","assets/button-icon.page-Co6NJAqF.js","assets/link.page-3OkUjoq2.js","assets/link.component-CoJV1daZ.js","assets/element-title.page-LLNmvFPq.js","assets/context-card.page-PvzeoHBN.js","assets/context-card.component-Cf6FtW_J.js","assets/badges.page-CxfuKF8v.js","assets/status-badge.component-C6B3UEWh.js","assets/field.page-D8eq4AOU.js","assets/timeline.page-C3xK3VGS.js","assets/form-layout.page-BAPsLPcF.js","assets/input.component-C8qSBkbw.js","assets/choice-row.component-ZJCkgRwe.js","assets/dropzone.page-aFOxfeVm.js","assets/toast.page-CH1Bugee.js","assets/callout.page-BOgiAIhm.js","assets/disclosure.page-BJS3WHZq.js","assets/state.page-BffvPLQ2.js","assets/icons.page-CTKvQNLw.js","assets/spinner.page-D6ILiSXm.js","assets/repeat-press.page-Bq_uuaZV.js","assets/repeat-press.directive-DGCMxB7t.js","assets/themes.page-CztaUBnT.js","assets/form.page-DIZhJxTM.js","assets/avatar.page-ZT7wPZnd.js","assets/app-shell.page-Cv9AnKJq.js","assets/menu.page-DzBh46QU.js","assets/nav-launcher.page-D_x4Osq3.js"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();let we=null,vr=!1,Gn=1;const he=Symbol("SIGNAL");function S(e){const n=we;return we=e,n}function Q0(){return we}const Wt={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Qt(e){if(vr)throw new Error("");if(we===null)return;we.consumerOnSignalRead(e);const n=we.producersTail;if(n!==void 0&&n.producer===e)return;let t;const o=we.recomputing;if(o&&(t=n!==void 0?n.nextProducer:we.producers,t!==void 0&&t.producer===e)){we.producersTail=t,t.lastReadVersion=e.version,t.knownValidAtEpoch=Gn;return}const r=e.consumersTail;if(r!==void 0&&r.consumer===we&&(!o||r.knownValidAtEpoch===Gn))return;const i=Yt(we),s={producer:e,consumer:we,nextProducer:t,prevConsumer:void 0,knownValidAtEpoch:Gn,lastReadVersion:e.version,nextConsumer:void 0};we.producersTail=s,n!==void 0?n.nextProducer=s:we.producers=s,i&&Wd(e,s)}function Y0(){Gn++}function Uo(e){if(!(Yt(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===Gn)){if(!e.producerMustRecompute(e)&&!Ei(e)){Rr(e);return}e.producerRecomputeValue(e),Rr(e)}}function Gd(e){if(e.consumers===void 0)return;const n=vr;vr=!0;try{for(let t=e.consumers;t!==void 0;t=t.nextConsumer){const o=t.consumer;o.dirty||X0(o)}}finally{vr=n}}function Zd(){return we?.consumerAllowSignalWrites!==!1}function X0(e){e.dirty=!0,Gd(e),e.consumerMarkedDirty?.(e)}function Rr(e){e.dirty=!1,e.lastCleanEpoch=Gn}function Lt(e){return e&&K0(e),S(e)}function K0(e){if(e.producersTail?.knownValidAtEpoch===Gn){let n=e.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}e.producersTail=void 0,e.recomputing=!0}function Vo(e,n){S(n),e&&J0(e)}function J0(e){e.recomputing=!1;const n=e.producersTail;let t=n!==void 0?n.nextProducer:e.producers;if(t!==void 0){if(Yt(e))do t=La(t);while(t!==void 0);n!==void 0?n.nextProducer=void 0:e.producers=void 0}}function Ei(e){for(let n=e.producers;n!==void 0;n=n.nextProducer){const t=n.producer,o=n.lastReadVersion;if(o!==t.version||(Uo(t),o!==t.version))return!0}return!1}function qo(e){if(Yt(e)){let n=e.producers;for(;n!==void 0;)n=La(n)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function Wd(e,n){const t=e.consumersTail,o=Yt(e);if(t!==void 0?(n.nextConsumer=t.nextConsumer,t.nextConsumer=n):(n.nextConsumer=void 0,e.consumers=n),n.prevConsumer=t,e.consumersTail=n,!o)for(let r=e.producers;r!==void 0;r=r.nextProducer)Wd(r.producer,r)}function La(e){const n=e.producer,t=e.nextProducer,o=e.nextConsumer,r=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,o!==void 0?o.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=o;else if(n.consumers=o,!Yt(n)){let i=n.producers;for(;i!==void 0;)i=La(i)}return t}function Yt(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function Da(e,n){return Object.is(e,n)}function Qd(e,n){const t=Object.create(eg);t.computation=e,n!==void 0&&(t.equal=n);const o=()=>{if(Uo(t),Qt(t),t.value===kn)throw t.error;return t.value};return o[he]=t,o}const Ot=Symbol("UNSET"),It=Symbol("COMPUTING"),kn=Symbol("ERRORED"),eg={...Wt,value:Ot,dirty:!0,error:null,equal:Da,kind:"computed",producerMustRecompute(e){return e.value===Ot||e.value===It},producerRecomputeValue(e){if(e.value===It)throw new Error("");const n=e.value;e.value=It;const t=Lt(e);let o,r=!1;try{o=e.computation(),S(null),r=n!==Ot&&n!==kn&&o!==kn&&e.equal(n,o)}catch(i){o=kn,e.error=i}finally{Vo(e,t)}if(r){e.value=n;return}e.value=o,e.version++}};function ng(){throw new Error}let Yd=ng;function Xd(e){Yd(e)}function tg(e){Yd=e}function og(e,n){const t=Object.create(Fa);t.value=e,n!==void 0&&(t.equal=n);const o=()=>rg(t);return o[he]=t,[o,s=>$o(t,s),s=>Kd(t,s)]}function rg(e){return Qt(e),e.value}function $o(e,n){Zd()||Xd(e),e.equal(e.value,n)||(e.value=n,ig(e))}function Kd(e,n){Zd()||Xd(e),$o(e,n(e.value))}const Fa={...Wt,equal:Da,value:void 0,kind:"signal"};function ig(e){e.version++,Y0(),Gd(e)}const sg={...Wt,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"};function ag(e){if(e.dirty=!1,e.version>0&&!Ei(e))return;e.version++;const n=Lt(e);try{e.cleanup(),e.fn()}finally{Vo(e,n)}}let Ps;function Jd(){return Ps}function Rn(e){const n=Ps;return Ps=e,n}const lg=Symbol("NotFound");function za(e){return e===lg||e?.name==="ɵNotFound"}function _c(e,n,t){const o=Object.create(ug);o.source=e,o.computation=n,t!=null&&(o.equal=t);const i=()=>{if(Uo(o),Qt(o),o.value===kn)throw o.error;return o.value};return i[he]=o,i}function cg(e,n){Uo(e),$o(e,n),Rr(e)}function dg(e,n){if(Uo(e),e.value===kn)throw e.error;Kd(e,n),Rr(e)}const ug={...Wt,value:Ot,dirty:!0,error:null,equal:Da,kind:"linkedSignal",producerMustRecompute(e){return e.value===Ot||e.value===It},producerRecomputeValue(e){if(e.value===It)throw new Error("");const n=e.value;e.value=It;const t=Lt(e);let o,r=!1;try{const i=e.source(),s=n!==Ot&&n!==kn,a=s?{source:e.sourceValue,value:n}:void 0;o=e.computation(i,a),e.sourceValue=i,S(null),r=s&&o!==kn&&e.equal(n,o)}catch(i){o=kn,e.error=i}finally{Vo(e,t)}if(r){e.value=n;return}e.value=o,e.version++}};function fg(e){const n=S(null);try{return e()}finally{S(n)}}var Rs=function(e,n){return Rs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])},Rs(e,n)};function Xt(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Rs(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}function hg(e,n,t,o){function r(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function a(d){try{c(o.next(d))}catch(u){s(u)}}function l(d){try{c(o.throw(d))}catch(u){s(u)}}function c(d){d.done?i(d.value):r(d.value).then(a,l)}c((o=o.apply(e,n||[])).next())})}function eu(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(d){return l([c,d])}}function l(c){if(o)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(t=0)),t;)try{if(o=1,r&&(i=c[0]&2?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,r=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){t.label=c[1];break}if(c[0]===6&&t.label<i[1]){t.label=i[1],i=c;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(c);break}i[2]&&t.ops.pop(),t.trys.pop();continue}c=n.call(e,t)}catch(d){c=[6,d],r=0}finally{o=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Kn(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Lr(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var o=t.call(e),r,i=[],s;try{for(;(n===void 0||n-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){s={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(s)throw s.error}}return i}function Dr(e,n,t){if(t||arguments.length===2)for(var o=0,r=n.length,i;o<r;o++)(i||!(o in n))&&(i||(i=Array.prototype.slice.call(n,0,o)),i[o]=n[o]);return e.concat(i||Array.prototype.slice.call(n))}function Tt(e){return this instanceof Tt?(this.v=e,this):new Tt(e)}function pg(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(e,n||[]),r,i=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(g){return Promise.resolve(g).then(h,u)}}function a(h,g){o[h]&&(r[h]=function(y){return new Promise(function(R,G){i.push([h,y,R,G])>1||l(h,y)})},g&&(r[h]=g(r[h])))}function l(h,g){try{c(o[h](g))}catch(y){f(i[0][3],y)}}function c(h){h.value instanceof Tt?Promise.resolve(h.value.v).then(d,u):f(i[0][2],h)}function d(h){l("next",h)}function u(h){l("throw",h)}function f(h,g){h(g),i.shift(),i.length&&l(i[0][0],i[0][1])}}function gg(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof Kn=="function"?Kn(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=e[i]&&function(s){return new Promise(function(a,l){s=e[i](s),r(a,l,s.done,s.value)})}}function r(i,s,a,l){Promise.resolve(l).then(function(c){i({value:c,done:a})},s)}}function X(e){return typeof e=="function"}function Na(e){var n=function(o){Error.call(o),o.stack=new Error().stack},t=e(n);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var is=Na(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(o,r){return r+1+") "+o.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Ls(e,n){if(e){var t=e.indexOf(n);0<=t&&e.splice(t,1)}}var ht=(function(){function e(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var n,t,o,r,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=Kn(s),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(y){n={error:y}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(n)throw n.error}}else s.remove(this);var d=this.initialTeardown;if(X(d))try{d()}catch(y){i=y instanceof is?y.errors:[y]}var u=this._finalizers;if(u){this._finalizers=null;try{for(var f=Kn(u),h=f.next();!h.done;h=f.next()){var g=h.value;try{Cc(g)}catch(y){i=i??[],y instanceof is?i=Dr(Dr([],Lr(i)),Lr(y.errors)):i.push(y)}}}catch(y){o={error:y}}finally{try{h&&!h.done&&(r=f.return)&&r.call(f)}finally{if(o)throw o.error}}}if(i)throw new is(i)}},e.prototype.add=function(n){var t;if(n&&n!==this)if(this.closed)Cc(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}},e.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},e.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},e.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&Ls(t,n)},e.prototype.remove=function(n){var t=this._finalizers;t&&Ls(t,n),n instanceof e&&n._removeParent(this)},e.EMPTY=(function(){var n=new e;return n.closed=!0,n})(),e})(),nu=ht.EMPTY;function tu(e){return e instanceof ht||e&&"closed"in e&&X(e.remove)&&X(e.add)&&X(e.unsubscribe)}function Cc(e){X(e)?e():e.unsubscribe()}var mg={Promise:void 0},vg={setTimeout:function(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return setTimeout.apply(void 0,Dr([e,n],Lr(t)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function ou(e){vg.setTimeout(function(){throw e})}function Ds(){}function br(e){e()}var ja=(function(e){Xt(n,e);function n(t){var o=e.call(this)||this;return o.isStopped=!1,t?(o.destination=t,tu(t)&&t.add(o)):o.destination=wg,o}return n.create=function(t,o,r){return new Fs(t,o,r)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n})(ht),bg=(function(){function e(n){this.partialObserver=n}return e.prototype.next=function(n){var t=this.partialObserver;if(t.next)try{t.next(n)}catch(o){ir(o)}},e.prototype.error=function(n){var t=this.partialObserver;if(t.error)try{t.error(n)}catch(o){ir(o)}else ir(n)},e.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(t){ir(t)}},e})(),Fs=(function(e){Xt(n,e);function n(t,o,r){var i=e.call(this)||this,s;return X(t)||!t?s={next:t??void 0,error:o??void 0,complete:r??void 0}:s=t,i.destination=new bg(s),i}return n})(ja);function ir(e){ou(e)}function yg(e){throw e}var wg={closed:!0,next:Ds,error:yg,complete:Ds},Ha=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Kt(e){return e}function xg(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return ru(e)}function ru(e){return e.length===0?Kt:e.length===1?e[0]:function(t){return e.reduce(function(o,r){return r(o)},t)}}var ue=(function(){function e(n){n&&(this._subscribe=n)}return e.prototype.lift=function(n){var t=new e;return t.source=this,t.operator=n,t},e.prototype.subscribe=function(n,t,o){var r=this,i=Cg(n)?n:new Fs(n,t,o);return br(function(){var s=r,a=s.operator,l=s.source;i.add(a?a.call(i,l):l?r._subscribe(i):r._trySubscribe(i))}),i},e.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},e.prototype.forEach=function(n,t){var o=this;return t=kc(t),new t(function(r,i){var s=new Fs({next:function(a){try{n(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:r});o.subscribe(s)})},e.prototype._subscribe=function(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)},e.prototype[Ha]=function(){return this},e.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return ru(n)(this)},e.prototype.toPromise=function(n){var t=this;return n=kc(n),new n(function(o,r){var i;t.subscribe(function(s){return i=s},function(s){return r(s)},function(){return o(i)})})},e.create=function(n){return new e(n)},e})();function kc(e){var n;return(n=e??mg.Promise)!==null&&n!==void 0?n:Promise}function _g(e){return e&&X(e.next)&&X(e.error)&&X(e.complete)}function Cg(e){return e&&e instanceof ja||_g(e)&&tu(e)}function kg(e){return X(e?.lift)}function ke(e){return function(n){if(kg(n))return n.lift(function(t){try{return e(t,this)}catch(o){this.error(o)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ce(e,n,t,o,r){return new Sg(e,n,t,o,r)}var Sg=(function(e){Xt(n,e);function n(t,o,r,i,s,a){var l=e.call(this,t)||this;return l.onFinalize=s,l.shouldUnsubscribe=a,l._next=o?function(c){try{o(c)}catch(d){t.error(d)}}:e.prototype._next,l._error=i?function(c){try{i(c)}catch(d){t.error(d)}finally{this.unsubscribe()}}:e.prototype._error,l._complete=r?function(){try{r()}catch(c){t.error(c)}finally{this.unsubscribe()}}:e.prototype._complete,l}return n.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var o=this.closed;e.prototype.unsubscribe.call(this),!o&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},n})(ja),Og=Na(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),nn=(function(e){Xt(n,e);function n(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return n.prototype.lift=function(t){var o=new Sc(this,this);return o.operator=t,o},n.prototype._throwIfClosed=function(){if(this.closed)throw new Og},n.prototype.next=function(t){var o=this;br(function(){var r,i;if(o._throwIfClosed(),!o.isStopped){o.currentObservers||(o.currentObservers=Array.from(o.observers));try{for(var s=Kn(o.currentObservers),a=s.next();!a.done;a=s.next()){var l=a.value;l.next(t)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}}})},n.prototype.error=function(t){var o=this;br(function(){if(o._throwIfClosed(),!o.isStopped){o.hasError=o.isStopped=!0,o.thrownError=t;for(var r=o.observers;r.length;)r.shift().error(t)}})},n.prototype.complete=function(){var t=this;br(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var o=t.observers;o.length;)o.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var o=this,r=this,i=r.hasError,s=r.isStopped,a=r.observers;return i||s?nu:(this.currentObservers=null,a.push(t),new ht(function(){o.currentObservers=null,Ls(a,t)}))},n.prototype._checkFinalizedStatuses=function(t){var o=this,r=o.hasError,i=o.thrownError,s=o.isStopped;r?t.error(i):s&&t.complete()},n.prototype.asObservable=function(){var t=new ue;return t.source=this,t},n.create=function(t,o){return new Sc(t,o)},n})(ue),Sc=(function(e){Xt(n,e);function n(t,o){var r=e.call(this)||this;return r.destination=t,r.source=o,r}return n.prototype.next=function(t){var o,r;(r=(o=this.destination)===null||o===void 0?void 0:o.next)===null||r===void 0||r.call(o,t)},n.prototype.error=function(t){var o,r;(r=(o=this.destination)===null||o===void 0?void 0:o.error)===null||r===void 0||r.call(o,t)},n.prototype.complete=function(){var t,o;(o=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||o===void 0||o.call(t)},n.prototype._subscribe=function(t){var o,r;return(r=(o=this.source)===null||o===void 0?void 0:o.subscribe(t))!==null&&r!==void 0?r:nu},n})(nn),ze=(function(e){Xt(n,e);function n(t){var o=e.call(this)||this;return o._value=t,o}return Object.defineProperty(n.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),n.prototype._subscribe=function(t){var o=e.prototype._subscribe.call(this,t);return!o.closed&&t.next(this._value),o},n.prototype.getValue=function(){var t=this,o=t.hasError,r=t.thrownError,i=t._value;if(o)throw r;return this._throwIfClosed(),i},n.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},n})(nn),Re=new ue(function(e){return e.complete()});function Ig(e){return e&&X(e.schedule)}function iu(e){return e[e.length-1]}function Tg(e){return X(iu(e))?e.pop():void 0}function Mi(e){return Ig(iu(e))?e.pop():void 0}var su=(function(e){return e&&typeof e.length=="number"&&typeof e!="function"});function au(e){return X(e?.then)}function lu(e){return X(e[Ha])}function cu(e){return Symbol.asyncIterator&&X(e?.[Symbol.asyncIterator])}function du(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Eg(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var uu=Eg();function fu(e){return X(e?.[uu])}function hu(e){return pg(this,arguments,function(){var t,o,r,i;return eu(this,function(s){switch(s.label){case 0:t=e.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,Tt(t.read())];case 3:return o=s.sent(),r=o.value,i=o.done,i?[4,Tt(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,Tt(r)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function pu(e){return X(e?.getReader)}function Tn(e){if(e instanceof ue)return e;if(e!=null){if(lu(e))return Mg(e);if(su(e))return Ag(e);if(au(e))return Pg(e);if(cu(e))return gu(e);if(fu(e))return Rg(e);if(pu(e))return Lg(e)}throw du(e)}function Mg(e){return new ue(function(n){var t=e[Ha]();if(X(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Ag(e){return new ue(function(n){for(var t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function Pg(e){return new ue(function(n){e.then(function(t){n.closed||(n.next(t),n.complete())},function(t){return n.error(t)}).then(null,ou)})}function Rg(e){return new ue(function(n){var t,o;try{for(var r=Kn(e),i=r.next();!i.done;i=r.next()){var s=i.value;if(n.next(s),n.closed)return}}catch(a){t={error:a}}finally{try{i&&!i.done&&(o=r.return)&&o.call(r)}finally{if(t)throw t.error}}n.complete()})}function gu(e){return new ue(function(n){Dg(e,n).catch(function(t){return n.error(t)})})}function Lg(e){return gu(hu(e))}function Dg(e,n){var t,o,r,i;return hg(this,void 0,void 0,function(){var s,a;return eu(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),t=gg(e),l.label=1;case 1:return[4,t.next()];case 2:if(o=l.sent(),!!o.done)return[3,4];if(s=o.value,n.next(s),n.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),r={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),o&&!o.done&&(i=t.return)?[4,i.call(t)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(r)throw r.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function Ln(e,n,t,o,r){o===void 0&&(o=0),r===void 0&&(r=!1);var i=n.schedule(function(){t(),r?e.add(this.schedule(null,o)):this.unsubscribe()},o);if(e.add(i),!r)return i}function mu(e,n){return n===void 0&&(n=0),ke(function(t,o){t.subscribe(Ce(o,function(r){return Ln(o,e,function(){return o.next(r)},n)},function(){return Ln(o,e,function(){return o.complete()},n)},function(r){return Ln(o,e,function(){return o.error(r)},n)}))})}function vu(e,n){return n===void 0&&(n=0),ke(function(t,o){o.add(e.schedule(function(){return t.subscribe(o)},n))})}function Fg(e,n){return Tn(e).pipe(vu(n),mu(n))}function zg(e,n){return Tn(e).pipe(vu(n),mu(n))}function Ng(e,n){return new ue(function(t){var o=0;return n.schedule(function(){o===e.length?t.complete():(t.next(e[o++]),t.closed||this.schedule())})})}function jg(e,n){return new ue(function(t){var o;return Ln(t,n,function(){o=e[uu](),Ln(t,n,function(){var r,i,s;try{r=o.next(),i=r.value,s=r.done}catch(a){t.error(a);return}s?t.complete():t.next(i)},0,!0)}),function(){return X(o?.return)&&o.return()}})}function bu(e,n){if(!e)throw new Error("Iterable cannot be null");return new ue(function(t){Ln(t,n,function(){var o=e[Symbol.asyncIterator]();Ln(t,n,function(){o.next().then(function(r){r.done?t.complete():t.next(r.value)})},0,!0)})})}function Hg(e,n){return bu(hu(e),n)}function Bg(e,n){if(e!=null){if(lu(e))return Fg(e,n);if(su(e))return Ng(e,n);if(au(e))return zg(e,n);if(cu(e))return bu(e,n);if(fu(e))return jg(e,n);if(pu(e))return Hg(e,n)}throw du(e)}function xe(e,n){return n?Bg(e,n):Tn(e)}function P(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=Mi(e);return xe(e,t)}function Ug(e,n){var t=X(e)?e:function(){return e},o=function(r){return r.error(t())};return new ue(o)}function yu(e){return!!e&&(e instanceof ue||X(e.lift)&&X(e.subscribe))}var Ba=Na(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function pe(e,n){return ke(function(t,o){var r=0;t.subscribe(Ce(o,function(i){o.next(e.call(n,i,r++))}))})}var Vg=Array.isArray;function qg(e,n){return Vg(n)?e.apply(void 0,Dr([],Lr(n))):e(n)}function $g(e){return pe(function(n){return qg(e,n)})}var Gg=Array.isArray,Zg=Object.getPrototypeOf,Wg=Object.prototype,Qg=Object.keys;function Yg(e){if(e.length===1){var n=e[0];if(Gg(n))return{args:n,keys:null};if(Xg(n)){var t=Qg(n);return{args:t.map(function(o){return n[o]}),keys:t}}}return{args:e,keys:null}}function Xg(e){return e&&typeof e=="object"&&Zg(e)===Wg}function Kg(e,n){return e.reduce(function(t,o,r){return t[o]=n[r],t},{})}function wu(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=Mi(e),o=Tg(e),r=Yg(e),i=r.args,s=r.keys;if(i.length===0)return xe([],t);var a=new ue(Jg(i,t,s?function(l){return Kg(s,l)}:Kt));return o?a.pipe($g(o)):a}function Jg(e,n,t){return t===void 0&&(t=Kt),function(o){Oc(n,function(){for(var r=e.length,i=new Array(r),s=r,a=r,l=function(d){Oc(n,function(){var u=xe(e[d],n),f=!1;u.subscribe(Ce(o,function(h){i[d]=h,f||(f=!0,a--),a||o.next(t(i.slice()))},function(){--s||o.complete()}))},o)},c=0;c<r;c++)l(c)},o)}}function Oc(e,n,t){e?Ln(t,e,n):n()}function em(e,n,t,o,r,i,s,a){var l=[],c=0,d=0,u=!1,f=function(){u&&!l.length&&!c&&n.complete()},h=function(y){return c<o?g(y):l.push(y)},g=function(y){c++;var R=!1;Tn(t(y,d++)).subscribe(Ce(n,function(G){n.next(G)},function(){R=!0},void 0,function(){if(R)try{c--;for(var G=function(){var Oe=l.shift();s||g(Oe)};l.length&&c<o;)G();f()}catch(Oe){n.error(Oe)}}))};return e.subscribe(Ce(n,h,function(){u=!0,f()})),function(){}}function tn(e,n,t){return t===void 0&&(t=1/0),X(n)?tn(function(o,r){return pe(function(i,s){return n(o,i,r,s)})(Tn(e(o,r)))},t):(typeof n=="number"&&(t=n),ke(function(o,r){return em(o,r,e,t)}))}function zs(e){return e===void 0&&(e=1/0),tn(Kt,e)}function nm(){return zs(1)}function Ns(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return nm()(xe(e,Mi(e)))}function Ua(e){return new ue(function(n){Tn(e()).subscribe(n)})}function Dt(e,n){return ke(function(t,o){var r=0;t.subscribe(Ce(o,function(i){return e.call(n,i,r++)&&o.next(i)}))})}function Va(e){return ke(function(n,t){var o=null,r=!1,i;o=n.subscribe(Ce(t,void 0,void 0,function(s){i=Tn(e(s,Va(e)(n))),o?(o.unsubscribe(),o=null,i.subscribe(t)):r=!0})),r&&(o.unsubscribe(),o=null,i.subscribe(t))})}function xu(e,n){return X(n)?tn(e,n,1):tn(e,1)}function tm(e){return ke(function(n,t){var o=!1;n.subscribe(Ce(t,function(r){o=!0,t.next(r)},function(){o||t.next(e),t.complete()}))})}function Ft(e){return e<=0?function(){return Re}:ke(function(n,t){var o=0;n.subscribe(Ce(t,function(r){++o<=e&&(t.next(r),e<=o&&t.complete())}))})}function om(e){return e===void 0&&(e=rm),ke(function(n,t){var o=!1;n.subscribe(Ce(t,function(r){o=!0,t.next(r)},function(){return o?t.complete():t.error(e())}))})}function rm(){return new Ba}function im(e){return ke(function(n,t){try{n.subscribe(t)}finally{t.add(e)}})}function pt(e,n){var t=arguments.length>=2;return function(o){return o.pipe(e?Dt(function(r,i){return e(r,i,o)}):Kt,Ft(1),t?tm(n):om(function(){return new Ba}))}}function _u(e){return e<=0?function(){return Re}:ke(function(n,t){var o=[];n.subscribe(Ce(t,function(r){o.push(r),e<o.length&&o.shift()},function(){var r,i;try{for(var s=Kn(o),a=s.next();!a.done;a=s.next()){var l=a.value;t.next(l)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}t.complete()},void 0,function(){o=null}))})}function sm(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=Mi(e);return ke(function(o,r){(t?Ns(e,o,t):Ns(e,o)).subscribe(r)})}function Ze(e,n){return ke(function(t,o){var r=null,i=0,s=!1,a=function(){return s&&!r&&o.complete()};t.subscribe(Ce(o,function(l){r?.unsubscribe();var c=0,d=i++;Tn(e(l,d)).subscribe(r=Ce(o,function(u){return o.next(n?n(l,u,d,c++):u)},function(){r=null,a()}))},function(){s=!0,a()}))})}function js(e){return ke(function(n,t){Tn(e).subscribe(Ce(t,function(){return t.complete()},Ds)),!t.closed&&n.subscribe(t)})}function cn(e,n,t){var o=X(e)||n||t?{next:e,error:n,complete:t}:e;return o?ke(function(r,i){var s;(s=o.subscribe)===null||s===void 0||s.call(o);var a=!0;r.subscribe(Ce(i,function(l){var c;(c=o.next)===null||c===void 0||c.call(o,l),i.next(l)},function(){var l;a=!1,(l=o.complete)===null||l===void 0||l.call(o),i.complete()},function(l){var c;a=!1,(c=o.error)===null||c===void 0||c.call(o,l),i.error(l)},function(){var l,c;a&&((l=o.unsubscribe)===null||l===void 0||l.call(o)),(c=o.finalize)===null||c===void 0||c.call(o)}))}):Kt}const Cu="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss";class x extends Error{code;constructor(n,t){super(qa(n,t)),this.code=n}}function am(e){return`NG0${Math.abs(e)}`}function qa(e,n){return`${am(e)}${n?": "+n:""}`}function $(e){for(let n in e)if(e[n]===$)return n;throw Error("")}function lm(e,n){for(const t in n)n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function $a(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map($a).join(", ")}]`;if(e==null)return""+e;const n=e.overriddenName||e.name;if(n)return`${n}`;const t=e.toString();if(t==null)return""+t;const o=t.indexOf(`
`);return o>=0?t.slice(0,o):t}function Hs(e,n){return e?n?`${e} ${n}`:e:n||""}const cm=$({__forward_ref__:$});function ku(e){return e.__forward_ref__=ku,e}function _e(e){return Su(e)?e():e}function Su(e){return typeof e=="function"&&e.hasOwnProperty(cm)&&e.__forward_ref__===ku}function K(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function Ai(e){return um(e,Ou)}function dm(e){return Ai(e)!==null}function um(e,n){return e.hasOwnProperty(n)&&e[n]||null}function fm(e){const n=e?.[Ou]??null;return n||null}function Ic(e){return e&&e.hasOwnProperty(Tc)?e[Tc]:null}const Ou=$({ɵprov:$}),Tc=$({ɵinj:$});class T{_desc;ngMetadataName="InjectionToken";ɵprov;constructor(n,t){this._desc=n,this.ɵprov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.ɵprov=K({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}function Iu(e){return e&&!!e.ɵproviders}const hm=$({ɵcmp:$}),pm=$({ɵdir:$}),gm=$({ɵpipe:$}),mm=$({ɵmod:$}),Fr=$({ɵfac:$}),vo=$({__NG_ELEMENT_ID__:$}),Ec=$({__NG_ENV_ID__:$});function vm(e){return Pi(e),e[mm]||null}function zt(e){return Pi(e),e[hm]||null}function Tu(e){return Pi(e),e[pm]||null}function bm(e){return Pi(e),e[gm]||null}function Pi(e,n){if(e==null)throw new x(-919,!1)}function Io(e){return typeof e=="string"?e:e==null?"":String(e)}const Eu=$({ngErrorCode:$}),ym=$({ngErrorMessage:$});function Mu(e,n){return Au("",-200)}function Ga(e,n){throw new x(-201,!1)}function Au(e,n,t){const o=new x(n,e);return o[Eu]=n,o[ym]=e,o}function wm(e){return e[Eu]}let Bs;function Pu(){return Bs}function Ie(e){const n=Bs;return Bs=e,n}function Ru(e,n,t){const o=Ai(e);if(o&&o.providedIn=="root")return o.value===void 0?o.value=o.factory():o.value;if(t&8)return null;if(n!==void 0)return n;Ga()}const xt=globalThis,xm={},Zn=xm,_m="__NG_DI_FLAG__";class Cm{injector;constructor(n){this.injector=n}retrieve(n,t){const o=To(t)||0;try{return this.injector.get(n,o&8?null:Zn,o)}catch(r){if(za(r))return r;throw r}}}function km(e,n=0){const t=Jd();if(t===void 0)throw new x(-203,!1);if(t===null)return Ru(e,void 0,n);{const o=Sm(n),r=t.retrieve(e,o);if(za(r)){if(o.optional)return null;throw r}return r}}function D(e,n=0){return(Pu()||km)(_e(e),n)}function p(e,n){return D(e,To(n))}function To(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Sm(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function Us(e){const n=[];for(let t=0;t<e.length;t++){const o=_e(e[t]);if(Array.isArray(o)){if(o.length===0)throw new x(900,!1);let r,i=0;for(let s=0;s<o.length;s++){const a=o[s],l=Om(a);typeof l=="number"?l===-1?r=a.token:i|=l:r=a}n.push(D(r,i))}else n.push(D(o))}return n}function Om(e){return e[_m]}function Jn(e,n){const t=e.hasOwnProperty(Fr);return t?e[Fr]:null}function Im(e,n,t){if(e.length!==n.length)return!1;for(let o=0;o<e.length;o++){let r=e[o],i=n[o];if(t&&(r=t(r),i=t(i)),i!==r)return!1}return!0}function Tm(e){return e.flat(Number.POSITIVE_INFINITY)}function Za(e,n){e.forEach(t=>Array.isArray(t)?Za(t,n):n(t))}function Lu(e,n,t){n>=e.length?e.push(t):e.splice(n,0,t)}function zr(e,n){return n>=e.length-1?e.pop():e.splice(n,1)[0]}function Em(e,n){const t=[];for(let o=0;o<e;o++)t.push(n);return t}function Mm(e,n,t,o){let r=e.length;if(r==n)e.push(t,o);else if(r===1)e.push(o,e[0]),e[0]=t;else{for(r--,e.push(e[r-1],e[r]);r>n;){const i=r-2;e[r]=e[i],r--}e[n]=t,e[n+1]=o}}function Wa(e,n,t){let o=Go(e,n);return o>=0?e[o|1]=t:(o=~o,Mm(e,o,n,t)),o}function ss(e,n){const t=Go(e,n);if(t>=0)return e[t|1]}function Go(e,n){return Am(e,n,1)}function Am(e,n,t){let o=0,r=e.length>>t;for(;r!==o;){const i=o+(r-o>>1),s=e[i<<t];if(n===s)return i<<t;s>n?r=i:o=i+1}return~(r<<t)}const et={},on=[],Qa=new T(""),Ya=new T("",-1),Du=new T("");class Fu{get(n,t=Zn){if(t===Zn){const r=Au("",-201);throw r.name="ɵNotFound",r}return t}}function zu(e){return{ɵproviders:e}}function Pm(...e){return{ɵproviders:Nu(!0,e),ɵfromNgModule:!0}}function Nu(e,...n){const t=[],o=new Set;let r;const i=s=>{t.push(s)};return Za(n,s=>{const a=s;Vs(a,i,[],o)&&(r||=[],r.push(a))}),r!==void 0&&ju(r,i),t}function ju(e,n){for(let t=0;t<e.length;t++){const{ngModule:o,providers:r}=e[t];Xa(r,i=>{n(i,o)})}}function Vs(e,n,t,o){if(e=_e(e),!e)return!1;let r=null,i=Ic(e);const s=!i&&zt(e);if(!i&&!s){const l=e.ngModule;if(i=Ic(l),i)r=l;else return!1}else{if(s&&!s.standalone)return!1;r=e}const a=o.has(r);if(s){if(a)return!1;if(o.add(r),s.dependencies){const l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(const c of l)Vs(c,n,t,o)}}else if(i){if(i.imports!=null&&!a){o.add(r);let c;Za(i.imports,d=>{Vs(d,n,t,o)&&(c||=[],c.push(d))}),c!==void 0&&ju(c,n)}if(!a){const c=Jn(r)||(()=>new r);n({provide:r,useFactory:c,deps:on},r),n({provide:Du,useValue:r,multi:!0},r),n({provide:Qa,useValue:()=>D(r),multi:!0},r)}const l=i.providers;if(l!=null&&!a){const c=e;Xa(l,d=>{n(d,c)})}}else return!1;return r!==e&&e.providers!==void 0}function Xa(e,n){for(let t of e)Iu(t)&&(t=t.ɵproviders),Array.isArray(t)?Xa(t,n):n(t)}const Rm=$({provide:String,useValue:$});function Hu(e){return e!==null&&typeof e=="object"&&Rm in e}function Lm(e){return!!(e&&e.useExisting)}function Dm(e){return!!(e&&e.useFactory)}function Nt(e){return typeof e=="function"}function Fm(e){return!!e.useClass}const Ka=new T(""),yr={},Mc={};let as;function Ja(){return as===void 0&&(as=new Fu),as}class je{}class el extends je{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,t,o,r){super(),this.parent=t,this.source=o,this.scopes=r,$s(n,s=>this.processProvider(s)),this.records.set(Ya,_t(void 0,this)),r.has("environment")&&this.records.set(je,_t(void 0,this));const i=this.records.get(Ka);i!=null&&typeof i.value=="string"&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Du,on,{self:!0}))}retrieve(n,t){const o=To(t)||0;try{return this.get(n,Zn,o)}catch(r){if(za(r))return r;throw r}}destroy(){uo(this),this._destroyed=!0;const n=S(null);try{for(const o of this._ngOnDestroyHooks)o.ngOnDestroy();const t=this._onDestroyHooks;this._onDestroyHooks=[];for(const o of t)o()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),S(n)}}onDestroy(n){return uo(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){uo(this);const t=Rn(this),o=Ie(void 0);try{return n()}finally{Rn(t),Ie(o)}}get(n,t=Zn,o){if(uo(this),n.hasOwnProperty(Ec))return n[Ec](this);const r=To(o),i=Rn(this),s=Ie(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){const c=Bm(n)&&Ai(n);c&&this.injectableDefInScope(c)?l=_t(qs(n),yr):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}const a=r&2?Ja():this.parent;return t=r&8&&t===Zn?null:t,a.get(n,t)}catch(a){const l=wm(a);throw l===-200||l===-201?new x(l,null):a}finally{Ie(s),Rn(i)}}resolveInjectorInitializers(){const n=S(null),t=Rn(this),o=Ie(void 0);try{const r=this.get(Qa,on,{self:!0});for(const i of r)i()}finally{Rn(t),Ie(o),S(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=_e(n);let t=Nt(n)?n:_e(n&&n.provide);const o=Nm(n);if(!Nt(n)&&n.multi===!0){let r=this.records.get(t);r||(r=_t(void 0,yr,!0),r.factory=()=>Us(r.multi),this.records.set(t,r)),t=n,r.multi.push(n)}this.records.set(t,o)}hydrate(n,t,o){const r=S(null);try{if(t.value===Mc)throw Mu("");return t.value===yr&&(t.value=Mc,t.value=t.factory(void 0,o)),typeof t.value=="object"&&t.value&&Hm(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{S(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;const t=_e(n.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(n){const t=this._onDestroyHooks.indexOf(n);t!==-1&&this._onDestroyHooks.splice(t,1)}}function qs(e){const n=Ai(e),t=n!==null?n.factory:Jn(e);if(t!==null)return t;if(e instanceof T)throw new x(-204,!1);if(e instanceof Function)return zm(e);throw new x(-204,!1)}function zm(e){if(e.length>0)throw new x(-204,!1);const t=fm(e);return t!==null?()=>t.factory(e):()=>new e}function Nm(e){if(Hu(e))return _t(void 0,e.useValue);{const n=Bu(e);return _t(n,yr)}}function Bu(e,n,t){let o;if(Nt(e)){const r=_e(e);return Jn(r)||qs(r)}else if(Hu(e))o=()=>_e(e.useValue);else if(Dm(e))o=()=>e.useFactory(...Us(e.deps||[]));else if(Lm(e))o=(r,i)=>D(_e(e.useExisting),i!==void 0&&i&8?8:void 0);else{const r=_e(e&&(e.useClass||e.provide));if(jm(e))o=()=>new r(...Us(e.deps));else return Jn(r)||qs(r)}return o}function uo(e){if(e.destroyed)throw new x(-205,!1)}function _t(e,n,t=!1){return{factory:e,value:n,multi:t?[]:void 0}}function jm(e){return!!e.deps}function Hm(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function Bm(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function $s(e,n){for(const t of e)Array.isArray(t)?$s(t,n):t&&Iu(t)?$s(t.ɵproviders,n):n(t)}function De(e,n){let t;e instanceof el?(uo(e),t=e):t=new Cm(e);const o=Rn(t),r=Ie(void 0);try{return n()}finally{Rn(o),Ie(r)}}function Um(){return Pu()!==void 0||Jd()!=null}const En=0,_=1,I=2,ge=3,Ke=4,Ee=5,jt=6,Nr=7,de=8,rn=9,fn=10,U=11,Eo=12,Ac=13,gt=14,He=15,nt=16,Ct=17,On=18,hn=19,Uu=20,Dn=21,ls=22,tt=23,Ne=24,Et=25,pn=26,ee=27,Vu=1,Pc=6,ot=7,jr=8,Ht=9,J=10;function Fn(e){return Array.isArray(e)&&typeof e[Vu]=="object"}function yn(e){return Array.isArray(e)&&e[Vu]===!0}function qu(e){return(e.flags&4)!==0}function mt(e){return e.componentOffset>-1}function Zo(e){return(e.flags&1)===1}function In(e){return!!e.template}function Hr(e){return(e[I]&512)!==0}function Jt(e){return(e[I]&256)===256}const $u="svg",Vm="math";function gn(e){for(;Array.isArray(e);)e=e[En];return e}function Gu(e,n){return gn(n[e])}function Ge(e,n){return gn(n[e.index])}function nl(e,n){return e.data[n]}function Zu(e,n){return e[n]}function qm(e,n,t,o){t>=e.data.length&&(e.data[t]=null,e.blueprint[t]=null),n[t]=o}function mn(e,n){const t=n[e];return Fn(t)?t:t[En]}function $m(e){return(e[I]&4)===4}function tl(e){return(e[I]&128)===128}function Gm(e){return yn(e[ge])}function vn(e,n){return n==null?null:e[n]}function Wu(e){e[Ct]=0}function Qu(e){e[I]&1024||(e[I]|=1024,tl(e)&&eo(e))}function Zm(e,n){for(;e>0;)n=n[gt],e--;return n}function Br(e){return!!(e[I]&9216||e[Ne]?.dirty)}function Gs(e){e[fn].changeDetectionScheduler?.notify(8),e[I]&64&&(e[I]|=1024),Br(e)&&eo(e)}function eo(e){e[fn].changeDetectionScheduler?.notify(0);let n=rt(e);for(;n!==null&&!(n[I]&8192||(n[I]|=8192,!tl(n)));)n=rt(n)}function ol(e,n){if(Jt(e))throw new x(911,!1);e[Dn]===null&&(e[Dn]=[]),e[Dn].push(n)}function Wm(e,n){if(e[Dn]===null)return;const t=e[Dn].indexOf(n);t!==-1&&e[Dn].splice(t,1)}function rt(e){const n=e[ge];return yn(n)?n[ge]:n}function Yu(e){return e[Nr]??=[]}function Xu(e){return e.cleanup??=[]}function Qm(e,n,t,o){const r=Yu(n);r.push(t),e.firstCreatePass&&Xu(e).push(o,r.length-1)}const A={lFrame:df(null),bindingsEnabled:!0,skipHydrationRootTNode:null};let Zs=!1;function Ym(){return A.lFrame.elementDepthCount}function Xm(){A.lFrame.elementDepthCount++}function Ku(){A.lFrame.elementDepthCount--}function Ju(){return A.bindingsEnabled}function ef(){return A.skipHydrationRootTNode!==null}function nf(e){return A.skipHydrationRootTNode===e}function tf(){A.skipHydrationRootTNode=null}function C(){return A.lFrame.lView}function Y(){return A.lFrame.tView}function re(e){return A.lFrame.contextLView=e,e[de]}function ie(e){return A.lFrame.contextLView=null,e}function ae(){let e=of();for(;e!==null&&e.type===64;)e=e.parent;return e}function of(){return A.lFrame.currentTNode}function Km(){const e=A.lFrame,n=e.currentTNode;return e.isParent?n:n.parent}function Wo(e,n){const t=A.lFrame;t.currentTNode=e,t.isParent=n}function rf(){return A.lFrame.isParent}function sf(){A.lFrame.isParent=!1}function Jm(){return A.lFrame.contextLView}function af(){return Zs}function Ur(e){const n=Zs;return Zs=e,n}function Ri(){const e=A.lFrame;let n=e.bindingRootIndex;return n===-1&&(n=e.bindingRootIndex=e.tView.bindingStartIndex),n}function e1(){return A.lFrame.bindingIndex}function n1(e){return A.lFrame.bindingIndex=e}function vt(){return A.lFrame.bindingIndex++}function rl(e){const n=A.lFrame,t=n.bindingIndex;return n.bindingIndex=n.bindingIndex+e,t}function t1(){return A.lFrame.inI18n}function o1(e,n){const t=A.lFrame;t.bindingIndex=t.bindingRootIndex=e,Ws(n)}function r1(){return A.lFrame.currentDirectiveIndex}function Ws(e){A.lFrame.currentDirectiveIndex=e}function i1(e){const n=A.lFrame.currentDirectiveIndex;return n===-1?null:e[n]}function il(){return A.lFrame.currentQueryIndex}function Li(e){A.lFrame.currentQueryIndex=e}function s1(e){const n=e[_];return n.type===2?n.declTNode:n.type===1?e[Ee]:null}function lf(e,n,t){if(t&4){let r=n,i=e;for(;r=r.parent,r===null&&!(t&1);)if(r=s1(i),r===null||(i=i[gt],r.type&10))break;if(r===null)return!1;n=r,e=i}const o=A.lFrame=cf();return o.currentTNode=n,o.lView=e,!0}function sl(e){const n=cf(),t=e[_];A.lFrame=n,n.currentTNode=t.firstChild,n.lView=e,n.tView=t,n.contextLView=e,n.bindingIndex=t.bindingStartIndex,n.inI18n=!1}function cf(){const e=A.lFrame,n=e===null?null:e.child;return n===null?df(e):n}function df(e){const n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=n),n}function uf(){const e=A.lFrame;return A.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const ff=uf;function al(){const e=uf();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function a1(e){return(A.lFrame.contextLView=Zm(e,A.lFrame.contextLView))[de]}function Mn(){return A.lFrame.selectedIndex}function it(e){A.lFrame.selectedIndex=e}function Qo(){const e=A.lFrame;return nl(e.tView,e.selectedIndex)}function hf(){A.lFrame.currentNamespace=$u}function pf(){return A.lFrame.currentNamespace}let gf=!0;function ll(){return gf}function Di(e){gf=e}function l1(){let e,n;return{promise:new Promise((o,r)=>{e=o,n=r}),resolve:e,reject:n}}function Rc(e,n=null,t=null,o){const r=mf(e,n,t);return r.resolveInjectorInitializers(),r}function mf(e,n=null,t=null,o,r=new Set){const i=[t||on,Pm(e)];return new el(i,n||Ja(),null,r)}class Be{static THROW_IF_NOT_FOUND=Zn;static NULL=new Fu;static create(n,t){if(Array.isArray(n))return Rc({name:""},t,n);{const o=n.name??"";return Rc({name:o},n.parent,n.providers)}}static ɵprov=K({token:Be,providedIn:"any",factory:()=>D(Ya)});static __NG_ELEMENT_ID__=-1}const Se=new T("");let an=(()=>{class e{static __NG_ELEMENT_ID__=c1;static __NG_ENV_ID__=t=>t}return e})();class vf extends an{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Jt(this._lView)}onDestroy(n){const t=this._lView;return ol(t,n),()=>Wm(t,n)}}function c1(){return new vf(C())}const d1=!1,u1=new T("");let Yo=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new ze(!1);debugTaskTracker=p(u1,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ue(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);const t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static ɵprov=K({token:e,providedIn:"root",factory:()=>new e})}return e})();class f1 extends nn{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Um()&&(this.destroyRef=p(an,{optional:!0})??void 0,this.pendingTasks=p(Yo,{optional:!0})??void 0)}emit(n){const t=S(null);try{super.next(n)}finally{S(t)}}subscribe(n,t,o){let r=n,i=t||(()=>null),s=o;if(n&&typeof n=="object"){const l=n;r=l.next?.bind(l),i=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(i=this.wrapInTimeout(i),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));const a=super.subscribe({next:r,error:i,complete:s});return n instanceof ht&&n.add(a),a}wrapInTimeout(n){return t=>{const o=this.pendingTasks?.add();setTimeout(()=>{try{n(t)}finally{o!==void 0&&this.pendingTasks?.remove(o)}})}}}const Le=f1;function Vr(...e){}function bf(e){let n,t;function o(){e=Vr;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{e(),o()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{e(),o()})),()=>o()}function h1(e){return queueMicrotask(()=>e()),()=>{e=Vr}}const cl="isAngularZone",qr=cl+"_ID";let p1=0;class Ue{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Le(!1);onMicrotaskEmpty=new Le(!1);onStable=new Le(!1);onError=new Le(!1);constructor(n){const{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:o=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:i=d1}=n;if(typeof Zone>"u")throw new x(908,!1);Zone.assertZonePatched();const s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&o,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=i,v1(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(cl)===!0}static assertInAngularZone(){if(!Ue.isInAngularZone())throw new x(909,!1)}static assertNotInAngularZone(){if(Ue.isInAngularZone())throw new x(909,!1)}run(n,t,o){return this._inner.run(n,t,o)}runTask(n,t,o,r){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+r,n,g1,Vr,Vr);try{return i.runTask(s,t,o)}finally{i.cancelTask(s)}}runGuarded(n,t,o){return this._inner.runGuarded(n,t,o)}runOutsideAngular(n){return this._outer.run(n)}}const g1={};function dl(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function m1(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function n(){bf(()=>{e.callbackScheduled=!1,Qs(e),e.isCheckStableRunning=!0,dl(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{n()}):e._outer.run(()=>{n()}),Qs(e)}function v1(e){const n=()=>{m1(e)},t=p1++;e._inner=e._inner.fork({name:"angular",properties:{[cl]:!0,[qr]:t,[qr+t]:!0},onInvokeTask:(o,r,i,s,a,l)=>{if(y1(l))return o.invokeTask(i,s,a,l);try{return Lc(e),o.invokeTask(i,s,a,l)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&n(),Dc(e)}},onInvoke:(o,r,i,s,a,l,c)=>{try{return Lc(e),o.invoke(i,s,a,l,c)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!w1(l)&&n(),Dc(e)}},onHasTask:(o,r,i,s)=>{o.hasTask(i,s),r===i&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,Qs(e),dl(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(o,r,i,s)=>(o.handleError(i,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function Qs(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Lc(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Dc(e){e._nesting--,dl(e)}class b1{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Le;onMicrotaskEmpty=new Le;onStable=new Le;onError=new Le;run(n,t,o){return n.apply(t,o)}runGuarded(n,t,o){return n.apply(t,o)}runOutsideAngular(n){return n()}runTask(n,t,o,r){return n.apply(t,o)}}function y1(e){return yf(e,"__ignore_ng_zone__")}function w1(e){return yf(e,"__scheduler_tick__")}function yf(e,n){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[n]===!0}class no{_console=console;handleError(n){this._console.error("ERROR",n)}}const to=new T("",{factory:()=>{const e=p(Ue),n=p(je);let t;return o=>{e.runOutsideAngular(()=>{n.destroyed&&!t?setTimeout(()=>{throw o}):(t??=n.get(no),t.handleError(o))})}}}),x1={provide:Qa,useValue:()=>{p(no,{optional:!0})},multi:!0};function H(e,n){const[t,o,r]=og(e,n?.equal),i=t;return i[he],i.set=o,i.update=r,i.asReadonly=ul.bind(i),i}function ul(){const e=this[he];if(e.readonlyFn===void 0){const n=()=>this();n[he]=e,e.readonlyFn=n}return e.readonlyFn}const wf=new T("",{factory:()=>_1}),_1="ng";const xf=new T(""),_f=new T("",{providedIn:"platform",factory:()=>"unknown"}),Cf=new T("",{factory:()=>p(Se).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});let Fi=(()=>{class e{view;node;constructor(t,o){this.view=t,this.node=o}static __NG_ELEMENT_ID__=C1}return e})();function C1(){return new Fi(C(),ae())}class Xo{}const fl=new T("",{factory:()=>!0}),k1=new T("");let kf=(()=>{class e{static ɵprov=K({token:e,providedIn:"root",factory:()=>new S1})}return e})();class S1{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){const t=n.zone,o=this.queues.get(t);o.has(n)&&(o.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){const t=n.zone;this.queues.has(t)||this.queues.set(t,new Set);const o=this.queues.get(t);o.has(n)||o.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(const[t,o]of this.queues)t===null?n||=this.flushQueue(o):n||=t.run(()=>this.flushQueue(o));n||(this.dirtyEffectCount=0)}}flushQueue(n){let t=!1;for(const o of n)o.dirty&&(this.dirtyEffectCount--,t=!0,o.run());return t}}class O1{[he];constructor(n){this[he]=n}destroy(){this[he].destroy()}}function bt(e,n){const t=n?.injector??p(Be);let o=n?.manualCleanup!==!0?t.get(an):null,r;const i=t.get(Fi,null,{optional:!0}),s=t.get(Xo);return i!==null?(r=E1(i.view,s,e),o instanceof vf&&o._lView===i.view&&(o=null)):r=M1(e,t.get(kf),s),r.injector=t,o!==null&&(r.onDestroyFns=[o.onDestroy(()=>r.destroy())]),new O1(r)}const Sf={...sg,cleanupFns:void 0,zone:null,onDestroyFns:null,run(){const e=Ur(!1);try{ag(this)}finally{Ur(e)}},cleanup(){if(!this.cleanupFns?.length)return;const e=S(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],S(e)}}},I1={...Sf,consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(qo(this),this.onDestroyFns!==null)for(const e of this.onDestroyFns)e();this.cleanup(),this.scheduler.remove(this)}},T1={...Sf,consumerMarkedDirty(){this.view[I]|=8192,eo(this.view),this.notifier.notify(13)},destroy(){if(qo(this),this.onDestroyFns!==null)for(const e of this.onDestroyFns)e();this.cleanup(),this.view[tt]?.delete(this)}};function E1(e,n,t){const o=Object.create(T1);return o.view=e,o.zone=typeof Zone<"u"?Zone.current:null,o.notifier=n,o.fn=Of(o,t),e[tt]??=new Set,e[tt].add(o),o.consumerMarkedDirty(o),o}function M1(e,n,t){const o=Object.create(I1);return o.fn=Of(o,e),o.scheduler=n,o.notifier=t,o.zone=typeof Zone<"u"?Zone.current:null,o.scheduler.add(o),o.notifier.notify(12),o}function Of(e,n){return()=>{n(t=>(e.cleanupFns??=[]).push(t))}}function A1(e){return typeof e=="function"&&e[he]!==void 0}function If(e){return A1(e)&&typeof e.set=="function"}function hl(e){return{toString:e}.toString()}var F=(function(e){return e[e.TemplateCreateStart=0]="TemplateCreateStart",e[e.TemplateCreateEnd=1]="TemplateCreateEnd",e[e.TemplateUpdateStart=2]="TemplateUpdateStart",e[e.TemplateUpdateEnd=3]="TemplateUpdateEnd",e[e.LifecycleHookStart=4]="LifecycleHookStart",e[e.LifecycleHookEnd=5]="LifecycleHookEnd",e[e.OutputStart=6]="OutputStart",e[e.OutputEnd=7]="OutputEnd",e[e.BootstrapApplicationStart=8]="BootstrapApplicationStart",e[e.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",e[e.BootstrapComponentStart=10]="BootstrapComponentStart",e[e.BootstrapComponentEnd=11]="BootstrapComponentEnd",e[e.ChangeDetectionStart=12]="ChangeDetectionStart",e[e.ChangeDetectionEnd=13]="ChangeDetectionEnd",e[e.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",e[e.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",e[e.AfterRenderHooksStart=16]="AfterRenderHooksStart",e[e.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",e[e.ComponentStart=18]="ComponentStart",e[e.ComponentEnd=19]="ComponentEnd",e[e.DeferBlockStateStart=20]="DeferBlockStateStart",e[e.DeferBlockStateEnd=21]="DeferBlockStateEnd",e[e.DynamicComponentStart=22]="DynamicComponentStart",e[e.DynamicComponentEnd=23]="DynamicComponentEnd",e[e.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",e[e.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",e})(F||{});class P1{previousValue;currentValue;firstChange;constructor(n,t,o){this.previousValue=n,this.currentValue=t,this.firstChange=o}isFirstChange(){return this.firstChange}}function Tf(e,n,t,o){n!==null?n.applyValueToInputSignal(n,o):e[t]=o}let Ef=null;const zi=(()=>{Ef=Fc;const e=()=>Fc;return e.ngInherit=!0,e})();function R1(){return Ef}function Fc(e){return e.type.prototype.ngOnChanges&&(e.setInput=D1),L1}function L1(){const e=Mf(this),n=e?.current;if(n){const t=e.previous;if(t===et)e.previous=n;else for(let o in n)t[o]=n[o];e.current=null,this.ngOnChanges(n)}}function D1(e,n,t,o,r){const i=this.declaredInputs[o],s=Mf(e)||F1(e,{previous:et,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[i];a[i]=new P1(c&&c.currentValue,t,l===et),Tf(e,n,r,t)}const Ys="__ngSimpleChanges__";function Mf(e){return Object.hasOwn(e,Ys)&&e[Ys]||null}function F1(e,n){return e[Ys]=n}const zc=[],j=function(e,n=null,t){for(let o=0;o<zc.length;o++){const r=zc[o];r(e,n,t)}};function z1(e,n,t){const{ngOnChanges:o,ngOnInit:r,ngDoCheck:i}=n.type.prototype;if(o){const s=R1()(n);(t.preOrderHooks??=[]).push(e,s),(t.preOrderCheckHooks??=[]).push(e,s)}r&&(t.preOrderHooks??=[]).push(0-e,r),i&&((t.preOrderHooks??=[]).push(e,i),(t.preOrderCheckHooks??=[]).push(e,i))}function Af(e,n){for(let t=n.directiveStart,o=n.directiveEnd;t<o;t++){const i=e.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=i;s&&(e.contentHooks??=[]).push(-t,s),a&&((e.contentHooks??=[]).push(t,a),(e.contentCheckHooks??=[]).push(t,a)),l&&(e.viewHooks??=[]).push(-t,l),c&&((e.viewHooks??=[]).push(t,c),(e.viewCheckHooks??=[]).push(t,c)),d!=null&&(e.destroyHooks??=[]).push(t,d)}}function wr(e,n,t){Pf(e,n,3,t)}function xr(e,n,t,o){(e[I]&3)===t&&Pf(e,n,t,o)}function cs(e,n){let t=e[I];(t&3)===n&&(t&=16383,t+=1,e[I]=t)}function Pf(e,n,t,o){const r=o!==void 0?e[Ct]&65535:0,i=o??-1,s=n.length-1;let a=0;for(let l=r;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],o!=null&&a>=o)break}else n[l]<0&&(e[Ct]+=65536),(a<i||i==-1)&&(N1(e,t,n,l),e[Ct]=(e[Ct]&4294901760)+l+2),l++}function Nc(e,n){j(F.LifecycleHookStart,e,n);const t=S(null);try{n.call(e)}finally{S(t),j(F.LifecycleHookEnd,e,n)}}function N1(e,n,t,o){const r=t[o]<0,i=t[o+1],s=r?-t[o]:t[o],a=e[s];r?e[I]>>14<e[Ct]>>16&&(e[I]&3)===n&&(e[I]+=16384,Nc(a,i)):Nc(a,i)}const Mt=-1;class Ko{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,t,o,r){this.factory=n,this.name=r,this.canSeeViewProviders=t,this.injectImpl=o}}function j1(e){return(e.flags&8)!==0}function H1(e){return(e.flags&16)!==0}function B1(e,n,t){let o=0;for(;o<t.length;){const r=t[o];if(typeof r=="number"){if(r!==0)break;o++;const i=t[o++],s=t[o++],a=t[o++];e.setAttribute(n,s,a,i)}else{const i=r,s=t[++o];U1(i)?e.setProperty(n,i,s):e.setAttribute(n,i,s),o++}}return o}function Rf(e){return e===3||e===4||e===6}function U1(e){return e.charCodeAt(0)===64}function Bt(e,n){if(!(n===null||n.length===0))if(e===null||e.length===0)e=n.slice();else{let t=-1;for(let o=0;o<n.length;o++){const r=n[o];typeof r=="number"?t=r:t===0||(t===-1||t===2?jc(e,t,r,null,n[++o]):jc(e,t,r,null,null))}}return e}function jc(e,n,t,o,r){let i=0,s=e.length;if(n===-1)s=-1;else for(;i<e.length;){const a=e[i++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=i-1;break}}}for(;i<e.length;){const a=e[i];if(typeof a=="number")break;if(a===t){r!==null&&(e[i+1]=r);return}i++,r!==null&&i++}s!==-1&&(e.splice(s,0,n),i=s+1),e.splice(i++,0,t),r!==null&&e.splice(i++,0,r)}function Lf(e){return e!==Mt}function $r(e){return e&32767}function V1(e){return e>>16}function Gr(e,n){let t=V1(e),o=n;for(;t>0;)o=o[gt],t--;return o}let Xs=!0;function Zr(e){const n=Xs;return Xs=e,n}const q1=256,Df=q1-1,Ff=5;let $1=0;const dn={};function G1(e,n,t){let o;typeof t=="string"?o=t.charCodeAt(0)||0:t.hasOwnProperty(vo)&&(o=t[vo]),o==null&&(o=t[vo]=$1++);const r=o&Df,i=1<<r;n.data[e+(r>>Ff)]|=i}function Wr(e,n){const t=zf(e,n);if(t!==-1)return t;const o=n[_];o.firstCreatePass&&(e.injectorIndex=n.length,ds(o.data,e),ds(n,null),ds(o.blueprint,null));const r=pl(e,n),i=e.injectorIndex;if(Lf(r)){const s=$r(r),a=Gr(r,n),l=a[_].data;for(let c=0;c<8;c++)n[i+c]=a[s+c]|l[s+c]}return n[i+8]=r,i}function ds(e,n){e.push(0,0,0,0,0,0,0,0,n)}function zf(e,n){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||n[e.injectorIndex+8]===null?-1:e.injectorIndex}function pl(e,n){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let t=0,o=null,r=n;for(;r!==null;){if(o=Uf(r),o===null)return Mt;if(t++,r=r[gt],o.injectorIndex!==-1)return o.injectorIndex|t<<16}return Mt}function Ks(e,n,t){G1(e,n,t)}function Z1(e,n){if(n==="class")return e.classes;if(n==="style")return e.styles;const t=e.attrs;if(t){const o=t.length;let r=0;for(;r<o;){const i=t[r];if(Rf(i))break;if(i===0)r=r+2;else if(typeof i=="number")for(r++;r<o&&typeof t[r]=="string";)r++;else{if(i===n)return t[r+1];r=r+2}}}return null}function Nf(e,n,t){if(t&8||e!==void 0)return e;Ga()}function jf(e,n,t,o){if(t&8&&o===void 0&&(o=null),(t&3)===0){const r=e[rn],i=Ie(void 0);try{return r?r.get(n,o,t&8):Ru(n,o,t&8)}finally{Ie(i)}}return Nf(o,n,t)}function Hf(e,n,t,o=0,r){if(e!==null){if(n[I]&2048&&!(o&2)){const s=X1(e,n,t,o,dn);if(s!==dn)return s}const i=Bf(e,n,t,o,dn);if(i!==dn)return i}return jf(n,t,o,r)}function Bf(e,n,t,o,r){const i=Q1(t);if(typeof i=="function"){if(!lf(n,e,o))return o&1?Nf(r,t,o):jf(n,t,o,r);try{let s;if(s=i(o),s==null&&!(o&8))Ga(t);else return s}finally{ff()}}else if(typeof i=="number"){let s=null,a=zf(e,n),l=Mt,c=o&1?n[He][Ee]:null;for((a===-1||o&4)&&(l=a===-1?pl(e,n):n[a+8],l===Mt||!Bc(o,!1)?a=-1:(s=n[_],a=$r(l),n=Gr(l,n)));a!==-1;){const d=n[_];if(Hc(i,a,d.data)){const u=W1(a,n,t,s,o,c);if(u!==dn)return u}l=n[a+8],l!==Mt&&Bc(o,n[_].data[a+8]===c)&&Hc(i,a,n)?(s=d,a=$r(l),n=Gr(l,n)):a=-1}}return r}function W1(e,n,t,o,r,i){const s=n[_],a=s.data[e+8],l=o==null?mt(a)&&Xs:o!=s&&(a.type&3)!==0,c=r&1&&i===a,d=_r(a,s,t,l,c);return d!==null?Qr(n,s,d,a,r):dn}function _r(e,n,t,o,r){const i=e.providerIndexes,s=n.data,a=i&1048575,l=e.directiveStart,c=e.directiveEnd,d=i>>20,u=o?a:a+d,f=r?a+d:c;for(let h=u;h<f;h++){const g=s[h];if(h<l&&t===g||h>=l&&g.type===t)return h}if(r){const h=s[l];if(h&&In(h)&&h.type===t)return l}return null}function Qr(e,n,t,o,r){let i=e[t];const s=n.data;if(i instanceof Ko){const a=i;if(a.resolving)throw Mu();const l=Zr(a.canSeeViewProviders);a.resolving=!0,s[t].type||s[t];const c=a.injectImpl?Ie(a.injectImpl):null;lf(e,o,0);try{i=e[t]=a.factory(void 0,r,s,e,o),n.firstCreatePass&&t>=o.directiveStart&&z1(t,s[t],n)}finally{c!==null&&Ie(c),Zr(l),a.resolving=!1,ff()}}return i}function Q1(e){if(typeof e=="string")return e.charCodeAt(0)||0;const n=e.hasOwnProperty(vo)?e[vo]:void 0;return typeof n=="number"?n>=0?n&Df:Y1:n}function Hc(e,n,t){const o=1<<e;return!!(t[n+(e>>Ff)]&o)}function Bc(e,n){return!(e&2)&&!(e&1&&n)}class bo{_tNode;_lView;constructor(n,t){this._tNode=n,this._lView=t}get(n,t,o){return Hf(this._tNode,this._lView,n,To(o),t)}}function Y1(){return new bo(ae(),C())}function s6(e){return hl(()=>{const n=e.prototype.constructor,t=n[Fr]||Js(n),o=Object.prototype;let r=Object.getPrototypeOf(e.prototype).constructor;for(;r&&r!==o;){const i=r[Fr]||Js(r);if(i&&i!==t)return i;r=Object.getPrototypeOf(r)}return i=>new i})}function Js(e){return Su(e)?()=>{const n=Js(_e(e));return n&&n()}:Jn(e)}function X1(e,n,t,o,r){let i=e,s=n;for(;i!==null&&s!==null&&s[I]&2048&&!Hr(s);){const a=Bf(i,s,t,o|2,dn);if(a!==dn)return a;let l=i.parent;if(!l){const c=s[Uu];if(c){const d=c.get(t,dn,o&-5);if(d!==dn)return d}l=Uf(s),s=s[gt]}i=l}return r}function Uf(e){const n=e[_],t=n.type;return t===2?n.declTNode:t===1?e[Ee]:null}function Vf(e){return Z1(ae(),e)}function ne(e){return{token:e.token,providedIn:e.autoProvided===!1?null:"root",factory:e.factory,value:void 0}}function K1(){return oo(ae(),C())}function oo(e,n){return new bn(Ge(e,n))}let bn=(()=>{class e{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=K1}return e})();function qf(e){return e instanceof bn?e.nativeElement:e}function J1(){return this._results[Symbol.iterator]()}class ev{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new nn}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,t){return this._results.reduce(n,t)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,t){this.dirty=!1;const o=Tm(n);(this._changesDetected=!Im(this._results,o,t))&&(this._results=o,this.length=o.length,this.last=o[this.length-1],this.first=o[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=J1}function $f(e){return(e.flags&128)===128}var Gf=(function(e){return e[e.OnPush=0]="OnPush",e[e.Eager=1]="Eager",e[e.Default=1]="Default",e})(Gf||{});const Zf=new Map;let nv=0;function tv(){return nv++}function ov(e){Zf.set(e[hn],e)}function ea(e){Zf.delete(e[hn])}const Uc="__ngContext__";function Ut(e,n){Fn(n)?(e[Uc]=n[hn],ov(n)):e[Uc]=n}function Wf(e){return Yf(e[Eo])}function Qf(e){return Yf(e[Ke])}function Yf(e){for(;e!==null&&!yn(e);)e=e[Ke];return e}let na;function rv(e){na=e}function iv(){if(na!==void 0)return na;if(typeof document<"u")return document;throw new x(210,!1)}const sv="r",av="di",Xf=!1,lv=new T("",{factory:()=>Xf}),Vc=new WeakMap;function cv(e,n){if(e==null||typeof e!="object")return;let t=Vc.get(e);t||(t=new WeakSet,Vc.set(e,t)),t.add(n)}function gl(e){return(e.flags&32)===32}let dv=()=>null;function Kf(e,n,t=!1){return dv()}function Jf(e,n){const t=e.contentQueries;if(t!==null){const o=S(null);try{for(let r=0;r<t.length;r+=2){const i=t[r],s=t[r+1];if(s!==-1){const a=e.data[s];Li(i),a.contentQueries(2,n[s],s)}}}finally{S(o)}}}function ta(e,n,t){Li(0);const o=S(null);try{n(e,t)}finally{S(o)}}function ml(e,n,t){if(qu(n)){const o=S(null);try{const r=n.directiveStart,i=n.directiveEnd;for(let s=r;s<i;s++){const a=e.data[s];if(a.contentQueries){const l=t[s];a.contentQueries(1,l,s)}}}finally{S(o)}}}var Sn=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e[e.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",e})(Sn||{});let sr;function uv(){if(sr===void 0&&(sr=null,xt.trustedTypes))try{sr=xt.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return sr}function qc(e){return uv()?.createScriptURL(e)||e}class eh{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Cu})`}}function Ni(e){return e instanceof eh?e.changingThisBreaksApplicationSecurity:e}function nh(e,n){const t=fv(e);if(t!=null&&t!==n){if(t==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${t} (see ${Cu})`)}return t===n}function fv(e){return e instanceof eh&&e.getTypeName()||null}const hv=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function pv(e){return e=String(e),e.match(hv)?e:"unsafe:"+e}const gv=/^>|^->|<!--|-->|--!>|<!-$/g,mv=/(<|>)/g,vv="​$1​";function bv(e){return e.replace(gv,n=>n.replace(mv,vv))}function yv(e,n){return e.createText(n)}function wv(e,n,t){e.setValue(n,t)}function xv(e,n){return e.createComment(bv(n))}function th(e,n,t){return e.createElement(n,t)}function Yr(e,n,t,o,r){e.insertBefore(n,t,o,r)}function oh(e,n,t){e.appendChild(n,t)}function $c(e,n,t,o,r){o!==null?Yr(e,n,t,o,r):oh(e,n,t)}function rh(e,n,t,o){e.removeChild(null,n,t,o)}function _v(e,n,t){e.setAttribute(n,"style",t)}function Cv(e,n,t){t===""?e.removeAttribute(n,"class"):e.setAttribute(n,"class",t)}function ih(e,n,t){const{mergedAttrs:o,classes:r,styles:i}=t;o!==null&&B1(e,n,o),r!==null&&Cv(e,n,r),i!==null&&_v(e,n,i)}var vl=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e[e.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",e})(vl||{});function sh(e){const n=ah();return n?n.sanitize(vl.URL,e)||"":nh(e,"URL")?Ni(e):pv(Io(e))}function kv(e){const n=ah();if(n)return qc(n.sanitize(vl.RESOURCE_URL,e)||"");if(nh(e,"ResourceURL"))return qc(Ni(e));throw new x(904,!1)}const Sv={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function Ov(e,n){return Sv[e.toLowerCase()]?.[n.toLowerCase()]===!0?kv:sh}function Iv(e,n,t){return Ov(n,t)(e)}function ah(){const e=C();return e&&e[fn].sanitizer}function bl(e){return e.ownerDocument}function Tv(e){return e instanceof Function?e():e}function Ev(e,n,t){let o=e.length;for(;;){const r=e.indexOf(n,t);if(r===-1)return r;if(r===0||e.charCodeAt(r-1)<=32){const i=n.length;if(r+i===o||e.charCodeAt(r+i)<=32)return r}t=r+1}}const lh="ng-template";function Mv(e,n,t,o){let r=0;if(o){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&Ev(n[r+1].toLowerCase(),t,0)!==-1)return!0}else if(yl(e))return!1;if(r=n.indexOf(1,r),r>-1){let i;for(;++r<n.length&&typeof(i=n[r])=="string";)if(i.toLowerCase()===t)return!0}return!1}function yl(e){return e.type===4&&e.value!==lh}function Av(e,n,t){const o=e.type===4&&!t?lh:e.value;return n===o}function Pv(e,n,t){let o=4;const r=e.attrs,i=r!==null?Dv(r):0;let s=!1;for(let a=0;a<n.length;a++){const l=n[a];if(typeof l=="number"){if(!s&&!We(o)&&!We(l))return!1;if(s&&We(l))continue;s=!1,o=l|o&1;continue}if(!s)if(o&4){if(o=2|o&1,l!==""&&!Av(e,l,t)||l===""&&n.length===1){if(We(o))return!1;s=!0}}else if(o&8){if(r===null||!Mv(e,r,l,t)){if(We(o))return!1;s=!0}}else{const c=n[++a],d=Rv(l,r,yl(e),t);if(d===-1){if(We(o))return!1;s=!0;continue}if(c!==""){let u;if(d>i?u="":u=r[d+1].toLowerCase(),o&2&&c!==u){if(We(o))return!1;s=!0}}}}return We(o)||s}function We(e){return(e&1)===0}function Rv(e,n,t,o){if(n===null)return-1;let r=0;if(o||!t){let i=!1;for(;r<n.length;){const s=n[r];if(s===e)return r;if(s===3||s===6)i=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=i?1:2}return-1}else return Fv(n,e)}function ch(e,n,t=!1){for(let o=0;o<n.length;o++)if(Pv(e,n[o],t))return!0;return!1}function Lv(e){const n=e.attrs;if(n!=null){const t=n.indexOf(5);if((t&1)===0)return n[t+1]}return null}function Dv(e){for(let n=0;n<e.length;n++){const t=e[n];if(Rf(t))return n}return e.length}function Fv(e,n){let t=e.indexOf(4);if(t>-1)for(t++;t<e.length;){const o=e[t];if(typeof o=="number")return-1;if(o===n)return t;t++}return-1}function zv(e,n){e:for(let t=0;t<n.length;t++){const o=n[t];if(e.length===o.length){for(let r=0;r<e.length;r++)if(e[r]!==o[r])continue e;return!0}}return!1}function Gc(e,n){return e?":not("+n.trim()+")":n}function Nv(e){let n=e[0],t=1,o=2,r="",i=!1;for(;t<e.length;){let s=e[t];if(typeof s=="string")if(o&2){const a=e[++t];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else o&8?r+="."+s:o&4&&(r+=" "+s);else r!==""&&!We(s)&&(n+=Gc(i,r),r=""),o=s,i=i||!We(o);t++}return r!==""&&(n+=Gc(i,r)),n}function jv(e){return e.map(Nv).join(",")}function Hv(e){const n=[],t=[];let o=1,r=2;for(;o<e.length;){let i=e[o];if(typeof i=="string")r===2?i!==""&&n.push(i,e[++o]):r===8&&t.push(i);else{if(!We(r))break;r=i}o++}return t.length&&n.push(1,...t),n}const Me={};var qn=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(qn||{});let Bv;function wl(e,n){return Bv(e,n)}const Uv=new T("",{factory:()=>!1}),Vv=!1,xl=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function qv(e){return e[rn].get(Uv,Vv)}function $v(e){const n=oa.get(e);if(n){for(const t of n.cleanupFns)t();oa.delete(e)}yo.delete(e)}const oa=new WeakMap,yo=new WeakMap,Mo=new WeakMap;function dh(e){return e?e[gt]??e:null}const fo=new WeakSet;function Zc(e,n){const t=Mo.get(e);if(t&&t.length>0){const o=t.findIndex(r=>r.el===n);o>-1&&t.splice(o,1)}t?.length===0&&Mo.delete(e)}function Gv(e,n,t){const o=Mo.get(e);if(!o||o.length===0)return;const r=n.parentNode,i=n.previousSibling,s=dh(t);for(let a=o.length-1;a>=0;a--){const{el:l,declarationView:c}=o[a],d=l.parentNode;l===n?(o.splice(a,1),fo.add(l),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):i&&l===i?(o.splice(a,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l)):d&&r&&d!==r&&(s===null||c===null||s===c)&&(o.splice(a,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l))}}function uh(e,n,t){const o=dh(t),r=Mo.get(e);r?r.some(i=>i.el===n)||r.push({el:n,declarationView:o}):Mo.set(e,[{el:n,declarationView:o}])}function ji(e){const n=e[pn]??={};return n.leave??=new Map}function Zv(e){const n=typeof e=="function"?e():e;let t=Array.isArray(n)?n:null;return typeof n=="string"&&(t=n.trim().split(/\s+/).filter(o=>o)),t}function Wv(e,n){if(!xl)return;const t=oa.get(e);if(t&&t.classList.length>0&&Qv(e,t.classList))for(const o of t.classList)n.removeClass(e,o);$v(e)}function Qv(e,n){for(const t of n)if(e.classList.contains(t))return!0;return!1}function fh(e){return e.composedPath?e.composedPath()[0]:e.target}function Yv(e,n){const t=yo.get(n);return t===void 0?!0:n===fh(e)&&(t.animationName!==void 0&&e.animationName===t.animationName||t.propertyName!==void 0&&(t.propertyName==="all"||e.propertyName===t.propertyName))}function Xv(e,n,t){const o=e.get(n.index)??{animateFns:[]};o.animateFns.push(t),e.set(n.index,o)}function Wc(e,n){if(e)for(const t of e)t();for(const t of n)t()}function Qc(e,n){const t=ji(e).get(n.index);t&&(t.resolvers=void 0)}function Xr(e){if(!e)return 0;const n=e.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(e)*n}function $n(e,n){return e.getPropertyValue(n).split(",").map(o=>o.trim())}function Kv(e){const n=$n(e,"transition-property"),t=$n(e,"transition-duration"),o=$n(e,"transition-delay"),r={propertyName:"",duration:0,animationName:void 0};for(let i=0;i<n.length;i++){const s=Xr(o[i])+Xr(t[i]);s>r.duration&&(r.propertyName=n[i],r.duration=s)}return r}function Jv(e){const n=$n(e,"animation-name"),t=$n(e,"animation-delay"),o=$n(e,"animation-duration"),r=$n(e,"animation-iteration-count"),i={animationName:"",propertyName:void 0,duration:0};for(let s=0;s<n.length;s++){const a=Xr(t[s])+Xr(o[s]),l=r[s];a>i.duration&&l!=="infinite"&&(i.animationName=n[s],i.duration=a)}return i}function hh(e,n){return e!==void 0&&e.duration>n.duration}function ph(e){return(e.animationName!=null||e.propertyName!=null)&&e.duration>0}function e2(e,n){const t=getComputedStyle(e),o=Jv(t),r=Kv(t),i=o.duration>r.duration?o:r;hh(n.get(e),i)||ph(i)&&n.set(e,i)}function n2(e,n,t){if(!t)return;const o=e.getAnimations();return o.length===0?e2(e,n):t2(e,n,o)}function t2(e,n,t){let o={animationName:void 0,propertyName:void 0,duration:0};for(const r of t){const i=r.effect?.getTiming();if(i?.iterations===1/0)continue;const s=typeof i?.duration=="number"?i.duration:0;let a=(i?.delay??0)+s;const l=r.playbackRate;l!==void 0&&l!==0&&l!==1&&(a/=Math.abs(l));let c,d;r.animationName?d=r.animationName:c=r.transitionProperty,a>=o.duration&&(o={animationName:d,propertyName:c,duration:a})}hh(n.get(e),o)||ph(o)&&n.set(e,o)}const st=new Set;var _l=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(_l||{});const yt=new T(""),Yc=new Set;function An(e){Yc.has(e)||(Yc.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}let Cl=(()=>{class e{impl=null;execute(){this.impl?.execute()}static ɵprov=K({token:e,providedIn:"root",factory:()=>new e})}return e})();const gh=[0,1,2,3];let mh=(()=>{class e{ngZone=p(Ue);scheduler=p(Xo);errorHandler=p(no,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){p(yt,{optional:!0})}execute(){const t=this.sequences.size>0;t&&j(F.AfterRenderHooksStart),this.executing=!0;for(const o of gh)for(const r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[o]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{const i=r.hooks[o];return i(r.pipelinedValue)},r.snapshot))}catch(i){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(i)}this.executing=!1;for(const o of this.sequences)o.afterRun(),o.once&&(this.sequences.delete(o),o.destroy());for(const o of this.deferredRegistrations)this.sequences.add(o);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),t&&j(F.AfterRenderHooksEnd)}register(t){const{view:o}=t;o!==void 0?((o[Et]??=[]).push(t),eo(o),o[I]|=8192):this.executing?this.deferredRegistrations.add(t):this.addSequence(t)}addSequence(t){this.sequences.add(t),this.scheduler.notify(7)}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,o){return o?o.run(_l.AFTER_NEXT_RENDER,t):t()}static ɵprov=K({token:e,providedIn:"root",factory:()=>new e})}return e})();class vh{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,t,o,r,i,s=null){this.impl=n,this.hooks=t,this.view=o,this.once=r,this.snapshot=s,this.unregisterOnDestroy=i?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();const n=this.view?.[Et];n&&(this.view[Et]=n.filter(t=>t!==this))}}function kl(e,n){const t=n?.injector??p(Be);return An("NgAfterNextRender"),r2(e,t,n,!0)}function o2(e){return e instanceof Function?[void 0,void 0,e,void 0]:[e.earlyRead,e.write,e.mixedReadWrite,e.read]}function r2(e,n,t,o){const r=n.get(Cl);r.impl??=n.get(mh);const i=n.get(yt,null,{optional:!0}),s=t?.manualCleanup!==!0?n.get(an):null,a=n.get(Fi,null,{optional:!0}),l=new vh(r.impl,o2(e),a?.view,o,s,i?.snapshot(null));return r.impl.register(l),l}const Jo=new T("",{factory:()=>{const e=p(je),n=new Set;return e.onDestroy(()=>n.clear()),{queue:n,isScheduled:!1,scheduler:null,injector:e}}});function bh(e,n,t){const o=e.get(Jo);if(Array.isArray(n))for(const r of n)o.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else o.queue.add(n),t?.detachedLeaveAnimationFns?.push(n);o.scheduler&&o.scheduler(e)}function i2(e,n){const t=e.get(Jo);if(Array.isArray(n))for(const o of n)t.queue.delete(o);else t.queue.delete(n)}function s2(e,n){const t=e.get(Jo);if(n.detachedLeaveAnimationFns){for(const o of n.detachedLeaveAnimationFns)t.queue.delete(o);n.detachedLeaveAnimationFns=void 0}}function a2(e){const n=e.get(Jo);n.isScheduled||(kl(()=>{n.isScheduled=!1;for(let t of n.queue)t();n.queue.clear()},{injector:n.injector}),n.isScheduled=!0)}function l2(e){const n=e.get(Jo);n.scheduler=a2,n.scheduler(e)}function c2(e,n){for(const[t,o]of n)bh(e,o.animateFns)}function Xc(e,n,t,o){const r=e?.[pn]?.enter;n!==null&&r&&r.has(t.index)&&c2(o,r)}function Kc(e,n,t,o){try{t.get(Ya)}catch{return o(!1)}const r=e?.[pn];r?.enter?.has(n.index)&&i2(t,r.enter.get(n.index).animateFns);const i=d2(e,n,r);if(i.size===0){let s=!1;if(e){const a=[];Hi(e,n,a),s=a.length>0}if(!s)return o(!1)}e&&st.add(e[hn]),bh(t,()=>u2(e,n,r||void 0,i,o),r||void 0)}function d2(e,n,t){const o=new Map,r=t?.leave;if(r&&r.has(n.index)&&o.set(n.index,r.get(n.index)),e&&r)for(const[i,s]of r){if(o.has(i))continue;let l=e[_].data[i].parent;for(;l;){if(l===n){o.set(i,s);break}l=l.parent}}return o}function u2(e,n,t,o,r){const i=[];if(t&&t.leave)for(const[s]of o){if(!t.leave.has(s))continue;const a=t.leave.get(s);for(const l of a.animateFns){const{promise:c}=l();i.push(c)}t.detachedLeaveAnimationFns=void 0}if(e&&Hi(e,n,i),i.length>0){const s=t||e?.[pn];if(s){const a=s.running;a&&i.push(a),s.running=Promise.allSettled(i),h2(e,s.running,r)}else Promise.allSettled(i).then(()=>{e&&st.delete(e[hn]),r(!0)})}else e&&st.delete(e[hn]),r(!1)}function Hi(e,n,t){if(n.type&12){const r=e[n.index];if(yn(r))for(let i=J;i<r.length;i++){const s=r[i];s[_].type===2&&f2(s,t)}}let o=n.child;for(;o;)Hi(e,o,t),o=o.next}function f2(e,n){const t=e[pn];if(t&&t.leave)for(const r of t.leave.values())for(const i of r.animateFns){const{promise:s}=i();n.push(s)}let o=e[_].firstChild;for(;o;)Hi(e,o,n),o=o.next}function h2(e,n,t){n.then(()=>{e[pn]?.running===n&&(e[pn].running=void 0,st.delete(e[hn])),t(!0)})}function kt(e,n,t,o,r,i,s,a){if(r!=null){let l,c=!1;yn(r)?l=r:Fn(r)&&(c=!0,r=r[En]);const d=gn(r);e===0&&o!==null?(Xc(a,o,i,t),s==null?oh(n,o,d):Yr(n,o,d,s||null,!0)):e===1&&o!==null?(Xc(a,o,i,t),Yr(n,o,d,s||null,!0),Gv(i,d,a)):e===2?(a?.[pn]?.leave?.has(i.index)&&uh(i,d,a),fo.delete(d),Kc(a,i,t,u=>{if(fo.has(d)){fo.delete(d);return}rh(n,d,c,u)})):e===3&&(fo.delete(d),Kc(a,i,t,()=>{n.destroyNode(d)})),l!=null&&C2(n,e,t,l,i,o,s)}}function p2(e,n){yh(e,n),n[En]=null,n[Ee]=null}function g2(e,n,t,o,r,i){o[En]=r,o[Ee]=n,Ui(e,o,t,1,r,i)}function yh(e,n){n[fn].changeDetectionScheduler?.notify(9),Ui(e,n,n[U],2,null,null)}function m2(e){let n=e[Eo];if(!n)return us(e[_],e);for(;n;){let t=null;if(Fn(n))t=n[Eo];else{const o=n[J];o&&(t=o)}if(!t){for(;n&&!n[Ke]&&n!==e;)Fn(n)&&us(n[_],n),n=n[ge];n===null&&(n=e),Fn(n)&&us(n[_],n),t=n&&n[Ke]}n=t}}function Sl(e,n){const t=e[Ht],o=t.indexOf(n);t.splice(o,1)}function Bi(e,n){if(Jt(n))return;const t=n[U];t.destroyNode&&Ui(e,n,t,3,null,null),m2(n)}function us(e,n){if(Jt(n))return;const t=S(null);try{n[I]&=-129,n[I]|=256,n[Ne]&&qo(n[Ne]),b2(e,n),v2(e,n),n[_].type===1&&n[U].destroy();const o=n[nt];if(o!==null&&yn(n[ge])){o!==n[ge]&&Sl(o,n);const r=n[On];r!==null&&r.detachView(e)}ea(n)}finally{S(t)}}function v2(e,n){const t=e.cleanup,o=n[Nr];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){const a=t[s+3];a>=0?o[a]():o[-a].unsubscribe(),s+=2}else{const a=o[t[s+1]];t[s].call(a)}o!==null&&(n[Nr]=null);const r=n[Dn];if(r!==null){n[Dn]=null;for(let s=0;s<r.length;s++){const a=r[s];a()}}const i=n[tt];if(i!==null){n[tt]=null;for(const s of i)s.destroy()}}function b2(e,n){let t;if(e!=null&&(t=e.destroyHooks)!=null)for(let o=0;o<t.length;o+=2){const r=n[t[o]];if(!(r instanceof Ko)){const i=t[o+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const a=r[i[s]],l=i[s+1];j(F.LifecycleHookStart,a,l);try{l.call(a)}finally{j(F.LifecycleHookEnd,a,l)}}else{j(F.LifecycleHookStart,r,i);try{i.call(r)}finally{j(F.LifecycleHookEnd,r,i)}}}}}function wh(e,n,t){return y2(e,n.parent,t)}function y2(e,n,t){let o=n;for(;o!==null&&o.type&168;)n=o,o=n.parent;if(o===null)return t[En];if(mt(o)){const{encapsulation:r}=e.data[o.directiveStart+o.componentOffset];if(r===Sn.None||r===Sn.Emulated)return null}return Ge(o,t)}function xh(e,n,t){return x2(e,n,t)}function w2(e,n,t){return e.type&40?Ge(e,t):null}let x2=w2;function Ol(e,n,t,o){const r=wh(e,o,n),i=n[U],s=o.parent||n[Ee],a=xh(s,o,n);if(r!=null)if(Array.isArray(t))for(let l=0;l<t.length;l++)$c(i,r,t[l],a,!1);else $c(i,r,t,a,!1)}function ho(e,n){if(n!==null){const t=n.type;if(t&3)return Ge(n,e);if(t&4)return ra(-1,e[n.index]);if(t&8){const o=n.child;if(o!==null)return ho(e,o);{const r=e[n.index];return yn(r)?ra(-1,r):gn(r)}}else{if(t&128)return ho(e,n.next);if(t&32)return wl(n,e)()||gn(e[n.index]);{const o=_h(e,n);if(o!==null){if(Array.isArray(o))return o[0];const r=rt(e[He]);return ho(r,o)}else return ho(e,n.next)}}}return null}function _h(e,n){if(n!==null){const o=e[He][Ee],r=n.projection;return o.projection[r]}return null}function ra(e,n){const t=J+e+1;if(t<n.length){const o=n[t],r=o[_].firstChild;if(r!==null)return ho(o,r)}return n[ot]}function Il(e,n,t,o,r,i,s){for(;t!=null;){const a=o[rn];if(t.type===128){t=t.next;continue}const l=o[t.index],c=t.type;if(s&&n===0&&(l&&Ut(gn(l),o),t.flags|=2),!gl(t))if(c&8)Il(e,n,t.child,o,r,i,!1),kt(n,e,a,r,l,t,i,o);else if(c&32){const d=wl(t,o);let u;for(;u=d();)kt(n,e,a,r,u,t,i,o);kt(n,e,a,r,l,t,i,o)}else c&16?Ch(e,n,o,t,r,i):kt(n,e,a,r,l,t,i,o);t=s?t.projectionNext:t.next}}function Ui(e,n,t,o,r,i){Il(t,o,e.firstChild,n,r,i,!1)}function _2(e,n,t){const o=n[U],r=wh(e,t,n),i=t.parent||n[Ee];let s=xh(i,t,n);Ch(o,0,n,t,r,s)}function Ch(e,n,t,o,r,i){const s=t[He],l=s[Ee].projection[o.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){const d=l[c];kt(n,e,t[rn],r,d,o,i,t)}else{let c=l;const d=s[ge];$f(o)&&(c.flags|=128),Il(e,n,c,d,r,i,!0)}}function C2(e,n,t,o,r,i,s){const a=o[ot],l=gn(o);a!==l&&kt(n,e,t,i,a,r,s);for(let c=J;c<o.length;c++){const d=o[c];Ui(d[_],d,e,n,i,a)}}function k2(e,n,t,o,r){if(n)r?e.addClass(t,o):e.removeClass(t,o);else{let i=o.indexOf("-")===-1?void 0:qn.DashCase;r==null?e.removeStyle(t,o,i):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),i|=qn.Important),e.setStyle(t,o,r,i))}}function Tl(e,n,t,o,r,i,s,a,l,c,d){const u=ee+o,f=u+r,h=S2(u,f),g=typeof c=="function"?c():c;return h[_]={type:e,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:n,data:h.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof i=="function"?i():i,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:g,incompleteFirstPass:!1,ssrId:d}}function S2(e,n){const t=[];for(let o=0;o<n;o++)t.push(o<e?null:Me);return t}function O2(e){const n=e.tView;return n===null||n.incompleteFirstPass?e.tView=Tl(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):n}function El(e,n,t,o,r,i,s,a,l,c,d){const u=n.blueprint.slice();return u[En]=r,u[I]=o|4|128|8|64|1024,(c!==null||e&&e[I]&2048)&&(u[I]|=2048),Wu(u),u[ge]=u[gt]=e,u[de]=t,u[fn]=s||e&&e[fn],u[U]=a||e&&e[U],u[rn]=l||e&&e[rn]||null,u[Ee]=i,u[hn]=tv(),u[jt]=d,u[Uu]=c,u[He]=n.type==2?e[He]:u,u}function I2(e,n,t){const o=Ge(n,e),r=O2(t),i=e[fn].rendererFactory,s=Ml(e,El(e,r,null,kh(t),o,n,null,i.createRenderer(o,t),null,null,null));return e[n.index]=s}function kh(e){let n=16;return e.signals?n=4096:e.onPush&&(n=64),n}function Sh(e,n,t,o){if(t===0)return-1;const r=n.length;for(let i=0;i<t;i++)n.push(o),e.blueprint.push(o),e.data.push(null);return r}function Ml(e,n){return e[Eo]?e[Ac][Ke]=n:e[Eo]=n,e[Ac]=n,n}function b(e=1){Oh(Y(),C(),Mn()+e)}function Oh(e,n,t,o){if((n[I]&3)===3){const i=e.preOrderCheckHooks;i!==null&&wr(n,i,t)}else{const i=e.preOrderHooks;i!==null&&xr(n,i,0,t)}it(t)}var Vi=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(Vi||{});function at(e,n,t,o){const r=S(null);try{const[i,s,a]=e.inputs[t];let l=null;(s&Vi.SignalBased)!==0&&(l=n[i][he]),l!==null&&l.transformFn!==void 0?o=l.transformFn(o):a!==null&&(o=a.call(n,o)),e.setInput!==null?e.setInput(n,l,o,t,i):Tf(n,l,i,o)}finally{S(r)}}function Ih(e,n,t,o,r){const i=Mn(),s=o&2;try{it(-1),s&&n.length>ee&&Oh(e,n,ee,!1);const a=s?F.TemplateUpdateStart:F.TemplateCreateStart;j(a,r,t),t(o,r)}finally{it(i);const a=s?F.TemplateUpdateEnd:F.TemplateCreateEnd;j(a,r,t)}}function qi(e,n,t){A2(e,n,t),(t.flags&64)===64&&P2(e,n,t)}function er(e,n,t=Ge){const o=n.localNames;if(o!==null){let r=n.index+1;for(let i=0;i<o.length;i+=2){const s=o[i+1],a=s===-1?t(n,e):e[s];e[r++]=a}}}function T2(e,n,t,o){const i=o.get(lv,Xf)||t===Sn.ShadowDom||t===Sn.ExperimentalIsolatedShadowDom;return e.selectRootElement(n,i)}function E2(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function Th(e,n,t,o,r,i){const s=n[_];if(Ll(e,s,n,t,o)){mt(e)&&M2(n,e.index);return}e.type&3&&(t=E2(t)),Eh(e,n,t,o,r,i)}function Eh(e,n,t,o,r,i){if(e.type&3){const s=Ge(e,n);o=i!=null?i(o,e.value||"",t):o,r.setProperty(s,t,o)}else e.type&12}function M2(e,n){const t=mn(n,e);t[I]&16||(t[I]|=64)}function A2(e,n,t){const o=t.directiveStart,r=t.directiveEnd;mt(t)&&I2(n,t,e.data[o+t.componentOffset]),e.firstCreatePass||Wr(t,n);const i=t.initialInputs;for(let s=o;s<r;s++){const a=e.data[s],l=Qr(n,e,s,t);if(Ut(l,n),i!==null&&F2(n,s-o,l,a,t,i),In(a)){const c=mn(t.index,n);c[de]=Qr(n,e,s,t)}}}function P2(e,n,t){const o=t.directiveStart,r=t.directiveEnd,i=t.index,s=r1();try{it(i);for(let a=o;a<r;a++){const l=e.data[a],c=n[a];Ws(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&R2(l,c)}}finally{it(-1),Ws(s)}}function R2(e,n){e.hostBindings!==null&&e.hostBindings(1,n)}function Al(e,n){const t=e.directiveRegistry;let o=null;if(t)for(let r=0;r<t.length;r++){const i=t[r];ch(n,i.selectors,!1)&&(o??=[],In(i)?o.unshift(i):o.push(i))}return o}function L2(e,n,t,o,r,i){const s=Ge(e,n);D2(n[U],s,i,e.value,t,o,r)}function D2(e,n,t,o,r,i,s){if(i==null)s?.(i,o||"",r),e.removeAttribute(n,r,t);else{const a=s==null?Io(i):s(i,o||"",r);e.setAttribute(n,r,a,t)}}function F2(e,n,t,o,r,i){const s=i[n];if(s!==null)for(let a=0;a<s.length;a+=2){const l=s[a],c=s[a+1];at(o,t,l,c)}}function Pl(e,n,t,o,r){const i=ee+t,s=n[_],a=r(s,n,e,o,t);n[i]=a,Wo(e,!0);const l=e.type===2;return l?(ih(n[U],a,e),(Ym()===0||Zo(e))&&Ut(a,n),Xm()):Ut(a,n),ll()&&(!l||!gl(e))&&Ol(s,n,a,e),e}function Rl(e){let n=e;return rf()?sf():(n=n.parent,Wo(n,!1)),n}function z2(e,n){const t=e[rn];if(!t)return;let o;try{o=t.get(to,null)}catch{o=null}o?.(n)}function Ll(e,n,t,o,r){const i=e.inputs?.[o],s=e.hostDirectiveInputs?.[o];let a=!1;if(s)for(let l=0;l<s.length;l+=2){const c=s[l],d=s[l+1],u=n.data[c];at(u,t[c],d,r),a=!0}if(i)for(const l of i){const c=t[l],d=n.data[l];at(d,c,o,r),a=!0}return a}function N2(e,n,t,o,r,i){let s=null,a=null,l=null,c=!1;const d=e.directiveToIndex.get(o.type);if(typeof d=="number"?s=d:[s,a,l]=d,a!==null&&l!==null&&e.hostDirectiveInputs?.hasOwnProperty(r)){const u=e.hostDirectiveInputs[r];for(let f=0;f<u.length;f+=2){const h=u[f];if(h>=a&&h<=l){const g=n.data[h],y=u[f+1];at(g,t[h],y,i),c=!0}else if(h>l)break}}return s!==null&&o.inputs.hasOwnProperty(r)&&(at(o,t[s],r,i),c=!0),c}function j2(e,n){const t=mn(n,e),o=t[_];H2(o,t);const r=t[En];r!==null&&t[jt]===null&&(t[jt]=Kf(r,t[rn])),j(F.ComponentStart);try{Dl(o,t,t[de])}finally{j(F.ComponentEnd,t[de])}}function H2(e,n){for(let t=n.length;t<e.blueprint.length;t++)n.push(e.blueprint[t])}function Dl(e,n,t){sl(n);try{const o=e.viewQuery;o!==null&&ta(1,o,t);const r=e.template;r!==null&&Ih(e,n,r,1,t),e.firstCreatePass&&(e.firstCreatePass=!1),n[On]?.finishViewCreation(e),e.staticContentQueries&&Jf(e,n),e.staticViewQueries&&ta(2,e.viewQuery,t);const i=e.components;i!==null&&B2(n,i)}catch(o){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),o}finally{n[I]&=-5,al()}}function B2(e,n){for(let t=0;t<n.length;t++)j2(e,n[t])}function $i(e,n,t,o){const r=S(null);try{const i=n.tView,a=e[I]&4096?4096:16,l=El(e,i,t,a,null,n,null,null,o?.injector??null,o?.embeddedViewInjector??null,o?.dehydratedView??null),c=e[n.index];l[nt]=c;const d=e[On];return d!==null&&(l[On]=d.createEmbeddedView(i)),Dl(i,l,t),l}finally{S(r)}}function Ao(e,n){return!n||n.firstChild===null||$f(e)}function Kr(e,n,t,o,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}const i=n[t.index];i!==null&&o.push(gn(i)),yn(i)&&U2(i,o);const s=t.type;if(s&8)Kr(e,n,t.child,o);else if(s&32){const a=wl(t,n);let l;for(;l=a();)o.push(l)}else if(s&16){const a=_h(n,t);if(Array.isArray(a))o.push(...a);else{const l=rt(n[He]);Kr(l[_],l,a,o,!0)}}t=r?t.projectionNext:t.next}return o}function U2(e,n){for(let t=J;t<e.length;t++){const o=e[t],r=o[_].firstChild;r!==null&&Kr(o[_],o,r,n)}e[ot]!==e[En]&&n.push(e[ot])}function Mh(e){if(e[Et]!==null){for(const n of e[Et])n.impl.addSequence(n);e[Et].length=0}}let Ah=[];function V2(e){return e[Ne]??q2(e)}function q2(e){const n=Ah.pop()??Object.create(G2);return n.lView=e,n}function $2(e){e.lView[Ne]!==e&&(e.lView=null,Ah.push(e))}const G2={...Wt,consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{eo(e.lView)},consumerOnSignalRead(){this.lView[Ne]=this}};function Z2(e){const n=e[Ne]??Object.create(W2);return n.lView=e,n}const W2={...Wt,consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let n=rt(e.lView);for(;n&&!Ph(n[_]);)n=rt(n);n&&Qu(n)},consumerOnSignalRead(){this.lView[Ne]=this}};function Ph(e){return e.type!==2}function Rh(e){if(e[tt]===null)return;let n=!0;for(;n;){let t=!1;for(const o of e[tt])o.dirty&&(t=!0,o.zone===null||Zone.current===o.zone?o.run():o.zone.run(()=>o.run()));n=t&&!!(e[I]&8192)}}const Q2=100;function Lh(e,n=0){const o=e[fn].rendererFactory;o.begin?.();try{Y2(e,n)}finally{o.end?.()}}function Y2(e,n){const t=af();try{Ur(!0),ia(e,n);let o=0;for(;Br(e);){if(o===Q2)throw new x(103,!1);o++,ia(e,1)}}finally{Ur(t)}}function X2(e,n,t,o){if(Jt(n))return;const r=n[I],i=!1,s=!1;sl(n);let a=!0,l=null,c=null;Ph(e)?(c=V2(n),l=Lt(c)):Q0()===null?(a=!1,c=Z2(n),l=Lt(c)):n[Ne]&&(qo(n[Ne]),n[Ne]=null);try{Wu(n),n1(e.bindingStartIndex),t!==null&&Ih(e,n,t,2,o);const d=(r&3)===3;if(!i)if(d){const h=e.preOrderCheckHooks;h!==null&&wr(n,h,null)}else{const h=e.preOrderHooks;h!==null&&xr(n,h,0,null),cs(n,0)}if(s||K2(n),Rh(n),Dh(n,0),e.contentQueries!==null&&Jf(e,n),!i)if(d){const h=e.contentCheckHooks;h!==null&&wr(n,h)}else{const h=e.contentHooks;h!==null&&xr(n,h,1),cs(n,1)}eb(e,n);const u=e.components;u!==null&&zh(n,u,0);const f=e.viewQuery;if(f!==null&&ta(2,f,o),!i)if(d){const h=e.viewCheckHooks;h!==null&&wr(n,h)}else{const h=e.viewHooks;h!==null&&xr(n,h,2),cs(n,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),n[ls]){for(const h of n[ls])h();n[ls]=null}i||(Mh(n),n[I]&=-73)}catch(d){throw eo(n),d}finally{c!==null&&(Vo(c,l),a&&$2(c)),al()}}function Dh(e,n){for(let t=Wf(e);t!==null;t=Qf(t))for(let o=J;o<t.length;o++){const r=t[o];Fh(r,n)}}function K2(e){for(let n=Wf(e);n!==null;n=Qf(n)){if(!(n[I]&2))continue;const t=n[Ht];for(let o=0;o<t.length;o++){const r=t[o];Qu(r)}}}function J2(e,n,t){j(F.ComponentStart);const o=mn(n,e);try{Fh(o,t)}finally{j(F.ComponentEnd,o[de])}}function Fh(e,n){tl(e)&&ia(e,n)}function ia(e,n){const o=e[_],r=e[I],i=e[Ne];let s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(i?.dirty&&Ei(i)),s||=!1,i&&(i.dirty=!1),e[I]&=-9217,s)X2(o,e,o.template,e[de]);else if(r&8192){const a=S(null);try{Rh(e),Dh(e,1);const l=o.components;l!==null&&zh(e,l,1),Mh(e)}finally{S(a)}}}function zh(e,n,t){for(let o=0;o<n.length;o++)J2(e,n[o],t)}function eb(e,n){const t=e.hostBindingOpCodes;if(t!==null)try{for(let o=0;o<t.length;o++){const r=t[o];if(r<0)it(~r);else{const i=r,s=t[++o],a=t[++o];o1(s,i);const l=n[i];j(F.HostBindingsUpdateStart,l);try{a(2,l)}finally{j(F.HostBindingsUpdateEnd,l)}}}}finally{it(-1)}}function Fl(e,n){const t=af()?64:1088;for(e[fn].changeDetectionScheduler?.notify(n);e;){e[I]|=t;const o=rt(e);if(Hr(e)&&!o)return e;e=o}return null}function Nh(e,n,t,o){return[e,!0,0,n,null,o,null,t,null,null]}function jh(e,n){const t=J+n;if(t<e.length)return e[t]}function Gi(e,n,t,o=!0){const r=n[_];if(nb(r,n,e,t),o){const s=ra(t,e),a=n[U],l=a.parentNode(e[ot]);l!==null&&g2(r,e[Ee],a,n,l,s)}const i=n[jt];i!==null&&i.firstChild!==null&&(i.firstChild=null)}function Hh(e,n){const t=Po(e,n);return t!==void 0&&Bi(t[_],t),t}function Po(e,n){if(e.length<=J)return;const t=J+n,o=e[t];if(o){const r=o[nt];r!==null&&r!==e&&Sl(r,o),n>0&&(e[t-1][Ke]=o[Ke]);const i=zr(e,J+n);p2(o[_],o);const s=i[On];s!==null&&s.detachView(i[_]),o[ge]=null,o[Ke]=null,o[I]&=-129}return o}function nb(e,n,t,o){const r=J+o,i=t.length;o>0&&(t[r-1][Ke]=n),o<i-J?(n[Ke]=t[r],Lu(t,J+o,n)):(t.push(n),n[Ke]=null),n[ge]=t;const s=n[nt];s!==null&&t!==s&&Bh(s,n);const a=n[On];a!==null&&a.insertView(e),Gs(n),n[I]|=128}function Bh(e,n){const t=e[Ht],o=n[ge];if(Fn(o))e[I]|=2;else{const r=o[ge][He];n[He]!==r&&(e[I]|=2)}t===null?e[Ht]=[n]:t.push(n)}class Ro{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){const n=this._lView,t=n[_];return Kr(t,n,t.firstChild,[])}constructor(n,t){this._lView=n,this._cdRefInjectingView=t}get context(){return this._lView[de]}set context(n){this._lView[de]=n}get destroyed(){return Jt(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const n=this._lView[ge];if(yn(n)){const t=n[jr],o=t?t.indexOf(this):-1;o>-1&&(Po(n,o),zr(t,o))}this._attachedToViewContainer=!1}Bi(this._lView[_],this._lView)}onDestroy(n){ol(this._lView,n)}markForCheck(){Fl(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[I]&=-129}reattach(){Gs(this._lView),this._lView[I]|=128}detectChanges(){this._lView[I]|=1024,Lh(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new x(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;const n=Hr(this._lView),t=this._lView[nt];t!==null&&!n&&Sl(t,this._lView),yh(this._lView[_],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new x(902,!1);this._appRef=n;const t=Hr(this._lView),o=this._lView[nt];o!==null&&!t&&Bh(o,this._lView),Gs(this._lView)}}let Jr=(()=>{class e{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=tb;constructor(t,o,r){this._declarationLView=t,this._declarationTContainer=o,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,o){return this.createEmbeddedViewImpl(t,o)}createEmbeddedViewImpl(t,o,r){const i=$i(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:o,dehydratedView:r});return new Ro(i)}}return e})();function tb(){return Zi(ae(),C())}function Zi(e,n){return e.type&4?new Jr(n,e,oo(e,n)):null}function ro(e,n,t,o,r){let i=e.data[n];if(i===null)i=ob(e,n,t,o,r),t1()&&(i.flags|=32);else if(i.type&64){i.type=t,i.value=o,i.attrs=r;const s=Km();i.injectorIndex=s===null?-1:s.injectorIndex}return Wo(i,!0),i}function ob(e,n,t,o,r){const i=of(),s=rf(),a=s?i:i&&i.parent,l=e.data[n]=ib(e,a,t,n,o,r);return rb(e,l,i,s),l}function rb(e,n,t,o){e.firstChild===null&&(e.firstChild=n),t!==null&&(o?t.child==null&&n.parent!==null&&(t.child=n):t.next===null&&(t.next=n,n.prev=t))}function ib(e,n,t,o,r,i){let s=n?n.injectorIndex:-1,a=0;return ef()&&(a|=128),{type:t,index:o,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:pf(),attrs:i,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function sb(e){const n=e[Pc]??[],o=e[ge][U],r=[];for(const i of n)i.data[av]!==void 0?r.push(i):ab(i,o);e[Pc]=r}function ab(e,n){let t=0,o=e.firstChild;if(o){const r=e.data[sv];for(;t<r;){const i=o.nextSibling;rh(n,o,!1),o=i,t++}}}let lb=()=>null,cb=()=>null;function sa(e,n){return lb()}function Uh(e,n,t){return cb()}let db=class{};class zl{}let Vh=(()=>{class e{destroyNode=null;static __NG_ELEMENT_ID__=()=>ub()}return e})();function ub(){const e=C(),n=ae(),t=mn(n.index,e);return(Fn(t)?t:e)[U]}let fb=(()=>{class e{static ɵprov=K({token:e,providedIn:"root",factory:()=>null})}return e})();function qh(e){return e.debugInfo?.className||e.type.name||null}const fs={};class hb{injector;parentInjector;constructor(n,t){this.injector=n,this.parentInjector=t}get(n,t,o){const r=this.injector.get(n,fs,o);return r!==fs||t===fs?r:this.parentInjector.get(n,t,o)}}function Nl(e,n,t){return e[n]=t}function pb(e,n){return e[n]}function Ve(e,n,t){if(t===Me)return!1;const o=e[n];return Object.is(o,t)?!1:(e[n]=t,!0)}function $h(e,n,t,o){const r=Ve(e,n,t);return Ve(e,n+1,o)||r}function Wn(e,n,t){return function o(r){const i=o.__ngNativeEl__;i!==void 0&&cv(r,i);const s=mt(e)?mn(e.index,n):n;Fl(s,5);const a=n[de];let l=Jc(n,a,t,r),c=o.__ngNextListenerFn__;for(;c;)l=Jc(n,a,c,r)&&l,c=c.__ngNextListenerFn__;return l}}function Jc(e,n,t,o){const r=S(null);try{return j(F.OutputStart,n,t),t(o)!==!1}catch(i){return z2(e,i),!1}finally{j(F.OutputEnd,n,t),S(r)}}function jl(e,n,t,o,r,i,s,a){const l=Zo(e);let c=!1,d=null;if(!o&&l&&(d=mb(n,t,i,e.index)),d!==null){const u=d.__ngLastListenerFn__||d;u.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{const u=Ge(e,t),f=o?o(u):u;o||(a.__ngNativeEl__=u);const h=r.listen(f,i,a);if(!gb(i)){const g=o?y=>o(gn(y[e.index])):e.index;Gh(g,n,t,i,a,h,!1)}}return c}function gb(e){return e.startsWith("animation")||e.startsWith("transition")}function mb(e,n,t,o){const r=e.cleanup;if(r!=null)for(let i=0;i<r.length-1;i+=2){const s=r[i];if(s===t&&r[i+1]===o){const a=n[Nr],l=r[i+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(i+=2)}return null}function Gh(e,n,t,o,r,i,s){const a=n.firstCreatePass?Xu(n):null,l=Yu(t),c=l.length;l.push(r,i),a&&a.push(o,e,c,(c+1)*(s?-1:1))}function ed(e,n,t,o,r){let i=null,s=null,a=null,l=!1;const c=e.directiveToIndex.get(t.type);if(typeof c=="number"?i=c:[i,s,a]=c,s!==null&&a!==null&&e.hostDirectiveOutputs?.hasOwnProperty(o)){const d=e.hostDirectiveOutputs[o];for(let u=0;u<d.length;u+=2){const f=d[u];if(f>=s&&f<=a)l=!0,ei(e,n,f,d[u+1],o,r);else if(f>a)break}}return t.outputs.hasOwnProperty(o)&&(l=!0,ei(e,n,i,o,o,r)),l}function ei(e,n,t,o,r,i){const s=n[t],a=n[_],c=a.data[t].outputs[o],u=s[c].subscribe(i);Gh(e.index,a,n,r,i,u,!0)}function l6(){vb()}function vb(){const e=C(),n=Y(),t=ae();if(n.firstCreatePass&&yb(n,t),t.controlDirectiveIndex===-1)return;An("NgSignalForms");const o=e[t.controlDirectiveIndex];n.data[t.controlDirectiveIndex].controlDef.create(o,new Zh(e,n,t))}function c6(){bb()}function bb(){const e=C(),n=Y(),t=Qo();if(t.controlDirectiveIndex===-1)return;const o=n.data[t.controlDirectiveIndex].controlDef,r=e[t.controlDirectiveIndex];o.update(r,new Zh(e,n,t))}class Zh{lView;tView;tNode;hasPassThrough;constructor(n,t,o){this.lView=n,this.tView=t,this.tNode=o,this.hasPassThrough=!!(o.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return Ge(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,t){const o=this.tView.data[this.tNode.customControlIndex];ed(this.tNode,this.lView,o,n,Wn(this.tNode,this.lView,t))}listenToCustomControlModel(n){const t=this.tNode.flags&1024?"valueChange":"checkedChange",o=this.tView.data[this.tNode.customControlIndex];ed(this.tNode,this.lView,o,t,Wn(this.tNode,this.lView,n))}listenToDom(n,t){jl(this.tNode,this.tView,this.lView,void 0,this.lView[U],n,t,Wn(this.tNode,this.lView,t))}setInputOnDirectives(n,t){const o=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!o&&!r)return!1;let i=!1;if(o)for(const s of o){if(s===this.tNode.controlDirectiveIndex)continue;const a=this.tView.data[s],l=this.lView[s];at(a,l,n,t),i=!0}if(r)for(let s=0;s<r.length;s+=2){const a=r[s];if(a===this.tNode.controlDirectiveIndex)continue;const l=r[s+1],c=this.tView.data[a],d=this.lView[a];at(c,d,l,t),i=!0}return i}setCustomControlModelInput(n){const t=this.tView.data[this.tNode.customControlIndex],o=this.tNode.flags&1024?"value":"checked";N2(this.tNode,this.tView,this.lView,t,o,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;const t=this.tView.data[this.tNode.customControlIndex];return(t.signalFormsInputPresence??=this._buildCustomControlInputCache(t))[n]===!0}_buildCustomControlInputCache(n){const t={};for(const o in n.inputs)t[o]=!0;if(n.hostDirectives!==null){const o=[...n.hostDirectives];for(;o.length>0;){const r=o.shift();if(typeof r!="function"){for(const s in r.inputs)t[r.inputs[s]]=!0;const i=nd(r.directive);i!==null&&o.push(...i);continue}for(const i of r()){if(typeof i=="function")continue;if(i.inputs)for(let a=0;a<i.inputs.length;a+=2){const l=i.inputs[a+1]||i.inputs[a];t[l]=!0}const s=nd(i.directive);s!==null&&o.push(...s)}}}return t}}function nd(e){return typeof e=="function"&&"ɵdir"in e?e.ɵdir.hostDirectives??null:null}function yb(e,n,t){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(e.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;const o=e.data[n.controlDirectiveIndex].controlDef;if(o.passThroughInput&&(n.inputs?.[o.passThroughInput]?.length??0)>1){n.flags|=4096;return}wb(e,n)}function wb(e,n){for(let t=n.directiveStart;t<n.directiveEnd;t++){const o=e.data[t];if(!(n.directiveToIndex&&!n.directiveToIndex.has(o.type))){if(td(o,"value")){n.flags|=1024,n.customControlIndex=t;return}if(td(o,"checked")){n.flags|=2048,n.customControlIndex=t;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){const t=(o,r)=>{const i=n.hostDirectiveInputs[o],s=n.hostDirectiveOutputs[o+"Change"];if(!i||!s)return!1;for(let a=0;a<i.length;a+=2){const l=i[a];for(let c=0;c<s.length;c+=2){const d=s[c];if(l===d)for(const u of n.directiveToIndex.values()){if(!Array.isArray(u))continue;const[f,h,g]=u;if(l>=h&&l<=g)return n.flags|=r,n.customControlIndex=f,!0}}}return!1};if(t("value",1024)||t("checked",2048))return}}function td(e,n){return xb(e,n)&&_b(e,n+"Change")}function xb(e,n){return n in e.inputs}function _b(e,n){return n in e.outputs}const aa=Symbol("BINDING"),ni=new T("");function ti(e,n,t){let o=t?e.styles:null,r=t?e.classes:null,i=0;if(n!==null)for(let s=0;s<n.length;s++){const a=n[s];if(typeof a=="number")i=a;else if(i==1)r=Hs(r,a);else if(i==2){const l=a,c=n[++s];o=Hs(o,l+": "+c+";")}}t?e.styles=o:e.stylesWithoutHost=o,t?e.classes=r:e.classesWithoutHost=r}function fe(e,n=0){const t=C();if(t===null)return D(e,n);const o=ae();return Hf(o,t,_e(e),n)}function Cb(){const e="invalid";throw new Error(e)}function Wh(e,n,t,o,r){const i=o===null?null:{"":-1},s=r(e,t);if(s!==null){let a=s,l=null,c=null;for(const d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}Ob(e,n,t,a,i,l,c)}i!==null&&o!==null&&kb(t,o,i)}function kb(e,n,t){const o=e.localNames=[];for(let r=0;r<n.length;r+=2){const i=t[n[r+1]];if(i==null)throw new x(-301,!1);o.push(n[r],i)}}function Sb(e,n,t){n.componentOffset=t,(e.components??=[]).push(n.index)}function Ob(e,n,t,o,r,i,s){const a=o.length;let l=null;for(let f=0;f<a;f++){const h=o[f];l===null&&In(h)&&(l=h,Sb(e,t,f)),Ks(Wr(t,n),e,h.type)}Pb(t,e.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let f=0;f<a;f++){const h=o[f];h.providersResolver&&h.providersResolver(h)}let c=!1,d=!1,u=Sh(e,n,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){const h=o[f];if(t.mergedAttrs=Bt(t.mergedAttrs,h.hostAttrs),Tb(e,t,n,u,h),Ab(u,h,r),s!==null&&s.has(h)){const[y,R]=s.get(h);t.directiveToIndex.set(h.type,[u,y+t.directiveStart,R+t.directiveStart])}else(i===null||!i.has(h))&&t.directiveToIndex.set(h.type,u);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);const g=h.type.prototype;!c&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((e.preOrderHooks??=[]).push(t.index),c=!0),!d&&(g.ngOnChanges||g.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(t.index),d=!0),u++}Ib(e,t,i)}function Ib(e,n,t){for(let o=n.directiveStart;o<n.directiveEnd;o++){const r=e.data[o];if(t===null||!t.has(r))od(0,n,r,o),od(1,n,r,o),id(n,o,!1);else{const i=t.get(r);rd(0,n,i,o),rd(1,n,i,o),id(n,o,!0)}}}function od(e,n,t,o){const r=e===0?t.inputs:t.outputs;for(const i in r)if(r.hasOwnProperty(i)){let s;e===0?s=n.inputs??={}:s=n.outputs??={},s[i]??=[],s[i].push(o),Qh(n,i)}}function rd(e,n,t,o){const r=e===0?t.inputs:t.outputs;for(const i in r)if(r.hasOwnProperty(i)){const s=r[i];let a;e===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(o,i),Qh(n,s)}}function Qh(e,n){n==="class"?e.flags|=8:n==="style"&&(e.flags|=16)}function id(e,n,t){const{attrs:o,inputs:r,hostDirectiveInputs:i}=e;if(o===null||!t&&r===null||t&&i===null||yl(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let s=null,a=0;for(;a<o.length;){const l=o[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!t&&r.hasOwnProperty(l)){const c=r[l];for(const d of c)if(d===n){s??=[],s.push(l,o[a+1]);break}}else if(t&&i.hasOwnProperty(l)){const c=i[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],o[a+1]);break}}a+=2}e.initialInputs??=[],e.initialInputs.push(s)}function Tb(e,n,t,o,r){e.data[o]=r;const i=r.factory||(r.factory=Jn(r.type,!0)),s=new Ko(i,In(r),fe,null);e.blueprint[o]=s,t[o]=s,Eb(e,n,o,Sh(e,t,r.hostVars,Me),r)}function Eb(e,n,t,o,r){const i=r.hostBindings;if(i){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);const a=~n.index;Mb(s)!=a&&s.push(a),s.push(t,o,i)}}function Mb(e){let n=e.length;for(;n>0;){const t=e[--n];if(typeof t=="number"&&t<0)return t}return 0}function Ab(e,n,t){if(t){if(n.exportAs)for(let o=0;o<n.exportAs.length;o++)t[n.exportAs[o]]=e;In(n)&&(t[""]=e)}}function Pb(e,n,t){e.flags|=1,e.directiveStart=n,e.directiveEnd=n+t,e.providerIndexes=n}function Hl(e,n,t,o,r,i,s,a){const l=n[_],c=l.consts,d=vn(c,s),u=ro(l,e,t,o,d);return Wh(l,n,u,vn(c,a),r),u.mergedAttrs=Bt(u.mergedAttrs,u.attrs),u.attrs!==null&&ti(u,u.attrs,!1),u.mergedAttrs!==null&&ti(u,u.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,u),u}function Bl(e,n){Af(e,n),qu(n)&&e.queries.elementEnd(n)}function Rb(e,n,t,o,r,i){const s=n.consts,a=vn(s,r),l=ro(n,e,t,o,a);if(l.mergedAttrs=Bt(l.mergedAttrs,l.attrs),i!=null){const c=vn(s,i);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&ti(l,l.attrs,!1),l.mergedAttrs!==null&&ti(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}const Yh=typeof ShadowRoot<"u",Lb=typeof Document<"u";function Db(e){return Object.keys(e).map(n=>{const[t,o,r]=e[n],i={propName:t,templateName:n,isSignal:(o&Vi.SignalBased)!==0};return r&&(i.transform=r),i})}function Fb(e){return Object.keys(e).map(n=>({propName:e[n],templateName:n}))}function zb(e,n,t){let o=n instanceof je?n:n?.injector;return o&&e.getStandaloneInjector!==null&&(o=e.getStandaloneInjector(o)||o),o?new hb(t,o):t}function Nb(e){const n=e.get(zl,null);if(n===null)throw new x(407,!1);const t=e.get(fb,null),o=e.get(Xo,null),r=e.get(yt,null,{optional:!0});return{rendererFactory:n,sanitizer:t,changeDetectionScheduler:o,ngReflect:!1,tracingService:r}}function jb(e,n){const t=Bb(e);return th(n,t,t==="svg"?$u:t==="math"?Vm:null)}function Hb(e){if(e?.toLowerCase()==="script")throw new x(905,!1)}function Bb(e){return(e.selectors[0][0]||"div").toLowerCase()}class Ul{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=Db(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=Fb(this.componentDef.outputs),this.cachedOutputs}constructor(n,t){this.componentDef=n,this.ngModule=t,this.componentType=n.type,this.selector=jv(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!t}create(n,t,o,r,i,s){j(F.DynamicComponentStart);const a=S(null);try{const l=this.componentDef,c=zb(l,r||this.ngModule,n),d=Nb(c),u=d.tracingService;return u&&u.componentCreate?u.componentCreate(qh(l),()=>this.createComponentRef(d,c,t,o,i,s)):this.createComponentRef(d,c,t,o,i,s)}finally{S(a)}}createComponentRef(n,t,o,r,i,s){const a=this.componentDef,l=Ub(r,a,s,i),c=n.rendererFactory.createRenderer(null,a),d=r?T2(c,r,a.encapsulation,t):jb(a,c);Hb(d?.tagName);const u=t.get(ni,null),f=Vb(d,()=>t.get(Se,null)??iv());u&&u.addHost(f);const h=s?.some(sd)||i?.some(R=>typeof R!="function"&&R.bindings.some(sd)),g=El(null,l,null,512|kh(a),null,null,n,c,t,null,Kf(d,t,!0));u&&Yh&&f instanceof ShadowRoot&&ol(g,()=>{u.removeHost(f)}),g[ee]=d,sl(g);let y=null;try{const R=Hl(ee,g,2,"#host",()=>l.directiveRegistry,!0,0);ih(c,d,R),Ut(d,g),qi(l,g,R),ml(l,R,g),Bl(l,R),o!==void 0&&Gb(R,this.ngContentSelectors,o),y=mn(R.index,g),g[de]=y[de],Dl(l,g,null)}catch(R){throw y!==null&&ea(y),ea(g),R}finally{j(F.DynamicComponentEnd),al()}return new $b(this.componentType,g,!!h)}}function Ub(e,n,t,o){const r=e?["ng-version","22.0.8"]:Hv(n.selectors[0]);let i=null,s=null,a=0;if(t)for(const d of t)a+=d[aa].requiredVars,d.create&&(d.targetIdx=0,(i??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(o)for(let d=0;d<o.length;d++){const u=o[d];if(typeof u!="function")for(const f of u.bindings){a+=f[aa].requiredVars;const h=d+1;f.create&&(f.targetIdx=h,(i??=[]).push(f)),f.update&&(f.targetIdx=h,(s??=[]).push(f))}}const l=[n];if(o)for(const d of o){const u=typeof d=="function"?d:d.type,f=Tu(u);l.push(f)}return Tl(0,null,qb(i,s),1,a,l,null,null,null,[r],null)}function Vb(e,n){const t=e.getRootNode?.();return Lb&&t instanceof Document?t.head:t&&Yh&&t instanceof ShadowRoot?t:n().head}function qb(e,n){return!e&&!n?null:t=>{if(t&1&&e)for(const o of e)o.create();if(t&2&&n)for(const o of n)o.update()}}function sd(e){const n=e[aa].kind;return n==="input"||n==="twoWay"}class $b extends db{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,t,o){super(),this._rootLView=t,this._hasInputBindings=o,this._tNode=nl(t[_],ee),this.location=oo(this._tNode,t),this.instance=mn(this._tNode.index,t)[de],this.hostView=this.changeDetectorRef=new Ro(t,void 0),this.componentType=n}setInput(n,t){this._hasInputBindings;const o=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),t))return;const r=this._rootLView;Ll(o,r[_],r,n,t),this.previousInputValues.set(n,t);const i=mn(o.index,r);Fl(i,1)}get injector(){return new bo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}}function Gb(e,n,t){const o=e.projection=[];for(let r=0;r<n.length;r++){const i=t[r];o.push(i!=null&&i.length?Array.from(i):null)}}let io=(()=>{class e{static __NG_ELEMENT_ID__=Zb}return e})();function Zb(){const e=ae();return Xh(e,C())}class Vl extends io{_lContainer;_hostTNode;_hostLView;constructor(n,t,o){super(),this._lContainer=n,this._hostTNode=t,this._hostLView=o}get element(){return oo(this._hostTNode,this._hostLView)}get injector(){return new bo(this._hostTNode,this._hostLView)}get parentInjector(){const n=pl(this._hostTNode,this._hostLView);if(Lf(n)){const t=Gr(n,this._hostLView),o=$r(n),r=t[_].data[o+8];return new bo(r,t)}else return new bo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){const t=ad(this._lContainer);return t!==null&&t[n]||null}get length(){return this._lContainer.length-J}createEmbeddedView(n,t,o){let r,i;typeof o=="number"?r=o:o!=null&&(r=o.index,i=o.injector);const s=sa(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(t||{},i,s);return this.insertImpl(a,r,Ao(this._hostTNode,s)),a}createComponent(n,t,o,r,i,s,a){let l;const c=t||{};l=c.index,o=c.injector,r=c.projectableNodes,i=c.environmentInjector||c.ngModuleRef,s=c.directives,a=c.bindings;const d=new Ul(zt(n)),u=o||this.parentInjector;if(!i&&d.ngModule==null){const G=this.parentInjector.get(je,null);G&&(i=G)}const f=zt(d.componentType??{}),h=sa(this._lContainer,f?.id??null),y=d.create(u,r,null,i,s,a);return this.insertImpl(y.hostView,l,Ao(this._hostTNode,h)),y}insert(n,t){return this.insertImpl(n,t,!0)}insertImpl(n,t,o){const r=n._lView;if(Gm(r)){const a=this.indexOf(n);if(a!==-1)this.detach(a);else{const l=r[ge],c=new Vl(l,l[Ee],l[ge]);c.detach(c.indexOf(n))}}const i=this._adjustIndex(t),s=this._lContainer;return Gi(s,r,i,o),n.attachToViewContainerRef(),Lu(hs(s),i,n),n}move(n,t){return this.insert(n,t)}indexOf(n){const t=ad(this._lContainer);return t!==null?t.indexOf(n):-1}remove(n){const t=this._adjustIndex(n,-1),o=Po(this._lContainer,t);o&&(zr(hs(this._lContainer),t),Bi(o[_],o))}detach(n){const t=this._adjustIndex(n,-1),o=Po(this._lContainer,t);return o&&zr(hs(this._lContainer),t)!=null?new Ro(o):null}_adjustIndex(n,t=0){return n??this.length+t}}function ad(e){return e[jr]}function hs(e){return e[jr]||(e[jr]=[])}function Xh(e,n){let t;const o=n[e.index];return yn(o)?t=o:(t=Nh(o,n,null,e),n[e.index]=t,Ml(n,t)),Qb(t,n,e,o),new Vl(t,e,n)}function Wb(e,n){const t=e[U],o=t.createComment(""),r=Ge(n,e),i=t.parentNode(r);return Yr(t,i,o,t.nextSibling(r),!1),o}let Qb=Yb;function Yb(e,n,t,o){if(e[ot])return;let r;t.type&8?r=gn(o):r=Wb(n,t),e[ot]=r}class ql{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new ql(this.queryList)}setDirty(){this.queryList.setDirty()}}class $l{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){const t=n.queries;if(t!==null){const o=n.contentQueries!==null?n.contentQueries[0]:t.length,r=[];for(let i=0;i<o;i++){const s=t.getByIndex(i),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new $l(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let t=0;t<this.queries.length;t++)Ql(n,t).matches!==null&&this.queries[t].setDirty()}}class Kh{flags;read;predicate;constructor(n,t,o=null){this.flags=t,this.read=o,typeof n=="string"?this.predicate=ty(n):this.predicate=n}}class Gl{queries;constructor(n=[]){this.queries=n}elementStart(n,t){for(let o=0;o<this.queries.length;o++)this.queries[o].elementStart(n,t)}elementEnd(n){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(n)}embeddedTView(n){let t=null;for(let o=0;o<this.length;o++){const r=t!==null?t.length:0,i=this.getByIndex(o).embeddedTView(n,r);i&&(i.indexInDeclarationView=o,t!==null?t.push(i):t=[i])}return t!==null?new Gl(t):null}template(n,t){for(let o=0;o<this.queries.length;o++)this.queries[o].template(n,t)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}}class Zl{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,t=-1){this.metadata=n,this._declarationNodeIndex=t}elementStart(n,t){this.isApplyingToNode(t)&&this.matchTNode(n,t)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,t){this.elementStart(n,t)}embeddedTView(n,t){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,t),new Zl(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){const t=this._declarationNodeIndex;let o=n.parent;for(;o!==null&&o.type&8&&o.index!==t;)o=o.parent;return t===(o!==null?o.index:-1)}return this._appliesToNextNode}matchTNode(n,t){const o=this.metadata.predicate;if(Array.isArray(o))for(let r=0;r<o.length;r++){const i=o[r];this.matchTNodeWithReadOption(n,t,Xb(t,i)),this.matchTNodeWithReadOption(n,t,_r(t,n,i,!1,!1))}else o===Jr?t.type&4&&this.matchTNodeWithReadOption(n,t,-1):this.matchTNodeWithReadOption(n,t,_r(t,n,o,!1,!1))}matchTNodeWithReadOption(n,t,o){if(o!==null){const r=this.metadata.read;if(r!==null)if(r===bn||r===io||r===Jr&&t.type&4)this.addMatch(t.index,-2);else{const i=_r(t,n,r,!1,!1);i!==null&&this.addMatch(t.index,i)}else this.addMatch(t.index,o)}}addMatch(n,t){this.matches===null?this.matches=[n,t]:this.matches.push(n,t)}}function Xb(e,n){const t=e.localNames;if(t!==null){for(let o=0;o<t.length;o+=2)if(t[o]===n)return t[o+1]}return null}function Kb(e,n){return e.type&11?oo(e,n):e.type&4?Zi(e,n):null}function Jb(e,n,t,o){return t===-1?Kb(n,e):t===-2?ey(e,n,o):Qr(e,e[_],t,n)}function ey(e,n,t){if(t===bn)return oo(n,e);if(t===Jr)return Zi(n,e);if(t===io)return Xh(n,e)}function Jh(e,n,t,o){const r=n[On].queries[o];if(r.matches===null){const i=e.data,s=t.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){const c=s[l];if(c<0)a.push(null);else{const d=i[c];a.push(Jb(n,d,s[l+1],t.metadata.read))}}r.matches=a}return r.matches}function la(e,n,t,o){const r=e.queries.getByIndex(t),i=r.matches;if(i!==null){const s=Jh(e,n,r,t);for(let a=0;a<i.length;a+=2){const l=i[a];if(l>0)o.push(s[a/2]);else{const c=i[a+1],d=n[-l];for(let u=J;u<d.length;u++){const f=d[u];f[nt]===f[ge]&&la(f[_],f,c,o)}if(d[Ht]!==null){const u=d[Ht];for(let f=0;f<u.length;f++){const h=u[f];la(h[_],h,c,o)}}}}}return o}function Wl(e,n){return e[On].queries[n].queryList}function ep(e,n,t){const o=new ev((t&4)===4);return Qm(e,n,o,o.destroy),(n[On]??=new $l).queries.push(new ql(o))-1}function ny(e,n,t){const o=Y();return o.firstCreatePass&&(tp(o,new Kh(e,n,t),-1),(n&2)===2&&(o.staticViewQueries=!0)),ep(o,C(),n)}function np(e,n,t,o){const r=Y();if(r.firstCreatePass){const i=ae();tp(r,new Kh(n,t,o),i.index),oy(r,e),(t&2)===2&&(r.staticContentQueries=!0)}return ep(r,C(),t)}function ty(e){return e.split(",").map(n=>n.trim())}function tp(e,n,t){e.queries===null&&(e.queries=new Gl),e.queries.track(new Zl(n,t))}function oy(e,n){const t=e.contentQueries||(e.contentQueries=[]),o=t.length?t[t.length-1]:-1;n!==o&&t.push(e.queries.length-1,n)}function Ql(e,n){return e.queries.getByIndex(n)}function op(e,n){const t=e[_],o=Ql(t,n);return o.crossesNgTemplate?la(t,e,n,[]):Jh(t,e,o,n)}function Yl(e,n,t){let o;const r=Qd(()=>{o._dirtyCounter();const i=iy(o,e);if(n&&i===void 0)throw new x(-951,!1);return i});return o=r[he],o._dirtyCounter=H(0),o._flatValue=void 0,r}function rp(e){return Yl(!0,!1)}function ip(e){return Yl(!0,!0)}function ry(e){return Yl(!1,!1)}function sp(e,n){const t=e[he];t._lView=C(),t._queryIndex=n,t._queryList=Wl(t._lView,n),t._queryList.onDirty(()=>t._dirtyCounter.update(o=>o+1))}function iy(e,n){const t=e._lView,o=e._queryIndex;if(t===void 0||o===void 0||t[I]&4)return n?void 0:on;const r=Wl(t,o),i=op(t,o);return r.reset(i,qf),n?r.first:r._changesDetected||e._flatValue===void 0?e._flatValue=r.toArray():e._flatValue}function Xl(e){return!!e&&typeof e.then=="function"}function sy(e){return!!e&&typeof e.subscribe=="function"}let Lo=class{},ap=class{};class ay extends Lo{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];constructor(n,t,o,r=!0){super(),this.ngModuleType=n,this._parent=t;const i=vm(n);this._bootstrapComponents=Tv(i.bootstrap),this._r3Injector=mf(n,t,[{provide:Lo,useValue:this},...o],$a(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){const n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}}class ly extends ap{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new ay(this.moduleType,n,[])}}class lp extends Lo{injector;instance=null;constructor(n){super();const t=new el([...n.providers,{provide:Lo,useValue:this}],n.parent||Ja(),n.debugName,new Set(["environment"]));this.injector=t,n.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}}function cp(e,n,t=null){return new lp({providers:e,parent:n,debugName:t,runEnvironmentInitializers:!0}).injector}let cy=(()=>{class e{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){const o=Nu(!1,t.type),r=o.length>0?cp([o],this._injector,""):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(const t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static ɵprov=K({token:e,providedIn:"environment",factory:()=>new e(D(je))})}return e})();function le(e){return hl(()=>{const n=dp(e),t={...n,decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection!==Gf.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&e.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(cy).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Sn.Emulated,styles:e.styles||on,_:null,schemas:e.schemas||null,tView:null,id:""};n.standalone&&An("NgStandalone"),up(t);const o=e.dependencies;return t.directiveDefs=ld(o,dy),t.pipeDefs=ld(o,bm),t.id=py(t),t})}function dy(e){return zt(e)||Tu(e)}function uy(e,n){if(e==null)return et;const t={};for(const o in e)if(e.hasOwnProperty(o)){const r=e[o];let i,s,a,l;Array.isArray(r)?(a=r[0],i=r[1],s=r[2]??i,l=r[3]||null):(i=r,s=r,a=Vi.None,l=null),t[i]=[o,a,l],n[i]=s}return t}function fy(e){if(e==null)return et;const n={};for(const t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}function jn(e){return hl(()=>{const n=dp(e);return up(n),n})}function hy(e){return{type:e.type,name:e.name,factory:null,pure:e.pure!==!1,standalone:e.standalone??!0,onDestroy:e.type.prototype.ngOnDestroy||null}}function dp(e){const n={};return{type:e.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputConfig:e.inputs||et,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||on,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:uy(e.inputs,n),outputs:fy(e.outputs),debugInfo:null}}function up(e){e.features?.forEach(n=>n(e))}function ld(e,n){return e?()=>{const t=typeof e=="function"?e():e,o=[];for(const r of t){const i=n(r);i!==null&&o.push(i)}return o}:null}function py(e){let n=0;const t=typeof e.consts=="function"?"":e.consts,o=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,t,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(const i of o.join("|"))n=Math.imul(31,n)+i.charCodeAt(0)<<0;return n+=2147483648,"c"+n}const gy=new T("");let fp=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,o)=>{this.resolve=t,this.reject=o});appInits=p(gy,{optional:!0})??[];injector=p(Be);constructor(){}runInitializers(){if(this.initialized)return;const t=[];for(const r of this.appInits){const i=De(this.injector,r);if(Xl(i))t.push(i);else if(sy(i)){const s=new Promise((a,l)=>{i.subscribe({complete:a,error:l})});t.push(s)}}const o=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{o()}).catch(r=>{this.reject(r)}),t.length===0&&o(),this.initialized=!0}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:e.ɵfac})}return e})();function f6(e){return n=>{n.controlDef={create:(t,o)=>{t?.ɵngControlCreate(o)},update:(t,o)=>{t?.ɵngControlUpdate?.(o)},passThroughInput:e}}}function my(e){return Object.getPrototypeOf(e.prototype).constructor}function vy(e){let n=my(e.type),t=!0;const o=[e];for(;n;){let r;if(In(e))r=n.ɵcmp||n.ɵdir;else{if(n.ɵcmp)throw new x(903,!1);r=n.ɵdir}if(r){if(t){o.push(r);const s=e;s.inputs=ps(e.inputs),s.declaredInputs=ps(e.declaredInputs),s.outputs=ps(e.outputs);const a=r.hostBindings;a&&_y(e,a);const l=r.viewQuery,c=r.contentQueries;if(l&&wy(e,l),c&&xy(e,c),by(e,r),lm(e.outputs,r.outputs),In(r)&&r.data.animation){const d=e.data;d.animation=(d.animation||[]).concat(r.data.animation)}}const i=r.features;if(i)for(let s=0;s<i.length;s++){const a=i[s];a&&a.ngInherit&&a(e),a===vy&&(t=!1)}}n=Object.getPrototypeOf(n)}yy(o)}function by(e,n){for(const t in n.inputs){if(!n.inputs.hasOwnProperty(t)||e.inputs.hasOwnProperty(t))continue;const o=n.inputs[t];o!==void 0&&(e.inputs[t]=o,e.declaredInputs[t]=n.declaredInputs[t])}}function yy(e){let n=0,t=null;for(let o=e.length-1;o>=0;o--){const r=e[o];r.hostVars=n+=r.hostVars,r.hostAttrs=Bt(r.hostAttrs,t=Bt(t,r.hostAttrs))}}function ps(e){return e===et?{}:e===on?[]:e}function wy(e,n){const t=e.viewQuery;t?e.viewQuery=(o,r)=>{n(o,r),t(o,r)}:e.viewQuery=n}function xy(e,n){const t=e.contentQueries;t?e.contentQueries=(o,r,i)=>{n(o,r,i),t(o,r,i)}:e.contentQueries=n}function _y(e,n){const t=e.hostBindings;t?e.hostBindings=(o,r)=>{n(o,r),t(o,r)}:e.hostBindings=n}function hp(e,n,t,o,r,i,s,a){if(t.firstCreatePass){e.mergedAttrs=Bt(e.mergedAttrs,e.attrs);const d=e.tView=Tl(2,e,r,i,s,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,e),d.queries=t.queries.embeddedTView(e))}a&&(e.flags|=a),Wo(e,!1);const l=ky(t,n);ll()&&Ol(t,n,l,e),Ut(l,n);const c=Nh(l,n,l,e);n[o+ee]=c,Ml(n,c)}function Cy(e,n,t,o,r,i,s,a,l,c,d){const u=t+ee;let f;return n.firstCreatePass?(f=ro(n,u,4,s||null,a||null),Wh(n,e,f,vn(n.consts,c),Al),Af(n,f)):f=n.data[u],hp(f,e,n,t,o,r,i,l),Zo(f)&&qi(n,e,f),c!=null&&er(e,f,d),f}function Kl(e,n,t,o,r,i,s,a,l,c,d){const u=t+ee;let f;if(n.firstCreatePass){if(f=ro(n,u,4,s||null,a||null),c!=null){const h=vn(n.consts,c);f.localNames=[];for(let g=0;g<h.length;g+=2)f.localNames.push(h[g],-1)}}else f=n.data[u];return hp(f,e,n,t,o,r,i,l),c!=null&&er(e,f,d),f}function Jl(e,n,t,o,r,i,s,a){const l=C(),c=Y(),d=vn(c.consts,i);return Cy(l,c,e,n,t,o,r,d,void 0,s,a),Jl}let ky=Sy;function Sy(e,n,t,o){return Di(!0),n[U].createComment("")}let Oy=(()=>{class e{log(t){console.log(t)}warn(t){console.warn(t)}static ɵfac=function(o){return new(o||e)};static ɵprov=K({token:e,factory:e.ɵfac,providedIn:"platform"})}return e})();const Iy=new T(""),pp=new T("");function Ty(){tg(()=>{let e="";throw new x(600,e)})}const Ey=10;let oi=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=p(to);afterRenderManager=p(Cl);zonelessEnabled=p(fl);rootEffectScheduler=p(kf);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new nn;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=p(Yo);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(pe(t=>!t))}constructor(){p(yt,{optional:!0})}whenStable(){let t;return new Promise(o=>{t=this.isStable.subscribe({next:r=>{r&&o()}})}).finally(()=>{t.unsubscribe()})}_injector=p(je);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,o){return this.bootstrapImpl(t,o)}bootstrapImpl(t,o,r=Be.NULL){return this._injector.get(Ue).run(()=>{if(j(F.BootstrapComponentStart),!this._injector.get(fp).done){let G="";throw new x(405,G)}const a=zt(t),l=this._injector.get(Lo),c=new Ul(a,l);this.componentTypes.push(t);const{hostElement:d,directives:u,bindings:f}=My(o),h=d||c.selector,g=c.create(r,[],h,l.injector,u,f),y=g.location.nativeElement,R=g.injector.get(Iy,null);return R?.registerApplication(y),g.onDestroy(()=>{this.detachView(g.hostView),Cr(this.components,g),R?.unregisterApplication(y)}),this._loadComponent(g),j(F.BootstrapComponentEnd,g),g})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){j(F.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(_l.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw j(F.ChangeDetectionEnd),new x(101,!1);const t=S(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,S(t),this.afterTick.next(),j(F.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(zl,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<Ey;){j(F.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{j(F.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){const o=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!o&&!Br(r))continue;const i=o&&!this.zonelessEnabled?0:1;Lh(r,i),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Br(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){const o=t;this._views.push(o),o.attachToAppRef(this)}detachView(t){const o=t;Cr(this._views,o),o.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(pp,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Cr(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new x(406,!1);const t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:e.ɵfac})}return e})();function My(e){return e===void 0||typeof e=="string"||e instanceof Element?{hostElement:e}:e}function Cr(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function se(e,n,t,o){const r=C(),i=vt();if(Ve(r,i,n)){Y();const s=Qo();L2(s,r,e,n,t,o)}return se}function kr(e){if(An("NgAnimateLeave"),!xl)return kr;const n=C();if(qv(n))return kr;const o=ae(),r=n[rn].get(Ue);return Xv(ji(n),o,()=>Ay(n,o,e,r)),l2(n[rn]),kr}function Ay(e,n,t,o){const{promise:r,resolve:i}=l1(),s=Ge(n,e),a=e[U];st.add(e[hn]),(ji(e).get(n.index).resolvers??=[]).push(i);const l=Zv(t);return l&&l.length>0?Py(s,n,e,l,a,o):i(),{promise:r,resolve:i}}function Py(e,n,t,o,r,i){Wv(e,r);const s=[],a=ji(t).get(n.index)?.resolvers;let l,c=!1;const d=u=>{if(!(fh(u)!==e&&u.type!=="animation-fallback")&&(u.type==="animation-fallback"||Yv(u,e))){if(c=!0,l&&clearTimeout(l),u.type!=="animation-fallback"&&u.stopPropagation(),yo.delete(e),Zc(n,e),Array.isArray(n.projection))for(const h of o)r.removeClass(e,h);Wc(a,s),Qc(t,n)}};i.runOutsideAngular(()=>{s.push(r.listen(e,"animationend",d)),s.push(r.listen(e,"transitionend",d))}),uh(n,e);for(const u of o)r.addClass(e,u);i.runOutsideAngular(()=>{requestAnimationFrame(()=>{if(c)return;n2(e,yo,xl);const u=yo.get(e);u?(l=setTimeout(()=>{d(new CustomEvent("animation-fallback"))},u.duration+50),s.push(()=>clearTimeout(l))):(Zc(n,e),Wc(a,s),Qc(t,n))})})}class Ry{destroy(n){}updateValue(n,t){}swap(n,t){const o=Math.min(n,t),r=Math.max(n,t),i=this.detach(r);if(r-o>1){const s=this.detach(o);this.attach(o,i),this.attach(r,s)}else this.attach(o,i)}move(n,t){this.attach(t,this.detach(n))}}function gs(e,n,t,o,r){return e===t&&Object.is(n,o)?1:Object.is(r(e,n),r(t,o))?-1:0}function Ly(e,n,t,o){let r,i,s=0,a=e.length-1;if(Array.isArray(n)){S(o);let l=n.length-1;for(S(null);s<=a&&s<=l;){const c=e.at(s),d=n[s],u=gs(s,c,s,d,t);if(u!==0){u<0&&e.updateValue(s,d),s++;continue}const f=e.at(a),h=n[l],g=gs(a,f,l,h,t);if(g!==0){g<0&&e.updateValue(a,h),a--,l--;continue}const y=t(s,c),R=t(a,f),G=t(s,d);if(Object.is(G,R)){const Oe=t(l,h);Object.is(Oe,y)?(e.swap(s,a),e.updateValue(a,h),l--,a--):e.move(a,s),e.updateValue(s,d),s++;continue}if(r??=new ud,i??=dd(e,s,a,t),ca(e,r,s,G))e.updateValue(s,d),s++,a++;else if(i.has(G))r.set(y,e.detach(s)),a--;else{const Oe=e.create(s,n[s]);e.attach(s,Oe),s++,a++}}for(;s<=l;)cd(e,r,t,s,n[s]),s++}else if(n!=null){S(o);const l=n[Symbol.iterator]();S(null);let c=l.next();for(;!c.done&&s<=a;){const d=e.at(s),u=c.value,f=gs(s,d,s,u,t);if(f!==0)f<0&&e.updateValue(s,u),s++,c=l.next();else{r??=new ud,i??=dd(e,s,a,t);const h=t(s,u);if(ca(e,r,s,h))e.updateValue(s,u),s++,a++,c=l.next();else if(!i.has(h))e.attach(s,e.create(s,u)),s++,a++,c=l.next();else{const g=t(s,d);r.set(g,e.detach(s)),a--}}}for(;!c.done;)cd(e,r,t,e.length,c.value),c=l.next()}for(;s<=a;)e.destroy(e.detach(a--));r?.forEach(l=>{e.destroy(l)})}function ca(e,n,t,o){return n!==void 0&&n.has(o)?(e.attach(t,n.get(o)),n.delete(o),!0):!1}function cd(e,n,t,o,r){if(ca(e,n,o,t(o,r)))e.updateValue(o,r);else{const i=e.create(o,r);e.attach(o,i)}}function dd(e,n,t,o){const r=new Set;for(let i=n;i<=t;i++)r.add(o(i,e.at(i)));return r}class ud{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;const t=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(n,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,t){if(this.kvMap.has(n)){let o=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);const r=this._vMap;for(;r.has(o);)o=r.get(o);r.set(o,t)}else this.kvMap.set(n,t)}forEach(n){for(let[t,o]of this.kvMap)if(n(o,t),this._vMap!==void 0){const r=this._vMap;for(;r.has(o);)o=r.get(o),n(o,t)}}}function W(e,n,t,o,r,i,s,a){An("NgControlFlow");const l=C(),c=Y(),d=vn(c.consts,i);return Kl(l,c,e,n,t,o,r,d,256,s,a),gp}function gp(e,n,t,o,r,i,s,a){An("NgControlFlow");const l=C(),c=Y(),d=vn(c.consts,i);return Kl(l,c,e,n,t,o,r,d,512,s,a),gp}function Q(e,n){An("NgControlFlow");const t=C(),o=vt(),r=t[o]!==Me?t[o]:-1,i=r!==-1?ri(t,ee+r):void 0,s=0;if(Ve(t,o,e)){const a=S(null);try{if(i!==void 0&&Hh(i,s),e!==-1){const l=ee+e,c=ri(t,l),d=da(t[_],l),u=Uh(c,d,t),f=$i(t,d,n,{dehydratedView:u});Gi(c,f,s,Ao(d,u))}}finally{S(a)}}else if(i!==void 0){const a=jh(i,s);a!==void 0&&(a[de]=n)}}class Dy{lContainer;$implicit;$index;constructor(n,t,o){this.lContainer=n,this.$implicit=t,this.$index=o}get $count(){return this.lContainer.length-J}}function h6(e){return e}function mp(e,n){return n}class Fy{hasEmptyBlock;trackByFn;liveCollection;constructor(n,t,o){this.hasEmptyBlock=n,this.trackByFn=t,this.liveCollection=o}}function lt(e,n,t,o,r,i,s,a,l,c,d,u,f){An("NgControlFlow");const h=C(),g=Y(),y=l!==void 0,R=C(),G=s,Oe=new Fy(y,G);R[ee+e]=Oe,Kl(h,g,e+1,n,t,o,r,vn(g.consts,i),256)}class zy extends Ry{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,t,o){super(),this.lContainer=n,this.hostLView=t,this.templateTNode=o}get length(){return this.lContainer.length-J}at(n){return this.getLView(n)[de].$implicit}attach(n,t){const o=t[jt];this.needsIndexUpdate||=n!==this.length,Gi(this.lContainer,t,n,Ao(this.templateTNode,o)),Ny(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,jy(this.lContainer,n),Hy(this.lContainer,n)}create(n,t){const o=sa(this.lContainer,this.templateTNode.tView.ssrId);return $i(this.hostLView,this.templateTNode,new Dy(this.lContainer,t,n),{dehydratedView:o})}destroy(n){Bi(n[_],n)}updateValue(n,t){this.getLView(n)[de].$implicit=t}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[de].$index=n}getLView(n){return By(this.lContainer,n)}}function ct(e){const n=S(null),t=Mn();try{const o=C(),r=o[_],i=o[t],s=t+1,a=ri(o,s);if(i.liveCollection===void 0){const c=da(r,s);i.liveCollection=new zy(a,o,c)}else i.liveCollection.reset();const l=i.liveCollection;if(Ly(l,e,i.trackByFn,n),l.updateIndexes(),i.hasEmptyBlock){const c=vt(),d=l.length===0;if(Ve(o,c,d)){const u=t+2,f=ri(o,u);if(d){const h=da(r,u),g=Uh(f,h,o),y=$i(o,h,void 0,{dehydratedView:g});Gi(f,y,0,Ao(h,g))}else r.firstUpdatePass&&sb(f),Hh(f,0)}}}finally{S(n)}}function ri(e,n){return e[n]}function Ny(e,n){if(e.length<=J)return;const t=J+n,o=e[t],r=o?o[pn]:void 0;if(o&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){const i=o[rn];s2(i,r),st.delete(o[hn]),r.detachedLeaveAnimationFns=void 0}}function jy(e,n){if(e.length<=J)return;const t=J+n,o=e[t],r=o?o[pn]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function Hy(e,n){return Po(e,n)}function By(e,n){return jh(e,n)}function da(e,n){return nl(e,n)}function O(e,n,t){const o=C(),r=vt();if(Ve(o,r,n)){Y();const i=Qo();Th(i,o,e,n,o[U],t)}return O}function ua(e,n,t,o,r){Ll(n,e,t,r?"class":"style",o)}function m(e,n,t,o){const r=C(),i=r[_],s=e+ee,a=i.firstCreatePass?Hl(s,r,2,n,Al,Ju(),t,o):i.data[s];if(mt(a)){const l=r[fn].tracingService;if(l&&l.componentCreate){const c=i.data[a.directiveStart+a.componentOffset];return l.componentCreate(qh(c),()=>(fd(e,n,r,a,o),m))}}return fd(e,n,r,a,o),m}function fd(e,n,t,o,r){if(Pl(o,t,e,n,vp),Zo(o)){const i=t[_];qi(i,t,o),ml(i,o,t)}r!=null&&er(t,o)}function v(){const e=Y(),n=ae(),t=Rl(n);return e.firstCreatePass&&Bl(e,t),nf(t)&&tf(),Ku(),t.classesWithoutHost!=null&&j1(t)&&ua(e,t,C(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&H1(t)&&ua(e,t,C(),t.stylesWithoutHost,!1),v}function N(e,n,t,o){return m(e,n,t,o),v(),N}function Qn(e,n,t,o){const r=C(),i=r[_],s=e+ee,a=i.firstCreatePass?Rb(s,i,2,n,t,o):i.data[s];return Pl(a,r,e,n,vp),o!=null&&er(r,a),Qn}function Yn(){const e=ae(),n=Rl(e);return nf(n)&&tf(),Ku(),Yn}function ec(e,n,t,o){return Qn(e,n,t,o),Yn(),ec}let vp=(e,n,t,o,r)=>(Di(!0),th(n[U],o,pf()));function bp(e,n,t){const o=C(),r=o[_],i=e+ee,s=r.firstCreatePass?Hl(i,o,8,"ng-container",Al,Ju(),n,t):r.data[i];if(Pl(s,o,e,"ng-container",Uy),Zo(s)){const a=o[_];qi(a,o,s),ml(a,s,o)}return t!=null&&er(o,s),bp}function yp(){const e=Y(),n=ae(),t=Rl(n);return e.firstCreatePass&&Bl(e,t),yp}function Hn(e,n,t){return bp(e,n,t),yp(),Hn}let Uy=(e,n,t,o,r)=>(Di(!0),xv(n[U],""));function Ae(){return C()}function Vy(e,n,t){const o=C(),r=vt();if(Ve(o,r,n)){Y();const i=Qo();Eh(i,o,e,n,o[U],t)}return Vy}const lo=void 0;function qy(e){const n=Math.floor(Math.abs(e)),t=e.toString().replace(/^[^.]*\.?/,"").length;return n===1&&t===0?1:5}var $y=["en",[["a","p"],["AM","PM"]],[["AM","PM"]],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],lo,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],lo,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",lo,lo,lo],[".",",",";","%","+","-","E","×","‰","∞","NaN",":"],["#,##0.###","#,##0%","¤#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",qy];let ms=Object.create(null);function ln(e){const n=Gy(e);let t=hd(n);if(t)return t;const o=n.split("-")[0];if(t=hd(o),t)return t;if(o==="en")return $y;throw new x(701,!1)}function hd(e){if(!(e in ms)){const n=xt.ng&&xt.ng.common&&xt.ng.common.locales&&xt.ng.common.locales[e];return n!==void 0&&(ms[e]=n),n}return ms[e]}const be={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,ExtraData:21};function Gy(e){return e.toLowerCase().replace(/_/g,"-")}const fa="en-US";function Zy(e){typeof e=="string"&&e.toLowerCase().replace(/_/g,"-")}function z(e,n,t){const o=C(),r=Y(),i=ae();return wp(r,o,o[U],i,e,n,t),z}function Wy(e,n,t){const o=C(),r=Y(),i=ae();return(i.type&3||t)&&jl(i,r,o,t,o[U],e,n,Wn(i,o,n)),Wy}function wp(e,n,t,o,r,i,s){let a=!0,l=null;if((o.type&3||s)&&(l??=Wn(o,n,i),jl(o,e,n,s,t,r,i,l)&&(a=!1)),a){const c=o.outputs?.[r],d=o.hostDirectiveOutputs?.[r];if(d&&d.length)for(let u=0;u<d.length;u+=2){const f=d[u],h=d[u+1];l??=Wn(o,n,i),ei(o,n,f,h,r,l)}if(c&&c.length)for(const u of c)l??=Wn(o,n,i),ei(o,n,u,r,r,l)}}function k(e=1){return a1(e)}function Qy(e,n){let t=null;const o=Lv(e);for(let r=0;r<n.length;r++){const i=n[r];if(i==="*"){t=r;continue}if(o===null?ch(e,i,!0):zv(o,i))return r}return t}function Bn(e){const n=C()[He][Ee];if(!n.projection){const t=e?e.length:1,o=n.projection=Em(t,null),r=o.slice();let i=n.child;for(;i!==null;){if(i.type!==128){const s=e?Qy(i,e):0;s!==null&&(r[s]?r[s].projectionNext=i:o[s]=i,r[s]=i)}i=i.next}}}function oe(e,n=0,t,o,r,i){const s=C(),a=Y(),l=ro(a,ee+e,16,null,t||null);l.projection===null&&(l.projection=n),sf();const d=!s[jt]||ef();s[He][Ee].projection[l.projection],d&&!gl(l)&&_2(a,s,l)}function xp(e,n,t,o){return np(e,n,t,o),xp}function Yy(e){const n=C(),t=Y(),o=il();Li(o+1);const r=Ql(t,o);if(e.dirty&&$m(n)===((r.metadata.flags&2)===2)){if(r.matches===null)e.reset([]);else{const i=op(n,o);e.reset(i,qf),e.notifyOnChanges()}return!0}return!1}function Xy(){return Wl(C(),il())}function nc(e,n,t,o,r){return sp(n,np(e,t,o,r)),nc}function _p(e,n,t,o){return sp(e,ny(n,t,o)),_p}function tc(e=1){Li(il()+e)}function Un(e){const n=Jm();return Zu(n,ee+e)}function ar(e,n){return e<<17|n<<2}function dt(e){return e>>17&32767}function Ky(e){return(e&2)==2}function Jy(e,n){return e&131071|n<<17}function ha(e){return e|2}function Vt(e){return(e&131068)>>2}function vs(e,n){return e&-131069|n<<2}function ew(e){return(e&1)===1}function pa(e){return e|1}function nw(e,n,t,o,r,i){let s=i?n.classBindings:n.styleBindings,a=dt(s),l=Vt(s);e[o]=t;let c=!1,d;if(Array.isArray(t)){const u=t;d=u[1],(d===null||Go(u,d)>0)&&(c=!0)}else d=t;if(r)if(l!==0){const f=dt(e[a+1]);e[o+1]=ar(f,a),f!==0&&(e[f+1]=vs(e[f+1],o)),e[a+1]=Jy(e[a+1],o)}else e[o+1]=ar(a,0),a!==0&&(e[a+1]=vs(e[a+1],o)),a=o;else e[o+1]=ar(l,0),a===0?a=o:e[l+1]=vs(e[l+1],o),l=o;c&&(e[o+1]=ha(e[o+1])),pd(e,d,o,!0),pd(e,d,o,!1),tw(n,d,e,o,i),s=ar(a,l),i?n.classBindings=s:n.styleBindings=s}function tw(e,n,t,o,r){const i=r?e.residualClasses:e.residualStyles;i!=null&&typeof n=="string"&&Go(i,n)>=0&&(t[o+1]=pa(t[o+1]))}function pd(e,n,t,o){const r=e[t+1],i=n===null;let s=o?dt(r):Vt(r),a=!1;for(;s!==0&&(a===!1||i);){const l=e[s],c=e[s+1];ow(l,n)&&(a=!0,e[s+1]=o?pa(c):ha(c)),s=o?dt(c):Vt(c)}a&&(e[t+1]=o?ha(r):pa(r))}function ow(e,n){return e===null||n==null||(Array.isArray(e)?e[1]:e)===n?!0:Array.isArray(e)&&typeof n=="string"?Go(e,n)>=0:!1}const Xe={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function rw(e){return e.substring(Xe.key,Xe.keyEnd)}function iw(e){return sw(e),Cp(e,kp(e,0,Xe.textEnd))}function Cp(e,n){const t=Xe.textEnd;return t===n?-1:(n=Xe.keyEnd=aw(e,Xe.key=n,t),kp(e,n,t))}function sw(e){Xe.key=0,Xe.keyEnd=0,Xe.value=0,Xe.valueEnd=0,Xe.textEnd=e.length}function kp(e,n,t){for(;n<t&&e.charCodeAt(n)<=32;)n++;return n}function aw(e,n,t){for(;n<t&&e.charCodeAt(n)>32;)n++;return n}function Pn(e,n,t){return Sp(e,n,t,!1),Pn}function ve(e,n){return Sp(e,n,null,!0),ve}function lw(e){dw(mw,cw,e,!0)}function cw(e,n){for(let t=iw(n);t>=0;t=Cp(n,t))Wa(e,rw(n),!0)}function Sp(e,n,t,o){const r=C(),i=Y(),s=rl(2);if(i.firstUpdatePass&&Ip(i,e,s,o),n!==Me&&Ve(r,s,n)){const a=i.data[Mn()];Tp(i,a,r,r[U],e,r[s+1]=bw(n,t),o,s)}}function dw(e,n,t,o){const r=Y(),i=rl(2);r.firstUpdatePass&&Ip(r,null,i,o);const s=C();if(t!==Me&&Ve(s,i,t)){const a=r.data[Mn()];if(Ep(a,o)&&!Op(r,i)){let l=a.classesWithoutHost;l!==null&&(t=Hs(l,t||"")),ua(r,a,s,t,o)}else vw(r,a,s,s[U],s[i+1],s[i+1]=gw(e,n,t),o,i)}}function Op(e,n){return n>=e.expandoStartIndex}function Ip(e,n,t,o){const r=e.data;if(r[t+1]===null){const i=r[Mn()],s=Op(e,t);Ep(i,o)&&n===null&&!s&&(n=!1),n=uw(r,i,n,o),nw(r,i,n,t,s,o)}}function uw(e,n,t,o){const r=i1(e);let i=o?n.residualClasses:n.residualStyles;if(r===null)(o?n.classBindings:n.styleBindings)===0&&(t=bs(null,e,n,t,o),t=Do(t,n.attrs,o),i=null);else{const s=n.directiveStylingLast;if(s===-1||e[s]!==r)if(t=bs(r,e,n,t,o),i===null){let l=fw(e,n,o);l!==void 0&&Array.isArray(l)&&(l=bs(null,e,n,l[1],o),l=Do(l,n.attrs,o),hw(e,n,o,l))}else i=pw(e,n,o)}return i!==void 0&&(o?n.residualClasses=i:n.residualStyles=i),t}function fw(e,n,t){const o=t?n.classBindings:n.styleBindings;if(Vt(o)!==0)return e[dt(o)]}function hw(e,n,t,o){const r=t?n.classBindings:n.styleBindings;e[dt(r)]=o}function pw(e,n,t){let o;const r=n.directiveEnd;for(let i=1+n.directiveStylingLast;i<r;i++){const s=e[i].hostAttrs;o=Do(o,s,t)}return Do(o,n.attrs,t)}function bs(e,n,t,o,r){let i=null;const s=t.directiveEnd;let a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<s&&(i=n[a],o=Do(o,i.hostAttrs,r),i!==e);)a++;return e!==null&&(t.directiveStylingLast=a),o}function Do(e,n,t){const o=t?1:2;let r=-1;if(n!==null)for(let i=0;i<n.length;i++){const s=n[i];typeof s=="number"?r=s:r===o&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),Wa(e,s,t?!0:n[++i]))}return e===void 0?null:e}function gw(e,n,t){if(t==null||t==="")return on;const o=[],r=Ni(t);if(Array.isArray(r))for(let i=0;i<r.length;i++)e(o,r[i],!0);else if(r instanceof Set)for(const i of r)e(o,i,!0);else if(typeof r=="object")for(const i in r)Object.hasOwn(r,i)&&e(o,i,r[i]);else typeof r=="string"&&n(o,r);return o}function mw(e,n,t){const o=String(n);o!==""&&!o.includes(" ")&&Wa(e,o,t)}function vw(e,n,t,o,r,i,s,a){r===Me&&(r=on);let l=0,c=0,d=0<r.length?r[0]:null,u=0<i.length?i[0]:null;for(;d!==null||u!==null;){const f=l<r.length?r[l+1]:void 0,h=c<i.length?i[c+1]:void 0;let g=null,y;d===u?(l+=2,c+=2,f!==h&&(g=u,y=h)):u===null||d!==null&&d<u?(l+=2,g=d):(c+=2,g=u,y=h),g!==null&&Tp(e,n,t,o,g,y,s,a),d=l<r.length?r[l]:null,u=c<i.length?i[c]:null}}function Tp(e,n,t,o,r,i,s,a){if(!(n.type&3))return;const l=e.data,c=l[a+1],d=ew(c)?gd(l,n,t,r,Vt(c),s):void 0;if(!ii(d)){ii(i)||Ky(c)&&(i=gd(l,null,t,r,a,s));const u=Gu(Mn(),t);k2(o,s,u,r,i)}}function gd(e,n,t,o,r,i){const s=n===null;let a;for(;r>0;){const l=e[r],c=Array.isArray(l),d=c?l[1]:l,u=d===null;let f=t[r+1];f===Me&&(f=u?on:void 0);let h=u?ss(f,o):d===o?f:void 0;if(c&&!ii(h)&&(h=ss(l,o)),ii(h)&&(a=h,s))return a;const g=e[r+1];r=s?dt(g):Vt(g)}if(n!==null){let l=i?n.residualClasses:n.residualStyles;l!=null&&(a=ss(l,o))}return a}function ii(e){return e!==void 0}function bw(e,n){return e==null||e===""||(typeof n=="string"?e=e+n:typeof e=="object"&&(e=$a(Ni(e)))),e}function Ep(e,n){return(e.flags&(n?8:16))!==0}function E(e,n=""){const t=C(),o=Y(),r=e+ee,i=o.firstCreatePass?ro(o,r,1,n,null):o.data[r],s=yw(o,t,i,n);t[r]=s,ll()&&Ol(o,t,s,i),Wo(i,!1)}let yw=(e,n,t,o)=>(Di(!0),yv(n[U],o));function Mp(e,n,t,o=""){return Ve(e,vt(),t)?n+Io(t)+o:Me}function ww(e,n,t,o,r,i=""){const s=e1(),a=$h(e,s,t,r);return rl(2),a?n+Io(t)+o+Io(r)+i:Me}function Fe(e){return Nn("",e),Fe}function Nn(e,n,t){const o=C(),r=Mp(o,e,n,t);return r!==Me&&Ap(o,Mn(),r),Nn}function xw(e,n,t,o,r){const i=C(),s=ww(i,e,n,t,o,r);return s!==Me&&Ap(i,Mn(),s),xw}function Ap(e,n,t){const o=Gu(n,e);wv(e[U],o,t)}function oc(e,n,t){If(n)&&(n=n());const o=C(),r=vt();if(Ve(o,r,n)){Y();const i=Qo();Th(i,o,e,n,o[U],t)}return oc}function Pp(e,n){const t=If(e);return t&&e.set(n),t}function rc(e,n){const t=C(),o=Y(),r=ae();return wp(o,t,t[U],r,e,n),rc}function p6(e,n,t=""){return Mp(C(),e,n,t)}function _w(e,n,t){const o=Y();o.firstCreatePass&&Rp(n,o.data,o.blueprint,In(e),t)}function Rp(e,n,t,o,r){if(e=_e(e),Array.isArray(e))for(let i=0;i<e.length;i++)Rp(e[i],n,t,o,r);else{const i=Y(),s=C(),a=ae();let l=Nt(e)?e:_e(e.provide);const c=Bu(e),d=a.providerIndexes&1048575,u=a.directiveStart,f=a.providerIndexes>>20;if(Nt(e)||!e.multi){const h=new Ko(c,r,fe,null),g=ws(l,n,d+f,u);g===-1?(Ks(Wr(a,s),i,l),ys(i,e,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,t.push(h),s.push(h)):(t[g]=h,s[g]=h)}else{const h=ws(l,n,d+f,u),g=ws(l,n,d,d+f),y=h>=0&&t[h],R=g>=0&&t[g];if(y){const G=Lp(t[h],c,o);ys(i,e,h>-1?h:g,G)}else{Ks(Wr(a,s),i,l);const G=Sw(Cw,t.length,r,o,c);R&&(t[g].providerFactory=G),ys(i,e,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,t.push(G),s.push(G)}o&&R&&t[g].componentProviders++}}}function ys(e,n,t,o){const r=Nt(n),i=Fm(n);if(r||i){const l=(i?_e(n.useClass):n).prototype.ngOnDestroy;if(l){const c=e.destroyHooks||(e.destroyHooks=[]);if(!r&&n.multi){const d=c.indexOf(t);d===-1?c.push(t,[o,l]):c[d+1].push(o,l)}else c.push(t,l)}}}function Lp(e,n,t){return t&&e.componentProviders++,e.multi.push(n)-1}function ws(e,n,t,o){for(let r=t;r<o;r++)if(n[r]===e)return r;return-1}function Cw(e,n,t,o,r){return kw(this.multi,[])}function kw(e,n){for(let t=0;t<e.length;t++){const o=e[t];n.push(o())}return n}function Sw(e,n,t,o,r,i){const s=new Ko(e,t,fe,null);return s.multi=[],s.index=n,s.componentProviders=0,Lp(s,r,o&&!t),s}function g6(e,n){return t=>{t.providersResolver=(o,r)=>_w(o,r?r(e):e,!1)}}function Ow(e,n){const t=Ri()+e,o=C();return o[t]===Me?Nl(o,t,n()):pb(o,t)}function m6(e,n,t){return Iw(C(),Ri(),e,n,t)}function v6(e,n,t,o){return Fp(C(),Ri(),e,n,t,o)}function Dp(e,n){const t=e[n];return t===Me?void 0:t}function Iw(e,n,t,o,r,i){const s=n+t;return Ve(e,s,r)?Nl(e,s+1,o(r)):Dp(e,s+1)}function Fp(e,n,t,o,r,i,s){const a=n+t;return $h(e,a,r,i)?Nl(e,a+2,s?o.call(s,r,i):o(r,i)):Dp(e,a+2)}function b6(e,n){const t=Y();let o;const r=e+ee;t.firstCreatePass?(o=Tw(n,t.pipeRegistry),t.data[r]=o,o.onDestroy&&(t.destroyHooks??=[]).push(r,o.onDestroy)):o=t.data[r];const i=o.factory||(o.factory=Jn(o.type,!0)),s=Ie(fe);try{const a=Zr(!1),l=i();return Zr(a),qm(t,C(),r,l),l}finally{Ie(s)}}function Tw(e,n){if(n)for(let t=n.length-1;t>=0;t--){const o=n[t];if(e===o.name)return o}}function y6(e,n,t,o){const r=e+ee,i=C(),s=Zu(i,r);return Ew(i,r)?Fp(i,Ri(),n,s.transform,t,o,s):s.transform(t,o)}function Ew(e,n){return e[_].data[n].pure}function zp(e,n){return Zi(e,n)}let Mw=(()=>{class e{applicationErrorHandler=p(to);appRef=p(oi);taskService=p(Yo);ngZone=p(Ue);zonelessEnabled=p(fl);tracing=p(yt,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ht;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(qr):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(p(k1,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{const t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{const t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;const o=this.useMicrotaskScheduler?h1:bf;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>o(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>o(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(qr+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);const t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(o){this.applicationErrorHandler(o)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){const t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:e.ɵfac})}return e})();function Aw(){return An("NgZoneless"),zu([...Np(),[]])}function Np(){return[{provide:Xo,useExisting:Mw},{provide:Ue,useClass:b1},{provide:fl,useValue:!0}]}let Pw=(()=>{class e{compileModuleSync(t){return new ly(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:e.ɵfac})}return e})();function Rw(){return typeof $localize<"u"&&$localize.locale||fa}const ic=new T("",{factory:()=>p(ic,{optional:!0,skipSelf:!0})||Rw()});class jp{destroyed=!1;listeners=null;errorHandler=p(no,{optional:!0});isEmitting=!1;hasNullListeners=!1;destroyRef=p(an);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(n){if(this.destroyed)throw new x(953,!1);return(this.listeners??=[]).push(n),{unsubscribe:()=>{const t=this.listeners?this.listeners.indexOf(n):-1;t>-1&&(this.isEmitting?(this.hasNullListeners=!0,this.listeners[t]=null):this.listeners.splice(t,1))}}}emit(n){if(this.destroyed){console.warn(qa(953,!1));return}if(this.listeners===null)return;this.isEmitting=!0;const t=S(null);try{for(const o of this.listeners)try{o!==null&&o(n)}catch(r){this.errorHandler?.handleError(r)}}finally{this.hasNullListeners&&(this.hasNullListeners=!1,this.listeners&&Lw(this.listeners)),S(t),this.isEmitting=!1}}}function Lw(e){let n=e.length-1;for(;n>-1;)e[n]===null&&e.splice(n,1),n--}function q(e,n){return Qd(e,n?.equal)}function ce(e){return fg(e)}const Dw=e=>e;function Fw(e,n){if(typeof e=="function"){const t=_c(e,Dw,n?.equal);return md(t,n?.debugName)}else{const t=_c(e.source,e.computation,e.equal);return md(t,e.debugName)}}function md(e,n){const t=e[he],o=e;return o.set=r=>cg(t,r),o.update=r=>dg(t,r),o.asReadonly=ul.bind(e),o}const Wi=Symbol("InputSignalNode#UNSET"),Hp={...Fa,transformFn:void 0,applyValueToInputSignal(e,n){$o(e,n)}};function Bp(e,n){const t=Object.create(Hp);t.value=e,t.transformFn=n?.transform;function o(){if(Qt(t),t.value===Wi){let r=null;throw new x(-950,r)}return t.value}return o[he]=t,o}class zw{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Vf(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}}function Up(e){return Nw(e)?e.default:e}function Nw(e){return e&&typeof e=="object"&&"default"in e}function Vp(e){return new jp}function vd(e,n){return Bp(e,n)}function jw(e){return Bp(Wi,e)}const w=(vd.required=jw,vd);function qp(e,n){const t=Object.create(Hp),o=new jp;t.value=e;function r(){return Qt(t),bd(t.value),t.value}return r[he]=t,r.asReadonly=ul.bind(r),r.set=i=>{t.equal(t.value,i)||($o(t,i),o.emit(i))},r.update=i=>{bd(t.value),r.set(i(t.value))},r.subscribe=o.subscribe.bind(o),r.destroyRef=o.destroyRef,r}function bd(e){if(e===Wi)throw new x(952,!1)}function yd(e,n){return qp(e)}function Hw(e){return qp(Wi)}const Qi=(yd.required=Hw,yd);function wd(e,n){return rp()}function Bw(e,n){return ip()}const xd=(wd.required=Bw,wd);function _d(e,n){return rp()}function Uw(e,n){return ip()}const w6=(_d.required=Uw,_d);function $p(e,n){return ry()}let Gp=(()=>{class e{static __NG_ELEMENT_ID__=Vw}return e})();function Vw(e){return qw(ae(),C(),(e&16)===16)}function qw(e,n,t){if(mt(e)&&!t){const o=mn(e.index,n);return new Ro(o,o)}else if(e.type&175){const o=n[He];return new Ro(o,n)}return null}const ga=new T(""),$w=new T("");function co(e){return!e.moduleRef}function Gw(e){const n=co(e)?e.r3Injector:e.moduleRef.injector,t=n.get(Ue);return t.run(()=>{co(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();const o=n.get(to);let r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:o})}),co(e)){const i=()=>n.destroy(),s=e.platformInjector.get(ga);s.add(i),n.onDestroy(()=>{r.unsubscribe(),s.delete(i)})}else{const i=()=>e.moduleRef.destroy(),s=e.platformInjector.get(ga);s.add(i),e.moduleRef.onDestroy(()=>{Cr(e.allPlatformModules,e.moduleRef),r.unsubscribe(),s.delete(i)})}return Ww(o,t,()=>{const i=n.get(Yo),s=i.add(),a=n.get(fp);return a.runInitializers(),a.donePromise.then(()=>{const l=n.get(ic,fa);if(Zy(l||fa),!n.get($w,!0))return co(e)?n.get(oi):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(co(e)){const d=n.get(oi);return e.rootComponent!==void 0&&d.bootstrap(e.rootComponent),d}else return Zw?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>{i.remove(s)})})})}let Zw;function Ww(e,n,t){try{const o=t();return Xl(o)?o.catch(r=>{throw n.runOutsideAngular(()=>e(r)),r}):o}catch(o){throw n.runOutsideAngular(()=>e(o)),o}}let Sr=null;function Qw(e=[],n){return Be.create({name:n,providers:[{provide:Ka,useValue:"platform"},{provide:ga,useValue:new Set([()=>Sr=null])},...e]})}function Yw(e=[]){if(Sr)return Sr;const n=Qw(e);return Sr=n,Ty(),Xw(n),n}function Xw(e){const n=e.get(xf,null);De(e,()=>{n?.forEach(t=>t())})}function Kw(e){const{rootComponent:n,appProviders:t,platformProviders:o,platformRef:r}=e;j(F.BootstrapApplicationStart);try{const i=r?.injector??Yw(o),s=[Np(),x1,...t||[]],a=new lp({providers:s,parent:i,debugName:"",runEnvironmentInitializers:!1});return Gw({r3Injector:a.injector,platformInjector:i,rootComponent:n})}catch(i){return Promise.reject(i)}finally{j(F.BootstrapApplicationEnd)}}function Je(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function Jw(e,n=NaN){return!isNaN(parseFloat(e))&&!isNaN(Number(e))?Number(e):n}const xs=Symbol("NOT_SET"),Zp=new Set,ex={...Fa,kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:xs,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(e){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==xs&&!Ei(this))return this.signal;try{for(const r of this.cleanup??Zp)r()}finally{this.cleanup?.clear()}const n=[];e!==void 0&&n.push(e),n.push(this.registerCleanupFn);const t=Lt(this);let o;try{o=this.userFn.apply(null,n)}finally{Vo(this,t)}return(this.value===xs||!this.equal(this.value,o))&&(this.value=o,this.version++),this.signal}};class nx extends vh{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,t,o,r,i,s=null){super(n,[void 0,void 0,void 0,void 0],o,!1,i.get(an),s),this.scheduler=r;for(const a of gh){const l=t[a];if(l===void 0)continue;const c=Object.create(ex);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(Qt(c),c.value),c.signal[he]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(const n of this.onDestroyFns)n();super.destroy();for(const n of this.nodes)if(n)try{for(const t of n.cleanup??Zp)t()}finally{qo(n)}}}function x6(e,n){const t=n?.injector??p(Be),o=t.get(Xo),r=t.get(Cl),i=t.get(yt,null,{optional:!0});r.impl??=t.get(mh);let s=e;typeof s=="function"&&(s={mixedReadWrite:e});const a=t.get(Fi,null,{optional:!0}),l=new nx(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,o,t,i?.snapshot(null));return r.impl.register(l),l}function tx(e){const n=zt(e);if(!n)return null;const t=new Ul(n);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}let Wp=null;function wo(){return Wp}function ox(e){Wp??=e}class rx{}let sc=(()=>{class e{historyGo(t){throw new Error("")}static ɵfac=function(o){return new(o||e)};static ɵprov=K({token:e,factory:()=>p(ix),providedIn:"platform"})}return e})(),ix=(()=>{class e extends sc{_location;_history;_doc=p(Se);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return wo().getBaseHref(this._doc)}onPopState(t){const o=wo().getGlobalEventTarget(this._doc,"window");return o.addEventListener("popstate",t,!1),()=>o.removeEventListener("popstate",t)}onHashChange(t){const o=wo().getGlobalEventTarget(this._doc,"window");return o.addEventListener("hashchange",t,!1),()=>o.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,o,r){this._history.pushState(t,o,r)}replaceState(t,o,r){this._history.replaceState(t,o,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static ɵfac=function(o){return new(o||e)};static ɵprov=K({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function ac(e,n){return e?n?e.endsWith("/")?n.startsWith("/")?e+n.slice(1):e+n:n.startsWith("/")?e+n:`${e}/${n}`:e:n}function Cd(e){const n=e.search(/#|\?|$/);return e[n-1]==="/"?e.slice(0,n-1)+e.slice(n):e}function Cn(e){return e&&e[0]!=="?"?`?${e}`:e}let so=(()=>{class e{historyGo(t){throw new Error("")}static ɵfac=function(o){return new(o||e)};static ɵprov=K({token:e,factory:()=>p(sx),providedIn:"root"})}return e})();const Qp=new T("");let sx=(()=>{class e extends so{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,o){super(),this._platformLocation=t,this._baseHref=o??this._platformLocation.getBaseHrefFromDOM()??p(Se).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return ac(this._baseHref,t)}path(t=!1){const o=this._platformLocation.pathname+Cn(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${o}${r}`:o}pushState(t,o,r,i){const s=this.prepareExternalUrl(r+Cn(i));this._platformLocation.pushState(t,o,s)}replaceState(t,o,r,i){const s=this.prepareExternalUrl(r+Cn(i));this._platformLocation.replaceState(t,o,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static ɵfac=function(o){return new(o||e)(D(sc),D(Qp,8))};static ɵprov=K({token:e,factory:e.ɵfac,providedIn:"root"})}return e})(),Yi=(()=>{class e{_subject=new nn;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;const o=this._locationStrategy.getBaseHref();this._basePath=cx(Cd(kd(o))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,o=""){return this.path()==this.normalize(t+Cn(o))}normalize(t){return e.stripTrailingSlash(lx(this._basePath,kd(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,o="",r=null){this._locationStrategy.pushState(r,"",t,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Cn(o)),r)}replaceState(t,o="",r=null){this._locationStrategy.replaceState(r,"",t,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Cn(o)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(o=>{this._notifyUrlChangeListeners(o.url,o.state)}),()=>{const o=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(o,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",o){this._urlChangeListeners.forEach(r=>r(t,o))}subscribe(t,o,r){return this._subject.subscribe({next:t,error:o??void 0,complete:r??void 0})}static normalizeQueryParams=Cn;static joinWithSlash=ac;static stripTrailingSlash=Cd;static ɵfac=function(o){return new(o||e)(D(so))};static ɵprov=K({token:e,factory:()=>ax(),providedIn:"root"})}return e})();function ax(){return new Yi(D(so))}function lx(e,n){if(!e||!n.startsWith(e))return n;const t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function kd(e){return e.replace(/\/index\.html$/,"")}function cx(e){if(new RegExp("^(https?:)?//").test(e)){const[,t]=e.split(/\/\/[^\/]+/);return t}return e}let dx=(()=>{class e extends so{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,o){super(),this._platformLocation=t,o!=null&&(this._baseHref=o)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){const o=this._platformLocation.hash??"#";return o.length>0?o.substring(1):o}prepareExternalUrl(t){const o=ac(this._baseHref,t);return o.length>0?"#"+o:o}pushState(t,o,r,i){const s=this.prepareExternalUrl(r+Cn(i))||this._platformLocation.pathname;this._platformLocation.pushState(t,o,s)}replaceState(t,o,r,i){const s=this.prepareExternalUrl(r+Cn(i))||this._platformLocation.pathname;this._platformLocation.replaceState(t,o,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static ɵfac=function(o){return new(o||e)(D(sc),D(Qp,8))};static ɵprov=K({token:e,factory:e.ɵfac})}return e})();var ye=(function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e})(ye||{}),V=(function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e})(V||{}),Pe=(function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e})(Pe||{});const Xi={MinusSign:5};function ux(e){return ln(e)[be.LocaleId]}function fx(e,n,t){const o=ln(e),r=[o[be.DayPeriodsFormat],o[be.DayPeriodsStandalone]],i=qe(r,n);return qe(i,t)}function hx(e,n,t){const o=ln(e),r=[o[be.DaysFormat],o[be.DaysStandalone]],i=qe(r,n);return qe(i,t)}function px(e,n,t){const o=ln(e),r=[o[be.MonthsFormat],o[be.MonthsStandalone]],i=qe(r,n);return qe(i,t)}function gx(e,n){const o=ln(e)[be.Eras];return qe(o,n)}function lr(e,n){const t=ln(e);return qe(t[be.DateFormat],n)}function cr(e,n){const t=ln(e);return qe(t[be.TimeFormat],n)}function dr(e,n){const o=ln(e)[be.DateTimeFormat];return qe(o,n)}function Ki(e,n){return ln(e)[be.NumberSymbols][n]}function Yp(e){if(!e[be.ExtraData])throw new x(2303,!1)}function mx(e){const n=ln(e);return Yp(n),(n[be.ExtraData][2]||[]).map(o=>typeof o=="string"?_s(o):[_s(o[0]),_s(o[1])])}function vx(e,n,t){const o=ln(e);Yp(o);const r=[o[be.ExtraData][0],o[be.ExtraData][1]],i=qe(r,n)||[];return qe(i,t)||[]}function qe(e,n){for(let t=n;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new x(2304,!1)}function _s(e){const[n,t]=e.split(":");return{hours:+n,minutes:+t}}const bx=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,ur=Object.create(null),yx=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,wx=256;function xx(e,n,t,o){let r=Ax(e);_x(n),n=xn(t,n)||n;let s=[],a;for(;n;)if(a=yx.exec(n),a){s=s.concat(a.slice(1));const d=s.pop();if(!d)break;n=d}else{s.push(n);break}let l=r.getTimezoneOffset();o&&(l=Kp(o,l),r=Mx(r,o));let c="";return s.forEach(d=>{const u=Tx(d);c+=u?u(r,t,l):d==="''"?"'":d.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function _x(e){if(e.length>wx)throw new x(2300,!1)}function si(e,n,t){const o=new Date(0);return o.setFullYear(e,n,t),o.setHours(0,0,0),o}function xn(e,n){const t=ux(e);if(ur[t]??=Object.create(null),ur[t][n])return ur[t][n];let o="";switch(n){case"shortDate":o=lr(e,Pe.Short);break;case"mediumDate":o=lr(e,Pe.Medium);break;case"longDate":o=lr(e,Pe.Long);break;case"fullDate":o=lr(e,Pe.Full);break;case"shortTime":o=cr(e,Pe.Short);break;case"mediumTime":o=cr(e,Pe.Medium);break;case"longTime":o=cr(e,Pe.Long);break;case"fullTime":o=cr(e,Pe.Full);break;case"short":const r=xn(e,"shortTime"),i=xn(e,"shortDate");o=fr(dr(e,Pe.Short),[r,i]);break;case"medium":const s=xn(e,"mediumTime"),a=xn(e,"mediumDate");o=fr(dr(e,Pe.Medium),[s,a]);break;case"long":const l=xn(e,"longTime"),c=xn(e,"longDate");o=fr(dr(e,Pe.Long),[l,c]);break;case"full":const d=xn(e,"fullTime"),u=xn(e,"fullDate");o=fr(dr(e,Pe.Full),[d,u]);break}return o&&(ur[t][n]=o),o}function fr(e,n){return n&&(e=e.replace(/\{([^}]+)}/g,function(t,o){return Object.hasOwn(n,o)?n[o]:t})),e}function Qe(e,n,t="-",o,r){let i="";(e<0||r&&e<=0)&&(r?e=-e+1:(e=-e,i=t));let s=String(e);for(;s.length<n;)s="0"+s;return o&&(s=s.slice(s.length-n)),i+s}function Cx(e,n){return Qe(e,3).substring(0,n)}function te(e,n,t=0,o=!1,r=!1){return function(i,s){let a=kx(e,i);if((t>0||a>-t)&&(a+=t),e===3)a===0&&t===-12&&(a=12);else if(e===6)return Cx(a,n);const l=Ki(s,Xi.MinusSign);return Qe(a,n,l,o,r)}}function kx(e,n){switch(e){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new x(2301,!1)}}function Z(e,n,t=ye.Format,o=!1){return function(r,i){return Sx(r,i,e,n,t,o)}}function Sx(e,n,t,o,r,i){switch(t){case 2:return px(n,r,o)[e.getMonth()];case 1:return hx(n,r,o)[e.getDay()];case 0:const s=e.getHours(),a=e.getMinutes();if(i){const l=mx(n),c=vx(n,r,o),d=l.findIndex(u=>{if(Array.isArray(u)){const[f,h]=u,g=s>=f.hours&&a>=f.minutes,y=s<h.hours||s===h.hours&&a<h.minutes;if(f.hours<h.hours){if(g&&y)return!0}else if(g||y)return!0}else if(u.hours===s&&u.minutes===a)return!0;return!1});if(d!==-1)return c[d]}return fx(n,r,o)[s<12?0:1];case 3:return gx(n,o)[e.getFullYear()<=0?0:1];default:throw new x(2302,!1)}}function hr(e){return function(n,t,o){const r=-1*o,i=Ki(t,Xi.MinusSign),s=r>0?Math.floor(r/60):Math.ceil(r/60);switch(e){case 0:return(r>=0?"+":"")+Qe(s,2,i)+Qe(Math.abs(r%60),2,i);case 1:return"GMT"+(r>=0?"+":"")+Qe(s,1,i);case 2:return"GMT"+(r>=0?"+":"")+Qe(s,2,i)+":"+Qe(Math.abs(r%60),2,i);case 3:return o===0?"Z":(r>=0?"+":"")+Qe(s,2,i)+":"+Qe(Math.abs(r%60),2,i);default:throw new x(2310,!1)}}}const Ox=0,Or=4;function Ix(e){const n=si(e,Ox,1).getDay();return si(e,0,1+(n<=Or?Or:Or+7)-n)}function Xp(e){const n=e.getDay(),t=n===0?-3:Or-n;return si(e.getFullYear(),e.getMonth(),e.getDate()+t)}function Cs(e,n=!1){return function(t,o){let r;if(n){const i=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,s=t.getDate();r=1+Math.floor((s+i)/7)}else{const i=Xp(t),s=Ix(i.getFullYear()),a=i.getTime()-s.getTime();r=1+Math.round(a/6048e5)}return Qe(r,e,Ki(o,Xi.MinusSign))}}function pr(e,n=!1){return function(t,o){const i=Xp(t).getFullYear();return Qe(i,e,Ki(o,Xi.MinusSign),n)}}const ks=Object.create(null);function Tx(e){if(ks[e])return ks[e];let n;switch(e){case"G":case"GG":case"GGG":n=Z(3,V.Abbreviated);break;case"GGGG":n=Z(3,V.Wide);break;case"GGGGG":n=Z(3,V.Narrow);break;case"y":n=te(0,1,0,!1,!0);break;case"yy":n=te(0,2,0,!0,!0);break;case"yyy":n=te(0,3,0,!1,!0);break;case"yyyy":n=te(0,4,0,!1,!0);break;case"Y":n=pr(1);break;case"YY":n=pr(2,!0);break;case"YYY":n=pr(3);break;case"YYYY":n=pr(4);break;case"M":case"L":n=te(1,1,1);break;case"MM":case"LL":n=te(1,2,1);break;case"MMM":n=Z(2,V.Abbreviated);break;case"MMMM":n=Z(2,V.Wide);break;case"MMMMM":n=Z(2,V.Narrow);break;case"LLL":n=Z(2,V.Abbreviated,ye.Standalone);break;case"LLLL":n=Z(2,V.Wide,ye.Standalone);break;case"LLLLL":n=Z(2,V.Narrow,ye.Standalone);break;case"w":n=Cs(1);break;case"ww":n=Cs(2);break;case"W":n=Cs(1,!0);break;case"d":n=te(2,1);break;case"dd":n=te(2,2);break;case"c":case"cc":n=te(7,1);break;case"ccc":n=Z(1,V.Abbreviated,ye.Standalone);break;case"cccc":n=Z(1,V.Wide,ye.Standalone);break;case"ccccc":n=Z(1,V.Narrow,ye.Standalone);break;case"cccccc":n=Z(1,V.Short,ye.Standalone);break;case"E":case"EE":case"EEE":n=Z(1,V.Abbreviated);break;case"EEEE":n=Z(1,V.Wide);break;case"EEEEE":n=Z(1,V.Narrow);break;case"EEEEEE":n=Z(1,V.Short);break;case"a":case"aa":case"aaa":n=Z(0,V.Abbreviated);break;case"aaaa":n=Z(0,V.Wide);break;case"aaaaa":n=Z(0,V.Narrow);break;case"b":case"bb":case"bbb":n=Z(0,V.Abbreviated,ye.Standalone,!0);break;case"bbbb":n=Z(0,V.Wide,ye.Standalone,!0);break;case"bbbbb":n=Z(0,V.Narrow,ye.Standalone,!0);break;case"B":case"BB":case"BBB":n=Z(0,V.Abbreviated,ye.Format,!0);break;case"BBBB":n=Z(0,V.Wide,ye.Format,!0);break;case"BBBBB":n=Z(0,V.Narrow,ye.Format,!0);break;case"h":n=te(3,1,-12);break;case"hh":n=te(3,2,-12);break;case"H":n=te(3,1);break;case"HH":n=te(3,2);break;case"m":n=te(4,1);break;case"mm":n=te(4,2);break;case"s":n=te(5,1);break;case"ss":n=te(5,2);break;case"S":n=te(6,1);break;case"SS":n=te(6,2);break;case"SSS":n=te(6,3);break;case"Z":case"ZZ":case"ZZZ":n=hr(0);break;case"ZZZZZ":n=hr(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=hr(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=hr(2);break;default:return null}return ks[e]=n,n}function Kp(e,n){e=e.replace(/:/g,"");const t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?n:t}function Ex(e,n){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+n),e}function Mx(e,n,t){const r=e.getTimezoneOffset(),i=Kp(n,r);return Ex(e,-1*(i-r))}function Ax(e){if(Sd(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){const[r,i=1,s=1]=e.split("-").map(a=>+a);return si(r,i-1,s)}const t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let o;if(o=e.match(bx))return Px(o)}const n=new Date(e);if(!Sd(n))throw new x(2311,!1);return n}function Px(e){const n=new Date(0);let t=0,o=0;const r=e[8]?n.setUTCFullYear:n.setFullYear,i=e[8]?n.setUTCHours:n.setHours;e[9]&&(t=Number(e[9]+e[10]),o=Number(e[9]+e[11])),r.call(n,Number(e[1]),Number(e[2])-1,Number(e[3]));const s=Number(e[4]||0)-t,a=Number(e[5]||0)-o,l=Number(e[6]||0),c=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return i.call(n,s,a,l,c),n}function Sd(e){return e instanceof Date&&!isNaN(e.valueOf())}let lc=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=p(Be);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){const o=this._viewContainerRef;if(this._viewRef&&o.remove(o.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}const r=this._createContextForwardProxy();this._viewRef=o.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,o,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,o,r):!1,get:(t,o,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,o,r)}})}static ɵfac=function(o){return new(o||e)(fe(io))};static ɵdir=jn({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[zi]})}return e})();function Rx(e,n){return new x(2100,!1)}const Lx="mediumDate",Dx=new T(""),Fx=new T("");let _6=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,o,r){this.locale=t,this.defaultTimezone=o,this.defaultOptions=r}transform(t,o,r,i){if(t==null||t===""||t!==t)return null;try{const s=o??this.defaultOptions?.dateFormat??Lx,a=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return xx(t,s,i||this.locale,a)}catch(s){throw Rx(e,s.message)}}static ɵfac=function(o){return new(o||e)(fe(ic,16),fe(Dx,24),fe(Fx,24))};static ɵpipe=hy({name:"date",type:e,pure:!0})}return e})();function zx(e,n){n=encodeURIComponent(n);for(const t of e.split(";")){const o=t.indexOf("="),[r,i]=o==-1?[t,""]:[t.slice(0,o),t.slice(o+1)];if(r.trim()===n)return decodeURIComponent(i)}return null}const Nx="browser";class Jp{_doc;constructor(n){this._doc=n}manager}let ma=(()=>{class e extends Jp{constructor(t){super(t)}supports(t){return!0}addEventListener(t,o,r,i){return t.addEventListener(o,r,i),()=>this.removeEventListener(t,o,r,i)}removeEventListener(t,o,r,i){return t.removeEventListener(o,r,i)}static ɵfac=function(o){return new(o||e)(D(Se))};static ɵprov=K({token:e,factory:e.ɵfac})}return e})();const va=new T("");let e0=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,o){this._zone=o,t.forEach(s=>{s.manager=this});const r=t.filter(s=>!(s instanceof ma));this._plugins=r.slice().reverse();const i=t.find(s=>s instanceof ma);i&&this._plugins.push(i)}addEventListener(t,o,r,i){return this._findPluginFor(o).addEventListener(t,o,r,i)}getZone(){return this._zone}_findPluginFor(t){let o=this._eventNameToPlugin.get(t);if(o)return o;if(o=this._plugins.find(i=>i.supports(t)),!o)throw new x(-5101,!1);return this._eventNameToPlugin.set(t,o),o}static ɵfac=function(o){return new(o||e)(D(va),D(Ue))};static ɵprov=K({token:e,factory:e.ɵfac})}return e})();const Ss="ng-app-id";function Od(e){for(const n of e)n.remove()}function Id(e,n){const t=n.createElement("style");return t.textContent=e,t}function jx(e,n,t,o){const r=e.head?.querySelectorAll(`style[${Ss}="${n}"],link[${Ss}="${n}"]`);if(!r||r.length===0)return!1;for(const i of r)i.removeAttribute(Ss),i instanceof HTMLLinkElement?o.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]});return!0}function ba(e,n){const t=n.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}let Td=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,o,r,i={}){this.doc=t,this.appId=o,this.nonce=r,jx(t,o,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,o){for(const r of t)this.addUsage(r,this.inline,Id);o?.forEach(r=>this.addUsage(r,this.external,ba))}removeStyles(t,o){for(const r of t)this.removeUsage(r,this.inline);o?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,o,r){const i=o.get(t);i?i.usage++:o.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(t,this.doc)))})}removeUsage(t,o){const r=o.get(t);r&&(r.usage--,r.usage<=0&&(Od(r.elements),o.delete(t)))}ngOnDestroy(){for(const[,{elements:t}]of[...this.inline,...this.external])Od(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(const[o,{elements:r}]of this.inline)r.push(this.addElement(t,Id(o,this.doc)));for(const[o,{elements:r}]of this.external)r.push(this.addElement(t,ba(o,this.doc)))}}removeHost(t){this.hosts.delete(t);for(const o of[...this.inline.values(),...this.external.values()]){const r=[];for(const i of o.elements)i.parentNode===t?i.remove():r.push(i);o.elements=r}}addElement(t,o){return this.nonce&&o.setAttribute("nonce",this.nonce),t.appendChild(o)}static ɵfac=function(o){return new(o||e)(D(Se),D(wf),D(Cf,8),D(_f))};static ɵprov=K({token:e,factory:e.ɵfac})}return e})();const Os={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},cc=/%COMP%/g,n0="%COMP%",Hx=`_nghost-${n0}`,Bx=`_ngcontent-${n0}`,Ux=!0,Vx=new T("",{factory:()=>Ux});function qx(e){return Bx.replace(cc,e)}function $x(e){return Hx.replace(cc,e)}function t0(e,n){return n.map(t=>t.replace(cc,e))}let Ed=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,o,r,i,s,a,l=null,c=null){this.eventManager=t,this.sharedStylesHost=o,this.appId=r,this.removeStylesOnCompDestroy=i,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new dc(t,s,a,this.tracingService)}createRenderer(t,o){if(!t||!o)return this.defaultRenderer;const r=this.getOrCreateRenderer(t,o);return r instanceof Pd?r.applyToHost(t):r instanceof ya&&r.applyStyles(),r}getOrCreateRenderer(t,o){const r=this.rendererByCompId;let i=r.get(o.id);if(!i){const s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.tracingService;switch(o.encapsulation){case Sn.Emulated:i=new Pd(l,c,o,this.appId,d,s,a,u);break;case Sn.ShadowDom:return new Ad(l,t,o,s,a,this.nonce,u,c);case Sn.ExperimentalIsolatedShadowDom:return new Ad(l,t,o,s,a,this.nonce,u);default:i=new ya(l,c,o,d,s,a,u);break}r.set(o.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static ɵfac=function(o){return new(o||e)(D(e0),D(ni),D(wf),D(Vx),D(Se),D(Ue),D(Cf),D(yt,8))};static ɵprov=K({token:e,factory:e.ɵfac})}return e})();class dc{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,o,r){this.eventManager=n,this.doc=t,this.ngZone=o,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(Os[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(Md(n)?n.content:n).appendChild(t)}insertBefore(n,t,o){n&&(Md(n)?n.content:n).insertBefore(t,o)}removeChild(n,t){t.remove()}selectRootElement(n,t){let o=typeof n=="string"?this.doc.querySelector(n):n;if(!o)throw new x(-5104,!1);return t||(o.textContent=""),o}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,o,r){if(r){t=r+":"+t;const i=Os[r];i?n.setAttributeNS(i,t,o):n.setAttribute(t,o)}else n.setAttribute(t,o)}removeAttribute(n,t,o){if(o){const r=Os[o];r?n.removeAttributeNS(r,t):n.removeAttribute(`${o}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,o,r){r&(qn.DashCase|qn.Important)?n.style.setProperty(t,o,r&qn.Important?"important":""):n.style[t]=o}removeStyle(n,t,o){o&qn.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,o){n!=null&&(n[t]=o)}setValue(n,t){n.nodeValue=t}listen(n,t,o,r){if(typeof n=="string"&&(n=wo().getGlobalEventTarget(this.doc,n),!n))throw new x(-5102,!1);let i=this.decoratePreventDefault(o);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(n,t,i)),this.eventManager.addEventListener(n,t,i,r)}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;n(t)===!1&&t.preventDefault()}}}function Md(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}class Ad extends dc{hostEl;sharedStylesHost;shadowRoot;constructor(n,t,o,r,i,s,a,l){super(n,r,i,a),this.hostEl=t,this.sharedStylesHost=l,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=o.styles;c=t0(o.id,c);for(const u of c){const f=document.createElement("style");s&&f.setAttribute("nonce",s),f.textContent=u,this.shadowRoot.appendChild(f)}const d=o.getExternalStyles?.();if(d)for(const u of d){const f=ba(u,r);s&&f.setAttribute("nonce",s),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,o){return super.insertBefore(this.nodeOrShadowRoot(n),t,o)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}}class ya extends dc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,o,r,i,s,a,l){super(n,i,s,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let c=o.styles;this.styles=l?t0(l,c):c,this.styleUrls=o.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&st.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}}class Pd extends ya{contentAttr;hostAttr;constructor(n,t,o,r,i,s,a,l){const c=r+"-"+o.id;super(n,t,o,i,s,a,l,c),this.contentAttr=qx(c),this.hostAttr=$x(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){const o=super.createElement(n,t);return super.setAttribute(o,this.contentAttr,""),o}}class uc extends rx{supportsDOMEvents=!0;static makeCurrent(){ox(new uc)}onAndCancel(n,t,o,r){return n.addEventListener(t,o,r),()=>{n.removeEventListener(t,o,r)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){const t=Gx();return t==null?null:Zx(t)}resetBaseElement(){po=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return zx(document.cookie,n)}}let po=null;function Gx(){return po=po||document.head.querySelector("base"),po?po.getAttribute("href"):null}function Zx(e){return new URL(e,document.baseURI).pathname}const Rd=["alt","control","meta","shift"],Wx={"\b":"Backspace","	":"Tab","":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Qx={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let Yx=(()=>{class e extends Jp{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,o,r,i){const s=e.parseEventName(o),a=e.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>wo().onAndCancel(t,s.domEventName,a,i))}static parseEventName(t){const o=t.toLowerCase().split("."),r=o.shift();if(o.length===0||!(r==="keydown"||r==="keyup"))return null;const i=e._normalizeKey(o.pop());let s="",a=o.indexOf("code");if(a>-1&&(o.splice(a,1),s="code."),Rd.forEach(c=>{const d=o.indexOf(c);d>-1&&(o.splice(d,1),s+=c+".")}),s+=i,o.length!=0||i.length===0)return null;const l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(t,o){let r=Wx[t.key]||t.key,i="";return o.indexOf("code.")>-1&&(r=t.code,i="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Rd.forEach(s=>{if(s!==r){const a=Qx[s];a(t)&&(i+=s+".")}}),i+=r,i===o)}static eventCallback(t,o,r){return i=>{e.matchEventFullKeyCode(i,t)&&r.runGuarded(()=>o(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static ɵfac=function(o){return new(o||e)(D(Se))};static ɵprov=K({token:e,factory:e.ɵfac})}return e})();async function Xx(e,n,t){const o={rootComponent:e,...Kx(n,t)};return Kw(o)}function Kx(e,n){return{platformRef:n?.platformRef,appProviders:[...o_,...e?.providers??[]],platformProviders:t_}}function Jx(){uc.makeCurrent()}function e_(){return new no}function n_(){return rv(document),document}const t_=[{provide:_f,useValue:Nx},{provide:xf,useValue:Jx,multi:!0},{provide:Se,useFactory:n_}],o_=[{provide:Ka,useValue:"root"},{provide:no,useFactory:e_},{provide:va,useClass:ma,multi:!0},{provide:va,useClass:Yx,multi:!0},Ed,{provide:ni,useClass:Td},{provide:Td,useExisting:ni},e0,{provide:zl,useExisting:Ed},[]];let r_=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static ɵfac=function(o){return new(o||e)(D(Se))};static ɵprov=K({token:e,factory:e.ɵfac,providedIn:"root"})}return e})();const M="primary",nr=Symbol("RouteTitle");class i_{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){const t=this.params[n];return Array.isArray(t)?t[0]:t}return null}getAll(n){if(this.has(n)){const t=this.params[n];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}}function qt(e){return new i_(e)}function Is(e,n,t){for(let o=0;o<e.length;o++){const r=e[o],i=n[o];if(r[0]===":")t[r.substring(1)]=i;else if(r!==i.path)return!1}return!0}function s_(e,n,t){const o=t.path.split("/"),r=o.indexOf("**");if(r===-1){if(o.length>e.length||t.pathMatch==="full"&&(n.hasChildren()||o.length<e.length))return null;const l={},c=e.slice(0,o.length);return Is(o,c,l)?{consumed:c,posParams:l}:null}if(r!==o.lastIndexOf("**"))return null;const i=o.slice(0,r),s=o.slice(r+1);if(i.length+s.length>e.length||t.pathMatch==="full"&&n.hasChildren()&&t.path!=="**")return null;const a={};return!Is(i,e.slice(0,i.length),a)||!Is(s,e.slice(e.length-s.length),a)?null:{consumed:e,posParams:a}}function ai(e){return new Promise((n,t)=>{e.pipe(pt()).subscribe({next:o=>n(o),error:o=>t(o)})})}function a_(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;++t)if(!un(e[t],n[t]))return!1;return!0}function un(e,n){const t=e?wa(e):void 0,o=n?wa(n):void 0;if(!t||!o||t.length!=o.length)return!1;let r;for(let i=0;i<t.length;i++)if(r=t[i],!o0(e[r],n[r]))return!1;return!0}function wa(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function o0(e,n){if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return!1;const t=[...e].sort(),o=[...n].sort();return t.every((r,i)=>o[i]===r)}else return e===n}function l_(e){return e.length>0?e[e.length-1]:null}function wt(e){return yu(e)?e:Xl(e)?xe(Promise.resolve(e)):P(e)}function r0(e){return yu(e)?ai(e):Promise.resolve(e)}const c_={exact:a0,subset:l0},i0={exact:u_,subset:f_,ignored:()=>!0},s0={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},li={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function d_(e,n,t){const o=e instanceof sn?e:n.parseUrl(e);return q(()=>xa(n.lastSuccessfulNavigation()?.finalUrl??new sn,o,{...li,...t}))}function xa(e,n,t){return c_[t.paths](e.root,n.root,t.matrixParams)&&i0[t.queryParams](e.queryParams,n.queryParams)&&!(t.fragment==="exact"&&e.fragment!==n.fragment)}function u_(e,n){return un(e,n)}function a0(e,n,t){if(!Xn(e.segments,n.segments)||!Ir(e.segments,n.segments,t)||e.numberOfChildren!==n.numberOfChildren)return!1;for(const o in n.children)if(!e.children[o]||!a0(e.children[o],n.children[o],t))return!1;return!0}function f_(e,n){return Object.keys(n).length<=Object.keys(e).length&&Object.keys(n).every(t=>o0(e[t],n[t]))}function l0(e,n,t){return c0(e,n,n.segments,t)}function c0(e,n,t,o){if(e.segments.length>t.length){const r=e.segments.slice(0,t.length);return!(!Xn(r,t)||n.hasChildren()||!Ir(r,t,o))}else if(e.segments.length===t.length){if(!Xn(e.segments,t)||!Ir(e.segments,t,o))return!1;for(const r in n.children)if(!e.children[r]||!l0(e.children[r],n.children[r],o))return!1;return!0}else{const r=t.slice(0,e.segments.length),i=t.slice(e.segments.length);return!Xn(e.segments,r)||!Ir(e.segments,r,o)||!e.children[M]?!1:c0(e.children[M],n,i,o)}}function Ir(e,n,t){return n.every((o,r)=>i0[t](e[r].parameters,o.parameters))}class sn{root;queryParams;fragment;_queryParamMap;constructor(n=new B([],{}),t={},o=null){this.root=n,this.queryParams=t,this.fragment=o}get queryParamMap(){return this._queryParamMap??=qt(this.queryParams),this._queryParamMap}toString(){return g_.serialize(this)}}class B{segments;children;parent=null;constructor(n,t){this.segments=n,this.children=t,Object.values(t).forEach(o=>o.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Tr(this)}}class xo{path;parameters;_parameterMap;constructor(n,t){this.path=n,this.parameters=t}get parameterMap(){return this._parameterMap??=qt(this.parameters),this._parameterMap}toString(){return u0(this)}}function h_(e,n){return Xn(e,n)&&e.every((t,o)=>un(t.parameters,n[o].parameters))}function Xn(e,n){return e.length!==n.length?!1:e.every((t,o)=>t.path===n[o].path)}function p_(e,n){let t=[];return Object.entries(e.children).forEach(([o,r])=>{o===M&&(t=t.concat(n(r,o)))}),Object.entries(e.children).forEach(([o,r])=>{o!==M&&(t=t.concat(n(r,o)))}),t}let Ji=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:()=>new es})}return e})();class es{parse(n){const t=new O_(n);return new sn(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(n){const t=`/${go(n.root,!0)}`,o=b_(n.queryParams),r=typeof n.fragment=="string"?`#${m_(n.fragment)}`:"";return`${t}${o}${r}`}}const g_=new es;function Tr(e){return e.segments.map(n=>u0(n)).join("/")}function go(e,n){if(!e.hasChildren())return Tr(e);if(n){const t=e.children[M]?go(e.children[M],!1):"",o=[];return Object.entries(e.children).forEach(([r,i])=>{r!==M&&o.push(`${r}:${go(i,!1)}`)}),o.length>0?`${t}(${o.join("//")})`:t}else{const t=p_(e,(o,r)=>r===M?[go(e.children[M],!1)]:[`${r}:${go(o,!1)}`]);return Object.keys(e.children).length===1&&e.children[M]!=null?`${Tr(e)}/${t[0]}`:`${Tr(e)}/(${t.join("//")})`}}function d0(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function gr(e){return d0(e).replace(/%3B/gi,";")}function m_(e){return encodeURI(e)}function _a(e){return d0(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Er(e){return decodeURIComponent(e)}function Ld(e){return Er(e.replace(/\+/g,"%20"))}function u0(e){return`${_a(e.path)}${v_(e.parameters)}`}function v_(e){return Object.entries(e).map(([n,t])=>`;${_a(n)}=${_a(t)}`).join("")}function b_(e){const n=Object.entries(e).map(([t,o])=>Array.isArray(o)?o.map(r=>`${gr(t)}=${gr(r)}`).join("&"):`${gr(t)}=${gr(o)}`).filter(t=>t);return n.length?`?${n.join("&")}`:""}const y_=/^[^\/()?;#]+/;function Ts(e){const n=e.match(y_);return n?n[0]:""}const w_=/^[^\/()?;=#]+/;function x_(e){const n=e.match(w_);return n?n[0]:""}const __=/^[^=?&#]+/;function C_(e){const n=e.match(__);return n?n[0]:""}const k_=/^[^&#]+/;function S_(e){const n=e.match(k_);return n?n[0]:""}class O_{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new B([],{}):new B([],this.parseChildren())}parseQueryParams(){const n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new x(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let o={};this.peekStartsWith("/(")&&(this.capture("/"),o=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(t.length>0||Object.keys(o).length>0)&&(r[M]=new B(t,o)),r}parseSegment(){const n=Ts(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new x(4009,!1);return this.capture(n),new xo(Er(n),this.parseMatrixParams())}parseMatrixParams(){const n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){const t=x_(this.remaining);if(!t)return;this.capture(t);let o="";if(this.consumeOptional("=")){const r=Ts(this.remaining);r&&(o=r,this.capture(o))}n[Er(t)]=Er(o)}parseQueryParam(n){const t=C_(this.remaining);if(!t)return;this.capture(t);let o="";if(this.consumeOptional("=")){const s=S_(this.remaining);s&&(o=s,this.capture(o))}const r=Ld(t),i=Ld(o);if(Object.hasOwn(n,r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(i)}else n[r]=i}parseParens(n,t){const o=Object.create(null);for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const r=Ts(this.remaining),i=this.remaining[r.length];if(i!=="/"&&i!==")"&&i!==";")throw new x(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=M);const a=this.parseChildren(t+1);o[s??M]=Object.keys(a).length===1&&a[M]?a[M]:new B([],a),this.consumeOptional("//")}return o}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new x(4011,!1)}}function f0(e){return e.segments.length>0?new B([],{[M]:e}):e}function h0(e){const n=Object.create(null);for(const[o,r]of Object.entries(e.children)){const i=h0(r);if(o===M&&i.segments.length===0&&i.hasChildren())for(const[s,a]of Object.entries(i.children))n[s]=a;else(i.segments.length>0||i.hasChildren())&&(n[o]=i)}const t=new B(e.segments,n);return I_(t)}function I_(e){if(e.numberOfChildren===1&&e.children[M]){const n=e.children[M];return new B(e.segments.concat(n.segments),n.children)}return e}function ut(e){return e instanceof sn}function T_(e,n,t=null,o=null,r=new es){const i=p0(e);return g0(i,n,t,o,r)}function p0(e){let n;function t(i){const s={};for(const l of i.children){const c=t(l);s[l.outlet]=c}const a=new B(i.url,s);return i===e&&(n=a),a}const o=t(e.root),r=f0(o);return n??r}function g0(e,n,t,o,r){let i=e;for(;i.parent;)i=i.parent;if(n.length===0)return Es(i,i,i,t,o,r);const s=E_(n);if(s.toRoot())return Es(i,i,new B([],{}),t,o,r);const a=M_(s,i,e),l=a.processChildren?_o(a.segmentGroup,a.index,s.commands):v0(a.segmentGroup,a.index,s.commands);return Es(i,a.segmentGroup,l,t,o,r)}function ci(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Fo(e){return typeof e=="object"&&e!=null&&e.outlets}function Dd(e,n,t){e||="ɵ";const o=new sn;return o.queryParams={[e]:n},t.parse(t.serialize(o)).queryParams[e]}function Es(e,n,t,o,r,i){const s={};for(const[c,d]of Object.entries(o??{}))s[c]=Array.isArray(d)?d.map(u=>Dd(c,u,i)):Dd(c,d,i);let a;e===n?a=t:a=m0(e,n,t);const l=f0(h0(a));return new sn(l,s,r)}function m0(e,n,t){const o=Object.create(null);return Object.entries(e.children).forEach(([r,i])=>{i===n?o[r]=t:o[r]=m0(i,n,t)}),new B(e.segments,o)}class Fd{isAbsolute;numberOfDoubleDots;commands;constructor(n,t,o){if(this.isAbsolute=n,this.numberOfDoubleDots=t,this.commands=o,n&&o.length>0&&ci(o[0]))throw new x(4003,!1);const r=o.find(Fo);if(r&&r!==l_(o))throw new x(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}}function E_(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new Fd(!0,0,e);let n=0,t=!1;const o=e.reduce((r,i,s)=>{if(typeof i=="object"&&i!=null){if(i.outlets){const a={};return Object.entries(i.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(i.segmentPath)return[...r,i.segmentPath]}return typeof i!="string"?[...r,i]:s===0?(i.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,i]},[]);return new Fd(t,n,o)}class Mr{segmentGroup;processChildren;index;constructor(n,t,o){this.segmentGroup=n,this.processChildren=t,this.index=o}}function M_(e,n,t){if(e.isAbsolute)return new Mr(n,!0,0);if(!t)return new Mr(n,!1,NaN);if(t.parent===null)return new Mr(t,!0,0);const o=ci(e.commands[0])?0:1,r=t.segments.length-1+o;return A_(t,r,e.numberOfDoubleDots)}function A_(e,n,t){let o=e,r=n,i=t;for(;i>r;){if(i-=r,o=o.parent,!o)throw new x(4005,!1);r=o.segments.length}return new Mr(o,!1,r-i)}function P_(e){return Fo(e[0])?e[0].outlets:{[M]:e}}function v0(e,n,t){if(e??=new B([],{}),e.segments.length===0&&e.hasChildren())return _o(e,n,t);const o=R_(e,n,t),r=t.slice(o.commandIndex);if(o.match&&o.pathIndex<e.segments.length){const i=new B(e.segments.slice(0,o.pathIndex),{});return i.children[M]=new B(e.segments.slice(o.pathIndex),e.children),_o(i,0,r)}else return o.match&&r.length===0?new B(e.segments,{}):o.match&&!e.hasChildren()?Ca(e,n,t):o.match?_o(e,0,r):Ca(e,n,t)}function _o(e,n,t){if(t.length===0)return new B(e.segments,{});{const o=P_(t),r=Object.create(null);if(Object.keys(o).some(i=>i!==M)&&e.children[M]&&e.numberOfChildren===1&&e.children[M].segments.length===0){const i=_o(e.children[M],n,t);return new B(e.segments,i.children)}return Object.entries(o).forEach(([i,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[i]=v0(e.children[i],n,s))}),Object.entries(e.children).forEach(([i,s])=>{o[i]===void 0&&(r[i]=s)}),new B(e.segments,r)}}function R_(e,n,t){let o=0,r=n;const i={match:!1,pathIndex:0,commandIndex:0};for(;r<e.segments.length;){if(o>=t.length)return i;const s=e.segments[r],a=t[o];if(Fo(a))break;const l=`${a}`,c=o<t.length-1?t[o+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!Nd(l,c,s))return i;o+=2}else{if(!Nd(l,{},s))return i;o++}r++}return{match:!0,pathIndex:r,commandIndex:o}}function Ca(e,n,t){const o=e.segments.slice(0,n);let r=0;for(;r<t.length;){const i=t[r];if(Fo(i)){const l=L_(i.outlets);return new B(o,l)}if(r===0&&ci(t[0])){const l=e.segments[n];o.push(new xo(l.path,zd(t[0]))),r++;continue}const s=Fo(i)?i.outlets[M]:`${i}`,a=r<t.length-1?t[r+1]:null;s&&a&&ci(a)?(o.push(new xo(s,zd(a))),r+=2):(o.push(new xo(s,{})),r++)}return new B(o,{})}function L_(e){const n={};return Object.entries(e).forEach(([t,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(n[t]=Ca(new B([],{}),0,o))}),n}function zd(e){const n={};return Object.entries(e).forEach(([t,o])=>n[t]=`${o}`),n}function Nd(e,n,t){return e==t.path&&un(n,t.parameters)}const Ar="imperative";var me=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(me||{});class wn{id;url;constructor(n,t){this.id=n,this.url=t}}class ka extends wn{type=me.NavigationStart;navigationTrigger;restoredState;constructor(n,t,o="imperative",r=null){super(n,t),this.navigationTrigger=o,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class ft extends wn{urlAfterRedirects;type=me.NavigationEnd;constructor(n,t,o){super(n,t),this.urlAfterRedirects=o}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}var Te=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(Te||{}),Sa=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(Sa||{});class zn extends wn{reason;code;type=me.NavigationCancel;constructor(n,t,o,r){super(n,t),this.reason=o,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}function D_(e){return e instanceof zn&&(e.code===Te.Redirect||e.code===Te.SupersededByNewNavigation)}class zo extends wn{reason;code;type=me.NavigationSkipped;constructor(n,t,o,r){super(n,t),this.reason=o,this.code=r}}class fc extends wn{error;target;type=me.NavigationError;constructor(n,t,o,r){super(n,t),this.error=o,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class b0 extends wn{urlAfterRedirects;state;type=me.RoutesRecognized;constructor(n,t,o,r){super(n,t),this.urlAfterRedirects=o,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class F_ extends wn{urlAfterRedirects;state;type=me.GuardsCheckStart;constructor(n,t,o,r){super(n,t),this.urlAfterRedirects=o,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class z_ extends wn{urlAfterRedirects;state;shouldActivate;type=me.GuardsCheckEnd;constructor(n,t,o,r,i){super(n,t),this.urlAfterRedirects=o,this.state=r,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class N_ extends wn{urlAfterRedirects;state;type=me.ResolveStart;constructor(n,t,o,r){super(n,t),this.urlAfterRedirects=o,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class j_ extends wn{urlAfterRedirects;state;type=me.ResolveEnd;constructor(n,t,o,r){super(n,t),this.urlAfterRedirects=o,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class H_{route;type=me.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class B_{route;type=me.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class U_{snapshot;type=me.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class V_{snapshot;type=me.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class q_{snapshot;type=me.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class $_{snapshot;type=me.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class hc{}class y0{}class di{url;navigationBehaviorOptions;constructor(n,t){this.url=n,this.navigationBehaviorOptions=t}}function G_(e){return!(e instanceof hc)&&!(e instanceof di)&&!(e instanceof y0)}class Z_{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ns(this.rootInjector)}}let ns=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,o){const r=this.getOrCreateContext(t);r.outlet=o,this.contexts.set(t,r)}onChildOutletDestroyed(t){const o=this.getContext(t);o&&(o.outlet=null,o.attachRef=null)}onOutletDeactivated(){const t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let o=this.getContext(t);return o||(o=new Z_(this.rootInjector),this.contexts.set(t,o)),o}getContext(t){return this.contexts.get(t)||null}static ɵfac=function(o){return new(o||e)(D(je))};static ɵprov=K({token:e,factory:e.ɵfac,providedIn:"root"})}return e})();class w0{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){const t=this.pathFromRoot(n);return t.length>1?t[t.length-2]:null}children(n){const t=Oa(n,this._root);return t?t.children.map(o=>o.value):[]}firstChild(n){const t=Oa(n,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(n){const t=Ia(n,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Ia(n,this._root).map(t=>t.value)}}function Oa(e,n){if(e===n.value)return n;for(const t of n.children){const o=Oa(e,t);if(o)return o}return null}function Ia(e,n){if(e===n.value)return[n];for(const t of n.children){const o=Ia(e,t);if(o.length)return o.unshift(n),o}return[]}class Ye{value;children;constructor(n,t){this.value=n,this.children=t}toString(){return`TreeNode(${this.value})`}}function St(e){const n={};return e&&e.children.forEach(t=>n[t.value.outlet]=t),n}class x0 extends w0{snapshot;constructor(n,t){super(n),this.snapshot=t,gc(this,n)}toString(){return this.snapshot.toString()}}function _0(e,n){const t=W_(e,n),o=new ze([new xo("",{})]),r=new ze({}),i=new ze({}),s=new ze({}),a=new ze(""),l=new tr(o,r,s,a,i,M,e,t.root);return l.snapshot=t.root,new x0(new Ye(l,[]),t)}function W_(e,n){const t={},o={},r={},s=new Ta([],t,r,"",o,M,e,null,{},n);return new C0("",new Ye(s,[]))}class tr{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;_localInjector;constructor(n,t,o,r,i,s,a,l){this.urlSubject=n,this.paramsSubject=t,this.queryParamsSubject=o,this.fragmentSubject=r,this.dataSubject=i,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(pe(c=>c[nr]))??P(void 0),this.url=n,this.params=t,this.queryParams=o,this.fragment=r,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(pe(n=>qt(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(pe(n=>qt(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}const Q_="always";function pc(e,n,t){let o;const{routeConfig:r}=e;return n!==null&&(t==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?o={params:{...n.params,...e.params},data:{...n.data,...e.data},resolve:{...e.data,...n.data,...r?.data,...e._resolvedData}}:o={params:{...e.params},data:{...e.data},resolve:{...e.data,...e._resolvedData??{}}},r&&S0(r)&&(o.resolve[nr]=r.title),o}class Ta{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[nr]}constructor(n,t,o,r,i,s,a,l,c,d){this.url=n,this.params=t,this.queryParams=o,this.fragment=r,this.data=i,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=qt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=qt(this.queryParams),this._queryParamMap}toString(){const n=this.url.map(o=>o.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${t}')`}}class C0 extends w0{url;constructor(n,t){super(t),this.url=n,gc(this,t)}toString(){return k0(this._root)}}function gc(e,n){n.value._routerState=e,n.children.forEach(t=>gc(e,t))}function k0(e){const n=e.children.length>0?` { ${e.children.map(k0).join(", ")} } `:"";return`${e.value}${n}`}function Ms(e){if(e.snapshot){const n=e.snapshot,t=e._futureSnapshot;e.snapshot=t,un(n.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),n.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),un(n.params,t.params)||e.paramsSubject.next(t.params),a_(n.url,t.url)||e.urlSubject.next(t.url),un(n.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Ea(e,n){const t=un(e.params,n.params)&&h_(e.url,n.url),o=!e.parent!=!n.parent;return t&&!o&&(!e.parent||Ea(e.parent,n.parent))}function S0(e){return typeof e.title=="string"||e.title===null}const Y_=new T("");let O0=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=M;activateEvents=new Le;deactivateEvents=new Le;attachEvents=new Le;detachEvents=new Le;routerOutletData=w();parentContexts=p(ns);location=p(io);changeDetector=p(Gp);inputBinder=p(ts,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){const{firstChange:o,previousValue:r}=t.name;if(o)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;const t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new x(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new x(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new x(4012,!1);this.location.detach();const t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,o){this.activated=t,this._activatedRoute=o,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){const t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,o){if(this.isActivated)throw new x(4013,!1);this._activatedRoute=t;const r=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new X_(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:o}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(o){return new(o||e)};static ɵdir=jn({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[zi]})}return e})();class X_{route;childContexts;parent;outletData;constructor(n,t,o,r){this.route=n,this.childContexts=t,this.parent=o,this.outletData=r}get(n,t){return n===tr?this.route:n===ns?this.childContexts:n===Y_?this.outletData:this.parent.get(n,t)}}const ts=new T("");let K_=(()=>{class e{options;outletDataSubscriptions=new Map;outletSeenKeys=new Map;constructor(t){this.options=t,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t),this.outletSeenKeys.delete(t)}subscribeToRouteData(t){const{activatedRoute:o}=t,r=wu([this.options.queryParams?o.queryParams:P({}),o.params,o.data]).pipe(Ze(([i,s,a],l)=>(a={...i,...s,...a},l===0?P(a):Promise.resolve(a)))).subscribe(i=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==o||o.component===null){this.unsubscribeFromRouteData(t);return}const s=tx(o.component);if(!s){this.unsubscribeFromRouteData(t);return}let a=this.outletSeenKeys.get(t);a||(a=new Set,this.outletSeenKeys.set(t,a));for(const c of Object.keys(i))a.add(c);const l=this.options.unmatchedInputBehavior??"alwaysUndefined";for(const{templateName:c}of s.inputs){const d=i[c];(d!==void 0||l==="alwaysUndefined"||a.has(c))&&t.activatedComponentRef.setInput(c,d)}});this.outletDataSubscriptions.set(t,r)}static ɵfac=function(o){Cb()};static ɵprov=K({token:e,factory:e.ɵfac})}return e})(),J_=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵcmp=le({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(o,r){o&1&&N(0,"router-outlet")},dependencies:[O0],encapsulation:2,changeDetection:1})}return e})();function mc(e){const n=e.children&&e.children.map(mc),t=n?{...e,children:n}:{...e};return!t.component&&!t.loadComponent&&(n||t.loadChildren)&&t.outlet&&t.outlet!==M&&(t.component=J_),t}function e3(e,n,t){const o=new Set,r=No(e,n._root,t?t._root:void 0,o);return{newlyCreatedRoutes:o,state:new x0(r,n)}}function No(e,n,t,o){if(t&&e.shouldReuseRoute(n.value,t.value.snapshot)){const r=t.value;r._futureSnapshot=n.value;const i=n3(e,n,t,o);return new Ye(r,i)}else{if(e.shouldAttach(n.value)){const s=e.retrieve(n.value);if(s!==null){const a=s.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(l=>No(e,l,void 0,o)),a}}const r=t3(n.value);o.add(r);const i=n.children.map(s=>No(e,s,void 0,o));return new Ye(r,i)}}function n3(e,n,t,o){return n.children.map(r=>{for(const i of t.children)if(e.shouldReuseRoute(r.value,i.value.snapshot))return No(e,r,i,o);return No(e,r,void 0,o)})}function t3(e){return new tr(new ze(e.url),new ze(e.params),new ze(e.queryParams),new ze(e.fragment),new ze(e.data),e.outlet,e.component,e)}class vc{redirectTo;navigationBehaviorOptions;constructor(n,t){this.redirectTo=n,this.navigationBehaviorOptions=t}}const I0="ngNavigationCancelingError";function ui(e,n){const{redirectTo:t,navigationBehaviorOptions:o}=ut(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=T0(!1,Te.Redirect);return r.url=t,r.navigationBehaviorOptions=o,r}function T0(e,n){const t=new Error("NavigationCancelingError: ");return t[I0]=!0,t.cancellationCode=n,t}function o3(e){return E0(e)&&ut(e.url)}function E0(e){return!!e&&e[I0]}class r3{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,t,o,r,i){this.routeReuseStrategy=n,this.futureState=t,this.currState=o,this.forwardEvent=r,this.inputBindingEnabled=i}activate(n){const t=this.futureState._root,o=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,o,n),Ms(this.futureState.root),this.activateChildRoutes(t,o,n)}deactivateChildRoutes(n,t,o){const r=St(t);n.children.forEach(i=>{const s=i.value.outlet;this.deactivateRoutes(i,r[s],o),delete r[s]}),Object.values(r).forEach(i=>{this.deactivateRouteAndItsChildren(i,o)})}deactivateRoutes(n,t,o){const r=n.value,i=t?t.value:null;if(r===i)if(r.component){const s=o.getContext(r.outlet);s&&this.deactivateChildRoutes(n,t,s.children)}else this.deactivateChildRoutes(n,t,o);else i&&this.deactivateRouteAndItsChildren(t,o)}deactivateRouteAndItsChildren(n,t){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,t):this.deactivateRouteAndOutlet(n,t)}detachAndStoreRouteSubtree(n,t){const o=t.getContext(n.value.outlet),r=o&&n.value.component?o.children:t,i=St(n);for(const s of Object.values(i))this.deactivateRouteAndItsChildren(s,r);if(o&&o.outlet){const s=o.outlet.detach(),a=o.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,t){const o=t.getContext(n.value.outlet),r=o&&n.value.component?o.children:t,i=St(n);for(const s of Object.values(i))this.deactivateRouteAndItsChildren(s,r);o&&(o.outlet&&(o.outlet.deactivate(),o.children.onOutletDeactivated()),o.attachRef=null,o.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,t,o){const r=St(t);n.children.forEach(i=>{this.activateRoutes(i,r[i.value.outlet],o),this.forwardEvent(new $_(i.value.snapshot))}),n.children.length&&this.forwardEvent(new V_(n.value.snapshot))}activateRoutes(n,t,o){const r=n.value,i=t?t.value:null;if(Ms(r),r===i)if(r.component){const s=o.getOrCreateContext(r.outlet);this.activateChildRoutes(n,t,s.children)}else this.activateChildRoutes(n,t,o);else if(r.component){const s=o.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){const a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Ms(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,o)}}class jd{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}}class Pr{component;route;constructor(n,t){this.component=n,this.route=t}}function i3(e,n,t){const o=e._root,r=n?n._root:null;return mo(o,r,t,[o.value])}function s3(e){const n=e.routeConfig?e.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:e,guards:n}}function ao(e,n){const t=Symbol(),o=n.get(e,t);return o===t?typeof e=="function"&&!dm(e)?e:n.get(e):o}function mo(e,n,t,o,r={canDeactivateChecks:[],canActivateChecks:[]}){const i=St(n);return e.children.forEach(s=>{a3(s,i[s.value.outlet],t,o.concat([s.value]),r),delete i[s.value.outlet]}),Object.entries(i).forEach(([s,a])=>Co(a,t.getContext(s),r)),r}function a3(e,n,t,o,r={canDeactivateChecks:[],canActivateChecks:[]}){const i=e.value,s=n?n.value:null,a=t?t.getContext(e.value.outlet):null;if(s&&i.routeConfig===s.routeConfig){const l=l3(s,i,i.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new jd(o)):(i.data=s.data,i._resolvedData=s._resolvedData),i.component?mo(e,n,a?a.children:null,o,r):mo(e,n,t,o,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Pr(a.outlet.component,s))}else s&&Co(n,a,r),r.canActivateChecks.push(new jd(o)),i.component?mo(e,null,a?a.children:null,o,r):mo(e,null,t,o,r);return r}function l3(e,n,t){if(typeof t=="function")return De(n._environmentInjector,()=>t(e,n));switch(t){case"pathParamsChange":return!Xn(e.url,n.url);case"pathParamsOrQueryParamsChange":return!Xn(e.url,n.url)||!un(e.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ea(e,n)||!un(e.queryParams,n.queryParams);default:return!Ea(e,n)}}function Co(e,n,t){const o=St(e),r=e.value;Object.entries(o).forEach(([i,s])=>{r.component?n?Co(s,n.children.getContext(i),t):Co(s,null,t):Co(s,n,t)}),r.component?n&&n.outlet&&n.outlet.isActivated?t.canDeactivateChecks.push(new Pr(n.outlet.component,r)):t.canDeactivateChecks.push(new Pr(null,r)):t.canDeactivateChecks.push(new Pr(null,r))}function or(e){return typeof e=="function"}function c3(e){return typeof e=="boolean"}function d3(e){return e&&or(e.canLoad)}function u3(e){return e&&or(e.canActivate)}function f3(e){return e&&or(e.canActivateChild)}function h3(e){return e&&or(e.canDeactivate)}function p3(e){return e&&or(e.canMatch)}function M0(e){return e instanceof Ba||e?.name==="EmptyError"}const mr=Symbol("INITIAL_VALUE");function $t(){return Ze(e=>wu(e.map(n=>n.pipe(Ft(1),sm(mr)))).pipe(pe(n=>{for(const t of n)if(t!==!0){if(t===mr)return mr;if(t===!1||g3(t))return t}return!0}),Dt(n=>n!==mr),Ft(1)))}function g3(e){return ut(e)||e instanceof vc}function A0(e){return e.aborted?P(void 0).pipe(Ft(1)):new ue(n=>{const t=()=>{n.next(),n.complete()};return e.addEventListener("abort",t),()=>e.removeEventListener("abort",t)})}function P0(e){return js(A0(e))}function m3(e){return tn(n=>{const{targetSnapshot:t,currentSnapshot:o,guards:{canActivateChecks:r,canDeactivateChecks:i}}=n;return i.length===0&&r.length===0?P({...n,guardsResult:!0}):v3(i,t,o).pipe(tn(s=>s&&c3(s)?b3(t,r,e):P(s)),pe(s=>({...n,guardsResult:s})))})}function v3(e,n,t){return xe(e).pipe(tn(o=>C3(o.component,o.route,t,n)),pt(o=>o!==!0,!0))}function b3(e,n,t){return xe(n).pipe(xu(o=>Ns(w3(o.route.parent,t),y3(o.route,t),_3(e,o.path),x3(e,o.route))),pt(o=>o!==!0,!0))}function y3(e,n){return e!==null&&n&&n(new q_(e)),P(!0)}function w3(e,n){return e!==null&&n&&n(new U_(e)),P(!0)}function x3(e,n){const t=n.routeConfig?n.routeConfig.canActivate:null;if(!t||t.length===0)return P(!0);const o=t.map(r=>Ua(()=>{const i=n._environmentInjector,s=ao(r,i),a=u3(s)?s.canActivate(n,e):De(i,()=>s(n,e));return wt(a).pipe(pt())}));return P(o).pipe($t())}function _3(e,n){const t=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(i=>s3(i)).filter(i=>i!==null).map(i=>Ua(()=>{const s=i.guards.map(a=>{const l=i.node._environmentInjector,c=ao(a,l),d=f3(c)?c.canActivateChild(t,e):De(l,()=>c(t,e));return wt(d).pipe(pt())});return P(s).pipe($t())}));return P(r).pipe($t())}function C3(e,n,t,o){const r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return P(!0);const i=r.map(s=>{const a=n._environmentInjector,l=ao(s,a),c=h3(l)?l.canDeactivate(e,n,t,o):De(a,()=>l(e,n,t,o));return wt(c).pipe(pt())});return P(i).pipe($t())}function k3(e,n,t,o,r){const i=n.canLoad;if(i===void 0||i.length===0)return P(!0);const s=i.map(a=>{const l=ao(a,e),c=d3(l)?l.canLoad(n,t):De(e,()=>l(n,t)),d=wt(c);return r?d.pipe(P0(r)):d});return P(s).pipe($t(),R0(o))}function R0(e){return xg(cn(n=>{if(typeof n!="boolean")throw ui(e,n)}),pe(n=>n===!0))}function S3(e,n,t,o,r,i){const s=n.canMatch;if(!s||s.length===0)return P(!0);const a=s.map(l=>{const c=ao(l,e),d=p3(c)?c.canMatch(n,t,r):De(e,()=>c(n,t,r));return wt(d).pipe(P0(i))});return P(a).pipe($t(),R0(o))}class _n extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,_n.prototype)}}class jo extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,jo.prototype)}}function O3(e){throw new x(4e3,!1)}function I3(e){throw T0(!1,Te.GuardRejected)}class T3{urlSerializer;urlTree;constructor(n,t){this.urlSerializer=n,this.urlTree=t}async lineralizeSegments(n,t){let o=[],r=t.root;for(;;){if(o=o.concat(r.segments),r.numberOfChildren===0)return o;if(r.numberOfChildren>1||!r.children[M])throw O3(`${n.redirectTo}`);r=r.children[M]}}async applyRedirectCommands(n,t,o,r,i){const s=await E3(t,r,i);if(s instanceof sn)throw new jo(s);const a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,o);if(s[0]==="/")throw new jo(a);return a}applyRedirectCreateUrlTree(n,t,o,r){const i=this.createSegmentGroup(n,t.root,o,r);return new sn(i,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(n,t){const o={};return Object.entries(n).forEach(([r,i])=>{if(typeof i=="string"&&i[0]===":"){const a=i.substring(1);o[r]=t[a]}else o[r]=i}),o}createSegmentGroup(n,t,o,r){const i=this.createSegments(n,t.segments,o,r);let s=Object.create(null);return Object.entries(t.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,o,r)}),new B(i,s)}createSegments(n,t,o,r){return t.map(i=>i.path[0]===":"?this.findPosParam(n,i,r):this.findOrReturn(i,o))}findPosParam(n,t,o){const r=o[t.path.substring(1)];if(!r)throw new x(4001,!1);return r}findOrReturn(n,t){let o=0;for(const r of t){if(r.path===n.path)return t.splice(o),r;o++}return n}}function E3(e,n,t){if(typeof e=="string")return Promise.resolve(e);const o=e;return ai(wt(De(t,()=>o(n))))}function M3(e,n){return e.providers&&!e._injector&&(e._injector=cp(e.providers,n,`Route: ${e.path}`)),e._injector??n}function en(e){return e.outlet||M}function A3(e,n){const t=e.filter(o=>en(o)===n);return t.push(...e.filter(o=>en(o)!==n)),t}const Ma={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function L0(e){return{routeConfig:e.routeConfig,url:e.url,params:e.params,queryParams:e.queryParams,fragment:e.fragment,data:e.data,outlet:e.outlet,title:e.title,paramMap:e.paramMap,queryParamMap:e.queryParamMap}}function P3(e,n,t,o,r,i,s){const a=D0(e,n,t);if(!a.matched)return P(a);const l=L0(i(a));return o=M3(n,o),S3(o,n,t,r,l,s).pipe(pe(c=>c===!0?a:{...Ma}))}function D0(e,n,t){if(n.path==="")return n.pathMatch==="full"&&(e.hasChildren()||t.length>0)?{...Ma}:{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};const r=(n.matcher||s_)(t,e,n);if(!r)return{...Ma};const i={};Object.entries(r.posParams??{}).forEach(([a,l])=>{i[a]=l.path});const s=r.consumed.length>0?{...i,...r.consumed[r.consumed.length-1].parameters}:i;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function Hd(e,n,t,o,r){return t.length>0&&D3(e,t,o,r)?{segmentGroup:new B(n,L3(o,new B(t,e.children))),slicedSegments:[]}:t.length===0&&F3(e,t,o)?{segmentGroup:new B(e.segments,R3(e,t,o,e.children)),slicedSegments:t}:{segmentGroup:new B(e.segments,e.children),slicedSegments:t}}function R3(e,n,t,o){const r={};for(const i of t)if(os(e,n,i)&&!o[en(i)]){const s=new B([],{});r[en(i)]=s}return{...o,...r}}function L3(e,n){const t={};t[M]=n;for(const o of e)if(o.path===""&&en(o)!==M){const r=new B([],{});t[en(o)]=r}return t}function D3(e,n,t,o){return t.some(r=>!os(e,n,r)||!(en(r)!==M)?!1:!(o!==void 0&&en(r)===o))}function F3(e,n,t){return t.some(o=>os(e,n,o))}function os(e,n,t){return(e.hasChildren()||n.length>0)&&t.pathMatch==="full"?!1:t.path===""}function z3(e,n,t){return n.length===0&&!e.children[t]}class N3{}async function j3(e,n,t,o,r,i,s,a){return new B3(e,n,t,o,r,s,i,a).recognize()}const H3=31;class B3{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,t,o,r,i,s,a,l){this.injector=n,this.configLoader=t,this.rootComponentType=o,this.config=r,this.urlTree=i,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new T3(this.urlSerializer,this.urlTree)}noMatchError(n){return new x(4002,`'${n.segmentGroup}'`)}async recognize(){const n=Hd(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:o}=await this.match(n),r=new Ye(o,t),i=new C0("",r),s=T_(o,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(s),{state:i,tree:s}}async match(n){const t=new Ta([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,Object.freeze({}),M,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,M,t),rootSnapshot:t}}catch(o){if(o instanceof jo)return this.urlTree=o.urlTree,this.match(o.urlTree.root);throw o instanceof _n?this.noMatchError(o):o}}async processSegmentGroup(n,t,o,r,i){if(o.segments.length===0&&o.hasChildren())return this.processChildren(n,t,o,i);const s=await this.processSegment(n,t,o,o.segments,r,!0,i);return s instanceof Ye?[s]:[]}async processChildren(n,t,o,r){const i=[];for(const l of Object.keys(o.children))l==="primary"?i.unshift(l):i.push(l);let s=[];for(const l of i){const c=o.children[l],d=A3(t,l),u=await this.processSegmentGroup(n,d,c,l,r);s.push(...u)}const a=F0(s);return U3(a),a}async processSegment(n,t,o,r,i,s,a){for(const l of t)try{return await this.processSegmentAgainstRoute(l._injector??n,t,l,o,r,i,s,a)}catch(c){if(c instanceof _n||M0(c))continue;throw c}if(z3(o,r,i))return new N3;throw new _n(o)}async processSegmentAgainstRoute(n,t,o,r,i,s,a,l){if(en(o)!==s&&(s===M||!os(r,i,o)))throw new _n(r);if(o.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,o,i,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,t,o,i,s,l);throw new _n(r)}async expandSegmentAgainstRouteUsingRedirect(n,t,o,r,i,s,a){const{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:u,remainingSegments:f}=D0(t,r,i);if(!l)throw new _n(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>H3&&(this.allowRedirects=!1));const h=this.createSnapshot(n,r,i,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);const g=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,u,L0(h),n),y=await this.applyRedirects.lineralizeSegments(r,g);return this.processSegment(n,o,t,y.concat(f),s,!1,a)}createSnapshot(n,t,o,r,i){const s=new Ta(o,r,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,q3(t),en(t),t.component??t._loadedComponent??null,t,$3(t),n),a=pc(s,i,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,t,o,r,i,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);const a=Vn=>this.createSnapshot(n,o,Vn.consumedSegments,Vn.parameters,s),l=await ai(P3(t,o,r,n,this.urlSerializer,a,this.abortSignal));if(o.path==="**"&&(t.children={}),!l?.matched)throw new _n(t);n=o._injector??n;const{routes:c}=await this.getChildConfig(n,o,r),d=o._loadedInjector??n,{parameters:u,consumedSegments:f,remainingSegments:h}=l,g=this.createSnapshot(n,o,f,u,s),{segmentGroup:y,slicedSegments:R}=Hd(t,f,h,c,i);if(R.length===0&&y.hasChildren()){const Vn=await this.processChildren(d,c,y,g);return new Ye(g,Vn)}if(c.length===0&&R.length===0)return new Ye(g,[]);const G=en(o)===i,Oe=await this.processSegment(d,c,y,R,G?M:i,!0,g);return new Ye(g,Oe instanceof Ye?[Oe]:[])}async getChildConfig(n,t,o){if(t.children)return{routes:t.children,injector:n};if(t.loadChildren){if(t._loadedRoutes!==void 0){const i=t._loadedNgModuleFactory;return i&&!t._loadedInjector&&(t._loadedInjector=i.create(n).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await ai(k3(n,t,o,this.urlSerializer,this.abortSignal))){const i=await this.configLoader.loadChildren(n,t);return t._loadedRoutes=i.routes,t._loadedInjector=i.injector,t._loadedNgModuleFactory=i.factory,i}throw I3()}return{routes:[],injector:n}}}function U3(e){e.sort((n,t)=>n.value.outlet===M?-1:t.value.outlet===M?1:n.value.outlet.localeCompare(t.value.outlet))}function V3(e){const n=e.value.routeConfig;return n&&n.path===""}function F0(e){const n=[],t=new Set;for(const o of e){if(!V3(o)){n.push(o);continue}const r=n.find(i=>o.value.routeConfig===i.value.routeConfig);r!==void 0?(r.children.push(...o.children),t.add(r)):n.push(o)}for(const o of t){const r=F0(o.children);n.push(new Ye(o.value,r))}return n.filter(o=>!t.has(o))}function q3(e){return e.data||{}}function $3(e){return e.resolve||{}}function G3(e,n,t,o,r,i,s){return tn(async a=>{const{state:l,tree:c}=await j3(e,n,t,o,a.extractedUrl,r,i,s);return{...a,targetSnapshot:l,urlAfterRedirects:c}})}function Z3(e){return tn(n=>{const{targetSnapshot:t,guards:{canActivateChecks:o}}=n;if(!o.length)return P(n);const r=new Set(o.map(a=>a.route)),i=new Set;for(const a of r)if(!i.has(a))for(const l of z0(a))i.add(l);let s=0;return xe(i).pipe(xu(a=>r.has(a)?W3(a,t,e):(a.data=pc(a,a.parent,e).resolve,P(void 0))),cn(()=>s++),_u(1),tn(a=>s===i.size?P(n):Re))})}function z0(e){const n=e.children.map(t=>z0(t)).flat();return[e,...n]}function W3(e,n,t){const o=e.routeConfig,r=e._resolve;return o?.title!==void 0&&!S0(o)&&(r[nr]=o.title),Ua(()=>(e.data=pc(e,e.parent,t).resolve,Q3(r,e,n).pipe(pe(i=>(e._resolvedData=i,e.data={...e.data,...i},null)))))}function Q3(e,n,t){const o=wa(e);if(o.length===0)return P({});const r={};return xe(o).pipe(tn(i=>Y3(e[i],n,t).pipe(pt(),cn(s=>{if(s instanceof vc)throw ui(new es,s);r[i]=s}))),_u(1),pe(()=>r),Va(i=>M0(i)?Re:Ug(i)))}function Y3(e,n,t){const o=n._environmentInjector,r=ao(e,o),i=r.resolve?r.resolve(n,t):De(o,()=>r(n,t));return wt(i)}function Bd(e){return Ze(n=>{const t=e(n);return t?xe(t).pipe(pe(()=>n)):P(n)})}let N0=(()=>{class e{buildTitle(t){let o,r=t.root;for(;r!==void 0;)o=this.getResolvedTitleForRoute(r)??o,r=r.children.find(i=>i.outlet===M);return o}getResolvedTitleForRoute(t){return t.data[nr]}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:()=>p(X3)})}return e})(),X3=(()=>{class e extends N0{title;constructor(t){super(),this.title=t}updateTitle(t){const o=this.buildTitle(t);o!==void 0&&this.title.setTitle(o)}static ɵfac=function(o){return new(o||e)(D(r_))};static ɵprov=K({token:e,factory:e.ɵfac,providedIn:"root"})}return e})();const rs=new T("",{factory:()=>({})}),bc=new T("");let K3=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=p(Pw);async loadComponent(t,o){if(this.componentLoaders.get(o))return this.componentLoaders.get(o);if(o._loadedComponent)return Promise.resolve(o._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(o);const r=(async()=>{try{const i=await r0(De(t,()=>o.loadComponent())),s=await j0(Up(i));return this.onLoadEndListener&&this.onLoadEndListener(o),o._loadedComponent=s,s}finally{this.componentLoaders.delete(o)}})();return this.componentLoaders.set(o,r),r}loadChildren(t,o){if(this.childrenLoaders.get(o))return this.childrenLoaders.get(o);if(o._loadedRoutes)return Promise.resolve({routes:o._loadedRoutes,injector:o._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(o);const r=(async()=>{try{const i=await J3(o,this.compiler,t,this.onLoadEndListener);return o._loadedRoutes=i.routes,o._loadedInjector=i.injector,o._loadedNgModuleFactory=i.factory,i}finally{this.childrenLoaders.delete(o)}})();return this.childrenLoaders.set(o,r),r}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:e.ɵfac})}return e})();async function J3(e,n,t,o){const r=await r0(De(t,()=>e.loadChildren())),i=await j0(Up(r));let s;i instanceof ap||Array.isArray(i)?s=i:s=await n.compileModuleAsync(i),o&&o(e);let a,l,c;return Array.isArray(s)?l=s:(a=s.create(t).injector,c=s,l=a.get(bc,[],{optional:!0,self:!0}).flat()),{routes:l.map(mc),injector:a,factory:c}}async function j0(e){return e}let yc=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:()=>p(e4)})}return e})(),e4=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,o){return t}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:e.ɵfac})}return e})();const n4=new T(""),t4=new T(""),o4=()=>{},r4=new T("");let i4=(()=>{class e{currentNavigation=H(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=H(null);events=new nn;transitionAbortWithErrorSubject=new nn;configLoader=p(K3);environmentInjector=p(je);destroyRef=p(an);urlSerializer=p(Ji);rootContexts=p(ns);location=p(Yi);inputBindingEnabled=p(ts,{optional:!0})!==null;titleStrategy=p(N0);options=p(rs,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Q_;urlHandlingStrategy=p(yc);createViewTransition=p(n4,{optional:!0});navigationErrorHandler=p(r4,{optional:!0});activatedRouteInjectorFeature=p(t4,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>P(void 0);rootComponentType=null;destroyed=!1;constructor(){const t=r=>this.events.next(new H_(r)),o=r=>this.events.next(new B_(r));this.configLoader.onLoadEndListener=o,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){const o=++this.navigationId;ce(()=>{this.transitions?.next({...t,extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:o,routesRecognizeHandler:{},beforeActivateHandler:{}})})}setupNavigations(t){return this.transitions=new ze(null),this.transitions.pipe(Dt(o=>o!==null),Ze(o=>{let r=!0,i=!1;const s=new AbortController,a=()=>!i&&this.currentTransition?.id===o.id;return P(o).pipe(Ze(l=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",Te.SupersededByNewNavigation),Re;this.currentTransition=o;const c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:c?{...c,previousNavigation:null}:null,abort:()=>s.abort(),routesRecognizeHandler:l.routesRecognizeHandler,beforeActivateHandler:l.beforeActivateHandler});const d=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=l.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new zo(l.id,this.urlSerializer.serialize(l.rawUrl),"",Sa.IgnoredSameUrlNavigation)),l.resolve(!1),Re;if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return P(l).pipe(Ze(f=>(this.events.next(new ka(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?Re:Promise.resolve(f))),G3(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),cn(f=>{o.targetSnapshot=f.targetSnapshot,o.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(h=>(h.finalUrl=f.urlAfterRedirects,h)),this.events.next(new y0)}),Ze(f=>xe(o.routesRecognizeHandler.deferredHandle??P(void 0)).pipe(pe(()=>f))),cn(()=>{const f=new b0(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(f)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){const{id:f,extractedUrl:h,source:g,restoredState:y,extras:R}=l,G=new ka(f,this.urlSerializer.serialize(h),g,y);this.events.next(G);const Oe=_0(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=o={...l,targetSnapshot:Oe,urlAfterRedirects:h,extras:{...R,skipLocationChange:!1,replaceUrl:!1}},this.currentNavigation.update(Vn=>(Vn.finalUrl=h,Vn)),P(o)}else return this.events.next(new zo(l.id,this.urlSerializer.serialize(l.extractedUrl),"",Sa.IgnoredByUrlHandlingStrategy)),l.resolve(!1),Re}),pe(l=>{const c=new F_(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);return this.events.next(c),this.currentTransition=o={...l,guards:i3(l.targetSnapshot,l.currentSnapshot,this.rootContexts)},o}),m3(l=>this.events.next(l)),Ze(l=>{if(o.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw ui(this.urlSerializer,l.guardsResult);const c=new z_(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);if(this.events.next(c),!a())return Re;if(!l.guardsResult)return this.cancelNavigationTransition(l,"",Te.GuardRejected),Re;if(l.guards.canActivateChecks.length===0)return P(l);const d=new N_(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);if(this.events.next(d),!a())return Re;let u=!1;return P(l).pipe(Z3(this.paramsInheritanceStrategy),cn({next:()=>{u=!0;const f=new j_(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(f)},complete:()=>{u||this.cancelNavigationTransition(l,"",Te.NoDataFromResolver)}}))}),Bd(l=>{const c=u=>{const f=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){const h=u._environmentInjector;f.push(this.configLoader.loadComponent(h,u.routeConfig).then(g=>{u.component=g}))}for(const h of u.children)f.push(...c(h));return f},d=c(l.targetSnapshot.root);return d.length===0?P(l):xe(Promise.all(d).then(()=>l))}),Ze(l=>{const{newlyCreatedRoutes:c,state:d}=e3(t.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=l={...l,targetRouterState:d,newlyCreatedRoutes:c},this.currentNavigation.update(u=>(u.targetRouterState=d,u)),P(l)}),this.activatedRouteInjectorFeature?.operator()??(l=>l),Bd(()=>this.afterPreactivation()),Ze(()=>{const{currentSnapshot:l,targetSnapshot:c}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return d?xe(d).pipe(pe(()=>o)):P(o)}),Ft(1),Ze(l=>{r=!1,this.events.next(new hc);const c=o.beforeActivateHandler.deferredHandle;return c?xe(c.then(()=>l)):P(l)}),cn(l=>{new r3(t.routeReuseStrategy,o.targetRouterState,o.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),l.newlyCreatedRoutes?.clear(),a()&&(i=!0,this.currentNavigation.update(c=>(c.abort=o4,c)),this.lastSuccessfulNavigation.set(ce(this.currentNavigation)),this.events.next(new ft(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0))}),js(A0(s.signal).pipe(Dt(()=>!i&&r),cn(()=>{this.cancelNavigationTransition(o,s.signal.reason+"",Te.Aborted)}))),cn({complete:()=>{i=!0}}),js(this.transitionAbortWithErrorSubject.pipe(cn(l=>{throw l}))),im(()=>{s.abort(),i||this.cancelNavigationTransition(o,"",Te.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Va(l=>{if(i=!0,Ud(o),this.destroyed)return o.resolve(!1),Re;if(E0(l))this.events.next(new zn(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),o3(l)?this.events.next(new di(l.url,l.navigationBehaviorOptions)):o.resolve(!1);else{const c=new fc(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0);try{const d=De(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof vc){const{message:u,cancellationCode:f}=ui(this.urlSerializer,d);this.events.next(new zn(o.id,this.urlSerializer.serialize(o.extractedUrl),u,f)),this.events.next(new di(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),l}catch(d){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(d)}}return Re}))}))}cancelNavigationTransition(t,o,r){Ud(t);const i=new zn(t.id,this.urlSerializer.serialize(t.extractedUrl),o,r);this.events.next(i),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){const t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),o=ce(this.currentNavigation),r=o?.targetBrowserUrl??o?.extractedUrl;return t.toString()!==r?.toString()&&!o?.extras.skipLocationChange}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:e.ɵfac})}return e})();function s4(e){return e!==Ar}function Ud(e){if(e.newlyCreatedRoutes)for(const n of e.newlyCreatedRoutes)n._localInjector?.destroy()}const a4=new T("");let l4=(()=>{class e{static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:()=>p(d4)})}return e})();class c4{shouldDetach(n){return!1}store(n,t){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,t){return n.routeConfig===t.routeConfig}shouldDestroyInjector(n){return!0}}let d4=(()=>{class e extends c4{static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:e.ɵfac})}return e})(),wc=(()=>{class e{urlSerializer=p(Ji);options=p(rs,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=p(Yi);urlHandlingStrategy=p(yc);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new sn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:o,targetBrowserUrl:r}){const i=t!==void 0?this.urlHandlingStrategy.merge(t,o):o,s=r??i;return s instanceof sn?this.urlSerializer.serialize(s):s}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:o,initialUrl:r}){o&&t?(this.currentUrlTree=o,this.rawUrlTree=this.urlHandlingStrategy.merge(o,r),this.routerState=t):this.rawUrlTree=r}routerState=_0(null,p(je));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:()=>p(u4)})}return e})(),u4=(()=>{class e extends wc{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(o=>{o.type==="popstate"&&setTimeout(()=>{t(o.url,o.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,o){t instanceof ka?this.updateStateMemento():t instanceof zo?this.commitTransition(o):t instanceof b0?this.urlUpdateStrategy==="eager"&&(o.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(o),o)):t instanceof hc?(this.commitTransition(o),this.urlUpdateStrategy==="deferred"&&!o.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(o),o)):t instanceof zn&&!D_(t)?this.restoreHistory(o):t instanceof fc?this.restoreHistory(o,!0):t instanceof ft&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,o){const{extras:r,id:i}=o,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(t)||s){const l=this.browserPageId,c={...a,...this.generateNgRouterState(i,l,o)};this.location.replaceState(t,"",c)}else{const l={...a,...this.generateNgRouterState(i,this.browserPageId+1,o)};this.location.go(t,"",l)}}restoreHistory(t,o=!1){if(this.canceledNavigationResolution==="computed"){const r=this.browserPageId,i=this.currentPageId-r;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===t.finalUrl&&i===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(o&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,o,r){return this.canceledNavigationResolution==="computed"?{navigationId:t,ɵrouterPageId:o,...this.routerUrlState(r)}:{navigationId:t,...this.routerUrlState(r)}}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:e.ɵfac})}return e})();function f4(e,n){e.events.pipe(Dt(t=>t instanceof ft||t instanceof zn||t instanceof fc||t instanceof zo),pe(t=>t instanceof ft||t instanceof zo?0:(t instanceof zn?t.code===Te.Redirect||t.code===Te.SupersededByNewNavigation:!1)?2:1),Dt(t=>t!==2),Ft(1)).subscribe(()=>{n()})}let rr=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=p(Oy);stateManager=p(wc);options=p(rs,{optional:!0})||{};pendingTasks=p(Yo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=p(i4);urlSerializer=p(Ji);location=p(Yi);urlHandlingStrategy=p(yc);injector=p(je);_events=new nn;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=p(l4);injectorCleanup=p(a4,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=p(bc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!p(ts,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ht;subscribeToNavigationEvents(){const t=this.navigationTransitions.events.subscribe(o=>{try{const r=this.navigationTransitions.currentTransition,i=ce(this.navigationTransitions.currentNavigation);if(r!==null&&i!==null){if(this.stateManager.handleRouterEvent(o,i),o instanceof zn&&o.code!==Te.Redirect&&o.code!==Te.SupersededByNewNavigation)this.navigated=!0;else if(o instanceof ft)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(o instanceof di){const s=o.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(o.url,r.currentRawUrl),l={scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||s4(r.source),...s};this.scheduleNavigation(a,Ar,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}G_(o)&&this._events.next(o)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ar,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,o,r,i)=>{this.navigateToSyncWithBrowser(t,r,o,i)})}navigateToSyncWithBrowser(t,o,r,i){const s=r?.navigationId?r:null,a=r?.ɵrouterUrl??t;if(r?.ɵrouterUrl&&(i={...i,browserUrl:t}),r){const c={...r};delete c.navigationId,delete c.ɵrouterPageId,delete c.ɵrouterUrl,Object.keys(c).length!==0&&(i.state=c)}const l=this.parseUrl(a);this.scheduleNavigation(l,o,s,i).catch(c=>{this.disposed||this.injector.get(to)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ce(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(mc),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,o={}){const{relativeTo:r,queryParams:i,fragment:s,queryParamsHandling:a,preserveFragment:l}=o,c=l?this.currentUrlTree.fragment:s;let d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d={...this.currentUrlTree.queryParams,...i};break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let u;try{const f=r?r.snapshot:this.routerState.snapshot.root;u=p0(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),u=this.currentUrlTree.root}return g0(u,t,d,c??null,this.urlSerializer)}navigateByUrl(t,o={skipLocationChange:!1}){const r=ut(t)?t:this.parseUrl(t),i=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(i,Ar,null,o)}navigate(t,o={skipLocationChange:!1}){return h4(t),this.navigateByUrl(this.createUrlTree(t,o),o)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(qa(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,o){let r;if(o===!0?r={...s0}:o===!1?r={...li}:r={...li,...o},ut(t))return xa(this.currentUrlTree,t,r);const i=this.parseUrl(t);return xa(this.currentUrlTree,i,r)}removeEmptyProps(t){return Object.entries(t).reduce((o,[r,i])=>(i!=null&&(o[r]=i),o),{})}scheduleNavigation(t,o,r,i,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((u,f)=>{a=u,l=f});const d=this.pendingTasks.add();return f4(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:o,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:i,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:e.ɵfac})}return e})();function h4(e){for(let n=0;n<e.length;n++)if(e[n]==null)throw new x(4008,!1)}let p4=(()=>{class e{router=p(rr);stateManager=p(wc);fragment=H("");queryParams=H({});path=H("");serializer=p(Ji);constructor(){this.updateState(),this.router.events?.subscribe(t=>{t instanceof ft&&this.updateState()})}updateState(){const{fragment:t,root:o,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(t),this.queryParams.set(r),this.path.set(this.serializer.serialize(new sn(o)))}static ɵfac=function(o){return new(o||e)};static ɵprov=ne({token:e,factory:e.ɵfac})}return e})(),Aa=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=p(new zw("href"),{optional:!0});reactiveHref=Fw(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ce(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}set target(t){this._target.set(t)}get target(){return ce(this._target)}_target=H(void 0);set queryParams(t){this._queryParams.set(t)}get queryParams(){return ce(this._queryParams)}_queryParams=H(void 0,{equal:()=>!1});set fragment(t){this._fragment.set(t)}get fragment(){return ce(this._fragment)}_fragment=H(void 0);set queryParamsHandling(t){this._queryParamsHandling.set(t)}get queryParamsHandling(){return ce(this._queryParamsHandling)}_queryParamsHandling=H(void 0);set state(t){this._state.set(t)}get state(){return ce(this._state)}_state=H(void 0,{equal:()=>!1});set info(t){this._info.set(t)}get info(){return ce(this._info)}_info=H(void 0,{equal:()=>!1});set relativeTo(t){this._relativeTo.set(t)}get relativeTo(){return ce(this._relativeTo)}_relativeTo=H(void 0);set preserveFragment(t){this._preserveFragment.set(t)}get preserveFragment(){return ce(this._preserveFragment)}_preserveFragment=H(!1);set skipLocationChange(t){this._skipLocationChange.set(t)}get skipLocationChange(){return ce(this._skipLocationChange)}_skipLocationChange=H(!1);set replaceUrl(t){this._replaceUrl.set(t)}get replaceUrl(){return ce(this._replaceUrl)}_replaceUrl=H(!1);browserUrl=w(void 0);isAnchorElement;onChanges=new nn;applicationErrorHandler=p(to);options=p(rs,{optional:!0});reactiveRouterState=p(p4);constructor(t,o,r,i,s,a){this.router=t,this.route=o,this.tabIndexAttribute=r,this.renderer=i,this.el=s,this.locationStrategy=a;const l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.onChanges.next(this)}routerLinkInput=H(null);set routerLink(t){t==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(ut(t)?this.routerLinkInput.set(t):this.routerLinkInput.set(Array.isArray(t)?t:[t]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,o,r,i,s){const a=this._urlTree();if(a===null||this.isAnchorElement&&(t!==0||o||r||i||s||typeof this.target=="string"&&this.target!="_self"))return!0;const l=this.browserUrl(),c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info,...l!==void 0&&{browserUrl:l}};return this.router.navigateByUrl(a,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(t,o){const r=this.renderer,i=this.el.nativeElement;o!==null?r.setAttribute(i,t,o):r.removeAttribute(i,t)}_urlTree=q(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();const t=r=>r==="preserve"||r==="merge";(t(this._queryParamsHandling())||t(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();const o=this.routerLinkInput();return o===null||!this.router.createUrlTree?null:ut(o)?o:this.router.createUrlTree(o,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(t,o)=>this.computeHref(t)===this.computeHref(o)});get urlTree(){return ce(this._urlTree)}computeHref(t){return t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null}static ɵfac=function(o){return new(o||e)(fe(rr),fe(tr),Vf("tabindex"),fe(Vh),fe(bn),fe(so))};static ɵdir=jn({type:e,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(o,r){o&1&&z("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),o&2&&se("href",r.reactiveHref(),Iv)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Je],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Je],replaceUrl:[2,"replaceUrl","replaceUrl",Je],browserUrl:[1,"browserUrl"],routerLink:"routerLink"},features:[zi]})}return e})(),g4=(()=>{class e{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Le;link=p(Aa,{optional:!0});constructor(t,o,r,i){this.router=t,this.element=o,this.renderer=r,this.cdr=i,this.routerEventsSubscription=t.events.subscribe(s=>{s instanceof ft&&this.update()})}ngAfterContentInit(){P(this.links.changes,P(null)).pipe(zs()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();const t=[...this.links.toArray(),this.link].filter(o=>!!o).map(o=>o.onChanges);this.linkInputChangesSubscription=xe(t).pipe(zs()).subscribe(o=>{this._isActive!==this.isLinkActive(this.router)(o)&&this.update()})}set routerLinkActive(t){const o=Array.isArray(t)?t:t.split(" ");this.classes=o.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{const t=this.hasActiveLinks();this.classes.forEach(o=>{t?this.renderer.addClass(this.element.nativeElement,o):this.renderer.removeClass(this.element.nativeElement,o)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){const o=m4(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?{...s0}:{...li};return r=>{const i=r.urlTree;return i?ce(d_(i,t,o)):!1}}hasActiveLinks(){const t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static ɵfac=function(o){return new(o||e)(fe(rr),fe(bn),fe(Vh),fe(Gp))};static ɵdir=jn({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(o,r,i){if(o&1&&xp(i,Aa,5),o&2){let s;Yy(s=Xy())&&(r.links=s)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[zi]})}return e})();function m4(e){const n=e;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}const v4=new T("");function b4(e,...n){return zu([{provide:bc,multi:!0,useValue:e},{provide:tr,useFactory:y4},{provide:pp,multi:!0,useFactory:w4},n.map(t=>t.ɵproviders)])}function y4(){return p(rr).routerState.root}function H0(e,n){return{ɵkind:e,ɵproviders:n}}function w4(){const e=p(Be);return n=>{const t=e.get(oi);if(n!==t.components[0])return;const o=e.get(rr),r=e.get(x4);e.get(_4)===1&&o.initialNavigation(),e.get(C4,null,{optional:!0})?.setUpPreloading(),e.get(v4,null,{optional:!0})?.init(),o.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}const x4=new T("",{factory:()=>new nn}),_4=new T("",{factory:()=>1}),C4=new T("");function k4(){return H0(6,[{provide:so,useClass:dx}])}function S4(e={}){return H0(8,[{provide:ts,useFactory:()=>new K_(e)}])}function O4(e){if(e.hidden)return!1;const n=e.getClientRects();return e.offsetParent!==null||n.length>0}const I4=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(",");class Gt{enabled=w(!0,{alias:"foldFocusTrap"});host=p(bn);document=p(Se);previouslyFocused=null;constructor(){bt(n=>{this.enabled()&&(this.activate(),n(()=>this.restore()))})}onKeydown(n){if(n.key!=="Tab"||!this.enabled())return;const t=this.focusable();if(t.length===0){n.preventDefault(),this.host.nativeElement.focus();return}const o=t[0],r=t[t.length-1];if(!o||!r)return;const i=this.document.activeElement;n.shiftKey&&i===o?(n.preventDefault(),r.focus()):!n.shiftKey&&i===r&&(n.preventDefault(),o.focus())}activate(){const n=this.document.activeElement;this.previouslyFocused=n instanceof HTMLElement?n:null,(this.focusable()[0]??this.host.nativeElement).focus()}restore(){this.previouslyFocused?.focus(),this.previouslyFocused=null}focusable(){const n=Array.from(this.host.nativeElement.querySelectorAll(I4)),t=n.filter(O4);return t.length>0?t:n}static ɵfac=function(t){return new(t||Gt)};static ɵdir=jn({type:Gt,selectors:[["","foldFocusTrap",""]],hostBindings:function(t,o){t&1&&z("keydown",function(i){return o.onKeydown(i)})},inputs:{enabled:[1,"foldFocusTrap","enabled"]}})}class At{counter=0;next(n="fold"){return this.counter+=1,`${n}-${this.counter}`}static ɵfac=function(t){return new(t||At)};static ɵprov=K({token:At,factory:At.ɵfac,providedIn:"root"})}function T4(e){const n=e instanceof bn?e.nativeElement:p(bn).nativeElement,t=H(0);if(typeof ResizeObserver<"u"){const o=new ResizeObserver(r=>{const i=r[0]?.contentRect.width??0;i>0&&t.set(i)});o.observe(n),p(an).onDestroy(()=>o.disconnect())}return t.asReadonly()}class fi{foldSurface=w("page",{transform:n=>n===""?"page":n});static ɵfac=function(t){return new(t||fi)};static ɵdir=jn({type:fi,selectors:[["","foldSurface",""]],hostVars:1,hostBindings:function(t,o){t&2&&se("data-surface",o.foldSurface())},inputs:{foldSurface:[1,"foldSurface"]}})}const E4=[[["","railPrimary",""]],[["","railSecondary",""]],[["","header",""]],"*",[["","footer",""]]],M4=["[railPrimary]","[railSecondary]","[header]","*","[footer]"];function A4(e,n){if(e&1){const t=Ae();m(0,"div",8),z("click",function(){re(t);const r=k();return ie(r.closeMobileNav())}),v()}}function P4(e,n){if(e&1&&(m(0,"footer",9),oe(1,4),v()),e&2){const t=k();ve("footer-inflow",t.footerBehavior()==="scroll"),O("inert",t.drawerOpen())}}function R4(e,n){if(e&1&&Hn(0,7),e&2){k();const t=Un(10);O("ngTemplateOutlet",t)}}function L4(e,n){if(e&1&&Hn(0,7),e&2){k();const t=Un(10);O("ngTemplateOutlet",t)}}const D4=768;class hi{railWidth=w();headerHeight=w();headerHeightMobile=w();headerLayout=w("inset");footerLayout=w("inset");footerBehavior=w("pinned");contentScroll=w("clip");skipLinkLabel=w("Skip to content");drawerLabel=w("Menu");document=p(Se);contentId=p(At).next("fold-shell-content");drawerId=p(At).next("fold-shell-drawer");mobileNav=w("drawer");mobileNavOpen=Qi(!1);width=T4();isNarrow=q(()=>{const n=this.width();return n>0&&n<=D4});drawerOpen=q(()=>this.mobileNav()==="drawer"&&this.isNarrow()&&this.mobileNavOpen());constructor(){bt(()=>{!this.isNarrow()&&this.mobileNavOpen()&&this.mobileNavOpen.set(!1)})}onEscape(){this.drawerOpen()&&this.mobileNavOpen.set(!1)}closeMobileNav(){this.mobileNavOpen.set(!1)}skipToContent(n){n.preventDefault(),this.document.getElementById(this.contentId)?.focus()}railWidthVar=q(()=>As(this.railWidth()));headerHeightVar=q(()=>As(this.headerHeight()));headerHeightMobileVar=q(()=>As(this.headerHeightMobile()));static ɵfac=function(t){return new(t||hi)};static ɵcmp=le({type:hi,selectors:[["fold-app-shell"]],hostVars:18,hostBindings:function(t,o){t&1&&z("keydown.escape",function(){return o.onEscape()},bl),t&2&&(Pn("--fold-shell-rail-width",o.railWidthVar())("--fold-shell-header-height",o.headerHeightVar())("--fold-shell-header-height-mobile",o.headerHeightMobileVar()),ve("header-full",o.headerLayout()==="full")("footer-full",o.footerLayout()==="full")("footer-scroll",o.footerBehavior()==="scroll")("mobile-drawer",o.mobileNav()==="drawer")("mobile-nav-open",o.drawerOpen())("content-auto",o.contentScroll()==="auto"))},inputs:{railWidth:[1,"railWidth"],headerHeight:[1,"headerHeight"],headerHeightMobile:[1,"headerHeightMobile"],headerLayout:[1,"headerLayout"],footerLayout:[1,"footerLayout"],footerBehavior:[1,"footerBehavior"],contentScroll:[1,"contentScroll"],skipLinkLabel:[1,"skipLinkLabel"],drawerLabel:[1,"drawerLabel"],mobileNav:[1,"mobileNav"],mobileNavOpen:[1,"mobileNavOpen"]},outputs:{mobileNavOpen:"mobileNavOpenChange"},exportAs:["foldAppShell"],ngContentSelectors:M4,decls:15,vars:14,consts:[["footerTpl",""],[1,"skip-link",3,"click","href"],["foldSurface","chrome","tabindex","-1",1,"rail-primary",3,"id","foldFocusTrap"],["foldSurface","chrome",1,"rail-secondary",3,"inert"],["aria-hidden","true",1,"mobile-scrim"],["foldSurface","chrome",1,"header",3,"inert"],["foldSurface","page","tabindex","-1",1,"content",3,"id","inert"],[3,"ngTemplateOutlet"],["aria-hidden","true",1,"mobile-scrim",3,"click"],["foldSurface","chrome",1,"footer",3,"inert"]],template:function(t,o){t&1&&(Bn(E4),m(0,"a",1),z("click",function(i){return o.skipToContent(i)}),E(1),v(),m(2,"div",2),oe(3),v(),m(4,"div",3),oe(5,1),v(),W(6,A4,1,0,"div",4),m(7,"header",5),oe(8,2),v(),Jl(9,P4,2,3,"ng-template",null,0,zp),m(11,"main",6),oe(12,3),W(13,R4,1,1,"ng-container",7),v(),W(14,L4,1,1,"ng-container",7)),t&2&&(O("href","#"+o.contentId,sh),b(),Fe(o.skipLinkLabel()),b(),O("id",o.drawerId)("foldFocusTrap",o.drawerOpen()),se("role",o.drawerOpen()?"dialog":null)("aria-modal",o.drawerOpen()?"true":null)("aria-label",o.drawerOpen()?o.drawerLabel():null),b(2),O("inert",o.drawerOpen()),b(2),Q(o.drawerOpen()?6:-1),b(),O("inert",o.drawerOpen()),b(4),O("id",o.contentId)("inert",o.drawerOpen()),b(2),Q(o.footerBehavior()==="scroll"?13:-1),b(),Q(o.footerBehavior()!=="scroll"?14:-1))},dependencies:[fi,lc,Gt],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: grid;
  height: 100%;
  width: 100%;
  

  position: relative;
  

  box-sizing: border-box;
  overflow: hidden;
  background: var(--fold-color-bg-page);
  



  grid-template-columns: auto auto minmax(0, 1fr);
  


  grid-template-rows: var(--fold-shell-header-height, 56px) 1fr;
  grid-template-areas: "rail-primary rail-secondary header" "rail-primary rail-secondary content";
}




.skip-link[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 60;
  margin: var(--fold-space-sm, 8px);
  padding: 8px 14px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  font-size: var(--fold-text-sm);
  font-weight: 600;
  text-decoration: none;
  transform: translateY(-150%);
  transition: transform 120ms ease;
}

.skip-link[_ngcontent-%COMP%]:focus {
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .skip-link[_ngcontent-%COMP%] {
    transition: none;
  }
}


.header-full[_nghost-%COMP%] {
  grid-template-areas: "header       header         header" "rail-primary rail-secondary content";
}









[_nghost-%COMP%]:not(.footer-scroll):has([footer]) {
  grid-template-rows: var(--fold-shell-header-height, 56px) 1fr auto;
  grid-template-areas: "rail-primary rail-secondary header" "rail-primary rail-secondary content" "rail-primary rail-secondary footer";
}

.header-full[_nghost-%COMP%]:not(.footer-scroll):has([footer]) {
  grid-template-areas: "header       header         header" "rail-primary rail-secondary content" "rail-primary rail-secondary footer";
}

.footer-full[_nghost-%COMP%]:not(.footer-scroll):has([footer]) {
  grid-template-areas: "rail-primary rail-secondary header" "rail-primary rail-secondary content" "footer       footer         footer";
}

.header-full.footer-full[_nghost-%COMP%]:not(.footer-scroll):has([footer]) {
  grid-template-areas: "header       header         header" "rail-primary rail-secondary content" "footer       footer         footer";
}




.rail-primary[_ngcontent-%COMP%] {
  grid-area: rail-primary;
  min-height: 0;
}

.rail-secondary[_ngcontent-%COMP%] {
  grid-area: rail-secondary;
  min-height: 0;
}

.header[_ngcontent-%COMP%] {
  grid-area: header;
  min-width: 0;
}



.footer[_ngcontent-%COMP%] {
  grid-area: footer;
  min-width: 0;
  min-height: 0;
}



.content[_ngcontent-%COMP%] {
  grid-area: content;
  position: relative;
  

  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}



.content[_ngcontent-%COMP%]:focus {
  outline: none;
}







.footer-scroll[_nghost-%COMP%]   .content[_ngcontent-%COMP%], 
.content-auto[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {
  overflow: auto;
}

.footer-inflow[_ngcontent-%COMP%] {
  margin-top: auto;
}








.rail-primary[_ngcontent-%COMP%]:has([data-elevated]), 
.rail-secondary[_ngcontent-%COMP%]:has([data-elevated]), 
.header[_ngcontent-%COMP%]:has([data-elevated]), 
.footer[_ngcontent-%COMP%]:has([data-elevated]), 
.content[_ngcontent-%COMP%]:has([data-elevated]) {
  padding: var(--fold-surface-inset, var(--fold-space-md));
}








@media (max-width: 768px) {
  [_nghost-%COMP%], 
   .header-full[_nghost-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: var(--fold-shell-header-height-mobile, 52px) 1fr;
    grid-template-areas: "header" "content";
  }
  [_nghost-%COMP%]:not(.footer-scroll):has([footer]), 
   .header-full[_nghost-%COMP%]:not(.footer-scroll):has([footer]), 
   .footer-full[_nghost-%COMP%]:not(.footer-scroll):has([footer]), 
   .header-full.footer-full[_nghost-%COMP%]:not(.footer-scroll):has([footer]) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: var(--fold-shell-header-height-mobile, 52px) 1fr auto;
    grid-template-areas: "header" "content" "footer";
  }
  


  .rail-primary[_ngcontent-%COMP%], 
   .rail-secondary[_ngcontent-%COMP%] {
    display: none;
  }
  





  .mobile-drawer[_nghost-%COMP%]   .rail-primary[_ngcontent-%COMP%] {
    display: block;
    position: absolute;
    top: var(--fold-shell-header-height-mobile, 52px);
    bottom: 0;
    left: 0;
    z-index: 41;
    width: auto;
    max-width: 85%;
    overflow-y: auto;
    visibility: hidden;
    transform: translateX(-100%);
    transition: transform 240ms cubic-bezier(0.4, 0, 0.2, 1), visibility 240ms;
  }
  .mobile-drawer.mobile-nav-open[_nghost-%COMP%]   .rail-primary[_ngcontent-%COMP%] {
    visibility: visible;
    transform: translateX(0);
  }
  

  .mobile-scrim[_ngcontent-%COMP%] {
    position: absolute;
    inset: var(--fold-shell-header-height-mobile, 52px) 0 0 0;
    z-index: 40;
    border: 0;
    padding: 0;
    background: var(--fold-color-scrim);
    animation: _ngcontent-%COMP%_fold-shell-scrim-in 240ms ease;
  }
  
  .mobile-nav-open[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {
    overflow: hidden;
  }
}





@container (max-width: 1024px) {
  .rail-secondary[_ngcontent-%COMP%] {
    display: none;
  }
}
@container (max-width: 768px) {
  [_nghost-%COMP%], 
   .header-full[_nghost-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: var(--fold-shell-header-height-mobile, 52px) 1fr;
    grid-template-areas: "header" "content";
  }
  [_nghost-%COMP%]:not(.footer-scroll):has([footer]), 
   .header-full[_nghost-%COMP%]:not(.footer-scroll):has([footer]), 
   .footer-full[_nghost-%COMP%]:not(.footer-scroll):has([footer]), 
   .header-full.footer-full[_nghost-%COMP%]:not(.footer-scroll):has([footer]) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: var(--fold-shell-header-height-mobile, 52px) 1fr auto;
    grid-template-areas: "header" "content" "footer";
  }
  


  .rail-primary[_ngcontent-%COMP%], 
   .rail-secondary[_ngcontent-%COMP%] {
    display: none;
  }
  





  .mobile-drawer[_nghost-%COMP%]   .rail-primary[_ngcontent-%COMP%] {
    display: block;
    position: absolute;
    top: var(--fold-shell-header-height-mobile, 52px);
    bottom: 0;
    left: 0;
    z-index: 41;
    width: auto;
    max-width: 85%;
    overflow-y: auto;
    visibility: hidden;
    transform: translateX(-100%);
    transition: transform 240ms cubic-bezier(0.4, 0, 0.2, 1), visibility 240ms;
  }
  .mobile-drawer.mobile-nav-open[_nghost-%COMP%]   .rail-primary[_ngcontent-%COMP%] {
    visibility: visible;
    transform: translateX(0);
  }
  

  .mobile-scrim[_ngcontent-%COMP%] {
    position: absolute;
    inset: var(--fold-shell-header-height-mobile, 52px) 0 0 0;
    z-index: 40;
    border: 0;
    padding: 0;
    background: var(--fold-color-scrim);
    animation: _ngcontent-%COMP%_fold-shell-scrim-in 240ms ease;
  }
  
  .mobile-nav-open[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {
    overflow: hidden;
  }
}
@keyframes _ngcontent-%COMP%_fold-shell-scrim-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


@media (prefers-reduced-motion: reduce) {
  .rail-primary[_ngcontent-%COMP%], 
   .mobile-scrim[_ngcontent-%COMP%] {
    transition: none;
    animation: none;
  }
}`]})}function As(e){return e===void 0?null:`${e}px`}class pi{content=w.required();radius=w("pill");variant=w("accent");static ɵfac=function(t){return new(t||pi)};static ɵcmp=le({type:pi,selectors:[["fold-badge"]],hostVars:2,hostBindings:function(t,o){t&2&&lw(o.variant()+" "+o.radius())},inputs:{content:[1,"content"],radius:[1,"radius"],variant:[1,"variant"]},decls:1,vars:1,template:function(t,o){t&1&&E(0),t&2&&Nn("",o.content(),`
`)},styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: var(--fold-text-xs);
  font-weight: 500;
  white-space: nowrap;
  padding: 1px 7px;
}

.pill[_nghost-%COMP%] {
  border-radius: var(--fold-radius-pill);
}

.square[_nghost-%COMP%] {
  border-radius: var(--fold-radius-sm);
}


.neutral[_nghost-%COMP%] {
  background: var(--fold-color-surface-subtle);
  border: 1px solid var(--fold-color-border-subtle);
  color: var(--fold-color-text-muted);
}

.accent[_nghost-%COMP%] {
  background: var(--fold-color-primary-surface);
  border: 1px solid var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
}

.info[_nghost-%COMP%] {
  background: var(--fold-color-info-surface);
  border: 1px solid var(--fold-color-info-border);
  color: var(--fold-color-info-text);
}

.warning[_nghost-%COMP%] {
  background: var(--fold-color-warning-surface);
  border: 1px solid var(--fold-color-warning-border);
  color: var(--fold-color-warning-text);
}

.alert[_nghost-%COMP%] {
  background: var(--fold-color-alert-surface);
  border: 1px solid var(--fold-color-alert-border);
  color: var(--fold-color-alert-text);
}

.success[_nghost-%COMP%] {
  background: var(--fold-color-success-surface);
  border: 1px solid var(--fold-color-success-border);
  color: var(--fold-color-success-text);
}`]})}const F4={"add-doc":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.414 5h-4.414v-4.414zm.586 2v17h-20v-21a3 3 0 0 1 3-3h10v7zm-6 7h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/></svg>',"arrow-back":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',"arrow-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',bin:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z"/><rect x="9" y="10" width="2" height="8"/><rect x="13" y="10" width="2" height="8"/></svg>',calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.25" y="4.75" width="17.5" height="16" rx="2.25"/><path d="M3.25 9.5h17.5"/><path d="M8 3.25v3"/><path d="M16 3.25v3"/><path d="M7.5 13.25h2"/><path d="M11 13.25h2"/><path d="M14.5 13.25h2"/><path d="M7.5 16.75h2"/><path d="M11 16.75h2"/></svg>',chat:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg>',"check-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="currentColor" opacity="0.12"/><path d="M16 24l6 6 10-12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,9H19l-6.293,6.293a1,1,0,0,1-1.414,0Z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',"chevron-up":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,15.293H5L11.293,9a1,1,0,0,1,1.414,0Z"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',code:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',"collapse-all":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',door:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><line x1="3" y1="21" x2="21" y2="21"/><circle cx="14.5" cy="12.5" r="1" fill="currentColor" stroke="none"/></svg>',download:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z"/><path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z"/></svg>',edit:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z"/></svg>',"expand-all":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>',"eye-off":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',"file-add":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>',"folder-open":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',folder:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,3H12.236l-4-2H3A3,3,0,0,0,0,4V23H24V6A3,3,0,0,0,21,3ZM3,3H7.764l4,2H21a1,1,0,0,1,1,1v.881L2,6.994V4A1,1,0,0,1,3,3ZM2,21V8.994l20-.113V21Z"/></svg>',globe:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3C6.5 3 2 9 2 12s4.5 9 10 9 10-6 10-9-4.5-9-10-9z"/><circle cx="12" cy="12" r="3"/></svg>',grid:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',list:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 10h18M3 14h18M3 18h18"/></svg>',lock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',menu:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 7h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm16 4H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zm0 6H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2z"/></svg>',"more-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>',palette:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 3 19.5c-.5-.5-.7-1.3-.5-2 .3-1 1.3-1.5 2.3-1.5H19a3 3 0 0 0 3-3c0-6.6-4.5-13-10-13z"/><circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="10.5" cy="7.5" r="1" fill="currentColor" stroke="none"/><circle cx="13.5" cy="7.5" r="1" fill="currentColor" stroke="none"/><circle cx="16.5" cy="10.5" r="1" fill="currentColor" stroke="none"/></svg>',"playlist-add":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 10H3v2h11v-2zm0-4H3v2h11V6zM3 16h7v-2H3v2zm12 0h2v-3h3v-2h-3v-3h-2v3h-3v2h3v3z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14"/></svg>',redo:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 7.5h-10a6 6 0 0 0 0 12H17"/><path d="M16.5 3.5l4 4-4 4"/></svg>',reload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>',reset:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',save:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" fill="none" stroke-width="2"></circle><line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line></svg>',sliders:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>',undo:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 7.5h10a6 6 0 0 1 0 12H7"/><path d="M7.5 3.5 3.5 7.5l4 4"/></svg>',ungroup:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 9l-6-6-6 6"/><path d="M12 3v18"/><path d="M3 21h18"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,16v5a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V16H0v5a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V16Z"/><path d="M11.967,0A2.993,2.993,0,0,0,9.845.874L5.926,4.793,7.34,6.207l3.634-3.633L11,19l2,0L12.974,2.588l3.619,3.619,1.414-1.414L14.088.874A2.991,2.991,0,0,0,11.967,0Z"/></svg>',view:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23.705,18.549c-.896-1.325-2.959-3.549-6.705-3.549s-5.81,2.224-6.705,3.549c-.391.577-.392,1.323,0,1.902.896,1.325,2.96,3.549,6.706,3.549s5.809-2.224,6.705-3.549c.391-.578.391-1.324,0-1.902Zm-6.705,2.951c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Zm-8.362.072c-.852-1.262-.851-2.888.001-4.146,1.116-1.651,3.689-4.427,8.361-4.427,3.311,0,5.568,1.395,7,2.796V5c0-2.761-2.239-5-5-5H5C2.239,0,0,2.239,0,5v13c0,2.761,2.239,5,5,5h4.797c-.489-.506-.872-1.004-1.159-1.428Zm2.362-16.572h7c.552,0,1,.448,1,1s-.448,1-1,1h-7c-.552,0-1-.448-1-1s.448-1,1-1Zm0,5h7c.552,0,1,.448,1,1s-.448,1-1,1h-7c-.552,0-1-.448-1-1s.448-1,1-1Zm-4.5-5.5c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm0,5c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm0,8c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Z"/></svg>',wrench:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'},z4={absence:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 1.5 14.5 6.5M14.5 1.5 9.5 6.5"/><path d="M9 11v-1a4 4 0 0 1 6 0v1"/><rect x="2.5" y="11" width="19" height="2.6" rx="0.7"/><path d="M4.5 13.6V22M19.5 13.6V22"/><path d="M7.5 16.6h9M8.5 16.6V22M15.5 16.6V22"/></svg>',bell:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></svg>',contracts:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="2.5" width="12" height="17" rx="2"/><path d="M5.5 6.5h3M5.5 9.5h5.5M5.5 12.5h5.5"/><path d="M5.5 15.8l1.6 1.6 3-3.4"/><path d="M12 20.5 14.59 19.16 21.28 8.29 18.72 6.71 12.03 17.58Z"/><path d="M12.03 17.58 14.59 19.16M17.94 7.99 20.49 9.56"/></svg>',help:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',home:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24,1.5V22.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5V1.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Zm-6.5,9H4.25l3.33-3.46c.57-.6,.56-1.55-.04-2.12-.6-.58-1.55-.56-2.12,.04L1.03,9.52c-.66,.66-1.03,1.54-1.03,2.48s.36,1.81,1.01,2.45l4.41,4.59c.29,.31,.69,.46,1.08,.46s.75-.14,1.04-.42c.6-.57,.62-1.52,.04-2.12l-3.33-3.46h13.25c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"/></svg>',music:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17V5l10-2v12"/><circle cx="7" cy="17" r="2.5"/><circle cx="17" cy="15" r="2.5"/></svg>',"org-chart":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10v4h3V5h-3z"/></svg>',planning:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.25" y="5" width="17.5" height="15.5" rx="2.25"/><path d="M3.25 9h17.5"/><path d="M7.5 5V3.2M12 5V3.2M16.5 5V3.2"/><circle cx="7.5" cy="2.5" r="1.1"/><circle cx="12" cy="2.5" r="1.1"/><circle cx="16.5" cy="2.5" r="1.1"/><path d="M7.9 11.05 10.6 13.75M10.6 11.05 7.9 13.75"/><rect x="13.15" y="10.8" width="3.2" height="3.2" rx="0.6"/><rect x="7.65" y="15.4" width="3.2" height="3.2" rx="0.6"/><path d="M13.4 15.65 16.1 18.35M16.1 15.65 13.4 18.35"/></svg>',program:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 0h-16c-2.206 0-4 1.794-4 4v16c0 2.206 1.794 4 4 4h16c2.206 0 4-1.794 4-4v-16c0-2.206-1.794-4-4-4zm-3 6v5h-5v-5zm6 0v5h-5v-5zm-12 5h-5v-5h5zm-5 1h5v5h-5zm0 6h5v5h-5zm6 0h5v5h-5zm0-1v-5h5v5zm6-5h5v5h-5zm5-8v1h-17v-4h14c1.654 0 3 1.346 3 3zm-19-3h1v4h-4v-1c0-1.654 1.346-3 3-3zm-3 19v-14h4v17h-1c-1.654 0-3-1.346-3-3zm19 3h-2v-5h5v2c0 1.654-1.346 3-3 3zm-13.392-14.814c.189-.202.507-.21.707-.021l.853.804c.038.038.084.037.112.01l1.381-1.332c.199-.192.516-.186.707.013.192.199.186.516-.013.707l-1.375 1.325c-.205.205-.477.308-.749.308-.274 0-.55-.104-.76-.314l-.842-.794c-.201-.189-.21-.506-.021-.707zm15.759 11.475c.192.199.186.516-.013.707l-1.375 1.325c-.205.205-.477.308-.749.308-.274 0-.55-.104-.76-.314l-.842-.794c-.201-.189-.21-.506-.021-.707s.507-.21.707-.021l.853.804c.039.037.083.038.112.01l1.381-1.332c.2-.191.516-.185.707.013zm-6.013-5.293-1.375 1.325c-.205.205-.477.308-.749.308-.274 0-.55-.104-.76-.314l-.842-.794c-.201-.189-.21-.506-.021-.707.188-.201.506-.211.707-.021l.853.804c.039.038.083.037.112.01l1.381-1.332c.199-.191.516-.186.707.013.192.199.186.516-.013.707z"/></svg>',settings:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>',show:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',stats:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18"/><rect x="5" y="10" width="3" height="10"/><rect x="10.5" y="6" width="3" height="14"/><rect x="16" y="13" width="3" height="7"/></svg>',"theme-dark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',"theme-light":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',timeline:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M8 5v14M13 10v9"/></svg>',library:'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect x="32" y="96" width="64" height="368" rx="16" ry="16" style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"/><line x1="112" y1="224" x2="240" y2="224" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><line x1="112" y1="400" x2="240" y2="400" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><rect x="112" y="160" width="128" height="304" rx="16" ry="16" style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"/><rect x="256" y="48" width="96" height="416" rx="16" ry="16" style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"/><path d="M422.46,96.11l-40.4,4.25c-11.12,1.17-19.18,11.57-17.93,23.1l34.92,321.59c1.26,11.53,11.37,20,22.49,18.84l40.4-4.25c11.12-1.17,19.18-11.57,17.93-23.1L445,115C443.69,103.42,433.58,94.94,422.46,96.11Z" style="fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:32px"/></svg>'},N4={"fast-forward":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/></svg>',fire:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.074,3.781c-1.39-1.106-2.703-2.152-3.691-3.333L12.006-.002l-.384,.444c-1.491,1.722-1.905,3.821-2.238,5.508-.405,2.051-.654,3.037-1.884,3.037-.198,0-.35-.069-.492-.224-.607-.663-.687-2.586-.594-3.643l.123-1.403-.98,1.011c-1.418,1.463-4.057,4.186-4.057,8.771,0,5.79,4.71,10.5,10.5,10.5s10.5-4.71,10.5-10.5c0-4.603-3.267-7.204-6.426-9.719Zm-6.902,18.048c-1.56-1.562-1.56-4.101-.022-5.639l2.851-2.522,2.828,2.502c1.559,1.561,1.559,4.1,0,5.659-1.559,1.559-4.097,1.561-5.657,0Zm6.643,.365c1.642-1.962,1.563-4.888-.301-6.752l-3.513-3.11-3.536,3.13c-1.843,1.842-1.921,4.766-.279,6.731-3.343-1.473-5.685-4.813-5.685-8.694,0-3.233,1.37-5.396,2.888-7.122,.036,1.015,.221,2.338,.882,3.06,.329,.359,.753,.549,1.229,.549,2.107,0,2.476-1.867,2.865-3.844,.294-1.492,.624-3.164,1.655-4.595,.984,1.066,2.177,2.016,3.431,3.014,2.974,2.368,6.049,4.816,6.049,8.937,0,3.882-2.343,7.222-5.686,8.695Z"/></svg>',"heart-border":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>',heart:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z"/></svg>',metronome:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23.532,22.142c-.649,1.164-1.828,1.858-3.154,1.858H3.622c-1.326,0-2.505-.694-3.154-1.858-.655-1.173-.624-2.556.082-3.698L9.017,4.722c.578-.937,1.466-1.533,2.483-1.683V0h1v3.039c1.02.152,1.906.747,2.483,1.683l1.131,1.833-.589.949-1.392-2.256c-.494-.799-1.252-1.242-2.136-1.247-.878.005-1.636.448-2.13,1.247L1.4,18.969c-.512.83-.534,1.834-.059,2.687.47.842,1.323,1.345,2.281,1.345h16.756c.958,0,1.812-.503,2.281-1.345.475-.853.453-1.856-.059-2.687l-4.142-6.712.589-.949,4.403,7.135c.706,1.143.736,2.525.082,3.698Zm-9.247-8.852l6.462-10.401.85.527-6.491,10.449c.552.544.895,1.3.895,2.135,0,1.654-1.346,3-3,3s-3-1.346-3-3,1.346-3,3-3c.46,0,.895.104,1.285.29Zm.715,2.71c0-1.103-.897-2-2-2s-2,.897-2,2,.897,2,2,2,2-.897,2-2Z"/></svg>',microphone:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',"music-file":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.707,0H4.5c-1.379,0-2.5,1.121-2.5,2.5v21.5h20V7.293L14.707,0Zm.293,1.707l5.293,5.293h-5.293V1.707ZM3,23V2.5c0-.827.673-1.5,1.5-1.5h9.5v7h7v15H3Zm9-10.5v3.001c-.418-.314-.938-.501-1.5-.501-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5,2.5-1.121,2.5-2.5v-5c0-.275.225-.5.5-.5h2.5v-1h-2.5c-.827,0-1.5.673-1.5,1.5Zm-1.5,6.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z"/></svg>',"music-note":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',mute:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>',"next-track":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.765,9.458,4.98.019v24l14.779-9.473a3.007,3.007,0,0,0,.006-5.088Zm-1.08,3.395-11.7,7.5V3.677l11.707,7.474a1,1,0,0,1-.007,1.7Z"/></svg>',"prev-track":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>',repeat:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>',rewind:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>',waveform:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>'},j4={award:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23.664,0h-8.475l-2.97,6.003c-.073-.002-.146-.003-.22-.003-.076,0-.152,0-.228.003L8.811,0H.324l4.637,9.399c-1.227,1.538-1.961,3.486-1.961,5.601,0,4.962,4.038,9,9,9s9-4.038,9-9c0-2.121-.738-4.072-1.97-5.612L23.664,0Zm-7.854,1h6.243l-3.751,7.582c-1.334-1.311-3.074-2.209-5.011-2.489l2.52-5.093ZM1.933,1h6.256l2.513,5.094c-1.943.282-3.686,1.186-5.021,2.504L1.933,1Zm18.067,14c0,4.411-3.589,8-8,8s-8-3.589-8-8S7.589,7,12,7s8,3.589,8,8Zm-7.244-5.135h-1.494l-.897,3.135h-3.365v1.453l2.318,1.336-1.081,2.955,1.158.86,2.614-2.074,2.609,2.093,1.205-.831-1.171-2.969,2.347-1.377v-1.445h-3.347l-.896-3.135Zm.652,5.528l1.14,2.892-2.536-2.034-2.535,2.011,1.067-2.919-2.328-1.343h2.902l.89-3.11.89,3.11h2.884l-2.375,1.393Z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm5,11.5c0-.276-.224-.5-.5-.5h-4.5V5.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v7c0,.276,.224,.5,.5,.5h5c.276,0,.5-.224,.5-.5Z"/></svg>',completed:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m13,11h4v1h-4v-1ZM21,2v19.5c0,1.378-1.121,2.5-2.5,2.5H5.5c-1.379,0-2.5-1.122-2.5-2.5V2h5.05c.232-1.14,1.243-2,2.45-2h3c1.207,0,2.218.86,2.45,2h5.05Zm-1,1h-5v-.5c0-.827-.673-1.5-1.5-1.5h-3c-.827,0-1.5.673-1.5,1.5v.5h-5v18.5c0,.827.673,1.5,1.5,1.5h13c.827,0,1.5-.673,1.5-1.5V3Zm-11.216,7.952c-.056.056-.18.055-.241-.006l-1.778-1.721-.695.719,1.772,1.716c.221.22.514.341.825.341s.604-.122.821-.339l3.362-3.305-.701-.713-3.365,3.308Zm4.216,7.048h4v-1h-4v1Zm-4.216-1.048c-.056.057-.18.055-.241-.006l-1.778-1.721-.695.719,1.772,1.716c.221.22.514.341.825.341s.604-.122.821-.339l3.362-3.305-.701-.713-3.365,3.308Z"/></svg>',diamond:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23.517,6.252l-3.691-5.167c-.485-.679-1.273-1.085-2.108-1.085H6.282c-.835,0-1.623.406-2.108,1.085L.483,6.252c-.665.931-.636,2.208.07,3.105l11.447,14.657,11.446-14.655c.707-.899.736-2.177.071-3.107Zm-4.504-4.585s3.764,5.276,3.795,5.333h-5.951l-2.065-6h2.926c.513,0,.997.249,1.295.667Zm-10.812,5.333l2.065-6h3.468l2.065,6h-7.598Zm7.626,1l-3.827,12.675-3.827-12.675h7.653ZM4.987,1.667c.298-.418.782-.667,1.295-.667h2.926l-2.065,6H1.193c.031-.057,3.795-5.333,3.795-5.333Zm-3.967,6.333h6.108l4.013,13.29L1.34,8.74c-.173-.219-.279-.475-.319-.74Zm11.838,13.291l4.013-13.291h6.108c-.04.265-.147.522-.32.742l-9.801,12.548Z"/></svg>',info:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="11"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',lightning:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.762,24h-3.493l3.5-9H5c-.659,0-1.262-.304-1.655-.833-.393-.529-.509-1.195-.318-1.826L8.39,0h8.875l-3.5,8h5.201c.761,0,1.43,.4,1.79,1.071s.324,1.45-.097,2.084l-8.897,12.845Zm-2.031-1h1.507l8.593-12.406c.208-.314,.227-.71,.043-1.05-.183-.341-.522-.544-.909-.544h-6.73L15.735,1h-6.69L3.964,12.686c-.078,.271-.019,.613,.184,.886,.203,.272,.513,.429,.853,.429H13.231l-3.5,9Z"/></svg>',"offline-bolt":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z"/></svg>',shield:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',warning:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',"x-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.783 1.401 8.169L12 18.897l-7.335 3.855 1.401-8.169L.132 9.21l8.2-1.192z"/></svg>'},H4={briefcase:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',"give-rights":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m11,11c0-1.654-1.346-3-3-3H3c-1.654,0-3,1.346-3,3v2h11v-2Zm-5.5-4c1.93,0,3.5-1.57,3.5-3.5S7.43,0,5.5,0s-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5Zm18.5,14v3h-13v-3c0-1.654,1.346-3,3-3h7c1.654,0,3,1.346,3,3Zm-6.5-4c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5-4.5,2.019-4.5,4.5,2.019,4.5,4.5,4.5Zm-9.081,1.594c.774.775.774,2.037,0,2.812l-2.507,2.507-1.414-1.414,1.498-1.498h-2.997c-1.654,0-3-1.346-3-3v-3h2v3c0,.552.449,1,1,1h3.006l-1.508-1.498,1.414-1.414,2.506,2.506Z"/></svg>',"graduation-cap":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z"/><path d="M6 11.5v4.25c0 1.5 2.7 2.75 6 2.75s6-1.25 6-2.75V11.5"/><path d="M21 9.5v5"/></svg>',"group-lead":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,14c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Zm7,10H0v-5c0-1.65,1.35-3,3-3H11c1.65,0,3,1.35,3,3v5ZM21,0H8c-1.65,0-3,1.35-3,3v1.35c.63-.22,1.3-.35,2-.35,2.74,0,5.05,1.84,5.77,4.35l2.23,2.23,3.59-3.59h-2.59v-2h4c1.1,0,2,.9,2,2v4h-2v-2.59l-5,5-2.15-2.15c-.23,1.06-.74,2.01-1.44,2.78,2.23,.18,4.05,1.81,4.49,3.96h8.1V3c0-1.65-1.35-3-3-3Z"/></svg>',king:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21,24H3v-3.5c0-2.481,2.019-4.5,4.5-4.5h9c2.481,0,4.5,2.019,4.5,4.5v3.5Zm-3-16H6c0,3.309,2.691,6,6,6s6-2.691,6-6Zm-3-5l-3-3-3,3L6,0v6h12V0l-3,3Z"/></svg>',leader:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm4-3h-8v-5l2 2.231 2-2.231 2 2.231 2-2.231zm2-3.376v2.396c2.423 1.827 4 4.719 4 7.981s-1.577 6.154-4 7.981v-.981c0-1.654-1.346-3-3-3h-6c-1.654 0-3 1.346-3 3v.981c-2.423-1.827-4-4.719-4-7.981s1.577-6.154 4-7.981v-2.396c-3.581 2.078-6 5.946-6 10.376 0 6.617 5.383 12 12 12s12-5.383 12-12c0-4.43-2.419-8.298-6-10.376zm-10 19.535v-2.159c0-.551.448-1 1-1h6c.552 0 1 .449 1 1v2.159c-1.226.538-2.578.841-4 .841s-2.774-.303-4-.841z"/></svg>',referral:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m16.664,11.497l-3.94,3.503,3.94,3.503-1.328,1.494-4.497-3.997h-1.838v-2h1.838l4.497-3.997,1.328,1.494Zm-13.164-.497c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm1.5,1h-3c-1.103,0-2,.897-2,2v2h7v-2c0-1.103-.897-2-2-2Zm15.5-7c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm1.5,1h-3c-1.103,0-2,.897-2,2v2h7v-2c0-1.103-.897-2-2-2Zm1,10.5c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5Zm-1,3.5h-3c-1.103,0-2,.897-2,2v2h7v-2c0-1.103-.897-2-2-2Z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',team:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,8c-2.206,0-4-1.794-4-4S15.794,0,18,0s4,1.794,4,4-1.794,4-4,4Zm-6,7c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm-6-7c-2.206,0-4-1.794-4-4S3.794,0,6,0s4,1.794,4,4-1.794,4-4,4Zm12,14v-2.5c0-1.93-1.57-3.5-3.5-3.5h-5c-1.93,0-3.5,1.57-3.5,3.5v2.5H0v2H24v-2h-6ZM7.157,14.532c-.726-.991-1.157-2.211-1.157-3.532,0-.341,.035-.674,.09-1H3.5c-1.933,0-3.5,1.567-3.5,3.5v2.5H5.261c.513-.62,1.161-1.12,1.896-1.468Zm13.343-4.532h-2.59c.055,.326,.09,.659,.09,1,0,1.321-.431,2.54-1.157,3.532,.734,.348,1.383,.849,1.896,1.468h5.261v-2.5c0-1.933-1.567-3.5-3.5-3.5Z"/></svg>',work:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>'},B4={discord:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/></svg>',slack:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',teams:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.404 4.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM12 3a3.75 3.75 0 110 7.5A3.75 3.75 0 0112 3zm-9.404 1.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM21 11.25h-3.75a1.5 1.5 0 00-1.5 1.5v6.75A4.5 4.5 0 0020.25 24a3.75 3.75 0 003.75-3.75v-7.5A1.5 1.5 0 0021 11.25zM14.25 12.75v6.75A4.5 4.5 0 019.75 24h-.5A4.5 4.5 0 014.75 19.5v-6.75a1.5 1.5 0 011.5-1.5h6.5a1.5 1.5 0 011.5 1.5z"/></svg>',telegram:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',whatsapp:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>',github:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',linkedin:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>',fold:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 511" fill="currentColor"><path d="M509.807,159.545c0.016-0.026,0.036-0.047,0.052-0.073c0.033-0.053,0.058-0.108,0.09-0.162 c0.078-0.131,0.153-0.263,0.222-0.399c0.047-0.091,0.09-0.183,0.132-0.275c0.06-0.129,0.116-0.259,0.169-0.391 c0.042-0.105,0.08-0.211,0.116-0.317c0.041-0.121,0.081-0.242,0.116-0.366c0.035-0.122,0.066-0.244,0.094-0.367 c0.026-0.111,0.05-0.223,0.071-0.336c0.025-0.138,0.046-0.275,0.063-0.413c0.013-0.103,0.026-0.207,0.034-0.312 c0.013-0.149,0.019-0.298,0.023-0.447c0.002-0.064,0.01-0.126,0.01-0.19c0-0.038-0.005-0.076-0.006-0.114 c-0.002-0.141-0.011-0.282-0.021-0.423c-0.008-0.114-0.015-0.228-0.029-0.341c-0.014-0.116-0.034-0.231-0.053-0.346 c-0.022-0.132-0.043-0.265-0.071-0.394c-0.021-0.094-0.048-0.187-0.072-0.28c-0.038-0.144-0.075-0.288-0.12-0.428 c-0.028-0.086-0.062-0.17-0.093-0.255c-0.052-0.141-0.102-0.281-0.162-0.418c-0.041-0.095-0.089-0.186-0.135-0.279 c-0.059-0.12-0.115-0.241-0.18-0.358c-0.062-0.112-0.131-0.219-0.199-0.328c-0.058-0.093-0.113-0.187-0.175-0.276 c-0.082-0.119-0.172-0.234-0.261-0.349c-0.058-0.075-0.113-0.151-0.174-0.224c-0.093-0.111-0.193-0.216-0.293-0.322 c-0.068-0.072-0.134-0.146-0.205-0.216c-0.093-0.091-0.192-0.177-0.29-0.264c-0.09-0.08-0.18-0.16-0.274-0.235 c-0.086-0.069-0.176-0.133-0.265-0.198c-0.117-0.086-0.234-0.169-0.356-0.248c-0.031-0.02-0.059-0.044-0.091-0.063l-64-40 c-0.044-0.027-0.089-0.048-0.133-0.074c-0.089-0.053-0.176-0.107-0.267-0.156c-0.056-0.03-0.112-0.058-0.168-0.086 c-0.09-0.046-0.181-0.088-0.273-0.13c-0.073-0.034-0.145-0.069-0.22-0.101c-0.052-0.022-0.104-0.041-0.156-0.061 c-0.122-0.048-0.244-0.092-0.367-0.133c-0.045-0.015-0.087-0.035-0.133-0.049c-0.014-0.004-0.028-0.007-0.041-0.011 c-0.044-0.013-0.088-0.024-0.132-0.037c-0.143-0.042-0.286-0.077-0.43-0.11c-0.055-0.012-0.109-0.029-0.164-0.04 c-0.036-0.007-0.072-0.01-0.108-0.017c-0.146-0.027-0.292-0.049-0.439-0.068c-0.105-0.013-0.21-0.026-0.316-0.035 c-0.129-0.011-0.257-0.017-0.386-0.021c-0.123-0.004-0.246-0.007-0.368-0.005c-0.112,0.002-0.223,0.008-0.335,0.015 c-0.044,0.003-0.088,0.003-0.132,0.006c-0.029,0.002-0.058,0.001-0.087,0.004c-0.061,0.006-0.121,0.017-0.181,0.024 c-0.103,0.012-0.206,0.028-0.309,0.044c-0.034,0.005-0.068,0.009-0.101,0.015c-0.046,0.008-0.092,0.011-0.137,0.02 c-0.056,0.011-0.11,0.027-0.165,0.039c-0.103,0.022-0.205,0.049-0.308,0.075c-0.128,0.033-0.255,0.067-0.38,0.107 c-0.11,0.035-0.218,0.074-0.326,0.114c-0.08,0.029-0.161,0.054-0.239,0.086c-0.033,0.013-0.065,0.031-0.098,0.045 c-0.117,0.049-0.231,0.104-0.345,0.159c-0.078,0.038-0.158,0.073-0.235,0.113c-0.008,0.004-0.017,0.007-0.025,0.012l-114.566,61.102 l-68.1-83.234c-0.003-0.004-0.007-0.007-0.01-0.011c-0.021-0.026-0.043-0.051-0.065-0.077c-0.053-0.063-0.111-0.12-0.166-0.181 c-0.106-0.118-0.212-0.237-0.326-0.348c-0.066-0.065-0.139-0.124-0.208-0.186c-0.109-0.099-0.216-0.199-0.331-0.292 c-0.109-0.087-0.225-0.166-0.338-0.248c-0.009-0.006-0.017-0.013-0.026-0.019c-0.075-0.053-0.147-0.111-0.224-0.162 c-0.115-0.076-0.238-0.142-0.358-0.212c-0.091-0.053-0.18-0.11-0.273-0.159c-0.112-0.059-0.23-0.108-0.346-0.161 c-0.107-0.049-0.212-0.103-0.321-0.147c-0.104-0.042-0.212-0.075-0.319-0.112c-0.127-0.045-0.253-0.092-0.382-0.13 c-0.016-0.005-0.032-0.012-0.048-0.016c-0.114-0.033-0.228-0.053-0.342-0.08c-0.103-0.024-0.205-0.052-0.31-0.072 c-0.044-0.008-0.087-0.018-0.131-0.026L24.818,44.114c-0.074-0.013-0.147-0.017-0.221-0.028c-0.135-0.02-0.269-0.039-0.404-0.052 c-0.124-0.012-0.246-0.018-0.369-0.023c-0.117-0.005-0.234-0.009-0.351-0.009c-0.134,0-0.267,0.005-0.4,0.013 c-0.108,0.006-0.217,0.014-0.325,0.024c-0.134,0.013-0.267,0.031-0.399,0.052c-0.11,0.017-0.219,0.036-0.328,0.057 c-0.126,0.025-0.25,0.054-0.374,0.086c-0.115,0.029-0.23,0.061-0.344,0.096c-0.115,0.035-0.227,0.073-0.34,0.114 c-0.119,0.043-0.236,0.088-0.353,0.137c-0.108,0.045-0.213,0.094-0.319,0.144c-0.114,0.054-0.227,0.11-0.339,0.17 c-0.109,0.059-0.215,0.121-0.32,0.185c-0.101,0.061-0.202,0.123-0.301,0.189c-0.116,0.078-0.228,0.16-0.339,0.244 c-0.058,0.044-0.12,0.082-0.177,0.128c-0.027,0.021-0.049,0.045-0.076,0.067c-0.112,0.092-0.219,0.19-0.326,0.289 c-0.077,0.071-0.156,0.141-0.23,0.215c-0.096,0.096-0.185,0.198-0.276,0.299c-0.075,0.084-0.152,0.166-0.222,0.252 c-0.08,0.098-0.154,0.202-0.229,0.305c-0.07,0.095-0.142,0.189-0.207,0.286c-0.068,0.103-0.129,0.21-0.192,0.317 c-0.062,0.104-0.126,0.206-0.182,0.312c-0.056,0.106-0.105,0.217-0.156,0.326c-0.053,0.113-0.108,0.225-0.155,0.34 c-0.044,0.106-0.08,0.216-0.119,0.325c-0.044,0.124-0.09,0.248-0.127,0.374c-0.031,0.104-0.056,0.212-0.083,0.319 c-0.034,0.136-0.068,0.271-0.094,0.408c-0.007,0.035-0.018,0.069-0.024,0.104c-0.014,0.076-0.018,0.151-0.029,0.227 c-0.019,0.132-0.038,0.264-0.05,0.397c-0.012,0.124-0.018,0.247-0.023,0.37c-0.005,0.118-0.009,0.236-0.009,0.354 c0,0.132,0.006,0.263,0.013,0.394c0.006,0.111,0.014,0.221,0.025,0.332c0.013,0.132,0.031,0.262,0.051,0.392 c0.017,0.112,0.037,0.224,0.059,0.335c0.025,0.124,0.053,0.246,0.085,0.368c0.03,0.117,0.062,0.233,0.097,0.349 c0.035,0.113,0.073,0.225,0.113,0.336c0.043,0.119,0.088,0.238,0.137,0.355c0.045,0.107,0.093,0.213,0.143,0.318 c0.054,0.114,0.11,0.227,0.17,0.339c0.058,0.109,0.121,0.214,0.184,0.32c0.061,0.102,0.123,0.203,0.19,0.302 c0.077,0.115,0.159,0.226,0.242,0.336c0.044,0.059,0.082,0.121,0.129,0.179l47.852,59.815H7.5c-0.068,0-0.133,0.008-0.2,0.01 c-0.138,0.004-0.276,0.01-0.414,0.021c-0.121,0.01-0.241,0.024-0.36,0.039c-0.117,0.015-0.234,0.033-0.35,0.053 c-0.132,0.023-0.262,0.051-0.391,0.081c-0.104,0.024-0.207,0.051-0.31,0.08c-0.133,0.037-0.263,0.077-0.393,0.122 c-0.101,0.034-0.201,0.071-0.301,0.11c-0.123,0.048-0.244,0.098-0.363,0.152c-0.106,0.048-0.211,0.099-0.315,0.152 c-0.107,0.055-0.213,0.111-0.317,0.171c-0.111,0.063-0.22,0.13-0.328,0.199c-0.093,0.06-0.184,0.121-0.274,0.184 c-0.11,0.077-0.217,0.158-0.323,0.242c-0.086,0.068-0.169,0.137-0.251,0.208c-0.099,0.086-0.197,0.174-0.292,0.265 c-0.087,0.083-0.17,0.168-0.253,0.255c-0.082,0.086-0.162,0.174-0.24,0.265c-0.091,0.106-0.178,0.215-0.263,0.326 c-0.041,0.053-0.085,0.1-0.125,0.154c-0.023,0.032-0.041,0.065-0.063,0.097c-0.086,0.122-0.165,0.247-0.244,0.373 c-0.053,0.086-0.108,0.172-0.157,0.259c-0.069,0.123-0.132,0.249-0.195,0.376c-0.048,0.097-0.097,0.194-0.141,0.292 c-0.052,0.118-0.097,0.239-0.143,0.36c-0.042,0.111-0.086,0.222-0.123,0.335c-0.036,0.111-0.066,0.225-0.097,0.339 c-0.035,0.126-0.07,0.252-0.097,0.379c-0.023,0.105-0.039,0.212-0.058,0.318c-0.024,0.139-0.048,0.278-0.064,0.418 c-0.012,0.101-0.018,0.203-0.025,0.306c-0.011,0.147-0.02,0.295-0.022,0.442C0.005,123.419,0,123.457,0,123.497 c0,0.068,0.008,0.133,0.01,0.2c0.004,0.138,0.009,0.276,0.021,0.414c0.01,0.121,0.024,0.24,0.039,0.36 c0.015,0.118,0.033,0.235,0.054,0.351c0.023,0.131,0.051,0.261,0.081,0.39c0.025,0.105,0.051,0.209,0.08,0.312 c0.037,0.132,0.077,0.261,0.121,0.39c0.035,0.103,0.072,0.204,0.112,0.305c0.047,0.121,0.097,0.241,0.15,0.359 c0.049,0.108,0.101,0.215,0.154,0.321c0.054,0.105,0.109,0.209,0.167,0.311c0.064,0.113,0.133,0.224,0.203,0.334 c0.058,0.091,0.118,0.181,0.18,0.269c0.078,0.111,0.16,0.22,0.245,0.327c0.067,0.084,0.135,0.167,0.205,0.248 c0.086,0.1,0.175,0.198,0.268,0.294c0.082,0.086,0.167,0.169,0.254,0.251c0.087,0.082,0.174,0.163,0.266,0.242 c0.106,0.091,0.215,0.177,0.325,0.262c0.053,0.041,0.1,0.085,0.155,0.125l172.304,125.312l-31.29,203.386 c-0.004,0.024-0.007,0.048-0.011,0.073l-0.004,0.024c-0.005,0.031-0.005,0.061-0.009,0.092c-0.03,0.213-0.054,0.426-0.066,0.638 c-0.005,0.084-0.002,0.166-0.004,0.249c-0.003,0.159-0.007,0.318-0.001,0.476c0.005,0.124,0.019,0.245,0.03,0.367 c0.011,0.116,0.018,0.232,0.034,0.347c0.02,0.143,0.049,0.284,0.077,0.425c0.019,0.094,0.034,0.189,0.057,0.282 c0.034,0.144,0.077,0.284,0.119,0.425c0.027,0.091,0.052,0.182,0.083,0.272c0.045,0.13,0.097,0.257,0.149,0.385 c0.04,0.099,0.078,0.199,0.123,0.296c0.05,0.109,0.106,0.215,0.161,0.321c0.058,0.112,0.114,0.224,0.177,0.333 c0.051,0.088,0.108,0.172,0.162,0.258c0.076,0.12,0.152,0.24,0.236,0.356c0.053,0.073,0.11,0.143,0.165,0.214 c0.093,0.12,0.186,0.239,0.287,0.354c0.06,0.068,0.125,0.132,0.187,0.199c0.102,0.108,0.203,0.216,0.312,0.318 c0.081,0.076,0.168,0.147,0.253,0.22c0.096,0.083,0.191,0.167,0.292,0.245c0.123,0.096,0.253,0.183,0.383,0.271 c0.071,0.048,0.138,0.099,0.21,0.144c0.181,0.114,0.369,0.218,0.561,0.317c0.027,0.014,0.051,0.03,0.078,0.044 c0.003,0.001,0.006,0.002,0.009,0.004c0.253,0.126,0.514,0.238,0.783,0.336c0.067,0.024,0.135,0.041,0.202,0.063 c0.184,0.061,0.37,0.119,0.561,0.166c0.126,0.031,0.252,0.053,0.378,0.078c0.094,0.018,0.185,0.043,0.281,0.058 c0.032,0.005,0.063,0.003,0.095,0.007c0.347,0.049,0.694,0.082,1.04,0.082c0.004,0,0.008-0.001,0.011-0.001c0.001,0,0.003,0,0.004,0 c0.31,0,0.615-0.026,0.918-0.064c0.06-0.008,0.119-0.015,0.179-0.024c0.619-0.092,1.217-0.261,1.783-0.498 c0.055-0.023,0.109-0.045,0.163-0.069c0.274-0.122,0.541-0.258,0.798-0.412c0.047-0.028,0.091-0.06,0.137-0.089 c0.216-0.136,0.424-0.283,0.625-0.439c0.06-0.046,0.12-0.091,0.178-0.139c0.223-0.185,0.435-0.384,0.636-0.595 c0.05-0.053,0.098-0.108,0.147-0.162c0.202-0.224,0.394-0.458,0.569-0.706c0.005-0.008,0.012-0.015,0.017-0.022 c0.189-0.272,0.356-0.56,0.509-0.858c0.012-0.024,0.029-0.045,0.041-0.069l54.781-109.563l181.501-78.913 c0.049-0.021,0.093-0.048,0.141-0.07c0.145-0.067,0.288-0.137,0.429-0.213c0.013-0.007,0.027-0.013,0.041-0.02 c0.023-0.012,0.046-0.021,0.069-0.034c0.052-0.029,0.1-0.064,0.152-0.094c0.113-0.067,0.225-0.137,0.334-0.21 c0.072-0.048,0.145-0.093,0.215-0.143c0.027-0.019,0.052-0.041,0.079-0.061c0.082-0.06,0.162-0.123,0.241-0.187 c0.019-0.015,0.041-0.025,0.06-0.041c0.019-0.016,0.036-0.034,0.055-0.05c0.07-0.058,0.137-0.117,0.204-0.178 c0.066-0.06,0.13-0.122,0.194-0.183c0.004-0.004,0.008-0.007,0.012-0.011c0.028-0.027,0.058-0.05,0.086-0.078 c0.021-0.021,0.04-0.043,0.061-0.064c0.05-0.052,0.099-0.104,0.148-0.157c0.062-0.068,0.121-0.138,0.181-0.208 c0.058-0.067,0.118-0.133,0.173-0.202c0.032-0.04,0.062-0.08,0.093-0.12c0.025-0.032,0.05-0.064,0.074-0.096 c0.026-0.036,0.049-0.074,0.075-0.11c0.008-0.011,0.015-0.023,0.023-0.034c0.058-0.082,0.118-0.163,0.172-0.247 c0.017-0.027,0.034-0.053,0.051-0.08c0.058-0.093,0.111-0.189,0.165-0.284c0.051-0.09,0.104-0.178,0.151-0.269 c0.002-0.004,0.005-0.008,0.007-0.013c0.007-0.014,0.014-0.028,0.021-0.042c0.054-0.107,0.102-0.219,0.151-0.329 c0.04-0.09,0.083-0.179,0.119-0.271c0.006-0.015,0.013-0.03,0.019-0.045c0.046-0.118,0.084-0.239,0.124-0.36 c0.006-0.017,0.012-0.034,0.018-0.051c0.007-0.022,0.019-0.042,0.026-0.064l0.03-0.096c0.001-0.002,0.001-0.004,0.002-0.006 l33.681-106.656h71.113c0.005,0,0.01,0.001,0.014,0.001c0.017,0,0.034-0.003,0.051-0.003c0.277-0.002,0.549-0.02,0.818-0.051 c0.076-0.009,0.151-0.023,0.226-0.034c0.218-0.032,0.432-0.071,0.643-0.121c0.078-0.018,0.155-0.039,0.232-0.06 c0.216-0.058,0.427-0.126,0.634-0.203c0.065-0.024,0.131-0.046,0.196-0.072c0.269-0.108,0.532-0.227,0.785-0.364 c0.006-0.003,0.012-0.008,0.018-0.011c0.239-0.131,0.468-0.277,0.691-0.433c0.084-0.059,0.165-0.122,0.246-0.184 c0.149-0.113,0.293-0.231,0.432-0.354c0.08-0.071,0.16-0.141,0.237-0.216c0.185-0.178,0.361-0.364,0.526-0.56 c0.019-0.022,0.039-0.041,0.058-0.063C509.476,160.039,509.646,159.795,509.807,159.545z M426.814,130.763l-38.29,121.253 l-57.435-70.199L426.814,130.763z M41.816,62.386l195.301,34.875l-55.8,139.5L41.816,62.386z M374.591,258.674l-180.335-13.872 l55.488-138.719L374.591,258.674z M212.629,337.089L193.3,259.773l167.518,12.886L212.629,337.089z M199.551,346.624l-33.364,66.728 l19.065-123.924L199.551,346.624z M142.792,212.618L30.564,130.997h46.932L142.792,212.618z M443.736,126.989l33.613,21.008h-40.247 L443.736,126.989z"/></svg>',paypal:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/></svg>',x:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'},U4={...F4,...z4,...N4,...j4,...H4,...B4},V4=/^\s*<svg[\s>]/i,q4=/<script[\s/>]|\son\w+\s*=/i;function B0(e,n){if(!V4.test(n))throw new Error(`[fold-icon] icon "${e}" must be a literal <svg …> string — icon markup is rendered unsanitised, so it must be static and trusted.`);if(q4.test(n))throw new Error(`[fold-icon] icon "${e}" must not contain <script> or inline event handlers (on*=) — icon markup must be static and trusted.`)}function Vd(e){for(const[n,t]of Object.entries(e))B0(n,t)}const U0=new T("fold.icons.overrides");function $4(e){return{provide:U0,useValue:e}}class ko{_icons;constructor(){const n=p(U0,{optional:!0})??{};Vd(n),this._icons=H({...U4,...n})}register(n,t){B0(n,t),this._icons.update(o=>({...o,[n]:t}))}registerMany(n){Vd(n),this._icons.update(t=>({...t,...n}))}resolve(n){return this._icons()[n]}has(n){return n in this._icons()}static ɵfac=function(t){return new(t||ko)};static ɵprov=ne({token:ko,factory:ko.ɵfac})}const G4="fold-icon-",qd="fold-icon-sprite";function xc(e){return`${G4}${e}`}function Z4(e,n){const o=(/<svg\b([^>]*)>/i.exec(n)?.[1]??"").replace(/\s+xmlns(:\w+)?\s*=\s*(["'])[\s\S]*?\2/gi,"").replace(/\s+(width|height)\s*=\s*(["'])[\s\S]*?\2/gi,"").trim(),r=n.replace(/^[\s\S]*?<svg\b[^>]*>/i,"").replace(/<\/svg\s*>\s*$/i,"");return`<symbol id="${xc(e)}"${o?` ${o}`:""}>${r}</symbol>`}const W4="http://www.w3.org/2000/svg";class So{document=p(Se);added=new Set;sprite=null;ensure(n,t){const o=xc(n);if(this.added.has(o))return;const r=this.resolveSprite();r&&(this.added.has(o)||(r.insertAdjacentHTML("beforeend",Z4(n,t)),this.added.add(o)))}resolveSprite(){if(this.sprite)return this.sprite;const n=this.document.body;if(!n)return null;const t=this.document.getElementById(qd);if(t)return t.querySelectorAll("symbol[id]").forEach(r=>this.added.add(r.id)),this.sprite=t,t;const o=this.document.createElementNS(W4,"svg");return o.setAttribute("id",qd),o.setAttribute("aria-hidden","true"),o.setAttribute("style","position:absolute;width:0;height:0;overflow:hidden"),n.appendChild(o),this.sprite=o,o}static ɵfac=function(t){return new(t||So)};static ɵprov=ne({token:So,factory:So.ɵfac})}function Q4(e,n){e&1&&(hf(),ec(0,"use")),e&2&&se("href",n)}const Y4={xs:"var(--fold-icon-size-xs, 12px)",sm:"var(--fold-icon-size-sm, 16px)",md:"var(--fold-icon-size-md, 20px)",lg:"var(--fold-icon-size-lg, 24px)",xl:"var(--fold-icon-size-xl, 32px)"};class $e{name=w.required();size=w("md");title=w();registry=p(ko);sprite=p(So);href=q(()=>this.registry.has(this.name())?`#${xc(this.name())}`:null);sizeVar=q(()=>{const n=this.size();return typeof n=="number"?`${n}px`:Y4[n]});constructor(){bt(()=>{const n=this.name(),t=this.registry.resolve(n);t?this.sprite.ensure(n,t):console.warn(`[fold-icon] unknown icon: "${n}"`)})}static ɵfac=function(t){return new(t||$e)};static ɵcmp=le({type:$e,selectors:[["fold-icon"]],inputs:{name:[1,"name"],size:[1,"size"],title:[1,"title"]},decls:2,vars:5,consts:[["role","img",1,"icon-root"]],template:function(t,o){if(t&1&&(hf(),Qn(0,"svg",0),W(1,Q4,1,1,":svg:use"),Yn()),t&2){let r;Pn("--icon-size",o.sizeVar()),se("aria-label",o.title()||null)("aria-hidden",o.title()?null:"true"),b(),Q((r=o.href())?1:-1,r)}},styles:[`@charset "UTF-8";






[_nghost-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: inherit;
}

.icon-root[_ngcontent-%COMP%] {
  display: block;
  width: var(--icon-size, 20px);
  height: var(--icon-size, 20px);
  fill: currentColor;
}`]})}const X4=[[["","cardHeader",""]],"*",[["","cardFooter",""]]],K4=["[cardHeader]","*","[cardFooter]"];class gi{surface=w("card");radius=w("lg");padding=w("md");interactive=w(!1);separators=w(!1,{transform:Je});raisedBands=w(!1,{transform:Je});static ɵfac=function(t){return new(t||gi)};static ɵcmp=le({type:gi,selectors:[["fold-card"]],hostVars:18,hostBindings:function(t,o){t&2&&ve("s-sunken",o.surface()==="sunken")("r-sm",o.radius()==="sm")("r-md",o.radius()==="md")("p-none",o.padding()==="none")("p-sm",o.padding()==="sm")("p-lg",o.padding()==="lg")("is-interactive",o.interactive())("has-sep",o.separators())("raised-bands",o.raisedBands())},inputs:{surface:[1,"surface"],radius:[1,"radius"],padding:[1,"padding"],interactive:[1,"interactive"],separators:[1,"separators"],raisedBands:[1,"raisedBands"]},ngContentSelectors:K4,decls:6,vars:0,consts:[[1,"card-header"],[1,"card-body"],[1,"card-footer"]],template:function(t,o){t&1&&(Bn(X4),Qn(0,"header",0),oe(1),Yn(),Qn(2,"div",1),oe(3,1),Yn(),Qn(4,"footer",2),oe(5,2),Yn())},styles:[`@charset "UTF-8";




[_nghost-%COMP%] {
  
  --_pad: 16px;
  

  --_chrome: 12px 16px;
  

  --_radius: var(--fold-radius-lg);
  

  --_band-raise: var(--fold-color-surface-hover);
  --_sep-line: var(--fold-color-border-subtle);
  display: flex;
  flex-direction: column;
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--_radius);
  






  overflow: var(--fold-card-overflow, clip);
}



.s-sunken[_nghost-%COMP%] {
  background: var(--fold-color-surface-sunken);
  border-color: var(--fold-color-border-subtle);
  --_band-raise: var(--fold-color-surface-card);
}

.r-md[_nghost-%COMP%] {
  --_radius: var(--fold-radius-md);
}

.r-sm[_nghost-%COMP%] {
  --_radius: var(--fold-radius-sm);
}

.p-none[_nghost-%COMP%] {
  --_pad: 0;
}

.p-sm[_nghost-%COMP%] {
  --_pad: 10px;
}

.p-lg[_nghost-%COMP%] {
  --_pad: 20px;
}





.card-header[_ngcontent-%COMP%], 
.card-footer[_ngcontent-%COMP%] {
  position: relative;
  padding: var(--_chrome);
}

.card-header[_ngcontent-%COMP%]:empty, 
.card-footer[_ngcontent-%COMP%]:empty {
  display: none;
}

.card-header[_ngcontent-%COMP%] {
  border-radius: var(--_radius) var(--_radius) 0 0;
}

.card-footer[_ngcontent-%COMP%] {
  border-radius: 0 0 var(--_radius) var(--_radius);
}



.card-body[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: var(--fold-card-padding, var(--_pad));
}




.raised-bands[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]:not(:empty), 
.raised-bands[_nghost-%COMP%]   .card-footer[_ngcontent-%COMP%]:not(:empty) {
  background-color: var(--_band-raise);
}


.has-sep[_nghost-%COMP%]   .card-header[_ngcontent-%COMP%]:not(:empty) {
  border-bottom: 1px solid var(--_sep-line);
}

.has-sep[_nghost-%COMP%]   .card-footer[_ngcontent-%COMP%]:not(:empty) {
  border-top: 1px solid var(--_sep-line);
}


.is-interactive[_nghost-%COMP%] {
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.1s ease;
}

.is-interactive[_nghost-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: var(--fold-shadow-md);
}`]})}const J4=["head"],e5=["foot"],n5=[[["","header",""]],"*",[["","footer",""]]],t5=["[header]","*","[footer]"];function o5(e,n){if(e&1&&Hn(0,4),e&2){k();const t=Un(12);O("ngTemplateOutlet",t)}}function r5(e,n){if(e&1&&Hn(0,4),e&2){k();const t=Un(12);O("ngTemplateOutlet",t)}}function i5(e,n){if(e&1&&Hn(0,4),e&2){k();const t=Un(12);O("ngTemplateOutlet",t)}}function s5(e,n){if(e&1){const t=Ae();m(0,"button",7),z("click",function(){re(t);const r=k();return ie(r.toggle())}),N(1,"fold-icon",8),v()}if(e&2){const t=k();se("aria-label",t.expanded()?"Collapse menu":"Expand menu"),b(),O("name",t.expanded()?"chevron-left":"chevron-right")("size",14)}}class mi{collapsible=w(!1,{transform:Je});expanded=Qi(!1);tint=w("follow");level=w("primary");togglePlacement=w("auto");headRef=xd.required("head");footRef=xd.required("foot");hasHeader=H(!1);hasFooter=H(!1);resolvedPlacement=q(()=>{const n=this.togglePlacement();return n!=="auto"?n:this.hasFooter()?"footer":this.hasHeader()?"header":"body"});constructor(){const n=p(an);kl(()=>{const t=this.headRef().nativeElement,o=this.footRef().nativeElement,r=()=>{this.hasHeader.set(this.slotFilled(t)),this.hasFooter.set(this.slotFilled(o))};r();const i=new MutationObserver(r);i.observe(t,{childList:!0}),i.observe(o,{childList:!0}),n.onDestroy(()=>i.disconnect())})}slotFilled(n){for(const t of Array.from(n.children))if(!t.classList.contains("menu-toggle"))return!0;return!1}toggle(){this.expanded.update(n=>!n)}static ɵfac=function(t){return new(t||mi)};static ɵcmp=le({type:mi,selectors:[["fold-menu"]],viewQuery:function(t,o){t&1&&_p(o.headRef,J4,5)(o.footRef,e5,5),t&2&&tc(2)},hostVars:4,hostBindings:function(t,o){t&2&&(se("data-tint",o.tint())("data-level",o.level()),ve("expanded",o.expanded()))},inputs:{collapsible:[1,"collapsible"],expanded:[1,"expanded"],tint:[1,"tint"],level:[1,"level"],togglePlacement:[1,"togglePlacement"]},outputs:{expanded:"expandedChange"},ngContentSelectors:t5,decls:13,vars:7,consts:[["head",""],["foot",""],["toggleTpl",""],[1,"menu-head"],[3,"ngTemplateOutlet"],[1,"menu-body"],[1,"menu-foot"],["type","button",1,"menu-toggle",3,"click"],[3,"name","size"]],template:function(t,o){t&1&&(Bn(n5),m(0,"div",3,0),oe(2),W(3,o5,1,1,"ng-container",4),v(),m(4,"nav",5),oe(5,1),W(6,r5,1,1,"ng-container",4),v(),m(7,"div",6,1),W(9,i5,1,1,"ng-container",4),oe(10,2),v(),Jl(11,s5,2,3,"ng-template",null,2,zp)),t&2&&(ve("head-has-toggle",o.collapsible()&&o.resolvedPlacement()==="header"),b(3),Q(o.collapsible()&&o.resolvedPlacement()==="header"?3:-1),b(3),Q(o.collapsible()&&o.resolvedPlacement()==="body"?6:-1),b(),ve("foot-has-toggle",o.collapsible()&&o.resolvedPlacement()==="footer"),b(2),Q(o.collapsible()&&o.resolvedPlacement()==="footer"?9:-1))},dependencies:[$e,lc],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  


  width: var(--fold-shell-rail-width, 64px);
  height: 100%;
  

  box-sizing: border-box;
  padding: 10px 0;
  gap: 4px;
  

  background: var(--fold-color-bg-rail-primary);
  border-right: 1px solid var(--fold-color-border);
  overflow: visible; 
  user-select: none;
  transition: width var(--fold-motion-base);
}

[data-level=secondary][_nghost-%COMP%] {
  background: var(--fold-color-bg-rail-secondary);
}

[data-level=tertiary][_nghost-%COMP%] {
  background: var(--fold-color-bg-rail-tertiary);
}









[data-elevated][_nghost-%COMP%] {
  border-right: none;
}




.expanded[_nghost-%COMP%] {
  width: max-content;
  min-width: 190px;
  max-width: 260px;
  align-items: stretch;
}

.menu-head[_ngcontent-%COMP%], 
.menu-foot[_ngcontent-%COMP%] {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
}

.menu-head[_ngcontent-%COMP%]:empty, 
.menu-foot[_ngcontent-%COMP%]:empty {
  display: none;
}

.menu-head[_ngcontent-%COMP%] {
  padding-bottom: 8px;
  border-bottom: 1px solid var(--fold-color-border-subtle);
}

.menu-foot[_ngcontent-%COMP%] {
  padding-top: 8px;
  border-top: 1px solid var(--fold-color-border-subtle);
}




.expanded[_nghost-%COMP%]   .menu-head[_ngcontent-%COMP%], 
.expanded[_nghost-%COMP%]   .menu-foot[_ngcontent-%COMP%] {
  align-items: stretch;
  width: auto;
  padding-left: 8px;
  padding-right: 8px;
}


.menu-body[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
}

.expanded[_nghost-%COMP%]   .menu-body[_ngcontent-%COMP%] {
  align-items: stretch;
  


  width: auto;
  padding: 0 8px;
  




  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
}


.menu-toggle[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border: none;
  border-radius: var(--fold-radius-sm);
  background: none;
  color: var(--fold-color-text-muted);
  cursor: pointer;
  transition: background var(--fold-motion-fast), color var(--fold-motion-fast);
}

.menu-toggle[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text-secondary);
}

.expanded[_nghost-%COMP%]   .menu-toggle[_ngcontent-%COMP%] {
  align-self: flex-end;
  margin-right: 8px;
}








.expanded[_nghost-%COMP%]   .menu-head.head-has-toggle[_ngcontent-%COMP%], 
.expanded[_nghost-%COMP%]   .menu-foot.foot-has-toggle[_ngcontent-%COMP%] {
  position: relative;
  padding-right: 40px;
}

.expanded[_nghost-%COMP%]   .menu-head.head-has-toggle[_ngcontent-%COMP%]   .menu-toggle[_ngcontent-%COMP%], 
.expanded[_nghost-%COMP%]   .menu-foot.foot-has-toggle[_ngcontent-%COMP%]   .menu-toggle[_ngcontent-%COMP%] {
  position: absolute;
  right: 8px;
  bottom: 8px;
  margin: 0;
}`]})}function a5(e,n){if(e&1&&(m(0,"span",3),E(1),v()),e&2){const t=k();ve("mi-dot-count",t.isCount()),b(),Fe(t.dotText())}}function l5(e,n){if(e&1&&(m(0,"span",4),E(1),v()),e&2){const t=k(2);b(),Fe(t.badgeText())}}function c5(e,n){if(e&1&&N(0,"fold-badge",5),e&2){const t=k(2);O("content",t.badgeText())("variant",t.badgeVariant())}}function d5(e,n){if(e&1&&W(0,l5,2,1,"span",4)(1,c5,1,2,"fold-badge",5),e&2){const t=k();Q(t.isFollowTone()?0:1)}}const u5={neutral:"var(--fold-color-text-muted)",accent:"var(--fold-color-primary)",info:"var(--fold-color-info)",warning:"var(--fold-color-warning)",alert:"var(--fold-color-alert)",success:"var(--fold-color-success)"};class Ho{icon=w.required();label=w.required();active=w(!1,{transform:Je});badge=w();badgeTone=w("follow");isCount=q(()=>typeof this.badge()=="number");hasBadge=q(()=>{const n=this.badge();return n!==void 0&&n!==""&&n!==0});isFollowTone=q(()=>this.badgeTone()==="follow");badgeAccent=q(()=>{const n=this.badgeTone();return n==="follow"?"var(--mi-accent)":u5[n]});badgeVariant=q(()=>{const n=this.badgeTone();return n==="follow"?"accent":n});badgeText=q(()=>{const n=this.badge();return n===void 0?"":String(n)});dotText=q(()=>{const n=this.badge();return typeof n!="number"?"":n>99?"99+":String(n)});ariaLabel=q(()=>this.hasBadge()?`${this.label()}, ${this.badgeText()}`:null);static ɵfac=function(t){return new(t||Ho)};static ɵcmp=le({type:Ho,selectors:[["a","fold-menu-item",""],["button","fold-menu-item",""]],hostVars:5,hostBindings:function(t,o){t&2&&(se("aria-label",o.ariaLabel()),Pn("--mi-badge-accent",o.badgeAccent()),ve("is-active",o.active()))},inputs:{icon:[1,"icon"],label:[1,"label"],active:[1,"active"],badge:[1,"badge"],badgeTone:[1,"badgeTone"]},decls:5,vars:5,consts:[[1,"mi-icon",3,"name","size"],["aria-hidden","true",1,"mi-dot",3,"mi-dot-count"],[1,"mi-tip"],["aria-hidden","true",1,"mi-dot"],[1,"mi-badge","mi-badge-follow"],[1,"mi-badge",3,"content","variant"]],template:function(t,o){t&1&&(N(0,"fold-icon",0),W(1,a5,2,3,"span",1),m(2,"span",2),E(3),v(),W(4,d5,2,1)),t&2&&(O("name",o.icon())("size",18),b(),Q(o.hasBadge()?1:-1),b(2),Fe(o.label()),b(),Q(o.hasBadge()?4:-1))},dependencies:[$e,pi],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  position: relative;
  width: 40px;
  height: 36px;
  

  box-sizing: border-box;
  display: grid;
  place-items: center;
  border-radius: var(--fold-radius-sm);
  color: var(--fold-color-text-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background var(--fold-motion-fast), color var(--fold-motion-fast);
  




  --mi-accent: var(--fold-menu-section-color, var(--fold-color-text-secondary));
  --mi-hover-bg: color-mix(
    in srgb,
    var(--mi-accent) 16%,
    var(--fold-color-surface-hover)
  );
  --mi-hover-fg: var(--mi-accent);
  --mi-active-bg: color-mix(in srgb, var(--mi-accent) 15%, transparent);
  --mi-active-fg: color-mix(
    in srgb,
    var(--mi-accent) 80%,
    var(--fold-color-text)
  );
  --mi-active-icon: var(--mi-accent);
}

fold-menu[data-tint=neutral][_nghost-%COMP%], fold-menu[data-tint=neutral]   [_nghost-%COMP%] {
  

  --mi-accent: var(--fold-color-text-secondary);
  --mi-hover-bg: var(--fold-color-surface-hover);
  --mi-hover-fg: var(--fold-color-text-secondary);
  --mi-active-bg: var(--fold-color-surface-hover);
  --mi-active-fg: var(--fold-color-text);
  --mi-active-icon: var(--fold-color-text);
}

fold-menu[data-tint=primary][_nghost-%COMP%], fold-menu[data-tint=primary]   [_nghost-%COMP%] {
  --mi-accent: var(--fold-color-primary);
}

[_nghost-%COMP%]:hover {
  background: var(--mi-hover-bg);
  color: var(--mi-hover-fg);
}

[_nghost-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}





.is-active[_nghost-%COMP%] {
  color: var(--mi-active-fg);
  background: var(--mi-active-bg);
}

.is-active[_nghost-%COMP%]   .mi-icon[_ngcontent-%COMP%] {
  color: var(--mi-active-icon);
}

.is-active[_nghost-%COMP%]::before {
  content: "";
  position: absolute;
  left: -8px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  border-radius: 0 2px 2px 0;
  background: var(--mi-accent);
  box-shadow: 0 0 8px var(--mi-accent);
}

.mi-icon[_ngcontent-%COMP%] {
  color: inherit;
  transition: color var(--fold-motion-fast);
}







.mi-dot[_ngcontent-%COMP%] {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 8px;
  height: 8px;
  border-radius: var(--fold-radius-round);
  background: var(--mi-badge-accent, var(--mi-accent));
  pointer-events: none;
}

.mi-dot-count[_ngcontent-%COMP%] {
  top: 2px;
  right: 2px;
  width: auto;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  display: grid;
  place-items: center;
  border-radius: var(--fold-radius-pill);
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  color: var(--fold-color-on-primary);
}

.mi-badge[_ngcontent-%COMP%] {
  display: none;
}



.mi-badge-follow[_ngcontent-%COMP%] {
  padding: 1px 7px;
  border-radius: var(--fold-radius-pill);
  font-size: var(--fold-text-xs);
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
  background: color-mix(in srgb, var(--mi-badge-accent) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--mi-badge-accent) 35%, transparent);
  color: color-mix(in srgb, var(--mi-badge-accent) 85%, var(--fold-color-text));
}



fold-menu.expanded[_nghost-%COMP%]   .mi-dot[_ngcontent-%COMP%], fold-menu.expanded   [_nghost-%COMP%]   .mi-dot[_ngcontent-%COMP%] {
  display: none;
}

fold-menu.expanded[_nghost-%COMP%]   .mi-badge[_ngcontent-%COMP%], fold-menu.expanded   [_nghost-%COMP%]   .mi-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  margin-left: auto;
}


.mi-tip[_ngcontent-%COMP%] {
  position: absolute;
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  padding: 4px 8px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-glass);
  border: 1px solid var(--fold-color-glass-border);
  color: var(--fold-color-text);
  font-size: var(--fold-text-xs);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  box-shadow: var(--fold-shadow-md);
  transition: opacity var(--fold-motion-fast);
  z-index: 100;
}

[_nghost-%COMP%]:hover   .mi-tip[_ngcontent-%COMP%] {
  opacity: 1;
}







fold-menu.expanded[_nghost-%COMP%], fold-menu.expanded   [_nghost-%COMP%] {
  width: auto;
  height: 36px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
}

fold-menu.expanded[_nghost-%COMP%]   .mi-tip[_ngcontent-%COMP%], fold-menu.expanded   [_nghost-%COMP%]   .mi-tip[_ngcontent-%COMP%] {
  position: static;
  transform: none;
  padding: 0;
  border: none;
  background: none;
  box-shadow: none;
  color: inherit;
  font-size: var(--fold-text-sm);
  opacity: 1;
  pointer-events: auto;
}`]})}function f5(e,n){if(e&1&&(Qn(0,"span",1),E(1),Yn()),e&2){const t=k();b(),Fe(t.label())}}class vi{label=w();color=w();static ɵfac=function(t){return new(t||vi)};static ɵcmp=le({type:vi,selectors:[["fold-menu-separator"]],inputs:{label:[1,"label"],color:[1,"color"]},decls:2,vars:3,consts:[[1,"sep-mark"],[1,"sep-label"]],template:function(t,o){t&1&&(ec(0,"span",0),W(1,f5,2,1,"span",1)),t&2&&(Pn("background",o.color()||null),b(),Q(o.label()?1:-1))},styles:[`@charset "UTF-8";

[_nghost-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12px;
  margin: 4px 0 2px;
}

.sep-mark[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 16px;
  height: 3px;
  border-radius: 2px;
  background: var(--fold-color-border);
  opacity: 0.85;
}

.sep-label[_ngcontent-%COMP%] {
  display: none;
}


fold-menu.expanded[_nghost-%COMP%], fold-menu.expanded   [_nghost-%COMP%] {
  justify-content: flex-start;
  gap: 7px;
  height: auto;
  padding: 12px 12px 4px;
}

fold-menu.expanded[_nghost-%COMP%]   .sep-mark[_ngcontent-%COMP%], fold-menu.expanded   [_nghost-%COMP%]   .sep-mark[_ngcontent-%COMP%] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  opacity: 1;
}

fold-menu.expanded[_nghost-%COMP%]   .sep-label[_ngcontent-%COMP%], fold-menu.expanded   [_nghost-%COMP%]   .sep-label[_ngcontent-%COMP%] {
  display: inline;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}`]})}const h5=["*"];function p5(e,n){if(e&1){const t=Ae();m(0,"button",3),z("click",function(){re(t);const r=k();return ie(r.toggle())}),N(1,"fold-menu-separator",1)(2,"fold-icon",4),v()}if(e&2){const t=k();se("aria-expanded",t.open())("aria-controls",t.bodyId),b(),O("label",t.label())("color",t.color()),b(),ve("is-open",t.open()),O("size",12)}}function g5(e,n){if(e&1&&N(0,"fold-menu-separator",1),e&2){const t=k();O("label",t.label())("color",t.color())}}let m5=0;class bi{label=w();color=w();collapsible=w(!1,{transform:Je});collapsed=Qi(!1);items=$p();hasActiveItem=q(()=>this.items().some(n=>n.active()));open=q(()=>!this.collapsed()||this.hasActiveItem());bodyId=`fold-menu-section-${m5+=1}`;toggle(){this.collapsed.update(n=>!n)}static ɵfac=function(t){return new(t||bi)};static ɵcmp=le({type:bi,selectors:[["fold-menu-section"]],contentQueries:function(t,o,r){t&1&&nc(r,o.items,Ho,5),t&2&&tc()},hostVars:2,hostBindings:function(t,o){t&2&&Pn("--fold-menu-section-color",o.color()??null)},inputs:{label:[1,"label"],color:[1,"color"],collapsible:[1,"collapsible"],collapsed:[1,"collapsed"]},outputs:{collapsed:"collapsedChange"},ngContentSelectors:h5,decls:4,vars:6,consts:[["type","button",1,"section-head"],[3,"label","color"],[1,"section-items",3,"id"],["type","button",1,"section-head",3,"click"],["name","chevron-right","aria-hidden","true",1,"section-chevron",3,"size"]],template:function(t,o){t&1&&(Bn(),W(0,p5,3,7,"button",0)(1,g5,1,2,"fold-menu-separator",1),m(2,"div",2),oe(3),v()),t&2&&(Q(o.collapsible()?0:1),b(2),ve("foldable",o.collapsible())("is-collapsed",!o.open()),O("id",o.bodyId))},dependencies:[vi,$e],styles:[`@charset "UTF-8";


[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
}

fold-menu.expanded[_nghost-%COMP%], fold-menu.expanded   [_nghost-%COMP%] {
  align-items: stretch;
  

  width: auto;
}



.section-items[_ngcontent-%COMP%] {
  display: contents;
}



.section-head[_ngcontent-%COMP%] {
  all: unset;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
}
.section-head[_ngcontent-%COMP%]   fold-menu-separator[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}

.section-chevron[_ngcontent-%COMP%] {
  flex-shrink: 0;
  margin-left: auto;
  margin-right: 10px;
  color: var(--fold-color-text-faded);
  transition: transform var(--fold-motion-fast);
}

.section-chevron.is-open[_ngcontent-%COMP%] {
  transform: rotate(90deg);
}



fold-menu:not(.expanded)[_nghost-%COMP%]   .section-head[_ngcontent-%COMP%], fold-menu:not(.expanded)   [_nghost-%COMP%]   .section-head[_ngcontent-%COMP%] {
  pointer-events: none;
}

fold-menu:not(.expanded)[_nghost-%COMP%]   .section-chevron[_ngcontent-%COMP%], fold-menu:not(.expanded)   [_nghost-%COMP%]   .section-chevron[_ngcontent-%COMP%] {
  display: none;
}




.section-items.foldable[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  overflow: hidden;
  max-height: 60vh;
  opacity: 1;
  transition: max-height var(--fold-motion-base), opacity var(--fold-motion-base);
}

fold-menu.expanded[_nghost-%COMP%]   .section-items.foldable[_ngcontent-%COMP%], fold-menu.expanded   [_nghost-%COMP%]   .section-items.foldable[_ngcontent-%COMP%] {
  align-items: stretch;
  width: auto;
}

.section-items.foldable.is-collapsed[_ngcontent-%COMP%] {
  max-height: 0;
  opacity: 0;
}


fold-menu:not(.expanded)[_nghost-%COMP%]   .section-items.foldable[_ngcontent-%COMP%], fold-menu:not(.expanded)   [_nghost-%COMP%]   .section-items.foldable[_ngcontent-%COMP%] {
  max-height: none;
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .section-items.foldable[_ngcontent-%COMP%], 
   .section-chevron[_ngcontent-%COMP%] {
    transition: none;
  }
}`]})}class Pt{document=p(Se);locks=0;previousOverflow="";lock(){this.locks===0&&(this.previousOverflow=this.document.body.style.overflow,this.document.body.style.overflow="hidden"),this.locks+=1}unlock(){this.locks!==0&&(this.locks-=1,this.locks===0&&(this.document.body.style.overflow=this.previousOverflow))}get isLocked(){return this.locks>0}static ɵfac=function(t){return new(t||Pt)};static ɵprov=ne({token:Pt,factory:Pt.ɵfac})}class Zt{icon=w.required();label=w.required();variant=w("surface");active=w(!1,{transform:Je});static ɵfac=function(t){return new(t||Zt)};static ɵcmp=le({type:Zt,selectors:[["a","fold-nav-tile",""],["button","fold-nav-tile",""]],hostAttrs:[1,"fold-nav-tile"],hostVars:5,hostBindings:function(t,o){t&2&&(se("aria-current",o.active()?"page":null),ve("is-filled",o.variant()==="filled")("is-active",o.active()))},inputs:{icon:[1,"icon"],label:[1,"label"],variant:[1,"variant"],active:[1,"active"]},decls:3,vars:3,consts:[[1,"nt-icon",3,"name","size"],[1,"nt-label"]],template:function(t,o){t&1&&(N(0,"fold-icon",0),m(1,"span",1),E(2),v()),t&2&&(O("name",o.icon())("size",26),b(2),Fe(o.label()))},dependencies:[$e],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  aspect-ratio: 1;
  padding: 12px;
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-surface-raised);
  border: 1px solid var(--fold-color-border);
  color: var(--fold-color-text-secondary);
  text-decoration: none;
  cursor: pointer;
  

  opacity: 0;
  animation: _ngcontent-%COMP%_fold-nav-tile-in 260ms ease forwards;
  transition: transform 140ms ease, background 140ms ease, border-color 140ms ease, color 140ms ease;
}

[_nghost-%COMP%]:hover {
  transform: translateY(-2px);
  background: var(--fold-color-surface-hover);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-text);
}

[_nghost-%COMP%]:active {
  transform: scale(0.97);
}

.is-active[_nghost-%COMP%] {
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary-text);
}



.is-filled[_nghost-%COMP%] {
  background: var(--fold-color-primary);
  border-color: transparent;
  color: var(--fold-color-on-primary);
}

.is-filled[_nghost-%COMP%]:hover {
  background: var(--fold-color-primary-strong);
  border-color: transparent;
  color: var(--fold-color-on-primary);
}



.is-filled.is-active[_nghost-%COMP%] {
  outline: 2px solid var(--fold-color-on-primary);
  outline-offset: -5px;
}

.nt-icon[_ngcontent-%COMP%] {
  flex: none;
}

.nt-label[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
}




[_nghost-%COMP%]:nth-child(1) {
  animation-delay: 0ms;
}

[_nghost-%COMP%]:nth-child(2) {
  animation-delay: 35ms;
}

[_nghost-%COMP%]:nth-child(3) {
  animation-delay: 70ms;
}

[_nghost-%COMP%]:nth-child(4) {
  animation-delay: 105ms;
}

[_nghost-%COMP%]:nth-child(5) {
  animation-delay: 140ms;
}

[_nghost-%COMP%]:nth-child(6) {
  animation-delay: 175ms;
}

[_nghost-%COMP%]:nth-child(7) {
  animation-delay: 210ms;
}

[_nghost-%COMP%]:nth-child(8) {
  animation-delay: 245ms;
}

[_nghost-%COMP%]:nth-child(9) {
  animation-delay: 280ms;
}

[_nghost-%COMP%]:nth-child(10) {
  animation-delay: 315ms;
}

[_nghost-%COMP%]:nth-child(11) {
  animation-delay: 350ms;
}

[_nghost-%COMP%]:nth-child(12) {
  animation-delay: 385ms;
}

@keyframes _ngcontent-%COMP%_fold-nav-tile-in {
  from {
    opacity: 0;
    transform: scale(0.82);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@media (prefers-reduced-motion: reduce) {
  [_nghost-%COMP%] {
    animation: none;
    opacity: 1;
  }
}`]})}const v5=["*"];function b5(e,n){if(e&1){const t=Ae();m(0,"div",0),z("click",function(){re(t);const r=k();return ie(r.close())}),v(),m(1,"div",1)(2,"button",2),z("click",function(){re(t);const r=k();return ie(r.close())}),N(3,"fold-icon",3),v(),m(4,"div",4),oe(5),v()()}if(e&2){const t=k();b(),O("foldFocusTrap",t.open()),se("aria-label",t.label()),b(3),Pn("--nav-cols",t.resolvedCols())}}class yi{open=Qi(!1);label=w("Navigation");columns=w("auto");tiles=$p(Zt);resolvedCols=q(()=>{const n=this.columns();return n!=="auto"?n:this.tiles().length<=4?2:3});scrollLock=p(Pt);locked=!1;constructor(){bt(()=>{const n=this.open();n&&!this.locked?(this.scrollLock.lock(),this.locked=!0):!n&&this.locked&&(this.scrollLock.unlock(),this.locked=!1)}),p(an).onDestroy(()=>{this.locked&&(this.scrollLock.unlock(),this.locked=!1)})}onEscape(){this.open()&&this.open.set(!1)}close(){this.open.set(!1)}static ɵfac=function(t){return new(t||yi)};static ɵcmp=le({type:yi,selectors:[["fold-nav-launcher"]],contentQueries:function(t,o,r){t&1&&nc(r,o.tiles,Zt,4),t&2&&tc()},hostBindings:function(t,o){t&1&&z("keydown.escape",function(){return o.onEscape()},bl)},inputs:{open:[1,"open"],label:[1,"label"],columns:[1,"columns"]},outputs:{open:"openChange"},ngContentSelectors:v5,decls:1,vars:1,consts:[["aria-hidden","true",1,"nl-scrim",3,"click"],["role","dialog","aria-modal","true","tabindex","-1",1,"nl-dialog",3,"foldFocusTrap"],["type","button","aria-label","Close navigation",1,"nl-close",3,"click"],["name","close","size","md"],[1,"nl-grid"]],template:function(t,o){t&1&&(Bn(),W(0,b5,6,4)),t&2&&Q(o.open()?0:-1)},dependencies:[Gt,$e],styles:[`@charset "UTF-8";

[_nghost-%COMP%] {
  display: contents;
}


.nl-scrim[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--fold-color-scrim);
  backdrop-filter: blur(var(--fold-blur-glass));
  -webkit-backdrop-filter: blur(var(--fold-blur-glass));
  animation: _ngcontent-%COMP%_fold-nl-fade 200ms ease;
}


.nl-dialog[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  z-index: 201;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.nl-close[_ngcontent-%COMP%] {
  position: absolute;
  top: 16px;
  right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text-secondary);
  cursor: pointer;
  transition: background 140ms ease, color 140ms ease;
}

.nl-close[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}




.nl-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(var(--nav-cols, 3), 1fr);
  gap: 12px;
  width: 100%;
  max-width: 360px;
}


@media (max-width: 360px) {
  .nl-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@keyframes _ngcontent-%COMP%_fold-nl-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .nl-scrim[_ngcontent-%COMP%] {
    animation: none;
  }
}`]})}class wi{foldElevated=w(!0,{transform:Je});static ɵfac=function(t){return new(t||wi)};static ɵdir=jn({type:wi,selectors:[["","foldElevated",""]],hostVars:1,hostBindings:function(t,o){t&2&&se("data-elevated",o.foldElevated()?"":null)},inputs:{foldElevated:[1,"foldElevated"]}})}const y5=["*",[["p","description",""]],[["","pageActions",""]],[["","titleBadge",""]]],w5=["*","p[description]","[pageActions]","[titleBadge]"];function x5(e,n){e&1&&N(0,"fold-icon",6),e&2&&O("name",n)("size",22)}function _5(e,n){if(e&1&&(m(0,"h1",3),W(1,x5,1,2,"fold-icon",6),m(2,"span"),E(3),v(),m(4,"span",7),oe(5,3),v()()),e&2){let t;const o=k(2);b(),Q((t=o.icon())?1:-1,t),b(2),Fe(o.title())}}function C5(e,n){if(e&1&&(m(0,"header",0)(1,"div",2),W(2,_5,6,2,"h1",3),m(3,"div",4),oe(4,1),v()(),m(5,"div",5),oe(6,2),v()()),e&2){const t=k();b(2),Q(t.title()?2:-1)}}class xi{title=w();icon=w();static ɵfac=function(t){return new(t||xi)};static ɵcmp=le({type:xi,selectors:[["fold-page-layout"]],inputs:{title:[1,"title"],icon:[1,"icon"]},ngContentSelectors:w5,decls:3,vars:1,consts:[[1,"page-head"],[1,"page-body"],[1,"page-head-text"],[1,"page-title"],[1,"page-desc"],[1,"page-actions"],[1,"page-icon",3,"name","size"],[1,"page-title-badge"]],template:function(t,o){t&1&&(Bn(y5),W(0,C5,7,1,"header",0),m(1,"div",1),oe(2),v()),t&2&&Q(o.title()?0:-1)},dependencies:[$e],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: flex;
  flex-direction: column;
  


  gap: var(--fold-page-gap, 32px);
  box-sizing: border-box;
  


  







  

  padding-block: var(--fold-page-pad-top, 28px) var(--fold-page-pad-bottom, 40px);
  padding-inline: var(--fold-page-gutter, 32px);
  



  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.page-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.page-head-text[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.page-title[_ngcontent-%COMP%] {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--fold-text-xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--fold-color-text);
}

.page-icon[_ngcontent-%COMP%] {
  flex: none;
  color: var(--fold-color-primary-text);
}


.page-title-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.page-title-badge[_ngcontent-%COMP%]:empty {
  display: none;
}









.page-desc[_ngcontent-%COMP%] {
  font-size: var(--fold-text-sm);
  line-height: 1.5;
  max-width: var(--fold-page-desc-measure, none);
  color: var(--fold-color-text-muted);
}

.page-desc[_ngcontent-%COMP%]:empty {
  display: none;
}

.page-desc[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  margin: 0;
}

.page-actions[_ngcontent-%COMP%] {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}


.page-actions[_ngcontent-%COMP%]:empty {
  display: none;
}

.page-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  
  gap: var(--fold-page-gap, 32px);
}`]})}const k5=["*"];function S5(e,n){if(e&1){const t=Ae();m(0,"button",3),z("click",function(){re(t);const r=k();return ie(r.dismiss.emit())}),N(1,"fold-icon",4),v()}e&2&&(b(),O("size",14))}const O5={success:"check-circle",info:"info",warning:"warning",error:"x-circle"};class _i{variant=w("info");dismissible=w(!0,{transform:Je});duration=w(0,{transform:Jw});dismiss=Vp();icon=q(()=>O5[this.variant()]);constructor(){bt(n=>{const t=this.duration();if(t<=0)return;const o=setTimeout(()=>this.dismiss.emit(),t);n(()=>clearTimeout(o))})}static ɵfac=function(t){return new(t||_i)};static ɵcmp=le({type:_i,selectors:[["fold-toast"]],hostVars:3,hostBindings:function(t,o){t&2&&se("data-variant",o.variant())("role",o.variant()==="error"?"alert":"status")("aria-live",o.variant()==="error"?"assertive":"polite")},inputs:{variant:[1,"variant"],dismissible:[1,"dismissible"],duration:[1,"duration"]},outputs:{dismiss:"dismiss"},ngContentSelectors:k5,decls:4,vars:3,consts:[["aria-hidden","true",1,"toast-icon",3,"name","size"],[1,"toast-message"],["type","button","aria-label","Dismiss",1,"toast-close"],["type","button","aria-label","Dismiss",1,"toast-close",3,"click"],["name","close","aria-hidden","true",3,"size"]],template:function(t,o){t&1&&(Bn(),N(0,"fold-icon",0),m(1,"span",1),oe(2),v(),W(3,S5,2,1,"button",2)),t&2&&(O("name",o.icon())("size",16),b(3),Q(o.dismissible()?3:-1))},dependencies:[$e],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  

  --fold-toast-accent: var(--fold-color-primary-text);
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 380px;
  padding: 10px 10px 10px 14px;
  border-radius: var(--fold-radius-md);
  font-size: var(--fold-text-sm);
  font-weight: 500;
  color: var(--fold-color-text);
  
  background: var(--fold-color-glass);
  backdrop-filter: blur(var(--fold-blur-glass));
  -webkit-backdrop-filter: blur(var(--fold-blur-glass));
  border: 1px solid var(--fold-color-glass-border);
  border-left: 3px solid var(--fold-toast-accent);
  box-shadow: var(--fold-shadow-lg);
  animation: _ngcontent-%COMP%_fold-toast-in 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-variant=success][_nghost-%COMP%] {
  --fold-toast-accent: var(--fold-color-success-text);
}

[data-variant=error][_nghost-%COMP%] {
  --fold-toast-accent: var(--fold-color-alert-text);
}

[data-variant=warning][_nghost-%COMP%] {
  --fold-toast-accent: var(--fold-color-warning-text);
}

[data-variant=info][_nghost-%COMP%] {
  --fold-toast-accent: var(--fold-color-primary-text);
}

.toast-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
  color: var(--fold-toast-accent);
}

.toast-message[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  line-height: 1.4;
}

.toast-close[_ngcontent-%COMP%] {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  margin: -2px 0;
  padding: 0;
  border: none;
  background: none;
  border-radius: var(--fold-radius-sm);
  color: var(--fold-color-text-muted);
  cursor: pointer;
  transition: background var(--fold-motion-fast), color var(--fold-motion-fast);
}

.toast-close[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}

.toast-close[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--fold-toast-accent);
  outline-offset: 1px;
}

@keyframes _ngcontent-%COMP%_fold-toast-in {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}




.toast-leaving[_nghost-%COMP%] {
  pointer-events: none;
  overflow: hidden;
  animation: _ngcontent-%COMP%_fold-toast-out 0.22s cubic-bezier(0.4, 0, 1, 1) forwards;
}

@keyframes _ngcontent-%COMP%_fold-toast-out {
  0% {
    opacity: 1;
    transform: translateX(0);
    max-height: 80px;
    margin-top: 0;
  }
  55% {
    opacity: 0;
    transform: translateX(28px);
    max-height: 80px;
  }
  100% {
    opacity: 0;
    transform: translateX(28px);
    max-height: 0;
    margin-top: -8px;
    padding-top: 0;
    padding-bottom: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  [_nghost-%COMP%], 
   .toast-leaving[_nghost-%COMP%] {
    animation: none;
  }
}`]})}const I5=new T("FOLD_TOAST_CONFIG"),T5={success:3e3,info:4e3,warning:6e3,error:0};function E5(e,n){return e?.durationByVariant?.[n]??e?.defaultDurationMs??T5[n]}class Oo{config=p(I5,{optional:!0});_toasts=H([]);toasts=this._toasts.asReadonly();show(n,t="info",o){const r={id:crypto.randomUUID(),message:n,variant:t,durationMs:o??E5(this.config,t)};this._toasts.update(i=>[...i,r])}dismiss(n){this._toasts.update(t=>t.filter(o=>o.id!==n))}static ɵfac=function(t){return new(t||Oo)};static ɵprov=ne({token:Oo,factory:Oo.ɵfac})}const M5=(e,n)=>n.id;function A5(e,n){if(e&1){const t=Ae();m(0,"fold-toast",1),kr("toast-leaving"),z("dismiss",function(){const r=re(t).$implicit,i=k();return ie(i.toastService.dismiss(r.id))}),E(1),v()}if(e&2){const t=n.$implicit;O("variant",t.variant)("duration",t.durationMs),b(),Fe(t.message)}}class Ci{toastService=p(Oo);static ɵfac=function(t){return new(t||Ci)};static ɵcmp=le({type:Ci,selectors:[["fold-toast-container"]],hostAttrs:[1,"toast-host"],decls:2,vars:0,consts:[[3,"variant","duration"],[3,"dismiss","variant","duration"]],template:function(t,o){t&1&&lt(0,A5,2,3,"fold-toast",0,M5),t&2&&ct(o.toastService.toasts())},dependencies:[_i],styles:[`[_nghost-%COMP%] {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  pointer-events: none; 
}`]})}class ki{descriptor=w.required({alias:"foldPanelComponentOutlet"});viewContainer=p(io);constructor(){bt(()=>{const n=this.descriptor();this.viewContainer.clear();const t=this.viewContainer.createComponent(n.component,{injector:n.injector});n.data!==void 0&&t.setInput("data",n.data)})}static ɵfac=function(t){return new(t||ki)};static ɵdir=jn({type:ki,selectors:[["","foldPanelComponentOutlet",""]],inputs:{descriptor:[1,"foldPanelComponentOutlet","descriptor"]}})}class Pa{id;dismiss;closed;resolveClosed;settled=!1;constructor(n,t){this.id=n,this.dismiss=t,this.closed=new Promise(o=>{this.resolveClosed=o})}close(n){this.settled||(this.settled=!0,this.dismiss(n),this.resolveClosed(n))}}const P5=new T("FOLD_PANEL_CLOSE_LABEL",{factory:()=>"Close"});function V0(e){return`fold-panel-title-${e}`}const R5=["*",[["","actions",""]]],L5=["*","[actions]"];function D5(e,n){if(e&1&&N(0,"fold-icon",3),e&2){const t=k();O("name",n)("size",t.iconSize())}}function F5(e,n){if(e&1&&(m(0,"p",5),E(1),v()),e&2){const t=k();b(),Fe(t.subtitle())}}class Bo{title=w.required();subtitle=w("");icon=w(void 0);variant=w("title");closeLabel=w();defaultCloseLabel=p(P5);effectiveCloseLabel=q(()=>this.closeLabel()??this.defaultCloseLabel);closed=Vp();iconSize=q(()=>this.variant()==="eyebrow"?14:18);panelRef=p(Pa,{optional:!0});titleId=q(()=>this.panelRef?V0(this.panelRef.id):null);onClose(){this.closed.emit(),this.panelRef?.close()}static ɵfac=function(t){return new(t||Bo)};static ɵcmp=le({type:Bo,selectors:[["fold-panel-header"]],inputs:{title:[1,"title"],subtitle:[1,"subtitle"],icon:[1,"icon"],variant:[1,"variant"],closeLabel:[1,"closeLabel"]},outputs:{closed:"closed"},ngContentSelectors:L5,decls:13,vars:7,consts:[[1,"ph"],[1,"ph__titles"],[1,"ph__titleRow"],[1,"ph__icon",3,"name","size"],[1,"ph__title"],[1,"ph__subtitle"],[1,"ph__desc"],[1,"ph__actions"],["type","button",1,"ph__close",3,"click"],["name","close","size","sm"]],template:function(t,o){if(t&1&&(Bn(R5),m(0,"header",0)(1,"div",1)(2,"div",2),W(3,D5,1,2,"fold-icon",3),m(4,"h2",4),E(5),v()(),W(6,F5,2,1,"p",5),m(7,"div",6),oe(8),v()(),m(9,"div",7),oe(10,1),m(11,"button",8),z("click",function(){return o.onClose()}),N(12,"fold-icon",9),v()()()),t&2){let r;ve("ph--eyebrow",o.variant()==="eyebrow"),b(3),Q((r=o.icon())?3:-1,r),b(),se("id",o.titleId()),b(),Fe(o.title()),b(),Q(o.subtitle()?6:-1),b(5),se("aria-label",o.effectiveCloseLabel())}},dependencies:[$e],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
  flex: none;
}

.ph[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: var(--fold-space-md);
  padding: var(--fold-space-lg) var(--fold-space-lg) var(--fold-space-md);
  border-bottom: 1px solid var(--fold-color-glass-border);
}



.ph[_ngcontent-%COMP%]:not(:has(.ph__subtitle)):not(:has(.ph__desc:not(:empty))) {
  align-items: center;
}

.ph__titles[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.ph__titleRow[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--fold-space-xs);
  min-width: 0;
}

.ph__icon[_ngcontent-%COMP%] {
  flex: none;
  color: var(--fold-color-text-secondary);
}

.ph__title[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-lg);
  font-weight: 600;
  color: var(--fold-color-text);
  letter-spacing: -0.005em;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ph__subtitle[_ngcontent-%COMP%] {
  margin: 0;
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-faded);
  font-variant-numeric: tabular-nums;
}

.ph__desc[_ngcontent-%COMP%] {
  margin-top: 6px;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-secondary);
  line-height: 1.5;
}


.ph__desc[_ngcontent-%COMP%]:empty {
  display: none;
}

.ph__actions[_ngcontent-%COMP%] {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-xs);
}

.ph__close[_ngcontent-%COMP%] {
  all: unset;
  box-sizing: border-box;
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--fold-radius-xs);
  color: var(--fold-color-text-secondary);
  cursor: pointer;
  transition: background-color var(--fold-motion-fast), color var(--fold-motion-fast);
}

.ph__close[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}


.ph--eyebrow[_ngcontent-%COMP%] {
  align-items: center;
  padding: var(--fold-space-md) var(--fold-space-lg);
}

.ph--eyebrow[_ngcontent-%COMP%]   .ph__icon[_ngcontent-%COMP%] {
  opacity: 0.75;
}

.ph--eyebrow[_ngcontent-%COMP%]   .ph__title[_ngcontent-%COMP%] {
  font-size: var(--fold-text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}`]})}class Rt{rootInjector=p(Be);nextId=1;_panels=H([]);panels=this._panels.asReadonly();open(n,t={}){const o=this.takeId(),r=new Pa(o,()=>this.dismiss(o)),i=Be.create({parent:this.rootInjector,providers:[{provide:Pa,useValue:r},...t.providers??[]]}),s={kind:"component",id:o,component:n,data:t.data,side:t.side??"right",width:H(t.width??490),injector:i,ariaLabel:t.ariaLabel,onClose:()=>r.close()};return t.stack||this.closeExisting(),this.add(s),r}present(n){const t=this.takeId();return this.add({...n,kind:"template",id:t}),{id:t,dismiss:()=>this.dismiss(t)}}closeExisting(){for(const n of this._panels())n.onClose()}dismiss(n){this._panels.update(t=>t.filter(o=>o.id!==n))}dismissAll(){this._panels.set([])}takeId(){const n=this.nextId;return this.nextId+=1,n}add(n){this._panels.update(t=>[...t,n])}static ɵfac=function(t){return new(t||Rt)};static ɵprov=ne({token:Rt,factory:Rt.ɵfac})}const z5=(e,n)=>n.id;function N5(e,n){if(e&1){const t=Ae();m(0,"fold-panel-header",4),z("closed",function(){re(t);const r=k().$implicit;return ie(r.onClose())}),v(),m(1,"div",5),Hn(2,6),v()}if(e&2){const t=k().$implicit;O("title",t.title())("subtitle",t.subtitle()),b(2),O("ngTemplateOutlet",t.templateRef)}}function j5(e,n){if(e&1&&Hn(0,3),e&2){const t=k().$implicit;O("foldPanelComponentOutlet",t)}}function H5(e,n){if(e&1){const t=Ae();m(0,"div",1),z("click",function(r){const i=re(t).$implicit,s=k();return ie(s.onBackdrop(r,i))}),m(1,"aside",2),z("click",function(r){return r.stopPropagation()}),W(2,N5,3,3)(3,j5,1,1,"ng-container",3),v()()}if(e&2){const t=n.$implicit,o=k();ve("panel-dock--left",t.side==="left"),b(),Pn("--panel-width",t.width(),"px"),ve("panel--left",t.side==="left"),O("foldFocusTrap",o.isTopMost(t)),se("aria-label",o.ariaLabel(t))("aria-labelledby",o.ariaLabelledby(t)),b(),Q(t.kind==="template"?2:3)}}class Si{host=p(Rt);scrollLock=p(Pt);element=p(bn);document=p(Se);panels=this.host.panels;locked=!1;inerted=[];constructor(){bt(()=>{const n=this.panels().length>0;n&&!this.locked?(this.scrollLock.lock(),this.applyBackgroundBarrier(),this.locked=!0):!n&&this.locked&&(this.scrollLock.unlock(),this.removeBackgroundBarrier(),this.locked=!1)}),p(an).onDestroy(()=>{this.locked&&(this.scrollLock.unlock(),this.removeBackgroundBarrier(),this.locked=!1)})}ariaLabel(n){return n.kind==="template"?n.title():n.ariaLabel??null}ariaLabelledby(n){return n.kind==="component"&&!n.ariaLabel?V0(n.id):null}isTopMost(n){const t=this.panels();return t[t.length-1]?.id===n.id}onEscape(){this.panels().at(-1)?.onClose()}onBackdrop(n,t){n.target===n.currentTarget&&t.onClose()}applyBackgroundBarrier(){let n=this.element.nativeElement;const t=this.document.body;for(;n&&n!==t&&n.parentElement;){for(const o of Array.from(n.parentElement.children))o!==n&&o instanceof HTMLElement&&!o.hasAttribute("inert")&&(o.setAttribute("inert",""),this.inerted.push(o));n=n.parentElement}}removeBackgroundBarrier(){for(const n of this.inerted)n.removeAttribute("inert");this.inerted=[]}static ɵfac=function(t){return new(t||Si)};static ɵcmp=le({type:Si,selectors:[["fold-panel-host"]],hostBindings:function(t,o){t&1&&z("keydown.escape",function(){return o.onEscape()},bl)},decls:2,vars:0,consts:[[1,"panel-dock",3,"panel-dock--left"],[1,"panel-dock",3,"click"],["role","dialog","aria-modal","true","tabindex","-1",1,"panel",3,"click","foldFocusTrap"],[3,"foldPanelComponentOutlet"],[3,"closed","title","subtitle"],[1,"panel-body"],[3,"ngTemplateOutlet"]],template:function(t,o){t&1&&lt(0,H5,4,10,"div",0,z5),t&2&&ct(o.panels())},dependencies:[lc,Gt,ki,Bo],styles:[`@charset "UTF-8";



[_nghost-%COMP%] {
  display: contents;
}




.panel-dock[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: flex-end;
}

.panel-dock--left[_ngcontent-%COMP%] {
  justify-content: flex-start;
}

.panel[_ngcontent-%COMP%] {
  --panel-width: 490px;
  display: flex;
  flex-direction: column;
  width: min(var(--panel-width), 100%);
  height: 100%;
  overflow: hidden;
  font-feature-settings: "tnum" on;
  
  background: var(--fold-color-glass);
  backdrop-filter: blur(var(--fold-blur-glass)) saturate(1.5);
  -webkit-backdrop-filter: blur(var(--fold-blur-glass)) saturate(1.5);
  border-left: 1px solid var(--fold-color-glass-border);
  box-shadow: var(--fold-shadow-panel-right);
  animation: _ngcontent-%COMP%_panel-slide-in-right 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.panel--left[_ngcontent-%COMP%] {
  border-left: none;
  border-right: 1px solid var(--fold-color-glass-border);
  box-shadow: var(--fold-shadow-panel-left);
  animation-name: _ngcontent-%COMP%_panel-slide-in-left;
}

@media (max-width: 768px) {
  .panel[_ngcontent-%COMP%] {
    width: 100vw;
  }
}


.panel-body[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 16px;
}

@keyframes _ngcontent-%COMP%_panel-slide-in-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes _ngcontent-%COMP%_panel-slide-in-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}`]})}const B5=(e,n)=>n.name;function U5(e,n){if(e&1&&(m(0,"span",9),E(1),v()),e&2){const t=n.$implicit;b(),Fe(t)}}function V5(e,n){if(e&1&&(m(0,"section",3)(1,"h3",5),E(2,"Composes"),v(),m(3,"div",8),lt(4,U5,2,1,"span",9,mp),v()()),e&2){const t=k();b(4),ct(t.data().info.composes)}}function q5(e,n){if(e&1){const t=Ae();m(0,"button",10),z("click",function(){re(t);const r=k();return ie(r.resetAll())}),E(1),v()}if(e&2){const t=k();b(),Nn(" Reset ",t.dirtyCount()," ")}}function $5(e,n){if(e&1&&N(0,"span",17),e&2){const t=k().$implicit,o=k(2);Pn("background",o.valueOf(t))}}function G5(e,n){if(e&1){const t=Ae();m(0,"button",18),z("click",function(){re(t);const r=k().$implicit,i=k(2);return ie(i.resetOne(r.name))}),E(1," ↺ "),v()}}function Z5(e,n){if(e&1){const t=Ae();m(0,"div",11)(1,"div",12),W(2,$5,1,2,"span",13),m(3,"span",14),E(4),v(),W(5,G5,2,0,"button",15),v(),m(6,"input",16,0),z("change",function(){const r=re(t).$implicit,i=Un(7),s=k(2);return ie(s.set(r.name,i.value))}),v()()}if(e&2){const t=n.$implicit,o=k(2);b(2),Q(o.isColorToken(t.name)?2:-1),b(2),Fe(t.name),b(),Q(o.overrides()[t.name]?5:-1),b(),O("value",o.valueOf(t))}}function W5(e,n){if(e&1&&lt(0,Z5,8,4,"div",11,B5),e&2){const t=k();ct(t.rows())}}function Q5(e,n){e&1&&(m(0,"p",7),E(1,"No design tokens referenced."),v())}class Oi{data=w.required();rows=H([]);overrides=H({});dirtyCount=q(()=>Object.keys(this.overrides()).length);constructor(){kl(()=>{const n=getComputedStyle(document.documentElement);this.rows.set(this.data().info.tokens.map(t=>({name:t,base:n.getPropertyValue(t).trim()})))})}valueOf(n){return this.overrides()[n.name]??n.base}set(n,t){this.data().element.style.setProperty(n,t),this.overrides.update(o=>({...o,[n]:t}))}resetOne(n){this.data().element.style.removeProperty(n),this.overrides.update(t=>Object.fromEntries(Object.entries(t).filter(([o])=>o!==n)))}resetAll(){for(const n of Object.keys(this.overrides()))this.data().element.style.removeProperty(n);this.overrides.set({})}isColorToken(n){return n.startsWith("--fold-color-")||n.startsWith("--fold-ref-")}static ɵfac=function(t){return new(t||Oi)};static ɵcmp=le({type:Oi,selectors:[["app-inspect-panel"]],inputs:{data:[1,"data"]},decls:10,vars:5,consts:[["field",""],["subtitle","tokens & composition — edits apply to this element only",3,"title"],[1,"ins-body"],[1,"ins-block"],[1,"ins-block-top"],[1,"ins-heading"],["type","button",1,"ins-reset-all"],[1,"ins-empty"],[1,"ins-chips"],[1,"ins-chip"],["type","button",1,"ins-reset-all",3,"click"],[1,"ins-row"],[1,"ins-row-head"],[1,"ins-swatch",3,"background"],[1,"ins-name"],["type","button","title","Reset to default",1,"ins-reset-one"],[1,"ins-field",3,"change","value"],[1,"ins-swatch"],["type","button","title","Reset to default",1,"ins-reset-one",3,"click"]],template:function(t,o){t&1&&(N(0,"fold-panel-header",1),m(1,"div",2),W(2,V5,6,0,"section",3),m(3,"section",3)(4,"div",4)(5,"h3",5),E(6),v(),W(7,q5,2,1,"button",6),v(),W(8,W5,2,0)(9,Q5,2,0,"p",7),v()()),t&2&&(O("title",o.data().info.selector),b(2),Q(o.data().info.composes.length?2:-1),b(4),Nn("Tokens · ",o.rows().length),b(),Q(o.dirtyCount()?7:-1),b(),Q(o.rows().length?8:9))},dependencies:[Bo],styles:[`[_nghost-%COMP%] {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.ins-body[_ngcontent-%COMP%] {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.ins-block-top[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.ins-heading[_ngcontent-%COMP%] {
  margin: 0 0 10px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}
.ins-block-top[_ngcontent-%COMP%]   .ins-heading[_ngcontent-%COMP%] {
  margin: 0;
}
.ins-reset-all[_ngcontent-%COMP%] {
  padding: 3px 10px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text);
  font: inherit;
  font-size: 11px;
  cursor: pointer;
}

.ins-chips[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.ins-chip[_ngcontent-%COMP%] {
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--fold-color-primary-border);
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-size: 12px;
  font-weight: 600;
}

.ins-row[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 0;
  border-top: 1px solid var(--fold-color-border-subtle);
}
.ins-row[_ngcontent-%COMP%]:first-of-type {
  border-top: none;
}
.ins-row-head[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.ins-swatch[_ngcontent-%COMP%] {
  flex: none;
  width: 16px;
  height: 16px;
  border-radius: var(--fold-radius-xs);
  border: 1px solid var(--fold-color-border);
}
.ins-name[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ins-reset-one[_ngcontent-%COMP%] {
  flex: none;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  border: none;
  border-radius: var(--fold-radius-xs);
  background: none;
  color: var(--fold-color-text-secondary);
  font-size: 13px;
  cursor: pointer;
}
.ins-reset-one[_ngcontent-%COMP%]:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}
.ins-field[_ngcontent-%COMP%] {
  width: 100%;
  padding: 6px 8px;
  border-radius: var(--fold-radius-sm);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-sunken);
  color: var(--fold-color-text);
  font: inherit;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}
.ins-field[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--fold-color-primary);
}
.ins-empty[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 13px;
  color: var(--fold-color-text-muted);
}`]})}const Y5=`// fold-button-icon — the momentary icon button. The whole surface (size /
// shape / tone / base button) is the shared icon-button surface; a momentary
// button has no pressed state, so nothing is added here.
@use "./icon-button-surface";
`,X5=`// ═══════════════════════════════════════════════════════
//  foldButton — applied to a native <button>/<a>, so the host
//  IS the control. variant + size + shape select via host
//  classes. Token-only: hover tints come from \`color-mix(… var …)\`.
// ═══════════════════════════════════════════════════════

// ─── Base reset (the host is the button) ───────────────
:host {
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  white-space: nowrap;
  font-family: inherit;
  font-weight: 600;
  transition:
    background var(--fold-motion-fast),
    border-color var(--fold-motion-fast),
    color var(--fold-motion-fast),
    transform var(--fold-motion-fast);
}

// Block — stretch to the container's full width.
:host(.block) {
  display: flex;
  width: 100%;
}

// Disabled — native \`:disabled\` (button) or \`.is-disabled\` (anchor).
:host(:disabled),
:host(.is-disabled) {
  opacity: 0.4;
  pointer-events: none;
  cursor: not-allowed;
}

// Loading — blocks interaction like disabled, but stays lit (spinner visible).
// Wins over the native \`:disabled\` dim that the busy button also carries.
:host(.is-loading) {
  opacity: 1;
  pointer-events: none;
  cursor: progress;
}

:host(:active):not(:disabled):not(.is-disabled) {
  transform: scale(0.97);
}

:host(:focus-visible) {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}

// ─── Sizes ─────────────────────────────────────────────
:host(.sm) {
  font-size: var(--fold-text-sm);
  padding: 0.3rem 0.7rem;
  border-radius: var(--fold-radius-xs);
}

:host(.md) {
  font-size: var(--fold-text-md);
  padding: 0.45rem 1rem;
  border-radius: var(--fold-radius-sm);
}

:host(.lg) {
  font-size: var(--fold-text-md);
  padding: 0.6rem 1.3rem;
  border-radius: var(--fold-radius-sm);
}

// ─── Shape ─────────────────────────────────────────────
// \`pill\` overrides the size's radius (declared after, same specificity). The
// rounded ends eat into the label, so give it roomier horizontal padding —
// \`em\`-based so it scales with the button's font-size. Vertical padding stays
// from the size rule.
:host(.pill) {
  border-radius: var(--fold-radius-pill);
  padding-inline: 1.25em;
}

// ─── Intent × Emphasis ─────────────────────────────────
// Two orthogonal axes. Each INTENT sets \`--b-*\` colour locals; each EMPHASIS
// consumes them into a fill pattern. The base state of the five legacy combos
// (soft+primary, solid+primary, outline+neutral, soft+warning, soft+danger) is
// byte-identical to the old flat variants; hover tints are unified (~2%, below
// perception). New combos — filled-destructive, outline-primary, … — fall out
// of the same engine for free.

// Intent locals -----------------------------------------------------------
:host(.primary) {
  --b-base: var(--fold-color-primary);
  --b-strong: var(--fold-color-primary-strong);
  --b-on: var(--fold-color-on-primary);
  --b-text: var(--fold-color-primary-text);
  --b-text-strong: var(--fold-color-primary-text);
  --b-surface: var(--fold-color-primary-surface);
  --b-border: var(--fold-color-primary-border);
}
:host(.warning) {
  --b-base: var(--fold-color-warning);
  --b-strong: color-mix(
    in srgb,
    var(--fold-color-warning) 84%,
    var(--fold-color-bg-page)
  );
  --b-on: var(--fold-color-on-primary);
  --b-text: var(--fold-color-warning-text);
  --b-text-strong: var(--fold-color-warning-text);
  --b-surface: var(--fold-color-warning-surface);
  --b-border: var(--fold-color-warning-border);
}
:host(.danger) {
  --b-base: var(--fold-color-alert);
  --b-strong: color-mix(
    in srgb,
    var(--fold-color-alert) 84%,
    var(--fold-color-bg-page)
  );
  --b-on: var(--fold-color-on-primary);
  --b-text: var(--fold-color-alert-text);
  --b-text-strong: var(--fold-color-alert-text);
  --b-surface: var(--fold-color-alert-surface);
  --b-border: var(--fold-color-alert-border);
}
:host(.neutral) {
  --b-base: var(--fold-color-text-muted);
  --b-strong: var(--fold-color-surface-hover);
  --b-on: var(--fold-color-text);
  --b-text: var(--fold-color-text-secondary);
  --b-text-strong: var(--fold-color-text);
  --b-surface: var(--fold-color-surface-hover);
  --b-border: var(--fold-color-border);
}

// Emphasis patterns -------------------------------------------------------
// Soft — tinted surface.
:host(.soft) {
  color: var(--b-text);
  background: var(--b-surface);
  border: 1px solid var(--b-border);

  &:hover:not(:disabled):not(.is-disabled) {
    background: color-mix(in srgb, var(--b-base) 22%, transparent);
    border-color: color-mix(in srgb, var(--b-base) 52%, transparent);
  }
}

// Solid — filled with the intent colour.
:host(.solid) {
  color: var(--b-on);
  background: var(--b-base);
  border: 1px solid transparent;

  &:hover:not(:disabled):not(.is-disabled) {
    background: var(--b-strong);
  }
}

// Outline — transparent, hairline border.
:host(.outline) {
  color: var(--b-text);
  background: transparent;
  border: 1px solid var(--b-border);

  &:hover:not(:disabled):not(.is-disabled) {
    color: var(--b-text-strong);
    background: var(--fold-color-surface-hover);
    border-color: var(--b-border);
  }
}

// ─── Reduced motion ────────────────────────────────────
// Honour the OS setting like the rest of the library: drop the tweened
// surface transitions and the press-scale so nothing animates.
@media (prefers-reduced-motion: reduce) {
  :host {
    transition: none;
  }
  :host(:active):not(:disabled):not(.is-disabled) {
    transform: none;
  }
}

// ─── Forced colors (Windows high-contrast) ─────────────
// \`all: unset\` + \`color-mix\` can flatten to nothing here, and \`solid\`'s
// transparent border stays transparent (colours aren't forced on \`transparent\`).
// Pin a system-colour border so every button keeps a visible shape, keep the
// focus ring visible, and mark disabled with \`GrayText\` (opacity is ignored).
@media (forced-colors: active) {
  :host {
    border: 1px solid ButtonText;
  }
  :host(.solid) {
    border-color: ButtonText;
  }
  :host(:focus-visible) {
    outline-color: CanvasText;
  }
  :host(:disabled),
  :host(.is-disabled) {
    color: GrayText;
    border-color: GrayText;
  }
}
`,K5=`:host {
  display: inline-flex;
  min-width: 0;
}
.lnk {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  padding: 0;
  border: 0;
  background: none;
  font-family: inherit;
  font-size: var(--fold-text-xs);
  font-weight: 600;
  color: var(--fold-color-primary);
  text-decoration: none;
  cursor: pointer;
  transition: color var(--fold-motion-fast);
}
:host(.tone-muted) .lnk {
  color: var(--fold-color-text-secondary);
}
.lnk:hover .lnk-label {
  text-decoration: underline;
}
.lnk:disabled {
  color: var(--fold-color-text-muted);
  cursor: not-allowed;
}
.lnk:disabled .lnk-label {
  text-decoration: none;
}
.lnk-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`,J5=`// fold-toggle-icon — the toggle icon button. Same surface as fold-button-icon,
// plus the pressed state the toggle adds while \`active\` (data-active on host).
@use "../button-icon/icon-button-surface";

:host([data-active]) button {
  background: var(--bi-bg-active);
  color: var(--bi-color-active);
}
`,eC=`:host {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.lines {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}
.primary {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  color: var(--fold-color-text);
}
.secondary {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-faded);
}
`,nC=`:host {
  display: inline-flex;
  align-items: center;
  /* Ring drawn around each face so the overlap reads cleanly — matches the
     surface behind the list. Override when it sits on a non-card background. */
  --fold-avatar-list-ring: var(--fold-color-surface-card);
}

.al-item {
  position: relative;
  display: inline-flex;
  border-radius: var(--fold-radius-round);
  /* An opaque backing disc + a ring in the surface colour: the ring separates
     overlapping faces, and the disc means a muted/transparent face reads against
     the surface — not against the neighbour it overlaps. */
  background: var(--fold-avatar-list-ring);
  box-shadow: 0 0 0 2px var(--fold-avatar-list-ring);
}
:host(.is-square) .al-item {
  border-radius: var(--fold-radius-sm);
}

/* Overlap between faces only — a gentle amount so they breathe. */
.al-item + .al-item {
  margin-left: var(--al-overlap);
}
:host(.size-sm) {
  --al-overlap: -5px;
}
:host(.size-md) {
  --al-overlap: -8px;
}
:host(.size-lg) {
  --al-overlap: -11px;
}

/* The \`+N\` chip sits apart from the stack (a small gap, no overlap, no ring) so
   it never superimposes a face. Primary-tinted so the "more" reads at a glance. */
.al-more {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 6px;
  border-radius: var(--fold-radius-round);
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-weight: 700;
  letter-spacing: 0.02em;
  user-select: none;
}
:host(.is-square) .al-more {
  border-radius: var(--fold-radius-sm);
}
:host(.size-sm) .al-more {
  width: 20px;
  height: 20px;
  font-size: 8px;
}
:host(.size-md) .al-more {
  width: 32px;
  height: 32px;
  font-size: 11px;
}
:host(.size-lg) .al-more {
  width: 44px;
  height: 44px;
  font-size: 14px;
}
`,tC=`.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 700;
  letter-spacing: 0.02em;
  user-select: none;
  border-radius: var(--fold-radius-round);
}
.avatar.size-sm {
  width: 20px;
  height: 20px;
  font-size: 7px;
}
.avatar.size-md {
  width: 32px;
  height: 32px;
  font-size: 11px;
}
.avatar.size-lg {
  width: 44px;
  height: 44px;
  font-size: 15px;
}
/* Guests — dashed outline instead of a solid fill. */
.avatar.variant-ghost {
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text-secondary);
  border: 1px dashed var(--fold-color-border);
}
/* Orgs — square with a small radius. */
.avatar.shape-square {
  border-radius: var(--fold-radius-sm);
}
.avatar.has-image {
  overflow: hidden;
  background: var(--fold-color-surface-raised);
  border: 1px solid var(--fold-color-border);
}
.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Presence — a dimmed avatar (same hue, lower intensity) flags absence/inactive. */
.avatar.is-muted {
  opacity: 0.45;
}

/* Status ring — an outline (follows border-radius, can be dotted, and stays
   clear of the fill's border/box-shadow). \`data-ring\` carries the colour,
   \`data-ring-style="dotted"\` the scheduled/tentative look. */
.avatar[data-ring] {
  outline: 2px solid var(--avatar-ring, transparent);
  outline-offset: 2px;
}
.avatar[data-ring-style="dotted"] {
  outline-style: dotted;
}
.avatar[data-ring="accent"] {
  --avatar-ring: var(--fold-color-primary);
}
.avatar[data-ring="info"] {
  --avatar-ring: var(--fold-color-info);
}
.avatar[data-ring="warning"] {
  --avatar-ring: var(--fold-color-warning);
}
.avatar[data-ring="alert"] {
  --avatar-ring: var(--fold-color-alert);
}
.avatar[data-ring="success"] {
  --avatar-ring: var(--fold-color-success);
}
`,oC=`:host {
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: var(--fold-text-xs);
  font-weight: 500;
  white-space: nowrap;
  padding: 1px 7px;
}
:host(.pill) {
  border-radius: var(--fold-radius-pill);
}
:host(.square) {
  border-radius: var(--fold-radius-sm);
}
/* Neutral — a dim count/tag pill with no semantic colour. */
:host(.neutral) {
  background: var(--fold-color-surface-subtle);
  border: 1px solid var(--fold-color-border-subtle);
  color: var(--fold-color-text-muted);
}
:host(.accent) {
  background: var(--fold-color-primary-surface);
  border: 1px solid var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
}
:host(.info) {
  background: var(--fold-color-info-surface);
  border: 1px solid var(--fold-color-info-border);
  color: var(--fold-color-info-text);
}
:host(.warning) {
  background: var(--fold-color-warning-surface);
  border: 1px solid var(--fold-color-warning-border);
  color: var(--fold-color-warning-text);
}
:host(.alert) {
  background: var(--fold-color-alert-surface);
  border: 1px solid var(--fold-color-alert-border);
  color: var(--fold-color-alert-text);
}
:host(.success) {
  background: var(--fold-color-success-surface);
  border: 1px solid var(--fold-color-success-border);
  color: var(--fold-color-success-text);
}
`,rC=`/* A card is a flex column of three regions: an optional header band, the body,
   and an optional footer band. The host owns the surface, border and radius —
   never padding — so the body's padding is identical whether or not the bands
   are shown (toggling a header/footer never shifts the content). */
:host {
  /* body padding (the \`padding\` input); override any value with --fold-card-padding */
  --_pad: 16px;
  /* header/footer padding, independent of the body so a padding=none card can
     still have padded chrome (e.g. a titled panel with a flush body). */
  --_chrome: 12px 16px;
  /* corner radius, shared with the bands so a raised/bordered band never squares
     off the rounded card. */
  --_radius: var(--fold-radius-lg);
  /* raisedBands lift (a solid elevation surface, clearly a step above the body)
     + separators hairline. */
  --_band-raise: var(--fold-color-surface-hover);
  --_sep-line: var(--fold-color-border-subtle);

  display: flex;
  flex-direction: column;
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--_radius);
  /* Clip to the radius so anything full-bleed inside — a flat fold-callout, an
     image, a table header — follows the corners. The bands round themselves,
     but projected content cannot.

     \`clip\`, not \`hidden\`: hidden would make the card a scroll container and
     break a \`position: sticky\` child. Override with --fold-card-overflow on the
     rare card that must let content escape. */
  overflow: var(--fold-card-overflow, clip);
}

/* Sunken — a deeper container; pairs with a fainter hairline + a subtler raise
   (one step up = the card surface). */
:host(.s-sunken) {
  background: var(--fold-color-surface-sunken);
  border-color: var(--fold-color-border-subtle);
  --_band-raise: var(--fold-color-surface-card);
}

:host(.r-md) {
  --_radius: var(--fold-radius-md);
}
:host(.r-sm) {
  --_radius: var(--fold-radius-sm);
}
:host(.p-none) {
  --_pad: 0;
}
:host(.p-sm) {
  --_pad: 10px;
}
:host(.p-lg) {
  --_pad: 20px;
}

/* ── Regions ─────────────────────────────────────────────────────────────── */
/* Bands render only when something is projected into them, and anchor
   absolutely-positioned children (badges, a centered overlay). Their outer
   corners follow the card radius. */
.card-header,
.card-footer {
  position: relative;
  padding: var(--_chrome);
}
.card-header:empty,
.card-footer:empty {
  display: none;
}
.card-header {
  border-radius: var(--_radius) var(--_radius) 0 0;
}
.card-footer {
  border-radius: 0 0 var(--_radius) var(--_radius);
}
/* The body always carries the padding, fills the height, and lays its content
   out as a stack (matching a card-with-bands, so the two are never different). */
.card-body {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: var(--fold-card-padding, var(--_pad));
}

/* ── Optional chrome — independent, so each toggles on its own ────────────── */
/* raisedBands: tint the bands a clear step above the body (the overlay is
   stacked so a low-alpha token still reads). */
:host(.raised-bands) .card-header:not(:empty),
:host(.raised-bands) .card-footer:not(:empty) {
  background-color: var(--_band-raise);
}
/* separators: a fine hairline between a band and the body. */
:host(.has-sep) .card-header:not(:empty) {
  border-bottom: 1px solid var(--_sep-line);
}
:host(.has-sep) .card-footer:not(:empty) {
  border-top: 1px solid var(--_sep-line);
}

/* interactive: a hover lift for clickable cards. */
:host(.is-interactive) {
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.1s ease;
}
:host(.is-interactive:hover) {
  transform: translateY(-2px);
  box-shadow: var(--fold-shadow-md);
}
`,iC=`:host {
  display: block;
}
.choice-row {
  display: flex;
  gap: 4px;
  user-select: none;
}
.choice-row.chips {
  flex-wrap: wrap;
}
.choice {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
  border: 1px solid var(--fold-color-border);
  color: var(--fold-color-text-muted);
  transition:
    color 0.1s ease,
    background 0.1s ease,
    border-color 0.1s ease;
}
.choice-count {
  color: var(--fold-color-text-faded);
  font-variant-numeric: tabular-nums;
}
.choice.is-active .choice-count {
  color: var(--fold-color-primary-text);
}

/* Segmented — equal-width rounded rectangles. */
.choice-row.segmented .choice {
  flex: 1;
  padding: 5px 0;
  text-align: center;
  text-transform: capitalize;
  background: var(--fold-color-surface-subtle);
  border-radius: var(--fold-radius-sm);
  font-size: var(--fold-text-xs);
  font-weight: 600;
}
.choice-row.segmented .choice:hover:not(.is-active) {
  background: var(--fold-color-surface-raised);
}
.choice-row.segmented .choice.is-active {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary-border);
  color: var(--fold-color-primary);
}

/* Chips — auto-width pills that wrap. */
.choice-row.chips .choice {
  padding: 4px 12px;
  background: transparent;
  border-radius: var(--fold-radius-pill);
  color: var(--fold-color-text-secondary);
  font-size: var(--fold-text-sm);
}
.choice-row.chips .choice:hover:not(.is-active) {
  color: var(--fold-color-text);
  border-color: var(--fold-color-primary-border);
}
.choice-row.chips .choice.is-active {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
  font-weight: 600;
}
`,sC=`:host {
  display: block;
}
/* Header — the whole icon + title + subtitle block is fold-element-title. */
.cc-head {
  padding: 16px;
  border-bottom: 1px solid var(--fold-color-border-subtle);
}
/* Body — the projected content. */
.cc-body {
  padding: 2px 16px;
}
/* Footer — a centred action, divider above; gone when empty. */
.cc-foot {
  display: flex;
  justify-content: center;
  padding: 14px 16px;
  border-top: 1px solid var(--fold-color-border-subtle);
}
.cc-foot:empty {
  display: none;
}
`,aC=`/* fold-data-table — controlled roster table. Styled on fold-ng tokens.
   The dark-panel surface maps onto surface-card (body) + a subtle lift toward
   surface-hover (sticky header); row dividers use the fainter border-subtle. */

:host {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.folddt-wrap {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-surface-sunken);
  box-shadow: var(--fold-shadow-md);
}

.folddt {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: var(--fold-text-sm);
}

/* Sticky header — opaque, subtly lifted above the body surface. */
.folddt thead th {
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 0;
  text-align: left;
  /* Lifts above the sunken body toward the card tone (ref: lighter than body). */
  background: color-mix(
    in srgb,
    var(--fold-color-surface-sunken) 50%,
    var(--fold-color-surface-card)
  );
  border-bottom: 1px solid var(--fold-color-border);
}

.folddt-th-sort,
.folddt-th-plain {
  display: inline-flex;
  align-items: center;
  padding: 12px 18px;
  color: var(--fold-color-text-muted);
  font-size: 10.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.folddt-th-sort {
  gap: 6px;
  width: 100%;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: color var(--fold-motion-fast);
}
.folddt-th-sort:hover {
  color: var(--fold-color-text);
}
.folddt-th-sort.right {
  justify-content: flex-end;
}
.folddt-th-plain.right {
  justify-content: flex-end;
  width: 100%;
}

.folddt-arrow {
  color: var(--fold-color-text-faded);
  font-size: 11px;
  transition: color var(--fold-motion-fast);
}
.folddt-arrow.on {
  color: var(--fold-color-primary-text);
}

.folddt-row {
  transition: background var(--fold-motion-fast);
}
.folddt-row.clickable {
  cursor: pointer;
}
.folddt-row td {
  border-bottom: 1px solid var(--fold-color-border-subtle);
}
.folddt-row:last-child td {
  border-bottom: 0;
}
.folddt-row:focus-visible {
  outline: 2px solid var(--fold-color-primary-border);
  outline-offset: -2px;
}

/* Zebra (opt-in) — skips tone rows so status tints stay pure. */
.folddt--zebra
  .folddt-row:nth-child(even):not(.tone-warning):not(.tone-alert):not(
    .tone-success
  )
  td {
  background: var(--fold-color-surface-subtle);
}

/* Hover (default on) — wins over zebra + tone tint. */
.folddt--hover .folddt-row:hover td {
  background: var(--fold-color-surface-raised);
}
.folddt--hover .folddt-row.tone-warning:hover td {
  background: color-mix(in srgb, var(--fold-color-warning) 16%, transparent);
}
.folddt--hover .folddt-row.tone-alert:hover td {
  background: color-mix(in srgb, var(--fold-color-alert) 17%, transparent);
}

.folddt-cell {
  padding: 11px 18px;
  color: var(--fold-color-text);
  white-space: nowrap;
  vertical-align: middle;
}
.folddt-cell.right {
  text-align: right;
}

/* Per-row tone accents (left bar + tint). */
.folddt-row.tone-warning td:first-child {
  box-shadow: inset 3px 0 0 var(--fold-color-warning);
}
.folddt-row.tone-warning td {
  background: color-mix(in srgb, var(--fold-color-warning) 10%, transparent);
}
.folddt-row.tone-alert td:first-child {
  box-shadow: inset 3px 0 0 var(--fold-color-alert);
}
.folddt-row.tone-alert td {
  background: color-mix(in srgb, var(--fold-color-alert) 11%, transparent);
}
.folddt-row.tone-success td:first-child {
  box-shadow: inset 3px 0 0 var(--fold-color-success);
}
.folddt-row.tone-success td {
  background: color-mix(in srgb, var(--fold-color-success) 9%, transparent);
}

.folddt-empty {
  padding: 48px 24px;
  text-align: center;
}
.folddt-empty-t {
  font-size: var(--fold-text-md);
  font-weight: 600;
  color: var(--fold-color-text);
}
.folddt-empty-s {
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-muted);
  margin-top: 4px;
}

/* ── Mobile: table → stacked cards (≤700px) ── */
@media (max-width: 700px) {
  .folddt--cards {
    overflow-x: hidden;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
  }
  .folddt--cards .folddt {
    display: block;
    width: 100%;
  }
  .folddt--cards thead {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
  }
  .folddt--cards tbody {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .folddt--cards .folddt-row {
    display: block;
    border: 1px solid var(--fold-color-border-subtle);
    border-radius: var(--fold-radius-md);
    background: var(--fold-color-surface-sunken);
    padding: 4px 14px 8px;
    box-shadow: var(--fold-shadow-sm);
  }
  .folddt--cards .folddt-row.tone-warning {
    border-left: 3px solid var(--fold-color-warning);
  }
  .folddt--cards .folddt-row.tone-alert {
    border-left: 3px solid var(--fold-color-alert);
  }
  .folddt--cards .folddt-row.tone-success {
    border-left: 3px solid var(--fold-color-success);
  }
  .folddt--cards .folddt-row td:first-child {
    box-shadow: none;
  }
  .folddt--cards .folddt-cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 0;
    white-space: normal;
    border-bottom: 1px solid var(--fold-color-border-subtle);
  }
  .folddt--cards .folddt-cell:last-child {
    border-bottom: 0;
  }
  .folddt--cards .folddt-cell::before {
    content: attr(data-label);
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--fold-color-text-faded);
  }
  .folddt--cards .folddt-cell.right {
    text-align: left;
  }
  .folddt--cards .folddt-cell.is-primary {
    justify-content: flex-start;
    padding: 8px 0 10px;
    border-bottom: 1px solid var(--fold-color-border);
  }
  .folddt--cards .folddt-cell.is-primary::before {
    display: none;
  }
}
`,lC=`:host {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
}
.et-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.et-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.et-label {
  min-width: 0;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}
:host(.v-bar) .et-label {
  font-size: 11px;
  color: var(--fold-color-text-secondary);
}
:host(.v-title) .et-label {
  font-size: var(--fold-text-md);
  letter-spacing: normal;
  text-transform: none;
  color: var(--fold-color-text);
}
.et-sub {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}
.et-action {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.et-action:empty {
  display: none;
}
/* Icon — a plain leading glyph; the title variant lifts it into a tile. */
.et-icon {
  flex: none;
  display: grid;
  place-items: center;
  color: var(--fold-color-primary);
}
:host(.v-title) .et-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--fold-radius-md);
  border: 1px solid var(--fold-color-border);
  background: var(--fold-color-surface-raised);
}
/* Tile tone (title variant): primary = filled brand tile; faded = dim. */
:host(.v-title.it-primary) .et-icon {
  background: var(--fold-color-primary);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
}
:host(.v-title.it-faded) .et-icon {
  background: var(--fold-color-surface-sunken);
  border-color: var(--fold-color-border-subtle);
  color: var(--fold-color-text-muted);
}
`,cC=`/* The host disappears (display: contents) so the <dl> is the effective element
   in the consumer's flow. All layout lives here on the grid; the dt/dd it lays
   out are contributed by the fold-field children (also display: contents) and
   auto-place into these tracks by box-tree position — no selector crosses the
   encapsulation boundary. */
:host {
  display: contents;
}

.fl {
  margin: 0;
  display: grid;
  grid-template-columns: var(--fold-field-list-label-width, 160px) minmax(
      0,
      1fr
    );
  column-gap: var(--fold-field-list-col-gap, 16px);
  row-gap: var(--fold-field-list-row-gap, 10px);
  align-items: baseline;
  min-width: 0;
}
`,dC=`/* The host disappears (display: contents) so the dt/dd become direct children
   of the list's <dl> grid. This component styles only their appearance — the
   grid geometry (columns, gaps, baseline) is the list's job. */
:host {
  display: contents;
}

.fl-key {
  margin: 0;
  font-size: var(--fold-text-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--fold-color-text-muted);
}

.fl-val {
  margin: 0;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--fold-space-xs);
  font-size: var(--fold-text-md);
  color: var(--fold-color-text);
}

.fl-empty {
  color: var(--fold-color-text-muted);
  font-style: italic;
}
`,uC=`/* Defaults: card surface + lg padding. isolation establishes a stacking
       context so an accent overlay (::after, z-index:-1) sits above the base
       fill but below the projected content, whatever its z-index. */
:host {
  display: block;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: var(--fold-color-surface-card);
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-lg);
  padding: 20px;
}
:host(.p-sm) {
  padding: 10px;
}
:host(.p-md) {
  padding: 16px;
}

/* ── Base surface ── */
:host(.s-sunken) {
  background: var(--fold-color-surface-sunken);
  border-color: var(--fold-color-border-subtle);
}
:host(.s-primary) {
  background: var(--fold-color-primary);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
}

/* ── Accent overlays (transparent, painted over the base surface) ── */
:host(.a-subtle)::after,
:host(.a-gradient)::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}
/* Subtle — a faint diagonal toward the deep tint + a soft corner glow. */
:host(.a-subtle)::after {
  background:
    radial-gradient(
      120% 140% at 100% 0%,
      color-mix(in srgb, var(--fold-color-primary) 10%, transparent),
      transparent 45%
    ),
    linear-gradient(
      160deg,
      transparent 30%,
      color-mix(in srgb, var(--fold-color-surface-sunken) 50%, transparent)
    );
}
/* Gradient — primary-tinted wash + primary border + a stronger corner glow. */
:host(.a-gradient) {
  border-color: var(--fold-color-primary-border);
}
:host(.a-gradient)::after {
  background:
    radial-gradient(
      260px circle at 90% -10%,
      color-mix(in srgb, var(--fold-color-primary) 22%, transparent),
      transparent 68%
    ),
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--fold-color-primary) 8%, transparent),
      transparent 60%
    );
}

/* Accent bar — orthogonal left edge marker, composable with any surface. */
:host(.has-bar)::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    var(--fold-color-primary),
    color-mix(in srgb, var(--fold-color-primary) 30%, transparent)
  );
}
`,fC=`/* fold-paginator — one horizontal bar: info (size + range) on the left, page
   nav on the right. Styled on fold-ng tokens. */

:host {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--fold-space-lg);
  flex-wrap: wrap;
  padding: var(--fold-space-sm) 0 0;
  color: var(--fold-color-text);
  font-size: var(--fold-text-sm);
}

/* Left cluster — page size + visible range. */
.paginator-left {
  display: flex;
  align-items: center;
  gap: var(--fold-space-md);
}

.range {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
}
.range--empty {
  font-style: italic;
}

/* ── Page size selector ──────────────────────────────── */

.page-size {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-sm);
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
}

.page-size__select {
  height: 30px;
  padding: 0 26px 0 10px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-card)
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%237a7670' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>")
    no-repeat right 9px center;
  color: var(--fold-color-text);
  font: inherit;
  font-size: var(--fold-text-sm);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  appearance: none;
  cursor: pointer;
  transition: border-color var(--fold-motion-fast);
}
.page-size__select:hover:not(:disabled) {
  border-color: var(--fold-color-border);
}
.page-size__select:focus-visible {
  outline: none;
  border-color: var(--fold-color-primary-border);
}
.page-size__select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.page-size__select option {
  background: var(--fold-color-surface-card);
}

.page-size__label {
  color: var(--fold-color-text-muted);
}

/* ── Navigation ──────────────────────────────────────── */

.pages {
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-xs);
}

.nav-btn,
.page-btn {
  height: 30px;
  min-width: 30px;
  padding: 0 8px;
  display: inline-grid;
  place-items: center;
  border: 1px solid transparent;
  border-radius: var(--fold-radius-sm);
  background: transparent;
  color: var(--fold-color-text-secondary);
  font: inherit;
  font-size: var(--fold-text-sm);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  transition:
    background var(--fold-motion-fast),
    border-color var(--fold-motion-fast),
    color var(--fold-motion-fast);
}
.nav-btn:hover:not(:disabled),
.page-btn:hover:not(:disabled) {
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text);
}
.nav-btn:focus-visible,
.page-btn:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 1px;
}
.nav-btn:disabled,
.page-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.nav-btn {
  color: var(--fold-color-text-muted);
}

.page-btn.is-active,
.page-btn.is-active:hover {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary-border);
  color: var(--fold-color-primary-text);
  cursor: default;
}

.gap {
  min-width: 18px;
  text-align: center;
  color: var(--fold-color-text-faded);
  font-size: var(--fold-text-sm);
  user-select: none;
}

/* ── Responsive ─────────────────────────────────────── */

@media (max-width: 480px) {
  :host {
    justify-content: center;
  }
  .page-size__label {
    display: none;
  }
}
`,hC=`.badge {
  display: inline-flex;
  align-items: center;
  user-select: none;
  padding: 2px 10px;
  border-radius: var(--fold-radius-pill);
  font-size: var(--fold-text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}
.badge[data-status="active"] {
  background: var(--fold-color-success-surface);
  color: var(--fold-color-success-text);
  border: 1px solid var(--fold-color-success-border);
}
.badge[data-status="draft"],
.badge[data-status="pending"] {
  background: var(--fold-color-warning-surface);
  color: var(--fold-color-warning-text);
  border: 1px solid var(--fold-color-warning-border);
}
.badge[data-status="suspended"] {
  background: var(--fold-color-alert-surface);
  color: var(--fold-color-alert-text);
  border: 1px solid var(--fold-color-alert-border);
}
.badge[data-status="coming-soon"] {
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text-muted);
  border: 1px solid var(--fold-color-border);
}
/* Fallback — any unmapped status (e.g. terminated) reads as neutral grey. */
.badge:not([data-status="active"]):not([data-status="draft"]):not(
    [data-status="pending"]
  ):not([data-status="suspended"]):not([data-status="coming-soon"]) {
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text-secondary);
  border: 1px solid var(--fold-color-border);
}
`,pC=`:host {
  display: block;
  user-select: none;
}

.tlv {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* ── Vertical: a static connecting rail behind the dots ── */
.tlv:not(.h)::before {
  content: "";
  position: absolute;
  left: 12px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: var(--fold-color-border);
  border-radius: 2px;
}

.node {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  gap: 11px;
  padding: 7px 6px;
  border: 0;
  background: none;
  border-radius: var(--fold-radius-sm);
  cursor: pointer;
  text-align: left;
  transition: background var(--fold-motion-fast);
}

.node.inert {
  cursor: default;
}

.node:not(.inert):hover {
  background: var(--fold-color-surface-raised);
}

.dot {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--fold-color-surface-raised);
  border: 2px solid var(--fold-color-border);
  color: var(--fold-color-text-muted);
  transition:
    border-color var(--fold-motion-fast),
    color var(--fold-motion-fast),
    background var(--fold-motion-fast);
}

/* Accent dot — inert anchor (vertical) or a \`done\` step (horizontal). */
.node.filled .dot {
  background: var(--fold-color-primary);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-on-primary);
}

/* Hollow variant — the accent shown as a ring rather than a solid fill. */
.node.hollow.filled .dot {
  background: var(--fold-color-surface-raised);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary-text);
}

/* Clickable, not-yet-filled: a navigable affordance. */
.node:not(.inert):not(.filled) .dot {
  border-color: color-mix(
    in srgb,
    var(--fold-color-primary) 45%,
    var(--fold-color-border)
  );
  color: var(--fold-color-primary-text);
}

.node:not(.inert):hover .dot {
  background: var(--fold-color-primary-surface);
  border-color: var(--fold-color-primary);
}

/* Square dots — a rounded rectangle instead of a circle. */
.tlv.square .dot {
  border-radius: var(--fold-radius-sm);
}

.txt {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 1px;
  min-width: 0;
}

.date {
  font-size: 10px;
  color: var(--fold-color-text-muted);
  font-variant-numeric: tabular-nums;
  /* Below the label by default; opt into above via \`datePlacement\`. */
  order: 1;
}

.nlabel {
  font-size: var(--fold-text-xs);
  font-weight: 600;
  color: var(--fold-color-text-secondary);
  line-height: 1.3;
}

.node.filled .nlabel,
.node:not(.inert):hover .nlabel {
  color: var(--fold-color-text);
}

/* Opt into date above the label (default sits below). */
.tlv.date-above .date {
  order: 0;
}

/* Inline: date and label share a row (date trails the label). */
.tlv.date-inline .txt {
  flex-direction: row;
  align-items: baseline;
  gap: 6px;
}

/* ── Horizontal: a progress stepper (dots on a filled line) ── */
.tlv.h {
  flex-direction: row;
  justify-content: space-between;
  gap: 0;
}

.tlv.h .rail {
  position: absolute;
  top: 13px;
  left: 13px;
  right: 13px;
  height: 2px;
  background: var(--fold-color-border);
  border-radius: 2px;
}

.tlv.h .rail-fill {
  position: absolute;
  inset: 0 auto 0 0;
  height: 100%;
  background: var(--fold-color-primary);
  border-radius: 2px;
  transition: width var(--fold-motion-base);
}

.tlv.h .node {
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 0;
  text-align: center;
}

.tlv.h .txt {
  align-items: center;
  padding-top: 0;
  text-align: center;
}

/* Narrow viewports: fall back to a vertical list. */
@media (max-width: 700px) {
  .tlv.h {
    flex-direction: column;
    gap: 0;
    align-items: stretch;
  }
  .tlv.h .rail {
    left: 12px;
    right: auto;
    top: 16px;
    bottom: 16px;
    width: 2px;
    height: auto;
  }
  .tlv.h .rail-fill {
    display: none;
  }
  .tlv.h .node {
    flex: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 6px 0;
    text-align: left;
  }
  .tlv.h .txt {
    align-items: flex-start;
    text-align: left;
  }
  .tlv.h .date {
    order: 0;
    margin-left: auto;
  }
}

/* Respect users who ask for less motion — kill the animated transitions. */
@media (prefers-reduced-motion: reduce) {
  .node,
  .dot,
  .rail-fill {
    transition: none;
  }
}
`,gC=`/* One tint per variant, set once as local vars — every rule below reads these,
   so a variant is three token references and nothing else. */
:host {
  --_surface: var(--fold-color-surface-subtle);
  --_border: var(--fold-color-border-subtle);
  --_text: var(--fold-color-text-secondary);
  --_glyph: var(--fold-color-text-muted);

  display: flex;
  /* Centred: a callout is one line of text by contract, and with actions the
     row grows to the control's height — top-aligned text then floats above a
     button sitting mid-row. */
  align-items: center;
  gap: var(--fold-space-sm);
  padding: 10px var(--fold-space-md);
  border: 1px solid var(--_border);
  border-radius: var(--fold-radius-md);
  background: var(--_surface);
  color: var(--_text);
  font-size: var(--fold-text-sm);
  font-weight: 500;
  line-height: 1.45;
}

/* A band of its container, not a block in it: the side borders and the radius
   go, so the strip meets the container's own edges. Vertical hairlines stay —
   they are what separates it from what sits above and below. */
:host(.is-flat) {
  border-radius: 0;
  border-left: none;
  border-right: none;
}

.callout-icon {
  flex: none;
  color: var(--_glyph);
}
.callout-body {
  flex: 1 1 auto;
  min-width: 0;
}
/* Empty (no actions projected) → no box, no gap on the trailing edge. */
.callout-actions {
  flex: none;
  display: flex;
  align-items: center;
  gap: var(--fold-space-xs);
  margin-left: var(--fold-space-sm);
}
.callout-actions:empty {
  display: none;
}

/* Status variants — the glyph takes the text colour rather than a dimmer one,
   so it carries the same weight as the message it introduces. */
:host(.v-accent) {
  --_surface: var(--fold-color-primary-surface);
  --_border: var(--fold-color-primary-border);
  --_text: var(--fold-color-primary-text);
  --_glyph: var(--fold-color-primary-text);
}
:host(.v-info) {
  --_surface: var(--fold-color-info-surface);
  --_border: var(--fold-color-info-border);
  --_text: var(--fold-color-info-text);
  --_glyph: var(--fold-color-info-text);
}
:host(.v-success) {
  --_surface: var(--fold-color-success-surface);
  --_border: var(--fold-color-success-border);
  --_text: var(--fold-color-success-text);
  --_glyph: var(--fold-color-success-text);
}
:host(.v-warning) {
  --_surface: var(--fold-color-warning-surface);
  --_border: var(--fold-color-warning-border);
  --_text: var(--fold-color-warning-text);
  --_glyph: var(--fold-color-warning-text);
}
:host(.v-alert) {
  --_surface: var(--fold-color-alert-surface);
  --_border: var(--fold-color-alert-border);
  --_text: var(--fold-color-alert-text);
  --_glyph: var(--fold-color-alert-text);
}
`,mC=`:host {
  display: block;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  /* Clip so the summary bar's fill and the panel follow the rounded corners. */
  overflow: clip;
}

.disc-summary {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border: none;
  background: var(--fold-disclosure-summary-bg, transparent);
  color: var(--fold-disclosure-summary-color, var(--fold-color-text));
  font: inherit;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}
.disc-summary:focus-visible {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: -2px;
}
.disc-label {
  min-width: 0;
}
.disc-chevron {
  flex: none;
  transition: transform 0.2s ease;
}
:host(.is-open) .disc-chevron {
  transform: rotate(180deg);
}

/* The panel animates open by growing its grid row from 0fr to 1fr — the
   content stays in flow (measurable, so 1fr = its natural height) but is
   clipped to zero while closed. \`min-height: 0\` on the clip lets it collapse. */
.disc-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.22s ease;
}
:host(.is-open) .disc-panel {
  grid-template-rows: 1fr;
}
.disc-panel-clip {
  min-height: 0;
  overflow: hidden;
}
.disc-panel-content {
  padding: 16px;
  border-top: 1px solid var(--fold-color-border-subtle);
}

/* Honour a user's reduced-motion preference — snap instead of slide. */
@media (prefers-reduced-motion: reduce) {
  .disc-panel,
  .disc-chevron {
    transition: none;
  }
}
`,vC=`:host {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px 24px;
}
.empty-icon {
  color: var(--fold-color-text-faded);
  margin-bottom: 4px;
}
.empty-icon:empty {
  display: none;
}
.empty-title {
  font-size: var(--fold-text-sm);
  font-weight: 600;
  color: var(--fold-color-text);
  margin: 0;
}
.empty-sub {
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-muted);
  margin: 0;
  text-align: center;
  max-width: 320px;
  line-height: 1.6;
}
.empty-action {
  margin-top: 4px;
}
.empty-action:empty {
  display: none;
}
:host(.alert) .empty-icon,
:host(.alert) .empty-title {
  color: var(--fold-color-alert-text);
}
`,bC=`:host {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--fold-space-sm);
  color: var(--fold-color-text-muted);
  font-size: var(--fold-text-sm);
}
`,yC=`:host {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  pointer-events: none; /* the stack ignores clicks; each toast re-enables them */
}
`,wC=`:host {
  /* One snackbar — the container owns positioning; this owns the surface.
     The accent (stripe + icon) is a single custom prop the variants override. */
  --fold-toast-accent: var(--fold-color-primary-text);

  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 380px;
  padding: 10px 10px 10px 14px;
  border-radius: var(--fold-radius-md);
  font-size: var(--fold-text-sm);
  font-weight: 500;
  color: var(--fold-color-text);

  /* Shared frosted-glass surface. */
  background: var(--fold-color-glass);
  backdrop-filter: blur(var(--fold-blur-glass));
  -webkit-backdrop-filter: blur(var(--fold-blur-glass));
  border: 1px solid var(--fold-color-glass-border);
  border-left: 3px solid var(--fold-toast-accent);
  box-shadow: var(--fold-shadow-lg);
  animation: fold-toast-in 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

:host([data-variant="success"]) {
  --fold-toast-accent: var(--fold-color-success-text);
}
:host([data-variant="error"]) {
  --fold-toast-accent: var(--fold-color-alert-text);
}
:host([data-variant="warning"]) {
  --fold-toast-accent: var(--fold-color-warning-text);
}
:host([data-variant="info"]) {
  --fold-toast-accent: var(--fold-color-primary-text);
}

.toast-icon {
  flex-shrink: 0;
  color: var(--fold-toast-accent);
}

.toast-message {
  flex: 1;
  min-width: 0;
  line-height: 1.4;
}

.toast-close {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  margin: -2px 0;
  padding: 0;
  border: none;
  background: none;
  border-radius: var(--fold-radius-sm);
  color: var(--fold-color-text-muted);
  cursor: pointer;
  transition:
    background var(--fold-motion-fast),
    color var(--fold-motion-fast);
}
.toast-close:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}
.toast-close:focus-visible {
  outline: 2px solid var(--fold-toast-accent);
  outline-offset: 1px;
}

@keyframes fold-toast-in {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Leave — the container tags a dismissed toast via \`animate.leave\`, so Angular
   keeps it in the DOM until this finishes, then removes it. Slide toward the
   right edge + fade + a slight shrink, and collapse the box so the stack above
   eases down instead of snapping. */
:host(.toast-leaving) {
  pointer-events: none;
  overflow: hidden;
  animation: fold-toast-out 0.22s cubic-bezier(0.4, 0, 1, 1) forwards;
}

@keyframes fold-toast-out {
  0% {
    opacity: 1;
    transform: translateX(0);
    max-height: 80px;
    margin-top: 0;
  }
  55% {
    opacity: 0;
    transform: translateX(28px);
    max-height: 80px;
  }
  100% {
    opacity: 0;
    transform: translateX(28px);
    max-height: 0;
    margin-top: -8px;
    padding-top: 0;
    padding-bottom: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  :host,
  :host(.toast-leaving) {
    animation: none;
  }
}
`,xC=`:host {
  display: block;
}

.dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 18px 14px;
  background: var(--fold-color-surface-hover);
  border: 1px dashed var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  color: var(--fold-color-text-secondary);
  cursor: pointer;
  user-select: none;
  text-align: center;
  outline: none;
  transition:
    background var(--fold-motion-fast),
    border-color var(--fold-motion-fast),
    color var(--fold-motion-fast),
    transform var(--fold-motion-fast);

  &:hover,
  &:focus-visible {
    background: var(--fold-color-surface-card);
    border-color: var(--fold-color-primary-border);
    color: var(--fold-color-text);
  }

  &:focus-visible {
    outline: 2px solid var(--fold-color-primary);
    outline-offset: 2px;
  }

  &.over {
    background: var(--fold-color-primary-surface);
    border-color: var(--fold-color-primary);
    color: var(--fold-color-primary-text);
    transform: scale(1.005);
  }

  &.busy {
    cursor: progress;
    pointer-events: none;
    opacity: 0.85;
  }

  &.disabled,
  &[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.55;
  }

  .label {
    font-size: var(--fold-text-sm);
    font-weight: 500;
  }

  .hint {
    font-size: var(--fold-text-xs);
    color: var(--fold-color-text-muted);
  }
}
`,_C=`// Owns the vertical field layout: label, control, hint stacked with an even gap.
// The control's own box styling lives in input-shell.scss.
:host {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.ib-msg {
  margin: 0;
  font-size: var(--fold-text-xs);
}
.ib-hint {
  color: var(--fold-color-text-muted);
}
.ib-error {
  color: var(--fold-color-alert-text);
}
`,CC=`// fold-input renders the shared native-input box (see input-shell.scss) inside
// fold-input-base (which owns the label/hint layout).
@use "./input-shell" as shell;

:host {
  display: block;
}

@include shell.field-input-shell;
`,kC=`:host {
  display: block;
}

label {
  font-size: var(--fold-text-xs);
  font-weight: 600;
  color: var(--fold-color-text-secondary);
}

.req {
  color: var(--fold-color-alert-text);
  margin-left: 2px;
}

.opt {
  margin-left: 4px;
  font-weight: 500;
  color: var(--fold-color-text-faded);
}
`,SC=`// fold-number-input renders the same box as fold-input (see input-shell.scss)
// inside fold-input-base (label/hint layout), plus its own spinner buttons.
// Two axes: \`spinner\` picks the glyph, \`controls\` picks the placement.
@use "./input-shell" as shell;

:host {
  display: block;
}

@include shell.field-input-shell;

// ── Placement ───────────────────────────────────────────────
.ni-field.ni-inside {
  display: block;
}
.ni-field.ni-outside {
  display: flex;
  align-items: stretch;
  gap: 6px;
}
.ni-box {
  position: relative;
  min-width: 0;
}
.ni-outside .ni-box {
  flex: 1 1 auto;
}
.ni-box input {
  width: 100%;
}

// ── Inside: stacked buttons overlaid on the right edge ──────
.ni-inside .ni-box input {
  padding-right: 1.7rem;
}
.ni-stack {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  width: 1.5rem;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--fold-color-border-subtle);
}
.ni-stack-btn {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--fold-color-text-muted);
  cursor: pointer;
  transition:
    color var(--fold-motion-fast),
    background var(--fold-motion-fast);

  &:hover:not(:disabled) {
    color: var(--fold-color-text);
    background: var(--fold-color-surface-hover);
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  &:first-child {
    border-top-right-radius: var(--fold-radius-sm);
  }
  &:last-child {
    border-bottom-right-radius: var(--fold-radius-sm);
  }
}

// ── Outside: buttons flanking the box ───────────────────────
.ni-btn {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--fold-color-border-subtle);
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  cursor: pointer;
  transition:
    border-color var(--fold-motion-fast),
    background var(--fold-motion-fast);

  &:hover:not(:disabled) {
    border-color: var(--fold-color-border);
    background: var(--fold-color-surface-hover);
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}
:host(.sm) .ni-btn {
  width: 1.75rem;
}
:host(.md) .ni-btn {
  width: 2.25rem;
}
:host(.lg) .ni-btn {
  width: 2.75rem;
}

// ── Step suffix (shows the increment) ───────────────────────
.ni-step {
  position: absolute;
  top: 50%;
  right: 0.6rem;
  transform: translateY(-50%);
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-faded);
  pointer-events: none;
}
// clearance so the value never sits under the suffix / stack
.ni-box:has(.ni-step) input {
  padding-right: 2.2rem;
}
.ni-inside .ni-box:has(.ni-step) input {
  padding-right: 3.4rem;
}
.ni-inside .ni-step {
  right: 2rem;
}
`,OC=`@use "./input-shell";

:host {
  display: block;
}

// Box, sizes, \`panel\` variant, focus/disabled — shared with fold-input.
@include input-shell.field-input-shell;

.sel-wrap {
  position: relative;
}

.sel {
  // Drop the native arrow — we draw our own caret, so leave room on the right.
  appearance: none;
  -webkit-appearance: none;
  padding-right: 1.85rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
}

.sel-caret {
  position: absolute;
  top: 50%;
  right: 0.6rem;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--fold-color-text-muted);
}
`,IC=`@use "./slider";

:host {
  display: block;
}

.rs {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.rs-label {
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--fold-color-text-muted);
}

.rs-track-wrap {
  position: relative;
  height: 20px;
}

.rs-track {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  transform: translateY(-50%);
  background: var(--fold-color-border-subtle);
  border-radius: 2px;
}

.rs-fill {
  position: absolute;
  height: 100%;
  background: var(--fold-color-primary);
  border-radius: 2px;
}

.rs-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  pointer-events: none;
  outline: none;

  @include slider.thumb;
}

.rs-values {
  font-size: 10px;
  font-weight: 500;
  color: var(--fold-color-text-muted);
  text-align: center;
  font-variant-numeric: tabular-nums;
}
`,TC=`@use "./slider";

:host {
  display: block;
}

.sl {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sl-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}

.sl-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}

.sl-value {
  font-size: 12px;
  font-weight: 600;
  color: var(--fold-color-text);
  font-variant-numeric: tabular-nums;
}

.sl-input {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    var(--fold-color-primary) 0 var(--sl-pct, 0%),
    var(--fold-color-border-subtle) var(--sl-pct, 0%) 100%
  );

  @include slider.thumb;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
`,EC=`/* The icon renders through <use>, referencing a symbol in the shared sprite —
   nothing is injected into this component's view, so Emulated encapsulation is
   enough (no ::ng-deep, no ViewEncapsulation.None). \`fill: currentColor\` on the
   instance <svg> inherits across the <use> into the symbol's paths; outlined
   icons keep their source fill="none"/stroke="currentColor", so inheritance
   leaves them outlined. */
:host {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: inherit;
}
.icon-root {
  display: block;
  width: var(--icon-size, 20px);
  height: var(--icon-size, 20px);
  fill: currentColor;
}
`,MC=`// ═══════════════════════════════════════════════════════
//  fold-spinner — indeterminate loading arc. currentColor,
//  sized off --fold-spinner-size (icon scale). The spin
//  duration is a component constant (continuous rotation is
//  not a shared UI-transition token; those bake \`ease\`).
// ═══════════════════════════════════════════════════════

:host {
  display: inline-flex;
  width: var(--fold-spinner-size, 20px);
  height: var(--fold-spinner-size, 20px);
  flex-shrink: 0;
  color: inherit; // currentColor drives the stroke
  line-height: 0;
}

.fold-spinner-svg {
  width: 100%;
  height: 100%;
  transform-origin: center;
  animation: fold-spinner-rotate 0.8s linear infinite;
}

.fold-spinner-track,
.fold-spinner-head {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.5;
}

.fold-spinner-track {
  opacity: 0.2;
}

.fold-spinner-head {
  stroke-linecap: round;
  // r=9 → circumference ≈ 56.5; show ~30% as the moving head.
  stroke-dasharray: 56.5;
  stroke-dashoffset: 40;
}

@keyframes fold-spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}

// Reduced motion — stop rotating; show a fuller static ring so it still reads
// as a busy indicator rather than a stray arc.
@media (prefers-reduced-motion: reduce) {
  .fold-spinner-svg {
    animation: none;
  }
  .fold-spinner-head {
    stroke-dashoffset: 14;
  }
}
`,AC=`:host {
  display: grid;
  height: 100%;
  width: 100%;
  /* Positioning anchor for the mobile drawer + its scrim (both position:absolute
     to the shell, so they stay within the frame, not the viewport). */
  position: relative;
  /* border-box is defensive: should any padding ever land on the host, it stays
     inside 100% × 100% instead of pushing the grid past the frame. */
  box-sizing: border-box;
  overflow: hidden;
  background: var(--fold-color-bg-page);
  /* Both rails are intrinsic — each projected rail component sizes itself and
     the \`auto\` track follows it (a self-collapsing rail shrinks to 0). The
     primary reads \`--fold-shell-rail-width\` for its base width via the rail
     component; the secondary is driven by the workspace rail the same way. */
  grid-template-columns:
    auto
    auto
    minmax(0, 1fr);
  /* Two rows by default — a fixed-height header and a 1fr content region. A
     projected footer adds a third row (below); with no footer there is no row
     at all (see the \`:has([footer])\` gate), so an empty slot never leaves a gap. */
  grid-template-rows: var(--fold-shell-header-height, 56px) 1fr;
  grid-template-areas:
    "rail-primary rail-secondary header"
    "rail-primary rail-secondary content";
}

/* Skip-link — the first Tab stop. Off-screen (not display:none, which drops it
   from the tab order) until focused, then it slides into the top-left corner,
   above every region. Clicking / activating it jumps to the focusable <main>. */
.skip-link {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 60;
  margin: var(--fold-space-sm, 8px);
  padding: 8px 14px;
  border: 1px solid var(--fold-color-border);
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-card);
  color: var(--fold-color-text);
  font-size: var(--fold-text-sm);
  font-weight: 600;
  text-decoration: none;
  transform: translateY(-150%);
  transition: transform 120ms ease;
}
.skip-link:focus {
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .skip-link {
    transition: none;
  }
}

/* headerLayout="full" — header spans every column, above the rails, instead of
   sitting over the content column with the rails climbing its side. */
:host(.header-full) {
  grid-template-areas:
    "header       header         header"
    "rail-primary rail-secondary content";
}

/* A projected footer adds a third, content-sized (\`auto\`) row that collapses to
   nothing when the slot is empty. Gated on \`:has([footer])\` so an absent footer
   leaves *no row* — the \`<footer>\` element is always stamped, so without the
   gate an empty one would still claim a track. Also gated on \`:not(.footer-scroll)\`: in
   scroll mode the footer lives inside the content scroll (below), so there is no
   grid row for it. \`footerLayout="full"\` spans it across every column (the usual
   player-bar look); the four header×footer combinations each name their own
   areas, and the more-specific selector wins when both are full. */
:host(:not(.footer-scroll):has([footer])) {
  grid-template-rows: var(--fold-shell-header-height, 56px) 1fr auto;
  grid-template-areas:
    "rail-primary rail-secondary header"
    "rail-primary rail-secondary content"
    "rail-primary rail-secondary footer";
}
:host(.header-full:not(.footer-scroll):has([footer])) {
  grid-template-areas:
    "header       header         header"
    "rail-primary rail-secondary content"
    "rail-primary rail-secondary footer";
}
:host(.footer-full:not(.footer-scroll):has([footer])) {
  grid-template-areas:
    "rail-primary rail-secondary header"
    "rail-primary rail-secondary content"
    "footer       footer         footer";
}
:host(.header-full.footer-full:not(.footer-scroll):has([footer])) {
  grid-template-areas:
    "header       header         header"
    "rail-primary rail-secondary content"
    "footer       footer         footer";
}

/* Each region is a named surface (\`foldSurface\` in the template); the token
   layer resolves each surface's own text and lets a mixed theme re-colour the
   chrome ones. The shell no longer owns that rule — see \`[data-surface]\`. */
.rail-primary {
  grid-area: rail-primary;
  min-height: 0;
}
.rail-secondary {
  grid-area: rail-secondary;
  min-height: 0;
}
.header {
  grid-area: header;
  min-width: 0;
}
/* The footer is content-sized — a player/status bar sizes itself. \`contentinfo\`
   landmark via the \`<footer>\` element. */
.footer {
  grid-area: footer;
  min-width: 0;
  min-height: 0;
}
/* The content cell is the positioning anchor for floating panels: they
       cover the page but stay below the rails/header (nav context preserved). */
.content {
  grid-area: content;
  position: relative;
  /* Full-bleed — the shell adds no gutter, so a page can paint edge-to-edge.
     The themed page gutter is \`fold-page-layout\`'s job, not the shell's. */
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
}
/* <main> is focusable (tabindex=-1) only so the skip-link can land on it — it
   is not an interactive control, so it shows no focus ring. */
.content:focus {
  outline: none;
}

/* footerBehavior="scroll" — the content region owns the scroll and the footer
   flows at its end, revealed on the way down. \`margin-top: auto\` gives the
   classic sticky-footer behaviour: it sits at the bottom of the viewport when
   the page is short, and scrolls below the fold when the page is tall. Inset
   only (it lives in the content column), so \`footerLayout="full"\` has no effect
   here — project flow content, not a page that owns its own full-height scroll. */
:host(.footer-scroll) .content,
:host(.content-auto) .content {
  overflow: auto;
}
.footer-inflow {
  margin-top: auto;
}

/* Elevation is not the shell's skin to own — a region floats when the consumer
   puts \`foldElevated\` on the element that paints it (see FoldElevatedDirective).
   The shell's only involvement is the *gutter*: a cell whose content is elevated
   pads itself, revealing the page-colour moat around the card. Padding (not a
   child margin) so a \`height: 100%\` region — a rail, the content — fits inside
   automatically; a margin would sit outside the height and overflow the cell.
   \`:has()\` keeps a flat region flush. \`--fold-surface-inset\` tunes the gutter. */
.rail-primary:has([data-elevated]),
.rail-secondary:has([data-elevated]),
.header:has([data-elevated]),
.footer:has([data-elevated]),
.content:has([data-elevated]) {
  padding: var(--fold-surface-inset, var(--fold-space-md));
}

/* The narrow layout — a single header + content (+ footer) column. Shared by
   the viewport (@media, the app) and container (@container, an embedded preview)
   paths via a mixin so the two never drift. The secondary rail drops out; the
   primary rail becomes an off-canvas drawer the \`mobile-nav-open\` class slides
   in over a scrim. Every layout class collapses to the same stack; the
   with-footer selectors mirror the base ones at matching specificity so they
   win in source order over their wider-viewport counterparts. */
@mixin narrow-collapse {
  :host,
  :host(.header-full) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: var(--fold-shell-header-height-mobile, 52px) 1fr;
    grid-template-areas:
      "header"
      "content";
  }
  :host(:not(.footer-scroll):has([footer])),
  :host(.header-full:not(.footer-scroll):has([footer])),
  :host(.footer-full:not(.footer-scroll):has([footer])),
  :host(.header-full.footer-full:not(.footer-scroll):has([footer])) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: var(--fold-shell-header-height-mobile, 52px) 1fr auto;
    grid-template-areas:
      "header"
      "content"
      "footer";
  }
  /* Both rails are gone on mobile by default. In \`drawer\` mode the primary
     comes back as an off-canvas drawer (below); in \`none\` mode it stays hidden
     and the app composes its own launcher. */
  .rail-primary,
  .rail-secondary {
    display: none;
  }
  /* Off-canvas drawer (\`mobileNav="drawer"\`): pinned below the header (so the
     header + its hamburger stay in reach), intrinsic width (the projected rail
     sizes itself, capped so it never swallows the screen), hidden off the left
     edge until opened. \`visibility\` — not just the transform — takes it out of
     the tab order while closed, so keyboard focus can't land on an off-screen
     rail. The secondary rail stays gone. */
  :host(.mobile-drawer) .rail-primary {
    display: block;
    position: absolute;
    top: var(--fold-shell-header-height-mobile, 52px);
    bottom: 0;
    left: 0;
    z-index: 41;
    width: auto;
    max-width: 85%;
    overflow-y: auto;
    visibility: hidden;
    transform: translateX(-100%);
    transition:
      transform 240ms cubic-bezier(0.4, 0, 0.2, 1),
      visibility 240ms;
  }
  :host(.mobile-drawer.mobile-nav-open) .rail-primary {
    visibility: visible;
    transform: translateX(0);
  }
  /* The scrim covers the content (below the header), dimming it and catching the
     dismiss click. Only in the DOM while the drawer is open (see template). */
  .mobile-scrim {
    position: absolute;
    inset: var(--fold-shell-header-height-mobile, 52px) 0 0 0;
    z-index: 40;
    border: 0;
    padding: 0;
    background: var(--fold-color-scrim);
    animation: fold-shell-scrim-in 240ms ease;
  }
  /* Freeze the content scroll behind an open drawer. */
  :host(.mobile-nav-open) .content {
    overflow: hidden;
  }
}

@media (max-width: 768px) {
  @include narrow-collapse;
}

/* Container-query responsiveness — the same collapse keyed to the shell's own
   width. Only fires inside an ancestor with \`container-type\` (e.g. the gallery's
   responsive-mode preview); the app has none, so it stays on the @media rule
   above. Two steps: the secondary rail folds first (tablet), then the full
   collapse (mobile). */
@container (max-width: 1024px) {
  .rail-secondary {
    display: none;
  }
}
@container (max-width: 768px) {
  @include narrow-collapse;
}

@keyframes fold-shell-scrim-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Respect a reduced-motion preference — the drawer still opens, just without the
   slide or the scrim fade. */
@media (prefers-reduced-motion: reduce) {
  .rail-primary,
  .mobile-scrim {
    transition: none;
    animation: none;
  }
}
`,PC=`:host {
  display: block;
  /* Fold on our OWN width, not the viewport — so the layout collapses when its
     container is narrow (a panel, a preview frame) regardless of the window. */
  container-type: inline-size;
}

.al-grid {
  display: grid;
  grid-template-columns: var(--fold-aside-layout-center-width, minmax(0, 1fr));
  gap: var(--fold-aside-layout-gap, 28px);
  max-width: var(--fold-aside-layout-max, 1240px);
  margin-inline: auto;
  padding: var(--fold-aside-layout-pad, 28px 28px 64px);
}

/* Columns exist only for the rails actually filled — \`:has()\` inspects the
   *projected* content (its argument isn't view-scoped), so this stays reactive:
   a rail that toggles at runtime adds/drops its column.
   Each track is a CSS var: rails default to a fixed width, the centre flexes.
   Set all three to \`minmax(0, 1fr)\` (or \`1fr\`) for equal columns. */
:host:has([asideright]) .al-grid {
  grid-template-columns:
    var(--fold-aside-layout-center-width, minmax(0, 1fr))
    var(--fold-aside-layout-side-width, 300px);
}
:host:has([asideleft]) .al-grid {
  grid-template-columns:
    var(--fold-aside-layout-rail-width, 220px)
    var(--fold-aside-layout-center-width, minmax(0, 1fr));
}
:host:has([asideleft]):has([asideright]) .al-grid {
  grid-template-columns:
    var(--fold-aside-layout-rail-width, 220px)
    var(--fold-aside-layout-center-width, minmax(0, 1fr))
    var(--fold-aside-layout-side-width, 300px);
}

/* An empty rail wrapper would still claim a grid cell — drop it when its slot
   received nothing, so the template's tracks line up with the visible columns. */
:host:not(:has([asideleft])) .al-aside-left {
  display: none;
}
:host:not(:has([asideright])) .al-aside-right {
  display: none;
}

/* The wrappers are component-owned, so their styling is view-scoped correctly
   and reaches the projected content as their direct children (no ::ng-deep). */

/* Centre (the default slot): stack its blocks with a consistent rhythm. */
.al-center {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--fold-aside-layout-stack, 18px);
}

/* Both rails: sticky flex columns pinned near the top of the scrollport. A rail
   taller than the scrollport can't be fully seen while stuck, so it caps at the
   visible height and scrolls internally instead of clipping its overflow below
   the fold. The default assumes a ~viewport-tall scrollport; a page whose scroll
   box is shorter overrides \`--fold-aside-layout-rail-max\`. */
.al-aside {
  /* Resolved sticky offset for this rail: its own override → the shared offset →
     24px. Both \`top\` and the height cap read it, so a per-rail offset stays
     consistent with the internal scroll. */
  --al-rail-top: var(--fold-aside-layout-top, 24px);
  align-self: start;
  position: sticky;
  top: var(--al-rail-top);
  display: flex;
  flex-direction: column;
  gap: var(--fold-aside-layout-rail-gap, 14px);
  min-width: 0;
  max-height: var(
    --fold-aside-layout-rail-max,
    calc(100dvh - var(--al-rail-top) - 2rem)
  );
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
}
.al-aside-left {
  --al-rail-top: var(
    --fold-aside-layout-left-top,
    var(--fold-aside-layout-top, 24px)
  );
}
.al-aside-right {
  --al-rail-top: var(
    --fold-aside-layout-right-top,
    var(--fold-aside-layout-top, 24px)
  );
}

/* Collapse to a single column: centre first, then the rails; un-stick. */
@container (max-width: 1040px) {
  .al-grid,
  :host:has([asideright]) .al-grid,
  :host:has([asideleft]) .al-grid,
  :host:has([asideleft]):has([asideright]) .al-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .al-aside {
    position: static;
    /* Stacked in one column: no scrollport to fit, so let the rail be its full
       height again instead of an internal scroll. */
    max-height: none;
    overflow: visible;
  }
  .al-center {
    order: 1;
  }
  .al-aside-left {
    order: 2;
  }
  .al-aside-right {
    order: 3;
  }
  /* Navigation rail: keep the menu above the content it drives. */
  :host(.stack-left-first) .al-aside-left {
    order: 0;
  }
}

@container (max-width: 700px) {
  .al-grid {
    padding: var(--fold-aside-layout-pad-sm, 16px 14px 48px);
    /* Tighter gap on narrow containers — tokenised like the padding above. */
    gap: var(--fold-aside-layout-gap-sm, 16px);
  }
}
`,RC=`/* A full-bleed splash band. The host owns the bleed + the surface (wash +
   hairline); the two inner lanes stack a decorative backdrop under the content. */
:host {
  display: block;
  position: relative;
  overflow: clip; /* contain an oversized backdrop watermark */
  /* Bleed — cancel *exactly* the gutter fold-page-layout pads with (same token),
     so the band spans edge-to-edge. As the top band it also swallows the page's
     top padding to sit flush to the edge. */
  margin-inline: calc(-1 * var(--fold-page-gutter, 32px));
  padding: var(--fold-hero-section-pad-top, 56px)
    var(--fold-hero-section-pad-inline, 24px)
    var(--fold-hero-section-pad-bottom, 52px);
  border-bottom: 1px solid var(--fold-color-border);
  /* A wash of the brand tint over the raised surface so the band reads as the
     hero, not just the top of the scroll. */
  background:
    radial-gradient(
      120% 140% at 50% 0%,
      var(--fold-color-primary-surface),
      transparent 60%
    ),
    var(--fold-color-surface-card);
}
:host(:first-child) {
  margin-top: calc(-1 * var(--fold-page-pad-top, 28px));
}
:host(.no-wash) {
  background: var(--fold-color-surface-card);
}

/* Decorative layer, behind the content. */
.hs-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  user-select: none;
}

/* The centred content column, above the backdrop. */
.hs-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--fold-hero-section-gap, 18px);
}
:host(.align-start) .hs-content {
  align-items: flex-start;
  text-align: start;
}
`,LC=`:host {
  display: flex;
  flex-direction: column;
  /* The page's vertical rhythm — the one gap between stacked elements (header ↔
     body, and section ↔ section in .page-body). One token so a page/theme retunes
     the whole rhythm in one place, alongside --fold-page-gutter / -pad-*. */
  gap: var(--fold-page-gap, 32px);
  box-sizing: border-box;
  /* The page fills whatever width it is given — it does NOT cap the column.
     Narrowing a block to a readable measure is the content's job (a max-width
     container around that block), never the page scaffold's. */
  /* The themed page gutter lives here, not on the shell: the app-shell content
     region is full-bleed so a page can paint edge-to-edge, and any page that
     wants the standard margins wraps its content in fold-page-layout.
     The *horizontal* gutter is a single token (--fold-page-gutter) on purpose:
     a \`fold-page-section[bleed]\` cancels it with \`calc(-1 * …)\` to span the page
     edge-to-edge, so the two stay in lockstep at every breakpoint. Vertical
     breathing room is its own token (--fold-page-gap, above). Set
     --fold-page-gutter: 0 for a bleeding page. */
  /* Block padding is tokenised too, so a bleed band at the top/bottom edge can
     cancel it exactly (--fold-page-pad-top / -bottom) and sit flush to the edge. */
  padding-block: var(--fold-page-pad-top, 28px)
    var(--fold-page-pad-bottom, 40px);
  padding-inline: var(--fold-page-gutter, 32px);
  /* The page is its own scroll box: it fills the height its frame gives it and
     scrolls inside, so the frame's chrome (rails, header, gutter) stays put.
     Inert until something constrains the height — a page in a taller container
     just grows as before. */
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
}
.page-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}
.page-head-text {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}
.page-title {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--fold-text-xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--fold-color-text);
}
.page-icon {
  flex: none;
  color: var(--fold-color-primary-text);
}
/* A pill (status / kind) sitting inline after the title text. */
.page-title-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.page-title-badge:empty {
  display: none;
}
/* The description slot carries the typography so the consumer owns only the
   markup: a plain <p>, or one with <code>/<a> inside, reads the same either
   way. Empty (nothing projected) → no box, no gap under the title.

   It spans the column by default — the page's own max-width (780/940/none) is
   the one that decides how wide a page reads, and a second cap here only ever
   fought it. Set --fold-page-desc-measure (e.g. 60ch) on a fluid page where the
   line would otherwise get long. */
.page-desc {
  font-size: var(--fold-text-sm);
  line-height: 1.5;
  max-width: var(--fold-page-desc-measure, none);
  color: var(--fold-color-text-muted);
}
.page-desc:empty {
  display: none;
}
.page-desc > * {
  margin: 0;
}
.page-actions {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
/* Nothing projected → no empty slot pushing the layout. */
.page-actions:empty {
  display: none;
}
.page-body {
  display: flex;
  flex-direction: column;
  /* Same rhythm token as the host gap — the stack between sections. */
  gap: var(--fold-page-gap, 32px);
}
`,DC=`/* The host is the bleed anchor + the page-body flex child; the semantic
   <section> inside carries the layout (and the a11y region). */
:host {
  display: block;
}
/* \`bleed\` — span the page layout edge-to-edge. Cancels *exactly* the gutter
   fold-page-layout pads with (the same --fold-page-gutter token), so the section
   reaches the layout's padding edge and no further: flush at every breakpoint,
   never an overflow. Only meaningful inside fold-page-layout (the fallback keeps
   a stray use from exploding). */
:host(.is-bleed) {
  margin-inline: calc(-1 * var(--fold-page-gutter, 32px));
}
/* A bleed band at an *edge* of the page also swallows the page's block padding
   so it sits flush to the very top/bottom — a hero as the first band, a footer
   band as the last. Same token as the padding, so it stays exact. A band in the
   middle keeps the vertical rhythm; only the edges flush. */
:host(.is-bleed):first-child {
  margin-top: calc(-1 * var(--fold-page-pad-top, 28px));
}
:host(.is-bleed):last-child {
  margin-bottom: calc(-1 * var(--fold-page-pad-bottom, 40px));
}

/* The <section>: the head (title + description) then the body, stacked. */
.ps-root {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-lg);
}
/* Column: the title row (fold-element-title owns title + action) then the
   optional description below it. */
.section-head {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-sm);
  min-width: 0;
}
.section-desc {
  margin: 0;
  font-size: var(--fold-text-sm);
  line-height: 1.5;
  max-width: 62ch;
  color: var(--fold-color-text-secondary);
}
.section-body {
  min-width: 0;
}
/* Stack: body is a vertical flow of form fields with even spacing. */
:host(.stack) .section-body {
  display: flex;
  flex-direction: column;
  gap: var(--fold-space-lg);
}
`,FC=`/* Nav above the content by default; \`is-row\` (a side placement that has not
   folded) turns it into a rail beside the content. */
:host {
  display: flex;
  flex-direction: column;
  gap: var(--fold-tab-layout-gap, 16px);
  min-width: 0;
}
/* No align-items: the rail stretches to the row's height on purpose. A tab bar
   carries its own surface (\`background="surface"\`), and a rail that hugged its
   tabs would leave that band floating above the content it belongs to. The bar
   fills whatever box it is given — this is the layout's half of that deal. */
:host(.is-row) {
  flex-direction: row;
}

/* Grid, not block: a grid item stretches on BOTH axes by default, so the
   projected bar fills the region without the layout having to style it (view
   encapsulation puts projected content out of reach of a \`.tl-nav > *\` rule,
   and ::ng-deep is not an option). */
.tl-nav {
  display: grid;
  min-width: 0;
}
/* Only the rail gets a track — stacked, the nav spans the full width. */
:host(.is-row) .tl-nav {
  flex: 0 0 var(--fold-tab-layout-nav-width, 200px);
}

.tl-body {
  flex: 1 1 auto;
  min-width: 0;
}
`,zC=`:host {
  position: relative;
  width: 40px;
  height: 36px;
  /* border-box so the expanded row's width:100% + padding stays inside the
     menu column instead of overflowing to the right. */
  box-sizing: border-box;
  display: grid;
  place-items: center;
  border-radius: var(--fold-radius-sm);
  color: var(--fold-color-text-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition:
    background var(--fold-motion-fast),
    color var(--fold-motion-fast);

  /* The tint the item hovers/activates with. \`follow\` (the fold-menu default)
     takes the enclosing section's colour, or neutral when there's no section
     (the footer). The menu's \`tint\` input overrides it for all its items. The
     hover/active surfaces + text derive from it, so a tint only sets --mi-accent
     (except neutral, which maps to the flat tab-nav-hover look). */
  --mi-accent: var(--fold-menu-section-color, var(--fold-color-text-secondary));
  --mi-hover-bg: color-mix(
    in srgb,
    var(--mi-accent) 16%,
    var(--fold-color-surface-hover)
  );
  --mi-hover-fg: var(--mi-accent);
  --mi-active-bg: color-mix(in srgb, var(--mi-accent) 15%, transparent);
  --mi-active-fg: color-mix(
    in srgb,
    var(--mi-accent) 80%,
    var(--fold-color-text)
  );
  --mi-active-icon: var(--mi-accent);
}
:host-context(fold-menu[data-tint="neutral"]) {
  /* Flat surface-hover background. Hover text stays faded (like primary's hover
     shows the accent, not bright text); the selection brightens to full text. */
  --mi-accent: var(--fold-color-text-secondary);
  --mi-hover-bg: var(--fold-color-surface-hover);
  --mi-hover-fg: var(--fold-color-text-secondary);
  --mi-active-bg: var(--fold-color-surface-hover);
  --mi-active-fg: var(--fold-color-text);
  --mi-active-icon: var(--fold-color-text);
}
:host-context(fold-menu[data-tint="primary"]) {
  --mi-accent: var(--fold-color-primary);
}

:host(:hover) {
  background: var(--mi-hover-bg);
  color: var(--mi-hover-fg);
}
:host(:focus-visible) {
  outline: 2px solid var(--fold-color-primary);
  outline-offset: 2px;
}

/* Active — the tint persists after a click. Matches the app's workspace rail: a
   faint accent-tinted pill (inset, so it never touches the rail edges) and a
   left indicator bar sitting in the rail gutter (flush to the edge, -8px) with a
   soft glow — not glued to the item. */
:host(.is-active) {
  color: var(--mi-active-fg);
  background: var(--mi-active-bg);
}
:host(.is-active) .mi-icon {
  color: var(--mi-active-icon);
}
:host(.is-active)::before {
  content: "";
  position: absolute;
  left: -8px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  border-radius: 0 2px 2px 0;
  background: var(--mi-accent);
  box-shadow: 0 0 8px var(--mi-accent);
}

.mi-icon {
  color: inherit;
  transition: color var(--fold-motion-fast);
}

/* ── Badge ──────────────────────────────────────────────────────────
   \`--mi-badge-accent\` (set on the host) drives both modes: it's the item's own
   tint for \`follow\`, or the semantic tone's colour otherwise.
   Collapsed rail: a corner indicator on the icon — a small accent dot, or a
   count bubble when the badge is a number (no room for a text pill on 40px).
   The pill (\`.mi-badge\`) is hidden here and revealed in the expanded row. */
.mi-dot {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 8px;
  height: 8px;
  border-radius: var(--fold-radius-round);
  background: var(--mi-badge-accent, var(--mi-accent));
  pointer-events: none;
}
.mi-dot-count {
  top: 2px;
  right: 2px;
  width: auto;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  display: grid;
  place-items: center;
  border-radius: var(--fold-radius-pill);
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  color: var(--fold-color-on-primary);
}

.mi-badge {
  display: none;
}

/* \`follow\` pill: mirror fold-badge's shape/type, tinted from the item's accent
   with the same soft surface/border/text mix the item uses for its hovers. */
.mi-badge-follow {
  padding: 1px 7px;
  border-radius: var(--fold-radius-pill);
  font-size: var(--fold-text-xs);
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
  background: color-mix(in srgb, var(--mi-badge-accent) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--mi-badge-accent) 35%, transparent);
  color: color-mix(in srgb, var(--mi-badge-accent) 85%, var(--fold-color-text));
}

/* Expanded row: drop the corner indicator, show the pill flush to the trailing
   edge (the label keeps its natural width; \`auto\` margin fills the gap). */
:host-context(fold-menu.expanded) .mi-dot {
  display: none;
}
:host-context(fold-menu.expanded) .mi-badge {
  display: inline-flex;
  margin-left: auto;
}

/* Hover tooltip — escapes the rail to the right (host has overflow: visible). */
.mi-tip {
  position: absolute;
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  padding: 4px 8px;
  border-radius: var(--fold-radius-sm);
  background: var(--fold-color-glass);
  border: 1px solid var(--fold-color-glass-border);
  color: var(--fold-color-text);
  font-size: var(--fold-text-xs);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  box-shadow: var(--fold-shadow-md);
  transition: opacity var(--fold-motion-fast);
  z-index: 100;
}
:host(:hover) .mi-tip {
  opacity: 1;
}

/* Inside an expanded menu: a full-width row, the tooltip becomes an inline
   label (no longer a floating chip). */
/* Expanded: a full-width row. \`width: auto\` (+ the menu-body's align-items:
   stretch) instead of \`width: 100%\` so the item's intrinsic label width feeds
   the menu's max-content — a percentage contributes 0 and would collapse the
   rail to its min-width, overflowing the nowrap labels. */
:host-context(fold-menu.expanded) {
  width: auto;
  height: 36px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
}
:host-context(fold-menu.expanded) .mi-tip {
  position: static;
  transform: none;
  padding: 0;
  border: none;
  background: none;
  box-shadow: none;
  color: inherit;
  font-size: var(--fold-text-sm);
  opacity: 1;
  pointer-events: auto;
}
`,NC=`/* A section stacks its separator/header above the projected items. In the
   collapsed rail the items center; expanded, they stretch to full-width rows. */
:host {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
}
:host-context(fold-menu.expanded) {
  align-items: stretch;
  /* auto (not the base 100%) so the items' intrinsic width reaches the menu's
     max-content — a percentage width collapses the rail to its min-width. */
  width: auto;
}

/* By default the items wrapper is transparent: the projected items stay direct
   flex children of the section, so a non-collapsible section is unchanged. */
.section-items {
  display: contents;
}

/* ── Collapsible header ─────────────────────────────────
   Wraps the separator in a toggle button with a trailing chevron. */
.section-head {
  all: unset;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;

  fold-menu-separator {
    flex: 1;
    min-width: 0;
  }
}
.section-chevron {
  flex-shrink: 0;
  margin-left: auto;
  margin-right: 10px;
  color: var(--fold-color-text-faded);
  transition: transform var(--fold-motion-fast);
}
.section-chevron.is-open {
  transform: rotate(90deg);
}
/* Collapsed rail (icon only): no header to click — freeze the toggle, hide the
   chevron, and keep every item visible. */
:host-context(fold-menu:not(.expanded)) .section-head {
  pointer-events: none;
}
:host-context(fold-menu:not(.expanded)) .section-chevron {
  display: none;
}

/* ── Foldable items ─────────────────────────────────────
   When collapsible the wrapper becomes a real box that can fold — it mirrors
   the section's own column layout. */
.section-items.foldable {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  overflow: hidden;
  max-height: 60vh;
  opacity: 1;
  transition:
    max-height var(--fold-motion-base),
    opacity var(--fold-motion-base);
}
:host-context(fold-menu.expanded) .section-items.foldable {
  align-items: stretch;
  width: auto;
}
.section-items.foldable.is-collapsed {
  max-height: 0;
  opacity: 0;
}
/* Never fold in the collapsed rail — every item stays reachable. */
:host-context(fold-menu:not(.expanded)) .section-items.foldable {
  max-height: none;
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .section-items.foldable,
  .section-chevron {
    transition: none;
  }
}
`,jC=`/* Collapsed (icon rail): a short mark centered between items. */
:host {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12px;
  margin: 4px 0 2px;
}
.sep-mark {
  flex-shrink: 0;
  width: 16px;
  height: 3px;
  border-radius: 2px;
  background: var(--fold-color-border);
  opacity: 0.85;
}
.sep-label {
  display: none;
}

/* Expanded: a section header — colour dot + uppercase label. */
:host-context(fold-menu.expanded) {
  justify-content: flex-start;
  gap: 7px;
  height: auto;
  padding: 12px 12px 4px;
}
:host-context(fold-menu.expanded) .sep-mark {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  opacity: 1;
}
:host-context(fold-menu.expanded) .sep-label {
  display: inline;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}
`,HC=`:host {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* The menu owns its width; the shell's \`auto\` rail column follows it. Reads
     the shell's base rail width (its \`railWidth\`), falling back to 64 when used
     standalone. Expanded overrides this with its content width below. */
  width: var(--fold-shell-rail-width, 64px);
  height: 100%;
  /* border-box so the vertical padding stays inside the rail height instead of
     overflowing the bottom (which the shell cell clips → footer looks flush). */
  box-sizing: border-box;
  padding: 10px 0;
  gap: 4px;
  /* Background follows the rail's depth (\`level\`): a primary rail and a
     secondary (workspace) rail read as distinct layers. */
  background: var(--fold-color-bg-rail-primary);
  border-right: 1px solid var(--fold-color-border);
  overflow: visible; /* tooltips escape the rail */
  user-select: none;
  transition: width var(--fold-motion-base);
}

:host([data-level="secondary"]) {
  background: var(--fold-color-bg-rail-secondary);
}
:host([data-level="tertiary"]) {
  background: var(--fold-color-bg-rail-tertiary);
}

/* When raised into a card (the consumer puts \`foldElevated\` on the rail), the
   menu reads its **own** \`data-elevated\` — no reaching into the shell's classes.
   Radius + shadow come from the token layer's \`[data-elevated]\` rule; the menu
   only drops its divider border, since the card's shadow separates it now. */
/* Raised into a card (the consumer puts \`foldElevated\` on the rail): the menu
   reads its own \`data-elevated\` and only drops its divider border — radius +
   shadow come from the token layer, and the page-gutter comes from the shell
   cell's padding (so a height:100% rail fits with no overflow). */
:host([data-elevated]) {
  border-right: none;
}

/* Expanded — the rail takes its content width (labels), bounded so a long label
   can't run away. Items/separators self-switch to inline labels via
   :host-context. In a fixed-width cell, size the cell to match (measure it). */
:host(.expanded) {
  width: max-content;
  min-width: 190px;
  max-width: 260px;
  align-items: stretch;
}

.menu-head,
.menu-foot {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
}
.menu-head:empty,
.menu-foot:empty {
  display: none;
}
.menu-head {
  padding-bottom: 8px;
  border-bottom: 1px solid var(--fold-color-border-subtle);
}
.menu-foot {
  padding-top: 8px;
  border-top: 1px solid var(--fold-color-border-subtle);
}
/* Expanded: head/foot items align left like the body (not centered). Horizontal
   padding via left/right only, so each band keeps its separator padding-top /
   -bottom. \`width: auto\` keeps the max-content chain intact. */
:host(.expanded) .menu-head,
:host(.expanded) .menu-foot {
  align-items: stretch;
  width: auto;
  padding-left: 8px;
  padding-right: 8px;
}

/* The body grows to fill, pinning the footer to the bottom; items sit at top. */
.menu-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
}
:host(.expanded) .menu-body {
  align-items: stretch;
  /* auto (not the base 100%) so the items' intrinsic width propagates up to the
     menu's max-content — a percentage width breaks that and the rail collapses
     to min-width, overflowing the labels. */
  width: auto;
  padding: 0 8px;
  /* A nav taller than the rail scrolls instead of overflowing off the bottom.
     \`min-height: 0\` lets this flex item shrink below its content so the scroll
     can engage; \`overflow-y\` does the scrolling. Expanded only — collapsed
     keeps \`overflow: visible\` so hover tooltips escape the rail (setting
     \`overflow-y\` would force \`overflow-x\` to clip them too). */
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
}

/* Collapse/expand toggle. */
.menu-toggle {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border: none;
  border-radius: var(--fold-radius-sm);
  background: none;
  color: var(--fold-color-text-muted);
  cursor: pointer;
  transition:
    background var(--fold-motion-fast),
    color var(--fold-motion-fast);
}
.menu-toggle:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text-secondary);
}
:host(.expanded) .menu-toggle {
  align-self: flex-end;
  margin-right: 8px;
}

/* Expanded + toggle in a band: the band's content still STACKS in rows (a
   column), so a header/footer can hold several elements. The arrow floats to the
   trailing edge of the last row via absolute position, inside a reserved right
   gutter so it never overlaps the content — one element or many, the arrow sits
   inline at the end of the last row (matching the app's workspace rail). Content
   is top-aligned in both bands, so the last row is at the bottom → anchor the
   arrow bottom-right in both. Collapsed stays a plain centered column. */
:host(.expanded) .menu-head.head-has-toggle,
:host(.expanded) .menu-foot.foot-has-toggle {
  position: relative;
  padding-right: 40px;
}
:host(.expanded) .menu-head.head-has-toggle .menu-toggle,
:host(.expanded) .menu-foot.foot-has-toggle .menu-toggle {
  position: absolute;
  right: 8px;
  bottom: 8px;
  margin: 0;
}
`,BC=`/* The host takes no layout — the scrim + dialog are fixed to the viewport. */
:host {
  display: contents;
}

/* Blurred darkening veil over the whole viewport, catching the dismiss click. */
.nl-scrim {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--fold-color-scrim);
  backdrop-filter: blur(var(--fold-blur-glass));
  -webkit-backdrop-filter: blur(var(--fold-blur-glass));
  animation: fold-nl-fade 200ms ease;
}

/* The centred dialog holding the close button + the tile grid. */
.nl-dialog {
  position: fixed;
  inset: 0;
  z-index: 201;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.nl-close {
  position: absolute;
  top: 16px;
  right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: var(--fold-radius-md);
  background: var(--fold-color-surface-raised);
  color: var(--fold-color-text-secondary);
  cursor: pointer;
  transition:
    background 140ms ease,
    color 140ms ease;
}
.nl-close:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}

/* The grid lays the projected tiles out; each tile styles + stages itself. The
   column count comes from the component (\`--nav-cols\`, \`auto\` = scaled to the
   tile count), so fewer tiles read as larger flat tiles in the same width. */
.nl-grid {
  display: grid;
  grid-template-columns: repeat(var(--nav-cols, 3), 1fr);
  gap: 12px;
  width: 100%;
  max-width: 360px;
}
/* On a very narrow phone, never more than two across whatever the count. */
@media (max-width: 360px) {
  .nl-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@keyframes fold-nl-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .nl-scrim {
    animation: none;
  }
}
`,UC=`:host {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  aspect-ratio: 1;
  padding: 12px;
  border-radius: var(--fold-radius-lg);
  background: var(--fold-color-surface-raised);
  border: 1px solid var(--fold-color-border);
  color: var(--fold-color-text-secondary);
  text-decoration: none;
  cursor: pointer;
  /* Entrance — staged by grid position (see the @for below), so tiles cascade
     in without the launcher wiring an index. \`forwards\` holds the end state. */
  opacity: 0;
  animation: fold-nav-tile-in 260ms ease forwards;
  transition:
    transform 140ms ease,
    background 140ms ease,
    border-color 140ms ease,
    color 140ms ease;
}
:host(:hover) {
  transform: translateY(-2px);
  background: var(--fold-color-surface-hover);
  border-color: var(--fold-color-primary);
  color: var(--fold-color-text);
}
:host(:active) {
  transform: scale(0.97);
}
:host(.is-active) {
  border-color: var(--fold-color-primary);
  color: var(--fold-color-primary-text);
}

/* Filled — a solid brand tile (the flat "app-icon" look). Names the brand
   roles, so it's a navy tile with a white glyph under navi, teal under umbra. */
:host(.is-filled) {
  background: var(--fold-color-primary);
  border-color: transparent;
  color: var(--fold-color-on-primary);
}
:host(.is-filled:hover) {
  background: var(--fold-color-primary-strong);
  border-color: transparent;
  color: var(--fold-color-on-primary);
}
/* Active filled tile: an inset ring in the on-fill colour marks the current
   destination without breaking the solid fill. */
:host(.is-filled.is-active) {
  outline: 2px solid var(--fold-color-on-primary);
  outline-offset: -5px;
}
.nt-icon {
  flex: none;
}
.nt-label {
  font-size: var(--fold-text-xs);
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
}

/* Stagger the entrance by position among its siblings — the tile knows its own
   place in the grid, so no index has to cross the projection boundary. Cap at a
   reasonable tile count; beyond it they all share the last delay. */
@for $i from 1 through 12 {
  :host(:nth-child(#{$i})) {
    animation-delay: #{($i - 1) * 35}ms;
  }
}

@keyframes fold-nav-tile-in {
  from {
    opacity: 0;
    transform: scale(0.82);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  :host {
    animation: none;
    opacity: 1;
  }
}
`,VC=`:host {
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}
/* flex: 1 so the bar fills the host box in both axes — the surface
       background then covers the whole container, not just the tab content
       (e.g. a full-height vertical sidebar). */
.tab-nav {
  flex: 1;
  display: flex;
  max-width: 100%;
  gap: 2px;
  user-select: none;
}

/* Filled bar — the tab-nav carries its own surface instead of blending
       with the app background. Uses the tertiary rail role: a tab sidebar is,
       semantically, the third navigation rail (app menu · workspace · section). */
.bg-surface {
  background: var(--fold-color-bg-rail-tertiary);
  padding: 4px 8px 0;
}
.bg-surface.dir-vertical {
  padding: 12px 8px;
}
.tab-nav-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 6px 8px;
  background: none;
  border: none;
  color: var(--fold-color-text-muted);
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  transition:
    color 0.1s ease,
    background 0.1s ease,
    border-color 0.1s ease;
  white-space: nowrap;
}
.tab-nav-item:hover {
  color: var(--fold-color-text-secondary);
}

/* Comfortable — a prominent, page-level bar (vs the compact default). */
.size-comfortable .tab-nav-item {
  flex: 0 1 auto;
  gap: 10px;
  padding: 11px 16px;
  font-size: var(--fold-text-sm);
}

/* Underline */
.style-underline {
  border-bottom: 1px solid var(--fold-color-border);
}
.style-underline .tab-nav-item {
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}
.style-underline .tab-nav-item.is-active {
  color: var(--fold-color-text);
  border-bottom-color: var(--fold-color-primary);
}

/* Fill */
.style-fill .tab-nav-item {
  border-radius: var(--fold-radius-sm);
  border: 1px solid transparent;
}
.style-fill .tab-nav-item.is-active {
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-weight: 600;
}
.style-fill .tab-nav-item:hover:not(.is-active) {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}

/* Vertical */
.dir-vertical {
  flex-direction: column;
}
.dir-vertical .tab-nav-item {
  flex: none;
  justify-content: flex-start;
  text-align: left;
  padding: 9px 12px;
  gap: 10px;
  border-radius: var(--fold-radius-sm);
  font-size: var(--fold-text-sm);
  font-weight: 500;
}
.dir-vertical.style-underline {
  border-bottom: none;
  border-right: 1px solid var(--fold-color-border);
}
.dir-vertical.style-underline .tab-nav-item {
  border-bottom: none;
  border-left: 2px solid transparent;
  margin-bottom: 0;
  margin-right: -1px;
}
.dir-vertical.style-underline .tab-nav-item.is-active {
  border-left-color: var(--fold-color-primary);
}
.dir-vertical.style-fill .tab-nav-item.is-active {
  background: var(--fold-color-primary-surface);
  color: var(--fold-color-primary-text);
  font-weight: 600;
}

/* Reduce — the tightest density: an icon accordion. Every tab but the active one
   shows just its icon; the active one keeps its label and takes the room. A tab
   with no icon keeps its label, so nothing is left unlabelled. Both directions. */
.size-reduce .tab-nav-item {
  flex: 0 0 auto;
  gap: 0;
}
/* Scoped to :not(.is-active) rather than hide-then-show: view encapsulation
   appends an attribute to every compound selector, so the \`~\` hide rule would
   outweigh any show rule on the active tab whatever the source order. */
.size-reduce .tab-nav-item:not(.is-active) .tab-nav-icon ~ .tab-nav-label,
.size-reduce .tab-nav-item:not(.is-active) .tab-nav-badge {
  display: none;
}
.size-reduce .tab-nav-item.is-active {
  flex: 1 1 auto;
  min-width: 0;
  gap: 7px;
}
.size-reduce .tab-nav-item.is-active .tab-nav-label {
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Vertical collapses to a horizontal icon-accordion on mobile. */
@media (max-width: 768px) {
  .dir-vertical {
    flex-direction: row;
    align-items: center;
  }
  .dir-vertical .tab-nav-item {
    flex: 0 0 auto;
    justify-content: center;
    text-align: center;
    padding: 8px;
    gap: 0;
    font-size: var(--fold-text-xs);
    font-weight: 600;
  }
  .dir-vertical .tab-nav-item .tab-nav-label {
    display: none;
  }
  .dir-vertical .tab-nav-item.is-active {
    flex: 1 1 auto;
    min-width: 0;
    gap: 6px;
    padding: 8px 12px;
  }
  .dir-vertical .tab-nav-item.is-active .tab-nav-label {
    display: inline;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dir-vertical .tab-nav-badge {
    display: none;
  }
  .dir-vertical.style-underline {
    border-right: none;
    border-bottom: 1px solid var(--fold-color-border);
  }
  .dir-vertical.style-underline .tab-nav-item {
    border-left: none;
    border-bottom: 2px solid transparent;
    margin-right: 0;
    margin-bottom: -1px;
  }
  .dir-vertical.style-underline .tab-nav-item.is-active {
    border-bottom-color: var(--fold-color-primary);
  }
  .dir-vertical.style-fill {
    border-right: none;
  }
}

.tab-nav-icon {
  flex-shrink: 0;
}

/* Count pill — an fold-badge: \`neutral\` when idle, \`accent\` on the active tab
   (the component owns the chrome; only the count alignment is set here). */
.tab-nav-badge {
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}
`,qC=`:host {
  display: block;
  flex: none;
}
.ph {
  display: flex;
  align-items: flex-start;
  gap: var(--fold-space-md);
  padding: var(--fold-space-lg) var(--fold-space-lg) var(--fold-space-md);
  border-bottom: 1px solid var(--fold-color-glass-border);
}
/* Title-only header → vertically centre the title with the close button.
         With a subtitle/description the row stays top-aligned. */
.ph:not(:has(.ph__subtitle)):not(:has(.ph__desc:not(:empty))) {
  align-items: center;
}
.ph__titles {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.ph__titleRow {
  display: flex;
  align-items: center;
  gap: var(--fold-space-xs);
  min-width: 0;
}
.ph__icon {
  flex: none;
  color: var(--fold-color-text-secondary);
}
.ph__title {
  margin: 0;
  font-size: var(--fold-text-lg);
  font-weight: 600;
  color: var(--fold-color-text);
  letter-spacing: -0.005em;
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ph__subtitle {
  margin: 0;
  font-size: var(--fold-text-xs);
  color: var(--fold-color-text-faded);
  font-variant-numeric: tabular-nums;
}
.ph__desc {
  margin-top: 6px;
  font-size: var(--fold-text-sm);
  color: var(--fold-color-text-secondary);
  line-height: 1.5;
}
/* no projected content → collapse the slot so it costs no space */
.ph__desc:empty {
  display: none;
}
.ph__actions {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: var(--fold-space-xs);
}
.ph__close {
  all: unset;
  box-sizing: border-box;
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--fold-radius-xs);
  color: var(--fold-color-text-secondary);
  cursor: pointer;
  transition:
    background-color var(--fold-motion-fast),
    color var(--fold-motion-fast);
}
.ph__close:hover {
  background: var(--fold-color-surface-hover);
  color: var(--fold-color-text);
}

/* ── Eyebrow variant: compact icon + uppercase category label ── */
.ph--eyebrow {
  align-items: center;
  padding: var(--fold-space-md) var(--fold-space-lg);
}
.ph--eyebrow .ph__icon {
  opacity: 0.75;
}
.ph--eyebrow .ph__title {
  font-size: var(--fold-text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--fold-color-text-muted);
}
`,$C=`/* The host must not take layout — it's a sibling in the content flex row.
       display:contents removes its box so an opening panel can't nudge the
       main content; the absolute dock still anchors to the content region. */
:host {
  display: contents;
}
/* Invisible, click-capturing dock — no dark scrim. position:absolute so it
       fills the content region (its positioned host), not the viewport: the
       panel floats over the page but stays below the header + rails. */
.panel-dock {
  position: absolute;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: flex-end;
}
.panel-dock--left {
  justify-content: flex-start;
}

.panel {
  --panel-width: 490px;
  display: flex;
  flex-direction: column;
  width: min(var(--panel-width), 100%);
  height: 100%;
  overflow: hidden;
  font-feature-settings: "tnum" on;

  /* Frosted glass surface. */
  background: var(--fold-color-glass);
  backdrop-filter: blur(var(--fold-blur-glass)) saturate(1.5);
  -webkit-backdrop-filter: blur(var(--fold-blur-glass)) saturate(1.5);
  border-left: 1px solid var(--fold-color-glass-border);
  box-shadow: var(--fold-shadow-panel-right);
  animation: panel-slide-in-right 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.panel--left {
  border-left: none;
  border-right: 1px solid var(--fold-color-glass-border);
  box-shadow: var(--fold-shadow-panel-left);
  animation-name: panel-slide-in-left;
}
@media (max-width: 768px) {
  .panel {
    width: 100vw;
  }
}

/* The template-panel header is the shared \`fold-panel-header\` (same as every
   component panel) — the host owns only the body below it. */
.panel-body {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 16px;
}

@keyframes panel-slide-in-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes panel-slide-in-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
`,GC=`<button
  [type]="type()"
  [disabled]="disabled() || loading()"
  [attr.title]="tooltip() || null"
  [attr.aria-label]="tooltip() || null"
  [attr.aria-busy]="loading() ? 'true' : null"
  (click)="onClick($event)"
>
  @if (loading()) {
    <fold-spinner [size]="iconSize()" aria-hidden="true" />
  } @else {
    <fold-icon [name]="icon()" [size]="iconSize()" />
  }
</button>
`,ZC=`@if (loading()) {
  <fold-spinner [size]="iconSize()" aria-hidden="true" />
} @else if (icon(); as ic) {
  <fold-icon [name]="ic" [size]="iconSize()" aria-hidden="true" />
}
<ng-content />
@if (iconTrailing(); as ic) {
  <fold-icon [name]="ic" [size]="iconSize()" aria-hidden="true" />
}
`,WC=`<ng-template #inner>
  @if (icon(); as i) {
    <fold-icon [name]="i" size="sm" />
  }
  <span class="lnk-label"><ng-content /></span>
  @if (trailingIcon(); as t) {
    <fold-icon [name]="t" size="sm" />
  }
</ng-template>
@if (href(); as h) {
  <a class="lnk" [href]="h">
    <ng-container [ngTemplateOutlet]="inner" />
  </a>
} @else {
  <button
    type="button"
    class="lnk"
    [disabled]="disabled()"
    (click)="clicked.emit()"
  >
    <ng-container [ngTemplateOutlet]="inner" />
  </button>
}
`,QC=`<button
  [type]="type()"
  [disabled]="disabled() || loading()"
  [attr.title]="tooltip() || null"
  [attr.aria-label]="tooltip() || null"
  [attr.aria-pressed]="active() ? 'true' : 'false'"
  [attr.aria-busy]="loading() ? 'true' : null"
  (click)="onClick($event)"
>
  @if (loading()) {
    <fold-spinner [size]="iconSize()" aria-hidden="true" />
  } @else {
    <fold-icon [name]="icon()" [size]="iconSize()" />
  }
</button>
`,YC=`<fold-avatar
  [name]="resolvedAvatarName()"
  [size]="size()"
  [variant]="variant()"
  [square]="square()"
  [imageUrl]="imageUrl()"
  [muted]="muted()"
  [ring]="ring()"
  [ringStyle]="ringStyle()"
/>
<span class="lines">
  <span class="primary">{{ primary() }}</span>
  @if (hasSecondary()) {
    <span class="secondary">{{ secondary() }}</span>
  }
</span>
`,XC=`@for (a of visible(); track $index) {
  <span class="al-item" [style.z-index]="z($index)">
    <fold-avatar
      [name]="a.name"
      [imageUrl]="a.imageUrl"
      [colorSeed]="a.colorSeed"
      [size]="size()"
      [square]="square()"
      [variant]="a.variant ?? 'solid'"
      [muted]="a.muted ?? false"
      [ring]="a.ring ?? 'none'"
      [ringStyle]="a.ringStyle ?? 'solid'"
    />
  </span>
}
@if (overflow() > 0) {
  <span class="al-more" [attr.title]="overflow() + ' more'"
    >+{{ overflow() }}</span
  >
}
`,KC=`@if (imageUrl()) {
  <div
    class="avatar has-image"
    [class.size-sm]="size() === 'sm'"
    [class.size-md]="size() === 'md'"
    [class.size-lg]="size() === 'lg'"
    [class.shape-square]="square()"
    [class.is-muted]="muted()"
    [attr.data-ring]="ring() === 'none' ? null : ring()"
    [attr.data-ring-style]="ringStyle()"
    [attr.title]="name()"
  >
    <img [src]="imageUrl()" [alt]="name()" class="avatar-img" />
  </div>
} @else {
  <div
    class="avatar"
    [class.size-sm]="size() === 'sm'"
    [class.size-md]="size() === 'md'"
    [class.size-lg]="size() === 'lg'"
    [class.variant-ghost]="variant() === 'ghost'"
    [class.shape-square]="square()"
    [class.is-muted]="muted()"
    [attr.data-ring]="ring() === 'none' ? null : ring()"
    [attr.data-ring-style]="ringStyle()"
    [style.background]="variant() === 'solid' ? color() : ''"
    [style.color]="variant() === 'solid' ? onColor() : ''"
    [attr.title]="name()"
  >
    {{ initials() }}
  </div>
}
`,JC=`{{ content() }}
`,ek=`<header class="card-header"><ng-content select="[cardHeader]" /></header>
<div class="card-body"><ng-content /></div>
<footer class="card-footer"><ng-content select="[cardFooter]" /></footer>
`,nk=`<div
  class="choice-row"
  role="group"
  [class.segmented]="layout() === 'segmented'"
  [class.chips]="layout() === 'chips'"
  [attr.aria-label]="ariaLabel() || null"
>
  @for (opt of options(); track opt.key) {
    <button
      type="button"
      class="choice"
      [class.is-active]="activeKey() === opt.key"
      [attr.aria-pressed]="activeKey() === opt.key"
      (click)="selected.emit(opt.key)"
    >
      <span>{{ opt.label }}</span>
      @if (opt.count !== undefined) {
        <span class="choice-count">{{ opt.count }}</span>
      }
    </button>
  }
</div>
`,tk=`<fold-card padding="none">
  <div class="cc-head">
    <fold-element-title
      variant="title"
      [level]="3"
      [icon]="icon()"
      [iconTone]="iconTone()"
      [title]="title()"
      [subtitle]="subtitle()"
    />
  </div>
  <div class="cc-body"><ng-content /></div>
  <div class="cc-foot"><ng-content select="[footer]" /></div>
</fold-card>
`,ok=`<div
  class="folddt-wrap"
  [class.folddt--zebra]="zebra()"
  [class.folddt--hover]="hover()"
  [class.folddt--cards]="mobileCards()"
>
  <table class="folddt">
    <thead>
      <tr>
        @for (col of columns(); track col.key) {
          <th
            scope="col"
            [style.width]="col.width || null"
            [attr.aria-sort]="col.sortable ? ariaSort(col.key) : null"
          >
            @if (col.sortable) {
              <button
                type="button"
                class="folddt-th-sort"
                [class.right]="col.align === 'right'"
                (click)="sortChange.emit(col.key)"
              >
                <span>{{ col.label }}</span>
                <span class="folddt-arrow" [class.on]="isSorted(col.key)">{{
                  sortArrow(col.key)
                }}</span>
              </button>
            } @else {
              <span
                class="folddt-th-plain"
                [class.right]="col.align === 'right'"
                >{{ col.label }}</span
              >
            }
          </th>
        }
      </tr>
    </thead>
    <tbody>
      @for (row of rows(); track keyOf(row, $index); let i = $index) {
        @let tone = toneOf(row);
        <tr
          class="folddt-row"
          [class.tone-warning]="tone === 'warning'"
          [class.tone-alert]="tone === 'alert'"
          [class.tone-success]="tone === 'success'"
          [class.clickable]="clickable()"
          [attr.tabindex]="clickable() ? 0 : null"
          (click)="onRowActivate(row)"
          (keydown.enter)="onRowActivate(row)"
        >
          @for (col of columns(); track col.key) {
            <td
              class="folddt-cell"
              [class.is-primary]="col.key === primaryKey()"
              [class.right]="col.align === 'right'"
              [ngClass]="col.cellClass || ''"
              [attr.data-label]="col.label"
            >
              @if (cellTemplate(col.key); as tpl) {
                <ng-container
                  [ngTemplateOutlet]="tpl"
                  [ngTemplateOutletContext]="{ $implicit: row, index: i }"
                />
              }
            </td>
          }
        </tr>
      }
    </tbody>
  </table>

  @if (rows().length === 0 && empty(); as e) {
    <div class="folddt-empty">
      <div class="folddt-empty-t">{{ e.title }}</div>
      @if (e.subtitle) {
        <div class="folddt-empty-s">{{ e.subtitle }}</div>
      }
    </div>
  }
</div>
`,rk=`@if (icon(); as ic) {
  <span class="et-icon"><fold-icon [name]="ic" [size]="iconSize()" /></span>
}
<span class="et-main">
  <span class="et-row">
    <span
      class="et-label"
      role="heading"
      [attr.id]="headingId()"
      [attr.aria-level]="level()"
      >{{ title() }}</span
    >
    <span class="et-action"><ng-content select="[titleAction]" /></span>
  </span>
  @if (subtitle(); as s) {
    <span class="et-sub">{{ s }}</span>
  }
</span>
`,ik=`<dl class="fl">
  <ng-content />
</dl>
`,sk=`<dt class="fl-key">{{ label() }}</dt>
@if (empty()) {
  <dd class="fl-val fl-empty">{{ placeholder() }}</dd>
} @else {
  <dd class="fl-val"><ng-content /></dd>
}
`,ak=`<ng-content />
`,lk=`@let options = pageSizeOptions();

<div class="paginator-left">
  @if (options.length > 0) {
    <label class="page-size">
      <select
        #pageSizeSelect
        class="page-size__select"
        [value]="pageSize()"
        [disabled]="disabled()"
        (change)="onPageSizeChange(pageSizeSelect.value)"
        aria-label="Éléments par page"
      >
        @for (opt of options; track opt) {
          <option [value]="opt">{{ opt }}</option>
        }
      </select>
      <span class="page-size__label">par page</span>
    </label>
  }

  @if (totalItems() > 0) {
    <span class="range"
      >{{ rangeStart() }}–{{ rangeEnd() }} sur {{ totalItems() }}</span
    >
  } @else {
    <span class="range range--empty">Aucun élément</span>
  }
</div>

<nav class="pages" aria-label="Pagination">
  <button
    type="button"
    class="nav-btn"
    [disabled]="!canGoPrev()"
    (click)="prev()"
    aria-label="Page précédente"
  >
    <fold-icon name="chevron-left" [size]="15" />
  </button>

  @for (item of pageItems(); track $index) {
    @if (item.kind === "page") {
      <button
        type="button"
        class="page-btn"
        [class.is-active]="item.page === currentPage()"
        [attr.aria-current]="item.page === currentPage() ? 'page' : null"
        [attr.aria-label]="'Page ' + item.page"
        [disabled]="disabled()"
        (click)="goToPage(item.page)"
      >
        {{ item.page }}
      </button>
    } @else {
      <span class="gap" aria-hidden="true">…</span>
    }
  }

  <button
    type="button"
    class="nav-btn"
    [disabled]="!canGoNext()"
    (click)="next()"
    aria-label="Page suivante"
  >
    <fold-icon name="chevron-right" [size]="15" />
  </button>
</nav>
`,ck=`<span class="badge" [attr.data-status]="normalizedStatus()">{{
  label() || status()
}}</span>
`,dk=`<!-- Shared inner content of a node (dot + date + label). -->
<ng-template #dot let-n>
  <span class="dot">
    @if (n.icon; as ic) {
      <fold-icon [name]="ic" [size]="11" />
    }
  </span>
  <span class="txt">
    @if (datePlacement() !== "hidden") {
      @if (n.displayDate; as dd) {
        <span class="date">{{ dd }}</span>
      } @else if (n.date; as d) {
        <span class="date">{{ d | date: "mediumDate" }}</span>
      }
    }
    @if (nodeTemplate(); as tpl) {
      <ng-container
        [ngTemplateOutlet]="tpl"
        [ngTemplateOutletContext]="{ $implicit: n }"
      />
    } @else {
      <span class="nlabel">{{ n.label }}</span>
    }
  </span>
</ng-template>

<!-- The progress rail + the nodes — reused in both containers. -->
<ng-template #body>
  @if (orientation() === "horizontal") {
    <span
      class="rail"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      [attr.aria-valuenow]="fillNow()"
      [attr.aria-valuetext]="stepText()"
      [attr.aria-label]="ariaLabel()"
    >
      <span class="rail-fill" [style.width.%]="fillPct()"></span>
    </span>
  }
  @for (n of nodes(); track n.key) {
    @if (isClickable(n)) {
      <button
        type="button"
        class="node"
        [class.filled]="isFilled(n)"
        [class.hollow]="isHollow(n)"
        [title]="nodeTitle()"
        (click)="onNode(n)"
      >
        <ng-container
          [ngTemplateOutlet]="dot"
          [ngTemplateOutletContext]="{ $implicit: n }"
        />
      </button>
    } @else {
      <div
        class="node inert"
        [class.filled]="isFilled(n)"
        [class.hollow]="isHollow(n)"
      >
        <ng-container
          [ngTemplateOutlet]="dot"
          [ngTemplateOutletContext]="{ $implicit: n }"
        />
      </div>
    }
  }
</ng-template>

@if (interactive()) {
  <nav
    class="tlv"
    [class.h]="orientation() === 'horizontal'"
    [class.square]="square()"
    [class.date-above]="datePlacement() === 'above'"
    [class.date-inline]="datePlacement() === 'inline'"
    [attr.aria-label]="ariaLabel()"
  >
    <ng-container [ngTemplateOutlet]="body" />
  </nav>
} @else {
  <div
    class="tlv"
    role="group"
    [class.h]="orientation() === 'horizontal'"
    [class.square]="square()"
    [class.date-above]="datePlacement() === 'above'"
    [class.date-inline]="datePlacement() === 'inline'"
    [attr.aria-label]="ariaLabel()"
  >
    <ng-container [ngTemplateOutlet]="body" />
  </div>
}
`,uk=`<fold-icon class="callout-icon" [name]="iconName()" [size]="15" />
<span class="callout-body"><ng-content /></span>
<span class="callout-actions"><ng-content select="[actions]" /></span>
`,fk=`<button
  type="button"
  class="disc-summary"
  [attr.aria-expanded]="open()"
  [attr.aria-controls]="panelId"
  (click)="toggle()"
>
  <span class="disc-label"><ng-content select="[summary]" /></span>
  <fold-icon class="disc-chevron" name="chevron-down" size="sm" />
</button>
<div
  class="disc-panel"
  [id]="panelId"
  role="region"
  [attr.aria-hidden]="!open()"
>
  <div class="disc-panel-clip">
    <div class="disc-panel-content"><ng-content /></div>
  </div>
</div>
`,hk=`<div class="empty">
  <div class="empty-icon">
    <ng-content select="[empty-icon]" />
  </div>
  <p class="empty-title">{{ title() }}</p>
  @if (subtitle()) {
    <p class="empty-sub">{{ subtitle() }}</p>
  }
  <div class="empty-action">
    <ng-content />
  </div>
</div>
`,pk=`<div class="loading">
  <fold-spinner [size]="size()" aria-hidden="true" />
  @if (message()) {
    <span>{{ message() }}</span>
  }
</div>
`,gk=`@for (toast of toastService.toasts(); track toast.id) {
  <fold-toast
    [variant]="toast.variant"
    [duration]="toast.durationMs"
    animate.leave="toast-leaving"
    (dismiss)="toastService.dismiss(toast.id)"
    >{{ toast.message }}</fold-toast
  >
}
`,mk=`<fold-icon class="toast-icon" [name]="icon()" [size]="16" aria-hidden="true" />

<span class="toast-message"><ng-content /></span>

@if (dismissible()) {
  <button
    class="toast-close"
    type="button"
    aria-label="Dismiss"
    (click)="dismiss.emit()"
  >
    <fold-icon name="close" [size]="14" aria-hidden="true" />
  </button>
}
`,vk=`<div
  class="dropzone"
  [class.over]="isDragOver()"
  [class.busy]="busy()"
  [class.disabled]="disabled()"
  role="button"
  tabindex="0"
  [attr.aria-disabled]="disabled() || busy()"
  (click)="openFilePicker()"
  (keydown.enter)="openFilePicker()"
  (keydown.space)="openFilePicker(); $event.preventDefault()"
  (dragover)="onDragOver($event)"
  (dragleave)="onDragLeave()"
  (drop)="onDrop($event)"
>
  <fold-icon name="upload" [size]="22" />
  @if (busy()) {
    <span class="label">{{ busyLabel() }}</span>
  } @else {
    <span class="label">{{ label() }}</span>
    @if (hint(); as h) {
      <small class="hint">{{ h }}</small>
    }
  }
  <input
    #fileInput
    type="file"
    [accept]="accept()"
    [multiple]="multiple()"
    [disabled]="disabled() || busy()"
    hidden
    (change)="onFilesSelected($event.target)"
  />
</div>
`,bk=`@if (label(); as labelText) {
  <fold-label
    [text]="labelText"
    [for]="for()"
    [required]="required()"
    [optional]="optional()"
    [optionalLabel]="optionalLabel()"
  />
}

<ng-content />

@if (error(); as errorText) {
  <p
    class="ib-msg ib-error"
    role="alert"
    [attr.id]="for() ? for() + '-error' : null"
  >
    {{ errorText }}
  </p>
} @else if (hint(); as hintText) {
  <p class="ib-msg ib-hint" [attr.id]="for() ? for() + '-hint' : null">
    {{ hintText }}
  </p>
}
`,yk=`<fold-input-base
  [label]="label()"
  [for]="inputId"
  [required]="required()"
  [optional]="optional()"
  [optionalLabel]="optionalLabel()"
  [hint]="hint()"
  [error]="errorMessage()"
>
  <input
    [id]="inputId"
    [attr.type]="type()"
    [attr.placeholder]="placeholder()"
    [attr.readonly]="readOnly() || null"
    [attr.disabled]="disabled() || null"
    [attr.required]="required() || null"
    [attr.aria-invalid]="errorMessage() ? true : null"
    [attr.aria-describedby]="describedBy()"
    [attr.autocomplete]="autocomplete()"
    [value]="value()"
    (input)="onInputChange($event)"
    (blur)="onBlur()"
  />
</fold-input-base>
`,wk=`<fold-input-base
  [label]="label()"
  [for]="inputId"
  [required]="required()"
  [optional]="optional()"
  [optionalLabel]="optionalLabel()"
  [hint]="hint()"
  [error]="errorMessage()"
>
  <ng-template
    #stepBtn
    let-dir="dir"
    let-size="size"
    let-cls="cls"
    let-off="off"
  >
    <button
      type="button"
      tabindex="-1"
      aria-hidden="true"
      [class]="cls"
      [disabled]="off"
      [attr.aria-label]="dir === 1 ? 'Increment' : 'Decrement'"
      foldRepeatPress
      [foldRepeatPressDisabled]="off"
      (foldRepeatPress)="stepBy(dir)"
      (click)="onButtonClick(dir, $event)"
    >
      <fold-icon [name]="iconFor(dir)" [size]="size" />
    </button>
  </ng-template>

  <div
    class="ni-field"
    [class.ni-inside]="controls() === 'inside'"
    [class.ni-outside]="controls() === 'outside'"
  >
    @if (hasControls() && controls() === "outside") {
      <ng-container
        *ngTemplateOutlet="
          stepBtn;
          context: {
            dir: -1,
            size: 'sm',
            cls: 'ni-btn ni-dec',
            off: decDisabled(),
          }
        "
      />
    }

    <div class="ni-box">
      <input
        [id]="inputId"
        type="number"
        [attr.min]="min()"
        [attr.max]="max()"
        [attr.step]="nativeStep()"
        [attr.placeholder]="placeholder()"
        [attr.readonly]="readOnly() || null"
        [attr.disabled]="disabled() || null"
        [attr.required]="required() || null"
        [attr.aria-invalid]="errorMessage() ? true : null"
        [attr.aria-describedby]="describedBy()"
        [value]="value()"
        (input)="onInputChange($event)"
        (blur)="onBlur()"
        (keydown.arrowUp)="onArrow(1, $event)"
        (keydown.arrowDown)="onArrow(-1, $event)"
        (wheel)="onWheel($event)"
      />

      @if (showStep() && step() != null) {
        <span class="ni-step" aria-hidden="true">{{ step() }}</span>
      }

      @if (hasControls() && controls() === "inside") {
        <span class="ni-stack">
          <ng-container
            *ngTemplateOutlet="
              stepBtn;
              context: {
                dir: 1,
                size: 'xs',
                cls: 'ni-stack-btn ni-inc',
                off: incDisabled(),
              }
            "
          />
          <ng-container
            *ngTemplateOutlet="
              stepBtn;
              context: {
                dir: -1,
                size: 'xs',
                cls: 'ni-stack-btn ni-dec',
                off: decDisabled(),
              }
            "
          />
        </span>
      }
    </div>

    @if (hasControls() && controls() === "outside") {
      <ng-container
        *ngTemplateOutlet="
          stepBtn;
          context: {
            dir: 1,
            size: 'sm',
            cls: 'ni-btn ni-inc',
            off: incDisabled(),
          }
        "
      />
    }
  </div>
</fold-input-base>
`,xk=`<fold-input-base
  [label]="label()"
  [for]="inputId"
  [required]="required()"
  [optional]="optional()"
  [optionalLabel]="optionalLabel()"
  [hint]="hint()"
  [error]="errorMessage()"
>
  <div class="sel-wrap">
    <select
      [id]="inputId"
      class="sel"
      [disabled]="disabled()"
      [attr.required]="required() || null"
      [attr.aria-invalid]="errorMessage() ? true : null"
      [attr.aria-describedby]="describedBy()"
      [value]="value()"
      (change)="onChange($event)"
      (blur)="onBlur()"
    >
      @if (placeholder(); as ph) {
        <option value="" disabled hidden>{{ ph }}</option>
      }
      <ng-content />
    </select>
    <fold-icon
      name="chevron-down"
      size="sm"
      class="sel-caret"
      aria-hidden="true"
    />
  </div>
</fold-input-base>
`,_k=`<div class="rs">
  <span class="rs-label">{{ label() }}</span>
  <div class="rs-track-wrap">
    <div class="rs-track">
      <div
        class="rs-fill"
        [style.left.%]="fillLeft()"
        [style.width.%]="fillWidth()"
      ></div>
    </div>
    <input
      type="range"
      class="rs-thumb rs-thumb--min"
      [min]="min()"
      [max]="max()"
      [step]="step()"
      [value]="currentMin()"
      [attr.aria-label]="label() + ' minimum'"
      (input)="onMinChange($event)"
    />
    <input
      type="range"
      class="rs-thumb rs-thumb--max"
      [min]="min()"
      [max]="max()"
      [step]="step()"
      [value]="currentMax()"
      [attr.aria-label]="label() + ' maximum'"
      (input)="onMaxChange($event)"
    />
  </div>
  <span class="rs-values"
    >{{ formatValue(currentMin()) }} – {{ formatValue(currentMax()) }}</span
  >
</div>
`,Ck=`<div class="sl">
  @if (label() || showValue()) {
    <div class="sl-head">
      @if (label()) {
        <span class="sl-label">{{ label() }}</span>
      }
      @if (showValue()) {
        <span class="sl-value">{{ display() }}</span>
      }
    </div>
  }
  <input
    [id]="inputId"
    class="sl-input"
    type="range"
    [min]="min()"
    [max]="max()"
    [step]="step()"
    [value]="value()"
    [disabled]="disabled()"
    [style.--sl-pct]="percent() + '%'"
    [attr.aria-label]="label()"
    (input)="onInput($event)"
  />
</div>
`,kk=`<svg
  class="icon-root"
  role="img"
  [attr.aria-label]="title() || null"
  [attr.aria-hidden]="title() ? null : 'true'"
  [style.--icon-size]="sizeVar()"
>
  @if (href(); as ref) {
    <use [attr.href]="ref" />
  }
</svg>
`,Sk=`<svg class="fold-spinner-svg" viewBox="0 0 24 24" aria-hidden="true">
  <circle class="fold-spinner-track" cx="12" cy="12" r="9" />
  <circle class="fold-spinner-head" cx="12" cy="12" r="9" />
</svg>
`,Ok=`<!-- Skip-link: the first Tab stop — visually hidden until focused, then jumps
     keyboard users past the rails to <main> (which is focusable, tabindex=-1). -->
<a class="skip-link" [href]="'#' + contentId" (click)="skipToContent($event)">{{
  skipLinkLabel()
}}</a>

<!-- The primary rail. While the mobile drawer is open it is a real modal dialog
     (named, aria-modal, focus-trapped) and every sibling region is inert — the
     same bar the panel host holds; on desktop it's a plain nav rail. -->
<div
  class="rail-primary"
  [id]="drawerId"
  foldSurface="chrome"
  [foldFocusTrap]="drawerOpen()"
  [attr.role]="drawerOpen() ? 'dialog' : null"
  [attr.aria-modal]="drawerOpen() ? 'true' : null"
  [attr.aria-label]="drawerOpen() ? drawerLabel() : null"
  tabindex="-1"
>
  <ng-content select="[railPrimary]" />
</div>
<div class="rail-secondary" foldSurface="chrome" [inert]="drawerOpen()">
  <ng-content select="[railSecondary]" />
</div>

<!-- Mobile drawer scrim — only rendered while the drawer is actually open (the
     shell is narrow AND mobileNavOpen). A darkening veil that dismisses on
     click; Escape and widening close it too. aria-hidden: the focus-trapped
     drawer + Escape are the accessible path, the scrim is a mouse convenience. -->
@if (drawerOpen()) {
  <div class="mobile-scrim" (click)="closeMobileNav()" aria-hidden="true"></div>
}
<header class="header" foldSurface="chrome" [inert]="drawerOpen()">
  <ng-content select="[header]" />
</header>

<!-- One footer, stamped in one of two positions — a grid row (pinned, always in
     sight) or inside the content scroll (revealed on the way down). A single
     <ng-content> in a template avoids duplicate-selector projection loss. -->
<ng-template #footerTpl>
  <footer
    class="footer"
    [class.footer-inflow]="footerBehavior() === 'scroll'"
    foldSurface="chrome"
    [inert]="drawerOpen()"
  >
    <ng-content select="[footer]" />
  </footer>
</ng-template>

<main
  class="content"
  foldSurface="page"
  [id]="contentId"
  tabindex="-1"
  [inert]="drawerOpen()"
>
  <ng-content />
  @if (footerBehavior() === "scroll") {
    <ng-container [ngTemplateOutlet]="footerTpl" />
  }
</main>
@if (footerBehavior() !== "scroll") {
  <ng-container [ngTemplateOutlet]="footerTpl" />
}
`,Ik=`<div class="al-grid">
  <div
    class="al-aside al-aside-left"
    [attr.role]="asideLeftLabel() ? 'complementary' : null"
    [attr.aria-label]="asideLeftLabel() || null"
  >
    <ng-content select="[asideLeft]" />
  </div>
  <div class="al-center"><ng-content /></div>
  <div
    class="al-aside al-aside-right"
    [attr.role]="asideRightLabel() ? 'complementary' : null"
    [attr.aria-label]="asideRightLabel() || null"
  >
    <ng-content select="[asideRight]" />
  </div>
</div>
`,Tk=`<div class="hs-backdrop" aria-hidden="true">
  <ng-content select="[heroBackdrop]" />
</div>
<div class="hs-content">
  <ng-content />
</div>
`,Ek=`@if (title()) {
  <header class="page-head">
    <div class="page-head-text">
      @if (title()) {
        <h1 class="page-title">
          @if (icon(); as ic) {
            <fold-icon class="page-icon" [name]="ic" [size]="22" />
          }
          <span>{{ title() }}</span>
          <span class="page-title-badge"
            ><ng-content select="[titleBadge]"
          /></span>
        </h1>
      }
      <div class="page-desc"><ng-content select="p[description]" /></div>
    </div>
    <div class="page-actions"><ng-content select="[pageActions]" /></div>
  </header>
}
<div class="page-body"><ng-content /></div>
`,Mk=`<section class="ps-root" [attr.aria-labelledby]="title() ? headingId : null">
  @if (title() || description()) {
    <div class="section-head">
      @if (title(); as t) {
        <fold-element-title
          [title]="t"
          [icon]="icon()"
          [headingId]="headingId"
          [level]="headingLevel()"
        >
          <ng-content select="[sectionActions]" titleAction />
        </fold-element-title>
      }
      @if (description()) {
        <p class="section-desc">{{ description() }}</p>
      }
    </div>
  }
  <div class="section-body"><ng-content /></div>
</section>
`,Ak=`<div class="tl-nav"><ng-content select="[tabNav]" /></div>
<div class="tl-body"><ng-content /></div>
`,Pk=`<fold-icon [name]="icon()" [size]="18" class="mi-icon" />

<!-- Collapsed rail: a corner dot, or a count bubble for a number. -->
@if (hasBadge()) {
  <span class="mi-dot" [class.mi-dot-count]="isCount()" aria-hidden="true">{{
    dotText()
  }}</span>
}

<span class="mi-tip">{{ label() }}</span>

<!-- Expanded rail: the badge pill, pushed to the row's trailing edge. \`follow\`
     tints from the item's own accent; the semantic tones reuse fold-badge. -->
@if (hasBadge()) {
  @if (isFollowTone()) {
    <span class="mi-badge mi-badge-follow">{{ badgeText() }}</span>
  } @else {
    <fold-badge
      class="mi-badge"
      [content]="badgeText()"
      [variant]="badgeVariant()"
    />
  }
}
`,Rk=`@if (collapsible()) {
  <button
    type="button"
    class="section-head"
    [attr.aria-expanded]="open()"
    [attr.aria-controls]="bodyId"
    (click)="toggle()"
  >
    <fold-menu-separator [label]="label()" [color]="color()" />
    <fold-icon
      class="section-chevron"
      [class.is-open]="open()"
      name="chevron-right"
      [size]="12"
      aria-hidden="true"
    />
  </button>
} @else {
  <fold-menu-separator [label]="label()" [color]="color()" />
}

<div
  class="section-items"
  [id]="bodyId"
  [class.foldable]="collapsible()"
  [class.is-collapsed]="!open()"
>
  <ng-content />
</div>
`,Lk=`<span class="sep-mark" [style.background]="color() || null"></span>
@if (label()) {
  <span class="sep-label">{{ label() }}</span>
}
`,Dk=`<div
  class="menu-head"
  [class.head-has-toggle]="collapsible() && resolvedPlacement() === 'header'"
  #head
>
  <ng-content select="[header]" />
  @if (collapsible() && resolvedPlacement() === "header") {
    <ng-container [ngTemplateOutlet]="toggleTpl" />
  }
</div>

<nav class="menu-body">
  <ng-content />
  @if (collapsible() && resolvedPlacement() === "body") {
    <ng-container [ngTemplateOutlet]="toggleTpl" />
  }
</nav>

<div
  class="menu-foot"
  [class.foot-has-toggle]="collapsible() && resolvedPlacement() === 'footer'"
  #foot
>
  @if (collapsible() && resolvedPlacement() === "footer") {
    <ng-container [ngTemplateOutlet]="toggleTpl" />
  }
  <ng-content select="[footer]" />
</div>

<ng-template #toggleTpl>
  <button
    type="button"
    class="menu-toggle"
    [attr.aria-label]="expanded() ? 'Collapse menu' : 'Expand menu'"
    (click)="toggle()"
  >
    <fold-icon
      [name]="expanded() ? 'chevron-left' : 'chevron-right'"
      [size]="14"
    />
  </button>
</ng-template>
`,Fk=`@if (open()) {
  <div class="nl-scrim" (click)="close()" aria-hidden="true"></div>
  <div
    class="nl-dialog"
    role="dialog"
    aria-modal="true"
    [attr.aria-label]="label()"
    [foldFocusTrap]="open()"
    tabindex="-1"
  >
    <button
      type="button"
      class="nl-close"
      (click)="close()"
      aria-label="Close navigation"
    >
      <fold-icon name="close" size="md" />
    </button>
    <div class="nl-grid" [style.--nav-cols]="resolvedCols()">
      <ng-content />
    </div>
  </div>
}
`,zk=`<fold-icon [name]="icon()" [size]="26" class="nt-icon" />
<span class="nt-label">{{ label() }}</span>
`,Nk=`<nav
  class="tab-nav"
  [class.style-underline]="activeStyle() === 'underline'"
  [class.style-fill]="activeStyle() === 'fill'"
  [class.dir-vertical]="direction() === 'vertical'"
  [class.size-comfortable]="size() === 'comfortable'"
  [class.size-reduce]="size() === 'reduce'"
  [class.bg-surface]="background() === 'surface'"
>
  @for (tab of tabs(); track tab.key) {
    <button
      type="button"
      class="tab-nav-item"
      [class.is-active]="activeKey() === tab.key"
      (click)="tabChange.emit(tab.key)"
    >
      @if (tab.icon; as ic) {
        <fold-icon class="tab-nav-icon" [name]="ic" size="sm" />
      }
      <span class="tab-nav-label">{{ tab.label }}</span>
      @if (tab.badge !== undefined && tab.badge !== null) {
        <fold-badge
          class="tab-nav-badge"
          [content]="tab.badge + ''"
          [variant]="activeKey() === tab.key ? 'accent' : 'neutral'"
        />
      }
    </button>
  }
</nav>
`,jk=`<header class="ph" [class.ph--eyebrow]="variant() === 'eyebrow'">
  <div class="ph__titles">
    <div class="ph__titleRow">
      @if (icon(); as ic) {
        <fold-icon class="ph__icon" [name]="ic" [size]="iconSize()" />
      }
      <h2 class="ph__title" [attr.id]="titleId()">{{ title() }}</h2>
    </div>
    @if (subtitle()) {
      <p class="ph__subtitle">{{ subtitle() }}</p>
    }
    <div class="ph__desc"><ng-content /></div>
  </div>
  <div class="ph__actions">
    <ng-content select="[actions]" />
    <button
      type="button"
      class="ph__close"
      [attr.aria-label]="effectiveCloseLabel()"
      (click)="onClose()"
    >
      <fold-icon name="close" size="sm" />
    </button>
  </div>
</header>
`,Hk=`@for (panel of panels(); track panel.id) {
  <div
    class="panel-dock"
    [class.panel-dock--left]="panel.side === 'left'"
    (click)="onBackdrop($event, panel)"
  >
    <aside
      class="panel"
      [class.panel--left]="panel.side === 'left'"
      [style.--panel-width.px]="panel.width()"
      role="dialog"
      aria-modal="true"
      [attr.aria-label]="ariaLabel(panel)"
      [attr.aria-labelledby]="ariaLabelledby(panel)"
      tabindex="-1"
      [foldFocusTrap]="isTopMost(panel)"
      (click)="$event.stopPropagation()"
    >
      @if (panel.kind === "template") {
        <fold-panel-header
          [title]="panel.title()"
          [subtitle]="panel.subtitle()"
          (closed)="panel.onClose()"
        />
        <div class="panel-body">
          <ng-container [ngTemplateOutlet]="panel.templateRef" />
        </div>
      } @else {
        <ng-container [foldPanelComponentOutlet]="panel" />
      }
    </aside>
  </div>
}
`,Bk=Object.assign({"../../src/components/actions/button-icon/button-icon.component.scss":Y5,"../../src/components/actions/button/button.component.scss":X5,"../../src/components/actions/link/link.component.scss":K5,"../../src/components/actions/toggle-icon/toggle-icon.component.scss":J5,"../../src/components/content/avatar-detail/avatar-detail.component.scss":eC,"../../src/components/content/avatar-list/avatar-list.component.scss":nC,"../../src/components/content/avatar/avatar.component.scss":tC,"../../src/components/content/badge/badge.component.scss":oC,"../../src/components/content/card/card.component.scss":rC,"../../src/components/content/choice-row/choice-row.component.scss":iC,"../../src/components/content/context-card/context-card.component.scss":sC,"../../src/components/content/data-table/data-table.component.scss":aC,"../../src/components/content/element-title/element-title.component.scss":lC,"../../src/components/content/field/field-list.component.scss":cC,"../../src/components/content/field/field.component.scss":dC,"../../src/components/content/hero-card/hero-card.component.scss":uC,"../../src/components/content/paginator/paginator.component.scss":fC,"../../src/components/content/status-badge/status-badge.component.scss":hC,"../../src/components/content/timeline/timeline.component.scss":pC,"../../src/components/feedback/callout/callout.component.scss":gC,"../../src/components/feedback/disclosure/disclosure.component.scss":mC,"../../src/components/feedback/state/empty-state.component.scss":vC,"../../src/components/feedback/state/loading-state.component.scss":bC,"../../src/components/feedback/toast/toast-container.component.scss":yC,"../../src/components/feedback/toast/toast.component.scss":wC,"../../src/components/forms/file-dropzone/file-dropzone.component.scss":xC,"../../src/components/forms/input/input-base.component.scss":_C,"../../src/components/forms/input/input.component.scss":CC,"../../src/components/forms/input/label.component.scss":kC,"../../src/components/forms/input/number-input.component.scss":SC,"../../src/components/forms/input/select.component.scss":OC,"../../src/components/forms/slider/range-slider.component.scss":IC,"../../src/components/forms/slider/slider.component.scss":TC,"../../src/components/foundations/icon/icon.component.scss":EC,"../../src/components/foundations/spinner/spinner.component.scss":MC,"../../src/components/layout/app-shell/app-shell.component.scss":AC,"../../src/components/layout/aside-layout/aside-layout.component.scss":PC,"../../src/components/layout/hero-section/hero-section.component.scss":RC,"../../src/components/layout/page-layout/page-layout.component.scss":LC,"../../src/components/layout/page-section/page-section.component.scss":DC,"../../src/components/layout/tab-layout/tab-layout.component.scss":FC,"../../src/components/navigation/menu/menu-item.component.scss":zC,"../../src/components/navigation/menu/menu-section.component.scss":NC,"../../src/components/navigation/menu/menu-separator.component.scss":jC,"../../src/components/navigation/menu/menu.component.scss":HC,"../../src/components/navigation/nav-launcher/nav-launcher.component.scss":BC,"../../src/components/navigation/nav-launcher/nav-tile.component.scss":UC,"../../src/components/navigation/tab-nav/tab-nav.component.scss":VC,"../../src/components/overlays/panel/panel-header.component.scss":qC,"../../src/components/overlays/panel/panel-host.component.scss":$C}),Uk=Object.assign({"../../src/components/actions/button-icon/button-icon.component.html":GC,"../../src/components/actions/button/button.component.html":ZC,"../../src/components/actions/link/link.component.html":WC,"../../src/components/actions/toggle-icon/toggle-icon.component.html":QC,"../../src/components/content/avatar-detail/avatar-detail.component.html":YC,"../../src/components/content/avatar-list/avatar-list.component.html":XC,"../../src/components/content/avatar/avatar.component.html":KC,"../../src/components/content/badge/badge.component.html":JC,"../../src/components/content/card/card.component.html":ek,"../../src/components/content/choice-row/choice-row.component.html":nk,"../../src/components/content/context-card/context-card.component.html":tk,"../../src/components/content/data-table/data-table.component.html":ok,"../../src/components/content/element-title/element-title.component.html":rk,"../../src/components/content/field/field-list.component.html":ik,"../../src/components/content/field/field.component.html":sk,"../../src/components/content/hero-card/hero-card.component.html":ak,"../../src/components/content/paginator/paginator.component.html":lk,"../../src/components/content/status-badge/status-badge.component.html":ck,"../../src/components/content/timeline/timeline.component.html":dk,"../../src/components/feedback/callout/callout.component.html":uk,"../../src/components/feedback/disclosure/disclosure.component.html":fk,"../../src/components/feedback/state/empty-state.component.html":hk,"../../src/components/feedback/state/loading-state.component.html":pk,"../../src/components/feedback/toast/toast-container.component.html":gk,"../../src/components/feedback/toast/toast.component.html":mk,"../../src/components/forms/file-dropzone/file-dropzone.component.html":vk,"../../src/components/forms/input/input-base.component.html":bk,"../../src/components/forms/input/input.component.html":yk,"../../src/components/forms/input/number-input.component.html":wk,"../../src/components/forms/input/select.component.html":xk,"../../src/components/forms/slider/range-slider.component.html":_k,"../../src/components/forms/slider/slider.component.html":Ck,"../../src/components/foundations/icon/icon.component.html":kk,"../../src/components/foundations/spinner/spinner.component.html":Sk,"../../src/components/layout/app-shell/app-shell.component.html":Ok,"../../src/components/layout/aside-layout/aside-layout.component.html":Ik,"../../src/components/layout/hero-section/hero-section.component.html":Tk,"../../src/components/layout/page-layout/page-layout.component.html":Ek,"../../src/components/layout/page-section/page-section.component.html":Mk,"../../src/components/layout/tab-layout/tab-layout.component.html":Ak,"../../src/components/navigation/menu/menu-item.component.html":Pk,"../../src/components/navigation/menu/menu-section.component.html":Rk,"../../src/components/navigation/menu/menu-separator.component.html":Lk,"../../src/components/navigation/menu/menu.component.html":Dk,"../../src/components/navigation/nav-launcher/nav-launcher.component.html":Fk,"../../src/components/navigation/nav-launcher/nav-tile.component.html":zk,"../../src/components/navigation/tab-nav/tab-nav.component.html":Nk,"../../src/components/overlays/panel/panel-header.component.html":jk,"../../src/components/overlays/panel/panel-host.component.html":Hk});function q0(e){return`fold-${(e.split("/").pop()??"").replace(/\.component\.(scss|html)$/,"")}`}function $0(e,n){const t=new Set;for(const o of e.matchAll(n)){const r=o[1];r&&t.add(r)}return[...t].sort()}const Ra=new Map;function G0(e,n){const t=Ra.get(e)??{selector:e,tokens:[],composes:[]};Ra.set(e,{...t,...n})}for(const[e,n]of Object.entries(Bk))G0(q0(e),{tokens:$0(n,/var\(\s*(--fold-[\w-]+)/g)});for(const[e,n]of Object.entries(Uk))G0(q0(e),{composes:$0(n,/<(fold-[\w-]+)/g)});function Vk(e){return Ra.get(e)??null}function qk(e){let n=e;for(;n;){if(n instanceof HTMLElement&&n.tagName.toLowerCase().startsWith("fold-"))return n;n=n.parentElement}return null}const Z0=[{label:"Layout",color:"#06a4a4",items:[{id:"app-shell",label:"app-shell",icon:"grid"},{id:"page-layout",label:"page-layout",badge:"new",badgeTone:"info"},{id:"page-section",label:"page-section"},{id:"hero-section",label:"hero-section",badge:"new",badgeTone:"info"},{id:"sticky-column",label:"sticky-column",badge:"new",badgeTone:"info"},{id:"aside-layout",label:"aside-layout",badge:"new",badgeTone:"info"},{id:"tab-layout",label:"tab-layout",badge:"new",badgeTone:"info"}]},{label:"Navigation",color:"#8b5cf6",items:[{id:"menu",label:"menu"},{id:"nav-launcher",label:"nav-launcher",badge:"new",badgeTone:"info"},{id:"tab-nav",label:"tab-nav"}]},{label:"Actions",color:"#3b82f6",items:[{id:"button",label:"button"},{id:"button-icon",label:"button-icon"},{id:"link",label:"link"}]},{label:"Content",color:"#f59e0b",items:[{id:"card",label:"card"},{id:"hero-card",label:"hero-card"},{id:"context-card",label:"context-card"},{id:"element-title",label:"element-title"},{id:"field",label:"field · field-list",badge:"new",badgeTone:"info"},{id:"badges",label:"badge · status · icon"},{id:"avatar",label:"avatar",icon:"team"},{id:"timeline",label:"timeline",badge:"new",badgeTone:"info"}]},{label:"Feedback",color:"#ec4899",items:[{id:"toast",label:"toast",icon:"toast"},{id:"callout",label:"callout",icon:"info",badge:"new"},{id:"disclosure",label:"disclosure",badge:"new"},{id:"state",label:"loading · empty",badge:"new"}]},{label:"Forms",color:"#10b981",items:[{id:"form",label:"input",icon:"edit",badge:"new",badgeTone:"info"},{id:"form-layout",label:"form layout"},{id:"dropzone",label:"file dropzone"}]},{label:"Foundations",color:"#64748b",items:[{id:"themes",label:"themes",icon:"grid",badge:"new"},{id:"icons",label:"icons"},{id:"spinner",label:"spinner",badge:"new"},{id:"repeat-press",label:"repeat-press",badge:"new",badgeTone:"info"}]}],W0=Z0.flatMap(e=>e.items),$k=["umbra","lumen","navi","bubbly"],Gk={umbra:{dataTheme:null,elevated:[],mobileNav:"none",usesLauncher:!0,tileVariant:"surface"},lumen:{dataTheme:"lumen",elevated:[],mobileNav:"drawer",usesLauncher:!1,tileVariant:"surface"},navi:{dataTheme:"navi",elevated:[],mobileNav:"none",usesLauncher:!0,tileVariant:"filled"},bubbly:{dataTheme:"bubbly",elevated:["railPrimary","railSecondary","header"],mobileNav:"drawer",usesLauncher:!1,tileVariant:"surface"}},Zk="0.2.0",Wk={version:Zk},Qk=()=>({exact:!0}),Yk=(e,n)=>n.label,Xk=(e,n)=>n.id;function Kk(e,n){if(e&1&&N(0,"a",46,1),e&2){const t=n.$implicit,o=Un(1);O("icon",t.icon??"grid")("label",t.label)("routerLink","/"+t.id)("active",o.isActive)("badge",t.badge)("badgeTone",t.badgeTone??"follow")}}function Jk(e,n){if(e&1&&(m(0,"fold-menu-section",12),lt(1,Kk,2,6,"a",46,Xk),v()),e&2){const t=n.$implicit;O("label",t.label)("color",t.color),b(),ct(t.items)}}function e6(e,n){if(e&1){const t=Ae();m(0,"button",47),z("click",function(){const r=re(t).$implicit,i=k();return ie(i.setTheme(r))}),E(1),v()}if(e&2){const t=n.$implicit,o=k();ve("is-on",o.theme()===t),b(),Nn(" ",t," ")}}function n6(e,n){if(e&1){const t=Ae();m(0,"fold-nav-launcher",48),rc("openChange",function(r){re(t);const i=k();return Pp(i.mobileNavOpen,r)||(i.mobileNavOpen=r),ie(r)}),m(1,"a",49),z("click",function(){re(t);const r=k();return ie(r.mobileNavOpen.set(!1))}),v(),m(2,"a",50),z("click",function(){re(t);const r=k();return ie(r.mobileNavOpen.set(!1))}),v(),m(3,"a",51),z("click",function(){re(t);const r=k();return ie(r.mobileNavOpen.set(!1))}),v(),m(4,"a",52),z("click",function(){re(t);const r=k();return ie(r.mobileNavOpen.set(!1))}),v()()}if(e&2){const t=k();oc("open",t.mobileNavOpen),b(),O("variant",t.cfg().tileVariant),b(),O("variant",t.cfg().tileVariant)("routerLink","/"+t.firstComponent),b(),O("variant",t.cfg().tileVariant),b(),O("variant",t.cfg().tileVariant)}}class Ii{panelHost=p(Rt);themes=$k;theme=H("umbra");navGroups=Z0;cfg=q(()=>Gk[this.theme()]);mobileNavOpen=H(!1);firstComponent=W0[0]?.id??"";version=Wk.version;year=new Date().getFullYear();setTheme(n){this.theme.set(n)}onInspect(n){if(!(n.target instanceof Element))return;const t=qk(n.target),o=t?Vk(t.tagName.toLowerCase()):null;t&&o&&this.panelHost.open(Oi,{data:{info:o,element:t},side:"right"})}static ɵfac=function(t){return new(t||Ii)};static ɵcmp=le({type:Ii,selectors:[["gallery-shell"]],hostAttrs:[1,"gal-root"],hostVars:1,hostBindings:function(t,o){t&2&&se("data-theme",o.cfg().dataTheme)},decls:84,vars:18,consts:[["homeRla","routerLinkActive"],["rla","routerLinkActive"],["footerLayout","inset","footerBehavior","scroll",3,"mobileNavOpenChange","dblclick","mobileNav","mobileNavOpen"],["railPrimary","","tint","primary",3,"expanded","foldElevated"],["header","","routerLink","/","aria-label","Fold — home",1,"rail-brand"],["name","fold",3,"size"],["fold-menu-item","","icon","home","label","Home","routerLink","/","routerLinkActive","",3,"click","routerLinkActiveOptions","active"],["fold-menu-item","","icon","library","label","Library",3,"click","routerLink","active"],["footer","","fold-menu-item","","icon","settings","label","Settings"],["railSecondary","","level","secondary",3,"expanded","foldElevated"],["header","",1,"lib-head"],["name","library","size","sm"],["collapsible","",3,"label","color"],["header","",1,"gal-header",3,"foldElevated"],["type","button","aria-label","Toggle navigation",1,"gal-hamburger",3,"click"],["size","md",3,"name"],["routerLink","/",1,"gal-title"],["name","fold","size","md"],[1,"gal-title-sub"],[1,"gal-themes"],["name","palette","size","sm"],["type","button",1,"gal-theme",3,"is-on"],["footer","",1,"gal-footer"],[1,"gal-footer-main"],[1,"gal-footer-brand-col"],["routerLink","/","aria-label","Fold — home",1,"gal-footer-brand"],[1,"gal-footer-tagline"],[1,"gal-footer-ver"],["aria-label","Explore",1,"gal-footer-col"],[1,"gal-footer-head"],["routerLink","/app-shell",1,"gal-footer-link"],["routerLink","/themes",1,"gal-footer-link"],["routerLink","/icons",1,"gal-footer-link"],["href","https://github.com/hugoheynard/fold-ng","target","_blank","rel","noopener noreferrer",1,"gal-footer-link"],["aria-label","Support and contact",1,"gal-footer-col"],["name","github","size","sm"],["href","https://www.paypal.com/paypalme/hugoheynard","target","_blank","rel","noopener noreferrer",1,"gal-footer-link"],["name","heart","size","sm"],["href","mailto:hheynard@gmail.com",1,"gal-footer-link"],["name","mail","size","sm"],[1,"gal-footer-bar"],[1,"gal-footer-copy"],["aria-hidden","true",1,"gal-footer-dot"],["href","https://github.com/hugoheynard/fold-ng/blob/main/LICENSE","target","_blank","rel","noopener noreferrer",1,"gal-footer-link","gal-footer-link--inline"],[1,"gal-footer-built"],["label","Go to",3,"open"],["fold-menu-item","","routerLinkActive","",3,"icon","label","routerLink","active","badge","badgeTone"],["type","button",1,"gal-theme",3,"click"],["label","Go to",3,"openChange","open"],["fold-nav-tile","","icon","home","label","Home","routerLink","/",3,"click","variant"],["fold-nav-tile","","icon","library","label","Library",3,"click","variant","routerLink"],["fold-nav-tile","","icon","palette","label","Themes","routerLink","/themes",3,"click","variant"],["fold-nav-tile","","icon","grid","label","Icons","routerLink","/icons",3,"click","variant"]],template:function(t,o){if(t&1){const r=Ae();m(0,"fold-app-shell",2),rc("mobileNavOpenChange",function(s){return re(r),Pp(o.mobileNavOpen,s)||(o.mobileNavOpen=s),ie(s)}),z("dblclick",function(s){return o.onInspect(s)}),m(1,"fold-menu",3)(2,"a",4),N(3,"fold-icon",5),v(),m(4,"a",6,0),z("click",function(){return o.mobileNavOpen.set(!1)}),v(),m(6,"a",7),z("click",function(){return o.mobileNavOpen.set(!1)}),v(),N(7,"button",8),v(),m(8,"fold-menu",9)(9,"div",10),N(10,"fold-icon",11),m(11,"span"),E(12,"Library"),v()(),lt(13,Jk,3,2,"fold-menu-section",12,Yk),v(),m(15,"div",13)(16,"button",14),z("click",function(){return o.mobileNavOpen.set(!o.mobileNavOpen())}),N(17,"fold-icon",15),v(),m(18,"a",16),N(19,"fold-icon",17),m(20,"span"),E(21,"Fold"),v(),m(22,"span",18),E(23,"design system"),v()(),m(24,"div",19),N(25,"fold-icon",20),lt(26,e6,2,3,"button",21,mp),v()(),N(28,"router-outlet"),m(29,"div",22)(30,"div",23)(31,"div",24)(32,"a",25),N(33,"fold-icon",17),m(34,"span"),E(35,"Fold"),v()(),m(36,"p",26),E(37," A signals-first Angular design system, themeable to the bone — dark by default, four themes, a contract that fails the build before the design can rot. "),v(),m(38,"span",27),E(39),v()(),m(40,"nav",28)(41,"span",29),E(42,"Explore"),v(),m(43,"a",30),E(44,"Components"),v(),m(45,"a",31),E(46,"Themes"),v(),m(47,"a",32),E(48,"Icons"),v(),m(49,"a",33),E(50,"Source"),v()(),m(51,"nav",34)(52,"span",29),E(53,"Support"),v(),m(54,"a",33),N(55,"fold-icon",35),m(56,"span"),E(57,"Star on GitHub"),v()(),m(58,"a",36),N(59,"fold-icon",37),m(60,"span"),E(61,"Sponsor"),v()(),m(62,"a",38),N(63,"fold-icon",39),m(64,"span"),E(65,"Contact"),v()()()(),m(66,"div",40)(67,"span",41),E(68),v(),m(69,"span",42),E(70,"·"),v(),m(71,"a",43),E(72,"MIT License"),v(),m(73,"span",44),E(74,"This footer is "),m(75,"code"),E(76,"fold-app-shell"),v(),E(77,"'s footer slot, in "),m(78,"code"),E(79,"scroll"),v(),E(80," mode."),v()()()(),W(81,n6,5,6,"fold-nav-launcher",45),N(82,"fold-panel-host")(83,"fold-toast-container")}if(t&2){const r=Un(5);O("mobileNav",o.cfg().mobileNav),oc("mobileNavOpen",o.mobileNavOpen),b(),O("expanded",o.mobileNavOpen())("foldElevated",o.cfg().elevated.includes("railPrimary")),b(2),O("size",24),b(),O("routerLinkActiveOptions",Ow(17,Qk))("active",r.isActive),b(2),O("routerLink","/"+o.firstComponent)("active",!r.isActive),b(2),O("expanded",!0)("foldElevated",o.cfg().elevated.includes("railSecondary")),b(5),ct(o.navGroups),b(2),O("foldElevated",o.cfg().elevated.includes("header")),b(),se("aria-expanded",o.mobileNavOpen()),b(),O("name",o.mobileNavOpen()?"close":"menu"),b(9),ct(o.themes),b(13),Nn("v",o.version),b(29),Nn("© ",o.year," Hugo Heynard"),b(13),Q(o.cfg().usesLauncher?81:-1)}},dependencies:[O0,Aa,g4,hi,mi,Ho,bi,yi,Zt,wi,$e,Si,Ci],encapsulation:2})}const t6="modulepreload",o6=function(e){return"/fold-ng/"+e},$d={},L=function(n,t,o){let r=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");r=l(t.map(c=>{if(c=o6(c),c in $d)return;$d[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":t6,d||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),d)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return r.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return n().catch(i)})};class Ti{title=w();icon=w();static ɵfac=function(t){return new(t||Ti)};static ɵcmp=le({type:Ti,selectors:[["gal-stub-page"]],inputs:{title:[1,"title"],icon:[1,"icon"]},decls:4,vars:2,consts:[["fluid","","description","Cette démo est en cours de migration vers sa propre page routée.",3,"title","icon"],["surface","sunken",2,"--fold-card-padding","28px","text-align","center"],[2,"margin","0","color","var(--fold-color-text-muted)"]],template:function(t,o){t&1&&(m(0,"fold-page-layout",0)(1,"fold-card",1)(2,"p",2),E(3," Contenu à migrer depuis l'ancienne galerie. "),v()()()),t&2&&O("title",o.title())("icon",o.icon())},dependencies:[xi,gi],encapsulation:2})}const r6={home:()=>L(()=>import("./home.page-BMMOiW1I.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),"hero-card":()=>L(()=>import("./hero-card.page-B9wpR5HL.js"),__vite__mapDeps([11,12])),"sticky-column":()=>L(()=>import("./sticky-column.page-CULtQqtD.js"),__vite__mapDeps([13,12,14,4,5,6,10,9,15,16])),"aside-layout":()=>L(()=>import("./aside-layout.page-CdxnKeBT.js"),__vite__mapDeps([17,14,4,5,6,10,9,12,1,15,16])),"tab-layout":()=>L(()=>import("./tab-layout.page-BSC_teR_.js"),__vite__mapDeps([18,12,14,4,5,6,10,9,19,20,15,16])),"page-layout":()=>L(()=>import("./page-layout.page-CXTKTqaZ.js"),__vite__mapDeps([21,14,4,5,6,10,9,12,7,15,16])),"tab-nav":()=>L(()=>import("./tab-nav.page-Cv3mmJ8q.js"),__vite__mapDeps([22,12,14,4,5,6,10,9,23,20,19])),"page-section":()=>L(()=>import("./page-section.page-DaDR0ham.js"),__vite__mapDeps([24,12,9,10,4,5,6])),"hero-section":()=>L(()=>import("./hero-section.page-CkM-bycF.js"),__vite__mapDeps([25,12,8,4,5,6])),card:()=>L(()=>import("./card.page-DGZk23qV.js"),__vite__mapDeps([26,12,14,4,5,6,10,9])),button:()=>L(()=>import("./button.page-CiF8FH_a.js"),__vite__mapDeps([27,12,9,10,7,4,5,6])),"button-icon":()=>L(()=>import("./button-icon.page-Co6NJAqF.js"),__vite__mapDeps([28,12,5,6])),link:()=>L(()=>import("./link.page-3OkUjoq2.js"),__vite__mapDeps([29,12,30])),"element-title":()=>L(()=>import("./element-title.page-LLNmvFPq.js"),__vite__mapDeps([31,12,10])),"context-card":()=>L(()=>import("./context-card.page-PvzeoHBN.js"),__vite__mapDeps([32,12,33,10,30])),badges:()=>L(()=>import("./badges.page-CxfuKF8v.js"),__vite__mapDeps([34,12,35])),field:()=>L(()=>import("./field.page-D8eq4AOU.js"),__vite__mapDeps([36,12,35,30])),timeline:()=>L(()=>import("./timeline.page-C3xK3VGS.js"),__vite__mapDeps([37,12,14,4,5,6,10,9,15,16])),"form-layout":()=>L(()=>import("./form-layout.page-BAPsLPcF.js"),__vite__mapDeps([38,12,19,9,10,20,39,16,40])),dropzone:()=>L(()=>import("./dropzone.page-aFOxfeVm.js"),__vite__mapDeps([41,12])),toast:()=>L(()=>import("./toast.page-CH1Bugee.js"),__vite__mapDeps([42,12,19,9,10,20,40])),callout:()=>L(()=>import("./callout.page-BOgiAIhm.js"),__vite__mapDeps([43,12,14,4,5,6,10,9,7])),disclosure:()=>L(()=>import("./disclosure.page-BJS3WHZq.js"),__vite__mapDeps([44,12,14,4,5,6,10,9,3])),state:()=>L(()=>import("./state.page-BffvPLQ2.js"),__vite__mapDeps([45,12,9,10,4,5,6])),icons:()=>L(()=>import("./icons.page-CTKvQNLw.js"),__vite__mapDeps([46,12,9,10,7,4,5,6])),spinner:()=>L(()=>import("./spinner.page-D6ILiSXm.js"),__vite__mapDeps([47,12,5,6])),"repeat-press":()=>L(()=>import("./repeat-press.page-Bq_uuaZV.js"),__vite__mapDeps([48,12,9,10,7,15,16,49])),themes:()=>L(()=>import("./themes.page-CztaUBnT.js"),__vite__mapDeps([50,12,9,10,7,4,5,6])),form:()=>L(()=>import("./form.page-DIZhJxTM.js"),__vite__mapDeps([51,12,14,4,5,6,10,9,19,20,39,16,49,15])),avatar:()=>L(()=>import("./avatar.page-ZT7wPZnd.js"),__vite__mapDeps([52,12,14,4,5,6,10,9,2,19,20,15,16])),"app-shell":()=>L(()=>import("./app-shell.page-Cv9AnKJq.js"),__vite__mapDeps([53,23,20,12,14,4,5,6,10,9,15,16])),menu:()=>L(()=>import("./menu.page-DzBh46QU.js"),__vite__mapDeps([54,6,12,33,10])),"nav-launcher":()=>L(()=>import("./nav-launcher.page-D_x4Osq3.js"),__vite__mapDeps([55,12,9,10,4,5,6,7]))},i6=[...W0.map(e=>{const n={title:e.label,icon:e.icon},t=r6[e.id];return t?{path:e.id,data:n,loadComponent:t}:{path:e.id,data:n,component:Ti}}),{path:"",pathMatch:"full",loadComponent:()=>L(()=>import("./home.page-BMMOiW1I.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))},{path:"**",redirectTo:""}];Xx(Ii,{providers:[Aw(),b4(i6,k4(),S4()),$4({toast:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="20" height="8" rx="2.5"/><circle cx="6.5" cy="13" r="1"/><line x1="10" y1="13" x2="18" y2="13"/></svg>'})]}).catch(e=>console.error(e));export{Hn as $,xw as A,q as B,jn as C,Pn as D,Ae as E,$e as F,z as G,re as H,ie as I,xd as J,bt as K,W as L,Q as M,_p as N,tc as O,Qn as P,Yn as Q,Aa as R,se as S,Un as T,p as U,Rt as V,Vp as W,Qi as X,p6 as Y,lc as Z,Jl as _,pi as a,Jw as a$,zp as a0,w6 as a1,_6 as a2,nc as a3,m6 as a4,b6 as a5,y6 as a6,bp as a7,yp as a8,At as a9,Le as aA,Xl as aB,xe as aC,pe as aD,fe as aE,Vh as aF,bn as aG,vy as aH,g6 as aI,s6 as aJ,wo as aK,ku as aL,zi as aM,Be as aN,De as aO,wf as aP,Fw as aQ,x as aR,he as aS,x6 as aT,f6 as aU,K as aV,Se as aW,Cf as aX,l6 as aY,c6 as aZ,Ow as a_,Vy as aa,Oo as ab,_i as ac,Wy as ad,ko as ae,F4 as af,z4 as ag,N4 as ah,j4 as ai,H4 as aj,B4 as ak,Tg as al,Yg as am,ue as an,$g as ao,Tn as ap,Ce as aq,Kg as ar,lw as as,v6 as at,an as au,T as av,Gp as aw,ht as ax,ce as ay,nn as az,gi as b,h6 as b0,ne as b1,ec as b2,T4 as b3,hi as b4,mi as b5,Ho as b6,wi as b7,Si as b8,Bo as b9,hf as ba,bi as bb,yi as bc,Zt as bd,xi as c,m as d,E as e,v as f,N as g,rc as h,lt as i,b as j,Fe as k,Nn as l,O as m,oc as n,ct as o,Wk as p,Pp as q,sh as r,H as s,w as t,Je as u,Bn as v,oe as w,ve as x,mp as y,k as z,le as ɵ};
