const images = [
    "background1.jpg",
    "background2.png",
    "background3.jpg"
]

const chosenImage = images[Math.floor(Math.random()*images.length)];
bgimage =`img/${chosenImage}`;
document.body.style.backgroundImage = `url(${bgimage})`;

/*
const bgimage = document.createElement("img");

bgimage.src=`img/${chosenImage}`;  //이미지 소스 생성
bgimage.classList.add("bgimage");

document.body.appendChild(bgimage);*/