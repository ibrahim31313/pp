//### Header ###
//-My variables :
let menuIcon = document.querySelector(".menu-icon")
let aArr = Array.from(document.querySelectorAll(".ul a"))
let header = document.querySelector(".header")
let headerLogo = document.querySelector(".logo")


//-main code
menuIcon.addEventListener("click", showHideMenu)
aArr.forEach((a) => {
    a.addEventListener("click", aActiveState, event)
})

//-The external functions :
function showHideMenu() {
    document.querySelector("nav").classList.toggle("active")
}
function aActiveState(e) {
    // remove active class from all a 
    aArr.forEach((a) => {
        a.classList.remove("active")
    })

    // put the active class on the cuurent a 
    e.currentTarget.classList.add("active")
}
