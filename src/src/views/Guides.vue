<template>
  <section id="guides">
    <Navbar />
    <div class="container mt-8">
      <h3>What do you want to create?</h3>
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
};
</script>
