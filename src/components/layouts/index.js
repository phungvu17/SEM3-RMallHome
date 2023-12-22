import Header from "./header";
import Footer from "./footer";
import { useEffect } from "react";
function Layout({ children }) {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const $ = window.$;
        $(document).ready(function () {
            $(window).on("load", function () {
                $(".preloader").delay(350).fadeOut("slow");
                $("body").delay(350).css({
                    overflow: "visible",
                });
            });
            $("#mobile-menu-active").metisMenu();
            $("#mobile-menu-active .has-dropdown > a").on("click", function (e) {
                e.preventDefault();
            });
            $(".hamburger-menu > a").on("click", function (e) {
                e.preventDefault();
                $(".slide-bar").toggleClass("show");
                $("body").addClass("on-side");
                $(".body-overlay").addClass("active");
                $(this).addClass("active");
            });
            $(".close-mobile-menu > a").on("click", function (e) {
                e.preventDefault();
                $(".slide-bar").removeClass("show");
                $("body").removeClass("on-side");
                $(".body-overlay").removeClass("active");
                $(".hamburger-menu > a").removeClass("active");
            });
            $(".body-overlay").on("click", function () {
                $(this).removeClass("active");
                $(".slide-bar").removeClass("show");
                $("body").removeClass("on-side");
                $(".hamburger-menu > a").removeClass("active");
            });
            var $searchWrap = $(".search-wrap");
            var $navSearch = $(".nav-search");
            var $searchClose = $("#search-close");
            $(".search-trigger").on("click", function (e) {
                e.preventDefault();
                $searchWrap.animate(
                    {
                        opacity: "toggle",
                    },
                    500
                );
                $navSearch.add($searchClose).addClass("open");
            });
            $(".search-close").on("click", function (e) {
                e.preventDefault();
                $searchWrap.animate(
                    {
                        opacity: "toggle",
                    },
                    500
                );
                $navSearch.add($searchClose).removeClass("open");
            });

            function closeSearch() {
                $searchWrap.fadeOut(200);
                $navSearch.add($searchClose).removeClass("open");
            }
            $(document.body).on("click", function (e) {
                closeSearch();
            });
            $(".search-trigger, .main-search-input").on("click", function (e) {
                e.stopPropagation();
            });
            $(".extra_btn").click(function () {
                $(".extra_info").addClass("info-open");
            });
            $(".close_icon").click(function () {
                $(".extra_info").removeClass("info-open");
            });
            $(window).on("scroll", function () {
                var scroll = $(window).scrollTop();
                if (scroll < 200) {
                    $(".main-header-area").removeClass("sticky");
                } else {
                    $(".main-header-area").addClass("sticky");
                }
            });
            var links = $("a.scroll-target");
            links.on("click", function () {
                if (window.location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || window.location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                    if (target.length) {
                        $("html,body").animate(
                            {
                                scrollTop: target.offset().top - 75,
                            },
                            1000
                        );
                        return false;
                    }
                }
            });

            function mainSlider() {
                var BasicSlider = $(".slider-active");
                BasicSlider.on("init", function (e, slick) {
                    var $firstAnimatingElements = $(".single-slider:first-child").find("[data-animation]");
                    doAnimations($firstAnimatingElements);
                });
                BasicSlider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
                    var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find("[data-animation]");
                    doAnimations($animatingElements);
                });
                BasicSlider.slick({
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: false,
                    fade: true,
                    speed: 1000,
                    arrows: true,
                    cssEase: "linear",
                    prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
                    nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
                    responsive: [
                        {
                            breakpoint: 1250,
                            settings: {
                                dots: false,
                                arrows: false,
                            },
                        },
                        {
                            breakpoint: 850,
                            settings: {
                                dots: false,
                                arrows: false,
                            },
                        },
                    ],
                });

                function doAnimations(elements) {
                    var animationEndEvents = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
                    elements.each(function () {
                        var $this = $(this);
                        var $animationDelay = $this.data("delay");
                        var $animationType = "animated " + $this.data("animation");
                        $this.css({
                            "animation-delay": $animationDelay,
                            "-webkit-animation-delay": $animationDelay,
                        });
                        $this.addClass($animationType).one(animationEndEvents, function () {
                            $this.removeClass($animationType);
                        });
                    });
                }
            }
            mainSlider();
            $(".testimonial-active").slick({
                infinite: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 2,
                slidesToScroll: 2,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
            $(".testimonial-active-2").slick({
                infinite: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 1050,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 760,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
            $(".owlcarousel").owlCarousel({
                loop: true,
                margin: 0,
                items: 2,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                nav: true,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 2,
                    },
                    992: {
                        items: 2,
                    },
                },
            });
            $(".popup-image").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true,
                },
            });
            $(".popup-video").magnificPopup({
                type: "iframe",
            });
            $(".features").on("mouseenter", function () {
                $(this).addClass("active").parent().siblings().find(".features").removeClass("active");
            });
            $(".grid").imagesLoaded(function () {
                var $grid = $(".grid").isotope({
                    itemSelector: ".grid-item",
                    percentPosition: true,
                    masonry: {
                        columnWidth: 1,
                        gutter: 0,
                    },
                });
                $(".portfolio-menu").on("click", "button", function () {
                    var filterValue = $(this).attr("data-filter");
                    $grid.isotope({
                        filter: filterValue,
                    });
                });
            });
            $(".portfolio-menu button").on("click", function (event) {
                $(this).siblings(".active").removeClass("active");
                $(this).addClass("active");
                event.preventDefault();
            });
            $(".counter").counterUp({
                delay: 10,
                time: 3000,
            });
            $.scrollUp({
                scrollName: "scrollUp",
                topDistance: "300",
                topSpeed: 500,
                animation: "fade",
                animationInSpeed: 300,
                animationOutSpeed: 300,
                scrollText: '<i class="fas fa-chevron-double-up"></i>',
                activeOverlay: false,
            });

            // function wowAnimation() {
            //     new WOW({
            //         offset: 100,
            //         mobile: true,
            //     }).init();
            // }
            // wowAnimation();
            $(".chart").easyPieChart({
                barColor: "#fff",
                trackColor: "#ebe7e7",
                lineWidth: 10,
                lineCap: "square",
                scaleColor: 0,
                scaleLength: 0,
                size: 120,
                animate: {
                    duration: 2000,
                    enabled: true,
                },
            });
            $(".chart2").easyPieChart({
                barColor: "#f15b43",
                trackColor: "#e3e3e3",
                lineWidth: 7,
                lineCap: "square",
                scaleColor: 0,
                scaleLength: 0,
                size: 120,
                animate: {
                    duration: 2000,
                    enabled: true,
                },
            });
            $(document).ready(function () {
                $("select").niceSelect();
            });
            var date = new Date().getFullYear();
            $("#date").html(date);
        }, []);
    }, []);

    return (
        <>
            <Header />

            {/* Header For Mobile */}
            <aside className="slide-bar">
                <div className="close-mobile-menu">
                    <a href="javascript:void(0);">
                        <i className="fas fa-times"></i>
                    </a>
                </div>

                <nav className="side-mobile-menu">
                    <ul id="mobile-menu-active">
                        <li className="has-dropdown">
                            <a href="index.html">Home</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="index.html">Home Style 1</a>
                                </li>
                                <li>
                                    <a href="index-2.html">Home Style 2</a>
                                </li>
                                <li>
                                    <a href="index-3.html">Home Style 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="about.html">About Us</a>
                        </li>
                        <li className="has-dropdown">
                            <a href="#!">Case</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="case.html">Case Study One</a>
                                </li>
                                <li>
                                    <a href="case-2.html">Case Study Two</a>
                                </li>
                                <li>
                                    <a href="case-3.html">Case Study Three</a>
                                </li>
                                <li>
                                    <a href="case-details.html">Case Study Details</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <a href="#!">Event</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="events-list.html">Events List</a>
                                </li>
                                <li>
                                    <a href="events-grid.html">Events Grid</a>
                                </li>
                                <li>
                                    <a href="events-details.html">Events Details</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <a href="#!">Pages</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="gallery.html">Gallery</a>
                                </li>
                                <li>
                                    <a href="gallery-2.html">Gallery Two</a>
                                </li>
                                <li>
                                    <a href="team.html">Team</a>
                                </li>
                                <li>
                                    <a href="team-details.html">Team Details</a>
                                </li>
                                <li>
                                    <a href="login.html">Sign In</a>
                                </li>
                                <li>
                                    <a href="register.html">Sign Up</a>
                                </li>
                                <li>
                                    <a href="forgot-password.html">Forgot Password</a>
                                </li>
                                <li>
                                    <a href="donation.html">Donation Form</a>
                                </li>
                                <li>
                                    <a href="volunteer.html">Volunteer</a>
                                </li>
                                <li>
                                    <a href="faq.html">FAQ</a>
                                </li>
                                <li>
                                    <a href="term-condition.html">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href="privacy-policy.html">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="404.html">404 Error</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <a href="#!">Blog</a>
                            <ul className="submenu">
                                <li>
                                    <a href="blog-grid.html">Blog Grid</a>
                                </li>
                                <li>
                                    <a href="blog-standard.html">Blog Standard</a>
                                </li>
                                <li>
                                    <a href="blog-details.html">Blog Details</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.html">Contacts Us</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="body-overlay"></div>

            <div>{children}</div>
            <Footer />
        </>
    );
}

export default Layout;
