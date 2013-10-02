function delay() {
        setTimeout("load();", 6000);
}

function load() {
  var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'http://cookies.googlecode.com/svn/trunk/jaaulde.cookies.js';
	script.onload = readCookies;
	head.appendChild(script);
}

function readCookies() {
	var currentDate = new Date();
	currentDate.setFullYear(currentDate.getFullYear() + 1);
    	var newOptions = {
    		expiresAt: currentDate
    	}
    	jaaulde.utils.cookies.setOptions(newOptions);
    	var value = jaaulde.utils.cookies.get(COOKIE_WOOT);
    	autowoot = value != null ? value : false;
    	value = jaaulde.utils.cookies.get(COOKIE_QUEUE);
    	autoqueue = value != null ? value : false;
    	value = jaaulde.utils.cookies.get(COOKIE_STREAMING);
    	streaming = value != null ? value: true;
    	value = jaaulde.utils.cookies.get(COOKIE_HIDE_VIDEO);
    	hideVideo = value != null ? value : false;
    	var value = jaaulde.utils.cookies.get(COOKIE_LEFT);
    	left = value != null ? value : false;
	onCookiesLoaded();
}

function onCookiesLoaded() {
	if (autowoot) {
		setTimeout("$('#button-vote-positive').click();", 7000);
	}
	if (autoqueue && !isInQueue()) {
		joinQueue();
	}
	if (hideVideo) {
		$('#yt-frame').animate({'height': (hideVideo ? '0px' : '271px')}, {duration: 'fast'});
		$('#playback .frame-background').animate({'opacity': (hideVideo ? '0' : '0.91')}, {duration: 'medium'});
	}
	if (left) {
		$(".sidebar#side-left").animate({"left": left ? "0px" : "-190px"}, 300, "easeOutCirc");
	}
	if (!audience) {
		$('#audience').hide();
	}
    	initAPIListeners();
    	displayUI();
    	initUIListeners();
    	populateUserlist();
}

var words = {
"Points" : "Pontos!",
"Now Playing" : "Now Spinning!",
"Time Remaining" : "Tempo Restante!",
"Volume" : "Ajustar Volume!",
"DJ Atual" : "DJ Atual",
"Crowd Response" : "Crowd Reaction!",
"Fans":"Parceros!"};

}
