//map js beware
var loadmapbtn = document.getElementById('mapload')
var map = null

loadmapbtn.addEventListener('click', loadmap)
function loadmap() {
  L.mapbox.accessToken =
    "pk.eyJ1IjoiYXJpdHJheHpvZCIsImEiOiJjbDRmeHgyenQwN3U1M2ltYndjM3NsaTF1In0.DQtk0vwbl6NOuUVCrwpmzw";
  map = L.mapbox
    .map("map", null, {
      maxZoom: 15,
    })
    .setView([22.76, -25.84], 3);

  var layers = {
    Streets: L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11"),
    Light: L.mapbox.styleLayer("mapbox://styles/mapbox/light-v10"),
    Satellite: L.mapbox.styleLayer("mapbox://styles/mapbox/satellite-v9"),
  };


  layers.Streets.addTo(map);
  L.control.layers(layers).addTo(map);
}



//html elements
const loading = document.getElementById('loading_show')
const map_div = document.getElementById('map')
var Wildfiresbtn = document.getElementById('wildfire')
var volcanobtn = document.getElementById('volcano')
var icebergbtn = document.getElementById('iceberg')

Wildfiresbtn.addEventListener('click', showwildfire)
loading.style.display = 'none'

volcanobtn.addEventListener('click', showVolcano)

icebergbtn.addEventListener('click', showiceberg)
//nasa api request

function showwildfire() {
  console.log('pressed wildfire button')
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://eonet.gsfc.nasa.gov/api/v3/events', true)

  xhr.onprogress = function () {
    map_div.style.display = 'none'
    loading.style.display = 'block'
  }

  xhr.onload = function () {
    loading.style.display = 'none'
    map_div.style.display = 'block'
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText)
      for (key in obj['events']) {
        if (obj['events'][key].categories[0].title == 'Wildfires') {
          var myLayer = L.mapbox.featureLayer().addTo(map);
          var geoJson = {
            type: 'FeatureCollection',
            features: [{
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [obj['events'][key].geometry[0].coordinates[0], obj['events'][key].geometry[0].coordinates[1]]
              },
              "properties": {
                "icon": {
                  "iconUrl": "Daco_4046759.png",
                  "iconSize": [25, 25], // size of the icon
                }
              }
            }]
          }
          myLayer.on('layeradd', function (e) {
            var marker = e.layer,
              feature = marker.feature;
            marker.bindPopup(`<button class="trigger">${obj['events'][key].title} <br> latitude:${obj['events'][key].geometry[0].coordinates[0]} <br> Longitude:${obj['events'][key].geometry[0].coordinates[1]} <br> Link: <a href="${obj['events'][key].sources[0].url}" target="_blank">${obj['events'][key].sources[0].url}</a></button>`)
            marker.setIcon(L.icon(feature.properties.icon));
          });

          // Add features to the map.
          myLayer.setGeoJSON(geoJson);

        }
      }

    }
  }

  xhr.send()
  console.log('should print at end')
}
function showVolcano() {
  const xhrVolcano = new XMLHttpRequest()
  xhrVolcano.open('GET', 'https://eonet.gsfc.nasa.gov/api/v3/events', true)

  xhrVolcano.onprogress = function () {
    map_div.style.display = 'none'
    loading.style.display = 'block'
  }

  xhrVolcano.onload = function () {
    loading.style.display = 'none'
    map_div.style.display = 'block'
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText)
      for (key in obj['events']) {
        if (obj['events'][key].categories[0].title == 'Volcanoes') {

          var myLayer = L.mapbox.featureLayer().addTo(map);
          var geoJson = {
            type: 'FeatureCollection',
            features: [{
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [obj['events'][key].geometry[0].coordinates[0], obj['events'][key].geometry[0].coordinates[1]]
              },
              "properties": {
                "icon": {
                  "iconUrl": "dc0a6a3c143622d635981f16c0d646b6.png",
                  "iconSize": [25, 25], // size of the icon
                }
              }
            }]
          }
          myLayer.on('layeradd', function (e) {
            var marker = e.layer,
              feature = marker.feature;
            marker.bindPopup(`<button class="trigger">${obj['events'][key].title} <br> latitude:${obj['events'][key].geometry[0].coordinates[0]} <br> Longitude:${obj['events'][key].geometry[0].coordinates[1]} <br> Link: <a href="${obj['events'][key].sources[0].url}" target="_blank">${obj['events'][key].sources[0].url}</a></button>`)
            marker.setIcon(L.icon(feature.properties.icon));
          });

          // Add features to the map.
          myLayer.setGeoJSON(geoJson);

        }
      }

    }
  }

  xhrVolcano.send()
  console.log('should volcano print at end')
}

function showiceberg() {
  const xhrIceberg = new XMLHttpRequest()
  xhrIceberg.open('GET', 'https://eonet.gsfc.nasa.gov/api/v3/events', true)

  xhrIceberg.onprogress = function () {
    map_div.style.display = 'none'
    loading.style.display = 'block'
  }

  xhrIceberg.onload = function () {
    loading.style.display = 'none'
    map_div.style.display = 'block'
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText)
      for (key in obj['events']) {
        if (obj['events'][key].categories[0].title == 'Sea and Lake Ice') {

          var myLayer = L.mapbox.featureLayer().addTo(map);
          var geoJson = {
            type: 'FeatureCollection',
            features: [{
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [obj['events'][key].geometry[0].coordinates[0], obj['events'][key].geometry[0].coordinates[1]]
              },
              "properties": {
                "icon": {
                  "iconUrl": "iceberg.png",
                  "iconSize": [25, 25], // size of the icon
                }
              }
            }]
          }
          myLayer.on('layeradd', function (e) {
            var marker = e.layer,
              feature = marker.feature;
            marker.bindPopup(`<button class="trigger">${obj['events'][key].title} <br> latitude:${obj['events'][key].geometry[0].coordinates[0]} <br> Longitude:${obj['events'][key].geometry[0].coordinates[1]} <br> Link: <a href="${obj['events'][key].sources[0].url}" target="_blank">${obj['events'][key].sources[0].url}</a></button>`)
            marker.setIcon(L.icon(feature.properties.icon));
          });

          // Add features to the map.
          myLayer.setGeoJSON(geoJson);

        }
      }

    }
  }

  xhrIceberg.send()
  console.log('iceberg should print at end')
}