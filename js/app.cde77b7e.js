(function(){"use strict";var e={970:function(e,t,a){var o=a(963),n=a(252);function i(e,t,a,o,i,r){const s=(0,n.up)("NavBar"),l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s),(0,n.Wm)(l)],64)}const r=e=>((0,n.dD)("data-v-3be861c0"),e=e(),(0,n.Cn)(),e),s={class:"navbar navbar-expand-lg"},l=(0,n.Uk)("A.G."),c=r((()=>(0,n._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"line"}),(0,n._)("span",{class:"line"}),(0,n._)("span",{class:"line"})],-1))),d={class:"collapse navbar-collapse",id:"navbarSupportedContent"},h={class:"navbar-nav ml-auto"},g={class:"nav-item"},m=(0,n.Uk)("blog"),u={class:"nav-item"},p=(0,n.Uk)("poetry"),f={class:"nav-item"},v=(0,n.Uk)("library");function b(e,t,a,o,i,r){const b=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",s,[(0,n.Wm)(b,{class:"navbar-brand",to:"/"},{default:(0,n.w5)((()=>[l])),_:1}),c,(0,n._)("div",d,[(0,n._)("ul",h,[(0,n._)("li",g,[(0,n.Wm)(b,{class:"nav-link",to:"/blog"},{default:(0,n.w5)((()=>[m])),_:1})]),(0,n._)("li",u,[(0,n.Wm)(b,{class:"nav-link",to:"/poetry"},{default:(0,n.w5)((()=>[p])),_:1})]),(0,n._)("li",f,[(0,n.Wm)(b,{class:"nav-link",to:"/library"},{default:(0,n.w5)((()=>[v])),_:1})])])])])}var w={name:"NavBar"},y=a(744);const _=(0,y.Z)(w,[["render",b],["__scopeId","data-v-3be861c0"]]);var k=_,x={components:{NavBar:k}};const I=(0,y.Z)(x,[["render",i]]);var j=I,P=a(119),D=a.p+"img/dory.f1fb97c0.png";const A={class:"vertical-center text-left px-5"},C=(0,n._)("img",{src:D,alt:"Dory from Finding Dory",class:"not-found pb-3"},null,-1),H=(0,n._)("h1",null,"ERROR 404",-1),T=(0,n._)("p",{class:"lead"},"Not all those wander are lost...but you totally are.",-1),O=[C,H,T];function M(e,t){return(0,n.wg)(),(0,n.iD)("div",A,O)}const S={},U=(0,y.Z)(S,[["render",M]]);var W=U;function z(e,t,a,o,i,r){const s=(0,n.up)("SplashIntro");return(0,n.wg)(),(0,n.j4)(s)}var R=a.p+"img/profile-min.20d7e897.png";const B={class:"vertical-center text-left"},L=(0,n.uE)('<img src="'+R+'" alt="Ata Gowani Profile" class="profile rounded-circle" data-v-15b78e3f><h1 data-v-15b78e3f> Hi, my name is Ata. I am <span class="personal-description" data-v-15b78e3f>an engineer</span>. </h1><h6 class="lead" data-v-15b78e3f> I&#39;m currently working @ HubSpot under product security. </h6><div class="socials" data-v-15b78e3f><a href="https://github.com/AtaGowani" data-v-15b78e3f><i class="bi bi-github" data-v-15b78e3f></i></a><a href="https://www.linkedin.com/in/atagowani/" data-v-15b78e3f><i class="bi bi-linkedin" data-v-15b78e3f></i></a><a href="https://twitter.com/AtaGowani" data-v-15b78e3f><i class="bi bi-twitter" data-v-15b78e3f></i></a><a href="https://www.youtube.com/channel/UCOAwZEh0hSnFd9cJzCPJV1g" data-v-15b78e3f><i class="bi bi-youtube" data-v-15b78e3f></i></a><a href="mailto:me@atagowani.com" data-v-15b78e3f><i class="bi bi-envelope-fill" data-v-15b78e3f></i></a></div>',4),Z=[L];function N(e,t,a,o,i,r){return(0,n.wg)(),(0,n.iD)("div",B,Z)}var G={name:"SplashIntro",props:{msg:String},methods:{rollingDescriptions:function(){let e=["an engineer","a poet","a musician","a tinkerer","an investor","a cat dad"],t=document.getElementsByClassName("personal-description")[0],a=e.findIndex((e=>e==t.innerHTML)),o=(a+1)%e.length;t.innerHTML=e[o]}},mounted:function(){setInterval(this.rollingDescriptions,2500)},unmounted:function(){for(let e=0;e<1e3;e++)window.clearInterval(e)}};const Y=(0,y.Z)(G,[["render",N],["__scopeId","data-v-15b78e3f"]]);var E=Y,F={name:"App",components:{SplashIntro:E}};const J=(0,y.Z)(F,[["render",z]]);var q=J;const K=(0,n._)("div",{class:"text-left ml-5 mb-5 mt-3"},[(0,n._)("h1",null,"Blog"),(0,n._)("h6",{class:"lead"},"Thoughts I've entertained")],-1),$={class:"d-flex flex-row flex-wrap books justify-content-left"};function V(e,t,a,o,i,r){const s=(0,n.up)("BlogCard");return(0,n.wg)(),(0,n.iD)(n.HY,null,[K,(0,n._)("div",$,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.blogs,((e,t)=>((0,n.wg)(),(0,n.j4)(s,{blog:e,id:t,key:t},null,8,["blog","id"])))),128))])],64)}var Q=a(577);const X={class:"col-12 col-lg-4 text-left"},ee={class:"card"},te={class:"card-body"},ae={class:"card-title"},oe={class:"card-subtitle text-muted"},ne={class:"card-text"},ie=(0,n.Uk)("Read More →");function re(e,t,a,o,i,r){const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",X,[(0,n._)("div",ee,[(0,n._)("div",te,[(0,n._)("h5",ae,(0,Q.zw)(a.blog.title),1),(0,n._)("h6",oe,(0,Q.zw)(a.blog.date.toDateString()),1),(0,n._)("p",ne,(0,Q.zw)(a.blog.body.join(" ")),1),(0,n.Wm)(s,{to:r.getURL(),class:"card-link"},{default:(0,n.w5)((()=>[ie])),_:1},8,["to"])])])])}var se={name:"BlogContent",props:{blog:Object,id:Number},methods:{getURL:function(){return"/blog/"+this.id}}};const le=(0,y.Z)(se,[["render",re]]);var ce=le,de=[{title:"if Python == None: Python = Learn",date:new Date("March 14, 2016"),body:["I have embarked on a journey of learning Python and HTML/CSS. Before I get into more details, I would like to take a moment and apologize if the title of my post was confusing. It was an attempt at mimicking the coding language of Python. If you understood the title, CONGRATS YOU'RE A NERD! Let me start with a brief background on Python. Python is an open source progrmming language that was conceived in the late 1980s by Guido van Rossum.It was made to look good and also be easy to read. I am taking a beginner's course in Python on Coursera. It is taught by Dr. Chuck at the University of Michigan. I am in the last week of the beginner's course, and after that, I will take additional courses taught by Dr. Chuck to supplement this one. As someone who is interested in computer engineering, I believe that it is important to introduce myself to various programming languages. I have chosen to start with Python and will continue to explore other languages as well."]},{title:"Working as a Web Developer",date:new Date("March 26, 2016"),body:["About a week ago, I had a chance to visit my dad at his new company Gowani Pump Supply. I spent the whole day there, mainly just sitting    around, as there was nothing for me to do. After I got home, I thought about his new business and realized that I could help him reach a wide audience by getting Gowani Pump Supply a presence on the glorious internet. I shared this idea with him, and he agreed! However, while I am not an experienced web developer, I dived into it, hoping to learn more as time went on. Step one would have been to make a functional website before hosting it online. Although I was aware of this crucial step, I skipped it. I was too excited to own a domain name and hoped that having a running website domain would motivate me to work faster on building the website. Once I had purchased a domain and had a domain hosting site, I went on to create a temporary page that provided the viewer with basic information such as the name of the company and contact information. I ended it with 'Website Under Construction' so that I could update it as I further developed my skills."]},{title:"My First Hackathon! (TAMU Hack)",date:new Date("October 15, 2016"),body:["There were so many feelings rushing through me as I hopped on the bus to Texas A&M. I was not sure what to expect even though I had done my fair share of research on what hackathons were like and how to make the best of them. Most of the articles had started off with a piece of advice: “Don't be nervous. Just try new things.” And this is exactly where I was stuck. As a noob programmer, it was not a big deal to find new things to try, but getting myself to stop being so nervous was the main issue. This escalated even more when I saw a guy walk onto the bus with a box that seemed to hold a medium-sized piece of tech equipment. It was clear to see that this would be used for a hack. A few minutes later, a group of guys sitting next to me pulled out their laptops. After seeing that their screens were filled with color-coded code, I felt the need to take a deep breath and close my eyes. I didn't open them until I was sure that there was nothing else around me that would daunt me. I felt so unprepared after seeing all this. All I had on my side was another beginner programmer, Jenya, who I had contacted on Facebook before the event. We were hoping to successfully think of an interesting hack idea by the time we got to Texas A&M.","Once we arrived at the university and had completed registration, Jenya and I assembled a team. Although we ended up with all first-time hackathon participants on our team, we were able to make a final product that merely reflected our idea on a static webpage. In the end, it was definitely worth the learning experience and of course, the free goodies as well.","p.s. our team made it to the semi-finals for cup-stacking.","Hackathons can be wild. My favorite part was definitely going to sleep at 4:00 a.m. on a row of chairs and waking up at 6:00 a.m. to find my phone filled with messages from my team asking if I was still alive."]}],he={name:"BlogPage",data(){return{blogs:de.slice().reverse()}},components:{BlogCard:ce}};const ge=(0,y.Z)(he,[["render",V]]);var me=ge;const ue=(0,n._)("div",{class:"text-left ml-5 mb-5 mt-3"},[(0,n._)("h1",null,"Poetry"),(0,n._)("h6",{class:"lead"},"Poetry I've expressed")],-1),pe={class:"d-flex flex-row flex-wrap books justify-content-left"};function fe(e,t,a,o,i,r){const s=(0,n.up)("PoetryCard");return(0,n.wg)(),(0,n.iD)(n.HY,null,[ue,(0,n._)("div",pe,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.poetry,((e,t)=>((0,n.wg)(),(0,n.j4)(s,{poetry:e,id:t,key:t},null,8,["poetry","id"])))),128))])],64)}const ve={class:"col-12 col-lg-4 text-left"},be={class:"card"},we={class:"card-body"},ye={class:"card-title"},_e={class:"card-subtitle text-muted"},ke={class:"card-text"};function xe(e,t,a,o,i,r){const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",ve,[(0,n._)("div",be,[(0,n._)("div",we,[(0,n.Wm)(s,{to:r.getURL()},{default:(0,n.w5)((()=>[(0,n._)("h5",ye,(0,Q.zw)(a.poetry.title),1)])),_:1},8,["to"]),(0,n._)("p",_e,"Written in "+(0,Q.zw)(a.poetry.language),1),(0,n._)("p",ke,(0,Q.zw)(a.poetry.description),1)])])])}var Ie={props:{poetry:Object,id:Number},methods:{getURL:function(){return"/poetry/"+this.id}}};const je=(0,y.Z)(Ie,[["render",xe]]);var Pe=je,De=[{title:"A Stranger I Met",description:"This one is about a stranger I met.",language:"English",body:["as strangers we met","from there the conversations grew","the laughter, the friendship, the love...oh who knew","intimate secrets shared between just us two","but in the end a full circle we drew","left as the strangers we met, us two","the laughter, the friendship, the love","now just some memories we knew"]},{title:"Jab ek dost seh mila",description:"This one is about the time I met a dear friend.",language:"Roman Urdu",body:["teri baaton ke aage mere din beperava ho ke qurbaan ho gae","is dil ke qaidee sapane bhee pharaar ho gae","mein khud se ajanabee ho ke in lambo mein kho gaya","har dard, har fikr jo saath laaya tha voh bhee gaya","yah baate vaqt seh bhee aage hai in guftaghu mein hum ne naah jaahane kitane zamaane jihee liye","naah jaane ab kab milee, kamas kam teree maujoodagee mein doh pal toh jihee liye"]}],Ae={name:"PoetryPage",data(){return{poetry:De.slice().reverse()}},components:{PoetryCard:Pe}};const Ce=(0,y.Z)(Ae,[["render",fe]]);var He=Ce,Te=a.p+"img/pragmatic-programmer.7a2237ae.jpeg",Oe=a.p+"img/dot_con.fbd78583.webp",Me=a.p+"img/rich_dad_poor_dad.1ce34829.jpeg",Se=a.p+"img/1984.ddfae98f.webp",Ue=a.p+"img/the_alchemist.b9723681.jpeg",We=a.p+"img/atomic_habits.f8d9d58c.jpeg",ze=a.p+"img/harry_potter_3.ba77a0ef.jpeg",Re=a.p+"img/harry_potter_2.f0bddd49.jpeg",Be=a.p+"img/harry_potter_1.a81388dd.jpeg",Le=a.p+"img/on_the_shortness_of_life.2ae553e5.jpg",Ze=a.p+"img/the_next_person_you_meet_in_heaven.e8e63507.jpeg",Ne=a.p+"img/forty_rules_of_love.bb3f3b69.jpeg",Ge=a.p+"img/tuesdays_with_morrie.9a986931.jpeg",Ye=a.p+"img/the_five_people_you_meet_in_heaven.e56a9082.jpeg",Ee=a.p+"img/the_alchemy_of_happiness.8a276b87.jpeg",Fe=a.p+"img/i_cant_make_this_up.480e54bf.jpeg",Je=a.p+"img/saint_anything.ff0719e1.jpg",qe=a.p+"img/the_drunkards_walk.d08fbb31.jpeg",Ke=a.p+"img/the_glass_castle.79c31c43.jpg",$e=a.p+"img/a_long_way_gone.a5047269.jpeg";const Ve=(0,n.uE)('<div class="text-left ml-5 mb-5 mt-3"><h1>Library</h1><h6 class="lead">Books I&#39;ve enjoyed reading</h6></div><div class="d-flex flex-row flex-wrap books justify-content-center"><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Te+'" alt="Pragmatic Programmer"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Oe+'" alt="Pragmatic Programmer"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Me+'" alt="Rich Dad, Poor Dad"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Se+'" alt="1984"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Ue+'" alt="The Alchemist"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+We+'" alt="Atomic Habits"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+ze+'" alt="Harry Potter 3"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Re+'" alt="Harry Potter 2"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Be+'" alt="Harry Potter 1"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Le+'" alt="On The Shortness of Life"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Ze+'" alt="The Next Person You Meet In Heaven"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Ne+'" alt="Forty Rules of Love"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Ge+'" alt="Tuesdays With Morrie"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Ye+'" alt="The Five People You Meet In Heaven"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Ee+'" alt="The Alchemy of Happiness"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Fe+'" alt="I Can&#39;t Make This Up"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Je+'" alt="Saint Anything"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+qe+'" alt="The Drunkards Walk"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+Ke+'" alt="The Glass Castle"></div><div class="col-12 col-sm-4 col-lg-2 text-center"><img src="'+$e+'" alt="A Long Way Gone"></div></div>',2);function Qe(e,t){return Ve}const Xe={},et=(0,y.Z)(Xe,[["render",Qe]]);var tt=et;const at={class:"text-left ml-5 mb-5 mt-3"},ot={class:"my-3"};function nt(e,t,a,o,i,r){return(0,n.wg)(),(0,n.iD)("div",at,[(0,n._)("h1",ot,(0,Q.zw)(i.blogs[e.$route.params.id].title),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.blogs[e.$route.params.id].body,((e,t)=>((0,n.wg)(),(0,n.iD)("p",{key:t},(0,Q.zw)(e),1)))),128))])}var it={name:"BlogContentPage",data(){return{blogs:de.slice().reverse()}}};const rt=(0,y.Z)(it,[["render",nt]]);var st=rt;const lt={class:"text-left px-3 poetry text-center"},ct={class:"my-3"};function dt(e,t,a,o,i,r){return(0,n.wg)(),(0,n.iD)("div",lt,[(0,n._)("h1",ct,(0,Q.zw)(i.poetry[e.$route.params.id].title),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.poetry[e.$route.params.id].body,((e,t)=>((0,n.wg)(),(0,n.iD)("p",{key:t},(0,Q.zw)(e),1)))),128))])}var ht={name:"PoetryContentPage",data(){return{poetry:De.slice().reverse()}}};const gt=(0,y.Z)(ht,[["render",dt]]);var mt=gt;const ut=[{path:"/",name:"Home",component:q},{path:"/blog",name:"Blog",component:me},{path:"/blog/:id",name:"BlogContent",component:st},{path:"/poetry",name:"Poetry",component:He},{path:"/poetry/:id",name:"PoetryContent",component:mt},{path:"/library",name:"Library",component:tt},{path:"/:pathMatch(.*)*",component:W}],pt=(0,P.p7)({history:(0,P.r5)(),routes:ut});var ft=pt;(0,o.ri)(j).use(ft).mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,i){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],i=e[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,n,i]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,r=o[0],s=o[1],l=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var d=l(a)}for(t&&t(o);c<r.length;c++)i=r[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},o=self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(970)}));o=a.O(o)})();
//# sourceMappingURL=app.cde77b7e.js.map