module.exports = {
  transpileDependencies: [
    'vuetify'
  ], devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7542/'
      }

    }
  }
}