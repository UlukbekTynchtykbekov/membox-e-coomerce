import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import SetConstructor from "../pages/SetConstructor";
import Novelties from "../pages/Novelties";
import VIPsets from "../pages/VIPsets";
import Delivery from "../pages/Delivery";
import Certificate from "../pages/Certificate";
import Stock from "../pages/Stock";
import CorporateGifts from "../pages/CorporateGifts";
import Sale from "../pages/Sale";
import SaleDetail from "../pages/SaleDetail";
import Contacts from "../pages/Contacts";
import Suppliers from "../pages/Suppliers";
import AllPresents from "../pages/AllProducts";
import ProductsDetail from "../pages/ProductDetail";
import Gastro from "../pages/Gastro";
import Diy from "../pages/Diy";
import Entertainment from "../pages/Entertainment";
import BathHouse from "../pages/BathHouse";


const Routers = () => {
        return <Routes>
                <Route path="/" element={<Navigate to="home"/>}/>
                <Route path="/all-products" element={<AllPresents/>}/>
                <Route path="/set-constructor" element={<SetConstructor/>}/>
                <Route path="/novelties" element={<Novelties/>}/>
                <Route path="/vip" element={<VIPsets/>}/>
                <Route path="/stock" element={<Stock/>}/>
                <Route path="/gastro" element={<Gastro/>}/>
                <Route path="/diy" element={<Diy/>}/>
                <Route path="/entertainment" element={<Entertainment/>}/>
                <Route path="/bathhouse" element={<BathHouse/>}/>
                <Route path="/certificate" element={<Certificate/>}/>
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="/corporate-gifts" element={<CorporateGifts/>}/>
                <Route path="/sale" element={<Sale/>}/>
                <Route path="/all_products" element={<AllPresents/>}/>
                <Route path="/sale/second-box-for-sale" element={<SaleDetail/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/suppliers" element={<Suppliers/>}/>
                <Route path="/product-detail" element={<ProductsDetail/>}/>
        </Routes>
}
export default Routers;


