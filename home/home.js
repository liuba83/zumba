// Footer
const footer = document.querySelector(".footer-content");
const copyright = document.createElement("p");

footer.appendChild(copyright);

const today = new Date();
const thisYear = today.getFullYear();

copyright.textContent = `\u00A9 Hanna Kovalenko ${thisYear}`;
