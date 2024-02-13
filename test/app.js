/*const imageUrls = ["1.jpg","2.jpg","3.jpg"];
  
const imageContainer = document.getElementById("imageviewer");


const imagee = document.getElementById("ima");


while(True){
    for(img in imageUrls){
        imagee.src = img;
    }
}*/



/*const imageUrls = ["1.jpg", "2.jpg", "3.jpg"];
const imagee = document.getElementById("ima");
let currentIndex = 0;

function changeImage() {
    imagee.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    imagee.style.opacity = "0";
    imagee.style.transform = "translateX(-100%)";

    setTimeout(() => {
        imagee.src = imageUrls[currentIndex];
            imagee.style.opacity = "1";
            imagee.style.transform = "translateX(0%)";
    }, 500);
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

changeImage();
setInterval(changeImage, 3000);*/



let count = 0;

function increment() {
    count++;
    console.log("Count:", count);
}












/*const imageUrls = ["1.jpg", "2.jpg", "3.jpg"];
const imagee = document.getElementById("ima");
let currentIndex = 0;

function changeImage() {
    imagee.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    imagee.style.opacity = "0";
    imagee.style.transform = "scale(0.8)";

    setTimeout(() => {
        imagee.src = imageUrls[currentIndex];

        setTimeout(() => {
            imagee.style.opacity = "1";
            imagee.style.transform = "scale(1)";
        }, 100);
    }, 500);

    currentIndex = (currentIndex + 1) % imageUrls.length;
}

changeImage();

setInterval(changeImage, 8000);*/



