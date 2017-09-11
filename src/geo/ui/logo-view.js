var View = require('../../core/view');
var template = require('./logo.tpl');
var URL = 'http://www.onenetcom.cn';

module.exports = View.extend({
  className: 'CDB-Logo',
  tagName: 'a',

  render: function () {
    this.$el.html(template());
    this.$el.attr('href', URL);
    this.$el.attr('target', '_blank');
    return this;
  }
});
