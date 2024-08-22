import roll from "./roll.js";
/* ==================== TOGGLE THEME ===================== */
const btnTheme = document.getElementById("btn-theme");
const body = document.body;
if (btnTheme) {
    if (localStorage.getItem("darkTheme")) {
        body.classList.add("dark");
        btnTheme.className = "ri-moon-fill";
    }
    btnTheme.addEventListener("click", function () {
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            btnTheme.className = "ri-sun-fill";
            localStorage.removeItem("darkTheme");
        }
        else {
            body.classList.add("dark");
            btnTheme.className = "ri-moon-fill";
            localStorage.setItem("darkTheme", "true");
        }
    });
}
/* ==================== CHANGE MAIN COLOR ===================== */
function changeMainColor() {
    const root = document.documentElement;
    const r = roll(10, 250);
    const g = roll(10, 250);
    const b = roll(10, 250);
    root.style.setProperty("--main-color", `rgb(${r},${g}, ${b})`);
}
setInterval(changeMainColor, 1500);
/* ==================== TOGGLE STORY ===================== */
const btnStory = document.getElementById("btn-story");
const modalStory = document.getElementById("modal-story");
if (btnStory && modalStory) {
    btnStory.addEventListener("click", () => {
        modalStory.showModal();
    });
}
