<template>
  <section id="code">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a
          class="font-bold"
          href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/code.scss"
          target="_blank"
          >#</a
        >
        Code
      </h1>
      <p>
        You can simply use the code component to display code in your way. Furthermore, you can
        display the language (or other text) in the top right corner of your code component.
      </p>

      <ComponentExample title="Basic Code Component">
        <template #description>
          The basic code component has a simple primary color border color.
        </template>
        <template #preview>
          <pre>
            <code data-lang="JavaScript">
console.log('Hello World');
            </code>
          </pre>
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
