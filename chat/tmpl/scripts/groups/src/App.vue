<template>
  <div>

    <Error v-bind:error="error"></Error>
    <Spinner v-bind:loading="loading"></Spinner>



    <ul>
      <li v-bind:key="index" v-for="(item, index) in  groups" class="">
        <a v-on:click="handlerGroupOpen(item)">{{item.title}}</a>
      </li>
    </ul>

    <div v-if="group">

      <h2>{{group.title}}</h2>

      {{group.members}}

      <ul>
        <li v-bind:key="index" v-for="(item, index) in  group.members" class="">
          <User v-bind:data="item"></User>
        </li>
      </ul>


      <br>

      {{group.chat}}
      <ul>
        <li v-bind:key="index" v-for="(item, index) in  group.chat" class="">
          <div class="">{{item.msg}}</div>
          <div class="">{{item.time}}</div>
          <div class="">{{item.from}}</div>
          <User v-bind:data="item.from"></User>
        </li>
      </ul>

      <input v-model="form.msg" type="text" />
      <button class="si-btn">Send</button>
    </div>

  </div>
</template>

<script>

const axios = require('axios').default;

import User from './mixins/User.vue'
import Error from './mixins/Error.vue'
import Spinner from './mixins/Spinner.vue'

import Modal from './mixins/Modal.vue'


export default {
  components: {
    Error, Spinner, User, Modal
  },
  data() {
    return {
      apiURL: globals.apiURL,
      error: false,
      loading: false,

      groups: false, // from AJAX

      group: false, // from User,

      form: {
        msg: ''
      }
    };
  },
  created: function () {

    this.loadGroups();

  },
  mounted() {
/*
    EventBus.$on('item-submit', data => {
      //console.log(data)

      const formData = new FormData();
      formData.append('id', data.id);
      formData.append('einheiten', data.einheiten);

      this.loading = true;
      var that = this;
      axios.post( this.apiURL+'/orderSlot', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(function(response){
          if ( response.data ) {
            //that.list = response.data;
            //console.log(response.data.error);
            if (response.data.error == false) {
              that.loadGroups();
              that.selectedItem = false;
            } else {
              that.error = ''+response.data.msg;
            }
          } else {
            that.error = 'Fehler beim Laden. 01';
          }
        })
        .catch(function(){
          that.error = 'Fehler beim Laden. 02';
        })
        .finally(function () {
          // always executed
          that.loading = false;
        });

    });
*/
  },
  methods: {

    handlerGroupOpen: function (item) {

      if (!item.id) {
        return false;
      }
      //console.log(item);
      this.group = false;
      this.group = item;
      this.loadGroup(item);

    },
    loadGroup: function (item) {

      if (!item.id) {
        return false;
      }
      this.loading = true;
      var that = this;
      axios.get( this.apiURL+'/getGroup/'+item.id)
      .then(function(response){
        if ( response.data ) {
          if (!response.data.error) {
            that.group = response.data;
          } else {
            that.error = ''+response.data.msg;
          }
        } else {
          that.error = 'Fehler beim Laden. 01';
        }
      })
      .catch(function(){
        that.error = 'Fehler beim Laden. 02';
      })
      .finally(function () {
        // always executed
        that.loading = false;
      });

    },
    loadGroups: function () {

      this.loading = true;
      var that = this;
      axios.get( this.apiURL+'/getGroups')
          .then(function(response){
            if ( response.data ) {
              if (!response.data.error) {
                that.groups = response.data;
              } else {
                that.error = ''+response.data.msg;
              }
            } else {
              that.error = 'Fehler beim Laden. 01';
            }
          })
          .catch(function(){
            that.error = 'Fehler beim Laden. 02';
          })
          .finally(function () {
            // always executed
            that.loading = false;
          });

    }
  }

};
</script>

<style>

</style>