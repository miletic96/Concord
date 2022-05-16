<template lang="vue-html">
  <div>
    <div v-if="$device.isMobile">
      <mobile></mobile>
    </div>
    <div v-else>
      <div class="d-lg-none">
        <mobile></mobile>
      </div>
      <div class="d-none d-lg-block">
        <skillsdesktop></skillsdesktop>
      </div>
    </div>
  </div>
</template>

<script >
import skillsdesktop from "../../components/skills-desktop.vue";
import mobile from "../../components/skills-mobile.vue";
  export default {
    name: 'skills',
    components: {
      skillsdesktop,
      mobile
    },
     data() {
      return {
        title: 'Skills | Concord Media'
      }
    },
    head() {
      return {
        title: this.title
      }
    },
  }

</script>

<style lang="css" scoped>

</style>