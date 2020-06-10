<template>
  <section id="buttons">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a class="font-bold" href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/button.scss" target="_blank">#</a>
        Buttons
      </h1>
      <p>
        By default buttons have the color of the specified accent color.
        It has <kbd>accent-color-600</kbd> for the background and for the
        text color it has <kbd>white</kbd> or <kbd>accent-color-600</kbd>.
      </p>

      <ComponentExample title="Button Types">
        <template #description>
          There are different button types for styling your Webapp.
          We have <kbd>primary</kbd> buttons for displaying important action buttons
          and <kbd>secondary</kbd> buttons for displaying minor actions. Furthermore,
          we have <kbd>tertiary</kbd> buttons for link buttons.
        </template>
        <template #preview>
          <button class="mb-1">Primary Button</button>
          <button class="mb-1 btn-secondary">Secondary Button</button>
          <button class="mb-1 btn-tertiary">Tertiary Button</button>
        </template>
      </ComponentExample>

      <ComponentExample title="Button Styles">
        <template #description>
          You can use our background and color utility classes to easily customize your buttons.
        </template>
        <template #preview>
          <button class="mb-1 bg-purple-600 bc-purple-600">Purple Button</button>
          <button
            class="mb-1 btn-secondary text-purple-600
              text-hover-white bc-purple-400 bg-hover-purple-600"
          >Purple Button</button>
          <button
            class="mb-1 btn-tertiary text-purple-600 text-hover-purple-700"
          >Purple Button</button>
        </template>
      </ComponentExample>

      <ComponentExample title="Button Loading Animation">
        <template #description>
          You can add this small loading animation for every element. But it's special for buttons.
        </template>
        <template #preview>
          <button class="mb-1 animated loading loading-left">Button</button>
          <button class="mb-1 animated loading loading-right">Button</button>
        </template>
      </ComponentExample>

      <ComponentExample title="Different Sizes">
        <template #description>
          There are different sizes for buttons. The default size is the used above.
        </template>
        <template #preview>
          <button class="mb-1 btn-xs">xs</button>
          <button class="mb-1 btn-sm">sm</button>
          <button class="mb-1 btn-lg">lg</button>
          <button class="mb-1 btn-xl">xl</button>
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
