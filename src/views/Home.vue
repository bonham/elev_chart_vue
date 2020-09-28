/* eslint-disable no-unused-vars */
<template>
  <div>
    <b-row>
      <b-col> Content </b-col>
      <b-col> Content </b-col>
    </b-row>
    <b-row>
      <b-col> {{ comp1 }} </b-col>
      <b-col> {{ meth1() }} </b-col>
      <b-col>
        {{ data1 }}
        <canvas
          ref="canvas"
          width="400"
          height="400"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import { BRow, BCol } from 'bootstrap-vue'
// eslint-disable-next-line no-unused-vars
import { Chart, LineController, Line, Point, LinearScale, Title } from 'chart.js'
Chart.register(LineController, Line, Point, LinearScale, Title)

export default {
  name: 'Home',
  title: 'Home',
  components: {
    BRow,
    BCol
  },
  data: function () {
    return {
      data1: 'canvascontent'
    }
  },
  computed: {
    comp1: function () {
      return 2 + 5
    }
  },
  mounted: function () {
    const canvas = this.$refs.canvas
    createChart(canvas)
  },
  methods: {
    meth1: function () {
      return nine()
    }
  }

}

function nine () {
  return 3 * 3
}

// eslint-disable-next-line no-unused-vars
function createChart (ctx) {
  // eslint-disable-next-line no-unused-vars
  const chart = new Chart(ctx, {
    type: 'line',
    // data: ...
    options: {
      title: {
        display: true,
        text: 'Chart Title'
      },
      scales: {
        x: {
          type: 'linear'
        },
        y: {
          type: 'linear'
        }
      }
    }
  })
}
</script>
