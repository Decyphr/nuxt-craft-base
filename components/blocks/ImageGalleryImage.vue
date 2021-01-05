<template>
  <div class="carousel-cell">
    <figure class="block-image position-full">
      <img
        data-flickity-lazyload-srcset="
        https://placehold.it/960x431 960w,
        https://placehold.it/600x263 600w"
        sizes="(min-width: 850px) 960w, 600w"
        data-flickity-lazyload-src="https://placehold.it/600x263"
        alt=""
      />
      <figcaption>Sample Caption</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "ImageGalleryImage",
};
</script>
