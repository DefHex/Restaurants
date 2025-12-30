import{a as x,p as e,w as H}from"./chunk-JMJ3UQ3L-CXPOUM4N.js";import{b}from"./menuItems-C_i8VK85.js";function I({setScreenMode:s}){const[a,c]=x.useState(0),l=d=>{c(d),s(d)};return e.jsx("div",{children:e.jsxs("div",{className:"w-full flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl",children:[e.jsx("button",{type:"button",className:`flex-1 h-14 w-20 rounded-2xl border border-white/20 shadow-lg
            ${a===1?"bg-white text-blue-800":"backdrop-blur-sm bg-white/10 text-black"}
`,onClick:()=>{l(1)},children:"One"}),e.jsx("button",{type:"button",className:`flex-1 h-14 w-20 rounded-2xl border border-white/20 shadow-lg
            ${a===2?"bg-white  text-blue-800":"backdrop-blur-sm bg-white/10 text-black"}
            `,onClick:()=>l(2),children:"Two"})]})})}const R=.4,_=.4,N=100,z=100,E=1,M=4,p=window.innerWidth<640?3:5,m=window.innerWidth<640?125:220,S=100;function L(){const[s,a]=x.useState({x:0,y:0}),[c,l]=x.useState({x:0,y:0}),[d,y]=x.useState(!1),$=t=>{y(!0);const r=t.clientX,n=t.clientY;l({x:r,y:n})},P=t=>{if(!d)return;const r=t.clientX,n=t.clientY,i={x:r-c.x,y:n-c.y};a(o=>({x:o.x+i.x,y:o.y+i.y})),l({x:r,y:n})},j=()=>{y(!1)},k=t=>{const r={x:window.innerWidth/2,y:window.innerHeight/2},n={x:t.x-r.x,y:t.y-r.y},i=window.innerWidth*R,o=window.innerHeight*_,f=Math.abs(n.x)-(i-N),g=Math.abs(n.y)-(o-N),w=Math.max(f,0),X=Math.max(g,0),Y=Math.sqrt(w**2+X**2),W=Math.min(Math.max(f,g),0),O=Y+W,C=Math.min(Math.max(O/2.5/z,0),1);return E*(1-C)**2},v=[],h=p*m,u=M*m,B=(s.x%h+h)%h,D=(s.y%u+u)%u;for(let t=-1;t<=1;t++)for(let r=-1;r<=1;r++)for(let n=0;n<M;n++)for(let i=0;i<p;i++){const o={x:i*m+B+t*h,y:n*m+D+r*u};if(o.x>-200&&o.x<window.innerWidth+200&&o.y>-200&&o.y<window.innerHeight+200){const f=k(o),g=n*p+i,w=b[g%b.length];v.push(e.jsx("div",{className:"absolute transition-transform duration-100 ease-out",style:{left:`${o.x}px`,top:`${o.y}px`,transform:`translate(-50%, -50%) scale(${f})`,width:`${S}px`,height:`${S}px`},children:e.jsx("div",{className:"w-full h-full flex flex-col items-center justify-center bg-no-repeat bg-contain",style:{backgroundImage:`url(${w.path})`}})},`${t}-${r}-${n}-${i}`))}}return e.jsxs("div",{className:"w-full h-screen bg-white overflow-hidden relative select-none touch-none",style:{cursor:d?"grabbing":"grab"},onPointerDown:$,onPointerMove:P,onPointerUp:j,onPointerLeave:j,children:[v,e.jsx("div",{className:"absolute top-1/2 left-1/2 w-2 h-2 bg-red-500/30 rounded-full pointer-events-none",style:{transform:"translate(-50%, -50%)"}})]})}function U(){return e.jsx("div",{className:"grid gap-3 auto-rows-[160px]",children:b.map((s,a)=>{const c=a%2===0;return e.jsxs("div",{className:`
              grid grid-cols-3 gap-3
              ${c?"[grid-template-areas:'text_text_img']":"[grid-template-areas:'img_text_text']"}
            `,children:[e.jsx("div",{}),e.jsxs("div",{className:`
                [grid-area:text]
                col-span-2
                backdrop-blur-xl bg-white/10
                rounded-3xl border border-white/20 shadow-2xl
                p-6 flex flex-col items-center
              `,children:[e.jsx("h2",{className:"leading-relaxed",children:s.name}),e.jsx("p",{className:"text-sm leading-relaxed",children:s.description}),e.jsx("h3",{className:"leading-relaxed",children:s.price})]}),e.jsx("div",{className:`
                flex items-center justify-center
                w-full h-full
                [grid-area:img]
                backdrop-blur-xl bg-white/10
                rounded-3xl border border-white/20 shadow-2xl
                overflow-hidden
                p-2 sm:p-4 md:p-6
              `,children:e.jsx("img",{src:s.path,alt:s.name,className:`
                  w-full h-full object-cover
                  sm:object-contain
                  transition duration-300 ease-in-out 
                  hover:-translate-y-1 hover:scale-110
                `})})]},s.id)})})}function G({}){return[{title:"Buffet"},{name:"description",content:"Buffet"}]}const T=H(function(){const[a,c]=x.useState(1);return e.jsxs("div",{children:[a===1&&e.jsx(L,{}),a===2&&e.jsx(U,{}),e.jsx("div",{className:"fixed bottom-6 inset-x-0 z-50 pointer-events-auto",children:e.jsx("div",{className:"grid place-items-center",children:e.jsx(I,{setScreenMode:c})})})]})});export{T as default,G as meta};
