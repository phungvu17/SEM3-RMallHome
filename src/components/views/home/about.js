function About() {
    return (
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
                                Welcome to R Mall, an impressive 4-storey, fully air-conditioned shopping mall. With an area of ​​up to 80,000 sq ft (7,000 m2) on each floor, we are proud to introduce
                                a unique and convenient shopping space in the suburban area of ​​Mumbai.
                            </p>
                            <ul className="about_list mt-30 mb-20 wow fadeInUp2 animated" data-wow-delay=".2s">
                                <li>Explore Shopping Diversity: ABCD Malls brings you a unique shopping experience with many stores, top brands, and an ideal shopping space.</li>
                                <li>Diverse Amenities: With R Mall, you not only have the opportunity to shop, but also enjoy special amenities such as stylish restaurants, diverse entertainment.</li>
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
    );
}

export default About;
