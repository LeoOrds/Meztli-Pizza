import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Aboutus from "./Pages/Aboutus.jsx";
import Faqs from "./Pages/Faqs.jsx";
import Products from "./Pages/Products.jsx";

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Aboutus" element={<Aboutus/>} />
          <Route path="/Faqs" element={<Faqs/>} />
          <Route path="/Products" element={<Products/>} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;
