<template>
  <section id="tabs">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a
          class="font-bold"
          href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/tabs.scss"
          target="_blank"
          >#</a
        >
        Tabs
      </h1>
      <p>
        Use tabs for a displaying a simple tabbar. Furthermore, you can customize the colors as
        always. You will use the <kbd>tab-container</kbd> class and the <kbd>ul</kbd> and
        <kbd>li</kbd> html elements for a tabbar.
      </p>

      <ComponentExample title="Default Tabs">
        <template #description>
          The default tabs will have your selected <kbd>primary color</kbd> as a text and border
          color. You can add the <kbd>selected</kbd> class to a <kbd>li</kbd> tag to mark it as a
          selected tab.
        </template>
        <template #preview>
          <div class="tab-container">
            <span class="spacer"></span>
            <ul>
              <span class="spacer"></span>
              <li class="selected">
                <a href="#">Tab 1</a>
              </li>
              <li>
                <a href="#">Tab 2</a>
              </li>
              <li>
                <a href="#">Tab 3</a>
              </li>
            </ul>
          </div>
        </template>
      </ComponentExample>

      <ComponentExample title="Tabs Styles">
        <template #description>
          There are 4 different tabs styles. You can use the default one, <kbd>tabs-center</kbd> to
          center the tabs in the tab container, <kbd>tabs-right</kbd> to right align the tabs in the
          tab container and <kbd>tabs-fill</kbd> to fill the tabs in the tab container.
        </template>
        <template #preview>
          <div class="tab-container">
            <span class="spacer"></span>
            <ul class="tabs-center">
              <span class="spacer"></span>
              <li class="selected">
                <a href="#">Tab 1</a>
              </li>
              <li>
                <a href="#">Tab 2</a>
              </li>
              <li>
                <a href="#">Tab 3</a>
              </li>
            </ul>
          </div>
          <span class="spacer"></span>
          <div class="tab-container">
            <span class="spacer"></span>
            <ul class="tabs-right">
              <span class="spacer"></span>
              <li class="selected">
                <a href="#">Tab 1</a>
              </li>
              <li>
                <a href="#">Tab 2</a>
              </li>
              <li>
                <a href="#">Tab 3</a>
              </li>
            </ul>
          </div>
          <span class="spacer"></span>
          <div class="tab-container">
            <span class="spacer"></span>
            <ul class="tabs-fill">
              <span class="spacer"></span>
              <li class="selected">
                <a href="#">Tab 1</a>
              </li>
              <li>
                <a href="#">Tab 2</a>
              </li>
              <li>
                <a href="#">Tab 3</a>
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
