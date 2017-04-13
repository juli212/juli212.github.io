$(document).ready(function () {
	$('.new-box').on('click', 'div', function(){
		var picLink = $(this).find('img').attr('src')
		var picture = "<img src='" + picLink + "' />"
		$('#picture-box').html(picture)
		$('#screen-hide').toggle()
		$('#picture-box').toggle()
	})
	$('#screen-hide').on('click',function() {
		$('#screen-hide').toggle()
		$('#picture-box').toggle()
	})
});