module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/plugins/vuetify.js',
    '!src/router/index.js',
    '!src/**/*.stub.js',
  ],
};
