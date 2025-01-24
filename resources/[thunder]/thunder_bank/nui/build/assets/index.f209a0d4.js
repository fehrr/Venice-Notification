(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function O(){}const hn=e=>e;function Cn(e,t){for(const n in t)e[n]=t[n];return e}function bn(e){return e()}function on(){return Object.create(null)}function ne(e){e.forEach(bn)}function bt(e){return typeof e=="function"}function _t(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let tt;function vt(e,t){return tt||(tt=document.createElement("a")),tt.href=t,e===tt.href}function In(e){return Object.keys(e).length===0}function Nn(e,...t){if(e==null)return O;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function nt(e,t,n){e.$$.on_destroy.push(Nn(t,n))}function Ln(e,t,n,r){if(e){const o=_n(e,t,n,r);return e[0](o)}}function _n(e,t,n,r){return e[1]&&r?Cn(n.ctx.slice(),e[1](r(t))):n.ctx}function kn(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(t.dirty===void 0)return o;if(typeof o=="object"){const s=[],i=Math.max(t.dirty.length,o.length);for(let u=0;u<i;u+=1)s[u]=t.dirty[u]|o[u];return s}return t.dirty|o}return t.dirty}function Dn(e,t,n,r,o,s){if(o){const i=_n(t,n,r,s);e.p(i,o)}}function Fn(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function P(e,t,n){return e.set(n),t}const vn=typeof window<"u";let On=vn?()=>window.performance.now():()=>Date.now(),yt=vn?e=>requestAnimationFrame(e):O;const me=new Set;function yn(e){me.forEach(t=>{t.c(e)||(me.delete(t),t.f())}),me.size!==0&&yt(yn)}function Pn(e){let t;return me.size===0&&yt(yn),{promise:new Promise(n=>{me.add(t={c:e,f:n})}),abort(){me.delete(t)}}}function l(e,t){e.appendChild(t)}function wn(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function qn(e){const t=c("style");return jn(wn(e),t),t.sheet}function jn(e,t){return l(e.head||e,t),t.sheet}function K(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function Wn(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function c(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function g(){return T(" ")}function Bn(){return T("")}function B(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return e===""?null:+e}function Mn(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.data!==t&&(e.data=t)}function de(e,t){e.value=t==null?"":t}function Un(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,r,t),o}const lt=new Map;let st=0;function Hn(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Vn(e,t){const n={stylesheet:qn(t),rules:{}};return lt.set(e,n),n}function ln(e,t,n,r,o,s,i,u=0){const f=16.666/r;let d=`{
`;for(let A=0;A<=1;A+=f){const R=t+(n-t)*s(A);d+=A*100+`%{${i(R,1-R)}}
`}const b=d+`100% {${i(n,1-n)}}
}`,_=`__svelte_${Hn(b)}_${u}`,E=wn(e),{stylesheet:h,rules:x}=lt.get(E)||Vn(E,e);x[_]||(x[_]=!0,h.insertRule(`@keyframes ${_} ${b}`,h.cssRules.length));const w=e.style.animation||"";return e.style.animation=`${w?`${w}, `:""}${_} ${r}ms linear ${o}ms 1 both`,st+=1,_}function zn(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),o=n.length-r.length;o&&(e.style.animation=r.join(", "),st-=o,st||Qn())}function Qn(){yt(()=>{st||(lt.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&q(t)}),lt.clear())})}let ke;function Le(e){ke=e}function Gn(){if(!ke)throw new Error("Function called outside component initialization");return ke}function xn(e){Gn().$$.on_mount.push(e)}const fe=[],sn=[];let ge=[];const an=[],Jn=Promise.resolve();let ht=!1;function Kn(){ht||(ht=!0,Jn.then(En))}function De(e){ge.push(e)}const pt=new Set;let ae=0;function En(){if(ae!==0)return;const e=ke;do{try{for(;ae<fe.length;){const t=fe[ae];ae++,Le(t),Xn(t.$$)}}catch(t){throw fe.length=0,ae=0,t}for(Le(null),fe.length=0,ae=0;sn.length;)sn.pop()();for(let t=0;t<ge.length;t+=1){const n=ge[t];pt.has(n)||(pt.add(n),n())}ge.length=0}while(fe.length);for(;an.length;)an.pop()();ht=!1,pt.clear(),Le(e)}function Xn(e){if(e.fragment!==null){e.update(),ne(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(De)}}function Yn(e){const t=[],n=[];ge.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),ge=t}let Ce;function Zn(){return Ce||(Ce=Promise.resolve(),Ce.then(()=>{Ce=null})),Ce}function gt(e,t,n){e.dispatchEvent(Un(`${t?"intro":"outro"}${n}`))}const ot=new Set;let M;function er(){M={r:0,c:[],p:M}}function tr(){M.r||ne(M.c),M=M.p}function he(e,t){e&&e.i&&(ot.delete(e),e.i(t))}function it(e,t,n,r){if(e&&e.o){if(ot.has(e))return;ot.add(e),M.c.push(()=>{ot.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const nr={duration:0};function un(e,t,n,r){const o={direction:"both"};let s=t(e,n,o),i=r?0:1,u=null,f=null,d=null;function b(){d&&zn(e,d)}function _(h,x){const w=h.b-i;return x*=Math.abs(w),{a:i,b:h.b,d:w,duration:x,start:h.start,end:h.start+x,group:h.group}}function E(h){const{delay:x=0,duration:w=300,easing:A=hn,tick:R=O,css:k}=s||nr,F={start:On()+x,b:h};h||(F.group=M,M.r+=1),u||f?f=F:(k&&(b(),d=ln(e,i,h,w,x,A,k)),h&&R(0,1),u=_(F,w),De(()=>gt(e,h,"start")),Pn(S=>{if(f&&S>f.start&&(u=_(f,w),f=null,gt(e,u.b,"start"),k&&(b(),d=ln(e,i,u.b,u.duration,0,A,s.css))),u){if(S>=u.end)R(i=u.b,1-i),gt(e,u.b,"end"),f||(u.b?b():--u.group.r||ne(u.group.c)),u=null;else if(S>=u.start){const m=S-u.start;i=u.a+u.d*A(m/u.duration),R(i,1-i)}}return!!(u||f)}))}return{run(h){bt(s)?Zn().then(()=>{s=s(o),E(h)}):E(h)},end(){b(),u=f=null}}}function rr(e){e&&e.c()}function Rn(e,t,n,r){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),r||De(()=>{const i=e.$$.on_mount.map(bn).filter(bt);e.$$.on_destroy?e.$$.on_destroy.push(...i):ne(i),e.$$.on_mount=[]}),s.forEach(De)}function Sn(e,t){const n=e.$$;n.fragment!==null&&(Yn(n.after_update),ne(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function or(e,t){e.$$.dirty[0]===-1&&(fe.push(e),Kn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function An(e,t,n,r,o,s,i,u=[-1]){const f=ke;Le(e);const d=e.$$={fragment:null,ctx:[],props:s,update:O,not_equal:o,bound:on(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:on(),dirty:u,skip_bound:!1,root:t.target||f.$$.root};i&&i(d.root);let b=!1;if(d.ctx=n?n(e,t.props||{},(_,E,...h)=>{const x=h.length?h[0]:E;return d.ctx&&o(d.ctx[_],d.ctx[_]=x)&&(!d.skip_bound&&d.bound[_]&&d.bound[_](x),b&&or(e,_)),E}):[],d.update(),b=!0,ne(d.before_update),d.fragment=r?r(d.ctx):!1,t.target){if(t.hydrate){const _=Mn(t.target);d.fragment&&d.fragment.l(_),_.forEach(q)}else d.fragment&&d.fragment.c();t.intro&&he(e.$$.fragment),Rn(e,t.target,t.anchor,t.customElement),En()}Le(f)}class Tn{$destroy(){Sn(this,1),this.$destroy=O}$on(t,n){if(!bt(n))return O;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!In(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function cn(e,{delay:t=0,duration:n=400,easing:r=hn}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:s=>`opacity: ${s*o}`}}function lr(e,t){const n=r=>{const{action:o,data:s}=r.data;o===e&&t(s)};xn(()=>(window.addEventListener("message",n),()=>window.removeEventListener("message",n)))}const $n=()=>!window.invokeNative;async function Ne(e,t={},n){const r={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)};if($n()&&n)return n;const o=window.GetParentResourceName?window.GetParentResourceName():"nui-frame-app";return await(await fetch(`https://${o}/${e}`,r)).json()}var v=(e=>(e.DEPOSIT="0",e.WITHDRAW="1",e.FINES="2",e.TRANSFER="3",e))(v||{});const ue=[];function Fe(e,t=O){let n;const r=new Set;function o(u){if(_t(e,u)&&(e=u,n)){const f=!ue.length;for(const d of r)d[1](),ue.push(d,e);if(f){for(let d=0;d<ue.length;d+=2)ue[d][0](ue[d+1]);ue.length=0}}}function s(u){o(u(e))}function i(u,f=O){const d=[u,f];return r.add(d),r.size===1&&(n=t(o)||O),u(e),()=>{r.delete(d),r.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:i}}const be=Fe(!1),ce=Fe(),Ie=Fe(),te=Fe(),rt=Fe(v.DEPOSIT);function fn(e){let t,n,r;const o=e[2].default,s=Ln(o,e,e[1],null);return{c(){t=c("div"),s&&s.c()},m(i,u){K(i,t,u),s&&s.m(t,null),r=!0},p(i,u){s&&s.p&&(!r||u&2)&&Dn(s,o,i,i[1],r?kn(o,i[1],u,null):Fn(i[1]),null)},i(i){r||(he(s,i),De(()=>{!r||(n||(n=un(t,cn,{delay:0,duration:200},!0)),n.run(1))}),r=!0)},o(i){it(s,i),n||(n=un(t,cn,{delay:0,duration:200},!1)),n.run(0),r=!1},d(i){i&&q(t),s&&s.d(i),i&&n&&n.end()}}}function sr(e){let t,n,r=e[0]&&fn(e);return{c(){t=c("main"),r&&r.c()},m(o,s){K(o,t,s),r&&r.m(t,null),n=!0},p(o,[s]){o[0]?r?(r.p(o,s),s&1&&he(r,1)):(r=fn(o),r.c(),he(r,1),r.m(t,null)):r&&(er(),it(r,1,1,()=>{r=null}),tr())},i(o){n||(he(r),n=!0)},o(o){it(r),n=!1},d(o){o&&q(t),r&&r.d()}}}function ir(e,t,n){let{$$slots:r={},$$scope:o}=t,s;return be.subscribe(i=>{n(0,s=i)}),lr("setVisible",i=>{be.set(i)}),xn(()=>{const i=u=>{s&&["Escape"].includes(u.code)&&(Ne("close"),be.set(!1))};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)}),e.$$set=i=>{"$$scope"in i&&n(1,o=i.$$scope)},[s,o,r]}class ar extends Tn{constructor(t){super(),An(this,t,ir,sr,_t,{})}}const ur=(e,t=1e3)=>{if($n())for(const n of e)setTimeout(()=>{window.dispatchEvent(new MessageEvent("message",{data:{action:n.action,data:n.data}}))},t)},cr=""+new URL("saque.265d8ea9.svg",import.meta.url).href,fr=""+new URL("deposito.faca5656.svg",import.meta.url).href,dr=""+new URL("../flecca.svg",import.meta.url).href;function dn(e,t,n){const r=e.slice();return r[19]=t[n],r}function mn(e){var Yt,Zt,en;let t,n,r,o,s,i,u,f,d,b,_,E,h,x,w,A,R=(e[1].banco?(Yt=e[1].banco)==null?void 0:Yt.toLocaleString("pt-BR"):"0.00")+"",k,F,S,m,_e,y,L,X=(e[1].carteira?(Zt=e[1].carteira)==null?void 0:Zt.toLocaleString("pt-BR"):"0.00")+"",at,wt,U,H,ve,xt,Oe,Et,Pe,Rt,ye,St,V,we,At,qe,Tt,je,$t,xe,Ct,z,Ee,It,We,Nt,Be,Lt,Re,kt,re,$,Me,Dt,Ue,Ft,ut,Ot,Se,Pt,He=(e[1].multas?(en=e[1].multas)==null?void 0:en.toLocaleString("pt-BR"):"0.00")+"",ct,qt,Ve,jt,oe,ze,Wt,j,Bt,Ae,Mt,le,Q,Qe,Ge=e[0]===v.WITHDRAW?"SAQUE":e[0]===v.DEPOSIT?"DEP\xD3SITO":"TRANSFER\xCANCIA",ft,Ut,Je,Ke=e[0]===v.WITHDRAW?"Insira o valor que deseja sacar logo abaixo.":e[0]===v.DEPOSIT?"Insira o valor que deseja depositar logo abaixo.":"Insira o valor e o id para quem deseja transferir.",dt,Ht,se,Y,Z,Xe,Vt,W,Ye,zt,Qt,Te,Gt,G,Ze,Jt,et,Kt,$e,mt,Xt,N=e[0]===v.TRANSFER&&pn(e),ie=e[1].logs,I=[];for(let p=0;p<ie.length;p+=1)I[p]=gn(dn(e,ie,p));return{c(){t=c("div"),n=c("div"),r=c("header"),o=c("img"),i=g(),u=c("button"),u.textContent="SAIR",f=g(),d=c("main"),b=c("div"),_=c("div"),E=c("div"),h=c("small"),h.textContent="Saldo no banco",x=g(),w=c("p"),A=T("R$ "),k=T(R),F=g(),S=c("div"),m=c("small"),m.textContent="Saldo na carteira",_e=g(),y=c("p"),L=T("R$ "),at=T(X),wt=g(),U=c("div"),H=c("div"),ve=c("span"),xt=T("TRANSFERENCIA"),Et=g(),Pe=c("p"),Pe.textContent="Transfira seu Dinheiro para outras contas.",Rt=g(),ye=c("button"),ye.textContent="TRANSFERIR",St=g(),V=c("div"),we=c("span"),At=T("DEP\xD3SITO"),Tt=g(),je=c("p"),je.textContent="Deposite dinheiro em sua conta banc\xE1ria.",$t=g(),xe=c("button"),xe.textContent="DEPOSITAR",Ct=g(),z=c("div"),Ee=c("span"),It=T("SAQUE"),Nt=g(),Be=c("p"),Be.textContent="Efetue saques e coloque seu dinheiro em sua carteira.",Lt=g(),Re=c("button"),Re.textContent="SACAR",kt=g(),re=c("div"),$=c("div"),Me=c("h3"),Me.textContent="MULTAS",Dt=g(),Ue=c("p"),Ue.textContent="Visualize, gerencie e pague suas multas aqui.",Ft=g(),ut=c("hr"),Ot=g(),Se=c("span"),Pt=T("R$ "),ct=T(He),qt=g(),Ve=c("p"),Ve.textContent="Voc\xEA pode pagar parcelas do valor total de suas multas quando quiser, mas lembre-se que se n\xE3o zerar a divida em multas ainda ser\xE1 prejudicado!",jt=g(),oe=c("div"),ze=c("p"),ze.textContent="R$",Wt=g(),j=c("input"),Bt=g(),Ae=c("button"),Ae.textContent="PAGAR",Mt=g(),le=c("div"),Q=c("div"),Qe=c("h3"),ft=T(Ge),Ut=g(),Je=c("p"),dt=T(Ke),Ht=g(),se=c("div"),Y=c("div"),Z=c("div"),Xe=c("p"),Xe.textContent="R$",Vt=g(),W=c("input"),zt=g(),N&&N.c(),Qt=g(),Te=c("button"),Te.textContent="CONFIRMAR",Gt=g(),G=c("div"),Ze=c("h3"),Ze.textContent="HIST\xD3RICO  DE TRANSA\xC7\xD5ES",Jt=g(),et=c("p"),et.textContent="Analise seu hist\xF3rico de transa\xE7\xF5es",Kt=g(),$e=c("div");for(let p=0;p<I.length;p+=1)I[p].c();vt(o.src,s=dr)||a(o,"src",s),a(o,"alt","Flecca Logo"),a(o,"class","w-[10.6875rem]"),a(u,"class","w-[5.4375rem] h-[2.9375rem] bg-gray-500 text-white text-[0.9375rem] font-bold rounded-[.625rem] hover:bg-primary hover:text-gray-300 duration-200"),a(r,"class","flex items-center justify-between w-[65.8125rem] mb-[2.19rem]"),a(h,"class","text-[0.8125rem] text-gray-300 font-light "),a(w,"class","text-xl text-gray-300 font-extrabold leading-3 text-left"),a(m,"class","text-[0.8125rem] text-gray-300 font-light text-left"),a(y,"class","text-xl text-gray-300 font-extrabold leading-3 text-left"),a(S,"class","flex flex-col items-end"),a(_,"class","p-6 w-[21.875rem] h-[12.1875rem] bg-card bg-cover bg-no-repeat rounded-[.625rem] flex items-end justify-between "),a(ve,"class",Oe=`px-3 py-2 bg-gray-500 rounded-[.625rem] text-white text-[0.9375rem] font-extrabold absolute -top-4 left-2 ${e[0]===v.TRANSFER&&"!bg-primary"}`),a(Pe,"class","text-[#828282] text-[.8125rem] font-normal mt-[1.69rem]"),a(ye,"class","w-[11.0625rem] h-[2.9375rem] text-white text-[.9375rem] font-bold bg-gray-500 rounded-[.625rem] absolute bottom-5 left-1/2 -translate-x-1/2 hover:bg-primary hover:text-gray-300 duration-500"),a(H,"class","px-3 w-[13.6875rem] h-[12.1875rem] bg-gray-400 rounded-[.625rem] relative"),a(we,"class",qe=`px-3 py-2 bg-gray-500 rounded-[.625rem] text-white text-[0.9375rem] font-extrabold absolute -top-4 left-2 ${e[0]===v.DEPOSIT&&"!bg-primary"}`),a(je,"class","text-[#828282] text-[.8125rem] font-normal mt-[1.69rem]"),a(xe,"class","w-[11.0625rem] h-[2.9375rem] text-white text-[.9375rem] font-bold bg-gray-500 rounded-[.625rem] absolute bottom-5 left-1/2 -translate-x-1/2 hover:bg-primary hover:text-gray-300 duration-500"),a(V,"class","px-3 w-[13.6875rem] h-[12.1875rem] bg-gray-400 rounded-[.625rem] relative"),a(Ee,"class",We=`px-3 py-2 bg-gray-500 rounded-[.625rem] text-white text-[0.9375rem] font-extrabold absolute -top-4 left-2 ${e[0]===v.WITHDRAW&&"!bg-primary"}`),a(Be,"class","text-[#828282] text-[.8125rem] font-normal mt-[1.69rem]"),a(Re,"class","w-[11.0625rem] h-[2.9375rem] text-white text-[.9375rem] font-bold bg-gray-500 rounded-[.625rem] absolute bottom-5 left-1/2 -translate-x-1/2 hover:bg-primary hover:text-gray-300 duration-500"),a(z,"class","px-3 w-[13.6875rem] h-[12.1875rem] bg-gray-400 rounded-[.625rem] relative"),a(U,"class","flex items-center gap-[.94rem]"),a(b,"class","flex items-center gap-4 h-[12.1875rem]"),a(Me,"class","text-white text-[.9375rem] font-extrabold"),a(Ue,"class","text-[#828282] text-[.8125rem] font-normal"),a(ut,"class","mt-[.94rem] bg-gray-500 w-[19.375rem] h-[.0625rem] border-none"),a(Se,"class","mt-[.94rem] w-[19.375rem] h-[2.875rem] grid place-items-center bg-primary rounded-[.625rem] text-gray-300 text-xl font-extrabold"),a(Ve,"class","text-primary text-[.8125rem] font-normal mt-[.94rem]"),a(ze,"class","absolute text-white text-[.9375rem] font-light left-[.87rem]"),a(j,"type","number"),a(j,"class","w-full h-full bg-transparent text-white text-[.9375rem] font-light text-center"),a(j,"placeholder","Ex: 5.900"),a(oe,"class","mt-[1.37rem] w-full h-[2.8125rem] bg-gray-300 relative rounded-[.625rem] flex items-center"),a(Ae,"class","bg-gray-500 w-full h-[2.9375rem] text-white rounded-[.625rem] text-[.9375rem] font-bold mt-[.62rem] hover:bg-primary hover:text-gray-300 duration-200"),a($,"class","bg-gray-400 w-[21.875rem] h-full rounded-[.625rem] p-5"),a(Qe,"class","text-white text-[.9375rem] font-extrabold"),a(Je,"class","text-[#828282] text-[.8125rem] font-normal"),a(Xe,"class","absolute text-white text-[.9375rem] font-light left-[.87rem]"),a(W,"type","number"),a(W,"class","w-full h-[2.8125rem] bg-transparent text-white text-[.9375rem] font-light text-center"),a(W,"placeholder","Ex: 5.900"),a(Z,"class",Ye=`w-[${e[0]===v.TRANSFER?"12.67188rem":"25.375rem"}] h-[2.8125rem] bg-gray-300 relative rounded-[.625rem] flex items-center`),a(Y,"class","flex items-center gap-[.31rem]"),a(Te,"class","text-white text-[.9375rem] font-extrabold bg-gray-500 w-44 h-[2.8125rem] rounded-[.625rem] hover:bg-primary hover:text-gray-300 duration-200"),a(se,"class","flex items-center justify-between mt-[.5rem]"),a(Q,"class","bg-gray-400 w-[42.9375rem] h-[8.125rem] rounded-[.625rem] p-5"),a(Ze,"class","text-white text-[.9375rem] font-extrabold"),a(et,"class","text-[#828282] text-[.8125rem] font-normal"),a($e,"class","flex flex-col gap-[.31rem] max-h-[8.875rem] overflow-auto"),a(G,"class","bg-gray-400 w-[42.9375rem] h-[14.4375rem] rounded-[.625rem] p-5"),a(le,"class","flex flex-col gap-[.62rem]"),a(re,"class","flex items-center gap-4 h-[23.5rem]"),a(d,"class","flex flex-col gap-[.94rem]"),a(n,"class","bg-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-[2.19rem] rounded-[.625rem]"),a(t,"class","w-screen h-screen bg-background bg-cover bg-center")},m(p,C){K(p,t,C),l(t,n),l(n,r),l(r,o),l(r,i),l(r,u),l(n,f),l(n,d),l(d,b),l(b,_),l(_,E),l(E,h),l(E,x),l(E,w),l(w,A),l(w,k),l(_,F),l(_,S),l(S,m),l(S,_e),l(S,y),l(y,L),l(y,at),l(b,wt),l(b,U),l(U,H),l(H,ve),l(ve,xt),l(H,Et),l(H,Pe),l(H,Rt),l(H,ye),l(U,St),l(U,V),l(V,we),l(we,At),l(V,Tt),l(V,je),l(V,$t),l(V,xe),l(U,Ct),l(U,z),l(z,Ee),l(Ee,It),l(z,Nt),l(z,Be),l(z,Lt),l(z,Re),l(d,kt),l(d,re),l(re,$),l($,Me),l($,Dt),l($,Ue),l($,Ft),l($,ut),l($,Ot),l($,Se),l(Se,Pt),l(Se,ct),l($,qt),l($,Ve),l($,jt),l($,oe),l(oe,ze),l(oe,Wt),l(oe,j),de(j,e[2]),l($,Bt),l($,Ae),l(re,Mt),l(re,le),l(le,Q),l(Q,Qe),l(Qe,ft),l(Q,Ut),l(Q,Je),l(Je,dt),l(Q,Ht),l(Q,se),l(se,Y),l(Y,Z),l(Z,Xe),l(Z,Vt),l(Z,W),de(W,e[3]),l(Y,zt),N&&N.m(Y,null),l(se,Qt),l(se,Te),l(le,Gt),l(le,G),l(G,Ze),l(G,Jt),l(G,et),l(G,Kt),l(G,$e);for(let ee=0;ee<I.length;ee+=1)I[ee]&&I[ee].m($e,null);mt||(Xt=[B(u,"click",e[7]),B(ye,"click",e[9]),B(xe,"click",e[10]),B(Re,"click",e[11]),B(j,"input",e[12]),B(Ae,"click",e[6]),B(W,"input",e[13]),B(Te,"click",e[5])],mt=!0)},p(p,C){var ee,tn,nn;if(C&2&&R!==(R=(p[1].banco?(ee=p[1].banco)==null?void 0:ee.toLocaleString("pt-BR"):"0.00")+"")&&J(k,R),C&2&&X!==(X=(p[1].carteira?(tn=p[1].carteira)==null?void 0:tn.toLocaleString("pt-BR"):"0.00")+"")&&J(at,X),C&1&&Oe!==(Oe=`px-3 py-2 bg-gray-500 rounded-[.625rem] text-white text-[0.9375rem] font-extrabold absolute -top-4 left-2 ${p[0]===v.TRANSFER&&"!bg-primary"}`)&&a(ve,"class",Oe),C&1&&qe!==(qe=`px-3 py-2 bg-gray-500 rounded-[.625rem] text-white text-[0.9375rem] font-extrabold absolute -top-4 left-2 ${p[0]===v.DEPOSIT&&"!bg-primary"}`)&&a(we,"class",qe),C&1&&We!==(We=`px-3 py-2 bg-gray-500 rounded-[.625rem] text-white text-[0.9375rem] font-extrabold absolute -top-4 left-2 ${p[0]===v.WITHDRAW&&"!bg-primary"}`)&&a(Ee,"class",We),C&2&&He!==(He=(p[1].multas?(nn=p[1].multas)==null?void 0:nn.toLocaleString("pt-BR"):"0.00")+"")&&J(ct,He),C&4&&pe(j.value)!==p[2]&&de(j,p[2]),C&1&&Ge!==(Ge=p[0]===v.WITHDRAW?"SAQUE":p[0]===v.DEPOSIT?"DEP\xD3SITO":"TRANSFER\xCANCIA")&&J(ft,Ge),C&1&&Ke!==(Ke=p[0]===v.WITHDRAW?"Insira o valor que deseja sacar logo abaixo.":p[0]===v.DEPOSIT?"Insira o valor que deseja depositar logo abaixo.":"Insira o valor e o id para quem deseja transferir.")&&J(dt,Ke),C&8&&pe(W.value)!==p[3]&&de(W,p[3]),C&1&&Ye!==(Ye=`w-[${p[0]===v.TRANSFER?"12.67188rem":"25.375rem"}] h-[2.8125rem] bg-gray-300 relative rounded-[.625rem] flex items-center`)&&a(Z,"class",Ye),p[0]===v.TRANSFER?N?N.p(p,C):(N=pn(p),N.c(),N.m(Y,null)):N&&(N.d(1),N=null),C&2){ie=p[1].logs;let D;for(D=0;D<ie.length;D+=1){const rn=dn(p,ie,D);I[D]?I[D].p(rn,C):(I[D]=gn(rn),I[D].c(),I[D].m($e,null))}for(;D<I.length;D+=1)I[D].d(1);I.length=ie.length}},d(p){p&&q(t),N&&N.d(),Wn(I,p),mt=!1,ne(Xt)}}}function pn(e){let t,n,r,o,s,i;return{c(){t=c("div"),n=c("p"),n.textContent="ID",r=g(),o=c("input"),a(n,"class","absolute text-white text-[.9375rem] font-light left-[.87rem]"),a(o,"type","number"),a(o,"class","w-full h-[2.8125rem] bg-transparent text-white text-[.9375rem] font-light text-center"),a(o,"placeholder","Ex: 7423"),a(t,"class","w-[12.67188rem] h-[2.8125rem] bg-gray-300 relative rounded-[.625rem] flex items-center")},m(u,f){K(u,t,f),l(t,n),l(t,r),l(t,o),de(o,e[4]),s||(i=B(o,"input",e[14]),s=!0)},p(u,f){f&16&&pe(o.value)!==u[4]&&de(o,u[4])},d(u){u&&q(t),s=!1,i()}}}function mr(e){let t,n;return{c(){t=c("img"),vt(t.src,n=cr)||a(t,"src",n),a(t,"alt","Type Icon"),a(t,"class","w-[0.8125rem] h-[0.8125rem]")},m(r,o){K(r,t,o)},p:O,d(r){r&&q(t)}}}function pr(e){let t,n;return{c(){t=c("img"),vt(t.src,n=fr)||a(t,"src",n),a(t,"alt","Type Icon"),a(t,"class","w-[0.8125rem] h-[0.8125rem]")},m(r,o){K(r,t,o)},p:O,d(r){r&&q(t)}}}function gn(e){var _e;let t,n,r,o,s,i=e[19].tipo.toLowerCase()==="deposito"?"DEPOSITO":e[19].tipo.toLowerCase()==="multas"?"MULTA":e[19].tipo.toLowerCase()==="transfer\xEAncia"?"TRANSFER\xCANCIA":e[19].tipo.toLowerCase()==="recebeu"?"RECEBEU":"SAQUE",u,f,d,b=e[19].data+"",_,E,h,x,w=(e[19].valor?(_e=e[19].valor)==null?void 0:_e.toLocaleString("pt-BR"):"0.00")+"",A,R,k;function F(y,L){return L&2&&(r=null),r==null&&(r=y[19].tipo.toLowerCase()==="deposito"),r?pr:mr}let S=F(e,-1),m=S(e);return{c(){t=c("div"),n=c("div"),m.c(),o=g(),s=c("p"),u=T(i),f=g(),d=c("p"),_=T(b),E=g(),h=c("p"),x=T("R$ "),A=T(w),k=g(),a(s,"class","text-white text-[0.9375rem] font-medium"),a(n,"class","flex items-center gap-[.69rem] w-1/3"),a(d,"class","w-1/3 text-[0.8125rem] text-[#A3A3A3] font-light text-center"),a(h,"class",R=`w-1/3 text-[0.9375rem] font-medium text-right ${e[19].tipo.toLowerCase()==="deposito"?"text-success":"text-danger"}`),a(t,"class","w-[39.3125rem] bg-gray-500 flex items-center p-[.94rem] rounded-[.625rem]")},m(y,L){K(y,t,L),l(t,n),m.m(n,null),l(n,o),l(n,s),l(s,u),l(t,f),l(t,d),l(d,_),l(t,E),l(t,h),l(h,x),l(h,A),l(t,k)},p(y,L){var X;S===(S=F(y,L))&&m?m.p(y,L):(m.d(1),m=S(y),m&&(m.c(),m.m(n,o))),L&2&&i!==(i=y[19].tipo.toLowerCase()==="deposito"?"DEPOSITO":y[19].tipo.toLowerCase()==="multas"?"MULTA":y[19].tipo.toLowerCase()==="transfer\xEAncia"?"TRANSFER\xCANCIA":y[19].tipo.toLowerCase()==="recebeu"?"RECEBEU":"SAQUE")&&J(u,i),L&2&&b!==(b=y[19].data+"")&&J(_,b),L&2&&w!==(w=(y[19].valor?(X=y[19].valor)==null?void 0:X.toLocaleString("pt-BR"):"0.00")+"")&&J(A,w),L&2&&R!==(R=`w-1/3 text-[0.9375rem] font-medium text-right ${y[19].tipo.toLowerCase()==="deposito"?"text-success":"text-danger"}`)&&a(h,"class",R)},d(y){y&&q(t),m.d()}}}function gr(e){let t,n=e[1]&&mn(e);return{c(){n&&n.c(),t=Bn()},m(r,o){n&&n.m(r,o),K(r,t,o)},p(r,o){r[1]?n?n.p(r,o):(n=mn(r),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(r){n&&n.d(r),r&&q(t)}}}function hr(e){let t,n;return t=new ar({props:{$$slots:{default:[gr]},$$scope:{ctx:e}}}),{c(){rr(t.$$.fragment)},m(r,o){Rn(t,r,o),n=!0},p(r,[o]){const s={};o&4194335&&(s.$$scope={dirty:o,ctx:r}),t.$set(s)},i(r){n||(he(t.$$.fragment,r),n=!0)},o(r){it(t.$$.fragment,r),n=!1},d(r){Sn(t,r)}}}function br(e,t,n){let r,o,s,i,u;nt(e,Ie,m=>n(2,o=m)),nt(e,ce,m=>n(3,s=m)),nt(e,te,m=>n(4,i=m)),nt(e,be,m=>n(8,u=m)),ur([{action:"setVisible",data:!0}]);let f;const d=async()=>{const m=await Ne("requestBank",{},{nome:"string",image:"string",banco:2323,carteira:23232,multas:123213,logs:[]});m&&(n(1,f=m),n(1,f.logs=f.logs.slice(0).reverse(),f))};let b;rt.subscribe(m=>{n(0,b=m)}),be.subscribe(m=>{m&&d()});const _=async()=>{if(!!s&&(b!==v.TRANSFER&&te.set(void 0),!(b===v.TRANSFER&&!i)&&s>0)){const m=await Ne("bankActions",{action:b===v.FINES?"multas":r.toLowerCase(),amount:Number(s),id:i?Math.abs(i):void 0});m?(n(1,f.banco=m.balance,f),n(1,f.carteira=m.carteira,f),n(1,f.logs=m.logs.slice(0).reverse(),f),setTimeout(()=>{P(ce,s=void 0,s)},100)):(P(ce,s=void 0,s),P(te,i=void 0,i))}},E=async()=>{if(!o)return;b!==v.TRANSFER&&te.set(void 0);const m=await Ne("bankActions",{action:"multas",amount:Number(o),id:i?Math.abs(i):void 0});m?(n(1,f.banco=m.balance,f),n(1,f.carteira=m.carteira,f),n(1,f.multas=m.multas,f),n(1,f.logs=m.logs.slice(0).reverse(),f),setTimeout(()=>{P(Ie,o=void 0,o)},100)):(P(ce,s=void 0,s),P(te,i=void 0,i),P(Ie,o=void 0,o))},h=()=>{be.set(!1),Ne("close")},x={0:"Depositar",1:"Sacar",2:"Pagar Multa",3:"Transferir"},w=()=>rt.set(v.TRANSFER),A=()=>rt.set(v.DEPOSIT),R=()=>rt.set(v.WITHDRAW);function k(){o=pe(this.value),Ie.set(o)}function F(){s=pe(this.value),ce.set(s)}function S(){i=pe(this.value),te.set(i)}return e.$$.update=()=>{e.$$.dirty&1&&(r=x[b]),e.$$.dirty&256&&u===!1&&(P(te,i=void 0,i),P(ce,s=void 0,s),P(Ie,o=void 0,o))},[b,f,o,s,i,_,E,h,u,w,A,R,k,F,S]}class _r extends Tn{constructor(t){super(),An(this,t,br,hr,_t,{})}}new _r({target:document.getElementById("app")});
