window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navabar").style.backgroundColor = "black";
    } else {
        document.querySelector(".navabar").style.backgroundColor = "#025AFE  ";
        document.querySelector(".navabar").style.Color = "black ";
    }
}