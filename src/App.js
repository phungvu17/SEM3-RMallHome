import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Case from "./components/pages/case";
import CaseDetails from "./components/pages/case/case-details";
import Blog from "./components/pages/blog";
import BlogDetails from "./components/pages/blog/blog-details";
import Contact from "./components/pages/contact";

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
                <Route path="/Case" element={<Case />} />
                <Route path="/CaseDetails" element={<CaseDetails />} />
                {/* End Case */}

                {/*Start Blog */}
                <Route path="/Blog" element={<Blog />} />
                <Route path="/BlogDetails" element={<BlogDetails />} />
                {/* End Blog */}

                {/*Start Contact */}
                <Route path="/Contact" element={<Contact />} />

                {/* End Contact */}
            </Routes>
        </div>
    );
}

export default App;
