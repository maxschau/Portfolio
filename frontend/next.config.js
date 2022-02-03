var path = require("path");
module.exports = {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(pdf|gif|png|jpe?g|svg)$/,
        use: 'file-loader?name=[path][name].[ext]',
        include: path
      })
  
      return config
    },
  }