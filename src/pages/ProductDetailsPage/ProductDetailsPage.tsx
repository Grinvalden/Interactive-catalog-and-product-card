import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import  {fetchProduct}  from "../../api/ProductDetailPage/fetchProducts";
import { fetchProductOptions, ProductOption } from "../../api/ProductDetailPage/fetchProductOptions";
import  Product from "../../api/ProductDetailPage/fetchProducts";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductOptionSlice from "../../components/ProductOptionSlice/ProductOptionSlice";
import ProductTotalPrice from "../../components/ProductTotalPrice/ProductTotalPrice";

const ProductDetailsPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();

    const { data: product, isLoading, isError } = useQuery<Product>(
        { queryKey: ["product", productId], queryFn: ({ queryKey }) => fetchProduct(queryKey[1] as string) }
    );

    const { data: productOptions } = useQuery(
        { queryKey: ["productOptions", productId], queryFn: () => fetchProductOptions(productId!) }
    );

    useEffect(() => {
        console.log("Product ID:", productId);
        console.log("Product Data:", product);
        console.log("Product Options:", productOptions);
        console.log("Is Loading:", isLoading);
        console.log("Is Error:", isError);
    }, [productId, product, productOptions, isLoading, isError]);

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
            {productOptions && (
                <>
                    <ProductOptionSlice colors={productOptions.colors} sizes={productOptions.sizes} />
                    <ProductTotalPrice 
                        basePrice={product.basePrice} 
                        colors={productOptions.colors} 
                        sizes={productOptions.sizes} 
                    />
                </>
            )}
        </div>
    );
};

export default ProductDetailsPage;

