const media = document.querySelector(".redirect");

const redirectBlock = document.querySelector(".redirect-block")

setTimeout(() => {
    redirectBlock.classList.add("hidden-up")
}, 500)



const toggleRedirectBlock = () => {
    redirectBlock.classList.toggle("hidden-up");
}

const redirect = (e) => {
    const path = e.target.id;

    toggleRedirectBlock();
   

    setTimeout( () => {
        window.location.pathname = `/${path}`

    }, 1000)
}


media.addEventListener("click", (e) => {
    redirect(e)
})