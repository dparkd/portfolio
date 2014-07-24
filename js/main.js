


//NAVIGATION
$(document).ready(function(){

var $menu = $('.items'),
    $menulink = $('.menu-link');
  
$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});

var toggled = 0;

$('.menu-link').click(function(){
  if(toggled === 0){
  $('.bar3').stop().transition({rotate: "45", "margin-top": "13px"});
  $('.bar2').stop().transition({opacity: "0"}, "fast");
  $('.bar1').stop().transition({rotate: "-45", "margin-top": "13px"});
    toggled++;
    console.log("toggled down");
  }
  else{
    
  $('.bar3').stop().transition({rotate: "+=135", "margin-top": "3px"});
  $('.bar2').transition({opacity: "1"}, "fast");
  $('.bar1').stop().transition({rotate: "-=135", "margin-top": "23px"});
  toggled--;
   console.log("Togged Up");
  }
});

$("#gotoport").click(function() {
    $('html, body').animate({
        scrollTop: $("#iamport").offset().top
    }, 2000);
});

});


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event	){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 150);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}









