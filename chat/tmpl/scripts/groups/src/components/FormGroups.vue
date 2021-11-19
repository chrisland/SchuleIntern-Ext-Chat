<template>
  <div class="si-form" >

    <div class="header">
      <button class="si-btn si-btn-light" v-on:click="handlerBack">Zurück</button>
      <div class="title">Gruppe</div>
    </div>
    <div class="">
      <ul>
        <li>
          <label>Name</label>
          <input type="text" v-model="form.title">
        </li>
        <li>
          <label>Mitglieder</label>

          <ul>
            <li v-bind:key="index" v-for="(item, index) in  form.members" class="">
              <User v-if="item" v-bind:data="item"></User>
            </li>
            <li>
              <UserSelect @submit="handlerSubmitUser"></UserSelect>
            </li>
          </ul>

        </li>
        <li>
          <button class="si-btn" v-on:click="handlerSubmit">Speichern</button>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>

import User from '../mixins/User.vue'
import UserSelect from '../mixins/UserSelect.vue'


export default {
  components: {
    User,
    UserSelect
  },
  data() {
    return {

    };
  },
  props: {
    form: Object
  },
  created: function () {

  },
  methods: {

    handlerSubmitUser: function (userlist) {
      this.form.members = [...this.form.members, ...userlist];
    },
    handlerBack: function () {

      this.$emit('close')
    },
    handlerSubmit: function () {

      this.$emit('formSubmitGroup', this.form)
    }

  }

};
</script>

<style scoped>

</style>