 <template functional>
  <section class="hero flex flex-col w-full justify-center items-center md:flex-col-reverse md:justify-start text-white top-0 left-0 absolute mt-20 md:mt-0 lg:w-1/2 xl:w-1/3 lg:h-full lg:justify-between lg:bg-gray-900 lg:p-6">
    <g-image src="~/assets/img/avatar.jpg" alt="Tonio Hubilla" class="max-w-full w-32 rounded-full md:-mt-8 md:z-10 lg:self-end" />
    <article class="md:bg-gray-900 md:w-full md:pt-12 md:pb-8 lg:self-start md:text-center lg:text-left">
      <h1 class="font-hairline text-xl leading-none md:text-2xl">{{props.name}}</h1>
      <hr class="md:hidden"/>
      <h2 class="font-hairline text-lg pb-4">{{props.title}}</h2>
    </article>
  </section>
</template>
