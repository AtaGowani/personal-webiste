(function(){"use strict";var e={125:function(e,t,a){var n=a(963),o=a(252);function i(e,t,a,n,i,r){const s=(0,o.up)("NavBar");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),((0,o.wg)(),(0,o.j4)((0,o.LL)(r.currentView)))],64)}function r(e,t,a,n,i,r){const s=(0,o.up)("SplashIntro");return(0,o.wg)(),(0,o.j4)(s)}var s=a.p+"img/profile-min.20d7e897.png";const l={class:"vertical-center text-left"},c=(0,o.uE)('<img src="'+s+'" alt="Ata Gowani Profile" class="profile rounded-circle" data-v-15b78e3f><h1 data-v-15b78e3f> Hi, my name is Ata. I am <span class="personal-description" data-v-15b78e3f>an engineer</span>. </h1><h6 class="lead" data-v-15b78e3f> I&#39;m currently working @ HubSpot under product security. </h6><div class="socials" data-v-15b78e3f><a href="https://github.com/AtaGowani" data-v-15b78e3f><i class="bi bi-github" data-v-15b78e3f></i></a><a href="https://www.linkedin.com/in/atagowani/" data-v-15b78e3f><i class="bi bi-linkedin" data-v-15b78e3f></i></a><a href="https://twitter.com/AtaGowani" data-v-15b78e3f><i class="bi bi-twitter" data-v-15b78e3f></i></a><a href="https://www.youtube.com/channel/UCOAwZEh0hSnFd9cJzCPJV1g" data-v-15b78e3f><i class="bi bi-youtube" data-v-15b78e3f></i></a><a href="mailto:me@atagowani.com" data-v-15b78e3f><i class="bi bi-envelope-fill" data-v-15b78e3f></i></a></div>',4),d=[c];function h(e,t,a,n,i,r){return(0,o.wg)(),(0,o.iD)("div",l,d)}var u={name:"SplashIntro",props:{msg:String},methods:{rollingDescriptions:function(){let e=["an engineer","a poet","a musician","a tinkerer","an investor","a cat dad"],t=document.getElementsByClassName("personal-description")[0],a=e.findIndex((e=>e==t.innerHTML)),n=(a+1)%e.length;t.innerHTML=e[n]}},mounted:function(){setInterval(this.rollingDescriptions,2500)},unmounted:function(){for(let e=0;e<1e3;e++)window.clearInterval(e)}},g=a(744);const m=(0,g.Z)(u,[["render",h],["__scopeId","data-v-15b78e3f"]]);var p=m,f={name:"App",components:{SplashIntro:p}};const v=(0,g.Z)(f,[["render",r]]);var w=v,b=a.p+"img/dory.f1fb97c0.png";const y={class:"vertical-center text-left px-5"},_=(0,o._)("img",{src:b,alt:"Dory from Finding Dory",class:"not-found pb-3"},null,-1),k=(0,o._)("h1",null,"ERROR 404",-1),I=(0,o._)("p",{class:"lead"},"Not all those wander are lost...but you totally are.",-1),x=[_,k,I];function j(e,t){return(0,o.wg)(),(0,o.iD)("div",y,x)}const P={},A=(0,g.Z)(P,[["render",j]]);var S=A;const T={class:"navbar navbar-expand-lg"},D=(0,o.uE)('<a class="navbar-brand" href="#" data-v-41e9505d>A.G.</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-v-41e9505d><span class="line" data-v-41e9505d></span><span class="line" data-v-41e9505d></span><span class="line" data-v-41e9505d></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent" data-v-41e9505d><ul class="navbar-nav ml-auto" data-v-41e9505d><li class="nav-item" data-v-41e9505d><a class="nav-link" href="#/blog" data-v-41e9505d>blog</a></li><li class="nav-item" data-v-41e9505d><a class="nav-link" href="#/poetry" data-v-41e9505d>poetry</a></li><li class="nav-item" data-v-41e9505d><a class="nav-link" href="#/library" data-v-41e9505d>library</a></li></ul></div>',3),M=[D];function C(e,t,a,n,i,r){return(0,o.wg)(),(0,o.iD)("nav",T,M)}var H={name:"NavBar"};const O=(0,g.Z)(H,[["render",C],["__scopeId","data-v-41e9505d"]]);var Z=O,W=a.p+"img/pragmatic-programmer.7a2237ae.jpeg",L=a.p+"img/rich_dad_poor_dad.1ce34829.jpeg",z=a.p+"img/1984.ddfae98f.webp",G=a.p+"img/the_alchemist.b9723681.jpeg",N=a.p+"img/atomic_habits.f8d9d58c.jpeg",R=a.p+"img/harry_potter_3.ba77a0ef.jpeg",B=a.p+"img/harry_potter_2.f0bddd49.jpeg",E=a.p+"img/harry_potter_1.a81388dd.jpeg",F=a.p+"img/on_the_shortness_of_life.2ae553e5.jpg",J=a.p+"img/the_next_person_you_meet_in_heaven.e8e63507.jpeg",U=a.p+"img/forty_rules_of_love.bb3f3b69.jpeg",Y=a.p+"img/tuesdays_with_morrie.9a986931.jpeg",q=a.p+"img/the_five_people_you_meet_in_heaven.e56a9082.jpeg",V=a.p+"img/the_alchemy_of_happiness.8a276b87.jpeg",K=a.p+"img/i_cant_make_this_up.480e54bf.jpeg",Q=a.p+"img/saint_anything.ff0719e1.jpg",X=a.p+"img/the_drunkards_walk.d08fbb31.jpeg",$=a.p+"img/the_glass_castle.79c31c43.jpg",ee=a.p+"img/a_long_way_gone.a5047269.jpeg";const te=(0,o.uE)('<div class="text-left ml-5 mb-5 mt-3"><h1>Library</h1><h6 class="lead">Books I&#39;ve enjoyed reading</h6></div><div class="d-flex flex-row flex-wrap books justify-content-center"><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+W+'" alt="Pragmatic Programmer"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+L+'" alt="Rich Dad, Poor Dad"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+z+'" alt="1984"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+G+'" alt="The Alchemist"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+N+'" alt="Atomic Habits"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+R+'" alt="Harry Potter 3"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+B+'" alt="Harry Potter 2"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+E+'" alt="Harry Potter 1"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+F+'" alt="On The Shortness of Life"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+J+'" alt="The Next Person You Meet In Heaven"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+U+'" alt="Forty Rules of Love"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Y+'" alt="Tuesdays With Morrie"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+q+'" alt="The Five People You Meet In Heaven"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+V+'" alt="The Alchemy of Happiness"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+K+'" alt="I Can&#39;t Make This Up"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Q+'" alt="Saint Anything"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+X+'" alt="The Drunkards Walk"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+$+'" alt="The Glass Castle"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+ee+'" alt="A Long Way Gone"></div></div>',2);function ae(e,t){return te}const ne={},oe=(0,g.Z)(ne,[["render",ae]]);var ie=oe;const re=(0,o._)("div",{class:"text-left ml-5 mb-5 mt-3"},[(0,o._)("h1",null,"Blog"),(0,o._)("h6",{class:"lead"},"Thoughts I've entertained")],-1),se={class:"d-flex flex-row flex-wrap books justify-content-left"};function le(e,t,a,n,i,r){const s=(0,o.up)("BlogCard");return(0,o.wg)(),(0,o.iD)(o.HY,null,[re,(0,o._)("div",se,[(0,o.Wm)(s,{title:"My First Hackathon! (TAMU Hack)",date:"October 15th, 2016",preview:"There were so many feelings rushing through me as I hopped on the bus to Texas A&M. I was not sure what to expect even though I had done my fair share of research on what hackathons were like and how to make the best of them. Most of the articles had started off with a piece of advice: “Don’t be nervous. Just try new things.”","link-id":"/#/blog/3"}),(0,o.Wm)(s,{title:"Working as a Web Developer",date:"March 26th, 2016",preview:"About a week ago, I had a chance to visit my dad at his new company, Gowani Pump Supply. I spent the whole day there, mainly just sitting around, as there was nothing for me to do. After I got home, I thought about his new business and realized that I could help him reach a wider audience by getting Gowani Pump Supply a presence on the glorious internet.","link-id":"/#/blog/2"}),(0,o.Wm)(s,{title:"if Python == None: Python = Learn",date:"March 14th, 2016",preview:"I have embarked on a journey of learning Python and HTML/CSS. Before I get into more details, I would like to take a moment and apologize if the title of my post was confusing. It was an attempt at mimicking the coding language of Python.","link-id":"/#/blog/1"})])],64)}var ce=a(577);const de={class:"col-12 col-lg-4 text-left"},he={class:"card"},ue={class:"card-body"},ge={class:"card-title"},me={class:"card-subtitle text-muted"},pe={class:"card-text"},fe=["href"];function ve(e,t,a,n,i,r){return(0,o.wg)(),(0,o.iD)("div",de,[(0,o._)("div",he,[(0,o._)("div",ue,[(0,o._)("h5",ge,(0,ce.zw)(a.title),1),(0,o._)("h6",me,(0,ce.zw)(a.date),1),(0,o._)("p",pe,(0,ce.zw)(a.preview),1),(0,o._)("a",{href:a.linkId,class:"card-link"},"Read More →",8,fe)])])])}var we={props:{title:String,preview:String,date:String,linkId:Number}};const be=(0,g.Z)(we,[["render",ve]]);var ye=be,_e={name:"BlogPage",components:{BlogCard:ye}};const ke=(0,g.Z)(_e,[["render",le]]);var Ie=ke;const xe=(0,o._)("div",{class:"text-left ml-5 mb-5 mt-3"},[(0,o._)("h1",null,"Poetry"),(0,o._)("h6",{class:"lead"},"Poetry I've expressed")],-1),je={class:"d-flex flex-row flex-wrap books justify-content-left"};function Pe(e,t,a,n,i,r){const s=(0,o.up)("PoetryCard");return(0,o.wg)(),(0,o.iD)(o.HY,null,[xe,(0,o._)("div",je,[(0,o.Wm)(s,{title:"Jab ek dost seh mila",lang:"English",preview:"This one is about the time I met a dear friend.","link-id":"/#/poetry/2"}),(0,o.Wm)(s,{title:"A Stranger I Met",lang:"Roman Urdu",preview:"This one is about a stranger I met.","link-id":"/#/poetry/1"})])],64)}const Ae={class:"col-12 col-lg-4 text-left"},Se={class:"card"},Te={class:"card-body"},De=["href"],Me={class:"card-title"},Ce={class:"card-subtitle text-muted"},He={class:"card-text"};function Oe(e,t,a,n,i,r){return(0,o.wg)(),(0,o.iD)("div",Ae,[(0,o._)("div",Se,[(0,o._)("div",Te,[(0,o._)("a",{href:a.linkId},[(0,o._)("h5",Me,(0,ce.zw)(a.title),1)],8,De),(0,o._)("p",Ce,"Written in "+(0,ce.zw)(a.lang),1),(0,o._)("p",He,(0,ce.zw)(a.preview),1)])])])}var Ze={props:{title:String,lang:String,preview:String,linkId:Number}};const We=(0,g.Z)(Ze,[["render",Oe]]);var Le=We,ze={name:"PoetryPage",components:{PoetryCard:Le}};const Ge=(0,g.Z)(ze,[["render",Pe]]);var Ne=Ge;const Re={class:"text-left ml-5 mb-5 mt-3"},Be=(0,o._)("h1",{class:"my-3"},"if Python == None: Python = Learn",-1),Ee=(0,o._)("p",null," I have embarked on a journey of learning Python and HTML/CSS. Before I get into more details, I would like to take a moment and apologize if the title of my post was confusing. It was an attempt at mimicking the coding language of Python. If you understood the title, CONGRATS YOU'RE A NERD! Let me start with a brief background on Python. Python is an open source programming language that was conceived in the late 1980s by Guido van Rossum.It was made to look good and also be easy to read. I am taking a beginner's course in Python on Coursera. It is taught by Dr. Chuck at the University of Michigan. I am in the last week of the beginner's course, and after that, I will take additional courses taught by Dr. Chuck to supplement this one. As someone who is interested in computer engineering, I believe that it is important to introduce myself to various programming languages. I have chosen to start with Python and will continue to explore other languages as well. ",-1),Fe=[Be,Ee];function Je(e,t){return(0,o.wg)(),(0,o.iD)("div",Re,Fe)}const Ue={},Ye=(0,g.Z)(Ue,[["render",Je]]);var qe=Ye;const Ve={class:"text-left ml-5 mb-5 mt-3"},Ke=(0,o._)("h1",{class:"my-3"},"I am a Web Developer!",-1),Qe=(0,o._)("p",null," About a week ago, I had a chance to visit my dad at his new company, Gowani Pump Supply. I spent the whole day there, mainly just sitting around, as there was nothing for me to do. After I got home, I thought about his new business and realized that I could help him reach a wider audience by getting Gowani Pump Supply a presence on the glorious internet. I shared this idea with him, and he agreed! However, while I am not an experienced web developer, I dived into it, hoping to learn more as time went on. Step one would have been to make a functional website before hosting it online. Although I was aware of this crucial step, I skipped it. I was too excited to own a domain name and hoped that having a running website domain would motivate me to work faster on building the website. Once I had purchased a domain and had a domain hosting site, I went on to create a temporary page that provided the viewer with basic information such as the name of the company and contact information. I ended it with “Website Under Construction” so that I could update it as I further developed my skills. ",-1),Xe=[Ke,Qe];function $e(e,t){return(0,o.wg)(),(0,o.iD)("div",Ve,Xe)}const et={},tt=(0,g.Z)(et,[["render",$e]]);var at=tt;const nt={class:"text-left ml-5 mb-5 mt-3"},ot=(0,o._)("h1",{class:"my-3"},"Texas A&M Hackathon",-1),it=(0,o._)("p",null," There were so many feelings rushing through me as I hopped on the bus to Texas A&M. I was not sure what to expect even though I had done my fair share of research on what hackathons were like and how to make the best of them. Most of the articles had started off with a piece of advice: “Don’t be nervous. Just try new things.” And this is exactly where I was stuck. As a noob programmer, it was not a big deal to find new things to try, but getting myself to stop being so nervous was the main issue. This escalated even more when I saw a guy walk onto the bus with a box that seemed to hold a medium-sized piece of tech equipment. It was clear to see that this would be used for a hack. A few minutes later, a group of guys sitting next to me pulled out their laptops. After seeing that their screens were filled with color-coded code, I felt the need to take a deep breath and close my eyes. I didn’t open them until I was sure that there was nothing else around me that would daunt me. I felt so unprepared after seeing all this. All I had on my side was another beginner programmer, Jenya, who I had contacted on Facebook before the event. We were hoping to successfully think of an interesting hack idea by the time we got to Texas A&M. ",-1),rt=(0,o._)("h2",null,"Sunshine and Rainbows",-1),st=(0,o._)("p",null," Once we arrived at the university and had completed registration, Jenya and I assembled a team. Although we ended up with all first-time hackathon participants on our team, we were able to make a final product that merely reflected our idea on a static webpage. In the end, it was definitely worth the learning experience and of course, the free goodies as well. ",-1),lt=(0,o._)("p",null,[(0,o._)("strong",null,"p.s. our team made it to the semi-finals for cup-stacking.")],-1),ct=(0,o._)("h3",null,"My Favorite Part",-1),dt=(0,o._)("p",null," Hackathons can be wild. My favorite part was definitely going to sleep at 4:00 a.m. on a row of chairs and waking up at 6:00 a.m. to find my phone filled with messages from my team asking if I was still alive. ",-1),ht=[ot,it,rt,st,lt,ct,dt];function ut(e,t){return(0,o.wg)(),(0,o.iD)("div",nt,ht)}const gt={},mt=(0,g.Z)(gt,[["render",ut]]);var pt=mt;const ft={class:"text-left px-3 poetry text-center"},vt=(0,o._)("h1",{class:"my-3"},"A Stranger I Met",-1),wt=(0,o._)("p",null,"as strangers we met",-1),bt=(0,o._)("p",null,"from there the conversations grew",-1),yt=(0,o._)("p",null,"the laughter, the friendship, the love...oh who knew",-1),_t=(0,o._)("p",null,"intimate secrets shared between just us two",-1),kt=(0,o._)("p",null,"but in the end a full circle we drew",-1),It=(0,o._)("p",null,"left as the strangers we met, us two",-1),xt=(0,o._)("p",null,"the laughter, the friendship, the love",-1),jt=(0,o._)("p",null,"now just some memories we knew",-1),Pt=[vt,wt,bt,yt,_t,kt,It,xt,jt];function At(e,t){return(0,o.wg)(),(0,o.iD)("div",ft,Pt)}const St={},Tt=(0,g.Z)(St,[["render",At]]);var Dt=Tt;const Mt={class:"px-3 poetry text-center"},Ct=(0,o._)("h1",{class:"my-3"},"Jab ek dost seh mila",-1),Ht=(0,o._)("p",null,"teri baaton ke aage mere din beperava ho ke qurbaan ho gae",-1),Ot=(0,o._)("p",null,"is dil ke qaidee sapane bhee pharaar ho gae",-1),Zt=(0,o._)("p",null,"mein khud se ajanabee ho ke in lambo mein kho gaya",-1),Wt=(0,o._)("p",null,"har dard, har fikr jo saath laaya tha voh bhee gaya",-1),Lt=(0,o._)("p",null," yah baate vaqt seh bhee aage hai in guftaghu mein hum ne naah jaahane kitane zamaane jihee liye ",-1),zt=(0,o._)("p",null," naah jaane ab kab milee, kamas kam teree maujoodagee mein doh pal toh jihee liye ",-1),Gt=[Ct,Ht,Ot,Zt,Wt,Lt,zt];function Nt(e,t){return(0,o.wg)(),(0,o.iD)("div",Mt,Gt)}const Rt={},Bt=(0,g.Z)(Rt,[["render",Nt]]);var Et=Bt;const Ft={"/":w,"/blog":Ie,"/poetry":Ne,"/library":ie,"/blog/1":qe,"/blog/2":at,"/blog/3":pt,"/poetry/1":Dt,"/poetry/2":Et};var Jt={data(){return{currentPath:window.location.hash}},computed:{currentView(){return Ft[this.currentPath.slice(1)||"/"]||S},data(){return{id:1}}},mounted(){window.addEventListener("hashchange",(()=>{this.currentPath=window.location.hash}))},components:{NavBar:Z}};const Ut=(0,g.Z)(Jt,[["render",i]]);var Yt=Ut;(0,n.ri)(Yt).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,i){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],i=e[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,r=n[0],s=n[1],l=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var d=l(a)}for(t&&t(n);c<r.length;c++)i=r[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},n=self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(125)}));n=a.O(n)})();
//# sourceMappingURL=app.785bbdec.js.map