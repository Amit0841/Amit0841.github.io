$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $("#nav-menu").addClass("sticky");
      } else {
        $("#nav-menu").removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // slide-up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
  
    $("#nav-menu .menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $(".nav-link").click(function () {
      $("#nav-menu .menu").toggleClass("active");
      $(".nav-link i").toggleClass("active");
    });
  
    // typing text animation script
    // var typed = new Typed(".typing", {
    //   strings: ["Java Developer", "Coder", "Problem Solver"],
    //   typeSpeed: 100,
    //   backSpeed: 60,
    //   loop: true,
    // });
  
    var typed = new Typed(".typing-2", {
      strings: ["Java Developer", "Coder", "Problem Solver"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    // owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
    loop: false,
      autoplay: false,   //for carousel effect turn it true
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });
  document.getElementById("resume-button-1").addEventListener("click", function() {
    var pdfUrl = "https://drive.google.com/file/d/1OMZLxgfJOqTU1Nc9kseNOKt1dqNRFuMF/view?usp=sharing";
    window.open(pdfUrl, "_blank");
});
document.getElementById("resume-button-2").addEventListener("click", function() {
  var pdfUrl = "https://drive.google.com/file/d/1OMZLxgfJOqTU1Nc9kseNOKt1dqNRFuMF/view?usp=sharing";
  window.open(pdfUrl, "_blank");
});