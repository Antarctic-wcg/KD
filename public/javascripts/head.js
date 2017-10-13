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

      $('#btt').click(function(){
        $('.hi').eq(1).show().siblings().hide();
      });

      $('.dropdown .dropdown-menu li').click(function(){
        $('.hi').eq($(this).index()+1).show().siblings().hide();
      });

        if(Number($('.hi').eq(3).attr('op')) == 1){
          console.log(Number($('.hi').eq(3).attr('op')));
          $('.hi').eq(3).show().siblings().hide();
        }else if(Number($('.hi').eq(4).attr('op')) == 2){
            console.log(Number($('.hi').eq(4).attr('op')));
            $('.hi').eq(4).show().siblings().hide();
        }
});
