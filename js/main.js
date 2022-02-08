$(window).load(function() {
    $('#preloader').fadeOut('slow', function() { $(this).remove(); });
});


let burger = document.getElementById('burger'),
    nav = document.getElementById('main-nav'),
    slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e) {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

slowmo.addEventListener('click', function(e) {
    this.classList.toggle('is-slowmo');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
    slowmo.dispatchEvent(clickEvent);
    burger.dispatchEvent(clickEvent);

    setTimeout(function() {
        burger.dispatchEvent(clickEvent);

        setTimeout(function() {
            slowmo.dispatchEvent(clickEvent);
        }, 3500);
    }, 5500);
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