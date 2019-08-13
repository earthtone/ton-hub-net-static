<template>
  <main class="layout font-sans">
    <header class="flex justify-between pr-3 pt-3">
      <slot name="logo">
        <span></span>
      </slot>
      <nav class="bg-white text-black border-black border-solid border px-6 py-1">
        <!--  <g-link to="/blog/" class="underline font-light hover:text-gray-500 mr-6">Blog</g-link> -->
        <a href="https://www.linkedin.com/in/tonio-hubilla-113840a3" class="underline font-light hover:text-gray-500 mr-6">LinkedIn</a>
        <a href="https://github.com/earthtone" class="underline font-light hover:text-gray-500">Github</a>
      </nav>
    </header>
    <slot/>
  </main>
</template>
<style src="../main.css" />
