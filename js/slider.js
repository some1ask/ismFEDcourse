let carouselWrapper = document.querySelector("#carouselWrapper");
let items = document.querySelectorAll(".item-inner");
let slidesToShow = Math.round(carouselWrapper.clientWidth / items[0].clientWidth);
let itemWidth = (carouselWrapper.clientWidth / slidesToShow) * 100 / carouselWrapper.clientWidth;
let currentItem = 0;
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");

function moveLeft() {
    if(currentItem < 0 ){
        currentItem++;
        carouselWrapper.style.transform = `translateX(${currentItem*itemWidth}%)`;
        console.log("ml " + currentItem);
    }
}
function moveRight(){
    if(currentItem > slidesToShow - items.length) {
        currentItem--;
        carouselWrapper.style.transform = `translateX(${currentItem * itemWidth}%)`;
        console.log("mr " + currentItem);
    }
}


    $(select).change(function () {
    carouselWrapper.scrollIntoView({
        behavior:"smooth"
    });

    let selectedIndex = Number.parseInt(select.options[select.selectedIndex].value);
        console.log("select " + selectedIndex);
        if(selectedIndex >= items.length - slidesToShow || currentItem > selectedIndex ){
            currentItem--;
            carouselWrapper.style.transform = `translateX(${-(items.length - slidesToShow) * itemWidth}%)`;
            console.log("val if2 " + currentItem);
        }
        if(selectedIndex <= items.length -slidesToShow){
            currentItem--;
            carouselWrapper.style.transform = `translateX(${-selectedIndex * itemWidth}%)`;
            console.log("val else " + currentItem);
        }
        if(currentItem < 0){
            return;
        }
    });


leftBtn.addEventListener("click",moveLeft);
rightBtn.addEventListener("click",moveRight);
