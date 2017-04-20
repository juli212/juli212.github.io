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

	$('.new-box').on('click', '.small-pic', function(){
		$(this).addClass('current-big')
		var picLink = $(this).find('img').attr('src')
		var label = $(this).find('p').text()
		$('#picture-box #big-pic').attr('src', picLink)
		$('#picture-box p').text(label)
		toggleThings()
	})
	$('#screen-hide').on('click',function() {
		toggleThings()
	})

	$('.arrow').on('click', function(){
		var $arrow = $(this)
		var $currentPic = $('.current-big')
		var $nextPic
		if ( $arrow.hasClass('arrow-left') && $currentPic.prev().hasClass('small-pic') ){
			$nextPic = $currentPic.prev()
		} else if ( $arrow.hasClass('arrow-right') && $currentPic.next().hasClass('small-pic') ){
			$nextPic = $currentPic.next()
		} else {
			return
		}
		$currentPic.removeClass('current-big')
		$nextPic.addClass('current-big')
		var newSrc = $nextPic.find('img').attr('src')
		var newLabel = $nextPic.find('p').text()
		$('#picture-box #big-pic').attr('src', newSrc)
		$('#picture-box p').text(newLabel)
	})

	function toggleThings() {
		$('#screen-hide, #picture-box').toggle()
	}

	$('#contact-form').on('submit', function(e) {
		$('#contact-form').prepend('<p>message sent</p>');
		$('#contact-form').fadeTo(5000, 0.1, function() {
			document.getElementById('contact-form').reset();
			$('#contact-form').fadeTo(3000, 1.0, function(){
				setTimeout(function() {
					$('#contact-form p').remove()
				}, 2000);
			})
		})
	});
})
var submitted=false;