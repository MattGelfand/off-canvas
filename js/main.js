$('.menu-link').click(function() {
  $('#slider').toggleClass('active');
  $('.container').toggleClass('active');
  $('.img-half').toggleClass('active');
  $($(this).attr('href')).removeClass('hidden');//here you find the section and make it visible
});

$('.menu-close').click(function() {
  $('#slider').toggleClass('active');
  $('.container').toggleClass('active');
  $('.img-half').toggleClass('active');
  $(this).parent().addClass('hidden');//here you hide the section
});


/*$('.hop-icon').on('click', function() {
  $('header').toggleClass('expanded');
  $('.main-content').toggleClass('padding-top');
});
*/



// Fit Text

//$("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' })






// Picture element HTML5 shiv

document.createElement( "picture" );





/* Smoothscroll CSS-Tricks

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top-150
        }, 1000);
        return false;
      }
    }
  });
});

*/


/* AnimationHover('header','tada');

function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};

function animationClick(element, animation){
  element = $(element);
  element.click(
    function() {
      element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};
*/



