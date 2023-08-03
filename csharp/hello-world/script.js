const body = document.querySelector("body");
const dark_mode = document.querySelector(".dark-mode");

function swapcss(sheet) {
	document.getElementById("css").setAttribute("href", sheet)
}

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
	body.classList.add("dark");
	dark_mode.classList.add("active");
	swapcss("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/dark.min.css");
}

dark_mode.addEventListener("click", () => {
	dark_mode.classList.toggle("active");
	body.classList.toggle("dark");

	if (!body.classList.contains("dark")) {
		swapcss("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css");
		return localStorage.setItem("mode", "light");
	}
	else {
		swapcss("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/dark.min.css");
	}
	localStorage.setItem("mode", "dark");
});

function toggle() {
	var sec = document.getElementById('sec');
	var nav = document.getElementById('navigation');
	sec.classList.toggle('active');
	nav.classList.toggle('active');
}