var height;
var width;




$(function(){
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;
  changeOrientation($('.body-container'));
  changeOrientation($('.swiper-slide-content'));
  
});


function showTip(){
  $('.tip').removeClass('tip').addClass('animated fadeIn');
}

