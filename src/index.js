import loadHome from "./home";

function clearContent() {
    document.getElementById("content").innerHTML = "";

}

function init() {
    const homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener("click", () => {
        clearContent();
        loadHome();

    });

}


init();
loadHome();