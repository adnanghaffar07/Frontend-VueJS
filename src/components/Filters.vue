<template>
    <div class="container my-2  w-80 mx-auto text-center">
        <b-dropdown split :text="selectedType ? selectedType: 'Jokes Type'" class="m-2" variant="outline-danger">
            <b-dropdown-item v-for="type in types" :keys="index" :value="type"  @click="handleSelectType(type)">
                {{ type }}
            </b-dropdown-item>
        </b-dropdown>

        <b-dropdown split :text="selectedNumbers ? selectedNumbers : 'More Random Jokes'" class="m-2" variant="outline-danger">
            <b-dropdown-item v-for="random in RandomNumbers" :keys="index" :value="RandomNumbers" :v-model="num" @click="handleNumbersOfJokes(random)">
                {{ random }}
            </b-dropdown-item>
        </b-dropdown>

    </div>
</template>
<script setup>

import { useStore } from 'vuex';
import { computed, onMounted, ref, reactive } from 'vue';

const store = useStore();

let clickRandom = ref(false);
const RandomNumbers = reactive(['Random Joke','5 Random Jokes', '25 Random Jokes', '250 Random Jokes']);

const types = computed(() => store.getters.getTypes);

onMounted(() => {
      store.dispatch('fetchJokesType');
});

let selectedType = computed(() => store.getters.getSelectedType);

const handleSelectType = (type) => {
  store.dispatch('setSelectedType', type);
  store.dispatch('fetchSelectedTypeJokes', type);
};

let selectedNumbers = computed(() => store.getters.getNumberOfJokes);

const handleNumbersOfJokes = (random) =>  {
    if(random == 'Random Joke'){
        store.dispatch('fetchRandomJoke');
    }
    store.dispatch('setSelectedNumbers', random);
    store.dispatch('fetchManyRandomJokes', random);
}

</script>