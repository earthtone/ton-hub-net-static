<template>
  <section class="discreet-clone">
    <transition
      name="fade"
      mode="out-in">
      <button
        v-if="isPlaying"
        class="stop-button"
        @click="stop">
        <g-image
          src="~/assets/img/discreet-music-cover-cutout.png"
          alt="clouds" />
      </button>
      <button
        v-else
        class="play-button"
        @click="play">
        Discreet Music
      </button>
    </transition>
  </section>
</template>

<script>
import Tone, { Transport, Loop, Panner, FeedbackDelay } from 'tone'
import { makeSynth, scoreA, scoreB } from '@/lib/discreet-music'

export default {
  name: 'DiscreetMusic',
  data () {
    return {
      isPlaying: false,
      synths: [],
      panners: [],
      echo: null,
      delay: null,
      delayFade: null,
      loopA: null,
      loopB: null
    }
  },
  mounted () {
      this.synths.push(makeSynth())
      this.synths.push(makeSynth())

      this.panners.push(new Panner(-0.5))
      this.panners.push(new Panner(0.5))

      this.echo = new FeedbackDelay('16n', 0.6)
      this.delay = Tone.context.createDelay(6.0)
      this.delayFade = Tone.context.createGain()

      this.delay.delayTime.value = 6.0
      this.delayFade.gain.value = 0.5

      this.synths[0].connect(this.panners[0])
      this.synths[1].connect(this.panners[1])
      this.panners[0].connect(this.echo)
      this.panners[1].connect(this.echo)

      this.echo.toMaster()
      this.echo.connect(this.delay)
      this.delay.connect(Tone.context.destination)
      this.delay.connect(this.delayFade)
      this.delay.connect(this.delay)

      this.loopA = new Loop(scoreA(this.synths[0]), '34m').start()
      this.loopB = new Loop(scoreB(this.synths[1]), '37m').start()
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

      if (this.loopA) {
        this.loopA.stop()
      }

      if (this.loopB) {
        this.loopB.stop()
      }

      Transport.stop()
      this.isPlaying = false
    }
  }
}
</script>

<style>
.discreet-clone {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}

.discreet-clone button {
  color: #fff;
}

.discreet-clone button.stop-button {
  border: none;
  height: 100%;
}

.discreet-clone img {
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
