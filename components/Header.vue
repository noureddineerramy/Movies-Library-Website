<template>
  <div>
    <div class="navbar-container">

  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Movies</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
    </div>

  <div class="carousel-container">

  <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"

      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="~/static/slide01.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        img-src="@/static/slide02.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="@/static/slide03.jpg"></b-carousel-slide>


    </b-carousel>
  </div>

  </div>

</template>

<script>

import $ from 'jquery';


export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
  mounted(){
    var $item = $('.carousel-item');
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('full-screen');

    $('.carousel img').each(function() {
      var $src = $(this).attr('src');
      var $color = $(this).attr('data-color');
      $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
      });
      $(this).remove();
    });

    $(window).on('resize', function (){
      $wHeight = $(window).height();
      $item.height($wHeight);
    });

  }
}
</script>

<style>
h5 {
  display: inline-block;
  padding: 10px;
  background: #B9121B;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.full-screen {
  background-size: cover !important;
  background-position: right center !important;
  background-repeat: no-repeat !important;
}
.navbar-container{
  position:absolute;
  background: transparent;
  left:0;
  right:0;

  z-index: 10;

}
.carousel-container{
  position: relative;
}
.carousel-container::before{
  content:'';
  width:100%;
  height:100vh;
  position: absolute;
  top:0;
  left:0;

  z-index: 1;
  background-image: url(~/static/bg-noise.gif);
  opacity: .1;
}
.bg-info{
  background-color:transparent !important;
}
.listitem{
  position: relative;
}
.listitem::before{
  top:0;
  left:0;
  width:100px;
  height:100px;
  background: red;;
  position: absolute;
  z-index: 2;
}

ol.carousel-indicators>li:focus,ol.carousel-indicators>li.active:focus{
  border-radius: 50% !important;
}
ol.carousel-indicators>li{
  border:1px solid #FFF;
  height:15px;
  width:15px;
  border-radius: 50% !important;
  background: transparent;

  /* background: #FFF; */
}
ol.carousel-indicators>li.active{
  background: #FFF;
}


button.navbar-toggler{
   border:0px;
}
button.navbar-toggler .navbar-toggler-icon{
  background-color: #FFF;
  border-radius: 5px;
  background-image: none;
  height:5px;
  position:relative;
  display: block;
  transition: linear .5s;

}
button.navbar-toggler .navbar-toggler-icon::before{
  content:'';
  height:5px;
  width:100%;
  background-color: #FFF;
  border-radius: 5px;
  position: absolute;
  top:-10px;
  left:0;
  transition: linear .5s;
}

button.navbar-toggler .navbar-toggler-icon::after{
  content:'';
  height:5px;
  width:100%;
  background-color: #FFF;
  border-radius: 5px;
  position: absolute;
  top:10px;
  left:0;
  transition: linear .5s;
}

button.navbar-toggler.not-collapsed  .navbar-toggler-icon{


  visibility: hidden;

  transition: linear 0s;

}

button.navbar-toggler.not-collapsed  .navbar-toggler-icon::after{

  visibility: visible;
  transition: linear .5s;
  transition-delay: .2s;
  transform: rotate(45deg);
  top:0;
}

button.navbar-toggler.not-collapsed  .navbar-toggler-icon::before{

  visibility: visible;
  transition: linear .5s;
  transition-delay: .2s;
  transform: rotate(-45deg);
  top:0;
}

</style>
