$(function() {
  $('body').append('<ul></ul>');
  $('#button1').click(function() {
    var textValue = $('#text1').val();
    $('ul').append(`<li class="list">${textValue}</li>`);
  });
  
  $('#button2').click(function() {
    $('.list:last').remove();
  });

  $('ul').on('click', 'li', function() {
    $(this).remove();
  });
});