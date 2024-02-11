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


const imageUrls = ["1.jpg", "2.jpg", "3.jpg"];
const imagee = document.getElementById("ima");
let currentIndex = 0;

function changeImage() {
    // Apply scaling and opacity transitions
    imagee.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    // Scale down and fade out the current image
    imagee.style.opacity = "0";
    imagee.style.transform = "scale(0.8)";

    setTimeout(() => {
        // Change the image source
        imagee.src = imageUrls[currentIndex];

        // Scale up and fade in the new image
        setTimeout(() => {
            imagee.style.opacity = "1";
            imagee.style.transform = "scale(1)";
        }, 100); // Wait for a brief moment before fading in and scaling up
    }, 500); // Wait for the fade out transition to complete

    // Update currentIndex for the next image
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Initial image display
changeImage();

// Automatic filling and changing every 3 seconds
setInterval(changeImage, 3000);

