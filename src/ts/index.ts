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
        } else {
            body.classList.add("dark");
            btnTheme.className = "ri-moon-fill";
            localStorage.setItem("darkTheme", "true");
        }
    });
}
