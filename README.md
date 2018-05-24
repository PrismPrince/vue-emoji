# Vue Emoji

A Vue.js mixin for emoji.

## Installation

```js
npm i vue-emoji
```

### Browser

Include the script file:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-emoji/dist/vue-clock.min.js"></script>
<script type="text/javascript">
  new Vue({
    ...
    mixins: [VueEmoji],
    ...
  };)
</script>
```

### Module

```js
import VueEmoji from 'vue-clock';

new Vue({
  ...
  mixins: [VueEmoji],
  ...
};)
```

## Usage

Once installed, it can be used in as simply as:

```md
:+1:
:smiley:
:cat:
```
