const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    entry: './src/api/index.tsx', // Точка входа
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' }, // Обработка SVG
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // Обработка CSS
            {
                test: /\.(js|jsx|ts|tsx)$/, // Обработка JS, JSX, TS, TSX
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            require.resolve('react-refresh/babel'), // Плагин для HMR
                        ],
                    },
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // Папка для сборки
        filename: 'index_bundle.js', // Имя выходного файла
        clean: true, // Очистка папки dist перед сборкой
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // Расширения для импорта
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Шаблон HTML
        }),
        new ReactRefreshPlugin(), // Плагин для горячей перезагрузки
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Папка для сервера
        port: 3000, // Порт сервера
        open: true, // Автоматическое открытие браузера
        hot: true, // Включение горячей перезагрузки
        compress: true, // Сжатие файлов
        historyApiFallback: true, // Поддержка маршрутизации в React
    },
    mode: 'development', // Режим разработки
};