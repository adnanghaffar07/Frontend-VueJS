<template>

    <div>
        <b-list-group class="my-2 mx-auto w-80" v-for="(joke, index) in jokes" :key="index">
            <b-list-group-item>
                <div>
                    <b class="title-red-color f-14">Type: </b> 
                    <span class="f-12">{{ joke.type }}</span>
                </div>
                <div>
                    <b class="title-red-color f-14">Setup: </b> 
                    <span class="f-12">{{ joke.setup }}</span>
                </div>
                <div>
                    <b class="title-red-color f-14">Punchline: </b> 
                    <span class="f-12">{{ joke.punchline }}</span>
                </div>
            </b-list-group-item>
        </b-list-group>
        <Pagination />
    </div>

</template>

<script setup>
import Pagination from './Pagination.vue';

import { useStore } from 'vuex';
import { computed, onMounted, watch } from 'vue';

const store = useStore();

const currentPage = computed(() => store.getters.getCurrentPage);
const perPage = computed(() => store.getters.getPerPage);
const allJokes = computed(() => store.getters.getJokes);

const jokes = computed(() => {
    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return allJokes.value.slice(start, end);
});

const error = computed(() => store.getters.getError);

onMounted(() => {
    store.dispatch('fetchJokesTen');
    if (!currentPage.value) {
        store.commit('setCurrentPage', 1);
    }
});
</script>
<style scoped>


</style>