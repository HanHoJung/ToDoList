const images = ["01.jpg", "02.jpg", "03.jpg"];
const bgImage = document.body;


function changeBgImg(){
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    bgImage.style.backgroundImage = `url('./css/bg/company${chosenImage}')`;
}

setInterval(changeBgImg,5000);

