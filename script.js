mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

$(document).ready(function () {
  $(".p1").hide();
  $(".hide-1").hide();

  $(".show-1").click(function () {
    $(".p1").slideDown("slow");
    $(".show-1").hide();
    $(".hide-1").show();
  });
  $(".hide-1").click(function () {
    $(".show-1").show();
    $(".p1").slideUp("slow");
    $(".hide-1").hide();
  });
});
$(document).ready(function () {
  $(".p2").hide();
  $(".hide-2").hide();
  $(".hide-2").click(function () {
    $(".show-2").show();
    $(".p2").slideUp("slow");
    $(".hide-2").hide();
  });
  $(".show-2").click(function () {
    $(".p2").slideDown("slow");
    $(".show-2").hide();
    $(".hide-2").show();
  });
});
$(document).ready(function () {
  $(".p3").hide();
  $(".hide-3").hide();
  $(".hide-3").click(function () {
    $(".show-3").show();
    $(".p3").slideUp("slow");
    $(".hide-3").hide();
  });
  $(".show-3").click(function () {
    $(".p3").slideDown("slow");
    $(".show-3").hide();
    $(".hide-3").show();
  });
});
$(document).ready(function () {
  $(".p4").hide();
  $(".hide-4").hide();
  $(".hide-4").click(function () {
    $(".show-4").show();
    $(".p4").slideUp("slow");
    $(".hide-4").hide();
  });
  $(".show-4").click(function () {
    $(".p4").slideDown("slow");
    $(".show-4").hide();
    $(".hide-4").show();
  });
});
$(document).ready(function () {
  $(".p5").hide();
  $(".hide-5").hide();
  $(".hide-5").click(function () {
    $(".show-5").show();
    $(".p5").slideUp("slow");
    $(".hide-5").hide();
  });
  $(".show-5").click(function () {
    $(".p5").slideDown("slow");
    $(".show-5").hide();
    $(".hide-5").show();
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


