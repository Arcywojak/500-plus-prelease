const newsletterForm = document.querySelector(".newsletter-form");
const loader = document.querySelector(".lds-ellipsis");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    loader.classList.remove("hidden");

    const newsletterButton = document.querySelector(".newsletter-btn");
    const messageSentBlock = document.querySelector(".message-sent");

    const emailInput = document.querySelector("#newsletter-input");

    const URL = `https://cz5plusservices.pl:40/newsletter/?email=${emailInput.value}`

    fetch(URL, {
        method: "GET",
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then( res => res.json())
        .then( response => {

            

            const EMAIL_TAKEN = "Email already in database";
            const EMAIL_ADDED = "Email sent properly";

            if(response === EMAIL_ADDED){

                if(messageSentBlock.classList.contains("fade-in-fade-out")){
                    messageSentBlock.classList.remove("fade-in-fade-out");

                    //reset animation
                    void messageSentBlock.offsetWidth;
                }

                messageSentBlock.innerText = "Adres E-Mail dodano do naszej bazy!"
                messageSentBlock.classList.add("fade-in-fade-out");
                newsletterButton.disabled = true;
                newsletterButton.classList.add("submitted");

            } else if(response === EMAIL_TAKEN){

                if(messageSentBlock.classList.contains("fade-in-fade-out")){
                    messageSentBlock.classList.remove("fade-in-fade-out");

                    void messageSentBlock.offsetWidth;
                }

                messageSentBlock.innerText = "Ten E-mail znajduje się już w naszej bazie!"
                messageSentBlock.classList.add("fade-in-fade-out");
                

            }

            loader.classList.add("hidden");
            
        })
        .catch(err => {

            if(messageSentBlock.classList.contains("fade-in-fade-out")){
                messageSentBlock.classList.remove("fade-in-fade-out");

                    //reset animation
                void messageSentBlock.offsetWidth;
            }

            messageSentBlock.innerText = "Coś poszło nie tak. UPS!"
            messageSentBlock.classList.add("fade-in-fade-out");

            loader.classList.add("hidden");

        })

        
})



