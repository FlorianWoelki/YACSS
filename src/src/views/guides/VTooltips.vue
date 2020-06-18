<template>
  <section id="tooltips">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a
          class="font-bold"
          href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/tooltip.scss"
          target="_blank"
          >#</a
        >
        Tooltips
      </h1>
      <p>
        Tooltips are easy to use and beautiful designed tips you can display above your components
        or elements with ease.
      </p>

      <ComponentExample title="Tooltip Positions">
        <template #description>
          There are mainly four positions for tooltips.
        </template>
        <template #preview>
          <div class="tooltip" data-tooltip="Hello World">Top</div>
          <div class="tooltip tooltip-right" data-tooltip="Hello World">Right</div>
          <div class="tooltip tooltip-left" data-tooltip="Hello World">Left</div>
          <div class="tooltip tooltip-bottom" data-tooltip="Hello World">Bottom</div>
        </template>
      </ComponentExample>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ComponentExample from '@/components/ComponentExample.vue';

export default {
  name: 'Buttons',
  components: {
    Navbar,
    ComponentExample,
  },
};
</script>
