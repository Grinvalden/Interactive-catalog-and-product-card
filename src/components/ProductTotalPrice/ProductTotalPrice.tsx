import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface ProductOption {
    id: string;
    name: string;
    priceModifier: number;
}

interface TotalPriceProps {
    basePrice: number;
    colors: ProductOption[];
    sizes: ProductOption[];
}

const ProductTotalPrice: React.FC<TotalPriceProps> = ({ basePrice, colors, sizes }) => {
    const selectedColorId = useSelector((state: RootState) => state.options.selectedColorId);
    const selectedSizeId = useSelector((state: RootState) => state.options.selectedSizeId);

    const totalPrice = useMemo(() => {
        const colorModifier = colors.find(opt => opt.id === selectedColorId)?.priceModifier || 0;
        const sizeModifier = sizes.find(opt => opt.id === selectedSizeId)?.priceModifier || 0;
        return basePrice + colorModifier + sizeModifier;
    }, [basePrice, colors, sizes, selectedColorId, selectedSizeId]);

    return (
        <div style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
            Итоговая цена: {totalPrice.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
        </div>
    );
};

export default ProductTotalPrice;
