module.exports = {
    mode: "development",
    entry: {
        index:"./scripts/index.js",
        peliculas:"./scripts/formulario/crearPelis.js"
    },

    output: {
        path: __dirname + "/public",
        filename: "[name].js",
    },
};