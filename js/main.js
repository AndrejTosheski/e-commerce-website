const bar = document.getElementById("bar");
const closeNav = document.getElementById("close");
const nav = document.querySelector(".navbar");

if(bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

if(closeNav) {
    closeNav.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}