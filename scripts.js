document.addEventListener("DOMContentLoaded", () => {
  // custom cursor
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  });

  // dark mode toggle
  const toggle = document.querySelector(".dark-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  // typewriter effect JS
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

