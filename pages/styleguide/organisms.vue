<template>
  <div>
    <h1 class="sg-container">Organisms</h1>

    <div class="sg-element">
      <a name="page-header-full"></a>
      <div class="sg-container">
        <h2 class="sg-subheading">Full Page Header</h2>
      </div>
      <page-header-full-sg />
    </div>

    <div class="sg-element">
      <a name="page-header-compact"></a>
      <div class="sg-container">
        <h2 class="sg-subheading">Compact Page Header</h2>

        <page-header-compact-sg />
      </div>
    </div>

    <div class="sg-element">
      <a name="hero"></a>
      <div class="sg-container">
        <h2 class="sg-subheading">Hero</h2>
      </div>
      <homepage-hero-sg />
    </div>

    <div class="sg-element">
      <div class="sg-container">
        <h2 class="sg-subheading">Homepage Callouts</h2>
        <homepage-callout-item-sg />
      </div>
    </div>

    <div class="sg-element">
      <a name="footer-contact"></a>
      <div class="sg-container">
        <h2 class="sg-subheading">Footer Navigation</h2>
      </div>
      <footer-navigation-sg />
    </div>

    <div class="sg-element">
      <a name="footer-bottom"></a>
      <div class="sg-container">
        <h2 class="sg-subheading">Footer Bottom</h2>
      </div>
      <footer-bottom-sg />
    </div>
  </div>
</template>
<script>
import FooterBottomSG from "~/components/styleguide/FooterBottomSG";
import FooterNavigationSG from "~/components/styleguide/FooterNavigationSG";
import HomepageCalloutItemSG from "~/components/styleguide/HomepageCalloutItemSG";
import HomepageHeroSG from "~/components/styleguide/HomepageHeroSG";
import NavFooterBottomSG from "~/components/styleguide/NavFooterBottomSG";
import PageHeaderCompactSG from "~/components/styleguide/PageHeaderCompactSG";
import PageHeaderFullSG from "~/components/styleguide/PageHeaderFullSG";

export default {
  components: {
    PageHeaderFullSG,
    PageHeaderCompactSG,
    HomepageHeroSG,
    HomepageCalloutItemSG,
    NavFooterBottomSG,
    FooterBottomSG,
    FooterNavigationSG,
  },
  layout: "styleguide",
};
</script>
