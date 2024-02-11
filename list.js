const elements = document.getElementsByClassName("element");
let currentIndex = 0;

function selected() {
    if (currentIndex > 0) {
        elements[currentIndex - 1].style.color = "";
    } else {
        elements[elements.length - 1].style.color = "";
    }

    elements[currentIndex].style.color = "red";
    currentIndex = (currentIndex + 1) % elements.length;
}

selected();
setInterval(selected, 8000);
