
## Dependencies
* [Angular](https://angular.io)

## Installation

Install `@synergetic/core` from `npm`

```shell
npm install @synergetic/core --save
```

You will need synergetic styles

```
<!-- index.html -->
<link rel="stylesheet"
        href="node_modules/@synergetic/core/index.css">
```

Once installed modules can be imported into your NgModules

```js
import { RingModule } from '@synergetic/core';
...

@NgModule({
   ...
   imports: [RingModule, ... ],
    ... 
})
```

## SystemJS
To add synergetic to your SystemJS project (UMD Bundle)

Update `map` and `packages` with `@synergetic/core` in system.js config

```js
  let config = {
    map: {
      //...
      '@synergetic/core': 'node_modules/@synergetic/core',
      //...
    },
    packages: {
      //...
      '@synergetic/core':  { main: 'bundles/ng-synergetic.umd.js' },
      //...
    }
  };
```
