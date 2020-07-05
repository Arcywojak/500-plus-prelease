
const redirectBlock = document.querySelector(".redirect-block");

// REMOVE REDIRECT BLOCK WHEN WEBSITE IS LOADED
setTimeout(() => {
    redirectBlock.classList.add("hidden-up")
}, 500)
///////////////////////////////////////////////


const redirect = (e) => {

    const path = e.target.id;

    redirectBlock.classList.toggle("hidden-up");

    setTimeout( () => {
        window.location.pathname = `/${path}`

    }, 1000)
}


const logo = document.querySelector(".logo-wrapper");

logo.addEventListener("click", (e) => {

    redirect(e);

})

const footerA = document.querySelectorAll(".footer-a");

footerA.forEach( (a) => {

    a.addEventListener("click", (e) => {

        redirect(e);

    })
})

