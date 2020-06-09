const useServiceStub = !!process.env.npm_config_stub;

module.exports = {
  chainWebpack(config) {
    if (useServiceStub) {
      config.resolve.extensions.prepend('.stub.js');
    }
  },
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
};
