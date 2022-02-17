//push drawer navbar
$(document).ready(function () {
  $drawerRight = $(".cart-drawer-right");
  $cart_list = $(".cart-btn,.close-btn");

  $cart_list.click(function () {
    $(this).toggleClass("active");
    $(".cart-drawer-push").toggleClass("cart-drawer-pushtoleft");
    $drawerRight.toggleClass("cart-drawer-open");
    $(".open-btn").addClass("inside-menu");
  });
});

$(document).ready(function () {
  $(".next").on("click", () => {
    const currentImg = $(".active");
    const nextImg = currentImg.next();
    $(currentImg).removeClass("active");
    $(nextImg).addClass("active");
    if (currentImg.is(":last-child")) {
      currentImg.siblings(":first-child").addClass("active");
    }

    $(".caption")
      .fadeIn()
      .css({ top: 1000, position: "absolute" })
      .animate({ top: 275 }, 800, function () {});
  });

  $(".prev").on("click", () => {
    const currentImg = $(".active");
    const prevImg = currentImg.prev();
    $(currentImg).removeClass("active");
    $(prevImg).addClass("active");
    if (currentImg.is(":first-child")) {
      currentImg.siblings(":last-child").addClass("active");
    }
    $(".caption")
      .fadeIn()
      .css({ top: 1500, position: "absolute" })
      .animate({ top: 275 }, 800, function () {});
  });
});
/* hover on new botton */



//slider1 in main content
var slide = document.querySelectorAll("#caurosel-slide");
var dot = document.getElementsByClassName("dot");
var count = 0;
var i;
function disno() {
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
}

function no_active() {
  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active");
  }
}

document.addEventListener("drag", function (e) {
  e.preventDefault();
  count++;
  if (count > slide.length - 1) {
    count = 0;
  }
  disno();
  no_active();
  slide[count].style.display = "flex";
  dot[count].classList.add("active");
});

document.addEventListener("drag", function (e) {
  e.preventDefault();
  count--;
  if (count < 0) {
    count = slide.length - 1;
  }
  disno();
  no_active();
  slide[count].style.display = "flex";
  dot[count].classList.add("active");
});

setInterval(function () {
  count++;
  if (count > slide.length - 1) {
    count = 0;
  }
  disno();
  no_active();
  slide[count].style.display = "flex";
  dot[count].classList.add("active");
}, 3000);

/* display text on image with a sliding box  in gallery img part*/
$(document).ready(function () {
  $(".gallery-img").hover(
    function () {
      $(".image-caption", this).slideToggle("fast");
    },
    function () {
      $(".image-caption", this).slideToggle("slow");
    }
  );
});

/* modal and table for date  */

$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    var alldata = $("#myform").serializeArray();
    var Data = {};
    $.each(alldata, function () {
      Data[this.name] = this.value;
    });
    let startDate = Data.arrival;
    let endDate = Data.departure;
    // let numberRoom=Data.room;
    var arrivalDate = new Date(startDate).getTime();
    var depurtureDate = new Date(endDate).getTime();

    $.ajax({
      type: "GET",
      url: "./assets/room.json",
      success: function (response) {
        arrayOfDate = [];
        tableBody = $("table tbody");
        response.map((item) => {
          
          const entryOfDate = new Date(item.from).getTime();
          const dateofDeparture = new Date(item.to).getTime();

          const markup = `<tr><td>${item.from}</td><td>${item.to}</td></tr>`;
          tableBody.append(markup);
          openModal();
          if (
            (arrivalDate >= entryOfDate) &&
            (depurtureDate <= dateofDeparture)
          ) {
          
            $("tr").css("background-color", "green");
            
          }
        });
      },
    });
  });

  $(".closemodal").on("click",function(){
    $(".modal , #overlay").css("display","none");
    window.location.reload();/* reload page */
    $("#myform")[0].reset();/* reset form after close modal */
    //$("#myform").trigger("reset"); /*  or */
    //$("#myform").get(0).reset(); 
  })
});

function openModal() {
  modal.classList.add("activeModal");
  overlay.classList.add("activeModal");
}

/* use owl caurosel in slide2 in main content */
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      dots:true,
      items:1,
      autoplay: true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});