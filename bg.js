const body = document.querySelector("body");
const wrapper = body.querySelector(".wrapper");

const API_KEY = "J4crT2JyXxsnQ7Rloi7igShD_fkCeb4xNSONvzHXVt4";
const IMG_NUMBER = 3;

function paintImage(imgNumber){
  const image = new Image();
  image.src = `/images/${imgNumber+1}.jpg`;
  wrapper.style.backgroundImage = `url(${image.src})`;
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function setWindowSize(){
  let docHeight = document.documentElement.clientHeight;
  wrapper.style.height = `${docHeight}px`;
}

function init(){
  window.addEventListener("resize", setWindowSize);
  wrapper.style.height = `${document.documentElement.clientHeight}px`;

  const randomNumber = genRandom();
  paintImage(randomNumber); 
}

init();