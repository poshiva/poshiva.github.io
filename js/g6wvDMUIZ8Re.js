
function viewport() {
    var t = window
      , e = "inner";
    return "innerWidth"in window || (e = "client",
    t = document.documentElement || document.body),
    {
        width: t[e + "Width"],
        height: t[e + "Height"]
    }
}
jQuery(document).ready(function() {
    jQuery(".ajax").ajaxForm(),
    jQuery("input[name='telephone'], input[type='tel']").mask("+375 (29) 999-99-99").each(function() {
        var t = jQuery(this).attr("title");
        jQuery(this).val(t)
    }),
    jQuery("input[type='text'], input[type='tel'], textarea").focus(function() {
        var t = jQuery(this).attr("id");
        jQuery(this).hasClass("error") && (jQuery(this).val("").removeClass("error"),
        jQuery("label[for='" + t + "']").removeClass("error"))
    }),
    jQuery("input[type='text'], input[type='tel'], textarea").focus(function() {
        jQuery(this).attr("title") == jQuery(this).val() && jQuery(this).val("")
    }),
    jQuery("input[type='text'], input[type='tel'], textarea").blur(function() {
        var t = jQuery(this).attr("title");
        "" == jQuery(this).val() && jQuery(this).val(t)
    }),
    jQuery("input, textarea").each(function() {
        var t = jQuery(this).attr("placeholder");
        jQuery(this).focus(function() {
            jQuery(this).attr("placeholder", "")
        }),
        jQuery(this).focusout(function() {
            jQuery(this).attr("placeholder", t)
        })
    }),
    jQuery(".popup .close, .popup .overlay").click(function() {
        return jQuery(this).closest(".popup").fadeOut(500),
        jQuery(this).closest(".popup").hasClass("popup-video") && jQuery(this).closest(".popup").find("video, iframe").attr("src", ""),
        !1
    }),
    jQuery(".popup .close, .popup .overlay").click(function() {
        return jQuery(this).closest(".popup").fadeOut(500),
        !1
    }),
    jQuery(".popup-click").click(function() {
        var t = jQuery(this).data("name")
          , e = jQuery(this).data("text")
          , s = jQuery(this).data("ya");
        jQuery(".popup." + t).fadeIn(500),
        jQuery(".popup." + t + " .modal input[name='item']").val(e),
        jQuery(".popup." + t + " .modal .button").attr("data-ya", s);
        var i = jQuery(".popup." + t + " .modal").outerHeight() / 2
          , a = jQuery("body").outerHeight();
        a > 0 ? jQuery(".popup").css("height", a) : jQuery(".popup").css("height", "100%");
        var o = jQuery(window).scrollTop()
          , n = jQuery(window).height() / 2;
        return n > i ? jQuery(".popup." + t + " .modal").css("top", o + n - i) : jQuery(".popup." + t + " .modal").css("top", o + 50),
        !1
    }),
    jQuery(document).each(function() {
        var t = jQuery(".popup:visible .modal").outerHeight() / 2
          , e = jQuery("body").outerHeight();
        e > 0 ? jQuery(".popup").css("height", e) : jQuery(".popup").css("height", "100%");
        var s = jQuery(window).scrollTop()
          , i = jQuery(window).height() / 2;
        i > t ? jQuery(".popup:visible .modal").css("top", s + i - t) : jQuery(".popup:visible .modal").css("top", "50px")
    }),
    jQuery(".box-video .play").click(function() {
        var t = jQuery(this).data("video");
        jQuery(".modal_video iframe, .modal_video video").attr("src", t)
    }),
    jQuery(".screen3 .tabs a").click(function() {
        var t = jQuery(this).attr("href");
        return jQuery(".screen3 .tabs a.active").removeClass("active"),
        jQuery(this).addClass("active"),
        jQuery(".screen3 .tab-cont:visible").hide(),
        jQuery(".screen3 " + t).fadeIn(500),
        jQuery(".screen3 " + t + " .tab-slider").slick("setPosition"),
        jQuery("html, body").animate({
            scrollTop: jQuery(jQuery(this).attr("href")).offset().top + "px"
        }, {
            duration: 1e3
        }),
        !1
    }),
    jQuery(".js-to-screen2").click(function() {
        return jQuery("html, body").animate({
            scrollTop: jQuery("#screen2").offset().top + "px"
        }, {
            duration: 1e3
        }),
        !1
    }),
    viewport().width < 600 && jQuery(".js-remove-mobile").remove(),
    jQuery(".screen3 .project-slide .gallery .slide").each(function() {
        jQuery(this).append('<div class="step"><span class="number js-slide-number">0</span>/<span class="js-slide-length">0</span></div>');
        var t = jQuery(this).closest(".tab-slider").find(".project-slide").length
          , e = jQuery(this).closest(".project-slide").index() + 1;
        jQuery(this).find(".js-slide-number").text(e),
        jQuery(this).find(".js-slide-length").text(t)
    }),
    jQuery(".fancybox").length && jQuery(".fancybox").fancybox({
        margin: 10,
        padding: 10
    }),
    jQuery(".screen3 .tab-slider").length && jQuery(".screen3 .tab-slider").slick({
        arrows: !0,
        dots: !1,
        infinite: !0,
        autoplay: !1,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
                arrows: !1,
                dots: !0
            }
        }]
    }),
    jQuery(".screen3 .project-slide .gallery .slick-dots li").each(function() {
        var t = jQuery(this).closest(".slick-dots").find("li").length
          , e = jQuery(this).find("button").text();
        jQuery(this).find("button").html(e + "<span>./" + t + "</span>")
    }),
    jQuery(".js-link").click(function() {
        return jQuery("html, body").animate({
            scrollTop: jQuery(jQuery(this).attr("href")).offset().top + "px"
        }, {
            duration: 1e3
        }),
        !1
    }),
    jQuery(".js-scale").each(function() {
        var t = jQuery(this).data("percent");
        jQuery(this).css("height", t),
        jQuery(this).find(".percent-res").html(t)
    }),
    jQuery(".js-scale-mobile").each(function() {
        var t = jQuery(this).data("percent");
        jQuery(this).css("width", t),
        jQuery(this).find(".percent-res").html(t)
    }),
    jQuery(".screen2 .list-object .object").click(function() {
        var t = jQuery(this).find(".name").text()
          , e = jQuery(this).closest(".step");
        e.find(".js-check").val(t),
        e.find(".object.active").removeClass("active"),
        jQuery(this).addClass("active"),
        e.find(".object").hasClass("active") ? e.find(".continue").fadeIn(500) : e.find(".continue").fadeOut(500)
    }),
    jQuery(".js-button-step").click(function() {
        var t = jQuery(this).data("step");
        if (jQuery(this).hasClass("continue")) {
            jQuery(this).closest(".step").find(".js-check").val(),
            jQuery(this).closest(".step").find(".title-block .desc").text();
            function e() {
                jQuery(this).closest(".step").find(".js-animate").each(function() {
                    var t = jQuery(this).data("animation-out");
                    jQuery(this).addClass("appear-animation").addClass(t).addClass("appear-animation-visible")
                }),
                jQuery(".step.active").find(".js-animate").each(function() {
                    var t = jQuery(this).data("animation-out");
                    jQuery(this).removeClass("appear-animation-visible").removeClass(t)
                }),
                jQuery(".step.active").removeClass("active"),
                jQuery("#" + t).addClass("active"),
                jQuery("#" + t).find(".js-animate").each(function() {
                    var t = jQuery(this).data("animation-in");
                    jQuery(this).addClass(t).addClass("appear-animation-visible")
                })
            }
            jQuery(this).closest(".step").find(".js-animate").each(function() {
                var t = jQuery(this).data("animation-out");
                jQuery(this).addClass("appear-animation").addClass(t).addClass("appear-animation-visible")
            }),
            setTimeout(e, 700)
        } else {
            function e() {
                jQuery(this).closest(".step").find(".js-animate").each(function() {
                    var t = jQuery(this).data("animation-out");
                    jQuery(this).addClass("appear-animation").addClass(t).addClass("appear-animation-visible")
                }),
                jQuery(".step.active").find(".js-animate").each(function() {
                    var t = jQuery(this).data("animation-out");
                    jQuery(this).removeClass("appear-animation-visible").removeClass(t)
                }),
                jQuery(".step.active").removeClass("active"),
                jQuery("#" + t).addClass("active"),
                jQuery("#" + t).find(".js-animate").each(function() {
                    var t = jQuery(this).data("animation-in");
                    jQuery(this).addClass(t).addClass("appear-animation-visible")
                })
            }
            jQuery(this).closest(".step").find(".js-animate").each(function() {
                var t = jQuery(this).data("animation-out");
                jQuery(this).addClass("appear-animation").addClass(t).addClass("appear-animation-visible")
            }),
            setTimeout(e, 700)
        }
    }),
    viewport().width < 479 && jQuery(".screen4 .m-slider").slick({
        arrows: !1,
        dots: !0,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 3e3,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }),
    jQuery(".screen5 .select-list li").click(function() {
        var t = jQuery(this).index();
        jQuery(".screen5 .select-list li.active").removeClass("active"),
        jQuery(this).addClass("active"),
        jQuery(".screen5 .form:visible").hide(),
        jQuery(".screen5 .form:eq(" + t + ")").fadeIn(500)
    }),
    viewport().width < 700 && jQuery(".screen5 .select-list li").click(function() {
        return jQuery("html, body").animate({
            scrollTop: jQuery(".screen5 .forms-wrap").offset().top + "px"
        }, {
            duration: 500
        }),
        !1
    }),
    viewport().width < 768 && jQuery(".brends-slider").slick({
        arrows: !1,
        dots: !0,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 3e3,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: !1
            }
        }]
    }),
    jQuery(".team-slider").length && jQuery(".team-slider").slick({
        arrows: !0,
        dots: !1,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 8e3,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }),
    jQuery(".screen10 .rounds-wrap").mousemove(function(t) {
        var e = jQuery(this).offset()
          , s = e.left
          , i = e.top
          , a = (t.pageX - s - (t.pageY - i)) / 100;
        jQuery(".screen10 .round1").css("transform", "rotate(" + a + "deg)").css("-webkit-transform", "rotate(" + a + "deg)").css("-moz-transform", "rotate(" + a + "deg)")
    }),
    jQuery(".screen11 .gallery").length && jQuery(".screen11 .gallery").slick({
        arrows: !0,
        dots: !0,
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 3e3,
        fade: !0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }),
    jQuery(".screen11 .gallery .slick-dots li").each(function() {
        var t = jQuery(this).closest(".slick-dots").find("li").length
          , e = jQuery(this).find("button").text();
        jQuery(this).find("button").html(e + "<span>./" + t + "</span>")
    }),
    jQuery(".screen2 .list-window .window").click(function() {
        jQuery(".screen2 .list-window .window.active").removeClass("active"),
        jQuery(this).addClass("active");
        var t = jQuery(this).data("value");
        jQuery(this).closest(".step").find(".js-check").val(t)
    }),
    jQuery("input[name='polity']").change(function() {
        if (0 == this.checked)
            return alert("Без согласия на обработку данных мы не можем принять заявку"),
            !1
    })
});
var handler = function() {
    jQuery("footer").height(),
    jQuery("header").height();
    var t = viewport().width;
    viewport().height;
    jQuery(".team-slider").css("height", jQuery(".team-slider").height()),
    jQuery(".screen10").each(function() {
        var t = jQuery(".rounds-wrap").width();
        jQuery(this).find(".round1").height(t)
    }),
    /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && jQuery(".m-wrap").removeClass("flex-wrap"),
    t <= 600 ? jQuery(".m-wrap").removeClass("flex-wrap") : jQuery(".m-wrap").addClass("flex-wrap")
};
jQuery(window).bind("load", handler),
jQuery(window).bind("resize", handler);


function Size(id_val, id_span){
    var val = jQuery('#'+id_val).val();
    jQuery('#'+id_span).text(val);

    var size = jQuery('#size_5').val();
    var width = jQuery('#width_5').val();

    str ='Высота: '+ size +', Ширина: '+ width;
    jQuery('#wind_inp').val(str);
}

function Width(id_val, id_span){
    var val = jQuery('#'+id_val).val();
    jQuery('#'+id_span).text(val);

    var size = jQuery('#size_5').val();
    var width = jQuery('#width_5').val();

    str ='Высота: '+ size +', Ширина: '+ width;
    jQuery('#wind_inp').val(str);

}
