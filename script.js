const translations = {
  ar: {
    home: "الرئيسية",
    skills: "مهاراتي",
    projects: "أعمالي",
    contact: "تواصل معي",
    welcome: "مرحبًا، أنا محمد",
    description: "مطور واجهات مستخدم وتطبيقات.",
    viewProjects: "شاهد أعمالي",
    mySkills: "مهاراتي",
    myProjects: "أعمالي",
    viewProject: "عرض المشروع",
    project1: "مشروع 1",
    project1Desc: "وصف مختصر للمشروع الأول.",
    contactMe: "تواصل معي",
    whatsapp: "واتساب",
    facebook: "فيسبوك",
    footerText: "© 2023 محمد. جميع الحقوق محفوظة.",
  },
  en: {
    home: "Home",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact Me",
    welcome: "Hello, I'm Mohammed",
    description: "Frontend and App Developer.",
    viewProjects: "View My Work",
    mySkills: "My Skills",
    myProjects: "My Projects",
    viewProject: "View Project",
    project1: "Project 1",
    project1Desc: "Brief description of the first project.",
    contactMe: "Contact Me",
    whatsapp: "WhatsApp",
    facebook: "Facebook",
    footerText: "© 2023 Mohammed. All rights reserved.",
  },
};

let currentLang = "ar";

function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  updateTexts();
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.getElementById("language-toggle").textContent =
    currentLang === "ar" ? "English" : "العربية";
}

function updateTexts() {
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    element.textContent = translations[currentLang][key] || element.textContent;
    if (element.placeholder) {
      element.placeholder = translations[currentLang][key] || element.placeholder;
    }
  });
}

document.getElementById("language-toggle").addEventListener("click", toggleLanguage);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

document.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.animate__animated');
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.classList.add('animate__fadeInUp');
    }
  });

  const backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY > 500) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('menu-icon').addEventListener('click', () => {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('active');
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggle.innerHTML = savedTheme === 'dark-mode' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
  themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});