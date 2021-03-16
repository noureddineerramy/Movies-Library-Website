export const state = () => ({
  mymovies : Array(),
  currentPage:1,
  isFetshing:false
});

export const mutations = {
  increment(state){
    state.currentPage++;
  },
  disableIsFetching(state){
    state.isFetshing=false;
  },
  enableIsFetching(state){
    state.isFetshing=true;
  }
}
