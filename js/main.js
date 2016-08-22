$(document).ready(function() {
  $('.game').fadeIn(2200);
});

$(function(){
  $(".typed-header").typed({
    strings: ["PiXel Arcade"],
    typeSpeed: 70
  });
  $('.typed-cursor').fadeOut(2000);
});

$(function(){
  $(".typed-footer").typed({
    strings: ["Choose A Game"],
    typeSpeed: 70
  });
  $('.typed-cursor').fadeOut(2000);
});

$('#tic-tac-toe-launcher').click(function() {
  $('#scanlines').load('tic-tac-toe-game.html');
});

$('.go-back').click(function() {
  $('body').load('index.html');
});