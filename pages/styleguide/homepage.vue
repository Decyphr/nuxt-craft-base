<template>
  <div>
    <homepage-hero-sg />

    <section>
      <div class="container">
        <homepage-callout-item-sg />
      </div>
    </section>
  </div>
</template>
<script>
import HomepageCalloutItemSG from "~/components/styleguide/HomepageCalloutItemSG.vue";
import HomepageHeroSG from "~/components/styleguide/HomepageHeroSG.vue";
export default {
  components: { HomepageHeroSG, HomepageCalloutItemSG },
  layout: "styleguide",
};
</script>
