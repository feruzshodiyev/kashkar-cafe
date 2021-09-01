module.exports = {
  devServer: {
    port: 3000,
    // proxy: "https://kashkarapi.pythonanywhere.com"
    publicPath: process.env.NODE_ENV === 'production'
        ? '/kashkar-cafe/'
        : '/'
  },
};
