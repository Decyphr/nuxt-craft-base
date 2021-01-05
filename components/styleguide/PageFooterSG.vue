<template>
  <footer class="page-footer">
    <div class="page-footer-main">
      <div class="page-footer-main-container">
        <nav class="footer-nav-primary">
          <ul>
            <!-- {% include '_includes/nav/core' with {showChildren: false} %} -->
          </ul>
        </nav>

        <!-- {% include '_includes/socialIcons' %} -->
      </div>
    </div>
    <div class="page-footer-bottom">
      <div class="page-footer-bottom-container">
        <nav class="footer-nav-bottom">
          <ul>
            <li>
              <span
                >&copy; Copyright {{ new Date().getFullYear() }} Nuxt
                Headless</span
              >
            </li>
            <li><a href="#">Privacy Policy</a></li>
            <li>
              <a href="https://clickrain.com" target="_blank"
                >Site by
                <img
                  class="lazyload"
                  data-src="/clickrain.svg"
                  alt="Click Rain"
                  rel="nofollow"
              /></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>
