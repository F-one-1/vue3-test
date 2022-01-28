// App.vue
<template>
  <drag-code :code="currentCode" suffix="vue"></drag-code>
  <hg-code :code="currentCode" suffix="vue"> </hg-code>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  computed: {
      currentCode() { 
        return require('!!text-loader!' + '../App')
      },
    },
}
</script>