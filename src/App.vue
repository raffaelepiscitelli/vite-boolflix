<template lang="">
  <div>
    <AppSearch/>
    <AppMain/>
  </div>
</template>
<script>
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppSearch,
    AppMain
  }
}
</script>
<style lang="scss">
  @use './styles/general.scss' as *;
</style>