<template>
  <div class="block-accordion">
    <h3 class="accordion-toggle">
      <button aria-label="{{ headline }}: Learn More" aria-expanded="false">
        {{ headline }}
      </button>
    </h3>
    <div class="accordion-content">
      <p>
        Excerpt style voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat. Voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
      </p>

      <p>
        Excepteur sint occaecat cupidatat. Voluptate velit esse cillum dolore eu
        fugiat nulla pariatur.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    headline: {
      type: String,
      default: "Test Accordion Title",
      required: false,
    },
  },
};
</script>
