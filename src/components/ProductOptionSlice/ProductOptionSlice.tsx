import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setSelectedColor, setSelectedSize } from '../../redux/optionSlice';
import OptionSelector from '../OptionSelector/OptionSelector';

interface ProductOption {
    id: string;
    name: string;
    priceModifier?: number;
}

interface ProductOptionSliceProps {
    colors: ProductOption[];
    sizes: ProductOption[];
}

const ProductOptionSlice: React.FC<ProductOptionSliceProps> = ({ colors, sizes }) => {
    const dispatch = useDispatch();
    const selectedColorId = useSelector((state: RootState) => state.options.selectedColorId);
    const selectedSizeId = useSelector((state: RootState) => state.options.selectedSizeId);

    return (
        <div>
            <OptionSelector
                options={colors.map(({ id, name }) => ({ id, name }))}
                selectedOptionId={selectedColorId || ''}
                onSelect={id => dispatch(setSelectedColor(id))}
            />
            <OptionSelector
                options={sizes.map(({ id, name }) => ({ id, name }))}
                selectedOptionId={selectedSizeId || ''}
                onSelect={id => dispatch(setSelectedSize(id))}
            />
        </div>
    );
};

export default ProductOptionSlice;
