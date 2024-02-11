const imageUrls = ["zelda.jpg", "OCTOPATH.jpg","mario.jpg","death stranding.jpg"];
const imagee = document.getElementById("ima");
let x = 0;

function changeImage() {
    imagee.style.transition = "opacity 1s ease, transform 1s ease";
    imagee.style.opacity = "0";
    imagee.style.transform = "translateX(1%)";
    //imagee.style.boxShadow = "inset 0 0 10px 5px rgba(0, 0, 0, 0.5)";
    setTimeout(() => {
        imagee.src = imageUrls[x];
            imagee.style.opacity = "1";
            imagee.style.transform = "translateX(0%)";
    }, 1500);

    x = (x + 1) % imageUrls.length;
}
changeImage();
setInterval(changeImage,8000);