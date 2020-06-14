<template>
  <section id="utility">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a
          class="font-bold"
          href="https://github.com/FlorianWoelki/YACSS/blob/master/src"
          target="_blank"
          >#</a
        >
        Utility
      </h1>
      <p>
        YACSS has a lot of utility classes for you to change the color, size or border of any
        element or component you like. You can apply these classes wherever you want.
      </p>

      <h3 class="mt-3">Colors</h3>
      <p>Color ranges: <kbd>100, 200, 300, 400, 500, 600, 700, 800, 900</kbd></p>
      <table class="table">
        <tr>
          <th>class</th>
          <th>description</th>
        </tr>
        <tr>
          <td>.text-blue-{100-900}</td>
          <td>Colorize the text with blue (see color range)</td>
        </tr>
      </table>
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
