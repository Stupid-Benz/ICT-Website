const body = document.querySelector("body");
const dark_mode = document.querySelector(".dark-mode");
const inputs = document.querySelectorAll(".input");
const test_01_01 = document.getElementById("test-01-01");
const test_01_02 = document.getElementById("test-01-02");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");


function swapcss(sheet) {
	document.getElementById("css").setAttribute("href", sheet);
}

function swapbanner(banner, saturate = "100%") {
	document.getElementById("banner").setAttribute("src", banner);
	document.getElementById("banner").setAttribute("style", `filter: saturate(${saturate});`);
}

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
	body.classList.add("dark");
	dark_mode.classList.add("active");
	swapcss("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/dark.min.css");
	swapbanner("../../assets/dark.gif", "68.5%");
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
		swapbanner("../../assets/dark.gif", "68.5%");
	}
	localStorage.setItem("mode", "dark");
});

hint.addEventListener("click", () => {
	hint.classList.toggle("active");

	if (hint.classList.contains("active")) {
		hint.value = "Hide Answer";
		test_01_01.classList.add("focus");
		test_01_02.classList.add("focus");
		test_01_01.value = "Console";
		test_01_02.value = "WriteLine";
		submit.style = "visibility: hidden;";
	}
	else {
		hint.value = "Show Answer";
		test_01_01.classList.remove("focus");
		test_01_02.classList.remove("focus");
		test_01_01.value = "";
		test_01_02.value = "";
		submit.style = "visibility: visible;";
	}
})

function toggle() {
	var sec = document.getElementById('sec');
	var nav = document.getElementById('navigation');
	sec.classList.toggle('active');
	nav.classList.toggle('active');
	body.classList.toggle('active');
}

function addcl() {
	this.classList.add("focus");
}

function remcl() {
	if (this.value == "") {
		this.classList.remove("focus");
	}
}

function checkPassword() {
	const disabled = test_01_01.value.length != 7 || test_01_02.value.length != 9;
	submit.disabled = disabled;
	submit.style = (disabled) ? 'background-image: linear-gradient(to right, #ff584d, #ff6359, #ff8880)' : 'background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f)';
}

inputs.forEach((input) => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
	input.addEventListener("keyup", checkPassword);
	input.value = "";
});