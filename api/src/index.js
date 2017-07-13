if (process.env.NODE_ENV !== 'production')
    require('babel-core/register');

exports = module.exports = require('./app');
