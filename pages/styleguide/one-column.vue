<template>
  <div class="interior">
    <section class="interior-hero">
      <picture class="responsive-bg-image">
        <source
          media="(min-width: 801px) and (max-width: 1200px)"
          data-srcset="https://placehold.it/1200x350"
        />
        <source
          media="(min-width: 1201px)"
          data-srcset="https://placehold.it/1920x350"
        />
        <img
          data-src="https://placehold.it/750x250"
          alt=""
          class="lazyload"
          style="width: auto"
        />
      </picture>
      <div class="container">
        <h1>H1 Headline Goes Here</h1>
      </div>
    </section>

    <div class="interior-container container one-column">
      <breadcrumbs-sg />
      <div class="interior-content-container">
        <div class="block-video position-right">
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rPq69-2dijI"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>

        <div class="block-content">
          <h2>H2 lorem ipsum dolor sit ame nsect etur adipi sicing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing
            elit, <strong>strong</strong> text sed do eiusmod emphasized text
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut text link unde hover iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
          <h3>H3 lorem ipsum dolor sit ame nsect etur adipi sicing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <rich-content-block-sg />
        <rich-content-block-sg classes="dark-bg inverse-order" />
        <rich-content-block-sg classes="non-image-block" button="button" />

        <div class="block-video position-left">
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rPq69-2dijI"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>

        <featured-callout-content-sg />
        <featured-callout-content-sg classes="dark-bg" />

        <div class="block-content">
          <h4>H4 lorem ipsum dolor sit ame nsect etur adipi sicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h5>
            H5 lorem ipsum dolor sit amet con sect etur adipi sicing sed cmo
            oodo ut labora elit
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <ul>
            <li>Nisi ut aliquip ex ea commodo consequat.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>Nisi ut aliquip ex ea commodo consequat.</li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <ol>
            <li>Nisi ut aliquip ex ea commodo consequat.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>Nisi ut aliquip ex ea commodo consequat.</li>
          </ol>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="block-video position-full">
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rPq69-2dijI"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>

        <download-callout-sg />

        <p>
          <a href="#" class="callout-link"
            >Callout Link
            <span class="fa fa-angle-double-right" aria-hidden="true"></span
          ></a>
        </p>

        <blockquote-sg />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div class="block-child-pages">
          <child-page-sg />
          <child-page-sg />
        </div>

        <blockquote-sg position="left" />

        <div class="block-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.<br />
          </p>
        </div>

        <blockquote-sg position="right" />

        <div class="block-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <accordion-sg headline="Block Accordion Style With Some Longer Text" />
        <accordion-sg />

        <div class="block-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <p><a class="btn btn-primary" href="#">Primary Button - Link</a></p>
        <p><a class="btn btn-secondary" href="#">Secondary Button - Link</a></p>

        <p>This is some custom html. <a href="#">Click Me</a></p>

        <captioned-image-sg image="https://placehold.it/1280x738/" />

        <div class="block-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <captioned-image-sg
          position="left"
          image="https://placehold.it/570x350/"
        />

        <div class="block-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <captioned-image-sg
          position="right"
          image="https://placehold.it/150x150/"
        />

        <div class="block-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <captioned-image-sg
          position="center"
          image="https://placehold.it/1280x620/"
        />

        <div class="block-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <pullquote-sg />

        <image-gallery-sg />

        <callout-block-sg />
        <callout-block-sg
          class="dark-bg"
          image="http://placehold.it/1200x400"
        />

        <h2>Contact Us</h2>
        <p>Please fill out the following form to contact us.</p>

        <!-- {% include 'styleguide/_includes/blocks/sampleForm' %} -->
        <sample-form-sg />

        <div class="block-child-pages">
          <child-page-sg />
          <child-page-sg />
          <child-page-sg />
          <child-page-sg />
          <child-page-sg />
        </div>

        <div class="block-disclaimer">
          <p>
            Disclaimer text style: Special must be booked a minimum of two weeks
            from planned arrival date. Also, must include your telephone number
            so a theme can be discussed. Valid for 1, 2 or 3 bedroom condo,
            lakeview or lakefront. Valid Fall-Spring.
          </p>
        </div>

        <pagination-sg />

        <div class="block-content">
          <table>
            <thead>
              <tr>
                <th>Table Heading 1</th>
                <th>Table Heading 2</th>
                <th>Table Heading 3</th>
                <th>Table Heading 4</th>
                <th>Table Heading 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
              <tr>
                <td>Table Cell 1</td>
                <td>Table Cell 2</td>
                <td>Table Cell 3</td>
                <td>Table Cell 4</td>
                <td>Table Cell 5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br /><br />

        <h2>Search Results</h2>

        <div class="search-listing">
          <search-item-sg />
          <search-item-sg />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AccordionSG from "~/components/styleguide/blocks/AccordionSG.vue";
import BlockquoteSG from "~/components/styleguide/blocks/BlockquoteSG.vue";
import CaptionedImageSG from "~/components/styleguide/blocks/CaptionedImageSG.vue";
import ChildPageSG from "~/components/styleguide/blocks/ChildPageSG.vue";
import DownloadCalloutSG from "~/components/styleguide/blocks/DownloadCalloutSG.vue";
import FeaturedCalloutContentSG from "~/components/styleguide/blocks/FeaturedCalloutContentSG.vue";
import RichContentBlockSG from "~/components/styleguide/blocks/RichContentBlockSG";
import PaginationSG from "~/components/styleguide/PaginationSG";
import SearchItemSG from "~/components/styleguide/SearchItemSG";
import PullquoteSG from "~/components/styleguide/blocks/PullquoteSG";
import ImageGallerySG from "~/components/styleguide/blocks/ImageGallerySG.vue";
import SampleFormSG from "~/components/styleguide/blocks/SampleFormSG.vue";

export default {
  components: {
    SearchItemSG,
    ChildPageSG,
    PaginationSG,
    RichContentBlockSG,
    FeaturedCalloutContentSG,
    BlockquoteSG,
    AccordionSG,
    ChildPageSG,
    CaptionedImageSG,
    DownloadCalloutSG,
    PullquoteSG,
    ImageGallerySG,
    SampleFormSG,
  },
  layout: "styleguide",
};
</script>
