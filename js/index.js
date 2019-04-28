// 小轮播图
//上按钮
var index = 0;
$(".zy-content .zy-right .zy-rigpos").find(".a1").click(function () {
    console.log("上翻");
    if (index == 0) {
        $(".swiper").css("top", 0);
    }
    index++;
    var movenum = index * $(".swiper img").outerHeight();
    $(".swiper").stop().animate({
        top: -movenum,
    }, 500);
    if (index == 2) {
        index = 0;
    }
});
// 下按钮
$(".zy-right .zy-rigpos").find(".a2").click(function () {
    console.log("下翻");
    index--;
    if (index < 0) {
        index = 1;
        $(".swiper").css("top", -2 * $(".swiper img").outerHeight());
    }
    var movenum = index * $(".swiper img").outerHeight();
    $(".swiper").stop().animate({
        top: -movenum,
    }, 500);
})
// 大轮播图