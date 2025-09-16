import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';


function clearContent() {
    document.getElementById("content").innerHTML = "";

}

function init() {
    const homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener("click", () => {
        clearContent();
        loadHome();

    });
    menuBtn.addEventListener("click", () => {
        clearContent();
        loadMenu();
    });

    contactBtn.addEventListener("click", () => {
        clearContent();
        loadContact();
    });
}



init();
loadHome();