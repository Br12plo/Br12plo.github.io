document.addEventListener("DOMContentLoaded", () => {
  // ---- custom cursor ----
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  });

  // efekt kliknięcia kursorem
  document.addEventListener("click", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
    setTimeout(() => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    }, 150);
  });

  // ---- dark mode toggle z zapamiętywaniem ----
  const toggle = document.querySelector(".dark-toggle");
  if (toggle) {
    // ustaw tryb z localStorage przy starcie
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark");
      toggle.textContent = "☀️";
    }

    // toggle trybu i zapis w localStorage
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      toggle.textContent = isDark ? "☀️" : "🌙";
      localStorage.setItem("darkMode", isDark);
    });
  }

  // ---- typewriter effect ----
  const typewriter = document.getElementById("typewriter");
  if (typewriter) {
    const text = typewriter.textContent;
    typewriter.textContent = "";
    let i = 0;
    const typing = setInterval(() => {
      typewriter.textContent += text[i];
      i++;
      if (i === text.length) clearInterval(typing);
    }, 100);
  }
});






