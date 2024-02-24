(()=>{"use strict";var e,t,i,r={755:(e,t,i)=>{var r=i(893),s=i(745),n=i(655),o=i(133),a=i(250),l=i(294);const c=(0,l.createContext)(null),d=e=>{const[t,i]=(0,l.useState)(!1),s={darkTheme:t,setDarkTheme:i},n=(0,l.useMemo)((()=>s),[JSON.stringify(s)]);return(0,r.jsx)(c.Provider,Object.assign({value:n},{children:e.children}))},h=()=>(0,l.useContext)(c),u=(i.p,(0,o.vJ)((({theme:e})=>o.iv`
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
      width: 100%;
      min-height: 100vh;
      // height: 100vh;
      // max-height: 100vh;
      // overflow-y: hidden;
      background-image: ${e.colors.gradientBg};
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
      display: flex;
      flex-direction: column;
    }
  `))),x="#ba68c8",g="#ab47bc",p="#9c27b0",m="#8e24aa",f="#7b1fa2",j="#2196f3",b="#1e88e5",v="#1976d2",$="#1565c0",y="#4fc3f7",w="#fafafa",z="#f5f5f5",k="#eeeeee",P="#e0e0e0",O="#bdbdbd",S="#9e9e9e",Z="#757575",C="#616161",T="#424242",M="#141414",L=e=>`${(.2*e).toFixed(1)}rem`,N=768,F=1024,_=o.F4`
    from { transform: translateY(6rem); opacity: 0; } 
    to { opacity: 1 }`,E=o.F4`
    from { transform: translateY(12rem); opacity: 0; } 
    to { opacity: 1; }`,Y=o.F4`
    from { opacity: 0; } 
    to { opacity: 1; }`,A=o.F4`
    to { transform: rotateZ(360deg); }`,R={black:`linear-gradient(180deg, ${Z}, ${C})`,white:`linear-gradient(180deg, ${k}, ${P})`,blue:`linear-gradient(180deg, ${j}, ${b})`,darkBlue:`linear-gradient(180deg, ${v}, ${$})`,purple:`linear-gradient(180deg, ${g}, ${p})`,darkPurple:`linear-gradient(180deg, ${m}, ${f})`},B={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:p,mainBg:f,bg1:w,bg2:z,bg3:k,bg4:P,text1:T,text2:Z,text3:S,text4:O,gray:S,yellow:"#f57f17",red:"#CA3521",blue:"#388BFF",green:"#558b2f",white:w,black:M,gradientBg:R.white},fontSize:{h1:"1.3rem",h2:"1.25rem",h3:"1.2rem",h4:"1.15rem",h5:"1.1rem",h6:"1.05rem",body:"1rem",label:"0.9rem",small:"0.95rem",verySmall:"0.85rem"},shadow:{low:"1px 1px 2px 1px #0004",medium:"1px 1px 3px 1px #0007",high:"1px 1px 3px 1px #000A"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},D=Object.assign(Object.assign({},B),{colors:Object.assign(Object.assign({},B.colors),{bg1:M,bg2:M,bg3:M+"AA",bg4:M+"77",text1:k,text2:P,text3:S,text4:C,gray:Z,white:k,gradientBg:R.black})});var G=i(279);const I={download:(0,r.jsx)(G.HA8,{}),selector:(0,r.jsx)(G.ZaQ,{}),spinner:(0,r.jsx)(G.H4p,{}),next:(0,r.jsx)(G.U4K,{}),previous:(0,r.jsx)(G._L$,{}),youtube:(0,r.jsx)(G.pzF,{}),star:(0,r.jsx)(G.Kz,{}),starLine:(0,r.jsx)(G.u20,{}),starHalf:(0,r.jsx)(G.PMF,{}),category:(0,r.jsx)(G.yTT,{}),platform:(0,r.jsx)(G.pa0,{}),screenshot:(0,r.jsx)(G.QVH,{}),date:(0,r.jsx)(G.qXL,{}),list:(0,r.jsx)(G.dR_,{}),search:(0,r.jsx)(G.t2h,{}),close:(0,r.jsx)(G.eSQ,{}),sun:(0,r.jsx)(G.sEY,{}),moon:(0,r.jsx)(G.S6R,{}),github:(0,r.jsx)(G.ioR,{})},J=o.ZP.span((({theme:e,size:t})=>o.iv`
    display: inline-flex;
    font-size: ${e.size(t||7)};
    cursor: pointer;
  `)),U=e=>{const{type:t,size:i,style:s,onClick:n}=e,o=(0,l.useMemo)((()=>I[t]),[t]);return(0,r.jsx)(J,Object.assign({className:"icon",size:i,style:s,onClick:n},{children:o}))},H=o.ZP.div((()=>o.iv`
    width: 100%;
    display: flex;
    padding: 0 ${L(4)} ${L(4)};
    gap: ${L(4)};

    @media (max-width: ${F}px) {
      flex-direction: column;
    }
  `)),q=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${L(4)};
    padding: ${L(4)};
    background-color: ${e.colors.bg1};
    color: ${e.colors.text2};
    border-radius: ${e.radius.veryLarge};
    box-shadow: ${e.shadow.low};
    transition: background-color 0.3s;
  `)),Q=o.ZP.div((()=>o.iv`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${L(4)};
    width: 100%;
  `)),K=o.ZP.div((({justify:e})=>o.iv`
    display: flex;
    align-items: center;
    justify-content: ${e||"flex-start"};
    gap: ${L(4)};
    width: 100%;

    @media (max-width: ${N}px) {
      width: 100%;
      flex-direction: column;
    }
  `)),V=o.ZP.h4((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
  `)),W=o.ZP.hr((({theme:e})=>o.iv`
    border-color: ${e.colors.text1+"44"};
  `)),X=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    padding: ${e.size(4)};
  `)),ee=o.ZP.div((()=>o.iv`
    display: flex;
    align-items: center;
    gap: ${L(4)};

    a {
      font-size: 0;
      padding: 0;
      margin: 0;
    }

    .icon:hover {
      opacity: 0.5;
    }
  `)),te=()=>{const{darkTheme:e,setDarkTheme:t}=h();return(0,r.jsx)(X,{children:(0,r.jsx)(q,{children:(0,r.jsxs)(Q,{children:[(0,r.jsxs)(V,{children:[(0,r.jsx)(U,{size:10,type:"platform"}),"Game Finder"]}),(0,r.jsxs)(ee,{children:[(0,r.jsx)(V,{children:"EN"}),(0,r.jsx)(U,{type:e?"sun":"moon",onClick:()=>t(!e)}),(0,r.jsx)("a",Object.assign({href:"https://github.com/KlessitonRodrigues/game-finder",target:"_blank"},{children:(0,r.jsx)(U,{type:"github"})}))]})]})})})},ie=i.p+"assets/41adc9b0907dc4270dfd.jpg",re=o.ZP.div((({isDark:e})=>o.iv`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${ie});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
    transition: 0.3s;
    ${e&&"filter: brightness(0.5);"}
  `)),se=(o.ZP.div((()=>o.iv`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(35deg, ${y}, ${x});
    background-size: 100% 100%;
    z-index: -1;
  `)),o.ZP.div((({show:e})=>o.iv`
    display: ${e?"flex":"none"};
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    animation: 0.5s ${Y} ease-out;
    background-color: #5555;
    backdrop-filter: blur(12px);
  `))),ne=o.ZP.div((()=>o.iv`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${L(350)};
    padding: ${L(4)};
    background-image: ${R.purple};
    color: #fff;
  `)),oe=o.ZP.div((()=>o.iv`
    width: 100%;
    height: 100%;
    max-width: ${L(350)};
    padding: ${L(6)} 0 ${L(10)};
    overflow: auto;
    animation: 0.5s ${E} ease-out;
  `)),ae=e=>e.check?e.true||e.children:e.false,le=o.ZP.div((({theme:e})=>o.iv`
    position: -webkit-sticky;
    position: sticky;
    bottom: ${L(6)};
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${R.purple};
    color: ${e.colors.white};
    box-shadow: ${e.shadow.medium};
    font-size: ${e.fontSize.h3};
    border-radius: ${e.radius.large};
    overflow: hidden;
    cursor: pointer;
    transition: 1s;
  `)),ce=o.ZP.div((({active:e})=>o.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${L(14)};
    height: ${L(12)};

    ${e&&`background-image: ${R.darkPurple};`}

    &:hover {
      background-image: ${R.darkPurple};
    }
  `)),de=e=>{const{page:t,onChange:i,total:s}=e,n=e=>{e>0&&e<=s&&i(e)};return(0,r.jsxs)(le,{children:[(0,r.jsx)(ce,{children:(0,r.jsx)(U,{type:"previous",onClick:()=>n(t-1)})}),(0,r.jsx)(ae,Object.assign({check:t>1},{children:(0,r.jsx)(ce,Object.assign({onClick:()=>n(t-1)},{children:t-1}))})),(0,r.jsx)(ce,Object.assign({active:!0},{children:t})),(0,r.jsx)(ae,Object.assign({check:s>=t+1},{children:(0,r.jsx)(ce,Object.assign({onClick:()=>n(t+1)},{children:t+1}))})),(0,r.jsx)(ae,Object.assign({check:s>=t+2},{children:(0,r.jsx)(ce,Object.assign({onClick:()=>n(t+2)},{children:t+2}))})),(0,r.jsx)(ce,{children:(0,r.jsx)(U,{type:"next",onClick:()=>n(t+1)})})]})};i.p;let he={games:[],filtered:[],categories:[],platforms:[]};const ue=()=>{return e=void 0,t=void 0,r=function*(){try{he=yield(yield fetch("https://klessitonrodrigues.github.io/game-finder/assets/json/games.json")).json();const{categories:e,platforms:t}=he;return console.log(he),{categories:e,platforms:t}}catch(e){console.error(e)}},new((i=void 0)||(i=Promise))((function(s,n){function o(e){try{l(r.next(e))}catch(e){n(e)}}function a(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}));var e,t,i,r},xe=(e,t)=>{var i,r;const s=(e-1)*t;return{pages:Math.ceil((null===(i=he.filtered)||void 0===i?void 0:i.length)/t),pageItems:null===(r=he.filtered)||void 0===r?void 0:r.slice(s,s+t)}},ge=(0,l.createContext)(null),pe=e=>{const[t,i]=(0,l.useState)(0),[s,n]=(0,l.useState)([]),[o,a]=(0,l.useState)([]),[c,d]=(0,l.useState)(0),[h,u]=(0,l.useState)(0),[x,g]=(0,l.useState)(0),p={lastUpdate:t,selectedGame:c,categories:s,platforms:o,selectedPlatform:h,selectedCategory:x,setLastUpdate:i,setSelectedGame:d,setPlatforms:a,setCategories:n,setPlatform:u,setCategory:g};(0,l.useEffect)((()=>{ue().then((e=>{n(e.categories),a(e.platforms)}))}),[]);const m=(0,l.useMemo)((()=>p),[JSON.stringify(p)]);return(0,r.jsx)(ge.Provider,Object.assign({value:m},{children:e.children}))},me=()=>(0,l.useContext)(ge),fe=e=>new Date(e).toLocaleDateString("en",{dateStyle:"medium"}),je=o.ZP.div((()=>o.iv`
    width: 100%;
    padding: ${L(4)};
    position: relative;
  `)),be=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${L(8)} ${L(4)};
    padding: ${e.size(2)} 0;
  `)),ve=o.ZP.div((({theme:e})=>o.iv`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${L(80)};
    box-shadow: ${e.shadow.low};
    border-radius: ${e.radius.large};
    overflow: hidden;
    cursor: pointer;
    transition: 0.2s;
    animation: ${_} 0.3s;

    @media (max-width: ${N}px) {
      max-width: unset;
    }
  `)),$e=o.ZP.img((({theme:e})=>o.iv`
    width: ${L(80)};
    height: ${L(95)};
    max-width: ${L(80)};
    max-height: ${L(95)};
    background-color: ${e.colors.bg3};
    border: none;

    @media (max-width: ${N}px) {
      width: 100%;
      height: auto;
      max-width: unset;
      max-height: ${L(160)};
    }
  `)),ye=o.ZP.div((({theme:e})=>o.iv`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${L(22)};
    padding: ${L(2)} ${L(2)};
    background-color: ${e.colors.bg1};
    color: ${e.colors.text1};
    backdrop-filter: blur(10px);
    font-weight: bold;

    b {
      font-size: ${e.fontSize.small};
      color: ${e.colors.text3};
    }
  `)),we=e=>{const{onSelect:t}=e,{lastUpdate:i}=me(),[s,n]=(0,l.useState)([]),[o,a]=(0,l.useState)({index:1,total:0});(0,l.useEffect)((()=>{const{pages:e,pageItems:t}=xe(o.index,20);t&&(n(t),a({index:1,total:e}),window.scrollTo({top:0}))}),[i]),(0,l.useEffect)((()=>{const{pageItems:e}=xe(o.index,20);e&&(n(e),window.scrollTo({top:0}))}),[o.index]);const c=(0,l.useMemo)((()=>s.map((e=>(0,r.jsxs)(ve,Object.assign({onClick:()=>t(e)},{children:[(0,r.jsx)($e,{src:e.c}),(0,r.jsxs)(ye,{children:[(0,r.jsx)("b",{children:fe(e.y)}),(0,r.jsx)("div",{children:e.n})]})]}),e.i)))),[s]);return s.length?(0,r.jsx)(je,{children:(0,r.jsxs)(q,{children:[(0,r.jsxs)(V,{children:[(0,r.jsx)(U,{type:"list"}),"Game List"]}),(0,r.jsx)(be,{children:c}),(0,r.jsx)(de,{page:o.index,total:o.total,onChange:e=>a(Object.assign(Object.assign({},o),{index:e}))})]})}):null},ze=o.ZP.div((()=>o.iv``)),ke=o.ZP.div((()=>o.iv`
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
  `)),Pe=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.size(8)};
    animation: ${A} 0.8s infinite linear;
    color: ${e.colors.white};
  `)),Oe=o.ZP.h1((({theme:e})=>o.iv`
    font-size: ${e.fontSize.label};
    margin-bottom: ${e.size(2)};
    animation: ${E} 0.5s ease-out;
    color: ${e.colors.white};
  `)),Se=o.ZP.p((({theme:e})=>o.iv`
    font-size: ${e.fontSize.verySmall};
    animation: ${E} 0.5s ease-out;
    color: ${e.colors.white};
  `)),Ze=e=>{const{show:t,type:i,title:s,description:n}=e;return(0,r.jsxs)(ze,{children:[(0,r.jsx)(ae,Object.assign({check:t&&"icon"===i},{children:(0,r.jsx)(Pe,{children:(0,r.jsx)(U,{type:"spinner",size:12})})})),(0,r.jsx)(ae,Object.assign({check:t&&"fullScreen"===i},{children:(0,r.jsxs)(ke,{children:[(0,r.jsx)(Pe,{children:(0,r.jsx)(U,{type:"spinner",size:12})}),(0,r.jsx)(Oe,{children:s}),(0,r.jsx)(Se,{children:n})]})}))]})},Ce=o.ZP.div((()=>o.iv`
    width: 100%;
    max-width: ${L(350)};
    margin: auto;
    margin-bottom: ${L(4)};
  `)),Te=e=>(0,r.jsx)(Ce,{children:e.children}),Me=o.ZP.ol((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    padding: ${e.size(2)} ${e.size(3)};
    border: 1px solid transparent;
    border-radius: ${e.radius.large};
    background-image: ${R.purple};
    color: ${e.colors.white};
    box-shadow: ${e.shadow.low};
    font-size: ${e.fontSize.label};
    font-weight: bold;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      background-image: ${R.darkPurple};
    }

    .icon {
      color: ${e.colors.white};
    }
  `)),Le={search:"",fromYear:"2000",toYear:"2024",platform:"",category:"",categoryType:""},Ne=o.ZP.label((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)} ${e.size(3)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    color: ${e.colors.text2};
    border: 1px solid ${e.colors.text4};
    border-radius: ${e.radius.large};
  `)),Fe=o.ZP.div((()=>o.iv`
    min-width: max-content;
  `)),_e=o.ZP.input((({theme:e})=>o.iv`
    width: 100%;
    padding: ${e.size(.5)} 0;
    font-size: ${e.fontSize.h6};
    font-weight: bold;
    border: none;
    background-color: transparent;
    color: ${e.colors.text1};
    border-bottom: 1px solid ${e.colors.text4};
  `)),Ee=o.ZP.label((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)} ${e.size(3)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    color: ${e.colors.text2};
    border: 1px solid ${e.colors.text4};
    border-radius: ${e.radius.large};
  `)),Ye=o.ZP.select((({theme:e})=>o.iv`
    width: 100%;
    font-family: sans-serif;
    font-size: ${e.fontSize.body};
    color: ${e.colors.text1};
    padding-left: ${e.size(2)};
    padding-top: ${e.size(.5)};
    border-bottom: 1px solid ${e.colors.text4};
    border-radius: 0;

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
  `)),Ae=o.ZP.div((()=>o.iv`
    min-width: max-content;
  `)),Re=o.ZP.option((({theme:e})=>o.iv`
    background-color: ${e.colors.bg1};
    color: ${e.colors.text1};
  `)),Be=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${e.size(4)};
    padding: ${e.size(4)};
    margin: auto;
  `)),De=()=>{const{categories:e,platforms:t,setLastUpdate:i}=me(),[s,n]=(0,l.useState)(Le),{category:o,platform:a,categoryType:c}=s,d=(0,l.useMemo)((()=>(e=>{const t=[],i=[];return he.categories.forEach(((r,s)=>{const{t:n,n:o}=JSON.parse(r);t.includes(n)||t.push(n),""!==e&&e!==n||i.push({i:s,name:o})})),{types:t,items:i}})(c)),[e,c]),h=(0,l.useMemo)((()=>d.types.map((e=>(0,r.jsx)(Re,Object.assign({value:e},{children:e}))))),[e]),u=(0,l.useMemo)((()=>d.items.map((e=>(0,r.jsx)(Re,Object.assign({value:e.i},{children:e.name}))))),[e,c]),x=(0,l.useMemo)((()=>t.map(((e,t)=>(0,r.jsx)(Re,Object.assign({value:t},{children:e}))))),[t]);return(0,r.jsx)(Be,{children:(0,r.jsxs)(q,{children:[(0,r.jsxs)(V,{children:[(0,r.jsx)(U,{type:"selector"}),"Filters"]}),(0,r.jsxs)(K,{children:[(0,r.jsxs)(Ne,{children:[(0,r.jsx)(U,{type:"search"}),(0,r.jsx)(Fe,{children:"Search"}),(0,r.jsx)(_e,{type:"search",value:s.search,onChange:e=>n(Object.assign(Object.assign({},s),{search:e.target.value}))})]}),(0,r.jsxs)(Ee,{children:[(0,r.jsx)(U,{type:"selector"}),(0,r.jsx)(Ae,{children:"Platform"}),(0,r.jsxs)(Ye,Object.assign({value:a,onChange:e=>n(Object.assign(Object.assign({},s),{platform:e.target.value}))},{children:[(0,r.jsx)(Re,Object.assign({value:""},{children:"All"})),x]}))]})]}),(0,r.jsxs)(K,{children:[(0,r.jsxs)(Ee,{children:[(0,r.jsx)(U,{type:"selector"}),(0,r.jsx)(Ae,{children:"Category Type"}),(0,r.jsxs)(Ye,Object.assign({value:s.categoryType,onChange:e=>n(Object.assign(Object.assign({},s),{categoryType:e.target.value}))},{children:[(0,r.jsx)(Re,Object.assign({value:""},{children:"All"})),h]}))]}),(0,r.jsxs)(Ee,{children:[(0,r.jsx)(U,{type:"selector"}),(0,r.jsx)(Ae,{children:"Category"}),(0,r.jsxs)(Ye,Object.assign({value:o,onChange:e=>n(Object.assign(Object.assign({},s),{category:e.target.value}))},{children:[(0,r.jsx)(Re,Object.assign({value:""},{children:"All"})),u]}))]})]}),(0,r.jsxs)(K,{children:[(0,r.jsxs)(Ne,{children:[(0,r.jsx)(U,{type:"date"}),(0,r.jsx)(Fe,{children:"From Year"}),(0,r.jsx)(_e,{type:"number",value:s.fromYear,onChange:e=>n(Object.assign(Object.assign({},s),{fromYear:e.target.value}))})]}),(0,r.jsxs)(Ne,{children:[(0,r.jsx)(U,{type:"date"}),(0,r.jsx)(Fe,{children:"To Year"}),(0,r.jsx)(_e,{type:"number",value:s.toYear,onChange:e=>n(Object.assign(Object.assign({},s),{toYear:e.target.value}))})]})]}),(0,r.jsx)(K,{children:(0,r.jsxs)(Me,Object.assign({onClick:()=>{(e=>{try{const{search:t,category:i,platform:r,fromYear:s,toYear:n}=e,o=[];he.games.forEach((e=>{const{g:a,p:l,n:c,y:d}=e,h=null==c?void 0:c.toLocaleLowerCase();if(t&&!(null==h?void 0:h.includes(t)))return!1;if(i&&!(null==a?void 0:a.includes(Number(i))))return!1;if(r&&!(null==l?void 0:l.includes(Number(r))))return!1;if(r&&!(null==l?void 0:l.includes(Number(r))))return!1;const u=new Date(d).getFullYear();return!(s&&Number(s)>=u)&&!(n&&Number(n)<=u)&&void o.push(e)})),he.filtered=o}catch(e){console.error(e)}})(s),i(Date.now())}},{children:[(0,r.jsx)(U,{type:"search"}),"Find Games"]}))})]})})},Ge=o.ZP.ol((({theme:e})=>o.iv`
    padding-left: ${e.size(6)};
  `)),Ie=o.ZP.li((({theme:e})=>o.iv`
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
  `)),Je=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
  `)),Ue=o.ZP.img((({theme:e})=>o.iv`
    margin: auto;
    width: 100%;
    max-width: ${L(140)};
    border-radius: ${e.radius.large};
    overflow: hidden;
  `)),He=o.ZP.h4((()=>o.iv``)),qe=o.ZP.p((()=>o.iv``)),Qe=o.ZP.a((()=>o.iv`
    text-decoration: none;
  `)),Ke=o.ZP.div((({theme:e})=>o.iv`
    color: ${e.colors.main};
  `)),Ve=o.ZP.div((()=>o.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${L(4)};
    padding: ${L(4)} 0;
  `)),We=o.ZP.img((({theme:e})=>o.iv`
    width: 100%;
    max-width: ${L(160)};
    border-radius: ${e.radius.large};
    border: 2px solid ${e.colors.white+"44"};

    @media (max-width: ${F}px) {
      max-width: ${L(220)};
    }
  `)),Xe=e=>{const{game:t}=e,{categories:i,platforms:s}=me(),n=(0,l.useMemo)((()=>{var e;return null===(e=t.g)||void 0===e?void 0:e.map((e=>{if(!i[e])return null;const{t,n:s}=JSON.parse(i[e]);return(0,r.jsx)(Ie,{children:`${t}, ${s}`})}))}),[t.g]),o=(0,l.useMemo)((()=>{var e;return null===(e=t.p)||void 0===e?void 0:e.map((e=>(0,r.jsx)(Ie,{children:s[e]})))}),[t.p]),a=(0,l.useMemo)((()=>{var e;return null===(e=t.s)||void 0===e?void 0:e.map((e=>(0,r.jsx)(We,{src:"https://cdn.mobygames.com/screenshots/"+e})))}),[t.s]),c=(0,l.useMemo)((()=>[2,4,6,8,10].map((e=>Number(t.r)>=e?(0,r.jsx)(U,{type:"star"}):Number(t.r)-e>-2?(0,r.jsx)(U,{type:"starHalf"}):(0,r.jsx)(U,{type:"starLine"})))),[t.r]);return(0,r.jsxs)(Je,{children:[(0,r.jsxs)(H,{children:[(0,r.jsx)(q,{children:(0,r.jsx)(Ue,{src:null==t?void 0:t.c})}),(0,r.jsxs)(q,{children:[(0,r.jsx)(V,{children:null==t?void 0:t.n}),(0,r.jsx)(He,{children:fe(null==t?void 0:t.y)}),(0,r.jsxs)(Ke,{children:[c," ",t.r]}),(0,r.jsx)(qe,{dangerouslySetInnerHTML:{__html:null==t?void 0:t.d}}),(0,r.jsx)(Qe,Object.assign({href:null==t?void 0:t.l},{children:"MobyGames"}))]})]}),(0,r.jsxs)(H,{children:[(0,r.jsxs)(q,{children:[(0,r.jsxs)(V,{children:[(0,r.jsx)(U,{type:"category"}),"Categories"]}),(0,r.jsx)(W,{}),(0,r.jsx)(Ge,{children:n})]}),(0,r.jsxs)(q,{children:[(0,r.jsxs)(V,{children:[(0,r.jsx)(U,{type:"platform"}),"Platforms"]}),(0,r.jsx)(W,{}),(0,r.jsx)(Ge,{children:o})]})]}),(0,r.jsx)(H,{children:(0,r.jsxs)(q,{children:[(0,r.jsxs)(V,{children:[(0,r.jsx)(U,{type:"screenshot"}),"Screenshots"]}),(0,r.jsx)(W,{}),(0,r.jsx)(Ve,{children:a})]})})]})};const et=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    height: 100%;
    max-height: ${e.size(200)};
    padding: ${e.size(4)};
  `)),tt=(o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.size(2)};
    background-color: ${e.colors.bg1+"44"};
    backdrop-filter: blur(8px);
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.high};
    color: ${e.colors.white};
    padding: ${e.size(4)};
  `)),o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `))),it=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    margin-top: ${e.size(1.5)};

    :hover {
      color: ${e.colors.red};
    }
  `)),rt=o.ZP.iframe((({theme:e})=>o.iv`
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

    @media (max-width: ${F}px) {
      height: ${e.size(150)};
    }

    @media (max-width: ${900}px) {
      height: ${e.size(125)};
    }

    @media (max-width: ${N}px) {
      height: ${e.size(100)};
    }
  `)),st=e=>{const{query:t}=e,[i,s]=(0,l.useState)([]),[n,o]=(0,l.useState)(0);return(0,l.useEffect)((()=>{t&&((e=>{return t=void 0,i=void 0,s=function*(){const t="https://corsproxy.io/?"+encodeURIComponent("https://www.youtube.com/youtubei/v1/search"),i={context:{client:{hl:"en",gl:"BR",clientName:"WEB",clientVersion:"2.20240111.09.00",timeZone:"America/Fortaleza"}},query:e},r=yield fetch(t,{headers:{"accept-language":"en-US,en;q=0.9","content-type":"application/json"},body:JSON.stringify(i),method:"POST",mode:"cors"});return(yield r.json()).contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.map((e=>{var t;return null===(t=null==e?void 0:e.videoRenderer)||void 0===t?void 0:t.videoId})).filter((e=>!!e)).map((e=>`https://www.youtube.com/embed/${e}?fs=0`))},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{l(s.next(e))}catch(e){n(e)}}function a(e){try{l(s.throw(e))}catch(e){n(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,a)}l((s=s.apply(t,i||[])).next())}));var t,i,r,s})(t+"gameplay").then(s),o(0))}),[t]),(0,r.jsx)(et,{children:(0,r.jsxs)(q,{children:[(0,r.jsxs)(tt,{children:[(0,r.jsxs)(V,{children:[(0,r.jsx)(U,{type:"youtube"}),"Youtube"]}),(0,r.jsxs)(it,{children:[(0,r.jsx)(U,{size:10,type:"previous",onClick:()=>n&&o(n-1)}),(0,r.jsx)(U,{size:10,type:"next",onClick:()=>n<i.length-1&&o(n+1)})]})]}),(0,r.jsx)(W,{}),(0,r.jsx)(ae,Object.assign({check:!!t},{children:(0,r.jsx)(rt,{src:i[n]})}))]})})};const nt=()=>{const{darkTheme:e}=h(),[t,i]=(0,l.useState)(!1),[s,n]=(0,l.useState)(null);return(0,l.useEffect)((()=>{var e,t,r,s;(e=void 0,t=void 0,r=void 0,s=function*(){i(!0),yield ue()},new(r||(r=Promise))((function(i,n){function o(e){try{l(s.next(e))}catch(e){n(e)}}function a(e){try{l(s.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))).finally((()=>i(!1)))}),[]),(0,r.jsxs)(Te,{children:[(0,r.jsx)(te,{}),(0,r.jsx)(De,{}),(0,r.jsx)(we,{onSelect:n}),(0,r.jsxs)(se,Object.assign({show:!!(null==s?void 0:s.n)},{children:[(0,r.jsxs)(ne,{children:[(0,r.jsxs)(V,{children:[(0,r.jsx)(U,{type:"list"}),"Description"]}),(0,r.jsx)(U,{type:"close",size:8,onClick:()=>n(null)})]}),(0,r.jsxs)(oe,{children:[s&&(0,r.jsx)(Xe,{game:s}),s&&(0,r.jsx)(st,{query:null==s?void 0:s.n})]})]})),(0,r.jsx)(Ze,{type:"fullScreen",show:t,title:"Loading Game List"}),(0,r.jsx)(re,{isDark:e})]})},ot=()=>{const{darkTheme:e}=h();return(0,r.jsxs)(o.f6,Object.assign({theme:e?D:B},{children:[(0,r.jsx)(u,{}),(0,r.jsx)(a.Z5,Object.assign({location:window.location},{children:(0,r.jsx)(a.AW,{path:"/*",element:(0,r.jsx)(nt,{})})}))]}))},at=(0,l.createContext)(null),lt=e=>{const[t,i]=(0,l.useState)("/game-view"),[s,n]=(0,l.useState)(""),o={pathname:t,hash:"",search:"",lang:s,setPath:i,setLang:n},a=(0,l.useMemo)((()=>o),[JSON.stringify(o)]);return(0,r.jsx)(at.Provider,Object.assign({value:a},{children:e.children}))};(0,s.s)(document.getElementById("root")).render((0,r.jsx)((()=>(0,r.jsx)(d,{children:(0,r.jsx)(lt,{children:(0,r.jsx)(o.LC,{children:(0,r.jsx)(pe,{children:(0,r.jsx)(n.VK,{children:(0,r.jsx)(ot,{})})})})})})),{}))}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,e=[],n.O=(t,i,r,s)=>{if(!i){var o=1/0;for(d=0;d<e.length;d++){for(var[i,r,s]=e[d],a=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((e=>n.O[e](i[l])))?i.splice(l--,1):(a=!1,s<o&&(o=s));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,r,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var s=Object.create(null);n.r(s);var o={};t=t||[null,i({}),i([]),i(i)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,n.d(s,o),s},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!e;)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var r,s,[o,a,l]=i,c=0;if(o.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var d=l(n)}for(t&&t(i);c<o.length;c++)s=o[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},i=this.webpackChunkgame_finder=this.webpackChunkgame_finder||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),n.nc=void 0;var o=n.O(void 0,[977],(()=>n(755)));o=n.O(o)})();