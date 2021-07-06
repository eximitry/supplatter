const webpack = require('webpack');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        proxy: { "/api/**": { target: 'http://localhost:5000', secure: false } }
    },
    plugins: [
        // new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Vishwas'),
        }),
    ],
}
