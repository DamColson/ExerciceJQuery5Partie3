function moveLeftAndRight(key) {
  var margLeft = parseFloat($('#square').css('marginLeft').split('p').shift());
  var margRight = parseFloat(($('#square').css('marginRight').split('p').shift()));
  var margTop = parseFloat(($('#square').css('marginTop').split('p').shift()));
  var margBottom = parseFloat(($('#square').css('marginBottom').split('p').shift()));
  console.log(margRight, margLeft, margTop, margBottom);
  if (key.which == 37) {
    margLeft -= 10;
    if (margLeft < 0) {
      margLeft = $(window).width();
      $('#square').css('marginLeft', margLeft + 'px');
    } else {
      console.log(margLeft + 'px');
      $('#square').css('marginLeft', margLeft + 'px');
      console.log($('#square').css('marginLeft'));
    }
  } else if (key.which == 38) {
    margTop -= 10;
    if (margTop < 0) {
      margTop = $(window).height();
      $('#square').css('marginTop', (margTop + 'px'));
    } else {
      console.log(margTop + 'px');
      $('#square').css('marginTop', margTop + 'px');
      console.log($('#square').css('marginTop'));
    }
  } else if (key.which == 39) {
    margLeft += 10;
    if (margLeft > $(window).width()) {
      margLeft = 0
      $('#square').css('marginLeft', (margLeft + 'px'));
    } else {
      console.log(margLeft + 'px');
      $('#square').css('marginLeft', margLeft + 'px');
      console.log($('#square').css('marginLeft'));
    }
  } else if (key.which == 40) {
    margTop += 10;
    if (margTop > $(window).height()) {
      margTop = 0;
      $('#square').css('marginTop', (margTop + 'px'));
    } else {
      console.log(margTop + 'px');
      $('#square').css('marginTop', margTop + 'px');
      console.log($('#square').css('marginTop'));
    }
  }
}




$('#move').keydown(moveLeftAndRight);
