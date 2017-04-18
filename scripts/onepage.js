$(window).on('scroll load', function() {
	var $sections = $('section').children('div');
	var distScrolled = $(window).scrollTop()
  $sections.each(function() {
  	var distFromTop = $(this).position().top - 40
    if(distScrolled >= distFromTop) {
      var section = "#" + this.className.replace('onepage-', '')
      var $navTab = $('nav').find(section).closest('li')
      if (!$navTab.hasClass('highlighted')) {
      	$('.highlighted').removeClass('highlighted')
      	$navTab.addClass('highlighted')
      }
    }
  });
});

$(document).ready(function() {
	$('nav').on('click', 'a', function(e){
		e.preventDefault()
		var clicked = ".onepage-" + this.id
		var topHeight = $('header').height() + $('nav').height();
		var offsetNum = $(clicked).offset().top - topHeight
		$('.highlighted').removeClass('highlighted');
		$(this).closest('li').addClass('highlighted');
		$("body").animate({
			scrollTop: offsetNum},
		 600)
	})

	// $('#contact').on('submit', function(e) {
	//   $('#contact-form *').fadeOut(2000);
	//   $('#contact-form').prepend('<p>Message sent!</p>');
	// });

})
	// $('body').on('click', '.switch', function(e) {
	// 	e.preventDefault();
	// 	var bodyClass = $(this).closest('body')[0].className
	// 	if ( bodyClass == 'onepage-body') {
	// 		// make it multipage

	// 	} else if ( bodyClass == 'multipage-body') {
	// 		// make it onepage
	// 	}
	// 	// debugger;
	// })

// var submitted=false;
