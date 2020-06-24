<template>
  <section id="forms">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a
          class="font-bold"
          href="https://github.com/FlorianWoelki/YACSS/blob/master/src/forms.scss"
          target="_blank"
          >#</a
        >
        Forms
      </h1>
      <p>
        Pretty much every single form component is prestyled by YACSS. Furthermore, you can adjust
        your custom style for every single form element.
      </p>

      <ComponentExample title="Simple Input Fields">
        <template #description>
          The most used form element is the input field. By default it has a selected border color,
          which will be your selected primary color.
        </template>
        <template #preview>
          <input type="text" />
        </template>
      </ComponentExample>

      <ComponentExample title="Input Fields with icons">
        <template #description>
          You can simply add a icon to your input field by defining a <kbd>span</kbd> element with
          an <kbd>icon</kbd> class.
        </template>
        <template #preview>
          <div class="input-control">
            <span class="spacer"></span>
            <input type="text" class="input-contains-icon" /><span class="spacer"></span>
            <span class="icon"
              ><span class="spacer"></span>
              <i class="fas fa-user"></i>
            </span>
          </div>
        </template>
      </ComponentExample>

      <ComponentExample title="Input field with label">
        <template #description> You can add a <kbd>label</kbd> element. </template>
        <template #preview>
          <div class="input-control">
            <span class="spacer"></span>
            <label>Username</label>
            <input type="text" /><span class="spacer"></span>
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
  name: 'Buttons',
  components: {
    Navbar,
    ComponentExample,
  },
};
</script>
