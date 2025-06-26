jQuery(document).ready(function($) {
    console.log('Run scripts');

    (function($) {
        $.fn.countTo = function(options) {
            options = options || {};

            return $(this).each(function() {
                // set options for current element
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from: $(this).data('from'),
                    to: $(this).data('to'),
                    speed: $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals: $(this).data('decimals')
                }, options);

                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                // references & variables that will change with each update
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);

                // if an existing interval can be found, clear it first
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                // initialize the element with the starting value
                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof(settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                        // remove the interval
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof(settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }

                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.html(formattedValue);
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0, // the number the element should start at
            to: 0, // the number the element should end at
            speed: 1000, // how long it should take to count between the target numbers
            refreshInterval: 40, // how often the element should be updated
            decimals: 0, // the number of decimal places to show
            formatter: formatter, // handler for formatting the value before rendering
            onUpdate: null, // callback method for every time the element is updated
            onComplete: null // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));


    function runCounter() {
        console.log('Run runCounter');
        // custom formatting example
        $('.count-number').data('countToOptions', {
            formatter: function(value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
            }
        });

        // start all the timers
        $('.timer').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    }


    setTimeout(function() {
        runCounter();
    }, 1500);

    fixedTo();
    jQuery(window).scroll(fixedTo);

    jQuery('#plazart-mainnav .navbar-header > .btn-navbar').on('click', function() {
        jQuery('#tz-header-wrapper').toggleClass('menuOpen');
    });

    if (jQuery('body *').is('#tz-position-1')) {
        animation(jQuery('#tz-position-1'));
        jQuery(window).scroll(function() {
            animation(jQuery('#tz-position-1'));
        });
    }
    if (jQuery('body *').is('.first-row-anim')) {
        animation(jQuery('.first-row-anim'));
        jQuery(window).scroll(function() {
            animation(jQuery('.first-row-anim'));
        });
    }
    if (jQuery('body *').is('.second-row-anim')) {
        animation(jQuery('.second-row-anim'));
        jQuery(window).scroll(function() {
            animation(jQuery('.second-row-anim'));
        });
    }

    jQuery('.more-text-home').click(function() {
        jQuery('.main-text').toggleClass('active');
        if ($(this).text() == 'Скрыть') {
            $(this).text('Читать полностью');
        } else {
            $(this).text('Скрыть');
        }
    });

    jQuery('.popupOverlay').click(closeModal);
    jQuery('.popupClose').click(closeModal);

    jQuery('.orderButton').click(function() {
        openModal('.order-popup');
    });
    jQuery('.presentButton').click(function() {
        openModal('.present-popup');
    });
    jQuery('.corniceButton').click(function() {
        openModal('.cornice-popup');
    });
    jQuery('.fabricsAndAccessoriesButton').click(function() {
        openModal('.fabricsAndAccessories-popup');
    });
    jQuery('.threeWindowsButton').click(function() {
        openModal('.threeWindows-popup');
    });


    jQuery('.zapros-na-skidku-10Button').click(function() {
        openModal('.zapros-na-skidku-10-popup');
    });
    jQuery('.zapros-na-skidku-15Button').click(function() {
        openModal('.zapros-na-skidku-15-popup');
    });
    jQuery('.zapros-na-skidku-20Button').click(function() {
        openModal('.zapros-na-skidku-20-popup');
    });


    if (jQuery('body').is('.calculatorPage')) {
        jQuery('body').append('<link rel="stylesheet" type="text/css" href="/templates/tz_interiart/css/themes/default/calculator.css"></link>');
        jQuery('body').append('<script type="text/javascript" src="/templates/tz_interiart/js/calculator.js"></script>');
    }

    jQuery('.tkani-carousel .owl-carousel').owlCarousel({
        items: 4,
        loop: false,
        rewind: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        nav: true,
        navText: ['<span class="nav-prev"><img src="/images/arrow_prev.png" alt="prev" /></span>', '<span class="nav-next"><img src="/images/arrow_next.png" alt="next" /></span>'],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    jQuery('.testimonials-carousel .owl-carousel').owlCarousel({
        items: 2,
        loop: false,
        rewind: true,
        margin: 60,
        dots: true,
        nav: true,
        navText: ['<span class="nav-prev"><img src="/images/arrow_prev.png" alt="prev" /></span>', '<span class="nav-next"><img src="/images/arrow_next.png" alt="next" /></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    jQuery('.sameProd.owl-carousel').owlCarousel({
        items: 3,
        loop: false,
        rewind: false,
        margin: 14,
        mouseDrag: false,
        touchDrag: false,
        dots: false,
        nav: false,
        navText: ['<span class="nav-prev"><img src="/images/arrow_prev.png" alt="prev" /></span>', '<span class="nav-next"><img src="/images/arrow_next.png" alt="next" /></span>'],
        responsive: {
            0: {
                items: 1,
                loop: false,
                rewind: true,
                margin: 8,
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                nav: true,
            },
            600: {
                items: 2,
                loop: false,
                rewind: true,
                margin: 8,
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                nav: true,
            },
            1000: {
                items: 3
            }
        }
    });

    jQuery('.contact-carousel.owl-carousel').owlCarousel({
        items: 5,
        loop: false,
        rewind: false,
        margin: 15,
        mouseDrag: false,
        touchDrag: false,
        dots: false,
        nav: false,
        navText: ['<span class="nav-prev"><img src="/images/arrow_prev.png" alt="prev" /></span>', '<span class="nav-next"><img src="/images/arrow_next.png" alt="next" /></span>'],
        responsive: {
            0: {
                items: 1,
                loop: false,
                rewind: true,
                margin: 10,
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                nav: true,
            },
            600: {
                items: 2,
                loop: false,
                rewind: true,
                margin: 10,
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                nav: true,
            },
            1000: {
                items: 5
            }
        }
    });

    jQuery('.newsflash-row.owl-carousel').owlCarousel({
        items: 4,
        loop: false,
        rewind: false,
        margin: 24,
        mouseDrag: false,
        touchDrag: false,
        dots: false,
        nav: false,
        navText: ['<span class="nav-prev"><img src="/images/arrow_prev.png" alt="prev" /></span>', '<span class="nav-next"><img src="/images/arrow_next.png" alt="next" /></span>'],
        responsive: {
            0: {
                items: 1,
                loop: false,
                rewind: true,
                margin: 8,
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                nav: true,
            },
            600: {
                items: 2,
                loop: false,
                rewind: true,
                margin: 8,
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                nav: true,
            },
            1000: {
                items: 4
            }
        }
    });

    jQuery('.our-brans-gallery-wrapper.owl-carousel').owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
                loop: false,
                rewind: true,
                margin: 8
            },
            600: {
                items: 3,
                loop: false,
                rewind: true,
                margin: 8
            },
            1000: {
                items: 5
            }
        }
    });


    jQuery('.our-works-nav.owl-carousel').owlCarousel({
        items: 7,
        loop: false,
        rewind: false,
        margin: 0,
        mouseDrag: false,
        touchDrag: false,
        dots: false,
        nav: false,
        navText: ['<span class="nav-prev"><img src="/images/arrow_prev.png" alt="prev" /></span>', '<span class="nav-next"><img src="/images/arrow_next.png" alt="next" /></span>'],
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 0,
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                nav: true,
                stagePadding: 50
            },
            600: {
                items: 2,
                loop: true,
                margin: 0,
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                nav: true,
                stagePadding: 50
            },
            1000: {
                items: 7
            }
        }
    });


});


