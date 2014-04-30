$.fn.ajaxpost = function (options) {
    return $.ajax({
        url: $(this).attr('action')
      , data: $(this).serialize()
      , method: $(this).attr('method')
    });
}

