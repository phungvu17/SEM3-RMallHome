import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import { useEffect, useState } from "react";
import Loading from "../../layouts/loading";
function Contact() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);
    return (
        <>
            <Helmet>
                <title>Contact | R Mall</title>
            </Helmet>
            <Layout>
                {loading ? <Loading /> : ""}
                <main>
                    <section
                        className="page-title-area"
                        style={{
                            backgroundImage: "url('assets/img/bg/page-title.jpg')",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="container pos-rel">
                            <div className="row">
                                <div className="col-xl-5 mx-auto">
                                    <div className="page-title-wrapper text-center pt-125">
                                        <div className="page-title-box">
                                            <h2 className="page-title">Contact</h2>
                                            <ul className="breadcrumb-list">
                                                <li>
                                                    <a href="index.html">
                                                        Home <i className="far fa-chevron-right"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!" className="active">
                                                        Contact
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contacts-details-area pt-130 pb-100">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-6 col-md-6">
                                    <div className="get-touch-area pl-50 pr-50">
                                        <div className="section-title text-left mb-30 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <h6>
                                                <span>
                                                    <i className="far fa-heart"></i>
                                                </span>
                                                Get In Touch
                                            </h6>
                                            <h2 className="mt-20">Call Or Email Us</h2>
                                            <p>There are many variations of passages of orem psum available but the majority have suffered alteration in some.</p>
                                        </div>
                                        <div className="contacts d-flex align-items-center mb-30">
                                            <div className="contacts__icon mr-20">
                                                <i className="fal fa-phone-plus"></i>
                                            </div>
                                            <div className="contacts__text">
                                                <h4 className="semi-02-title semi-02-title__custom">Phone Number</h4>
                                                <h5>+02 123 456 7894</h5>
                                            </div>
                                        </div>
                                        <div className="contacts d-flex align-items-center mb-30">
                                            <div className="contacts__icon mr-20">
                                                <i className="fal fa-envelope-open-text"></i>
                                            </div>
                                            <div className="contacts__text">
                                                <h4 className="semi-02-title semi-02-title__custom">Email Address</h4>
                                                <h5>
                                                    <a href="#!" className="__cf_email__" data-cfemail="1871767e77587d60797568747d367b7775">
                                                        ramall@contact.com
                                                    </a>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="contacts d-flex align-items-center mb-30">
                                            <div className="contacts__icon mr-20">
                                                <i className="fal fa-map-marked-alt"></i>
                                            </div>
                                            <div className="contacts__text">
                                                <h4 className="semi-02-title semi-02-title__custom">Our Location</h4>
                                                <h5>Mumbai, India</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-6">
                                    <div className="donar-information donation-form mb-30 pr-50 pl-50">
                                        <div className="section-title text-left mb-20 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <h6>
                                                <span>
                                                    <i className="far fa-heart"></i>
                                                </span>
                                                Send Message
                                            </h6>
                                            <h2 className="mt-10">Feel Free To Send Message.</h2>
                                        </div>
                                        <div className="main-contact-area">
                                            <form id="contact-form">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="input-area mb-20">
                                                            <input type="text" name="name" className="form-control" placeholder="Your Name" required autoFocus />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="input-area mb-20">
                                                            <input type="text" className="form-control" name="email" placeholder="Email Address" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-area mb-20">
                                                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                                </div>
                                                <div className="input-area mb-20">
                                                    <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>
                                                </div>
                                                <div className="input-btn">
                                                    <button className="theme_btn theme_btn_bg large_btn">Send message</button>
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
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2sbd"></iframe> */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571239593!2d72.71637487134092!3d19.08217751404432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2zTXVtYmFpLCBNYWhhcmFzaHRyYSwg4bqkbiDEkOG7mQ!5e0!3m2!1svi!2s!4v1703259979890!5m2!1svi!2s"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </main>
            </Layout>
        </>
    );
}
export default Contact;
