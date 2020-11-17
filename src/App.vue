<template>
  <div id="app" class="w-full h-full">
    <div class="ml-auto mr-auto max-w-5xl h-full bg-gray-100">
      <!-- HEADER COMPONENT -->
      <AppHeader />

      <!-- CARDS COMPONENT -->
      <div class="px-8 py-10">
        <h1 class="text-2xl">Products</h1>

        <!-- cards filter -->
        <div class="flex flex-wrap justify-between items-center pt-2 pb-4">
          <div>{{ products.length }} Items</div>
          <div class="flex flex-wrap justify-between items-center -mx-4">
            <div class="flex flex-wrap justify-between items-center px-4">
              <label for="price" class="text-sm font-medium leading-5 pr-1"
                >Order by:
              </label>
              <select
                v-model="selectedPrice"
                id="price"
                class="form-select pr-2 border border-gray-300 bg-white shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-sm sm:leading-5"
              >
                <option value="asc">Price - Low to High</option>
                <option value="desc">Price - High to Low</option>
              </select>
            </div>
            <div class="flex flex-wrap justify-between items-center px-4">
              <label for="size" class="text-sm font-medium leading-5 pr-1"
                >Filter by size:
              </label>
              <select
                v-model="selectedSize"
                id="size"
                class="form-select pr-2 border border-gray-300 bg-white shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-sm sm:leading-5"
              >
                <option value="">All</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>
            </div>
          </div>
        </div>

        <!-- cards list -->
        <div class="border-gray-400 border-2">
          <div v-if="products.length > 0" class="flex flex-wrap p-4">
            <AppCard
              v-for="(product, key) in products"
              :key="key"
              :id="product.id"
              :name="product.name"
              :image="require('@/assets/images/products/' + product.image)"
              :price="product.price"
              :sizes="product.sizes"
            />
          </div>
          <div v-else class="p-4">Out of stock</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppCard from "./components/AppCard.vue";
import ProductService from "@/services/ProductService.js";

export default {
  name: "App",
  components: {
    AppHeader,
    AppCard
  },
  data() {
    return {
      products: [],
      selectSize: "XL",
      selectPrice: "desc",
      selectedSize: "XL",
      selectedPrice: "desc"
    };
  },
  created() {
    ProductService.getProducts()
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  method: {
    selectPrice() {
      this.$emit("change", this.selectedPrice);
    },
    selectSize() {
      this.$emit("change", this.selectedSize);
    }
  }
};
</script>
