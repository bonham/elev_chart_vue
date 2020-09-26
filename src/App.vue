<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <CustomNavBar />
        </b-col>
      </b-row>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import { BContainer, BRow, BCol } from 'bootstrap-vue'
import CustomNavBar from '@/components/CustomNavBar.vue'

export default {
  name: 'App',
  components: {
    BContainer,
    BRow,
    BCol,
    CustomNavBar
  }
}
</script>
<style>
</style>
