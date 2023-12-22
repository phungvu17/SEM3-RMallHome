import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <Helmet>
                <title>Page not found | R Mall</title>
            </Helmet>
            <div className="container">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <img src="./assets/img/other/not_found.svg" alt="" width={"50%"} />
                    <h1 className="pt-30 pb-35">Page Not Found</h1>
                    <Link to="/" className="btn">
                        Back to Home
                    </Link>
                </div>
            </div>
        </>
    );
}

export default NotFound;
