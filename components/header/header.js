'use strict';
import $ from 'jquery';
// DESKTOP
$('').hover( function () {
    
});

$( '.nav-menu-item.nav-item.has-dropdown' ).hover(
    function() {
        $('.cmp-header__desktop .blue-filler').removeClass('d-none');
    }, function() {
        $('.cmp-header__desktop .blue-filler').addClass('d-none');
    }
  );


// MOBILE
$('.burger-icon, .close-menu').on('click', function () {
    var mobileMenu = $('.cmp-header-mobile__nav-setup');
    var submenu = $('.submenu-navbar');
    
    if (mobileMenu.css('display') === 'none') {
        mobileMenu.show();
        submenu.hide();
        setTimeout(function () {
            mobileMenu.css('width', '100%')
        },100);
    } else {
        mobileMenu.css('width', '0');
        setTimeout(function () {
            mobileMenu.hide();
            submenu.hide();
        },550);
        
    }
});

$('.main-navbar-item, .secondary-navbar-item').on('click', function () {
    var submenu = $(this).next('.submenu-navbar');

    if (submenu.css('display') === 'none') {
        submenu.show();
    } else {
        submenu.hide();
    }
});

$('.secondary-navbar-item').on('click', function () {
    console.log('ok');
    var submenu = $(this).find('.navbar-dropdown');
    var items = submenu.find('.secondary-dropdown-item').length;
    var itemHeight = $(this).innerHeight();

    if (submenu.css('height') === '0px') {
        submenu.css('height', itemHeight * items + items + 'px');
    } else {
        submenu.css('height', '0');
    }
});

$('.submenu-navbar-item').on('click', function () {
    
    var submenu = $(this).next('.lastLevel-navbar');
    var items = submenu.find('.lastLevel-navbar-item').length;
    var itemHeight = $(this).innerHeight();

    if (submenu.css('height') === '0px') {
        $(this).addClass("selected-item");
        submenu.css('height', itemHeight * items + items + 'px');
    } else {
        $(this).removeClass("selected-item");
        submenu.css('height', '0');
    }
});

$('.menu-back').on('click', function () {
    var submenu = $('.submenu-navbar');
    submenu.hide();
});
