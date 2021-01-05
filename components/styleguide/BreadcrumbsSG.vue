<template>
  <nav class="nav-breadcrumbs">
    <ul class="no-bullets">
      <li>
        <a href="/"><span class="fa fa-home"></span></a> /
      </li>
      <li><a href="#">Previous Page</a></li>
      /
      <li class="current-page">Current Page</li>
    </ul>
  </nav>
</template>

<script>
/* 
Generate breadcrumbs with optional appendItem (string) to be added
to the end of the list 
*/
export default {
  name: "BreadcrumbsSG",
};
</script>
