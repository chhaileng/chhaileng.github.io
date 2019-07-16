(function($) {
    "use strict";
    jQuery(document).on('ready', function() {
        function initNav() {
            $('div.toggle-normal').on('click', function() {
                $('i.top-bar').toggleClass('top-transform');
                $('i.middle-bar').toggleClass('middle-transform');
                $('i.bottom-bar').toggleClass('bottom-transform');
            });
            $('.section,div#menu-options a').on('click', function() {
                $('nav#theMenu').removeClass('menu-open');
                $('i.top-bar').removeClass('top-transform');
                $('i.middle-bar').removeClass('middle-transform');
                $('i.bottom-bar').removeClass('bottom-transform');
            });
            $('div#menuToggle').on('click', function() {
                $('div#menuToggle').toggleClass('active');
                $('body').toggleClass('body-push-toright');
                $('nav#theMenu').toggleClass('menu-open');
            });
        }

        function initSmoothScroll() {
            $('div#menu-options,div#about-btn').find('a[href*=#]:not([href=#])').on('click', function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 900, "swing");
                        return false;
                    }
                }
            });
        }

        function initScrollToTop() {
            $(window).on('scroll', function() {
                if ($(this).scrollTop() >= 50) {
                    $('div#scrollup').addClass('animated flipInY').fadeIn(200);
                } else {
                    $('div#scrollup').fadeOut(200);
                }
            });
            $('div#scrollup').on('click', function() {
                $("html,body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        }

        function initContribution() {
            $('.popup-image').magnificPopup({
                type: 'image',
                removalDelay: 160,
                callbacks: {
                    beforeOpen: function() {
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainClass = this.st.el.attr('data-effect');
                    }
                },
                closeOnContentClick: true,
                midClick: true
            });
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }

        function initSkills() {
            $('div.skillbar').each(function() {
                $(this).find('div.skillbar-bar').css({
                    width: $(this).attr('data-percent')
                });
            });
        }

        initNav();
        initSmoothScroll();
        initScrollToTop();
        initContribution();
        initSkills();
    });
    jQuery(window).on('load', function() {
        $('div#loading').fadeOut(500);
        window.sr = ScrollReveal({
            reset: false
        });
        var commonCards = '.interest-icon-even,.interest-icon,' + '.timeline-dot,.timeline-content,#skills-card,' + '#contributions-card,#interest-card,#blog-card,#p-one,#p-two,#p-three,.section-title img';
        sr.reveal(commonCards, {
            duration: 1100
        });
        sr.reveal('#about-card', {
            duration: 1400,
            delay: 500
        });
        sr.reveal('#v-card-holder', {
            duration: 1400,
            distance: '150px'
        });
        sr.reveal('.skillbar-bar', {
            duration: 1800,
            delay: 300,
            distance: '0'
        });
    });
})(jQuery);