<template>
  <section id="guides">
    <Navbar />
    <div class="container mt-8">
      <h3>What do you want to create?</h3>
      <div
        v-for="guideIndex in guides.length / 2"
        :key="guideIndex"
        class="row pl-0"
      >
        <div
          v-for="index in [guideIndex - 1, guideIndex]"
          :key="guideIndex + index * 2"
          class="col-5 offset-1 pl-0 mt-2"
        >
          <div
            class="card card-equal-height pointer"
            @click="$router.push(`/${guides[guideIndex - 1 + index].toLowerCase()}`)"
          >
            <div class="container pt-4 pb-2 pr-2 pl-2">
              <h3 class="text-center text-indigo-800">
                {{ guides[guideIndex - 1 + index] }}
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
  data() {
    return {
      guides: [
        'Alerts', 'Avatars', 'Badges', 'Buttons', 'Cards',
        'Code', 'Dropdown', 'Footer', 'Hero', 'Modals',
        'Navbar', 'Pagination', 'Sidebar', 'Table',
        'Tabs', 'Tags', 'Tooltips', 'Utility',
      ],
    };
  },
};
</script>
