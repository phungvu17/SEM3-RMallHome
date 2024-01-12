import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../layouts/loading";
import { Link } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
import { useRef } from "react";

function Gallery() {
    const [loading, setLoading] = useState(false);
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        const loadGallery = async () => {
            try {
                const galleryResponse = await api.get(url.GALLERY.LIST);
                const firstFiveItems = galleryResponse.data.slice(0, 5);
                setGallery(firstFiveItems);
            } catch (error) {
                console.error("Error loading gallery:", error);
            }
        };

        loadGallery();
    }, []);

    const galleryRef = useRef(null);

    useEffect(() => {
        const adjustImageSizes = () => {
            const galleryThumbs = galleryRef.current.querySelectorAll(".gallery__thumb");

            const imagesPerRow = 1;
            let rowAspectRatios = Array(imagesPerRow).fill(1);

            galleryThumbs.forEach((thumb, index) => {
                const image = thumb.querySelector(".gallery-image");
                const aspectRatio = image.width / image.height;

                const rowIndex = index % imagesPerRow;
                rowAspectRatios[rowIndex] += aspectRatio;
            });

            const averageRowAspectRatios = rowAspectRatios.map((sum, count) => sum / (galleryThumbs.length / imagesPerRow));

            galleryThumbs.forEach((thumb, index) => {
                const image = thumb.querySelector(".gallery-image");
                const rowIndex = index % imagesPerRow;
                const newHeight = thumb.offsetWidth / averageRowAspectRatios[rowIndex];
                image.style.height = `${newHeight}px`;
            });
        };

        adjustImageSizes();

        const handleResize = () => {
            adjustImageSizes();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [gallery]);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);
    return (
        <>
            <Helmet>
                <title>Gallery | R Mall</title>
            </Helmet>
            {loading ? <Loading /> : ""}
            <Layout>
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
                                        <h2 className="page-title">Gallery</h2>
                                        <ul className="breadcrumb-list">
                                            <li>
                                                <Link to="/">
                                                    Home <i className="far fa-chevron-right"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="" className="active">
                                                    Gallery
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="gallery-area pt-130 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 mx-auto">
                                <div className="section-title text-center mb-85 pl-50 pr-50 wow fadeInUp2 animated">
                                    <h6>
                                        <span>
                                            <i className="far fa-heart"></i>
                                        </span>
                                        Photo Gallery
                                    </h6>
                                    <h2>Our Photo Gallery</h2>
                                    <p>
                                        Welcome to our "Image Collection"! Browse through high quality images, we love to share great moments about products and special events. Come explore and feel
                                        the wonderful atmosphere we bring!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row" ref={galleryRef}>
                            {gallery.map((item, index) => (
                                <div className={`col-xl-${index < 2 ? "6" : "4"} col-lg-${index < 2 ? "6" : "4"} col-md-${index < 2 ? "12" : "6"}`} key={index}>
                                    <div className="gallery pos-rel text-center wow fadeInUp2 animated" data-wow-delay=".1s">
                                        <div className="gallery__thumb pos-rel mb-30">
                                            <img src={item.imagePath} alt="gallery" className="gallery-image" />
                                        </div>
                                        <div className="gallery__content gallery__content-custom">
                                            <h4 className="gallery__content-title">{item.productName}</h4>
                                            <p className="gallery__content-desc">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="intro-video-area">
                    <div className="container">
                        <div className="col-12 mx-auto">
                            <div
                                className="intro-video-content pos-rel mb-30"
                                style={{
                                    backgroundImage: "url( assets/img/gallery/4.jpeg)",
                                }}
                            >
                                <div className="video-area pos-abl">
                                    <a href="https://youtu.be/NrmMk1Myrxc?si=dahwPQGlQoqp27cp" className="popup-video">
                                        <i className="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Gallery;
