document.querySelector(".hamburger-icon").addEventListener("click", function() {
    document.querySelector(".nav-menu").classList.remove("nav-menu-hidden")
})

document.querySelector(".nav-menu-close-icon").addEventListener("click", function() {
    document.querySelector(".nav-menu").classList.add("nav-menu-hidden")
})

const dropdowns = document.querySelectorAll(".dropdown-link")

dropdowns.forEach((dropdown) => dropdown.addEventListener("click", function() {
    this.parentElement.classList.toggle("dropdown-active")
}))