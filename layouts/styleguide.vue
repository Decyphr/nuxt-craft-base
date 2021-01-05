<template>
  <div>
    <hello-bar-sg />
    <div class="overlay"><div class="overlay-container"></div></div>

    <page-header-sg />

    <aside class="off-canvas-slidebar">
      <off-canvas-sg />
    </aside>

    <main class="page-main" id="content">
      <section>
        <Nuxt />
      </section>
    </main>

    <page-footer-sg />
  </div>
</template>
<script>
import HelloBarSG from "~/components/styleguide/HelloBarSG.vue";
import OffCanvasSG from "~/components/styleguide/OffCanvasSG.vue";
import PageFooterSG from "~/components/styleguide/PageFooterSG.vue";
import PageHeaderSG from "~/components/styleguide/PageHeaderSG.vue";
export default {
  components: { OffCanvasSG, HelloBarSG, PageHeaderSG, PageFooterSG },
};
</script>
