AOS.init({
    duration: 750
});
$(".icon").hover(function () {
    $(this).addClass("animated tada");
}, function () {
    $(this).removeClass("animated tada");
});