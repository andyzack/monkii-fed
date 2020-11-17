<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 p-4">
    <div
      class="flex flex-col justify-between bg-white h-full rounded overflow-hidden shadow-sm relative min-h-128 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:border-secondary-color hover:text-secondary-color"
    >
      <div class="px-6 py-4">
        <img :src="image" :alt="name" class="h-48 ml-auto mr-auto" />
      </div>
      <div class="px-6 py-4">
        <div class="font-semibold text-lg leading-tight mb-2">{{ name }}</div>
        <p class="text-base font-normal">${{ price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    id: Number,
    name: String,
    image: String,
    price: Number,
    sizes: Array
  }
};
</script>
