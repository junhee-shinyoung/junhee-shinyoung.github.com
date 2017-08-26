var galleryTop = new Swiper('.gallery-top',
{
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 5,
    preloadImages: false,
    lazyLoading: true,
    onSlideChangeStart: function (swiper) {
        var index = swiper.activeIndex;
        var id = ("0" + (index + 2)).slice(-2)
        var path = 'url(images/gallery' + id + ".jpg)";
        $('#pre-loader').css("background-image", path);
    }
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;

$(window).resize(function () {
    $('#gallery_swpier_wrap').height(
        $(window).width() / 16 * 9 / 85 * 100
    );
    galleryTop.update();
    galleryThumbs.update();
});
$(window).trigger('resize');