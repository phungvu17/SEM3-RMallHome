function PageTitle() {
  return (
    <section
      className="page-title-area"
      style={{
        backgroundImage: "url( assets/img/bg/page-title.jpg)",
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
                    <a href="index.html">
                      Home <i className="far fa-chevron-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PageTitle;
