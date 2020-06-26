<template>
  <section id="guides">
    <Navbar />
    <div class="container mt-8">
      <h3>What do you want to create?</h3>
      <div v-for="guideIndex in sortedGuides.length / 2" :key="guideIndex" class="row pl-0">
        <div
          v-for="index in [guideIndex - 1, guideIndex]"
          :key="guideIndex + index * 2"
          class="col-5 offset-1 pl-0 mt-2"
        >
          <div
            class="card card-equal-height pointer"
            @click="$router.push(`/guides/${sortedGuides[guideIndex - 1 + index].toLowerCase()}`)"
          >
            <div class="container pt-4 pb-2 pr-2 pl-2">
              <h3 class="text-center text-indigo-800">
                {{ sortedGuides[guideIndex - 1 + index] }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Guides',
  components: {
    Navbar,
  },
  computed: {
    sortedGuides() {
      const tempGuides = this.guides;
      return tempGuides.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
    },
  },
  data() {
    return {
      guides: [
        'Alerts',
        'Avatars',
        'Badges',
        'Buttons',
        'Cards',
        'Codes',
        'Dropdown',
        'Footers',
        'Hero',
        'Modals',
        'Navbar',
        'Pagination',
        'Sidebar',
        'Tables',
        'Tabs',
        'Tags',
        'Tooltips',
        'Utility',
        'Grid',
        'Forms',
      ],
    };
  },
};
</script>