function fixedTo() {
    if (jQuery(window).width() > 800) {
        fixedHeader(150);
    } else {
        fixedHeader(50);
    }
}

function fixedHeader(top) {
    let scrollTop = jQuery(window).scrollTop();
    if (scrollTop > top) {
        jQuery('#tz-header-wrapper').addClass('fixed');
    } else {
        jQuery('#tz-header-wrapper').removeClass('fixed');
    }
}

function animation(elem) {
    elem.addClass('need-animation');
    let eletPosition = elem.offset().top;
    let windowHeight = jQuery(window).height();
    let elemTarget = eletPosition - windowHeight;

    let currScroll = jQuery(window).scrollTop();
    if (currScroll > elemTarget) {
        elem.addClass('start-animation');
    }
}

function openModal(modal) {
    jQuery('.popupOverlay').addClass('active');
    jQuery(modal).addClass('active');
}

function closeModal() {
    jQuery('.popupOverlay').removeClass('active');
    jQuery('.modalWindow').removeClass('active');
}

window.addEventListener('load', _ => {


   let submitbtns = document.querySelectorAll('html:lang(ru-ru) [type="submit"]');

    submitbtns.forEach(submit => {

        // console.log(submit);

        let form = submit;
        do {
            if (form.tagName == 'FORM') {
                break;
            }
        } while (form = form.parentNode);
        // console.log(form);
        let telselectors = ['[name*="hone"]'],
            countfoundinpts = 0;
        telselectors.forEach(selector => {
            let telinputs = form.querySelectorAll(selector);
            countfoundinpts += telinputs.length;
            telinputs.forEach(tel => {
                let newtel = tel.cloneNode(true);
                newtel.setAttribute('autocomplete', 'off');
                newtel.setAttribute('type', 'tel');
                telmask(newtel);
                tel.parentNode.replaceChild(newtel, tel);
                // console.log(newtel);
            });
        });
        submit.onclick = evt => {
            // if (countfoundinpts == 0) {
            //   form.submit();
            // }
            let telinput = form.querySelectorAll(telselectors[0])[0],
                notcorrent = document.createElement('div');
            notcorrent.classList.add('notcorrenttel');
            notcorrent.style.color = 'red';
            notcorrent.innerText = 'Неправильно введенный номер';
            if (telinput.value.length == 0 || telinput.value.indexOf('_') !== -1) {
                if (form.querySelectorAll('.notcorrenttel').length == 0) {
                    telinput.parentNode.insertBefore(notcorrent, telinput.nextSibling);
                }
                evt.preventDefault();
                // console.log('value not correct');
            }
            // console.log(form);
            // console.log(submit);
            // console.log(telinput);
            // console.log(countfoundinpts);
        }
    });





    let submitbtns_ua = document.querySelectorAll('html:lang(uk-ua) [type="submit"]');

    submitbtns_ua.forEach(submit => {

        // console.log(submit);

        let form = submit;
        do {
            if (form.tagName == 'FORM') {
                break;
            }
        } while (form = form.parentNode);
        // console.log(form);
        let telselectors = ['[name*="hone"]'],
            countfoundinpts = 0;
        telselectors.forEach(selector => {
            let telinputs = form.querySelectorAll(selector);
            countfoundinpts += telinputs.length;
            telinputs.forEach(tel => {
                let newtel = tel.cloneNode(true);
                newtel.setAttribute('autocomplete', 'off');
                newtel.setAttribute('type', 'tel');
                telmask(newtel);
                tel.parentNode.replaceChild(newtel, tel);
                // console.log(newtel);
            });
        });
        submit.onclick = evt => {
            // if (countfoundinpts == 0) {
            //   form.submit();
            // }
            let telinput = form.querySelectorAll(telselectors[0])[0],
                notcorrent = document.createElement('div');
            notcorrent.classList.add('notcorrenttel');
            notcorrent.style.color = 'red';
            notcorrent.innerText = 'Неправильно введений номер';
            if (telinput.value.length == 0 || telinput.value.indexOf('_') !== -1) {
                if (form.querySelectorAll('.notcorrenttel').length == 0) {
                    telinput.parentNode.insertBefore(notcorrent, telinput.nextSibling);
                }
                evt.preventDefault();
                // console.log('value not correct');
            }
            // console.log(form);
            // console.log(submit);
            // console.log(telinput);
            // console.log(countfoundinpts);
        }
    });
    // console.log(submitbtns);
}, false);


