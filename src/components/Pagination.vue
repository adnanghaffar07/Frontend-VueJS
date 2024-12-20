<template>
    <div class="d-inline-block mx-auto my-2 w-90">
      <b-pagination
        class="justify-content-end"
        v-model="currentPage"   
        :total-rows="rows"
        :per-page="perPage"
        :aria-controls="'Jokes'"
      ></b-pagination>
    </div>
  </template>
  
  <script setup>
  import { computed, ref, watch } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();

  const perPage = computed(() => store.getters.getPerPage);
  const currentPage = ref(store.getters.getCurrentPage || 1);
  const allJokes = computed(() => store.getters.getJokes);

  watch(currentPage, (newPage) => {
    store.commit('setCurrentPage', newPage);
  });

  const rows = computed(() => allJokes.value.length);
 
  </script>
  
  <style scoped>

  </style>