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

      <UtilityTable title="Font">
        <template #description>
          <p>Font sizes: <kbd>12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72, 96, 144, 288</kbd></p>
        </template>
        <tr>
          <td>.uppercase</td>
          <td>Uppercase all characters</td>
        </tr>
        <tr>
          <td>.lowercase</td>
          <td>Lowercase all characters</td>
        </tr>
        <tr>
          <td>.font-thin</td>
          <td>Set the font weight to thin (200)</td>
        </tr>
        <tr>
          <td>.font-light</td>
          <td>Set the font weight to light (300)</td>
        </tr>
        <tr>
          <td>.font-normal</td>
          <td>Set the font weight to normal (400)</td>
        </tr>
        <tr>
          <td>.font-semibold</td>
          <td>Set the font weight to semibold (600)</td>
        </tr>
        <tr>
          <td>.font-bold</td>
          <td>Set the font weight to bold (700)</td>
        </tr>
        <tr>
          <td>.font-{12-288}</td>
          <td>Set the font size to the specific size (see font sizes)</td>
        </tr>
        <tr>
          <td>.line-height-{12-288}</td>
          <td>Set the line height to the specific size (see font sizes)</td>
        </tr>
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
