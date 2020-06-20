<template>
  <component :is="currentView"></component>
</template>

<script>
import guides from './guides';

export default {
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
