// Scroll Menu
$(function() {


    $("nav  a").click(function() {
      //**Add class active to current clicked menu item  and remove class active from other menu item**//
      $(this).addClass('active').parent().siblings().children().removeClass('active');
      //** Smooth scroll Logic **?
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });