function start() {
	//
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(start);

function showSprite() {
	$("#modal-dark-overlay").show();
}

function closeSprite() {
	$("#modal-dark-overlay").hide();
}