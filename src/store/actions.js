import axios from '../services/axios';
export default {
    async fetchJokesTen({ commit }) {
        try {
          const response = await axios.get('/jokes/ten');
          commit('setData', response.data);
        } catch (err) {
          commit('setError', err);
          console.error('Error fetching jokes:', err);
        }
    },
    async fetchJokesType({ commit }) {
        try{
            const response = await axios.get('/types');
            commit('setTypes', response.data);
        }catch (err) {
            commit('setError', err);
            console.error('Error fetching Types:', err);
        }
    },
    setSelectedType({ commit }, type) {
        commit('setSelectedType', type);
    },
    async fetchSelectedTypeJokes({ commit }, type) {
        try{
           const response = await axios.get(`/jokes/${type}/ten`);
           commit('setData', response.data);
        }catch (err) {
            commit('setError', err);
            console.error('Error fetching Types:', err);
        }
    }, 
    async fetchRandomJoke({commit}){
        try{
            const response = await axios.get('/random_joke');
            const myArray = [];
            myArray.push(response.data);
            commit('setData', myArray);
        }catch (err) {
            commit('setError', err);
            console.error('Error fetching Random Joke:', err);
        }
    },
    async fetchManyRandomJokes( {commit} , number){
        try{
            const response = await axios.get(`/jokes/random/${number}`);
            commit('setData', response.data);
        }catch (err) {
            commit('setError', err);
            console.error('Error fetching Number of Jokes:', err);
        }
    },
    setSelectedNumbers({ commit }, number) {
        commit('setNumberOfJokes', number);
    },
    setCurrentPage({ commit }, newPage) {
        commit('setCurrentPage', newPage);
    }
  
};