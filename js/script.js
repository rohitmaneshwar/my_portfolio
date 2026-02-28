document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".custom-navbar");
    const topBtn = document.getElementById("topBtn");
    const toggleBtn = document.getElementById("themeToggle");
    const logo = document.querySelector(".brand-logo");
    const body = document.body;

    /* ================= LOAD SAVED THEME ================= */
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        toggleBtn.textContent = savedTheme === "dark-mode" ? "☀️" : "🌙";
    } else {
        body.classList.add("light-mode");
    }

    /* ================= NAVBAR SCROLL EFFECT ================= */
    window.addEventListener("scroll", function () {
        if (navbar) {
            navbar.classList.toggle("nav-scrolled", window.scrollY > 50);
        }
        if (logo) {
            logo.classList.toggle("highlight", window.scrollY > 50);
        }
        if (topBtn) {
            topBtn.style.display = window.scrollY > 300 ? "block" : "none";
        }
    });

    /* ================= SCROLL TO TOP ================= */
    if (topBtn) {
        topBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ================= THEME TOGGLE ================= */
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
            body.classList.toggle("light-mode");
            const isDark = body.classList.contains("dark-mode");
            toggleBtn.textContent = isDark ? "☀️" : "🌙";
            localStorage.setItem("theme", isDark ? "dark-mode" : "light-mode");
        });
    }

    /* ================= INIT AOS ================= */
    if (AOS) {
        AOS.init({ duration: 1000, once: true });
    }

});