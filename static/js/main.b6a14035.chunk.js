(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],[,,,,,,,,,,,function(e,t,_){"use strict";_.d(t,"a",(function(){return a}));_(45);var n=_(0);function a(e){var t=e.config,_=t.unit,a=t.option,s=t.defaultValue,r=t.label,i=void 0===r?{on:"I",off:"0"}:r,o=JSON.parse(localStorage.getItem("gameConfig")),c=o?o[e.config.option]:s;return Object(n.jsxs)("label",{className:"switch__container",htmlFor:_,children:[Object(n.jsx)("input",{id:_,className:"switch",type:"checkbox",onChange:function(){e.handleSwitch(a)},checked:!c}),Object(n.jsxs)("div",{className:"custom-switch",children:[Object(n.jsx)("span",{className:"switch__label",children:i.on.toUpperCase()}),Object(n.jsx)("span",{className:"switch__label",children:i.off.toUpperCase()})]})]})}},,,function(e,t,_){"use strict";_.d(t,"a",(function(){return n})),_.d(t,"b",(function(){return a})),_.d(t,"c",(function(){return s}));var n={header:{nav:{intro:{en:"Intro",ru:"\u0412\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435"},game:{en:"Game",ru:"\u0418\u0433\u0440\u0430"},options:{en:"Options",ru:"\u041e\u043f\u0446\u0438\u0438"},highscores:{en:"Highscores",ru:"\u0420\u0435\u043a\u043e\u0440\u0434\u044b"}}},counter:{timeLeft:{en:"Time left",ru:"\u0412\u0440\u0435\u043c\u0435\u043d\u0438 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c"},totalCorrect:{en:"Correct answers",ru:"\u0412\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432"},totalIncorrect:{en:"Incorrect answers",ru:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432"}},highscores:{title:{en:"Highscores",ru:"\u0420\u0435\u043a\u043e\u0440\u0434\u044b"}},options:{title:{en:"Options",ru:"\u041e\u043f\u0446\u0438\u0438"},timer:{en:"Timer",ru:"\u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u043e\u0442\u0441\u0447\u0435\u0442"},hints:{en:"Hints",ru:"\u041f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438"},nosimple:{en:"Remove simple questions ...in construction...",ru:"\u0411\u0435\u0437 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 ...\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435..."},questAmount:{en:"Amount of questions ...in construction...",ru:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 ...\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435..."}},intro:{title:{en:"Introduction",ru:"\u0412\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435"},text:{en:"Below you can find a brief guide for the game.",ru:"\u041d\u0438\u0436\u0435 \u0432\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u0443\u044e \u0438\u043d\u0442\u0441\u0440\u0443\u043a\u0446\u0438\u044e \u043f\u043e \u0438\u0433\u0440\u0435."},item1:{en:'You can directly go to the "Game" page (or press the "Start" button below) and challenge yourself in how well you know types conversions in JS.',ru:'\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0440\u0430\u0437\u0443 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0443 "\u0418\u0433\u0440\u0430" (\u0438\u043b\u0438 \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u0443\u043f\u043a\u0443 "\u0421\u0442\u0430\u0440\u0442" \u043d\u0438\u0436\u0435) \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u0437\u043d\u0430\u043d\u0438\u044f \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 JS.'},item2:{en:"By default the game has timer on and hints off. However, you can easily adjust options to your preferences.",ru:'\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u043c \u043e\u0442\u0441\u0447\u0435\u0442\u043e\u043c \u0438 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430\u043c\u0438. \u041e\u0434\u043d\u0430\u043a\u043e, \u043f\u0435\u0440\u0435\u0439\u0434\u044f \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0443 "\u041e\u043f\u0446\u0438\u0438", \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438\u0433\u0440\u044b \u043d\u0430 \u0441\u0432\u043e\u0435 \u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0438\u0435.'},item3:{en:"As soon as you completed the game you will be offered to enter your name and save the score.",ru:"\u041f\u043e \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044e \u0438\u0433\u0440\u044b \u0432\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442."},item4:{en:'"Highscores" page is for your scores.',ru:'\u041d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 "\u0420\u0435\u043a\u043e\u0440\u0434\u044b" \u0432\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0441\u0432\u043e\u0438\u0445 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0445 \u043f\u043e\u043f\u044b\u0442\u043e\u043a.'},btn:{en:"Start",ru:"\u0421\u0442\u0430\u0440\u0442"}}},a={"+":"","-":"","*":"","/":"","||":'\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 "||" - \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418\u041b\u0418. \u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e "a ? a : b". \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u043e\u0432,\n          \u0430 \u043d\u0435 \u0441 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f. P.S. "\u041b\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f": "", undefined, null, false, +0, -0, NaN',"&&":'\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 "&&" - \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418. \u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e "a ? b : a". \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u043e\u0432,\n          \u0430 \u043d\u0435 \u0441 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f. P.S. "\u041b\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f": "", undefined, null, false, +0, -0, NaN',"==":'"==" - \u041d\u0435\u0441\u0442\u0440\u043e\u0433\u043e\u0435 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e. \u0420\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430.',"===":'"===" - \u0421\u0442\u0440\u043e\u0433\u043e\u0435 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e. \u0417\u0430\u043f\u0440\u0435\u0449\u0430\u0435\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430.'},s=['""',"{}","[]","[[]]","NaN","[0]","[1]","1","-1","null","undefined","Infinity","-Infinity","0","-0","true","false",'"true"','"false"','~"{}".indexOf("__proto__")',"~~-0.9"]},,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return App}));var _home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(29),_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),_app_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(39),_app_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_7__),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),react_router_dom__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(10),react_router_dom__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(2),_Gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(30),_Counter_Counter__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(21),_Header_Header__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(22),_Footer_Footer__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(25),_Helper_Helper__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(26),_Modal_Modal__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(27),_Highscores_Highscores__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(31),_Intro_Intro__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(28),_Counter_HelpMeBtn_HelpMeBtn__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(32),_content__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(14),_Options_Options__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(33),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__),App=function(_Component){Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(App,_Component);var _super=Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__.a)(App);function App(){var e;return Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,App),(e=_super.call(this)).signs=_content__WEBPACK_IMPORTED_MODULE_20__.b,e.values=_content__WEBPACK_IMPORTED_MODULE_20__.c,e.signHelper={"||":'\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 "||" - \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418\u041b\u0418. \u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e "a ? a : b". \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u043e\u0432,\n          \u0430 \u043d\u0435 \u0441 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f. P.S. "\u041b\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f": "", undefined, null, false, +0, -0, NaN',"&&":'\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 "&&" - \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418. \u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e "a ? b : a". \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043e\u043f\u0435\u0440\u0430\u043d\u0434\u043e\u0432,\n          \u0430 \u043d\u0435 \u0441 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f. P.S. "\u041b\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f": "", undefined, null, false, +0, -0, NaN',"==":'"==" - \u041d\u0435\u0441\u0442\u0440\u043e\u0433\u043e\u0435 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e. \u0420\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430.',"===":'"===" - \u0421\u0442\u0440\u043e\u0433\u043e\u0435 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e. \u0417\u0430\u043f\u0440\u0435\u0449\u0430\u0435\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430.'},e.tasksAmount=25,e.timeForTask=6,e.timerInterval=0,e.wrongAnswers=[],e.content=_content__WEBPACK_IMPORTED_MODULE_20__.a,e.defaultGameConfig={langEng:!0,timerOn:!0,hintsOn:!0,noSimpleOn:!1,questAmount:15},e.initialState={helpVisibility:!1,tasks:e.generateTasks(e.tasksAmount),totalTaken:0,totalCorrect:0,totalIncorrect:0,currentQuestionNo:0,isDone:!1,timeLeft:Math.floor((e.tasksAmount-1)/2)*e.timeForTask,timeResult:0,playerName:"Player",gameConfig:JSON.parse(localStorage.getItem("gameConfig"))||Object.assign({},e.defaultGameConfig)},e.state=Object.assign({},e.initialState),e.handlePassedTask=e.handlePassedTask.bind(Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.getRandomQuestion=e.getRandomQuestion.bind(Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.handleSubmitScore=e.handleSubmitScore.bind(Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.restartGame=e.restartGame.bind(Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.handleHelpMe=e.handleHelpMe.bind(Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.handlePlayerName=e.handlePlayerName.bind(Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.handleSwitch=e.handleSwitch.bind(Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.getGameScore=e.getGameScore.bind(Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.handleWheel=e.handleWheel.bind(Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e}return Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(App,[{key:"handlePlayerName",value:function(e){this.setState({playerName:e})}},{key:"handleSwitch",value:function(e){var t=this.state.gameConfig;t[e]=!this.state.gameConfig[e],this.setState(t),localStorage.setItem("gameConfig",JSON.stringify(t)),this.restartGame(),clearInterval(this.timerInterval,1e3)}},{key:"handleWheel",value:function(){console.log("handle wheel")}},{key:"handleHelpMe",value:function(){!1===this.state.helpVisibility&&0!==this.state.totalTaken&&this.setState({timeLeft:this.state.timeLeft-this.timeForTask}),this.setState({helpVisibility:!this.state.helpVisibility})}},{key:"restartGame",value:function(){this.setState(Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},this.initialState)),this.setState({tasks:this.generateTasks(this.tasksAmount),timeLeft:Math.floor((this.tasksAmount-1)/2)*this.timeForTask})}},{key:"getGameScore",value:function(){var e=1;return e*=this.state.gameConfig.hintsOn?.7:1,e*=this.state.gameConfig.timerOn?1.5:1,e*=this.state.gameConfig.noSimpleOn?1.1:1,this.state.timeResult>0?Math.ceil(this.state.timeResult*this.state.totalCorrect*e):0}},{key:"handleSubmitScore",value:function(e){var t;e.preventDefault();var _=null!==(t=JSON.parse(localStorage.getItem("scoreRecords")))&&void 0!==t?t:[];_.push({name:this.state.playerName,score:this.getGameScore(),date:Date.now()}),localStorage.setItem("scoreRecords",JSON.stringify(_)),this.restartGame(),window.location="/#/highscores"}},{key:"handlePassedTask",value:function(e,t,_){var n=this;if(this.setState({helpVisibility:!1}),!this.state.isDone){!0===this.state.gameConfig.timerOn&&0===this.state.totalTaken&&(this.timerInterval=setInterval((function(){n.setState({timeLeft:n.state.timeLeft-1}),n.state.timeLeft<=0&&(n.setState({isDone:!0,timeLeft:0,timeResult:0}),clearInterval(n.timerInterval,1e3))}),1e3));var a,s=Object.assign({},t),r=this.state.totalCorrect,i=this.state.totalIncorrect,o=this.state.timeLeft,c=this.state.totalTaken+1;s.passed=!0,s.answer=_,_===s.result?(s.correct=!0,r++,o+=this.timeForTask):(s.correct=!1,i++,o-=this.timeForTask),(a=c===this.tasksAmount)&&clearInterval(this.timerInterval,1e3),this.setState({totalTaken:c,timeLeft:o,timeResult:o,totalCorrect:r,totalIncorrect:i,isDone:a});var l=Array.from(this.state.tasks);l=l.filter((function(e){return e.formula!==s.formula})),l=[].concat(Object(_home_mad_pillow_Documents_Projects_react_type_game_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(l),[s]),this.wrongAnswers=l.filter((function(e){return!1===e.correct})).map((function(e){return{formula:e.formula,correctAnswer:e.result,yourAnswer:e.answer}})),this.setState({tasks:l})}}},{key:"generateTasks",value:function generateTasks(num){for(var tasks=[{passed:!1,correct:null,formula:"[] === []",result:"false",allResults:["true","false","[]",'""'],formulaHelper:"\u041f\u0435\u0440\u0432\u044b\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u0440\u0438\u043c\u0435\u0440. \u041e\u0442\u0432\u0435\u0442 \u043d\u0430 \u043d\u0435\u0433\u043e \u043d\u0430\u0447\u043d\u0435\u0442 \u043e\u0442\u0441\u0447\u0435\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u0423\u0434\u0430\u0447\u0438."}],i=0;i<num-1;i++){var _signs=Object.keys(this.signs),sign=_signs[Math.floor(Math.random()*_signs.length)],value1=this.values[Math.floor(Math.random()*this.values.length)],value2=this.values[Math.floor(Math.random()*this.values.length)],formula=[value1,sign,value2].join(" "),formulaHelper=this.signs[sign]||"\u0414\u0430\u0432\u0430\u0439 \u043f\u043e\u0433\u0443\u0433\u043b\u0438\u043c...",result=["+","-"].includes(sign)?eval("".concat(formula)):eval("(".concat(formula,")"));"object"!==typeof result||null===result||Array.isArray(result)||(result.toString=function(){return"{}"},result.valueOf=function(){return 0}),result=""===result?'""':"string"===typeof result?'"'+result+'"':Array.isArray(result)&&Array.isArray(result[0])&&1===result.length?"[[]]":Array.isArray(result)?"["+result+"]":1/result===-1/0?"-0":"".concat(result);var falseResults=[],j=0;for("=="!==sign&&"==="!==sign||(falseResults.push("true"===result?"false":"true"),j=1);j<3;j++){var randomIndex=Math.floor(Math.random()*this.values.length);falseResults.includes(this.values[randomIndex])||this.values[randomIndex]===result?j--:falseResults.push(this.values[randomIndex])}tasks.push({passed:!1,correct:null,formula:formula,result:result,allResults:[].concat(falseResults,[result]),formulaHelper:formulaHelper})}return tasks}},{key:"getRandomQuestion",value:function(){var e=this.state.tasks.length,t=Math.floor(Math.random()*e);return this.state.tasks[t].passed?this.getRandomQuestion():this.state.tasks[t]}},{key:"render",value:function(){var e=this;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div",{className:"wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Header_Header__WEBPACK_IMPORTED_MODULE_13__.a,{content:this.content,lang:this.state.gameConfig.langEng,handleSwitch:this.handleSwitch,defaultLang:this.defaultGameConfig.langEng}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("main",{className:"main-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.a,{exact:!0,path:"/game",render:function(t){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div",{className:"gamepad__container section-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Gamepad_Gamepad__WEBPACK_IMPORTED_MODULE_11__.a,{isDone:e.state.isDone,tasks:e.state.tasks,currentQuestionNo:e.state.currentQuestionNo,handlePassedTask:e.handlePassedTask,handleCompletedGame:e.handleCompletedGame}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div",{className:"info-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Counter_Counter__WEBPACK_IMPORTED_MODULE_12__.a,{content:e.content,langEng:e.state.gameConfig.langEng,totalCorrect:e.state.totalCorrect,totalIncorrect:e.state.totalIncorrect,timeLeft:e.state.timeLeft,timerIsOn:e.state.gameConfig.timerOn}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Counter_HelpMeBtn_HelpMeBtn__WEBPACK_IMPORTED_MODULE_19__.a,{handleHelpMe:e.handleHelpMe,hintsOn:e.state.gameConfig.hintsOn}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Helper_Helper__WEBPACK_IMPORTED_MODULE_15__.a,{formulaHelper:e.state.tasks[e.state.currentQuestionNo].formulaHelper,isVisible:e.state.helpVisibility,handleHelpMe:e.handleHelpMe})]})]})}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.a,{path:"/highscores",render:function(t){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Highscores_Highscores__WEBPACK_IMPORTED_MODULE_17__.a,{content:e.content,langEng:e.state.gameConfig.langEng})}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.a,{path:"/options",render:function(t){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Options_Options__WEBPACK_IMPORTED_MODULE_21__.a,{content:e.content,langEng:e.state.gameConfig.langEng,handleSwitch:e.handleSwitch,handleWheel:e.handleWheel,defaultGameConfig:e.defaultGameConfig})}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.a,{exact:!0,path:"/",render:function(t){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Intro_Intro__WEBPACK_IMPORTED_MODULE_18__.a,{content:e.content,langEng:e.state.gameConfig.langEng})}})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Footer_Footer__WEBPACK_IMPORTED_MODULE_14__.a,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Modal_Modal__WEBPACK_IMPORTED_MODULE_16__.a,{wrongAnswers:this.wrongAnswers,timeLeft:this.timeLeft,timeResult:this.state.timeResult,totalTaken:this.state.totalTaken,totalCorrect:this.state.totalCorrect,totalIncorrect:this.state.totalIncorrect,tasksAmount:this.tasksAmount,modalIsVisible:this.state.isDone,handleSubmitScore:this.handleSubmitScore,handlePlayerName:this.handlePlayerName,getGameScore:this.getGameScore})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_8__.Component)},function(e,t,_){"use strict";_.d(t,"a",(function(){return a}));_(43);var n=_(0);function a(e){var t=Intl.NumberFormat("GB",{minimumIntegerDigits:2}),_=e.langEng?"en":"ru",a=t.format(parseInt(e.timeLeft/60)),s=t.format(e.timeLeft-60*a),r="";return e.timerIsOn?e.timeLeft>0?(a=t.format(parseInt(e.timeLeft/60)),s=t.format(e.timeLeft-60*a),r="".concat(a,":").concat(s)):r="00:00":r=Object(n.jsx)("span",{children:"\u221e"}),Object(n.jsxs)("div",{className:"counter__container",children:[Object(n.jsxs)("div",{className:"counter__timer",children:[e.content.counter.timeLeft[_]+": ",Object(n.jsx)("span",{children:r})]}),Object(n.jsxs)("h2",{className:"counter__item",children:[e.content.counter.totalCorrect[_],": ",e.totalCorrect]}),Object(n.jsxs)("h2",{className:"counter__item",children:[e.content.counter.totalIncorrect[_],": ",e.totalIncorrect]})]})}},function(e,t,_){"use strict";_.d(t,"a",(function(){return m}));var n=_(6),a=_(7),s=_(3),r=_(9),i=_(8),o=(_(44),_(10)),c=_(1),l=_(11),u=_(0),m=function(e){Object(r.a)(_,e);var t=Object(i.a)(_);function _(e){var a;return Object(n.a)(this,_),(a=t.call(this,e)).state={navPanelIsVisible:!1},a.defaultLang=a.props.defaultLang?"en":"ru",a.handleNavPanel=a.handleNavPanel.bind(Object(s.a)(a)),a}return Object(a.a)(_,[{key:"handleNavPanel",value:function(){this.setState({navPanelIsVisible:!this.state.navPanelIsVisible})}},{key:"render",value:function(){return this.lang=this.props.lang?"en":"ru",Object(u.jsx)(o.a,{children:Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("span",{className:"header__logo logo",children:Object(u.jsx)(o.b,{className:"header__logo-link logo-link",exact:!0,to:"/",children:"JS Types Game"})}),Object(u.jsx)("div",{className:"nav__btn-container",onClick:this.handleNavPanel,children:Object(u.jsx)("span",{className:"nav__btn"})}),Object(u.jsx)("nav",{className:this.state.navPanelIsVisible?"nav__container nav__container--visible":"nav__container",onClick:this.handleNavPanel,children:Object(u.jsxs)("ul",{className:"nav__list",children:[Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(o.b,{className:"nav__link",exact:!0,to:"/",children:this.props.content.header.nav.intro[this.lang]})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(o.b,{className:"nav__link",to:"/game",children:this.props.content.header.nav.game[this.lang]})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(o.b,{className:"nav__link",to:"/options",children:this.props.content.header.nav.options[this.lang]})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(o.b,{className:"nav__link",to:"/highscores",children:this.props.content.header.nav.highscores[this.lang]})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)("div",{className:"nav__item--switch",children:Object(u.jsx)(l.a,{handleSwitch:this.props.handleSwitch,config:{unit:"language",option:"langEng",defaultValue:this.defaultLang,label:{on:"en",off:"ru"}}})})})]})})]})})}}]),_}(c.Component)},,,function(e,t,_){"use strict";_(54);var n=_(0);t.a=function(e){return Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsx)("span",{className:"footer__logo logo",children:Object(n.jsx)("a",{className:"footer__logo-link logo-link",href:"/",children:"JS Types Game"})}),Object(n.jsx)("span",{className:"copyright",children:"\xa9 Mad Pillow. Copyright 2021. All Rights Reserved."})]})}},function(e,t,_){"use strict";_(55);var n=_(0);t.a=function(e){return Object(n.jsx)("div",{className:e.isVisible?"helper__container helper__container--visible":"helper__container",onClick:e.handleHelpMe,children:Object(n.jsx)("div",{className:"helper",children:e.formulaHelper})})}},function(e,t,_){"use strict";_.d(t,"a",(function(){return l}));var n=_(6),a=_(7),s=_(3),r=_(9),i=_(8),o=(_(56),_(1)),c=_(0),l=function(e){Object(r.a)(_,e);var t=Object(i.a)(_);function _(e){var a;return Object(n.a)(this,_),(a=t.call(this,e)).refreshInput=a.refreshInput.bind(Object(s.a)(a)),a}return Object(a.a)(_,[{key:"refreshInput",value:function(){this._input.focus(),this._input.value=""}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:this.props.modalIsVisible?"modal__container modal__container--visible":"modal__container",children:Object(c.jsxs)("div",{className:"modal__window",children:[Object(c.jsx)("h2",{className:"modal__title",children:"Wow!"}),Object(c.jsx)("p",{className:"modal__text",children:"You have just passed the test of total ".concat(this.props.tasksAmount," questions").concat(this.props.totalCorrect===this.props.tasksAmount?". All answers are correct.":" with ".concat(this.props.totalCorrect," correct and ").concat(this.props.totalIncorrect," incorrect answers."))}),Object(c.jsx)("p",{className:"modal__text",children:"Your score is ".concat(this.props.getGameScore(),".")}),Object(c.jsx)("div",{className:0===this.props.totalIncorrect?"modal__table-container--invisible":"modal__table-container",children:Object(c.jsxs)("table",{className:"modal__table",children:[Object(c.jsx)("caption",{children:"Questions with wrong answers are listed below:"}),Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"No"}),Object(c.jsx)("th",{children:"Question"}),Object(c.jsx)("th",{children:"Correct answer"})]})}),Object(c.jsx)("tbody",{children:this.props.wrongAnswers.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t+1}),Object(c.jsx)("td",{children:e.formula}),Object(c.jsx)("td",{children:e.correctAnswer})]},t)}))})]})}),Object(c.jsxs)("form",{className:"modal__submit-score-form",onSubmit:function(t){e.props.handleSubmitScore(t),e.refreshInput()},children:[Object(c.jsxs)("label",{className:"modal__name-label",htmlFor:"modal__name-input",children:["Enter your name and submit your result",Object(c.jsx)("input",{id:"modal__name-input",onChange:function(t){return e.props.handlePlayerName(t.target.value)},ref:function(t){return e._input=t}})]}),Object(c.jsx)("button",{className:"modal__submit-btn",children:"Submit score"})]})]})})}}]),_}(o.Component)},function(e,t,_){"use strict";_.d(t,"a",(function(){return a}));_(59);var n=_(0);function a(e){var t=e.langEng?"en":"ru";return Object(n.jsxs)("div",{className:"intro__container section-container",children:[Object(n.jsx)("h2",{className:"intro__title section-title",children:e.content.intro.title[t]}),Object(n.jsx)("p",{className:"intro__text",children:e.content.intro.text[t]}),Object(n.jsxs)("ol",{className:"intro__list",children:[Object(n.jsx)("li",{className:"intro__item",children:e.content.intro.item1[t]}),Object(n.jsx)("li",{className:"intro__item",children:e.content.intro.item2[t]}),Object(n.jsx)("li",{className:"intro__item",children:e.content.intro.item3[t]}),Object(n.jsx)("li",{className:"intro__item",children:e.content.intro.item4[t]})]}),Object(n.jsx)("button",{className:"intro__start-btn",onClick:function(){window.location+="game"},children:e.content.intro.btn[t]})]})}},,function(e,t,_){"use strict";_.d(t,"a",(function(){return l}));var n=_(6),a=_(7),s=_(9),r=_(8),i=_(1),o=(_(40),_(41),_(0));function c(e){var t=e.tasks[e.currentQuestionNo],_=e.tasks[e.currentQuestionNo].allResults[e.index];return Object(o.jsx)("div",{className:"gamepad__btn",onMouseUp:function(n){e.handlePassedTask(n,t,_)},children:Object(o.jsx)("span",{className:"gamepad__btn-text",children:_})})}var l=function(e){Object(s.a)(_,e);var t=Object(r.a)(_);function _(e){var a;return Object(n.a)(this,_),(a=t.call(this,e)).props=e,a.answersIndexes=a.randomizeAnswers(),a}return Object(a.a)(_,[{key:"randomizeAnswers",value:function(){for(var e=[],t=0;t<4;t++){var _=Math.floor(4*Math.random());e.includes(_)?t--:e.push(_)}return e}},{key:"render",value:function(){var e=this;return this.props.isDone||(this.answersIndexes=this.randomizeAnswers()),Object(o.jsxs)("div",{className:"gamepad",children:[Object(o.jsx)("div",{className:"gamepad__formula",children:Object(o.jsx)("span",{className:"gamepad__formula-text",children:this.props.tasks[this.props.currentQuestionNo].formula})}),Object(o.jsx)("div",{className:"gamepad__btn-container",children:this.answersIndexes.map((function(t){return Object(o.jsx)(c,{index:t,tasks:e.props.tasks,currentQuestionNo:e.props.currentQuestionNo,handlePassedTask:e.props.handlePassedTask,handleCompletedGame:e.props.handleCompletedGame,handlePushedBtn:e.props.handlePushedBtn},t)}))})]})}}]),_}(i.PureComponent)},function(e,t,_){"use strict";_.d(t,"a",(function(){return i}));var n=_(13),a=(_(57),_(58),_(0));function s(e){var t="en"===e.lang?"en-GB":"RU",_=new Intl.DateTimeFormat(t,{hour:"numeric",minute:"numeric",year:"numeric",month:"long",day:"numeric"}).format(e.date);return Object(a.jsxs)("li",{className:"highscores__record",title:_,children:[Object(a.jsx)("span",{children:"".concat(e.index,". ").concat(e.name)}),Object(a.jsx)("span",{children:e.score})]})}var r=_(1);function i(e){var t,_=null!==(t=JSON.parse(localStorage.getItem("scoreRecords")))&&void 0!==t?t:[{name:"No records"}],i=e.langEng?"en":"ru";return Object(a.jsxs)("div",{className:"highscores__container section-container",children:[Object(a.jsx)("h2",{className:"highscores__title section-title",children:e.content.highscores.title[i]}),Object(a.jsx)("ul",{className:"highscores__list",children:_.map((function(t,_){return Object(r.createElement)(s,Object(n.a)(Object(n.a)({},e),{},{key:_,index:_+1,name:t.name,score:t.score,date:t.date}))}))})]})}},function(e,t,_){"use strict";_.d(t,"a",(function(){return s}));_(60);var n=_.p+"static/media/question-diamond-fill.154c3253.svg",a=_(0);function s(e){return Object(a.jsx)("button",{className:e.hintsOn?"help-me-btn":"help-me-btn help-me-btn--disabled",onClick:e.handleHelpMe,style:{backgroundImage:"url(".concat(n,")")}})}},function(e,t,_){"use strict";_.d(t,"a",(function(){return u}));var n=_(11),a=(_(61),_(6)),s=_(7),r=_(9),i=_(8),o=_(1),c=(_(62),_(0)),l=function(e){Object(r.a)(_,e);var t=Object(i.a)(_);function _(){return Object(a.a)(this,_),t.apply(this,arguments)}return Object(s.a)(_,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{children:Object(c.jsxs)("label",{htmlFor:"wheel",children:[Object(c.jsx)("div",{className:"custom-wheel__container",children:Object(c.jsx)("div",{className:"custom-wheel__ruler"})}),Object(c.jsx)("input",{type:"range",ref:function(t){return e._range=t},id:"wheel",min:"5",max:"30",step:"5",defaultValue:this.props.defaultValue,onChange:this.props.handleWheel})]})})}}]),_}(o.Component);function u(e){var t=e.langEng?"en":"ru";return Object(c.jsxs)("div",{className:"options__container section-container",children:[Object(c.jsx)("h2",{className:"options__title section-title",children:e.content.options.title[t]}),Object(c.jsxs)("ul",{className:"options__list",children:[Object(c.jsxs)("li",{className:"options__item",children:[Object(c.jsx)("div",{children:e.content.options.timer[t]}),Object(c.jsx)(n.a,{config:{unit:"timer",option:"timerOn",defaultValue:e.defaultGameConfig.timerOn},handleSwitch:e.handleSwitch})]}),Object(c.jsxs)("li",{className:"options__item",children:[Object(c.jsx)("div",{children:e.content.options.hints[t]}),Object(c.jsx)(n.a,{config:{unit:"hints",option:"hintsOn",defaultValue:e.defaultGameConfig.hintsOn},handleSwitch:e.handleSwitch})]}),Object(c.jsxs)("li",{className:"options__item",children:[Object(c.jsx)("div",{children:e.content.options.nosimple[t]}),Object(c.jsx)(n.a,{config:{unit:"noSimple",option:"noSimpleOn",defaultValue:e.defaultGameConfig.noSimpleOn},handleSwitch:e.handleSwitch})]}),Object(c.jsxs)("li",{className:"options__item",children:[Object(c.jsx)("div",{children:e.content.options.questAmount[t]}),Object(c.jsx)(l,{handleWheel:e.handleWheel,defaultValue:e.defaultGameConfig.questAmount})]})]})]})}},function(e,t,_){"use strict";_.r(t);_(1);var n=_(19),a=_.n(n),s=_(20),r=_(0);a.a.render(Object(r.jsx)(s.a,{}),document.querySelector("#root"))},,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){},,function(e,t,_){},function(e,t,_){},function(e,t,_){},,,,,,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){}],[[34,1,2]]]);
//# sourceMappingURL=main.b6a14035.chunk.js.map