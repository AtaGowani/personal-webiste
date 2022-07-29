(function(){"use strict";var a={359:function(a,n,t){var e=t(9242),r=t(3396);function o(a,n,t,e,o,i){const s=(0,r.up)("NavBar");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),((0,r.wg)(),(0,r.j4)((0,r.LL)(i.currentView)))],64)}function i(a,n,t,e,o,i){const s=(0,r.up)("SplashIntro");return(0,r.wg)(),(0,r.j4)(s)}const s={class:"vertical-center text-left"},c=(0,r.uE)('<h1 data-v-bb8e2730> hi, my name is Ata. i am <span class="personal-description" data-v-bb8e2730> a software engineer</span>. </h1><p class="lead" data-v-bb8e2730>i&#39;m currently working @ HubSpot under product security.</p><div class="socials" data-v-bb8e2730><a href="https://github.com/AtaGowani" data-v-bb8e2730><i class="bi bi-github" data-v-bb8e2730></i></a><a href="https://www.linkedin.com/in/atagowani/" data-v-bb8e2730><i class="bi bi-linkedin" data-v-bb8e2730></i></a><a href="https://twitter.com/AtaGowani" data-v-bb8e2730><i class="bi bi-twitter" data-v-bb8e2730></i></a><a href="https://www.youtube.com/channel/UCOAwZEh0hSnFd9cJzCPJV1g" data-v-bb8e2730><i class="bi bi-youtube" data-v-bb8e2730></i></a></div>',3),l=[c];function u(a,n,t,e,o,i){return(0,r.wg)(),(0,r.iD)("div",s,l)}var b={name:"SplashIntro",props:{msg:String},methods:{rollingDescriptions:function(){let a=["a poet","a musician","a tinkerer","an investor"],n=document.getElementsByClassName("personal-description")[0],t=n.innerHTML,e=a[Math.floor(Math.random()*a.length)];while(t==e)e=a[Math.floor(Math.random()*a.length)];n.innerHTML=e}},mounted:function(){setInterval(this.rollingDescriptions,4e3)},unmounted:function(){for(let a=0;a<1e3;a++)window.clearInterval(a)}},d=t(89);const v=(0,d.Z)(b,[["render",u],["__scopeId","data-v-bb8e2730"]]);var p=v,f={name:"App",components:{SplashIntro:p}};const h=(0,d.Z)(f,[["render",i]]);var g=h;function w(a,n){return"This is the about page."}const m={},y=(0,d.Z)(m,[["render",w]]);var O=y,k=t.p+"img/dory.f1fb97c0.png";const _={class:"vertical-center text-left px-5"},j=(0,r._)("img",{src:k,alt:"Dory from Finding Dory",class:"not-found pb-3"},null,-1),x=(0,r._)("h1",null,"ERROR 404",-1),S=(0,r._)("p",{class:"lead"},"Not all those wander are lost...but you totally are.",-1),C=[j,x,S];function D(a,n){return(0,r.wg)(),(0,r.iD)("div",_,C)}const E={},I=(0,d.Z)(E,[["render",D]]);var M=I;const Z={class:"navbar navbar-expand-lg"},A=(0,r.uE)('<a class="navbar-brand" href="#" data-v-7226bbc6>A.G.</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-v-7226bbc6><span class="line" data-v-7226bbc6></span><span class="line" data-v-7226bbc6></span><span class="line" data-v-7226bbc6></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent" data-v-7226bbc6><ul class="navbar-nav ml-auto" data-v-7226bbc6><li class="nav-item" data-v-7226bbc6><a class="nav-link" href="#/about" data-v-7226bbc6>about</a></li><li class="nav-item" data-v-7226bbc6><a class="nav-link" href="#/blog" data-v-7226bbc6>blog</a></li><li class="nav-item" data-v-7226bbc6><a class="nav-link" href="#/library" data-v-7226bbc6>library</a></li></ul></div>',3),P=[A];function T(a,n,t,e,o,i){return(0,r.wg)(),(0,r.iD)("nav",Z,P)}var L={name:"NavBar"};const N=(0,d.Z)(L,[["render",T],["__scopeId","data-v-7226bbc6"]]);var B=N;const H={"/":g,"/about":O};var F={data(){return{currentPath:window.location.hash}},computed:{currentView(){return H[this.currentPath.slice(1)||"/"]||M}},mounted(){window.addEventListener("hashchange",(()=>{this.currentPath=window.location.hash}))},components:{NavBar:B}};const G=(0,d.Z)(F,[["render",o]]);var R=G;(0,e.ri)(R).mount("#app")}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return a[e](o,o.exports,t),o.exports}t.m=a,function(){var a=[];t.O=function(n,e,r,o){if(!e){var i=1/0;for(u=0;u<a.length;u++){e=a[u][0],r=a[u][1],o=a[u][2];for(var s=!0,c=0;c<e.length;c++)(!1&o||i>=o)&&Object.keys(t.O).every((function(a){return t.O[a](e[c])}))?e.splice(c--,1):(s=!1,o<i&&(i=o));if(s){a.splice(u--,1);var l=r();void 0!==l&&(n=l)}}return n}o=o||0;for(var u=a.length;u>0&&a[u-1][2]>o;u--)a[u]=a[u-1];a[u]=[e,r,o]}}(),function(){t.n=function(a){var n=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(n,{a:n}),n}}(),function(){t.d=function(a,n){for(var e in n)t.o(n,e)&&!t.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:n[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)}}(),function(){t.p="/personal-project/"}(),function(){var a={143:0};t.O.j=function(n){return 0===a[n]};var n=function(n,e){var r,o,i=e[0],s=e[1],c=e[2],l=0;if(i.some((function(n){return 0!==a[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var u=c(t)}for(n&&n(e);l<i.length;l++)o=i[l],t.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return t.O(u)},e=self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(359)}));e=t.O(e)})();
//# sourceMappingURL=app.4358184d.js.map