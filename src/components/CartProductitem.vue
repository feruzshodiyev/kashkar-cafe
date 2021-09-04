<template>
  <tr class="text-center">
    <td class="product-remove">
      <a @click="removeProduct"><span class="icon-close"></span></a>
    </td>

    <td class="image-prod">
      <div class="img" :style="`background-image: url(${product.image})`"></div>
    </td>

    <td class="product-name">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
    </td>

    <td class="price">${{ product.price }}</td>

    <td class="quantity">
      <div class="input-group mb-3">
        <input
          v-model="count"
          @input="updateCount"
          type="text"
          name="quantity"
          class="quantity form-control input-number"
          min="1"
          max="100"
        />
      </div>
    </td>

    <td class="total">
      ${{
        (Math.round((product.count * product.price) * 100) / 100).toFixed(2)
      }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "CartProductitem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      count: null,
    };
  },
  methods: {
    removeProduct() {
      this.$store.dispatch("removeFromCart", this.product.id);
    },
    updateCount() {
      if (/^\d+$/.test(this.count) && Number.parseInt(this.count, 10) > 0) {
        this.$store.dispatch("updateProductCount", {
          id: this.product.id,
          count: Number.parseInt(this.count, 10),
        });
      } else {
        this.count = this.product.count;
      }
    },
  },
  mounted() {
    this.count = this.product.count;
  },
};
</script>

<style scoped></style>
