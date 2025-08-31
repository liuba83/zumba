// Footer
const footer = document.querySelector(".footer-par");
const copyright = document.createElement("p");

footer.appendChild(copyright);

const today = new Date();
const thisYear = today.getFullYear();

copyright.textContent = `\u00A9 Hanna Kovalenko ${thisYear}`;

// Language Toggle Functionality
const languageToggle = document.getElementById("languageToggle");
const langLabel = document.getElementById("langLabel");

// Translation mappings for key headings
const translations = {
  en: {
    aboutNav: "About",
    classesNav: "Classes",
    galleryNav: "Gallery",
    contactNav: "Contact",
    welcomeText: "Welcome to My Zumba World!",
    aboutHeading: "About",
    aboutText:
      " Hi there! My name is Hanna Kovalenko, and I am a licensed Zumba® Instructor, passionate about helping people connect with their bodies, uplift their spirits, and have fun through dance and movement. With certifications in Zumba® Basic 1, Zumba Gold®, and CIRCL Mobility™, I bring a unique blend of expertise to every class.",
    expertiseHeading: "My expertise is confirmed by licenses:",
    licenseTextOne: "CIRCL Mobility™ Instructor License (January 14, 2023)",
    licenseTextTwo: "Zumba® Basic 1 Instructor License (March 3, 2023)",
    licenseTextThree: "Zumba Gold® Instructor License (April 6, 2023)",
    classesHeading: "Why Zumba?",
    whyZumbaText:
      "Zumba® is more than just a workout – it's a way to feel energized, joyful, and in sync with yourself and others. It blends fitness with music and rhythm from around the globe, offering numerous benefits:",
    whyOne:
      "Physical Fitness: Improve your cardiovascular health, endurance, and coordination.",
    whyTwo: "Reduces Stress: Dance away your worries and leave with a smile.",
    whyThree:
      "Mental Well-being: Stay sharp and focused through the power of movement and music.",
    whyFour:
      "Community: Join a welcoming environment that celebrates every individual.",
    whyZumbaOffer: "If you don't know what Zumba is, please visit the",
    webLink: "official website.",
    ladderOne: "My classes",
    ladderOneTextOne:
      "I am a dedicated instructor who tailors each session to suit the unique needs of my students. Currently, I specialize in offering Zumba Gold® classes for individuals aged 40 and above. These sessions are carefully designed to provide a medium intensity yet invigorating experience, perfect for staying active and in harmony with your body and soul.",
    ladderOneTextTwo:
      "Each 30-minute Zumba Gold® class is a lively journey through various musical styles. You’ll groove to merengue, swing, tango, reggae, cumbia, flamenco, mambo, cha-cha-cha, merengue urbano, salsa, bachata, and many more.",
    ladderOneTextThree:
      "And for an extra tropical twist, I also offer Caribbean-style programs featuring Ska, Soca, and more. It’s an excellent opportunity to embrace the rhythm and energy of vibrant cultures.",
    ladderTwoHeaderOne: "Zumba Gold® Chair",
    ladderTwoHeaderTwo: "Benefits of Zumba Gold® Chair",
    zumbaChairText:
      "If you have any kind of moving issues, we can explore the Zumba Gold® Chair class. This program offers all the benefits of Zumba® while being seated, making it accessible for everyone. You can still enjoy the rhythm, movements, and energy in a way that suits your abilities.",
    ladderThree: "Group and Private classes",
    ladderThreeTextOne:
      "I offer both group and private classes to suit your preferences and schedule. Whether you enjoy the energy of dancing with others or prefer one-on-one sessions tailored to your specific needs, there’s an option for you.",
    ladderThreeTextTwo:
      "For information on actual prices, class schedules, and the addresses where group classes are held, please visit my official instructor page",
    ladderThreeTextThree:
      "Every class is a party – a Party for Your Heart! We’ll enjoy 8-9 songs that get you moving, smiling, and feeling amazing. Whether you’re looking to stay fit, recharge your energy, or simply have fun, Zumba® is the perfect escape.",
    benefitOne:
      "Improves Mobility: Gentle movements enhance joint flexibility and range of motion.",
    benefitTwo:
      "Boosts Mood: Enjoy the music and uplifting environment without worrying about standing.",
    benefitThree:
      "Inclusive Fitness: Designed for all fitness levels, ensuring everyone can participate.",
    joinHeader: "Join the Zumba Family",
    joinText:
      "Zumba® is more than just exercise; it’s a family. Together, we celebrate every step, every beat, and every achievement. So come join us and experience the joy, rhythm, and community of Zumba®. Let’s dance our way to better health and happiness!",
    galleryHeading: "Gallery",
    contactHeading: "Contact Me",
    contactMeButton: "Send Message",
  },
  uk: {
    aboutNav: "Про мене",
    classesNav: "Мої заняття",
    galleryNav: "Галерея",
    contactNav: "Контакти",
    welcomeText: "Ласкаво просимо до мого Zumba світу!",
    aboutHeading: "Про мене",
    aboutText:
      "Привіт! Мене звати  Ганна, і я ліцензований Zumba® інструктор, який із захопленням допомагає людям відчути своє тіло, підняти настрій і отримати задоволення через танець і рух. Завдяки сертифікаціям Zumba® Basic 1, Zumba Gold® та CIRCL Mobility™ я додаю у кожне заняття унікальне поєднання знань і досвіду.",
    expertiseHeading: "Моя експертність підтверджена ліцензіями:",
    licenseTextOne: "Ліцензія інструктора CIRCL Mobility™ (14 січня 2023)",
    licenseTextTwo: "Ліцензія інструктора Zumba® Basic 1 (3 березня 2023)",
    licenseTextThree: "Ліцензія інструктора Zumba Gold® (6 квітня 2023)",
    classesHeading: "Чому Zumba?",
    whyZumbaText:
      "Zumba® – це більше, ніж просто тренування. Це спосіб відчути заряд енергії, радість і гармонію із собою та оточенням. Поєднуючи фітнес із музикою та ритмами з усього світу, Zumba® пропонує безліч переваг:",
    whyOne:
      "Покращує фізичну форму: зміцнює серцево-судинну систему, витривалість і координацію.",
    whyTwo:
      "Зменшує стрес: танцюйте, забуваючи про турботи, і виходьте із заняття з посмішкою.",
    whyThree:
      " Підтримує ментальне здоров’я: рух і музика допомагають залишатися зосередженими та активними.",
    whyFour:
      "Створює відчуття спільноти: приєднуйтесь до дружньої атмосфери, де кожен – цінна частина команди.",
    whyZumbaOffer: "Якщо ви ще не знайомі з Zumba®, відвідайте ",
    webLink: "офіційний сайт.",
    ladderOne: "Мої заняття",
    ladderOneTextOne:
      "Я – відданий інструктор, який адаптує кожне заняття відповідно до унікальних потреб своїх учнів. Наразі я спеціалізуюся на проведенні занять Zumba Gold® для людей віком 40+. Ці тренування розроблені так, щоб забезпечити помірну, але водночас енергійну активність, яка допомагає залишатися в русі та гармонії з тілом і душею.",
    ladderOneTextTwo:
      "Кожне 30-хвилинне заняття Zumba Gold® – це захоплива подорож різними музичними стилями. Ви будете танцювати під ритми меренге, свінгу, танго, регі, кумбії, фламенко, мамбо, ча-ча-ча, урбан меренге, сальси, бачати та багатьох інших.",
    ladderOneTextThree:
      "А для ще більшої тропічної атмосфери я також пропоную карибську програму з такими стилями, як Ска, Сока та інші. Це чудова можливість відчути ритм і енергію яскравих культур!",
    ladderTwoHeaderOne: "Zumba Gold® На стільці",
    ladderTwoHeaderTwo: "Переваги Zumba Gold® На стільці",
    zumbaChairText:
      "Якщо у вас є труднощі з рухливістю, ви можете спробувати Zumba Gold® Chair – програму, яка зберігає всі переваги Zumba®, але виконується в сидячому положенні. Це робить заняття доступними для кожного, дозволяючи насолоджуватися ритмом, рухами та енергією у комфортному форматі.",
    ladderThree: "Групові та приватні заняття",
    ladderThreeTextOne:
      "Я пропоную як групові, так і приватні заняття, щоб ви могли обрати той формат, який найкраще відповідає вашим уподобанням і розкладу. Якщо вам подобається енергія спільних танців або ви віддаєте перевагу індивідуальним заняттям, адаптованим до ваших потреб, у мене є відповідний варіант для вас.",
    ladderThreeTextTwo:
      "Для отримання інформації про актуальні ціни, розклад занять і адреси місць проведення групових класів відвідайте мою офіційну сторінку інструктора",
    ladderThreeTextThree:
      "Кожне заняття – це справжня вечірка, Вечірка для вашого серця! Ми будемо насолоджуватися 8-9 запальними піснями, які змушують рухатися, посміхатися і відчувати себе чудово. Незалежно від того, чи хочете ви підтримувати форму, зарядитися енергією або просто весело провести час – Zumba® стане ідеальним способом втекти від буденності!",
    benefitOne:
      " Покращує рухливість – м’які рухи сприяють гнучкості суглобів і розширенню амплітуди рухів.",
    benefitTwo:
      "Підіймає настрій – музика та позитивна атмосфера подарують радість без необхідності стояти.",
    benefitThree:
      "Фітнес для всіх – програма підходить для будь-якого рівня фізичної підготовки, забезпечуючи комфортну участь кожного.",
    joinHeader: "Приєднуйтесь до Zumba-родини",
    joinText:
      "Zumba® – це більше, ніж просто фітнес, це сім’я. Разом ми святкуємо кожен рух, кожен ритм і кожне досягнення. Тож приєднуйтеся до нас, відчуйте радість, музику і силу спільноти!",
    galleryHeading: "Галерея",
    contactHeading: "Готові рухатися? Давайте Zumba!",
    contactMeButton: "Відправити повідомлення",
  },
};

