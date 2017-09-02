$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
        $('#wrapper').toggleClass('toggled');

      $('#sidebar-wrapper .nav li').click(function(){
        $('.hi').eq($(this).index()-1).show().siblings().hide();
      });

      $('.dropdown .dropdown-menu li').click(function(){
        $('.hi').eq($(this).index()+1).show().siblings().hide();
      });

      $('.nav>li>a').hover(function(){
        console.log(123);
        $(this).css('background-color','#000');
      },function(){
        $(this).css('background-color','none');
      });
});
