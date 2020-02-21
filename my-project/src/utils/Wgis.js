export default({
    initMap:()=>{
        var map = new ol.Map({
          target: 'map',
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM(),
              visible: true
            }),
            new ol.layer.Tile({
              source:new ol.source.TileWMS({
                url:'http://localhost:8080/geoserver/nyc/wms',//'https://ahocevar.com/geoserver/wms',
                params:{
                  'LAYERS':'nyc:nyc_roads',
                },
                serverType:'geoserver',
                transition:100
              })
            })
          ],
          view: new ol.View({
            center:ol.proj.fromLonLat([-74.00391, 40.82520]),//[-70.96065,40.78431], ,//ol.proj.fromLonLat([103.73,36.03]),
            zoom: 8,
            // minZoom:5,
            // maxZoom:12
          }),
          // 新增代码
          controls: ol.control.defaults().extend([    // 往地图增加滑块缩放控件
              new ol.control.ZoomSlider(),
              new ol.control.OverviewMap({        // 实例化一个OverviewMap类的对象，并加入到地图中
                  collapsed: false
              }),
              new ol.control.ScaleLine() 
          ]),
        });
    }
})