jQuery(function($) {
    "use strict";

    var zendvn_meme = window.zendvn_meme || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    zendvn_meme.navigation = function() {
        
    }
    zendvn_meme.isotope = function() {
        var $gridMasonry = $('.ass1-section__isotope-init').masonry({
            columnWidth: '.grid-sizer',
            itemSelector: '.ass1-section__item',
            percentPosition: true
        });
    }

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        zendvn_meme.navigation();
        zendvn_meme.isotope();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

});
