const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    // Close Hamburder Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

// Slider
(function ($) {
  var cover = $("#hero"),
    covers = $(".fadecovers");

  /* covers.children(":not(:last-child)").hide();

  var sliderInterval = setInterval(function () {
    covers
      .children(":last-child")
      .fadeOut(1500, function () {
        $(this).prependTo(covers);
      })
      .prev()
      .fadeIn(1500);
  }, 5000); */

  var Slider = {
    intervalID: null,
    running: false,
    set: function (id) {
      this.intervalID = id;
    },
    get: function () {
      return "IDcko intervalu je: " + this.intervalID;
    },
    start: function () {
      this.intervalID = setInterval(function () {
        covers
          .children(":last-child")
          .fadeOut(1500, function () {
            $(this).prependTo(covers);
          })
          .prev()
          .fadeIn(1500);
      }, 5000);
      this.running = true;
    },
    pause: function () {
      clearInterval(this.intervalID);
      this.intervalID = null;
      this.running = false;
    },
    resume: function () {
      if (!this.intervalID) this.start();
    },
    toggle: function () {
      if (this.running) this.pause();
      else this.resume();
    },
  };

  Slider.start();

  covers.on("click", function () {
    Slider.toggle();
  });

  // DISPLAY REFERENCE
  var points = $("#references__points");
  var copy = $(".references__copy");
  var a =
    "Nunc risus massa, sollicitudin eu purus ac, congue pulvinar quam. Duis id enim at risus vestibulum convallis.";
  var b = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  var c = "Mauris sapien nibh, rhoncus at blandit non, imperdiet nec nibh.";
  var d = "Pellentesque efficitur nulla a justo varius ultrices.";
  var e = "Praesent hendrerit diam nec elementum interdum.";
  var f = "Quisque pellentesque sapien id tellus lacinia efficitur.";
  var g =
    "Fusce eget leo elit. Praesent fermentum risus magna, vitae vulputate elit lacinia in.";

  copy.text(a);

  points.find("button:nth-child(1)").on("click", function (event) {
    //copy.text($(this).text());
    copy.text(a);

    event.preventDefault();
  });

  points.find("button:nth-child(2)").on("click", function (event) {
    //copy.text($(this).text());
    copy.text(b);

    event.preventDefault();
  });

  points.find("button:nth-child(3)").on("click", function (event) {
    //copy.text($(this).text());
    copy.text(c);

    event.preventDefault();
  });

  points.find("button:nth-child(4)").on("click", function (event) {
    //copy.text($(this).text());
    copy.text(d);

    event.preventDefault();
  });

  points.find("button:nth-child(5)").on("click", function (event) {
    //copy.text($(this).text());
    copy.text(e);

    event.preventDefault();
  });

  points.find("button:nth-child(6)").on("click", function (event) {
    //copy.text($(this).text());
    copy.text(f);

    event.preventDefault();
  });

  points.find("button:nth-child(7)").on("click", function (event) {
    //copy.text($(this).text());
    copy.text(g);

    event.preventDefault();
  });
})(jQuery);

// Add active class to the current point (highlight it)
var highpoint = document.getElementById("references__points");
var btns = highpoint.getElementsByClassName("references__point");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
