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
	loadPics($('.new-box'))

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

	$('body').keyup(function(e){
		var $nextPic
		var $currentPic = $('.current-big')
		if ($('#picture-box').is(':visible') && e.keyCode == 37 && $currentPic.prev().hasClass('small-pic') ) {
			$nextPic = $currentPic.prev() 
		} else if ($('#picture-box').is(':visible') && e.keyCode == 39 && $currentPic.next().hasClass('small-pic') ) {
			$nextPic = $currentPic.next()
		} else {
			return
		}
		switchPic($currentPic, $nextPic)
	});


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
		switchPic($currentPic, $nextPic)
	})

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

	function loadPics(newBox) {
		var $picContainer = newBox
		var pics = iLikePics
		var picDiv = smallPicDiv
		$(pics).each(function(){
			var newPath = "imgs/" + this.path
			var newBlurb = this.blurb
			$picContainer.append(picDiv)
			$('.small-pic').last().find('img').attr('src', newPath)
			$('.small-pic').last().find('p').text(newBlurb)
		})
	}
	
	function switchPic($currentPic, $nextPic) {
		$currentPic.removeClass('current-big')
		$nextPic.addClass('current-big')
		var newSrc = $nextPic.find('img').attr('src')
		var newLabel = $nextPic.find('p').text()
		$('#picture-box #big-pic').attr('src', newSrc)
		$('#picture-box p').text(newLabel)
	}

	function toggleThings() {
		$('#screen-hide, #picture-box').toggle()
	}

})
var submitted=false;

var smallPicDiv = "<div class='small-pic'><img src=''/><p></p></div>"

var iLikePics = [
	{path: "boats.jpg", blurb: "BOATS"},
	{path: "cat.png", blurb: "CAT-SITTING"},
	{path: "soccer.png", blurb: "SOCCER"},
	{path: "sunset.jpg", blurb: "SUNSETS"},
	{path: "camping.png", blurb: "CAMPING"},
	{path: "bridge.jpg", blurb: "THIS BRIDGE"},
	{path: "igloo.png", blurb: "IGLOOS"},
	{path: "triangle.png", blurb: "TRIANGLES"},
	{path: "ducks.jpg", blurb: "DUCK FAMILY"},
	{path: "beer.jpg", blurb: "BEER"},
	{path: "pool.png", blurb: "POOL"},
	{path: "books.png", blurb: "BOOKS"},
	{path: "waterfall.jpg", blurb: "WATERFALLS"},
	{path: "cleats.png", blurb: "MY CLEATS"},
	{path: "dog.jpg", blurb: "DOGS"},
	{path: "soup.png", blurb: "SOUP!"},
	{path: "ruins.jpg", blurb: "RUINS"},
	{path: "desertcamp.png", blurb: "THE DESERT"},
	{path: "fire.jpg", blurb: "BONFIRES"},
	{path: "halloween.png", blurb: "HALLOWEEN"},
	{path: "mehiking.png", blurb: "HIKING"},
	{path: "hiking.png", blurb: "PRETTY NATURE"},
	{path: "skiing.png", blurb: "SKIING"},
	{path: "tea.jpg", blurb: "TEA"},
	{path: "beach.png", blurb: "BEACH"},
	{path: "boardgame.png", blurb: "BOARDGAMES"},
	{path: "monkeyfoot.jpg", blurb: "MONKEY ON MY FOOT"},
	{path: "cardboard.png", blurb: "ROBOT FIGHTS"}
]