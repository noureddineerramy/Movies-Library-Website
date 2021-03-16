<template>


      <div class="movie" style="">
        <nuxt-link :to="'/movie/'+id">
        <div>

          <div class="img" :style="'background-image: url('+image+');'">
          </div>

          <div class="favori">
            <li class="fa fa-heart"></li>
          </div>


          <p class="year">{{year}}</p>
          <p class="title">{{title}}</p>
        </div>
        </nuxt-link>
      </div>

</template>

<script>



export default {
  props:["title","year","image","id"],

}
</script>

<style>

.movie{

  box-sizing: content-box;
  width:200px;
  height: 400px;
  border:1px solid rgb(170, 170, 170);
  box-shadow: 0px 0px 5px 0px #000;
  border-radius: 5px;
  margin:5px;
  display: inline-block;
}
.movie a{
  text-decoration: none;
}
.movie a .img{

    height:300px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px 5px 0px 0px;

}
.movie a:hover img{
  opacity: .9;
}

.movie img{
  width: 100%;
  border-radius: 5px 5px 0px 0px;

}
.movie p.year{
  color:brown;
  text-align: right;
  font-weight: 500;
  margin: 0;
  padding: 0;
}
.movie p.title{
  color:#000;
  margin: 10px;
  padding: 0px;
  font-size: 10px;
}
.favori > li{
  cursor: pointer;
  color:#E3E3E3;
  position: relative;
  overflow: hidden;

}
.favori > li::after{
  content:"\f004";
  color:red;
  position:absolute;
  overflow: hidden;
  top:0;
  left:0;
  height:0px;
  transition:linear .5s;
  border-bottom: 0px solid red;
}

.favori:hover > li::after{
  border-bottom: 1px solid red;
  transition:linear .5s;
  height:100%;

}
</style>
