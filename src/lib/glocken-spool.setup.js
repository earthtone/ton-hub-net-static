import { ref } from '@vue/composition-api'

import randomBytes from 'randombytes'
import random from 'canvas-sketch-util/random'
import palettes from 'nice-color-palettes'
import { makeGrid } from '@/lib/canvas.helper'
import { playNote, scale as scaleData } from '@/lib/sound.helper'

export function useAudioGrid (props) {
  const points = ref([])
  const palette = ref(random.pick(palettes))
  const audio = ref(null)
  const scale = ref(scaleData)

  if (window) {
    audio.value = new (window.AudioContext || window.webkitAudioContext)()
  } else {
    console.log('no window')
    return
  }

  generate()

  return {
    points,
    palette,
    audio,
    generate,
    playNote: playNote(audio.value)
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
