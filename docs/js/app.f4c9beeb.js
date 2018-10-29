(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],m=0,g=[];m<i.length;m++)a=i[m],s[a]&&g.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(g.length)g.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("c21b"),s=r.n(n);s.a},"0a0c":function(e,t,r){"use strict";var n=r("0aff"),s=r.n(n);s.a},"0aff":function(e,t,r){},"314a":function(e,t,r){"use strict";var n=r("b189"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Whack-a-mole")]),r("div",{staticClass:"content"},[e.loggedIn?e._e():r("LoginOrRegister"),e.loggedIn?r("div",{staticClass:"user"},[r("h3",{staticClass:"hello"},[e._v("Hi, "+e._s(e.username)+"!")]),r("button",{staticClass:"hello",on:{click:e.logout}},[e._v("Logout")])]):e._e(),e.loggedIn?r("Game"):e._e(),e.loggedIn?r("HighScores"):e._e()],1)])},o=[],a=r("c93e"),i=r("2f62"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"game"},["stopped"===e.status?r("button",{staticClass:"btn",on:{click:e.startGame}},[e._v("Start Game")]):e._e(),"started"===e.status?r("div",{staticClass:"info"},[r("span",{staticClass:"game-info"},[e._v("Time Left: "+e._s(e.clock))]),r("span",{staticClass:"game-info"},[e._v("Score: "+e._s(e.currentScore))])]):e._e(),"completed"===e.status?r("div",{staticClass:"score"},[r("div",{staticClass:"score-num"},[e._v("\n        You Scored: "+e._s(e.currentScore)+"\n      ")]),r("div",{staticClass:"buttons"},[r("button",{staticClass:"btn",on:{click:e.sendNewScore}},[e._v("Save Score")]),r("button",{staticClass:"btn",on:{click:e.reset}},[e._v("Discard Score")])])]):e._e(),"loading"!==e.status?r("div",{staticClass:"board"},e._l(9,function(t,n){return r("div",{staticClass:"hole",attrs:{id:n}},[n===e.activeMole?r("div",{staticClass:"mole",on:{click:function(t){e.onClick(n)}}},[r("img",{staticClass:"img",attrs:{src:"mole.svg",onmousedown:"return false"}})]):e._e()])})):e._e(),"started"!==e.status?r("div",{staticClass:"slider"},[r("span",{staticClass:"label"},[e._v("faster moles")]),r("input",{staticClass:"slider",attrs:{type:"range",min:"500",max:"1500",step:"500"},domProps:{value:e.moleSpeed},on:{change:e.changeHandler}}),r("span",{staticClass:"label"},[e._v("slower moles")])]):e._e(),"loading"===e.status?r("div",{staticClass:"loader"},[e._v("\n      loading...\n    ")]):e._e()])])},u=[],l={name:"Game",computed:Object(a["a"])({},Object(i["c"])({activeMole:function(e){return e.game.activeMole},moleSpeed:function(e){return e.game.moleSpeed},currentScore:function(e){return e.game.currentScore},clock:function(e){return e.game.clock},status:function(e){return e.game.status},username:function(e){return e.user.username}})),methods:{startGame:function(){this.$store.dispatch("game/startGame")},onClick:function(e){this.$store.dispatch("game/resetMole"),this.$store.dispatch("game/incrementScore")},sendNewScore:function(){this.$store.dispatch("game/postNewScore",{username:this.username,score:this.currentScore})},changeHandler:function(e){this.$store.dispatch("game/setMoleSpeed",e.target.value)},reset:function(){this.$store.dispatch("game/resetGame")}}},m=l,g=(r("0a0c"),r("2877")),d=Object(g["a"])(m,c,u,!1,null,"feb793e2",null);d.options.__file="Game.vue";var p=d.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"scores"},[r("h3",[e._v("Leaderboard")]),e.scores.length&&!e.error?r("table",[e._m(0),e._l(e.scores,function(t){return r("tr",[r("td",[e._v(e._s(t.username))]),r("td",[e._v(e._s(t.score))])])})],2):e._e(),e.error?r("div",{staticClass:"error"},[e._v("\n    Soemthing went wrong loading the high scores.\n  ")]):e._e()])},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("th",[e._v("Username")]),r("th",[e._v("Score")])])}],h=(r("96cf"),r("3040")),w={name:"HighScores",computed:Object(a["a"])({},Object(i["c"])({scores:function(e){return e.game.topFiveScores},error:function(e){return e.game.highScoresError}})),methods:{sendScore:function(){this.$store.dispatch("game/postNewScore",{username:username,currentScore:currentScore})}},mounted:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("game/getHighScores");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},_=w,S=(r("7e26"),Object(g["a"])(_,v,f,!1,null,"7d844366",null));S.options.__file="HighScores.vue";var b=S.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[e.showLogin?r("div",{staticClass:"login"},[r("h3",[e._v("Login")]),r("p",[e._v("\n      Don't have an account? "),r("a",{on:{click:function(t){e.toggleLoginAndRegister(!1,!0)}}},[e._v("Sign Up")])]),r("div",{staticClass:"form-field"},[r("div",{staticClass:"field-set"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.loginUsername,expression:"loginUsername"}],attrs:{type:"text",name:"username"},domProps:{value:e.loginUsername},on:{input:function(t){t.target.composing||(e.loginUsername=t.target.value)}}})]),r("div",{staticClass:"field-set"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.loginPassword,expression:"loginPassword"}],attrs:{type:"password",name:"password"},domProps:{value:e.loginPassword},on:{input:function(t){t.target.composing||(e.loginPassword=t.target.value)}}})])]),r("button",{attrs:{type:"button"},on:{click:e.login}},[e._v("Login")]),e.loginError?r("div",{staticClass:"error"},[e._v("\n      Username or password is incorrect.\n    ")]):e._e()]):e._e(),e.showRegister?r("div",{staticClass:"login"},[r("h3",[e._v("Register")]),r("p",[e._v("Already have an account? "),r("a",{on:{click:function(t){e.toggleLoginAndRegister(!0,!1)}}},[e._v("Sign In")])]),r("div",{staticClass:"form-field"},[r("div",{staticClass:"field-set"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.registerUsername,expression:"registerUsername"}],attrs:{type:"text",name:"username"},domProps:{value:e.registerUsername},on:{input:function(t){t.target.composing||(e.registerUsername=t.target.value)}}})]),r("div",{staticClass:"field-set"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.registerPassword,expression:"registerPassword"}],attrs:{type:"password",name:"password"},domProps:{value:e.registerPassword},on:{input:function(t){t.target.composing||(e.registerPassword=t.target.value)}}})])]),r("button",{attrs:{type:"button"},on:{click:e.register}},[e._v("Register")]),e.registerError?r("div",{staticClass:"error"},[e._v("\n      Something went wrong. Please try again.\n    ")]):e._e()]):e._e()])},C=[],x={name:"LoginOrRegister",data:function(){return{showLogin:!0,showRegister:!1,loginUsername:"",loginPassword:"",registerUsername:"",registerPassword:""}},computed:Object(a["a"])({},Object(i["c"])({loginError:function(e){return e.user.loginError},registerError:function(e){return e.user.registerError}})),methods:{toggleLoginAndRegister:function(e,t){this.showLogin=e,this.showRegister=t},login:function(){this.$store.dispatch("user/login",{username:this.loginUsername,password:this.loginPassword})},register:function(){this.$store.dispatch("user/register",{username:this.registerUsername,password:this.registerPassword})}}},O=x,y=(r("314a"),Object(g["a"])(O,k,C,!1,null,"454bb7a8",null));y.options.__file="Login.vue";var j=y.exports,P={name:"app",components:{Game:p,HighScores:b,LoginOrRegister:j},computed:Object(a["a"])({},Object(i["c"])({username:function(e){return e.user.username}}),Object(i["b"])({loggedIn:"user/loggedIn"})),methods:{logout:function(){this.$store.dispatch("user/logout")}}},M=P,E=(r("034f"),Object(g["a"])(M,s,o,!1,null,null,null));E.options.__file="App.vue";var R=E.exports,U=r("bc3a"),$=r.n(U),L="https://whackamole-.herokuapp.com",H={getHighScores:function(){return $()({method:"get",url:"".concat(L,"/scores")})},postNewScore:function(e){var t=e.username,r=e.score;return $()({method:"post",url:"".concat(L,"/scores/new"),data:{username:t,score:r}})}},G={topFiveScores:[],highScoresError:null,moleSpeed:1e3,currentScore:0,clock:20,status:"stopped",activeMole:null},I={},N={getHighScores:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,H.getHighScores();case 4:n=e.sent,r("setHighScores",n.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),r("highScoresError");case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),postNewScore:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,s=r.username,o=r.score,e.prev=2,n("changeState","loading"),e.next=6,H.postNewScore({username:s,score:o});case 6:a=e.sent,n("setHighScores",a.data),n("resetScore"),n("changeState","stopped"),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](2),n("highScoresError"),n("changeState","stopped");case 16:case"end":return e.stop()}},e,this,[[2,12]])}));return function(t,r){return e.apply(this,arguments)}}(),incrementScore:function(e){var t=e.commit;t("incrementScore")},startGame:function(e){var t=e.commit,r=e.state;t("resetClock"),t("resetScore"),t("changeState","started");var n=0,s=setInterval(function(){20===++n&&clearInterval(s),t("clockTick")},1e3),o=setInterval(function(){20===n?(clearInterval(o),t("resetMole"),t("changeState","completed")):(t("resetMole"),t("activateMole"))},r.moleSpeed)},resetMole:function(e){var t=e.commit;t("resetMole")},resetGame:function(e){var t=e.commit;t("resetGame")},setMoleSpeed:function(e,t){var r=e.commit;r("setMoleSpeed",t)}},T={setHighScores:function(e,t){e.highScoresError=!1,e.topFiveScores=t.scores},activateMole:function(e){var t=Math.floor(8*Math.random());e.activeMole=t},resetMole:function(e){e.activeMole=null},setMoleSpeed:function(e,t){e.moleSpeed=t},highScoresError:function(e){e.highScoresError=!0},incrementScore:function(e){e.currentScore++},resetScore:function(e){e.currentScore=0},resetClock:function(e){e.clock=20},resetGame:function(e){e.currentScore=0,e.clock=20,e.activeMole=null,e.status="stopped"},changeState:function(e,t){e.status=t},clockTick:function(e){e.clock>1?e.clock--:(e.clock--,e.status="stopped")}},A={namespaced:!0,state:G,getters:I,actions:N,mutations:T},F="https://whackamole-.herokuapp.com",D={login:function(e){var t=e.username,r=e.password;return $()({method:"post",url:"".concat(F,"/authenticate/login"),data:{username:t,password:r}})},register:function(e){var t=e.username,r=e.password;return $()({method:"post",url:"".concat(F,"/authenticate/register"),data:{username:t,password:r}})}},J={username:null,loginError:null,registerError:null,token:null},W={loggedIn:function(e){return!!e.token},username:function(e){return e.username}},Y={login:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,s=r.username,o=r.password,e.prev=2,e.next=5,D.login({username:s,password:o});case 5:a=e.sent,n("setToken",a.data),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),n("loginFailure");case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t,r){return e.apply(this,arguments)}}(),register:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,s=r.username,o=r.password,e.prev=2,e.next=5,D.register({username:s,password:o});case 5:a=e.sent,n("setToken",a.data),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),n("registerError");case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t,r){return e.apply(this,arguments)}}(),logout:function(e){var t=e.commit;t("logout")}},q={setToken:function(e,t){e.error=!1,e.token=t.token,e.username=t.username},logout:function(e){e.token=null,e.username=null},loginFailure:function(e){e.loginError=!0},registerError:function(e){e.registerError=!0}},z={namespaced:!0,state:J,getters:W,actions:Y,mutations:q};n["a"].use(i["a"]);var B=!1,K=new i["a"].Store({modules:{game:A,user:z},strict:B});n["a"].config.productionTip=!1,new n["a"]({store:K,render:function(e){return e(R)}}).$mount("#app")},"7e26":function(e,t,r){"use strict";var n=r("e71b"),s=r.n(n);s.a},b189:function(e,t,r){},c21b:function(e,t,r){},e71b:function(e,t,r){}});
//# sourceMappingURL=app.f4c9beeb.js.map