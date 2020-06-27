<template>
  <nav :class="`nav-fixed ${scrollTop > 150 ? '' : 'nav-clear'}`">
    <div class="nav-brand align-center">
      <div class="b-hover-none nav-item">
        <a href="#">
          <h5 class="font-bold">YACSS</h5>
        </a>
      </div>
      <div class="nav-item nav-btn" id="nav-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="nav-content">
      <div class="nav-item">
        <a href="#">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="nav-item">
        <a href="#">
          <i class="fab fa-npm"></i>
        </a>
      </div>
      <div class="nav-right">
        <div class="nav-item b-hover-none">
          <a
            href="#/guides"
            class="font-14 bg-red-600 text-white b-radius-reg pl-1 pr-1 bg-hover-red-700"
          >
            Go to guides
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      scrollTop: 0,
    };
  },
  mounted() {
    document.addEventListener('scroll', () => {
      this.scrollTop = document.documentElement.scrollTop;
    });
  },
};
</script>
