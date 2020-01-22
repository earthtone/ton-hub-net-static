<template>
  <Layout id="home-page" class="h-screen bg-black">
    <section class="flex justify-start w-full h-full p-0 panel">
      <hero :name="state.name" :title="state.title" class="md:w-1/2 lg:w-1/3">
        <h2 class="pb-4 text-lg font-hairline">
          <span>{{ state.lang }}</span> Developer
        </h2>
        <!-- <h1>{{state.index}}</h1> -->
      </hero>
    </section>
    <quotation
      quotation="...I come from Cyberspace, the new home of Mind."
      author="John Perry Barlow"
      sourceUrl="https://www.eff.org/cyberspace-independence"
      sourceName="A Declaration of the Independence of Cyberspace"/>
    <div id="cloud" class="w-full min-h-full p-0 p-8 md:flex md:flex-col md:items-center">
      <h3 class="self-start pb-3 text-2xl text-white">I believe in the power of the web...</h3>
      <article class="max-w-3xl p-6 -mx-6 text-gray-700 bg-white border-8 border-gray-900 md:mt-32 text-md">
        <p>
        Over the past half-millenia, no platform has revolutionized the way people communicate, process and perceive information quite as much as the World Wide Web. In over one hundred years, no other platform has distributed and, by extension, democratized the means of producing media. For all its limitations and eccentricities the Web has delivered on the promise of universal authorship.
       </p>
        <p class="mt-6">
          In these chaotic and uncertain times, where misinformation proliferates exponentially and where the tools of control (i.e. surveillance and censorship) are touted as the means by which to protect our liberty, those of us who care must take responsibility for building the Web we need and not just the Web we deserve.
        </p>
      </article>
    </div>
    <quotation
      quotation="The cyborg would not recognize the Garden of Eden; it is not made of mud and cannot dream of returning to dust."
      author="Donna Haraway"
      sourceUrl="https://sites.evergreen.edu/politicalshakespeares/wp-content/uploads/sites/226/2015/12/Haraway-Cyborg-Manifesto-2.pdf"
      sourceName="A Cyborg Manifesto"
      class="my-64 lg:my-0" />
    <div id="charm" class="w-full p-0 p-8 md:flex md:flex-col md:items-center">
      <h3 class="self-start pb-3 text-2xl text-white">I believe in people...</h3>
      <article class="max-w-3xl p-6 -mx-6 text-gray-700 bg-white border-8 border-gray-900 md:mt-32 text-md">
        <p>
        Human beings are wildly inefficent, unpredictable, and generally "weird". We do ridiculous things simply for the sake of doing them. We rarely say what we mean, and even more rarely mean what we say. We are often cruel and we are often kind. We are full of wreckless, unbridled curiosity. We sometimes watch David Lynch movies without understanding what they're really about. We are capable of so much, and almost always fall short of our own potential. We are absurd and we are silly.
        </p>
        <p class="mt-6">
          I believe in the power and the profundity of all this. I belive art should celbrate the incongruous and the inane. I belive communites and networks should foster  the unpredictable instead of trying to tame it and control it. I belive that technology can help us become <span class="italic">better humans</span> instead of encouraging us to become <span class="italic">less human</span>.
        </p>
        <p class="mt-6">
          I believe in the future.
        </p>
      </article>
    </div>
    <div class="flex flex-col justify-center w-full h-screen px-12 py-64 text-white bg-black items center lg:my-0">
      <h1 class="text-2xl leading-none md:text-3xl">
          Keep the world strang<span class="tilted">e</span>.
      </h1>
      <h2 class="text-lg leading-none md:text-2xl">
        Keep the web weird.
      </h2>
    </div>
    <div class="flex flex-col justify-center w-full h-screen px-12 py-64 text-white bg-blue-900 items center lg:my-0">
      <p class="text-center">
      This site is a <a href="https://jamstack.org" class="underline">JAMStack site</a> built with <span role="img">🔥</span> using <a class="underline" href="https://gridsome.org">Gridsome</a> &amp; <a class="underline" href="https://tailwindcss.com">Tailwind</a>.
      </p>
      <p class="text-center">
      It is automatically audited as per <a href="https://a11yproject.com/" class="underline">a11y guidlines</a> using <a class="underline" href="https://eslint.org">eslint</a> and its <a class="underline" href="https://github.com/kevva/eslint-plugin-jsx-a11y">plugin ecosystem</a>.
      </p>
      <p class="text-center">
      It is hosted on both the standard web using <a class="underline" href="https://aws.amazon.com">AWS</a> and the <a class="underline" href="dat://earthtone.hashbase.io">decentralized web</a> using <a class="underline" href="https://hashbase.io">Hashbase</a>.
      </p>
    </div>
  </Layout>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import Quotation from '@/components/home/Quotation.vue'
import { computed, reactive } from '@vue/composition-api'
import { TweenLite } from 'gsap'

const tech = [
  'HTML',
  'CSS',
  'JavaScript',
  'Elm',
  'Frontend',
  'NodeJS',
  'Serverless',
  'Web'
]

export default {
  components: {
    Hero,
    Quotation
  },
  setup (_, context) {
    let index = 0
    const state = reactive({
      name: 'Tonio Hubilla',
      interval: null,
      lang: tech[0]
    })

    const startLoop = () => {
      state.interval = setInterval(() => {
        index = (index + 1) % tech.length
        TweenLite.to(state, 0.1, {
          lang: tech[index]
        })
      }, 1500)
    }

    const stopLoop = () => {
      clearInterval(state.interval)
    }

    return {
      state,
      startLoop,
      stopLoop
    }
  },
  mounted () {
    this.startLoop()
  }
}
</script>

<style scoped>
/*
  Augment tailwindcss for more fine-grained
  control and native CSS animations
 */

#app {
  background-image: url("~@/assets/img/background-one.jpg");
  background-position: bottom center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat;
}

/deep/ #cloud {
  background-image: url("~@/assets/img/background-two.jpg");
  background-position: bottom center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat;
}

/deep/ #charm {
  background-image: url("~@/assets/img/DSC01922.png");
  background-position: bottom center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat;
}
</style>
