var toggle = document.getElementById("toggle")
var theme = document.getElementById("main");

changeTheme();

toggle.addEventListener('click', changeTheme)

function changeTheme() {
    if (!toggle.checked) {
        theme.classList.add("dark")
        theme.classList.remove("light")
    } else if (toggle.checked) {
        theme.classList.add("light")
        theme.classList.remove("dark")
    }
}