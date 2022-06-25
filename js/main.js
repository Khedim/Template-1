let links = document.querySelector(".header .link");
let uls = document.querySelector(".header .link ul");

links.onclick = function () {
    let id = document.querySelector(".header .link ul").id;
    if (id == 0) {
        uls.style.cssText = "display: block;"
        document.querySelector(".header .link ul").id = 1
    }
    if (id == 1) {
        uls.style.cssText = "display: none;"
        document.querySelector(".header .link ul").id = 0
    }
        
}