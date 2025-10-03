<template>
  <div class="card">
    <h1 class="ml-12 mt-3 mb-3 font-semibold text-3xl">Deals of the week</h1>
    <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular
      :autoplayInterval="4000">
      <template #item="slotProps">
        <div class="border border-surface-200 dark:border-surface-700 rounded m-2 p-3">
          <div class="mb-4">
            <div class="relative mx-auto">
              <img :src="img" :alt="slotProps.data.name" class="w-full rounded" />
              <div class="absolute" style="right: 4px; top: 4px">
                <Button icon="pi pi-plus"></Button>
              </div>
            </div>
          </div>
          <div class="mb-2 font-medium">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { DealsApi } from "../../api/DealsApi";
import img from './../../assets/no_image_available.webp';


onMounted(() => {
  DealsApi.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

</script>
