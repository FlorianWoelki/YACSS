<template>
  <section id="dropdown">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a
          class="font-bold"
          href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/dropdown.scss"
          target="_blank"
          >#</a
        >
        Dropdown
      </h1>
      <p>
        You can use dropdown menus wherever you like. Using dropdown menus are really simple and
        dynamic as always.
      </p>

      <ComponentExample title="Default Dropdown">
        <template #description>
          To setup a simple dropdown menu, simply add a button or clickable element and add a
          <kbd>menu</kbd> for displaying the dropdown menu.
        </template>
        <template #preview>
          <div class="dropdown">
            <span class="spacer"></span>
            <button class="btn-dropdown">Dropdown Menu</button>
            <ul class="menu">
              <span class="spacer"></span>
              <li class="menu-item">
                <span class="spacer"></span>
                <a href="#">Menu Item 1</a>
              </li>
              <li class="menu-item">
                <span class="spacer"></span>
                <a href="#">Menu Item 2</a>
              </li>
            </ul>
          </div>
        </template>
      </ComponentExample>

      <ComponentExample title="Dropdown Position">
        <template #description>
          The default dropdown menu position is left aligned with the button. You can add the
          <kbd>dropdown-right</kbd> class to align right with the button.
        </template>
        <template #preview>
          <div class="dropdown dropdown-right">
            <span class="spacer"></span> <button class="btn-dropdown">Dropdown Menu</button
            ><span class="spacer"></span>
            <ul class="menu">
              <span class="spacer"></span>
              <li class="menu-item">
                <span class="spacer"></span>
                <a href="#">Menu Item 1</a>
              </li>
              <li class="menu-item">
                <span class="spacer"></span>
                <a href="#">Menu Item 2</a>
              </li>
            </ul>
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
