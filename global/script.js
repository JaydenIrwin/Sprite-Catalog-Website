function showSprite(title, id, artistName, licence) {
	$("#modal-dark-overlay").css("display", "flex");
	$("#sprite-title").text(title);
	$("#sprite-preview").attr("src", "/sprite/" + id + ".png");

	let artistLink = $("#artist-link");
	artistLink.text(artistName);
	artistLink.attr("href", "");

	let licenceLink = $("#licence-link");
	licenceLink.text(licence);
	licenceLink.attr("href", "");

	let downloadButton = $("#download");
	downloadButton.attr("download", title);
	downloadButton.attr("href", "/sprite/" + id + ".png");
}

function closeSprite() {
	$("#modal-dark-overlay").hide();
}