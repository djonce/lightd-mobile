import { defineConfig } from 'dumi';
const repoName = 'lightd-mobile';

export default defineConfig({
  title: 'lightd-mobile',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  base: repoName ? `/${repoName}/` : '/',
  publicPath: repoName ? `/${repoName}/` : '/',
  themeConfig: {
    carrier: '中国电信',
    hd: {
      // 禁用高清方案
      rules: [],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
});
