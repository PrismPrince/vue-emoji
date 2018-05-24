import EmojiMixin from './index.js';

module.exports = {
  install: function (Vue, options) {
    Vue.mixin({EmojiMixin});
  }
};
