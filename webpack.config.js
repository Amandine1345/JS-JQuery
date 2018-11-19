const path = require('path');

// module.export = exporter une variable (chaine, fonction, objet)
// entry = point d'entrée
// output = fichier de sortie de Webpack prêt pour la production
module.exports = {
    entry: {
        app: './src/js/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};