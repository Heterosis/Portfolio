AOS.init({
    duration: 750
});

$(".icon").hover(function () {
    $(this).addClass("animated tada");
}, function () {
    $(this).removeClass("animated tada");
});

$("a[href^='#']").on("click", function (e) {
    e.preventDefault();

    var target = this.hash;

    $("html, body").animate({
        "scrollTop": $(target).offset().top - 56
    });
});