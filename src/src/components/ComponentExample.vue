<template>
  <div class="component-example">
    <h3 class="mt-3">{{ title }}</h3>
    <p>
      <slot name="description"></slot>
    </p>
    <div class="row align-center">
      <div class="col-4">
        <slot name="preview"></slot>
      </div>
      <div class="col-8">
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
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
