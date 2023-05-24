// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const geo = document.getElementById("geo");


if (bar){
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}
if (geo){
    geo.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}