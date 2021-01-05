<template>
  <div class="page-header-compact">
    <div class="page-header-compact-container">
      <div class="header-nav-compact">
        <a class="logo" :href="siteUrl">
          <img src="https://placehold.it/200x75" alt="" />
        </a>
        <button
          class="off-canvas-trigger"
          :class="{ open: isOpen }"
          aria-label="Show Menu"
          aria-expanded="false"
          @click="toggleOpen"
        >
          <span class="fa fa-bars">X</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeaderCompactSG",
  data() {
    return {
      isOpen: false,
      siteUrl: "#",
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
