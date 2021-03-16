<template>
  <b-container >
    <b-row>
      <b-col>
        <movie-detail/>
        <p></p>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import MovieDetail from '../../components/MovieDetail.vue'
export default {
  components: { MovieDetail },
  layout:"details_layout",
  data(){
    return {
      a: `${process.env.a}`
    }
  },
  mounted(){
    const s=`${process.env.a}`;
    console.log("mounted", s );
  }
}

</script>

<style>

</style>
