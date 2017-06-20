$(document).ready(function(){
	$('.blog-entry').first().toggle()
	var numEntries = $('.blog-entry').length
	var w = numEntries * 47
	$('#inside-timeline-container').css('width', w)
	var $entryBox = $('#timeline-entries')
	for (i = 0; i < numEntries; i++ ) {
		var n = i + 1
		var d = $($('.blog-entry')[i]).find('.entry-day').text()
		var newEvent = beginning + n + middle + d +end
		$entryBox.append(newEvent)
		
		var post = "../achilles/entry" + n + ".html" 
		$($('.blog-entry')[i]).find('div').load(post)

		if ($($('.blog-entry')[i]).hasClass('pre-op') ) {
			$('.tl-entry').last().addClass('pre')
		} else if ($($('.blog-entry')[i]).hasClass('post-op')) {
			$('.tl-entry').last().addClass('past')
		} else if ($($('.blog-entry')[i]).hasClass('upcoming')) {
			$('.tl-entry').last().addClass('future')
		}
	}

	$('.tl-entry').first().find('.tl-label a').addClass('selected-tl')

	$('.tl-entry:odd').addClass('tl-down')
	$('.tl-entry:even').addClass('tl-up')

	$('#timeline-entries').on('click', '.tl-entry a', function() {
		event.preventDefault()
		$('.selected-tl').removeClass('selected-tl')
		$(this).addClass('selected-tl')
		$('.blog-entry').css('display', "none")

		var $entryNum = $(this).closest('.tl-entry').attr('id').replace('tl-entry-', '')
		var showEntry = ".blog-entry#entry-" + $entryNum
		$(showEntry).toggle()
	})

	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var injuryDate = new Date(2017, 00, 27);
	injuryDate.setHours(21);
	injuryDate.setMinutes(30);
	var today = new Date(); // today

	var fromInjury = Math.round(Math.abs((injuryDate.getTime() - today.getTime())/(oneDay)));
	var fromSurgery = fromInjury - 21
	$('#injury-time').text(fromInjury);
	$('#surgery-time').text(fromSurgery);
})

var beginning = "<div id='tl-entry-"

var middle = "' class='tl-entry'><div class='tl-label'><a href='#'>"

var end = "</a></div></div>"