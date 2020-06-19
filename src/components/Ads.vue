<template>
  <div class="home">
    <v-data-table id="table" class="elevation-1"
                  :headers="headers"
                  :items="ads"
                  :disable-sort="true"
                  :server-items-length="totalAds"
                  :loading="loading"
                  :options.sync="options"
                  :page.sync="page"
                  :footer-props="{
                    showFirstLastPage: false,
                    itemsPerPageOptions: [5]
                  }">
      <template v-slot:item.link="props">
        <div class="text-xs-left">
          <a :href="props.item.link">{{ props.item.link }}</a>
        </div>
      </template>

      <template v-slot:item.lastPrice="props">
        <div class="text-xs-left">
          {{ props.item.lastPrice | currency(props.item.currency, 2, { symbolOnLeft: false })}}
        </div>
      </template>

      <template v-slot:item.dates="props">
        <div class="text-xs-left">
          Created: {{ props.item.created | formatLuxon }}
        </div>
        <div class="text-xs-left" v-if="props.item.updated">
          Updated: {{ props.item.updated | formatLuxon }}
        </div>
        <div class="text-xs-left" v-if="props.item.deactivated">
          Deactivated: {{ props.item.deactivated | formatLuxon }}
        </div>
      </template>

      <template v-slot:item.address="props">
        <div class="text-xs-left">{{ props.item.address + ' ' + props.item.locality }}</div>
      </template>

      <template v-slot:item.description="props">
        <v-textarea
          name="input-7-1"
          outlined
          solo
          readonly
          :value="props.item.description"
        ></v-textarea>
      </template>

      <template v-slot:item.action="{ item }">
        <v-icon v-on:click="showDetail(item)">
          mdi-magnify
        </v-icon>
        <!--<v-icon v-on:click="removeSubmission(item)">
          mdi-minus-circle
        </v-icon>-->
      </template>

      <template v-slot:top>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition"
                  fixed-header>
          <v-card>
            <v-system-bar color="white">
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Close</v-btn>
            </v-system-bar>

            <v-card-title>
              <span class="headline">{{dialogItem.title}}</span>
            </v-card-title>

            <v-card-text>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="dialogItem.link"
                      label="Link"
                      outlined
                      readonly
                    />

                    <v-text-field
                      label="Price"
                      outlined
                      readonly
                      :value="dialogItem.lastPrice
                        | currency(dialogItem.currency, 2, { symbolOnLeft: false })"
                      v-if="dialogItem.lastPrice"
                    />

                    <v-text-field
                      label="Address"
                      outlined
                      readonly
                      :value="dialogItem.address + ' ' + dialogItem.locality"
                    />

                    <v-text-field
                      :value="dialogItem.contact"
                      label="Contact"
                      outlined
                      readonly
                      v-if="dialogItem.contact"
                    />

                    <v-text-field
                      label="Created date"
                      outlined
                      readonly
                      :value="dialogItem.created | formatLuxon"
                    />

                    <v-text-field
                      v-if="dialogItem.deactivated"
                      label="Deleted date"
                      outlined
                      readonly
                      :value="dialogItem.deactivated | formatLuxon"
                    />
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <Gallery :galleryUrl="dialogItem.galleryUrl"/>
                  </v-col>
                  <v-col>
                    <PriceGraph :prices="dialogItem.prices"/>
                  </v-col>
                  <v-col>
                    <gmaps-map :options="mapOptions">
                      <gmaps-marker
                        :position="{ lat: dialogItem.latitude, lng: dialogItem.longitude }"
                      />
                    </gmaps-map>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-textarea
                      name="input-7-1"
                      outlined
                      filled
                      readonly
                      auto-grow
                      :value="dialogItem.description"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-data-table>

  </div>
</template>

<script>
import restService from '@/services/restService';
import Gallery from '@/components/Gallery.vue';
import PriceGraph from '@/components/PriceGraph.vue';
import { DateTime } from 'luxon';
import { gmapsMap, gmapsMarker } from 'x5-gmaps';

export default {
  props: {
    adsType: String,
  },
  data: () => ({
    mapOptions: {
      center: { lat: 48.148598, lng: 17.107748 },
      zoom: 10,
      fullscreenControl: true,
      mapTypeControl: false,
      rotateControl: false,
      scaleControl: false,
      streetViewControl: false,
      zoomControl: true,
      minZoom: 10,
    },
    dialog: false,
    dialogItem: {},
    dialogIndex: 0,
    ads: [],
    totalAds: 0,
    loading: true,
    options: {
      itemsPerPage: 5,
    },
    headers: [
      { text: '', value: 'action', sortable: false },
      { text: 'Category', value: 'category' },
      { text: 'Link', value: 'link' },
      { text: 'Title', value: 'title' },
      { text: 'LastPrice', value: 'lastPrice' },
      { text: 'Address', value: 'address' },
      { text: 'Dates', value: 'dates', width: '10%' },
      { text: 'Description', value: 'description', width: '50%' },
    ],
    scrollOptions: {
      duration: 600,
      offset: 0,
      easing: 'easeInOutCubic',
    },
    page: 1,
  }),
  components: {
    Gallery,
    PriceGraph,
    gmapsMap,
    gmapsMarker,
  },
  methods: {
    close() {
      this.dialog = false;
    },
    showDetail(item) {
      this.dialog = true;
      this.dialogIndex = this.ads.indexOf(item);
      this.dialogItem = { ...item };
    },
    async getAds(adsType) {
      if (adsType === 'latest') {
        return restService.getLatestAds(this.options.page, this.options.itemsPerPage);
      }
      if (adsType === 'deactivated') {
        return restService.getDeactivatedAds(this.options.page, this.options.itemsPerPage);
      }
      throw new Error('Wrong adsType');
    },
  },
  filters: {
    formatLuxon(value) {
      return DateTime.isDateTime(value) ? value.toFormat('yyyy-MM-dd HH:mm') : '';
    },
  },
  watch: {
    dialog(val) {
      return val || this.close();
    },
    options: {
      async handler() {
        const res = await this.getAds(this.adsType);
        this.ads = res.data;
        this.totalAds = res.page.totalElements;
        this.loading = false;
      },
      deep: true,
    },
    page() {
      this.$vuetify.goTo('#table > div.v-data-table__wrapper > table > tbody > tr:nth-child(1)', this.scrollOptions);
    },
  },
};
</script>
