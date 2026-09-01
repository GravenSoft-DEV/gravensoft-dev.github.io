import{a as e,f as t,l as n,n as r,r as i,t as a,u as o}from"./index-QvBGS3sH.js";import{t as s}from"./Block-b7UNcJB-.js";import{t as c}from"./Chip-DjrTTDt5.js";var l=e();function u({url:e,containerClassOverride:t,videoClassOverride:n,loop:r}){return(0,l.jsx)(`div`,{className:`overflow-hidden bg-black ${t||`shadow-2xl max-w-3xl mx-auto my-8 rounded-xl`}`,children:(0,l.jsxs)(`video`,{className:`w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full max-w-none pointer-events-none object-cover aspect-video ${n}`,loop:r,muted:!0,autoPlay:!0,playsInline:!0,children:[(0,l.jsx)(`source`,{src:e,type:`video/mp4`}),`Your browser does not support the video tag.`]},e)})}var d={heroTitle:`Engineering experiences that leave a mark...`,heroSubtitle:`in your hearts? Maybe. Here at GravenSoft, our team is committed to delivering you quality software solutions that scale.`,testTitle:`Lorem Ipsum`,testTest:`dolor sit amet, consectetur adipiscing elit. Quisque vel magna nec nulla sollicitudin consectetur.
    Donec non nisl ex. Sed sit amet libero sollicitudin, sodales orci sed, malesuada eros.Fusce nibh sapien, tincidunt
    quis dui a, luctus porta quam. Proin auctor sem non ante scelerisque luctus ac at diam. Integer erat quam, rutrum
    sed sapien molestie, iaculis scelerisque nisi. Nullam lobortis, neque sed ornare volutpat, nisi erat fringilla orci,
    ut mollis arcu ligula nec ex. Proin ex neque, vehicula ac molestie et, consectetur ac magna. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Etiam sed lobortis metus. Orci varius natoque penatibus et magnis dis parturient
    montes, nascetur ridiculus mus. Etiam facilisis urna eu purus viverra vestibulum. In eget tortor sed lectus finibus mattis.
    Nam faucibus tincidunt est at efficitur.`},f=``+new URL(`background-CR8D3S_n.mp4`,import.meta.url).href,p=t(o((e=>{function t(e){if(!e||typeof window>`u`)return;let t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.innerHTML=e,document.head.appendChild(t),e}Object.defineProperty(e,"__esModule",{value:!0});var r=n();function i(e){return e&&typeof e==`object`&&`default`in e?e:{default:e}}var a=i(r);t(`.rfm-marquee-container {
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
}`),e.default=r.forwardRef(function({style:e={},className:t=``,autoFill:n=!1,play:i=!0,pauseOnHover:o=!1,pauseOnClick:s=!1,direction:c=`left`,speed:l=50,delay:u=0,loop:d=0,gradient:f=!1,gradientColor:p=`white`,gradientWidth:m=200,onFinish:h,onCycleComplete:g,onMount:_,children:v},y){let[b,x]=r.useState(0),[S,C]=r.useState(0),[w,T]=r.useState(1),[E,D]=r.useState(!1),O=r.useRef(null),k=y||O,A=r.useRef(null),j=r.useCallback(()=>{if(A.current&&k.current){let e=k.current.getBoundingClientRect(),t=A.current.getBoundingClientRect(),r=e.width,i=t.width;(c===`up`||c===`down`)&&(r=e.height,i=t.height),T(n&&r&&i&&i<r?Math.ceil(r/i):1),x(r),C(i)}},[n,k,c]);r.useEffect(()=>{if(E&&(j(),A.current&&k.current)){let e=new ResizeObserver(()=>j());return e.observe(k.current),e.observe(A.current),()=>{e&&e.disconnect()}}},[j,k,E]),r.useEffect(()=>{j()},[j,v]),r.useEffect(()=>{D(!0)},[]),r.useEffect(()=>{typeof _==`function`&&_()},[]);let M=r.useMemo(()=>n?S*w/l:S<b?b/l:S/l,[n,b,S,w,l]),N=r.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!i||o?`paused`:`running`,"--pause-on-click":!i||o&&!s||s?`paused`:`running`,"--width":c===`up`||c===`down`?`100vh`:`100%`,"--transform":c===`up`?`rotate(-90deg)`:c===`down`?`rotate(90deg)`:`none`}),[e,i,o,s,c]),P=r.useMemo(()=>({"--gradient-color":p,"--gradient-width":typeof m==`number`?`${m}px`:m}),[p,m]),F=r.useMemo(()=>({"--play":i?`running`:`paused`,"--direction":c===`left`?`normal`:`reverse`,"--duration":`${M}s`,"--delay":`${u}s`,"--iteration-count":d?`${d}`:`infinite`,"--min-width":n?`auto`:`100%`}),[i,c,M,u,d,n]),I=r.useMemo(()=>({"--transform":c===`up`?`rotate(90deg)`:c===`down`?`rotate(-90deg)`:`none`}),[c]),L=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>a.default.createElement(r.Fragment,{key:t},r.Children.map(v,e=>a.default.createElement(`div`,{style:I,className:`rfm-child`},e)))),[I,v]);return E?a.default.createElement(`div`,{ref:k,style:N,className:`rfm-marquee-container `+t},f&&a.default.createElement(`div`,{style:P,className:`rfm-overlay`}),a.default.createElement(`div`,{className:`rfm-marquee`,style:F,onAnimationIteration:g,onAnimationEnd:h},a.default.createElement(`div`,{className:`rfm-initial-child-container`,ref:A},r.Children.map(v,e=>a.default.createElement(`div`,{style:I,className:`rfm-child`},e))),L(w-1)),a.default.createElement(`div`,{className:`rfm-marquee`,style:F},L(w))):null})}))(),1);function m({className:e,children:t,background:n,fade:r}){return(0,l.jsxs)(s,{className:`relative bg-[rgba(19,13,28,1)] min-h-svh`,children:[n,(0,l.jsx)(`div`,{className:`absolute inset-0 z-10 flex items-center justify-center pointer-events-none mix-blend-difference`,children:(0,l.jsx)(`div`,{className:`relative w-full px-4 sm:px-0 pointer-events-auto ${e}`,children:t})}),r?(0,l.jsx)(`div`,{className:`pointer-events-none z-10 absolute left-0 bottom-0 w-full h-full bg-linear-to-b from-black/0 to-250% to-black flex items-center justify-center`}):null]})}var h=p.default.default||p.default;function g(){return(0,l.jsxs)(`main`,{children:[(0,l.jsx)(m,{className:`flex flex-wrap justify-center sm:justify-start lg:max-w-5xl mx-4 lg:mx-0 xl:max-w-7xl gap-16`,fade:!0,background:(0,l.jsx)(u,{url:f,containerClassOverride:`absolute inset-0 z-0 w-full h-full`,loop:!0}),children:(0,l.jsxs)(`div`,{className:`md:max-w-[45%] md:pl-4 lg:pl-8`,children:[(0,l.jsx)(`h1`,{className:`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left`,children:d.heroTitle}),(0,l.jsx)(`p`,{className:`whitespace-pre-line text-center md:text-left`,children:d.heroSubtitle}),(0,l.jsxs)(`div`,{className:`flex flex-wrap mt-16 gap-4 w-full justify-center md:justify-start`,children:[(0,l.jsx)(i,{className:`w-full sm:w-fit h-16 px-8 rounded-xl bg-white text-black font-bold`,href:`/portfolio`,children:(0,l.jsx)(`p`,{children:`Portfolio`})}),(0,l.jsx)(i,{className:`w-full sm:w-fit h-16 px-8 rounded-xl border border-white bg-white/20 text-white font-bold`,href:`/contact`,children:(0,l.jsx)(`p`,{children:`Build with Us`})})]})]})}),(0,l.jsxs)(s,{className:`bg-[rgba(69,60,82,1)]`,children:[(0,l.jsx)(`h1`,{className:`text-4xl font-bold mb-8`,children:d.testTitle}),(0,l.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8 mb-8`,children:[(0,l.jsx)(`p`,{children:d.testTest}),(0,l.jsx)(r,{children:`KALDHWKJDHLWADHKJADHJHjkd`})]}),(0,l.jsxs)(`div`,{className:`flex flex-row gap-4`,children:[(0,l.jsx)(c,{colorOverride:`red`,children:`Test`}),(0,l.jsx)(c,{colorOverride:`blue`,children:`Test`}),(0,l.jsx)(c,{colorOverride:`green`,children:`Test`}),(0,l.jsx)(c,{colorOverride:`gray`,children:`Test`})]})]}),(0,l.jsxs)(s,{className:`bg-[rgba(19,13,28,1)]`,children:[(0,l.jsx)(`h1`,{className:`text-4xl font-bold mb-8`,children:d.testTitle}),(0,l.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8`,children:[(0,l.jsx)(r,{children:`KALDHWKJDHLWADHKJADHJHjkd`}),(0,l.jsx)(`p`,{children:d.testTest})]})]}),(0,l.jsxs)(s,{className:`bg-[rgba(69,60,82,1)]`,children:[(0,l.jsx)(`h1`,{className:`text-4xl font-bold mb-8 text-center`,children:d.testTitle}),(0,l.jsx)(`div`,{className:`flex flex-row gap-16`,children:(0,l.jsx)(`p`,{style:{textAlign:`center`},children:d.testTest})})]}),(0,l.jsx)(s,{className:`bg-[rgba(19,13,28,1)]`,children:(0,l.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8`,children:[(0,l.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,l.jsx)(`h1`,{className:`text-4xl font-bold`,children:d.testTitle}),(0,l.jsx)(`p`,{children:d.testTest})]}),(0,l.jsx)(r,{children:`KALDHWKJDHLWADHKJADHJHjkd`})]})}),(0,l.jsx)(s,{className:`bg-[rgba(69,60,82,1)]`,children:(0,l.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8`,children:[(0,l.jsx)(r,{children:`KALDHWKJDHLWADHKJADHJHjkd`}),(0,l.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,l.jsx)(`h1`,{className:`text-4xl font-bold`,children:d.testTitle}),(0,l.jsx)(`p`,{children:d.testTest})]})]})}),(0,l.jsx)(s,{className:`bg-[rgba(19,13,28,1)]`,children:(0,l.jsxs)(`div`,{className:`flex flex-wrap xl:flex-row gap-8 justify-center items-center`,children:[(0,l.jsx)(a,{className:`not-md:w-full not-xl:order-1 transition-all min-w-xs min-h-100 bg-linear-to-br border border-green-500 from-green-800/50 to-75% to-green-400/50`,highlight:!0,highlightOverride:`hover:shadow-green-300/50 hover:shadow-xl hover:from-green-800/50 to-75% hover:to-green-400/75`,children:e=>(0,l.jsx)(r,{className:e})}),(0,l.jsx)(a,{className:`not-md:w-full not-xl:order-3 transition-all min-w-xs min-h-100 bg-linear-to-br border border-yellow-500 from-yellow-800/50 to-75% to-yellow-400/50`,highlight:!0,highlightOverride:`hover:shadow-yellow-200/50 hover:shadow-xl hover:from-yellow-800/50 to-75% hover:to-yellow-300/75`,children:e=>(0,l.jsx)(r,{className:e})}),(0,l.jsx)(a,{className:`not-md:w-full not-xl:order-2 transition-all min-w-xs min-h-100 bg-linear-to-br border border-red-500 from-red-800/50 to-75% to-red-400/50`,highlight:!0,highlightOverride:`hover:shadow-red-300/50 hover:shadow-xl hover:from-red-800/50 to-75% hover:to-red-400/75`,children:e=>(0,l.jsx)(r,{className:e})})]})}),(0,l.jsx)(s,{className:`bg-[rgba(69,60,82,1)]`,children:(0,l.jsx)(`div`,{className:`relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]`,children:(0,l.jsx)(h,{pauseOnHover:!0,className:`w-full`,children:(0,l.jsxs)(`div`,{className:`flex`,children:[(0,l.jsx)(r,{className:`h-100 w-180 bg-gray-400 mx-2`,children:`Hey hey`}),(0,l.jsx)(r,{className:`h-100 w-180 bg-gray-400 mx-2`,children:`Hey hey`}),(0,l.jsx)(r,{className:`h-100 w-180 bg-gray-400 mx-2`,children:`Hey hey`})]})})})})]})}export{g as default};