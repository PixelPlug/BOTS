}

var mentioned = false;
var clicked = false;
var skipped = false;
var predictor = false;
var timeToWait = 600000;
var clickWait = 5000;
var skipWait = 2000;
var timePassed = 0;
var clickPassed = 0;
var skipPassed = 0;
var predictPassed = 0;
var timer = null;
var clickTimer = null;
var skipTimer = null;
var predictTimer = null;
var COOKIE_WOOT = 'autowoot';
var COOKIE_QUEUE = 'autoqueue';
var COOKIE_STREAMING = 'streaming';
var COOKIE_HIDE_VIDEO = 'hidevideo';
var COOKIE_LEFT = 'left';
var MAX_USERS_WAITLIST = 50;

var rulesMsg = "1- Tempo máximo para musicas: 6 minutos e 30 segundos. 2- Não escrever em /me e /em. 3- Respeitar os moderadores da sala. 4- Sem Flood no chat . 5- Não fique pedindo cargo.";
var rulesMsg2 = "Temas permitidos: Electro , Dubstep , Techno , Trap , EDM .";
var rulesMsg3 = "";
var linksMsg = [""];
var skipMsg = ["Por favor, não nos mande pular a música, nós decidimos se pulamos ou não!!"];
var fansMsg = ["Ganhe seus fãs tocando músicas boas e interagindo com todos :)."];
var wafflesMsg = ["Entrem no nosso grupo no facebook, lá voce ficará por dentro de tudo que rola na EDT : https://www.facebook.com/groups/EDTplugdj/ "];
var bhvMsg = ["Não venha com macacada aqui, porfavor!"];
var sleepMsg = ["Indo descansar um pouco, mas tarde to de volta :)"];
var workMsg = ["Vou ficar um pouco ocupado agora, mencione se for importante!"];
var afkMsg = ["Ausente no momento, volto logo!"];
var backMsg = ["To de volta negada :)"];

var autoAwayMsg = ["Eu estou em uma aventura (AUSENTE)"];
var autoSlpMsg = ["Descansando no momento ..."];
var autoWrkMsg = ["Nao pude te responder agora, na volta irei responder."];

var styles = [
            '.sidebar {position: fixed; top: 0; height: 100%; width: 200px; z-index: 99999; background-image: linear-gradient(bottom, #000000 0%, #3B5678 100%);background-image: -o-linear-gradient(bottom, #000000 0%, #3B5678 100%);background-image: -moz-linear-gradient(bottom, #000000 0%, #3B5678 100%);background-image: -webkit-linear-gradient(bottom, #000000 0%, #3B5678 100%);background-image: -ms-linear-gradient(bottom, #000000 0%, #3B5678 100%);background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0, #000000),color-stop(1, #3B5678));}',
            '.sidebar#side-right {right: -190px;z-index: 99999;}',
            '.sidebar#side-left {left: -190px; z-index: 99999; }',
            '.sidebar-handle {width: 12px;height: 100%;z-index: 99999;margin: 0;padding: 0;background: rgb(96, 141, 197);box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .9);cursor: "ne-resize";}',
            '.sidebar-handle span {display: block;position: absolute;width: 10px;top: 50%;text-align: center;letter-spacing: -1px;color: #000;}',
            '.sidebar-content {position: absolute;width: 185px;height: 100%; padding-left: 15px}',
            '.sidebar-content2 {position: absolute;width: 185px;height: 100%; overflow: auto}',
            '.sidebar-content2 h3 {font-weight: bold; padding-left: 5px; padding-bottom: 5px; margin: 0;}',
            '.sidebar-content2 a {font-weight: bold; font-size: 13px; padding-left: 5px;}',
            '#side-right .sidebar-handle {float: left;}',
            '#side-left .sidebar-handle {float: right;}',
            '#side-right a {display: block;min-width: 100%;cursor: pointer;padding: 4px 5px 8px 5px;border-radius: 4px;font-size: 13px;}',
            '.sidebar-content2 span {display: block; min-width: 94%;cursor: pointer;border-radius: 4px; padding: 0 5px 0 5px; font-size: 12px;}',
            '#side-right a span {padding-right: 8px;}',
            '#side-right a:hover {background-color: rgba(97, 146, 199, 0.65);text-decoration: none;}',
            '.sidebar-content2 span:hover {background-color: rgba(97, 146, 199, 0.65);text-decoration: none;}',
            '.sidebar-content2 a:hover {text-decoration: none;}',
            '.chat-bouncer {background: url(http://i.imgur.com/9qWWO4L.png) no-repeat 0 5px;padding-left: 17px;width: 292px;}',
            '.chat-manager {background: url(http://i.imgur.com/hqqhTcp.png) no-repeat 0 5px;padding-left: 17px;width: 292px;}',
            '.chat-cohost {background: url(http://i.imgur.com/njajqVG.png) no-repeat 0 5px;padding-left: 17px;width:292px;}',
            '.chat-host {background: url(http://i.imgur.com/njajqVG.png) no-repeat 0 5px;padding-left: 17px;width: 292px;}',
            '#dj-console, #dj-console {background-image: url(http://i.imgur.com/gqdMdaz.gif);min-height:33px;min-width:131px;}',
            '.chat-from-you {color: #0099FF;font-weight: bold;margin-top: 0px; padding-top: 0px;}',
            '.chat-from-featureddj {color: rgb(255, 0, 135); font-weight: bold; margin-top: 0px; padding-top: 0px;}',
            '.chat-from-bouncer {color: rgb(199, 0, 199); font-weight: bold; margin-top: 0px; padding-top: 0px;}',
            '.chat-from-manager {color: rgb(255, 199, 148); font-weight: bold; margin-top: 0px; padding-top: 0px;}',
            '.chat-from-cohost {color: rgb(255, 92, 0); font-weight: bold; margin-top: 0px; padding-top: 0px;}',
            '.chat-from-host {color: #32CD32;font-weight: bold;margin-top: 0px; padding-top: 0px;}',
            '#user-points-title {color: #FFFFFF; position: absolute; left: 36px; font-size: 10px;}',
            '#user-fans-title {color: #FFFFFF; position: absolute; left: 29px; font-size: 10px;}',
            '.meta-header span {color: rgba(255, 255, 255, 0.79); position: absolute; left: 15px; font-size: 10px;}',
            '#button-lobby {background-image: url(http://i.imgur.com/brpRaSY.png);}',
            '#volume-bar-value {background-image: url(http://i.imgur.com/xmyonON.png) ;}',
            '.chat-message:nth-child(2n), .chat-mention:nth-child(2n), .chat-skip:nth-child(2n), .chat-moderation:nth-child(2n), .chat-emote:nth-child(2n), .chat-update:nth-child(2n) {background-color: rgba(26, 26, 26, 0.65);}',
            '.frame-background {background-color: rgba(0, 0, 0, 0.8);}',
            '#hr-div {height: 100%; width: 100%;margin: 0;padding-left: 12px;}',
            '#hr2-div2 {height: 100%; width: 100%;margin: 0;}',
            '#hr-style {position: absolute;display: block;height: 20px;width: 100%;bottom: 0%;background-image: url(http://i.imgur.com/jQhf3BW.png);}',
            '#hr2-style2 {position: absolute;display: block;height: 20px;width: 94%%;bottom: 0%;background-image: url(http://i.imgur.com/jQhf3BW.png);}',
            '#side-left h3 {padding-left: 5px}',
            '::-webkit-scrollbar {height: 6px; width: 6px;}',
            '::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); -webkit-border-radius: 6px;border-radius: 6px;}',
            '::-webkit-scrollbar-thumb {-webkit-border-radius: 2px;border-radius: 6px;background: rgba(232,37,236,0.8); -webkit-box-shadow: inset 0 0 4px rgba(0,0,0,0.5);}',
            '::-webkit-scrollbar-thumb:window-inactive {background: rgba(232,37,236,0.4);}',
];

