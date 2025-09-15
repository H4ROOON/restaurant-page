import './style.css';

document.body.innerHTML = `
  <h1>Welcome to My Restaurant</h1>
  <button id="btn">Click Me</button>
`;

document.getElementById("btn").addEventListener("click", () => {
    alert("Welcome to my restaurant!");
});
