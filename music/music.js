// Footer
const footer = document.querySelector(".footer-content");
const copyright = document.createElement("p");

footer.appendChild(copyright);

const today = new Date();
const thisYear = today.getFullYear();

copyright.textContent = `\u00A9 Hanna Kovalenko ${thisYear}`;

//Gallery
const back = document.querySelector("#back");
const next = document.querySelector("#next");

const photos = [
  "gallery/1.jpg",
  "gallery/2.jpg",
  "gallery/3.jpg",
  "gallery/4.jpg",
  "gallery/5.jpg",
  "gallery/6.jpg",
  "gallery/7.jpg",
  "gallery/8.jpg",
  "gallery/9.jpg",
  "gallery/10.jpg",
  "gallery/11.jpg",
  "gallery/12.jpg",
];

let i = 0;

next.addEventListener("click", () => {
  i++;
  if (i > photos.length - 1) {
    i = 0;
  }
  document.querySelector("#pictures").src = photos[i];
});

back.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = photos.length - 1;
  }
  document.querySelector("#pictures").src = photos[i];
});

// Working with contact form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from actually submitting
  });
