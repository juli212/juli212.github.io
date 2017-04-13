$(document).ready(function () {
	var submitted=false;
	$('#contact').on('submit', function(e) {
	  $('#contact *').fadeOut(2000);
	  $('#contact').prepend('<p>Message sent!</p>');
	});
});