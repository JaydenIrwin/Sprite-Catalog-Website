function showSprite(title, id, artistName, licence) {
	$("#modal-dark-overlay").css("display", "flex");
	$("#sprite-title").text(title);
	$("#sprite-preview").attr("src", "/sprite/" + id + ".png");

	let artistLink = $("#artist-link");
	artistLink.text(artistName);
	artistLink.attr("href", urlForArtist(artistName));

	let licenceLink = $("#licence-link");
	switch (licence) {
		case "CC0":
		licenceLink.text("Public Domain");
		licenceLink.attr("href", "https://creativecommons.org/publicdomain/zero/1.0/");
		break;
		case "CC BY":
		licenceLink.text("Attribution");
		licenceLink.attr("href", "https://creativecommons.org/licenses/by/4.0");
		break;
		case "CC BY-SA":
		licenceLink.text("Attribution-Share Alike");
		licenceLink.attr("href", "https://creativecommons.org/licenses/by-sa/4.0");
		break;
		case "CC BY-NC":
		licenceLink.text("Attribution-Non Commercial");
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

function urlForArtist(artistName) {
	switch (artistName) {
		case "Alex's Assets":
            return "https://itch.io/profile/alexs-assets";
        case "Alvoria":
            return "https://www.minecraftforum.net/members/Alvoria";
        case "AngryMeteor.com":
            return "www.angrymeteor.com";
        case "Anonymous":
            return "";
        case "ansimuz":
            return "http://www.patreon.com/ansimuz";
        case "Blarumyrran":
            return "https://opengameart.org/users/blarumyrran";
        case "bart":
            return "http://www.patreon.com/opengameart";
        case "Beast Pixels":
            return "https://beast-pixels.itch.io";
        case "Bonsaiheldin":
            return "http://bonsaiheld.org";
        case "devurandom":
            return "https://opengameart.org/users/devurandom";
        case "Eikester":
            return "https://opengameart.org/users/eikester";
        case "joemaya":
            return "https://opengameart.org/users/joemaya";
        case "Josehzz":
            return "https://opengameart.org/users/josehzz";
        case "Jayden Irwin":
            return "https://www.jaydenirwin.com/";
        case "Pixel-Boy & AAA":
            return "https://twitter.com/2Pblog1";
        case "polyphorge":
            return "https://polyphorge.itch.io/";
        case "Limofeus":
            return "https://limofeus.itch.io/";
        case "Lucas312":
            return "https://opengameart.org/users/lucas312";
        case "Gentile Cat Studio":
            return "https://gentlecatstudio.itch.io/";
        case "Gif":
            return "https://twitter.com/gif_not_jif";
        case "Ghostpixxells":
            return "https://ghostpixxells.itch.io";
        case "GrafxKid":
            return "https://twitter.com/GrafxKid";
        case "Romain Oltra":
            return "https://www.artstation.com/imanor";
        case "Henry Software":
            return "https://henrysoftware.itch.io/";
        case "hippo":
            return "https://opengameart.org/users/hippo";
        case "Kyrise":
            return "https://www.ascensiongamedev.com/profile/1137-kyrise/";
        case "Macko":
            return "";
        case "Megacrash":
            return "https://megacrash.itch.io/";
        case "Mobius_Peverell":
            return "https://www.curseforge.com/members/mobius_peverell/";
        case "uheartbeast":
            return "http://www.patreon.com/uheartbeast";
        case "loel":
            return "https://opengameart.org/users/loel";
        case "RedVoxel":
            return "https://red-voxel.itch.io/";
        case "Refuzzle":
            return "https://opengameart.org/users/refuzzle";
        case "SciGho":
            return "https://itch.io/profile/ninjikin";
        case "Shepardskin":
            return "https://opengameart.org/users/shepardskin";
        case "Stealthix":
            return "https://www.patreon.com/Stealthix";
        case "StormtrooperJon":
            return "https://opengameart.org/users/stormtrooperjon";
		default:
			return "";
	}
}

function closeSprite() {
	$("#modal-dark-overlay").hide();
}