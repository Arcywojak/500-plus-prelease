const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newsletterButton = document.querySelector(".newsletter-btn");
    const messageSentBlock = document.querySelector(".message-sent");

    const emailInput = document.querySelector("#newsletter-input");

    fetch(`http://vps817819.ovh.net:40/newsletter/?email=${emailInput.value}.com`, {
        method: "GET",
        credentials: 'same-origin',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then( res => console.log(res))
        .catch(err => console.log(err))

    messageSentBlock.classList.add("fade-in-fade-out");
    newsletterButton.disabled = true;

    newsletterButton.classList.add("submitted");    
})

