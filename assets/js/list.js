(function($) {
  var List = function(element) {

    $(element).on('input', '.add-input', function(e){
      var list = $(element).find('.list');
      var newListItemHtml = $(element).find('.list-item-template').html();
      list.append(newListItemHtml);
      var newListItem = list.find('.list-item').last();
      var newInput = newListItem.find('input');
      newInput.val($(e.target).val())
      $(e.target).val('')
      console.log(newInput.focus());
    })

    $(element).on('keydown', '.list .input', function(e){
      var listItem = $(e.target).parents('.list-item');
      var closestInput = (listItem.prev().length > 0) ? listItem.prev().find('input') : listItem.next().find('input')
      if(closestInput.length == 0){
        closestInput = $(element).find('.add-input');
      }
      if($(e.target).val() == '' && e.keyCode == 8){ //Backspace
        e.preventDefault();
        listItem.remove();
        setCursorToEnd(closestInput)
      }
      if(e.keyCode == 13){ //Enter
        e.preventDefault()
        $(element).find('.add-input').focus()
      }
    })

    $(element).on('focus', 'input', function(e){
      var list = $(element).find('.list');
      var listInputs = list.find('input');
      $.each(listInputs, function(i, input){
        if($(input).val() == ''){
          $(input).parent('.list-item').remove();
        }
      })
    })

    $(element).find('.list').sortable({
      handle: '.sortable-handle'
    });

  };

  var setCursorToEnd = function(element){

    var value = element.val();
    element.focus();
    element.val('')
    element.val(value)
    
  }

  $.fn.list = function() {

    return this.each(function() {

      if($(this).data('list')) {
        return $(this).data('list');
      } else {
        var list = new List(this);
        $(this).data('list', list);
        return list;
      }

    });

  };

})(jQuery);