const alias = require('./alias');

const webpackConfig = {
    resolve: {
        alias: alias
    },
    node: {
        fs: 'empty',
        url: 'empty',
        http: 'empty',
        https: 'empty'
    },
    module: {
        loaders: [{
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devtool: '#inline-source-map'
};

module.exports = {
    frameworks: ['mocha', 'expect', 'expect-maptalks', 'sinon', 'happen'],
    files: [{
        pattern: '../test/**/*.js',
        watched: false
    }, {
        pattern: '../assets/css/**/*.css',
        watched: true,
        included: false,
        served: true
    }, {
        pattern: '../assets/images/**/*.png',
        watched: false,
        included: false,
        served: true
    }, {
        pattern: '../test/resources/*',
        watched: false,
        included: false,
        served: true
    }],
    proxies: {
        '/images/': '/base/assets/images/',
        '/css/': '/base/assets/css/',
        '/lib/': '/base/assets/lib/',
        '/resources/': '/base/test/resources/'
    },
    preprocessors: {
        '../test/**/*.js': ['webpack', 'sourcemap']
    },
    customLaunchers: {
        IE10: {
            base: 'IE',
            'x-ua-compatible': 'IE=EmulateIE10'
        },
        IE9: {
            base: 'IE',
            'x-ua-compatible': 'IE=EmulateIE9'
        },
        IE8: {
            base: 'IE',
            'x-ua-compatible': 'IE=EmulateIE8'
        },
        IE7: {
            base: 'IE',
            'x-ua-compatible': 'IE=EmulateIE7'
        }
    },
    webpack: webpackConfig,
    webpackMiddleward: {
        noInfo: true
    }
};