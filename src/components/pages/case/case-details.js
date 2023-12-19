import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import PageTitle from "../../layouts/page-title";
function CaseDetails() {
  return (
    <>
      <Helmet>RMail | case-details</Helmet>
      <Layout>
        <PageTitle />
        <main>
          <section className="cases-details-area pt-125">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-12">
                  <div className="cases-details details-left-area pb-100">
                    <div
                      className="cases cases-wrapper-box wow fadeInUp2 animated"
                      data-wow-delay=".2s"
                    >
                      <div className="cases__content">
                        <div className="cases__box mb-20">
                          <img
                            className="img-fluid"
                            src="assets/img/cases/single.jpg"
                            alt
                          />
                        </div>
                        <h2>
                          <a href="#">
                            Help The Children Proverty And Safe World
                            Environment
                          </a>
                        </h2>
                        <div className="cases--author d-flex align-items-center mb-25">
                          <img src="assets/img/cases/cs-1.jpg" alt />
                          <h4 className="semi-02-title ml-15">
                            Esther Simmons
                          </h4>
                        </div>
                        <div className="cases-meta d-sm-flex justify-content-between">
                          <div className="cases-progress mb-60">
                            <h4 className="funding semi-02-title">
                              Raised <span>$9560</span>
                            </h4>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft animated"
                                data-wow-delay="0.3s"
                                role="progressbar"
                                style={{ width: "55%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <h3>55%</h3>
                              </div>
                            </div>
                          </div>
                          <div className="cases-btn mb-10 d-none d-xl-inline-block">
                            <a
                              href="contact.html"
                              className="theme_btn theme_btn2 theme_btn_bg_02"
                            >
                              donate Now{" "}
                              <span>
                                <i className="fas fa-heart"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                        <p>
                          Vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio. Nam libero
                          tempore, cum soluta nobis est eligendi optio cumque
                          nihil impedit quo minus id quod maxime placeat facere
                          possimus, omnis voluptas assumenda est, omnis dolor
                          repellendus. Temporibus autem quibusdam et aut
                          officiis debitis aut rerum necessitatibus saepe
                          eveniet ut et voluptates repudiandae sint et molestiae
                          non recusandae. Itaque earum rerum hic tenetur a
                          sapiente delectus, ut aut reiciendis voluptatibus
                          maiores alias consequatur aut perferendis doloribus
                          asperiores repellat.
                        </p>
                      </div>
                    </div>
                    <div className="cases-feature mb-20">
                      <h3 className="cases-title mb-20">Why Donate Us</h3>
                      <p className="mb-30">
                        On the other hand we denounce with righteous indignation
                        and dislike men who are so beguiled and demoralized by
                        the charms of pleasure of the moment, so blinded by
                        desire, that they cannot foresee the pain and trouble
                        that are bound to ensue; and equal blame belongs to
                        those who fail in their duty through weakness of will,
                        which is the same as saying through shrinking from toil
                        and pain. These cases are perfectly simple and easy to
                        distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing prevents our being able to
                        do what we like best.
                      </p>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="cases-single fix mb-30">
                            <div className="cases-single__icon">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="cases-single__content fix ml-25">
                              <h5>At vero eos et accusamus et</h5>
                              <p>
                                Every pleasure is to be welcomed and every pain
                                avoided. But in certain circumstances and owing
                                to the claims of duty or the obligations of
                                business.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="cases-single fix mb-30">
                            <div className="cases-single__icon">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="cases-single__content fix ml-25">
                              <h5>Iusto odio dignissimos ducimus</h5>
                              <p>
                                Every pleasure is to be welcomed and every pain
                                avoided. But in certain circumstances and owing
                                to the claims of duty or the obligations of
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="cases-single fix mb-30">
                            <div className="cases-single__icon">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="cases-single__content fix ml-25">
                              <h5>Qui blanditiis praesentium volup</h5>
                              <p>
                                Every pleasure is to be welcomed and every pain
                                avoided. But in certain circumstances and owing
                                to the claims of duty or the obligations of
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="cases-single fix mb-30">
                            <div className="cases-single__icon">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="cases-single__content fix ml-25">
                              <h5>Leniti atque corrupt dolores</h5>
                              <p>
                                Every pleasure is to be welcomed and every pain
                                avoided. But in certain circumstances and owing
                                to the claims of duty or the obligations of
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="events-video-area cases-video pos-rel mb-40"
                      style={{
                        backgroundImage: "url( assets/img/cases/video.jpg)",
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
                    <div className="cases-information">
                      <h3 className="cases-title mb-20">Donate Now</h3>
                      <p>
                        Rero eos et accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum deleniti atque
                        corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis
                        est et expedita distinctio. Nam libero tempore, cum
                        soluta nobis est eligendi optio cumque nihil impedit quo
                        minus id quod maxime placeat facere possimus.
                      </p>
                      <div
                        className="doante-select-area donate-select-03 mb-60 mt-40 text-center white-bg wow fadeInUp animated"
                        data-wow-delay=".3s"
                      >
                        <div className="input-donate mb-30">
                          <button className="cont_btn">$50</button>
                          <button className="cont_btn">$100</button>
                          <button className="cont_btn">$200</button>
                          <button className="cont_btn">$400</button>
                        </div>
                        <button className="theme_btn theme_btn2 theme_btn_bg_02 large_btn">
                          $400
                        </button>
                      </div>
                      <div className="donar-information">
                        <h3 className="cases-title mb-30">
                          Donate Information
                        </h3>
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="input-area mb-30">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Full Name"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="input-area mb-30">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Email Address"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="input-area mb-30">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="input-area mb-30">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Your Location"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="input-area mb-30">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="input-area mb-30">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Country"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="input-area mb-30">
                              <textarea
                                name="message"
                                id="messsage"
                                cols="30"
                                rows="10"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="input-btn mb-30">
                              <button
                                className="theme_btn theme_btn2 theme_btn_bg_02 large_btn"
                                href="#"
                              >
                                donate now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12">
                  <div className="details-right-area">
                    <div className="widget mb-30">
                      <div className="widget-post">
                        <h3 className="cases-title mb-30">Popular Cases</h3>
                        <div className="post d-flex align-items-center mb-20">
                          <div className="post__thumb mr-20">
                            <img src="assets/img/cases/s-1.jpg" alt />
                          </div>
                          <div className="post__content">
                            <h5>
                              <a href="blog-details.html">
                                Vero eos et accus et iusto odio dign
                              </a>
                            </h5>
                            <a className="view_btn" href="blog-details.html">
                              view Details
                            </a>
                          </div>
                        </div>
                        <div className="post d-flex align-items-center mb-20">
                          <div className="post__thumb mr-20">
                            <img src="assets/img/cases/s-2.jpg" alt />
                          </div>
                          <div className="post__content">
                            <h5>
                              <a href="blog-details.html">
                                Vero eos et accus et iusto odio dign
                              </a>
                            </h5>
                            <a className="view_btn" href="blog-details.html">
                              view Details
                            </a>
                          </div>
                        </div>
                        <div className="post d-flex align-items-center mb-20">
                          <div className="post__thumb mr-20">
                            <img src="assets/img/cases/s-3.jpg" alt />
                          </div>
                          <div className="post__content">
                            <h5>
                              <a href="blog-details.html">
                                Vero eos et accus et iusto odio dign
                              </a>
                            </h5>
                            <a className="view_btn" href="blog-details.html">
                              view Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget mb-30">
                      <div
                        className="events_wrapper wow fadeInUp2 animated"
                        data-wow-delay=".4s"
                      >
                        <div
                          className="events-02 events-03 pos-rel mb-30"
                          style={{
                            backgroundImage: "url(assets/img/cases/4.jpg)",
                          }}
                        >
                          <div className="cases">
                            <div className="cases__box pos-rel">
                              <ul className="cases__tag white-bg">
                                <li>
                                  <div className="cases--author d-flex align-items-center">
                                    <img src="assets/img/cases/cs-1.jpg" alt />
                                    <h4 className="semi-02-title ml-15">
                                      Esther Simmons
                                    </h4>
                                  </div>
                                </li>
                                <li>
                                  <a
                                    className="theme_btn theme_btn2 theme_btn_bg_02 d-btn"
                                    href="#"
                                  >
                                    Donate
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="cases__content">
                              <div className="cases-progress mb-25">
                                <p className="funding">
                                  Raised <span>$9560</span>
                                </p>
                                <div className="progress">
                                  <div
                                    className="progress-bar wow fadeInLeft animated"
                                    data-wow-delay="0.3s"
                                    role="progressbar"
                                    style={{ width: " 55%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  >
                                    <h5>55%</h5>
                                  </div>
                                </div>
                              </div>
                              <h3>
                                <a href="#">
                                  Help The Children Proverty And Safe World
                                  Environment
                                </a>
                              </h3>
                              <p>
                                There are many variations of passages the
                                available but the majority suffered.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget mb-30">
                      <div className="widget-post recent-post">
                        <h3 className="cases-title mb-30">Recent Donation</h3>
                        <div className="post d-flex align-items-center mb-20">
                          <div className="post__thumb mr-20">
                            <img src="assets/img/cases/s-1.jpg" alt />
                          </div>
                          <div className="post__content">
                            <h5>Hedy J Craig</h5>
                            <span>$400.00</span>
                            <p>
                              <i className="far fa-calendar-alt"></i> 20 July
                              2022
                            </p>
                          </div>
                        </div>
                        <div className="post d-flex align-items-center mb-20">
                          <div className="post__thumb mr-20">
                            <img src="assets/img/cases/s-2.jpg" alt />
                          </div>
                          <div className="post__content">
                            <h5>Marianne Crumpton</h5>
                            <span>$400.00</span>
                            <p>
                              <i className="far fa-calendar-alt"></i>20 July
                              2022
                            </p>
                          </div>
                        </div>
                        <div className="post d-flex align-items-center mb-20">
                          <div className="post__thumb mr-20">
                            <img src="assets/img/cases/s-3.jpg" alt />
                          </div>
                          <div className="post__content">
                            <h5>Rebecca King</h5>
                            <span>$400.00</span>
                            <p>
                              <i className="far fa-calendar-alt"></i>20 July
                              2022
                            </p>
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
export default CaseDetails;
