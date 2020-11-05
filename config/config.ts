// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import { resolve } from "path";
import {vars} from '../src/style/variable'
import {routes} from './routes'

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  // layout: {
  //   name: '完工报告',
  //   locale: false,
  //   siderWidth: 208,
  // },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  alias: {
    "@": resolve(__dirname, "./src"),
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
    ...vars
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  request:{
    dataField:''
  },
  externals:{
    'bdw-config':'window.bdwConfig',
    BMap:'BMap'
  },
  scripts:[{src:`${publicPath}bdw_config.js`}],
  extraPostCSSPlugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-px-to-viewport')({
        viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是375
        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: [], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false, // 允许在媒体查询中转换`px`
    }),
  ],
});
