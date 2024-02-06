(()=>{"use strict";var e,t,i,o={841:(e,t,i)=>{var o=i(893),r=i(745),s=i(655),n=i(133),a=i(250),l=i(294);const d=(0,l.createContext)(null),c=e=>{const[t,i]=(0,l.useState)("/game-view"),[r,s]=(0,l.useState)(""),n={pathname:t,hash:"",search:"",lang:r,setPath:i,setLang:s},a=(0,l.useMemo)((()=>n),[JSON.stringify(n)]);return(0,o.jsx)(d.Provider,Object.assign({value:a},{children:e.children}))},h=(i.p,(0,n.vJ)((({theme:e})=>n.iv`
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
      background: #0004;
    }
    div::-webkit-scrollbar-thumb {
      background: ${e.colors.white};
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
  `))),u="#ba68c8",m="#6a1b9a",x="#4fc3f7",g="#fafafa",p="#eeeeee",f="#e0e0e0",b="#bdbdbd",v="#9e9e9e",j="#757575",$="#141414",y={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:"#8e24aa",mainBg:"#7b1fa2",bg1:g,bg2:"#f5f5f5",bg3:p,bg4:f,text1:"#424242",text2:j,text3:v,text4:b,gray:v,yellow:"#B38600",red:"#CA3521",blue:"#388BFF",green:"#558b2f",white:g,black:$},fontSize:{h1:"1.3rem",h2:"1.25rem",h3:"1.2rem",h4:"1.15rem",h5:"1.1rem",h6:"1.05rem",body:"1rem",label:"0.9rem",small:"0.95rem",verySmall:"0.85rem"},shadow:{low:"1px 1px 3px 1px #0004",medium:"2px 2px 3px 1px #0006",high:"2px 2px 3px 1px #0008"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}};Object.assign(Object.assign({},y),{colors:Object.assign(Object.assign({},y.colors),{bg1:$,bg2:$+"88",bg3:$+"66",bg4:$+"44",text1:p,text2:f,text3:b,text4:v,gray:j,white:f})});var w=i(279);const z={download:(0,o.jsx)(w.HA8,{}),selector:(0,o.jsx)(w.ZaQ,{}),spinner:(0,o.jsx)(w.H4p,{}),next:(0,o.jsx)(w.U4K,{}),previous:(0,o.jsx)(w._L$,{}),youtube:(0,o.jsx)(w.pzF,{}),star:(0,o.jsx)(w.Kz,{}),starLine:(0,o.jsx)(w.u20,{}),category:(0,o.jsx)(w.yTT,{}),platform:(0,o.jsx)(w.pa0,{}),screenshot:(0,o.jsx)(w.QVH,{}),date:(0,o.jsx)(w.FVH,{}),list:(0,o.jsx)(w.dR_,{}),search:(0,o.jsx)(w.t2h,{}),close:(0,o.jsx)(w.eSQ,{})},k=n.ZP.span((({theme:e,size:t})=>n.iv`
    display: inline-flex;
    font-size: ${e.size(t||7)};
    cursor: pointer;
  `)),P=e=>{const{type:t,size:i,style:r,onClick:s}=e,n=(0,l.useMemo)((()=>z[t]),[]);return(0,o.jsx)(k,Object.assign({className:"icon",size:i,style:r,onClick:s},{children:n}))},S=n.ZP.h2((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
  `)),O=n.ZP.hr((({theme:e})=>n.iv`
    border-color: ${e.colors.text1+"44"};
  `)),Z=(n.F4`
    0% {background-position:0% 11%}
    50% {background-position:100% 90%}
    100% {background-position:0% 11%}
`,n.F4`
    0% {background-color: ${"#1565c0"}}
    25% {background-color: ${m}}
    50% {background-color: ${"#1b5e20"}}
    100% {background-color: ${"#b71c1c"}}
`,n.F4`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`),C=n.ZP.div((({show:e})=>n.iv`
    display: ${e?"flex":"none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0006;
    backdrop-filter: blur(12px);
  `)),M=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: ${e.size(350)};
    padding: ${e.size(4)};
    color: #fff;
  `)),F=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    height: 100%;
    max-width: ${e.size(350)};
    margin-bottom: ${e.size(10)};
    overflow: auto;
    animation: 0.5s ${Z} ease;
  `));i.p;var L=function(e,t,i,o){return new(i||(i=Promise))((function(r,s){function n(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}l((o=o.apply(e,t||[])).next())}))};let _={games:[],filtered:[],categories:[],platforms:[]};const N=()=>L(void 0,void 0,void 0,(function*(){try{_=yield(yield fetch("https://klessitonrodrigues.github.io/game-finder/assets/json/games.json")).json();const{categories:e,platforms:t}=_;return{categories:e,platforms:t}}catch(e){console.error(e)}})),E=(0,l.createContext)(null),T=e=>{const[t,i]=(0,l.useState)(0),[r,s]=(0,l.useState)(0),[n,a]=(0,l.useState)([]),[d,c]=(0,l.useState)([]),h={lastUpdate:t,selectedGame:r,categories:n,platforms:d,setLastUpdate:i,setSelectedGame:s,setPlatforms:c,setCategories:a};(0,l.useEffect)((()=>{N().then((e=>{a(e.categories),c(e.platforms)}))}),[]);const u=(0,l.useMemo)((()=>h),[JSON.stringify(h)]);return(0,o.jsx)(E.Provider,Object.assign({value:u},{children:e.children}))},G=()=>(0,l.useContext)(E),R=768,I=1024,B=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    padding: ${e.size(4)};
  `)),J=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${e.size(4)};
  `)),U=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${e.size(70)};
    border-radius: ${e.radius.veryLarge};
    box-shadow: ${e.shadow.low};
    overflow: hidden;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      box-shadow: ${e.shadow.medium};
    }

    @media (max-width: ${R}px) {
      max-width: unset;
    }
  `)),Y=n.ZP.img((({theme:e})=>n.iv`
    width: 100%;
    height: 100%;
    max-width: ${e.size(70)};
    max-height: ${e.size(80)};
    background-color: ${e.colors.bg2};
    border: none;

    @media (max-width: ${R}px) {
      max-width: unset;
      max-height: ${e.size(120)};
    }
  `)),A=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    flex-direction: column;
    height: ${e.size(22)};
    background-color: ${e.colors.bg2};
    color: ${e.colors.text1};
    padding: ${e.size(3)} ${e.size(2)};
    font-size: ${e.fontSize.verySmall};
    font-weight: bold;

    b {
      color: ${e.colors.text3};
    }
  `)),H=e=>{const{onSelect:t}=e,{lastUpdate:i}=G(),[r,s]=(0,l.useState)([]),[n,a]=(0,l.useState)(0);(0,l.useEffect)((()=>{s(((e,t)=>{var i;if(e<0)return[];const o=20*e;return null===(i=_.filtered)||void 0===i?void 0:i.slice(o,o+20)})(n))}),[i]);const d=(0,l.useMemo)((()=>r.map((e=>(0,o.jsxs)(U,Object.assign({onClick:()=>t(e)},{children:[(0,o.jsx)(Y,{src:e.c}),(0,o.jsxs)(A,{children:[(0,o.jsx)("b",{children:"2024"}),(0,o.jsx)("div",{children:e.n})]})]}),e.i)))),[r]);return(0,o.jsx)(B,{children:(0,o.jsx)(J,{children:d})})},Q=(0,l.createContext)(null),q=e=>{const[t,i]=(0,l.useState)(""),[r,s]=(0,l.useState)(0),[n,a]=(0,l.useState)(0),d={gameId:t,gameCategory:r,gamePlatform:n,setGameId:i,setGameCategory:s,setGamePlatform:a},c=(0,l.useMemo)((()=>d),[JSON.stringify(d)]);return(0,o.jsx)(Q.Provider,Object.assign({value:c},{children:e.children}))},V=()=>(0,l.useContext)(Q),K={i:1,n:"",l:"",d:"",c:"",s:[],g:[],p:[]},W=e=>e.check?e.true||e.children:e.false,D=(n.F4`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`,n.F4`
    from {transform: translateY(18rem); opacity: 0} 
    to {opacity: 1}
