//o nome desse arquivo é o nome padrão de um arquivo webpack

const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const modoDev = process.env.NODE_ENV !== "production" //foi configurado no package.json uma forma para quando executar o código "npm build", executar em modo de produção
const uglifyJsPlugin = require("uglifyjs-webpack-plugin")
const optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    mode: modoDev ? "development" : "production",
    entry: "./src/principal.js",
    output: {
        //configura o nome do arquivo de saída de a pasta de saída pra não ficar
        //do modo padrão
        //de padrão, gera no __dirname + "dist"
        filename: "principal.js",
        path: __dirname + "/public",
    },
    plugins: [
        new MiniCssExtractPlugin({ //extrai o css para um arquivo externo
            filename: "estilo.css",
        })
    ],
    devServer: {
        contentBase: "./public",
        port: 9000,
    },
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new optimizeCssAssetsPlugin({}),
        ]
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader, //extrai o css para um arquivo externo
                // "style-loader", //adiciona CSS a DOM injetando a tag <style>
                "css-loader", //interpreta @import, url()...
                "sass-loader",
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
        },
        ]
    }
}