import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import PageTitle from "../../layouts/page-title";
function Case() {
  return (
    <>
      <Helmet>RMail | Case</Helmet>
      <Layout>
        <PageTitle />
        <main>
          <div className="course-area course-area-02 pt-130 pb-100">
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
                <div className="col-xl-12">
                  <div className="portfolio-menu text-center mb-25 pr-70 pl-70">
                    <button className="active" data-filter="*">
                      All
                    </button>
                    <button data-filter=".cat1" className>
                      Children
                    </button>
                    <button data-filter=".cat2" className>
                      Food
                    </button>
                    <button data-filter=".cat3" className>
                      Homeless
                    </button>
                    <button data-filter=".cat4" className>
                      Medical
                    </button>
                    <button data-filter=".cat5" className>
                      Education
                    </button>
                  </div>
                </div>
              </div>
              <div className="row grid">
                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat5 cat3">
                  <div
                    className="cases grey-bg2 mb-30 wow fadeInUp2 animated"
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
                            style={{ width: "65%" }}
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
                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat3 cat4">
                  <div
                    className="cases grey-bg2 mb-30 wow fadeInUp2 animated"
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
                          Raised <span>$7,500</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft animated"
                            data-wow-delay="0.3s"
                            role="progressbar"
                            style={{ width: "65%" }}
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
                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat1">
                  <div
                    className="cases grey-bg2 mb-30 wow fadeInUp2 animated"
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
                          Raised <span>$7,500</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft animated"
                            data-wow-delay="0.3s"
                            role="progressbar"
                            style={{ width: "65%" }}
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
                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat5 cat2">
                  <div
                    className="cases grey-bg2 mb-30 wow fadeInUp2 animated"
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
                            style={{ width: " 65%" }}
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
                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat3">
                  <div
                    className="cases grey-bg2 mb-30 wow fadeInUp2 animated"
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
                          Raised <span>$7,500</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft animated"
                            data-wow-delay="0.3s"
                            role="progressbar"
                            style={{ width: "65%" }}
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
                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat3">
                  <div
                    className="cases grey-bg2 mb-30 wow fadeInUp2 animated"
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
                          Raised <span>$7,500</span>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar wow fadeInLeft animated"
                            data-wow-delay="0.3s"
                            role="progressbar"
                            style={{ width: "65%;" }}
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
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
export default Case;
