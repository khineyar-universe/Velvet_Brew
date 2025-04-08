const menu = document.querySelector(".menu");
const navLink = document.querySelector(".nav-links");

menu.addEventListener('click', () => {
    navLink.classList.toggle("show");
    if(navLink.classList.contains("show")) {
        menu.src = "IMG/icon/cross.svg";
    }
    else {
        menu.src = "IMG/icon/menu.svg";
    }
}
);