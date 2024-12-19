import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AptranscoContacts from "./components/AptranscoContacts";
import Credits from "./pages/Credits";


const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aptcontact" element={<AptranscoContacts />} />
            <Route path="/credits" element={<Credits />} />
        </Routes>
    )
}

export default AppRoutes;