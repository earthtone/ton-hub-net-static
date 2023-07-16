<script>
  import NavList from "$lib/components/NavList.svelte";
  import Hero from "../lib/components/Hero.svelte";
  import Quotation from "../lib/components/Quotation.svelte";

  const links = [
    {
      path: "https://github.com/earthtone",
      text: "Github",
    },
    {
      path: "https://www.linkedin.com/in/tonio-hubilla-113840a3/",
      text: "LinkedIn",
    },
    {
      path: "/resume",
      text: "Resume",
    },
  ];
</script>

<div id="app" class="panel">
  <header>
    <NavList {links} />
  </header>
  <Hero name="Tonio Hubilla">
    <h2 class="mt-0">
      Web Developer
    </h2>
  </Hero>
</div>
<div class="panel block-center">
  <Quotation
    quotation="...I come from Cyberspace, the new home of Mind."
    author="John Perry Barlow"
    sourceUrl="https://www.eff.org/cyberspace-independence"
    sourceName="A Declaration of the Independence of Cyberspace"/>
</div>
<div id="cloud" class="panel">
  <h3 class="box inverse">I believe in the web...</h3>
  <article class="box">
    <p>
    Over the past half-millenia, no platform has revolutionized the way people communicate, process and perceive information quite as much as the World Wide Web. In over one hundred years, no other platform has distributed and, by extension, democratized the means of producing media. For all its limitations and eccentricities the Web has delivered on the promise of universal authorship.
   </p>
    <p>
      In these chaotic and uncertain times, where misinformation proliferates exponentially and where the tools of control (i.e. surveillance and censorship) are touted as the means by which to protect our liberty, those of us who care must take responsibility for building the Web we need and not just the Web we deserve.
    </p>
  </article>
</div>
<div class="panel block-center">
  <Quotation
    quotation="The cyborg would not recognize the Garden of Eden; it is not made of mud and cannot dream of returning to dust."
    author="Donna Haraway"
    sourceUrl="https://sites.evergreen.edu/politicalshakespeares/wp-content/uploads/sites/226/2015/12/Haraway-Cyborg-Manifesto-2.pdf"
    sourceName="A Cyborg Manifesto"/>
</div>
<div id="charm" class="panel">
  <h3 class="box inverse">I believe in people...</h3>
  <article class="box">
    <p>
    Human beings are wildly inefficent, unpredictable, and generally "weird". We do ridiculous things simply for the sake of doing them. We rarely say what we mean, and even more rarely mean what we say. We are often cruel and we are often kind. We are full of wreckless, unbridled curiosity. We sometimes watch David Lynch movies without understanding what they're really about. We are capable of so much, and almost always fall short of our own potential. We are absurd and we are silly.
    </p>
    <p>
      I believe in the power and the profundity of all this. I belive art should celbrate the incongruous and the inane. I belive communites and networks should foster  the unpredictable instead of trying to tame it and control it. I belive that technology can help us become <span class="italic">better humans</span> instead of encouraging us to become <span class="italic">less human</span>.
    </p>
    <p>
      I believe in the future.
    </p>
  </article>
</div>
<div id="weird" class="panel box inverse block-center">
  <div>
    <h3 class="mb-0">
        Keep the world strang<span class="tilted">e</span>.
    </h3>
    <h4 class="mt-0">
      Keep the web weird.
    </h4>
  </div>
</div>

<style>
/*
  Augment tailwindcss for more fine-grained
  control and native CSS animations
 */

#app {
  background-image: url("/assets/img/background-one.jpg");
}

#cloud {
  background-image: url("/assets/img/background-two.jpg");
}

#charm {
  background-image: url("/assets/img/DSC01922.png");
}

#weird {
  text-align: center;
}

.panel {
  min-height: 100vh;
  background-position: bottom center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: repeat;

  padding: 1rem;
  position: relative;
}

.panel > :not(header), .panel > h3 {
  max-width: 60ch;
  margin-inline: auto;
}

.box {
  --fg-color: black;
  --bg-color: white;

  background-color: var(--bg-color);
  border: 4px solid var(--fg-color);
  color: var(--fg-color);
  padding: 1rem;
}

.box.inverse {
  --fg-color: white;
  --bg-color: black;
}

.block-center {
  display: flex;
  align-items: center;
}

:global(.nav-list) {
  background-color: white;
  border: 4px solid black;
  padding-inline: 1rem;
  padding-block: 0.25rem;
}

:global(#hero) {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

:global(#hero img) {
  width: 10rem;
  border-radius: 50%;
}

:global(#hero h1) {
  margin-block-end: 0;
}

.mb-0 {
  margin-block-end: 0;
}

.mt-0 {
  margin-block-start: 0;
}
</style>
