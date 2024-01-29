(()=>{"use strict";var e,t,i,r={385:(e,t,i)=>{var r=i(893),o=i(745),s=i(655),n=i(133),a=i(250),l=i(294);const d=(0,l.createContext)(null),c=e=>{const[t,i]=(0,l.useState)("/game-view"),[o,s]=(0,l.useState)(""),n={pathname:t,hash:"",search:"",lang:o,setPath:i,setLang:s},a=(0,l.useMemo)((()=>n),[JSON.stringify(n)]);return(0,r.jsx)(d.Provider,Object.assign({value:a},{children:e.children}))},h=(i.p,(0,n.vJ)((({theme:e})=>n.iv`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 16px;
    }
    body {
      font-size: ${e.fontSize.body};
      height: 100vh;
      width: 100vw;
      max-height: 100vh;
      max-width: 100vw;
      overflow: hidden;
    }
    html,
    body {
      font-family: 'Quicksand', sans-serif;
      color: ${e.colors.text1};
      font-weight: 500;
    }
    h1 {
      font-size: ${e.fontSize.h1};
    }
    h2 {
      font-size: ${e.fontSize.h2};
    }
    h3 {
      font-size: ${e.fontSize.h3};
    }
    h4 {
      font-size: ${e.fontSize.h4};
    }
    h5 {
      font-size: ${e.fontSize.h5};
    }
    h6 {
      font-size: ${e.fontSize.h6};
    }
    p {
      font-size: ${e.fontSize.body};
      max-width: ${e.size(200)};
    }
    ul {
      list-style: none;
    }
    a {
      color: unset;
      text-decoration: underline;
    }
    button,
    select {
      font-family: 'Quicksand', sans-serif;
      font-weight: 600;
      min-height: ${e.size(8)};
      display: flex;
      align-items: center;
      gap: ${e.size(1)};
      padding: 0 ${e.size(2)};
      background-color: transparent;
      outline: none;
      border: none;
      border-radius: ${e.radius.verySmall};
      cursor: pointer;
    }
    div::-webkit-scrollbar {
      width: ${e.size(2)};
    }
    div::-webkit-scrollbar-track {
      background: #0000;
    }
    div::-webkit-scrollbar-thumb {
      background: ${e.colors.gray};
      border-radius: 2px;
    }
    div::-webkit-scrollbar-thumb:hover {
      background: ${e.colors.main};
    }
    #root {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  `))),u="#ab47bc",m="#0d47a1",x="#fafafa",g="#eeeeee",p="#e0e0e0",f="#bdbdbd",b="#9e9e9e",v="#757575",j="#141414",y={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:"#8e24aa",mainBg:"#7b1fa2",bg1:x,bg2:"#f5f5f5",bg3:g,bg4:p,text1:"#212121",text2:"#424242",text3:"#616161",text4:b,gray:b,yellow:"#B38600",red:"#CA3521",blue:"#388BFF",green:"#558b2f",white:x,black:j},fontSize:{h1:"1.3rem",h2:"1.25rem",h3:"1.2rem",h4:"1.15rem",h5:"1.1rem",h6:"1.05rem",body:"1rem",label:"0.9rem",small:"0.95rem",verySmall:"0.85rem"},shadow:{low:"2px 2px 3x 1px #0004",medium:"2px 2px 3px 1px #0006",high:"2px 2px 3px 1px #0008"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},$=Object.assign(Object.assign({},y),{colors:Object.assign(Object.assign({},y.colors),{bg1:j,bg2:j+"88",bg3:j+"66",bg4:j+"44",text1:g,text2:p,text3:f,text4:b,gray:v,white:p})}),w=(0,l.createContext)(null),z=e=>{const[t,i]=(0,l.useState)(""),[o,s]=(0,l.useState)(0),[n,a]=(0,l.useState)(0),d={gameId:t,gameCategory:o,gamePlatform:n,setGameId:i,setGameCategory:s,setGamePlatform:a},c=(0,l.useMemo)((()=>d),[JSON.stringify(d)]);return(0,r.jsx)(w.Provider,Object.assign({value:c},{children:e.children}))},P=()=>(0,l.useContext)(w);i.p;var S=function(e,t,i,r){return new(i||(i=Promise))((function(o,s){function n(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}l((r=r.apply(e,t||[])).next())}))};let k={games:[],categories:[],platforms:[]};const O=()=>S(void 0,void 0,void 0,(function*(){try{k=yield(yield fetch("https://klessitonrodrigues.github.io/game-finder/assets/json/games.json")).json();const{categories:e,platforms:t}=k;return{categories:e,platforms:t}}catch(e){console.error(e)}})),Z=e=>e.check?e.true||e.children:e.false;var C=i(279);const M={download:(0,r.jsx)(C.HA8,{}),selector:(0,r.jsx)(C.ZaQ,{}),spinner:(0,r.jsx)(C.H4p,{}),next:(0,r.jsx)(C.U4K,{}),previous:(0,r.jsx)(C._L$,{}),youtube:(0,r.jsx)(C.pzF,{}),star:(0,r.jsx)(C.Kz,{}),starLine:(0,r.jsx)(C.u20,{}),category:(0,r.jsx)(C.yTT,{}),platform:(0,r.jsx)(C.pa0,{}),screenshot:(0,r.jsx)(C.QVH,{}),date:(0,r.jsx)(C.FVH,{}),list:(0,r.jsx)(C.dR_,{}),search:(0,r.jsx)(C.t2h,{})},F=n.ZP.span((({theme:e,size:t})=>n.iv`
    display: inline-flex;
    font-size: ${e.size(t||7)};
    cursor: pointer;
  `)),N=e=>{const{type:t,size:i,style:o,onPress:s}=e,n=(0,l.useMemo)((()=>M[t]),[]);return(0,r.jsx)(F,Object.assign({className:"icon",size:i,style:o,onClick:s},{children:n}))},_=(n.F4`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`,n.F4`
    from {transform: translateY(18rem); opacity: 0} 
    to {opacity: 1}
`),L=(n.F4`
   from {opacity: 0}
   to {opacity: 1}
`,n.F4`
   to {transform: rotateZ(360deg);}
`),E=_,T=L,G=n.ZP.div((()=>n.iv``)),I=n.ZP.div((()=>n.iv`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000b;
    backdrop-filter: blur(10px);
    z-index: 2;
  `)),R=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.size(8)};
    animation: ${T} 0.8s infinite linear;
    color: ${e.colors.white};
  `)),B=n.ZP.h1((({theme:e})=>n.iv`
    font-size: ${e.fontSize.label};
    margin-bottom: ${e.size(2)};
    animation: ${E} 0.5s ease-out;
    color: ${e.colors.white};
  `)),J=n.ZP.p((({theme:e})=>n.iv`
    font-size: ${e.fontSize.verySmall};
    animation: ${E} 0.5s ease-out;
    color: ${e.colors.white};
  `)),A=e=>{const{show:t,type:i,title:o,description:s}=e;return(0,r.jsxs)(G,{children:[(0,r.jsx)(Z,Object.assign({check:t&&"icon"===i},{children:(0,r.jsx)(R,{children:(0,r.jsx)(N,{type:"spinner",size:12})})})),(0,r.jsx)(Z,Object.assign({check:t&&"fullScreen"===i},{children:(0,r.jsxs)(I,{children:[(0,r.jsx)(R,{children:(0,r.jsx)(N,{type:"spinner",size:12})}),(0,r.jsx)(B,{children:o}),(0,r.jsx)(J,{children:s})]})}))]})},H=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    height: 100%;
    max-width: ${e.size(400)};
    overflow-y: auto;
    margin: auto;
  `)),Y=e=>(0,r.jsx)(H,{children:e.children}),q=i.p+"assets/8a053447441c68af83e1.jpg",Q=(n.ZP.div((()=>n.iv`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${q});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
  `)),n.ZP.div((()=>n.iv`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(35deg, ${m}, ${u});
    background-size: 100% 100%;
    z-index: -1;
  `))),V=n.ZP.ol((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    padding: ${e.size(3)} ${e.size(4)};
    margin: ${e.size(4)};
    background-color: ${e.colors.bg3};
    border-radius: ${e.radius.large};
    color: ${e.colors.text1};
    box-shadow: ${e.shadow.medium};
    font-size: ${e.fontSize.label};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: ${e.colors.bg2};
    }
  `)),K=(0,l.createContext)(null),U=e=>{const[t,i]=(0,l.useState)(0),[o,s]=(0,l.useState)(0),[n,a]=(0,l.useState)(0),[d,c]=(0,l.useState)(0),[h,u]=(0,l.useState)(0),[m,x]=(0,l.useState)([]),[g,p]=(0,l.useState)([]),f={categories:m,platforms:g,setPlatforms:p,setCategories:x};(0,l.useEffect)((()=>{O().then((e=>{x(e.categories),p(e.platforms)}))}),[]);const b=(0,l.useMemo)((()=>f),[JSON.stringify(f)]);return(0,r.jsx)(K.Provider,Object.assign({value:b},{children:e.children}))},W=()=>(0,l.useContext)(K),D=1024,X=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    padding: ${e.size(4)};
    gap: ${e.size(4)};

    @media (max-width: ${D}px) {
      flex-direction: column;
    }
  `)),ee=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${e.size(2)};
    padding: ${e.size(4)};
    background-color: ${e.colors.bg2};
    backdrop-filter: blur(4px);
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.high};
    color: ${e.colors.text2};
    box-shadow: ${e.shadow.high};
  `)),te=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    width: 100%;

    @media (max-width: ${768}px) {
      width: 100%;
      flex-direction: column;
    }
  `)),ie=n.ZP.label((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)} ${e.size(3)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    border-radius: ${e.radius.medium};
    background-color: ${e.colors.bg3};
    color: ${e.colors.text2};
    box-shadow: ${e.shadow.medium};

    &:hover {
      background-color: ${e.colors.bg2};
    }
  `)),re=n.ZP.div((()=>n.iv`
    min-width: max-content;
  `)),oe=n.ZP.input((({theme:e})=>n.iv`
    width: 100%;
    padding-left: ${e.size(2)};
    padding-top: ${e.size(.5)};
    font-size: ${e.fontSize.body};
    font-weight: bold;
    border: none;
    background-color: transparent;
    color: ${e.colors.text1};
  `)),se=n.ZP.label((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)} ${e.size(3)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    background-color: ${e.colors.bg3};
    color: ${e.colors.text2};
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.medium};

    &:hover {
      background-color: ${e.colors.bg2};
    }
  `)),ne=n.ZP.select((({theme:e})=>n.iv`
    width: 100%;
    color: ${e.colors.text1};
    font-family: sans-serif;
    font-size: ${e.fontSize.body};
    padding-left: ${e.size(2)};
    padding-top: ${e.size(.5)};

    &::-webkit-scrollbar {
      width: ${e.size(2)};
    }

    &::-webkit-scrollbar-track {
      background: ${e.colors.bg1};
    }

    &::-webkit-scrollbar-thumb {
      background: ${e.colors.gray};
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${e.colors.white};
    }
  `)),ae=n.ZP.div((()=>n.iv`
    min-width: max-content;
  `)),le=n.ZP.option((({theme:e})=>n.iv`
    background-color: ${e.colors.bg1};
    color: ${e.colors.text1};
  `)),de=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${e.size(4)};
    padding: ${e.size(4)};
    max-width: ${e.size(300)};
    margin: auto;
  `)),ce=(n.ZP.button((({theme:e})=>n.iv`
    display: flex;
    padding: ${e.size(2)} ${e.size(4)};
    margin: ${e.size(4)};
    background-color: ${e.colors.bg3};
    border-radius: ${e.radius.large};
    color: ${e.colors.text1};
    font-size: ${e.size(8)};

    &:hover {
      background-color: ${e.colors.bg2};
    }
  `)),()=>{const{gameCategory:e,gamePlatform:t,setGameCategory:i,setGamePlatform:o,setGameId:s}=P(),{categories:n,platforms:a}=W(),[d,c]=(0,l.useState)(""),h=(0,l.useMemo)((()=>a.map(((e,t)=>(0,r.jsx)(le,Object.assign({value:t},{children:e}))))),[a]),u=(0,l.useMemo)((()=>{const e=[],t=[];return n.forEach(((i,r)=>{const{t:o,n:s}=JSON.parse(i);e.includes(o)||e.push(o),""!==d&&d!==o||t.push({i:r,name:s})})),{types:e,items:t}}),[n,d]),m=(0,l.useMemo)((()=>u.types.map((e=>(0,r.jsx)(le,Object.assign({value:e},{children:e}))))),[n]),x=(0,l.useMemo)((()=>u.items.map((e=>(0,r.jsx)(le,Object.assign({value:e.i},{children:e.name}))))),[n,d]);return(0,r.jsxs)(de,{children:[(0,r.jsxs)(te,{children:[(0,r.jsxs)(se,{children:[(0,r.jsx)(N,{type:"category"}),(0,r.jsx)(ae,{children:"Category Type"}),(0,r.jsx)(ne,Object.assign({value:d,onChange:e=>c(e.target.value)},{children:m}))]}),(0,r.jsxs)(se,{children:[(0,r.jsx)(N,{type:"category"}),(0,r.jsx)(ae,{children:"Category"}),(0,r.jsx)(ne,Object.assign({value:e,onChange:e=>i(Number(e.target.value))},{children:x}))]})]}),(0,r.jsxs)(te,{children:[(0,r.jsxs)(ie,{children:[(0,r.jsx)(N,{type:"date"}),(0,r.jsx)(re,{children:"From Year"}),(0,r.jsx)(oe,{type:"number",value:"2023"})]}),(0,r.jsxs)(ie,{children:[(0,r.jsx)(N,{type:"date"}),(0,r.jsx)(re,{children:"To Year"}),(0,r.jsx)(oe,{type:"number",value:"2023"})]})]}),(0,r.jsxs)(te,{children:[(0,r.jsxs)(se,{children:[(0,r.jsx)(N,{type:"platform"}),(0,r.jsx)(ae,{children:"Platform"}),(0,r.jsx)(ne,Object.assign({value:t,onChange:e=>o(Number(e.target.value))},{children:h}))]}),(0,r.jsxs)(se,{children:[(0,r.jsx)(N,{type:"list"}),(0,r.jsx)(ae,{children:"List Format"}),(0,r.jsxs)(ne,Object.assign({value:t,onChange:e=>o(Number(e.target.value))},{children:[(0,r.jsx)(le,{children:"Ordered"}),(0,r.jsx)(le,{children:"Random"})]}))]})]}),(0,r.jsxs)(V,Object.assign({onClick:()=>s(((e,t)=>{try{const{games:i}=k,r=i.filter((i=>{const{g:r,p:o}=i;return!(!(null==r?void 0:r.includes(e))||!(null==o?void 0:o.includes(t)))})),o=Number(Math.random().toFixed(2)),s=r[Number((r.length*o).toFixed(0))];return String(s.i)}catch(e){console.error(e)}})(e,t))},{children:[(0,r.jsx)(N,{type:"search"}),"Find Games"]}))]})}),he=n.ZP.ol((({theme:e})=>n.iv`
    padding-left: ${e.size(6)};
  `)),ue=n.ZP.li((({theme:e})=>n.iv`
    list-style: none;
    position: relative;

    &::after {
      content: '';
      padding: 3px;
      border: 1px solid ${e.colors.text3};
      border-radius: 50%;
      position: absolute;
      left: -15px;
      top: 6px;
    }
  `)),me=n.ZP.h2((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
  `)),xe=n.ZP.hr((({theme:e})=>n.iv`
    border-color: ${e.colors.text1+"44"};
  `)),ge=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
  `)),pe=n.ZP.img((({theme:e})=>n.iv`
    margin: auto;
    width: 100%;
    max-width: ${e.size(140)};
    border-radius: ${e.radius.large};
    overflow: hidden;
  `)),fe=n.ZP.h4((({theme:e})=>n.iv``)),be=n.ZP.p((({theme:e})=>n.iv``)),ve=n.ZP.a((({theme:e})=>n.iv`
    text-decoration: none;
  `)),je=n.ZP.div((({theme:e})=>n.iv``)),ye=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${e.size(4)};
    padding: ${e.size(4)} 0;
  `)),$e=n.ZP.img((({theme:e})=>n.iv`
    width: 100%;
    max-width: ${e.size(180)};
    border-radius: ${e.radius.large};
    border: 2px solid ${e.colors.white+"44"};

    @media (max-width: ${D}px) {
      max-width: ${e.size(220)};
    }
  `)),we=e=>{const{game:t}=e,{categories:i,platforms:o}=W(),s=(0,l.useMemo)((()=>{var e;return null===(e=t.g)||void 0===e?void 0:e.map((e=>{const{t,n:o}=JSON.parse(i[e]);return(0,r.jsx)(ue,{children:`${t}, ${o}`})}))}),[t.g]),n=(0,l.useMemo)((()=>{var e;return null===(e=t.p)||void 0===e?void 0:e.map((e=>(0,r.jsx)(ue,{children:o[e]})))}),[t.p]),a=(0,l.useMemo)((()=>{var e;return null===(e=t.s)||void 0===e?void 0:e.map((e=>(0,r.jsx)($e,{src:e})))}),[t.s]);return(0,r.jsxs)(ge,{children:[(0,r.jsxs)(X,{children:[(0,r.jsx)(ee,{children:(0,r.jsx)(pe,{src:null==t?void 0:t.c})}),(0,r.jsxs)(ee,{children:[(0,r.jsx)(me,{children:null==t?void 0:t.n}),(0,r.jsx)(fe,{children:"2024"}),(0,r.jsxs)(je,{children:[(0,r.jsx)(N,{type:"star"}),(0,r.jsx)(N,{type:"star"}),(0,r.jsx)(N,{type:"star"}),(0,r.jsx)(N,{type:"starLine"}),(0,r.jsx)(N,{type:"starLine"})]}),(0,r.jsx)(be,{dangerouslySetInnerHTML:{__html:null==t?void 0:t.d}}),(0,r.jsx)(ve,Object.assign({href:null==t?void 0:t.l},{children:"MobyGames"}))]})]}),(0,r.jsxs)(X,{children:[(0,r.jsxs)(ee,{children:[(0,r.jsxs)(me,{children:[(0,r.jsx)(N,{type:"category"}),"Categories"]}),(0,r.jsx)(xe,{}),(0,r.jsx)(he,{children:s})]}),(0,r.jsxs)(ee,{children:[(0,r.jsxs)(me,{children:[(0,r.jsx)(N,{type:"platform"}),"Platforms"]}),(0,r.jsx)(xe,{}),(0,r.jsx)(he,{children:n})]})]}),(0,r.jsx)(X,{children:(0,r.jsxs)(ee,{children:[(0,r.jsxs)(me,{children:[(0,r.jsx)(N,{type:"screenshot"}),"Screenshots"]}),(0,r.jsx)(xe,{}),(0,r.jsx)(ye,{children:a})]})})]})};const ze=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    height: 100%;
    max-height: ${e.size(200)};
    padding: ${e.size(4)};
  `)),Pe=(n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.size(2)};
    background-color: ${e.colors.bg1+"44"};
    backdrop-filter: blur(8px);
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.high};
    color: ${e.colors.white};
    padding: ${e.size(4)};
  `)),n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `))),Se=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    margin-top: ${e.size(1.5)};

    :hover {
      color: ${e.colors.red};
    }
  `)),ke=n.ZP.iframe((({theme:e})=>n.iv`
    width: 100%;
    max-width: ${e.size(300)};
    height: ${e.size(170)};
    margin: auto;
    margin-top: ${e.size(4)};
    background-color: #000;
    border-radius: ${e.radius.veryLarge};
    box-shadow: ${e.shadow.high};
    border: none;
    outline: none;

    @media (max-width: ${2560}px) {
      height: ${e.size(170)};
    }

    @media (max-width: ${D}px) {
      height: ${e.size(150)};
    }

    @media (max-width: ${900}px) {
      height: ${e.size(125)};
    }

    @media (max-width: ${768}px) {
      height: ${e.size(100)};
    }
  `)),Oe=e=>{const{query:t}=e,[i,o]=(0,l.useState)([]),[s,n]=(0,l.useState)(0);return(0,l.useEffect)((()=>{t&&((e=>{return t=void 0,i=void 0,o=function*(){const t="https://corsproxy.io/?"+encodeURIComponent("https://www.youtube.com/youtubei/v1/search"),i={context:{client:{hl:"en",gl:"BR",clientName:"WEB",clientVersion:"2.20240111.09.00",timeZone:"America/Fortaleza"}},query:e},r=yield fetch(t,{headers:{"accept-language":"en-US,en;q=0.9","content-type":"application/json"},body:JSON.stringify(i),method:"POST",mode:"cors"});return(yield r.json()).contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.map((e=>{var t;return null===(t=null==e?void 0:e.videoRenderer)||void 0===t?void 0:t.videoId})).filter((e=>!!e)).map((e=>`https://www.youtube.com/embed/${e}?fs=0`))},new((r=void 0)||(r=Promise))((function(e,s){function n(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(n,a)}l((o=o.apply(t,i||[])).next())}));var t,i,r,o})(t+"gameplay").then(o),n(0))}),[t]),(0,r.jsx)(ze,{children:(0,r.jsxs)(ee,{children:[(0,r.jsxs)(Pe,{children:[(0,r.jsxs)(me,{children:[(0,r.jsx)(N,{type:"youtube"}),"Youtube"]}),(0,r.jsxs)(Se,{children:[(0,r.jsx)(N,{size:10,type:"previous",onPress:()=>s&&n(s-1)}),(0,r.jsx)(N,{size:10,type:"next",onPress:()=>s<i.length-1&&n(s+1)})]})]}),(0,r.jsx)(xe,{}),(0,r.jsx)(Z,Object.assign({check:!!t},{children:(0,r.jsx)(ke,{src:i[s]})}))]})})};const Ze=()=>{const{gameId:e}=P(),[t,i]=(0,l.useState)(!1),[o,s]=(0,l.useState)();return(0,l.useEffect)((()=>{var e,t,r,o;(e=void 0,t=void 0,r=void 0,o=function*(){i(!0),yield O()},new(r||(r=Promise))((function(i,s){function n(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,a)}l((o=o.apply(e,t||[])).next())}))).finally((()=>i(!1)))}),[]),(0,l.useEffect)((()=>{var t;(t=Number(e),S(void 0,void 0,void 0,(function*(){return k.games.find((e=>e.i===t))}))).then((e=>e.n&&s(e)))}),[e]),(0,r.jsxs)(Y,{children:[(0,r.jsx)(ce,{}),(0,r.jsx)(Z,Object.assign({check:!!o},{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(we,{game:o}),(0,r.jsx)(Oe,{query:null==o?void 0:o.n})]})})),(0,r.jsx)(A,{type:"fullScreen",show:t,title:"Loading Game List",description:"Needed on first loding only."}),(0,r.jsx)(Q,{})]})},Ce=()=>((0,l.useContext)(d),(0,r.jsxs)(n.f6,Object.assign({theme:$},{children:[(0,r.jsx)(h,{}),(0,r.jsx)(a.Z5,Object.assign({location:window.location},{children:(0,r.jsx)(a.AW,{path:"/*",element:(0,r.jsx)(Ze,{})})}))]})));(0,o.s)(document.getElementById("root")).render((0,r.jsx)((()=>(0,r.jsx)(z,{children:(0,r.jsx)(c,{children:(0,r.jsx)(n.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,r.jsx)(U,{children:(0,r.jsx)(s.VK,{children:(0,r.jsx)(Ce,{})})})}))})})),{}))}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.m=r,e=[],s.O=(t,i,r,o)=>{if(!i){var n=1/0;for(c=0;c<e.length;c++){for(var[i,r,o]=e[c],a=!0,l=0;l<i.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((e=>s.O[e](i[l])))?i.splice(l--,1):(a=!1,o<n&&(n=o));if(a){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,r,o]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);s.r(o);var n={};t=t||[null,i({}),i([]),i(i)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,s.d(o,n),o},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!e;)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,i)=>{var r,o,[n,a,l]=i,d=0;if(n.some((t=>0!==e[t]))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(l)var c=l(s)}for(t&&t(i);d<n.length;d++)o=n[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},i=this.webpackChunkgame_finder=this.webpackChunkgame_finder||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),s.nc=void 0;var n=s.O(void 0,[977],(()=>s(385)));n=s.O(n)})();