<template>
  <div class="home">
    <gmaps-map :options="mapOptions">
      <gmaps-heatmap :data="positions" :items="positions" :opacity="0.8" />
    </gmaps-map>
  </div>
</template>

<script>
import restService from '@/services/restService';
import { gmapsMap, gmapsHeatmap } from 'x5-gmaps';
import graphService from '../services/graphService';

export default {
  name: 'DeactivatedAds',
  components: {
    gmapsMap,
    gmapsHeatmap,
  },
  data: () => ({
    positions: [],
    items: [
      { lat: -27.41, lng: 153.01 },
      { lat: -27.42, lng: 153.02 },
    ],
    mapOptions: {
      center: { lat: 48.148598, lng: 17.107748 },
      fullscreenControl: true,
      mapTypeControl: false,
      rotateControl: false,
      scaleControl: false,
      streetViewControl: false,
      zoomControl: true,
      minZoom: 12,
    },
  }),
  async mounted() {
    const positions = await restService.getPositionsOfDeactivatedAds();
    this.positions = graphService.convertPositionsToGraphData(positions);
  },
};
</script>
<style>
.gmaps-map {
  position: absolute !important;
}
</style>
