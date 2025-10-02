<template>
  <div class="sticky z-1000">
    <Banner></Banner>
    <MegaMenu :model="items" class="z-2000">
      <template #start>
        <RouterLink to="/">
          <Button icon="pi pi-shop" label="vMart"></Button>
        </RouterLink>
      </template>
      <template #item="{ item, props, hasSubmenu }">
        <RouterLink v-if="item.id" v-slot="{ href, navigate }" :to="'/category/' + item.id" custom>
          <a :href="href" v-bind="props.action" @click="navigate" class="font-semibold">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </RouterLink>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action" class="font-semibold">
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
