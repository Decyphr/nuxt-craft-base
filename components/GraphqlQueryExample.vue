<template>
  <div class="flex flex-wrap items-center max-w-screen-xl m-auto">
    <div
      class="bg-gray-900 text-white p-5 m-5 flex-grow rounded text-center w-48 transform hover:scale-105 transition-transform duration-200 ease-in-out"
      v-for="character in characters.results"
      :key="character.id"
    >
      <img class="rounded" :src="character.image" :alt="character.name" />

      <h3>{{ character.name }}</h3>
      <p>{{ character.species }}</p>
    </div>
  </div>
</template>

<script>
import { GET_ALL_CHARACTERS } from "../graphql/getAllCharacters";

export default {
  name: "GraphqlQueryExample",
  apollo: {
    characters: GET_ALL_CHARACTERS,
  },

  data() {
    return {};
  },
};
</script>
