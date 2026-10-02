document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("themeToggle");
  const htmlElement = document.documentElement;

  // Function to set theme and update button text/icon
  const setTheme = (theme) => {
    htmlElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      themeToggleBtn.innerHTML =
        '<i class="bi bi-sun-fill me-1"></i> Light Mode';
      themeToggleBtn.classList.replace(
        "btn-outline-light",
        "btn-outline-warning",
      );
    } else {
      themeToggleBtn.innerHTML =
        '<i class="bi bi-moon-stars-fill me-1"></i> Dark Mode';
      themeToggleBtn.classList.replace(
        "btn-outline-warning",
        "btn-outline-light",
      );
    }
  };

  // Check saved preference or default to light mode
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  // Event listener for toggle click
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
});

// 2. Active Link Highlighting on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
