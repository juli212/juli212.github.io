$(document).ready(function () {
	$('#contact-form').on('submit', function(e) {
		$('#contact-form').fadeTo("5000", 0.1, function() {
			document.getElementById('contact-form').reset();
			$('#contact-form').fadeTo("3000", 1.0, function(){
				$('#contact-form').prepend('<p>message sent</p>');
			})
		})
	});
});
var submitted=false;