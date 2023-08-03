const body = document.querySelector("body");
const dark_mode = document.querySelector(".dark-mode");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
	body.classList.add("dark");
	dark_mode.classList.add("active");
}

dark_mode.addEventListener("click", () => {
	dark_mode.classList.toggle("active");
	body.classList.toggle("dark");

	if(!body.classList.contains("dark")){
		return localStorage.setItem("mode", "light");
	}

	localStorage.setItem("mode", "dark");
});

function toggle() {
	var sec = document.getElementById('sec');
	var nav = document.getElementById('navigation');
	sec.classList.toggle('active');
	nav.classList.toggle('active');
}
