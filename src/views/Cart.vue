<template>
  <div>
    <section class="home-slider owl-carousel">
      <div
        class="slider-item"
        style="background-image: url(images/bg_02.jpg)"
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row slider-text justify-content-center align-items-center"
          >
            <div class="col-md-7 col-sm-12 text-center ftco-animate">
              <h1 class="mb-3 mt-5 bread">Cart</h1>
              <p class="breadcrumbs">
                <span class="mr-2"><a href="index.html">Home</a></span>
                <span>Cart</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-cart">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ftco-animate">
            <div class="cart-list">
              <table class="table">
                <thead class="thead-primary">
                  <tr class="text-center">
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <CartProductitem
                    v-for="item in $store.state.cart"
                    :key="item.id"
                    :product="item"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col col-lg-3 col-md-6 mt-5 cart-wrap ftco-animate">
            <div class="cart-total mb-3">
              <h3>Cart Totals</h3>
              <p class="d-flex">
                <span>Subtotal</span>
                <span>${{ subtotal.toFixed(2) }}</span>
              </p>
              <p class="d-flex">
                <span>Delivery</span>
                <span>$0.00</span>
              </p>
              <p class="d-flex">
                <span>Discount</span>
                <span>$0.00</span>
              </p>
              <hr />
              <p class="d-flex total-price">
                <span>Total</span>
                <span>${{ subtotal.toFixed(2) }}</span>
              </p>
            </div>
            <p class="text-center">
              <router-link
                tag="a"
                to="Checkout"
                class="btn btn-primary py-3 px-4"
                >Proceed to Checkout</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </section>

<!--    <section class="ftco-section">-->
<!--      <div class="container">-->
<!--        <div class="row justify-content-center mb-5 pb-3">-->
<!--          <div class="col-md-7 heading-section ftco-animate text-center">-->
<!--            <span class="subheading">Discover</span>-->
<!--            <h2 class="mb-4">Related products</h2>-->
<!--            <p>-->
<!--              Far far away, behind the word mountains, far from the countries-->
<!--              Vokalia and Consonantia, there live the blind texts.-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="row">-->
<!--          <div class="col-md-3">-->
<!--            <div class="menu-entry">-->
<!--              <a-->
<!--                -->
<!--                class="img"-->
<!--                style="background-image: url(images/menu-1.jpg)"-->
<!--              ></a>-->
<!--              <div class="text text-center pt-4">-->
<!--                <h3><a >Coffee Capuccino</a></h3>-->
<!--                <p>-->
<!--                  A small river named Duden flows by their place and supplies-->
<!--                </p>-->
<!--                <p class="price"><span>$5.90</span></p>-->
<!--                <p>-->
<!--                  <a  class="btn btn-primary btn-outline-primary"-->
<!--                    >Add to Cart</a-->
<!--                  >-->
<!--                </p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-3">-->
<!--            <div class="menu-entry">-->
<!--              <a-->
<!--                -->
<!--                class="img"-->
<!--                style="background-image: url(images/menu-2.jpg)"-->
<!--              ></a>-->
<!--              <div class="text text-center pt-4">-->
<!--                <h3><a >Coffee Capuccino</a></h3>-->
<!--                <p>-->
<!--                  A small river named Duden flows by their place and supplies-->
<!--                </p>-->
<!--                <p class="price"><span>$5.90</span></p>-->
<!--                <p>-->
<!--                  <a  class="btn btn-primary btn-outline-primary"-->
<!--                    >Add to Cart</a-->
<!--                  >-->
<!--                </p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-3">-->
<!--            <div class="menu-entry">-->
<!--              <a-->
<!--                -->
<!--                class="img"-->
<!--                style="background-image: url(images/menu-3.jpg)"-->
<!--              ></a>-->
<!--              <div class="text text-center pt-4">-->
<!--                <h3><a >Coffee Capuccino</a></h3>-->
<!--                <p>-->
<!--                  A small river named Duden flows by their place and supplies-->
<!--                </p>-->
<!--                <p class="price"><span>$5.90</span></p>-->
<!--                <p>-->
<!--                  <a  class="btn btn-primary btn-outline-primary"-->
<!--                    >Add to Cart</a-->
<!--                  >-->
<!--                </p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-md-3">-->
<!--            <div class="menu-entry">-->
<!--              <a-->
<!--                -->
<!--                class="img"-->
<!--                style="background-image: url(images/menu-4.jpg)"-->
<!--              ></a>-->
<!--              <div class="text text-center pt-4">-->
<!--                <h3><a >Coffee Capuccino</a></h3>-->
<!--                <p>-->
<!--                  A small river named Duden flows by their place and supplies-->
<!--                </p>-->
<!--                <p class="price"><span>$5.90</span></p>-->
<!--                <p>-->
<!--                  <a  class="btn btn-primary btn-outline-primary"-->
<!--                    >Add to Cart</a-->
<!--                  >-->
<!--                </p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
  </div>
</template>

<script>
import CartProductitem from "@/components/CartProductitem";
export default {
  name: "Cart",
  components: { CartProductitem },
  data() {
    return {
      subtotal: 0,
    };
  },
  methods: {
    calculateTotal() {
      this.subtotal = this.$store.state.cart.reduce((a, b) => {
        return (Math.round((a + b.price * b.count) * 100) / 100);
      }, 0);
    },
  },
  mounted() {
    this.calculateTotal();
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (mutation.type === "updateCart") {
        this.calculateTotal();
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
};
</script>

<style scoped></style>
