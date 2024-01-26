(()=>{"use strict";var e,t,i,r={475:(e,t,i)=>{var r=i(893),s=i(745),o=i(655),n=i(133),a=i(250),l=i(294);const d=(0,l.createContext)(null),c=e=>{const[t,i]=(0,l.useState)("/home"),[s,o]=(0,l.useState)(""),n={pathname:t,hash:"",search:"",lang:s,setPath:i,setLang:o},a=(0,l.useMemo)((()=>n),[JSON.stringify(n)]);return(0,r.jsx)(d.Provider,Object.assign({value:a},{children:e.children}))},h=(i.p,(0,n.vJ)((({theme:e})=>n.iv`
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
  `))),u="#fafafa",m="#eeeeee",x="#e0e0e0",g="#bdbdbd",p="#9e9e9e",f="#757575",b="#141414",v={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:"#8e24aa",mainBg:"#7b1fa2",bg1:u,bg2:"#f5f5f5",bg3:m,bg4:x,text1:"#212121",text2:"#424242",text3:"#616161",text4:p,gray:p,yellow:"#B38600",red:"#CA3521",blue:"#388BFF",green:"#558b2f",white:u,black:b},fontSize:{h1:"1.3rem",h2:"1.25rem",h3:"1.2rem",h4:"1.15rem",h5:"1.1rem",h6:"1.05rem",body:"1rem",label:"0.9rem",small:"0.95rem",verySmall:"0.85rem"},shadow:{low:"2px 2px 3x 1px #0004",medium:"2px 2px 3px 1px #0006",high:"2px 2px 3px 1px #0008"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},j=Object.assign(Object.assign({},v),{colors:Object.assign(Object.assign({},v.colors),{bg1:b,bg2:b+"88",bg3:b+"66",bg4:b+"44",text1:m,text2:x,text3:g,text4:p,gray:f,white:x})}),y=(0,l.createContext)(null),$=e=>{const[t,i]=(0,l.useState)(""),[s,o]=(0,l.useState)(0),[n,a]=(0,l.useState)(0),d={gameId:t,gameCategory:s,gamePlatform:n,setGameId:i,setGameCategory:o,setGamePlatform:a},c=(0,l.useMemo)((()=>d),[JSON.stringify(d)]);return(0,r.jsx)(y.Provider,Object.assign({value:c},{children:e.children}))},w=()=>(0,l.useContext)(y);i.p;var z=function(e,t,i,r){return new(i||(i=Promise))((function(s,o){function n(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}l((r=r.apply(e,t||[])).next())}))};let P={games:[],categories:[],platforms:[]};const S=()=>z(void 0,void 0,void 0,(function*(){try{P=yield(yield fetch("https://klessitonrodrigues.github.io/game-finder/assets/json/games.json")).json();const{categories:e,platforms:t}=P;return{categories:e,platforms:t}}catch(e){console.error(e)}})),O=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    padding: ${e.size(2)};
    margin: ${e.size(2)} 0;
    border-radius: ${e.radius.large};
  `)),k=n.ZP.button((({theme:e})=>n.iv`
    margin: ${e.size(10)} auto;
    background-color: #fff;
  `)),Z=()=>{const{gameCategory:e,gamePlatform:t,setGameId:i}=w();return(0,r.jsx)(O,{children:(0,r.jsx)(k,Object.assign({onClick:()=>i(((e,t)=>{try{const{games:i}=P,r=i.filter((i=>{const{g:r,p:s}=i;return!(!(null==r?void 0:r.includes(e))||!(null==s?void 0:s.includes(t)))})),s=Number(Math.random().toFixed(2)),o=r[Number((r.length*s).toFixed(0))];return String(o.i)}catch(e){console.error(e)}})(e,t))},{children:"Random Game"}))})},C=e=>e.check?e.true||e.children:e.false;var M=i(279);const F={download:(0,r.jsx)(M.HA8,{}),selector:(0,r.jsx)(M.ZaQ,{}),spinner:(0,r.jsx)(M.H4p,{}),next:(0,r.jsx)(M.U4K,{}),previous:(0,r.jsx)(M._L$,{}),youtube:(0,r.jsx)(M.pzF,{}),star:(0,r.jsx)(M.Kz,{}),starLine:(0,r.jsx)(M.u20,{}),category:(0,r.jsx)(M.yTT,{}),platform:(0,r.jsx)(M.pa0,{}),screenshot:(0,r.jsx)(M.QVH,{}),date:(0,r.jsx)(M.FVH,{})},N=n.ZP.span((({theme:e,size:t})=>n.iv`
    display: inline-flex;
    font-size: ${e.size(t||7)};
    cursor: pointer;
  `)),_=e=>{const{type:t,size:i,style:s,onPress:o}=e;return(0,r.jsx)(N,Object.assign({className:"icon",size:i,style:s,onClick:o},{children:F[t]}))},L=(n.F4`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`,n.F4`
    from {transform: translateY(18rem); opacity: 0} 
    to {opacity: 1}
`),E=(n.F4`
   from {opacity: 0}
   to {opacity: 1}
`,n.F4`
   to {transform: rotateZ(360deg);}
`),T=L,G=E,I=n.ZP.div((()=>n.iv``)),R=n.ZP.div((()=>n.iv`
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
  `)),B=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.size(8)};
    animation: ${G} 0.8s infinite linear;
    color: ${e.colors.white};
  `)),J=n.ZP.h1((({theme:e})=>n.iv`
    font-size: ${e.fontSize.label};
    margin-bottom: ${e.size(2)};
    animation: ${T} 0.5s ease-out;
    color: ${e.colors.white};
  `)),A=n.ZP.p((({theme:e})=>n.iv`
    font-size: ${e.fontSize.verySmall};
    animation: ${T} 0.5s ease-out;
    color: ${e.colors.white};
  `)),H=e=>{const{show:t,type:i,title:s,description:o}=e;return(0,r.jsxs)(I,{children:[(0,r.jsx)(C,Object.assign({check:t&&"icon"===i},{children:(0,r.jsx)(B,{children:(0,r.jsx)(_,{type:"spinner",size:12})})})),(0,r.jsx)(C,Object.assign({check:t&&"fullScreen"===i},{children:(0,r.jsxs)(R,{children:[(0,r.jsx)(B,{children:(0,r.jsx)(_,{type:"spinner",size:12})}),(0,r.jsx)(J,{children:s}),(0,r.jsx)(A,{children:o})]})}))]})},Y=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    height: 100%;
    max-width: ${e.size(400)};
    overflow-y: auto;
    margin: auto;
  `)),q=e=>(0,r.jsx)(Y,{children:e.children}),Q=1024,V=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    padding: ${e.size(4)};
    gap: ${e.size(4)};

    @media (max-width: ${Q}px) {
      flex-direction: column;
    }
  `)),K=n.ZP.div((({theme:e})=>n.iv`
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
  `)),U=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    width: 100%;

    @media (max-width: ${768}px) {
      width: 100%;
      flex-direction: column;
    }
  `)),W=n.ZP.label((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    border-radius: ${e.radius.medium};
    background-color: ${e.colors.bg3};
    color: ${e.colors.text2};
    box-shadow: ${e.shadow.medium};
  `)),D=n.ZP.div((()=>n.iv`
    min-width: max-content;
  `)),X=n.ZP.input((({theme:e})=>n.iv`
    width: 100%;
    padding-left: ${e.size(2)};
    padding-top: ${e.size(.5)};
    font-size: ${e.fontSize.body};
    font-weight: bold;
    border: none;
    background-color: transparent;
    color: ${e.colors.text1};
  `)),ee=n.ZP.label((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
    width: 100%;
    padding: ${e.size(2)};
    font-weight: bold;
    font-size: ${e.fontSize.label};
    background-color: ${e.colors.bg3};
    color: ${e.colors.text2};
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.medium};
  `)),te=n.ZP.select((({theme:e})=>n.iv`
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
  `)),ie=n.ZP.div((()=>n.iv`
    min-width: max-content;
  `)),re=n.ZP.option((({theme:e})=>n.iv`
    background-color: ${e.colors.bg1};
    color: ${e.colors.text1};
  `)),se=(0,l.createContext)(null),oe=e=>{const[t,i]=(0,l.useState)(0),[s,o]=(0,l.useState)(0),[n,a]=(0,l.useState)(0),[d,c]=(0,l.useState)(0),[h,u]=(0,l.useState)(0),[m,x]=(0,l.useState)([]),[g,p]=(0,l.useState)([]),f={categories:m,platforms:g,setPlatforms:p,setCategories:x};(0,l.useEffect)((()=>{S().then((e=>{x(e.categories),p(e.platforms)}))}),[]);const b=(0,l.useMemo)((()=>f),[JSON.stringify(f)]);return(0,r.jsx)(se.Provider,Object.assign({value:b},{children:e.children}))},ne=()=>(0,l.useContext)(se),ae=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${e.size(4)};
    padding: ${e.size(4)};
    max-width: ${e.size(300)};
    margin: auto;
  `)),le=()=>{const{gameCategory:e,gamePlatform:t,setGameCategory:i,setGamePlatform:s}=w(),{categories:o,platforms:n}=ne(),[a,d]=(0,l.useState)(""),c=(0,l.useMemo)((()=>n.map(((e,t)=>(0,r.jsx)(re,Object.assign({value:t},{children:e}))))),[n]),h=(0,l.useMemo)((()=>{const e=[],t=[];return o.forEach(((i,r)=>{const{t:s,n:o}=JSON.parse(i);e.includes(s)||e.push(s),""!==a&&a!==s||t.push({i:r,name:o})})),{types:e,items:t}}),[o,a]),u=(0,l.useMemo)((()=>h.types.map((e=>(0,r.jsx)(re,Object.assign({value:e},{children:e}))))),[o]),m=(0,l.useMemo)((()=>h.items.map((e=>(0,r.jsx)(re,Object.assign({value:e.i},{children:e.name}))))),[o,a]);return(0,r.jsxs)(ae,{children:[(0,r.jsx)(U,{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)(_,{type:"platform"}),(0,r.jsx)(ie,{children:"Platform"}),(0,r.jsx)(te,Object.assign({value:t,onChange:e=>s(Number(e.target.value))},{children:c}))]})}),(0,r.jsxs)(U,{children:[(0,r.jsxs)(W,{children:[(0,r.jsx)(_,{type:"date"}),(0,r.jsx)(D,{children:"From Year"}),(0,r.jsx)(X,{type:"number",value:"2023"})]}),(0,r.jsxs)(W,{children:[(0,r.jsx)(_,{type:"date"}),(0,r.jsx)(D,{children:"To Year"}),(0,r.jsx)(X,{type:"number",value:"2023"})]})]}),(0,r.jsxs)(U,{children:[(0,r.jsxs)(ee,{children:[(0,r.jsx)(_,{type:"category"}),(0,r.jsx)(ie,{children:"Category Type"}),(0,r.jsx)(te,Object.assign({value:a,onChange:e=>d(e.target.value)},{children:u}))]}),(0,r.jsxs)(ee,{children:[(0,r.jsx)(_,{type:"category"}),(0,r.jsx)(ie,{children:"Category"}),(0,r.jsx)(te,Object.assign({value:e,onChange:e=>i(Number(e.target.value))},{children:m}))]})]})]})},de=n.ZP.ol((({theme:e})=>n.iv`
    padding-left: ${e.size(6)};
  `)),ce=n.ZP.li((({theme:e})=>n.iv`
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
  `)),he=n.ZP.h2((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(2)};
  `)),ue=n.ZP.hr((({theme:e})=>n.iv`
    border-color: ${e.colors.text1+"44"};
  `)),me=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
  `)),xe=n.ZP.img((({theme:e})=>n.iv`
    margin: auto;
    width: 100%;
    max-width: ${e.size(140)};
    border-radius: ${e.radius.large};
    overflow: hidden;
  `)),ge=n.ZP.h4((({theme:e})=>n.iv``)),pe=n.ZP.p((({theme:e})=>n.iv``)),fe=n.ZP.a((({theme:e})=>n.iv`
    text-decoration: none;
  `)),be=n.ZP.div((({theme:e})=>n.iv``)),ve=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${e.size(4)};
    padding: ${e.size(4)} 0;
  `)),je=n.ZP.img((({theme:e})=>n.iv`
    width: 100%;
    max-width: ${e.size(180)};
    border-radius: ${e.radius.large};
    border: 2px solid ${e.colors.white+"44"};

    @media (max-width: ${Q}px) {
      max-width: ${e.size(220)};
    }
  `)),ye=e=>{const{game:t}=e,{categories:i,platforms:s}=ne(),o=(0,l.useMemo)((()=>{var e;return null===(e=t.g)||void 0===e?void 0:e.map((e=>{const{t,n:s}=JSON.parse(i[e]);return(0,r.jsx)(ce,{children:`${t}, ${s}`})}))}),[t.g]),n=(0,l.useMemo)((()=>{var e;return null===(e=t.p)||void 0===e?void 0:e.map((e=>(0,r.jsx)(ce,{children:s[e]})))}),[t.p]),a=(0,l.useMemo)((()=>{var e;return null===(e=t.s)||void 0===e?void 0:e.map((e=>(0,r.jsx)(je,{src:e})))}),[t.s]);return(0,r.jsxs)(me,{children:[(0,r.jsxs)(V,{children:[(0,r.jsx)(K,{children:(0,r.jsx)(xe,{src:null==t?void 0:t.c})}),(0,r.jsxs)(K,{children:[(0,r.jsx)(he,{children:null==t?void 0:t.n}),(0,r.jsx)(ge,{children:"2024"}),(0,r.jsxs)(be,{children:[(0,r.jsx)(_,{type:"star"}),(0,r.jsx)(_,{type:"star"}),(0,r.jsx)(_,{type:"star"}),(0,r.jsx)(_,{type:"starLine"}),(0,r.jsx)(_,{type:"starLine"})]}),(0,r.jsx)(pe,{dangerouslySetInnerHTML:{__html:null==t?void 0:t.d}}),(0,r.jsx)(fe,Object.assign({href:null==t?void 0:t.l},{children:"MobyGames"}))]})]}),(0,r.jsxs)(V,{children:[(0,r.jsxs)(K,{children:[(0,r.jsxs)(he,{children:[(0,r.jsx)(_,{type:"category"}),"Categories"]}),(0,r.jsx)(ue,{}),(0,r.jsx)(de,{children:o})]}),(0,r.jsxs)(K,{children:[(0,r.jsxs)(he,{children:[(0,r.jsx)(_,{type:"platform"}),"Platforms"]}),(0,r.jsx)(ue,{}),(0,r.jsx)(de,{children:n})]})]}),(0,r.jsx)(V,{children:(0,r.jsxs)(K,{children:[(0,r.jsxs)(he,{children:[(0,r.jsx)(_,{type:"screenshot"}),"Screenshots"]}),(0,r.jsx)(ue,{}),(0,r.jsx)(ve,{children:a})]})})]})};const $e=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    height: 100%;
    max-height: ${e.size(200)};
    padding: ${e.size(4)};
  `)),we=(n.ZP.div((({theme:e})=>n.iv`
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
  `))),ze=n.ZP.div((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    gap: ${e.size(4)};
    margin-top: ${e.size(1.5)};

    :hover {
      color: ${e.colors.red};
    }
  `)),Pe=n.ZP.iframe((({theme:e})=>n.iv`
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

    @media (max-width: ${Q}px) {
      height: ${e.size(150)};
    }

    @media (max-width: ${900}px) {
      height: ${e.size(125)};
    }

    @media (max-width: ${768}px) {
      height: ${e.size(100)};
    }
  `)),Se=e=>{const{query:t}=e,[i,s]=(0,l.useState)([]),[o,n]=(0,l.useState)(0);return(0,l.useEffect)((()=>{t&&((e=>{return t=void 0,i=void 0,s=function*(){const t="https://corsproxy.io/?"+encodeURIComponent("https://www.youtube.com/youtubei/v1/search"),i={context:{client:{hl:"en",gl:"BR",clientName:"WEB",clientVersion:"2.20240111.09.00",timeZone:"America/Fortaleza"}},query:e},r=yield fetch(t,{headers:{"accept-language":"en-US,en;q=0.9","content-type":"application/json"},body:JSON.stringify(i),method:"POST",mode:"cors"});return(yield r.json()).contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.map((e=>{var t;return null===(t=null==e?void 0:e.videoRenderer)||void 0===t?void 0:t.videoId})).filter((e=>!!e)).map((e=>`https://www.youtube.com/embed/${e}?fs=0`))},new((r=void 0)||(r=Promise))((function(e,o){function n(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(n,a)}l((s=s.apply(t,i||[])).next())}));var t,i,r,s})(t+"gameplay").then(s),n(0))}),[t]),(0,r.jsx)($e,{children:(0,r.jsxs)(K,{children:[(0,r.jsxs)(we,{children:[(0,r.jsxs)(he,{children:[(0,r.jsx)(_,{type:"youtube"}),"Youtube"]}),(0,r.jsxs)(ze,{children:[(0,r.jsx)(_,{size:10,type:"previous",onPress:()=>o&&n(o-1)}),(0,r.jsx)(_,{size:10,type:"next",onPress:()=>o<i.length-1&&n(o+1)})]})]}),(0,r.jsx)(ue,{}),(0,r.jsx)(C,Object.assign({check:!!t},{children:(0,r.jsx)(Pe,{src:i[o]})}))]})})},Oe=i.p+"assets/ff1a079896789c18638c.jpg",ke=n.ZP.div((({theme:e})=>n.iv`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Oe});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
  `));const Ze=()=>{const{gameId:e}=w(),[t,i]=(0,l.useState)(!1),[s,o]=(0,l.useState)();return(0,l.useEffect)((()=>{var e,t,r,s;(e=void 0,t=void 0,r=void 0,s=function*(){i(!0),yield S()},new(r||(r=Promise))((function(i,o){function n(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,a)}l((s=s.apply(e,t||[])).next())}))).finally((()=>i(!1)))}),[]),(0,l.useEffect)((()=>{var t;(t=Number(e),z(void 0,void 0,void 0,(function*(){return P.games.find((e=>e.i===t))}))).then((e=>e.n&&o(e)))}),[e]),(0,r.jsxs)(q,{children:[(0,r.jsx)(Z,{}),(0,r.jsx)(le,{}),(0,r.jsx)(C,Object.assign({check:!!s},{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ye,{game:s}),(0,r.jsx)(Se,{query:null==s?void 0:s.n})]})})),(0,r.jsx)(H,{type:"fullScreen",show:t,title:"Loading Game List",description:"loading"}),(0,r.jsx)(ke,{})]})},Ce=()=>{const e=(0,l.useContext)(d);return(0,r.jsxs)(n.f6,Object.assign({theme:j},{children:[(0,r.jsx)(h,{}),(0,r.jsx)(a.Z5,Object.assign({location:e},{children:(0,r.jsx)(a.AW,{path:"/*",element:(0,r.jsx)(Ze,{})})}))]}))};(0,s.s)(document.getElementById("root")).render((0,r.jsx)((()=>(0,r.jsx)($,{children:(0,r.jsx)(c,{children:(0,r.jsx)(n.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,r.jsx)(oe,{children:(0,r.jsx)(o.VK,{children:(0,r.jsx)(Ce,{})})})}))})})),{}))}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,e=[],o.O=(t,i,r,s)=>{if(!i){var n=1/0;for(c=0;c<e.length;c++){for(var[i,r,s]=e[c],a=!0,l=0;l<i.length;l++)(!1&s||n>=s)&&Object.keys(o.O).every((e=>o.O[e](i[l])))?i.splice(l--,1):(a=!1,s<n&&(n=s));if(a){e.splice(c--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,r,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var s=Object.create(null);o.r(s);var n={};t=t||[null,i({}),i([]),i(i)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,o.d(s,n),s},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!e;)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var r,s,[n,a,l]=i,d=0;if(n.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var c=l(o)}for(t&&t(i);d<n.length;d++)s=n[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},i=this.webpackChunkgame_finder=this.webpackChunkgame_finder||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),o.nc=void 0;var n=o.O(void 0,[977],(()=>o(475)));n=o.O(n)})();