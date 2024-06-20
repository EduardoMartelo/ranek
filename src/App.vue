<template>
  <div id="app">
  <TheHeader />
  <main id="main">
    <router-view/>
  </main>
  <TheFooter />
  
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
@import "assets/scss/style";

</style>
