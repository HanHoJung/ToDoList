//DOM Element access
const images = ['0.jpeg', '1.jpeg', '2.jpeg'];
const bgImg = document.querySelector("#bgImg");


//Background Image Change
function randomImage(){
    const choosenImage = images[Math.floor(Math.random() * images.length)];
    bgImg.src = `img/${choosenImage}`;
    
}
randomImage();
setInterval(randomImage,5000);