<template>
  <section class="ambient-one">
    <transition
      name="fade"
      mode="out-in">
      <button
        v-if="isPlaying"
        class="stop-button"
        @click="stop">
        <g-image
          src="~/assets/img/ambient-1-Inlay.jpg"
          alt="maps" />
      </button>
      <button
        v-else
        class="play-button"
        @click="play">
        Ambient 1: Music for Airports
      </button>
    </transition>
  </section>
</template>

<script>
import { Transport, Loop, Gain, Freeverb } from 'tone'
import { NOTES, makeSynths } from '@/lib/music-for-airports'

export default {
  name: 'MusicForAirports',
  data () {
    return {
      isPlaying: false,
      synths: [],
      reverb: null,
      echo: null,
      out: null,
      noteDuration: '1n'
    }
  },
  mounted () {
    this.out = new Gain(0.15)
    this.synths = makeSynths()
    this.reverb = new Freeverb(0.8)
    this.synths.forEach(synth => {
      synth.connect(this.reverb)
    })

    this.reverb.connect(this.out)
    this.out.toMaster()

    NOTES.forEach(({ note, interval, delay }, i) => {
      new Loop(time => {
        this.synths[i].triggerAttackRelease(
          note, this.noteDuration, `+${delay}`
        )
      }, interval).start()
    })
  },
  beforeDestory () {
    this.stop()
  },
  methods: {
    play () {
      Transport.start()
      this.isPlaying = true
    },
    stop () {
      // @WIP: This functionality doesn't work!
      console.log('stopping...')
      Transport.stop()
      this.isPlaying = false
    }
  }
}
</script>

<style>
.ambient-one {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F1EBDD;
}

.ambient-one button {
  color: #1F8787;
}

.ambient-one button.stop-button {
  border: none;
  height: 100%;
}

.ambient-one img {
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
