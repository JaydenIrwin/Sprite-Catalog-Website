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

function showSprite(name, id, artistName, licence) {
	$("#modal-dark-overlay").attr("display", "flex");
	$("#sprite-name").textContent = name;
	$("#sprite-preview").attr("src", "/sprite/" + id + ".png");
	$("#artist-link").textContent = artistName;
	$("#licence-link").textContent = licence;
}

function closeSprite() {
	$("#modal-dark-overlay").hide();
}