`),X=(n.F4`
   from {opacity: 0}
   to {opacity: 1}
`,n.F4`
   to {transform: rotateZ(360deg);}
`),ee=D,te=X,ie=n.ZP.div((()=>n.iv``)),oe=n.ZP.div((()=>n.iv`
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
  `)),re=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.size(8)};
    animation: ${te} 0.8s infinite linear;
    color: ${e.colors.white};
  `)),se=n.ZP.h1((({theme:e})=>n.iv`
    font-size: ${e.fontSize.label};
    margin-bottom: ${e.size(2)};
    animation: ${ee} 0.5s ease-out;
    color: ${e.colors.white};
  `)),ne=n.ZP.p((({theme:e})=>n.iv`
    font-size: ${e.fontSize.verySmall};
    animation: ${ee} 0.5s ease-out;
    color: ${e.colors.white};
  `)),ae=e=>{const{show:t,type:i,title:r,description:s}=e;return(0,o.jsxs)(ie,{children:[(0,o.jsx)(W,Object.assign({check:t&&"icon"===i},{children:(0,o.jsx)(re,{children:(0,o.jsx)(P,{type:"spinner",size:12})})})),(0,o.jsx)(W,Object.assign({check:t&&"fullScreen"===i},{children:(0,o.jsxs)(oe,{children:[(0,o.jsx)(re,{children:(0,o.jsx)(P,{type:"spinner",size:12})}),(0,o.jsx)(se,{children:r}),(0,o.jsx)(ne,{children:s})]})}))]})},le=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    height: 100%;
    max-width: ${e.size(400)};
    overflow-y: auto;
    margin: auto;
  `)),de=e=>(0,o.jsx)(le,{children:e.children}),ce=i.p+"assets/c63b90c8b26bc854845a.jpeg",he=n.ZP.div((()=>n.iv`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${ce});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
  `)),ue=(n.ZP.div((()=>n.iv`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(35deg, ${x}, ${u});
    background-size: 100% 100%;
    z-index: -1;
  `)),n.ZP.ol((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(3)};
    padding: ${e.size(2)} ${e.size(3)};
    background-color: ${e.colors.bg3};
    border-radius: ${e.radius.large};
    color: ${e.colors.text1};
    box-shadow: ${e.shadow.low};
    font-size: ${e.fontSize.label};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: ${e.colors.bg2};
    }

    .icon {
      color: ${e.colors.text2};
    }
  `))),me=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    padding: 0 ${e.size(4)} ${e.size(4)};
    gap: ${e.size(4)};

    @media (max-width: ${I}px) {
      flex-direction: column;
    }
  `)),xe=n.ZP.div((({theme:e})=>n.iv`
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
  `)),ge=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    width: 100%;

    @media (max-width: ${R}px) {
      width: 100%;
      flex-direction: column;
    }
  `)),pe=n.ZP.label((({theme:e})=>n.iv`
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
    box-shadow: ${e.shadow.low};

    &:hover {
      background-color: ${e.colors.bg2};
    }
  `)),fe=n.ZP.div((()=>n.iv`
    min-width: max-content;
  `)),be=n.ZP.input((({theme:e})=>n.iv`
    width: 100%;
    padding-left: ${e.size(2)};
    padding-top: ${e.size(.5)};
    font-size: ${e.fontSize.body};
    font-weight: bold;
    border: none;
    background-color: transparent;
    color: ${e.colors.text1};
  `)),ve=n.ZP.label((({theme:e})=>n.iv`
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
    box-shadow: ${e.shadow.low};

    &:hover {
      background-color: ${e.colors.bg2};
    }
  `)),je=n.ZP.select((({theme:e})=>n.iv`
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
  `)),$e=n.ZP.div((()=>n.iv`
    min-width: max-content;
  `)),ye=n.ZP.option((({theme:e})=>n.iv`
    background-color: ${e.colors.bg1};
    color: ${e.colors.text1};
  `)),we=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${e.size(4)};
    padding: ${e.size(4)};
    max-width: ${e.size(300)};
    margin: auto;
  `)),ze=(n.ZP.button((({theme:e})=>n.iv`
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
  `)),()=>{const{gameCategory:e,gamePlatform:t,setGameCategory:i,setGamePlatform:r}=V(),{categories:s,platforms:n,setLastUpdate:a}=G(),[d,c]=(0,l.useState)(""),h=(0,l.useMemo)((()=>n.map(((e,t)=>(0,o.jsx)(ye,Object.assign({value:t},{children:e}))))),[n]),u=(0,l.useMemo)((()=>{const e=[],t=[];return s.forEach(((i,o)=>{const{t:r,n:s}=JSON.parse(i);e.includes(r)||e.push(r),""!==d&&d!==r||t.push({i:o,name:s})})),{types:e,items:t}}),[s,d]),m=(0,l.useMemo)((()=>u.types.map((e=>(0,o.jsx)(ye,Object.assign({value:e},{children:e}))))),[s]),x=(0,l.useMemo)((()=>u.items.map((e=>(0,o.jsx)(ye,Object.assign({value:e.i},{children:e.name}))))),[s,d]);return(0,o.jsxs)(we,{children:[(0,o.jsxs)(ge,{children:[(0,o.jsxs)(ve,{children:[(0,o.jsx)(P,{type:"category"}),(0,o.jsx)($e,{children:"Category Type"}),(0,o.jsx)(je,Object.assign({value:d,onChange:e=>c(e.target.value)},{children:m}))]}),(0,o.jsxs)(ve,{children:[(0,o.jsx)(P,{type:"category"}),(0,o.jsx)($e,{children:"Category"}),(0,o.jsx)(je,Object.assign({value:e,onChange:e=>i(Number(e.target.value))},{children:x}))]})]}),(0,o.jsxs)(ge,{children:[(0,o.jsxs)(pe,{children:[(0,o.jsx)(P,{type:"date"}),(0,o.jsx)(fe,{children:"From Year"}),(0,o.jsx)(be,{type:"number",value:"2023"})]}),(0,o.jsxs)(pe,{children:[(0,o.jsx)(P,{type:"date"}),(0,o.jsx)(fe,{children:"To Year"}),(0,o.jsx)(be,{type:"number",value:"2023"})]})]}),(0,o.jsxs)(ge,{children:[(0,o.jsxs)(ve,{children:[(0,o.jsx)(P,{type:"platform"}),(0,o.jsx)($e,{children:"Platform"}),(0,o.jsx)(je,Object.assign({value:t,onChange:e=>r(Number(e.target.value))},{children:h}))]}),(0,o.jsxs)(ve,{children:[(0,o.jsx)(P,{type:"list"}),(0,o.jsx)($e,{children:"List Format"}),(0,o.jsxs)(je,Object.assign({value:t,onChange:e=>r(Number(e.target.value))},{children:[(0,o.jsx)(ye,{children:"Ordered"}),(0,o.jsx)(ye,{children:"Random"})]}))]})]}),(0,o.jsxs)(ue,Object.assign({onClick:()=>{((e,t)=>{try{const{games:i}=_,o=i.filter((i=>{const{g:o,p:r}=i;return!(!(null==o?void 0:o.includes(e))||!(null==r?void 0:r.includes(t)))})).sort(((e,t)=>Math.random()-.5));_.filtered=o}catch(e){console.error(e)}})(e,t),a(Date.now())}},{children:[(0,o.jsx)(P,{type:"search"}),"Find Games"]}))]})}),ke=n.ZP.ol((({theme:e})=>n.iv`
    padding-left: ${e.size(6)};
  `)),Pe=n.ZP.li((({theme:e})=>n.iv`
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
  `)),Se=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
  `)),Oe=n.ZP.img((({theme:e})=>n.iv`
    margin: auto;
    width: 100%;
    max-width: ${e.size(140)};
    border-radius: ${e.radius.large};
    overflow: hidden;
  `)),Ze=n.ZP.h4((({theme:e})=>n.iv``)),Ce=n.ZP.p((({theme:e})=>n.iv``)),Me=n.ZP.a((({theme:e})=>n.iv`
    text-decoration: none;
  `)),Fe=n.ZP.div((({theme:e})=>n.iv``)),Le=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${e.size(4)};
    padding: ${e.size(4)} 0;
  `)),_e=n.ZP.img((({theme:e})=>n.iv`
    width: 100%;
    max-width: ${e.size(160)};
    border-radius: ${e.radius.large};
    border: 2px solid ${e.colors.white+"44"};

    @media (max-width: ${I}px) {
      max-width: ${e.size(220)};
    }
  `)),Ne=e=>{const{game:t}=e,{categories:i,platforms:r}=G(),s=(0,l.useMemo)((()=>{var e;return null===(e=t.g)||void 0===e?void 0:e.map((e=>{if(!i[e])return null;const{t,n:r}=JSON.parse(i[e]);return(0,o.jsx)(Pe,{children:`${t}, ${r}`})}))}),[t.g]),n=(0,l.useMemo)((()=>{var e;return null===(e=t.p)||void 0===e?void 0:e.map((e=>(0,o.jsx)(Pe,{children:r[e]})))}),[t.p]),a=(0,l.useMemo)((()=>{var e;return null===(e=t.s)||void 0===e?void 0:e.map((e=>(0,o.jsx)(_e,{src:e})))}),[t.s]);return(0,o.jsxs)(Se,{children:[(0,o.jsxs)(me,{children:[(0,o.jsx)(xe,{children:(0,o.jsx)(Oe,{src:null==t?void 0:t.c})}),(0,o.jsxs)(xe,{children:[(0,o.jsx)(S,{children:null==t?void 0:t.n}),(0,o.jsx)(Ze,{children:"2024"}),(0,o.jsxs)(Fe,{children:[(0,o.jsx)(P,{type:"star"}),(0,o.jsx)(P,{type:"star"}),(0,o.jsx)(P,{type:"star"}),(0,o.jsx)(P,{type:"starLine"}),(0,o.jsx)(P,{type:"starLine"})]}),(0,o.jsx)(Ce,{dangerouslySetInnerHTML:{__html:null==t?void 0:t.d}}),(0,o.jsx)(Me,Object.assign({href:null==t?void 0:t.l},{children:"MobyGames"}))]})]}),(0,o.jsxs)(me,{children:[(0,o.jsxs)(xe,{children:[(0,o.jsxs)(S,{children:[(0,o.jsx)(P,{type:"category"}),"Categories"]}),(0,o.jsx)(O,{}),(0,o.jsx)(ke,{children:s})]}),(0,o.jsxs)(xe,{children:[(0,o.jsxs)(S,{children:[(0,o.jsx)(P,{type:"platform"}),"Platforms"]}),(0,o.jsx)(O,{}),(0,o.jsx)(ke,{children:n})]})]}),(0,o.jsx)(me,{children:(0,o.jsxs)(xe,{children:[(0,o.jsxs)(S,{children:[(0,o.jsx)(P,{type:"screenshot"}),"Screenshots"]}),(0,o.jsx)(O,{}),(0,o.jsx)(Le,{children:a})]})})]})};const Ee=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    height: 100%;
    max-height: ${e.size(200)};
    padding: ${e.size(4)};
  `)),Te=(n.ZP.div((({theme:e})=>n.iv`
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
  `))),Ge=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    margin-top: ${e.size(1.5)};

    :hover {
      color: ${e.colors.red};
    }
  `)),Re=n.ZP.iframe((({theme:e})=>n.iv`
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

    @media (max-width: ${I}px) {
      height: ${e.size(150)};
    }

    @media (max-width: ${900}px) {
      height: ${e.size(125)};
    }

    @media (max-width: ${R}px) {
      height: ${e.size(100)};
    }
  `)),Ie=e=>{const{query:t}=e,[i,r]=(0,l.useState)([]),[s,n]=(0,l.useState)(0);return(0,l.useEffect)((()=>{t&&((e=>{return t=void 0,i=void 0,r=function*(){const t="https://corsproxy.io/?"+encodeURIComponent("https://www.youtube.com/youtubei/v1/search"),i={context:{client:{hl:"en",gl:"BR",clientName:"WEB",clientVersion:"2.20240111.09.00",timeZone:"America/Fortaleza"}},query:e},o=yield fetch(t,{headers:{"accept-language":"en-US,en;q=0.9","content-type":"application/json"},body:JSON.stringify(i),method:"POST",mode:"cors"});return(yield o.json()).contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.map((e=>{var t;return null===(t=null==e?void 0:e.videoRenderer)||void 0===t?void 0:t.videoId})).filter((e=>!!e)).map((e=>`https://www.youtube.com/embed/${e}?fs=0`))},new((o=void 0)||(o=Promise))((function(e,s){function n(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,a)}l((r=r.apply(t,i||[])).next())}));var t,i,o,r})(t+"gameplay").then(r),n(0))}),[t]),(0,o.jsx)(Ee,{children:(0,o.jsxs)(xe,{children:[(0,o.jsxs)(Te,{children:[(0,o.jsxs)(S,{children:[(0,o.jsx)(P,{type:"youtube"}),"Youtube"]}),(0,o.jsxs)(Ge,{children:[(0,o.jsx)(P,{size:10,type:"previous",onClick:()=>s&&n(s-1)}),(0,o.jsx)(P,{size:10,type:"next",onClick:()=>s<i.length-1&&n(s+1)})]})]}),(0,o.jsx)(O,{}),(0,o.jsx)(W,Object.assign({check:!!t},{children:(0,o.jsx)(Re,{src:i[s]})}))]})})};const Be=()=>{const{gameId:e}=V(),[t,i]=(0,l.useState)(!1),[r,s]=(0,l.useState)(K);return(0,l.useEffect)((()=>{var e,t,o,r;(e=void 0,t=void 0,o=void 0,r=function*(){i(!0),yield N()},new(o||(o=Promise))((function(i,s){function n(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(n,a)}l((r=r.apply(e,t||[])).next())}))).finally((()=>i(!1)))}),[]),(0,l.useEffect)((()=>{var t;(t=Number(e),L(void 0,void 0,void 0,(function*(){return _.games.find((e=>e.i===t))}))).then((e=>e.n&&s(e)))}),[e]),(0,o.jsxs)(de,{children:[(0,o.jsx)(ze,{}),(0,o.jsx)(H,{onSelect:s}),(0,o.jsxs)(C,Object.assign({show:!!(null==r?void 0:r.n)},{children:[(0,o.jsxs)(M,{children:[(0,o.jsx)(S,{children:null==r?void 0:r.n}),(0,o.jsx)(P,{type:"close",size:10,onClick:()=>s(K)})]}),(0,o.jsxs)(F,{children:[(0,o.jsx)(Ne,{game:r}),(0,o.jsx)(Ie,{query:null==r?void 0:r.n})]})]})),(0,o.jsx)(ae,{type:"fullScreen",show:t,title:"Loading Game List"}),(0,o.jsx)(he,{})]})},Je=()=>((0,l.useContext)(d),(0,o.jsxs)(n.f6,Object.assign({theme:y},{children:[(0,o.jsx)(h,{}),(0,o.jsx)(a.Z5,Object.assign({location:window.location},{children:(0,o.jsx)(a.AW,{path:"/*",element:(0,o.jsx)(Be,{})})}))]})));(0,r.s)(document.getElementById("root")).render((0,o.jsx)((()=>(0,o.jsx)(q,{children:(0,o.jsx)(c,{children:(0,o.jsx)(n.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,o.jsx)(T,{children:(0,o.jsx)(s.VK,{children:(0,o.jsx)(Je,{})})})}))})})),{}))}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,s),i.exports}s.m=o,e=[],s.O=(t,i,o,r)=>{if(!i){var n=1/0;for(c=0;c<e.length;c++){for(var[i,o,r]=e[c],a=!0,l=0;l<i.length;l++)(!1&r||n>=r)&&Object.keys(s.O).every((e=>s.O[e](i[l])))?i.splice(l--,1):(a=!1,r<n&&(n=r));if(a){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,o,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);s.r(r);var n={};t=t||[null,i({}),i([]),i(i)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,s.d(r,n),r},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,i)=>{var o,r,[n,a,l]=i,d=0;if(n.some((t=>0!==e[t]))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(l)var c=l(s)}for(t&&t(i);d<n.length;d++)r=n[d],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(c)},i=this.webpackChunkgame_finder=this.webpackChunkgame_finder||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),s.nc=void 0;var n=s.O(void 0,[977],(()=>s(841)));n=s.O(n)})();