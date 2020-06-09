<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import graphService from '@/services/graphService';
import { Chart } from 'highcharts-vue';

export default {
  props: {
    prices: {
      type: Array,
      required: true,
    },
  },
  components: {
    highcharts: Chart,
  },
  data: () => ({
    chartOptions: {
      series: [{
        data: [],
      }],
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Time',
        },
      },
      yAxis: {
        type: 'number',
        title: {
          text: 'EUR',
        },
      },
      time: {
        timezone: 'Europe/Bratislava',
        useUTC: false,
      },
      title: {
        text: 'Price in time',
        x: -20,
      },
      legend: {
        enabled: false,
      },
    },
  }),
  methods: {
    redrawPrices() {
      this.chartOptions.series = [];

      const convertedPrices = graphService.convertPricesToGraphData(this.prices);

      this.chartOptions.series.push({
        data: convertedPrices,
        type: 'line',
      });
    },
  },
  watch: {
    prices() {
      this.redrawPrices();
    },
  },
  mounted() {
    this.redrawPrices();
  },
};

</script>
