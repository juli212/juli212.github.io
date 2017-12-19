$(document).ready(function() {

  $('.project.taphover').on('touchstart mouseenter mouseleave click', function(e) {
    $this = $(this).closest('.project')
    event = e.type
    hoverClasses = 'clickable hovered'
    console.log(e.type)

    if ( event == 'touchstart' && !$this.hasClass(hoverClasses) ) {
      e.preventDefault()
      $this.toggleClass(hoverClasses)
      return false
    } else if (event == 'touchstart' && !($(e.target).closest('a.taphover').length > 0 )) {
      $this.toggleClass(hoverClasses)
      return false
    } else if (event == 'touchstart') {
      return true
    }

    if (event == 'mouseenter') {
      $this.addClass(hoverClasses)
      return false
    }
    if (event == 'mouseleave') {
      $this.removeClass(hoverClasses)
      return false
    }

    if (event == 'click' && !$this.hasClass(hoverClasses) ) {
      $this.toggleClass(hoverClasses)
      return false
    }
  })

  $('.project-icon, .bottom-icon').on('mouseenter mouseleave', function() {
    $(this).toggleClass('icon-hover')
  })

})