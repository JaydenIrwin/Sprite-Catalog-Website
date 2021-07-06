function showSprite(title, id, artistName, licence) {
	$("#modal-dark-overlay").css("display", "flex");
	$("#sprite-title").text(title);
	$("#sprite-preview").attr("src", "/sprite/" + id + ".png");

	let artistLink = $("#artist-link");
	artistLink.text(artistName);
	switch (licence) {
		case "art":
		artistLink.attr("href", "");
		break;
		case "art":
		artistLink.attr("href", "");
		break;
		case "art":
		artistLink.attr("href", "");
		break;
		case "art":
		artistLink.attr("href", "");
		break;
		default:
		artistLink.attr("href", "");
		break;
	}

	let licenceLink = $("#licence-link");
	switch (licence) {
		case "CC0":
		licenceLink.text("Public Domain");
		licenceLink.attr("href", "https://creativecommons.org/publicdomain/zero/1.0/");
		break;
		case "CC BY":
		licenceLink.text("Free with Attribution");
		licenceLink.attr("href", "https://creativecommons.org/licenses/by/4.0");
		break;
		case "CC BY-SA":
		licenceLink.text("Free with Attribution-Share Alike");
		licenceLink.attr("href", "https://creativecommons.org/licenses/by-sa/4.0");
		break;
		case "CC BY-NC":
		licenceLink.text("Free for Personal Use");
		licenceLink.attr("href", "https://creativecommons.org/licenses/by-nc/4.0/");
		break;
		default:
		licenceLink.text(licence);
		licenceLink.attr("href", "");
		break;
	}

	let downloadButton = $("#download");
	downloadButton.attr("download", title);
	downloadButton.attr("href", "/sprite/" + id + ".png");
}

function closeSprite() {
	$("#modal-dark-overlay").hide();
}