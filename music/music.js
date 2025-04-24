// Footer
const footer = document.querySelector(".footer-content");
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
    journeyNav: "Journey",
    classesNav: "Services",
    contactNav: "Contact",
    galleryNav: "Gallery",
    welcomeText: "Welcome to My Musical World!",
    aboutText:
      "Hi, I'm Hanna Kovalenko, a passionate musician and dedicated music educator. Born and raised in Kremenchug, Ukraine, I have devoted my life to music, both as a performer and a teacher. My journey began at a young age, and over the years, I have honed my skills in voice, piano, and alto saxophone, always striving to inspire others through the beauty of music.",
    journeyHeader: "My Musical Journey",
    journeyTextOne:
      "Music has been a part of my life for as long as I can remember. With a strong voice and sharp ear, I started my musical path as a vocalist at children’s parties. Encouraged by my parents, I pursued formal training in piano and voice at the Kremenchug School of Music.",
    journeyTextTwo:
      " I continued my education at the Kremenchuk Pedagogical College named after A.S. Makarenko, where I trained to become a music-focused primary school teacher, shaping young musicians from their very first notes.",
    performanceHeader: "Performance and Achievements",
    performanceTextOne:
      " As a member of the vocal studio 'Obriy' for over 20 years, I performed as a soloist and soprano in a vocal quartet, which in 2001 was honored as a Folk Vocal Amateur Group. I expanded my skills by learning alto saxophone and blockflutes, and since 2006, I've been a wedding musician, combining vocals, saxophone, and songwriting.",
    performanceTextTwo:
      "I’ve also participated in “The Voice of Ukraine,” “Folk Star,” and city festivals—accompanying other singers and performing solo.",
    promotionHeader: "Promoting Ukrainian Culture",
    promotionText:
      "   I’m passionate about preserving and celebrating Ukrainian traditions through music. As part of the Ukrainian Music Theatre in Woodlands, I’ve performed at events like “Christmas Together” and “Borscht Cook-off.” In December 2024, I led Ukrainian carols at WoodsEdge Community Church, sharing music with American, Spanish, and Ukrainian communities.",
    teachingHeader: "Teaching & Sharing",
    teachingText:
      " I’ve worked in kindergartens as a music teacher and now teach Voice and Piano at Century Fine Arts in Sugar Land, TX. My private lessons are tailored to each student’s musical goals. If you or your child is interested in piano or voice, please fill out the contact form below!",

    joinHeader: "Let’s Make Music Together!",
    joinText:
      "  Whether you’re beginning your musical journey or want to deepen your skills, I’d love to help. Music is a gift—let's explore it together!",
    mediaHeader: "Hear My Voice & Me Playing Saxophone, Watch My Performances",
    contactHeader: "Contact Me",
    contactMeButton: "Send Message",
    galleryHeader: "Gallery",

    footer: "All Rights Reserved | 2025",
  },
  uk: {
    aboutNav: "Про мене",
    journeyNav: "Мій шлях",
    classesNav: "Послуги",
    contactNav: "Контакти",
    galleryNav: "Галерея",
    welcomeText: "Ласкаво запрошую до мого музичного світу!",
    aboutText:
      "Привіт! Я — Ганна Коваленко, пристрасна музикантка та віддана викладачка музики. Народжена в Кременчуці, Україна, я присвятила своє життя музиці — як виконавиця, так і педагогиня. Моя музична подорож почалася ще в дитинстві, і з роками я вдосконалювала свої навички у вокалі, грі на фортепіано та альт-саксофоні, завжди прагнучи надихати інших через красу музики.",
    journeyHeader: "Моя музична подорож",
    journeyTextOne:
      "Музика була частиною мого життя стільки, скільки я себе пам’ятаю. Маючи сильний голос і тонкий слух, я розпочала свій музичний шлях як вокалістка на дитячих святах. За підтримки батьків я почала здобувати професійну освіту з гри на фортепіано та вокалу в Кременчуцькій музичній школі, де активно брала участь у конкурсах, виступала як солістка хору та демонструвала свою майстерніть як піаніст. ",
    journeyTextTwo:
      "Моє навчання продовжилося в Кременчуцькому педагогічному училищі імені А.С. Макаренка, де я здобула кваліфікацію вчителя початкових класів зі спеціалізацією керівник дитячого хорового колективу. Це дало мені змогу викладати фортепіано, вокал і хоровий спів, формуючи молодих музикантів з перших кроків їхньої творчої подорожі.",
    performanceHeader: "Виступи та досягнення",
    performanceTextOne:
      "Протягом понад двох десятиліть я була учасницею відомої вокальної студії «Обрій», виступаючи як солістка та сопрано у вокальному квартеті з однойменною назвою. У 2001 році наш квартет отримав одне з найвищих нагород — звання Народного самодіяльного вокального колективу. З того часу квартет «Обрій» був постійним учасником багатьох місцевих та обласних концертів, даруючи слухачам незабутні емоції, щирі музичні враження та тепло української пісні.",
    performanceTextTwo:
      "З метою розширення своїх музичних навичок я опанувала гру на альт-саксофоні та блокфлейті. З 2006 по 2022 рік я виступала як весільна музикантка, поєднуючи свої таланти вокалістки і саксофоністки. У 2016–2017 роках була учасницею місцевого рок-гурту “Neon Night”, де виступала як солістка, саксофоністка, а також як авторка й виконавиця власних пісень. Любов до сцени спонукала мене брати участь у конкурсах, таких як «Голос країни» та «Народна зірка», а також у різноманітних міських заходах, де я акомпанувала співакам і виступала сольно.",
    promotionHeader: "Популяризація української культури через музику",
    promotionText:
      "Окрім викладання та виступів, я з великою пристрастю займаюся збереженням і популяризацією української культури. Я активно беру участь у діяльності Українського музичного театру у Вудлендсі та регулярно виступаю на українських культурних заходах (зокрема «Christmas Together – 2024», «Christmas Together – 2025», «Borscht Cook-off – 2024» тощо), даруючи спільноті красу української музики й підтримуючи наші традиції живими. Як музичний керівник вокального гурту, я підготувала програму українських колядок і представила її американській, іспаномовній та українській аудиторії в церкві WoodsEdge Community Church у місті Спрінг, штат Техас, 13 грудня 2024 року.",
    teachingHeader: "Викладацька діяльність",
    teachingText:
      "Моя викладацька кар’єра є такою ж натхненною, як і сценічна діяльність. Я працювала музичним керівником у дитячому садку, відкриваючи малечі радість музики та допомагаючи їм розкрити свої таланти. З 2024 року викладаю вокал і фортепіано в музичній школі Century Fine Arts у місті Sugar Land, штат Техас та даю приватні уроки діткам з гри на фортепіано і вокального співу. Також я пропоную приватні уроки з фортепіано та вокалу, індивідуально адаптовані до потреб і цілей кожного учня. Якщо ви або ваша дитина зацікавлені в заняттях музикою — будь ласка, заповніть контактну форму. Я з радістю допоможу вам розпочати захопливу музичну подорож!",
    joinHeader: "Творімо музику разом!",
    joinText:
      "Чи ви мрієте навчитися грати на інструменті, покращити вокальні навички або зануритися в українські музичні традиції  — я з радістю стану вашим наставником і натхненням. Музика — це дар, і я щиро вірю, що кожен може відчути її радість і силу. Приєднуйтесь до мене в цій подорожі — творімо музику разом!",
    mediaHeader:
      "Тут ви можете послухати вокальні записи, кілька композицій на саксофоні у моєму виконанні та переглянути концертні виступи",
    contactHeader: "Зв’язатись зі мною",
    contactMeButton: "Відправити повідомлення",
    galleryHeader: "Галерея",

    footer: "Всі права захищені | 2025",
  },
};

