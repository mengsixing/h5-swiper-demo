var audio;
$(function () {
  audio = $('#audio')[0];
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;
  // 旋转元素
  changeOrientation($('.part1'));
  changeOrientation($('.swiper-slide-content'));

  // 播放完
  audio.onended=function(){
    $('.music-icon').removeClass('run');
  }

  // 点击播放
  $('.music-icon').click(function () {
    if (audio.paused) {
      audio.play();
      $('.music-icon').addClass('run');
    } else {
      audio.pause();
      $('.music-icon').removeClass('run');
    }
  });

  // 点击tip
  $('.tip-icon').click(function () {
    var dialog=$(this).parent().find('.scene-content-dialog');
    if(dialog.css('display')==='none'){
      dialog.show().addClass('animated fadeIn');
    }else{
      dialog.hide();
    }
    
  });

  // 进入part2
  $('.part1-container').click(function () {
    anime({
      targets: $('.part1')[0],
      opacity: [1, 0],
      duration: 3000,
      backgroundColor: '#fff',
      easing: 'easeInOutQuad',
      begin: function (anim) {
        $('.circle').show();
      },
      complete: function (anim) {
        $('.part1').remove();
        $('.part2').show();
        var swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          // slidesPerView: 1,
          // freeMode: true,
          on: {
            touchStart() {
              var hand = $('.hand');
              if (hand) {
                hand.remove();
              }
            },
            progress(e) {
              var progress= e;
              console.log(progress);
              $('.car').css('top',progress*(window.innerHeight-120) + 'px');
              var contentText=$('.scene-content-text');
              if(progress>=0.01){
                contentText.eq(0).show().addClass('animated fadeIn');
              }
              if(progress>=0.2){
                contentText.eq(1).show().addClass('animated fadeIn');
              }
              if(progress>=0.35){
                contentText.eq(2).show().addClass('animated fadeIn');
              }
              if(progress>=0.53){
                contentText.eq(3).show().addClass('animated fadeIn');
              }
              if(progress>=0.7){
                contentText.eq(4).show().addClass('animated fadeIn');
              }
              if(progress>=0.88){
                contentText.eq(5).show().addClass('animated fadeIn');
              }
              if( (progress>=0.1 && progress< 0.2) ||(progress>=0.3 && progress< 0.4) || (progress>=0.5 && progress< 0.6) || (progress>=0.7 && progress<= 0.8) ){
                  $('.car').removeClass('fadeIn');
                  $('.car').addClass('animated fadeOut');
              }else{
                if($('.car').hasClass('fadeOut')){
                  $('.car').removeClass('fadeOut');
                  $('.car').addClass('animated fadeIn');
                }
              }
            },
          }
        });
        
        $('.music-icon').addClass('run');
        $('.ren').addClass('run');
      }
    });
    $('#change-part')[0].play();
    audio.play();
  });
});
