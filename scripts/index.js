
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

///////////// TRACKING IMG ANIMATION /////////////

const trackingImg = document.querySelector(".tracking-img");

const parentFirstOfTrackingImg = document.querySelector(".subsection-second.with-img.first");

const parentSecondOfTrackingImg = document.querySelector(".subsection-second.with-img.second");




const img = parentFirstOfTrackingImg.childNodes[1];


document.addEventListener("scroll", () => {

    //console.log(parentSecondOfTrackingImg.getBoundingClientRect().top)
    /* ATTACH IMG TO SECOND SUBSECTION  */
    if(parentSecondOfTrackingImg.getBoundingClientRect().top - 100 <= 20){

        trackingImg.classList.remove("fixed-img");

        if(parentFirstOfTrackingImg?.childNodes[1]?.classList?.contains("tracking-img") ||
           parentFirstOfTrackingImg?.childNodes[2]?.classList?.contains("tracking-img")
        ){

            console.log("FIRST HAVE")

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

            console.log("SECOND HAVE")

          

            parentSecondOfTrackingImg.removeChild(img);
            parentFirstOfTrackingImg.appendChild(img);

        }
       
    }
    /////////////////////////////////////////
})

//////////////////////////////////////////////////