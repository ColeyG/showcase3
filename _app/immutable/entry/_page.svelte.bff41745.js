import{S as D,i as V,s as X,k as b,l as y,m as g,h as o,n as p,b as v,H as L,q as C,r as $,G as k,a as A,c as P,J as U,K as B,L as j,M as G,y as q,z as J,A as R,g as H,d as K,B as F}from"../chunks/index.64575c1b.js";function Q(m){let e,l,u;return{c(){e=b("div"),l=b("p"),u=C("thanks!"),this.h()},l(t){e=y(t,"DIV",{class:!0});var n=g(e);l=y(n,"P",{class:!0});var i=g(l);u=$(i,"thanks!"),i.forEach(o),n.forEach(o),this.h()},h(){p(l,"class","thanks svelte-14s6g30"),p(e,"class","chat-container svelte-14s6g30")},m(t,n){v(t,e,n),k(e,l),k(l,u)},p:L,d(t){t&&o(e)}}}function W(m){let e,l,u,t,n,i,c,d,a,r=m[0]&&z(m);return{c(){e=b("div"),l=b("button"),u=C("message"),t=b("br"),n=C("me"),i=A(),r&&r.c(),this.h()},l(_){e=y(_,"DIV",{class:!0});var f=g(e);l=y(f,"BUTTON",{class:!0});var E=g(l);u=$(E,"message"),t=y(E,"BR",{}),n=$(E,"me"),E.forEach(o),i=P(f),r&&r.l(f),f.forEach(o),this.h()},h(){p(l,"class","message-me svelte-14s6g30"),p(e,"class",c=U(`chat-container${m[0]?" chat-container-open":""}`)+" svelte-14s6g30")},m(_,f){v(_,e,f),k(e,l),k(l,u),k(l,t),k(l,n),k(e,i),r&&r.m(e,null),d||(a=[B(l,"click",m[4]),B(l,"keypress",m[4])],d=!0)},p(_,f){_[0]?r?r.p(_,f):(r=z(_),r.c(),r.m(e,null)):r&&(r.d(1),r=null),f&1&&c!==(c=U(`chat-container${_[0]?" chat-container-open":""}`)+" svelte-14s6g30")&&p(e,"class",c)},d(_){_&&o(e),r&&r.d(),d=!1,j(a)}}}function z(m){let e,l,u,t,n,i,c,d,a,r,_,f,E,T,N,O,w;return{c(){e=b("button"),l=C("X"),u=A(),t=b("label"),n=C("email"),i=A(),c=b("input"),d=A(),a=b("label"),r=C("message"),_=A(),f=b("textarea"),E=A(),T=b("button"),N=C("send"),this.h()},l(s){e=y(s,"BUTTON",{class:!0});var h=g(e);l=$(h,"X"),h.forEach(o),u=P(s),t=y(s,"LABEL",{for:!0,class:!0});var I=g(t);n=$(I,"email"),I.forEach(o),i=P(s),c=y(s,"INPUT",{type:!0,id:!0,name:!0,class:!0}),d=P(s),a=y(s,"LABEL",{for:!0,class:!0});var M=g(a);r=$(M,"message"),M.forEach(o),_=P(s),f=y(s,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),g(f).forEach(o),E=P(s),T=y(s,"BUTTON",{class:!0});var S=g(T);N=$(S,"send"),S.forEach(o),this.h()},h(){p(e,"class","close svelte-14s6g30"),p(t,"for","email"),p(t,"class","svelte-14s6g30"),p(c,"type","text"),p(c,"id","email"),p(c,"name","email"),p(c,"class","svelte-14s6g30"),p(a,"for","message"),p(a,"class","svelte-14s6g30"),p(f,"name","message"),p(f,"id","message"),p(f,"cols","30"),p(f,"rows","10"),p(f,"class","svelte-14s6g30"),p(T,"class","send svelte-14s6g30")},m(s,h){v(s,e,h),k(e,l),v(s,u,h),v(s,t,h),k(t,n),v(s,i,h),v(s,c,h),G(c,m[2]),v(s,d,h),v(s,a,h),k(a,r),v(s,_,h),v(s,f,h),G(f,m[3]),v(s,E,h),v(s,T,h),k(T,N),O||(w=[B(e,"click",m[5]),B(e,"keypress",m[5]),B(c,"input",m[7]),B(f,"input",m[8]),B(T,"click",m[6]),B(T,"keypress",m[6])],O=!0)},p(s,h){h&4&&c.value!==s[2]&&G(c,s[2]),h&8&&G(f,s[3])},d(s){s&&o(e),s&&o(u),s&&o(t),s&&o(i),s&&o(c),s&&o(d),s&&o(a),s&&o(_),s&&o(f),s&&o(E),s&&o(T),O=!1,j(w)}}}function Y(m){let e;function l(n,i){return n[1]?Q:W}let u=l(m),t=u(m);return{c(){e=b("div"),t.c(),this.h()},l(n){e=y(n,"DIV",{class:!0});var i=g(e);t.l(i),i.forEach(o),this.h()},h(){p(e,"class","contact-overlay svelte-14s6g30")},m(n,i){v(n,e,i),t.m(e,null)},p(n,[i]){u===(u=l(n))&&t?t.p(n,i):(t.d(1),t=u(n),t&&(t.c(),t.m(e,null)))},i:L,o:L,d(n){n&&o(e),t.d()}}}function Z(m,e,l){let u=!1,t=!1,n="",i="";const c=()=>{l(0,u=!0)},d=()=>{l(0,u=!1)},a=()=>{fetch("https://coley.world/api/custom-discord-message",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({message:`Message from site || ${n} says: ${i}`})}),l(1,t=!0)};function r(){n=this.value,l(2,n)}function _(){i=this.value,l(3,i)}return[u,t,n,i,c,d,a,r,_]}class x extends D{constructor(e){super(),V(this,e,Z,Y,X,{})}}function ee(m){let e,l,u,t,n,i,c,d;return e=new x({}),{c(){q(e.$$.fragment),l=A(),u=b("p"),t=C("Cole Geerts"),n=A(),i=b("p"),c=C("Great things are Coming"),this.h()},l(a){J(e.$$.fragment,a),l=P(a),u=y(a,"P",{class:!0});var r=g(u);t=$(r,"Cole Geerts"),r.forEach(o),n=P(a),i=y(a,"P",{class:!0});var _=g(i);c=$(_,"Great things are Coming"),_.forEach(o),this.h()},h(){p(u,"class","text top-text svelte-2h9glz"),p(i,"class","text svelte-2h9glz")},m(a,r){R(e,a,r),v(a,l,r),v(a,u,r),k(u,t),v(a,n,r),v(a,i,r),k(i,c),d=!0},p:L,i(a){d||(H(e.$$.fragment,a),d=!0)},o(a){K(e.$$.fragment,a),d=!1},d(a){F(e,a),a&&o(l),a&&o(u),a&&o(n),a&&o(i)}}}class te extends D{constructor(e){super(),V(this,e,null,ee,X,{})}}export{te as default};