function toggleLanguage() {
  const lang = languageToggle.checked ? "uk" : "en";
  langLabel.textContent = languageToggle.checked ? "УКР" : "EN";

  // Update the text of key sections
  const aboutNavElem = document.querySelector(".about-nav");
  const classesNavElem = document.querySelector(".classes-nav");
  const galleryNavElem = document.querySelector(".gallery-nav");
  const contactNavElem = document.querySelector(".contact-nav");
  const welcomeTextElem = document.querySelector(".hero h4");
  const aboutHeadingElem = document.querySelector("#about h2");
  const aboutTextElem = document.querySelector(".about-text");
  const expertiseHeadingElem = document.querySelector(".expertise");
  const licenseTextOneElem = document.querySelector(".license-1");
  const licenseTextTwoElem = document.querySelector(".license-2");
  const licenseTextThreeElem = document.querySelector(".license-3");
  const classesHeadingElem = document.querySelector(".why-zumba");
  const whyZumbaTextElem = document.querySelector(".why-zumba-text");
  const whyOneElem = document.querySelector(".why-1");
  const whyTwoElem = document.querySelector(".why-2");
  const whyThreeElem = document.querySelector(".why-3");
  const whyFourElem = document.querySelector(".why-4");
  const whyZumbaOfferElem = document.querySelector(".why-zumba-offer");
  const webLinkElem = document.querySelector(".web-link");
  const ladderOneElem = document.querySelector(".ladder-one h2");
  const ladderOneTextOneElem = document.querySelector(".ladder-one-text-one");
  const ladderOneTextTwoElem = document.querySelector(".ladder-one-text-two");
  const ladderOneTextThreeElem = document.querySelector(
    ".ladder-one-text-three"
  );
  const ladderTwoHeaderOneElem = document.querySelector(
    ".ladder-two-header-one"
  );
  const ladderTwoHeaderTwoElem = document.querySelector(
    ".ladder-two-header-two"
  );
  const zumbaChairTextElem = document.querySelector(".zumba-chair");
  const ladderThreeElem = document.querySelector(".ladder-three h2");
  const ladderThreeTextOneElem = document.querySelector(
    ".ladder-three-text-one"
  );
  const ladderThreeTextTwoElem = document.querySelector(
    ".ladder-three-text-two"
  );
  const ladderThreeTextThreeElem = document.querySelector(
    ".ladder-three-text-three"
  );
  const benefitOneElem = document.querySelector(".benefit-1");
  const benefitTwoElem = document.querySelector(".benefit-2");
  const benefitThreeElem = document.querySelector(".benefit-3");
  const joinHeaderElem = document.querySelector(".join-header");
  const joinTextElem = document.querySelector(".join-zumba");
  const galleryHeadingElem = document.querySelector("#gallery h2");
  const contactHeadingElem = document.querySelector("#contact h2");
  const contactMeButtonElem = document.querySelector(".contact-me-btn");

  if (aboutNavElem) aboutNavElem.textContent = translations[lang].aboutNav;
  if (classesNavElem)
    classesNavElem.textContent = translations[lang].classesNav;
  if (galleryNavElem)
    galleryNavElem.textContent = translations[lang].galleryNav;
  if (contactNavElem)
    contactNavElem.textContent = translations[lang].contactNav;
  if (welcomeTextElem)
    welcomeTextElem.textContent = translations[lang].welcomeText;
  if (aboutHeadingElem)
    aboutHeadingElem.textContent = translations[lang].aboutHeading;
  if (aboutTextElem) aboutTextElem.textContent = translations[lang].aboutText;
  if (expertiseHeadingElem)
    expertiseHeadingElem.textContent = translations[lang].expertiseHeading;
  if (licenseTextOneElem)
    licenseTextOneElem.textContent = translations[lang].licenseTextOne;
  if (licenseTextTwoElem)
    licenseTextTwoElem.textContent = translations[lang].licenseTextTwo;
  if (licenseTextThreeElem)
    licenseTextThreeElem.textContent = translations[lang].licenseTextThree;
  if (classesHeadingElem)
    classesHeadingElem.textContent = translations[lang].classesHeading;
  if (whyZumbaTextElem)
    whyZumbaTextElem.textContent = translations[lang].whyZumbaText;
  if (whyOneElem) whyOneElem.textContent = translations[lang].whyOne;
  if (whyTwoElem) whyTwoElem.textContent = translations[lang].whyTwo;
  if (whyThreeElem) whyThreeElem.textContent = translations[lang].whyThree;
  if (whyFourElem) whyFourElem.textContent = translations[lang].whyFour;
  if (whyZumbaOfferElem)
    whyZumbaOfferElem.textContent = translations[lang].whyZumbaOffer;
  if (webLinkElem) webLinkElem.textContent = translations[lang].webLink;
  if (ladderOneElem) ladderOneElem.textContent = translations[lang].ladderOne;
  if (ladderOneTextOneElem)
    ladderOneTextOneElem.textContent = translations[lang].ladderOneTextOne;
  if (ladderOneTextTwoElem)
    ladderOneTextTwoElem.textContent = translations[lang].ladderOneTextTwo;
  if (ladderOneTextThreeElem)
    ladderOneTextThreeElem.textContent = translations[lang].ladderOneTextThree;
  if (ladderTwoHeaderOneElem)
    ladderTwoHeaderOneElem.textContent = translations[lang].ladderTwoHeaderOne;
  if (ladderTwoHeaderTwoElem)
    ladderTwoHeaderTwoElem.textContent = translations[lang].ladderTwoHeaderTwo;
  if (zumbaChairTextElem)
    zumbaChairTextElem.textContent = translations[lang].zumbaChairText;
  if (ladderThreeElem)
    ladderThreeElem.textContent = translations[lang].ladderThree;

  if (ladderThreeTextOneElem)
    ladderThreeTextOneElem.textContent = translations[lang].ladderThreeTextOne;
  if (ladderThreeTextTwoElem)
    ladderThreeTextTwoElem.textContent = translations[lang].ladderThreeTextTwo;
  if (ladderThreeTextThreeElem)
    ladderThreeTextThreeElem.textContent =
      translations[lang].ladderThreeTextThree;

  if (benefitOneElem)
    benefitOneElem.textContent = translations[lang].benefitOne;
  if (benefitTwoElem)
    benefitTwoElem.textContent = translations[lang].benefitTwo;
  if (benefitThreeElem)
    benefitThreeElem.textContent = translations[lang].benefitThree;
  if (joinHeaderElem)
    joinHeaderElem.textContent = translations[lang].joinHeader;
  if (joinTextElem) joinTextElem.textContent = translations[lang].joinText;
  if (galleryHeadingElem)
    galleryHeadingElem.textContent = translations[lang].galleryHeading;
  if (contactHeadingElem)
    contactHeadingElem.textContent = translations[lang].contactHeading;
  if (contactMeButtonElem)
    contactMeButtonElem.textContent = translations[lang].contactMeButton;
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

//Gallery
const back = document.querySelector("#back");
const next = document.querySelector("#next");

const photos = [
  "gallery/01.jpg",
  "gallery/03.jpg",
  "gallery/04.jpg",
  "gallery/05.jpg",
  "gallery/06.jpg",
  "gallery/07.jpg",
  "gallery/08.jpg",
  "gallery/09.jpg",
  "gallery/10.jpg",
  "gallery/11.jpg",
  "gallery/12.jpg",
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
