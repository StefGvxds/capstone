import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import OrderScreen from "./Screens/OrderScreen";


export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/reservations" element={<OrderScreen />} />
            </Routes>
            <Footer />
        </>
    );
}
