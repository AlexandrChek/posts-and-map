<template>
  <div id="map"></div>
</template>

<script>
  export default {
    name: 'MapView',
    data() {
      return {
        map: []
      }
    },
    mounted() {
      this.map = L.map('map', { zoomControl:false }).setView([48.20, 30.63], 6)
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map)

      if (window.innerWidth >= 768) {
        L.control.zoom({position: 'bottomright'}).addTo(this.map)
      }

      if (localStorage.getItem("oldMarkers")) {
        let markers = JSON.parse(localStorage.getItem("oldMarkers"))
        markers.forEach(el => {
          let coord = {lat: el.lat, lng: el.lng}
          let marker = L.marker(coord).addTo(this.map)
          marker.bindTooltip(el.tooltip).openTooltip()
        })
      }

      this.map.on('click', this.onMapClick)
    },
    methods: {
      onMapClick(e) {
        let marker = L.marker(e.latlng).addTo(this.map)
        let popup = L.popup()
        popup
        .setLatLng(e.latlng)
        .setContent('Enter title ' + `<input type="text" oninput="localStorage.setItem('tooltip', value)"><br/><br/>` + 'Latitude: ' + e.latlng.lat + '<br/>' + 'Longitude: ' + e.latlng.lng)
        .openOn(this.map)
        marker.bindPopup(popup)
        marker.on('popupclose', function() {
          let toolTipText = localStorage.getItem('tooltip')
          marker.bindTooltip(toolTipText).openTooltip()
          let coordAndTitle = e.latlng
          coordAndTitle.tooltip = toolTipText
          if (localStorage.getItem("oldMarkers")) {
            let markers = JSON.parse(localStorage.getItem("oldMarkers"))
            markers.push(coordAndTitle)
            localStorage.setItem("oldMarkers", JSON.stringify(markers))
          } else {
            let markers = []
            markers.push(coordAndTitle)
            localStorage.setItem("oldMarkers", JSON.stringify(markers))
          }
        })
      }
    }
  }
</script>

<style scoped>
  #map {
    height: calc(100vh - 12px);
  }
</style>
