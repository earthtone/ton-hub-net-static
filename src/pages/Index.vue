<template>
  <Layout id="home-page" class="h-screen bg-black">
    <section class="panel w-full h-full flex justify-start p-0">
      <hero :name="name" :title="title" class="md:w-1/2 lg:w-1/3" />
    </section>
    <quotation
      quotation="...I come from Cyberspace, the new home of Mind."
      author="John Perry Barlow"
      sourceUrl="https://www.eff.org/cyberspace-independence"
      sourceName="A Declaration of the Independence of Cyberspace"/>
    <div id="cloud" class="p-8 w-full p-0 md:flex md:flex-col md:items-center min-h-full">
      <h3 class="text-2xl self-start text-white pb-3">I believe in the power of the web...</h3>
      <article class="-mx-6 md:mt-32 max-w-3xl text-md text-gray-700 bg-white border-gray-900 border-8 p-6">
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
    <div id="charm" class="p-8 w-full p-0 md:flex md:flex-col md:items-center">
      <h3 class="text-2xl self-start text-white pb-3">I believe in people...</h3>
      <article class="-mx-6 md:mt-32 max-w-3xl text-md text-gray-700 bg-white border-gray-900 border-8 p-6">
        <p>
        Human beings are wildly inefficent, unpredictable, and generally "weird". We do ridiculous things simply for the sake of doing them. We rarely say what we mean, and even more rarely mean what we say. We are often cruel and we are often kind. We are full of reckless, unbridled curiosity. We sometimes watch David Lynch movies without understanding what they're really about. We are capable of so much, and almost always fall short of our own potential. We are absurd and we are silly.
        </p>
        <p class="mt-6">
          I believe in the power and the profundity of all this. I belive art should celbrate the incongruous and the inane. I belive communites and networks should foster  the unpredictable instead of trying to tame it and control it. I belive that technology can help us become <span class="italic">better humans</span> instead of encouraging us to become <span class="italic">less human</span>.
        </p>
        <p class="mt-6">
          I believe in the future.
        </p>
      </article>
    </div>
    <div class="h-screen w-full flex justify-center items center flex-col px-12 bg-black text-white py-64 lg:my-0">
      <h1 class="text-2xl md:text-3xl leading-none">
          Keep the world strang<span class="tilted">e</span>.
      </h1>
      <h2 class="text-lg md:text-2xl leading-none">
        Keep the web weird.
      </h2>
    </div>
  </Layout>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import Quotation from '@/components/home/Quotation.vue'
import { ref } from '@vue/composition-api'

export default {
  components: {
    Hero,
    Quotation
  },
  setup (_, context) {
    const name = ref('Tonio Hubilla')
    const title = ref('Javascript Developer')
    return {
      name,
      title
    }
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
