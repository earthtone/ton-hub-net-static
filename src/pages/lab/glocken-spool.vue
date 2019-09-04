<template>
  <main class="app">
    <h1>Use Your Mouse!</h1>
    <svg
      :width="dimensions[0]"
      :height="dimensions[1]"
      @click="generate">
      <transition-group
        tag="g"
        name="fade">
        <circle
          v-for="point in points"
          :key="point.id"
          :cx="point.position[0]"
          :cy="point.position[1]"
          :r="point.radius"
          :stroke="point.stroke ? point.stroke : '#fff'"
          :fill="point.fill ? point.fill : '#fff'"
          :fill-opacity="point.fill ? 1 : 0"
          :stroke-opacity="point.fill ? 0 : 1"
          @mouseover="playNote(point.freq)"/>
      </transition-group>
    </svg>
  </main>
</template>
<script>
import randomBytes from 'randombytes'
import random from 'canvas-sketch-util/random'
import palettes from 'nice-color-palettes'

export default {
  props: {
    radiusMultiplier: {
      type: Number,
      default: 25
    }
  },
  data () {
    return {
      points: [],
      palette: [],
      audio: null
    }
  },
  created () {
    this.generate()
  },
  mounted () {
    if (!window) {
      return
    }

    this.audio = new (window.AudioContext || window.webkitAudioContext)()
  },
  methods: {
    makePoints () {
      this.points = this.makeGrid().filter(() => random.value() > 0.5).map(points => ({
        ...points,
        radius: Math.abs(random.gaussian() * this.radiusMultiplier),
        fill: random.pick(this.palette),
        freq: random.pick(this.scale),
        id: randomBytes(8).toString('hex')
      }))
    },
    makePalette () {
      this.palette = random.pick(palettes)
    },
    generate () {
      this.makePalette()
      this.makePoints()
    }
  }
}
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: #fff;
  font-family: monospace;
}

h1 {
  position: fixed;
}

svg {
 box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
 background-color: #ccc;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

circle {
  opacity: 1;
  transition: opacity 800ms ease-out 100ms;
}

circle:hover {
  opacity: 0;
  transform: scale(5);
  transition: transform 800ms ease;
}
</style>
