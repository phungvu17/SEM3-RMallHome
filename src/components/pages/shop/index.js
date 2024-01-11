import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import Loading from "../../layouts/loading";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";

function Shopping() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const { slug } = useParams();
    const [shops, setShops] = useState([]);
    const [allShops, setAllShops] = useState([]);
    const [floors, setFloors] = useState([]);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    // chuyển đến trang shop cac shop khac
    const handleNavLinkClick = (newSlug) => {
        if (newSlug === "") {
            // Nếu người dùng chọn "Toàn bộ gian hàng", hiển thị toàn bộ shops
            setShops(allShops);
        } else {
            navigate(`/shop/${newSlug}`);
        }
    };

    //api hien thi all shops
    useEffect(() => {
        api.get(url.SHOP.LIST)
            .then((response) => {
                setAllShops(response.data);
            })
            .catch((error) => {});
        // }
    }, []);

    //hien thi thong tin shop theo category
    useEffect(() => {
        api.get(`${url.SHOP.GETBYCATEGORY.replace("{}", slug)}`)
            .then((response) => {
                setShops(response.data);
            })
            .catch((error) => {});
        // }
    }, [slug]);

    //hiển thị floor và category trên select
    useEffect(() => {
        api.get(url.FLOOR.LIST)
            .then((response) => {
                setFloors(response.data);
            })
            .catch((error) => {});

        api.get(url.CATEGORY.LIST)
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {});
    }, []);

    //search, filter
    const [searchTitle, setSearchTitle] = useState("");
    const [selectedFloor, setSelectedFloor] = useState("");
    const handleSearchTitleChange = (e) => {
        setSearchTitle(e.target.value);
    };
    const handleFloorChange = (e) => {
        setSelectedFloor(e.target.value);
    };
    const filterShops = (shop) => {
        const titleMatch = shop.name.toLowerCase().includes(searchTitle.toLowerCase());
        const floorMatch = !selectedFloor || shop.floorName === selectedFloor;
        return titleMatch && floorMatch;
    };

    //paginate
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(shops.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = shops.slice(indexOfFirstItem, indexOfLastItem);

    //render shop list
    const filteredShops = currentItems.filter(filterShops);
    return (
        <>
            <Helmet>
                <title>Shopping | R Mall</title>
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
                                            <h2 className="page-title">Shopping</h2>
                                            <ul className="breadcrumb-list">
                                                <li>
                                                    <Link to="/">
                                                        Home <i className="far fa-chevron-right"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="" className="active">
                                                        Shopping
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="blog-area pt-130 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <div className="section-title text-center mb-85 pl-50 pr-50 wow fadeInUp2 animated" data-wow-delay=".1s">
                                        <h6>
                                            {/* <span>
                                                <i className="fal fa-map-marked-alt"></i>
                                            </span> */}
                                            Our booths
                                        </h6>
                                        <h2>
                                            <span>Stores</span> &Entertainment
                                        </h2>
                                        <p>Our booths are full of products and services you can search for below!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="input-area mb-10">
                                        <input type="text" className="form-control" placeholder="Search by stall name" value={searchTitle} onChange={handleSearchTitleChange} />
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="input-area mb-10">
                                        <select className="form-control" value={selectedFloor} onChange={handleFloorChange}>
                                            <option value="">Filter by floor</option>
                                            {floors.map((floor) => (
                                                <option key={floor.id} value={floor.name}>
                                                    {floor.floorNumber}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="input-area mb-10">
                                        <select className="form-control" onChange={(e) => handleNavLinkClick(e.target.value)}>
                                            <option value="">Booths</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.slug}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row" style={{ marginTop: "20px" }}>
                                {filteredShops.map((item, index) => (
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
                                                    <Link to={`/shop-detail/${item.slug}`}>{item.name}</Link>
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
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="pagination-area mt-30 mb-30">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination justify-content-center">
                                                <ul className="pagination justify-content-center">
                                                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                                        <a className="page-link" onClick={() => setCurrentPage(currentPage - 1)} aria-label="Previous">
                                                            <i className="far fa-angle-double-left"></i>
                                                        </a>
                                                    </li>
                                                    {Array(totalPages)
                                                        .fill()
                                                        .map((_, i) => (
                                                            <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                                                                <a className="page-link" onClick={() => setCurrentPage(i + 1)}>
                                                                    {i + 1}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                                        <a className="page-link" onClick={() => setCurrentPage(currentPage + 1)} aria-label="Next">
                                                            <i className="far fa-angle-double-right"></i>
                                                        </a>
                                                    </li>
                                                </ul>
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
export default Shopping;
