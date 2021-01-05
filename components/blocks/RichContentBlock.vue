<template>
  <section class="block-rich-content {{ classes }}">
    <div class="block-rich-content-area">
      <h3>A rich content block</h3>
      <p>
        Feeling fancy? It’s really up to you. You’re in control. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
      <a v-show="!form && !button" class="btn btn-secondary" href=""
        >Optional Button</a
      >
    </div>
    <div class="block-rich-content-change">
      <SampleForm v-show="form" />

      <a v-show="button" href="#" class="btn btn-secondary">Button Text Here</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "RichContentBlock",
  props: {
    classes: { type: String, default: "", required: false },
    form: { type: String, default: "", required: false },
    button: { type: String, default: "", required: false },
  },
};
</script>
