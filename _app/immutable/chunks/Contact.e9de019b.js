import{S as K,i as X,s as z,k as b,l as d,m as g,h as f,n as i,b as E,D as w,q as M,a as A,r as N,c as I,I as k,C,K as P,L,M as F,N as S}from"./index.39b0dd09.js";function H(u){let s,e,m,o,t,a,h,c,T;return{c(){s=b("div"),e=b("p"),m=M("thanks! "),o=b("br"),t=A(),a=b("a"),h=M("message again"),this.h()},l(r){s=d(r,"DIV",{class:!0});var n=g(s);e=d(n,"P",{class:!0});var p=g(e);m=N(p,"thanks! "),o=d(p,"BR",{}),t=I(p),a=d(p,"A",{href:!0,class:!0});var y=g(a);h=N(y,"message again"),y.forEach(f),p.forEach(f),n.forEach(f),this.h()},h(){i(a,"href","/"),i(a,"class","svelte-17xspho"),i(e,"class","thanks svelte-17xspho"),i(s,"class","chat-container svelte-17xspho")},m(r,n){E(r,s,n),k(s,e),k(e,m),k(e,o),k(e,t),k(e,a),k(a,h),c||(T=[C(a,"click",u[10]),C(a,"keypress",u[10])],c=!0)},p:w,d(r){r&&f(s),c=!1,P(T)}}}function Q(u){let s,e,m,o,t,a,h,c,T,r=u[0]&&J(u);return{c(){s=b("div"),e=b("button"),m=M("message"),o=b("br"),t=M("me"),a=A(),r&&r.c(),this.h()},l(n){s=d(n,"DIV",{class:!0});var p=g(s);e=d(p,"BUTTON",{class:!0});var y=g(e);m=N(y,"message"),o=d(y,"BR",{}),t=N(y,"me"),y.forEach(f),a=I(p),r&&r.l(p),p.forEach(f),this.h()},h(){i(e,"class","message-me svelte-17xspho"),i(s,"class",h=L(`chat-container${u[0]?" chat-container-open":""}`)+" svelte-17xspho")},m(n,p){E(n,s,p),k(s,e),k(e,m),k(e,o),k(e,t),k(s,a),r&&r.m(s,null),c||(T=[C(e,"click",u[6]),C(e,"keypress",u[6])],c=!0)},p(n,p){n[0]?r?r.p(n,p):(r=J(n),r.c(),r.m(s,null)):r&&(r.d(1),r=null),p&1&&h!==(h=L(`chat-container${n[0]?" chat-container-open":""}`)+" svelte-17xspho")&&i(s,"class",h)},d(n){n&&f(s),r&&r.d(),c=!1,P(T)}}}function J(u){let s,e,m,o,t,a,h,c,T,r,n,p,y,v,D,O,B,U,q,R;return{c(){s=b("button"),e=b("img"),o=A(),t=b("label"),a=M("email"),h=A(),c=b("input"),r=A(),n=b("label"),p=M("message"),y=A(),v=b("textarea"),O=A(),B=b("button"),U=M("send"),this.h()},l(l){s=d(l,"BUTTON",{class:!0});var _=g(s);e=d(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach(f),o=I(l),t=d(l,"LABEL",{for:!0,class:!0});var V=g(t);a=N(V,"email"),V.forEach(f),h=I(l),c=d(l,"INPUT",{type:!0,id:!0,name:!0,class:!0}),r=I(l),n=d(l,"LABEL",{for:!0,class:!0});var j=g(n);p=N(j,"message"),j.forEach(f),y=I(l),v=d(l,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),g(v).forEach(f),O=I(l),B=d(l,"BUTTON",{class:!0});var G=g(B);U=N(G,"send"),G.forEach(f),this.h()},h(){F(e.src,m="./cancel.svg")||i(e,"src",m),i(e,"alt","Cancel"),i(e,"class","svelte-17xspho"),i(s,"class","close svelte-17xspho"),i(t,"for","email"),i(t,"class","svelte-17xspho"),i(c,"type","text"),i(c,"id","email"),i(c,"name","email"),i(c,"class",T=L(u[4]?"email-errors":"")+" svelte-17xspho"),i(n,"for","message"),i(n,"class","svelte-17xspho"),i(v,"name","message"),i(v,"id","message"),i(v,"cols","30"),i(v,"rows","10"),i(v,"class",D=L(u[5]?"message-errors":"")+" svelte-17xspho"),i(B,"class","send svelte-17xspho")},m(l,_){E(l,s,_),k(s,e),E(l,o,_),E(l,t,_),k(t,a),E(l,h,_),E(l,c,_),S(c,u[2]),E(l,r,_),E(l,n,_),k(n,p),E(l,y,_),E(l,v,_),S(v,u[3]),E(l,O,_),E(l,B,_),k(B,U),q||(R=[C(s,"click",u[7]),C(s,"keypress",u[7]),C(c,"input",u[11]),C(c,"keyup",u[9]),C(v,"input",u[12]),C(v,"keyup",u[9]),C(B,"click",u[8]),C(B,"keypress",u[8])],q=!0)},p(l,_){_&16&&T!==(T=L(l[4]?"email-errors":"")+" svelte-17xspho")&&i(c,"class",T),_&4&&c.value!==l[2]&&S(c,l[2]),_&32&&D!==(D=L(l[5]?"message-errors":"")+" svelte-17xspho")&&i(v,"class",D),_&8&&S(v,l[3])},d(l){l&&f(s),l&&f(o),l&&f(t),l&&f(h),l&&f(c),l&&f(r),l&&f(n),l&&f(y),l&&f(v),l&&f(O),l&&f(B),q=!1,P(R)}}}function W(u){let s;function e(t,a){return t[1]?H:Q}let m=e(u),o=m(u);return{c(){s=b("div"),o.c(),this.h()},l(t){s=d(t,"DIV",{class:!0});var a=g(s);o.l(a),a.forEach(f),this.h()},h(){i(s,"class","contact-overlay svelte-17xspho")},m(t,a){E(t,s,a),o.m(s,null)},p(t,[a]){m===(m=e(t))&&o?o.p(t,a):(o.d(1),o=m(t),o&&(o.c(),o.m(s,null)))},i:w,o:w,d(t){t&&f(s),o.d()}}}function Y(u,s,e){let m=!1,o=!1,t="",a="",h=!1,c=!1;const T=()=>{e(0,m=!0)},r=()=>{e(0,m=!1)},n=()=>{t===""&&e(4,h=!0),a===""&&e(5,c=!0),!(t===""||a==="")&&(fetch("https://coley.world/api/custom-discord-message",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({message:`Message from site || ${t} says: ${a}`})}),e(1,o=!0))},p=O=>{O.key==="Enter"&&n()},y=O=>{O.preventDefault(),e(2,t=""),e(3,a=""),e(4,h=!1),e(5,c=!1),e(1,o=!1)};function v(){t=this.value,e(2,t)}function D(){a=this.value,e(3,a)}return[m,o,t,a,h,c,T,r,n,p,y,v,D]}class x extends K{constructor(s){super(),X(this,s,Y,W,z,{})}}export{x as C};
