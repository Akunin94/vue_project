(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},s=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue_project/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("mcv-topbar"),r("router-view")],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-light"},[r("div",{staticClass:"container"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"globalFeed"}}},[t._v("Akunin")])],1),r("ul",{staticClass:"nav navbar-nav pull-xs-right"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"globalFeed"},exact:"","active-class":"active"}},[t._v("Home")])],1),t.isLoggedIn?[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"createArticle"},"active-class":"active"}},[r("i",{staticClass:"ion-compose"}),t._v("   New Article")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"settings"},"active-class":"active"}},[r("i",{staticClass:"ion-gear-a"}),t._v("   Settings")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"userProfile",params:{slug:"currentUser.username"}},"active-class":"active"}},[t.currentUser.image?r("img",{staticClass:"user-pic",attrs:{src:t.currentUser.image}}):t._e(),t._v("   "+t._s(t.currentUser.username)+" ")])],1)]:t._e(),t.isAnonymous?[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"},"active-class":"active"}},[t._v("Sign in")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"},"active-class":"active"}},[t._v("Sign up")])],1)]:t._e()],2)])},o=[],c=r("5530"),u=r("ade3"),l=(r("d3b7"),r("bc3a")),d=r.n(l),m=(r("e9c4"),function(t){try{return JSON.parse(localStorage.getItem(t))}catch(e){return console.log("Error getting data from localStorage",e),null}}),g=function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(r){console.log("Error saving data in localStorage",r)}};d.a.defaults.baseURL="https://conduit.productionready.io/api",d.a.interceptors.request.use((function(t){var e=m("accessToken"),r=e?"Token ".concat(e):"";return t.headers.Authorization=r,t}));var p,f,v,h,b=d.a,C=function(t){return b.post("/users",{user:t})},S=function(t){return b.post("/users/login",{user:t})},_=function(){return b.get("/user")},O={register:C,login:S,getCurrentUser:_},j={isSubmitting:!1,isLoading:!1,currentUser:null,validationErrors:null,isLoggedIn:null},y={registerStart:"[auth] registerStart",registerSuccess:"[auth] registerSuccess",registerFailure:"[auth] registerFailure",loginStart:"[auth] loginStart",loginSuccess:"[auth] loginSuccess",loginFailure:"[auth] loginFailure",getCurrentUserStart:"[auth] getCurrentUserStart",getCurrentUserSuccess:"[auth] getCurrentUserSuccess",getCurrentUserFailure:"[auth] getCurrentUserFailure"},w={register:"[auth] register",login:"[auth] login",getCurrentUser:"[auth] getCurrentUser"},F={currentUser:"[auth] currentUser",isLoggedIn:"[auth] isLoggedIn",isAnonymous:"[auth] isAnonymous"},U=(p={},Object(u["a"])(p,F.currentUser,(function(t){return t.currentUser})),Object(u["a"])(p,F.isLoggedIn,(function(t){return Boolean(t.isLoggedIn)})),Object(u["a"])(p,F.isAnonymous,(function(t){return!1===t.isLoggedIn})),p),x=(f={},Object(u["a"])(f,y.registerStart,(function(t){t.isSubmitting=!0,t.validationErrors=null})),Object(u["a"])(f,y.registerSuccess,(function(t,e){t.isSubmitting=!1,t.currentUser=e,t.isLoggedIn=!0})),Object(u["a"])(f,y.registerFailure,(function(t,e){t.isSubmitting=!1,t.validationErrors=e})),Object(u["a"])(f,y.loginStart,(function(t){t.isSubmitting=!0,t.validationErrors=null})),Object(u["a"])(f,y.loginSuccess,(function(t,e){t.isSubmitting=!1,t.currentUser=e,t.isLoggedIn=!0})),Object(u["a"])(f,y.loginFailure,(function(t,e){t.isSubmitting=!1,t.validationErrors=e})),Object(u["a"])(f,y.getCurrentUserStart,(function(t){t.isLoading=!0})),Object(u["a"])(f,y.getCurrentUserSuccess,(function(t,e){t.isLoading=!1,t.currentUser=e,t.isLoggedIn=!0})),Object(u["a"])(f,y.getCurrentUserFailure,(function(t){t.isLoading=!1,t.isLoggedIn=!1,t.currentUser=null})),f),k=(v={},Object(u["a"])(v,w.register,(function(t,e){return new Promise((function(r){t.commit(y.registerStart),O.register(e).then((function(e){t.commit(y.registerSuccess,e.data.user),g("accessToken",e.data.user.token),r(e.data.user)})).catch((function(e){t.commit(y.registerFailure,e.response.data.errors)}))}))})),Object(u["a"])(v,w.login,(function(t,e){return new Promise((function(r){t.commit(y.loginStart),O.login(e).then((function(e){t.commit(y.loginSuccess,e.data.user),g("accessToken",e.data.user.token),r(e.data.user)})).catch((function(e){t.commit(y.loginFailure,e.response.data.errors)}))}))})),Object(u["a"])(v,w.getCurrentUser,(function(t){return new Promise((function(e){t.commit(y.getCurrentUserStart),O.getCurrentUser().then((function(r){t.commit(y.getCurrentUserSuccess,r.data.user),e(r.data.user)})).catch((function(){t.commit(y.getCurrentUserFailure)}))}))})),v),E={state:j,mutations:x,actions:k,getters:U},P=r("2f62"),L={name:"McvTopbar",computed:Object(c["a"])({},Object(P["b"])({currentUser:F.currentUser,isLoggedIn:F.isLoggedIn,isAnonymous:F.isAnonymous}))},A=L,M=r("2877"),I=Object(M["a"])(A,i,o,!1,null,null,null),$=I.exports,N={name:"McvApp",components:{McvTopbar:$},mounted:function(){this.$store.dispatch(w.getCurrentUser)}},T=N,q=Object(M["a"])(T,n,s,!1,null,null,null),R=q.exports,D=r("8c4f"),J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._v(" BANNER "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("mcv-feed",{attrs:{apiUrl:t.apiUrl}})],1),r("div",{staticClass:"col-md-3"},[t._v("POPULAR TAGS")])])])])},V=[],G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("div",[t._v("Loading...")]):t._e(),t.error?r("div",[t._v("Error")]):t._e(),t.feed?r("div",[t._l(t.feed.articles,(function(e,a){return r("div",{key:a,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("router-link",{attrs:{to:{name:"userProfile",params:{slug:e.author.username}}}},[r("img",{attrs:{src:e.author.image}})]),r("div",{staticClass:"info"},[r("router-link",{staticClass:"author",attrs:{to:{name:"userProfile",params:{slug:e.author.username}}}},[t._v(" "+t._s(e.author.username)+" ")]),r("span",{staticClass:"date"},[t._v(t._s(e.createdAt))])],1),r("div",{staticClass:"pull-xs-right"},[t._v("ADD TO FAVORITES")])],1),r("router-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:e.slug}}}},[r("h1",[t._v(t._s(e.title))]),r("p",[t._v(t._s(e.description))]),r("span",[t._v("Read more...")]),t._v(" TAG LIST ")])],1)})),r("mcv-pagination",{attrs:{total:t.feed.articlesCount,limit:t.limit,"current-page":t.currentPage,url:t.baseUrl}})],2):t._e()])},B=[],H=(r("99af"),function(t){return b.get(t)}),z={getFeed:H},K={data:null,isLoading:!1,error:null},Q={getFeedStart:"[feed] getFeedStart",getFeedSuccess:"[feed] getFeedSuccess",getFeedFailure:"[feed] getFeedFailure"},W={getFeed:"[feed] getFeed"},X=(h={},Object(u["a"])(h,Q.getFeedStart,(function(t){t.isLoading=!0,t.data=null})),Object(u["a"])(h,Q.getFeedSuccess,(function(t,e){t.isLoading=!1,t.data=e})),Object(u["a"])(h,Q.getFeedFailure,(function(t,e){t.isLoading=!1,t.error=e})),h),Y=Object(u["a"])({},W.getFeed,(function(t,e){var r=e.apiUrl;return new Promise((function(e){t.commit(Q.getFeedStart),z.getFeed(r).then((function(r){t.commit(Q.getFeedSuccess,r.data),e(r.data)})).catch((function(){t.commit(Q.getFeedFailure)}))}))})),Z={state:K,mutations:X,actions:Y},tt=10,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"pagination"},t._l(t.pages,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:t.currentPage===e}},[r("router-link",{staticClass:"page-link",attrs:{to:{path:t.url,query:{page:e}}}},[t._v(t._s(e))])],1)})),0)},rt=[],at=(r("a9e3"),r("2909")),nt=(r("d81d"),r("ddb0"),function(t,e){return Object(at["a"])(Array(e).keys()).map((function(e){return e+t}))}),st={name:"McvPagination",props:{total:{type:Number,required:!0},limit:{type:Number,required:!0},currentPage:{type:Number,required:!0},url:{type:String,required:!0}},computed:{pages:function(){var t=Math.ceil(this.total/this.limit);return nt(1,t)}}},it=st,ot=Object(M["a"])(it,et,rt,!1,null,null,null),ct=ot.exports,ut=r("72bf"),lt={name:"McvFeed",props:{apiUrl:{type:String,required:!0}},components:{McvPagination:ct},data:function(){return{limit:tt}},computed:Object(c["a"])(Object(c["a"])({},Object(P["c"])({loading:function(t){return t.feed.isLoading},feed:function(t){return t.feed.data},error:function(t){return t.feed.error}})),{},{currentPage:function(){return+(this.$route.query.page||1)},baseUrl:function(){return this.$route.path},offset:function(){return this.currentPage*tt-tt}}),watch:{currentPage:function(){this.fetchFeed()}},mounted:function(){this.fetchFeed()},methods:{fetchFeed:function(){var t=Object(ut["parseUrl"])(this.apiUrl),e=Object(ut["stringify"])(Object(c["a"])({limit:tt,offset:this.offset},t.query)),r="".concat(t.url,"?").concat(e);this.$store.dispatch(W.getFeed,{apiUrl:r})}}},dt=lt,mt=Object(M["a"])(dt,G,B,!1,null,null,null),gt=mt.exports,pt={name:"McvGlobalFeed",components:{McvFeed:gt},data:function(){return{apiUrl:"/articles"}}},ft=pt,vt=Object(M["a"])(ft,J,V,!1,null,null,null),ht=vt.exports,bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[t._v("Sign up")]),r("p",{staticClass:"text-xs-center"},[r("router-link",{attrs:{to:{name:"login"}}},[t._v("Have an account?")])],1),t.validationErrors?r("mcv-validation-errors",{attrs:{"validation-errors":t.validationErrors}}):t._e(),r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:t.isSubmitting}},[t._v("Sign up")])])],1)])])])},Ct=[],St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"error-messages"},t._l(t.errorMessages,(function(e){return r("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)},_t=[],Ot=(r("b64b"),r("a15b"),{name:"McValidationErrors",props:{validationErrors:{type:Object,required:!0}},computed:{errorMessages:function(){var t=this;return Object.keys(this.validationErrors).map((function(e){var r=t.validationErrors[e].join(", ");return"".concat(e," ").concat(r)}))}}}),jt=Ot,yt=Object(M["a"])(jt,St,_t,!1,null,null,null),wt=yt.exports,Ft={name:"McvRegister",components:{McvValidationErrors:wt},data:function(){return{username:"",email:"",password:""}},computed:Object(c["a"])({},Object(P["c"])({validationErrors:function(t){return t.auth.validationErrors},isSubmitting:function(t){return t.auth.isSubmitting}})),methods:{onSubmit:function(){var t=this;this.$store.dispatch(w.register,{username:this.username,email:this.email,password:this.password}).then((function(e){console.log(e),t.$router.push({name:"globalFeed"})}))}}},Ut=Ft,xt=Object(M["a"])(Ut,bt,Ct,!1,null,null,null),kt=xt.exports,Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[t._v("Sign in")]),r("p",{staticClass:"text-xs-center"},[r("router-link",{attrs:{to:{name:"register"}}},[t._v("Need an account?")])],1),t.validationErrors?r("mcv-validation-errors",{attrs:{"validation-errors":t.validationErrors}}):t._e(),r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:t.isSubmitting}},[t._v("Sign in")])])],1)])])])},Pt=[],Lt={name:"McvLogin",components:{McvValidationErrors:wt},data:function(){return{email:"",password:""}},computed:Object(c["a"])({},Object(P["c"])({validationErrors:function(t){return t.auth.validationErrors},isSubmitting:function(t){return t.auth.isSubmitting}})),methods:{onSubmit:function(){var t=this;this.$store.dispatch(w.login,{email:this.email,password:this.password}).then((function(){t.$router.push({name:"globalFeed"})}))}}},At=Lt,Mt=Object(M["a"])(At,Et,Pt,!1,null,null,null),It=Mt.exports;a["a"].use(D["a"]);var $t=[{path:"/register",name:"register",component:kt},{path:"/login",name:"login",component:It},{path:"/",name:"globalFeed",component:ht},{path:"/feed",name:"yourFeed",component:ht},{path:"/tags/:slug",name:"tag",component:ht},{path:"/articles/new",name:"createArticle",component:ht},{path:"/articles/:slug",name:"article",component:ht},{path:"/articles/:slug/edit",name:"editArticle",component:ht},{path:"/setting",name:"settings",component:ht},{path:"/profiles/:slug",name:"userProfile",component:ht},{path:"/profiles/:slug/favorites",name:"userProfileFavorites",component:ht}],Nt=new D["a"]({routes:$t}),Tt=Nt;a["a"].use(P["a"]);var qt=new P["a"].Store({state:{},mutations:{},actions:{},modules:{auth:E,feed:Z}});a["a"].config.productionTip=!1,new a["a"]({router:Tt,store:qt,render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=app.2171c59f.js.map