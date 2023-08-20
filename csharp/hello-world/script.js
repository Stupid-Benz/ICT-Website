const body = document.querySelector("body");
const dark_mode = document.querySelector(".dark-mode");
const add_font_size = document.querySelector(".fa-plus");
const minus_font_size = document.querySelector(".fa-minus");
const font = document.querySelector(".font");
const disable_overlay = document.querySelector(".disable-overlay");

document.querySelector(".clear").addEventListener("click", ()=>{
	localStorage.clear();
	location.reload();
});

let disableOverlay = localStorage.getItem("disableOverlay");
if (disableOverlay) {
	document.querySelector(".overlay").setAttribute("style", "display: none;");
}

disable_overlay.addEventListener("click", ()=>{
	document.querySelector(".overlay").setAttribute("style", "display: none;");
	localStorage.setItem("disableOverlay", true);
})


let font_size = localStorage.getItem("font-size");
if (font_size != '0' && font_size) {
	body.style.fontSize = font_size.toString() + "em";
	if (font_size >= 1.5) {
		font.style.fontSize = "0.8em";
	}
	else if (font_size <= 0.8) {
		font.style.fontSize = "1.5em";
	}
}
else {
	font_size = '1';
}


add_font_size.addEventListener("click", () => {
	font_size *= 1.25;
	font_size = Math.round(font_size * 100) / 100;
	body.style.fontSize = font_size.toString() + "em";
	localStorage.setItem("font-size", font_size);
	font.value = font_size;
	if (font_size >= 1.5) {
		font.style.fontSize = "0.8em";
	}
	else if (font_size <= 0.8) {
		font.style.fontSize = "1.5em";
	}
	else {
		font.style.fontSize = "1em";
	}
})

minus_font_size.addEventListener("click", () => {
	font_size *= 0.8;
	font_size = Math.round(font_size * 100) / 100;
	body.style.fontSize = font_size.toString() + "em";
	localStorage.setItem("font-size", font_size);
	font.value = font_size;
	if (font_size < 1.5) {
		font.style.fontSize = "1em";
	}
	else if (font_size <= 0.8) {
		font.style.fontSize = "1.5em";
	}
})

font.value = font_size
font.addEventListener("blur", () => {
	font_size = font.value;
	font_size = Math.round(font_size * 100) / 100;
	font.value = font_size;
	body.style.fontSize = font_size.toString() + "em";
	localStorage.setItem("font-size", font_size);
	if (font_size >= 1.5) {
		font.style.fontSize = "0.8em";
	}
	else if (font_size < 1.5 && font_size > 0.8) {
		font.style.fontSize = "1em";
	}
	else {
		font.style.fontSize = "1.5em";
	}
})


function swapcss(sheet) {
	document.getElementById("css").setAttribute("href", sheet);
}

function swapbanner(banner) {
	document.getElementById("banner").setAttribute("src", banner);
}

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
	body.classList.add("dark");
	dark_mode.classList.add("active");
	swapcss("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/dark.min.css");
	swapbanner("../../assets/dark.gif");
}

dark_mode.addEventListener("click", () => {
	dark_mode.classList.toggle("active");
	body.classList.toggle("dark");

	if (!body.classList.contains("dark")) {
		swapcss("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css");
		swapbanner("../../assets/default.gif");
		return localStorage.setItem("mode", "light");
	}
	else {
		swapcss("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/dark.min.css");
		swapbanner("../../assets/dark.gif");
	}
	localStorage.setItem("mode", "dark");
});

function toggle() {
	var sec = document.getElementById('sec');
	var nav = document.getElementById('navigation');
	sec.classList.toggle('active');
	nav.classList.toggle('active');
	body.classList.toggle('active');
}