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
import { onMounted, reactive } from '@vue/composition-api'
import { useAudioGrid } from '@/lib/glocken-spool.setup'
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
    let vm = reactive({})

    onMounted(() => {
      vm = useAudioGrid(props)
    })

    return {
      ...vm
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
