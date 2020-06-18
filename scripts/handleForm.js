const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newsletterButton = document.querySelector(".newsletter-btn");
    const messageSentBlock = document.querySelector(".message-sent");

    messageSentBlock.classList.add("fade-in-fade-out");
    newsletterButton.disabled = true;

    newsletterButton.classList.add("submitted");    
})