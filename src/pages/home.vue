<template>
  <v-row>
    <v-col cols="12" md="4" v-for="item in items" :key="item.id">
      <v-card
        subtitle="item.sku"
        text="item.description"
        title="item.name"
      />
      <div class="text-center text-caption">
        Price: {{ item.price }} Stock: {{ item.stock }}
    </div>
    </v-col>

    <v-pagination :length="4" />
  </v-row>
</template>

<script>
import products from '@/api/product/products.js';

export default {
    data(){
        return{
            items: [],
        };
    },
    async created() {
        await products.getProducts().then((response) => {
          const data = response.data;
          
          this.items = data.data;
        });
    },
};
</script>