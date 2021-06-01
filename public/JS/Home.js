var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid #fff}";
    document.body.appendChild(css);
};

const popUp = document.querySelector(".popUp")
// const contentBody = document.querySelector(".content-body")
document.querySelector("#contact-btn").addEventListener("click", () => {
    // var classes = popUp.className.split(" ")
    // let i = classes.indexOf("hide")
    // if(i >= 0) {
    //     classes.splice(i, 1);
    // }
    // else {
    //     classes.push("hide");
    // }
    // popUp.className = classes.join(" ");
    // alert("hlw")
    popUp.classList.toggle("hide")
    contentBody.style.overflow = "hidden"
    contentBody.style.filter = "blur(2px)"
})

contentBody.addEventListener("click", () => {
    if(!popUp.classList.contains("hide")) {
        popUp.classList.toggle("hide")
        contentBody.style.filter = "blur(0px)"
        contentBody.style.overflow = "auto"
    }
}, capture='True')


// Feedback form scripting

const feedbackForm = document.querySelector(".feedback-form")
const feedBtn = document.querySelector(".feedback-form button")
