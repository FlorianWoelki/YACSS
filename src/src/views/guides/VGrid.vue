<template>
  <section id="grid">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a
          class="font-bold"
          href="https://github.com/FlorianWoelki/YACSS/blob/master/src/grid.scss"
          target="_blank"
          >#</a
        >
        Grid
      </h1>
      <p>
        You can easily use our predefined grid to organise your website. Furthermore, you can
        control the flow of the elements on <kbd>small</kbd>, <kbd>mid</kbd> and
        <kbd>large</kbd> screens.
      </p>

      <h3 class="mt-3">12-grid-layout</h3>
      <p>You need to surround the columns with the <kbd>row</kbd> class.</p>
      <p>Col classes: <kbd>1-12</kbd></p>
      <p>Offset classes: <kbd>1-12</kbd></p>
      <div class="row mt-1">
        <div
          v-for="i in 12"
          :key="i"
          :class="`col-1 ${i % 2 === 0 ? 'bg-gray-200' : 'bg-gray-400'}`"
        >
          col-1
        </div>
      </div>
      <div class="row">
        <div class="col-4 bg-gray-200">col-4</div>
        <div class="col-8 bg-gray-400">col-8</div>
      </div>
      <div class="row">
        <div class="col-8 bg-gray-200">col-8</div>
        <div class="col-4 bg-gray-400">col-4</div>
      </div>
      <div class="row">
        <div class="col bg-gray-200">col</div>
        <div class="col bg-gray-400">col</div>
      </div>
      <div class="row">
        <div class="col-4 bg-gray-200">col-4</div>
        <div class="col-4 offset-4 bg-gray-400">col-4 offset-4</div>
      </div>
      <div class="row">
        <div class="col-4 offset-4 bg-gray-200">col-4 offset-4</div>
        <div class="col-4 bg-gray-400">col-4</div>
      </div>
      <div class="row">
        <div class="col-4 offset-left bg-gray-200">col-4 offset-left</div>
        <div class="col-4 bg-gray-400">col-4</div>
      </div>
      <div class="row">
        <div class="col-4 offset-right bg-gray-200">col-4 offset-right</div>
        <div class="col-4 bg-gray-400">col-4</div>
      </div>
      <div class="row">
        <div class="col-4 offset-center bg-gray-200">col-4 offset-center</div>
        <div class="col-4 bg-gray-400">col-4</div>
      </div>

      <h3 class="mt-3">Control the flow of the columns</h3>
      <p>
        You can control the flow of the columns with our utility classes:
        <kbd>.sm-pos-{position}</kbd>, <kbd>.md-pos-{position}</kbd> and
        <kbd>.lg-pos-{position}</kbd>
      </p>
      <p>Position: 0-12</p>
      <div class="row mt-1">
        <div class="col-6 sm-pos-0 md-pos-0 lg-pos-1 bg-gray-400">sm-pos-0 md-pos-0 lg-pos-1</div>
        <div class="col-6 sm-pos-1 md-pos-1 lg-pos-0 bg-gray-200">sm-pos-1 md-pos-1 lg-pos-0</div>
      </div>

      <h3 class="mt-3">Utility classes</h3>
      <div class="row mt-1 no-space">
        <div class="col-6 bg-gray-400">no-space row</div>
        <div class="col-6 bg-gray-200">no-space row</div>
      </div>
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
