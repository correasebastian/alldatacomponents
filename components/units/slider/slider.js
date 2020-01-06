'use strict';

import $ from 'jquery'
/**
 *  This is the main file for Slider
 */

/* STARTER CODE

class Slider {
    constructor($inst) {
        cponsole.log('Initializing Slider')
    }
}

*/

function normalizeSlideHeights() {
    $('.carousel.same-height').each(function () {
        var items = $('.carousel-item', this);
        // reset the height
        items.css('min-height', 0);
        // set the height
        var maxHeight = Math.max.apply(null,
            items.map(function () {
                return $(this).outerHeight()
            }).get());
        items.css('min-height', maxHeight + 'px');
    })
}

$(window).on( 'load resize orientationchange', normalizeSlideHeights);