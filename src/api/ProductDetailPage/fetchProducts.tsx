import type { Product } from '../CatalogPage/fetchProducts';

export async function fetchProduct(productId: string): Promise<Product & { description?: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const products: (Product & { description?: string })[] = [
                {
                    id: '1',
                    name: 'Ноутбук Lenovo ThinkPad X1 Carbon',
                    basePrice: 1299.99,
                    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGxlbm92byUyMHRoaW5rcGFkfGVufDB8fHx8MTY4NDI3NzYwNQ&ixlib=rb-4.0.3&q=80&w=400',
                    description: 'Ультрабук премиум-класса для бизнеса с высокой производительностью.',
                },
                {
                    id: '2',
                    name: 'Смартфон Samsung Galaxy S23',
                    basePrice: 999.99,
                    imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNhbXN1bmd8ZW58MHx8fHwxNjg0Mjc3NjA1&ixlib=rb-4.0.3&q=80&w=400',
                    description: 'Флагманский смартфон с мощной камерой и современным дизайном.',
                },
                {
                    id: '3',
                    name: 'Наушники Sony WH-1000XM4',
                    basePrice: 299.99,
                    imageUrl: 'https://images.unsplash.com/photo-1580894908361-7a439bab9631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHNvbnl8ZW58MHx8fHwxNjg0Mjc3NjA1&ixlib=rb-4.0.3&q=80&w=400',
                    description: 'Беспроводные наушники с шумоподавлением и высоким качеством звука.',
                },
                {
                    id: '4',
                    name: 'Монитор Dell UltraSharp 27"',
                    basePrice: 459.99,
                    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlbGx8ZW58MHx8fHwxNjg0Mjc3NjA1&ixlib=rb-4.0.3&q=80&w=400',
                    description: 'Профессиональный монитор с высоким разрешением и точной цветопередачей.',
                },
                {
                    id: '5',
                    name: 'Клавиатура Logitech MX Keys',
                    basePrice: 119.99,
                    imageUrl: 'https://images.unsplash.com/photo-1580894908361-7a439bab9631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxvZ2l0ZWNoJTIwbXh8ZW58MHx8fHwxNjg0Mjc3NjA1&ixlib=rb-4.0.3&q=80&w=400',
                    description: 'Эргономичная клавиатура с подсветкой и удобной раскладкой.',
                },
                {
                    id: '6',
                    name: 'Мышь Razer DeathAdder V2',
                    basePrice: 69.99,
                    imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHJhemVyfGVufDB8fHx8MTY4NDI3NzYwNQ&ixlib=rb-4.0.3&q=80&w=400',
                    description: 'Игровая мышь с высокой точностью и эргономичным дизайном.',
                },
                {
                    id: '7',
                    name: 'Умные часы Apple Watch Series 9',
                    basePrice: 429.99,
                    imageUrl: 'https://images.unsplash.com/photo-1580894908361-7a439bab9631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFwcGxlfGVufDB8fHx8MTY4NDI3NzYwNQ&ixlib=rb-4.0.3&q=80&w=400',
                    description: 'Умные часы с множеством функций для здоровья и фитнеса.',
                },
                {
                    id: '8',
                    name: 'Планшет iPad Air (5-го поколения)',
                    basePrice: 599.99,
                    imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGlwYWR8ZW58MHx8fHwxNjg0Mjc3NjA1&ixlib=rb-4.0.3&q=80&w=400',
                    description: 'Мощный и легкий планшет для работы и развлечений.',
                },
                {
                    id: '9',
                    name: 'Игровая консоль PlayStation 5',
                    basePrice: 499.99,
                    imageUrl: 'https://images.unsplash.com/photo-1580894908361-7a439bab9631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBsYXlzdGF0aW9ufGVufDB8fHx8MTY4NDI3NzYwNQ&ixlib=rb-4.0.3&q=80&w=400',
                    description: 'Игровая консоль нового поколения с потрясающей графикой.',
                },
                {
                    id: '10',
                    name: 'Внешний SSD Samsung T7 1TB',
                    basePrice: 149.99,
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Samsung_T7_1TB.jpg',
                    description: 'Компактный и быстрый внешний SSD для хранения данных.',
                },
            ];
            resolve(products.find(product => product.id === productId)!);
        }, 500);
    });
}