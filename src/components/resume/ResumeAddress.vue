<template functional>
  <div class="w-full max-w-lg md:w-1/3 p-3 flex flex-col font-thin">
    <p class="whitespace-pre lg:pl-3">
      {{ props.streetAddress }}
      {{ props.cityState }} {{ props.postcode }}
    </p>
    <a :href="`mailto:${props.emailprops}`" class="pl-3 lg:pl-8">{{props.emailAddress}}</a>
    <a :href="`tel:${props.phoneNumber}`" class="pl-3 lg:pl-8">{{props.phoneNumber}}</a>
  </div>
</template>

<script>
export default {
  name: 'resume-address',
  props: [
    'streetAddress',
    'cityState',
    'postcode',
    'emailAddress',
    'phoneNumber'
  ]
}
</script>
