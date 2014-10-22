$.fn.ajaxsend = function (options) {
    var data = ((typeof options === 'object') && options['data'])
        ? options['data'] : $(this).serialize();
    return $.ajax({
        url: $(this).attr('action')
      , data: data
      , method: $(this).attr('method')
    });
}
