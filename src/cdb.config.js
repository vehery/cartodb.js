var Config = require('./core/config');

var config = new Config();
config.set({
  cartodb_attributions: '© <a href="http://www.onenetcom.cn" target="_blank">ONENETCOM</a>',
  cartodb_logo_link: 'http://www.onenetcom.cn'
});

module.exports = config;
