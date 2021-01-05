<template>
  <nav class="footer-nav-bottom">
    <ul>
      <li>
        <span>&copy; Copyright {{ currentYear }} Nuxt Headless</span>
      </li>
      <li><a href="#">Privacy Policy</a></li>
      <li>
        <a href="#"
          >Site by <img src="/clickrain.svg" alt="Click Rain" rel="nofollow" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavFooterBottom",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
