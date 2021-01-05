<template>
  <div class="sg-container">
    <h1>Molecules</h1>

    <div class="sg-element">
      <a name="accordions"></a>
      <h2 class="sg-subheading">Accordions</h2>

      <accordion-sg headline="Block Accordion Style With Some Longer Text" />
      <accordion-sg />
    </div>

    <div class="sg-element">
      <a name="pullquotes"></a>
      <h2 class="sg-subheading">Pullquotes</h2>
      <pullquote-sg position="full" />
      <pullquote-sg position="left" />
      <pullquote-sg position="right" />
    </div>

    <div class="sg-element">
      <a name="captioned-images"></a>
      <h2 class="sg-subheading">Captioned Images</h2>
      <captioned-image-sg
        position="full"
        image="https://placehold.it/1280x620/"
      />
      <captioned-image-sg
        position="left"
        image="https://placehold.it/420x420/"
      />
      <captioned-image-sg
        position="right"
        image="https://placehold.it/420x420/"
      />
    </div>

    <div class="sg-element">
      <h2 class="sg-subheading">News Byline</h2>
      <news-by-line-sg />
    </div>

    <div class="sg-element">
      <a name="news-list"></a>
      <h2 class="sg-subheading">News List</h2>

      <div class="news-list">
        <news-article-sg image="https://placehold.it/255x255" />
        <news-article-sg />
      </div>
    </div>

    <div class="sg-element">
      <a name="block-callout"></a>
      <h2 class="sg-subheading">Callout</h2>

      <callout-block-sg image="https://placehold.it/1200x255" />
      <callout-block-sg />
    </div>

    <div class="sg-element">
      <a name="download-callout"></a>
      <h2 class="sg-subheading">Download Callout</h2>

      <download-callout-sg />
      <download-callout-sg />
    </div>

    <div class="sg-element">
      <a name="image-gallery"></a>
      <h2 class="sg-subheading">Image Gallery</h2>

      <image-gallery-sg />
    </div>

    <div class="sg-element">
      <a name="child-pages"></a>
      <h2 class="sg-subheading">Child Pages</h2>

      <div class="block-child-pages">
        <child-page-sg />
        <child-page-sg />
        <child-page-sg />
      </div>
    </div>

    <div class="sg-element">
      <a name="search-results"></a>
      <h2 class="sg-subheading">Search Results</h2>

      <div class="search-listing">
        <search-item-sg />
        <search-item-sg />
      </div>
    </div>

    <div class="sg-element">
      <a name="pagination"></a>
      <h2 class="sg-subheading">Pagination</h2>

      <pagination-sg />
    </div>

    <div class="sg-element">
      <a name="nav-footer"></a>
      <h2 class="sg-subheading">Footer Nav</h2>

      <nav class="footer-nav-primary">
        <ul>
          <!-- {% include '_includes/nav/core' with {showChildren: false} %} -->
        </ul>
      </nav>
    </div>

    <div class="sg-element sg-dark-bg">
      <a name="nav-footer-bottom"></a>
      <h2 class="sg-subheading">Nav Footer Bottom</h2>

      <nav-footer-bottom-sg />
    </div>

    <div class="sg-element">
      <a name="nav-aux"></a>
      <h2 class="sg-subheading">Aux Nav</h2>

      <nav class="header-nav-aux">
        <!-- {% include '_includes/nav/aux' %} -->
      </nav>
    </div>

    <div class="sg-element">
      <h2 class="sg-subheading">Mobile Primary Nav</h2>
      <page-header-compact-sg />
    </div>

    <div class="sg-element">
      <h2 class="sg-subheading">Breadcrumb Nav</h2>

      <breadcrumbs-sg />
    </div>

    <div class="sg-element">
      <h2 class="sg-subheading">Search Form</h2>
      <search-form />
    </div>

    <div class="sg-element">
      <a name="nav-primary"></a>
      <h2 class="sg-subheading">Primary Nav</h2>

      <nav class="header-nav-primary">
        <a class="logo" href="/">
          <img src="https://placehold.it/200x75" alt="" />
        </a>
        <ul>
          <!-- {% include '_includes/nav/core' with {showChildren: true} %} -->
        </ul>
      </nav>
    </div>

    <div class="sg-element">
      <a name="homepage-callout"></a>
      <h2 class="sg-subheading">Homepage Callout</h2>
      <homepage-callout-item-sg />
    </div>
  </div>
</template>
<script>
import AccordionSG from "~/components/styleguide/blocks/AccordionSG.vue";
import CalloutBlockSG from "~/components/styleguide/blocks/CalloutBlockSG.vue";
import CaptionedImageSG from "~/components/styleguide/blocks/CaptionedImageSG.vue";
import ChildPageSG from "~/components/styleguide/blocks/ChildPageSG";
import DownloadCalloutSG from "~/components/styleguide/blocks/DownloadCalloutSG";
import ImageGallerySG from "~/components/styleguide/blocks/ImageGallerySG";
import PullquoteSG from "~/components/styleguide/blocks/PullquoteSG";
import BreadcrumbsSG from "~/components/styleguide/BreadcrumbsSG";
import HomepageCalloutItemSG from "~/components/styleguide/HomepageCalloutItemSG";
import NewsArticleSG from "~/components/styleguide/NewsArticleSG";
import NewsByLineSG from "~/components/styleguide/NewsByLineSG";
import PageHeaderCompactSG from "~/components/styleguide/PageHeaderCompactSG";
import PaginationSG from "~/components/styleguide/PaginationSG";
import SearchItemSG from "~/components/styleguide/SearchItemSG";

export default {
  components: {
    AccordionSG,
    PullquoteSG,
    CaptionedImageSG,
    NewsByLineSG,
    NewsArticleSG,
    CalloutBlockSG,
    DownloadCalloutSG,
    ImageGallerySG,
    ChildPageSG,
    SearchItemSG,
    PaginationSG,
    PageHeaderCompactSG,
    BreadcrumbsSG,
    HomepageCalloutItemSG,
  },
  layout: "styleguide",
};
</script>
