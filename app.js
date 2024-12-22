// JavaScript to toggle the responsive menu
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".fa-bars");
    const navLinks = document.querySelector("header nav");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
