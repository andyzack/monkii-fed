<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 p-2 md:p-4">
    <div
      class="flex flex-col justify-between bg-white h-full rounded overflow-hidden shadow-sm relative min-h-128 transition duration-500 ease-in-out border-2 border-white hover:border-opacity-25 hover:border-red-600 hover:text-red-600 cursor-pointer"
    >
      <div
        class="absolute right-0 top-0 m-2 text-secondary-color hover:text-primary-color text-3xl"
      >
        <component
          v-bind:is="component"
          fill="#e86d6d"
          class="w-10 h-auto"
          @click="myFavourites"
          :class="{ active: isActive }"
        />
      </div>
      <div class="px-6 py-4">
        <img :src="image" :alt="name" class="h-32 md:h-48 ml-auto mr-auto" />
      </div>
      <div class="px-6 py-4">
        <div class="font-semibold text-lg leading-tight mb-2">{{ name }}</div>
        <p class="text-base font-normal">${{ price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconFavourite from "@/assets/images/favourite.svg?inline";
import IconFavourited from "@/assets/images/favourited.svg?inline";

export default {
  name: "AppCard",
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: "@/assets/images/products/placeholder.png"
    },
    price: {
      type: Number,
      required: true
    },
    sizes: {
      type: Array,
      required: true
    }
  },
  components: {
    IconFavourite,
    IconFavourited
  },
  data() {
    return {
      isActive: false,
      component: "IconFavourite"
    };
  },
  methods: {
    myFavourites() {
      this.isActive = !this.isActive;
      if (this.component === IconFavourited) {
        this.component = IconFavourite;
        this.$emit("update-favourites", { id: this.id, type: "del" });
      } else {
        this.component = IconFavourited;
        this.$emit("update-favourites", { id: this.id, type: "add" });
      }
    }
  }
};
</script>
