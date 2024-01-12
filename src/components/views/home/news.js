function News() {
    return (
        <section className="blog-area pt-30 pb-30">
            <div className="container">
                <div className="section-title text-center mb-20 d-flex align-items-center justify-content-between">
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
                                    <a href="#!">Super promotions Special discounts Shopping festivals</a>
                                </h3>
                                <p className="line-clamp">
                                    Welcome to the biggest shopping festival of the year! We organize an extremely attractive discount event with thousands of products from famous brands. Customers
                                    will experience a vibrant online shopping space with great deals, discount vouchers and attractive gifts. Don't miss the opportunity to shop at the best prices!
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
                                    Discover the latest collection now at our store! We are proud to present the top fashion trends for this year's fall and winter season. From cozy coats, to gorgeous
                                    evening gowns, there is sure to be at least one item that will make you fall in love. Order now to receive special offers and quick delivery to your door!
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
                                    We are proud to introduce the latest product line that brings a more modern and convenient living experience than ever before. From smartphones with amazing
                                    cameras, high-quality wireless headphones to smart devices for your home. Don't miss the opportunity to own these advanced technologies at preferential prices and
                                    accompanying gifts. Order now to experience convenience and modernity!
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
    );
}

export default News;
