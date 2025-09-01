//scroll on top when clicking logo
document.getElementById("logo").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//Language switch
const languageSelect = document.getElementById("languageSelect");

const translations = {
  en: {
    aboutNav: "About",
    servicesNav: "Classes",
    contactNav: "Contact",
    galleryNav: "Gallery",
    heroHeader: "You live a new life for every new language you speak",
    heroPar: "Czech Proverb",
    videoPres:
      "Shaping Futures with English Language, Joyful Learning, and Student Success – 22 Years and Counting",
    aboutTitle: "My English Teaching Journey",
    aboutText1:
      "With over 20 years of experience in teaching English, I bring dedication, creativity, and a personalized approach to each of my students. I was born and raised in Kremenchuk, Ukraine, where I developed my professional path. Since 2022, I have been living and working in the USA, in Houston, Texas.",
    aboutSub1: " I have worked with students in a wide range of settings:",
    aboutLi1: "Large classrooms of over 30 students",
    aboutLi2: "Small groups of around 10",
    aboutLi3: "Pairs and individual learners",
    aboutLi4: "Both offline and online formats",
    aboutText2:
      "This experience has shaped my ability to create engaging, goal-oriented lessons that meet the needs of different learners. I'm especially skilled at building strong communication with children and finding a personalized approach for each student.",
    aboutSub2: "📍 Places of Work",
    aboutLi5HTML:
      "<strong>Gymnasium #23, Kremenchuk, Ukraine</strong><br /> Teacher of English (2006–2022)<br /> Title: Teacher-Methodologist, Highest Teacher’s Category",
    aboutLi6HTML:
      "<strong>WSG University in Bydgoszcz (Poland) – Branch at Kremenchuk Campus</strong><br />Teacher of English – Exam Preparation Course (2017–2020)",
    aboutLi7HTML:
      '<strong>Private Educational Center "Success", Kremenchuk, Ukraine</strong><br /> Teacher of English (2010–2017)',
    aboutLi8HTML:
      "<strong>Gymnasium #6, Kremenchuk, Ukraine</strong><br />Teacher of English (2002–2006)",
    aboutSub3: "🎓 Education",
    aboutLi9HTML:
      "<strong>Oleksandr Dovzhenko Hlukhiv National Pedagogical University</strong><br />2000–2005 — Master's Degree in Teaching English, Ukrainian, and Foreign Literature",
    aboutLi10HTML:
      " <strong>Kremenchuk Pedagogical College named after A.S.Makarenko</strong><br />1995–2000 — Diploma in Primary Education<br />Qualified to teach English, Music, and conduct children's choirs",
    aboutSub4: "🏆 Professional Achievements",
    aboutText3:
      "Throughout my career, I have actively contributed to the professional teaching community by:",
    aboutLi11: "Awarded top places in national teaching contests for educators",
    aboutLi12:
      "Published methodological articles in Ukrainian educational magazines",
    aboutLi13: "Spoke at scientific conferences and teacher workshops",
    aboutLi14:
      "Served as an examiner for the final English writing exams taken by students across Ukraine",
    aboutText4:
      "These experiences have helped me stay current, inspired, and constantly improving as an educator.",
    teachingHeader1: "🌍 Who I Teach",
    teachingText1:
      " I offer English lessons to Ukrainian, Polish, and Spanish-speaking students — whether they are complete beginners or at an upper-intermediate level — helping everyone build confidence and fluency in a comfortable and supportive environment.",
    teachingHeader2: "💻 Online Learning Opportunities",
    teachingText2:
      "   I currently offer online English lessons via Zoom, Google Meet, and Microsoft Teams, at times that are convenient for each learner. I am available for individual sessions, paired lessons, and group classes.",
    teachingText3HTML:
      " <strong>If you're looking for a passionate, experienced, and student-focused English teacher, I would be happy to help.</strong>",
    contactHeader:
      " Please fill in the form below, and I'll get in touch with you soon!",
    buttonC: "Send Message",
    galleryHeader: "Gallery",
  },

  ua: {
    aboutNav: "Про мене",
    servicesNav: "Заняття",
    contactNav: "Контакти",
    galleryNav: "Галерея",
    heroHeader: "Ви живете новим життям з кожною новою мовою, якою ви говорите",
    heroPar: "Чеська приказка",
    videoPres:
      "Формую Майбутнє Через Англійську, Радісне Навчання та Успіх Учнів – 22 Роки Разом",
    aboutTitle: "Моя подорож у викладанні англійської мови",
    aboutText1:
      "Маючи понад 20 років досвіду викладання англійської мови, я приношу в процес навчання відданість, креативність та індивідуальний підхід до кожного учня. Я народилася і виросла в Кременчуці, Україна, де почала свій професійний шлях. З 2022 року я живу та працюю в США, в місті Х'юстон, Техас.",
    aboutSub1: "Я працювала з учнями в різних умовах:",
    aboutLi1: "У великих класах з понад 30 студентами",
    aboutLi2: "У малих групах до 10 учнів",
    aboutLi3: "Індивідуально з одним учнем",
    aboutLi4: "Як офлайн, так і онлайн форматах",
    aboutText2:
      "Цей досвід допоміг мені розвинути здатність створювати цікаві та орієнтовані на результат уроки, які відповідають потребам різних учнів різного віку. У своїй роботі я  налагоджую міцну комунікацію з учнями і знаходжу індивідуальний підхід до кожного студента.",
    aboutSub2: "📍 Місця роботи",
    aboutLi5HTML:
      "<strong>Гімназія №23, Кременчук, Україна </strong> <br /> Вчитель англійської мови (2006–2022) <br /> Звання: учитель-методист, учитель вищої кваліфікаційної категорії",
    aboutLi6HTML:
      "<strong>Університет WSG у Бидгощі (Польща) – філія в Кременчуці </strong> <br />Викладач англійської мови – курс підготовки до іспитів (2017–2020)",
    aboutLi7HTML:
      '<strong>Приватний освітній центр "Успіх", Кременчук, Україна </strong> <br /> Вчитель англійської мови (2010–2017)',
    aboutLi8HTML:
      "<strong> Гімназія №6, Кременчук, Україна </strong> <br />Вчитель англійської мови (2002–2006)",
    aboutSub3: "🎓 Освіта",
    aboutLi9HTML:
      "<strong>Глухівський національний педагогічний університет імені Олександра Довженка (2000–2005) </strong> <br /> Спеціаліст з викладання англійської, української мови та зарубіжної літератури",
    aboutLi10HTML:
      "<strong>Кременчуцьке педагогічне училище імені А.С. Макаренка (1995–2000) </strong> <br />Диплом початкової освіти <br /> Кваліфікація: вчитель початкових класів з правом викладання англійської мови, музики та керівник дитячого хорового колективу",
    aboutSub4: "🏆 Професійні досягнення",
    aboutText3:
      "Упродовж своєї кар’єри я активно долучалася до професійної спільноти викладачів шляхом:",
    aboutLi11: "участі у всеукраїнських педагогічних конкурсах",
    aboutLi12: "публікації методичних статей в українських освітніх журналах",
    aboutLi13: " виступів на наукових конференціях та педагогічних семінарах",
    aboutLi14:
      "участі як екзаменатора у перевірці письмової частини підсумкових іспитів з англійської мови для учнів 11-х класів з усієї України",
    aboutText4:
      "Ці здобутки допомогли мені залишатися сучасною, натхненною та постійно вдосконалюватися як викладачу.",
    teachingHeader1: "🌍 Кого я навчаю",
    teachingText1:
      "Я пропоную уроки англійської мови для україномовних, польськомовних та іспаномовних студентів віком від 6 років і до людей зрілого віку — незалежно від того, чи вони повні початківці, чи мають рівень англійської вище середнього. Я допомагаю кожному здобути впевненість і вільність у спілкуванні англійською мовою в комфортному навчальному середовищі.",
    teachingHeader2: "💻 Можливості онлайн-навчання",
    teachingText2:
      "Зараз я пропоную уроки англійської мови в онлайн-форматі через Zoom, Google Meet та Microsoft Teams у зручний для кожного учня час. Доступні індивідуальні заняття, уроки в парах та групові заняття.",
    teachingText3HTML:
      " <strong>Якщо ви шукаєте натхненного, досвідченого та орієнтованого на учня викладача англійської мови, я з радістю допоможу вам.</strong>",
    contactHeader:
      "Будь ласка, заповніть форму нижче, і я скоро з вами зв'яжуся!",
    buttonC: "Відправити повідомлення",
    galleryHeader: "Галерея",
  },

  es: {
    aboutNav: "Sobre mí",
    servicesNav: "Clases",
    contactNav: "Contacto",
    galleryNav: "Galería",
    heroHeader: "Vives una nueva vida por cada nuevo idioma que hablas",
    heroPar: "Proverbio Checo",
    videoPres:
      "Forjando Futuros con el Inglés, el Aprendizaje Alegre y el Éxito Estudiantil – 22 Años y Contando",
    aboutTitle: "Mi Trayectoria en la Enseñanza del Inglés",
    aboutText1:
      "Con más de 20 años de experiencia en la enseñanza del inglés, aporto dedicación, creatividad y un enfoque personalizado a cada uno de mis estudiantes. Nací y crecí en Kremenchuk, Ucrania, donde desarrollé mi carrera profesional. Desde 2022, vivo y trabajo en los EE.UU., en Houston, Texas.",
    aboutSub1: "He trabajado con estudiantes en una amplia gama de entornos:",
    aboutLi1: "Aulas grandes de más de 30 estudiantes",
    aboutLi2: "Grupos pequeños de alrededor de 10 estudiantes",
    aboutLi3: "Parejas y estudiantes individuales",
    aboutLi4: "Formatos presenciales y online",
    aboutText2:
      "Esta experiencia ha moldeado mi capacidad para crear lecciones interactivas y orientadas a objetivos que satisfacen las necesidades de los diferentes estudiantes. Soy especialmente hábil para establecer una comunicación sólida con los niños y encontrar un enfoque personalizado para cada estudiante.",
    aboutSub2: "📍 A Quién Enseño",
    aboutLi5HTML:
      "<strong>Gymnasium #23, Kremenchuk, Ucrania </strong> <br /> Profesor de Inglés (2006–2022) <br /> Título: Profesor Metodista, Categoría Más Alta",
    aboutLi6HTML:
      "<strong>Universidad WSG en Bydgoszcz (Polonia) – Sede en el Campus de Kremenchuk </strong> <br />Profesor de Inglés – Curso de Preparación para Exámenes (2017–2020)",
    aboutLi7HTML:
      '<strong>Centro Educativo Privado "Success", Kremenchuk, Ucrania </strong> <br />Profesor de Inglés (2010–2017)',
    aboutLi8HTML:
      "<strong>Gymnasium #6, Kremenchuk, Ucrania </strong> <br />Profesor de Inglés (2002–2006)",
    aboutSub3: "🎓  Educación",
    aboutLi9HTML:
      "<strong>Universidad Pedagógica Nacional Oleksandr Dovzhenko de Hlukhiv </strong> <br />2000–2005 Máster en Enseñanza de Inglés, Ucraniano y Literatura Extranjera",
    aboutLi10HTML:
      "<strong>Colegio Pedagógico de Kremenchuk, nombrado en honor a A.S. Makarenko 1995–2000 </strong> <br />Diplomado en Educación Primaria <br /> Calificada para enseñar Inglés, Música y dirigir coros infantiles",
    aboutSub4: "🏆 Logros Profesionales",
    aboutText3:
      "A lo largo de mi carrera, he contribuido activamente a la comunidad educativa mediante:",
    aboutLi11: "Premios en concursos nacionales de enseñanza para educadores",
    aboutLi12:
      "Publicación de artículos metodológicos en revistas educativas ucranianas",
    aboutLi13:
      "Participación como ponente en conferencias científicas y talleres para docentes",
    aboutLi14:
      "Examinadora en los exámenes finales de escritura en inglés de estudiantes de toda Ucrania",
    aboutText4:
      "Estas experiencias me han permitido mantenerme actualizada, inspirada y en constante mejora como educadora.",
    teachingHeader1: "🌍 A Quién Enseño",
    teachingText1:
      "Ofrezco lecciones de inglés a estudiantes de habla ucraniana, polaca y española, ya sea que estén comenzando desde cero o en un nivel intermedio superior, ayudando a cada uno a ganar confianza y fluidez en un ambiente cómodo y de apoyo.",
    teachingHeader2: "💻  Oportunidades de Aprendizaje Online",
    teachingText2:
      "Actualmente, ofrezco lecciones de inglés online a través de Zoom, Google Meet y Microsoft Teams, en horarios que se ajusten a las necesidades de cada estudiante. Estoy disponible para sesiones individuales, lecciones en pareja y clases grupales.",
    teachingText3HTML:
      " <strong>Si buscas una profesora de inglés apasionada, experimentada y centrada en el estudiante, estaré encantada de ayudarte.</strong>",
    contactHeader:
      "Por favor, completa el formulario a continuación y me pondré en contacto contigo pronto",
    buttonC: "Enviar mensaje",
    galleryHeader: "Galería",
  },
};

