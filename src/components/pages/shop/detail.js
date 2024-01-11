import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import Loading from "../../layouts/loading";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
function ShopDetail() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const { slug } = useParams();
    const [shop, setShop] = useState([]);
    const [relatedShop, setRelatedShop] = useState([]);
    const navigate = useNavigate();

    // hiển thị chi tiết shop và các shop tương tự
    useEffect(() => {
        const fetchShopData = async () => {
            try {
                const [shopResponse, relatedShopResponse] = await Promise.all([api.get(`${url.SHOP.DETAIL.replace("{}", slug)}`), api.get(`${url.SHOP.RELATEDS.replace("{}", slug)}`)]);
                setShop(shopResponse.data);
                setRelatedShop(relatedShopResponse.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchShopData();
    }, [slug]);

    // chuyển đến trang sản phẩm tương tự
    const handleNavLinkClick = (newSlug) => {
        setLoading(true);
        navigate(`/shop-detail/${newSlug}`);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: shop.products && shop.products.length > 1 ? 2 : 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const sliderSettingsShop = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: relatedShop.length >= 4 ? 4 : relatedShop.length,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: relatedShop.length >= 4 ? 2 : relatedShop.length,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Helmet>
                <title>Shop Detail | R Mall</title>
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
                                            <h2 className="page-title">Shop Details</h2>
                                            <ul className="breadcrumb-list">
                                                <li>
                                                    <Link to="/">
                                                        Home <i className="far fa-chevron-right"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="" className="active">
                                                        Shop Details
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="testimonial-area grey-bg2 pos-rel pt-130 pb-130">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-12">
                                    <div className="events-details-left">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12">
                                                <div className="events-details-thumb mb-30">
                                                    <img src={shop.imagePath} alt className="shop-image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12">
                                    <div className="events-details-right">
                                        <div className="widget mb-30">
                                            <div className="widget-post" style={{ height: "500px", paddingTop: "50px" }}>
                                                <h3 className="cases-title mb-15">{shop.name}</h3>
                                                <p className="mb-20">Category: {shop.categoryName}</p>
                                                <div className="times__content mb-20" style={{ marginTop: "40px" }}>
                                                    <h5>
                                                        <Link to="">Shop Location</Link>
                                                    </h5>
                                                    <p>
                                                        <i className="far fa-map-marker-alt"></i> {shop.floorName} ({shop.address})
                                                    </p>
                                                </div>
                                                <div className="times__content mb-20" style={{ marginTop: "40px" }}>
                                                    <h5>
                                                        <Link to="">Hours Of Operation</Link>
                                                    </h5>
                                                    <p>
                                                        <i className="far fa-clock"></i> {shop.hoursOfOperation}
                                                    </p>
                                                </div>
                                                <div className="times__content mb-20" style={{ marginTop: "40px" }}>
                                                    <h5>
                                                        <Link to="">Shop Contact</Link>
                                                    </h5>
                                                    <p>
                                                        <i className="far fa-phone"></i> {shop.contactInfo}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="events-text-box mb-45">
                                    <h3 className="mb-30">Description of the booth:</h3>
                                    <p
                                        className="mb-15"
                                        dangerouslySetInnerHTML={{
                                            __html: shop.description,
                                        }}
                                    ></p>
                                </div>

                                {shop.products && shop.products.length > 0 && (
                                    <>
                                        <h3 className="mb-30">Some products of the booth:</h3>
                                        <div class="row">
                                            <Slider {...sliderSettings}>
                                                {shop.products?.map((product) => (
                                                    <div className="testimonial-item pos-rel wow fadeInUp2 animated" data-wow-delay=".3s">
                                                        <div className="author_box d-flex align-items-center mb-25">
                                                            <div className="author_box__img mr-15">
                                                                <img src={product.image} alt="" width="70px" height="70px" style={{ objectFit: "cover" }} />
                                                            </div>
                                                            <div className="author_box__content">
                                                                <h4 className="semi-02-title">{product.name}</h4>
                                                                <p>{product.price}$</p>
                                                                <div className="review-icon">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <a key={star} href="#">
                                                                            <i className="fas fa-star"></i>
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="semi-title mb-10">{product.description}</p>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </>
                                )}

                                <div className="mb-45" style={{ marginTop: "30px" }}>
                                    <p>
                                        <span className="text-danger">*</span> Note: When visiting stores at RMall, be wary of discounts, as they often come with strings attached. Pay attention to
                                        product quality and compare prices before deciding to shop. Avoid buying counterfeit items by carefully checking the information and labels. Keep your personal
                                        assets and payment cards safe when near crowded areas. Finally, enjoy the comfortable and fun atmosphere when shopping for the most enjoyable experience at the
                                        mall.
                                    </p>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "50px" }}>
                                <div className="col-md-10 mx-auto">
                                    <div className="section-title text-center mb-85 pl-50 pr-50 wow fadeInUp2 animated" data-wow-delay=".1s">
                                        <h2>Similar Stalls</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <Slider {...sliderSettingsShop}>
                                    {relatedShop.map((item, index) => (
                                        <div key={index} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".2s">
                                            <div className="blog mb-30">
                                                <div className="blog__thumb">
                                                    <Link to="">
                                                        <img src={item.imagePath} alt="" className="shop-logo" />
                                                    </Link>
                                                </div>
                                                <div className="blog__content blog__content-custom__shop">
                                                    <p className="tag line-clamp">{item.categoryName}</p>
                                                    <h3 className="blog-title mb-0">
                                                        <div onClick={() => handleNavLinkClick(item.slug)} style={{ cursor: "pointer" }}>
                                                            {item.name}
                                                        </div>
                                                    </h3>

                                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                                        <p>
                                                            <i className="fal fa-alarm-clock"></i> {item.hoursOfOperation}
                                                        </p>
                                                        <p>
                                                            <i className="fal fa-map-marked-alt"></i> {item.floorName}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    );
}
export default ShopDetail;
