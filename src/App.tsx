import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "./components/Header"; 
import CatalogPage from "./pages/CatalogPage/frontend/CatalogPage"; 
import ProductDetailPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<CatalogPage />} />
                    <Route path="/product/:productId" element={<ProductDetailPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;