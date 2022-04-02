<template>
  <div class="m-4 font-apple tracking-tight">
    <div class="sticky top-0">
      <retro-header />
    </div>
    <div class="items-center my-12 md:flex">
      <div class="w-full text-center md:w-1/2">
        <h2 class="text-5xl font-bold">
          Explore the old websites aesthetic
        </h2>
        <br>
        <p>Welcome to Web Design History! Explore the websites from the various range of eras! Please be aware that the demo websites only work on desktops/tablets and not on smartphones.</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="~/assets/apple.png">
      </div>
    </div>
    <!-- header -->
    <hr class="my-8 border-black">
    <!-- body -->
    <div class="grid grid-cols-1 gap-4 my-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="info of infos" :key="info.title" class="text-center">
        <nuxt-link :to="info.demo">
          <img :src="info.thumbnail" class="px-4">
        </nuxt-link>
        <nuxt-link :to="info.demo" class="text-2xl font-bold">
          {{ info.title }}
        </nuxt-link>
        <div class="my-auto">
          <div class="text-center">
            <a :href="'https://github.com/lilisako/retro-web-ui/blob/main/components/' + info.demo + '.vue'" target="_blank" class="mx-1 underline">
              Source code
            </a>
            <a :href="info.youtube" target="_blank" class="mx-1 underline">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- body -->
    <hr class="mt-16 mb-4 border-black">
    <div class="text-center">
      <p>Support this project by subscribing to <a href="https://www.youtube.com/channel/UCkCENoTPAxDJ_EkBgO2vOWA" target="_blank">my channel!</a></p>
    </div>
  </div>
</template>

<script>
import RetroHeader from '~/components/retro-header'
export default {
  components: {
    RetroHeader
  },
  data: () => ({
    infos: [
      {
        title: 'Apple 1998',
        thumbnail: 'https://user-images.githubusercontent.com/33516104/161384902-701b8cc1-09d5-4853-b678-51218e3ef1cb.png',
        demo: '/apple-1998',
        youtube: 'https://youtu.be/vMDGvlH-FME'
      },
      {
        title: 'google 1999',
        thumbnail: 'https://user-images.githubusercontent.com/33516104/161384904-18a16404-4d55-4830-a00b-58585594da2f.png',
        demo: '/google-1999',
        youtube: 'https://youtu.be/CqSMhif7Yx4'
      },
      {
        title: 'microsoft 1996',
        thumbnail: 'https://user-images.githubusercontent.com/33516104/161384905-2707c22b-1a3a-4d26-88c7-c8b7eeef3f01.png',
        demo: '/microsoft-1996',
        youtube: 'https://youtu.be/wG9rMlj35pU'
      },
      {
        title: 'Netflix 2003',
        thumbnail: 'https://user-images.githubusercontent.com/33516104/161384909-b9b46faf-75a7-4f32-8f3c-efefb7af0321.png',
        demo: '/netflix-2003',
        youtube: 'https://youtu.be/D6DknclWpqw'
      },
      {
        title: 'Yahoo! 1996',
        thumbnail: 'https://user-images.githubusercontent.com/33516104/161384906-3be0e9e8-4491-4e28-a32b-97cb93ba8a23.png',
        demo: '/yahoo-1996',
        youtube: 'https://youtu.be/zY5t55Puzic'
      }
    ]
  })
}
</script>
