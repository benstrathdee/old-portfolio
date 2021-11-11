window.onscroll = function () {
    myFunction();
};

var navbar = document.getElementById("navbar-container");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// This worked, but I couldn't change it back after scrolling past, so unused
// function enlarge(link, link2) {
//     if (window.pageYOffset > link.offsetTop - 150) {
//         link2.classList.add("a--current");
//     } else {
//         link2.classList.remove("a--current");
//     }
// }
