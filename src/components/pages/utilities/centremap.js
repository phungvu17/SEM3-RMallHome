import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import Loading from "../../layouts/loading";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MagnifierImage from "./ImageMagnifier";
import url from "../../../services/url";

function CentreMap() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const [floorList, setFloorList] = useState([]);
    const [storeData, setStoreData] = useState({});
    const getFloorList = async () => {
        try {
            const response = await fetch(url.BASE_URL + url.FLOOR.LIST);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching floor list:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            // Lấy danh sách tầng
            const floors = await getFloorList();
            setFloorList(floors);

            // Lấy cửa hàng theo từng tầng
            const storeData = {};
            for (const floor of floors) {
                const response = await fetch(url.BASE_URL + url.SHOP.GETBYFLOOR.replace("{}", encodeURIComponent(floor.floorNumber)));
                const data = await response.json();
                storeData[floor.floorNumber] = data;
            }

            setStoreData(storeData);
            setLoading(false);
        };

        fetchData();
    }, []);

    // Render phần stores theo tầng, và tiếp tục lọc theo category
    const renderStoreInfo = (floorNumber) => {
        const stores = storeData[floorNumber];

        if (!stores || stores.length === 0) {
            return <p>No stores found on this floor.</p>;
        }

        // lấy danh sách stores theo category
        const storesByCategory = stores.reduce((acc, store) => {
            if (!acc[store.categoryName]) {
                acc[store.categoryName] = [];
            }
            acc[store.categoryName].push(store);
            return acc;
        }, {});

        return (
            <div>
                {Object.keys(storesByCategory).map((category) => (
                    <div key={category}>
                        <hr />
                        <h4>{category}</h4>
                        <div className="row">
                            {storesByCategory[category].map((store) => (
                                <div className="col-lg-4" key={store.id}>
                                    <NavLink to={`/shop-detail/${store.slug}`}>
                                        <ul className="cases__tag white-bg">
                                            <li>
                                                <div className="cases--author d-flex align-items-center">
                                                    <h4 className="semi-02-title ml-15">{store.name}</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="theme_btn theme_btn2 theme_btn_bg_02 d-btn">{store.address}</span>
                                            </li>
                                        </ul>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <Helmet>
                <title>Centre Map | R Mall</title>
            </Helmet>
            {loading ? <Loading /> : ""}
            <Layout>
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
                                            <h2 className="page-title">Centre Map</h2>
                                            <ul className="breadcrumb-list">
                                                <li>
                                                    <Link to="/">
                                                        Home <i className="far fa-chevron-right"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="#!" className="active">
                                                        Centre Map
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="Centre Map-area pt-130 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="section-title text-center mb-85 pl-50 pr-50 wow fadeInUp2 animated" data-wow-delay=".1s">
                                        <h6>
                                            <span>
                                                <i className="fal fa-map-marked-alt"></i>
                                            </span>
                                            Our Centre Map
                                        </h6>
                                        <h2>
                                            <span>Stores</span> & Floor Map
                                        </h2>
                                        <p>500 stores, one destination. Plan your visit with our interactive map.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-9 col-md-12 mx-auto">
                                    <div className="about-wrap-04 mb-60 pl-40">
                                        <ul className="nav nav-tabs mb-35 justify-content-center" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#gfloor" role="tab" aria-selected="false">
                                                    G Floor
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#floor2" role="tab" aria-selected="false">
                                                    2 Floor
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#floor3" role="tab" aria-selected="false">
                                                    3 Floor
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" href="#floor4" role="tab" aria-selected="false">
                                                    4 Floor
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="gfloor" role="tabpanel">
                                                <div className="inner-content d-sm-flex align-items-center">
                                                    <div className="inner-content">
                                                        <div className="inner-content__text">
                                                            <div className="blog blogs-02 mb-40 wow fadeInUp2 animated" data-wow-delay=".1s">
                                                                <div className="blog__thumb mb-35">
                                                                    <MagnifierImage src="assets/img/map/gfloor.jpg" zoom={3} />
                                                                </div>

                                                                <div className="blog__content">
                                                                    <a className="tag">Ground Floor</a>
                                                                    <h3 className="blog-title mb-20">
                                                                        <a>Shopping, dining and event halls.</a>
                                                                    </h3>
                                                                    <ul className="blog-author mb-20">
                                                                        <li>
                                                                            <a>
                                                                                <span>Last modified:</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <i className="far fa-calendar-alt"></i> 9 January 2024
                                                                        </li>
                                                                    </ul>
                                                                    {renderStoreInfo("Floor 1")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="floor2" role="tabpanel">
                                                <div className="inner-content d-sm-flex align-items-center">
                                                    <div className="inner-content">
                                                        <div className="inner-content__text">
                                                            <div className="blog blogs-02 mb-40 wow fadeInUp2 animated" data-wow-delay=".1s">
                                                                <div className="blog__thumb mb-35">
                                                                    <MagnifierImage src="assets/img/map/2floor.jpg" zoom={3} />
                                                                </div>

                                                                <div className="blog__content">
                                                                    <a className="tag">2 Floor</a>
                                                                    <h3 className="blog-title mb-20">
                                                                        <a>Shopping, entertainment and culinary outlets.</a>
                                                                    </h3>
                                                                    <ul className="blog-author mb-20">
                                                                        <li>
                                                                            <a>
                                                                                <span>Last modified:</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <i className="far fa-calendar-alt"></i> 9 January 2024
                                                                        </li>
                                                                    </ul>
                                                                    {renderStoreInfo("Floor 2")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="floor3" role="tabpanel">
                                                <div className="inner-content d-sm-flex align-items-center">
                                                    <div className="inner-content">
                                                        <div className="inner-content__text">
                                                            <div className="blog blogs-02 mb-40 wow fadeInUp2 animated" data-wow-delay=".1s">
                                                                <div className="blog__thumb mb-35">
                                                                    <MagnifierImage src="assets/img/map/3floor.jpg" zoom={3} />
                                                                </div>

                                                                <div className="blog__content">
                                                                    <a className="tag">3 Floor</a>
                                                                    <h3 className="blog-title mb-20">
                                                                        <a>Shopping, entertainment and culinary outlets.</a>
                                                                    </h3>
                                                                    <ul className="blog-author mb-20">
                                                                        <li>
                                                                            <a>
                                                                                <span>Last modified:</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <i className="far fa-calendar-alt"></i> 9 January 2024
                                                                        </li>
                                                                    </ul>
                                                                    {renderStoreInfo("Floor 3")}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="floor4" role="tabpanel">
                                                <div className="inner-content d-sm-flex align-items-center">
                                                    <div className="inner-content">
                                                        <div className="inner-content__text">
                                                            <div className="blog blogs-02 mb-40 wow fadeInUp2 animated" data-wow-delay=".1s">
                                                                <div className="blog__thumb mb-35">
                                                                    <MagnifierImage src="assets/img/map/5floor.jpg" zoom={3} />
                                                                </div>

                                                                <div className="blog__content">
                                                                    <a className="tag">4 Floor</a>
                                                                    <h3 className="blog-title mb-20">
                                                                        <a>Entertainment and culinary outlets.</a>
                                                                    </h3>
                                                                    <ul className="blog-author mb-20">
                                                                        <li>
                                                                            <a>
                                                                                <span>Last modified:</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <i className="far fa-calendar-alt"></i> 9 January 2024
                                                                        </li>
                                                                    </ul>
                                                                    {renderStoreInfo("Floor 4")}
                                                                </div>
                                                            </div>
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
                </main>
            </Layout>
        </>
    );
}
export default CentreMap;
