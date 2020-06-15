
const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newsletterButton = document.querySelector(".newsletter-btn");

    newsletterButton.classList.add("submitted");    
})