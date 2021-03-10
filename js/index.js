console.log("Your index.js file is loaded correc")


$(document).ready(function() {

// $(window).on("load", function(){

//     $("#animatethis").removeClass("rightcontent");
//     $("#animatethis").slideDown("slow");
//     $("#animatethis").addClass("leftcontent", 3000);
//     $("#animatethis").css("color","orange");
// });


$(window).on("load", function(){

  $("#name").animate({
      left: 150, 
      top: -70
  }, 3000);

  $("#cvBtn").animate({
    top: 110,
}, 3000);

$("#mainBody").animate({
    top: 170
}, 3000);

$(".mainBlurb").animate({
    left:-150,
    top: 125
}, 1500);




$(".mainBlurb").animate({
    left: -620, 
}, 1500);

$(".line").fadeOut(500);

$("#removeP").fadeOut(1500);

$("#tagline").addClass("tagline");

$(".rectangle").animate({
    width:100,
}, 3000);

// $(".rectangle").hide();
// $(".rectangle1").delay(1500).css({
//     width:2000, 
// }, 4500);


// $(".rectangle1").show(3000)

$("#aboutme").show("slide", {direction: "left"}, 3000);

});










$('.circle').on("click", function(){
    $(".listup").removeClass("listup");
    $(".textup").removeClass("textup");
    $(this).children().toggleClass("textup");
    $(this).children('ul').toggleClass("listup");
    // $(".footernav").css("margin-bottom", "300px");
    
});


// $('.circle1').on("click", function(){
// $(".footernav").css("margin-bottom", "200px");
// });

$('.circle').on("click", function(){
    $(".footernav").css("margin-bottom", "300px");
    });



$(".aboutcontent h2").animate({ right:"-200px" , opacity: "1"  }, 2000)





    $(".imagelogo1").hover(function(){
       $(".imagelogo1").effect( "bounce", {times:1}, 800 );
    });
    

 });














