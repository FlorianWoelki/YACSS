<template>
  <div class="component-example">
    <h3 class="mt-3">{{ title }}</h3>
    <p>
      <slot name="description"></slot>
    </p>
    <div class="row align-center mt-1">
      <div :class="`col-${columnLeft}`">
        <slot name="preview"></slot>
      </div>
      <div :class="`col-${columnRight}`">
        <pre>
          <code v-escape class="html" data-lang="Html">
<slot name="preview"></slot>
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columnRight: {
      type: String,
      default: '8',
    },
    columnLeft: {
      type: String,
      default: '4',
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
