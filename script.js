const body = document.querySelector("body");
const dark_mode = document.querySelector(".dark-mode");

function swapbanner(banner, saturate = "100%") {
	document.getElementById("banner").setAttribute("src", banner);
	document.getElementById("banner").setAttribute("style", `filter: saturate(${saturate});`);
}

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
	body.classList.add("dark");
	dark_mode.classList.add("active");
	swapbanner("dark.gif", "68.5%")
}

dark_mode.addEventListener("click", () => {
	dark_mode.classList.toggle("active");
	body.classList.toggle("dark");

	if (!body.classList.contains("dark")) {
		swapbanner("default.gif");
		return localStorage.setItem("mode", "light");
	}
	else {
		swapbanner("dark.gif", "68.5%");
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
