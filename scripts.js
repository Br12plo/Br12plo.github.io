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
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
