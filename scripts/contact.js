$(document).ready(function () {
	$('#contact-form').on('submit', function(e) {
	  $('#contact-form *').fadeOut(2000);
	  $('#contact-form').prepend('<p>Message sent!</p>');
	});
});
var submitted=false;