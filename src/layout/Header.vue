<template>
  <div class="sticky z-1000">
    <Banner></Banner>
    <MegaMenu :model="items" class="z-2000">
      <template #start>
        <router-link to="/">
          <Button icon="pi pi-shop" label="vMart"></Button>
        </router-link>
      </template>
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.id" v-slot="{ href, navigate }" :to="'/category/' + item.id" custom>
          <a href="href" v-bind="props.action" @click="navigate" class="font-semibold">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action" class="font-semibold">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </template>
      <template #end>
        <ModeSwitcherButton></ModeSwitcherButton>
        <ShoppingCartButton></ShoppingCartButton>
        <Button>Test</Button>
      </template>
    </MegaMenu>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { CategoryApi } from './../api/CategoryApi';

const homeButtonProps = defineProps({
  icon: 'pi pi-shop',
  title: 'vMart'
})
const items = ref(CategoryApi.getCategories());

</script>
<style scoped></style>
