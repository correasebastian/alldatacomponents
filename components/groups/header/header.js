"use strict";
import $ from "jquery";
// DESKTOP
if ($(window).width() > 991) {
  var arraySubmenus = $(".nav.navbar-nav").find(".nav-submenu");
  var arrayMenus = $(".nav.navbar-nav").find(".nav-link.has-dropdown");
  var currentSub;
  var currentMenu;
  $(".navbar.navbar-expand-lg").focusin(function() {
    var elem = $(this).find(":focus");
    if (elem.hasClass("nav-link has-dropdown")) {
      var submenu = elem.parent().children(".nav-submenu");
      arraySubmenus.css({ display: "none", "z-index": 0 });
      arraySubmenus.attr("aria-hidden", "true");
      arrayMenus.attr("aria-expanded", "false");
      elem.attr("aria-expanded", "true");
      submenu.attr("aria-hidden", "false");
      submenu.css({ display: "flex", "z-index": 1 });
      $(".cmp-header__desktop .blue-filler").removeClass("d-none");
    } else if (
      elem.hasClass("submenu-link") ||
      elem.hasClass("submenu-title")
    ) {
    } else {
      $(".cmp-header__desktop .blue-filler").addClass("d-none");

      arraySubmenus.css({ display: "none", "z-index": 0 });
      arraySubmenus.attr("aria-hidden", "true");
      arrayMenus.attr("aria-expanded", "false");
    }
  });

  $(".nav-menu-item.nav-item.has-dropdown").hover(
    function() {
      $(".cmp-header__desktop .blue-filler").removeClass("d-none");
    },
    function() {
      $(".cmp-header__desktop .blue-filler").addClass("d-none");
    }
  );
}
// MOBILE
$(".burger-icon, .close-menu").on("click", function() {
  var mobileMenu = $(".cmp-header-mobile__nav-setup");
  var submenu = $(".submenu-navbar");

  if (mobileMenu.css("display") === "none") {
    mobileMenu.show();
    submenu.hide();
    setTimeout(function() {
      mobileMenu.css("width", "100%");
    }, 100);
  } else {
    mobileMenu.css("width", "0");
    setTimeout(function() {
      mobileMenu.hide();
      submenu.hide();
    }, 550);
  }
});

$(".main-navbar-item, .secondary-navbar-item").on("click", function() {
  var submenu = $(this).next(".submenu-navbar");

  if (submenu.css("display") === "none") {
    submenu.show();
  } else {
    submenu.hide();
  }
});

$(".secondary-navbar-item").on("click", function() {
  console.log("ok");
  var submenu = $(this).find(".navbar-dropdown");
  var items = submenu.find(".secondary-dropdown-item").length;
  var itemHeight = $(this).innerHeight();

  if (submenu.css("height") === "0px") {
    submenu.css("height", itemHeight * items + items + "px");
  } else {
    submenu.css("height", "0");
  }
});

$(".submenu-navbar-item").on("click", function() {
  var submenu = $(this).next(".lastLevel-navbar");
  var items = submenu.find(".lastLevel-navbar-item").length;
  var itemHeight = $(this).innerHeight();

  if (submenu.css("height") === "0px") {
    $(this).addClass("selected-item");
    submenu.css("height", itemHeight * items + items + "px");
  } else {
    $(this).removeClass("selected-item");
    submenu.css("height", "0");
  }
});

$(".menu-back").on("click", function() {
  var submenu = $(".submenu-navbar");
  submenu.hide();
});
