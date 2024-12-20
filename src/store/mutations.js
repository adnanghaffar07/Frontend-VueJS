export default {
    setData(state, data) {
        state.data = data;
    },
    setError(state, error) {
        state.error = error;
    },
    setTypes(state, types) {
        state.types = types;
    },
    setSelectedType(state, type) {
        state.selectedType = type; 
    },
    setRandomData(state, data){
        state.data = data;
    },
    setNumberOfJokes(state, data){
        state.numbers = data;
    },
    setPerpage(state, data){
        state.perPage = data;
    },
    setCurrentPage(state, data){
        state.currentPage = data;
    }
};