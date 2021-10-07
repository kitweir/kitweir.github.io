/* i coded this!! all by myself! which yes, i am very proud of.
however, i referenced this stackoverflow answer to figure out the click functionality:
https://stackoverflow.com/questions/813046/jquery-highlight-the-link-when-clicked

and this jsfiddle for the highlight on scroll functionality:
http://jsfiddle.net/vu6hN/28/
*/

$(document).ready(function(){

  $("a[href*='#']").click(function() {
    $(".sidebar a").removeClass('active');
    $(this).addClass('active');
});

$(window).on('scroll', function() {
    $('.content-container').each(function() {
        if($(window).scrollTop() >= $(this).offset().top - 100) {
            var id = $(this).attr('id');
            $('.sidebar a').removeClass('active');
            $('.sidebar a[href=\\#'+ id +']').addClass('active');
        }
    });
});

})
