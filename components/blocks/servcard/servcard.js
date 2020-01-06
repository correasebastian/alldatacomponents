'use strict';
import $ from 'jquery'
/**
 *  This is the main file for Servcard
 */

/* STARTER CODE

class Servcard {
    constructor($inst) {
        cponsole.log('Initializing Servcard')
    }
}

*/

$( ".cmp-servcard" ).click(function() {
    let childr = $(this).children(".cmp-servcard__content");
    childr = childr.children(".cmp-servcard__description");
    let descriptions = $(".cmp-servcard").find(".cmp-servcard__description");
    if($(this).hasClass("cmp-servcard__open")){
        $(this).removeClass("cmp-servcard__open");
        childr.addClass("d-none");
        childr.attr( "aria-hidden", "true");
        childr.attr( "aria-expanded", "false");
    }else{
        $(".cmp-servcard").removeClass("cmp-servcard__open");
        $(this).addClass("cmp-servcard__open");
        $.each(descriptions, function(value) {
            if (!($(this).hasClass("d-none"))) {
                $(this).addClass("d-none");
                $(this).attr( "aria-hidden", "true");
                $(this).attr( "aria-expanded", "false");
            } 
        });
        childr.removeClass("d-none");
        childr.attr( "aria-hidden", "false");
        childr.attr( "aria-expanded", "true");
    }
    
    
});


