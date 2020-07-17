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
});
