const images = ["0.png","1.png","2.png","3.png","4.png","5.png", "6.png", "7.png", "8.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
//const bgImage = document.createElement("img");
document.body.style.backgroundImage = `url(assets/img/${chosenImage})`;

//document.body.appendChild(bgImage);