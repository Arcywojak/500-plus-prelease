
const container = document.querySelector(".container");

const fullScreenSectionFirst = document.querySelector(".full-screen-section.first");
const fullScreenSectionSecond = document.querySelector(".full-screen-section.second");
const fullScreenSectionThird = document.querySelector(".full-screen-section.third");
//const fullScreenSectionThird = document.querySelector(".full-screen-section.third");

const trackingImg = document.querySelector(".tracking-img");

//const parentFirstOfTrackingImg = document.querySelector(".subsection-second.with-img.first");
//const parentSecondOfTrackingImg = document.querySelector(".subsection-second.with-img.second");
//const img = parentFirstOfTrackingImg.childNodes[1];


/* IF USER CAN SCROLL, HOW MUCH AND WHERE */
let currentScrollValue = 0;
let currentScrollIndex = 0;
let isScrolling = false;
////////////////////////////////////////////

window.addEventListener("load", () => {
     currentScrollValue = 0;
     currentScrollIndex = 0;
     isScrolling = false;
    container.style.transform = 
    `translateY(${currentScrollIndex*window.innerHeight}px)`;
    console.log("LOADED")
})



/* SCROLL POINTS */
const scrollPoints = [
    fullScreenSectionFirst,
    fullScreenSectionSecond,
    fullScreenSectionThird//,
    //fullScreenSectionThird
];
////////////////////////////




const scrollTrackingImg = () => {

    /* ATTACH IMG TO SECOND SUBSECTION  */
    if(parentSecondOfTrackingImg.getBoundingClientRect().top - 100 <= 20){

        trackingImg.classList.remove("fixed-img");

        if(parentFirstOfTrackingImg?.childNodes[1]?.classList?.contains("tracking-img") ||
           parentFirstOfTrackingImg?.childNodes[2]?.classList?.contains("tracking-img")
        ){

            const img = parentFirstOfTrackingImg.childNodes[1];

            parentFirstOfTrackingImg.removeChild(img);
            parentSecondOfTrackingImg.appendChild(img);

        }    
    }
    //////////////////////////////////////

    /* ATTACH IMG BETWEEN SECTIONS  */
    else if(parentFirstOfTrackingImg.getBoundingClientRect().top - 100 <= 20){

     /*   if(!parentFirstOfTrackingImg?.childNodes[1]?.classList?.contains("tracking-img")){

            const img = parentSecondOfTrackingImg.childNodes[1];

            parentSecondOfTrackingImg.removeChild(img);
            parentFirstOfTrackingImg.appendChild(img);

        }*/

        trackingImg.classList.add("fixed-img");      

    }
    //////////////////////////////////////

    /* ATTACH IMG TO FIRST SUBSECTION */
    else if(parentFirstOfTrackingImg.getBoundingClientRect().top - 100 > 20) {

        trackingImg.classList.remove("fixed-img");

        if(!parentFirstOfTrackingImg?.childNodes[1]?.classList?.contains("tracking-img") &&
           !parentFirstOfTrackingImg?.childNodes[2]?.classList?.contains("tracking-img")
        ){

            const img = parentSecondOfTrackingImg.childNodes[1];         

            parentSecondOfTrackingImg.removeChild(img);
            parentFirstOfTrackingImg.appendChild(img);

        }
       
    }
}

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

            console.log(currentScrollIndex * (-window.innerHeight))

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
        //   scrollTrackingImg();
        scrollToTheText(e);
    }
 
})

