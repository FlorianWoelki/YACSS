<template>
  <section id="tables">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a
          class="font-bold"
          href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/table.scss"
          target="_blank"
          >#</a
        >
        Table
      </h1>
      <p>
        Tables are there to display data. Just use the default HTML elements for your table and
        yacss will take care of the styling.
      </p>

      <ComponentExample title="Basic Table">
        <template #description> </template>
        <template #preview>
          <table class="table">
            <span class="spacer"></span>
            <tr>
              <span class="spacer"></span>
              <th>Some Header</th>
              <th>Some Header</th>
              <th>Some Header</th>
            </tr>
            <tr>
              <span class="spacer"></span>
              <td>Some Data</td>
              <td>Some Data</td>
              <td>Some Data</td>
            </tr>
            <tr>
              <span class="spacer"></span>
              <td>Some Data</td>
              <td>Some Data</td>
              <td>Some Data</td>
            </tr>
          </table>
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
