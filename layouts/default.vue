<template>
  <div>

  <Header/>
  <b-container >
    <b-row>
      <b-col>
        <Nuxt/>
      </b-col>
    </b-row>

  </b-container>
  </div>

</template>

<script>
import Header from '~/components/Header.vue';
export default {
  components:{
    Header
  }
}
</script>
<style>

</style>
