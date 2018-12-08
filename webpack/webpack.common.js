const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        /* creating a js bundle named 'main' => background script. */
        main: path.join(__dirname, '../src/scripts/main.ts'),
    },
    output: {
        /* putting the main bundle inside dist/assets folder. */
        path: path.join(__dirname, '../dist/scripts'),
        filename: '[name].js'
    },
    optimization: {
        /*
        * vendor bundle will included when something from node modules will be used.
        * split vendor bundle into separate chunks wherever possible.
        * More Info: https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0
        * */
        splitChunks: {
            name: 'vendor',
            chunks: "initial"
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,    // using typescript loader to convert ts to js at build stage.
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']  // to leave off the extension when importing.
    },
    plugins: [
        /* copying manifest, assets, views directly as they don't need to be compiled.*/
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '../src/manifest.json'),
                to: path.join(__dirname, '../dist')
            },
            {
                from: path.join(__dirname, '../src/assets/'),
                to: path.join(__dirname, '../dist/assets/')
            },
            {
                from: path.join(__dirname, '../src/views/'),
                to: path.join(__dirname, '../dist/views/')
            }
        ])
    ]
};
