<template>
  <blockquote :class="`block-pullquote position-${position}`">
    <p>
      A block quotation (also known as a long quotation or extract) is a
      quotation in a written document, that is set off from the main text as a
      paragraph, or block of text, and typically distinguished visually using
      indentation and a different typeface or smaller size quotation.
    </p>

    <cite>Fred Rogers</cite>
  </blockquote>
</template>

<script>
export default {
  name: "Pullquote",
  props: {
    position: { type: String, default: "full", required: false },
  },
};
</script>
