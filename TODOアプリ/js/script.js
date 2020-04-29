$(function() {
  $('body').append('<ul></ul>');
  $('#button1').click(function() {
    var textValue = $('#text1').val();
    $('ul').append(`<li class="list">${textValue}</li>`);
    $('#text1').val('');
  });
  
  $('#button2').click(function() {
    $('.list:last').remove();
  });

  $('ul').on('click', 'list', function() {
    $(this).remove();
  });
});
