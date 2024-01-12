import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <header id="top-menu">
            <div className="header-top-area pos-rel pt-10 pb-15 d-none d-lg-block">
                <div className="container pos-rel">
                    <div className="row align-items-center">
                        <div className="col-xl-6 offset-xl-2 col-lg-7">
                            <div className="top-cta">
                                <span>Welcome to R Mall, where shopping becomes a special experience!</span>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 text-end">
                            <div className="top-right-nav">
                                <ul>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-youtube"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="fab fa-linkedin-in"></i>
                                        </Link>
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
                                <Link to="/" className="logo-img">
                                    <img src="assets/img/logo/logo.png" alt="" />
                                </Link>
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
                                            <Link to="">
                                                Shopping <i class="far fa-chevron-down"></i>
                                            </Link>
                                            <ul class="submenu">
                                                <li>
                                                    <NavLink to="/shop/shopping-centers">Shopping Centers</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/shop/food-court">Food Court</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/shop/entertainment">Entertainment</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/shop/other">Other</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Utilities <i class="far fa-chevron-down"></i>
                                            </Link>
                                            <ul class="submenu">
                                                <li>
                                                    <NavLink to="/centre-map">Centre Map</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/gallery">Gallery</NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <NavLink to="/about">About Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact">Contact</NavLink>
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
                                <form onSubmit={handleSubmit}>
                                    <div className="search-bar">
                                        <input type="text" className="search-bar__input" placeholder="Search..." onChange={handleChange} autoFocus={false} required />
                                        <button type="submit" className="search-bar__btn">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
