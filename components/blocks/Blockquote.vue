<template>
  <blockquote :class="`block-blockquote position-${position}`">
    <p>
      A block quotation (also known as a long quotation or extract) is a
      quotation in a written document, that is set off from the main text as a
      paragraph, or block of text, and typically distinguished visually using
      indentation and a different typeface or smaller size quotation.
    </p>
  </blockquote>
</template>

<script>
export default {
  name: "Blockquote",
  props: {
    position: {
      type: String,
      default: "full",
      required: false,
    },
  },
};
</script>
