<template>
  <section :class="['block-featured', classes]">
    <div class="block-featured-container">
      <div class="block-featured-intro">
        <h2>Features Block</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div class="block-featured-content">
        <FeaturedCalloutItemSG />
        <FeaturedCalloutItemSG />
        <FeaturedCalloutItemSG />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedCalloutContentSG",
  props: {
    classes: { type: String, required: false },
  },
};
</script>
