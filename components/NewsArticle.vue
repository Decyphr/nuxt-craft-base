<template>
  <article class="news-list-article">
    <figure v-if="image">
      <img src="{{ image }}" alt="" />
    </figure>

    <div class="news-content">
      <h3>News Article Title Lorem Ipsum Dolor Sit Amet</h3>

      <p class="post-date">
        <time>October 1, 2017</time> |
        <span class="posted-category"
          >Posted in: <a href="#">News Releases</a></span
        >
      </p>

      <p class="news-list-excerpt">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet.
      </p>

      <p>
        <a
          class="callout-link callout-link-primary"
          href="#"
          aria-label="Read more about title of article"
          >Read More
          <span class="fa fa-arrow-circle-o-right" aria-hidden="true"></span
        ></a>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "NewsArticle",
  props: {
    image: { type: String, required: false },
  },
};
</script>