function toggleLanguage() {
  const lang = languageToggle.checked ? "uk" : "en";
  langLabel.textContent = languageToggle.checked ? "УКР" : "EN";

  // Update the text of key sections
  const aboutNavElem = document.querySelector(".about-nav");
  const journeyNavElem = document.querySelector(".journey-nav");
  const classesNavElem = document.querySelector(".services-nav");
  const contactNavElem = document.querySelector(".contact-nav");
  const galleryNavElem = document.querySelector(".gallery-nav");
  const welcomeTextElem = document.querySelector(".hero h4");
  const aboutTextElem = document.querySelector(".about-text");
  const journeyHeaderElem = document.querySelector(".classes h2");
  const journeyTextOneElem = document.querySelector(".journey-text-one");
  const journeyTextTwoElem = document.querySelector(".journey-text-two");
  const performanceHeaderElem = document.querySelector(".performance-header");
  const performanceTextOneElem = document.querySelector(
    ".performance-text-one"
  );
  const performanceTextTwoElem = document.querySelector(
    ".performance-text-two"
  );
  const promotingHeaderElem = document.querySelector(".promotion-header");
  const promotionTextElem = document.querySelector(".promotion-text");
  const teachingHeaderElem = document.querySelector(".services h2");
  const teachingTextElem = document.querySelector(".teaching-text");
  const joinHeaderElem = document.querySelector(".join-header");
  const joinTextElem = document.querySelector(".join-text");
  const mediaHeaderElem = document.querySelector(".media h2");
  const contactHeaderElem = document.querySelector("#contact h2");
  const contactMeButtonElem = document.querySelector(".contact-me-btn");
  const galleryHeaderElem = document.querySelector("#gallery h2");

  if (aboutNavElem) aboutNavElem.textContent = translations[lang].aboutNav;
  if (journeyNavElem)
    journeyNavElem.textContent = translations[lang].journeyNav;
  if (classesNavElem)
    classesNavElem.textContent = translations[lang].classesNav;
  if (contactNavElem)
    contactNavElem.textContent = translations[lang].contactNav;
  if (galleryNavElem)
    galleryNavElem.textContent = translations[lang].galleryNav;
  if (welcomeTextElem)
    welcomeTextElem.textContent = translations[lang].welcomeText;
  if (aboutTextElem) aboutTextElem.textContent = translations[lang].aboutText;
  if (journeyHeaderElem)
    journeyHeaderElem.textContent = translations[lang].journeyHeader;
  if (journeyTextOneElem)
    journeyTextOneElem.textContent = translations[lang].journeyTextOne;
  if (journeyTextTwoElem)
    journeyTextTwoElem.textContent = translations[lang].journeyTextTwo;
  if (performanceHeaderElem)
    performanceHeaderElem.textContent = translations[lang].performanceHeader;
  if (performanceTextOneElem)
    performanceTextOneElem.textContent = translations[lang].performanceTextOne;
  if (performanceTextTwoElem)
    performanceTextTwoElem.textContent = translations[lang].performanceTextTwo;
  if (promotingHeaderElem)
    promotingHeaderElem.textContent = translations[lang].promotionHeader;
  if (promotionTextElem)
    promotionTextElem.textContent = translations[lang].promotionText;
  if (teachingHeaderElem)
    teachingHeaderElem.textContent = translations[lang].teachingHeader;
  if (teachingTextElem)
    teachingTextElem.textContent = translations[lang].teachingText;
  if (joinHeaderElem)
    joinHeaderElem.textContent = translations[lang].joinHeader;
  if (joinTextElem) joinTextElem.textContent = translations[lang].joinText;
  if (mediaHeaderElem)
    mediaHeaderElem.textContent = translations[lang].mediaHeader;
  if (contactHeaderElem)
    contactHeaderElem.textContent = translations[lang].contactHeader;
  if (contactMeButtonElem)
    contactMeButtonElem.textContent = translations[lang].contactMeButton;
  if (galleryHeaderElem)
    galleryHeaderElem.textContent = translations[lang].galleryHeader;
}

languageToggle.addEventListener("change", toggleLanguage);

//-----------
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
