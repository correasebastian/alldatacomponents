'use strict';
import $ from 'jquery'
/**
 *  This is the main file for Collapse List
 */

/* STARTER CODE

class CollapseList {
    constructor($inst) {
        cponsole.log('Initializing CollapseList')
    }
}

*/

$( ".cmp-collapse-list__title" ).click(function() {
    let parent = $(this).parent(".cmp-collapse-list");
    let iconMore = $(this).children(".cmp-collapse-list-button__show-more");
    let iconLess = $(this).children(".cmp-collapse-list-button__show-less");
    let list = parent.children(".cmp-collapse-list__content");
    let lists = $(".cmp-collapse-list").find(".cmp-collapse-list__content");
    if(list.hasClass("list-closed")){
        $.each(lists, function(value) {
            let parentlists = $(this).parent(".cmp-collapse-list");
            let titleLists = parentlists.children(".cmp-collapse-list__title");
            let listMore = titleLists.children(".cmp-collapse-list-button__show-more");
            let listLess = titleLists.children(".cmp-collapse-list-button__show-less");
            if (!($(this).hasClass("list-closed"))) {
                $(this).addClass("list-closed");
                $(this).attr( "aria-hidden", "true");
                $(this).attr( "aria-expanded", "false");
                listMore.removeClass("d-none");
                listLess.addClass("d-none");
            } 
        });
        list.removeClass("list-closed");
        list.attr( "aria-hidden", "false");
        list.attr( "aria-expanded", "true");
        iconMore.addClass("d-none");
        iconLess.removeClass("d-none");
    }else{
        list.addClass("list-closed");
        list.attr( "aria-hidden", "true");
        list.attr( "aria-expanded", "false");
        iconMore.removeClass("d-none");
        iconLess.addClass("d-none");
    }
    
    
});
