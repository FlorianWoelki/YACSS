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

      <UtilityTable title="Colors">
        <template #description>
          <p>Color ranges: <kbd>100, 200, 300, 400, 500, 600, 700, 800, 900</kbd></p>
        </template>
        <slot>
          <tr>
            <td>.text-blue-{100-900}</td>
            <td>Colorize the text with blue (see color range)</td>
          </tr>
        </slot>
      </UtilityTable>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import UtilityTable from '@/components/UtilityTable.vue';

export default {
  components: {
    Navbar,
    UtilityTable,
  },
};
</script>
