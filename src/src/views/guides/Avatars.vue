<template>
  <section id="avatars">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a class="font-bold" href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/alert.scss" target="_blank">#</a>
        Alerts
      </h1>
      <p>
        By default all alerts have the primary color as a color.
        If you want to customize your alerts, you can change the border,
        background and text color for your needs.
      </p>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
