<template>
  <div class="color-preview">
    <h5 :class="`text-${name}-700`">{{ name }}</h5>
    <div
      v-for="cc in [100, 200, 300, 400, 500, 600, 700, 800, 900]"
      :key="cc"
      :class="`bg-${name}-${cc} p-1 text-center`"
    >
      <p :class="cc >= 500 ? 'text-white' : ''">
        .text-{{ name }}-{{ cc }}
      </p>
      <p :class="cc >= 500 ? 'text-white' : ''">
        .bg-{{ name }}-{{ cc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPreview',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
