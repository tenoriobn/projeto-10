const menuBtnOpen = document.getElementById("menu__btn__open");
const menuBtnClose = document.getElementById("menu__btn__close");
const menuMobile = document.getElementById("menu__mobile");

menuBtnOpen.addEventListener("click", () => {
    menuMobile.style.left = "0px"
    menuMobile.style.transition = "1s"
})

menuBtnClose.addEventListener("click", () => {
    menuMobile.style.left = "100%"
    menuMobile.style.transition = "1s"
})

window.addEventListener('resize', () => {
    if(window.innerWidth >= 992) {
        menuMobile.style.left = "inherit";
    } else {
        if (menuMobile.style.left === "0px") {
            menuMobile.style.left = "0";
        } else {
            menuMobile.style.left = "100%";
        }
    }
});