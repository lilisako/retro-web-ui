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
        thumbnail: 'https://user-images.githubusercontent.com/33516104/160389409-8e1e8343-ddfb-4e52-a04c-07f238604507.png',
        demo: '/apple-1998',
        youtube: 'https://youtu.be/vMDGvlH-FME'
      },
      {
        title: 'google 1999',
        thumbnail: 'https://user-images.githubusercontent.com/33516104/160389723-ca3a8172-d7a4-4c05-aaf0-6bd432277987.png',
        demo: '/google-1999',
        youtube: 'https://youtu.be/CqSMhif7Yx4'
      },
      {
        title: 'microsoft 1996',
        thumbnail: 'https://user-images.githubusercontent.com/33516104/160390047-a8aae9ce-4916-486c-adec-2619fbb6eef6.png',
        demo: '/microsoft-1996',
        youtube: 'https://youtu.be/wG9rMlj35pU'
      },
      {
        title: 'Netflix 2003',
        thumbnail: 'https://user-images.githubusercontent.com/33516104/160390543-bb290c4c-e11c-489b-98f8-cdaacc5665ca.png',
        demo: '/netflix-2003',
        youtube: 'https://youtu.be/D6DknclWpqw'
      },
      {
        title: 'Yahoo! 1996',
        thumbnail: 'https://user-images.githubusercontent.com/33516104/160390489-d3e41811-6f7e-444d-b7a4-6f0e4134c8f2.png',
        demo: '/yahoo-1996',
        youtube: 'https://youtu.be/zY5t55Puzic'
      }
    ]
  })
}
</script>
