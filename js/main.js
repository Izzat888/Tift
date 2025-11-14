
  // Tarjimalar
  const translations = {
    uz: {
      nav_conf: "Konferensiyalar",
      nav_home: "Bosh sahifa",
      nav_school: "Ilmiy maktablarimiz",
      nav_contact: "Bog'lanish",
      sidebar_news: "Jurnal yangiliklari",
      sidebar_information: "Jurnal haqida",
      sidebar_archive: "Arxiv",
      sidebar_statistics: "Statistika",
      sidebar_requirements: "Maqola tayyorlash bo‘yicha talablar",
      sidebar_documents: "Namunaviy hujjatlar",
      sidebar_copyright: "Mualliflik huquqi",
      sidebar_staff: "Tahririyat a’zolari",
      sidebar_journal: "Jurnal",
      sidebar_AUTHORS: "MUALLIFLARGA",
      sidebar_EDITORIAL: "TAHRIRIYAT"
    },
    ru: {
      nav_conf: "Конференции",
      nav_home: "Главная",
      nav_school: "Наши научные школы",
      nav_contact: "Контакты",
      sidebar_news: "Новости журнала",
      sidebar_information: "О журнале",
      sidebar_archive: "Архив",
      sidebar_statistics: "Статистика",
      sidebar_requirements: "Требования к подготовке статьи",
      sidebar_documents: "Образцы документов",
      sidebar_copyright: "Авторское право",
      sidebar_staff: "Редакция",
      sidebar_journal: "Журнал",
      sidebar_AUTHORS: "Автор",
      sidebar_EDITORIAL: "РЕДАКЦИЯ"
    }
  };

  // Tilni o‘rnatish funksiyasi
  function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key];
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    localStorage.setItem("lang", lang);
  }

  // Sahifa yuklanganda
  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang") || "uz";
    setLanguage(saved);
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
  });

    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("nav-menu");
    const langSwitch = document.querySelector(".lang-switch");

    burger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        langSwitch.classList.toggle("active");
    });
