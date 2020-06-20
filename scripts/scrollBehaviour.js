
const container = document.querySelector(".container");

const fullScreenSectionFirst = document.querySelector(".full-screen-section.first");
const fullScreenSectionSecond = document.querySelector(".full-screen-section.second");
const fullScreenSectionThird = document.querySelector(".full-screen-section.third");

const trackingImg = document.querySelector(".tracking-img");


/* IF USER CAN SCROLL, HOW MUCH AND WHERE */
let currentScrollValue = 0;
let currentScrollIndex = 0;
let isScrolling = false;
////////////////////////////////////////////

window.addEventListener("load", () => {
     currentScrollValue = 0;
     currentScrollIndex = 0;
     isScrolling = false;


    console.log("translated 0")

    container.style.webkitTransform = 
    `translateY(0px)`;

    container.style.MozTransform = 
    `translateY(0px)`;

    container.style.msTransform = 
    `translateY(0px)`;

    container.style.OTransform = 
    `translateY(0px)`;

    container.style.transform = 
    `translateY(0px)`;
})



/* SCROLL POINTS */
const scrollPoints = [
    fullScreenSectionFirst,
    fullScreenSectionSecond,
    fullScreenSectionThird
];
////////////////////////////


const scrollToTheText = (e) => {


    if(!isScrolling){

        isScrolling = true;

        if(e.deltaY > 0){ // IT MEAN SCROLL DOWN
            if(currentScrollIndex < 2){

                currentScrollValue -= window.innerHeight;

                currentScrollIndex++;

            container.style.webkitTransform = 
            `translateY(${currentScrollIndex * (-window.innerHeight)}px)`;

            container.style.MozTransform = 
            `translateY(${currentScrollIndex * (-window.innerHeight)}px)`;

            container.style.msTransform = 
            `translateY(${currentScrollIndex * (-window.innerHeight)}px)`;

            container.style.OTransform = 
            `translateY(${currentScrollIndex * (-window.innerHeight)}px)`;

            container.style.transform = 
            `translateY(${currentScrollIndex * (-window.innerHeight)}px)`;

            }
        } else if (e.deltaY < 0) {

            if(currentScrollIndex > 0){

                currentScrollValue += window.innerHeight;

                currentScrollIndex--;

                container.style.webkitTransform = 
                `translateY(${currentScrollIndex * (-window.innerHeight)}px)`;
    
                container.style.MozTransform = 
                `translateY(${currentScrollIndex * (-window.innerHeight)}px)`;
    
                container.style.msTransform = 
                `translateY(${currentScrollIndex * (-window.innerHeight)}px)`;
    
                container.style.OTransform = 
                `translateY(${currentScrollIndex * (-window.innerHeight)}px)`;
    
                container.style.transform = 
                `translateY(${currentScrollIndex * (-window.innerHeight)}px)`;
            }

        }


        return new Promise( () => {
            setTimeout(() => {
                isScrolling = false;
            },1000)
        })
        
        
    }
}

document.addEventListener("wheel", (e) => {

    if(window.innerWidth > 1000){
        scrollToTheText(e);
    }
 
})

