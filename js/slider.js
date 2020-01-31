let carouselWrapper = document.querySelector("#carouselWrapper");
let items = document.querySelectorAll(".item-inner");
/////////////////////////////////////////////////////////////////
let slidesToShow = Math.round(carouselWrapper.clientWidth / items[0].clientWidth);
let itemWidth = (carouselWrapper.clientWidth / slidesToShow) * 100 / carouselWrapper.clientWidth;
let currentItem = 0;
////////////////////////////////////////////////////////////////
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
let select = document.querySelector("select");
///////////////////////////////////////////////////////////////func
function move(movingIndex){
    carouselWrapper.style.transform = `translateX(${movingIndex*itemWidth}%)`;
}
function moveLeft() {
    if(currentItem < 0 ){
        currentItem++;
        move(currentItem);
    }
}
function moveRight(){
    if(currentItem > slidesToShow - items.length) {
        currentItem--;
        move(currentItem);
    }
}

function scrollTo(){
    carouselWrapper.scrollIntoView({
        behavior:"smooth"
    });
    let selectedIndex = Number.parseInt(select.options[select.selectedIndex].value);
    if(selectedIndex === -currentItem){
        return 0;
    }
    if(selectedIndex === 0){
        currentItem = 0;
        move(currentItem);
    }
    if(selectedIndex >= items.length - slidesToShow && selectedIndex + currentItem !== 2){
        if(selectedIndex + currentItem !==1){
            currentItem++;
        }
        move((items.length - slidesToShow)*-1);
        currentItem-=(items.length - slidesToShow);
    }
    if(selectedIndex <= items.length - slidesToShow && selectedIndex!==0){
        currentItem--;
        move(-selectedIndex);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM LOADED");
    select.addEventListener("change",scrollTo);
    leftBtn.addEventListener("click",moveLeft);
    rightBtn.addEventListener("click",moveRight);
});
