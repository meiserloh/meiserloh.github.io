function x(){}const J=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function q(){return Object.create(null)}function E(t){t.forEach(K)}function S(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function zt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function Ft(t,e,n,i,r,o){if(r){const s=Q(e,n,i,o);t.p(s,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Lt(t){return t&&S(t.destroy)?t.destroy:x}function qt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const W=typeof window<"u";let U=W?()=>window.performance.now():()=>Date.now(),F=W?t=>requestAnimationFrame(t):x;const w=new Set;function V(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&F(V)}function X(t){let e;return w.size===0&&F(V),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let P=!1;function dt(){P=!0}function ht(){P=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:mt(1,r,_=>e[n[_]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const o=[],s=[];let u=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);u>=l;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<o.length&&s[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(s[l],f)}}function yt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=tt("style");return xt(Y(t),e),e.sheet}function xt(t,e){return yt(t.head||t,e),e.sheet}function $t(t,e){if(P){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){P&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function It(){return H(" ")}function Jt(){return H("")}function Kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Qt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){wt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function vt(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ut(t,e,n){return vt(t,e,n,tt)}function Et(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Vt(t){return Et(t," ")}function Xt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Yt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Zt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function te(t,e){return new t(e)}const D=new Map;let M=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function kt(t,e){const n={stylesheet:gt(e),rules:{}};return D.set(t,n),n}function nt(t,e,n,i,r,o,s,u=0){const l=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=l){const p=e+(n-e)*o(m);c+=m*100+`%{${s(p,1-p)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${At(f)}_${u}`,_=Y(t),{stylesheet:d,rules:h}=D.get(_)||kt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Ct())}function Ct(){F(()=>{M||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),D.clear())})}let k;function A(t){k=t}function it(){if(!k)throw new Error("Function called outside component initialization");return k}function ee(t){it().$$.on_mount.push(t)}function ne(t){it().$$.after_update.push(t)}const b=[],G=[];let v=[];const I=[],rt=Promise.resolve();let B=!1;function st(){B||(B=!0,rt.then(ot))}function ie(){return st(),rt}function C(t){v.push(t)}const T=new Set;let $=0;function ot(){if($!==0)return;const t=k;do{try{for(;$<b.length;){const e=b[$];$++,A(e),St(e.$$)}}catch(e){throw b.length=0,$=0,e}for(A(null),b.length=0,$=0;G.length;)G.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];T.has(n)||(T.add(n),n())}v.length=0}while(b.length);for(;I.length;)I.pop()();B=!1,T.clear(),A(t)}function St(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}function jt(t){const e=[],n=[];v.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),v=e}let N;function ct(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function O(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const j=new Set;let g;function re(){g={r:0,c:[],p:g}}function se(){g.r||E(g.c),g=g.p}function Dt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function oe(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const lt={duration:0};function ce(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,u,l=0;function c(){s&&z(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=J,tick:y=x,css:m}=r||lt;m&&(s=nt(t,0,1,d,_,h,m,l++)),y(0,1);const p=U()+_,ut=p+d;u&&u.abort(),o=!0,C(()=>O(t,!0,"start")),u=X(R=>{if(o){if(R>=ut)return y(1,0),O(t,!0,"end"),c(),o=!1;if(R>=p){const L=h((R-p)/d);y(L,1-L)}}return o})}let a=!1;return{start(){a||(a=!0,z(t),S(r)?(r=r(i),ct().then(f)):f())},invalidate(){a=!1},end(){o&&(c(),o=!1)}}}function le(t,e,n){const i={direction:"out"};let r=e(t,n,i),o=!0,s;const u=g;u.r+=1;function l(){const{delay:c=0,duration:f=300,easing:a=J,tick:_=x,css:d}=r||lt;d&&(s=nt(t,1,0,f,c,a,d));const h=U()+c,y=h+f;C(()=>O(t,!1,"start")),X(m=>{if(o){if(m>=y)return _(0,1),O(t,!1,"end"),--u.r||E(u.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return o})}return S(r)?ct().then(()=>{r=r(i),l()}):l(),{end(c){c&&r.tick&&r.tick(1,0),o&&(s&&z(t,s),o=!1)}}}function ue(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||C(()=>{const s=t.$$.on_mount.map(K).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),o.forEach(C)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(jt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(b.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,i,r,o,s,u=[-1]){const l=k;A(t);const c=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:q(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Pt(t,a)),_}):[],c.update(),f=!0,E(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){dt();const a=bt(e.target);c.fragment&&c.fragment.l(a),a.forEach(Z)}else c.fragment&&c.fragment.c();e.intro&&Dt(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),ht(),ot()}A(l)}class _e{$destroy(){Ot(this,1),this.$destroy=x}$on(e,n){if(!S(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Mt as A,Ot as B,zt as C,$t as D,Ft as E,Ht as F,Bt as G,x as H,Tt as I,qt as J,C as K,ce as L,le as M,Zt as N,Kt as O,Qt as P,Lt as Q,E as R,_e as S,It as a,Gt as b,Vt as c,oe as d,Jt as e,se as f,Dt as g,Z as h,fe as i,ne as j,tt as k,Ut as l,bt as m,Wt as n,ee as o,Yt as p,H as q,Et as r,Rt as s,ie as t,Xt as u,re as v,G as w,te as x,ue as y,ae as z};