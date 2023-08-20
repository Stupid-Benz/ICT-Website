const body = document.querySelector("body");
const dark_mode = document.querySelector(".dark-mode");
const add_font_size = document.querySelector(".fa-plus");
const minus_font_size = document.querySelector(".fa-minus");
const grids = document.querySelectorAll(".grid");
const font = document.querySelector(".font");

let font_size = localStorage.getItem("font-size");
if (font_size != '0' && font_size) {
	body.style.fontSize = font_size.toString() + "em";
	if (font_size > 1.5) {
		grids.forEach((grid) => {
			grid.classList.add("two-column");
		});
	}
}
else {
	font_size = '1';
}

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
	body.classList.add("dark");
	dark_mode.classList.add("active");
}

dark_mode.addEventListener("click", () => {
	dark_mode.classList.toggle("active");
	body.classList.toggle("dark");

	if (!body.classList.contains("dark")) {
		return localStorage.setItem("mode", "light");
	}

	localStorage.setItem("mode", "dark");
});

add_font_size.addEventListener("click", () => {
	font_size *= 1.25;
	font_size = Math.round(font_size * 100) / 100;
	body.style.fontSize = font_size.toString() + "em";
	localStorage.setItem("font-size", font_size);
	font.value = font_size;
	if (font_size >= 1.5) {
		grids.forEach((grid) => {
			if (grid.classList.contains("two-column")) {
				grid.classList.add("two-column");
			}
		});
	}
})

minus_font_size.addEventListener("click", () => {
	font_size *= 0.8;
	font_size = Math.round(font_size * 100) / 100;
	body.style.fontSize = font_size.toString() + "em";
	localStorage.setItem("font-size", font_size);
	font.value = font_size;
	if (font_size < 1.5) {
		grids.forEach((grid) => {
			if (grid.classList.contains("two-column")) {
				grid.classList.remove("two-column");
			}
		});
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
		grids.forEach((grid) => {
			if (grid.classList.contains("two-column")) {
				grid.classList.add("two-column");
			}
		});
	}
	else {
		grids.forEach((grid) => {
			if (grid.classList.contains("two-column")) {
				grid.classList.remove("two-column");
			}
		});
	}
})

function toggle() {
	var sec = document.getElementById('sec');
	var nav = document.getElementById('navigation');
	sec.classList.toggle('active');
	nav.classList.toggle('active');
	body.classList.toggle('active');
}


/* 
 * (class)Progress<nowValue, minValue, maxValue>
 */

//helper function-> return <DOMelement>
function elt(type, prop, ...childrens) {
	let elem = document.createElement(type);
	if (prop) Object.assign(elem, prop);
	for (let child of childrens) {
		if (typeof child == "string") elem.appendChild(document.createTextNode(child));
		else elem.appendChild(elem);
	}
	return elem;
}

//Progress class
class Progress {
	constructor(now, min, max, options) {
		this.dom = elt("div", {
			className: "progress-bar"
		});
		this.min = min;
		this.max = max;
		this.intervalCode = 0;
		this.now = now;
		this.syncState();
		if (options.parent) {
			document.querySelector(options.parent).appendChild(this.dom);
		}
		else document.body.appendChild(this.dom)
	}

	syncState() {
		this.dom.style.width = this.now + "%";
	}

	startTo(time) {
		let step = 1;
		if (this.intervalCode !== 0) return;
		this.intervalCode = setInterval(() => {
			console.log("sss")
			if (this.now + step > this.max) {
				this.now = this.max;
				this.syncState();
				clearInterval(this.interval);
				this.intervalCode = 0;
				return;
			}
			this.now += step;
			this.syncState()
		}, time)
	}
	end() {
		this.now = this.max;
		clearInterval(this.intervalCode);
		this.intervalCode = 0;
		this.syncState();
	}
}


let pb = new Progress(0, 0, 12.5, { parent: ".progress" });

//arg1 -> step length
//arg2 -> time(ms)

//end to progress after 5s
setTimeout(() => {
	pb.end()
}, 500)
