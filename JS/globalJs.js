const sideNavBtn = document.querySelector(".collapsible");
const sideNav = document.querySelector(".sidenav");
const closeBtn = document.querySelector(".closebtn");
const navItems = document.querySelectorAll(".nav-items a")
        
sideNavBtn.addEventListener('click', () => {
    sideNav.style.width = "380px";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
});

closeBtn.addEventListener('click', () => {
    sideNav.style.width = "0px"
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        let currentElem = document.querySelector(".active");
        currentElem.className = currentElem.className.replace("active", "");
        navItem.className += "active";
        navItem.parentElement.className.addEventListener("mouseover", () => {
            navItem.style.color = "red"
        })
    })
})

// document.querySelector(".active").removeEventListener('click');
// document.querySelector(".active").addEventListener('click', () => {
//     document.querySelector(".active").style.backgroundColor = "red";
// }, useCapture)
