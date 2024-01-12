// import { useEffect } from "react";
// import { useState } from "react";
// import api from "../../../services/api";
// import url from "../../../services/url";
// import { useRef } from "react";
// import { useCallback } from "react";
// import { Link } from "react-router-dom";
// function PhotoGallery() {
//     const [gallery, setGallery] = useState([]);

//     const loadGallery = useCallback(async () => {
//         try {
//             const galleryResponse = await api.get(url.GALLERY.LIST);
//             const firstFiveItems = galleryResponse.data.slice(0, 5);
//             setGallery(firstFiveItems);
//         } catch (error) {}
//     }, []);

//     useEffect(() => {
//         loadGallery();
//     }, [loadGallery]);

//     const galleryRef = useRef(null);

//     useEffect(() => {
//         const adjustImageSizes = () => {
//             const galleryThumbs = galleryRef.current.querySelectorAll(".gallery__thumb");

//             const imagesPerRow = 1; // Adjust this value based on your layout
//             let rowAspectRatios = Array(imagesPerRow).fill(1);

//             galleryThumbs.forEach((thumb, index) => {
//                 const image = thumb.querySelector(".gallery-image");
//                 const aspectRatio = image.width / image.height;

//                 // Track the maximum aspect ratio within each row
//                 const rowIndex = index % imagesPerRow;
//                 rowAspectRatios[rowIndex] += aspectRatio;
//             });

//             // Calculate the average aspect ratio for each row
//             const averageRowAspectRatios = rowAspectRatios.map((sum, count) => sum / (galleryThumbs.length / imagesPerRow));

//             // Set the height of each image based on the average aspect ratio of its row
//             galleryThumbs.forEach((thumb, index) => {
//                 const image = thumb.querySelector(".gallery-image");
//                 const rowIndex = index % imagesPerRow;
//                 const newHeight = thumb.offsetWidth / averageRowAspectRatios[rowIndex];
//                 image.style.height = `${newHeight}px`;
//             });
//         };

//         adjustImageSizes();

//         window.addEventListener("resize", adjustImageSizes);

//         return () => {
//             window.removeEventListener("resize", adjustImageSizes);
//         };
//     }, [gallery]);

//     return (
//         <>
//             <section className="gallery-area pt-130 pb-100">
//                 <div className="container">
//                     <div className="row">
//                         <div class="section-title text-center d-flex align-items-center justify-content-between mb-35">
//                             <h6>
//                                 <span>
//                                     <i class="far fa-heart"></i>
//                                 </span>
//                                 Photo Gallery
//                             </h6>
//                             <Link to="/gallery" class="theme_btn theme_btn_bg">
//                                 View more
//                                 <span>
//                                     <i class="fas fa-arrow-right"></i>
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="row" ref={galleryRef}>
//                         {gallery.map((item, index) => (
//                             <div className={`col-xl-${index < 2 ? "6" : "4"} col-lg-${index < 2 ? "6" : "4"} col-md-${index < 2 ? "12" : "6"}`} key={index}>
//                                 <div className="gallery pos-rel text-center wow fadeInUp2 animated" data-wow-delay=".3s">
//                                     <div className="gallery__thumb pos-rel mb-30">
//                                         <img src={item.imagePath} alt="gallery" className="gallery-image" />
//                                     </div>
//                                     <div className="gallery__content gallery__content-custom">
//                                         <h4 className="gallery__content-title">{item.productName}</h4>
//                                         <p className="gallery__content-desc">{item.description}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <div className="intro-video-area">
//                 <div className="container">
//                     <div className="col-12 mx-auto">
//                         <div
//                             className="intro-video-content pos-rel mb-30"
//                             style={{
//                                 backgroundImage: "url( assets/img/gallery/4.jpeg)",
//                             }}
//                         >
//                             <div className="video-area pos-abl">
//                                 <a href="https://youtu.be/NrmMk1Myrxc?si=dahwPQGlQoqp27cp" className="popup-video">
//                                     <i className="fas fa-play"></i>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default PhotoGallery;

import { useEffect } from "react";
import { useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { useRef } from "react";
import { Link } from "react-router-dom";
function PhotoGallery() {
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

    return (
        <>
            <section className="gallery-area pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div class="section-title text-center d-flex align-items-center justify-content-between mb-35">
                            <h6>
                                <span>
                                    <i class="far fa-heart"></i>
                                </span>
                                Photo Gallery
                            </h6>
                            <Link to="/gallery" class="theme_btn theme_btn_bg">
                                View more
                                <span>
                                    <i class="fas fa-arrow-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="row" ref={galleryRef}>
                        {gallery.map((item, index) => (
                            <div className={`col-xl-${index < 2 ? "6" : "4"} col-lg-${index < 2 ? "6" : "4"} col-md-${index < 2 ? "12" : "6"}`} key={index}>
                                <div className="gallery pos-rel text-center wow fadeInUp2 animated" data-wow-delay=".3s">
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
        </>
    );
}

export default PhotoGallery;
