import { useQuery} from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { fetchProduct } from "../../api/ProductDetailPage/fetchProduct";
import { fetchProductOptions } from "../../api/ProductDetailPage/fetchProductOptions";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

interface Product {
    id: string;
    name: string;
    basePrice: number;
    imageUrl: string;
    description?: string;
}

interface ProductOption {
    id: string;
    name: string;
    priceModifier: number;
}

const  ProductDetailsPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();

    const { data: product, isLoading: isProductLoading, isError: isProductError } = useQuery<Product>(
        { queryKey: ["product", productId], queryFn: () => fetchProduct(productId!) }
    );

    const { data: productOptions, isLoading: isOptionsLoading, isError: isOptionsError } = useQuery<{
        colors: ProductOption[];
        sizes: ProductOption[];
    }>(
        { queryKey: ["productOptions", productId], queryFn: () => fetchProductOptions(productId!) }
    );

    if (isProductLoading || isOptionsLoading) {
        return <div>Loading...</div>;
    }

    if (isProductError || isOptionsError) {
        return <div>Error loading product details.</div>;
    }

    if (!product || !productOptions) {
        return <div>No product details available.</div>;
    }

    return (
        <Provider store={store}>
        <div>
        
        </div>
        </Provider>
    );
}

export default ProductDetailsPage;

