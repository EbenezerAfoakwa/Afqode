$(document).ready(function() {
    navNumbers();
    backToDefault();

    // show hovered li stuff
    $('.main-menu').on('mouseover', 'li', function() {
        showTarget($(this));
    });

    // show default .active li stuff
    $('.main-menu').on('mouseleave', backToDefault);

    // change active list item
    $('.main-menu').on('click', 'li', function() {
        changeActive($(this));
    });

    // toggle menu
    $('.toggle').on('click', toggleMenu);

    // for showcase only
    setTimeout(function() {
        toggleMenu();
    }, 2500);
});

// toggle menu
function toggleMenu() {
    var toggle = $('.toggle');
    var nav = $('nav');

    if (toggle.hasClass('clicked')) {
        toggle.removeClass('clicked');
        nav.removeClass('open');
        setTimeout(function() {
            nav.addClass('hidden');
        }, 500);
    } else {
        nav.removeClass('hidden');
        toggle.addClass('clicked');
        nav.addClass('open');
    }
}

// give the list items numbers
function navNumbers() {
    var sum = $('.main-menu li').length;
    var i = 0;
    var x = 0;

    $('.showcase-menu li').each(function() {
        $(this).attr('data-target', x);
        x++;
    });

    $('.main-menu li').each(function() {
        var number = ('0' + i).slice(-2);
        var numberElement = '<div class="number"><span>' + number + '</span></div>';
        $(this).prepend(numberElement);
        $(this).attr('data-target', i);
        i++;
    });
}


// show the hovered list item stuff
function showTarget(e) {
    $('.main-menu li').removeClass('hover');

    var target = $(e).attr('data-target');
    var showcaseHeight = $('.showcase-menu').outerHeight();

    showcaseHeight = (showcaseHeight * target) * -1;

    $('.showcase-menu').css({
        top: showcaseHeight
    });

    $(e).addClass('hover');
}

// show the list item stuff of .active
function backToDefault() {
    $('.main-menu li').removeClass('hover');

    var activeItem = $('.main-menu li.active');
    var target = activeItem.attr('data-target');
    var showcaseHeight = $('.showcase-menu').outerHeight();

    showcaseHeight = (showcaseHeight * target) * -1;

    $('.showcase-menu').css({
        top: showcaseHeight
    });

    activeItem.addClass('hover');
}


// change active list item
function changeActive(e) {
    $('.main-menu li').removeClass('active');
    $(e).addClass('active');
}










(function() {
    var Util,
        __bind = function(fn, me) { return function() { return fn.apply(me, arguments); }; };

    Util = (function() {
        function Util() {}

        Util.prototype.extend = function(custom, defaults) {
            var key, value;
            for (key in custom) {
                value = custom[key];
                if (value != null) {
                    defaults[key] = value;
                }
            }
            return defaults;
        };

        Util.prototype.isMobile = function(agent) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
        };

        return Util;

    })();

    this.WOW = (function() {
        WOW.prototype.defaults = {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true
        };

        function WOW(options) {
            if (options == null) {
                options = {};
            }
            this.scrollCallback = __bind(this.scrollCallback, this);
            this.scrollHandler = __bind(this.scrollHandler, this);
            this.start = __bind(this.start, this);
            this.scrolled = true;
            this.config = this.util().extend(options, this.defaults);
        }

        WOW.prototype.init = function() {
            var _ref;
            this.element = window.document.documentElement;
            if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
                return this.start();
            } else {
                return document.addEventListener('DOMContentLoaded', this.start);
            }
        };

        WOW.prototype.start = function() {
            var box, _i, _len, _ref;
            this.boxes = this.element.getElementsByClassName(this.config.boxClass);
            if (this.boxes.length) {
                if (this.disabled()) {
                    return this.resetStyle();
                } else {
                    _ref = this.boxes;
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        box = _ref[_i];
                        this.applyStyle(box, true);
                    }
                    window.addEventListener('scroll', this.scrollHandler, false);
                    window.addEventListener('resize', this.scrollHandler, false);
                    return this.interval = setInterval(this.scrollCallback, 50);
                }
            }
        };

        WOW.prototype.stop = function() {
            window.removeEventListener('scroll', this.scrollHandler, false);
            window.removeEventListener('resize', this.scrollHandler, false);
            if (this.interval != null) {
                return clearInterval(this.interval);
            }
        };

        WOW.prototype.show = function(box) {
            this.applyStyle(box);
            return box.className = "" + box.className + " " + this.config.animateClass;
        };

        WOW.prototype.applyStyle = function(box, hidden) {
            var delay, duration, iteration;
            duration = box.getAttribute('data-wow-duration');
            delay = box.getAttribute('data-wow-delay');
            iteration = box.getAttribute('data-wow-iteration');
            return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
        };

        WOW.prototype.resetStyle = function() {
            var box, _i, _len, _ref, _results;
            _ref = this.boxes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                box = _ref[_i];
                _results.push(box.setAttribute('style', 'visibility: visible;'));
            }
            return _results;
        };

        WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
            var style;
            style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
            if (duration) {
                style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
            }
            if (delay) {
                style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
            }
            if (iteration) {
                style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
            }
            return style;
        };

        WOW.prototype.scrollHandler = function() {
            return this.scrolled = true;
        };

        WOW.prototype.scrollCallback = function() {
            var box;
            if (this.scrolled) {
                this.scrolled = false;
                this.boxes = (function() {
                    var _i, _len, _ref, _results;
                    _ref = this.boxes;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        box = _ref[_i];
                        if (!(box)) {
                            continue;
                        }
                        if (this.isVisible(box)) {
                            this.show(box);
                            continue;
                        }
                        _results.push(box);
                    }
                    return _results;
                }).call(this);
                if (!this.boxes.length) {
                    return this.stop();
                }
            }
        };

        WOW.prototype.offsetTop = function(element) {
            var top;
            top = element.offsetTop;
            while (element = element.offsetParent) {
                top += element.offsetTop;
            }
            return top;
        };

        WOW.prototype.isVisible = function(box) {
            var bottom, offset, top, viewBottom, viewTop;
            offset = box.getAttribute('data-wow-offset') || this.config.offset;
            viewTop = window.pageYOffset;
            viewBottom = viewTop + this.element.clientHeight - offset;
            top = this.offsetTop(box);
            bottom = top + box.clientHeight;
            return top <= viewBottom && bottom >= viewTop;
        };

        WOW.prototype.util = function() {
            return this._util || (this._util = new Util());
        };

        WOW.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        };

        return WOW;

    })();

}).call(this);


wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();









//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}












// SmoothScroll https://www.naminakiky.com/2018/03/memasang-fungsi-smooth-scrollbar-di-blogger.html
! function() {
    function e() {
        var e = !1;
        e && c("keydown", r), v.keyboardSupport && !e && u("keydown", r)
    }

    function t() {
        if (document.body) {
            var t = document.body,
                o = document.documentElement,
                n = window.innerHeight,
                r = t.scrollHeight;
            if (S = document.compatMode.indexOf("CSS") >= 0 ? o : t, w = t, e(), x = !0, top != self) y = !0;
            else if (r > n && (t.offsetHeight <= n || o.offsetHeight <= n)) {
                var a = !1,
                    i = function() { a || o.scrollHeight == document.height || (a = !0, setTimeout(function() { o.style.height = document.height + "px", a = !1 }, 500)) };
                if (o.style.height = "auto", setTimeout(i, 10), S.offsetHeight <= n) {
                    var l = document.createElement("div");
                    l.style.clear = "both", t.appendChild(l)
                }
            }
            v.fixedBackground || b || (t.style.backgroundAttachment = "scroll", o.style.backgroundAttachment = "scroll")
        }
    }

    function o(e, t, o, n) {
        if (n || (n = 1e3), d(t, o), 1 != v.accelerationMax) {
            var r = +new Date,
                a = r - C;
            if (a < v.accelerationDelta) {
                var i = (1 + 30 / a) / 2;
                i > 1 && (i = Math.min(i, v.accelerationMax), t *= i, o *= i)
            }
            C = +new Date
        }
        if (M.push({ x: t, y: o, lastX: 0 > t ? .99 : -.99, lastY: 0 > o ? .99 : -.99, start: +new Date }), !T) {
            var l = e === document.body,
                u = function() {
                    for (var r = +new Date, a = 0, i = 0, c = 0; c < M.length; c++) {
                        var s = M[c],
                            d = r - s.start,
                            f = d >= v.animationTime,
                            h = f ? 1 : d / v.animationTime;
                        v.pulseAlgorithm && (h = p(h));
                        var m = s.x * h - s.lastX >> 0,
                            w = s.y * h - s.lastY >> 0;
                        a += m, i += w, s.lastX += m, s.lastY += w, f && (M.splice(c, 1), c--)
                    }
                    l ? window.scrollBy(a, i) : (a && (e.scrollLeft += a), i && (e.scrollTop += i)), t || o || (M = []), M.length ? E(u, e, n / v.frameRate + 1) : T = !1
                };
            E(u, e, 0), T = !0
        }
    }

    function n(e) {
        x || t();
        var n = e.target,
            r = l(n);
        if (!r || e.defaultPrevented || s(w, "embed") || s(n, "embed") && /\.pdf/i.test(n.src)) return !0;
        var a = e.wheelDeltaX || 0,
            i = e.wheelDeltaY || 0;
        return a || i || (i = e.wheelDelta || 0), !v.touchpadSupport && f(i) ? !0 : (Math.abs(a) > 1.2 && (a *= v.stepSize / 120), Math.abs(i) > 1.2 && (i *= v.stepSize / 120), o(r, -a, -i), void e.preventDefault())
    }

    function r(e) {
        var t = e.target,
            n = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== H.spacebar;
        if (/input|textarea|select|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) return !0;
        if (s(t, "button") && e.keyCode === H.spacebar) return !0;
        var r, a = 0,
            i = 0,
            u = l(w),
            c = u.clientHeight;
        switch (u == document.body && (c = window.innerHeight), e.keyCode) {
            case H.up:
                i = -v.arrowScroll;
                break;
            case H.down:
                i = v.arrowScroll;
                break;
            case H.spacebar:
                r = e.shiftKey ? 1 : -1, i = -r * c * .9;
                break;
            case H.pageup:
                i = .9 * -c;
                break;
            case H.pagedown:
                i = .9 * c;
                break;
            case H.home:
                i = -u.scrollTop;
                break;
            case H.end:
                var d = u.scrollHeight - u.scrollTop - c;
                i = d > 0 ? d + 10 : 0;
                break;
            case H.left:
                a = -v.arrowScroll;
                break;
            case H.right:
                a = v.arrowScroll;
                break;
            default:
                return !0
        }
        o(u, a, i), e.preventDefault()
    }

    function a(e) { w = e.target }

    function i(e, t) { for (var o = e.length; o--;) z[N(e[o])] = t; return t }

    function l(e) {
        var t = [],
            o = S.scrollHeight;
        do { var n = z[N(e)]; if (n) return i(t, n); if (t.push(e), o === e.scrollHeight) { if (!y || S.clientHeight + 10 < o) return i(t, document.body) } else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return i(t, e) } while (e = e.parentNode)
    }

    function u(e, t, o) { window.addEventListener(e, t, o || !1) }

    function c(e, t, o) { window.removeEventListener(e, t, o || !1) }

    function s(e, t) { return (e.nodeName || "").toLowerCase() === t.toLowerCase() }

    function d(e, t) { e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (k.x !== e || k.y !== t) && (k.x = e, k.y = t, M = [], C = 0) }

    function f(e) {
        if (e) {
            e = Math.abs(e), D.push(e), D.shift(), clearTimeout(A);
            var t = D[0] == D[1] && D[1] == D[2],
                o = h(D[0], 120) && h(D[1], 120) && h(D[2], 120);
            return !(t || o)
        }
    }

    function h(e, t) { return Math.floor(e / t) == e / t }

    function m(e) { var t, o, n; return e *= v.pulseScale, 1 > e ? t = e - (1 - Math.exp(-e)) : (o = Math.exp(-1), e -= 1, n = 1 - Math.exp(-e), t = o + n * (1 - o)), t * v.pulseNormalize }

    function p(e) { return e >= 1 ? 1 : 0 >= e ? 0 : (1 == v.pulseNormalize && (v.pulseNormalize /= m(1)), m(e)) }
    var w, g = { frameRate: 150, animationTime: 800, stepSize: 120, pulseAlgorithm: !0, pulseScale: 8, pulseNormalize: 1, accelerationDelta: 20, accelerationMax: 1, keyboardSupport: !0, arrowScroll: 50, touchpadSupport: !0, fixedBackground: !0, excluded: "" },
        v = g,
        b = !1,
        y = !1,
        k = { x: 0, y: 0 },
        x = !1,
        S = document.documentElement,
        D = [120, 120, 120],
        H = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 },
        v = g,
        M = [],
        T = !1,
        C = +new Date,
        z = {};
    setInterval(function() { z = {} }, 1e4);
    var A, N = function() { var e = 0; return function(t) { return t.uniqueID || (t.uniqueID = e++) } }(),
        E = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e, t, o) { window.setTimeout(e, o || 1e3 / 60) } }(),
        K = /chrome/i.test(window.navigator.userAgent),
        L = "onmousewheel" in document;
    L && K && (u("mousedown", a), u("mousewheel", n), u("load", t))
}();
// SmoothScroll https://www.naminakiky.com/2018/03/memasang-fungsi-smooth-scrollbar-di-blogger.html