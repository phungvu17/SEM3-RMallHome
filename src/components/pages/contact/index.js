import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import PageTitle from "../../layouts/page-title";
function Contact() {
  return (
    <>
      <Helmet>RMail | Contact </Helmet>
      <Layout>
        <PageTitle />
        <main>
          <section className="contacts-details-area pt-130 pb-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <div className="get-touch-area pl-50 pr-50">
                    <div
                      className="section-title text-left mb-30 wow fadeInUp2 animated"
                      data-wow-delay=".1s"
                    >
                      <h6>
                        <span>
                          <i className="far fa-heart"></i>
                        </span>{" "}
                        Get In Touch
                      </h6>
                      <h2>Call Or Email Us</h2>
                      <p>
                        There are many variations of passages of orem psum
                        available but the majority have suffered alteration in
                        some.
                      </p>
                    </div>
                    <div className="contacts d-flex align-items-center mb-30">
                      <div className="contacts__icon mr-25">
                        <i className="fal fa-phone-plus"></i>
                      </div>
                      <div className="contacts__text">
                        <h4 className="semi-02-title">Phone Number</h4>
                        <h5>+02 123 456 7894</h5>
                      </div>
                    </div>
                    <div className="contacts d-flex align-items-center mb-30">
                      <div className="contacts__icon mr-25">
                        <i className="fal fa-envelope-open-text"></i>
                      </div>
                      <div className="contacts__text">
                        <h4 className="semi-02-title">Email Address</h4>
                        <h5>
                          <a
                            href="https://themes.themewild.com/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="1871767e77587d60797568747d367b7775"
                          >
                            [email&#160;protected]
                          </a>
                        </h5>
                      </div>
                    </div>
                    <div className="contacts d-flex align-items-center mb-30">
                      <div className="contacts__icon mr-25">
                        <i className="fal fa-map-marked-alt"></i>
                      </div>
                      <div className="contacts__text">
                        <h4 className="semi-02-title">Our Location</h4>
                        <h5>59 Dark Road, USA</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-6">
                  <div className="donar-information donation-form mb-30 pr-50 pl-50">
                    <div
                      className="section-title text-left mb-50 wow fadeInUp2 animated"
                      data-wow-delay=".1s"
                    >
                      <h6>
                        <span>
                          <i className="far fa-heart"></i>
                        </span>{" "}
                        Send Message
                      </h6>
                      <h2>Feel Free To Send Message.</h2>
                    </div>
                    <div className="main-contact-area">
                      <form
                        method="post"
                        action="https://themes.themewild.com/carelax/assets/php/contact.php"
                        id="contact-form"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-area mb-10">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-area mb-10">
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                placeholder="Email Address"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="input-area mb-10">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="input-area mb-10">
                          <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                        <div className="input-btn">
                          <button className="theme_btn theme_btn_bg large_btn">
                            Send message
                          </button>
                        </div>
                        <div className="col-md-12 mt-3">
                          <div className="form-messege text-success"></div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="map-area-03">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2sbd"></iframe>
          </div>
        </main>
      </Layout>
    </>
  );
}
export default Contact;
