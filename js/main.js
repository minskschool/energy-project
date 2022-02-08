$(window).load(function() {
    $('#preloader').fadeOut('slow', function() { $(this).remove(); });
});


$(function() {

    $('.menuToggle').on('click', function() {
        $('.main-nav').slideToggle(500, function() {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
        $('.main-nav__link').on('click', function() {
            $('.main-nav').hide(100, function() {
                if ($(this).css('display') === 'none') {
                    $(this).removeAttr('style');
                }
            });
        });
    });
});

/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/
(function() {

    var bodyEl = document.body,
        //content = document.querySelector( '.content-wrap' ),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn) {
            closebtn.addEventListener('click', toggleMenu);
        }

        /* close the menu element if the target it´s not the menu element or one of its descendants..
        content.addEventListener( 'click', function(ev) {
        	var target = ev.target;
        	if( isOpen && target !== openbtn ) {
        		toggleMenu();
        	}
        } );
        */
    }

    function toggleMenu() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
        } else {
            classie.add(bodyEl, 'show-menu');
        }
        isOpen = !isOpen;
    }

    init();

})();