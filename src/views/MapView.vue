<template>
  <div id="map"></div>
  <ModalRemover v-if="isModalRemover" :toDel="toDel" @closeRemover="closeModal"></ModalRemover>
</template>

<script>
import ModalRemover from '../components/ModalRemover.vue'

  export default {
    name: 'MapView',
    components: {ModalRemover},
    data() {
      return {
        map: [],
        isModalRemover: false,
        toDel: {}
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
        if (JSON.parse(sessionStorage.getItem("toDel"))) {
          let toDel = JSON.parse(sessionStorage.getItem("toDel"))
          markers = markers.filter(el => {
            return el.lat !== toDel.lat && el.lng !== toDel.lng
          })
          localStorage.setItem("oldMarkers", JSON.stringify(markers))
        }
        markers.forEach(el => {
          let coord = {lat: el.lat, lng: el.lng}
          let marker = L.marker(coord).addTo(this.map)
          marker.bindTooltip(el.tooltip)
          marker.on('contextmenu', this.getModalRemover)
          marker.on('tapHold', this.getModalRemover)
          
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
          marker.bindTooltip(toolTipText)
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
      },
      getModalRemover(e) {
        this.isModalRemover = true
        this.toDel = e.latlng
      },
      closeModal() {
        this.isModalRemover = false
      }
    }
  }
</script>

<style scoped>
  #map {
    height: calc(100vh - 12px);
  }
</style>