function setLanguage(lang) {
  const t = translations[lang];

  document.querySelector(".about-nav").textContent = t.aboutNav;
  document.querySelector(".services-nav").textContent = t.servicesNav;
  document.querySelector(".contact-nav").textContent = t.contactNav;
  document.querySelector(".gallery-nav").textContent = t.galleryNav;
  document.querySelector(".hero h2").textContent = t.heroHeader;
  document.querySelector(".hero p").textContent = t.heroPar;
  document.querySelector(".video-presentation h2").textContent = t.videoPres;
  document.querySelector(".about__title").textContent = t.aboutTitle;
  document.querySelector(".about_text_1").textContent = t.aboutText1;
  document.querySelector(".sub_1").textContent = t.aboutSub1;
  document.querySelector(".about_li_1").textContent = t.aboutLi1;
  document.querySelector(".about_li_2").textContent = t.aboutLi2;
  document.querySelector(".about_li_3").textContent = t.aboutLi3;
  document.querySelector(".about_li_4").textContent = t.aboutLi4;
  document.querySelector(".about_text_2").textContent = t.aboutText2;
  document.querySelector(".sub_2").textContent = t.aboutSub2;
  document.querySelector(".about_li_5").innerHTML = t.aboutLi5HTML;
  document.querySelector(".about_li_6").innerHTML = t.aboutLi6HTML;
  document.querySelector(".about_li_7").innerHTML = t.aboutLi7HTML;
  document.querySelector(".about_li_8").innerHTML = t.aboutLi8HTML;
  document.querySelector(".sub_3").textContent = t.aboutSub3;
  document.querySelector(".about_li_9").innerHTML = t.aboutLi9HTML;
  document.querySelector(".about_li_10").innerHTML = t.aboutLi10HTML;
  document.querySelector(".sub_4").textContent = t.aboutSub4;
  document.querySelector(".about_text_3").textContent = t.aboutText3;
  document.querySelector(".about_li_11").textContent = t.aboutLi11;
  document.querySelector(".about_li_12").textContent = t.aboutLi12;
  document.querySelector(".about_li_13").textContent = t.aboutLi13;
  document.querySelector(".about_li_14").textContent = t.aboutLi14;
  document.querySelector(".about_text_4").textContent = t.aboutText4;
  document.querySelector(".teaching_header_1").textContent = t.teachingHeader1;
  document.querySelector(".teaching_text_1").textContent = t.teachingText1;
  document.querySelector(".teaching_header_2").textContent = t.teachingHeader2;
  document.querySelector(".teaching_text_2").textContent = t.teachingText2;
  document.querySelector(".teaching_text_3").innerHTML = t.teachingText3HTML;
  document.querySelector(".contact h2").textContent = t.contactHeader;
  document.querySelector(".contact-me-btn").textContent = t.buttonC;
  document.querySelector(".gallery h2").textContent = t.galleryHeader;
}

// Change event
languageSelect.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

// Initialize to English by default
setLanguage("en");

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
