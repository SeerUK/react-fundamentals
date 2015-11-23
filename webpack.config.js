"use strict";

module.exports = {
    entry: "./src/app.js",
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
                    presets: [ "es2015", "react", "stage-0", "stage-1", "stage-2", "stage-3" ]
                }
            }
        ]
    }
};
