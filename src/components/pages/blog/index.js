import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import PageTitle from "../../layouts/page-title";

function Blog() {
  return (
    <>
      <Helmet>RMail | Blog</Helmet>

      <Layout>
        <PageTitle />
        <main>
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
                  data-wow-delay=".2s"
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
                  data-wow-delay=".4s"
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
                  data-wow-delay=".6s"
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
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated"
                  data-wow-delay=".8s"
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
                  data-wow-delay="1s"
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
                  data-wow-delay="1.2s"
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
              <div className="row">
                <div className="col-xl-12">
                  <div className="pagination-area mt-30 mb-30">
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <i className="far fa-angle-double-left"></i>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <i className="far fa-angle-double-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
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
export default Blog;
