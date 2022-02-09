"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[189],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2817:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:1},s="Installation",p={unversionedId:"create/getting-started/install",id:"create/getting-started/install",isDocsHomePage:!1,title:"Installation",description:"Make sure you've installed and configured a few dependencies.",source:"@site/docs/create/getting-started/install.md",sourceDirName:"create/getting-started",slug:"/create/getting-started/install",permalink:"/docs/create/getting-started/install",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/getting-started/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/docs/overview/glossary"},next:{title:"Setup",permalink:"/docs/create/getting-started/setup"}},c=[{value:"Rustc",id:"rustc",children:[]},{value:"Cargo",id:"cargo",children:[]},{value:"Cargo Generate",id:"cargo-generate",children:[]},{value:"Archwayd",id:"archwayd",children:[{value:"Install Archwayd from Source (coming soon)",id:"install-archwayd-from-source-coming-soon",children:[]},{value:"Install Archwayd Using Docker",id:"install-archwayd-using-docker",children:[]}]},{value:"Node.js and Npm",id:"nodejs-and-npm",children:[]},{value:"Archway Developer CLI",id:"archway-developer-cli",children:[]}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Make sure you've installed and configured a few dependencies."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," For local installations, you need root access to run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),". Make sure to follow all the steps with ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," access to prevent conflicts and confusions on the deployment process which requires root permission."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install",title:"Install Rust"},"Rustc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html",title:"Install Cargo"},"Cargo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/cargo-generate",title:"Install Cargo Generate"},"Cargo Generate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/archway-network/archway/tree/main/cmd/archwayd",title:"Install Archway Daemon"},"Archwayd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker",title:"Install Docker"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",title:"Install Node.js and NPM"},"Node.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/archway-network/archway-cli",title:"Install develolper CLI"},"Archway Developer CLI"))),(0,o.kt)("h2",{id:"rustc"},"Rustc"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rustc"),", provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/",title:"Rust Homepage"},"Rust")," project maintainers, is the compiler for the Rust programming language. ",(0,o.kt)("inlineCode",{parentName:"p"},"rustc")," takes your Rust source code and produces binary code as a library or an executable."),(0,o.kt)("p",null,"To install Rust, follow the instructions for your operating system at ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"https://www.rust-lang.org/tools/install"),"."),(0,o.kt)("h2",{id:"cargo"},"Cargo"),(0,o.kt)("p",null,"Cargo is the Rust package manager, like ",(0,o.kt)("inlineCode",{parentName:"p"},"go get")," for Golang or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," is for JavaScript. Cargo comes with Rust if you installed ",(0,o.kt)("inlineCode",{parentName:"p"},"rustc")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup"),"."),(0,o.kt)("p",null,"If you didn't install  ",(0,o.kt)("inlineCode",{parentName:"p"},"rustc")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup"),", or don't have ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo")," in your command line path, see the instructions for installing Cargo at ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"https://doc.rust-lang.org/cargo/getting-started/installation.html"),"."),(0,o.kt)("h2",{id:"cargo-generate"},"Cargo Generate"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-generate")," tool creates a new Rust project quickly by leveraging a pre-existing code base."),(0,o.kt)("p",null,"Archway uses ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-generate")," to provide project templates for dApp development."),(0,o.kt)("p",null,"To install ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-generate")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"vendored-openssl"),", run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-generate --features vendored-openssl\n")),(0,o.kt)("h2",{id:"archwayd"},"Archwayd"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," is an implementation of a Cosmos zone with ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm")," smart contracts enabled."),(0,o.kt)("p",null,"Originally forked from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia"},"cosmos/gaia repository"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," adds new modules for developer rewards and for executing ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm"),", but otherwise the ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," binary functions just like ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad"),"."),(0,o.kt)("p",null,"To build ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd"),", install it from source or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"archwaynetwork/archwayd")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/",title:"Docker Homepage"},"Docker")," container."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note:")," For the moment Archway can be installed only by pulling from Docker Hub."),(0,o.kt)("p",{parentName:"div"},"For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker pull archwaynetwork/archwayd:latest")),(0,o.kt)("p",{parentName:"div"},"Installing ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," from source, coming soon!"))),(0,o.kt)("h3",{id:"install-archwayd-from-source-coming-soon"},"Install Archwayd from Source (coming soon)"),(0,o.kt)("p",null,"Get source code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:archway-network/archway.git\ncd archway\n")),(0,o.kt)("p",null,"Build and install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make install\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: Building archwayd from source requires Go 1.16.8+")),(0,o.kt)("p",null,"For full installation and configuration parameters, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archway-network/archway/blob/main/README.md"},"https://github.com/archway-network/archway/blob/main/README.md"),"."),(0,o.kt)("h3",{id:"install-archwayd-using-docker"},"Install Archwayd Using Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t archway-network/archwayd:latest\n")),(0,o.kt)("p",null,"Or pull from Docker Hub:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull archwaynetwork/archwayd:latest\n")),(0,o.kt)("p",null,"For more information on running ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"archway-network/archwayd")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/",title:"Docker Homepage"},"Docker")," container, see  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archway-network/archway#dockerized"},"https://github.com/archway-network/archway#dockerized"),"."),(0,o.kt)("h2",{id:"nodejs-and-npm"},"Node.js and Npm"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm")," is a package manager for JavaScript and Node.js. Archway uses ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," for installing and updating the developer CLI."),(0,o.kt)("p",null,"For installing ",(0,o.kt)("inlineCode",{parentName:"p"},"node.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),", see instructions for your operating system at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.0.4-beta")," and later, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@archwayhq/cli")," requires Node.js version 17 or higher."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@archwayhq/cli?activeTab=versions"},"Check current version of @archwayhq/cli")))),(0,o.kt)("h2",{id:"archway-developer-cli"},"Archway Developer CLI"),(0,o.kt)("p",null,"Install the Archway developer CLI using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Downloading and installing Node.js and npm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @archwayhq/cli\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you are running ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker"},"Docker"),", you may need to install the Archway developer CLI as ",(0,o.kt)("inlineCode",{parentName:"p"},"root"),", or give yourself permissions to the directory on your file system (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo chown YOUR_USERNAME:YOUR_GROUPNAME -R /var/tmp/.archwayd"),")"),(0,o.kt)("p",{parentName:"div"},"Hang in there, installing ",(0,o.kt)("inlineCode",{parentName:"p"},"archwayd")," from source is coming soon!"))))}m.isMDXComponent=!0}}]);