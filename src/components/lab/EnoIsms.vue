<template>
  <section>
    <h1>Eno Isms</h1>
  </section>
</template>
<script>
import Tone, { Transport, Loop, Panner, FeedbackDelay } from 'tone'
import { makeSynth, scoreA, scoreB } from '@/lib/discreet-music'

export default {
  name: 'eno-isms',
  setup () {
    const synths = [makeSynth(), makeSynth()]
    const panners = [new Panner(-0.5), new Panner(0.5)]

    const echo = new FeedbackDelay('16n', 0.6)

  }
}
</script>
