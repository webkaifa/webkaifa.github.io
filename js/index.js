  $(function() {
    $('.nav li').click(function(event) {
      //自己变色，其他的人都不变
      /*$(this).siblings().css('background','');
       $(this).css('background','red')*/
      $(this).addClass('active1').siblings().removeClass();
    });
  });


