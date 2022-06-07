(function(){var t={711:function(t,e,s){"use strict";s(6992),s(8674),s(9601),s(7727);var i=s(144),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("loading",{attrs:{active:t.load},on:{"update:active":function(e){t.load=e}}},[i("div",{staticClass:"loadingio-spinner-ellipsis-c11ldztfh8d"},[i("div",{staticClass:"ldio-i09oj1tsllp"},[i("div"),i("div"),i("div"),i("div"),i("div")])])]),i("NavBar2",{on:{control:t.musicControlHandler}}),i("audio",{ref:"audio",attrs:{src:s(1326),id:"audio",hidden:"",loop:"",preload:"auto"}}),i("router-view")],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navBar2"},[s("div",{staticClass:"logo",on:{click:function(e){t.selected=null}}},[s("router-link",{attrs:{to:"/"}},[s("p",[t._v("Push Yourself")]),s("p",[t._v("Fitness")])])],1),s("div",{staticClass:"flip-icon",class:{active:t.isActive}},[s("div",{staticClass:"flip-icon-font"},[s("font-awesome-icon",{staticClass:"fa-bars",attrs:{icon:"fa-solid fa-bars"},on:{click:function(e){t.isActive=!t.isActive}}})],1),s("div",{staticClass:"flip-icon-back"},[s("font-awesome-icon",{staticClass:"fa-xmark",attrs:{icon:"fa-solid fa-xmark"},on:{click:function(e){t.isActive=!t.isActive}}})],1)]),s("nav",{class:{active:t.isActive}},[s("ul",[t._l(t.navList,(function(e,i){return s("li",{key:i,on:{click:function(e){return t.selectedHandler(i)}}},[s("router-link",{class:{highlight:e.title===t.page},attrs:{to:e.link}},[s("font-awesome-icon",{attrs:{icon:e.icon}}),t._v(" "+t._s(e.title)+" ")],1)],1)})),s("li",{staticClass:"vol",class:{play:!t.play},on:{click:t.musicControl}},[s("div",{staticClass:"sound-btn"}),s("p",[t._v(" sound "),t.play?s("span",[t._v("off")]):s("span",[t._v("on")])])])],2)]),s("div",{staticClass:"shop-car",on:{click:function(e){return t.selectedHandler(0)}}},[s("router-link",{attrs:{to:"/shopping-cart"}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-shopping-cart"}}),s("span",[t._v(t._s(t.$store.state.shoppingCart.length))])],1)],1)])},a=[],c={name:"NavBar2",data:function(){return{selected:null,play:!0,itemNum:0,highligh:!1,page:"",aaa:"",isActive:!1,navList:[{title:"HOME",link:"/",icon:"fa-solid fa-house"},{title:"SHOP",link:"/shop",icon:"fa-solid fa-store"},{title:"ABOUT",link:"/about",icon:"fa-solid fa-hand-back-fist"},{title:"COACHES",link:"/coaches",icon:"fa-solid fa-child-reaching"}]}},methods:{musicControl:function(){this.play=!this.play,this.$emit("control",this.play)},selectedHandler:function(t){this.selected=t,this.isActive=!1}},watch:{$route:function(){this.page=this.$route.meta.page.toUpperCase()}},mounted:function(){},updated:function(){this.page=this.$route.meta.page.toUpperCase()}},l=c,u=s(1001),p=(0,u.Z)(l,r,a,!1,null,"a127a35c",null),d=p.exports,m={name:"App",data:function(){return{active:!1,loading:!0,isLoading:!0}},components:{NavBar2:d},created:function(){var t=this;window.addEventListener("load",(function(){t.$store.dispatch("READ_SHOPPING_CART"),t.$store.dispatch("READ_LIST")}))},computed:{load:function(){return this.$store.state.loading}},watch:{load:function(){console.log("loading")},$route:function(){this.$store.commit("LOADING",!0)}},mounted:function(){audio.volume=.1},updated:function(){this.$store.dispatch("READ_SHOPPING_CART"),this.$store.dispatch("READ_LIST")},methods:{musicControlHandler:function(t){t?audio.pause():audio.play()},play:function(){audio.play()}}},f=m,h=(0,u.Z)(f,o,n,!1,null,null,null),v=h.exports,_=s(8345),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("HomeImage2")],1)},C=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"homeImage2"},[i("div",{staticClass:"video-background"},[t._m(0),t.$store.state.loading?i("img",{attrs:{src:"https://via.placeholder.com/150/9a9998/9a9998",alt:""}}):i("video",{ref:"imgRight",attrs:{playsinline:"",src:s(5065),muted:"",loop:"",autoplay:""},domProps:{muted:!0}})])])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slogan"},[s("p",[t._v("Sweat is the")]),s("p",[t._v("lubricant of success.")])])}],y={name:"HomeImage2",data:function(){return{loading:!0}},mounted:function(){var t=this,e=document.createElement("video");e.src=s(5065),e.onloadstart=function(){console.log(221),t.$store.commit("LOADING",!1)}}},P=y,$=(0,u.Z)(P,b,E,!1,null,"eae831ac",null),T=$.exports,w={name:"Home",components:{NavBar2:d,HomeImage2:T}},I=w,k=(0,u.Z)(I,g,C,!1,null,null,null),O=k.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("div",{staticClass:"banner"},[i("div",{staticClass:"text",class:{action:t.action}},[i("p",[t._v("不與他人比較")]),i("p",[t._v("揮灑汗水")]),i("p",[t._v("目標只有一個")]),i("h1",[t._v('"超越自我" 健身中心')])])]),t._m(0),i("div",{staticClass:"about-information"},[i("div",{staticClass:"row-1"},[i("div",{ref:"img1",staticClass:"row-1-img"},[i("img",{attrs:{src:s(1800),alt:""}})]),i("div",{staticClass:"row-1-text row-text"},[i("p",[t._v("會員總數已達到")]),i("p",[t._v(t._s(t.studentNumber)+"位")])])]),i("div",{staticClass:"row-2"},[i("div",{ref:"img2",staticClass:"row-2-img"},[i("img",{attrs:{src:s(1800),alt:""}})]),i("div",{staticClass:"row-2-text row-text"},[i("p",[t._v("至今我們已協助消滅掉")]),i("p",[t._v(t._s(t.bodyNumber)+"% 體脂肪")])]),t._m(1)]),t._m(2)]),i("Footer")],1)},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about-us"},[i("div",{staticClass:"about-img"},[i("img",{attrs:{src:s(1710),alt:""}}),i("img",{attrs:{src:s(5158),alt:""}})]),i("div",{staticClass:"about-txt"},[i("h1",[t._v("關於我們")]),i("h1",[t._v("Push Yourself")]),i("p",[t._v(" 我們是一群喜愛健身，對健康生活充滿熱情的同好。我們樂於自己烹調平日所需的餐食，可是偶爾也想忙裡偷閒。 所以，我們開始想像，是否可以融合便利商店的優點，提供更精緻、多元且層次更豐富的餐食給消費者， 於是 Push Yourself 就誕生了。 ")]),i("p",[t._v(" 當您在忙碌的工作結束後，用僅剩不多的個人時間，以健身追求另一個自我實現的同時，我們不希望您為了同等重要的飲食而 耗費大量心力，這個時候，您只需要從冰箱拿出一份 Push Yourself 的餐食，多元的口味及完善的營養配比，絕對能滿足您的需求。 ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row-2-img"},[i("img",{attrs:{src:s(1800),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row-3"},[i("div",{staticClass:"row-3-text row-text"},[i("p",[t._v("我們本身熱愛運動，希望也能把這份喜愛的心情帶給你，將運動融入自己生活的一部分之中!")])]),i("div",{staticClass:"row-3-img"},[i("img",{attrs:{src:s(1800),alt:""}})])])}],S=(s(6977),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"footer-text"},[s("p",[t._v("Copyright © 2022 Push yourself Fitness All Rights Reserved.|")]),s("p",[t._v("僅個人學習，無任何商業用途")])])])}],M={name:"Footer"},L=M,H=(0,u.Z)(L,S,A,!1,null,"c76d6fde",null),j=H.exports,D=s(2e3),Z={name:"About",components:{Footer:j},data:function(){return{action:!1,studentTweenedNumber:0,bodyTweenedNumber:0}},created:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.pageYOffset+this.$refs.img1.clientHeight>=this.$refs.img1.offsetTop&&D.p8.to(this.$data,{duration:1,studentTweenedNumber:850}),window.pageYOffset+this.$refs.img2.clientHeight>=this.$refs.img2.offsetTop&&D.p8.to(this.$data,{duration:1,bodyTweenedNumber:2032.5}),console.log("IMG:".concat(this.$refs.img2.offsetTop)),console.log("WINDOW:".concat(window.pageYOffset)),console.log("".concat(this.$refs.img2.clientHeight))}},computed:{studentNumber:function(){return this.studentTweenedNumber.toFixed(0)},bodyNumber:function(){return this.bodyTweenedNumber.toFixed(1)}},mounted:function(){var t=this;setTimeout((function(){t.$store.commit("LOADING",!1)}),1500),setTimeout((function(){t.action=!0}),1600)}},R=Z,G=(0,u.Z)(R,x,N,!1,null,"3b2e3418",null),U=G.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop"},[s("router-view"),s("Footer")],1)},Y=[],B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shopPage"},[s("div",{staticClass:"banner-group"},[s("div",{staticClass:"banner",class:{scroll:t.isScroll}},[s("ul",{staticClass:"banner-img-list"},t._l(t.total,(function(e,i){return s("li",{key:i,class:{animated:e-1===t.active||e-1===t.preActive},style:t.imgListA(e)})})),0),s("p",{staticClass:"banner-lg-content",class:{active:t.isShow}},[t._v("Sports in Your Life")]),s("p",{staticClass:"banner-sm-content",class:{active:!t.isShow}},[t._v("超越自我 挑戰自我")])])]),s("div",{staticClass:"course-list"},[s("button",{class:{selected:"all"===t.courseType},on:{click:function(e){return t.filterCourseHandler("all")}}},[t._v("所有課程")]),s("button",{class:{selected:"experience"===t.courseType},on:{click:function(e){return t.filterCourseHandler("experience")}}},[t._v(" 體驗課程 ")]),s("button",{class:{selected:"person"===t.courseType},on:{click:function(e){return t.filterCourseHandler("person")}}},[t._v(" 私人教練課程 ")]),s("button",{class:{selected:"team"===t.courseType},on:{click:function(e){return t.filterCourseHandler("team")}}},[t._v("團體課程")]),s("button",{class:{selected:"diet"===t.courseType},on:{click:function(e){return t.filterCourseHandler("diet")}}},[t._v("飲食管理課程")])]),s("div",{staticClass:"card-group"},t._l(t.filterCourse,(function(e,i){return s("div",{key:i,staticClass:"card"},[s("router-link",{attrs:{to:{name:"Product",params:{id:""+e.id}}}},[s("div",{staticClass:"card-img"},[s("img",{attrs:{src:e.img}})]),s("div",{staticClass:"card-text"},[s("div",{staticClass:"card-title"},[s("p",[t._v(t._s(e.name))])]),s("div",{staticClass:"card-content"},[s("p",[t._v(t._s(e.content)+".")])]),s("div",{staticClass:"card-price"},[s("div",{staticClass:"original-price"},[t._v("$"+t._s(e.originalPrice))]),s("div",{staticClass:"special-offer"},[t._v("$"+t._s(e.specialOffer))])])])])],1)})),0)])},V=[],z=(s(7327),s(1539),{name:"shopHeader",data:function(){return{course:this.$store.state.course,courseType:"all",isScroll:!1,total:4,animationDuration:10,active:0,preActive:0,isShow:!0,aaa:s(5988),imgList:[{backgroundImage:"url(".concat(s(5988),")"),animationDuration:"".concat(10,"s"),animationDelay:"$"},{backgroundImage:"url(".concat(s(1710),")"),objectFit:"cover"}]}},created:function(){window.addEventListener("scroll",this.handleScroll)},mounted:function(){var t=this;document.body.style.overflow="hidden",setTimeout((function(){t.$store.commit("LOADING",!1),document.body.style.overflow="visible"}),1500),setInterval((function(){t.preActive=t.active,t.active=(t.active+1+t.total)%t.total}),5e3)},methods:{handleScroll:function(){this.isScroll=window.scrollY>0,this.isShow=!(window.scrollY>0)},filterCourseHandler:function(t){this.courseType=t},imgListA:function(t){return{backgroundImage:"url(".concat(s(2266)("./shop-banner-"+t+".jpeg"),")"),animationDuration:"".concat(this.animationDuration,"s")}}},computed:{filterCourse:function(){return"all"===this.courseType?this.course:"experience"===this.courseType?this.course.filter((function(t){return"experience"===t.type})):"person"===this.courseType?this.course.filter((function(t){return"person"===t.type})):"team"===this.courseType?this.course.filter((function(t){return"team"===t.type})):"diet"===this.courseType?this.course.filter((function(t){return"diet"===t.type})):void 0}}}),J=z,K=(0,u.Z)(J,B,V,!1,null,"46936ed7",null),W=K.exports,q={name:"shopHeader",components:{ShopPage:W,Footer:j}},Q=q,X=(0,u.Z)(Q,F,Y,!1,null,"f61513ac",null),tt=X.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"teachers"},[s("div",{staticClass:"container"},[t._m(0),s("ul",{staticClass:"coaches"},t._l(t.coachesInformation,(function(e,i){return s("li",{key:i,style:t.coachPhoto(i+1)},[s("h1",[t._v(t._s(e.job))]),s("h1",[t._v(t._s(e.name))]),s("div",{staticClass:"content",style:t.bgColor(e.color)},t._l(e.skills,(function(e,i){return s("p",{key:i},[t._v(" "+t._s(e)+" ")])})),0)])})),0)]),s("Footer")],1)},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text"},[s("h1",[t._v("教練")]),s("h1",[t._v("營養師")]),s("h1",[t._v("團隊")])])}],it={components:{Footer:j},name:"Teachers",data:function(){return{big:!0,coachesInformation:[{job:"Coach",name:"Mike",color:"#1e1d1bd5",skills:["個人體適能規劃","重量訓練","體態評估調整","運動表現提升","手術後復健訓練","核心訓練"]},{job:"Coach",name:"Kelly",color:"#d4aa8dab",skills:["墊上核心訓練","徒手協調訓練","體態雕塑","健康減脂訓練"]},{job:"Coach",name:"Kevin",color:"#1e1d1bd5",skills:["減重與體態雕塑","體適能訓練","心肺耐力訓練","增肌減脂"]},{job:"Dietitian",name:"Tommy",color:"#ea6990a6",skills:["肥胖研究學會體重管理營養師","曾任體重管理中心營養師","曾任臺北馬偕營養師","健檢中心諮詢營養師"]},{job:"TA",name:"Angel",color:"#e0a0969d",skills:["運動按摩及放鬆","MCT肌筋膜按壓","伸展/滾筒放鬆","肌肉伸展放鬆"]}]}},mounted:function(){var t=this;setTimeout((function(){t.$store.commit("LOADING",!1)}),1500)},methods:{coachPhoto:function(t){return{backgroundImage:"url(".concat(s(4412)("./coach-"+t+".jpg"),")"),backgroundSize:"cover",backgroundPosition:"center top"}},bgColor:function(t){return{backgroundColor:t}}}},ot=it,nt=(0,u.Z)(ot,et,st,!1,null,"4bf93625",null),rt=nt.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product"},[s("div",{staticClass:"product-team"},[s("div",{staticClass:"product-group"},[t._m(0),s("div",{staticClass:"product-txt"},[t._m(1),t._m(2),t._m(3),t._m(4),s("div",{staticClass:"product-btn"},[s("router-link",{attrs:{to:"/shop",tag:"button"}},[t._v("回到商店")]),s("button",[t._v("加入購物車")])],1)])]),t._m(5)]),s("Footer")],1)},ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-img"},[s("img",{attrs:{src:"https://picsum.photos/300/200/?random=5"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-title"},[s("h1",[t._v("飲食調整")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-price"},[s("span",{staticClass:"special"},[t._v("$350")]),s("span",{staticClass:"basic"},[t._v("$650")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-content"},[s("p",[t._v(" 本課程適合所有人，一開始會先講解飲食的基礎知識，之後再針對學員不同的目標而建議不同的飲食方式(例如運動員的蛋白質攝取量就比一般大眾來得多)。操作飲食調整的途中會不斷比對先前跟現在的狀況，並持續追蹤以達到飲食控制的最大效益。 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-num"},[s("p",[t._v("課程數量:")]),s("select",{attrs:{name:"classNum"}},[s("option",{attrs:{value:"1",selected:""}},[t._v("1")]),s("option",{attrs:{value:"2"}},[t._v("2")]),s("option",{attrs:{value:"3"}},[t._v("3")]),s("option",{attrs:{value:"4"}},[t._v("4")]),s("option",{attrs:{value:"5"}},[t._v("5")]),s("option",{attrs:{value:"6"}},[t._v("6")]),s("option",{attrs:{value:"7"}},[t._v("7")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"precautions"},[s("h1",[t._v("注意事項")]),s("p",[t._v("1. 購課後我們將於 1~3 個工作天跟您聯繫，若有任何問題也歡迎撥打 02-3456-7890。")]),s("p",[t._v("2. 我們的教練都有經過嚴格篩選，並且教育不得強迫推銷課程。")]),s("p",[t._v("3. 上課時，記得自備水壺跟毛巾，並著裝適合運動的服裝、鞋子。")]),s("p",[t._v("4. 疫情期間入館內皆須量體溫，我們也會頻繁實施館內消毒清潔。")])])}],lt={components:{Footer:j}},ut=lt,pt=(0,u.Z)(ut,at,ct,!1,null,"12f1e8d1",null),dt=(pt.exports,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shopping-car"},[s("ul",{staticClass:"shop-step"},[t._m(0),s("li",{staticClass:"shop-step-list",class:{done:t.step2}},[s("div",{staticClass:"shop-step-num"},[t._v("2")]),s("p",[t._v("付款")])]),s("li",{staticClass:"shop-step-list",class:{done:t.step3}},[s("div",{staticClass:"shop-step-num"},[t._v("3")]),s("p",[t._v("完成")])])]),s("router-view"),s("Footer")],1)}),mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"shop-step-list done"},[s("div",{staticClass:"shop-step-num"},[t._v("1")]),s("p",[t._v("訂單")])])}],ft={name:"shoppingCar",components:{Footer:j},mounted:function(){this.step2=this.$route.meta.step2||!1,this.step3=this.$route.meta.step3||!1},updated:function(){this.step2=this.$route.meta.step2||!1,this.step3=this.$route.meta.step3||!1},data:function(){return{step2:!1,step3:!1}}},ht=ft,vt=(0,u.Z)(ht,dt,mt,!1,null,"37f8d88a",null),_t=vt.exports,gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"error"},[s("h1",[t._v("This is an Error page")])])}],bt={},Et=(0,u.Z)(bt,gt,Ct,!1,null,null,null),yt=(Et.exports,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shoppingCartInformation"},[s("div",{staticClass:"order-group"},[s("div",{staticClass:"order-list"},[s("h1",[t._v("購物車")]),s("router-link",{attrs:{to:"/shop"}},[t._v("繼續購物")])],1)]),s("div",{staticClass:"order-item-group"},t._l(t.shoppingCartList,(function(e,i){return s("div",{key:i,staticClass:"order-item"},[s("div",{staticClass:"item-img"},[s("img",{attrs:{src:e.img}})]),s("div",{staticClass:"description"},[s("div",{staticClass:"title"},[t._v(t._s(e.name))]),s("div",{staticClass:"num"},[s("button",{class:{disabled:e.num<=1},attrs:{disabled:e.num<=1},on:{click:function(s){return t.$store.dispatch("CLASS_CONTROL",[e,-1])}}},[t._v(" - ")]),s("input",{attrs:{type:"number",min:"1",disabled:"disabled"},domProps:{value:e.num}}),s("button",{class:{disabled:e.num>=10||"E01"===e.id},attrs:{disabled:e.num>=10||"E01"===e.id},on:{click:function(s){return t.$store.dispatch("CLASS_CONTROL",[e,1])}}},[t._v(" + ")])])]),s("div",{staticClass:"price"},[t._v("$"+t._s(e.totalPrice=e.price*e.num))]),s("div",{staticClass:"delete",on:{click:function(s){return t.deleteHandler(e)}}},[s("font-awesome-icon",{staticClass:"deleteIcon",attrs:{icon:"fa-solid fa-trash-can"}})],1)])})),0),s("div",{staticClass:"price-list"},[s("div",{staticClass:"coupon"},[s("p",[t._v("折扣碼:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],attrs:{type:"text",placeholder:"請輸入優惠代碼"},domProps:{value:t.couponCode},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.couponHandler(t.couponCode)},input:function(e){e.target.composing||(t.couponCode=e.target.value)}}})]),s("div",{staticClass:"subtotal"},[s("p",[t._v("小計:")]),s("p",[t._v("$"+t._s(t.subtotalPrice))])]),s("div",{staticClass:"discount"},[t.isDiscount?[s("span",[t._v("折扣:")]),s("div",{staticClass:"discount-group"},t._l(t.couponUse,(function(e,i){return s("div",{key:i,staticClass:"discount-item"},[t._v(" "+t._s(e.name)+" "),s("font-awesome-icon",{staticClass:"x-mark",attrs:{icon:"fa-solid fa-xmark"},on:{click:function(s){return t.cancelCoupon(e.code)}}})],1)})),0)]:t._e()],2),s("div",{staticClass:"total"},[s("span",[t._v("總計:")]),s("span",[t._v("$"+t._s(t.ccc))])])]),s("div",{staticClass:"buyer-information"},[s("h1",[t._v("填寫資料")]),s("div",{staticClass:"input-item"},[s("label",{attrs:{for:"recipient"}},[t._v("收件人姓名")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.customer.name,expression:"customer.name",modifiers:{trim:!0}}],attrs:{type:"text",name:"收件人姓名",id:"recipient",placeholder:"請輸入收件人姓名"},domProps:{value:t.customer.name},on:{input:function(e){e.target.composing||t.$set(t.customer,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.errors.nameError?s("span",[t._v(t._s(t.nameErrorMessage))]):t._e()]),s("div",{staticClass:"input-item"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.customer.Email,expression:"customer.Email",modifiers:{trim:!0}}],attrs:{type:"text",name:"Email",id:"email",placeholder:"請輸入Email"},domProps:{value:t.customer.Email},on:{input:function(e){e.target.composing||t.$set(t.customer,"Email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.errors.EmailError?s("span",[t._v(t._s(t.EmailErrorMessage))]):t._e()]),s("div",{staticClass:"input-item"},[s("label",{attrs:{for:"cellphone"}},[t._v("手機")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.customer.cellphone,expression:"customer.cellphone",modifiers:{trim:!0}}],attrs:{type:"text",name:"手機",id:"cellphone",placeholder:"請輸入手機號碼"},domProps:{value:t.customer.cellphone},on:{input:function(e){e.target.composing||t.$set(t.customer,"cellphone",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.errors.cellphoneError?s("span",[t._v(t._s(t.cellphoneErrorMessage))]):t._e()]),s("div",{staticClass:"input-item"},[s("label",{attrs:{for:"address"}},[t._v("地址")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.customer.address,expression:"customer.address",modifiers:{trim:!0}}],attrs:{type:"text",name:"收件地址人姓名",id:"address",placeholder:"請輸入收件地址"},domProps:{value:t.customer.address},on:{input:function(e){e.target.composing||t.$set(t.customer,"address",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.errors.addressError?s("span",[t._v(t._s(t.addressErrorMessage))]):t._e()]),s("div",{staticClass:"input-item"},[s("label",{attrs:{for:"pay-method"}},[t._v("付款方式")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.customer.payMethod,expression:"customer.payMethod"}],attrs:{name:"付款方式",id:"pay-method"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.customer,"payMethod",e.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:"disabled",selected:"selected",value:""}},[t._v("請選擇購買方式")]),s("option",{domProps:{value:t.ATM}},[t._v("ATM")]),s("option",{domProps:{value:t.Credit}},[t._v("信用卡")]),s("option",{domProps:{value:t.Cash}},[t._v("貨到付款")])]),t.errors.payMethodError?s("span",[t._v(t._s(t.payMethodErrorMessage))]):t._e()]),s("div",{staticClass:"input-item"},[s("label",{attrs:{for:"remark"}},[t._v("備註")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.customer.remark,expression:"customer.remark"}],attrs:{name:"remark",id:"",cols:"30",rows:"3"},domProps:{value:t.customer.remark},on:{input:function(e){e.target.composing||t.$set(t.customer,"remark",e.target.value)}}})])]),s("div",{staticClass:"checkout"},[s("router-link",{class:{disabled:!t.submitCheck},attrs:{to:"shopping-cart/checkout",tag:"button",disabled:t.disabled=!t.submitCheck},nativeOn:{click:function(e){return t.submitHandler(t.shoppingCart)}}},[t._v("結帳")])],1)])}),Pt=[],$t=(s(8309),s(4916),s(7601),s(4747),s(1249),{name:"shoppingCartInformation",mounted:function(){var t=this;this.subtotal,setTimeout((function(){t.$store.commit("LOADING",!1)}),1500)},data:function(){return{shoppingCart:null,listTotalPrice:0,subtotalPrice:0,discountNum:0,isDiscount:null,couponUse:[],couponCode:"",ATM:"ATM",Credit:"信用卡",Cash:"貨到付款",coupons:[{code:"VIP666",discount:.6,name:"6折優惠券",isUse:!1},{code:"VIP888",discount:.8,name:"8折優惠券",isUse:!1}],customer:{name:"",Email:"",cellphone:null,address:"",payMethod:"",remark:""},errors:{nameError:!1,EmailError:!1,cellphoneError:!1,addressError:!1,payMethodError:!1},nameErrorMessage:"",EmailErrorMessage:"",cellphoneErrorMessage:"",addressErrorMessage:"",payMethodErrorMessage:""}},watch:{shoppingCart:{handler:function(){this.subtotal,this.shoppingCart.length<=0&&console.log(0)},deep:!0},customer:{handler:function(){this.customer.name?(this.errors.nameError=!1,this.nameErrorMessage=""):(this.errors.nameError=!0,this.nameErrorMessage="收件人不得為空!"),this.customer.address?(this.errors.addressError=!1,this.addressErrorMessage=""):(this.errors.addressError=!0,this.addressErrorMessage="收件地址不得為空!"),this.customer.payMethod?(this.errors.payMethodError=!1,this.payMethodErrorMessage=""):(this.errors.payMethodError=!0,this.payMethodErrorMessage="請選擇付款方式!");var t=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;t.test(this.customer.Email)?(this.errors.EmailError=!1,this.EmailErrorMessage=""):(this.errors.EmailError=!0,this.EmailErrorMessage="Email格式錯誤!");var e=/^(09)[0-9]{8}$/;e.test(this.customer.cellphone)?(this.errors.cellphoneError=!1,this.cellphoneErrorMessage=""):(this.errors.cellphoneError=!0,this.cellphoneErrorMessage="手機格式錯誤!")},deep:!0}},methods:{submitHandler:function(t){this.$store.dispatch("UPDATE_SHOPPING_CART",[this.customer,t,this.listTotalPrice])},deleteHandler:function(t){this.$store.dispatch("REMOVE_SHOPPING_CART_ITEM",t)},couponHandler:function(t){for(var e=0;e<this.coupons.length;e++){if(this.coupons[e].isUse){window.alert("已使用優惠券");break}if(this.coupons[e].code===t){this.coupons[e].isUse=!0,this.isDiscount=this.coupons[e].name,this.discountNum=this.coupons[e].discount,this.couponUse.push({code:this.coupons[e].code,name:this.coupons[e].name}),this.listTotalPrice=this.subtotalPrice*this.coupons[e].discount;break}}this.couponCode=""},cancelCoupon:function(t){var e=this;this.coupons.forEach((function(s){s.code===t&&(s.isUse=!1,e.isDiscount=null)})),this.couponUse=this.couponUse.filter((function(e){return e.code!==t}))}},computed:{subtotal:function(){var t=this;return this.subtotalPrice=0,this.shoppingCart.map((function(e){return t.subtotalPrice+=e.totalPrice}))},ccc:function(){return this.isDiscount?this.listTotalPrice=this.subtotalPrice*this.discountNum:this.listTotalPrice=this.subtotalPrice},shoppingCartList:function(){return this.shoppingCart=this.$store.state.shoppingCart},submitCheck:function(){return!(!this.customer.name||this.nameErrorMessage||!this.customer.Email||this.EmailErrorMessage||!this.customer.address||this.addressErrorMessage||!this.customer.cellphone||this.cellphoneErrorMessage||!this.customer.payMethod||this.payMethodErrorMessage)}}}),Tt=$t,wt=(0,u.Z)(Tt,yt,Pt,!1,null,"3ba389b6",null),It=wt.exports,kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shoppingCartInformation"},[t._m(0),s("div",{staticClass:"order-item-group"},t._l(t.productInformation,(function(e,i){return s("div",{key:i,staticClass:"order-item"},[s("div",{staticClass:"item-img"},[s("img",{attrs:{src:e.img}})]),s("div",{staticClass:"description"},[s("div",{staticClass:"title"},[t._v(t._s(e.name))])]),s("div",{staticClass:"num"},[s("p",[t._v(t._s(e.num)+"堂")])]),s("div",{staticClass:"price"},[t._v("$"+t._s(e.totalPrice))])])})),0),s("div",{staticClass:"price-list"},[s("div",{staticClass:"total"},[s("span",[t._v("總計(已折扣):")]),s("span",[t._v("$"+t._s(t.listPrice))])])]),s("div",{staticClass:"buyer-information"},[s("h1",[t._v("訂購人資料")]),!t.customerInformation.name||t.customerInformation.name?s("ul",[s("li",[s("label",{attrs:{for:"recipient"}},[t._v("收件人姓名:")]),s("p",{attrs:{for:"recipient"}},[t._v(t._s(t.customerInformation.name))])]),s("li",[s("label",{attrs:{for:"email"}},[t._v("Email:")]),s("p",{attrs:{for:"recipient"}},[t._v(t._s(t.customerInformation.Email))])]),s("li",[s("label",{attrs:{for:"cellphone"}},[t._v("手機:")]),s("p",{attrs:{for:"recipient"}},[t._v(t._s(t.customerInformation.cellphone))])]),s("li",[s("label",{attrs:{for:"address"}},[t._v("地址:")]),s("p",{attrs:{for:"recipient"}},[t._v(t._s(t.customerInformation.address))])]),s("li",[s("label",{attrs:{for:"pay-method"}},[t._v("付款方式:")]),s("p",{attrs:{for:"recipient"}},[t._v(t._s(t.customerInformation.payMethod))])])]):t._e()]),s("div",{staticClass:"checkout"},[s("router-link",{attrs:{to:"/shopping-cart/complete"},nativeOn:{click:function(e){return t.complete.apply(null,arguments)}}},[t._v("付款")])],1)])},Ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-group"},[s("div",{staticClass:"order-list"},[s("h1",[t._v("付款資訊")])])])}],xt={name:"shoppingCartInformation",data:function(){return{shoppingListA:this.$store.state.shoppingList,totalPrice:0}},mounted:function(){var t=this;setTimeout((function(){t.$store.commit("LOADING",!1)}),1500)},methods:{complete:function(){this.$store.dispatch("COMPLETE_LIST")}},computed:{customerInformation:function(){return this.$store.state.shoppingList[0]?this.$store.state.shoppingList[0]:[]},productInformation:function(){return this.$store.state.shoppingList[1]},listPrice:function(){return this.$store.state.shoppingList[2]}}},Nt=xt,St=(0,u.Z)(Nt,kt,Ot,!1,null,"68eaed9c",null),At=St.exports,Mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Lt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shoppingCartInformation"},[s("div",{staticClass:"order-group"},[s("div",{staticClass:"order-list"},[s("h1",[t._v("結帳完成")])])]),s("div",{staticClass:"content"},[s("h1",[t._v("感謝您的購買!")]),s("p",[t._v("我們將於 1~3 個工作天內與您聯繫，若有任何問題也可撥打 02-3456-7890 聯繫我們。")])])])}],Ht={name:"shoppingCartInformation",mounted:function(){var t=this;setTimeout((function(){t.$store.commit("LOADING",!1)}),1500)}},jt=Ht,Dt=(0,u.Z)(jt,Mt,Lt,!1,null,"966ac79a",null),Zt=Dt.exports,Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product"},[s("div",{staticClass:"product-team"},[t._l(t.courseInformation,(function(e){return s("div",{key:e.id,staticClass:"product-group"},[s("div",{staticClass:"product-img"},[s("img",{attrs:{src:e.img}})]),s("div",{staticClass:"product-txt"},[s("div",{staticClass:"product-title"},[s("h1",[t._v(t._s(e.name))])]),s("div",{staticClass:"product-price"},[s("span",{staticClass:"special"},[t._v("$"+t._s(e.specialOffer*t.selectedNum))]),s("span",{staticClass:"basic"},[t._v("$"+t._s(e.originalPrice*t.selectedNum))])]),s("div",{staticClass:"product-content"},[s("p",[t._v(" "+t._s(e.content)+" ")])]),s("div",{staticClass:"product-num"},[s("p",[t._v("課程數量:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],attrs:{name:"classNum"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.num=e.target.multiple?s:s[0]},function(s){return t.onSelectedNum(s,e)}]}},[s("option",{attrs:{selected:"",value:"0",disabled:"disabled"}},[t._v("請選擇課程堂數")]),"E01"===e.id?t._l(1,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})):t._l(10,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),s("div",{staticClass:"product-btn"},[s("router-link",{attrs:{to:"/shop",tag:"button"}},[t._v("回到商店")]),s("button",{on:{click:function(s){return t.addShoppingCartHandler(e,t.num)}}},[t._v("加入購物車")])],1)])])})),t._m(0)],2)])},Gt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"precautions"},[s("h1",[t._v("注意事項")]),s("p",[t._v("1. 購課後我們將於 1~3 個工作天跟您聯繫，若有任何問題也歡迎撥打 02-3456-7890。")]),s("p",[t._v("2. 我們的教練都有經過嚴格篩選，並且教育不得強迫推銷課程。")]),s("p",[t._v("3. 上課時，記得自備水壺跟毛巾，並著裝適合運動的服裝、鞋子。")]),s("p",[t._v("4. 疫情期間入館內皆須量體溫，我們也會頻繁實施館內消毒清潔。")])])}],Ut={name:"Product",data:function(){return{course:this.$store.state.course,shopItem:[],selectedNum:1,num:0,name:"",totalPrice:0}},mounted:function(){var t=this;setTimeout((function(){t.$store.commit("LOADING",!1)}),1500)},computed:{courseInformation:function(){var t=this;return this.course.filter((function(e){return e.id===t.$route.params.id}))}},methods:{addShoppingCartHandler:function(t,e){this.$store.dispatch("ADD_ITEM_TO_SHOPPING_CART",{id:t.id,name:t.name,num:e,price:t.specialOffer,img:t.img,totalPrice:this.totalPrice})},onSelectedNum:function(t,e){this.selectedNum=parseInt(t.target.value),this.totalPrice=e.specialOffer*this.selectedNum}}},Ft=Ut,Yt=(0,u.Z)(Ft,Rt,Gt,!1,null,"730e34ca",null),Bt=Yt.exports;i.Z.use(_.Z);var Vt=[{path:"/",name:"Home",component:O,meta:{shop:!0,page:"home",loading:!0}},{path:"/about",name:"About",component:U,meta:{page:"about",loading:!0}},{path:"/coaches",name:"Coaches",component:rt,meta:{page:"coaches",loading:!0}},{path:"/shop",components:{default:tt},meta:{shop:!0},children:[{path:"/",name:"ShopPage",meta:{shop:!0,page:"shop"},components:{default:W}},{path:"product/:id",name:"Product",components:{default:Bt},meta:{shop:!0,page:"shop"}}]},{path:"/shopping-cart",components:{default:_t},meta:{shop:!0,page:"shop"},children:[{path:"/",name:"ShoppingCartInformation",components:{default:It},meta:{shop:!0,page:"shop"}},{path:"checkout",name:"CheckoutView",components:{default:At},meta:{step2:!1,step3:!1,shop:!0,page:"shop"},beforeEnter:function(t,e,s){t.meta.step2=!0,s()}},{path:"complete",name:"CompletePage",components:{default:Zt},meta:{step2:!1,step3:!1,shop:!0,page:"shop"},beforeEnter:function(t,e,s){t.meta.step2=!0,t.meta.step3=!0,s()}}]},{path:"*",redirect:O}],zt=new _.Z({mode:"history",base:"/fitness-web/dist/",routes:Vt,scrollBehavior:function(){return{x:0,y:0,behavior:"smooth"}}}),Jt=zt,Kt=s(3571),Wt=s(629);s(8862);function qt(t){return{load:function(){if(null===window.sessionStorage.getItem(t)){var e=[];return window.sessionStorage.setItem(t,JSON.stringify(e)),JSON.parse(window.sessionStorage.getItem(t)||"null")}return JSON.parse(window.sessionStorage.getItem(t)||"null")},save:function(e){window.sessionStorage.setItem(t,JSON.stringify(e))}}}i.Z.use(Wt.ZP);var Qt=new qt("shopping-item"),Xt=new qt("shopping-list"),te=new Wt.ZP.Store({state:{loading:!0,course:[{id:"E01",type:"experience",name:"體驗課程",originalPrice:1100,specialOffer:0,content:"從課前拉伸到課後肌肉放鬆，體驗1對1教練完整課程，此次體驗，完全免費。",time:"1.5小時",img:s(7626)},{id:"P01",type:"person",name:"1對1教練課",originalPrice:1100,specialOffer:950,content:"為 1 對 1的教學課程，從身體評估、目標了解到操作器械以達到鍛鍊效果。",time:"2小時",img:s(2345)},{id:"T01",type:"team",name:"團體教練課 5人",originalPrice:900,specialOffer:750,content:"動物三年戀愛方便危機疾病污染一面放下地理市政府，參數色彩，走到加盟表演意大利，學院供應商絶對呼吸零售影視我這，意大利增強玻璃新增高雄藍色，意味着招標看法資源位元這個部分全部執行環境才會，也要證券百度你沒有認識經過只要窗口一步成績點這裡會議工作，研究生依法。",time:"1.5小時",img:s(4630)},{id:"T02",type:"team",name:"團體教練課 10人",originalPrice:800,specialOffer:700,content:"此課程具有高強度低衝擊的運動特性，透過階梯踏板不同的變換使用可鍛鍊到全身，加上適當的音樂節奏、踏板高度的不同而有其不同的運動強度。除了訓練我們的心肺功能，同時也可以強化肌力。",time:"1.5小時",img:s(6320)},{id:"T03",type:"team",name:"戰鬥有氧 10人",originalPrice:800,specialOffer:700,content:"屬於高強度的有氧運動，結合各項武術動作如泰拳、空手道、跆拳道及太極拳等，充滿活力的燃燒熱量。",time:"1.5小時",img:s(2869)},{id:"D01",type:"diet",name:"飲食管理",originalPrice:3600,specialOffer:2200,content:"由專業的營養師量身打造屬於你的飲食菜單，藉由會員回傳每日三餐後，給予專業的建議。三分動，七分吃，讓我們的身體由內而外更加健康!",time:"1個月",img:s(1922)}],shoppingCart:[],shoppingList:[],step2:!1},mutations:{SET_SHOPPING_CART_ITEM:function(t,e){t.shoppingCart=e},SET_SHOPPING_LIST:function(t,e){console.log("SHOPPING_LIST:"+e),t.shoppingList=e},COMPLETE:function(t){t.shoppingCart=[],t.shoppingList=[]},PRODUCT_NUM_CONTROL:function(t,e){var s=(0,Kt.Z)(e,2),i=s[0],o=s[1];t.shoppingCart.forEach((function(t){t.name===i.name&&(t.num+=o)}))},LOADING:function(t,e){t.loading=e}},actions:{READ_SHOPPING_CART:function(t){var e=t.commit,s=Qt.load();return e("SET_SHOPPING_CART_ITEM",s),{shoppingItems:s}},ADD_ITEM_TO_SHOPPING_CART:function(t,e){var s=t.commit,i=e.id,o=e.name,n=e.num,r=e.price,a=e.totalPrice,c=e.img,l=Qt.load();return l.push({id:i,name:o,num:n,price:r,totalPrice:a,img:c}),Qt.save(l),s("SET_SHOPPING_CART_ITEM",l),{itemId:new Date,name:o,num:n,totalPrice:a}},READ_LIST:function(t){var e=t.state,s=t.commit,i=e.shoppingList;return s("SET_SHOPPING_LIST",i),{shoppingItems:i}},UPDATE_SHOPPING_CART:function(t,e){var s=t.commit;console.log("UPDATE_SHOPPING_CART:"+e),s("SET_SHOPPING_LIST",e)},REMOVE_SHOPPING_CART_ITEM:function(t,e){var s=t.commit,i=Qt.load(),o=i.filter((function(t){return t.id!==e.id}));Qt.save(o),s("SET_SHOPPING_CART_ITEM",o)},CLASS_CONTROL:function(t,e){var s=t.commit,i=(0,Kt.Z)(e,2),o=i[0],n=i[1],r=Qt.load();r.forEach((function(t){t.name===o.name&&(t.num+=n)})),Qt.save(r),s("PRODUCT_NUM_CONTROL",[o,n])},COMPLETE_LIST:function(t){var e=t.state,s=t.commit,i=Xt.load(),o=e.shoppingList;i.push(o),Xt.save(i),Qt.save([]),s("COMPLETE")}},modules:{}}),ee=s(8947),se=s(7398),ie=s.n(se),oe=s(1436),ne=s(7810);ee.vI.add(oe.sq$,oe.wp6,oe.FlN,oe.Dyc,oe.vJI,oe.DX7,oe.j1w,oe.Vui,oe.AQZ,oe.g82,oe.xiG),i.Z.component("font-awesome-icon",ne.GN),i.Z.component("loading",ie()),i.Z.use(ie(),{canCancel:!1,color:"#000000",loader:"dots",width:50,height:50,backgroundColor:"#ffffff",isFullPage:!0,opacity:.8}),i.Z.config.productionTip=!1,i.Z.directive("title",{inserted:function(){document.title="超越自我 健身中心"}}),new i.Z({router:Jt,store:te,render:function(t){return t(v)}}).$mount("#app")},4412:function(t,e,s){var i={"./coach-1.jpg":378,"./coach-2.jpg":9160,"./coach-3.jpg":6230,"./coach-4.jpg":62,"./coach-5.jpg":2698};function o(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=n,t.exports=o,o.id=4412},2266:function(t,e,s){var i={"./shop-banner-1.jpeg":6273,"./shop-banner-2.jpeg":4973,"./shop-banner-3.jpeg":7691,"./shop-banner-4.jpeg":9147};function o(t){var e=n(t);return s(e)}function n(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=n,t.exports=o,o.id=2266},5988:function(t,e,s){"use strict";t.exports=s.p+"img/about-1.162c2fed.jpg"},5158:function(t,e,s){"use strict";t.exports=s.p+"img/about-2.a440f718.jpg"},1800:function(t,e,s){"use strict";t.exports=s.p+"img/about-3.3989eb89.jpg"},1710:function(t,e,s){"use strict";t.exports=s.p+"img/about-4.ad49bbf0.jpg"},2345:function(t,e,s){"use strict";t.exports=s.p+"img/cardImg1.01a4b031.jpg"},4630:function(t,e,s){"use strict";t.exports=s.p+"img/cardImg2.9469f0e7.jpg"},6320:function(t,e,s){"use strict";t.exports=s.p+"img/cardImg3.7fb01743.jpg"},2869:function(t,e,s){"use strict";t.exports=s.p+"img/cardImg4.4d74ac4b.jpeg"},7626:function(t,e,s){"use strict";t.exports=s.p+"img/cardImg5.9d614c4c.jpg"},1922:function(t,e,s){"use strict";t.exports=s.p+"img/cardImg6.cd561330.jpg"},378:function(t,e,s){"use strict";t.exports=s.p+"img/coach-1.b49a6cc4.jpg"},9160:function(t,e,s){"use strict";t.exports=s.p+"img/coach-2.f3a08ab1.jpg"},6230:function(t,e,s){"use strict";t.exports=s.p+"img/coach-3.f3ac8eb6.jpg"},62:function(t,e,s){"use strict";t.exports=s.p+"img/coach-4.6558c170.jpg"},2698:function(t,e,s){"use strict";t.exports=s.p+"img/coach-5.66892e50.jpg"},5065:function(t,e,s){"use strict";t.exports=s.p+"media/homevideo-1.0fec80c9.mp4"},6273:function(t,e,s){"use strict";t.exports=s.p+"img/shop-banner-1.341fa165.jpeg"},4973:function(t,e,s){"use strict";t.exports=s.p+"img/shop-banner-2.2bbc55f9.jpeg"},7691:function(t,e,s){"use strict";t.exports=s.p+"img/shop-banner-3.cd9be559.jpeg"},9147:function(t,e,s){"use strict";t.exports=s.p+"img/shop-banner-4.a687c074.jpeg"},1326:function(t,e,s){"use strict";t.exports=s.p+"media/backgroundMusic.da03d5a3.mp3"}},e={};function s(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,i,o,n){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],n=t[u][2];for(var a=!0,c=0;c<i.length;c++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(a=!1,n<r&&(r=n));if(a){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,o,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/fitness-web/dist/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,n,r=i[0],a=i[1],c=i[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(c)var u=c(s)}for(e&&e(i);l<r.length;l++)n=r[l],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},i=self["webpackChunkfitness_web"]=self["webpackChunkfitness_web"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(711)}));i=s.O(i)})();
//# sourceMappingURL=app-legacy.f6aa597e.js.map