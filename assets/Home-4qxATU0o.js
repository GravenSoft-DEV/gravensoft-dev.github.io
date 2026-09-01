import{a as e,f as t,i as n,l as r,n as i,r as a,t as o,u as s}from"./index-mAXzKX3i.js";import{t as c}from"./Block-BfQmK7s-.js";import{t as l}from"./Chip-BABiV54A.js";var u=e();function d({url:e,containerClassOverride:t,videoClassOverride:n,loop:r}){return(0,u.jsx)(`div`,{className:`overflow-hidden bg-black ${t||`shadow-2xl max-w-3xl mx-auto my-8 rounded-xl`}`,children:(0,u.jsxs)(`video`,{className:`w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full max-w-none pointer-events-none object-cover aspect-video ${n}`,loop:r,muted:!0,autoPlay:!0,playsInline:!0,children:[(0,u.jsx)(`source`,{src:e,type:`video/mp4`}),`Your browser does not support the video tag.`]},e)})}var f={heroTitle:`Engineering experiences that leave a mark`,heroSubtitle:`in your hearts? Maybe. Here at GravenSoft, our team is committed to delivering you quality software solutions that scale.`,testTitle:`Lorem Ipsum`,testTest:`dolor sit amet, consectetur adipiscing elit. Quisque vel magna nec nulla sollicitudin consectetur.
    Donec non nisl ex. Sed sit amet libero sollicitudin, sodales orci sed, malesuada eros.Fusce nibh sapien, tincidunt
    quis dui a, luctus porta quam. Proin auctor sem non ante scelerisque luctus ac at diam. Integer erat quam, rutrum
    sed sapien molestie, iaculis scelerisque nisi. Nullam lobortis, neque sed ornare volutpat, nisi erat fringilla orci,
    ut mollis arcu ligula nec ex. Proin ex neque, vehicula ac molestie et, consectetur ac magna. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Etiam sed lobortis metus. Orci varius natoque penatibus et magnis dis parturient
    montes, nascetur ridiculus mus. Etiam facilisis urna eu purus viverra vestibulum. In eget tortor sed lectus finibus mattis.
    Nam faucibus tincidunt est at efficitur.`},p=``+new URL(`background-CR8D3S_n.mp4`,import.meta.url).href,m=t(s((e=>{function t(e){if(!e||typeof window>`u`)return;let t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.innerHTML=e,document.head.appendChild(t),e}Object.defineProperty(e,"__esModule",{value:!0});var n=r();function i(e){return e&&typeof e==`object`&&`default`in e?e:{default:e}}var a=i(n);t(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`),e.default=n.forwardRef(function({style:e={},className:t=``,autoFill:r=!1,play:i=!0,pauseOnHover:o=!1,pauseOnClick:s=!1,direction:c=`left`,speed:l=50,delay:u=0,loop:d=0,gradient:f=!1,gradientColor:p=`white`,gradientWidth:m=200,onFinish:h,onCycleComplete:g,onMount:_,children:v},y){let[b,x]=n.useState(0),[S,C]=n.useState(0),[w,T]=n.useState(1),[E,D]=n.useState(!1),O=n.useRef(null),k=y||O,A=n.useRef(null),j=n.useCallback(()=>{if(A.current&&k.current){let e=k.current.getBoundingClientRect(),t=A.current.getBoundingClientRect(),n=e.width,i=t.width;(c===`up`||c===`down`)&&(n=e.height,i=t.height),T(r&&n&&i&&i<n?Math.ceil(n/i):1),x(n),C(i)}},[r,k,c]);n.useEffect(()=>{if(E&&(j(),A.current&&k.current)){let e=new ResizeObserver(()=>j());return e.observe(k.current),e.observe(A.current),()=>{e&&e.disconnect()}}},[j,k,E]),n.useEffect(()=>{j()},[j,v]),n.useEffect(()=>{D(!0)},[]),n.useEffect(()=>{typeof _==`function`&&_()},[]);let M=n.useMemo(()=>r?S*w/l:S<b?b/l:S/l,[r,b,S,w,l]),N=n.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!i||o?`paused`:`running`,"--pause-on-click":!i||o&&!s||s?`paused`:`running`,"--width":c===`up`||c===`down`?`100vh`:`100%`,"--transform":c===`up`?`rotate(-90deg)`:c===`down`?`rotate(90deg)`:`none`}),[e,i,o,s,c]),P=n.useMemo(()=>({"--gradient-color":p,"--gradient-width":typeof m==`number`?`${m}px`:m}),[p,m]),F=n.useMemo(()=>({"--play":i?`running`:`paused`,"--direction":c===`left`?`normal`:`reverse`,"--duration":`${M}s`,"--delay":`${u}s`,"--iteration-count":d?`${d}`:`infinite`,"--min-width":r?`auto`:`100%`}),[i,c,M,u,d,r]),I=n.useMemo(()=>({"--transform":c===`up`?`rotate(90deg)`:c===`down`?`rotate(-90deg)`:`none`}),[c]),L=n.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>a.default.createElement(n.Fragment,{key:t},n.Children.map(v,e=>a.default.createElement(`div`,{style:I,className:`rfm-child`},e)))),[I,v]);return E?a.default.createElement(`div`,{ref:k,style:N,className:`rfm-marquee-container `+t},f&&a.default.createElement(`div`,{style:P,className:`rfm-overlay`}),a.default.createElement(`div`,{className:`rfm-marquee`,style:F,onAnimationIteration:g,onAnimationEnd:h},a.default.createElement(`div`,{className:`rfm-initial-child-container`,ref:A},n.Children.map(v,e=>a.default.createElement(`div`,{style:I,className:`rfm-child`},e))),L(w-1)),a.default.createElement(`div`,{className:`rfm-marquee`,style:F},L(w))):null})}))(),1);function h({className:e,children:t,background:n,fade:r}){return(0,u.jsxs)(c,{className:`relative bg-[rgba(19,13,28,1)] min-h-svh`,children:[n,r?(0,u.jsx)(`div`,{className:`pointer-events-none z-10 absolute left-0 bottom-0 w-full h-full bg-linear-to-b from-black/0 to-100% to-black/75 flex items-center justify-center`}):null,(0,u.jsx)(`div`,{className:`absolute inset-0 z-10 flex items-center justify-center pointer-events-none`,children:(0,u.jsx)(`div`,{className:`relative w-full sm:px-0 pointer-events-auto drop-shadow-black/50 drop-shadow-lg ${e}`,children:t})})]})}var g=m.default.default||m.default;function _(){return n(`Home | GravenSoft`),(0,u.jsxs)(`main`,{children:[(0,u.jsx)(h,{className:`flex flex-wrap justify-center lg:justify-start lg:max-w-5xl mx-8 lg:mx-0 xl:max-w-7xl gap-16`,fade:!0,background:(0,u.jsx)(d,{url:p,containerClassOverride:`absolute inset-0 z-0 w-full h-full`,loop:!0}),children:(0,u.jsxs)(`div`,{className:`md:w-xl lg:px-8`,children:[(0,u.jsx)(`h1`,{className:`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left`,children:f.heroTitle}),(0,u.jsx)(`p`,{className:`whitespace-pre-line text-center md:text-left`,children:f.heroSubtitle}),(0,u.jsxs)(`div`,{className:`flex flex-wrap mt-16 gap-4 w-full justify-center md:justify-start`,children:[(0,u.jsx)(a,{className:`transition-transform origin-center hover:scale-90 w-full sm:w-fit h-16 px-8 rounded-xl bg-white text-black font-bold hover:bg-zinc-950 hover:text-white`,href:`/contact`,children:(0,u.jsx)(`p`,{children:`Build with Us`})}),(0,u.jsx)(a,{className:`transition-transform origin-center hover:scale-90 w-full sm:w-fit h-16 px-8 rounded-xl border border-white bg-white/20 text-white font-bold hover:bg-white hover:text-black`,href:`/portfolio`,children:(0,u.jsx)(`p`,{children:`Portfolio`})})]})]})}),(0,u.jsxs)(c,{className:`bg-zinc-950`,children:[(0,u.jsx)(`h1`,{className:`text-4xl font-bold mb-8`,children:f.testTitle}),(0,u.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8 mb-8`,children:[(0,u.jsx)(`p`,{children:f.testTest}),(0,u.jsx)(i,{children:`KALDHWKJDHLWADHKJADHJHjkd`})]}),(0,u.jsxs)(`div`,{className:`flex flex-row gap-4`,children:[(0,u.jsx)(l,{colorOverride:`red`,children:`Test`}),(0,u.jsx)(l,{colorOverride:`blue`,children:`Test`}),(0,u.jsx)(l,{colorOverride:`green`,children:`Test`}),(0,u.jsx)(l,{colorOverride:`gray`,children:`Test`})]})]}),(0,u.jsxs)(c,{className:`bg-zinc-950`,children:[(0,u.jsx)(`h1`,{className:`text-4xl font-bold mb-8`,children:f.testTitle}),(0,u.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8`,children:[(0,u.jsx)(i,{children:`KALDHWKJDHLWADHKJADHJHjkd`}),(0,u.jsx)(`p`,{children:f.testTest})]})]}),(0,u.jsxs)(c,{className:`bg-zinc-900`,children:[(0,u.jsx)(`h1`,{className:`text-4xl font-bold mb-8 text-center`,children:f.testTitle}),(0,u.jsx)(`div`,{className:`flex flex-row gap-16`,children:(0,u.jsx)(`p`,{style:{textAlign:`center`},children:f.testTest})})]}),(0,u.jsxs)(c,{className:`bg-zinc-950 flex`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8 mb-24`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,u.jsx)(`h1`,{className:`text-4xl font-bold`,children:f.testTitle}),(0,u.jsx)(`p`,{children:f.testTest})]}),(0,u.jsx)(i,{children:`KALDHWKJDHLWADHKJADHJHjkd`})]}),(0,u.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8`,children:[(0,u.jsx)(i,{children:`KALDHWKJDHLWADHKJADHJHjkd`}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,u.jsx)(`h1`,{className:`text-4xl font-bold`,children:f.testTitle}),(0,u.jsx)(`p`,{children:f.testTest})]})]})]}),(0,u.jsx)(c,{className:`bg-zinc-900`,children:(0,u.jsxs)(`div`,{className:`flex flex-wrap xl:flex-row gap-8 justify-center items-center`,children:[(0,u.jsx)(o,{className:`not-md:w-full not-xl:order-1 transition-all min-w-xs min-h-100 bg-linear-to-br border border-green-500 from-green-800/50 to-75% to-green-400/50`,highlight:!0,highlightOverride:`hover:shadow-green-300/50 hover:shadow-xl hover:from-green-800/50 to-75% hover:to-green-400/75`,children:e=>(0,u.jsx)(i,{className:e})}),(0,u.jsx)(o,{className:`not-md:w-full not-xl:order-3 transition-all min-w-xs min-h-100 bg-linear-to-br border border-yellow-500 from-yellow-800/50 to-75% to-yellow-400/50`,highlight:!0,highlightOverride:`hover:shadow-yellow-200/50 hover:shadow-xl hover:from-yellow-800/50 to-75% hover:to-yellow-300/75`,children:e=>(0,u.jsx)(i,{className:e})}),(0,u.jsx)(o,{className:`not-md:w-full not-xl:order-2 transition-all min-w-xs min-h-100 bg-linear-to-br border border-red-500 from-red-800/50 to-75% to-red-400/50`,highlight:!0,highlightOverride:`hover:shadow-red-300/50 hover:shadow-xl hover:from-red-800/50 to-75% hover:to-red-400/75`,children:e=>(0,u.jsx)(i,{className:e})})]})}),(0,u.jsx)(c,{className:`bg-zinc-950`,children:(0,u.jsx)(`div`,{className:`relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]`,children:(0,u.jsx)(g,{pauseOnHover:!0,className:`w-full`,children:(0,u.jsxs)(`div`,{className:`flex`,children:[(0,u.jsx)(i,{className:`h-100 w-180 bg-zinc-400 mx-2`,children:`Hey hey`}),(0,u.jsx)(i,{className:`h-100 w-180 bg-zinc-400 mx-2`,children:`Hey hey`}),(0,u.jsx)(i,{className:`h-100 w-180 bg-zinc-400 mx-2`,children:`Hey hey`})]})})})})]})}export{_ as default};