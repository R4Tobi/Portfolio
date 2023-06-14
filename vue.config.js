const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/home',
        '/projects'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
})
