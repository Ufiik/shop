(function () {
  $(".categories").select2({
    placeholder: "All Categories"
  });

  var purchaseButton = $(".user-icon-shop"),
      purchaseList = $(".purchase-list-container"),
      purchaseIcon = $(".user-icon-shop-container > .fa-angle-down");

  purchaseButton.on("click", function (event) {
    var target = event.target;
    event.preventDefault();

    if ($(target).hasClass("remove-purchase")) {
      $(target).parent().animate({
        "opacity": "hide"
      }, 200, function () {
        $(target).parent().remove();
      });
      return;
    }

    if($(this).data("hidden")) {
      purchaseList.css("display", "block");
      purchaseList.animate({
        "height": "200px",
        "width": "200px",
        "left": "-200px",
        "top": "0",
        "opacity": "1"
      }, 200);

      $(this).data("hidden", 0);
    } else {
      purchaseList.animate({
        "height": "0",
        "width": "0",
        "left": "10px",
        "top": "10px",
        "opacity": "0",
      }, 200, function () {
        purchaseList.css("display", "none");
      });

      $(this).data("hidden", 1);
    }

    purchaseIcon.toggleClass("active-left-icon");
  });

  $('#menu-toggle').click(function(){
    $(this).toggleClass('open');
    $(".nav").toggleClass("active-navigation");
  });

  var timer = new Timer();
  timer.start({countdown: true, startValues: {hours: 1, minutes: 15, seconds: 41}});

  timer.addEventListener('secondsUpdated', function (e) {

    makeLeftZero({
      ".deal-seconds": "seconds",
      ".deal-minutes": "minutes",
      ".deal-hours": "hours"
    });

});

  function makeLeftZero(options) {
    for (var selector in options) {
      if (options.hasOwnProperty(selector)) {
        if (timer.getTimeValues()[options[selector]] < 10) {
          $(selector).html("0" + timer.getTimeValues()[options[selector]]);
        } else {
          $(selector).html(timer.getTimeValues()[options[selector]]);
        }
      }
    }
  }

  $(".discount-carousel").owlCarousel({
    mouseDrag: false,
    margin: 29,
    nav: true,
    navText: ["<div class='triangle-left lb'><i class='fas fa-angle-left'></i></div>","<div class='triangle-right rb'><i class='fas fa-angle-right'></i></div>"],
    dots: false
  });

}(jQuery));
