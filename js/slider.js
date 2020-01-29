let carouselWrapper = document.querySelector("#carouselWrapper");
let items = document.querySelectorAll(".item-inner");
let slidesToShow = Math.round(carouselWrapper.clientWidth / items[0].clientWidth);
let itemWidth = (carouselWrapper.clientWidth / slidesToShow) * 100 / carouselWrapper.clientWidth;
let currentItem = 0;

let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");

function moveLeft() {
    if(currentItem < 0){
        currentItem++;
        carouselWrapper.style.transform = `translateX(${currentItem*itemWidth}%)`;
        console.log(currentItem);
    }
}
function moveRight(){
    if(currentItem > slidesToShow - items.length) {
        currentItem--;
        carouselWrapper.style.transform = `translateX(${currentItem * itemWidth}%)`;

        console.log(currentItem);
    }
}

leftBtn.addEventListener("click",moveLeft);
rightBtn.addEventListener("click",moveRight);

