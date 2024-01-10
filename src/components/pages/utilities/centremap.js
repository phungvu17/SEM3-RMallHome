import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import Loading from "../../layouts/loading";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MagnifierImage from "./ImageMagnifier";

function CentreMap() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            <Helmet>
                <title>Centre Map | R Mall</title>
            </Helmet>
            {loading ? <Loading /> : ""}
            <Layout>
                <main>
                    <section
                        className="page-title-area"
                        style={{
                            backgroundImage: "url('assets/img/bg/page-title.jpg')",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="container pos-rel">
                            <div className="row">
                                <div className="col-xl-5 mx-auto">
                                    <div className="page-title-wrapper text-center pt-125">
                                        <div className="page-title-box">
                                            <h2 className="page-title">Centre Map</h2>
                                            <ul className="breadcrumb-list">
                                                <li>
                                                    <Link to="/">
                                                        Home <i className="far fa-chevron-right"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="#!" className="active">
                                                        Centre Map
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="Centre Map-area pt-130 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="section-title text-center mb-85 pl-50 pr-50 wow fadeInUp2 animated" data-wow-delay=".1s">
                                        <h6>
                                            <span>
                                                <i className="fal fa-map-marked-alt"></i>
                                            </span>
                                            Our Centre Map
                                        </h6>
                                        <h2>
                                            <span>Stores</span> & Floor Map
                                        </h2>
                                        <p>500 stores, one destination. Plan your visit with our interactive map.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-9 col-md-12 mx-auto">
                                    <div className="about-wrap-04 mb-60 pl-40">
                                        <ul className="nav nav-tabs mb-35 justify-content-center" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#gfloor" role="tab" aria-selected="false">
                                                    G Floor
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#floor2" role="tab" aria-selected="false">
                                                    2 Floor
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#floor3" role="tab" aria-selected="false">
                                                    3 Floor
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#floor4" role="tab" aria-selected="false">
                                                    4 Floor
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="gfloor" role="tabpanel">
                                                <div className="inner-content d-sm-flex align-items-center">
                                                    <div className="inner-content">
                                                        <div className="inner-content__text">
                                                            <div className="blog blogs-02 mb-40 wow fadeInUp2 animated" data-wow-delay=".1s">
                                                                <div className="blog__thumb mb-35">
                                                                    <MagnifierImage src="assets/img/map/gfloor.jpg" zoom={3} />
                                                                </div>

                                                                <div className="blog__content">
                                                                    <a className="tag">Ground Floor</a>
                                                                    <h3 className="blog-title mb-20">
                                                                        <a>Shopping, dining and event halls.</a>
                                                                    </h3>
                                                                    <ul className="blog-author mb-20">
                                                                        <li>
                                                                            <a>
                                                                                <span>Last modified:</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <i className="far fa-calendar-alt"></i> 9 January 2024
                                                                        </li>
                                                                    </ul>

                                                                    <hr></hr>
                                                                    <h4>Fashion stores</h4>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">H&M</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">GF-17-21</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Chanel</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">GF-15A1</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">La Dolce Vita</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">GF-52,53</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Gucci-Chloé-Burberry</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">GF-HA4</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <hr></hr>
                                                                    <h4>Food and drinks</h4>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Highlands Coffee</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">GF-58B</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Sushi Hokkaido Sachi</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">GF-28,29B</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="floor2" role="tabpanel">
                                                <div className="inner-content d-sm-flex align-items-center">
                                                    <div className="inner-content">
                                                        <div className="inner-content__text">
                                                            <div className="blog blogs-02 mb-40 wow fadeInUp2 animated" data-wow-delay=".1s">
                                                                <div className="blog__thumb mb-35">
                                                                    <MagnifierImage src="assets/img/map/2floor.jpg" zoom={3} />
                                                                </div>

                                                                <div className="blog__content">
                                                                    <a className="tag">2 Floor</a>
                                                                    <h3 className="blog-title mb-20">
                                                                        <a>Shopping, entertainment and culinary outlets.</a>
                                                                    </h3>
                                                                    <ul className="blog-author mb-20">
                                                                        <li>
                                                                            <a>
                                                                                <span>Last modified:</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <i className="far fa-calendar-alt"></i> 9 January 2024
                                                                        </li>
                                                                    </ul>

                                                                    <hr></hr>
                                                                    <h4>Jewelry, cosmetics & accessories</h4>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Style by PNJ</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">2F-PU1A</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">ECCO</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">2F-33A</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <hr></hr>
                                                                    <h4>Food and drinks</h4>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Botejyu</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">2F-37,38A</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Wayne's Coffee</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">2F-54</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="floor3" role="tabpanel">
                                                <div className="inner-content d-sm-flex align-items-center">
                                                    <div className="inner-content">
                                                        <div className="inner-content__text">
                                                            <div className="blog blogs-02 mb-40 wow fadeInUp2 animated" data-wow-delay=".1s">
                                                                <div className="blog__thumb mb-35">
                                                                    <MagnifierImage src="assets/img/map/3floor.jpg" zoom={3} />
                                                                </div>

                                                                <div className="blog__content">
                                                                    <a className="tag">3 Floor</a>
                                                                    <h3 className="blog-title mb-20">
                                                                        <a>Shopping, entertainment and culinary outlets.</a>
                                                                    </h3>
                                                                    <ul className="blog-author mb-20">
                                                                        <li>
                                                                            <a>
                                                                                <span>Last modified:</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <i className="far fa-calendar-alt"></i> 9 January 2024
                                                                        </li>
                                                                    </ul>

                                                                    <h4>Fashion stores</h4>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">H&M</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">GF-17-21</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Chanel</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">GF-15A1</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">La Dolce Vita</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">GF-52,53</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Gucci-Chloé-Burberry</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">GF-HA4</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <hr></hr>
                                                                    <h4>Jewelry, cosmetics & accessories</h4>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Robins Department Store</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">3F-11-18</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">New Balance</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">3F-33</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <hr></hr>
                                                                    <h4>Electronic and household appliances</h4>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Samsung</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">3F-24</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Sony</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">3F-20B</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="floor4" role="tabpanel">
                                                <div className="inner-content d-sm-flex align-items-center">
                                                    <div className="inner-content">
                                                        <div className="inner-content__text">
                                                            <div className="blog blogs-02 mb-40 wow fadeInUp2 animated" data-wow-delay=".1s">
                                                                <div className="blog__thumb mb-35">
                                                                    <MagnifierImage src="assets/img/map/5floor.jpg" zoom={3} />
                                                                </div>

                                                                <div className="blog__content">
                                                                    <a className="tag">4 Floor</a>
                                                                    <h3 className="blog-title mb-20">
                                                                        <a>Entertainment and culinary outlets.</a>
                                                                    </h3>
                                                                    <ul className="blog-author mb-20">
                                                                        <li>
                                                                            <a>
                                                                                <span>Last modified:</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <i className="far fa-calendar-alt"></i> 9 January 2024
                                                                        </li>
                                                                    </ul>

                                                                    <hr></hr>
                                                                    <h4>Cinemas</h4>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">RMall Cinema</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">5F-04</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <hr></hr>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">VP The Photobooth</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">5F-Booth1</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Photo Time</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">5F-18</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <hr></hr>
                                                                    <h4>Food and drinks</h4>
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Soo Ice - Cream</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">5FC-K9</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <ul class="cases__tag white-bg">
                                                                                <li>
                                                                                    <div class="cases--author d-flex align-items-center">
                                                                                        <h4 class="semi-02-title ml-15">Lotteria</h4>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a class="theme_btn theme_btn2 theme_btn_bg_02 d-btn">5F-05A,B,C</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
}
export default CentreMap;
