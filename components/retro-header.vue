<template>
  <div class="sticky top-0">
    <div class="mb-2 font-apple tracking-tight bg-white border-b border-black">
      <nuxt-link to="/" class="text-black no-underline">
        <div class="flex items-end py-4">
          <h1 class="text-3xl font-bold">
            Web Design History
          </h1>
          <img src="~/assets/imac.jpeg" width="50">
          <p v-if="title" class="text-3xl">
            －{{ title }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>
