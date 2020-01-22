 <template functional>
  <section class="absolute top-0 left-0 flex flex-col items-center justify-center w-full mt-20 text-white hero md:flex-col-reverse md:justify-start md:mt-0 lg:w-1/2 xl:w-1/3 lg:h-full lg:justify-between lg:bg-gray-900 lg:p-6">
    <g-image src="/assets/img/avatar.jpg" alt="Tonio Hubilla" class="w-32 max-w-full rounded-full md:-mt-8 md:z-10 lg:self-end" />
    <article class="md:bg-gray-900 md:w-full md:pt-12 md:pb-8 lg:self-start md:text-center lg:text-left">
      <h1 class="text-xl font-hairline leading-none md:text-2xl">{{props.name}}</h1>
      <hr class="md:hidden"/>
      <slot></slot>
    </article>
  </section>
</template>
