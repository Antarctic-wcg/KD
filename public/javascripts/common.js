$(function(){


  //头部隐藏
  var $oldS = 0;
  $(window).on('scroll',function(){
    var $nowS = $(this).scrollTop();
    if ($nowS - $oldS >= 100) {
      $('#nav').stop().slideUp('fast');
      $oldS = $nowS;
    }else if($nowS - $oldS <= -100){
      $('#nav').stop().slideDown('fast');
      $oldS = $nowS;
    };
  });

  $('nav .nav .user').hover(function(){
    $('nav .nav .user .user_info').stop().slideDown();
  },function(){
    $('nav .nav .user .user_info').stop().slideUp();
  })
  $('nav .nav .user').click(function(){
    $('nav .nav .user .user_info').stop().slideDown();
  });
  // $(document).click(function(){
  //   $('nav .nav .user .user_info').stop().slideUp();
  //   return false;
  // })
  //导航隐藏
  function dis(){
    if ($(window).width() <= 560) {
      $('#nav .navbar').hide();
    }else {
      $('#nav .navbar').show();
    }
  }
  dis();
  $(window).on('resize',dis);
  //导航边框
  $('#nav .navbar ul li a').hover(function(){
    // console.log(this.offsetTop,this.offsetLeft,$(this).width());
    $('.nav_border').css('display','block');
    $('.nav_border').stop().animate({width:$(this).innerWidth()+'px',height:$(this).height()+'px',left:this.offsetLeft+'px'},500);
  },function(){
    // console.log(this.offsetTop,this.offsetLeft);
    var $liFirst = $('.nav_one');
    $('.nav_border').stop().animate({width:$liFirst.innerWidth()+'px',height:$(this).innerHeight()+'px',left:$liFirst[0].offsetLeft+'px'},500);
  });

});
