import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Case from "./components/pages/case";
import CaseDetails from "./components/pages/case/case-details";
import Blog from "./components/pages/blog";
import BlogDetails from "./components/pages/blog/blog-details";
import Contact from "./components/pages/contact";
import NotFound from "./components/pages/other/not-found";
import CentreMap from "./components/pages/utilities/centremap";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* Start Home */}
                <Route path="/" element={<Home />} />
                {/* End Home */}

                {/*Start About */}
                <Route path="/about" element={<About />} />
                {/* End About */}

                {/*Start Case */}
                <Route path="/centre-map" element={<CentreMap />} />
                {/* End Case */}

                {/*Start Case */}
                <Route path="/case" element={<Case />} />
                <Route path="/case-detail" element={<CaseDetails />} />
                {/* End Case */}

                {/*Start Blog */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-details" element={<BlogDetails />} />
                {/* End Blog */}

                {/*Start Contact */}
                <Route path="/contact" element={<Contact />} />
                {/* End Contact */}

                {/* Start other */}
                <Route path="*" element={<NotFound />} />
                {/* End other */}
            </Routes>
        </div>
    );
}

export default App;
