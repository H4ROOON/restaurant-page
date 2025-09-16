export default function loadMenu() {
    const content = document.getElementById("content");
    const menuDiv = document.createElement("div");

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";

    const item1 = document.createElement("p");
    item1.textContent = "🍕 Pizza - $10";

    const item2 = document.createElement("p");
    item2.textContent = "🍔 Burger - $7";

    menuDiv.appendChild(headline);
    menuDiv.appendChild(item1);
    menuDiv.appendChild(item2);

    content.appendChild(menuDiv);
}
