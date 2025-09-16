export default function loadContact() {
    const content = document.getElementById("content");
    const contactDiv = document.createElement("div");

    const headline = document.createElement("h1");
    headline.textContent = "Contact Us";

    const phone = document.createElement("p");
    phone.textContent = "📞 Phone: 123-456-789";

    const email = document.createElement("p");
    email.textContent = "📧 Email: contact@restaurant.com";

    contactDiv.appendChild(headline);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);

    content.appendChild(contactDiv);
}
