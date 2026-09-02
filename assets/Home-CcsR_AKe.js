import{a as e,c as t,f as n,h as r,i,n as a,o,p as s,s as c,t as l}from"./index-CPiL9pxu.js";import{t as u}from"./Block-Gg1ZlK5Z.js";import{t as d}from"./Chip-DaMsZqI9.js";var f=t();function p({url:e,containerClassOverride:t,videoClassOverride:n,loop:r}){return(0,f.jsx)(`div`,{className:`overflow-hidden bg-black ${t||`shadow-2xl max-w-3xl mx-auto my-8 rounded-xl`}`,children:(0,f.jsxs)(`video`,{className:`w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full max-w-none pointer-events-none object-cover aspect-video ${n}`,loop:r,muted:!0,autoPlay:!0,playsInline:!0,children:[(0,f.jsx)(`source`,{src:e,type:`video/mp4`}),`Your browser does not support the video tag.`]},e)})}var m={heroTitle:`Engineering experiences that leave a mark`,heroSubtitle:`Here at GravenSoft, our team is committed to delivering you quality software solutions that scale.`,testTitle:`Lorem Ipsum`,testTest:`dolor sit amet, consectetur adipiscing elit. Quisque vel magna nec nulla sollicitudin consectetur.
    Donec non nisl ex. Sed sit amet libero sollicitudin, sodales orci sed, malesuada eros.Fusce nibh sapien, tincidunt
    quis dui a, luctus porta quam. Proin auctor sem non ante scelerisque luctus ac at diam. Integer erat quam, rutrum
    sed sapien molestie, iaculis scelerisque nisi. Nullam lobortis, neque sed ornare volutpat, nisi erat fringilla orci,
    ut mollis arcu ligula nec ex. Proin ex neque, vehicula ac molestie et, consectetur ac magna. Interdum et malesuada
    fames ac ante ipsum primis in faucibus. Etiam sed lobortis metus. Orci varius natoque penatibus et magnis dis parturient
    montes, nascetur ridiculus mus. Etiam facilisis urna eu purus viverra vestibulum. In eget tortor sed lectus finibus mattis.
    Nam faucibus tincidunt est at efficitur.`},h=``+new URL(`background-CR8D3S_n.mp4`,import.meta.url).href,g=r(s((e=>{function t(e){if(!e||typeof window>`u`)return;let t=document.createElement(`style`);return t.setAttribute(`type`,`text/css`),t.innerHTML=e,document.head.appendChild(t),e}Object.defineProperty(e,"__esModule",{value:!0});var r=n();function i(e){return e&&typeof e==`object`&&`default`in e?e:{default:e}}var a=i(r);t(`.rfm-marquee-container {
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
}`),e.default=r.forwardRef(function({style:e={},className:t=``,autoFill:n=!1,play:i=!0,pauseOnHover:o=!1,pauseOnClick:s=!1,direction:c=`left`,speed:l=50,delay:u=0,loop:d=0,gradient:f=!1,gradientColor:p=`white`,gradientWidth:m=200,onFinish:h,onCycleComplete:g,onMount:_,children:v},y){let[b,x]=r.useState(0),[S,C]=r.useState(0),[w,T]=r.useState(1),[E,D]=r.useState(!1),O=r.useRef(null),k=y||O,A=r.useRef(null),j=r.useCallback(()=>{if(A.current&&k.current){let e=k.current.getBoundingClientRect(),t=A.current.getBoundingClientRect(),r=e.width,i=t.width;(c===`up`||c===`down`)&&(r=e.height,i=t.height),T(n&&r&&i&&i<r?Math.ceil(r/i):1),x(r),C(i)}},[n,k,c]);r.useEffect(()=>{if(E&&(j(),A.current&&k.current)){let e=new ResizeObserver(()=>j());return e.observe(k.current),e.observe(A.current),()=>{e&&e.disconnect()}}},[j,k,E]),r.useEffect(()=>{j()},[j,v]),r.useEffect(()=>{D(!0)},[]),r.useEffect(()=>{typeof _==`function`&&_()},[]);let M=r.useMemo(()=>n?S*w/l:S<b?b/l:S/l,[n,b,S,w,l]),N=r.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!i||o?`paused`:`running`,"--pause-on-click":!i||o&&!s||s?`paused`:`running`,"--width":c===`up`||c===`down`?`100vh`:`100%`,"--transform":c===`up`?`rotate(-90deg)`:c===`down`?`rotate(90deg)`:`none`}),[e,i,o,s,c]),P=r.useMemo(()=>({"--gradient-color":p,"--gradient-width":typeof m==`number`?`${m}px`:m}),[p,m]),F=r.useMemo(()=>({"--play":i?`running`:`paused`,"--direction":c===`left`?`normal`:`reverse`,"--duration":`${M}s`,"--delay":`${u}s`,"--iteration-count":d?`${d}`:`infinite`,"--min-width":n?`auto`:`100%`}),[i,c,M,u,d,n]),I=r.useMemo(()=>({"--transform":c===`up`?`rotate(90deg)`:c===`down`?`rotate(-90deg)`:`none`}),[c]),L=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>a.default.createElement(r.Fragment,{key:t},r.Children.map(v,e=>a.default.createElement(`div`,{style:I,className:`rfm-child`},e)))),[I,v]);return E?a.default.createElement(`div`,{ref:k,style:N,className:`rfm-marquee-container `+t},f&&a.default.createElement(`div`,{style:P,className:`rfm-overlay`}),a.default.createElement(`div`,{className:`rfm-marquee`,style:F,onAnimationIteration:g,onAnimationEnd:h},a.default.createElement(`div`,{className:`rfm-initial-child-container`,ref:A},r.Children.map(v,e=>a.default.createElement(`div`,{style:I,className:`rfm-child`},e))),L(w-1)),a.default.createElement(`div`,{className:`rfm-marquee`,style:F},L(w))):null})}))(),1);function _({className:e,children:t,background:n,fade:r}){return(0,f.jsxs)(u,{className:`relative bg-[rgba(19,13,28,1)] min-h-svh`,children:[n,r?(0,f.jsx)(`div`,{className:`pointer-events-none z-10 absolute left-0 bottom-0 w-full h-full bg-linear-to-b from-black/0 to-100% to-black/75 flex items-center justify-center`}):null,(0,f.jsx)(`div`,{className:`absolute inset-0 z-10 flex items-center justify-center pointer-events-none`,children:(0,f.jsx)(`div`,{className:`relative w-full sm:px-0 pointer-events-auto drop-shadow-black/50 drop-shadow-lg ${e}`,children:t})})]})}function v(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=v(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function y(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=v(e))&&(r&&(r+=` `),r+=t);return r}function b(...t){return e(y(t))}function x({className:e,style:t,colors:n=[`#FF5733`,`#33FF57`,`#3357FF`,`#F1C40F`],mode:r=`rotate`,blur:i=`medium`,transition:a,scale:o=1,duration:s=5}){let c={repeat:1/0,duration:s,ease:`linear`},u={rotate:{background:[`conic-gradient(from 0deg at 50% 50%, ${n.join(`, `)})`,`conic-gradient(from 360deg at 50% 50%, ${n.join(`, `)})`],transition:{...a??c}},pulse:{background:n.map(e=>`radial-gradient(circle at 50% 50%, ${e} 0%, transparent 100%)`),scale:[1*o,1.1*o,1*o],opacity:[.5,.8,.5],transition:{...a??{...c,repeatType:`mirror`}}},breathe:{background:[...n.map(e=>`radial-gradient(circle at 50% 50%, ${e} 0%, transparent 100%)`)],scale:[1*o,1.05*o,1*o],transition:{...a??{...c,repeatType:`mirror`}}},colorShift:{background:n.map((e,t)=>`conic-gradient(from 0deg at 50% 50%, ${e} 0%, ${n[(t+1)%n.length]} 50%, ${e} 100%)`),transition:{...a??{...c,repeatType:`mirror`}}},flowHorizontal:{background:n.map(e=>`linear-gradient(to right, ${e}, ${n[(n.indexOf(e)+1)%n.length]})`),transition:{...a??{...c,repeatType:`mirror`}}},static:{background:`linear-gradient(to right, ${n.join(`, `)})`}},d=e=>typeof e==`number`?`blur-[${e}px]`:{softest:`blur-xs`,soft:`blur-sm`,medium:`blur-md`,strong:`blur-lg`,stronger:`blur-xl`,strongest:`blur-xl`,none:`blur-none`}[e];return(0,f.jsx)(l.div,{style:{...t,"--scale":o,willChange:`transform`,backfaceVisibility:`hidden`},animate:u[r],className:b(`pointer-events-none absolute inset-0 h-full w-full`,`scale-(--scale) transform-gpu`,d(i),e)})}var S=g.default.default||g.default;function C(){return c(`Home | GravenSoft`),(0,f.jsxs)(`main`,{children:[(0,f.jsx)(_,{className:`flex flex-wrap justify-center lg:justify-start lg:max-w-5xl mx-8 lg:mx-0 xl:max-w-7xl gap-16`,fade:!0,background:(0,f.jsx)(p,{url:h,containerClassOverride:`absolute inset-0 z-0 w-full h-full`,loop:!0}),children:(0,f.jsxs)(`div`,{className:`md:w-xl lg:px-8`,children:[(0,f.jsx)(`h1`,{className:`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left`,children:m.heroTitle}),(0,f.jsx)(`p`,{className:`whitespace-pre-line text-center md:text-left`,children:m.heroSubtitle}),(0,f.jsxs)(`div`,{className:`flex flex-wrap mt-16 gap-4 w-full justify-center md:justify-start`,children:[(0,f.jsxs)(`div`,{className:`z-10 group relative transition-transform origin-center hover:scale-95 w-full sm:w-fit rounded-xl`,children:[(0,f.jsx)(x,{className:`absolute inset-0 group-hover:hidden pointer-events-none z-0`,colors:[`#FF5733`,`#33FF57`,`#3357FF`,`#F1C40F`],mode:`colorShift`,blur:`soft`,duration:2,scale:1.01}),(0,f.jsx)(o,{href:`/contact`,className:`relative z-10 w-full sm:w-fit h-16 px-8 rounded-xl bg-white text-black font-bold hover:bg-zinc-950 hover:text-white`,children:`Build with Us`})]}),(0,f.jsx)(o,{className:`transition-transform origin-center hover:scale-95 w-full sm:w-fit h-16 px-8 rounded-xl border border-white bg-white/20 text-white font-bold hover:bg-white hover:text-black`,href:`/portfolio`,children:(0,f.jsx)(`p`,{children:`Portfolio`})})]})]})}),(0,f.jsxs)(u,{className:`bg-zinc-950`,children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold mb-8`,children:m.testTitle}),(0,f.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8 mb-8`,children:[(0,f.jsx)(`p`,{children:m.testTest}),(0,f.jsx)(i,{children:`KALDHWKJDHLWADHKJADHJHjkd`})]}),(0,f.jsxs)(`div`,{className:`flex flex-row gap-4`,children:[(0,f.jsx)(d,{colorOverride:`red`,children:`Test`}),(0,f.jsx)(d,{colorOverride:`blue`,children:`Test`}),(0,f.jsx)(d,{colorOverride:`green`,children:`Test`}),(0,f.jsx)(d,{colorOverride:`gray`,children:`Test`})]})]}),(0,f.jsxs)(u,{className:`bg-zinc-950`,children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold mb-8`,children:m.testTitle}),(0,f.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8`,children:[(0,f.jsx)(i,{children:`KALDHWKJDHLWADHKJADHJHjkd`}),(0,f.jsx)(`p`,{children:m.testTest})]})]}),(0,f.jsxs)(u,{className:`bg-zinc-900`,children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold mb-8 text-center`,children:m.testTitle}),(0,f.jsx)(`div`,{className:`flex flex-row gap-16`,children:(0,f.jsx)(`p`,{style:{textAlign:`center`},children:m.testTest})})]}),(0,f.jsxs)(u,{className:`bg-zinc-950 flex`,children:[(0,f.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8 mb-24`,children:[(0,f.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold`,children:m.testTitle}),(0,f.jsx)(`p`,{children:m.testTest})]}),(0,f.jsx)(i,{children:`KALDHWKJDHLWADHKJADHJHjkd`})]}),(0,f.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-8`,children:[(0,f.jsx)(i,{children:`KALDHWKJDHLWADHKJADHJHjkd`}),(0,f.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,f.jsx)(`h1`,{className:`text-4xl font-bold`,children:m.testTitle}),(0,f.jsx)(`p`,{children:m.testTest})]})]})]}),(0,f.jsx)(u,{className:`bg-zinc-900`,children:(0,f.jsxs)(`div`,{className:`flex flex-col xl:flex-row w-full gap-8 justify-center items-center`,children:[(0,f.jsx)(a,{className:`w-full xl:w-xs xl:order-2 mx-8 xl:mx-auto transition-all min-h-100 xl:min-h-110 bg-linear-to-br border border-yellow-500 from-yellow-800/50 to-75% to-yellow-400/50`,translate:!1,highlight:!0,highlightOverride:`md:hover:shadow-yellow-200/50 md:hover:shadow-xl md:hover:from-yellow-800/50 to-75% md:hover:to-yellow-200/50`}),(0,f.jsx)(a,{className:`w-full xl:w-xs xl:order-3 mx-8 xl:mx-auto transition-all min-h-100 bg-linear-to-br border border-red-500 from-red-800/50 to-75% to-red-400/50`,translate:!1,highlight:!0,highlightOverride:`md:hover:shadow-red-300/50 md:hover:shadow-xl md:hover:from-red-800/50 to-75% md:hover:to-red-300/50`}),(0,f.jsx)(a,{className:`w-full xl:w-xs xl:order-1 mx-8 xl:mx-auto transition-all min-h-100 bg-linear-to-br border border-green-500 from-green-800/50 to-75% to-green-400/50`,translate:!1,highlight:!0,highlightOverride:`md:hover:shadow-green-300/50 md:hover:shadow-xl md:hover:from-green-800/50 to-75% md:hover:to-green-300/50`})]})}),(0,f.jsx)(u,{className:`bg-zinc-950`,children:(0,f.jsx)(`div`,{className:`relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]`,children:(0,f.jsx)(S,{pauseOnHover:!0,className:`w-full`,children:(0,f.jsxs)(`div`,{className:`flex`,children:[(0,f.jsx)(i,{className:`h-100 w-180 bg-zinc-400 mx-2`,children:`Hey hey`}),(0,f.jsx)(i,{className:`h-100 w-180 bg-zinc-400 mx-2`,children:`Hey hey`}),(0,f.jsx)(i,{className:`h-100 w-180 bg-zinc-400 mx-2`,children:`Hey hey`})]})})})})]})}export{C as default};