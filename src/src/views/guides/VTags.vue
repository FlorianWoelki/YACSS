<template>
  <section id="tags">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a
          class="font-bold"
          href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/tags.scss"
          target="_blank"
          >#</a
        >
        Tags
      </h1>
      <p>
        Tags are beautiful ways to display information quick and beautiful. You can use 3 different
        sizes and 2 different styles. Furthermore, you can containerize you tags easily with the
        <kbd>tag-container</kbd>
        class.
      </p>

      <ComponentExample title="Default Tags">
        <template #description>
          The default tag has a light gray background color and a darker text color. You can
          customize these styles easily with our utility classes.
        </template>
        <template #preview>
          <div class="tag">Default Tag</div>
        </template>
      </ComponentExample>

      <ComponentExample title="Tag Styles">
        <template #description>
          You can add a <kbd>tag-rounded</kbd> class to round the tag.
        </template>
        <template #preview>
          <div class="tag mr-2">Default Tag</div>
          <div class="tag tag-rounded">Rounded Tag</div>
        </template>
      </ComponentExample>

      <ComponentExample title="Tag Sizes">
        <template #description>
          There are 3 different sizes. The default one is the smallest
        </template>
        <template #preview>
          <div class="tag">Default Tag</div>
          <div class="tag tag-lg">LG Tag</div>
          <div class="tag tag-xl">XL Tag</div>
        </template>
      </ComponentExample>

      <ComponentExample title="Tag Customization">
        <template #description>
          Easily adjust the background and text color of your tag. We suggest that you use
          <kbd>.text-{color}-900</kbd> for the text color and <kbd>bg-{color}-200</kbd> for the
          background color.
        </template>
        <template #preview>
          <div class="tag bg-red-200 text-red-900">Red Tag</div>
          <div class="tag bg-green-200 text-green-900">Green Tag</div>
          <div class="tag bg-blue-200 text-blue-900">Blue Tag</div>
        </template>
      </ComponentExample>

      <ComponentExample title="Tag Container">
        <template #description>
          You can add a <kbd>tag-container</kbd> for grouping flexbililty.
        </template>
        <template #preview>
          <div class="tag-container">
            <span class="spacer"></span>
            <div class="tag bg-red-200 text-red-900">Normal</div>
            <div class="tag bg-green-200 text-green-900">Container</div>
          </div>
          <span class="spacer"></span>
          <div class="tag-container group-tags">
            <span class="spacer"></span>
            <div class="tag bg-red-200 text-red-900">Group</div>
            <div class="tag bg-green-200 text-green-900">Tags</div>
          </div>
          <span class="spacer"></span>
          <div class="tag-container group-tags tag-container-pilled">
            <span class="spacer"></span>
            <div class="tag bg-red-200 text-red-900">Rounded Group</div>
            <div class="tag bg-green-200 text-green-900">Tags</div>
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
