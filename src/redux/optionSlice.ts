import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductOptionsState {
    selectedColorId: string | null;
    selectedSizeId: string | null;
}

const initialState: ProductOptionsState = {
    selectedColorId: null,
    selectedSizeId: null,
};

const optionSlice = createSlice({
    name: 'productOptions',
    initialState,
    reducers: {
        setSelectedColor(state, action: PayloadAction<string | null>) {
            state.selectedColorId = action.payload;
        },
        setSelectedSize(state, action: PayloadAction<string | null>) {
            state.selectedSizeId = action.payload;
        },
    },
});

export const { setSelectedColor, setSelectedSize } = optionSlice.actions;
export default optionSlice.reducer;