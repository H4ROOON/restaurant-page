export default function loadHome() {

    const content = document.getElementById("content");
    const homeDiv = document.createElement("div");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Haroons restaurant";

    const para = document.createElement("p");
    para.textContent = ("We serve the most delicious food in the town");

    homeDiv.appendChild(headline);
    homeDiv.appendChild(para);

    content.appendChild(homeDiv);
}