<template>
  <section id="avatars">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a class="font-bold" href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/badge.scss" target="_blank">#</a>
        Badges
      </h1>
      <p>
        You can specify a badge without any pseudo selector. Therefore, you can easily add
        dynamic data binding to the element. The badge content will be in a <kbd>span</kbd>
        tag. Furthermore, it will have the <kbd>accent background color 600</kbd> as a
        default bg color.
      </p>

      <ComponentExample title="Default Badge">
        <template #description>
          Below you see the default badge applied on a tertiary button.
        </template>
        <template #preview>
          <div class="badge"><span class="spacer"></span>
            <button class="btn-tertiary">Test</button>
            <span class="number">13</span>
          </div>
        </template>
      </ComponentExample>

      <ComponentExample title="Badge Sizes">
        <template #description>
          We have 4 different sizes for the badge component.
        </template>
        <template #preview>
          <div class="badge"><span class="spacer"></span>
            <button class="btn-tertiary">Small Badge</button>
            <span class="number badge-sm">13</span>
          </div>
          <div class="badge"><span class="spacer"></span>
            <button class="btn-tertiary">Normal Badge</button>
            <span class="number">13</span>
          </div>
          <div class="badge"><span class="spacer"></span>
            <button class="btn-tertiary">Large Badge</button>
            <span class="number badge-lg">13</span>
          </div>
          <div class="badge"><span class="spacer"></span>
            <button class="btn-tertiary">xLarge Badge</button>
            <span class="number badge-xl">13</span>
          </div>
        </template>
      </ComponentExample>

      <ComponentExample title="Badge Styling">
        <template #description>
          In addition to the awesome badge component you can easily customize
          the color of the badge.
        </template>
        <template #preview>
          <div class="badge"><span class="spacer"></span>
            <button class="btn-tertiary">Test</button>
            <span class="number bg-purple-700">13</span>
          </div>
        </template>
      </ComponentExample>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ComponentExample from '@/components/ComponentExample.vue';

export default {
  components: {
    Navbar,
    ComponentExample,
  },
};
</script>
