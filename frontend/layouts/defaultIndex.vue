<template>
  <transition name="layout">
    <div>
      <theHeader />
      <nuxt />
    </div>
  </transition>
</template>

<script>
import theHeader from "../components/theHeaderIndex";
export default {
  components: {
    theHeader,
  },
};
</script>
