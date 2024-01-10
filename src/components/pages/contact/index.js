import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import { useEffect, useState } from "react";
import Loading from "../../layouts/loading";
import api from "../../../services/api";
import url from "../../../services/url";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Contact() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = "Please enter your name.";
            valid = false;
        }

        if (!formData.email) {
            newErrors.email = "Please enter your email address.";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
            valid = false;
        }

        let phoneRegex = /^\d+$/;

        if (!formData.phone) {
            newErrors.phone = "Please enter your phone.";
            valid = false;
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Phone number must contain only numeric digits.";
            valid = false;
        } else if (formData.phone.length < 10) {
            newErrors.phone = "Phone number must have at least 10 digits";
            valid = false;
        }

        if (!formData.message) {
            newErrors.message = "Please enter message.";
            valid = false;
        } else if (formData.message.length < 3) {
            newErrors.message = "Please enter message with at least 3 characters.";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    const handleSubmitContact = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log(formData);
            try {
                const contactRequest = await api.post(url.CONTACT.CREATE, formData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                console.log(contactRequest.data);
                if (contactRequest.status === 201) {
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                    toast.success("Sent successfully!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            } catch (error) {
                toast.error("An error occurred. Please try again!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
    };

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
                                                    <Link to="/">
                                                        Home <i className="far fa-chevron-right"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="" className="active">
                                                        Contact
                                                    </Link>
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
                                                <h5>
                                                    <a href="tel:01234567894">+0123 456 7894</a>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="contacts d-flex align-items-center mb-30">
                                            <div className="contacts__icon mr-20">
                                                <i className="fal fa-envelope-open-text"></i>
                                            </div>
                                            <div className="contacts__text">
                                                <h4 className="semi-02-title semi-02-title__custom">Email Address</h4>
                                                <h5>
                                                    <a href="mailto:ramall@contact.com" className="__cf_email__">
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
                                            <form id="contact-form" onSubmit={handleSubmitContact}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="input-area mb-20">
                                                            <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} autoFocus />
                                                            {formErrors.name && <p className="invalid-feedback">{formErrors.name}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="input-area mb-20">
                                                            <input type="email" className="form-control" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                                                            {formErrors.email && <p className="invalid-feedback">{formErrors.email}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-area mb-20">
                                                    <input type="tel" className="form-control" name="phone" placeholder="Your phone" value={formData.phone} onChange={handleChange} />
                                                    {formErrors.phone && <p className="invalid-feedback">{formErrors.phone}</p>}
                                                </div>
                                                <div className="input-area mb-20">
                                                    <textarea name="message" cols="30" rows="10" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                                                    {formErrors.message && <p className="invalid-feedback">{formErrors.message}</p>}
                                                </div>
                                                <div className="input-btn">
                                                    <button type="submit" className="theme_btn theme_btn_bg large_btn">
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
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571239593!2d72.71637487134092!3d19.08217751404432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2zTXVtYmFpLCBNYWhhcmFzaHRyYSwg4bqkbiDEkOG7mQ!5e0!3m2!1svi!2s!4v1703259979890!5m2!1svi!2s"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </main>
            </Layout>
        </>
    );
}
export default Contact;
