# vue-stage

> 一个 Vue.js Vue-router Vuex element 项目


## 安装步骤

> [yarn 安装](https://yarnpkg.com/en/docs/install)


``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
```

## 添加webp支持
修改webpack配置
  `webpack.base.conf.js`
  ```js
  var multi = require("multi-loader")
  ...
  {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        loader: multi(
          'file?' + JSON.stringify({
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].webp')
          }) + '!webpn',
          'url?' + JSON.stringify({
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          })
        )
      },
  ...
  ```
在`mian.js`中引用`vue-webp`指令
```js
import VueWebp from 'vue-webp';
Vue.use(VueWebp)
```
在`pug`中只用`webp`
```pug
img(v-webp="require('./images/b1.jpg')")
// 这里的图片资源需要使用require ，下一步进行优化
```
## 相关资料网站
+ [Vue.js](https://cn.vuejs.org/)
+ [Vue-router](http://router.vuejs.org/zh-cn/)
+ [Vuex](http://vuex.vuejs.org/zh-cn/)
+ [element](http://element.eleme.io/#/zh-CN)
+ [sass](http://sass.bootcss.com/docs/sass-reference/)
+ [jade](https://segmentfault.com/a/1190000000357534)

