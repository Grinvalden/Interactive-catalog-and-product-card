import React from 'react';

interface ProductInfoProps {
    name: string;
    description?: string;
    imageUrl: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name, description, imageUrl }) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={imageUrl} alt={name} />
            {description && <p>{description}</p>}
        </div>
    );
};

export default ProductInfo;