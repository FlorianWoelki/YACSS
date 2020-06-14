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
            <td>.text-white</td>
            <td>Colorize the text white</td>
          </tr>
          <tr>
            <td>.text-hover-white</td>
            <td>Colorize the text white on hover</td>
          </tr>
          <tr>
            <td>.text-black</td>
            <td>Colorize the text black</td>
          </tr>
          <tr>
            <td>.text-hover-black</td>
            <td>Colorize the text black on hover</td>
          </tr>
          <tr v-for="color in colors" :key="color">
            <td>.text-{{ color }}-{100-900}</td>
            <td>Colorize the text with {{ color }} (see color range)</td>
          </tr>
          <tr v-for="color in colors" :key="color">
            <td>.bg-{{ color }}-{100-900}</td>
            <td>Colorize the background with {{ color }} (see color range)</td>
          </tr>
          <tr v-for="color in colors" :key="color">
            <td>.bc-{{ color }}-{100-900}</td>
            <td>Colorize the border color with {{ color }} (see color range)</td>
          </tr>
          <tr v-for="color in colors" :key="color">
            <td>.text-hover-{{ color }}-{100-900}</td>
            <td>Colorize the text color with {{ color }} on hover (see color range)</td>
          </tr>
          <tr v-for="color in colors" :key="color">
            <td>.bg-hover-{{ color }}-{100-900}</td>
            <td>Colorize the background color with {{ color }} on hover (see color range)</td>
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
  data() {
    return {
      colors: ['blue', 'gray', 'purple', 'indigo', 'red', 'green'],
    };
  },
};
</script>
