import{i as e,n as t,r as n,t as r}from"./index-q9O97V35.js";import{t as i}from"./Block-D9JRKAQI.js";var a=r();function o({children:e,classOverride:t=`bg-gray-400`}){return(0,a.jsx)(`div`,{className:`rounded-2xl ${t}`,children:e})}function s({children:e,classOverride:t,translate:n,highlight:r,translateOverride:i=`hover:-translate-y-4`,highlightOverride:s}){return(0,a.jsx)(o,{classOverride:`${n?i:``} ${r?s:``} duration-75 ${t}`,children:e})}function c({url:e,containerClassOverride:t,videoClassOverride:n,loop:r}){return(0,a.jsx)(`div`,{className:`overflow-hidden bg-black ${t||`shadow-2xl max-w-3xl mx-auto my-8 rounded-xl`}`,children:(0,a.jsxs)(`video`,{className:`w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full max-w-none pointer-events-none object-cover aspect-video ${n}`,loop:r,muted:!0,autoPlay:!0,playsInline:!0,children:[(0,a.jsx)(`source`,{src:e,type:`video/mp4`}),`Your browser does not support the video tag.`]},e)})}var l={heroTitle:`Engineering experiences that leave a mark...`,heroSubtitle:`
in your hearts?

Maybe.

Here at GravenSoft, our team is commmitted to delivering you quality software solutions that scale.`,testTitle:`Lorem Ipsum`,testTest:`dolor sit amet, consectetur adipiscing elit. Quisque vel magna nec nulla sollicitudin consectetur.
    Donec non nisl ex. Sed sit amet libero sollicitudin, sodales orci sed, malesuada eros.Fusce nibh sapien, tincidunt
    quis dui a, luctus porta quam. Proin auctor sem non ante scelerisque luctus ac at diam. Integer erat quam, rutrum
    sed sapien molestie, iaculis scelerisque nisi. Nullam lobortis, neque sed ornare volutpat, nisi erat fringilla orci,
    ut mollis arcu ligula nec ex. Proin ex neque, vehicula ac molestie et, consectetur ac magna. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Etiam sed lobortis metus. Orci varius natoque penatibus et magnis dis parturient
    montes, nascetur ridiculus mus. Etiam facilisis urna eu purus viverra vestibulum. In eget tortor sed lectus finibus mattis.
    Nam faucibus tincidunt est at efficitur.`},u=``+new URL(`background-CR8D3S_n.mp4`,import.meta.url).href,d={red:`border-red-400 text-grey-100 bg-red-500/25`,blue:`border-blue-400 text-grey-100 bg-blue-500/25`,green:`border-green-400 text-grey-100 bg-green-500/25`,gray:`border-gray-400 text-grey-100 bg-gray-500/25`};function f({children:e,classOverride:t,colorOverride:n=`gray`}){let r=d[n]||d.gray;return(0,a.jsxs)(`div`,{className:`border rounded-full flex justify-center w-fit px-2 pr-3 gap-2 ${r} ${t} items-center`,children:[(0,a.jsx)(`div`,{className:`border w-2 h-2 rounded-full ${r}`}),e]})}var p=e(n((e=>{function n(e){if(!e||typeof window>`u`)return;let t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.innerHTML=e,document.head.appendChild(t),e}Object.defineProperty(e,"__esModule",{value:!0});var r=t();function i(e){return e&&typeof e==`object`&&`default`in e?e:{default:e}}var a=i(r);n(`.rfm-marquee-container {
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
}`),e.default=r.forwardRef(function({style:e={},className:t=``,autoFill:n=!1,play:i=!0,pauseOnHover:o=!1,pauseOnClick:s=!1,direction:c=`left`,speed:l=50,delay:u=0,loop:d=0,gradient:f=!1,gradientColor:p=`white`,gradientWidth:m=200,onFinish:h,onCycleComplete:g,onMount:_,children:v},y){let[b,x]=r.useState(0),[S,C]=r.useState(0),[w,T]=r.useState(1),[E,D]=r.useState(!1),O=r.useRef(null),k=y||O,A=r.useRef(null),j=r.useCallback(()=>{if(A.current&&k.current){let e=k.current.getBoundingClientRect(),t=A.current.getBoundingClientRect(),r=e.width,i=t.width;(c===`up`||c===`down`)&&(r=e.height,i=t.height),T(n&&r&&i&&i<r?Math.ceil(r/i):1),x(r),C(i)}},[n,k,c]);r.useEffect(()=>{if(E&&(j(),A.current&&k.current)){let e=new ResizeObserver(()=>j());return e.observe(k.current),e.observe(A.current),()=>{e&&e.disconnect()}}},[j,k,E]),r.useEffect(()=>{j()},[j,v]),r.useEffect(()=>{D(!0)},[]),r.useEffect(()=>{typeof _==`function`&&_()},[]);let M=r.useMemo(()=>n?S*w/l:S<b?b/l:S/l,[n,b,S,w,l]),N=r.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!i||o?`paused`:`running`,"--pause-on-click":!i||o&&!s||s?`paused`:`running`,"--width":c===`up`||c===`down`?`100vh`:`100%`,"--transform":c===`up`?`rotate(-90deg)`:c===`down`?`rotate(90deg)`:`none`}),[e,i,o,s,c]),P=r.useMemo(()=>({"--gradient-color":p,"--gradient-width":typeof m==`number`?`${m}px`:m}),[p,m]),F=r.useMemo(()=>({"--play":i?`running`:`paused`,"--direction":c===`left`?`normal`:`reverse`,"--duration":`${M}s`,"--delay":`${u}s`,"--iteration-count":d?`${d}`:`infinite`,"--min-width":n?`auto`:`100%`}),[i,c,M,u,d,n]),I=r.useMemo(()=>({"--transform":c===`up`?`rotate(90deg)`:c===`down`?`rotate(-90deg)`:`none`}),[c]),L=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>a.default.createElement(r.Fragment,{key:t},r.Children.map(v,e=>a.default.createElement(`div`,{style:I,className:`rfm-child`},e)))),[I,v]);return E?a.default.createElement(`div`,{ref:k,style:N,className:`rfm-marquee-container `+t},f&&a.default.createElement(`div`,{style:P,className:`rfm-overlay`}),a.default.createElement(`div`,{className:`rfm-marquee`,style:F,onAnimationIteration:g,onAnimationEnd:h},a.default.createElement(`div`,{className:`rfm-initial-child-container`,ref:A},r.Children.map(v,e=>a.default.createElement(`div`,{style:I,className:`rfm-child`},e))),L(w-1)),a.default.createElement(`div`,{className:`rfm-marquee`,style:F},L(w))):null})}))(),1),m=p.default.default||p.default;function h(){return(0,a.jsxs)(`main`,{children:[(0,a.jsx)(`title`,{children:`Home | Gravensoft`}),(0,a.jsxs)(i,{classOverride:`relative bg-[rgba(19,13,28,1)] min-h-[100svh]`,children:[(0,a.jsxs)(`div`,{className:`relative z-10 text-white mix-blend-difference`,children:[(0,a.jsx)(`h1`,{className:`text-4xl font-bold `,children:l.heroTitle}),(0,a.jsx)(`p`,{style:{whiteSpace:`pre-line`},className:`mt-4`,children:l.heroSubtitle})]}),(0,a.jsx)(`div`,{className:`pointer-events-none z-1 absolute left-0 bottom-0 w-full h-full bg-linear-to-b from-black/0 to-250% to-black flex items-center justify-center`}),(0,a.jsx)(c,{url:u,containerClassOverride:`absolute inset-0 z-0 w-full h-full`,loop:!0})]}),(0,a.jsxs)(i,{classOverride:`bg-[rgba(69,60,82,1)]`,children:[(0,a.jsx)(`h1`,{className:`text-4xl font-bold mb-8`,children:l.testTitle}),(0,a.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8 mb-8`,children:[(0,a.jsx)(`p`,{children:l.testTest}),(0,a.jsx)(o,{children:`KALDHWKJDHLWADHKJADHJHjkd`})]}),(0,a.jsxs)(`div`,{className:`flex flex-row gap-4`,children:[(0,a.jsx)(f,{colorOverride:`red`,children:`Test`}),(0,a.jsx)(f,{colorOverride:`blue`,children:`Test`}),(0,a.jsx)(f,{colorOverride:`green`,children:`Test`}),(0,a.jsx)(f,{colorOverride:`gray`,children:`Test`})]})]}),(0,a.jsxs)(i,{classOverride:`bg-[rgba(19,13,28,1)]`,children:[(0,a.jsx)(`h1`,{className:`text-4xl font-bold mb-8`,children:l.testTitle}),(0,a.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8`,children:[(0,a.jsx)(o,{children:`KALDHWKJDHLWADHKJADHJHjkd`}),(0,a.jsx)(`p`,{children:l.testTest})]})]}),(0,a.jsxs)(i,{classOverride:`bg-[rgba(69,60,82,1)]`,children:[(0,a.jsx)(`h1`,{className:`text-4xl font-bold mb-8 text-center`,children:l.testTitle}),(0,a.jsx)(`div`,{className:`flex flex-row gap-16`,children:(0,a.jsx)(`p`,{style:{textAlign:`center`},children:l.testTest})})]}),(0,a.jsx)(i,{classOverride:`bg-[rgba(19,13,28,1)]`,children:(0,a.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8`,children:[(0,a.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,a.jsx)(`h1`,{className:`text-4xl font-bold`,children:l.testTitle}),(0,a.jsx)(`p`,{children:l.testTest})]}),(0,a.jsx)(o,{children:`KALDHWKJDHLWADHKJADHJHjkd`})]})}),(0,a.jsx)(i,{classOverride:`bg-[rgba(69,60,82,1)]`,children:(0,a.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8`,children:[(0,a.jsx)(o,{children:`KALDHWKJDHLWADHKJADHJHjkd`}),(0,a.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,a.jsx)(`h1`,{className:`text-4xl font-bold`,children:l.testTitle}),(0,a.jsx)(`p`,{children:l.testTest})]})]})}),(0,a.jsx)(i,{classOverride:`bg-[rgba(19,13,28,1)]`,children:(0,a.jsxs)(`div`,{className:`flex flex-col lg:flex-row gap-8 justify-between items-center`,children:[(0,a.jsx)(s,{classOverride:`transition-all min-w-xs min-h-100 bg-linear-to-br border-1 border-green-500 from-green-800/50 to-75% to-green-400/50`,translate:!0,highlight:!0,highlightOverride:`hover:shadow-green-300/50 hover:shadow-xl hover:from-green-800/50 to-75% hover:to-green-300/50`,children:`Basic`}),(0,a.jsx)(s,{classOverride:`transition-all min-w-xs min-h-110 bg-linear-to-br border-1 border-yellow-500 from-yellow-800/50 to-75% to-yellow-400/50`,translate:!0,highlight:!0,highlightOverride:`hover:shadow-yellow-200/50 hover:shadow-xl hover:from-yellow-800/50 to-75% hover:to-yellow-200/50`,children:`Premium`}),(0,a.jsx)(s,{classOverride:`transition-all min-w-xs min-h-100 bg-linear-to-br border-1 border-red-500 from-red-800/50 to-75% to-red-400/50`,translate:!0,highlight:!0,highlightOverride:`hover:shadow-red-300/50 hover:shadow-xl hover:from-red-800/50 to-75% hover:to-red-300/50`,children:`Pro`})]})}),(0,a.jsx)(i,{classOverride:`bg-[rgba(69,60,82,1)]`,borderVisible:!1,children:(0,a.jsx)(`div`,{className:`relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]`,children:(0,a.jsx)(m,{pauseOnHover:!0,className:`w-full`,children:(0,a.jsxs)(`div`,{className:`flex`,children:[(0,a.jsx)(o,{classOverride:`h-100 w-180 bg-gray-400 mx-2`,children:`Hey hey`}),(0,a.jsx)(o,{classOverride:`h-100 w-180 bg-gray-400 mx-2`,children:`Hey hey`}),(0,a.jsx)(o,{classOverride:`h-100 w-180 bg-gray-400 mx-2`,children:`Hey hey`})]})})})})]})}export{h as default};