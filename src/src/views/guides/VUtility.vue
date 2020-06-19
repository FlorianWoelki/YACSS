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

      <UtilityTable title="Padding and Margin">
        <template #description>
          <p>
            Spacing Sizes: <kbd>0, 0-25, 0-5, 0-75, 1, 1-5, 2, 3, 4, 8, 12, 16, 24, 32, 40, 48</kbd>
          </p>
        </template>
        <tr>
          <td>.m-{0-48}</td>
          <td>Set the margin to the specific size (see spacing sizes)</td>
        </tr>
        <tr>
          <td>.ml-{0-48}</td>
          <td>Set the margin left to the specific size (see spacing sizes)</td>
        </tr>
        <tr>
          <td>.mr-{0-48}</td>
          <td>Set the margin right to the specific size (see spacing sizes)</td>
        </tr>
        <tr>
          <td>.mt-{0-48}</td>
          <td>Set the margin top to the specific size (see spacing sizes)</td>
        </tr>
        <tr>
          <td>.mb-{0-48}</td>
          <td>Set the margin bottom to the specific size (see spacing sizes)</td>
        </tr>
        <tr>
          <td>.p-{0-48}</td>
          <td>Set the padding to the specific size (see spacing sizes)</td>
        </tr>
        <tr>
          <td>.pl-{0-48}</td>
          <td>Set the padding left to the specific size (see spacing sizes)</td>
        </tr>
        <tr>
          <td>.pr-{0-48}</td>
          <td>Set the padding right to the specific size (see spacing sizes)</td>
        </tr>
        <tr>
          <td>.pt-{0-48}</td>
          <td>Set the padding top to the specific size (see spacing sizes)</td>
        </tr>
        <tr>
          <td>.pb-{0-48}</td>
          <td>Set the padding bottom to the specific size (see spacing sizes)</td>
        </tr>
        <tr>
          <td>.m-auto</td>
          <td>Set the margin size to auto</td>
        </tr>
        <tr>
          <td>.mt-auto</td>
          <td>Set the margin top size to auto</td>
        </tr>
        <tr>
          <td>.ml-auto</td>
          <td>Set the margin left size to auto</td>
        </tr>
        <tr>
          <td>.mr-auto</td>
          <td>Set the margin right size to auto</td>
        </tr>
        <tr>
          <td>.mb-auto</td>
          <td>Set the margin bottom size to auto</td>
        </tr>
      </UtilityTable>

      <UtilityTable title="Shadow">
        <template #description>
          <p>Shadow sizes: <kbd>none, xs, sm, md, lg, xl</kbd></p>
        </template>
        <tr>
          <td>.shadow-{size}</td>
          <td>Set the box shadow size of the current element or component (see shadow sizes)</td>
        </tr>
      </UtilityTable>

      <UtilityTable title="Width">
        <template #description>
          <p>
            Width sizes:
            <kbd
              >0, 0-25, 0-5, 0-75, 1, 1-25, 1-5, 2, 2-5, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22,
              24, 28, 32, 36, 40</kbd
            >
          </p>
        </template>
        <tr>
          <td>.w-{0-40}</td>
          <td>Set the width of the element (see width sizes)</td>
        </tr>
        <tr>
          <td>.mw-{0-40}</td>
          <td>Set the max width of the element (see width sizes)</td>
        </tr>
        <tr>
          <td>.w-100</td>
          <td>Set the width to 100%</td>
        </tr>
        <tr>
          <td>.h-100</td>
          <td>Set the height to 100%</td>
        </tr>
      </UtilityTable>

      <UtilityTable title="Border">
        <template #description>
          <p>Border Size: <kbd>0, 1, 2, 4, 8</kbd></p>
          <p>Border Radius Size: <kbd>none, sm, reg, md, lg</kbd></p>
        </template>
        <tr>
          <td>.b-{border size}</td>
          <td>Set the border of the element to a white one (see border sizes)</td>
        </tr>
        <tr>
          <td>.bt-{border size}</td>
          <td>Set the border top of the element to a white one (see border sizes)</td>
        </tr>
        <tr>
          <td>.bb-{border size}</td>
          <td>Set the border bottom of the element to a white one (see border sizes)</td>
        </tr>
        <tr>
          <td>.bl-{border size}</td>
          <td>Set the border left of the element to a white one (see border sizes)</td>
        </tr>
        <tr>
          <td>.br-{border size}</td>
          <td>Set the border right of the element to a white one (see border sizes)</td>
        </tr>
        <tr>
          <td>.b-hover-none</td>
          <td>Set the border to none on hover</td>
        </tr>
        <tr>
          <td>.b-radius-{border radius size}</td>
          <td>Set the border radius of an element (see border sizes)</td>
        </tr>
        <tr>
          <td>.bt-radius-{border radius size}</td>
          <td>Set the border top radius of an element (see border sizes)</td>
        </tr>
        <tr>
          <td>.bb-radius-{border radius size}</td>
          <td>Set the border bottom radius of an element (see border sizes)</td>
        </tr>
        <tr>
          <td>.bl-radius-{border radius size}</td>
          <td>Set the border left radius of an element (see border sizes)</td>
        </tr>
        <tr>
          <td>.br-radius-{border radius size}</td>
          <td>Set the border right radius of an element (see border sizes)</td>
        </tr>
      </UtilityTable>

      <UtilityTable title="Other">
        <tr>
          <td>.container</td>
          <td>Create a containerized element</td>
        </tr>
        <tr>
          <td>.pointer</td>
          <td>Set the cursor style to pointer</td>
        </tr>
        <tr>
          <td>.center</td>
          <td>Centerize the element with the help of flexbox</td>
        </tr>
        <tr>
          <td>.circle</td>
          <td>Circlize the element</td>
        </tr>
        <tr>
          <td>.pilled</td>
          <td>Pillerize the element</td>
        </tr>
        <tr>
          <td>.flex</td>
          <td>Set the display to flex</td>
        </tr>
        <tr>
          <td>.block</td>
          <td>Set the display to block</td>
        </tr>
        <tr>
          <td>.inline-flex</td>
          <td>Set the display to inline-flex</td>
        </tr>
        <tr>
          <td>.inline-block</td>
          <td>Set the display to inline-block</td>
        </tr>
        <tr>
          <td>.text-center</td>
          <td>Set the text alignment to center</td>
        </tr>
        <tr>
          <td>.pull-right</td>
          <td>Right pull the item with float attribute</td>
        </tr>
        <tr>
          <td>.flex-{direction}</td>
          <td>Set the flex direction of the element (column, row, row-reverse, column-reverse)</td>
        </tr>
        <tr>
          <td>.pos-{position}</td>
          <td>Set the position of the element (fixed, relative, absolute)</td>
        </tr>
        <tr>
          <td>.align-{alignment}</td>
          <td>Set the flex alignment of the element (center, flex-start, flex-end)</td>
        </tr>
        <tr>
          <td>.justify-{option}</td>
          <td>
            Set the flex justify of the element (center, flex-start, flex-end, space-around,
            space-between)
          </td>
        </tr>
        <tr>
          <td>.overflow-y-{option}</td>
          <td>Set the overflow-y of the element (auto, hidden, overlay, scroll)</td>
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
