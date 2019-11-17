<template>
<div id="map" class="map"></div>
</template>
<script>
export default{
  mounted(){
    this.initMap()
  },
  methods:{
    initMap:function(){
      var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([103.73,36.03]),
          zoom: 8,
          minZoom:5,
          maxZoom:12
        })
      });
    }
  }
}
</script>
<style>
  .map {
    height: 560px;
    margin-left:200px;
  }
</style>