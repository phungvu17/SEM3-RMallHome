import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header id="top-menu">
      <div className="header-top-area pos-rel pt-10 pb-15 d-none d-lg-block">
        <div className="container pos-rel">
          <div className="row align-items-center">
            <div className="col-xl-6 offset-xl-2 col-lg-7">
              <div className="top-cta">
                <span>
                  Welcome To Carelax. Best Charity Foundation All Around The
                  World.
                  <a className="media-link" href="#">
                    Sign up
                  </a>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 text-end">
              <div className="top-right-nav">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header-area">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="logo">
                <a className="logo-img" href="index.html">
                  <img src="assets/img/logo/logo.png" alt />
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 d-none d-lg-block text-lg-center text-xl-right">
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Case">
                        Case <i className="far fa-chevron-down"></i>
                      </NavLink>
                      <ul className="submenu">
                        <li>
                          <NavLink to="/CaseDetails">
                            Case Study Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">
                        Pages <i className="far fa-chevron-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="gallery-2.html">Gallery Two</a>
                        </li>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="team-details.html">Team Details</a>
                        </li>
                        <li>
                          <a href="login.html">Sign In</a>
                        </li>
                        <li>
                          <a href="register.html">Sign Up</a>
                        </li>
                        <li>
                          <a href="forgot-password.html">Forgot Password</a>
                        </li>
                        <li>
                          <a href="donation.html">Donation Form</a>
                        </li>
                        <li>
                          <a href="volunteer.html">Volunteer</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="term-condition.html">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="privacy-policy.html">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="404.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/Blog">
                        Blog <i className="far fa-chevron-down"></i>
                      </NavLink>
                      <ul className="submenu">
                        <li>
                          <NavLink to="/BlogDetails">Blog Details</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/Contact">Contact</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-6 text-end">
              <div className="hamburger-menu d-md-block d-lg-none">
                <a href="javascript:void(0);">
                  <i className="far fa-bars"></i>
                </a>
              </div>
              <div className="quote-btn d-none d-lg-block">
                <a href="donation.html" className="theme_btn theme_btn_bg">
                  donate Now
                  <span>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
