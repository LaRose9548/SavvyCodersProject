$('li').on('mouseover',
  function highlight () { $(this).addClass('highlight'); }
) // while mouse is over "this" line item, highlight
$('li').on('mouseleave',
  function highlight () { $(this).removeClass('highlight'); }
) // after mouse leaves "this" line item, remove highlight
