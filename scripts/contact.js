$(document).ready(function () {
	var submitted=false;
	$('#contact').on('submit', function(e) {
	  $('#contact-form *').fadeOut(2000);
	  $('#contact-form').prepend('<p>Message sent!</p>');
	});
});