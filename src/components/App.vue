<template>
  <div id="pong" class="uk-width-1-1" uk-height-viewport>
    <div id="sidebar">
      <div class='settings'>
        <label for='sound'>sound: </label>
        <input type='checkbox' id='sound'>
      </div>
      <div class='settings'>
        <label for='stats'>stats: </label>
        <input type='checkbox' id='stats' checked>
      </div>
      <div class='settings'>
        <label for='footprints'>footprints: </label>
        <input type='checkbox' id='footprints'>
      </div>
      <div class='settings'>
        <label for='predictions'>predictions: </label>
        <input type='checkbox' id='predictions'>
      </div>
    </div>
    <canvas id="game" />
  </div>
</template>

<script>
import { Game } from '../game/game.js'
import { Pong } from '../game/pong.js'

export default {
  name: 'App',

  mounted () {
    this.init()
  },

  methods: {
    init () {
      // const size = document.getElementById('size')
      const sound = document.getElementById('sound')
      const stats = document.getElementById('stats')
      const footprints = document.getElementById('footprints')
      const predictions = document.getElementById('predictions')

      const pong = Game.start('game', Pong, {
        sound: sound.checked,
        stats: stats.checked,
        footprints: footprints.checked,
        predictions: predictions.checked
      })

      Game.addEvent(sound, 'change', function () { pong.enableSound(sound.checked) })
      Game.addEvent(stats, 'change', function () { pong.showStats(stats.checked) })
      Game.addEvent(footprints, 'change', function () { pong.showFootprints(footprints.checked) })
      Game.addEvent(predictions, 'change', function () { pong.showPredictions(predictions.checked) })
    }
  }
}
</script>

<style scoped>
  #pong { background-color: black; color: #AAA; font-size: 12pt; padding: 1em; }

  #sidebar                        {  float: right; font-size: 0.825em; background-color: #333; border: 1px solid white; padding: 1em; margin: 1em; }
  #sidebar h2                     { color: white; text-align: center; margin: 0; }
  #sidebar .parts                 { padding-left: 1em; list-style-type: none; margin-bottom: 2em; text-align: right; }
  #sidebar .parts li a            { color: white; text-decoration: none; }
  #sidebar .parts li a:visited    { color: white; }
  #sidebar .parts li a:hover      { color: white; text-decoration: underline; }
  #sidebar .parts li a.selected   { color: #F08010; }
  #sidebar .parts li a i          { color: #AAA;    }
  #sidebar .parts li a.selected i { color: #F08010; }
  #sidebar .settings              { line-height: 1.2em; height: 1.2em; text-align: right; }
  #sidebar .settings.size         { }
  #sidebar .settings.speed        { margin-bottom: 1em; }
  #sidebar .settings label        { vertical-align: middle; }
  #sidebar .settings input        { vertical-align: middle; }
  #sidebar .settings select       { vertical-align: middle; }
  #sidebar .description           { margin-bottom: 2em; }
  #sidebar .description b         { font-weight: normal; color: #FFF; }

  @media screen and (min-width: 0px) {
    #sidebar { display: none; }
    #game    { display: block; width: 480px; height: 360px; margin: 0 auto; margin-top: 1em;}
  }

  @media screen and (min-width: 800px) {
    #game    { width: 640px; height: 480px; }
  }

  @media screen and (min-width: 1000px) {
    #sidebar { display: block; }
    #game    { margin-left: 18em; }
  }

  @media screen and (min-width: 1200px) {
    #game    { width: 800px; height: 600px; }
  }

  @media screen and (min-width: 1600px) {
    #game    { width: 1024px; height: 768px; }
  }
</style>
