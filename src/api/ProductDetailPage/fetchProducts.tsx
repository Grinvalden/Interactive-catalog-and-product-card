export default interface Product {
    id: string, 
    name: string, 
    basePrice: number, 
    imageUrl: string, 
    description?: string
}
export async function fetchProduct(productId: string): Promise<Product> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const products = [
                {
                    id: '1',
                    name: 'Ноутбук Lenovo ThinkPad X1 Carbon',
                    basePrice: 1299.99,
                    imageUrl: 'https://example.com/images/lenovo-thinkpad-x1.jpg',
                    description: 'Ультрабук премиум-класса для бизнеса с высокой производительностью.',
                },
                {
                    id: '2',
                    name: 'Смартфон Samsung Galaxy S23',
                    basePrice: 999.99,
                    imageUrl: 'https://example.com/images/samsung-galaxy-s23.jpg',
                    description: 'Флагманский смартфон с мощной камерой и современным дизайном.',
                },
                {
                    id: '3',
                    name: 'Наушники Sony WH-1000XM4',
                    basePrice: 299.99,
                    imageUrl: 'https://example.com/images/sony-wh1000xm4.jpg',
                    description: 'Беспроводные наушники с шумоподавлением и высоким качеством звука.',
                },
                {
                    id: '4',
                    name: 'Монитор Dell UltraSharp 27"',
                    basePrice: 459.99,
                    imageUrl: 'https://example.com/images/dell-ultrasharp.jpg',
                    description: 'Профессиональный монитор с высоким разрешением и точной цветопередачей.',
                },
                {
                    id: '5',
                    name: 'Клавиатура Logitech MX Keys',
                    basePrice: 119.99,
                    imageUrl: 'https://example.com/images/logitech-mx-keys.jpg',
                    description: 'Эргономичная клавиатура с подсветкой и удобной раскладкой.',
                },
                {
                    id: '6',
                    name: 'Мышь Razer DeathAdder V2',
                    basePrice: 69.99,
                    imageUrl: 'https://example.com/images/razer-deathadder-v2.jpg',
                    description: 'Игровая мышь с высокой точностью и эргономичным дизайном.',
                },
                {
                    id: '7',
                    name: 'Умные часы Apple Watch Series 9',
                    basePrice: 429.99,
                    imageUrl: 'https://example.com/images/apple-watch-series9.jpg',
                    description: 'Умные часы с множеством функций для здоровья и фитнеса.',
                },
                {
                    id: '8',
                    name: 'Планшет iPad Air (5-го поколения)',
                    basePrice: 599.99,
                    imageUrl: 'https://example.com/images/ipad-air.jpg',
                    description: 'Мощный и легкий планшет для работы и развлечений.',
                },
                {
                    id: '9',
                    name: 'Игровая консоль PlayStation 5',
                    basePrice: 499.99,
                    imageUrl: 'https://example.com/images/ps5.jpg',
                    description: 'Игровая консоль нового поколения с потрясающей графикой.',
                },
                {
                    id: '10',
                    name: 'Внешний SSD Samsung T7 1TB',
                    basePrice: 149.99,
                    imageUrl: 'https://example.com/images/samsung-t7-1tb.jpg',
                    description: 'Компактный и быстрый внешний SSD для хранения данных.',
                },
            ];
            resolve(products.find((product) => product.id === productId)!);
        }, 500);
    });
}