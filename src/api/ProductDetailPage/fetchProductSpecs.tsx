interface ProductSpec {
    key: string;
    value: string;
}

export async function fetchProductSpecs(productId: string): Promise<ProductSpec[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const specsByProductId: Record<string, ProductSpec[]> = {
                '1': [
                    { key: 'Процессор', value: 'Intel Core i7-1165G7' },
                    { key: 'Оперативная память', value: '16 ГБ LPDDR4x' },
                    { key: 'Накопитель', value: '512 ГБ SSD' },
                    { key: 'Дисплей', value: '14" IPS, 1920x1200' },
                ],
                '2': [
                    { key: 'Процессор', value: 'Snapdragon 8 Gen 2' },
                    { key: 'Оперативная память', value: '8 ГБ LPDDR5' },
                    { key: 'Накопитель', value: '256 ГБ UFS 3.1' },
                    { key: 'Камера', value: '50 МП + 12 МП + 10 МП' },
                ],
                '3': [
                    { key: 'Тип', value: 'Наушники накладные' },
                    { key: 'Подключение', value: 'Bluetooth 5.0' },
                    { key: 'Время работы', value: '30 часов' },
                    { key: 'Шумоподавление', value: 'Активное' },
                ],
                '4': [
                    { key: 'Размер экрана', value: '27"' },
                    { key: 'Разрешение', value: '3840x2160 (4K)' },
                    { key: 'Тип панели', value: 'IPS' },
                    { key: 'Яркость', value: '350 кд/м²' },
                ],
                '5': [
                    {key: 'Тип', value: 'Механическая'},
                    {key: 'Подсветка', value: 'RGB'},
                    {key: 'Подключение', value: 'USB-C'},
                    {key: 'Совместимость', value: 'Windows, macOS'},
                ],
                '6': [
                    {key: 'Тип', value: 'Оптическая'},
                    {key: 'Разрешение', value: '16000 DPI'},
                    {key: 'Подключение', value: 'USB, Bluetooth'},
                    {key: 'Совместимость', value: 'Windows, macOS'},
                ],
                '7': [
                    {key: 'Тип', value: 'Умные часы'},
                    {key: 'Дисплей', value: '1.9" Retina'},
                    {key: 'Процессор', value: 'S9'},
                    {key: 'Аккумулятор', value: '18 часов'},
                ],
                '8': [
                    {key: 'Тип', value: 'Планшет'},
                    {key: 'Процессор', value: 'Apple M1'},
                    {key: 'Оперативная память', value: '8 ГБ'},
                    {key: 'Накопитель', value: '256 ГБ'},
                ],
                '9': [
                    {key: 'Тип', value: 'Планшет'},
                    {key: 'Процессор', value: 'Apple A15 Bionic'},
                    {key: 'Оперативная память', value: '8 ГБ'},
                    {key: 'Накопитель', value: '128 ГБ'},
                ],
                '10': [
                    {key: 'Тип', value: 'Планшет'},
                    {key: 'Процессор', value: 'Apple A14 Bionic'},
                    {key: 'Оперативная память', value: '4 ГБ'},
                    {key: 'Накопитель', value: '64 ГБ'},
                ],
            };

            resolve(specsByProductId[productId] || []);
        }, 1000);
    });
}