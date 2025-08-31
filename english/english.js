//scroll on top when clicking logo
document.getElementById("logo").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

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
  "gallery/13.jpg",
  "gallery/14.jpg",
  "gallery/15.jpg",
  "gallery/16.jpg",
  "gallery/17.jpg",
  "gallery/18.jpg",
  "gallery/19.jpg",
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

// Footer
document.getElementById("year").textContent = new Date().getFullYear();
