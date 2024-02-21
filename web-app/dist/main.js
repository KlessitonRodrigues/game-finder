(()=>{"use strict";var e,t,i,s={125:(e,t,i)=>{var s=i(893),r=i(745),n=i(655),o=i(133),a=i(250),l=i(294);const c=(0,l.createContext)(null),d=e=>{const[t,i]=(0,l.useState)(!1),r={darkTheme:t,setDarkTheme:i},n=(0,l.useMemo)((()=>r),[JSON.stringify(r)]);return(0,s.jsx)(c.Provider,Object.assign({value:n},{children:e.children}))},h=()=>(0,l.useContext)(c),u=(i.p,(0,o.vJ)((({theme:e})=>o.iv`
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
  `))),x="#ba68c8",g="#2196f3",m="#1e88e5",p="#1976d2",f="#1565c0",j="#4fc3f7",b="#fafafa",v="#f5f5f5",y="#eeeeee",$="#e0e0e0",w="#bdbdbd",z="#9e9e9e",k="#757575",O="#616161",P="#424242",S="#141414",Z=e=>`${(.2*e).toFixed(1)}rem`,C=768,T=1024,M=o.F4`
    from { transform: translateY(6rem); opacity: 0; } 
    to { opacity: 1 }`,L=o.F4`
    from { transform: translateY(12rem); opacity: 0; } 
    to { opacity: 1; }`,N=o.F4`
    from { opacity: 0; } 
    to { opacity: 1; }`,F=o.F4`
    to { transform: rotateZ(360deg); }`,_={black:`linear-gradient(180deg, ${k}, ${O})`,white:`linear-gradient(180deg, ${y}, ${$})`,blue:`linear-gradient(180deg, ${g}, ${m})`,darkBlue:`linear-gradient(180deg, ${p}, ${f})`},B={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:g,mainBg:p,bg1:b,bg2:v,bg3:y,bg4:$,text1:P,text2:k,text3:z,text4:w,gray:z,yellow:"#f57f17",red:"#CA3521",blue:"#388BFF",green:"#558b2f",white:b,black:S,gradientBg:_.white},fontSize:{h1:"1.3rem",h2:"1.25rem",h3:"1.2rem",h4:"1.15rem",h5:"1.1rem",h6:"1.05rem",body:"1rem",label:"0.9rem",small:"0.95rem",verySmall:"0.85rem"},shadow:{low:"1px 1px 2px 1px #0004",medium:"1px 1px 3px 1px #0007",high:"1px 1px 3px 1px #000A"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},E=Object.assign(Object.assign({},B),{colors:Object.assign(Object.assign({},B.colors),{bg1:S,bg2:S+"DD",bg3:S+"BB",bg4:S+"99",text1:y,text2:$,text3:z,text4:O,gray:k,white:y,gradientBg:_.black})});var Y=i(279);const R={download:(0,s.jsx)(Y.HA8,{}),selector:(0,s.jsx)(Y.ZaQ,{}),spinner:(0,s.jsx)(Y.H4p,{}),next:(0,s.jsx)(Y.U4K,{}),previous:(0,s.jsx)(Y._L$,{}),youtube:(0,s.jsx)(Y.pzF,{}),star:(0,s.jsx)(Y.Kz,{}),starLine:(0,s.jsx)(Y.u20,{}),starHalf:(0,s.jsx)(Y.PMF,{}),category:(0,s.jsx)(Y.yTT,{}),platform:(0,s.jsx)(Y.pa0,{}),screenshot:(0,s.jsx)(Y.QVH,{}),date:(0,s.jsx)(Y.qXL,{}),list:(0,s.jsx)(Y.dR_,{}),search:(0,s.jsx)(Y.t2h,{}),close:(0,s.jsx)(Y.eSQ,{}),sun:(0,s.jsx)(Y.sEY,{}),moon:(0,s.jsx)(Y.S6R,{}),github:(0,s.jsx)(Y.ioR,{})},A=o.ZP.span((({theme:e,size:t})=>o.iv`
    display: inline-flex;
    font-size: ${e.size(t||7)};
    cursor: pointer;
  `)),D=e=>{const{type:t,size:i,style:r,onClick:n}=e,o=(0,l.useMemo)((()=>R[t]),[t]);return(0,s.jsx)(A,Object.assign({className:"icon",size:i,style:r,onClick:n},{children:o}))},G=o.ZP.div((()=>o.iv`
    width: 100%;
    display: flex;
    padding: 0 ${Z(4)} ${Z(4)};
    gap: ${Z(4)};

    @media (max-width: ${T}px) {
      flex-direction: column;
    }
  `)),I=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${Z(4)};
    padding: ${Z(4)};
    background-color: ${e.colors.bg2};
    color: ${e.colors.text2};
    border-radius: ${e.radius.veryLarge};
    box-shadow: ${e.shadow.low};
    transition: background-color 0.3s;
  `)),J=o.ZP.div((()=>o.iv`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${Z(4)};
    width: 100%;
  `)),U=o.ZP.div((({justify:e})=>o.iv`
    display: flex;
    align-items: center;
    justify-content: ${e||"flex-start"};
    gap: ${Z(4)};
    width: 100%;

    @media (max-width: ${C}px) {
      width: 100%;
      flex-direction: column;
    }
  `)),H=o.ZP.h4((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
  `)),q=o.ZP.hr((({theme:e})=>o.iv`
    border-color: ${e.colors.text1+"44"};
  `)),Q=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    padding: ${e.size(4)};
  `)),K=o.ZP.div((()=>o.iv`
    display: flex;
    align-items: center;
    gap: ${Z(4)};

    a {
      font-size: 0;
      padding: 0;
      margin: 0;
    }

    .icon:hover {
      opacity: 0.5;
    }
  `)),V=()=>{const{darkTheme:e,setDarkTheme:t}=h();return(0,s.jsx)(Q,{children:(0,s.jsx)(I,{children:(0,s.jsxs)(J,{children:[(0,s.jsxs)(H,{children:[(0,s.jsx)(D,{size:10,type:"platform"}),"Game Finder"]}),(0,s.jsxs)(K,{children:[(0,s.jsx)(H,{children:"EN"}),(0,s.jsx)(D,{type:e?"sun":"moon",onClick:()=>t(!e)}),(0,s.jsx)("a",Object.assign({href:"https://github.com/KlessitonRodrigues/game-finder",target:"_blank"},{children:(0,s.jsx)(D,{type:"github"})}))]})]})})})},W=i.p+"assets/41adc9b0907dc4270dfd.jpg",X=o.ZP.div((({isDark:e})=>o.iv`
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
    transition: 0.3s;
    ${e&&"filter: brightness(0.5);"}
  `)),ee=(o.ZP.div((()=>o.iv`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(35deg, ${j}, ${x});
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
    animation: 0.5s ${N} ease-out;
    background-color: #5555;
    backdrop-filter: blur(12px);
  `))),te=o.ZP.div((()=>o.iv`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${Z(350)};
    padding: ${Z(4)};
    background-image: ${_.blue};
    color: #fff;
  `)),ie=o.ZP.div((()=>o.iv`
    width: 100%;
    height: 100%;
    max-width: ${Z(350)};
    padding: ${Z(6)} 0 ${Z(10)};
    overflow: auto;
    animation: 0.5s ${L} ease-out;
  `)),se=e=>e.check?e.true||e.children:e.false,re=o.ZP.div((({theme:e})=>o.iv`
    position: -webkit-sticky;
    position: sticky;
    bottom: ${Z(6)};
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${_.blue};
    color: ${e.colors.white};
    box-shadow: ${e.shadow.medium};
    font-size: ${e.fontSize.h3};
    border-radius: ${e.radius.large};
    overflow: hidden;
    cursor: pointer;
    transition: 1s;
  `)),ne=o.ZP.div((({active:e})=>o.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${Z(14)};
    height: ${Z(12)};

    ${e&&`background-image: ${_.darkBlue};`}

    &:hover {
      background-image: ${_.darkBlue};
    }
  `)),oe=e=>{const{page:t,onChange:i,total:r}=e,n=e=>{e>0&&e<=r&&i(e)};return(0,s.jsxs)(re,{children:[(0,s.jsx)(ne,{children:(0,s.jsx)(D,{type:"previous",onClick:()=>n(t-1)})}),(0,s.jsx)(se,Object.assign({check:t>1},{children:(0,s.jsx)(ne,Object.assign({onClick:()=>n(t-1)},{children:t-1}))})),(0,s.jsx)(ne,Object.assign({active:!0},{children:t})),(0,s.jsx)(se,Object.assign({check:r>=t+1},{children:(0,s.jsx)(ne,Object.assign({onClick:()=>n(t+1)},{children:t+1}))})),(0,s.jsx)(se,Object.assign({check:r>=t+2},{children:(0,s.jsx)(ne,Object.assign({onClick:()=>n(t+2)},{children:t+2}))})),(0,s.jsx)(ne,{children:(0,s.jsx)(D,{type:"next",onClick:()=>n(t+1)})})]})};i.p;let ae={games:[],filtered:[],categories:[],platforms:[]};const le=()=>{return e=void 0,t=void 0,s=function*(){try{ae=yield(yield fetch("/assets/json/games.json")).json();const{categories:e,platforms:t}=ae;return console.log(ae),{categories:e,platforms:t}}catch(e){console.error(e)}},new((i=void 0)||(i=Promise))((function(r,n){function o(e){try{l(s.next(e))}catch(e){n(e)}}function a(e){try{l(s.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}));var e,t,i,s},ce=(e,t)=>{var i,s;const r=(e-1)*t;return{pages:Math.ceil((null===(i=ae.filtered)||void 0===i?void 0:i.length)/t),pageItems:null===(s=ae.filtered)||void 0===s?void 0:s.slice(r,r+t)}},de=(0,l.createContext)(null),he=e=>{const[t,i]=(0,l.useState)(0),[r,n]=(0,l.useState)([]),[o,a]=(0,l.useState)([]),[c,d]=(0,l.useState)(0),[h,u]=(0,l.useState)(0),[x,g]=(0,l.useState)(0),m={lastUpdate:t,selectedGame:c,categories:r,platforms:o,selectedPlatform:h,selectedCategory:x,setLastUpdate:i,setSelectedGame:d,setPlatforms:a,setCategories:n,setPlatform:u,setCategory:g};(0,l.useEffect)((()=>{le().then((e=>{n(e.categories),a(e.platforms)}))}),[]);const p=(0,l.useMemo)((()=>m),[JSON.stringify(m)]);return(0,s.jsx)(de.Provider,Object.assign({value:p},{children:e.children}))},ue=()=>(0,l.useContext)(de),xe=o.ZP.div((()=>o.iv`
    width: 100%;
    padding: ${Z(4)};
    position: relative;
  `)),ge=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${Z(8)} ${Z(4)};
    padding: ${e.size(2)} 0;
  `)),me=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${Z(80)};
    border: 2px solid ${e.colors.text1+"44"};
    border-radius: ${e.radius.veryLarge};
    overflow: hidden;
    cursor: pointer;
    transition: 0.2s;
    animation: ${M} 0.3s;

    @media (max-width: ${C}px) {
      max-width: unset;
    }
  `)),pe=o.ZP.img((({theme:e})=>o.iv`
    width: ${Z(80)};
    height: ${Z(95)};
    max-width: ${Z(80)};
    max-height: ${Z(95)};
    background-color: ${e.colors.bg3};
    border: none;

    @media (max-width: ${C}px) {
      width: 100%;
      height: auto;
      max-width: unset;
      max-height: ${Z(160)};
    }
  `)),fe=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-direction: column;
    height: ${Z(22)};
    background-color: ${e.colors.bg3};
    color: ${e.colors.text1};
    padding: ${Z(3)} ${Z(2)};
    font-size: ${e.fontSize.verySmall};
    font-weight: bold;

    b {
      color: ${e.colors.text3};
    }
  `)),je=e=>{const{onSelect:t}=e,{lastUpdate:i}=ue(),[r,n]=(0,l.useState)([]),[o,a]=(0,l.useState)({index:1,total:0});(0,l.useEffect)((()=>{const{pages:e,pageItems:t}=ce(o.index,20);t&&(n(t),a({index:1,total:e}),window.scrollTo({top:0}))}),[i]),(0,l.useEffect)((()=>{const{pageItems:e}=ce(o.index,20);e&&(n(e),window.scrollTo({top:0}))}),[o.index]);const c=(0,l.useMemo)((()=>r.map((e=>(0,s.jsxs)(me,Object.assign({onClick:()=>t(e)},{children:[(0,s.jsx)(pe,{src:e.c}),(0,s.jsxs)(fe,{children:[(0,s.jsx)("b",{children:e.y}),(0,s.jsx)("div",{children:e.n})]})]}),e.i)))),[r]);return r.length?(0,s.jsx)(xe,{children:(0,s.jsxs)(I,{children:[(0,s.jsxs)(H,{children:[(0,s.jsx)(D,{type:"list"}),"Game List"]}),(0,s.jsx)(ge,{children:c}),(0,s.jsx)(oe,{page:o.index,total:o.total,onChange:e=>a(Object.assign(Object.assign({},o),{index:e}))})]})}):null},be={i:1,n:"",l:"",d:"",c:"",s:[],g:[],p:[],r:"8.0",y:"2024"},ve=o.ZP.div((()=>o.iv``)),ye=o.ZP.div((()=>o.iv`
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
  `)),$e=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.size(8)};
    animation: ${F} 0.8s infinite linear;
    color: ${e.colors.white};
  `)),we=o.ZP.h1((({theme:e})=>o.iv`
    font-size: ${e.fontSize.label};
    margin-bottom: ${e.size(2)};
    animation: ${L} 0.5s ease-out;
    color: ${e.colors.white};
  `)),ze=o.ZP.p((({theme:e})=>o.iv`
    font-size: ${e.fontSize.verySmall};
    animation: ${L} 0.5s ease-out;
    color: ${e.colors.white};
  `)),ke=e=>{const{show:t,type:i,title:r,description:n}=e;return(0,s.jsxs)(ve,{children:[(0,s.jsx)(se,Object.assign({check:t&&"icon"===i},{children:(0,s.jsx)($e,{children:(0,s.jsx)(D,{type:"spinner",size:12})})})),(0,s.jsx)(se,Object.assign({check:t&&"fullScreen"===i},{children:(0,s.jsxs)(ye,{children:[(0,s.jsx)($e,{children:(0,s.jsx)(D,{type:"spinner",size:12})}),(0,s.jsx)(we,{children:r}),(0,s.jsx)(ze,{children:n})]})}))]})},Oe=o.ZP.div((()=>o.iv`
    width: 100%;
    max-width: ${Z(350)};
    margin: auto;
    margin-bottom: ${Z(4)};
  `)),Pe=e=>(0,s.jsx)(Oe,{children:e.children}),Se=o.ZP.ol((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    padding: ${e.size(2)} ${e.size(3)};
    border: 1px solid transparent;
    border-radius: ${e.radius.large};
    background-image: ${_.blue};
    color: ${e.colors.white};
    box-shadow: ${e.shadow.low};
    font-size: ${e.fontSize.label};
    font-weight: bold;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      background-image: ${_.darkBlue};
    }

    .icon {
      color: ${e.colors.white};
    }
  `)),Ze={search:"",fromYear:"2000",toYear:"2024",platform:"",category:"",categoryType:""},Ce=o.ZP.label((({theme:e})=>o.iv`
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
  `)),Te=o.ZP.div((()=>o.iv`
    min-width: max-content;
  `)),Me=o.ZP.input((({theme:e})=>o.iv`
    width: 100%;
    padding: ${e.size(.5)} 0;
    font-size: ${e.fontSize.h6};
    font-weight: bold;
    border: none;
    background-color: transparent;
    color: ${e.colors.text1};
    border-bottom: 1px solid ${e.colors.text4};
  `)),Le=o.ZP.label((({theme:e})=>o.iv`
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
  `)),Ne=o.ZP.select((({theme:e})=>o.iv`
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
  `)),Fe=o.ZP.div((()=>o.iv`
    min-width: max-content;
  `)),_e=o.ZP.option((({theme:e})=>o.iv`
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
  `)),Ee=()=>{const{categories:e,platforms:t,setLastUpdate:i}=ue(),[r,n]=(0,l.useState)(Ze),{category:o,platform:a,categoryType:c}=r,d=(0,l.useMemo)((()=>(e=>{const t=[],i=[];return ae.categories.forEach(((s,r)=>{const{t:n,n:o}=JSON.parse(s);t.includes(n)||t.push(n),""!==e&&e!==n||i.push({i:r,name:o})})),{types:t,items:i}})(c)),[e,c]),h=(0,l.useMemo)((()=>d.types.map((e=>(0,s.jsx)(_e,Object.assign({value:e},{children:e}))))),[e]),u=(0,l.useMemo)((()=>d.items.map((e=>(0,s.jsx)(_e,Object.assign({value:e.i},{children:e.name}))))),[e,c]),x=(0,l.useMemo)((()=>t.map(((e,t)=>(0,s.jsx)(_e,Object.assign({value:t},{children:e}))))),[t]);return(0,s.jsx)(Be,{children:(0,s.jsxs)(I,{children:[(0,s.jsxs)(H,{children:[(0,s.jsx)(D,{type:"selector"}),"Filters"]}),(0,s.jsxs)(U,{children:[(0,s.jsxs)(Ce,{children:[(0,s.jsx)(D,{type:"search"}),(0,s.jsx)(Te,{children:"Search"}),(0,s.jsx)(Me,{type:"search",value:r.search,onChange:e=>n(Object.assign(Object.assign({},r),{search:e.target.value}))})]}),(0,s.jsxs)(Le,{children:[(0,s.jsx)(D,{type:"selector"}),(0,s.jsx)(Fe,{children:"Platform"}),(0,s.jsxs)(Ne,Object.assign({value:a,onChange:e=>n(Object.assign(Object.assign({},r),{platform:e.target.value}))},{children:[(0,s.jsx)(_e,Object.assign({value:""},{children:"All"})),x]}))]})]}),(0,s.jsxs)(U,{children:[(0,s.jsxs)(Le,{children:[(0,s.jsx)(D,{type:"selector"}),(0,s.jsx)(Fe,{children:"Category Type"}),(0,s.jsxs)(Ne,Object.assign({value:r.categoryType,onChange:e=>n(Object.assign(Object.assign({},r),{categoryType:e.target.value}))},{children:[(0,s.jsx)(_e,Object.assign({value:""},{children:"All"})),h]}))]}),(0,s.jsxs)(Le,{children:[(0,s.jsx)(D,{type:"selector"}),(0,s.jsx)(Fe,{children:"Category"}),(0,s.jsxs)(Ne,Object.assign({value:o,onChange:e=>n(Object.assign(Object.assign({},r),{category:e.target.value}))},{children:[(0,s.jsx)(_e,Object.assign({value:""},{children:"All"})),u]}))]})]}),(0,s.jsxs)(U,{children:[(0,s.jsxs)(Ce,{children:[(0,s.jsx)(D,{type:"date"}),(0,s.jsx)(Te,{children:"From Year"}),(0,s.jsx)(Me,{type:"number",value:r.fromYear,onChange:e=>n(Object.assign(Object.assign({},r),{fromYear:e.target.value}))})]}),(0,s.jsxs)(Ce,{children:[(0,s.jsx)(D,{type:"date"}),(0,s.jsx)(Te,{children:"To Year"}),(0,s.jsx)(Me,{type:"number",value:r.toYear,onChange:e=>n(Object.assign(Object.assign({},r),{toYear:e.target.value}))})]})]}),(0,s.jsx)(U,{children:(0,s.jsxs)(Se,Object.assign({onClick:()=>{(e=>{try{const{search:t,category:i,platform:s,fromYear:r,toYear:n}=e,o=[];ae.games.forEach((e=>{const{g:a,p:l,n:c,y:d}=e,h=null==c?void 0:c.toLocaleLowerCase();if(t&&!(null==h?void 0:h.includes(t)))return!1;if(i&&!(null==a?void 0:a.includes(Number(i))))return!1;if(s&&!(null==l?void 0:l.includes(Number(s))))return!1;if(s&&!(null==l?void 0:l.includes(Number(s))))return!1;const u=new Date(d).getFullYear();return!(r&&Number(r)>=u)&&!(n&&Number(n)<=u)&&void o.push(e)})),ae.filtered=o}catch(e){console.error(e)}})(r),i(Date.now())}},{children:[(0,s.jsx)(D,{type:"search"}),"Find Games"]}))})]})})},Ye=o.ZP.ol((({theme:e})=>o.iv`
    padding-left: ${e.size(6)};
  `)),Re=o.ZP.li((({theme:e})=>o.iv`
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
  `)),Ae=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
  `)),De=o.ZP.img((({theme:e})=>o.iv`
    margin: auto;
    width: 100%;
    max-width: ${Z(140)};
    border-radius: ${e.radius.large};
    overflow: hidden;
  `)),Ge=o.ZP.h4((({theme:e})=>o.iv``)),Ie=o.ZP.p((({theme:e})=>o.iv``)),Je=o.ZP.a((({theme:e})=>o.iv`
    text-decoration: none;
  `)),Ue=o.ZP.div((({theme:e})=>o.iv`
    color: ${e.colors.blue};
  `)),He=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${Z(4)};
    padding: ${Z(4)} 0;
  `)),qe=o.ZP.img((({theme:e})=>o.iv`
    width: 100%;
    max-width: ${Z(160)};
    border-radius: ${e.radius.large};
    border: 2px solid ${e.colors.white+"44"};

    @media (max-width: ${T}px) {
      max-width: ${Z(220)};
    }
  `)),Qe=e=>{const{game:t}=e,{categories:i,platforms:r}=ue(),n=(0,l.useMemo)((()=>{var e;return null===(e=t.g)||void 0===e?void 0:e.map((e=>{if(!i[e])return null;const{t,n:r}=JSON.parse(i[e]);return(0,s.jsx)(Re,{children:`${t}, ${r}`})}))}),[t.g]),o=(0,l.useMemo)((()=>{var e;return null===(e=t.p)||void 0===e?void 0:e.map((e=>(0,s.jsx)(Re,{children:r[e]})))}),[t.p]),a=(0,l.useMemo)((()=>{var e;return null===(e=t.s)||void 0===e?void 0:e.map((e=>(0,s.jsx)(qe,{src:"https://cdn.mobygames.com/screenshots/"+e})))}),[t.s]),c=(0,l.useMemo)((()=>[2,4,6,8,10].map((e=>Number(t.r)>=e?(0,s.jsx)(D,{type:"star"}):Number(t.r)-e>-2?(0,s.jsx)(D,{type:"starHalf"}):(0,s.jsx)(D,{type:"starLine"})))),[t.r]);return(0,s.jsxs)(Ae,{children:[(0,s.jsxs)(G,{children:[(0,s.jsx)(I,{children:(0,s.jsx)(De,{src:null==t?void 0:t.c})}),(0,s.jsxs)(I,{children:[(0,s.jsx)(H,{children:null==t?void 0:t.n}),(0,s.jsx)(Ge,{children:null==t?void 0:t.y}),(0,s.jsxs)(Ue,{children:[c," ",t.r]}),(0,s.jsx)(Ie,{dangerouslySetInnerHTML:{__html:null==t?void 0:t.d}}),(0,s.jsx)(Je,Object.assign({href:null==t?void 0:t.l},{children:"MobyGames"}))]})]}),(0,s.jsxs)(G,{children:[(0,s.jsxs)(I,{children:[(0,s.jsxs)(H,{children:[(0,s.jsx)(D,{type:"category"}),"Categories"]}),(0,s.jsx)(q,{}),(0,s.jsx)(Ye,{children:n})]}),(0,s.jsxs)(I,{children:[(0,s.jsxs)(H,{children:[(0,s.jsx)(D,{type:"platform"}),"Platforms"]}),(0,s.jsx)(q,{}),(0,s.jsx)(Ye,{children:o})]})]}),(0,s.jsx)(G,{children:(0,s.jsxs)(I,{children:[(0,s.jsxs)(H,{children:[(0,s.jsx)(D,{type:"screenshot"}),"Screenshots"]}),(0,s.jsx)(q,{}),(0,s.jsx)(He,{children:a})]})})]})};const Ke=o.ZP.div((({theme:e})=>o.iv`
    width: 100%;
    height: 100%;
    max-height: ${e.size(200)};
    padding: ${e.size(4)};
  `)),Ve=(o.ZP.div((({theme:e})=>o.iv`
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
  `))),We=o.ZP.div((({theme:e})=>o.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    margin-top: ${e.size(1.5)};

    :hover {
      color: ${e.colors.red};
    }
  `)),Xe=o.ZP.iframe((({theme:e})=>o.iv`
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

    @media (max-width: ${T}px) {
      height: ${e.size(150)};
    }

    @media (max-width: ${900}px) {
      height: ${e.size(125)};
    }

    @media (max-width: ${C}px) {
      height: ${e.size(100)};
    }
  `)),et=e=>{const{query:t}=e,[i,r]=(0,l.useState)([]),[n,o]=(0,l.useState)(0);return(0,l.useEffect)((()=>{t&&((e=>{return t=void 0,i=void 0,r=function*(){const t="https://corsproxy.io/?"+encodeURIComponent("https://www.youtube.com/youtubei/v1/search"),i={context:{client:{hl:"en",gl:"BR",clientName:"WEB",clientVersion:"2.20240111.09.00",timeZone:"America/Fortaleza"}},query:e},s=yield fetch(t,{headers:{"accept-language":"en-US,en;q=0.9","content-type":"application/json"},body:JSON.stringify(i),method:"POST",mode:"cors"});return(yield s.json()).contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.map((e=>{var t;return null===(t=null==e?void 0:e.videoRenderer)||void 0===t?void 0:t.videoId})).filter((e=>!!e)).map((e=>`https://www.youtube.com/embed/${e}?fs=0`))},new((s=void 0)||(s=Promise))((function(e,n){function o(e){try{l(r.next(e))}catch(e){n(e)}}function a(e){try{l(r.throw(e))}catch(e){n(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(o,a)}l((r=r.apply(t,i||[])).next())}));var t,i,s,r})(t+"gameplay").then(r),o(0))}),[t]),(0,s.jsx)(Ke,{children:(0,s.jsxs)(I,{children:[(0,s.jsxs)(Ve,{children:[(0,s.jsxs)(H,{children:[(0,s.jsx)(D,{type:"youtube"}),"Youtube"]}),(0,s.jsxs)(We,{children:[(0,s.jsx)(D,{size:10,type:"previous",onClick:()=>n&&o(n-1)}),(0,s.jsx)(D,{size:10,type:"next",onClick:()=>n<i.length-1&&o(n+1)})]})]}),(0,s.jsx)(q,{}),(0,s.jsx)(se,Object.assign({check:!!t},{children:(0,s.jsx)(Xe,{src:i[n]})}))]})})};const tt=()=>{const{darkTheme:e}=h(),[t,i]=(0,l.useState)(!1),[r,n]=(0,l.useState)(be);return(0,l.useEffect)((()=>{var e,t,s,r;(e=void 0,t=void 0,s=void 0,r=function*(){i(!0),yield le()},new(s||(s=Promise))((function(i,n){function o(e){try{l(r.next(e))}catch(e){n(e)}}function a(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))).finally((()=>i(!1)))}),[]),(0,s.jsxs)(Pe,{children:[(0,s.jsx)(V,{}),(0,s.jsx)(Ee,{}),(0,s.jsx)(je,{onSelect:n}),(0,s.jsxs)(ee,Object.assign({show:!!(null==r?void 0:r.n)},{children:[(0,s.jsxs)(te,{children:[(0,s.jsxs)(H,{children:[(0,s.jsx)(D,{type:"list"}),"Description"]}),(0,s.jsx)(D,{type:"close",size:8,onClick:()=>n(be)})]}),(0,s.jsxs)(ie,{children:[(0,s.jsx)(Qe,{game:r}),(0,s.jsx)(et,{query:null==r?void 0:r.n})]})]})),(0,s.jsx)(ke,{type:"fullScreen",show:t,title:"Loading Game List"}),(0,s.jsx)(X,{isDark:e})]})},it=()=>{const{darkTheme:e}=h();return(0,s.jsxs)(o.f6,Object.assign({theme:e?E:B},{children:[(0,s.jsx)(u,{}),(0,s.jsx)(a.Z5,Object.assign({location:window.location},{children:(0,s.jsx)(a.AW,{path:"/*",element:(0,s.jsx)(tt,{})})}))]}))},st=(0,l.createContext)(null),rt=e=>{const[t,i]=(0,l.useState)("/game-view"),[r,n]=(0,l.useState)(""),o={pathname:t,hash:"",search:"",lang:r,setPath:i,setLang:n},a=(0,l.useMemo)((()=>o),[JSON.stringify(o)]);return(0,s.jsx)(st.Provider,Object.assign({value:a},{children:e.children}))};(0,r.s)(document.getElementById("root")).render((0,s.jsx)((()=>(0,s.jsx)(d,{children:(0,s.jsx)(rt,{children:(0,s.jsx)(o.LC,{children:(0,s.jsx)(he,{children:(0,s.jsx)(n.VK,{children:(0,s.jsx)(it,{})})})})})})),{}))}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return s[e](i,i.exports,n),i.exports}n.m=s,e=[],n.O=(t,i,s,r)=>{if(!i){var o=1/0;for(d=0;d<e.length;d++){for(var[i,s,r]=e[d],a=!0,l=0;l<i.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((e=>n.O[e](i[l])))?i.splice(l--,1):(a=!1,r<o&&(o=r));if(a){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,s,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,s){if(1&s&&(e=this(e)),8&s)return e;if("object"==typeof e&&e){if(4&s&&e.__esModule)return e;if(16&s&&"function"==typeof e.then)return e}var r=Object.create(null);n.r(r);var o={};t=t||[null,i({}),i([]),i(i)];for(var a=2&s&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,n.d(r,o),r},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var s=i.length-1;s>-1&&!e;)e=i[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var s,r,[o,a,l]=i,c=0;if(o.some((t=>0!==e[t]))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var d=l(n)}for(t&&t(i);c<o.length;c++)r=o[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},i=this.webpackChunkgame_finder=this.webpackChunkgame_finder||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),n.nc=void 0;var o=n.O(void 0,[977],(()=>n(125)));o=n.O(o)})();