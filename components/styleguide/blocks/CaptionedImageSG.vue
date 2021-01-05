<template>
  <figure :class="`block-image position-${position}`">
    <img :src="image" alt="" class="lazyload" />

    <figcaption>
      <button
        class="trigger"
        :class="{ open: showCaption }"
        @click="toggleCaption"
      ></button>

      <div class="caption">My sample caption</div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "CaptionedImageSG",
  props: {
    position: { type: String, default: "full", required: false },
    image: {
      type: String,
      default: "https://placehold.it/870x420/",
      required: false,
    },
  },

  data() {
    return {
      showCaption: false,
    };
  },

  methods: {
    toggleCaption() {
      this.showCaption = !this.showCaption;
    },
  },
};
</script>
