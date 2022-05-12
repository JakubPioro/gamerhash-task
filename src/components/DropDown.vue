<template>
  <!--  <h4>Value: {{ myValue }}</h4>-->
  <div>
    <select2 class="js-example-basic-single w-100"
             v-model="myValue" name="state"
             @click="mySelectEvent($event)"></select2>
  </div>
</template>

<script>
import Select2 from 'vue3-select2-component';
import $ from 'jquery';

export default {
  name: "DropDown",
  components: {
    'Select2': Select2
  },
  data() {
    return {
      myValue: '',
      myOptions: [{id: 1, text: "12"}, {id: 2, text: "22"},]
    }
  },
  methods: {
    mySelectEvent({id, text}) {
      console.log({id, text})
      this.myValue = id;
    },
  },

  mounted() {
    const data = [
      {
        id: 0,
        text: 'bitcoin (BTC)',
        first: '0.48 BTC',
        second: '0.48 BTC',
        icon: 'btc'
      },
      {
        id: 1,
        text: 'GUSD',
        first: '0.48 BTC',
        second: '0.48 BTC',
        icon: 'etc'
      },
      {
        id: 2,
        text: 'litecoin (LTC)',
        first: '0.48 BTC',
        second: '0.48 BTC',
        icon: 'ltc'
      },
    ]

    function formatState1(state) {
      if (!state.id) {
        return state.text;
      }
      const component = `
      <span style="display:flex; align-items:center; justify-content:space-between;">
        <span>
            <img src="${require('@/assets/icons/' + state.icon + '-icon.svg')}" alt="${state.icon}"/>
            <span style="text-align: left; font: normal normal 600 14px/18px Rajdhani; color: #181B1F;">${state.text}</span>
        </span>
        <span style="text-align: right; font: normal normal 500 14px/18px Rajdhani;">
            <span style="color: #181B1F;">${state.first}</span>
            <span style="color: #737373; margin-left: 7px">${state.second}</span>
        </span>
      </span>
      `

      const $state = $(component);
      return $state;
    }

    function formatState2(state) {
      if (!state.id) {
        return state.text;
      }
      const component = `
      <span style="display:flex; align-items:center; justify-content:space-between;">
        <span>
            <img src="${require('@/assets/icons/' + state.icon + '-icon.svg')}" alt="${state.icon}"/>
            <span style="text-align: left; font: normal normal 600 14px/18px Rajdhani; color: #181B1F;">${state.text}</span>
        </span>
        <span style="text-align: right; font: normal normal 500 14px/18px Rajdhani;">
            <span style="color: #181B1F;">${state.first}</span>
            <span style="color: #737373; margin-left: 7px">${state.second}</span>
        </span>
      `
      const $state = $(component);
      return $state;
    }

    $(document).ready(function () {
      $('.js-example-basic-single').select2({
        placeholder: "select",
        data: data,
        templateResult: formatState1,
        templateSelection: formatState2,
        dropdownAutoWidth: true,
        width: '355px',
        height: '50px'
      });
    });
  }
}
</script>

<style scoped>


</style>