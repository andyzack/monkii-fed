<template>
  <div id="app" class="w-full h-full">
    <div class="ml-auto mr-auto max-w-5xl h-full bg-gray-100">
      <!-- HEADER COMPONENT -->
      <AppHeader />

      <!-- CARDS COMPONENT -->
      <div class="px-4 py-5 md:px-8 md:py-10">
        <h1 class="text-2xl">Products</h1>

        <!-- cards filter -->
        <div class="flex flex-wrap justify-between items-center pt-2 pb-4">
          <div v-if="products.length">{{ products.length }} Items</div>
          <div v-if="products.length" class="flex flex-wrap justify-between items-center -mx-4">
            <div class="flex flex-wrap justify-between items-center px-4 my-2">
              <label for="price" class="text-sm font-medium leading-5 pr-1 w-24 sm:w-auto"
                >Order by:
              </label>
              <select
                id="price"
                v-model="price"
                @change="handlePrice(price)"
                class="form-select pr-2 border border-gray-300 bg-white shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-sm sm:leading-5 w-48 sm:w-auto"
              >
                <option value="">Price - Order by value</option>
                <option value="asc">Price - Low to High</option>
                <option value="desc">Price - High to Low</option>
              </select>
            </div>
            <div class="flex flex-wrap justify-between items-center px-4 my-2">
              <label for="size" class="text-sm font-medium leading-5 pr-1 w-24 sm:w-auto"
                >Filter by size:
              </label>
              <select
                id="size"
                v-model.number="size"
                @change="handleSize(size)"
                class="form-select pr-2 border border-gray-300 bg-white shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out text-sm sm:leading-5 w-48 sm:w-auto"
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
          <div v-if="products.length" class="flex flex-wrap p-2 md:p-4">
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
          <div v-else class="p-16 text-center">
            <div class="lds-dual-ring inline-block w-32 h-32 mr-auto ml-auto"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppCard from "@/components/AppCard.vue";
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
      size: "",
      price: ""
    };
  },
  created() {
    ProductService.getProducts()
      .then(response => {
        this.products = response.data;
        this.prodsArr = [...this.products];
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    handlePrice(obj) {
      if (obj == "desc") {
        // eslint-disable-next-line
        this.products = this.prodsArr.sort((a, b) => (a.price > b.price ? -1 : 1));
      } else if (obj == "asc") {
        // eslint-disable-next-line
        this.products = this.prodsArr.sort((a, b) => (a.price < b.price ? -1 : 1));
      } else {
        // eslint-disable-next-line
        this.products = this.prodsArr.sort((a, b) => (a.id < b.id ? -1 : 1));
      }
    },
    handleSize(obj) {
      if (obj) {
        this.products = this.prodsArr.filter(product =>
          product.sizes.includes(obj)
        );
      } else {
        this.products = this.prodsArr;
      }
    }
  }
};
</script>
