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
    $(this).parent().find('.scene-content-dialog').show().addClass('animated fadeIn');
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
          slidesPerView: 1,
          freeMode: true,
          on: {
            touchStart() {
              var hand = $('.hand');
              if (hand) {
                hand.remove();
              }
            },
            progress(e) {
              var progress= e;
              $('.car').css('top',progress*(window.innerHeight-120) + 'px')
              if( (progress>0.1 && progress< 0.16) ||(progress>0.28 && progress< 0.35) || (progress>0.49 && progress< 0.52) || (progress>0.62 && progress< 0.69)  ){
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
      }
    });
    $('#change-part')[0].play();
    audio.play();
  });
});
