const csharp = document.querySelector("#csharp");

csharp.addEventListener("mouseover", () => {
    csharp.querySelector(".list").setAttribute("style", "display: block;");
})

csharp.addEventListener("mouseout", () => {
    csharp.querySelector(".list").setAttribute("style", "display: none;");
})



function swapbanner(banner) {
    document.getElementById("banner").setAttribute("src", banner);
}

if (getMode && getMode === "dark") {
    swapbanner("../assets/dark.gif");
}

dark_mode.addEventListener("click", () => {
    if (!body.classList.contains("dark")) {
        swapbanner("../assets/default.gif");
    }
    else {
        swapbanner("../assets/dark.gif");
    }
});