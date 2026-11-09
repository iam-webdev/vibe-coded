document.addEventListener("DOMContentLoaded", () => {
  // Theme Switching Logic
  const themeToggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      let activeTheme = document.documentElement.getAttribute("data-theme");
      let targetTheme = activeTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", targetTheme);
      localStorage.setItem("theme", targetTheme);
      updateThemeIcon(targetTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    if (theme === "dark") {
      themeToggleBtn.innerHTML = '☀️ <span class="theme-text">Light</span>';
      themeToggleBtn.setAttribute("aria-label", "Switch to light mode");
    } else {
      themeToggleBtn.innerHTML = '🌙 <span class="theme-text">Dark</span>';
      themeToggleBtn.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  // Interactive Typing Animation on Main Page
  const typedTarget = document.getElementById("typed-text");
  if (typedTarget) {
    const phrases = [
      "websites for businesses.",
      "websites for hobbies.",
      "clean & modern designs.",
      "interactive web solutions.",
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 90;

    function handleTyping() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typedTarget.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 45;
      } else {
        typedTarget.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 90;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 1600;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 400;
      }

      setTimeout(handleTyping, typeSpeed);
    }
    handleTyping();
  }

  // Animate skill progress bars when on skills.html
  const progressBars = document.querySelectorAll(".skill-progress");
  if (progressBars.length > 0) {
    setTimeout(() => {
      progressBars.forEach((bar) => {
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth;
      });
    }, 200);
  }
});
