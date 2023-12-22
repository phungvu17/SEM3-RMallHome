import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import Loading from "../../layouts/loading";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <Helmet>
                <title>About Us | R Mall</title>
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
                                            <h2 className="page-title">About Us</h2>
                                            <ul className="breadcrumb-list">
                                                <li>
                                                    <Link to="/">
                                                        Home <i className="far fa-chevron-right"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="#!" className="active">
                                                        About
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about-area pt-130 pb-70">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about-img-02 pos-rel">
                                        <div className="about-img-02__thumb d-none d-lg-inline-block pr-45 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <img src="assets/img/gallery/2.jpeg" alt="" width={"330px"} height={"365px"} style={{ objectFit: "cover" }} />
                                        </div>
                                        <div className="about-img-02__thumb-02 ml-100 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <img src="assets/img/about/1.jpeg" alt="" width={"385px"} height={"400px"} style={{ objectFit: "cover" }} />
                                        </div>
                                        <div className="experience-box wow fadeInUp2 animated" data-wow-delay=".3s">
                                            <h1>20</h1>
                                            <h4 className="semi-02-title">Years Experience</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="about-wrap-04 mb-60 pl-40">
                                        <div className="section-title text-left mb-20 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <h6>
                                                <span>
                                                    <i className="far fa-heart"></i>
                                                </span>
                                                About R Mall
                                            </h6>
                                            <h2>We Thrive for Profit and Business Success</h2>
                                        </div>
                                        <p className="mb-35">
                                            Welcome to R Mall, an impressive 4-storey, fully air-conditioned shopping mall. With an area of ​​up to 80,000 sq ft (7,000 m2) on each floor, we are proud
                                            to introduce a unique and convenient shopping space in the suburban area of ​​Mumbai.
                                        </p>
                                        <ul className="nav nav-tabs mb-35" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                                    Our Vision
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                                    New Initiatives
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                                    Featured Events
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="inner-content mr-35">
                                                    <div className="inner-content__text">
                                                        <h3>Curated Shopping Experience</h3>
                                                        <p>
                                                            Explore our diverse collection of products and enjoy a tailored shopping experience at our commercial hub. Uncover unique finds and modern
                                                            conveniences that redefine the essence of a shopping center.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <div className="inner-content d-sm-flex align-items-center">
                                                    <div className="inner-content mr-35">
                                                        <div className="inner-content__text">
                                                            <h3>Innovative Initiatives</h3>
                                                            <p>
                                                                Stay updated on our latest innovative initiatives designed to enhance your experience. We're constantly exploring new avenues to bring
                                                                you the best of what a modern shopping center can offer.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                <div className="inner-content d-sm-flex align-items-center">
                                                    <div className="inner-content mr-35">
                                                        <div className="inner-content__text">
                                                            <h3>Noteworthy Events</h3>
                                                            <p>
                                                                Explore featured events that make us stand out. From exclusive product launches to community gatherings, be part of the excitement and
                                                                stay informed about the latest happenings.
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

                    <section className="team-area-02 pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 mx-auto">
                                    <div className="section-title text-center mb-75 pl-50 pr-50 wow fadeInUp2 animated" data-wow-delay=".1s">
                                        <h6>
                                            <span>
                                                <i className="far fa-heart"></i>
                                            </span>
                                            Team Member
                                        </h6>
                                        <h2>Meet With Our Team</h2>
                                        <p>
                                            Welcome to our team at R Mall! This is a passionate and dedicated team, committed to bringing you a unique and friendly shopping experience. Each member
                                            contributes an important part to creating a vibrant and friendly atmosphere. Let's meet and discover more about our team!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay=".2s">
                                    <div className="teams white-bg mb-30">
                                        <div className="teams__thumb pos-rel mb-30">
                                            <div className="teams__thumb--img pos-rel">
                                                <img src="assets/img/team/5.jpg" alt="" />
                                            </div>
                                            <div className="teams__thumb--social">
                                                <a href="#!">
                                                    <i className="fab fa-facebook-f"></i>
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#!">
                                                    <i className="fab fa-twitter"></i>
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a href="#!">
                                                    <i className="fab fa-youtube"></i>
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                                <a href="#!">
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
                                <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay=".4s">
                                    <div className="teams white-bg mb-30">
                                        <div className="teams__thumb pos-rel mb-30">
                                            <div className="teams__thumb--img pos-rel">
                                                <img src="assets/img/team/8.jpeg" alt="" />
                                            </div>
                                            <div className="teams__thumb--social">
                                                <a href="#!">
                                                    <i className="fab fa-facebook-f"></i>
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#!">
                                                    <i className="fab fa-twitter"></i>
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a href="#!">
                                                    <i className="fab fa-youtube"></i>
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                                <a href="#!">
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
                                <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay=".6s">
                                    <div className="teams white-bg mb-30">
                                        <div className="teams__thumb pos-rel mb-30">
                                            <div className="teams__thumb--img pos-rel">
                                                <img src="assets/img/team/7.jpeg" alt="" />
                                            </div>
                                            <div className="teams__thumb--social">
                                                <a href="#!">
                                                    <i className="fab fa-facebook-f"></i>
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#!">
                                                    <i className="fab fa-twitter"></i>
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a href="#!">
                                                    <i className="fab fa-youtube"></i>
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                                <a href="#!">
                                                    <i className="fab fa-linkedin-in"></i>
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="teams__content text-center">
                                            <h3 className="semi-02-title">
                                                <a href="team-details.html">Marion Danielson</a>
                                            </h3>
                                            <p>Assistant</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay=".3s">
                                    <div className="teams white-bg mb-30">
                                        <div className="teams__thumb pos-rel mb-30">
                                            <div className="teams__thumb--img pos-rel">
                                                <img src="assets/img/team/9.jpeg" alt="" />
                                            </div>
                                            <div className="teams__thumb--social">
                                                <a href="#!">
                                                    <i className="fab fa-facebook-f"></i>
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#!">
                                                    <i className="fab fa-twitter"></i>
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a href="#!">
                                                    <i className="fab fa-youtube"></i>
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                                <a href="#!">
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
                </main>
            </Layout>
        </>
    );
}
export default About;
