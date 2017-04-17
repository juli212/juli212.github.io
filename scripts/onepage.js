$(window).on('scroll load', function() {
	var $sections = $('section').children('div');
  $sections.each(function() {
    if($(window).scrollTop() >= $(this).position().top) {
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
		 700)
	})

	$('#contact').on('submit', function(e) {
	  $('#contact-form *').fadeOut(2000);
	  $('#contact-form').prepend('<p>Message sent!</p>');
	});
})

var submitted=false;