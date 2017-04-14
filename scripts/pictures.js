$(document).ready(function () {
	$('.new-box').on('click', 'div', function(){
		var picLink = $(this).find('img').attr('src')
		// debugger;
		var label = $(this).find('p').text()
		var picture = "<img src='" + picLink + "' />"
		var pictureParagraph = picture + "<p>" + label + "</p>"
		$('#picture-box').html(pictureParagraph)
		$('#screen-hide').toggle()
		$('#picture-box').toggle()
	})
	$('#screen-hide').on('click',function() {
		$('#screen-hide').toggle()
		$('#picture-box').toggle()
	})
});