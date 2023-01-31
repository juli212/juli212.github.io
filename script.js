const touchClasses = ['clickable', 'hovered']

$(document).ready(function() {

  $('.project.taphover').on('touchstart mouseenter mouseleave click', function(e) {
    const { target, type: event } = e
    const removeByClasses = `.${touchClasses.join('.')}`
    const classesToTogggle = touchClasses.join(' ')
    $project = $(this).closest('.project')

    // handle touch events inside project sections
    if (event == 'touchstart') {
      if (!$project.hasClass(classesToTogggle) ) {
        e.preventDefault()
        // remove click/hover classes from all elements that have them
        $(removeByClasses).removeClass(classesToTogggle)
        // add click/hover classes to current project
        $project.toggleClass(classesToTogggle)
        return
      } else if (!($(target).closest('a.taphover').length > 0 )) {
        // toggle click/hover classes
        $project.toggleClass(classesToTogggle)
        return
      }
      return
    }

    // handle mouse hover start of project sections - add click/hover classes
    if (event == 'mouseenter') {
      $project.addClass(classesToTogggle)
      return
    }
    // handle mouse hover end of project sections - remove click/hover classes
    if (event == 'mouseleave') {
      $project.removeClass(classesToTogggle)
      return
    }

    // handle mouse click of project sections - toggle click/hover classes
    if (event == 'click' && !$project.hasClass(classesToTogggle) ) {
      $project.toggleClass(classesToTogggle)
      return
    }
  })

  $('.project-icon, .bottom-icon').on('mouseenter mouseleave', function() {
    $(this).toggleClass('icon-hover')
  })

})