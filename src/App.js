import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import NotFound from "./components/pages/other/not-found";
import CentreMap from "./components/pages/utilities/centremap";
import Shopping from "./components/pages/shop";
import ShopDetail from "./components/pages/shop/detail";
import Gallery from "./components/pages/utilities/gallery";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* Start Home */}
                <Route path="/" element={<Home />} />
                {/* End Home */}

                {/* Start Shop */}
                <Route path="/shop/:slug" element={<Shopping />} />
                <Route path="/shop-detail/:slug" element={<ShopDetail />} />
                {/* End Shop*/}

                {/*Start Utilities */}
                <Route path="/centre-map" element={<CentreMap />} />
                <Route path="/gallery" element={<Gallery />} />
                {/* End Utilities */}

                {/*Start About */}
                <Route path="/about" element={<About />} />
                {/* End About */}

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
