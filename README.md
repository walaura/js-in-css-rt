# js-in-css-runtime

Redistributable runtime for running JS-in-CSS in your own website

<center>
<img width="1212" alt="screenshot 2019-01-12 at 12 44 15 pm" src="https://user-images.githubusercontent.com/11539094/51073373-df946e00-1667-11e9-9d6d-451a9966fc3f.png">
</center>

## How to use
Link the runtime to your page like this
```es6
import { runtime } from 'js-in-css-rt';

/* after your dom has loaded */
runtime.init();
```

This won't do much at first because you need some JS-in-CSS to get it going. In your stylesheet, add a `--eval` variable containing the JS you want to run. `this` will be mapped to the `Element` that matches the selector. For example this will make your footer both stylish and always be up to date with the current year:

```css
footer {
  border: 3px solid red;
  color: white;
  background: blue;
  --eval: 'this.innerText = `©${(new Date).getFullYear()} My Web Site`';
}
```

## FAQs
### Does this work with CSS processors such as SASS/Less/PostCSS
Yes! The runtime targets compiled CSS at the last stage. Just make sure your compiler understands css variables and doesn't strip them out.

### Can I use this with native browser modules
Yes! try `import { runtime } from 'node_modules/js-in-css-rt/index.js'`. You might want to invest in some tooling to not expose your entire `node_modules` folder.

### I'm unsure if this is an elaborate trolling attempt or a legitimate library
Follow your heart and you will never go wrong

### Wait what
Yeah no dont use this dont ever use this

### Does this work with CSS-in-JS Solutions such as Emotion
There's no reason it shouldn'd. Please let me know if you set that up it's been a somber month for me personally and I need a chuckle
