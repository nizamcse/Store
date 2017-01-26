$(document).ready(function () {
    /*$("#nav-show-btn").on('click',function(){
        $("#left-main-nav").addClass("nav-collapsed");
    });

    $(".btn-close-menu").on('click',function () {
        $("#left-main-nav").removeClass("nav-collapsed");
    });*/
    $(".toggle-nav").on('click',function () {
        $("#left-main-nav").toggleClass("nav-collapsed");
    });
    $(".theme-dropdown").on('click',function () {
        $(this).toggleClass("open");
    });

    $(window).on('scroll',function () {
        var offset = $(this).scrollTop();
        if(offset>=200){
            $("#header-top").addClass('fixed-top');
        }
        else{
            $("#header-top").removeClass('fixed-top');
        }
    })

});