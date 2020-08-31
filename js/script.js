$('body').scrollspy({target: "#navbar", offset: 26});

$("#navbar a").on('click', function(event)
{
    if(this.hash !== "")
    {
        event.preventDefault();
        let hash = this.hash;

        $('html, body').animate({scrollTop: $(hash).offset().top}, 500, function(){window.location.hash = hash;});
    }
});

var videoTop = Number($(".header video").css("top").replace(/[^-\d\.]/g, ''));

$(window).on('scroll', function()
{
    $(".header video").css("top", videoTop + (window.scrollY / 2));
});

$(window).on('scroll', function()
{
    $(".header video").css("top", videoTop + (window.scrollY / 2));
});

$(".screenshot").on('click', function()
{
    $(".lightbox img").attr("src", $(this).attr("src"));
    $(".lightbox").fadeIn(500);
});

$(".lightbox").on('click', function()
{
    $(".lightbox").fadeOut(500);
});