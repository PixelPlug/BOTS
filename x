function animacao(obj) {
	var YY = -20;
	var XX = 1;
	var el = document.getElementById(obj);
	if(el.style.display != "block") {
		var teste = window.setInterval(function() {
		YY++;
		if (YY < 1) {
			el.style.display = "block";
			el.style.position = "relative";
			el.style.top=YY+document.body.scrollTop;
		}
	},20);
	}else {
	var teste = window.setInterval(function() {
		XX=XX-1;
		if (XX > -20) {
			el.style.top=XX+document.body.scrollTop;
		}else { clearInterval(teste);el.style.display = "none"; }
	},20);
	}
}
