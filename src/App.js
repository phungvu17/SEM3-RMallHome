import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Case from "./components/pages/case";
import CaseDetails from "./components/pages/case/case-details";

import Contact from "./components/pages/contact";
import NotFound from "./components/pages/other/not-found";
import Fashion from "./components/pages/shop";
import Cuisine from "./components/pages/shop/cuisine";
import Entertainment from "./components/pages/shop/entertaiment";
import Other from "./components/pages/shop/other";
import CentreMap from "./components/pages/utilities/centremap";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* Start Home */}
                <Route path="/" element={<Home />} />
                {/* End Home */}

                {/* Start Shop */}
                <Route path="/Fashion" element={<Fashion />} />
                <Route path="/Cuisine" element={<Cuisine />} />
                <Route path="/Entertainment" element={<Entertainment />} />
                <Route path="/Other" element={<Other />} />
                {/* End Shop*/}

                {/*Start Utilities */}
                <Route path="/centre-map" element={<CentreMap />} />
                {/* End Utilities */}

                {/*Start About */}
                <Route path="/about" element={<About />} />
                {/* End About */}

                {/*Start Case */}
                <Route path="/case" element={<Case />} />
                <Route path="/case-detail" element={<CaseDetails />} />
                {/* End Case */}

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
