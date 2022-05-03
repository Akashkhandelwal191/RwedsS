
// Loader JS 
var Preloader = document.getElementById("loader");
function myFunction() {

    Preloader.style.display = "none";

}

var countDownDate = new Date("May 11, 2022 00:00:00").getTime();
var trigger = 0;
var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  if(distance > 0)
  { 
  document.getElementById("Days").innerHTML = days;
  document.getElementById("Hours").innerHTML = hours;
  document.getElementById("Minutes").innerHTML = minutes;
  document.getElementById("Seconds").innerHTML = seconds;
  }
   
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("launch").innerHTML = "EVENT OVER";
  }
}, 1000);

function Slide() {
  document.getElementById("switch1").style.top = "10%";
  trigger = 1;
}

function UnSlide() {
  document.getElementById("switch1").style.top = "-50%";
  trigger = 0;
}

document.getElementById("menu").addEventListener("click", toggleSwitch);
function toggleSwitch() {
  if (trigger == 0) {
    Slide();
  } else {
    UnSlide();
  }
}

const divs = document.querySelectorAll(".a");
divs.forEach((el) =>
  el.addEventListener("click", (event) => {
    UnSlide();
  })
);

//Scroll Button BACK TO TOP JS
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 181) {
    document.getElementById("backtotop").style.display = "block";
  } else {
    document.getElementById("backtotop").style.display = "none";
  }
});

const topscroll = document.querySelector("#backtotop");
topscroll.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//Form Submission Js Function
var form = document.getElementById("fs-frm");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      // status.innerHTML = "Thanks for your submission!";

      window.alert("Thanks! Your Response has been Recorded");
      form.reset();
    })
    .catch((error) => {
      // status.innerHTML = "Oops! There was a problem submitting your form"
      window.alert("Oops! There was a problem");
    });
}
form.addEventListener("submit", handleSubmit);

window.a = -1;
window.check = ".horizontal";

function Progressbar(a, check) {
  const myStepProgressBar = new Kodhus.StepProgressBar();
  myStepProgressBar.init({ selector: check, activeIndex: a });
}

window.addEventListener("load", checking);
window.addEventListener("resize", checking);

function checking() {
  if (this.screen.width <= 995) {
    var element = this.document.getElementById("cdt");
    if (element.classList.contains("horizontal")) {
      element.classList.remove("horizontal");
    }
    check = ".cdt-step-progressbar";
    Progressbar(a, check);
    this.document.getElementById("container-progress").style.marginTop = "40px";
    this.document.getElementById("container-progress").style.marginLeft =
      "30px";
  }

  if (this.screen.width > 995) {
    this.document.getElementById("cdt").classList.add("horizontal");
    check = ".horizontal";
    Progressbar(a, check);
    this.document.getElementById("container-progress").style.margin = "40px";
  }
}

setInterval(() => {
  a++;
  Progressbar(a, check);
  if (a == 4) {
    a = -1;
    setTimeout(() => {
      Progressbar(a, check);
    }, 2000);
  }
}, 4000);



