<script setup lang="ts">
import layout from "@/layout/index.vue"
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const route = useRoute()
const scrollbarRef = ref()
watch(() => route.name, (val) => {
  scrollbarRef.value!.setScrollTop(0)
}, { deep: true })

</script>

<template>
  <el-scrollbar ref="scrollbarRef" height="100vh">
    <layout />
  </el-scrollbar>
</template>

<style lang="scss">
body {
  background-color: $color-purple-light;
}
</style>