<template>
  <figure :class="`block-image position-${position}`">
    <a href="#">
      <picture v-if="position === 'full'">
        <source
          media="(min-width: 751px)"
          data-srcset="https://placehold.it/1280x738"
        />
        <img data-src="https://placehold.it/750x320" alt="" class="lazyload" />
      </picture>
      <img v-else :src="image" alt="" />
    </a>

    <figcaption>
      <a href="#" class="trigger"></a>

      <div class="caption">My sample caption</div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "CaptionedImage",
  props: {
    position: { type: String, default: "full", required: false },
    image: {
      type: String,
      default: "https://placehold.it/870x420/",
      required: false,
    },
  },
};
</script>
