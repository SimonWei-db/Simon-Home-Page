const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#1DA57A', 
              '@layout-header-background': '#ffffff', // 修改为白色背景
              '@layout-header-color': '#000000' // 修改为黑色文字
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
