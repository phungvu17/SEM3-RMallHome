function PhotoGallery() {
    return (
        <>
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
                                    Welcome to our "Image Collection"! Browse through high quality images, we love to share great moments about products and special events. Come explore and feel the
                                    wonderful atmosphere we bring!
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
        </>
    );
}

export default PhotoGallery;
