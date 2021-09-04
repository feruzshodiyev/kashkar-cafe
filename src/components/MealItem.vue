<template>
  <div class="menu-wrap">
    <a

        class="menu-img img mb-4"
        :style="`background-image: url(${product.image})`"
    ></a>
    <div class="text">
      <h3><a >{{product.name}}</a></h3>
      <p>{{product.description}}</p>
      <p class="price"><span>${{product.price}}</span></p>
      <p>
        <a
            @click="addToCart"
            class="btn btn-primary btn-outline-primary"
        >Add to cart</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "MealItem",
  props:{
  product:{
    type: Object,
    required: true
  }
  },
  methods:{
    addToCart(){
      this.$store.dispatch("addToCart", this.product)
    }
  }
}
</script>

<style scoped>

</style>
