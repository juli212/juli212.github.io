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
      	// $(this).parent().parent().parent().addClass('highlighted')
      	$(this).closest('ul').closest('li').addClass('highlighted')
      } 
    }
	});
});