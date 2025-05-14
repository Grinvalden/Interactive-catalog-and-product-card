import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { fetchProduct } from "../../api/ProductDetailPage/fetchProducts";
import type Product from "../../api/ProductDetailPage/fetchProducts";
import ProductInfo from "../../components/ProductInfo/ProductInfo";

const ProductDetailsPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();

    const { data: product, isLoading, isError } = useQuery<Product>(
        { queryKey: ["product", productId], queryFn: ({ queryKey }) => fetchProduct(queryKey[1] as string) }
    );

    useEffect(() => {
        console.log("Product ID:", productId);
        console.log("Product Data:", product);
        console.log("Is Loading:", isLoading);
        console.log("Is Error:", isError);
    }, [productId, product, isLoading, isError]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !product) {
        return <div>Error loading product details.</div>;
    }

    return (
        <div>
            <ProductInfo 
                imageUrl={product.imageUrl} 
                name={product.name} 
                description={product.description} 
            />
        </div>
    );
};

export default ProductDetailsPage;

