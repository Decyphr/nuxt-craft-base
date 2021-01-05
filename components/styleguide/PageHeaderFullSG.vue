<template>
  <div class="page-header-full">
    <div class="page-header-full-container">
      <nav class="header-nav-primary">
        <a class="logo" href="/">
          <img src="https://placehold.it/200x75" alt="" />
        </a>
        <ul>
          <!-- {% include '_includes/nav/core' with {showChildren: true} %} -->
        </ul>
      </nav>

      <div class="header-aux">
        <nav class="header-nav-aux">
          <!-- {% include '_includes/nav/aux' with {showChildren: true} %} -->
        </nav>

        <!-- {% include '_includes/searchForm' %} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeaderFullSG",
};
</script>
