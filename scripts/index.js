var audio;
$(function () {
  audio = $('#audio')[0];
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;
  // 旋转元素
  changeOrientation($('.part1'));
  changeOrientation($('.swiper-slide-content'));

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
        $('#change-part')[0].play();
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
            setTransition(e) {
              // console.log(e.touches[0].screenY);
              var number = Math.abs(swiper.translate) / window.innerHeight;
              var numberInt = Number.parseInt(number);
              number = number - numberInt;
              console.log(number);
              console.log('打印', $('.big-img-2')[0].getBoundingClientRect());
              if (number > 0.3 && number < 0.7 && numberInt < 4) {
                $('.car').removeClass('fadeIn');
                $('.car').addClass('animated fadeOut');
              } else {
                $('.car').removeClass('fadeOut');
                $('.car').addClass('animated fadeIn');
              }
            },
            slideNextTransitionStart(e) {
              console.log(this.activeIndex);
            },
            slideNextTransitionEnd() {}
          }
        });
        audio.play();
        $('.music-icon').addClass('run');
      }
    });
  });
});
