var audio;
$(function(){
  audio=$('#audio')[0];
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;
  changeOrientation($('.body-container'));
  changeOrientation($('.swiper-slide-content'));

  // 绑定点击播放事件
  $('.music-icon').click(function(){
    if(audio.paused){
      audio.play();
      $('.music-icon').addClass('run');
    }else{
      audio.pause();
      $('.music-icon').removeClass('run');
    }
  });
});

function showTip(){
  $('.tip').show().addClass('animated fadeIn');
}

function gotoPart2(){
  $('.part1').hide();
  $('.part2').show();
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    freeMode: true,
    on: {
      touchMove(e) {
        // console.log(e.touches[0].screenY);
      },
      slideNextTransitionStart(e) {
        console.log(this.activeIndex);
      },
    }
  });
  audio.play();
  $('.music-icon').addClass('run');
}

