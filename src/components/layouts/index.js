import Header from "./header";
import Footer from "./footer";
import PageTitle from "./page-title";
function Layout({ children }) {
  return (
    <div id="main-wrapper">
      <Header />
      <PageTitle />
      <div className="content-body">
        <div className="container-fluid">
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
