import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Layout from "../../layouts";
import Loading from "../../layouts/loading";
function Home() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2;
    const transitionTime = 8000;

    useEffect(() => {
        const nextSlide = (currentSlide + 1) % totalSlides;
        const timeoutId = setTimeout(() => {
            setCurrentSlide(nextSlide);
        }, transitionTime);

        return () => clearTimeout(timeoutId);
    }, [currentSlide, totalSlides, transitionTime]);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const showSlider = totalSlides > 0;
    const transformValue = showSlider ? `translateX(${-currentSlide * 100}%)` : "translateX(0)";

    return (
        <>
            <Helmet>R Mail| Home</Helmet>
            {loading ? <Loading /> : ""}
            <Layout>
                <main>
                    <div className="slider-area pos-rel">
                        <div className="slider-active">
                            <div
                                className="single-slider slider-height pos-rel d-flex align-items-center"
                                style={{
                                    backgroundImage: "url('assets/img/slider/slider-2.jpeg')",
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="slider__content text-left">
                                                <h5 className="sub-title mb-25 wow fadeInUp2 animated" data-wow-delay=".1s">
                                                    <span className="pr-10">
                                                        <i className="far fa-heart"></i>
                                                    </span>
                                                    Fund Raising For Helpless.
                                                </h5>
                                                <h1 className="main-title wow fadeInUp2 animated" data-wow-delay=".2s">
                                                    Raise Your <span>Helping Hand</span> For Poor People
                                                </h1>
                                                <p className="wow fadeInUp2 animated" data-wow-delay=".3s">
                                                    There are many variations of passages of orem psum available but the majority have suffered alteration in some form by injected humour or
                                                    randomised.
                                                </p>
                                                <ul className="btn-list wow fadeInUp2 animated" data-wow-delay=".4s">
                                                    <li>
                                                        <a className="theme_btn theme_btn2 theme_btn_bg_02" href="#!">
                                                            Learn more
                                                            <span>
                                                                <i className="fas fa-arrow-right"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="single-slider slider-height pos-rel d-flex align-items-center"
                                style={{
                                    backgroundImage: "url('assets/img/slider/slider-1.jpeg')",
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="slider__content text-left">
                                                <h5 className="sub-title mb-25 wow fadeInUp2 animated" data-wow-delay=".1s">
                                                    <span className="pr-10">
                                                        <i className="far fa-heart"></i>
                                                    </span>
                                                    Fund Raising For Helpless.
                                                </h5>
                                                <h1 className="main-title wow fadeInUp2 animated" data-wow-delay=".2s">
                                                    We Help <span>People In Need</span> Around The World
                                                </h1>
                                                <p className="wow fadeInUp2 animated" data-wow-delay=".3s">
                                                    There are many variations of passages of orem psum available but the majority have suffered alteration in some form by injected humour or
                                                    randomised.
                                                </p>
                                                <ul className="btn-list wow fadeInUp2 animated" data-wow-delay=".4s">
                                                    <li>
                                                        <a className="theme_btn theme_btn2 theme_btn_bg_02" href="#!">
                                                            Learn more
                                                            <span>
                                                                <i className="fas fa-arrow-right"></i>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="services-area grey-bg2 pb-130">
                        <div className="container">
                            <div className="services-bg pos-rel pt-30 pr-30 pl-30">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".3s">
                                        <div className="services pos-rel mb-30">
                                            <div className="services__img">
                                                <img src="assets/img/services/1.jpg" alt="" />
                                            </div>
                                            <ul className="services__content heding-bg-2 pos-abl">
                                                <li>
                                                    <h4 className="semi-02-title">
                                                        <a href="#!">Book movie tickets</a>
                                                    </h4>
                                                    <p>Explore now</p>
                                                </li>
                                                <li>
                                                    <a className="more_btn" href="#!">
                                                        <i className="far fa-arrow-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".5s">
                                        <div className="services pos-rel mb-30">
                                            <div className="services__img">
                                                <img src="assets/img/services/2.jpg" alt="" />
                                            </div>
                                            <ul className="services__content heding-bg-2 pos-abl">
                                                <li>
                                                    <h4 className="semi-02-title">
                                                        <a href="#!">Food Court</a>
                                                    </h4>
                                                    <p>Explore now</p>
                                                </li>
                                                <li>
                                                    <a className="more_btn" href="#!">
                                                        <i className="far fa-arrow-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".7s">
                                        <div className="services pos-rel mb-30">
                                            <div className="services__img">
                                                <img src="assets/img/services/3.jpeg" alt="" />
                                            </div>
                                            <ul className="services__content heding-bg-2 pos-abl">
                                                <li>
                                                    <h4 className="semi-02-title">
                                                        <a href="#!">Shopping</a>
                                                    </h4>
                                                    <p>Explore now</p>
                                                </li>
                                                <li>
                                                    <a className="more_btn" href="#!">
                                                        <i className="far fa-arrow-right"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="blog-area pt-30 pb-30">
                        <div className="container">
                            <div className="section-title text-center mb-20 pl-50 pr-50 d-flex align-items-center justify-content-between">
                                <h6>
                                    <span>
                                        <i className="far fa-heart"></i>
                                    </span>
                                    Latest News & Blog
                                </h6>

                                <div className="quote-btn d-none d-lg-block">
                                    <a href="#!" className="theme_btn theme_btn_bg">
                                        View All
                                        <span>
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".3s">
                                    <div className="blog mb-30">
                                        <div className="blog__thumb">
                                            <img src="assets/img/blog/1.png" alt="" />
                                        </div>
                                        <div className="blog__content">
                                            <a className="tag" href="#!">
                                                Shopping
                                            </a>
                                            <h3 className="blog-title">
                                                <a href="#!">Super Promotions Special Discounts Online Shopping Festival</a>
                                            </h3>
                                            <p className="line-clamp">
                                                Welcome to the biggest shopping festival of the year! We organize an extremely attractive discount event with thousands of products from famous brands.
                                                Customers will experience a vibrant online shopping space with great deals, discount vouchers and attractive gifts. Don't miss the opportunity to shop
                                                at the best prices!
                                            </p>
                                            <ul className="blog-author">
                                                <li>
                                                    <i className="far fa-calendar-alt"></i> 12 January 2024
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".7s">
                                    <div className="blog mb-30">
                                        <div className="blog__thumb">
                                            <img src="assets/img/blog/2.png" alt="" />
                                        </div>
                                        <div className="blog__content">
                                            <a className="tag" href="#!">
                                                Fashion
                                            </a>
                                            <h3 className="blog-title">
                                                <a href="#!">New Collection - Fall Winter 2023 Fashion Trends</a>
                                            </h3>
                                            <p className="line-clamp">
                                                Discover the latest collection now at our store! We are proud to present the top fashion trends for this year's fall and winter season. From cozy coats,
                                                to gorgeous evening gowns, there is sure to be at least one item that will make you fall in love. Order now to receive special offers and quick delivery
                                                to your door!
                                            </p>
                                            <ul className="blog-author">
                                                <li>
                                                    <i className="far fa-calendar-alt"></i> 12 January 2024
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".5s">
                                    <div className="blog mb-30">
                                        <div className="blog__thumb">
                                            <img src="assets/img/blog/3.jpg" alt="" />
                                        </div>
                                        <div className="blog__content">
                                            <a className="tag" href="#!">
                                                Technology
                                            </a>
                                            <h3 className="blog-title">
                                                <a href="#!">New Products - Advanced Technology for Modern Life</a>
                                            </h3>
                                            <p className="line-clamp">
                                                We are proud to introduce the latest product line that brings a more modern and convenient living experience than ever before. From smartphones with
                                                amazing cameras, high-quality wireless headphones to smart devices for your home. Don't miss the opportunity to own these advanced technologies at
                                                preferential prices and accompanying gifts. Order now to experience convenience and modernity!
                                            </p>
                                            <ul className="blog-author">
                                                <li>
                                                    <i className="far fa-calendar-alt"></i> 12 January 2024
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cta-area pt-50 pb-80 slider text-center" style={{ backgroundImage: "url('assets/img/services/bg.png')", backgroundSize: "cover" }}>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-between">
                                <h3 className="service-heading">
                                    <span>
                                        <i className="far fa-heart"></i>
                                    </span>
                                    Free utilities and services
                                </h3>
                                {totalSlides > 1 && (
                                    <div>
                                        <button className="btn-arrow prev" onClick={handlePrevSlide}>
                                            <i className="fa fa-arrow-left"></i>
                                        </button>
                                        <button className="btn-arrow next" onClick={handleNextSlide}>
                                            <i className="fa fa-arrow-right"></i>
                                        </button>
                                    </div>
                                )}
                            </div>
                            {showSlider && (
                                <div className="slider-wrapper" style={{ transform: transformValue }}>
                                    <div key={0} className={`slide p-3 ${currentSlide === 0 ? "active" : ""}`}>
                                        <a href="#!" className="slide-content">
                                            <div className="slide-content__icon">
                                                <img src="./assets/img/services/movie.svg" alt="" />
                                            </div>
                                            <p className="slide-content__desc">Movie theaters</p>
                                        </a>
                                    </div>
                                    <div key={1} className={`slide p-3 ${currentSlide === 1 ? "active" : ""}`}>
                                        <a href="#!" className="slide-content">
                                            <div className="slide-content__icon">
                                                <img src="./assets/img/services/food.svg" alt="" />
                                            </div>
                                            <p className="slide-content__desc">Food court</p>
                                        </a>
                                    </div>
                                    <div key={2} className={`slide p-3 ${currentSlide === 2 ? "active" : ""}`}>
                                        <a href="#!" className="slide-content">
                                            <div className="slide-content__icon">
                                                <img src="./assets/img/services/maps.svg" alt="" />
                                            </div>
                                            <p className="slide-content__desc">Electronic instruction board</p>
                                        </a>
                                    </div>
                                    <div key={3} className={`slide p-3 ${currentSlide === 3 ? "active" : ""}`}>
                                        <a href="#!" className="slide-content">
                                            <div className="slide-content__icon">
                                                <img src="./assets/img/services/card-machine.svg" alt="" />
                                            </div>
                                            <p className="slide-content__desc">ATM</p>
                                        </a>
                                    </div>
                                    <div key={4} className={`slide p-3 ${currentSlide === 4 ? "active" : ""}`}>
                                        <a href="#!" className="slide-content">
                                            <div className="slide-content__icon">
                                                <img src="./assets/img/services/escalator.svg" alt="" />
                                            </div>
                                            <p className="slide-content__desc">Escalator</p>
                                        </a>
                                    </div>
                                    <div key={5} className={`slide p-3 ${currentSlide === 5 ? "active" : ""}`}>
                                        <a href="#!" className="slide-content">
                                            <div className="slide-content__icon">
                                                <img src="./assets/img/services/parking.svg" alt="" />
                                            </div>
                                            <p className="slide-content__desc">Free parking</p>
                                        </a>
                                    </div>
                                    <div key={6} className={`slide p-3 ${currentSlide === 6 ? "active" : ""}`}>
                                        <a href="#!" className="slide-content">
                                            <div className="slide-content__icon">
                                                <img src="./assets/img/services/shipping.svg" alt="" />
                                            </div>
                                            <p className="slide-content__desc">Delivery service</p>
                                        </a>
                                    </div>
                                    <div key={7} className={`slide p-3 ${currentSlide === 7 ? "active" : ""}`}>
                                        <a href="#!" className="slide-content">
                                            <div className="slide-content__icon">
                                                <img src="./assets/img/services/wifi.svg" alt="" />
                                            </div>
                                            <p className="slide-content__desc">Wifi Free</p>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    <div className="about-area grey-bg2 pos-rel pt-150 pb-100">
                        <div className="right-shape">
                            <img src="assets/img/shape/01.png" alt="" />
                        </div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about-img mb-60 pos-rel">
                                        <div className="about-img__thumb pr-45 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <img src="assets/img/about/1.jpeg" alt="" />
                                        </div>
                                        <div className="experience-box wow fadeInUp2 animated" data-wow-delay=".3s">
                                            <h1>20</h1>
                                            <h4 className="semi-02-title">Years Experience</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about-wrapper mb-30">
                                        <div className="section-title text-left mb-20 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <h6>
                                                <span>
                                                    <i className="far fa-heart"></i>
                                                </span>
                                                About R Mall
                                            </h6>
                                            {/* <h2>Welcome to R Mall - A classy shopping area in the suburbs of Mumbai!</h2> */}
                                        </div>
                                        <p>
                                            Welcome to R Mall, an impressive 4-storey, fully air-conditioned shopping mall. With an area of ​​up to 80,000 sq ft (7,000 m2) on each floor, we are proud
                                            to introduce a unique and convenient shopping space in the suburban area of ​​Mumbai.
                                        </p>
                                        <ul className="about_list mt-30 mb-20 wow fadeInUp2 animated" data-wow-delay=".2s">
                                            <li>Explore Shopping Diversity: ABCD Malls brings you a unique shopping experience with many stores, top brands, and an ideal shopping space.</li>
                                            <li>
                                                Diverse Amenities: With R Mall, you not only have the opportunity to shop, but also enjoy special amenities such as stylish restaurants, diverse
                                                entertainment.
                                            </li>
                                        </ul>
                                        <a className="theme_btn theme_btn_bg" href="#!">
                                            Learn more
                                            <span>
                                                <i className="fas fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="gallery-area pt-130 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 mx-auto">
                                    <div className="section-title text-center mb-85 pl-50 pr-50 wow fadeInUp2 animated" data-wow-delay=".1s">
                                        <h6>
                                            <span>
                                                <i className="far fa-heart"></i>
                                            </span>
                                            Photo Gallery
                                        </h6>
                                        <h2>Our Photo Gallery</h2>
                                        <p>
                                            Welcome to our "Image Collection"! Browse through high quality images, we love to share great moments about products and special events. Come explore and
                                            feel the wonderful atmosphere we bring!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="gallery pos-rel text-center wow fadeInUp2 animated" data-wow-delay=".3s">
                                                <div className="gallery__thumb pos-rel mb-30">
                                                    <img src="assets/img/gallery/1.jpeg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="gallery pos-rel text-center wow fadeInUp2 animated" data-wow-delay=".3s">
                                                <div className="gallery__thumb pos-rel mb-30">
                                                    <img src="assets/img/gallery/2.jpeg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="gallery pos-rel text-center wow fadeInUp2 animated" data-wow-delay=".3s">
                                                <div className="gallery__thumb pos-rel mb-30">
                                                    <img src="assets/img/gallery/3.jpeg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="gallery pos-rel text-center wow fadeInUp2 animated" data-wow-delay=".3s">
                                                <div className="gallery__thumb pos-rel mb-30">
                                                    <img src="assets/img/gallery/4.jpeg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="gallery pos-rel text-center wow fadeInUp2 animated" data-wow-delay=".3s">
                                        <div className="gallery__thumb pos-rel mb-30">
                                            <img src="assets/img/about/1.jpeg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="intro-video-area">
                        <div className="container">
                            <div className="col-xl-10 col-lg-10 col-md-10 mx-auto">
                                <div
                                    className="intro-video-content pos-rel mb-30"
                                    style={{
                                        backgroundImage: "url( assets/img/gallery/4.jpeg)",
                                    }}
                                >
                                    <div className="video-area pos-abl">
                                        <a href="https://youtu.be/NrmMk1Myrxc?si=dahwPQGlQoqp27cp" className="popup-video">
                                            <i className="fas fa-play"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
export default Home;
