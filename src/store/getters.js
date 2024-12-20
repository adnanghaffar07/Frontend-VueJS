export default {
    getJokes(state) {
        return state.data;
    },
    getError(state) {
        return state.error;
    },
    getTypes(state){
        return state.types;
    },
    getSelectedType(state) {
        return state.selectedType;
    },
    getRandomData(state){
        return state.data;
    },
    getNumberOfJokes(state){
        return state.numbers;
    },
    getPerPage(state){
        return state.perPage;
    },
    getCurrentPage(state){
        return state.currentPage;
    }
};