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
                  backgroundImage: "url(assets/img/slider/slider-2.jpg)",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7">
                      <div className="slider__content text-left">
                        <h5
                          className="sub-title mb-25 wow fadeInUp2 animated"
                          data-wow-delay=".1s"
                        >
                          <span className="pr-10">
                            <i className="far fa-heart"></i>
                          </span>
                          Fund Raising For Helpless.
                        </h5>
                        <h1
                          className="main-title wow fadeInUp2 animated"
                          data-wow-delay=".2s"
                        >
                          We Help <span>People In Need</span> Around The World
                        </h1>
                        <p
                          className="wow fadeInUp2 animated"
                          data-wow-delay=".3s"
                        >
                          There are many variations of passages of orem psum
                          available but the majority have suffered alteration in
                          some form by injected humour or randomised.
                        </p>
                        <ul
                          className="btn-list wow fadeInUp2 animated"
                          data-wow-delay=".4s"
                        >
                          <li>
                            <a
                              className="theme_btn theme_btn2 theme_btn_bg_02"
                              href="about.html"
                            >
                              Learn more
                              <span>
                                <i className="fas fa-arrow-right"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="theme_btn theme_btn_bg"
                              href="case-details.html"
                            >
                              our cases{" "}
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
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated"
                    data-wow-delay=".3s"
                  >
                    <div className="services pos-rel mb-30">
                      <div className="services__img">
                        <img src="assets/img/services/1.jpg" alt />
                      </div>
                      <ul className="services__content heding-bg pos-abl">
                        <li>
                          <h4 className="semi-02-title">
                            <a href="about.html">Charity For Food</a>
                          </h4>
                          <p>Give your helping hand</p>
                        </li>
                        <li>
                          <a className="more_btn" href="about.html">
                            <i className="far fa-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated"
                    data-wow-delay=".5s"
                  >
                    <div className="services pos-rel mb-30">
                      <div className="services__img">
                        <img src="assets/img/services/2.jpg" alt />
                      </div>
                      <ul className="services__content heding-bg pos-abl">
                        <li>
                          <h4 className="semi-02-title">
                            <a href="about.html">Help Children</a>
                          </h4>
                          <p>Give your helping hand</p>
                        </li>
                        <li>
                          <a className="more_btn" href="about.html">
                            <i className="far fa-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated"
                    data-wow-delay=".7s"
                  >
                    <div className="services pos-rel mb-30">
                      <div className="services__img">
                        <img src="assets/img/services/3.jpg" alt />
                      </div>
                      <ul className="services__content heding-bg pos-abl">
                        <li>
                          <h4 className="semi-02-title">
                            <a href="about.html">Medical Support</a>
                          </h4>
                          <p>Give your helping hand</p>
                        </li>
                        <li>
                          <a className="more_btn" href="about.html">
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

          <div className="about-area grey-bg2 pos-rel pb-100">
            <div className="right-shape">
              <img src="assets/img/shape/01.png" alt />
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="about-img mb-60 pos-rel">
                    <div
                      className="about-img__thumb pr-45 wow fadeInUp2 animated"
                      data-wow-delay=".1s"
                    >
                      <img src="assets/img/about/1.jpg" alt />
                    </div>
                    <div
                      className="experience-box wow fadeInUp2 animated"
                      data-wow-delay=".3s"
                    >
                      <h1>20</h1>
                      <h4 className="semi-02-title">Years Experience</h4>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="about-wrapper mb-30">
                    <div
                      className="section-title text-left mb-20 wow fadeInUp2 animated"
                      data-wow-delay=".1s"
                    >
                      <h6>
                        <span>
                          <i className="far fa-heart"></i>
                        </span>{" "}
                        About Carelax
                      </h6>
                      <h2>We Exists For Non-profits And Social Enterprises</h2>
                    </div>
                    <p>
                      There are many variations of passages of orem psum
                      available but the majority have suffered alteration in
                      some form by injected humour or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of orem psum you need to be sure there isn't
                      anything embarrassing hidden in the middle of text. All
                      the Lorem Ipsum generators on the Internet tend to repeat
                      predefined chunks as necessary.
                    </p>
                    <ul
                      className="about_list mt-30 mb-20 wow fadeInUp2 animated"
                      data-wow-delay=".2s"
                    >
                      <li>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium quos
                        dolores et quas molestias.
                      </li>
                      <li>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti.
                      </li>
                    </ul>
                    <a className="theme_btn theme_btn_bg" href="about.html">
                      Learn more{" "}
                      <span>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="cta-area pt-50 pb-50">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="cta-wrapper">
                    <h2>
                      Join With Our <a href="volunteer.html">Volunteer</a> Team
                    </h2>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="cta-btn text-md-end">
                    <a className="theme_btn theme_btn_bg" href="#">
                      Learn more{" "}
                      <span>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cases-area pt-130 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-md-7 mx-auto">
                  <div
                    className="section-title text-center mb-75 pl-50 pr-50 wow fadeInUp2 animated"
                    data-wow-delay=".1s"
                  >
                    <h6>
                      <span>
                        <i className="far fa-heart"></i>
                      </span>
                      Cases To Care
                    </h6>
                    <h2>
                      Donate Our <span>Charity</span> Cases
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div
                    className="cases mb-30 wow fadeInUp2 animated"
                    data-wow-delay=".3s"
                  >
                    <div className="cases__box pos-rel">
                      <div className="cases__box--img">
                        <img src="assets/img/cases/1.jpg" alt />
                      </div>
                      <ul className="cases__tag white-bg">
                        <li>
                          <div className="cases--author d-flex align-items-center">
                            <img src="assets/img/cases/cs-1.jpg" alt />
                            <h4 className="semi-02-title ml-15">Vincent</h4>
                          </div>
                        </li>
                        <li>
                          <a
                            className="theme_btn theme_btn2 theme_btn_bg_02 d-btn"
                            href="donation.html"
                          >
                            Donate
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="cases__content">
                      <div className="cases-progress mb-25">
                        <p className="funding">
                          Raised <span>$7,500</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft animated"
                            data-wow-delay="0.3s"
                            role="progressbar"
                            style={{ with: "65%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <h5>65%</h5>
                          </div>
                        </div>
                      </div>
                      <h3>
                        <a href="donation.html">
                          Help The Children Proverty And Safe World Environment
                        </a>
                      </h3>
                      <p>
                        There are many variations of passages the available but
                        the majority suffered.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div
                    className="cases mb-30 wow fadeInUp2 animated"
                    data-wow-delay=".5s"
                  >
                    <div className="cases__box pos-rel">
                      <div className="cases__box--img">
                        <img src="assets/img/cases/2.jpg" alt />
                      </div>
                      <ul className="cases__tag white-bg">
                        <li>
                          <div className="cases--author d-flex align-items-center">
                            <img src="assets/img/cases/cs-1.jpg" alt />
                            <h4 className="semi-02-title ml-15">Vincent</h4>
                          </div>
                        </li>
                        <li>
                          <a
                            className="theme_btn theme_btn2 theme_btn_bg_02 d-btn"
                            href="donation.html"
                          >
                            Donate
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="cases__content">
                      <div className="cases-progress mb-25">
                        <p className="funding">
                          Raised <span>$10,543</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft animated"
                            data-wow-delay="0.5s"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <h5>85%</h5>
                          </div>
                        </div>
                      </div>
                      <h3>
                        <a href="donation.html">
                          Financial Help For The Poor Children In The World
                        </a>
                      </h3>
                      <p>
                        There are many variations of passages the available but
                        the majority suffered.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div
                    className="cases mb-30 wow fadeInUp2 animated"
                    data-wow-delay=".7s"
                  >
                    <div className="cases__box pos-rel">
                      <div className="cases__box--img">
                        <img src="assets/img/cases/3.jpg" alt />
                      </div>
                      <ul className="cases__tag white-bg">
                        <li>
                          <div className="cases--author d-flex align-items-center">
                            <img src="assets/img/cases/cs-1.jpg" alt />
                            <h4 className="semi-02-title ml-15">Vincent</h4>
                          </div>
                        </li>
                        <li>
                          <a
                            className="theme_btn theme_btn2 theme_btn_bg_02 d-btn"
                            href="donation.html"
                          >
                            Donate
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="cases__content">
                      <div className="cases-progress mb-25">
                        <p className="funding">
                          Raised <span>$9,600</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft animated"
                            data-wow-delay="0.7s"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <h5>75%</h5>
                          </div>
                        </div>
                      </div>
                      <h3>
                        <a href="donation.html">
                          Children Are Going Hungry Around The World
                        </a>
                      </h3>
                      <p>
                        There are many variations of passages the available but
                        the majority suffered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="counter-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-30">
                  <div
                    className="counetrs text-center wow fadeInUp2 animated"
                    data-wow-delay=".1s"
                  >
                    <div className="counetrs__icon mb-20">
                      <i className="flaticon-social-care"></i>
                    </div>
                    <h1>
                      <span className="counter">5641</span>
                    </h1>
                    <p>Our Volunteer</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-30">
                  <div
                    className="counetrs text-center wow fadeInUp2 animated"
                    data-wow-delay=".3s"
                  >
                    <div className="counetrs__icon mb-20">
                      <i className="flaticon-group"></i>
                    </div>
                    <h1>
                      <span className="counter">7842</span>
                    </h1>
                    <p>Global Partner</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-30">
                  <div
                    className="counetrs text-center wow fadeInUp2 animated"
                    data-wow-delay=".5s"
                  >
                    <div className="counetrs__icon mb-20">
                      <i className="flaticon-charity"></i>
                    </div>
                    <h1>
                      <span className="counter">9452</span>
                    </h1>
                    <p>Help Children</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-30">
                  <div
                    className="counetrs text-center wow fadeInUp2 animated"
                    data-wow-delay=".7s"
                  >
                    <div className="counetrs__icon mb-20">
                      <i className="flaticon-blood-donation"></i>
                    </div>
                    <h1>
                      <span className="counter">8542</span>
                    </h1>
                    <p>Medical Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="intro-video-area">
            <div className="container">
              <div className="col-xl-10 col-lg-10 col-md-10 mx-auto">
                <div
                  className="intro-video-content pos-rel mb-30"
                  style={{
                    backgroundImage: "url( assets/img/bg/intro-video.jpg)",
                  }}
                >
                  <div className="video-area pos-abl">
                    <a
                      href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                      className="popup-video"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section
            className="team-area pt-125 pb-100 pos-rel"
            style={{ backgroundImage: "url( assets/img/bg/team-bg.jpg )" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-7 mx-auto">
                  <div
                    className="section-title white-title text-center mb-75 pl-50 pr-50 wow fadeInUp2 animated"
                    data-wow-delay=".1s"
                  >
                    <h6>
                      <span>
                        <i className="far fa-heart"></i>
                      </span>{" "}
                      Team Member
                    </h6>
                    <h2>
                      Meet With <span>Our</span> Team
                    </h2>
                    <p className="text-white">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay=".3s"
                >
                  <div className="team active clearfix fix pos-rel">
                    <div className="team__thumb f-left mr-40">
                      <img src="assets/img/team/1.jpg" alt />
                    </div>
                    <div className="team__content pos-rel mt-25">
                      <h3>
                        <a href="team-details.html">Herman Cantu</a>
                      </h3>
                      <p>Project Manager</p>
                      <div className="team__content--social">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay=".5s"
                >
                  <div className="team white-bg clearfix fix pos-rel">
                    <div className="team__thumb f-left mr-40">
                      <img src="assets/img/team/2.jpg" alt />
                    </div>
                    <div className="team__content pos-rel mt-25">
                      <h3>
                        <a href="team-details.html">Doreen Riviera</a>
                      </h3>
                      <p>CEO & Founder</p>
                      <div className="team__content--social">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay=".5s"
                >
                  <div className="team white-bg clearfix fix pos-rel">
                    <div className="team__thumb f-left mr-40">
                      <img src="assets/img/team/3.jpg" alt />
                    </div>
                    <div className="team__content pos-rel mt-25">
                      <h3>
                        <a href="team-details.html">Marion Danielson</a>
                      </h3>
                      <p>Medical Support</p>
                      <div className="team__content--social">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay=".7s"
                >
                  <div className="team white-bg clearfix fix pos-rel">
                    <div className="team__thumb f-left mr-40">
                      <img src="assets/img/team/4.jpg" alt />
                    </div>
                    <div className="team__content pos-rel mt-25">
                      <h3>
                        <a href="team-details.html">Larry Johnson</a>
                      </h3>
                      <p>Software Engineer</p>
                      <div className="team__content--social">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="gallery-area pt-130 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-md-7 mx-auto">
                  <div
                    className="section-title text-center mb-85 pl-50 pr-50 wow fadeInUp2 animated"
                    data-wow-delay=".1s"
                  >
                    <h6>
                      <span>
                        <i className="far fa-heart"></i>
                      </span>{" "}
                      Photo Gallery
                    </h6>
                    <h2>
                      Our <span>Photo</span> Gallery
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div
                        className="gallery pos-rel text-center wow fadeInUp2 animated"
                        data-wow-delay=".3s"
                      >
                        <div className="gallery__thumb pos-rel mb-30">
                          <img src="assets/img/gallery/1.jpg" alt />
                        </div>
                        <div className="gallery__content">
                          <a
                            className="popup-image"
                            href="assets/img/gallery/1.jpg"
                          >
                            <i className="far fa-plus"></i>
                          </a>
                          <h3>
                            <a href="gallery-2.html">Help The Children</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div
                        className="gallery pos-rel text-center wow fadeInUp2 animated"
                        data-wow-delay=".3s"
                      >
                        <div className="gallery__thumb pos-rel mb-30">
                          <img src="assets/img/gallery/2.jpg" alt />
                        </div>
                        <div className="gallery__content">
                          <a
                            className="popup-image"
                            href="assets/img/gallery/2.jpg"
                          >
                            <i className="far fa-plus"></i>
                          </a>
                          <h3>
                            <a href="gallery-2.html">Help The Children</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div
                        className="gallery pos-rel text-center wow fadeInUp2 animated"
                        data-wow-delay=".3s"
                      >
                        <div className="gallery__thumb pos-rel mb-30">
                          <img src="assets/img/gallery/3.jpg" alt />
                        </div>
                        <div className="gallery__content">
                          <a
                            className="popup-image"
                            href="assets/img/gallery/3.jpg"
                          >
                            <i className="far fa-plus"></i>
                          </a>
                          <h3>
                            <a href="gallery-2.html">Help The Children</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div
                        className="gallery pos-rel text-center wow fadeInUp2 animated"
                        data-wow-delay=".3s"
                      >
                        <div className="gallery__thumb pos-rel mb-30">
                          <img src="assets/img/gallery/4.jpg" alt />
                        </div>
                        <div className="gallery__content">
                          <a
                            className="popup-image"
                            href="assets/img/gallery/4.jpg"
                          >
                            <i className="far fa-plus"></i>
                          </a>
                          <h3>
                            <a href="gallery-2.html">Help The Children</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div
                    className="gallery pos-rel text-center wow fadeInUp2 animated"
                    data-wow-delay=".3s"
                  >
                    <div className="gallery__thumb pos-rel mb-30">
                      <img src="assets/img/gallery/5.jpg" alt />
                    </div>
                    <div className="gallery__content">
                      <a
                        className="popup-image"
                        href="assets/img/gallery/5.jpg"
                      >
                        <i className="far fa-plus"></i>
                      </a>
                      <h3>
                        <a href="gallery-2.html">Help The Children</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="events-area events-style-1 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-md-7 mx-auto">
                  <div
                    className="section-title text-center mb-85 pl-50 pr-50 wow fadeInUp2 animated"
                    data-wow-delay=".1s"
                  >
                    <h6>
                      <span>
                        <i className="far fa-heart"></i>
                      </span>{" "}
                      Event
                    </h6>
                    <h2>
                      Our <span>Upcoming</span> Event
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                  <div className="events-wrapper mb-30">
                    <div
                      className="events active pos-rel wow fadeInUp2 animated"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="events__back"
                        style={{
                          backgroundImage: "url( assets/img/events/1.jpg)",
                        }}
                      ></div>
                      <ul className="events__list__one align-items-center justify-content-between pl-50 pr-50">
                        <li>
                          <div className="events__content">
                            <span>
                              <i className="far fa-calendar-alt"></i> 10 August
                              2022
                            </span>
                            <h3 className="mb-15">
                              <a href="events-details.html">
                                Fund Raising Event For Food
                              </a>
                            </h3>
                            <p>
                              There are many variations of passages available
                              the majority have suffered alteration some
                              injected humour.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="events__btn text-md-center text-xl-right">
                            <a
                              className="theme_btn theme_btn_bg"
                              href="events-details.html"
                            >
                              join event
                              <span>
                                <i className="fas fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="events-wrapper mb-30">
                    <div
                      className="events pos-rel wow fadeInUp2 animated"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="events__back"
                        style={{
                          backgroundImage: " url( assets/img/events/2.jpg)",
                        }}
                      ></div>
                      <ul className="events__list__one align-items-center justify-content-between pl-50 pr-50">
                        <li>
                          <div className="events__content">
                            <span>
                              <i className="far fa-calendar-alt"></i> 10 August
                              2022
                            </span>
                            <h3 className="mb-15">
                              <a href="events-details.html">
                                Fund Raising Event For Food
                              </a>
                            </h3>
                            <p>
                              There are many variations of passages available
                              the majority have suffered alteration some
                              injected humour.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="events__btn text-md-center text-xl-right">
                            <a
                              className="theme_btn theme_btn_bg"
                              href="events-details.html"
                            >
                              join event
                              <span>
                                <i className="fas fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="events-wrapper mb-30">
                    <div
                      className="events pos-rel wow fadeInUp2 animated"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="events__back"
                        style={{
                          backgroundImage: "url( assets/img/events/3.jpg)",
                        }}
                      ></div>
                      <ul className="events__list__one align-items-center justify-content-between pl-50 pr-50">
                        <li>
                          <div className="events__content">
                            <span>
                              <i className="far fa-calendar-alt"></i> 10 August
                              2022
                            </span>
                            <h3 className="mb-15">
                              <a href="events-details.html">
                                Fund Raising Event For Food
                              </a>
                            </h3>
                            <p>
                              There are many variations of passages available
                              the majority have suffered alteration some
                              injected humour.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="events__btn text-md-center text-xl-right">
                            <a
                              className="theme_btn theme_btn_bg"
                              href="events-details.html"
                            >
                              join event
                              <span>
                                <i className="fas fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="events-wrapper mb-30">
                    <div
                      className="events active pos-rel wow fadeInUp2 animated"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="events__back"
                        style={{
                          backgroundImage: "url( aassets/img/events/4.jpg)",
                        }}
                      ></div>
                      <ul className="events__list__one align-items-center justify-content-between pl-50 pr-50">
                        <li>
                          <div className="events__content">
                            <span>
                              <i className="far fa-calendar-alt"></i> 10 August
                              2022
                            </span>
                            <h3 className="mb-15">
                              <a href="events-details.html">
                                Fund Raising Event For Food
                              </a>
                            </h3>
                            <p>
                              There are many variations of passages available
                              the majority have suffered alteration some
                              injected humour.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="events__btn text-md-center text-xl-right">
                            <a
                              className="theme_btn theme_btn_bg"
                              href="events-details.html"
                            >
                              join event
                              <span>
                                <i className="fas fa-arrow-right"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonial-area grey-bg2 pos-rel pt-130 pb-130">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div
                    className="testimonial-text-wrapper wow fadeInUp2 animated mb-30"
                    data-wow-delay=".1s"
                  >
                    <div className="section-title text-left mb-35">
                      <h6>
                        <span>
                          <i className="far fa-heart"></i>
                        </span>{" "}
                        Clients Feedback
                      </h6>
                      <h2>What Our Clients Say About Us</h2>
                    </div>
                    <p>
                      There are many variations of passages orem sum available
                      but the majority have suffered alteration injected humour.
                    </p>
                    <a className="theme_btn theme_btn_bg" href="#">
                      View More{" "}
                      <span>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 testimonial-wrapper">
                  <div className="row testimonial-active">
                    <div className="col-xl-6">
                      <div
                        className="testimonial-item pos-rel wow fadeInUp2 animated"
                        data-wow-delay=".3s"
                      >
                        <div className="author_box d-flex align-items-center mb-25">
                          <div className="author_box__img mr-15">
                            <img src="assets/img/testimonial/1.jpg" alt />
                          </div>
                          <div className="author_box__content">
                            <h4 className="semi-02-title">Dominga Joubert</h4>
                            <p>Clients</p>
                            <div className="review-icon">
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <p className="semi-title mb-10">
                          There are many variations of passages the available in
                          some form injected humour of the randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className="testimonial-item pos-rel wow fadeInUp2 animated"
                        data-wow-delay=".5s"
                      >
                        <div className="author_box d-flex align-items-center mb-25">
                          <div className="author_box__img mr-15">
                            <img src="assets/img/testimonial/2.jpg" alt />
                          </div>
                          <div className="author_box__content">
                            <h4 className="semi-02-title">Lauren Linde</h4>
                            <p>Clients</p>
                            <div className="review-icon">
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <p className="semi-title mb-10">
                          There are many variations of passages the available in
                          some form injected humour of the randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className="testimonial-item pos-rel wow fadeInUp2 animated"
                        data-wow-delay=".3s"
                      >
                        <div className="author_box d-flex align-items-center mb-25">
                          <div className="author_box__img mr-15">
                            <img src="assets/img/testimonial/1.jpg" alt />
                          </div>
                          <div className="author_box__content">
                            <h4 className="semi-02-title">Amanda Dent</h4>
                            <p>Clients</p>
                            <div className="review-icon">
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <p className="semi-title mb-10">
                          There are many variations of passages the available in
                          some form injected humour of the randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className="testimonial-item pos-rel wow fadeInUp2 animated"
                        data-wow-delay=".5s"
                      >
                        <div className="author_box d-flex align-items-center mb-25">
                          <div className="author_box__img mr-15">
                            <img src="assets/img/testimonial/2.jpg" alt />
                          </div>
                          <div className="author_box__content">
                            <h4 className="semi-02-title">Benjamin Kwong</h4>
                            <p>Clients</p>
                            <div className="review-icon">
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                              <a href="#">
                                <i className="fas fa-star"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <p className="semi-title mb-10">
                          There are many variations of passages the available in
                          some form injected humour of the randomised words
                          which don't look even slightly believable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="blog-area pt-130 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-md-7 mx-auto">
                  <div
                    className="section-title text-center mb-85 pl-50 pr-50 wow fadeInUp2 animated"
                    data-wow-delay=".1s"
                  >
                    <h6>
                      <span>
                        <i className="far fa-heart"></i>
                      </span>{" "}
                      Our Blog
                    </h6>
                    <h2>
                      Latest <span>News</span> & Blog
                    </h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated"
                  data-wow-delay=".3s"
                >
                  <div className="blog mb-30">
                    <div className="blog__thumb">
                      <img src="assets/img/blog/1.jpg" alt />
                    </div>
                    <div className="blog__content">
                      <a className="tag" href="blog-details.html">
                        funding
                      </a>
                      <h3 className="blog-title mb-15">
                        <a href="blog-details.html">
                          Standing Out From Crowds For Poor Children In The
                          World
                        </a>
                      </h3>
                      <p className="mb-25">
                        There are many variations of passages available but the
                        majority have suffered alteration.
                      </p>
                      <ul className="blog-author">
                        <li>
                          <a className="mr-30" href="#">
                            <img src="assets/img/blog/author.jpg" alt />
                            <span>Juan Geisl</span>
                          </a>
                        </li>
                        <li>
                          <i className="far fa-calendar-alt"></i> 25 August 2022
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated"
                  data-wow-delay=".5s"
                >
                  <div className="blog mb-30">
                    <div className="blog__thumb">
                      <img src="assets/img/blog/2.jpg" alt />
                    </div>
                    <div className="blog__content">
                      <a className="tag" href="blog-details.html">
                        charity
                      </a>
                      <h3 className="blog-title mb-15">
                        <a href="blog-details.html">
                          Standing Out From Crowds For Poor Children In The
                          World
                        </a>
                      </h3>
                      <p className="mb-25">
                        There are many variations of passages available but the
                        majority have suffered alteration.
                      </p>
                      <ul className="blog-author">
                        <li>
                          <a className="mr-30" href="#">
                            <img src="assets/img/blog/author.jpg" alt />
                            <span>Tom Terrell</span>
                          </a>
                        </li>
                        <li>
                          <i className="far fa-calendar-alt"></i> 25 August 2022
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated"
                  data-wow-delay=".7s"
                >
                  <div className="blog mb-30">
                    <div className="blog__thumb">
                      <img src="assets/img/blog/3.jpg" alt />
                    </div>
                    <div className="blog__content">
                      <a className="tag" href="blog-details.html">
                        children
                      </a>
                      <h3 className="blog-title mb-15">
                        <a href="blog-details.html">
                          Standing Out From Crowds For Poor Children In The
                          World
                        </a>
                      </h3>
                      <p className="mb-25">
                        There are many variations of passages available but the
                        majority have suffered alteration.
                      </p>
                      <ul className="blog-author">
                        <li>
                          <a className="mr-30" href="#">
                            <img src="assets/img/blog/author.jpg" alt />
                            <span>Jesse Dalla</span>
                          </a>
                        </li>
                        <li>
                          <i className="far fa-calendar-alt"></i> 25 August 2022
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="brand-area grey-bg2 pt-70">
            <div className="container">
              <div className="row brand-active pb-60">
                <div className="col-xl-2">
                  <div
                    className="brand-slide text-center wow fadeInUp animated"
                    data-wow-delay=".1s"
                  >
                    <div className="brand-img">
                      <a href="#">
                        <img src="assets/img/brand/1.png" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2">
                  <div
                    className="brand-slide text-center wow fadeInUp animated"
                    data-wow-delay=".3s"
                  >
                    <div className="brand-img">
                      <a href="#">
                        <img src="assets/img/brand/2.png" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2">
                  <div
                    className="brand-slide text-center wow fadeInUp animated"
                    data-wow-delay=".5s"
                  >
                    <div className="brand-img">
                      <a href="#">
                        <img src="assets/img/brand/3.png" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2">
                  <div
                    className="brand-slide text-center wow fadeInUp animated"
                    data-wow-delay=".7s"
                  >
                    <div className="brand-img">
                      <a href="#">
                        <img src="assets/img/brand/4.png" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2">
                  <div
                    className="brand-slide text-center wow fadeInUp animated"
                    data-wow-delay=".9s"
                  >
                    <div className="brand-img">
                      <a href="#">
                        <img src="assets/img/brand/5.png" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2">
                  <div
                    className="brand-slide text-center wow fadeInUp animated"
                    data-wow-delay=".3s"
                  >
                    <div className="brand-img">
                      <a href="#">
                        <img src="assets/img/brand/6.png" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2">
                  <div
                    className="brand-slide text-center wow fadeInUp animated"
                    data-wow-delay=".7s"
                  >
                    <div className="brand-img">
                      <a href="#">
                        <img src="assets/img/brand/4.png" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2">
                  <div
                    className="brand-slide text-center wow fadeInUp animated"
                    data-wow-delay=".9s"
                  >
                    <div className="brand-img">
                      <a href="#">
                        <img src="assets/img/brand/5.png" alt />
                      </a>
                    </div>
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
