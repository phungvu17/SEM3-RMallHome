import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import Loading from "../../layouts/loading";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";


function Fashion (){
    const [shop , setShop] = useState([]);
    // call api shop
    const loadShop = useCallback(async()=>{
        try{
            const shopRespose = await api.get(url.SHOP.LIST)

            setShop(shopRespose.data);
            console.log('Shop Data:', shopRespose.data);

        }catch(error){
            console.log (error);

        }
    },[]);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);

        // Call the loadShop function to fetch data from the API
        loadShop();
    }, []);
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
                <title>Fashion | R Mall</title>
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
                                            <h2 className="page-title">Fashion</h2>
                                            <ul className="breadcrumb-list">
                                                <li>
                                                    <Link to="/">
                                                        Home <i className="far fa-chevron-right"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="#!" className="active">
                                                    Fashion
                                                    </a>
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
                            
                            </div>
                            <div className="row">
                                {shop.map((item,index)=>
                                <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".2s">
                                    <div className="blog mb-30">
                                        <div className="blog__thumb">
                                            <img src={item.imagePath} alt="" />
                                        </div>
                                        <div className="blog__content">
                                            <a className="tag" href="blog-details.html">
                                               {item.categoryName}
                                            </a>
                                            <h3 className="blog-title mb-15">
                                                <span >{item.name}</span>
                                            </h3>
                                           
                                            <ul className="blog-author">
                                                <li>
                                                    <a className="mr-30" href="#!">
                                                        <img src="assets/img/blog/author.jpg" alt="" />
                                                        <span><i className="fa-solid fa-location-dot"></i>{item.floorName}</span>
                                                    </a>
                                                </li>
                                                <li>
                                                <i className="fa-regular fa-clock"></i> {item.hoursOfOperation}
                                                </li>
                                                <li>
                                                <i className="fa-regular fa-phone"></i>{item.contactInfo}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                   
                                </div>
                                 )}
                             
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="pagination-area mt-30 mb-30">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item">
                                                    <a className="page-link" href="#!">
                                                        <i className="far fa-angle-double-left"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#!">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#!">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#!">
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#!">
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
export default Fashion;