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
	$("#modal-dark-overlay").css("display", "flex");
	$("#sprite-name").text(name);
	$("#sprite-preview").attr("src", "/sprite/" + id + ".png");

	let artistLink = $("#artist-link");
	artistLink.text(artistName);
	artistLink.attr("href", "");

	let licenceLink = $("#licence-link");
	licenceLink.text(licence);
	licenceLink.attr("href", "");

	let downloadButton = $("#download");
	downloadButton.attr("download", name);
	downloadButton.attr("href", "/sprite/" + id + ".png");
}

function closeSprite() {
	$("#modal-dark-overlay").hide();
}