<template>
  <div class="bg-black px-4 py-2 md:px-8 md:py-4 text-left relative">
    <img alt="andyzack" src="../assets/images/logo.png" class="h-10 md:h-14" />
    <div class="absolute right-0 top-0 m-4">
      <IconFavourite fill="#ffffff" class="w-10 h-auto" />
      <span
        class="absolute right-0 top-0 bg-red-500 text-white text-xs border-transparent rounded-full w-4 h-4 text-center"
        >{{ favourites.length }}</span
      >
    </div>
  </div>
</template>

<script>
import IconFavourite from "@/assets/images/favourite.svg?inline";

export default {
  name: "AppHeader",
  components: {
    IconFavourite
  },
  props: {
    favourites: Array
  }
};
</script>
