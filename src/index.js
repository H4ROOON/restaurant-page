import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import './style.css';


function clearContent() {
    document.getElementById("content").innerHTML = "";

}

function init() {
    const homeBtn = document.getElementById("btn");
    homeBtn.addEventListener("click", () => {
        clearContent();
        loadHome();

    });
    const menuBtn = document.getElementById("menuBtn");
    menuBtn.addEventListener("click", () => {
        clearContent();
        loadMenu();
    });
    const contactBtn = document.getElementById("contactBtn");
    contactBtn.addEventListener("click", () => {
        clearContent();
        loadContact();
    });
}



init();
loadHome();