
  // Tarjimalar
  const translations = {
    uz: {
      nav_conf: "Konferensiyalar",
      nav_home: "Bosh sahifa",
      nav_school: "Ilmiy maktablarimiz",
      nav_contact: "Bog'lanish"
    },
    ru: {
      nav_conf: "Конференции",
      nav_home: "Главная",
      nav_school: "Наши научные школы",
      nav_contact: "Контакты"
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