let forms = document.querySelectorAll('#userForm')
console.log(forms)

forms.forEach(form => {
    let hidden = document.createElement('div')
    hidden.style = 'display:none';
    hidden.innerHTML = '<input type="hidden" name="form[valids]" value="1">';
    // console.log(form)
    // console.log(hidden)
    form.append(hidden)
})

const makenumbermask = (mask, nums) => {

    nums = nums.split('');
    nums.forEach((num) => {
        mask = mask.replace('_', num);
    });

    mask = {
        mask: mask,
        cursor: (mask.indexOf('_') === -1) ? mask.length : mask.indexOf('_')
    }
    return mask;
}


const telmask = input => {
    let mask = '+375 (__) ___-__-__',
        number = '';

    input.addEventListener('focus', _ => {

        let nums = makenumbermask(mask, number);
        input.value = nums.mask;
        setTimeout(() => {
            input.setSelectionRange(nums.cursor, nums.cursor);
        }, 0);

    });

    input.addEventListener('focusin', _ => {

        let nums = makenumbermask(mask, number);
        input.value = nums.mask;
        setTimeout(() => {
            input.setSelectionRange(nums.cursor, nums.cursor);
        }, 0);

    });

    input.addEventListener('focusout', _ => {

        if (number.length < 1) {
            input.value = '';
        }
    });


    input.addEventListener('keydown', (event) => {

        if (event.keyCode == 8 || event.key == 'Backspace' || event.keyCode == 229) {
            number = number.slice(0, -1);
        }

        if (!/\d/.test(event.key) && event.keyCode != 8 && event.key != 'Backspace' && event.keyCode != 229)  {
            event.preventDefault();
            return;
        }

        if (number.length >= 10 && event.keyCode != 8 && event.key != 'Backspace' && event.keyCode != 229) {
            event.preventDefault();
            return;
        }

        if (event.keyCode != 8 && event.key != 'Backspace' && event.keyCode != 229) {
            number += event.key;
        }


        let nums = makenumbermask(mask, number);
        input.value = nums.mask;
        input.setSelectionRange(nums.cursor, nums.cursor);

        event.preventDefault();

    });

    input.addEventListener('keyup', (event) => {

        let nums = makenumbermask(mask, number);
        input.value = nums.mask;
        input.setSelectionRange(nums.cursor, nums.cursor);

    });
}

if (window.innerWidth < 767) {
    document.querySelectorAll('.hidden-text').forEach(el => {
        el.style.display = "none";
    })
    document.querySelectorAll('.hidden-text-btn').forEach(el => {
        el.style.display = "flex";
        el.onclick = _ => {
            if (el.parentNode.querySelector('.hidden-text').style.display == 'none') {
                el.parentNode.querySelector('.hidden-text').style.display = 'block'
                el.innerHTML = 'Скрыть';
            } else {
                el.parentNode.querySelector('.hidden-text').style.display = 'none'
                el.innerHTML = "Читать полностью";
            }
        }
    })
}
