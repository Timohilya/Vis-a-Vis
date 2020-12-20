new Vue({
  el: '#inputRange',
  components: {
    VueSlider: window['vue-slider-component']
  },
  data: {
    minmark: 500,
    maxmark: 6500,
    value: 0,
    marks: val => (val % 500 === 0 && val % 1000 != 0),
    dotOptions: [{
      tooltip: 'always'
    }]
  }
})