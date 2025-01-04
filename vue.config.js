const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/daw/'
    : '/',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html'
})