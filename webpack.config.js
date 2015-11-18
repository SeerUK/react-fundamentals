"use strict";

module.exports = {
    entry: "./src/App.js",
    output: {
        filename: "web/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    presets: [ "react" ]
                }
            }
        ]
    }
};
