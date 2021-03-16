<template>
  <div class="movies-list">
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
      <option value="red">Red</option>
    </select>
    <div class="list">
      <Movie v-for="movie in this.$store.state.mystore.mymovies" :key="movie.imdbID2" :year="movie.Year" :title="getMinTitle(movie.Title)" :image="movie.Poster" :id="movie.imdbID"  />

    </div>
  </div>

</template>

<script>
import Movie from "@/components/Movie.vue";
import Axios from "Axios";
import $ from "jquery";

export default {
  components:{
    Movie
  },
  created(){
    if (process.browser){

      window.addEventListener('scroll', this.handleScroll);
    }
  },
  mounted(){
    this.fetch();
  },
  methods:{

    fetch(){
      if(!this.$store.state.mystore.isFetshing){
        this.$store.commit('mystore/enableIsFetching');

        Axios.get(`http://www.omdbapi.com/?s=movie&apikey=${ process.env.apikey }&page=`+this.$store.state.mystore.currentPage)
         .then((resp) => {
           this.$store.commit("mystore/increment");
           let arr=resp.data.Search;
           arr.forEach(el => {
             el.imdbID2=el.imdbID+this.getRandom();

             this.$store.state.mystore.mymovies.push(el);
           });
           this.$store.commit('mystore/disableIsFetching');
            // console.log("movies",this.mymovies,this.currentPage);
         } )
      }

    },
    handleScroll(e){
      // console.log('random',this.getRandom());
      var element = e.target;
      // console.log("A",element.scrollHeight - element.scrollTop);
      // console.log("B",element.clientHeight);
      if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        this.fetch();
      }
    },
    getRandom(){
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1
    },
    getMinTitle(title){
      return title.substr(0,30)+((title.length>30) ? '...' : '.');
    }
  }


}
</script>

<style>
.movies-list{
  margin-top:20px;
  margin-bottom:20px;
  /* background-color: cornflowerblue; */
}

body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

.red-mode body {
  background-color: #df1a24;
  color: #e6dfd8;
}

</style>

