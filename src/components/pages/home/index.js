import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Layout from "../../layouts";
import Loading from "../../layouts/loading";
import News from "../../views/home/news";
import Services from "../../views/home/services";
import About from "../../views/home/about-us";
import PhotoGallery from "../../views/home/photo-gallery";
import Brand from "../../views/home/brand";
import { Link } from "react-router-dom";
function Home() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        const $ = window.$;
        $(document).ready(function () {
            $(".brand-active").slick({
                infinite: true,
                arrows: false,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 1250,
                        settings: {
                            slidesToShow: 4,
                        },
                    },
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        }, []);
    }, []);

    return (
        <>
            <Helmet>
                <title>Home | R Mall</title>
            </Helmet>
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
                                                <h1 className="main-title wow fadeInUp2 animated" data-wow-delay=".2s">
                                                    R MAll - India's <span>leading</span> commercial mall
                                                </h1>

                                                <p className="wow fadeInUp2 animated" data-wow-delay=".3s">
                                                    Stay updated on our latest innovative initiatives designed to enhance your experience. We're constantly exploring new avenues to bring you the best
                                                    of what a modern shopping center can offer.
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
                                                <h1 className="main-title wow fadeInUp2 animated" data-wow-delay=".2s">
                                                    R MAll - India's <span>leading</span> commercial mall
                                                </h1>
                                                <p className="wow fadeInUp2 animated" data-wow-delay=".3s">
                                                    Explore our diverse collection of products and enjoy a tailored shopping experience at our commercial hub. Uncover unique finds and modern
                                                    conveniences that redefine the essence of a shopping center.
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
                                                        <a href="http://localhost:3001/" target="_blank">
                                                            Book movie tickets
                                                        </a>
                                                    </h4>
                                                    <p>Explore now</p>
                                                </li>
                                                <li>
                                                    <a className="more_btn" href="http://localhost:3001/" target="_blank">
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
                                                        <Link to="/shop/food-court">Food Court</Link>
                                                    </h4>
                                                    <p>Explore now</p>
                                                </li>
                                                <li>
                                                    <Link to="/shop/food-court" className="more_btn">
                                                        <i className="far fa-arrow-right"></i>
                                                    </Link>
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
                                                        <Link to="/shop/shopping-centers">Shopping</Link>
                                                    </h4>
                                                    <p>Explore now</p>
                                                </li>
                                                <li>
                                                    <Link to="/shop/shopping-centers" className="more_btn">
                                                        <i className="far fa-arrow-right"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <News />

                    <Services />

                    <About />

                    <PhotoGallery />

                    <Brand />
                </main>
            </Layout>
        </>
    );
}
export default Home;
