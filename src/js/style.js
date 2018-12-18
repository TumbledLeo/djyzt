$(function () {
  // tab切换
  function tabCtrl(ele) {
      $(ele + ' .tabContents .tabContent').hide().eq(0).show();
      $(ele + ' .tabs .tab').eq(0).addClass('active');
      $(ele + ' .tabs .tab').hover(function (e) {
          e.stopPropagation();
          e.preventDefault();
          if ($(this).hasClass('active')) {
              return;
          }
          $(this).addClass('active').siblings().removeClass('active');
          let me = $(this);
          let index = 0;
          $(ele + ' .tabs .tab').each(function (i) {
              if (me.get(0) === $(this).get(0)) {
                  index = i;
              }
          });
          $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn();
      });
  }
  function tabCtrl1(ele) {
    $(ele + ' .tabContents1 .tabContent1').hide().eq(0).show();
    $(ele + ' .tabs1 .tab1').eq(0).addClass('active');
    $(ele + ' .tabs1 .tab1').hover(function (e) {
        e.stopPropagation();
        e.preventDefault();
        if ($(this).hasClass('active')) {
            return;
        }
        $(this).addClass('active').siblings().removeClass('active');
        let me = $(this);
        let index = 0;
        $(ele + ' .tabs1 .tab1').each(function (i) {
            if (me.get(0) === $(this).get(0)) {
                index = i;
            }
        });
        $(ele + ' .tabContents1 .tabContent1').hide().eq(index).fadeIn();
    });
}
  tabCtrl('.navbar');
  tabCtrl('.ycap');
  tabCtrl('.ysj');
  tabCtrl('.gl_1');

  tabCtrl1('.so');
  //$('html,body').animate({scrollTop: $(this.hash).offset().top - 100}, 600);
//   $(".nav a").bind("click touch",function(){
//     //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
//     $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top)},500,function(){
//      // $(document).addEventListener('mousewheel', function(event, delta) {return false;});  
//       //火狐浏览器必须用addEventListener！addEventListener绑定的事件需要通过event下面的preventDefault();
//     });
    
//   });

// $(document).on('mousewheel DOMMouseScroll', onMouseScroll);
// function onMouseScroll(e){
//     e.preventDefault();
//     var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
//     var delta = Math.max(-1, Math.min(1, wheel) );
//     if(delta<0){//向下滚动
//       $('.swip').addClass("anit");
//       $('.swipp').addClass("anitt");
//       setTimeout(function(){$('.top').fadeOut()},200);
      
//     }else{//向上滚动
//     //   $('.swip').removeClass("anit");
//     //   $('.swipp').removeClass("anitt");
//     //   $('.top').fadeIn();
//     }    
// }
    $('.top').click(function(){
        $('.swip').addClass("anit");
        $('.swipp').addClass("anitt");
        $('.show').css("display","block");
        setTimeout(function(){$('.top').fadeOut()},200);
    });
    $('.nav li a').click(function(){
        $('.wo1').css("display","none");
        var cl = $(this).attr('id');
        var cli = '.'+cl;
        $(cli).css("display","block");
    });
    $('#s0').click(function(){
        $('.wo1').css("display","none");
        $('.s0').css("display","block");
    });
    $('.a5').hover(function(){
        $('.wrap img').animate({width:"100%",bottom:"0"},800);
    },function(){
    });
});