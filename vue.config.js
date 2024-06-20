const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// export default defineConfig({
//   css: {
//     preprocessorOptions: {
//       scss: { additionalData: '@import "src/scss/style.scss'},
//     }
//   }
// })
