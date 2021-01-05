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

    <div class="interior-container container">
      <section class="interior-content">
        <!-- {% include 'styleguide/_includes/breadcrumbs' %} -->
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
              Lorem ipsum dolor sit amet,
              <a href="#">consectetur</a> adipisicing elit,
              <strong>strong</strong> text sed do eiusmod emphasized text tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut text link unde hover iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <h3>H3 lorem ipsum dolor sit ame nsect etur adipi sicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <!-- {% include 'styleguide/_includes/blocks/richContentBlock' %} {%
          include 'styleguide/_includes/blocks/richContentBlock' with {
          'classes': 'dark-bg inverse-order' } %} {% include
          'styleguide/_includes/blocks/richContentBlock' with { 'classes':
          'non-image-block', 'button': 'button' } %} -->

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

          <!-- {% include 'styleguide/_includes/blocks/featuredCalloutContent' %} {%
          include 'styleguide/_includes/blocks/featuredCalloutContent' with {
          'classes': 'dark-bg' } %} -->

          <div class="block-content">
            <h4>H4 lorem ipsum dolor sit ame nsect etur adipi sicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h5>
              H5 lorem ipsum dolor sit amet con sect etur adipi sicing sed cmo
              oodo ut labora elit
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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

          <!--  {% include 'styleguide/_includes/blocks/downloadCallout' %} -->

          <p>
            <a href="#" class="callout-link"
              >Callout Link
              <span class="fa fa-angle-double-right" aria-hidden="true"></span
            ></a>
          </p>

          <!-- {% include 'styleguide/_includes/blocks/blockquote' with { 'position':
          'full' } %} -->

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div class="block-child-pages">
            <!-- {% include 'styleguide/_includes/blocks/childPage' %} {% include
            'styleguide/_includes/blocks/childPage' %} -->
          </div>

          <!-- {% include 'styleguide/_includes/blocks/blockquote' with { 'position':
          'left' } %} -->

          <div class="block-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.<br />
            </p>
          </div>

          <!-- {% include 'styleguide/_includes/blocks/blockquote' with { 'position':
          'right' } %} -->

          <div class="block-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <!-- {% include 'styleguide/_includes/blocks/accordion' with { 'headline':
          'Block Accordion Style With Some Longer Text' } %} {% include
          'styleguide/_includes/blocks/accordion' %} -->

          <div class="block-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <p><a class="btn btn-primary" href="#">Primary Button - Link</a></p>
          <p>
            <a class="btn btn-secondary" href="#">Secondary Button - Link</a>
          </p>

          <p>This is some custom html. <a href="#">Click Me</a></p>

          <!--  {% include 'styleguide/_includes/blocks/captionedImage' with {
          'position': 'full', 'image': 'https://placehold.it/1280x738/' } %} -->

          <div class="block-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <!--  {% include 'styleguide/_includes/blocks/captionedImage' with {
          'position': 'left', 'image': 'https://placehold.it/570x350/' } %} -->

          <div class="block-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <!-- {% include 'styleguide/_includes/blocks/captionedImage' with {
          'position': 'right', 'image': 'https://placehold.it/150x150/' } %} -->

          <div class="block-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <!-- {% include 'styleguide/_includes/blocks/captionedImage' with {
          'position': 'center', 'image': 'https://placehold.it/1280x620/' } %} -->

          <div class="block-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <!-- {% include 'styleguide/_includes/blocks/pullquote' with { 'position':
          'full' } %} {% include 'styleguide/_includes/blocks/imageGallery' %}
          {% include 'styleguide/_includes/blocks/calloutBlock' %} {% include
          'styleguide/_includes/blocks/calloutBlock' with { 'class': 'dark-bg',
          'image': 'http://placehold.it/1200x400' } %} -->

          <h2>Contact Us</h2>
          <p>Please fill out the following form to contact us.</p>

          <!-- {% include 'styleguide/_includes/blocks/sampleForm' %} -->

          <div class="block-child-pages">
            <!-- {% include 'styleguide/_includes/blocks/childPage' %} {% include
            'styleguide/_includes/blocks/childPage' %} {% include
            'styleguide/_includes/blocks/childPage' %} {% include
            'styleguide/_includes/blocks/childPage' %} {% include
            'styleguide/_includes/blocks/childPage' %} -->
          </div>

          <div class="block-disclaimer">
            <p>
              Disclaimer text style: Special must be booked a minimum of two
              weeks from planned arrival date. Also, must include your telephone
              number so a theme can be discussed. Valid for 1, 2 or 3 bedroom
              condo, lakeview or lakefront. Valid Fall-Spring.
            </p>
          </div>

          <!--  {% include 'styleguide/_includes/pagination' %} -->

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
            <!-- {% include 'styleguide/_includes/searchItem' %} {% include
            'styleguide/_includes/searchItem' %} -->
          </div>
        </div>
      </section>

      <aside class="interior-aside">
        <!-- {% include 'styleguide/sidebarWidgets/sidebarNav' %} {% include
        'styleguide/sidebarWidgets/callout' %} {% include
        'styleguide/sidebarWidgets/imageAd' %} {% include
        'styleguide/sidebarWidgets/newsletterSignup' %} -->
      </aside>
    </div>
  </div>
</template>
<script>
export default {
  layout: "styleguide",
};
</script>