var scripts = [
            '(function(e){e.fn.hoverIntent=function(t,n,r){var i={interval:100,sensitivity:7,timeout:0};if(typeof t==="object"){i=e.extend(i,t)}else if(e.isFunction(n)){i=e.extend(i,{over:t,out:n,selector:r})}else{i=e.extend(i,{over:t,out:t,selector:n})}var s,o,u,a;var f=function(e){s=e.pageX;o=e.pageY};var l=function(t,n){n.hoverIntent_t=clearTimeout(n.hoverIntent_t);if(Math.abs(u-s)+Math.abs(a-o)<i.sensitivity){e(n).off("mousemove.hoverIntent",f);n.hoverIntent_s=1;return i.over.apply(n,[t])}else{u=s;a=o;n.hoverIntent_t=setTimeout(function(){l(t,n)},i.interval)}};var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t);t.hoverIntent_s=0;return i.out.apply(t,[e])};var h=function(t){var n=jQuery.extend({},t);var r=this;if(r.hoverIntent_t){r.hoverIntent_t=clearTimeout(r.hoverIntent_t)}if(t.type=="mouseenter"){u=n.pageX;a=n.pageY;e(r).on("mousemove.hoverIntent",f);if(r.hoverIntent_s!=1){r.hoverIntent_t=setTimeout(function(){l(n,r)},i.interval)}}else{e(r).off("mousemove.hoverIntent",f);if(r.hoverIntent_s==1){r.hoverIntent_t=setTimeout(function(){c(n,r)},i.timeout)}}};return this.on({"mouseenter.hoverIntent":h,"mouseleave.hoverIntent":h},i.selector)}})(jQuery)',
            'if (jQuery.easing.easeOutCirc === undefined) jQuery.easing.easeOutCirc = function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a}',
            '$("#side-right").hoverIntent(function() {var timeout_r = $(this).data("timeout_r");if (timeout_r) {clearTimeout(timeout_r);}$(this).animate({"right": "0px"}, 500, "easeOutCirc");}, function() {$(this).data("timeout_r", setTimeout($.proxy(function() {$(this).animate({"right": "-190px"}, 500, "easeOutCirc");}, this), 500));});',
];

function initAPIListeners() {
API.on(API.DJ_ADVANCE, djAdvanced);
   API.on(API.CHAT, autoRespond);
   API.on(API.DJ_UPDATE, queueUpdate);
   API.on(API.VOTE_UPDATE, function (obj) {
             populateUserlist();

     });
API.on(API.USER_JOIN, function (user) {
           populateUserlist();
     });
     API.on(API.USER_LEAVE, function (user) {
             populateUserlist();
     });
}
