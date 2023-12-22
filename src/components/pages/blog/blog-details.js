import { Helmet } from "react-helmet";
import Layout from "../../layouts";
import Loading from "../../layouts/loading";
import { useEffect, useState } from "react";
function BlogDetails() {
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
                <title>Blog Detail | R Mall</title>
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
                                            <h2 className="page-title">Blog Details</h2>
                                            <ul className="breadcrumb-list">
                                                <li>
                                                    <a href="index.html">
                                                        Home <i className="far fa-chevron-right"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!" className="active">
                                                        Blog Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="blog-details-area pt-130 pb-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-12">
                                    <div className="blogs-details-left-area mb-50">
                                        <div className="blog blogs-02 mb-40 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <div className="blog__thumb mb-35">
                                                <img src="assets/img/blog/single.jpg" alt="" />
                                            </div>
                                            <div className="blog__content">
                                                <a className="tag" href="blog-details.html">
                                                    children
                                                </a>
                                                <h3 className="blog-title mb-20">
                                                    <a href="blog-details.html">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</a>
                                                </h3>
                                                <ul className="blog-author mb-20">
                                                    <li>
                                                        <a href="#!">
                                                            <img src="assets/img/blog/author.jpg" alt="" />
                                                            <span>Gabriela Franklin</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="far fa-calendar-alt"></i> 20 August 2022
                                                    </li>
                                                    <li>
                                                        <i className="far fa-comments"></i> Comments (1k)
                                                    </li>
                                                </ul>
                                                <p className="mb-35">
                                                    Duis nulla eros, tempus in maximus vel, imperdiet id massa. Suspendisse dignissim nisi nec diam facilisis, aliquam facilisis dolor efficitur. Donec
                                                    elementum placerat tempor. Aliquam elementum purus at vehicula malesuada. Nam molestie nisl a porttitor euismod. Aliquam dapibus pharetra risus a
                                                    luctus. Donec posuere posuere velit, vitae ultricies justo euismod vel. In tristique facilisis quam at suscipit. Vivamus ligula tortor, finibus non
                                                    nibh at, facilisis faucibus quam. Vivamus ac diam sit amet felis maximus posuere. Vestibulum eleifend non orci in venenatis.
                                                </p>
                                                <h3 className="cases-title mb-20">Phasellus eu nisl ut purus pharetra luctus</h3>
                                                <p className="mb-25">
                                                    Donec at dignissim ex. Morbi condimentum dictum sapien. Phasellus a libero suscipit, lacinia ipsum quis, dictum dolor. Pellentesque sit amet pretium
                                                    ex. Ut non tellus tempus nibh aliquet vestibulum at et ex. Sed eget lobortis mauris. Proin in pellentesque urna, gravida feugiat purus. Vivamus
                                                    auctor tellus in massa convallis aliquam. Donec vel tempus enim.
                                                </p>
                                                <div className="blogs-details-thumb mb-10">
                                                    <img className="img-fluid" src="assets/img/blog/5.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blog-details-list">
                                            <h3 className="cases-title mb-15"> Suspendisse pellentesque maximus maximus porttitor</h3>
                                            <p>
                                                Quisque auctor eleifend ligula varius tempus. Suspendisse pellentesque, massa maximus maximus porttitor, erat velit lobortis urna, vitae porta nisi est
                                                eu dui. Suspendisse et ornare odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas gravida mauris ac
                                                nisl fermentum, vitae accumsan urna dignissim. Praesent laoreet dapibus eros nec feugiat. Fusce ornare elit laoreet consequat pellentesque.
                                            </p>
                                            <ul className="about_list mt-15 mb-20 wow fadeInUp2 animated" data-wow-delay=".2s">
                                                <li>Donec fermentum diam nec ligula bibendum suscipit</li>
                                                <li>Curabitur faucibus odio eu placerat blandit felis</li>
                                                <li>Turpis rutrum nibh vel rutrum eros lectus interdum tortor</li>
                                                <li>Mauris vitae felis viverra iaculis erat suscipit mauris</li>
                                            </ul>
                                        </div>
                                        <div className="blogs-details-quote black-bg mb-40 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <div className="quote-wrapper">
                                                <h3 className="mb-20">
                                                    {" "}
                                                    Donec fermentum diam nec ligula bibendum suscipit onec dui sapien tincidunt id erat eget venenatis vulputate est roin ut egestas lorem.
                                                </h3>
                                                <p>
                                                    <i className="far fa-quote-left"></i> Janelle R George{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="blog-post-tag mb-50">
                                                    <span>Tags : </span>
                                                    <a href="#!">Charity,</a>
                                                    <a href="#!">Donation,</a>
                                                    <a href="#!">Child</a>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 text-left text-md-end">
                                                <div className="header-social post-share-icon mb-50">
                                                    <span>Share :</span>
                                                    <a href="#!">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                    <a href="#!">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                    <a href="#!">
                                                        <i className="fab fa-youtube"></i>
                                                    </a>
                                                    <a href="#!">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="author fix mb-60">
                                            <div className="author__img f-left">
                                                <img src="assets/img/blog/author-2.jpg" alt="" />
                                            </div>
                                            <div className="author__content fix">
                                                <h4 className="semi-02-title">Jim B Ramirez</h4>
                                                <p>
                                                    Fusce pellentesque arcu ac ipsum luctus, ac aliquet dolor tristique. Ut varius fermentum iaculis. Pellentesque pretium elementum elit nec fermentum.
                                                    Nam ut nunc eget mi dapibus elementum.
                                                </p>
                                                <div className="header-social post-share-icon pt-10">
                                                    <a href="#!">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                    <a href="#!">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                    <a href="#!">
                                                        <i className="fab fa-youtube"></i>
                                                    </a>
                                                    <a href="#!">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-border pb-35 mb-60">
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="post d-flex align-items-center mb-20">
                                                    <div className="post__thumb mr-20">
                                                        <img src="assets/img/blog/s-1.jpg" alt="" />
                                                    </div>
                                                    <div className="post__content">
                                                        <h4>
                                                            <a href="blog-details.html">Sed maximus lacus et consequat pulvinar</a>
                                                        </h4>
                                                        <div className="post__content--meta">
                                                            <span>
                                                                <i className="far fa-user"></i> Hampton
                                                            </span>
                                                            <span>
                                                                <i className="far fa-calendar-alt"></i> 10 Aug 2022
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="post d-flex align-items-center mb-20">
                                                    <div className="post__thumb mr-20">
                                                        <img src="assets/img/blog/s-2.jpg" alt="" />
                                                    </div>
                                                    <div className="post__content">
                                                        <h4>
                                                            <a href="blog-details.html">Donec pretium tincidunt cursus usce placerat </a>
                                                        </h4>
                                                        <div className="post__content--meta">
                                                            <span>
                                                                <i className="far fa-user"></i> Hampton
                                                            </span>
                                                            <span>
                                                                <i className="far fa-calendar-alt"></i> 10 Aug 2022
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lates-comment mb-55">
                                            <h3 className="cases-title mb-40">Comments (20)</h3>
                                            <ul className="post-comment">
                                                <li>
                                                    <div className="comment-box fix mb-40">
                                                        <div className="comment-box__img mr-25 f-left">
                                                            <img src="assets/img/blog/com.jpg" alt="" />
                                                        </div>
                                                        <div className="comment-box__content fix">
                                                            <h5>Lawrence Moore</h5>
                                                            <span>
                                                                <i className="far fa-clock"></i> 20 August 2022
                                                            </span>
                                                            <p>
                                                                Proin eget fermentum tortor. Quisque sollicitudin pellentesque elementum ulla metus dolo mattis non eros pellentesque. In vitae mauris
                                                                eu odio imperdiet aliquet egestas a risus.
                                                            </p>
                                                            <a href="#!" className="reply-btn">
                                                                Reply <i className="far fa-long-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="children ml-150">
                                                    <div className="comment-box fix mb-40">
                                                        <div className="comment-box__img mr-25 f-left">
                                                            <img src="assets/img/blog/com.jpg" alt="" />
                                                        </div>
                                                        <div className="comment-box__content fix">
                                                            <h5>Darwin Fisher</h5>
                                                            <span>
                                                                <i className="far fa-clock"></i> 20 August 2022
                                                            </span>
                                                            <p>
                                                                Proin eget fermentum tortor. Quisque sollicitudin pellentesque elementum ulla metus dolo mattis non eros pellentesque. In vitae mauris
                                                                eu odio imperdiet aliquet egestas a risus.
                                                            </p>
                                                            <a href="#!" className="reply-btn">
                                                                Reply <i className="far fa-long-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="comment-box fix mb-50">
                                                        <div className="comment-box__img mr-25 f-left">
                                                            <img src="assets/img/blog/com.jpg" alt="" />
                                                        </div>
                                                        <div className="comment-box__content fix">
                                                            <h5>Kendrick Blair</h5>
                                                            <span>
                                                                <i className="far fa-clock"></i> 20 August 2022
                                                            </span>
                                                            <p>
                                                                Proin eget fermentum tortor. Quisque sollicitudin pellentesque elementum ulla metus dolo mattis non eros pellentesque. In vitae mauris
                                                                eu odio imperdiet aliquet egestas a risus.
                                                            </p>
                                                            <a href="#!" className="reply-btn">
                                                                Reply <i className="far fa-long-arrow-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="comment-form">
                                            <h3 className="cases-title mb-30">Leave A Comment</h3>
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="input-area pos-rel mb-30">
                                                        <input type="text" className="form-control" placeholder="Full Name" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="input-area input-mail pos-rel mb-30">
                                                        <input type="text" className="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="input-area input-comment pos-rel mb-30">
                                                        <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Comments"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 comment-btn">
                                                    <button className="theme_btn theme_btn_bg">
                                                        Post Comments{" "}
                                                        <span>
                                                            <i className="fas fa-arrow-right"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12">
                                    <div className="standard-right-area">
                                        <div className="widget mb-30 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <div className="widget-search">
                                                <h3 className="cases-title mb-30">Search Here</h3>
                                                <div className="input-area pos-rel mb-10">
                                                    <input type="text" className="form-control" placeholder="Search Here..." />
                                                    <button type="submit">
                                                        <i className="far fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget mb-30 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <ul className="widget-cat">
                                                <h3 className="cases-title mb-30">Category</h3>
                                                <li>
                                                    <a href="#!">
                                                        {" "}
                                                        <i className="far fa-angle-double-right"></i> Donate For Food <span>(10)</span>{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        {" "}
                                                        <i className="far fa-angle-double-right"></i> Education <span>(15)</span>{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        {" "}
                                                        <i className="far fa-angle-double-right"></i> Health & Medical <span>(20)</span>{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        {" "}
                                                        <i className="far fa-angle-double-right"></i> Donate For Child <span>(30)</span>{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        {" "}
                                                        <i className="far fa-angle-double-right"></i> Blood Donate <span>(45)</span>{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget grey-bg2 mb-30 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <div className="widget-post widget-post-02">
                                                <h3 className="cases-title mb-20">Recent News</h3>
                                                <ul>
                                                    <li>
                                                        <div className="post d-flex align-items-center mb-20">
                                                            <div className="post__thumb mr-20">
                                                                <img src="assets/img/blog/s-1.jpg" alt="" />
                                                            </div>
                                                            <div className="post__content">
                                                                <h4>
                                                                    <a href="blog-details.html">Except sint occaecati cupidi non provid</a>
                                                                </h4>
                                                                <a className="view_btn" href="blog-details.html">
                                                                    <i className="far fa-clock"></i> 05 August 2022
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="post d-flex align-items-center mb-20">
                                                            <div className="post__thumb mr-20">
                                                                <img src="assets/img/blog/s-2.jpg" alt="" />
                                                            </div>
                                                            <div className="post__content">
                                                                <h4>
                                                                    <a href="blog-details.html">Except sint occaecati cupidi non provid</a>
                                                                </h4>
                                                                <a className="view_btn" href="blog-details.html">
                                                                    <i className="far fa-clock"></i> 05 August 2022
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="post d-flex align-items-center mb-20">
                                                            <div className="post__thumb mr-20">
                                                                <img src="assets/img/blog/s-3.jpg" alt="" />
                                                            </div>
                                                            <div className="post__content">
                                                                <h4>
                                                                    <a href="blog-details.html">Except sint occaecati cupidi non provid</a>
                                                                </h4>
                                                                <a className="view_btn" href="blog-details.html">
                                                                    <i className="far fa-clock"></i> 05 August 2022
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="widget mb-30 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <div className="widget-cat-btn">
                                                <h3 className="cases-title mb-30">Popular Tags</h3>
                                                <div className="cat-list">
                                                    <a className="cat-btn" href="#!">
                                                        Charity
                                                    </a>
                                                    <a className="cat-btn" href="#!">
                                                        Children
                                                    </a>
                                                    <a className="cat-btn" href="#!">
                                                        Donate
                                                    </a>
                                                    <a className="cat-btn" href="#!">
                                                        Online
                                                    </a>
                                                    <a className="cat-btn" href="#!">
                                                        Latest
                                                    </a>
                                                    <a className="cat-btn" href="#!">
                                                        People
                                                    </a>
                                                    <a className="cat-btn" href="#!">
                                                        Poor
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget grey-bg2 mb-30 wow fadeInUp2 animated" data-wow-delay=".1s">
                                            <div
                                                className="widget-add text-center"
                                                style={{
                                                    backgroundImage: "url(url(assets/img/blog/7.jpg)",
                                                }}
                                            >
                                                <h5>Donate Now</h5>
                                                <h2>Raise Your Helping Hand Hurry Up</h2>
                                                <a href="donation.html" className="theme_btn theme_btn_bg">
                                                    donate Now{" "}
                                                    <span>
                                                        <i className="fas fa-arrow-right"></i>
                                                    </span>
                                                </a>
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
export default BlogDetails;
