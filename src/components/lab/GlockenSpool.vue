<template>
  <section class="app">
    <ClientOnly>
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
    </ClientOnly>
  </section>
</template>
<script>
import { onMounted, ref } from '@vue/composition-api'
import randomBytes from 'randombytes'
import random from 'canvas-sketch-util/random'
import palettes from 'nice-color-palettes'
import { makeGrid } from '@/lib/canvas.helper'
import { playNote, scale as scaleData } from '@/lib/sound.helper'

export default {
  name: 'glocken-spool',
  props: {
    radiusMultiplier: {
      type: Number,
      default: 25
    },
    dimensions: {
      type: Array,
      default: () => [512, 512]
    }
  },
  setup (props) {
    const points = ref([])
    const palette = ref(random.pick(palettes))
    const audio = ref(null)
    const scale = ref(scaleData)
    const playNoteFn = ref(() => {})

    onMounted(() => {
      if (!window) {
        console.log('no window')
        return
      }

      audio.value = new (window.AudioContext || window.webkitAudioContext)()
      playNoteFn.value = playNote(audio.value)
      generate()
    })

    return {
      points,
      palette,
      audio,
      generate,
      playNote: playNoteFn
    }

    function makePoints (points, radiusMultiplier) {
      return makeGrid(props.dimensions)
        .filter(() => random.value() > 0.5)
        .map(points => ({
          ...points,
          radius: Math.abs(random.gaussian() * props.radiusMultiplier),
          fill: random.pick(palette.value),
          freq: random.pick(scale.value),
          id: randomBytes(8).toString('hex')
        }))
    }

    function makePalette () {
      return random.pick(palettes)
    }

    function generate () {
      points.value = makePoints()
      palette.value = makePalette()
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
