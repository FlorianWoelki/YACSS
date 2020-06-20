<template>
  <section id="pagination">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a
          class="font-bold"
          href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/pagination.scss"
          target="_blank"
          >#</a
        >
        Pagination
      </h1>
      <p>
        With the pagination component you can create a beautiful designed paginated component.
      </p>

      <ComponentExample title="Basic Pagination">
        <template #description> </template>
        <template #preview>
          <div class="pagination">
            <span class="spacer"></span>
            <div class="pagination-item" disabled>
              <a href="#">Prev</a>
            </div>
            <div class="pagination-item selected">
              <a href="#">0</a>
            </div>
            <div class="pagination-item">
              <a href="#">1</a>
            </div>
            <div class="pagination-item">
              <a href="#">Next</a>
            </div>
          </div>
        </template>
      </ComponentExample>

      <ComponentExample title="Pagination Styles">
        <template #description>
          You can add a <kbd>bordered-pagination</kbd> style or customize the pagination.
        </template>
        <template #preview>
          <div class="pagination pagination-bordered">
            <span class="spacer"></span>
            <div class="pagination-item" disabled>
              <a href="#">Prev</a>
            </div>
            <div class="pagination-item selected">
              <a href="#">0</a>
            </div>
            <div class="pagination-item">
              <a href="#">1</a>
            </div>
            <div class="pagination-item">
              <a href="#">Next</a>
            </div>
          </div>
          <span class="spacer"></span>
          <div class="pagination">
            <span class="spacer"></span>
            <div class="pagination-item" disabled>
              <a class="text-red-600" href="#">Prev</a>
            </div>
            <div class="pagination-item selected bg-red-600">
              <a href="#">0</a>
            </div>
            <div class="pagination-item">
              <a class="text-red-600" href="#">1</a>
            </div>
            <div class="pagination-item">
              <a class="text-red-600" href="#">Next</a>
            </div>
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
