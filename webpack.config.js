module.exports = {
    // entry: './styles/main.scss',
    loaders: [
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }
    ],
    // module: {
    //     rules: [{
    //         test: /\.scss$/,
    //         use: [
    //             "sass-loader" // compiles Sass to CSS, using Node Sass by default
    //         ]
    //     }]
    // },
    mode: 'development'
};