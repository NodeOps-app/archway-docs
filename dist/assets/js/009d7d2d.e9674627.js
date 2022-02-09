"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[467],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9196:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},p="Producing Wasm executables",l={unversionedId:"create/guides/my-first-dapp/wasm",id:"create/guides/my-first-dapp/wasm",isDocsHomePage:!1,title:"Producing Wasm executables",description:"Since we've tested and built our contract, we're still operating under the assumption that everything works.",source:"@site/docs/create/guides/my-first-dapp/wasm.md",sourceDirName:"create/guides/my-first-dapp",slug:"/create/guides/my-first-dapp/wasm",permalink:"/docs/create/guides/my-first-dapp/wasm",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/guides/my-first-dapp/wasm.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Requesting Testnet funds",permalink:"/docs/create/guides/my-first-dapp/faucet"},next:{title:"Deploying your contract on chain",permalink:"/docs/create/guides/my-first-dapp/deploy"}},c=[{value:"Default Wasm executables",id:"default-wasm-executables",children:[]},{value:"CosmWasm Wasm executables",id:"cosmwasm-wasm-executables",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"producing-wasm-executables"},"Producing Wasm executables"),(0,i.kt)("p",null,"Since we've tested and built our contract, we're still operating under the assumption that everything works.\nHowever, to test our dApp on Archway, we'll need to build it as a ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," executable, then upload and instantiate it on chain."),(0,i.kt)("p",null,"For that, you'll need the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm32-unknown-unknown")," target installed in your toolchain as well. You can add it using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rustup target add wasm32-unknown-unknown\n")),(0,i.kt)("p",null,"There are 2 types of ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," binaries that can be produced by the Developer CLI. Let's call them ",(0,i.kt)("em",{parentName:"p"},'"default"')," ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," and ",(0,i.kt)("em",{parentName:"p"},'"cosmwasm"')," ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm"),"."),(0,i.kt)("h2",{id:"default-wasm-executables"},"Default Wasm executables"),(0,i.kt)("p",null,"This is a regular ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," binary. It's the same as you'd get by running the Rust native command ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo wasm"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Default")," ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," executables can be produced by the developer CLI using the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archway deploy --dryrun\n")),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Building wasm executable...\n\n  Compiling proc-macro2 v1.0.28\n  Compiling unicode-xid v0.2.2\n  # And so on until ...\n  Compiling my-project v0.1.0 (/home/my-system-path/my-project)\n    Finished release [optimized] target(s) in 27.78s\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: use ",(0,i.kt)("inlineCode",{parentName:"strong"},"--dryrun")," before deploying to gauge whether the deployment will succeed. This is useful because of speed, as running ",(0,i.kt)("inlineCode",{parentName:"strong"},"archway deploy --dryrun")," is a lot faster.")),(0,i.kt)("h2",{id:"cosmwasm-wasm-executables"},"CosmWasm Wasm executables"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"CosmWasm")," ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," executables are optimized using the ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmwasm/rust-optimizer")," which produces a smaller executable size than ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo wasm"),"."),(0,i.kt)("p",null,"Think of it like building ",(0,i.kt)("inlineCode",{parentName:"p"},"C++")," executables with ",(0,i.kt)("a",{parentName:"p",href:"https://upx.github.io/"},"UPX"),", as ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmwasm/rust-optimizer")," also compresses the binary to produce smaller build outputs."),(0,i.kt)("p",null,"Producing ",(0,i.kt)("em",{parentName:"p"},"CosmWasm")," ",(0,i.kt)("inlineCode",{parentName:"p"},"wasm")," executables is part of the deploy process and can be accessed by running the deploy command without the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dryrun")," flag."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Developer CLI currently only supports the Docker version of ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmwasm/rust-optimizer"),". The deploy process will fail and exit if Docker has not been started (Support for native ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmwasm/rust-optimizer")," binaries coming soon)."))))}m.isMDXComponent=!0}}]);