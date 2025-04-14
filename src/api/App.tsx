import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "../components/Header"; 
import CatalogPage from "../pages/CatalogPage/frontend/ReactFC"; 

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<CatalogPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;