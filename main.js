$(window).scroll(function() {
  // calculate the percentage the user has scrolled down the page
  var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
  $('.ctn-pac').css('width', scrollPercent +"%"  );
});