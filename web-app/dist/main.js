(()=>{"use strict";var e,t,i,s={709:(e,t,i)=>{var s=i(893),r=i(745),n=i(655),o=i(133),a=i(250),l=i(294);const d=(0,l.createContext)(null),c=e=>{const[t,i]=(0,l.useState)(!1),r={darkTheme:t,setDarkTheme:i},n=(0,l.useMemo)((()=>r),[JSON.stringify(r)]);return(0,s.jsx)(d.Provider,Object.assign({value:n},{children:e.children}))},h=()=>(0,l.useContext)(d),u=(i.p,(0,o.vJ)((({theme:e})=>o.iv`
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
  `))),x="#ba68c8",m="#8e24aa",g="#7b1fa2",p="#1e88e5",f="#1976d2",j="#1565c0",b="#4fc3f7",v="#fafafa",$="#f5f5f5",y="#eeeeee",w="#e0e0e0",z="#bdbdbd",k="#9e9e9e",P="#757575",S="#616161",O="#424242",Z="#141414",C=e=>`${(.2*e).toFixed(1)}rem`,M=768,L=1024,T=(o.F4`
    from { transform: translateY(6rem); opacity: 0; } 
    to { opacity: 1 }`,o.F4`
    from { transform: translateY(12rem); opacity: 0; } 
    to { opacity: 1; }`),_=o.F4`
    from { opacity: 0; } 
    to { opacity: 1; }`,B=o.F4`
    to { transform: rotateZ(360deg); }`,F={black:`linear-gradient(180deg, ${P}, ${S})`,white:`linear-gradient(180deg, ${y}, ${w})`,blue:`linear-gradient(180deg, ${p}, ${f})`,darkBlue:`linear-gradient(180deg, ${f}, ${j})`},N={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:m,mainBg:g,bg1:v,bg2:$,bg3:y,bg4:w,text1:O,text2:P,text3:k,text4:z,gray:k,yellow:"#B38600",red:"#CA3521",blue:"#388BFF",green:"#558b2f",white:v,black:Z,gradientBg:F.white},fontSize:{h1:"1.3rem",h2:"1.25rem",h3:"1.2rem",h4:"1.15rem",h5:"1.1rem",h6:"1.05rem",body:"1rem",label:"0.9rem",small:"0.95rem",verySmall:"0.85rem"},shadow:{low:"1px 1px 2px 1px #0004",medium:"1px 1px 3px 1px #0007",high:"1px 1px 3px 1px #000A"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},E=Object.assign(Object.assign({},N),{colors:Object.assign(Object.assign({},N.colors),{bg1:Z,bg2:Z+"DD",bg3:Z+"BB",bg4:Z+"99",text1:y,text2:w,text3:z,text4:k,gray:P,white:y,gradientBg:F.black})});var R=i(279);const D={download:(0,s.jsx)(R.HA8,{}),selector:(0,s.jsx)(R.ZaQ,{}),spinner:(0,s.jsx)(R.H4p,{}),next:(0,s.jsx)(R.U4K,{}),previous:(0,s.jsx)(R._L$,{}),youtube:(0,s.jsx)(R.pzF,{}),star:(0,s.jsx)(R.Kz,{}),starLine:(0,s.jsx)(R.u20,{}),category:(0,s.jsx)(R.yTT,{}),platform:(0,s.jsx)(R.pa0,{}),screenshot:(0,s.jsx)(R.QVH,{}),date:(0,s.jsx)(R.qXL,{}),list:(0,s.jsx)(R.dR_,{}),search:(0,s.jsx)(R.t2h,{}),close:(0,s.jsx)(R.eSQ,{}),sun:(0,s.jsx)(R.sEY,{}),moon:(0,s.jsx)(R.S6R,{}),github:(0,s.jsx)(R.ioR,{})},Y=o.ZP.span((({theme:e,size:t})=>o.iv`
    display: inline-flex;
    font-size: ${e.size(t||7)};
    cursor: pointer;
  `)),G=e=>{const{type:t,size:i,style:r,onClick:n}=e,o=(0,l.useMemo)((()=>D[t]),[t]);return(0,s.jsx)(Y,Object.assign({className:"icon",size:i,style:r,onClick:n},{children:o}))},I=o.ZP.div((()=>o.iv`
    width: 100%;
    display: flex;
    padding: 0 ${C(4)} ${C(4)};
    gap: ${C(4)};

    @media (max-width: ${L}px) {
      flex-direction: column;
    }
  `)),J=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${C(4)};
    padding: ${C(4)};
    background-color: ${e.colors.bg2};
    color: ${e.colors.text2};
    border-radius: ${e.radius.veryLarge};
    box-shadow: ${e.shadow.low};
    transition: 0.5s;
  `)),U=o.ZP.div((()=>o.iv`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${C(4)};
    width: 100%;
  `)),A=o.ZP.div((({justify:e})=>o.iv`
    display: flex;
    align-items: center;
    justify-content: ${e||"flex-start"};
    gap: ${C(4)};
    width: 100%;

    @media (max-width: ${M}px) {
      width: 100%;
      flex-direction: column;
    }
  `)),q=o.ZP.h4((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
  `)),Q=o.ZP.hr((({theme:e})=>o.iv`
    border-color: ${e.colors.text1+"44"};
  `)),H=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    padding: ${e.size(4)};
  `)),K=o.ZP.div((()=>o.iv`
    display: flex;
    align-items: center;
    gap: ${C(4)};

    a {
      font-size: 0;
      padding: 0;
      margin: 0;
    }
  `)),V=()=>{const{darkTheme:e,setDarkTheme:t}=h();return(0,s.jsx)(H,{children:(0,s.jsx)(J,{children:(0,s.jsxs)(U,{children:[(0,s.jsxs)(q,{children:[(0,s.jsx)(G,{size:10,type:"platform"}),"Game Finder"]}),(0,s.jsxs)(K,{children:[(0,s.jsx)(G,{type:e?"sun":"moon",onClick:()=>t(!e)}),(0,s.jsx)("a",Object.assign({href:"https://github.com/KlessitonRodrigues/game-finder",target:"_blank"},{children:(0,s.jsx)(G,{type:"github"})})),(0,s.jsx)(q,{children:"EN"})]})]})})})},W=i.p+"assets/dbf9440c6dde1b9e0e24.png",X=o.ZP.div((({isDark:e})=>o.iv`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${W});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
    transition: 0.5s;
    ${e&&"filter: brightness(0.5);"}
  `)),ee=(o.ZP.div((()=>o.iv`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(35deg, ${b}, ${x});
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
    animation: 0.5s ${_} ease-out;
    background-color: #5555;
    backdrop-filter: blur(12px);
  `))),te=o.ZP.div((()=>o.iv`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${C(350)};
    padding: ${C(4)};
    background-image: ${F.blue};
    color: #fff;
  `)),ie=o.ZP.div((()=>o.iv`
    width: 100%;
    height: 100%;
    max-width: ${C(350)};
    padding: ${C(6)} 0 ${C(10)};
    overflow: auto;
    animation: 0.5s ${T} ease-out;
  `));i.p;let se={games:[],filtered:[],categories:[],platforms:[]};const re=()=>{return e=void 0,t=void 0,s=function*(){try{se=yield(yield fetch("https://klessitonrodrigues.github.io/game-finder/assets/json/games.json")).json();const{categories:e,platforms:t}=se;return{categories:e,platforms:t}}catch(e){console.error(e)}},new((i=void 0)||(i=Promise))((function(r,n){function o(e){try{l(s.next(e))}catch(e){n(e)}}function a(e){try{l(s.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}));var e,t,i,s},ne=(0,l.createContext)(null),oe=e=>{const[t,i]=(0,l.useState)(0),[r,n]=(0,l.useState)([]),[o,a]=(0,l.useState)([]),[d,c]=(0,l.useState)(0),[h,u]=(0,l.useState)(0),[x,m]=(0,l.useState)(0),g={lastUpdate:t,selectedGame:d,categories:r,platforms:o,selectedPlatform:h,selectedCategory:x,setLastUpdate:i,setSelectedGame:c,setPlatforms:a,setCategories:n,setPlatform:u,setCategory:m};(0,l.useEffect)((()=>{re().then((e=>{n(e.categories),a(e.platforms)}))}),[]);const p=(0,l.useMemo)((()=>g),[JSON.stringify(g)]);return(0,s.jsx)(ne.Provider,Object.assign({value:p},{children:e.children}))},ae=()=>(0,l.useContext)(ne),le=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    padding: ${e.size(4)};
  `)),de=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${C(8)} ${C(4)};
    padding: ${e.size(2)} 0;
  `)),ce=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${e.size(80)};
    border: 2px solid ${e.colors.text1+"44"};
    border-radius: ${e.radius.large};
    overflow: hidden;
    cursor: pointer;
    transition: 0.2s;
    animation: ${T} 0.5s;

    @media (max-width: ${M}px) {
      max-width: unset;
    }
  `)),he=o.ZP.img((({theme:e})=>o.iv`
    width: 100%;
    height: 100%;
    max-width: ${e.size(80)};
    max-height: ${e.size(95)};
    background-color: ${e.colors.bg3};
    border: none;

    @media (max-width: ${M}px) {
      max-width: unset;
      max-height: ${e.size(120)};
    }
  `)),ue=o.ZP.div((({theme:e})=>o.iv`
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
  `)),xe=e=>{const{onSelect:t}=e,{lastUpdate:i}=ae(),[r,n]=(0,l.useState)([]),[o,a]=(0,l.useState)(0);(0,l.useEffect)((()=>{n(((e,t)=>{var i;if(e<0)return[];const s=20*e;return null===(i=se.filtered)||void 0===i?void 0:i.slice(s,s+20)})(o))}),[i]);const d=(0,l.useMemo)((()=>r.map((e=>(0,s.jsxs)(ce,Object.assign({onClick:()=>t(e)},{children:[(0,s.jsx)(he,{src:e.c}),(0,s.jsxs)(ue,{children:[(0,s.jsx)("b",{children:"2024"}),(0,s.jsx)("div",{children:e.n})]})]}),e.i)))),[r]);return d.length?(0,s.jsx)(le,{children:(0,s.jsxs)(J,{children:[(0,s.jsxs)(q,{children:[(0,s.jsx)(G,{type:"list"}),"Game List"]}),(0,s.jsx)(Q,{}),(0,s.jsx)(de,{children:d})]})}):null},me={i:1,n:"",l:"",d:"",c:"",s:[],g:[],p:[]},ge=e=>e.check?e.true||e.children:e.false,pe=o.ZP.div((()=>o.iv``)),fe=o.ZP.div((()=>o.iv`
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
  `)),je=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.size(8)};
    animation: ${B} 0.8s infinite linear;
    color: ${e.colors.white};
  `)),be=o.ZP.h1((({theme:e})=>o.iv`
    font-size: ${e.fontSize.label};
    margin-bottom: ${e.size(2)};
    animation: ${T} 0.5s ease-out;
    color: ${e.colors.white};
  `)),ve=o.ZP.p((({theme:e})=>o.iv`
    font-size: ${e.fontSize.verySmall};
    animation: ${T} 0.5s ease-out;
    color: ${e.colors.white};
  `)),$e=e=>{const{show:t,type:i,title:r,description:n}=e;return(0,s.jsxs)(pe,{children:[(0,s.jsx)(ge,Object.assign({check:t&&"icon"===i},{children:(0,s.jsx)(je,{children:(0,s.jsx)(G,{type:"spinner",size:12})})})),(0,s.jsx)(ge,Object.assign({check:t&&"fullScreen"===i},{children:(0,s.jsxs)(fe,{children:[(0,s.jsx)(je,{children:(0,s.jsx)(G,{type:"spinner",size:12})}),(0,s.jsx)(be,{children:r}),(0,s.jsx)(ve,{children:n})]})}))]})},ye=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    max-width: ${e.size(350)};
    margin: auto;
  `)),we=e=>(0,s.jsx)(ye,{children:e.children}),ze=o.ZP.ol((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    padding: ${e.size(2)} ${e.size(3)};
    border: 1px solid transparent;
    border-radius: ${e.radius.large};
    background-image: ${F.blue};
    color: ${e.colors.white};
    box-shadow: ${e.shadow.low};
    font-size: ${e.fontSize.label};
    font-weight: bold;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      background-image: ${F.darkBlue};
    }

    .icon {
      color: ${e.colors.white};
    }
  `)),ke={search:"",fromYear:0,toYear:0,platform:0,category:0,categoryType:0,pageItems:10,isRandom:!1},Pe=o.ZP.label((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)} ${e.size(3)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    border-radius: ${e.radius.medium};
    background-image: ${F.blue};
    color: ${e.colors.white};
    box-shadow: ${e.shadow.low};

    &:hover {
      background-image: ${F.darkBlue};

      input {
        border-bottom: 1px solid ${e.colors.white};
      }
    }
  `)),Se=o.ZP.div((()=>o.iv`
    min-width: max-content;
  `)),Oe=o.ZP.input((({theme:e})=>o.iv`
    width: 100%;
    padding-left: ${e.size(2)};
    padding-top: ${e.size(.5)};
    font-size: ${e.fontSize.body};
    font-weight: bold;
    border: none;
    background-color: transparent;
    color: ${e.colors.white};
  `)),Ze=o.ZP.label((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)} ${e.size(3)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    background-image: ${F.blue};
    color: ${e.colors.white};
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.low};

    &:hover {
      background-image: ${F.darkBlue};
    }
  `)),Ce=o.ZP.select((({theme:e})=>o.iv`
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
  `)),Me=o.ZP.div((()=>o.iv`
    min-width: max-content;
  `)),Le=o.ZP.option((({theme:e})=>o.iv`
    background-color: ${e.colors.bg1};
    color: ${e.colors.text1};
  `)),Te=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${e.size(4)};
    padding: ${e.size(4)};
    margin: auto;
  `)),_e=()=>{const{categories:e,platforms:t,setLastUpdate:i,selectedCategory:r,selectedPlatform:n,setCategory:o,setPlatform:a}=ae(),[d,c]=(0,l.useState)(""),[h,u]=(0,l.useState)(ke),x=(0,l.useMemo)((()=>t.map(((e,t)=>(0,s.jsx)(Le,Object.assign({value:t},{children:e}))))),[t]),m=(0,l.useMemo)((()=>{const t=[],i=[];return e.forEach(((e,s)=>{const{t:r,n}=JSON.parse(e);t.includes(r)||t.push(r),""!==d&&d!==r||i.push({i:s,name:n})})),{types:t,items:i}}),[e,d]),g=(0,l.useMemo)((()=>m.types.map((e=>(0,s.jsx)(Le,Object.assign({value:e},{children:e}))))),[e]),p=(0,l.useMemo)((()=>m.items.map((e=>(0,s.jsx)(Le,Object.assign({value:e.i},{children:e.name}))))),[e,d]);return(0,s.jsx)(Te,{children:(0,s.jsxs)(J,{children:[(0,s.jsxs)(q,{children:[(0,s.jsx)(G,{type:"selector"}),"Filters"]}),(0,s.jsx)(Q,{}),(0,s.jsxs)(A,{children:[(0,s.jsxs)(Pe,{children:[(0,s.jsx)(G,{type:"search"}),(0,s.jsx)(Se,{children:"Search"}),(0,s.jsx)(Oe,{type:"search",value:h.search,onChange:e=>u(Object.assign(Object.assign({},h),{search:e.target.value}))})]}),(0,s.jsxs)(Ze,{children:[(0,s.jsx)(G,{type:"platform"}),(0,s.jsx)(Me,{children:"Platform"}),(0,s.jsx)(Ce,Object.assign({value:n,onChange:e=>a(Number(e.target.value))},{children:x}))]})]}),(0,s.jsxs)(A,{children:[(0,s.jsxs)(Ze,{children:[(0,s.jsx)(G,{type:"category"}),(0,s.jsx)(Me,{children:"Category Type"}),(0,s.jsx)(Ce,Object.assign({value:d,onChange:e=>c(e.target.value)},{children:g}))]}),(0,s.jsxs)(Ze,{children:[(0,s.jsx)(G,{type:"category"}),(0,s.jsx)(Me,{children:"Category"}),(0,s.jsx)(Ce,Object.assign({value:r,onChange:e=>o(Number(e.target.value))},{children:p}))]})]}),(0,s.jsxs)(A,{children:[(0,s.jsxs)(Pe,{children:[(0,s.jsx)(G,{type:"date"}),(0,s.jsx)(Se,{children:"From Year"}),(0,s.jsx)(Oe,{type:"number",value:"2023"})]}),(0,s.jsxs)(Pe,{children:[(0,s.jsx)(G,{type:"date"}),(0,s.jsx)(Se,{children:"To Year"}),(0,s.jsx)(Oe,{type:"number",value:"2023"})]})]}),(0,s.jsxs)(A,{children:[(0,s.jsxs)(Ze,{children:[(0,s.jsx)(G,{type:"list"}),(0,s.jsx)(Me,{children:"List Format"}),(0,s.jsxs)(Ce,Object.assign({value:n,onChange:e=>a(Number(e.target.value))},{children:[(0,s.jsx)(Le,{children:"Ordered"}),(0,s.jsx)(Le,{children:"Random"})]}))]}),(0,s.jsxs)(Ze,{children:[(0,s.jsx)(G,{type:"list"}),(0,s.jsx)(Me,{children:"Pages Items"}),(0,s.jsxs)(Ce,Object.assign({value:n,onChange:e=>a(Number(e.target.value))},{children:[(0,s.jsx)(Le,{children:"10"}),(0,s.jsx)(Le,{children:"25"}),(0,s.jsx)(Le,{children:"50"})]}))]})]}),(0,s.jsx)(A,{children:(0,s.jsxs)(ze,Object.assign({onClick:()=>{((e,t)=>{try{const{games:i}=se,s=i.filter((i=>{const{g:s,p:r}=i;return!(!(null==s?void 0:s.includes(e))||!(null==r?void 0:r.includes(t)))})).sort(((e,t)=>Math.random()-.5));se.filtered=s}catch(e){console.error(e)}})(r,n),i(Date.now())}},{children:[(0,s.jsx)(G,{type:"search"}),"Find Games"]}))})]})})},Be=o.ZP.ol((({theme:e})=>o.iv`
    padding-left: ${e.size(6)};
  `)),Fe=o.ZP.li((({theme:e})=>o.iv`
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
  `)),Ne=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
  `)),Ee=o.ZP.img((({theme:e})=>o.iv`
    margin: auto;
    width: 100%;
    max-width: ${e.size(140)};
    border-radius: ${e.radius.large};
    overflow: hidden;
  `)),Re=o.ZP.h4((({theme:e})=>o.iv``)),De=o.ZP.p((({theme:e})=>o.iv``)),Ye=o.ZP.a((({theme:e})=>o.iv`
    text-decoration: none;
  `)),Ge=o.ZP.div((({theme:e})=>o.iv``)),Ie=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${e.size(4)};
    padding: ${e.size(4)} 0;
  `)),Je=o.ZP.img((({theme:e})=>o.iv`
    width: 100%;
    max-width: ${e.size(160)};
    border-radius: ${e.radius.large};
    border: 2px solid ${e.colors.white+"44"};

    @media (max-width: ${L}px) {
      max-width: ${e.size(220)};
    }
  `)),Ue=e=>{const{game:t}=e,{categories:i,platforms:r}=ae(),n=(0,l.useMemo)((()=>{var e;return null===(e=t.g)||void 0===e?void 0:e.map((e=>{if(!i[e])return null;const{t,n:r}=JSON.parse(i[e]);return(0,s.jsx)(Fe,{children:`${t}, ${r}`})}))}),[t.g]),o=(0,l.useMemo)((()=>{var e;return null===(e=t.p)||void 0===e?void 0:e.map((e=>(0,s.jsx)(Fe,{children:r[e]})))}),[t.p]),a=(0,l.useMemo)((()=>{var e;return null===(e=t.s)||void 0===e?void 0:e.map((e=>(0,s.jsx)(Je,{src:e})))}),[t.s]);return(0,s.jsxs)(Ne,{children:[(0,s.jsxs)(I,{children:[(0,s.jsx)(J,{children:(0,s.jsx)(Ee,{src:null==t?void 0:t.c})}),(0,s.jsxs)(J,{children:[(0,s.jsx)(q,{children:null==t?void 0:t.n}),(0,s.jsx)(Re,{children:"2024"}),(0,s.jsxs)(Ge,{children:[(0,s.jsx)(G,{type:"star"}),(0,s.jsx)(G,{type:"star"}),(0,s.jsx)(G,{type:"star"}),(0,s.jsx)(G,{type:"starLine"}),(0,s.jsx)(G,{type:"starLine"})]}),(0,s.jsx)(De,{dangerouslySetInnerHTML:{__html:null==t?void 0:t.d}}),(0,s.jsx)(Ye,Object.assign({href:null==t?void 0:t.l},{children:"MobyGames"}))]})]}),(0,s.jsxs)(I,{children:[(0,s.jsxs)(J,{children:[(0,s.jsxs)(q,{children:[(0,s.jsx)(G,{type:"category"}),"Categories"]}),(0,s.jsx)(Q,{}),(0,s.jsx)(Be,{children:n})]}),(0,s.jsxs)(J,{children:[(0,s.jsxs)(q,{children:[(0,s.jsx)(G,{type:"platform"}),"Platforms"]}),(0,s.jsx)(Q,{}),(0,s.jsx)(Be,{children:o})]})]}),(0,s.jsx)(I,{children:(0,s.jsxs)(J,{children:[(0,s.jsxs)(q,{children:[(0,s.jsx)(G,{type:"screenshot"}),"Screenshots"]}),(0,s.jsx)(Q,{}),(0,s.jsx)(Ie,{children:a})]})})]})};const Ae=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    height: 100%;
    max-height: ${e.size(200)};
    padding: ${e.size(4)};
  `)),qe=(o.ZP.div((({theme:e})=>o.iv`
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
  `))),Qe=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    margin-top: ${e.size(1.5)};

    :hover {
      color: ${e.colors.red};
    }
  `)),He=o.ZP.iframe((({theme:e})=>o.iv`
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

    @media (max-width: ${L}px) {
      height: ${e.size(150)};
    }

    @media (max-width: ${900}px) {
      height: ${e.size(125)};
    }

    @media (max-width: ${M}px) {
      height: ${e.size(100)};
    }
  `)),Ke=e=>{const{query:t}=e,[i,r]=(0,l.useState)([]),[n,o]=(0,l.useState)(0);return(0,l.useEffect)((()=>{t&&((e=>{return t=void 0,i=void 0,r=function*(){const t="https://corsproxy.io/?"+encodeURIComponent("https://www.youtube.com/youtubei/v1/search"),i={context:{client:{hl:"en",gl:"BR",clientName:"WEB",clientVersion:"2.20240111.09.00",timeZone:"America/Fortaleza"}},query:e},s=yield fetch(t,{headers:{"accept-language":"en-US,en;q=0.9","content-type":"application/json"},body:JSON.stringify(i),method:"POST",mode:"cors"});return(yield s.json()).contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.map((e=>{var t;return null===(t=null==e?void 0:e.videoRenderer)||void 0===t?void 0:t.videoId})).filter((e=>!!e)).map((e=>`https://www.youtube.com/embed/${e}?fs=0`))},new((s=void 0)||(s=Promise))((function(e,n){function o(e){try{l(r.next(e))}catch(e){n(e)}}function a(e){try{l(r.throw(e))}catch(e){n(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(o,a)}l((r=r.apply(t,i||[])).next())}));var t,i,s,r})(t+"gameplay").then(r),o(0))}),[t]),(0,s.jsx)(Ae,{children:(0,s.jsxs)(J,{children:[(0,s.jsxs)(qe,{children:[(0,s.jsxs)(q,{children:[(0,s.jsx)(G,{type:"youtube"}),"Youtube"]}),(0,s.jsxs)(Qe,{children:[(0,s.jsx)(G,{size:10,type:"previous",onClick:()=>n&&o(n-1)}),(0,s.jsx)(G,{size:10,type:"next",onClick:()=>n<i.length-1&&o(n+1)})]})]}),(0,s.jsx)(Q,{}),(0,s.jsx)(ge,Object.assign({check:!!t},{children:(0,s.jsx)(He,{src:i[n]})}))]})})};const Ve=()=>{const{darkTheme:e}=h(),[t,i]=(0,l.useState)(!1),[r,n]=(0,l.useState)(me);return(0,l.useEffect)((()=>{var e,t,s,r;(e=void 0,t=void 0,s=void 0,r=function*(){i(!0),yield re()},new(s||(s=Promise))((function(i,n){function o(e){try{l(r.next(e))}catch(e){n(e)}}function a(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))).finally((()=>i(!1)))}),[]),(0,s.jsxs)(we,{children:[(0,s.jsx)(V,{}),(0,s.jsx)(_e,{}),(0,s.jsx)(xe,{onSelect:n}),(0,s.jsxs)(ee,Object.assign({show:!!(null==r?void 0:r.n)},{children:[(0,s.jsxs)(te,{children:[(0,s.jsxs)(q,{children:[(0,s.jsx)(G,{type:"list"}),"Description"]}),(0,s.jsx)(G,{type:"close",size:8,onClick:()=>n(me)})]}),(0,s.jsxs)(ie,{children:[(0,s.jsx)(Ue,{game:r}),(0,s.jsx)(Ke,{query:null==r?void 0:r.n})]})]})),(0,s.jsx)($e,{type:"fullScreen",show:t,title:"Loading Game List"}),(0,s.jsx)(X,{isDark:e})]})},We=()=>{const{darkTheme:e}=h();return(0,s.jsxs)(o.f6,Object.assign({theme:e?E:N},{children:[(0,s.jsx)(u,{}),(0,s.jsx)(a.Z5,Object.assign({location:window.location},{children:(0,s.jsx)(a.AW,{path:"/*",element:(0,s.jsx)(Ve,{})})}))]}))},Xe=(0,l.createContext)(null),et=e=>{const[t,i]=(0,l.useState)("/game-view"),[r,n]=(0,l.useState)(""),o={pathname:t,hash:"",search:"",lang:r,setPath:i,setLang:n},a=(0,l.useMemo)((()=>o),[JSON.stringify(o)]);return(0,s.jsx)(Xe.Provider,Object.assign({value:a},{children:e.children}))};(0,r.s)(document.getElementById("root")).render((0,s.jsx)((()=>(0,s.jsx)(c,{children:(0,s.jsx)(et,{children:(0,s.jsx)(o.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,s.jsx)(oe,{children:(0,s.jsx)(n.VK,{children:(0,s.jsx)(We,{})})})}))})})),{}))}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return s[e](i,i.exports,n),i.exports}n.m=s,e=[],n.O=(t,i,s,r)=>{if(!i){var o=1/0;for(c=0;c<e.length;c++){for(var[i,s,r]=e[c],a=!0,l=0;l<i.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](i[l])))?i.splice(l--,1):(a=!1,r<o&&(o=r));if(a){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,s,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,s){if(1&s&&(e=this(e)),8&s)return e;if("object"==typeof e&&e){if(4&s&&e.__esModule)return e;if(16&s&&"function"==typeof e.then)return e}var r=Object.create(null);n.r(r);var o={};t=t||[null,i({}),i([]),i(i)];for(var a=2&s&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,n.d(r,o),r},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var s=i.length-1;s>-1&&!e;)e=i[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var s,r,[o,a,l]=i,d=0;if(o.some((t=>0!==e[t]))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var c=l(n)}for(t&&t(i);d<o.length;d++)r=o[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},i=this.webpackChunkgame_finder=this.webpackChunkgame_finder||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),n.nc=void 0;var o=n.O(void 0,[977],(()=>n(709)));o=n.O(o)})();