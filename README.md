# electron-vue-project

> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```

---

# 项目工程目录

```
├── build                      // 构建相关  
├── dist                       // 配置相关
├── src                        // 源代码
│   ├── main                   // 进程相关设置
│       ├── index.js           // Electron主进程设置
│       ├── index.dev.js       // 进程设置
│   ├── assets                 // 图片 样式等静态资源
│   ├── models                 // 接口相关
│   ├── renderer               // 业务组件相关
│       ├── assets             // 组件相关静态文件（图片等）
│       ├── components         // 页面级别以及全局组件
│       ├── router             // 页面路由
│       ├── store              // 数据相关设置
│       ├── views              // 视图层
│           ├── App.vue        // 入口页面
│           └── main.js        // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── index.html                 // html模板
└── package.json               // package.json
```
