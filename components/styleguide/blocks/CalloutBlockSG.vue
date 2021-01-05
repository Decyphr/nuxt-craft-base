<template>
  <div class="block-callout">
    <picture v-if="image" class="responsive-bg-image">
      <img
        :data-src="image"
        :src="image"
        alt=""
        class="lazyload"
        style="width: auto"
      />
    </picture>
    <video
      v-if="video"
      loop=""
      muted=""
      autoplay=""
      id="bg_video"
      :poster="image ? image : ''"
    >
      <source :src="video" type="video/mp4" />
    </video>
    <div class="block-callout-content">
      <h3>Generic Callout Block</h3>

      <div class="callout-excerpt">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.
      </div>

      <a class="btn btn-primary" href="#">Editable Button</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalloutBlockSG",
  props: {
    image: { type: String, required: false },
    video: { type: String, required: false },
  },
};
</script>
