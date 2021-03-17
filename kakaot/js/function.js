$(function () {
     const mnu = $("header>.head>.nav>li>a");

     $mnu.on('click', function (evt) {
          evt.preventDefault();

          $("body , html").animate({
               scrollTop: $(this.hash).offset().top
          });
     });
});