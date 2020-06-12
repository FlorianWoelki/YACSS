<template>
  <div class="home">
    <Navbar />
    <div
      class="hero fullscreen hero-img"
      data-image="https://images.unsplash.com/photo-1549321495-305eb13f8aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    >
      <div class="hero-body">
        <div class="container text-center">
          <h3 class="text-light">Utility and component framework</h3>
          <h1 class="font-72">YACSS</h1>
          <h5>v.0.1.0 ~65kb</h5>
          <button
            class="btn-secondary center mt-3 text-gray-100
              bc-gray-100 bg-hover-gray-100 text-hover-black"
          >
            Getting Started
          </button>
        </div>
      </div>
    </div>

    <div class="container mt-6">
      <h5 class="uppercase text-center">
        created by <span class="text-red-600">Florian Woelki</span>
      </h5>
      <h5 class="text-center font-light mt-3">
        YACSS is another <b>responsive</b> and <b>beautiful</b> designed CSS framework
        with the twist that it has a lot of <b>utility</b> and <b>prestyled components</b>.
      </h5>

      <div class="mt-6">
        <h2>
          <a href="colors" class="text-indigo-700">#</a>
          Colors
        </h2>
        <h5 class="font-light">
          You can use beautiful chosen colors to customize every single element and component.
        </h5>
        <div class="row p-0 m-0">
          <div class="col-4 p-0 pr-1">
            <ColorPreview name="purple" />
          </div>
          <div class="col-4 p-0 pr-1">
            <ColorPreview name="green" />
          </div>
          <div class="col-4 p-0 pr-1">
            <ColorPreview name="gray" />
          </div>
        </div>
        <div class="row p-0 mt-1">
          <div class="col-4 p-0 pr-1">
            <ColorPreview name="blue" />
          </div>
          <div class="col-4 p-0 pr-1">
            <ColorPreview name="red" />
          </div>
          <div class="col-4 p-0 pr-1">
            <ColorPreview name="indigo" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ColorPreview from '@/components/ColorPreview.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    ColorPreview,
  },
};
</script>
