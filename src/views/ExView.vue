<template>
  <!-- product -->
  <div class="container">
    <div class="product">
      <div class="image">
        <img :src="image" />
      </div>
    
        <div class="variants">
          <span
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            @mouseover="updateImage(index)"
            class="colorBox"
            :style="{ backgroundColor: variant.variantColor }"
          >
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "MyProduct",
  
  data() {
    return {
      selectedVariant: 0,
      variants: [
        {
          variantId: 1,
          variantColor: "red",
          variantImage: require("../../image/summer.png"),
          variantQty: 20,
        },
        {
          variantId: 2,
          variantColor: "white",
          variantImage: require("../../image/autumn.png"),
          variantQty: 5,
        },
        {
          variantId: 3,
          variantColor: "Black",
          variantImage: require("../../image/summer.png"),
          variantQty: 0,
        },
      ],
      reviews: []
    };
  },
  methods: {
    updateImage(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inventory() {
      return this.variants[this.selectedVariant].variantQty;
    },
  },

};
</script>

<style scoped>


.product .variants {
  margin: 0 0 25px;
}

.product .colorBox {
  width: 45px;
  height: 45px;
  display: inline-block;
  border: 5px solid #ccc;
  cursor: pointer;
}


</style>