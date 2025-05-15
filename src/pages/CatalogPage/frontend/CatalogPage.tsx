import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router';
import { fetchProducts } from "../../../api/CatalogPage/fetchProducts";
import { Product } from "../../../api/CatalogPage/fetchProducts";


interface ProductListItemProps {
    product: Product;
}


const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
            <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                <img src={product.imageUrl} alt={product.name} style={{ width: "100px", height: "100px" }} />
                <h3>{product.name}</h3>
                <p>Цена: {product.basePrice} ₽</p>
            </div>
        </Link>
    );
};

const CatalogPage: React.FC = () => {
    const { data, isLoading, isError, isSuccess } = useQuery<Product[], Error>({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (isLoading) {
        return <p>Загрузка...</p>;
    }

    if (isError) {
        return <p>Ошибка загрузки данных</p>;
    }

    return (
        <div>
            <h1>Каталог товаров</h1>
            {isSuccess && (
                <div>
                    {data.map((product: Product) => (
                        <ProductListItem key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CatalogPage;