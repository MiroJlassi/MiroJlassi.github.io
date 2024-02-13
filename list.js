const elements = document.getElementsByClassName("element");
let currentIndex = 0;

function selected() {
    if (currentIndex > 0) {
        elements[currentIndex - 1].style.backgroundColor = "";
    } else {
        elements[elements.length - 1].style.backgroundColor = "";
    }

    elements[currentIndex].style.backgroundColor = "rgba(255,255,255,0.05)";
    currentIndex = (currentIndex + 1) % elements.length;
}

selected();
setInterval(selected, 8000);
