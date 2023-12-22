import { useEffect, useState } from "react";

function Services() {
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
    );
}

export default Services;
