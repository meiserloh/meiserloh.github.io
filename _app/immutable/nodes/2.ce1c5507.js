import{J,S as w,i as E,s as A,C as nt,k as h,l as $,m as y,h as f,n as _,p as rt,b as x,E as st,F as ot,G as at,g as D,K as C,L as K,d as H,M as W,I as N,y as O,z as V,A as Y,B as P,q as M,r as S,D as v,H as q,x as Q,a as Z,N as ct,c as U,O as k,P as it,Q as lt,f as ut,R as ft,v as mt}from"../chunks/index.aefebe11.js";import{w as tt}from"../chunks/index.69a120d2.js";const dt=!0,Wt=Object.freeze(Object.defineProperty({__proto__:null,prerender:dt},Symbol.toStringTag,{value:"Module"}));function pt(s){const t=s-1;return t*t*t+1}function R(s,{delay:t=0,duration:r=400,easing:e=pt,x:n=0,y:a=0,opacity:o=0}={}){const c=getComputedStyle(s),u=+c.opacity,l=c.transform==="none"?"":c.transform,m=u*(1-o),[i,d]=J(n),[g,T]=J(a);return{delay:t,duration:r,easing:e,css:(b,I)=>`
			transform: ${l} translate(${(1-b)*i}${d}, ${(1-b)*g}${T});
			opacity: ${u-m*I}`}}const F=tt(1),L=tt(0),X=650;function ht(s){let t,r,e,n;const a=s[3].default,o=nt(a,s,s[2],null);return{c(){t=h("div"),o&&o.c(),this.h()},l(c){t=$(c,"DIV",{class:!0,style:!0});var u=y(t);o&&o.l(u),u.forEach(f),this.h()},h(){_(t,"class","absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4/5 md:aspect-[4/5] w-4/5 md:w-auto px-4 py-10 bg-white shadow-lg rounded-3xl bg-clip-padding bg-opacity-20"),rt(t,"backdrop-filter","blur(20px)")},m(c,u){x(c,t,u),o&&o.m(t,null),n=!0},p(c,[u]){s=c,o&&o.p&&(!n||u&4)&&st(o,a,s,s[2],n?at(a,s[2],u,null):ot(s[2]),null)},i(c){n||(D(o,c),C(()=>{n&&(e&&e.end(1),r=K(t,R,{duration:X,x:1e3*s[0],y:1e3*s[1]}),r.start())}),n=!0)},o(c){H(o,c),r&&r.invalidate(),e=W(t,R,{duration:X,x:-1e3*s[0],y:-1e3*s[1]}),n=!1},d(c){c&&f(t),o&&o.d(c),c&&e&&e.end()}}}function $t(s,t,r){let e,n;N(s,F,c=>r(0,e=c)),N(s,L,c=>r(1,n=c));let{$$slots:a={},$$scope:o}=t;return s.$$set=c=>{"$$scope"in c&&r(2,o=c.$$scope)},[e,n,o,a]}class z extends w{constructor(t){super(),E(this,t,$t,ht,A,{})}}function _t(s){let t,r;return{c(){t=h("h2"),r=M("About Me 1"),this.h()},l(e){t=$(e,"H2",{class:!0});var n=y(t);r=S(n,"About Me 1"),n.forEach(f),this.h()},h(){_(t,"class","text-xl text-center")},m(e,n){x(e,t,n),v(t,r)},p:q,d(e){e&&f(t)}}}function gt(s){let t,r;return t=new z({props:{$$slots:{default:[_t]},$$scope:{ctx:s}}}),{c(){O(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){Y(t,e,n),r=!0},p(e,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){H(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}class vt extends w{constructor(t){super(),E(this,t,null,gt,A,{})}}function xt(s){let t,r;return{c(){t=h("h2"),r=M("About Me 2"),this.h()},l(e){t=$(e,"H2",{class:!0});var n=y(t);r=S(n,"About Me 2"),n.forEach(f),this.h()},h(){_(t,"class","text-xl text-center")},m(e,n){x(e,t,n),v(t,r)},p:q,d(e){e&&f(t)}}}function yt(s){let t,r;return t=new z({props:{$$slots:{default:[xt]},$$scope:{ctx:s}}}),{c(){O(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){Y(t,e,n),r=!0},p(e,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){H(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}class wt extends w{constructor(t){super(),E(this,t,null,yt,A,{})}}function Et(s){let t,r;return{c(){t=h("h2"),r=M("About Me 3"),this.h()},l(e){t=$(e,"H2",{class:!0});var n=y(t);r=S(n,"About Me 3"),n.forEach(f),this.h()},h(){_(t,"class","text-xl text-center")},m(e,n){x(e,t,n),v(t,r)},p:q,d(e){e&&f(t)}}}function At(s){let t,r;return t=new z({props:{$$slots:{default:[Et]},$$scope:{ctx:s}}}),{c(){O(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){Y(t,e,n),r=!0},p(e,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){H(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}class bt extends w{constructor(t){super(),E(this,t,null,At,A,{})}}function It(s){let t,r;return{c(){t=h("h2"),r=M("Dev 1"),this.h()},l(e){t=$(e,"H2",{class:!0});var n=y(t);r=S(n,"Dev 1"),n.forEach(f),this.h()},h(){_(t,"class","text-xl text-center")},m(e,n){x(e,t,n),v(t,r)},p:q,d(e){e&&f(t)}}}function Dt(s){let t,r;return t=new z({props:{$$slots:{default:[It]},$$scope:{ctx:s}}}),{c(){O(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){Y(t,e,n),r=!0},p(e,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){H(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}class Ht extends w{constructor(t){super(),E(this,t,null,Dt,A,{})}}function Mt(s){let t,r;return{c(){t=h("h2"),r=M("Dev 2"),this.h()},l(e){t=$(e,"H2",{class:!0});var n=y(t);r=S(n,"Dev 2"),n.forEach(f),this.h()},h(){_(t,"class","text-xl text-center")},m(e,n){x(e,t,n),v(t,r)},p:q,d(e){e&&f(t)}}}function St(s){let t,r;return t=new z({props:{$$slots:{default:[Mt]},$$scope:{ctx:s}}}),{c(){O(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){Y(t,e,n),r=!0},p(e,[n]){const a={};n&1&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){H(t.$$.fragment,e),r=!1},d(e){P(t,e)}}}class Tt extends w{constructor(t){super(),E(this,t,null,St,A,{})}}function Ft(s){let t,r,e,n,a,o,c,u;return{c(){t=h("div"),r=h("h1"),e=M("MATTHIAS"),n=h("br"),a=M("EISERLOH"),this.h()},l(l){t=$(l,"DIV",{class:!0});var m=y(t);r=$(m,"H1",{class:!0});var i=y(r);e=S(i,"MATTHIAS"),n=$(i,"BR",{}),a=S(i,"EISERLOH"),i.forEach(f),m.forEach(f),this.h()},h(){_(r,"class","text-5xl text-white text-center"),_(t,"class","absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")},m(l,m){x(l,t,m),v(t,r),v(r,e),v(r,n),v(r,a),u=!0},p(l,[m]){s=l},i(l){u||(C(()=>{u&&(c&&c.end(1),o=K(t,R,{duration:X,x:1e3*s[0],y:1e3*s[1]}),o.start())}),u=!0)},o(l){o&&o.invalidate(),c=W(t,R,{duration:X,x:-1e3*s[0],y:-1e3*s[1]}),u=!1},d(l){l&&f(t),l&&c&&c.end()}}}function Lt(s,t,r){let e,n;return N(s,F,a=>r(0,e=a)),N(s,L,a=>r(1,n=a)),[e,n]}class Ot extends w{constructor(t){super(),E(this,t,Lt,Ft,A,{})}}const Yt=300,Pt=60,et="none";function j(s,t,r){return s.addEventListener(t,r),()=>s.removeEventListener(t,r)}function Xt(s,t){return t.filter(r=>s.pointerId!==r.pointerId)}function B(s,t,r,e,n){s.dispatchEvent(new CustomEvent(`${t}${n}`,{detail:{event:r,pointersCount:e.length,target:r.target}}))}function Nt(s,t,r,e,n,a=et){t.style.touchAction=a;let o=[];function c(l){o.push(l),B(t,s,l,o,"down"),e==null||e(o,l);const m=l.pointerId;function i(p){m===p.pointerId&&(o=Xt(p,o),o.length||d(),B(t,s,p,o,"up"),n==null||n(o,p))}function d(){g(),T(),b(),I()}const g=j(t,"pointermove",p=>{o=o.map(G=>p.pointerId===G.pointerId?p:G),B(t,s,p,o,"move"),r==null||r(o,p)}),T=j(t,"lostpointercapture",p=>{i(p)}),b=j(t,"pointerup",p=>{i(p)}),I=j(t,"pointerleave",p=>{o=[],d(),B(t,s,p,o,"up"),n==null||n(o,p)})}const u=j(t,"pointerdown",c);return{destroy:()=>{u()}}}function Rt(s,t){const r={timeframe:Yt,minSwipeDistance:Pt,touchAction:et,composed:!1,...t},e="swipe";let n,a,o,c;function u(m,i){a=i.clientX,o=i.clientY,n=Date.now(),m.length===1&&(c=i.target)}function l(m,i){if(i.type==="pointerup"&&m.length===0&&Date.now()-n<r.timeframe){const d=i.clientX-a,g=i.clientY-o,T=Math.abs(d),b=Math.abs(g);let I=null;T>=2*b&&T>r.minSwipeDistance?I=d>0?"right":"left":b>=2*T&&b>r.minSwipeDistance&&(I=g>0?"bottom":"top"),I&&s.dispatchEvent(new CustomEvent(e,{detail:{direction:I,target:c}}))}}return r.composed?{onMove:null,onDown:u,onUp:l}:Nt(e,s,null,u,l,r.touchAction)}function Vt(s){let t,r,e,n,a,o;return{c(){t=h("div"),r=h("h1"),e=M("Contact"),this.h()},l(c){t=$(c,"DIV",{class:!0});var u=y(t);r=$(u,"H1",{class:!0});var l=y(r);e=S(l,"Contact"),l.forEach(f),u.forEach(f),this.h()},h(){_(r,"class","text-5xl text-white text-center"),_(t,"class","absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2")},m(c,u){x(c,t,u),v(t,r),v(r,e),o=!0},p(c,[u]){s=c},i(c){o||(C(()=>{o&&(a&&a.end(1),n=K(t,R,{duration:X,x:1e3*s[0],y:1e3*s[1]}),n.start())}),o=!0)},o(c){n&&n.invalidate(),a=W(t,R,{duration:X,x:-1e3*s[0],y:-1e3*s[1]}),o=!1},d(c){c&&f(t),c&&a&&a.end()}}}function jt(s,t,r){let e,n;return N(s,F,a=>r(0,e=a)),N(s,L,a=>r(1,n=a)),[e,n]}class qt extends w{constructor(t){super(),E(this,t,jt,Vt,A,{})}}function zt(s){let t,r,e,n,a,o,c,u;var l=s[0].component;function m(i){return{}}return l&&(n=Q(l,m())),{c(){t=h("meta"),r=Z(),e=h("section"),n&&O(n.$$.fragment),a=Z(),this.h()},l(i){const d=ct("svelte-8gb88t",document.head);t=$(d,"META",{name:!0,content:!0}),d.forEach(f),r=U(i),e=$(i,"SECTION",{class:!0});var g=y(e);n&&V(n.$$.fragment,g),g.forEach(f),a=U(i),this.h()},h(){document.title="Home",_(t,"name","description"),_(t,"content","Svelte demo app"),_(e,"class","w-full h-screen")},m(i,d){v(document.head,t),x(i,r,d),x(i,e,d),n&&Y(n,e,null),x(i,a,d),o=!0,c||(u=[k(window,"keydown",it(s[1])),k(document.body,"swipe",s[2]),lt(Rt.call(null,document.body,{timeframe:300,minSwipeDistance:60}))],c=!0)},p(i,[d]){if(d&1&&l!==(l=i[0].component)){if(n){mt();const g=n;H(g.$$.fragment,1,0,()=>{P(g,1)}),ut()}l?(n=Q(l,m()),O(n.$$.fragment),D(n.$$.fragment,1),Y(n,e,null)):n=null}},i(i){o||(n&&D(n.$$.fragment,i),o=!0)},o(i){n&&H(n.$$.fragment,i),o=!1},d(i){f(t),i&&f(r),i&&f(e),n&&P(n),i&&f(a),c=!1,ft(u)}}}function Bt(s,t,r){let e,n=[[{component:Ot}],[{component:vt},{component:wt},{component:bt}],[{component:Ht},{component:Tt}],[{component:qt}]],a=0,o=0;function c(i){m({37:"right",38:"bottom",39:"left",40:"top"}[i.keyCode])}function u(i){let d=i.detail.direction;m(d)}let l=!0;function m(i){if(l)switch(l=!1,setTimeout(()=>l=!0,X),i){case"bottom":r(4,o=Math.max(o-1,0)),F.set(0),L.set(-1);break;case"top":r(4,o=Math.min(o+1,n[a].length-1)),F.set(0),L.set(1);break;case"right":r(3,a=Math.max(a-1,0)),r(4,o=0),F.set(-1),L.set(0);break;case"left":r(3,a=Math.min(a+1,n.length-1)),r(4,o=0),F.set(1),L.set(0);break}}return s.$$.update=()=>{s.$$.dirty&24&&r(0,e=n[a][o])},[e,c,u,a,o]}class Gt extends w{constructor(t){super(),E(this,t,Bt,zt,A,{})}}export{Gt as component,Wt as universal};
