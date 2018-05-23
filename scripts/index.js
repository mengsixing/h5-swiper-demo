var audio;
$(function(){
  audio=$('#audio')[0];
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;
  // 旋转元素
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
  // $('.body-container').remove();
  anime({
    targets: $('.body-container')[0],
    opacity: [1,0],
    duration:3000,
    backgroundColor: '#fff',
    easing: 'easeInOutQuad',
    begin: function(anim) {
      $('#change-part')[0].play();
      $('.circle').show();
    },
    complete: function(anim) {
      $('.body-container').remove();
      $('.part2').show();
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        freeMode: true,
        on: {
          setTransition(e) {
            // console.log(e.touches[0].screenY);
            var number=  Math.abs(swiper.translate)/window.innerHeight ;
            var numberInt=Number.parseInt(number);
            number=number-numberInt;
            console.log(number);
            console.log('打印',$('.big-img-2')[0].getBoundingClientRect());
            if(number>0.3 && number<0.7 && numberInt<4){
              $('.car').removeClass('fadeIn');
              $('.car').addClass('animated fadeOut');
            }else{
              $('.car').removeClass('fadeOut');
              $('.car').addClass('animated fadeIn');
            }
          },
          slideNextTransitionStart(e) {
            console.log(this.activeIndex);
          },
          slideNextTransitionEnd(){
          }
        }
      });
      audio.play();
      $('.music-icon').addClass('run');
    }
  });
  
}

