"use strict";
import { tns } from "tiny-slider/src/tiny-slider";
import $ from "jquery";
/**
 *  This is the main file for Companies
 */

/* STARTER CODE

class Companies {
    constructor($inst) {
        cponsole.log('Initializing Companies')
    }
}

*/

$(document).ready(function() {
  var sliderLg = tns({
    container: ".companies-slider-lg",
    nav: false,
    loop: false,
    rewind: true,
    mouseDrag: true,
    prevButton: "#prev-lg",
    nextButton: "#next-lg",
    items: 5,
    slideBy: "page",
    swipeAngle: false,
    speed: 400
  });

  var sliderMob = tns({
    container: ".companies-slider-mob",
    controlsPosition: "bottom",
    nav: true,
    navContainer: "#mov-nav",
    navPosition: "bottom",
    loop: false,
    rewind: true,
    mouseDrag: true,
    prevButton: "#prev-mob",
    nextButton: "#next-mob",
    items: 1,
    slideBy: "page",
    swipeAngle: false,
    speed: 400
  });
});
