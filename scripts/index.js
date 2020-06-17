
///////////////FORM HANDLING //////////////////
const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newsletterButton = document.querySelector(".newsletter-btn");
    const messageSentBlock = document.querySelector(".message-sent");

    messageSentBlock.classList.add("fade-in-fade-out");
    newsletterButton.disabled = true;

    newsletterButton.classList.add("submitted");    
})
/////////////////////////////////////////////////

///////////// SCROLL  EFFECTS /////////////



/**  VARIABLES */

const container = document.querySelector(".container");

const fullScreenSectionFirst = document.querySelector(".full-screen-section.first");

const fullScreenSectionThird = document.querySelector(".full-screen-section.third");


const trackingImg = document.querySelector(".tracking-img");

const parentFirstOfTrackingImg = document.querySelector(".subsection-second.with-img.first");

const parentSecondOfTrackingImg = document.querySelector(".subsection-second.with-img.second");

const img = parentFirstOfTrackingImg.childNodes[1];

const sectionWithTextFirst = document.querySelector("second-section.first")
const sectionWithTextSecond = document.querySelector("second-section.second")

let currentScrollValue = 0;

let currentScrollIndex = 0;

let isScrolling = false;

const scrollPoints = [
    fullScreenSectionFirst,
    parentFirstOfTrackingImg,
    parentSecondOfTrackingImg,
    fullScreenSectionThird
]

    //container.style.transform = 
         //   `translateY(${-scrollPoints[3].getBoundingClientRect().top}px)`;


const scrollTrackingImg = () => {

  //console.log(parentSecondOfTrackingImg.getBoundingClientRect().top)
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

        console.log(currentScrollIndex)

        isScrolling = true;

        if(e.deltaY > 0){ // IT MEAN SCROLL DOWN
            if(currentScrollIndex < 3){

                currentScrollValue -= window.innerHeight;

                currentScrollIndex++;

           //     console.log(currentScrollIndex)

         /*   container.style.webkitTransform = 
            `translateY(${-scrollPoints[currentScrollIndex].getBoundingClientRect().top}px)`;

            container.style.MozTransform = 
            `translateY(${-scrollPoints[currentScrollIndex].getBoundingClientRect().top}px)`;

            container.style.msTransform = 
            `translateY(${-scrollPoints[currentScrollIndex].getBoundingClientRect().top}px)`;

            container.style.OTransform = 
            `translateY(${-scrollPoints[currentScrollIndex].getBoundingClientRect().top}px)`;

            container.style.transform = 
            `translateY(${-scrollPoints[currentScrollIndex].getBoundingClientRect().top}px)`;*/

            container.style.webkitTransform = 
            `translateY(${currentScrollValue}px)`;

            container.style.MozTransform = 
            `translateY(${currentScrollValue}px)`;

            container.style.msTransform = 
            `translateY(${currentScrollValue}px)`;

            container.style.OTransform = 
            `translateY(${currentScrollValue}px)`;

            container.style.transform = 
            `translateY(${currentScrollValue}px)`;

            }
        } else if (e.deltaY < 0) {

            if(currentScrollIndex > 0){

                currentScrollValue += window.innerHeight;

                currentScrollIndex--;

                container.style.webkitTransform = 
                `translateY(${currentScrollValue}px)`;
    
                container.style.MozTransform = 
                `translateY(${currentScrollValue}px)`;
    
                container.style.msTransform = 
                `translateY(${currentScrollValue}px)`;
    
                container.style.OTransform = 
                `translateY(${currentScrollValue}px)`;
    
                container.style.transform = 
                `translateY(${currentScrollValue}px)`;
            }

        }


        return new Promise( () => {
            setTimeout(() => {
                isScrolling = false;
            },2000)
        })
        
        
    }
    

   // console.log(parentFirstOfTrackingImg.getBoundingClientRect().top)
   // console.log( parentFirstOfTrackingImg.clientHeight)

}

document.addEventListener("wheel", (e) => {
 //   scrollTrackingImg();
    scrollToTheText(e);
})


document.addEventListener("scroll", (e) => {

  //  console.log("A")

    
  
    /////////////////////////////////////////
})

//////////////////////////////////////////////////