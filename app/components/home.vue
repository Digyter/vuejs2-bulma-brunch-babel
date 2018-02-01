<script>
  import * as cons from '../store/constants';
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';
  import Modalcard from './modal_card.vue';
  import Pagination from './pagination.vue'
  export default {

    name: 'home',
    components: {
      Modalcard,
      Pagination
    },
    computed: Object.assign(
      mapGetters(['getCars']),
      {
        display_status() {
          let start_count = this.pagination.current_page == 1 ? 1 : 1 + (this.pagination.current_page * this.pagination.items_per_page) - this.pagination.items_per_page;
          let end_count = start_count + this.getCars.length - 1;
          return `Displaying ${start_count} - ${end_count} of ${this.pagination.total_page} Results`;
        }
      }
    ),
    data() {
      return {
        modal: {
          error: '',
          show: false,
          content: ''
        },
        pagination: {
          current_page: 1,
          total_page: 0,
          items_per_page: 10
        }
      }
    },
    methods: Object.assign(
      mapActions(['setCars']),
      {
        openCardDetails(car_details) {
          this.modal.content = car_details;
          this.modal.show = true;
        },
        fetchCars(page=1) {
          this.pagination.current_page = page;
          this.$http.get(`${cons.API_URL}cars?_limit=10&_page=${page}`)
            .then(response => {
              this.setCars(response['data']);
              this.pagination.total_page = parseInt(response['headers']['map']['x-total-count'][0]);
            }
          );
        }
      }
    ),
    mounted(){
      this.fetchCars();
    }

  };
</script>
<template>
  <div class="container">
      <div class="columns is-centered">
        <div class="column is-three-quarters-mobile is-two-thirds-tablet is-three-quarters-desktop is-half-widescreen is-one-quarter-fullhd">

          <div class="content">
              <p ><strong>{{ display_status }}</strong></p>
          </div>
          <div class="box" v-for="car in getCars">
            <article @click="openCardDetails(car)" class="media">
              <figure class="media-left">
                <p class="image is-128x128">
                  <img v-if="car.thumbnail" :src="car.thumbnail">
                  <img v-else src="http://placehold.it/300x225">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{ car.name }}</strong>
                    <br>

                    <span>{{ car.location }}</span>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <strong>{{ car.price }}</strong>
              </div>
            </article>
          </div>
          <Pagination
            :current="pagination.current_page"
            :total="pagination.total_page"
            :items-per-page="pagination.items_per_page"
            :on-change="fetchCars">
          </Pagination>
        </div>
      </div>

    <Modalcard v-show="modal.show" :show-header="false" :show-footer="false">
      <div slot="background" class="modal-background" @click="modal.show = false"></div>
      <div slot="header">
        <header class="modal-card-head">
          <p class="modal-card-title">Car Details</p>
          <button class="delete" @click="modal.show = false"></button>
        </header>
      </div>
      <div slot="body">
        <div class="columns">
          <div class="column is-three-quarters">
            <figure class="image is-910x606">
              <img :src="modal.content.main_picture">
            </figure>
          </div>
          <div class="column">
            <span>{{ modal.content.name }}</span>
            <span>{{ modal.content.price }}</span>
            <span>{{ modal.content.location }}</span>
            <span>{{ modal.content.description }}</span>
          </div>
        </div>

        <span class="help is-danger">{{ modal.error }}</span>
      </div>
      <div slot="footer">
      </div>
    </Modalcard>
  </div>
</template>