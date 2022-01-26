const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        login_app: './src/login-page.js',

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
}