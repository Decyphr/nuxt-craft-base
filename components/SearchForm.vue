<template>
  <div class="search search-form">
    <form method="GET" action="/search">
      <label for="search-bar">Search</label>
      <input
        class="search-bar"
        id="search-bar"
        type="text"
        name="q"
        placeholder="Search..."
        v-model="searchParam"
      />
      <button class="btn btn-primary">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchParam: "",
    };
  },
};
</script>
