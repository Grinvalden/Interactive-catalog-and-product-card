export async function fetchProducts() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: '1',
                    name: 'Ноутбук Lenovo ThinkPad X1 Carbon',
                    basePrice: 1299.99,
                    imageUrl: 'https://example.com/images/lenovo-thinkpad-x1.jpg',
                  },
                  {
                    id: '2',
                    name: 'Смартфон Samsung Galaxy S23',
                    basePrice: 999.99,
                    imageUrl: 'https://example.com/images/samsung-galaxy-s23.jpg',
                  },
                  {
                    id: '3',
                    name: 'Наушники Sony WH-1000XM4',
                    basePrice: 299.99,
                    imageUrl: 'https://example.com/images/sony-wh1000xm4.jpg',
                  },
                  {
                    id: '4',
                    name: 'Монитор Dell UltraSharp 27"',
                    basePrice: 459.99,
                    imageUrl: 'https://example.com/images/dell-ultrasharp.jpg',
                  },
                  {
                    id: '5',
                    name: 'Клавиатура Logitech MX Keys',
                    basePrice: 119.99,
                    imageUrl: 'https://example.com/images/logitech-mx-keys.jpg',
                  },
                  {
                    id: '6',
                    name: 'Мышь Razer DeathAdder V2',
                    basePrice: 69.99,
                    imageUrl: 'https://example.com/images/razer-deathadder-v2.jpg',
                  },
                  {
                    id: '7',
                    name: 'Умные часы Apple Watch Series 9',
                    basePrice: 429.99,
                    imageUrl: 'https://example.com/images/apple-watch-series9.jpg',
                  },
                  {
                    id: '8',
                    name: 'Планшет iPad Air (5-го поколения)',
                    basePrice: 599.99,
                    imageUrl: 'https://example.com/images/ipad-air.jpg',
                  },
                  {
                    id: '9',
                    name: 'Игровая консоль PlayStation 5',
                    basePrice: 499.99,
                    imageUrl: 'https://example.com/images/ps5.jpg',
                  },
                  {
                    id: '10',
                    name: 'Внешний SSD Samsung T7 1TB',
                    basePrice: 149.99,
                    imageUrl: 'https://example.com/images/samsung-t7-1tb.jpg',
                  },
            ])
        }, 500)
    })
}