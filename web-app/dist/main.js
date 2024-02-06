(()=>{"use strict";var e,t,i,s={222:(e,t,i)=>{var s=i(893),r=i(745),o=i(655),n=i(133),a=i(250);i.p;const l="#8e24aa",d="#7b1fa2",c="#039be5",h="#0288d1",u="#0277bd",m="#fafafa",x="#f5f5f5",g="#eeeeee",p="#e0e0e0",f="#bdbdbd",b="#9e9e9e",v="#757575",j="#424242",$="#212121",y="#141414",w=e=>`${(.2*e).toFixed(1)}rem`,z=768,P=1024,S=(n.F4`
    from { transform: translateY(6rem); opacity: 0; } 
    to { opacity: 1 }`,n.F4`
    from { transform: translateY(12rem); opacity: 0; } 
    to { opacity: 1; }`),k=n.F4`
    from { opacity: 0; } 
    to { opacity: 1; }`,O=n.F4`
    to { transform: rotateZ(360deg); }`,Z=`linear-gradient(45deg, ${x}, ${g})`,C=`linear-gradient(45deg, ${c}, ${h})`,M=`linear-gradient(45deg, ${h}, ${u})`,L=(0,n.vJ)((({theme:e})=>n.iv`
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
      width: 98vw;
      max-width: 100vw;
      // height: 100vh;
      // max-height: 100vh;
      // overflow-y: hidden;
    }
    html,
    body {
      font-family: 'Quicksand', sans-serif;
      color: ${e.colors.text1};
      font-weight: 500;
      background-image: ${Z};
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
  `)),F={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:l,mainBg:d,bg1:m,bg2:x,bg3:g,bg4:p,text1:j,text2:v,text3:b,text4:f,gray:b,yellow:"#B38600",red:"#CA3521",blue:"#388BFF",green:"#558b2f",white:m,black:y},fontSize:{h1:"1.3rem",h2:"1.25rem",h3:"1.2rem",h4:"1.15rem",h5:"1.1rem",h6:"1.05rem",body:"1rem",label:"0.9rem",small:"0.95rem",verySmall:"0.85rem"},shadow:{low:"1px 1px 2px 1px #0004",medium:"1px 1px 4px 2px #0006",high:"1px 1px 4px 2px #0009"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}};Object.assign(Object.assign({},F),{colors:Object.assign(Object.assign({},F.colors),{bg1:y+"EE",bg2:y+"CC",bg3:y+"AA",bg4:y+"88",text1:g,text2:p,text3:f,text4:b,gray:v,white:p})});var _=i(294);const E=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    padding: ${e.size(2)};
    margin: ${e.size(2)} 0;
    border-radius: ${e.radius.large};
    background-color: ${e.colors.bg2};
  `)),N=()=>(0,s.jsx)(E,{children:"Game Finder"});var G=i(279);const T={download:(0,s.jsx)(G.HA8,{}),selector:(0,s.jsx)(G.ZaQ,{}),spinner:(0,s.jsx)(G.H4p,{}),next:(0,s.jsx)(G.U4K,{}),previous:(0,s.jsx)(G._L$,{}),youtube:(0,s.jsx)(G.pzF,{}),star:(0,s.jsx)(G.Kz,{}),starLine:(0,s.jsx)(G.u20,{}),category:(0,s.jsx)(G.yTT,{}),platform:(0,s.jsx)(G.pa0,{}),screenshot:(0,s.jsx)(G.QVH,{}),date:(0,s.jsx)(G.qXL,{}),list:(0,s.jsx)(G.dR_,{}),search:(0,s.jsx)(G.t2h,{}),close:(0,s.jsx)(G.eSQ,{})},R=n.ZP.span((({theme:e,size:t})=>n.iv`
    display: inline-flex;
    font-size: ${e.size(t||7)};
    cursor: pointer;
  `)),I=e=>{const{type:t,size:i,style:r,onClick:o}=e,n=(0,_.useMemo)((()=>T[t]),[]);return(0,s.jsx)(R,Object.assign({className:"icon",size:i,style:r,onClick:o},{children:n}))},A=n.ZP.h2((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
  `)),B=n.ZP.hr((({theme:e})=>n.iv`
    border-color: ${e.colors.text1+"44"};
    margin: ${e.size(1)} 0;
  `)),J=n.ZP.div((({show:e})=>n.iv`
    display: ${e?"flex":"none"};
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    animation: 0.5s ${k} ease-out;
    background-color: ${$+"99"};
    backdrop-filter: blur(12px);
  `)),U=n.ZP.div((()=>n.iv`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${w(350)};
    padding: ${w(4)};
    background-image: ${C};
    color: #fff;
  `)),q=n.ZP.div((()=>n.iv`
    width: 100%;
    height: 100%;
    max-width: ${w(350)};
    padding: ${w(6)} 0 ${w(30)};
    overflow: auto;
    animation: 0.5s ${S} ease-out;
  `)),Q=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    padding: 0 ${e.size(4)} ${e.size(4)};
    gap: ${e.size(4)};

    @media (max-width: ${P}px) {
      flex-direction: column;
    }
  `)),Y=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${e.size(4)};
    padding: ${e.size(4)};
    background-color: ${e.colors.bg1};
    color: ${e.colors.text2};
    backdrop-filter: blur(4px);
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.low};
  `)),H=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    width: 100%;

    @media (max-width: ${z}px) {
      width: 100%;
      flex-direction: column;
    }
  `));i.p;var K=function(e,t,i,s){return new(i||(i=Promise))((function(r,o){function n(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}l((s=s.apply(e,t||[])).next())}))};let V={games:[],filtered:[],categories:[],platforms:[]};const D=()=>K(void 0,void 0,void 0,(function*(){try{V=yield(yield fetch("https://klessitonrodrigues.github.io/game-finder/assets/json/games.json")).json();const{categories:e,platforms:t}=V;return{categories:e,platforms:t}}catch(e){console.error(e)}})),W=(0,_.createContext)(null),X=e=>{const[t,i]=(0,_.useState)(0),[r,o]=(0,_.useState)(0),[n,a]=(0,_.useState)([]),[l,d]=(0,_.useState)([]),c={lastUpdate:t,selectedGame:r,categories:n,platforms:l,setLastUpdate:i,setSelectedGame:o,setPlatforms:d,setCategories:a};(0,_.useEffect)((()=>{D().then((e=>{a(e.categories),d(e.platforms)}))}),[]);const h=(0,_.useMemo)((()=>c),[JSON.stringify(c)]);return(0,s.jsx)(W.Provider,Object.assign({value:h},{children:e.children}))},ee=()=>(0,_.useContext)(W),te=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    padding: ${e.size(4)};
  `)),ie=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${e.size(4)};
  `)),se=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${e.size(70)};
    border-radius: ${e.radius.large};
    box-shadow: ${e.shadow.low};
    overflow: hidden;
    cursor: pointer;
    transition: 0.2s;
    animation: ${S} 0.5s;

    &:hover {
      box-shadow: ${e.shadow.medium};
    }

    @media (max-width: ${z}px) {
      max-width: unset;
    }
  `)),re=n.ZP.img((({theme:e})=>n.iv`
    width: 100%;
    height: 100%;
    max-width: ${e.size(70)};
    max-height: ${e.size(80)};
    background-color: ${e.colors.bg2};
    border: none;

    @media (max-width: ${z}px) {
      max-width: unset;
      max-height: ${e.size(120)};
    }
  `)),oe=n.ZP.div((({theme:e})=>n.iv`
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
  `)),ne=e=>{const{onSelect:t}=e,{lastUpdate:i}=ee(),[r,o]=(0,_.useState)([]),[n,a]=(0,_.useState)(0);(0,_.useEffect)((()=>{o(((e,t)=>{var i;if(e<0)return[];const s=20*e;return null===(i=V.filtered)||void 0===i?void 0:i.slice(s,s+20)})(n))}),[i]);const l=(0,_.useMemo)((()=>r.map((e=>(0,s.jsxs)(se,Object.assign({onClick:()=>t(e)},{children:[(0,s.jsx)(re,{src:e.c}),(0,s.jsxs)(oe,{children:[(0,s.jsx)("b",{children:"2024"}),(0,s.jsx)("div",{children:e.n})]})]}),e.i)))),[r]);return l.length?(0,s.jsx)(te,{children:(0,s.jsxs)(Y,{children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(I,{type:"list"}),"Game List"]}),(0,s.jsx)(B,{}),(0,s.jsx)(ie,{children:l})]})}):null},ae=(0,_.createContext)(null),le=e=>{const[t,i]=(0,_.useState)(""),[r,o]=(0,_.useState)(0),[n,a]=(0,_.useState)(0),l={gameId:t,gameCategory:r,gamePlatform:n,setGameId:i,setGameCategory:o,setGamePlatform:a},d=(0,_.useMemo)((()=>l),[JSON.stringify(l)]);return(0,s.jsx)(ae.Provider,Object.assign({value:d},{children:e.children}))},de=()=>(0,_.useContext)(ae),ce={i:1,n:"",l:"",d:"",c:"",s:[],g:[],p:[]},he=e=>e.check?e.true||e.children:e.false,ue=n.ZP.div((()=>n.iv``)),me=n.ZP.div((()=>n.iv`
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
  `)),xe=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.size(8)};
    animation: ${O} 0.8s infinite linear;
    color: ${e.colors.white};
  `)),ge=n.ZP.h1((({theme:e})=>n.iv`
    font-size: ${e.fontSize.label};
    margin-bottom: ${e.size(2)};
    animation: ${S} 0.5s ease-out;
    color: ${e.colors.white};
  `)),pe=n.ZP.p((({theme:e})=>n.iv`
    font-size: ${e.fontSize.verySmall};
    animation: ${S} 0.5s ease-out;
    color: ${e.colors.white};
  `)),fe=e=>{const{show:t,type:i,title:r,description:o}=e;return(0,s.jsxs)(ue,{children:[(0,s.jsx)(he,Object.assign({check:t&&"icon"===i},{children:(0,s.jsx)(xe,{children:(0,s.jsx)(I,{type:"spinner",size:12})})})),(0,s.jsx)(he,Object.assign({check:t&&"fullScreen"===i},{children:(0,s.jsxs)(me,{children:[(0,s.jsx)(xe,{children:(0,s.jsx)(I,{type:"spinner",size:12})}),(0,s.jsx)(ge,{children:r}),(0,s.jsx)(pe,{children:o})]})}))]})},be=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    max-width: ${e.size(350)};
    margin: auto;
  `)),ve=e=>(0,s.jsx)(be,{children:e.children}),je=n.ZP.ol((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(3)};
    padding: ${e.size(2)} ${e.size(3)};
    border: 1px solid transparent;
    border-radius: ${e.radius.large};
    background-image: ${C};
    color: ${e.colors.white};
    box-shadow: ${e.shadow.low};
    font-size: ${e.fontSize.label};
    font-weight: bold;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      background-image: ${M};
    }

    .icon {
      color: ${e.colors.white};
    }
  `)),$e=n.ZP.label((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)} ${e.size(3)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    border-radius: ${e.radius.medium};
    background-image: ${C};
    color: ${e.colors.white};
    box-shadow: ${e.shadow.low};

    &:hover {
      background-image: ${M};
    }
  `)),ye=n.ZP.div((()=>n.iv`
    min-width: max-content;
  `)),we=n.ZP.input((({theme:e})=>n.iv`
    width: 100%;
    padding-left: ${e.size(2)};
    padding-top: ${e.size(.5)};
    font-size: ${e.fontSize.body};
    font-weight: bold;
    border: none;
    background-color: transparent;
    color: ${e.colors.white};
  `)),ze=n.ZP.label((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)} ${e.size(3)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    background-image: ${C};
    color: ${e.colors.white};
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.low};

    &:hover {
      background-image: ${M};
    }
  `)),Pe=n.ZP.select((({theme:e})=>n.iv`
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
  `)),Se=n.ZP.div((()=>n.iv`
    min-width: max-content;
  `)),ke=n.ZP.option((({theme:e})=>n.iv`
    background-color: ${e.colors.bg1};
    color: ${e.colors.text1};
  `)),Oe=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${e.size(4)};
    padding: ${e.size(4)};
    margin: auto;
  `)),Ze=(n.ZP.button((({theme:e})=>n.iv`
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
  `)),()=>{const{gameCategory:e,gamePlatform:t,setGameCategory:i,setGamePlatform:r}=de(),{categories:o,platforms:n,setLastUpdate:a}=ee(),[l,d]=(0,_.useState)(""),c=(0,_.useMemo)((()=>n.map(((e,t)=>(0,s.jsx)(ke,Object.assign({value:t},{children:e}))))),[n]),h=(0,_.useMemo)((()=>{const e=[],t=[];return o.forEach(((i,s)=>{const{t:r,n:o}=JSON.parse(i);e.includes(r)||e.push(r),""!==l&&l!==r||t.push({i:s,name:o})})),{types:e,items:t}}),[o,l]),u=(0,_.useMemo)((()=>h.types.map((e=>(0,s.jsx)(ke,Object.assign({value:e},{children:e}))))),[o]),m=(0,_.useMemo)((()=>h.items.map((e=>(0,s.jsx)(ke,Object.assign({value:e.i},{children:e.name}))))),[o,l]);return(0,s.jsxs)(Oe,{children:[(0,s.jsxs)(Y,{children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(I,{type:"selector"}),"Filters"]}),(0,s.jsx)(B,{}),(0,s.jsxs)(H,{children:[(0,s.jsxs)(ze,{children:[(0,s.jsx)(I,{type:"category"}),(0,s.jsx)(Se,{children:"Category Type"}),(0,s.jsx)(Pe,Object.assign({value:l,onChange:e=>d(e.target.value)},{children:u}))]}),(0,s.jsxs)(ze,{children:[(0,s.jsx)(I,{type:"category"}),(0,s.jsx)(Se,{children:"Category"}),(0,s.jsx)(Pe,Object.assign({value:e,onChange:e=>i(Number(e.target.value))},{children:m}))]})]}),(0,s.jsxs)(H,{children:[(0,s.jsxs)($e,{children:[(0,s.jsx)(I,{type:"date"}),(0,s.jsx)(ye,{children:"From Year"}),(0,s.jsx)(we,{type:"number",value:"2023"})]}),(0,s.jsxs)($e,{children:[(0,s.jsx)(I,{type:"date"}),(0,s.jsx)(ye,{children:"To Year"}),(0,s.jsx)(we,{type:"number",value:"2023"})]})]}),(0,s.jsxs)(H,{children:[(0,s.jsxs)(ze,{children:[(0,s.jsx)(I,{type:"platform"}),(0,s.jsx)(Se,{children:"Platform"}),(0,s.jsx)(Pe,Object.assign({value:t,onChange:e=>r(Number(e.target.value))},{children:c}))]}),(0,s.jsxs)(ze,{children:[(0,s.jsx)(I,{type:"list"}),(0,s.jsx)(Se,{children:"List Format"}),(0,s.jsxs)(Pe,Object.assign({value:t,onChange:e=>r(Number(e.target.value))},{children:[(0,s.jsx)(ke,{children:"Ordered"}),(0,s.jsx)(ke,{children:"Random"})]}))]})]})]}),(0,s.jsxs)(je,Object.assign({onClick:()=>{((e,t)=>{try{const{games:i}=V,s=i.filter((i=>{const{g:s,p:r}=i;return!(!(null==s?void 0:s.includes(e))||!(null==r?void 0:r.includes(t)))})).sort(((e,t)=>Math.random()-.5));V.filtered=s}catch(e){console.error(e)}})(e,t),a(Date.now())}},{children:[(0,s.jsx)(I,{type:"search"}),"Find Games"]}))]})}),Ce=n.ZP.ol((({theme:e})=>n.iv`
    padding-left: ${e.size(6)};
  `)),Me=n.ZP.li((({theme:e})=>n.iv`
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
  `)),Le=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
  `)),Fe=n.ZP.img((({theme:e})=>n.iv`
    margin: auto;
    width: 100%;
    max-width: ${e.size(140)};
    border-radius: ${e.radius.large};
    overflow: hidden;
  `)),_e=n.ZP.h4((({theme:e})=>n.iv``)),Ee=n.ZP.p((({theme:e})=>n.iv``)),Ne=n.ZP.a((({theme:e})=>n.iv`
    text-decoration: none;
  `)),Ge=n.ZP.div((({theme:e})=>n.iv``)),Te=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${e.size(4)};
    padding: ${e.size(4)} 0;
  `)),Re=n.ZP.img((({theme:e})=>n.iv`
    width: 100%;
    max-width: ${e.size(160)};
    border-radius: ${e.radius.large};
    border: 2px solid ${e.colors.white+"44"};

    @media (max-width: ${P}px) {
      max-width: ${e.size(220)};
    }
  `)),Ie=e=>{const{game:t}=e,{categories:i,platforms:r}=ee(),o=(0,_.useMemo)((()=>{var e;return null===(e=t.g)||void 0===e?void 0:e.map((e=>{if(!i[e])return null;const{t,n:r}=JSON.parse(i[e]);return(0,s.jsx)(Me,{children:`${t}, ${r}`})}))}),[t.g]),n=(0,_.useMemo)((()=>{var e;return null===(e=t.p)||void 0===e?void 0:e.map((e=>(0,s.jsx)(Me,{children:r[e]})))}),[t.p]),a=(0,_.useMemo)((()=>{var e;return null===(e=t.s)||void 0===e?void 0:e.map((e=>(0,s.jsx)(Re,{src:e})))}),[t.s]);return(0,s.jsxs)(Le,{children:[(0,s.jsxs)(Q,{children:[(0,s.jsx)(Y,{children:(0,s.jsx)(Fe,{src:null==t?void 0:t.c})}),(0,s.jsxs)(Y,{children:[(0,s.jsx)(A,{children:null==t?void 0:t.n}),(0,s.jsx)(_e,{children:"2024"}),(0,s.jsxs)(Ge,{children:[(0,s.jsx)(I,{type:"star"}),(0,s.jsx)(I,{type:"star"}),(0,s.jsx)(I,{type:"star"}),(0,s.jsx)(I,{type:"starLine"}),(0,s.jsx)(I,{type:"starLine"})]}),(0,s.jsx)(Ee,{dangerouslySetInnerHTML:{__html:null==t?void 0:t.d}}),(0,s.jsx)(Ne,Object.assign({href:null==t?void 0:t.l},{children:"MobyGames"}))]})]}),(0,s.jsxs)(Q,{children:[(0,s.jsxs)(Y,{children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(I,{type:"category"}),"Categories"]}),(0,s.jsx)(B,{}),(0,s.jsx)(Ce,{children:o})]}),(0,s.jsxs)(Y,{children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(I,{type:"platform"}),"Platforms"]}),(0,s.jsx)(B,{}),(0,s.jsx)(Ce,{children:n})]})]}),(0,s.jsx)(Q,{children:(0,s.jsxs)(Y,{children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(I,{type:"screenshot"}),"Screenshots"]}),(0,s.jsx)(B,{}),(0,s.jsx)(Te,{children:a})]})})]})};const Ae=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    height: 100%;
    max-height: ${e.size(200)};
    padding: ${e.size(4)};
  `)),Be=(n.ZP.div((({theme:e})=>n.iv`
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
  `))),Je=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    margin-top: ${e.size(1.5)};

    :hover {
      color: ${e.colors.red};
    }
  `)),Ue=n.ZP.iframe((({theme:e})=>n.iv`
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

    @media (max-width: ${P}px) {
      height: ${e.size(150)};
    }

    @media (max-width: ${900}px) {
      height: ${e.size(125)};
    }

    @media (max-width: ${z}px) {
      height: ${e.size(100)};
    }
  `)),qe=e=>{const{query:t}=e,[i,r]=(0,_.useState)([]),[o,n]=(0,_.useState)(0);return(0,_.useEffect)((()=>{t&&((e=>{return t=void 0,i=void 0,r=function*(){const t="https://corsproxy.io/?"+encodeURIComponent("https://www.youtube.com/youtubei/v1/search"),i={context:{client:{hl:"en",gl:"BR",clientName:"WEB",clientVersion:"2.20240111.09.00",timeZone:"America/Fortaleza"}},query:e},s=yield fetch(t,{headers:{"accept-language":"en-US,en;q=0.9","content-type":"application/json"},body:JSON.stringify(i),method:"POST",mode:"cors"});return(yield s.json()).contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.map((e=>{var t;return null===(t=null==e?void 0:e.videoRenderer)||void 0===t?void 0:t.videoId})).filter((e=>!!e)).map((e=>`https://www.youtube.com/embed/${e}?fs=0`))},new((s=void 0)||(s=Promise))((function(e,o){function n(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(n,a)}l((r=r.apply(t,i||[])).next())}));var t,i,s,r})(t+"gameplay").then(r),n(0))}),[t]),(0,s.jsx)(Ae,{children:(0,s.jsxs)(Y,{children:[(0,s.jsxs)(Be,{children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(I,{type:"youtube"}),"Youtube"]}),(0,s.jsxs)(Je,{children:[(0,s.jsx)(I,{size:10,type:"previous",onClick:()=>o&&n(o-1)}),(0,s.jsx)(I,{size:10,type:"next",onClick:()=>o<i.length-1&&n(o+1)})]})]}),(0,s.jsx)(B,{}),(0,s.jsx)(he,Object.assign({check:!!t},{children:(0,s.jsx)(Ue,{src:i[o]})}))]})})};const Qe=()=>{const{gameId:e}=de(),[t,i]=(0,_.useState)(!1),[r,o]=(0,_.useState)(ce);return(0,_.useEffect)((()=>{var e,t,s,r;(e=void 0,t=void 0,s=void 0,r=function*(){i(!0),yield D()},new(s||(s=Promise))((function(i,o){function n(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,a)}l((r=r.apply(e,t||[])).next())}))).finally((()=>i(!1)))}),[]),(0,_.useEffect)((()=>{var t;(t=Number(e),K(void 0,void 0,void 0,(function*(){return V.games.find((e=>e.i===t))}))).then((e=>e.n&&o(e)))}),[e]),(0,s.jsxs)(ve,{children:[(0,s.jsx)(N,{}),(0,s.jsx)(Ze,{}),(0,s.jsx)(ne,{onSelect:o}),(0,s.jsxs)(J,Object.assign({show:!!(null==r?void 0:r.n)},{children:[(0,s.jsxs)(U,{children:[(0,s.jsxs)(A,{children:[(0,s.jsx)(I,{type:"list"}),"Description"]}),(0,s.jsx)(I,{type:"close",size:8,onClick:()=>o(ce)})]}),(0,s.jsxs)(q,{children:[(0,s.jsx)(Ie,{game:r}),(0,s.jsx)(qe,{query:null==r?void 0:r.n})]})]})),(0,s.jsx)(fe,{type:"fullScreen",show:t,title:"Loading Game List"})]})},Ye=()=>(0,s.jsxs)(n.f6,Object.assign({theme:F},{children:[(0,s.jsx)(L,{}),(0,s.jsx)(a.Z5,Object.assign({location:window.location},{children:(0,s.jsx)(a.AW,{path:"/*",element:(0,s.jsx)(Qe,{})})}))]})),He=(0,_.createContext)(null),Ke=e=>{const[t,i]=(0,_.useState)("/game-view"),[r,o]=(0,_.useState)(""),n={pathname:t,hash:"",search:"",lang:r,setPath:i,setLang:o},a=(0,_.useMemo)((()=>n),[JSON.stringify(n)]);return(0,s.jsx)(He.Provider,Object.assign({value:a},{children:e.children}))};(0,r.s)(document.getElementById("root")).render((0,s.jsx)((()=>(0,s.jsx)(le,{children:(0,s.jsx)(Ke,{children:(0,s.jsx)(n.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,s.jsx)(X,{children:(0,s.jsx)(o.VK,{children:(0,s.jsx)(Ye,{})})})}))})})),{}))}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return s[e](i,i.exports,o),i.exports}o.m=s,e=[],o.O=(t,i,s,r)=>{if(!i){var n=1/0;for(c=0;c<e.length;c++){for(var[i,s,r]=e[c],a=!0,l=0;l<i.length;l++)(!1&r||n>=r)&&Object.keys(o.O).every((e=>o.O[e](i[l])))?i.splice(l--,1):(a=!1,r<n&&(n=r));if(a){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,s,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,s){if(1&s&&(e=this(e)),8&s)return e;if("object"==typeof e&&e){if(4&s&&e.__esModule)return e;if(16&s&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var n={};t=t||[null,i({}),i([]),i(i)];for(var a=2&s&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,o.d(r,n),r},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var s=i.length-1;s>-1&&!e;)e=i[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var s,r,[n,a,l]=i,d=0;if(n.some((t=>0!==e[t]))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(l)var c=l(o)}for(t&&t(i);d<n.length;d++)r=n[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},i=this.webpackChunkgame_finder=this.webpackChunkgame_finder||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),o.nc=void 0;var n=o.O(void 0,[977],(()=>o(222)));n=o.O(n)})();