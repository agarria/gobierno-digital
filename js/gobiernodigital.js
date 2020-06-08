function nav_menu() {
    var element = document.getElementById("nav_container");
    var icon = document.getElementById("nav_icon");
    
    element.classList.toggle("show-menu");
    icon.classList.toggle("show-icon");
}

$(document).ready(function() {
    
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
    });
    
});