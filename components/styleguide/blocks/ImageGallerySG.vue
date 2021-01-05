<template>
  <div class="block-gallery">
    <header>
      <h2>My Sample Gallery</h2>

      <p>This is going to be a great gallery.</p>
    </header>

    <div class="carousel" ref="flickity">
      <image-gallery-image-sg class="carousel-cell" />
      <image-gallery-image-sg class="carousel-cell" />
      <image-gallery-image-sg class="carousel-cell" />
      <image-gallery-image-sg class="carousel-cell" />
      <image-gallery-image-sg class="carousel-cell" />
      <image-gallery-image-sg class="carousel-cell" />
    </div>
  </div>
</template>

<script>
import ImageGalleryImageSG from "./ImageGalleryImageSG.vue";

export default {
  name: "ImageGallerySG",
  components: {
    ImageGalleryImageSG,
  },

  date() {
    return {};
  },
};
</script>
