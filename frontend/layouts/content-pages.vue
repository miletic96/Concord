<template lang="">
    <transition name="layout"><div>
        <theHeader />

            <nuxt />
        <footercontact />
    </div>
    </transition>
</template>
<script>
import theHeader from '../components/theHeader'
import footercontact from '../components/footercontact.vue'

export default {
    components: {
        footercontact,
        theHeader,
    
    }
}
</script>
<style lang="">
    
</style>