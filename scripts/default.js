$(document).ready(function () {
  var url = window.location.href;
  var activePage = url;
  $('nav a').each(function () {
    var linkPage = this.href;
    if (activePage == linkPage) {
      	// debugger;
     	if ($(this).hasClass('top-level')) {
        $(this).closest("li").addClass("highlighted");
      } else if ($(this).hasClass('second-level')) {
      	$(this).closest('ul').closest('li').addClass('highlighted')
      } 
    }
	});

  $(window).scroll(function(){
    // var scrolled = $(window).scrollTop();
    if ($(window).scrollTop() > 0 ) {
      $('header').addClass('scroll-header')
      $('nav').addClass('scroll-nav')
      // $('aside').addClass('scroll-aside')
      $('section, aside').addClass('scroll-body')
    } else {
      $('header').removeClass('scroll-header')
      $('nav').removeClass('scroll-nav')
      // $('aside').removeClass('scroll-aside')
      $('section, aside').removeClass('scroll-body')
    }
  })
});