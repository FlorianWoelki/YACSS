<template>
  <div class="guide-view">
    <component :is="currentView"></component>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import guides from './guides';

export default {
  components: {
    Footer,
  },

  data() {
    return {
      currentView: this.$route.params.guide,
    };
  },

  watch: {
    $route() {
      guides.guides.forEach(guide => {
        if (this.$route.params.guide === guide.toLowerCase()) {
          this.currentView = guide;
        }
      });
    },
  },
};
</script>
