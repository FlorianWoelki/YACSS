<template>
  <section id="avatars">
    <Navbar />
    <div class="container mt-8">
      <h1>
        <a class="font-bold" href="https://github.com/FlorianWoelki/YACSS/blob/master/src/components/alert.scss" target="_blank">#</a>
        Alerts
      </h1>
      <p>
        By default all alerts have the primary color as a color.
        If you want to customize your alerts, you can change the border,
        background and text color for your needs.
      </p>

      <ComponentExample title="Avatar Sizes">
        <template #description>
          You can use up to 5 different sizes for avatars.
        </template>
        <template #preview>
          <div class="avatar avatar-xs" data-text="FW"></div>
          <div class="avatar avatar-sm" data-text="FW"></div>
          <div class="avatar" data-text="FW"></div>
          <div class="avatar avatar-lg" data-text="FW"></div>
          <div class="avatar avatar-xl" data-text="FW"></div>
        </template>
      </ComponentExample>

      <ComponentExample title="Avatar Styles">
        <template #description>
          Like all YACSS components you can style all attributes of the avatar.
        </template>
        <template #preview>
          <div class="avatar bg-red-700" data-text="FW"></div>
          <div class="avatar bg-purple-700" data-text="FW"></div>
          <div class="avatar bg-blue-700" data-text="FW"></div>
          <div class="avatar bg-green-700" data-text="FW"></div>
        </template>
      </ComponentExample>

      <ComponentExample title="Avatar Images">
        <template #description>
          In addition to the colors, you can add images to the avatar and it will be
          a perfect match.
        </template>
        <template #preview>
          <div class="avatar avatar-xs">
            <img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&auto=format&fit=crop&w=256&h=256&q=60&cs=tinysrgb&crop=faces&bg=fff">
          </div>
          <div class="avatar">
            <img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&auto=format&fit=crop&w=256&h=256&q=60&cs=tinysrgb&crop=faces&bg=fff">
          </div>
          <div class="avatar avatar-xl">
            <img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&auto=format&fit=crop&w=256&h=256&q=60&cs=tinysrgb&crop=faces&bg=fff">
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
  components: {
    Navbar,
    ComponentExample,
  },
};
</script>
