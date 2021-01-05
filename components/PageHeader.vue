<template>
  <header class="page-header" data-canvas>
    <div class="skip-link"><a href="#content">Skip to Content</a></div>
    <page-header-full />
    <page-header-compact />
  </header>
</template>

<script>
import PageHeaderCompact from "./PageHeaderCompact.vue";
import PageHeaderFull from "./styleguide/PageHeaderFull.vue";
export default {
  components: { PageHeaderCompact, PageHeaderFull },
  name: "PageHeader",
};
</script>
