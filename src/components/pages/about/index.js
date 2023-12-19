import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import PageTitle from "../../layouts/page-title";
import Loading from "../../layouts/loading";
import { useEffect, useState } from "react";
function About() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      <Helmet>RMail | About</Helmet>
      <Layout>
        {loading ? <Loading /> : ""}
        <PageTitle />
        <main>
          <section className="about-area pt-130 pb-70">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="about-img-02 pos-rel">
                    <div
                      className="about-img-02__thumb d-none d-lg-inline-block pr-45 wow fadeInUp2 animated"
                      data-wow-delay=".1s"
                    >
                      <img src="assets/img/about/2.jpg" alt />
                    </div>
                    <div
                      className="about-img-02__thumb-02 ml-100 wow fadeInUp2 animated"
                      data-wow-delay=".1s"
                    >
                      <img src="assets/img/about/3.jpg" alt />
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
                  <div className="about-wrap-04 mb-60 pl-40">
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
                    <p className="mb-35">
                      There are many variations of passages of orem psum
                      available but the majority have suffered alteration in
                      some form by injected humour or randomised.
                    </p>
                    <ul
                      className="nav nav-tabs mb-35"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-bs-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Mission
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Vision
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="contact-tab"
                          data-bs-toggle="tab"
                          href="#contact"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Our Goals
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div className="inner-content mr-35">
                          <div className="inner-content__text">
                            <h3>Medicine For Child</h3>
                            <p>
                              There are many variations of passages of orem psum
                              available but the majority have suffered
                              alteration in some form injected humour.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div className="inner-content d-sm-flex align-items-center">
                          <div className="inner-content mr-35">
                            <div className="inner-content__text">
                              <h3>Education For Child</h3>
                              <p>
                                There are many variations of passages of orem
                                psum available but the majority have suffered
                                alteration in some form injected humour.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        <div className="inner-content d-sm-flex align-items-center">
                          <div className="inner-content mr-35">
                            <div className="inner-content__text">
                              <h3>Food For People</h3>
                              <p>
                                There are many variations of passages of orem
                                psum available but the majority have suffered
                                alteration in some form injected humour.
                              </p>
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

          <section className="counter-area">
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
          </section>

          <section className="team-area-02 pb-50">
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
                      </span>{" "}
                      Team Member
                    </h6>
                    <h2>
                      Meet With <span>Our</span> Team
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
                  className="col-xl-3 col-lg-6 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay=".2s"
                >
                  <div className="teams white-bg mb-30">
                    <div className="teams__thumb pos-rel mb-30">
                      <div className="teams__thumb--img pos-rel">
                        <img src="assets/img/team/5.jpg" alt />
                      </div>
                      <div className="teams__thumb--social">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="teams__content text-center">
                      <h3 className="semi-02-title">
                        <a href="team-details.html">Herman Cantu</a>
                      </h3>
                      <p>Project Manager</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay=".4s"
                >
                  <div className="teams white-bg mb-30">
                    <div className="teams__thumb pos-rel mb-30">
                      <div className="teams__thumb--img pos-rel">
                        <img src="assets/img/team/6.jpg" alt />
                      </div>
                      <div className="teams__thumb--social">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="teams__content text-center">
                      <h3 className="semi-02-title">
                        <a href="team-details.html">Doreen Riviera</a>
                      </h3>
                      <p>CEO & Founder</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay=".6s"
                >
                  <div className="teams white-bg mb-30">
                    <div className="teams__thumb pos-rel mb-30">
                      <div className="teams__thumb--img pos-rel">
                        <img src="assets/img/team/7.jpg" alt />
                      </div>
                      <div className="teams__thumb--social">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="teams__content text-center">
                      <h3 className="semi-02-title">
                        <a href="team-details.html">Marion Danielson</a>
                      </h3>
                      <p>Medical Support</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay=".3s"
                >
                  <div className="teams white-bg mb-30">
                    <div className="teams__thumb pos-rel mb-30">
                      <div className="teams__thumb--img pos-rel">
                        <img src="assets/img/team/8.jpg" alt />
                      </div>
                      <div className="teams__thumb--social">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                          <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                    <div className="teams__content text-center">
                      <h3 className="semi-02-title">
                        <a href="team-details.html">Larry Johnson</a>
                      </h3>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="testimonial-area grey-bg2 pos-rel pt-130 pb-130">
            <div className="container">
              <div className="row">
                <div className="col-md-7 mx-auto">
                  <div className="section-title text-center mb-35">
                    <h6>
                      <span>
                        <i className="far fa-heart"></i>
                      </span>{" "}
                      Clients Feedback
                    </h6>
                    <h2>
                      What Our <span>Clients</span> Say{" "}
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
              <div className="row testimonial-active-2">
                <div className="col-xl-4 item-box">
                  <div
                    className="testimonial-item white-bg pos-rel wow fadeInUp2 animated"
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
                      some form injected humour of the randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 item-box">
                  <div
                    className="testimonial-item white-bg pos-rel wow fadeInUp2 animated"
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
                      some form injected humour of the randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 item-box">
                  <div
                    className="testimonial-item white-bg pos-rel wow fadeInUp2 animated"
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
                      some form injected humour of the randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 item-box">
                  <div
                    className="testimonial-item white-bg pos-rel wow fadeInUp2 animated"
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
                      some form injected humour of the randomised words which
                      don't look even slightly believable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="events-area events-style-1 pt-100 pb-100">
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
                          backgroundImage: "url( assets/img/events/2.jpg)",
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
                          backgroundImage: "url( assets/img/events/4.jpg)",
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

          <section className="brand-area grey-bg2 pt-70">
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
          </section>
        </main>
      </Layout>
    </>
  );
}
export default About;
