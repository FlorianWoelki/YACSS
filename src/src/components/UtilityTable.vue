<template>
  <div class="utility-table">
    <h3 class="mt-3">{{ title }}</h3>
    <p>
      <slot name="description"></slot>
    </p>
    <table class="table">
      <tr>
        <th>class</th>
        <th>description</th>
      </tr>
      <slot />
    </table>
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
