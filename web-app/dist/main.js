(()=>{"use strict";var e,t,i,s={472:(e,t,i)=>{var s=i(893),r=i(745),n=i(655),o=i(133),a=i(250);i.p;const l=(0,o.vJ)((({theme:e})=>o.iv`
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
  `)),d="#8e24aa",c="#7b1fa2",h="#2196f3",u="#1976d2",x="#1565c0",m="#fafafa",g="#f5f5f5",p="#eeeeee",f="#e0e0e0",j="#bdbdbd",b="#9e9e9e",v="#757575",$="#616161",y="#424242",w="#141414",z=e=>`${(.2*e).toFixed(1)}rem`,P=768,S=1024,k=(o.F4`
    from { transform: translateY(6rem); opacity: 0; } 
    to { opacity: 1 }`,o.F4`
    from { transform: translateY(12rem); opacity: 0; } 
    to { opacity: 1; }`),O=o.F4`
    from { opacity: 0; } 
    to { opacity: 1; }`,Z=o.F4`
    to { transform: rotateZ(360deg); }`,C={black:`linear-gradient(90deg, ${$}, ${y})`,white:`linear-gradient(90deg, ${p}, ${f})`,blue:`linear-gradient(90deg, ${h}, ${u})`,darkBlue:`linear-gradient(90deg, ${u}, ${x})`},M={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:d,mainBg:c,bg1:m,bg2:g,bg3:p,bg4:f,text1:y,text2:v,text3:b,text4:j,gray:b,yellow:"#B38600",red:"#CA3521",blue:"#388BFF",green:"#558b2f",white:m,black:w,gradientBg:C.white},fontSize:{h1:"1.3rem",h2:"1.25rem",h3:"1.2rem",h4:"1.15rem",h5:"1.1rem",h6:"1.05rem",body:"1rem",label:"0.9rem",small:"0.95rem",verySmall:"0.85rem"},shadow:{low:"1px 1px 2px 1px #0004",medium:"1px 1px 3px 1px #0007",high:"1px 1px 3px 1px #000A"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}};Object.assign(Object.assign({},M),{colors:Object.assign(Object.assign({},M.colors),{bg1:w,bg2:w+"DD",bg3:w+"BB",bg4:w+"99",text1:p,text2:f,text3:j,text4:b,gray:v,white:f,gradientBg:C.black})});var L=i(294);const B=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    padding: ${e.size(2)};
    margin: ${e.size(2)} 0;
    border-radius: ${e.radius.large};
    background-color: ${e.colors.bg2};
    box-shadow: ${e.shadow.low};
  `)),F=()=>(0,s.jsx)(B,{children:"Game Finder"});var _=i(279);const N={download:(0,s.jsx)(_.HA8,{}),selector:(0,s.jsx)(_.ZaQ,{}),spinner:(0,s.jsx)(_.H4p,{}),next:(0,s.jsx)(_.U4K,{}),previous:(0,s.jsx)(_._L$,{}),youtube:(0,s.jsx)(_.pzF,{}),star:(0,s.jsx)(_.Kz,{}),starLine:(0,s.jsx)(_.u20,{}),category:(0,s.jsx)(_.yTT,{}),platform:(0,s.jsx)(_.pa0,{}),screenshot:(0,s.jsx)(_.QVH,{}),date:(0,s.jsx)(_.qXL,{}),list:(0,s.jsx)(_.dR_,{}),search:(0,s.jsx)(_.t2h,{}),close:(0,s.jsx)(_.eSQ,{})},E=o.ZP.span((({theme:e,size:t})=>o.iv`
    display: inline-flex;
    font-size: ${e.size(t||7)};
    cursor: pointer;
  `)),G=e=>{const{type:t,size:i,style:r,onClick:n}=e,o=(0,L.useMemo)((()=>N[t]),[]);return(0,s.jsx)(E,Object.assign({className:"icon",size:i,style:r,onClick:n},{children:o}))},T=o.ZP.h4((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
  `)),I=o.ZP.hr((({theme:e})=>o.iv`
    border-color: ${e.colors.text1+"44"};
  `)),R=o.ZP.div((({show:e})=>o.iv`
    display: ${e?"flex":"none"};
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    animation: 0.5s ${O} ease-out;
    background-color: #5555;
    backdrop-filter: blur(12px);
  `)),J=o.ZP.div((()=>o.iv`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${z(350)};
    padding: ${z(4)};
    background-image: ${C.blue};
    color: #fff;
  `)),U=o.ZP.div((()=>o.iv`
    width: 100%;
    height: 100%;
    max-width: ${z(350)};
    padding: ${z(6)} 0 ${z(10)};
    overflow: auto;
    animation: 0.5s ${k} ease-out;
  `)),A=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    display: flex;
    padding: 0 ${e.size(4)} ${e.size(4)};
    gap: ${e.size(4)};

    @media (max-width: ${S}px) {
      flex-direction: column;
    }
  `)),q=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${e.size(4)};
    padding: ${e.size(4)};
    background-color: ${e.colors.bg2};
    color: ${e.colors.text2};
    border-radius: ${e.radius.veryLarge};
    box-shadow: ${e.shadow.low};
  `)),Q=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    width: 100%;

    @media (max-width: ${P}px) {
      width: 100%;
      flex-direction: column;
    }
  `));i.p;var Y=function(e,t,i,s){return new(i||(i=Promise))((function(r,n){function o(e){try{l(s.next(e))}catch(e){n(e)}}function a(e){try{l(s.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};let D={games:[],filtered:[],categories:[],platforms:[]};const H=()=>Y(void 0,void 0,void 0,(function*(){try{D=yield(yield fetch("https://klessitonrodrigues.github.io/game-finder/assets/json/games.json")).json();const{categories:e,platforms:t}=D;return{categories:e,platforms:t}}catch(e){console.error(e)}})),K=(0,L.createContext)(null),V=e=>{const[t,i]=(0,L.useState)(0),[r,n]=(0,L.useState)(0),[o,a]=(0,L.useState)([]),[l,d]=(0,L.useState)([]),c={lastUpdate:t,selectedGame:r,categories:o,platforms:l,setLastUpdate:i,setSelectedGame:n,setPlatforms:d,setCategories:a};(0,L.useEffect)((()=>{H().then((e=>{a(e.categories),d(e.platforms)}))}),[]);const h=(0,L.useMemo)((()=>c),[JSON.stringify(c)]);return(0,s.jsx)(K.Provider,Object.assign({value:h},{children:e.children}))},W=()=>(0,L.useContext)(K),X=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    padding: ${e.size(4)};
  `)),ee=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${z(8)} ${z(4)};
    padding: ${e.size(2)} 0;
  `)),te=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${e.size(80)};
    border: 2px solid ${e.colors.text1+"44"};
    border-radius: ${e.radius.large};
    overflow: hidden;
    cursor: pointer;
    transition: 0.2s;
    animation: ${k} 0.5s;

    @media (max-width: ${P}px) {
      max-width: unset;
    }
  `)),ie=o.ZP.img((({theme:e})=>o.iv`
    width: 100%;
    height: 100%;
    max-width: ${e.size(80)};
    max-height: ${e.size(95)};
    background-color: ${e.colors.bg3};
    border: none;

    @media (max-width: ${P}px) {
      max-width: unset;
      max-height: ${e.size(120)};
    }
  `)),se=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-direction: column;
    height: ${e.size(22)};
    background-color: ${e.colors.bg3};
    color: ${e.colors.text1};
    padding: ${e.size(3)} ${e.size(2)};
    font-size: ${e.fontSize.verySmall};
    font-weight: bold;

    b {
      color: ${e.colors.text3};
    }
  `)),re=e=>{const{onSelect:t}=e,{lastUpdate:i}=W(),[r,n]=(0,L.useState)([]),[o,a]=(0,L.useState)(0);(0,L.useEffect)((()=>{n(((e,t)=>{var i;if(e<0)return[];const s=20*e;return null===(i=D.filtered)||void 0===i?void 0:i.slice(s,s+20)})(o))}),[i]);const l=(0,L.useMemo)((()=>r.map((e=>(0,s.jsxs)(te,Object.assign({onClick:()=>t(e)},{children:[(0,s.jsx)(ie,{src:e.c}),(0,s.jsxs)(se,{children:[(0,s.jsx)("b",{children:"2024"}),(0,s.jsx)("div",{children:e.n})]})]}),e.i)))),[r]);return l.length?(0,s.jsx)(X,{children:(0,s.jsxs)(q,{children:[(0,s.jsxs)(T,{children:[(0,s.jsx)(G,{type:"list"}),"Game List"]}),(0,s.jsx)(I,{}),(0,s.jsx)(ee,{children:l})]})}):null},ne=(0,L.createContext)(null),oe=e=>{const[t,i]=(0,L.useState)(""),[r,n]=(0,L.useState)(0),[o,a]=(0,L.useState)(0),l={gameId:t,gameCategory:r,gamePlatform:o,setGameId:i,setGameCategory:n,setGamePlatform:a},d=(0,L.useMemo)((()=>l),[JSON.stringify(l)]);return(0,s.jsx)(ne.Provider,Object.assign({value:d},{children:e.children}))},ae=()=>(0,L.useContext)(ne),le={i:1,n:"",l:"",d:"",c:"",s:[],g:[],p:[]},de=e=>e.check?e.true||e.children:e.false,ce=o.ZP.div((()=>o.iv``)),he=o.ZP.div((()=>o.iv`
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
  `)),ue=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.size(8)};
    animation: ${Z} 0.8s infinite linear;
    color: ${e.colors.white};
  `)),xe=o.ZP.h1((({theme:e})=>o.iv`
    font-size: ${e.fontSize.label};
    margin-bottom: ${e.size(2)};
    animation: ${k} 0.5s ease-out;
    color: ${e.colors.white};
  `)),me=o.ZP.p((({theme:e})=>o.iv`
    font-size: ${e.fontSize.verySmall};
    animation: ${k} 0.5s ease-out;
    color: ${e.colors.white};
  `)),ge=e=>{const{show:t,type:i,title:r,description:n}=e;return(0,s.jsxs)(ce,{children:[(0,s.jsx)(de,Object.assign({check:t&&"icon"===i},{children:(0,s.jsx)(ue,{children:(0,s.jsx)(G,{type:"spinner",size:12})})})),(0,s.jsx)(de,Object.assign({check:t&&"fullScreen"===i},{children:(0,s.jsxs)(he,{children:[(0,s.jsx)(ue,{children:(0,s.jsx)(G,{type:"spinner",size:12})}),(0,s.jsx)(xe,{children:r}),(0,s.jsx)(me,{children:n})]})}))]})},pe=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    max-width: ${e.size(350)};
    margin: auto;
  `)),fe=e=>(0,s.jsx)(pe,{children:e.children}),je=o.ZP.ol((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(3)};
    padding: ${e.size(2)} ${e.size(3)};
    border: 1px solid transparent;
    border-radius: ${e.radius.large};
    background-image: ${C.blue};
    color: ${e.colors.white};
    box-shadow: ${e.shadow.low};
    font-size: ${e.fontSize.label};
    font-weight: bold;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      background-image: ${C.darkBlue};
    }

    .icon {
      color: ${e.colors.white};
    }
  `)),be=o.ZP.label((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)} ${e.size(3)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    border-radius: ${e.radius.medium};
    background-image: ${C.blue};
    color: ${e.colors.white};
    box-shadow: ${e.shadow.low};

    &:hover {
      background-image: ${C.darkBlue};

      input {
        border-bottom: 1px solid ${e.colors.white};
      }
    }
  `)),ve=o.ZP.div((()=>o.iv`
    min-width: max-content;
  `)),$e=o.ZP.input((({theme:e})=>o.iv`
    width: 100%;
    padding-left: ${e.size(2)};
    padding-top: ${e.size(.5)};
    font-size: ${e.fontSize.body};
    font-weight: bold;
    border: none;
    background-color: transparent;
    color: ${e.colors.white};
  `)),ye=o.ZP.label((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)} ${e.size(3)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    background-image: ${C.blue};
    color: ${e.colors.white};
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.low};

    &:hover {
      background-image: ${C.darkBlue};
    }
  `)),we=o.ZP.select((({theme:e})=>o.iv`
    width: 100%;
    font-family: sans-serif;
    font-size: ${e.fontSize.body};
    color: ${e.colors.white};
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
  `)),ze=o.ZP.div((()=>o.iv`
    min-width: max-content;
  `)),Pe=o.ZP.option((({theme:e})=>o.iv`
    background-color: ${e.colors.bg1};
    color: ${e.colors.text1};
  `)),Se=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${e.size(4)};
    padding: ${e.size(4)};
    margin: auto;
  `)),ke=()=>{const{gameCategory:e,gamePlatform:t,setGameCategory:i,setGamePlatform:r}=ae(),{categories:n,platforms:o,setLastUpdate:a}=W(),[l,d]=(0,L.useState)(""),c=(0,L.useMemo)((()=>o.map(((e,t)=>(0,s.jsx)(Pe,Object.assign({value:t},{children:e}))))),[o]),h=(0,L.useMemo)((()=>{const e=[],t=[];return n.forEach(((i,s)=>{const{t:r,n}=JSON.parse(i);e.includes(r)||e.push(r),""!==l&&l!==r||t.push({i:s,name:n})})),{types:e,items:t}}),[n,l]),u=(0,L.useMemo)((()=>h.types.map((e=>(0,s.jsx)(Pe,Object.assign({value:e},{children:e}))))),[n]),x=(0,L.useMemo)((()=>h.items.map((e=>(0,s.jsx)(Pe,Object.assign({value:e.i},{children:e.name}))))),[n,l]);return(0,s.jsx)(Se,{children:(0,s.jsxs)(q,{children:[(0,s.jsxs)(T,{children:[(0,s.jsx)(G,{type:"selector"}),"Filters"]}),(0,s.jsx)(I,{}),(0,s.jsxs)(Q,{children:[(0,s.jsxs)(be,{children:[(0,s.jsx)(G,{type:"search"}),(0,s.jsx)(ve,{children:"Search"}),(0,s.jsx)($e,{type:"search",value:"2023"})]}),(0,s.jsxs)(ye,{children:[(0,s.jsx)(G,{type:"platform"}),(0,s.jsx)(ze,{children:"Platform"}),(0,s.jsx)(we,Object.assign({value:t,onChange:e=>r(Number(e.target.value))},{children:c}))]})]}),(0,s.jsxs)(Q,{children:[(0,s.jsxs)(ye,{children:[(0,s.jsx)(G,{type:"category"}),(0,s.jsx)(ze,{children:"Category Type"}),(0,s.jsx)(we,Object.assign({value:l,onChange:e=>d(e.target.value)},{children:u}))]}),(0,s.jsxs)(ye,{children:[(0,s.jsx)(G,{type:"category"}),(0,s.jsx)(ze,{children:"Category"}),(0,s.jsx)(we,Object.assign({value:e,onChange:e=>i(Number(e.target.value))},{children:x}))]})]}),(0,s.jsxs)(Q,{children:[(0,s.jsxs)(be,{children:[(0,s.jsx)(G,{type:"date"}),(0,s.jsx)(ve,{children:"From Year"}),(0,s.jsx)($e,{type:"number",value:"2023"})]}),(0,s.jsxs)(be,{children:[(0,s.jsx)(G,{type:"date"}),(0,s.jsx)(ve,{children:"To Year"}),(0,s.jsx)($e,{type:"number",value:"2023"})]})]}),(0,s.jsxs)(Q,{children:[(0,s.jsxs)(ye,{children:[(0,s.jsx)(G,{type:"list"}),(0,s.jsx)(ze,{children:"List Format"}),(0,s.jsxs)(we,Object.assign({value:t,onChange:e=>r(Number(e.target.value))},{children:[(0,s.jsx)(Pe,{children:"Ordered"}),(0,s.jsx)(Pe,{children:"Random"})]}))]}),(0,s.jsxs)(ye,{children:[(0,s.jsx)(G,{type:"list"}),(0,s.jsx)(ze,{children:"Pages Items"}),(0,s.jsxs)(we,Object.assign({value:t,onChange:e=>r(Number(e.target.value))},{children:[(0,s.jsx)(Pe,{children:"10"}),(0,s.jsx)(Pe,{children:"25"}),(0,s.jsx)(Pe,{children:"50"})]}))]})]}),(0,s.jsx)(Q,{children:(0,s.jsxs)(je,Object.assign({onClick:()=>{((e,t)=>{try{const{games:i}=D,s=i.filter((i=>{const{g:s,p:r}=i;return!(!(null==s?void 0:s.includes(e))||!(null==r?void 0:r.includes(t)))})).sort(((e,t)=>Math.random()-.5));D.filtered=s}catch(e){console.error(e)}})(e,t),a(Date.now())}},{children:[(0,s.jsx)(G,{type:"search"}),"Find Games"]}))})]})})},Oe=o.ZP.ol((({theme:e})=>o.iv`
    padding-left: ${e.size(6)};
  `)),Ze=o.ZP.li((({theme:e})=>o.iv`
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
  `)),Ce=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
  `)),Me=o.ZP.img((({theme:e})=>o.iv`
    margin: auto;
    width: 100%;
    max-width: ${e.size(140)};
    border-radius: ${e.radius.large};
    overflow: hidden;
  `)),Le=o.ZP.h4((({theme:e})=>o.iv``)),Be=o.ZP.p((({theme:e})=>o.iv``)),Fe=o.ZP.a((({theme:e})=>o.iv`
    text-decoration: none;
  `)),_e=o.ZP.div((({theme:e})=>o.iv``)),Ne=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${e.size(4)};
    padding: ${e.size(4)} 0;
  `)),Ee=o.ZP.img((({theme:e})=>o.iv`
    width: 100%;
    max-width: ${e.size(160)};
    border-radius: ${e.radius.large};
    border: 2px solid ${e.colors.white+"44"};

    @media (max-width: ${S}px) {
      max-width: ${e.size(220)};
    }
  `)),Ge=e=>{const{game:t}=e,{categories:i,platforms:r}=W(),n=(0,L.useMemo)((()=>{var e;return null===(e=t.g)||void 0===e?void 0:e.map((e=>{if(!i[e])return null;const{t,n:r}=JSON.parse(i[e]);return(0,s.jsx)(Ze,{children:`${t}, ${r}`})}))}),[t.g]),o=(0,L.useMemo)((()=>{var e;return null===(e=t.p)||void 0===e?void 0:e.map((e=>(0,s.jsx)(Ze,{children:r[e]})))}),[t.p]),a=(0,L.useMemo)((()=>{var e;return null===(e=t.s)||void 0===e?void 0:e.map((e=>(0,s.jsx)(Ee,{src:e})))}),[t.s]);return(0,s.jsxs)(Ce,{children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(q,{children:(0,s.jsx)(Me,{src:null==t?void 0:t.c})}),(0,s.jsxs)(q,{children:[(0,s.jsx)(T,{children:null==t?void 0:t.n}),(0,s.jsx)(Le,{children:"2024"}),(0,s.jsxs)(_e,{children:[(0,s.jsx)(G,{type:"star"}),(0,s.jsx)(G,{type:"star"}),(0,s.jsx)(G,{type:"star"}),(0,s.jsx)(G,{type:"starLine"}),(0,s.jsx)(G,{type:"starLine"})]}),(0,s.jsx)(Be,{dangerouslySetInnerHTML:{__html:null==t?void 0:t.d}}),(0,s.jsx)(Fe,Object.assign({href:null==t?void 0:t.l},{children:"MobyGames"}))]})]}),(0,s.jsxs)(A,{children:[(0,s.jsxs)(q,{children:[(0,s.jsxs)(T,{children:[(0,s.jsx)(G,{type:"category"}),"Categories"]}),(0,s.jsx)(I,{}),(0,s.jsx)(Oe,{children:n})]}),(0,s.jsxs)(q,{children:[(0,s.jsxs)(T,{children:[(0,s.jsx)(G,{type:"platform"}),"Platforms"]}),(0,s.jsx)(I,{}),(0,s.jsx)(Oe,{children:o})]})]}),(0,s.jsx)(A,{children:(0,s.jsxs)(q,{children:[(0,s.jsxs)(T,{children:[(0,s.jsx)(G,{type:"screenshot"}),"Screenshots"]}),(0,s.jsx)(I,{}),(0,s.jsx)(Ne,{children:a})]})})]})};const Te=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    height: 100%;
    max-height: ${e.size(200)};
    padding: ${e.size(4)};
  `)),Ie=(o.ZP.div((({theme:e})=>o.iv`
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
  `))),Re=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    margin-top: ${e.size(1.5)};

    :hover {
      color: ${e.colors.red};
    }
  `)),Je=o.ZP.iframe((({theme:e})=>o.iv`
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

    @media (max-width: ${S}px) {
      height: ${e.size(150)};
    }

    @media (max-width: ${900}px) {
      height: ${e.size(125)};
    }

    @media (max-width: ${P}px) {
      height: ${e.size(100)};
    }
  `)),Ue=e=>{const{query:t}=e,[i,r]=(0,L.useState)([]),[n,o]=(0,L.useState)(0);return(0,L.useEffect)((()=>{t&&((e=>{return t=void 0,i=void 0,r=function*(){const t="https://corsproxy.io/?"+encodeURIComponent("https://www.youtube.com/youtubei/v1/search"),i={context:{client:{hl:"en",gl:"BR",clientName:"WEB",clientVersion:"2.20240111.09.00",timeZone:"America/Fortaleza"}},query:e},s=yield fetch(t,{headers:{"accept-language":"en-US,en;q=0.9","content-type":"application/json"},body:JSON.stringify(i),method:"POST",mode:"cors"});return(yield s.json()).contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.map((e=>{var t;return null===(t=null==e?void 0:e.videoRenderer)||void 0===t?void 0:t.videoId})).filter((e=>!!e)).map((e=>`https://www.youtube.com/embed/${e}?fs=0`))},new((s=void 0)||(s=Promise))((function(e,n){function o(e){try{l(r.next(e))}catch(e){n(e)}}function a(e){try{l(r.throw(e))}catch(e){n(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(o,a)}l((r=r.apply(t,i||[])).next())}));var t,i,s,r})(t+"gameplay").then(r),o(0))}),[t]),(0,s.jsx)(Te,{children:(0,s.jsxs)(q,{children:[(0,s.jsxs)(Ie,{children:[(0,s.jsxs)(T,{children:[(0,s.jsx)(G,{type:"youtube"}),"Youtube"]}),(0,s.jsxs)(Re,{children:[(0,s.jsx)(G,{size:10,type:"previous",onClick:()=>n&&o(n-1)}),(0,s.jsx)(G,{size:10,type:"next",onClick:()=>n<i.length-1&&o(n+1)})]})]}),(0,s.jsx)(I,{}),(0,s.jsx)(de,Object.assign({check:!!t},{children:(0,s.jsx)(Je,{src:i[n]})}))]})})};const Ae=()=>{const{gameId:e}=ae(),[t,i]=(0,L.useState)(!1),[r,n]=(0,L.useState)(le);return(0,L.useEffect)((()=>{var e,t,s,r;(e=void 0,t=void 0,s=void 0,r=function*(){i(!0),yield H()},new(s||(s=Promise))((function(i,n){function o(e){try{l(r.next(e))}catch(e){n(e)}}function a(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))).finally((()=>i(!1)))}),[]),(0,L.useEffect)((()=>{var t;(t=Number(e),Y(void 0,void 0,void 0,(function*(){return D.games.find((e=>e.i===t))}))).then((e=>e.n&&n(e)))}),[e]),(0,s.jsxs)(fe,{children:[(0,s.jsx)(F,{}),(0,s.jsx)(ke,{}),(0,s.jsx)(re,{onSelect:n}),(0,s.jsxs)(R,Object.assign({show:!!(null==r?void 0:r.n)},{children:[(0,s.jsxs)(J,{children:[(0,s.jsxs)(T,{children:[(0,s.jsx)(G,{type:"list"}),"Description"]}),(0,s.jsx)(G,{type:"close",size:8,onClick:()=>n(le)})]}),(0,s.jsxs)(U,{children:[(0,s.jsx)(Ge,{game:r}),(0,s.jsx)(Ue,{query:null==r?void 0:r.n})]})]})),(0,s.jsx)(ge,{type:"fullScreen",show:t,title:"Loading Game List"})]})},qe=()=>(0,s.jsxs)(o.f6,Object.assign({theme:M},{children:[(0,s.jsx)(l,{}),(0,s.jsx)(a.Z5,Object.assign({location:window.location},{children:(0,s.jsx)(a.AW,{path:"/*",element:(0,s.jsx)(Ae,{})})}))]})),Qe=(0,L.createContext)(null),Ye=e=>{const[t,i]=(0,L.useState)("/game-view"),[r,n]=(0,L.useState)(""),o={pathname:t,hash:"",search:"",lang:r,setPath:i,setLang:n},a=(0,L.useMemo)((()=>o),[JSON.stringify(o)]);return(0,s.jsx)(Qe.Provider,Object.assign({value:a},{children:e.children}))};(0,r.s)(document.getElementById("root")).render((0,s.jsx)((()=>(0,s.jsx)(oe,{children:(0,s.jsx)(Ye,{children:(0,s.jsx)(o.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,s.jsx)(V,{children:(0,s.jsx)(n.VK,{children:(0,s.jsx)(qe,{})})})}))})})),{}))}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return s[e](i,i.exports,n),i.exports}n.m=s,e=[],n.O=(t,i,s,r)=>{if(!i){var o=1/0;for(c=0;c<e.length;c++){for(var[i,s,r]=e[c],a=!0,l=0;l<i.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](i[l])))?i.splice(l--,1):(a=!1,r<o&&(o=r));if(a){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,s,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,s){if(1&s&&(e=this(e)),8&s)return e;if("object"==typeof e&&e){if(4&s&&e.__esModule)return e;if(16&s&&"function"==typeof e.then)return e}var r=Object.create(null);n.r(r);var o={};t=t||[null,i({}),i([]),i(i)];for(var a=2&s&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,n.d(r,o),r},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var s=i.length-1;s>-1&&!e;)e=i[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var s,r,[o,a,l]=i,d=0;if(o.some((t=>0!==e[t]))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var c=l(n)}for(t&&t(i);d<o.length;d++)r=o[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},i=this.webpackChunkgame_finder=this.webpackChunkgame_finder||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),n.nc=void 0;var o=n.O(void 0,[977],(()=>n(472)));o=n.O(o)})();