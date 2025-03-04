// GSAP animation for hero text
// gsap.fromTo(
//   "h4",
//   { x: -50 },
//   { x: 1200, y: 10, scale: 2, opacity: 1, duration: 1.5 }
// );

// Video Skip Functionality
// const video = document.getElementById("zumbaVideo");
// const skipButton = document.getElementById("skipButton");

// if (video) {
//   // Show the skip button after 15 seconds
//   setTimeout(() => {
//     skipButton.style.display = "block";
//   }, 15000);

//   skipButton.addEventListener("click", () => {
//     video.pause();
//     // Optionally hide the video container once skipped
//     video.parentElement.style.display = "none";
//   });
// }

// Language Toggle Functionality
const languageToggle = document.getElementById("languageToggle");
const langLabel = document.getElementById("langLabel");

// Translation mappings for key headings
const translations = {
  en: {
    welcomeText: "Welcome to My Zumba World!",
    aboutHeading: "About",
    classesHeading: "Why Zumba?",
    galleryHeading: "Gallery",
    contactHeading: "Contact Me",
  },
  uk: {
    welcomeText: "Ласкаво просимо до мого світу Zumba!",
    aboutHeading: "Про мене",
    classesHeading: "Чому Zumba?",
    galleryHeading: "Галерея",
    contactHeading: "Зв'язатися зі мною",
  },
};

function toggleLanguage() {
  const lang = languageToggle.checked ? "uk" : "en";
  langLabel.textContent = languageToggle.checked ? "UK" : "EN";

  // Update the text of key sections
  const welcomeTextElem = document.querySelector(".hero h4");
  const aboutHeadingElem = document.querySelector("#about h2");
  const classesHeadingElem = document.querySelector("#classes h2");
  const videoHeadingElem = document.querySelector("#video h2");
  const galleryHeadingElem = document.querySelector("#gallery h2");
  const contactHeadingElem = document.querySelector("#contact h2");

  if (welcomeTextElem)
    welcomeTextElem.textContent = translations[lang].welcomeText;
  if (aboutHeadingElem)
    aboutHeadingElem.textContent = translations[lang].aboutHeading;
  if (classesHeadingElem)
    classesHeadingElem.textContent = translations[lang].classesHeading;
  if (videoHeadingElem)
    videoHeadingElem.textContent = translations[lang].videoHeading;
  if (galleryHeadingElem)
    galleryHeadingElem.textContent = translations[lang].galleryHeading;
  if (contactHeadingElem)
    contactHeadingElem.textContent = translations[lang].contactHeading;
}

languageToggle.addEventListener("change", toggleLanguage);

// ____________________
// Ladder
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".ladder-one, .ladder-two, .ladder-three"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show"); // Add show class with delay
          }, index * 700); // Adjust delay per element (300ms per element)
        } else {
          entry.target.classList.remove("show"); // Remove class when scrolling up
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});

// Working with contact form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from actually submitting

    alert("Thank you! Your message has been sent."); // Show confirmation message

    this.reset(); // Clear form fields
  });
