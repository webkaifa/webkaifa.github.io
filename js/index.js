  $(function() {
    $('.nav li').click(function(event) {
      //�Լ���ɫ���������˶�����
      /*$(this).siblings().css('background','');
       $(this).css('background','red')*/
      $(this).addClass('active1').siblings().removeClass();
    });
  });


