
$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

//   if ((screen.width<600)) {
//     // if screen size is 1025px wide or larger
//     // $(".navbar-2").css('display', 'block'); // you can also use $(".yourClass").hide();
//     $(".navbar-2").show()
//     $(".cards-container").css("flex-direction","column");
//     console.log("here");
// }
if(screen.width>1024){
  $(".navbar-2").hide();
  // $(".cards-container").css("flex-direction","column");


}
if(screen.width<900){
  $(".navbar-2").show();
  $(".navbar-2, a").show();
  $(".cards-container").css("flex-direction","column");
  console.log("here");
$("cards-container").hide();
}