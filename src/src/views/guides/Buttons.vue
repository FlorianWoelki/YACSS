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

      <h3 class="mt-3">Button Types</h3>
      <p>
        There are different button types for styling your Webapp.
        We have <kbd>primary</kbd> buttons for displaying important action buttons
        and <kbd>secondary</kbd> buttons for displaying minor actions. Furthermore,
        we have <kbd>tertiary</kbd> buttons for link buttons.
      </p>
      <div class="row align-center">
        <div class="col-4">
          <button class="mb-1">Primary Button</button>
          <button class="mb-1 btn-secondary">Secondary Button</button>
          <button class="mb-1 btn-tertiary">Tertiary Button</button>
        </div>
        <div class="col-8">
          <pre>
            <code class="html" data-lang="Html">
  <button>Primary Button</button>
  <button class="btn-secondary">Secondary Button</button>
  <button class="btn-tertiary">Tertiary Button</button>
            </code>
          </pre>
        </div>
      </div>

      <h3 class="mt-3">Button Styles</h3>
      <p>
        You can use our background and color utility classes to easily customize your buttons.
      </p>
      <div class="row align-center">
        <div class="col-4">
          <button class="mb-1 bg-purple-600 bc-purple-600">Purple Button</button>
          <button
            class="mb-1 btn-secondary text-purple-600
              text-hover-white bc-purple-400 bg-hover-purple-600"
          >Purple Button</button>
          <button
            class="mb-1 btn-tertiary text-purple-600 text-hover-purple-700"
          >Purple Button</button>
        </div>
        <div class="col-8">
          <pre>
            <code class="html" data-lang="Html">
<button class="bg-purple-600 bc-purple-600">Purple Button</button>
<!-- eslint-disable-next-line -->
<button class="btn-secondary text-purple-600 text-hover-white bc-purple-400 bg-hover-purple-600">Purple Button</button>
<button class="btn-tertiary text-purple-600 text-hover-purple-700">Purple Button</button>
            </code>
          </pre>
        </div>
      </div>

      <h3 class="mt-3">Button Loading Animation</h3>
      <p>
        You can add this small loading animation for every element. But it's special for buttons.
      </p>
      <div class="row align-center">
        <div class="col-4">
          <button class="mb-1 animated loading loading-left">Button</button>
          <button class="mb-1 animated loading loading-right">Button</button>
        </div>
        <div class="col-8">
          <pre>
            <code class="html" data-lang="Html">
  <button class="animated loading loading-left">Button</button>
  <button class="animated loading loading-right">Button</button>
            </code>
          </pre>
        </div>
      </div>

      <h3 class="mt-3">Different Sizes</h3>
      <p>
        There are different sizes for buttons. The default size is the used above.
      </p>
      <div class="row align-center">
        <div class="col-4">
          <button class="mb-1 btn-xs">xs</button>
          <button class="mb-1 btn-sm">sm</button>
          <button class="mb-1 btn-lg">lg</button>
          <button class="mb-1 btn-xl">xl</button>
        </div>
        <div class="col-8">
          <pre>
            <code class="html" data-lang="Html">
  <button class="mb-1 btn-xs">xs</button>
  <button class="mb-1 btn-sm">sm</button>
  <button class="mb-1 btn-lg">lg</button>
  <button class="mb-1 btn-xl">xl</button>
            </code>
          </pre>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Buttons',
  components: {
    Navbar,
  },
};
</script>
