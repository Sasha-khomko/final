import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Mainpage from "./Pages/Mainpage/Mainpage";
import Collectionss from "./Pages/Collections/Collections";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Cart from "./Pages/Cart/Cart";
import Catalog from "./Pages/Catalog/Catalog";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Mainpage />} />
        <Route path="/collectionss" element={<Collectionss />} />
        <Route path="/about" element={<About />} />
        <Route path="/caontacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
