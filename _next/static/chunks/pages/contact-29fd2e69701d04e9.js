(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{23515:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(86484)}])},7789:function(e,t,n){"use strict";n.d(t,{H:function(){return ListItem}});var r=n(24246),l=n(38944);n(27378);let ListItem=e=>{let{index:t,children:n,responsive:a=!1,size:s="large",selected:i=!1}=e,c="large"===s?(0,l.Z)("text-flg",a&&"wideTablet:text-fxl"):(0,l.Z)("text-fnormal",a&&"phone:text-s20 wideTablet:text-flg");return(0,r.jsx)("div",{className:c,children:(0,r.jsxs)("span",{className:"group whitespace-nowrap",children:[(0,r.jsx)("span",{className:(0,l.Z)(i?"text-main":"text-main-500 group-hover:text-main"," group-hover:cursor-pointer"),children:t}),(0,r.jsx)("span",{className:"pl-[1ch] group-hover:cursor-pointer",children:n})]})})}},14488:function(e,t,n){"use strict";n.d(t,{u:function(){return FullPageLayout}});var r=n(24246);n(27378);let FullPageLayout=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"h-full",children:t})}},86484:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return contact}});var r=n(24246),l=n(7789),a=n(14488),s=n(17223),i=n(65218),c=n.n(i),o=n(27378);let NonSSRWrapper=e=>{let{children:t}=e;return(0,r.jsx)(r.Fragment,{children:t})};var u=c()(()=>Promise.resolve(NonSSRWrapper),{ssr:!1}),d=n(90990),x=n(27141),f=n(79894),h=n.n(f),p=n(8028),m=!0,contact=e=>{let{navTree:t}=e,n="kk:mm:ss zzz",[i,c]=(0,o.useState)(new Date);return(0,o.useEffect)(()=>{let e=setInterval(()=>{c(new Date)},1e3);return()=>{clearInterval(e)}},[]),(0,r.jsx)(u,{children:(0,r.jsx)(s.T,{canonicalUrl:"https://fragment.dev/contact",navTree:t,title:"Contact",children:(0,r.jsx)(a.u,{children:(0,r.jsxs)("div",{className:"flex flex-col tablet:flex-row text-flg wideTablet:text-fxl pt-f2 ",children:[(0,r.jsxs)("div",{className:" flex-1",children:[(0,r.jsx)(l.H,{responsive:!0,index:1,children:(0,r.jsx)(p.f,{textToCopy:"hello@fragment.dev",onCopyChildren:(0,r.jsx)("span",{className:"text-main",children:"Email copied"}),onCopyError:()=>{},children:(0,r.jsx)("span",{className:"text-main",children:"Email"})})}),(0,r.jsx)(l.H,{responsive:!0,index:2,children:(0,r.jsx)(h(),{href:"https://www.linkedin.com/company/fragmentdev/about/",target:"_blank",children:"Linkedin"})}),(0,r.jsx)(l.H,{responsive:!0,index:3,children:(0,r.jsx)(h(),{href:"https://twitter.com/LedgerAPI",target:"_blank",children:"Twitter"})})]}),(0,r.jsxs)("ul",{className:"pt-f4 tablet:pt-0 flex-1 whitespace-nowrap ",children:[(0,r.jsx)("li",{children:(0,x.Z)(i,"America/Los_Angeles",n)}),(0,r.jsx)("li",{children:(0,x.Z)(i,"America/Chicago",n)}),(0,r.jsx)("li",{children:(0,x.Z)(i,"America/New_York",n)}),(0,r.jsx)("li",{children:(0,x.Z)(i,"Australia/Melbourne",n,{locale:d.Z})})]})]})})})})}},8028:function(e,t,n){"use strict";n.d(t,{f:function(){return c}});var r=n(24246),l=n(38944),a=n(27378),s=n(36012),i=n.n(s);let c=(0,a.forwardRef)((e,t)=>{let{"data-testid":n,name:s,children:c,onCopyChildren:o,preventFocus:u=!1,...d}=e,{duration:x,textToCopy:f,stopEventPropagationAndDefault:h,onClick:p,onCopy:m,onCopySuccess:v,onCopyError:j}=d,{handler:w,isCopied:g}=function(e){let{duration:t=1e3,textToCopy:n,stopEventPropagationAndDefault:r=!1,onClick:l=i(),onCopy:s=()=>{},onCopySuccess:c=()=>{},onCopyError:o}=e,[u,d]=(0,a.useState)(!1),x=(0,a.useRef)(null);(0,a.useEffect)(()=>()=>{x.current&&clearTimeout(x.current)},[]);let f=(0,a.useCallback)(e=>{if(e&&r&&(e.stopPropagation(),e.preventDefault()),!u){let e=l(n);if(!e){o();return}d(!0),s(),x.current=setTimeout(()=>{d(!1),c()},t)}},[r,u,l,n,c,t,o,s]);return{isCopied:u,handler:f}}({duration:x,textToCopy:f,stopEventPropagationAndDefault:h,onClick:p,onCopy:m,onCopySuccess:v,onCopyError:j});return(0,r.jsx)("button",{name:s,type:"button",disabled:g,className:(0,l.Z)("text-main-500 hover:text-main transition-colors",g?[]:"hover:cursor-pointer"),onClick:w,tabIndex:u?-1:void 0,"data-testid":n,ref:t,children:g?o:c})})}},function(e){e.O(0,[7916,245,7223,9774,2888,179],function(){return e(e.s=23515)}),_N_E=e.O()}]);