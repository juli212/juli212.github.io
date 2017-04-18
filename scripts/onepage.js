$(window).on('scroll load', function() {
	var $sections = $('section').children('div');
	var distScrolled = $(window).scrollTop()
	var winHeight = $(window).height()
	var bottomPos = $('aside').position().top + $('nav').height() + $('header').height()
	if ( distScrolled + winHeight >= bottomPos) {
      	$('.highlighted').removeClass('highlighted')
      	$('#contact').closest('li').addClass('highlighted')
	} else {
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
    })
  };
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
})
