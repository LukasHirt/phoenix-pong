<template>
  <div id="sidebar">
    <div class='settings' v-for="(option, index) in options" :key="index">
      <label>
        {{ option.label }}:
        <input type='checkbox' :id='option.name' :checked="option.checked">
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',

  computed: {
    options () {
      return [
        {
          name: 'sound',
          label: 'Sound'
        },
        {
          name: 'stats',
          label: 'Stats',
          checked: true
        },
        {
          name: 'footprints',
          label: 'Footprints'
        },
        {
          name: 'predictions',
          label: 'Predictions'
        }
      ]
    }
  }
}
</script>
