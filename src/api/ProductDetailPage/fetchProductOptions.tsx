export interface ProductOption {
    id: string;
    name: string;
    priceModifier: number;
}

export async function fetchProductOptions(productId: string): Promise<{
    colors: ProductOption[];
    sizes: ProductOption[];
}> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const optionsByProductId: Record<string, { colors: ProductOption[]; sizes: ProductOption[] }> = {
                '1': {
                    colors: [
                        { id: '1', name: 'Красный', priceModifier: 100 },
                        { id: '2', name: 'Синий', priceModifier: 150 },
                        { id: '3', name: 'Зеленый', priceModifier: 50 },
                    ],
                    sizes: [
                        { id: '1', name: 'S', priceModifier: 0 },
                        { id: '2', name: 'M', priceModifier: 50 },
                        { id: '3', name: 'L', priceModifier: 100 },
                    ],
                },
                '2': {
                    colors: [
                        { id: '1', name: 'Черный', priceModifier: 200 },
                        { id: '2', name: 'Белый', priceModifier: 250 },
                    ],
                    sizes: [
                        { id: '1', name: 'M', priceModifier: 50 },
                        { id: '2', name: 'L', priceModifier: 100 },
                        { id: '3', name: 'XL', priceModifier: 150 },
                    ],
                },
                '3': {
                    colors: [
                        { id: '1', name: 'Серый', priceModifier: 0 },
                        { id: '2', name: 'Черный', priceModifier: 50 },
                    ],
                    sizes: [
                        { id: '1', name: 'S', priceModifier: 0 },
                        { id: '2', name: 'M', priceModifier: 50 },
                    ],
                },
                '4': {
                    colors: [
                        { id: '1', name: 'Черный', priceModifier: 0 },
                        { id: '2', name: 'Белый', priceModifier: 50 },
                    ],
                    sizes: [
                        { id: '1', name: '27"', priceModifier: 0 },
                        { id: '2', name: '32"', priceModifier: 100 },
                    ],
                },
                '5': {
                    colors: [
                        { id: '1', name: 'Серый', priceModifier: 0 },
                        { id: '2', name: 'Черный', priceModifier: 50 },
                    ],
                    sizes: [
                        { id: '1', name: 'S', priceModifier: 0 },
                        { id: '2', name: 'M', priceModifier: 50 },
                    ],
                },
                '6': {
                    colors: [
                        { id: '1', name: 'Черный', priceModifier: 0 },
                        { id: '2', name: 'Белый', priceModifier: 50 },
                    ],
                    sizes: [
                        { id: '1', name: 'S', priceModifier: 0 },
                        { id: '2', name: 'M', priceModifier: 50 },
                    ],
                },
                '7': {
                    colors: [
                        { id: '1', name: 'Черный', priceModifier: 0 },
                        { id: '2', name: 'Синий', priceModifier: 50 },
                    ],
                    sizes: [
                        { id: '1', name: 'S', priceModifier: 0 },
                        { id: '2', name: 'M', priceModifier: 50 },
                    ],
                },
                '8': {
                    colors: [
                        { id: '1', name: 'Серый', priceModifier: 0 },
                        { id: '2', name: 'Зеленый', priceModifier: 50 },
                    ],
                    sizes: [
                        { id: '1', name: 'S', priceModifier: 0 },
                        { id: '2', name: 'M', priceModifier: 50 },
                    ],
                },
                '9': {
                    colors: [
                        { id: '1', name: 'Черный', priceModifier: 0 },
                        { id: '2', name: 'Белый', priceModifier: 50 },
                    ],
                    sizes: [
                        { id: '1', name: 'S', priceModifier: 0 },
                        { id: '2', name: 'M', priceModifier: 50 },
                    ],
                },
                '10': {
                    colors: [
                        { id: '1', name: 'Серый', priceModifier: 0 },
                        { id: '2', name: 'Черный', priceModifier: 50 },
                    ],
                    sizes: [
                        { id: '1', name: 'S', priceModifier: 0 },
                        { id: '2', name: 'M', priceModifier: 50 },
                    ],
                },
            };
            resolve(optionsByProductId[productId] || { colors: [], sizes: [] });
        }, 500);
    });
}