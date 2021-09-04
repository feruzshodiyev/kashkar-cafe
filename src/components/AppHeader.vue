<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-dark
      ftco_navbar
      bg-dark
      ftco-navbar-light
    "
    id="ftco-navbar"
  >
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="navbar-brand"
        ><img src="@/assets/01.png" height="50px" />
        <small
          style="
            font-family: 'Great Vibes', cursive;
            color: #c49b63;
            text-transform: capitalize;
            font-size: 25px;
          "
          >Cafe</small
        >
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        id="toggle"
      >
        <span class="oi oi-menu"></span> Menu
      </button>
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <router-link
            tag="li"
            :to="{ name: 'Home' }"
            class="nav-item"
            active-class="active"
          >
            <a
              data-toggle="collapse"
              data-target="#ftco-nav"
              role="button"
              class="nav-link"
              >Home</a
            >
          </router-link>
          <router-link
            tag="li"
            class="nav-item"
            active-class="active"
            :to="{ name: 'Menu' }"
          >
            <a
              data-toggle="collapse"
              data-target="#ftco-nav"
              role="button"
              class="nav-link"
              >Menu</a
            >
          </router-link>
          <router-link
            tag="li"
            active-class="active"
            :to="{ name: 'Services' }"
            class="nav-item"
          >
            <a
              data-toggle="collapse"
              data-target="#ftco-nav"
              role="button"
              class="nav-link"
              >Services</a
            >
          </router-link>
          <!--          <router-link-->
          <!--            tag="li"-->
          <!--            active-class="active"-->
          <!--            :to="{ name: 'Blog' }"-->
          <!--            class="nav-item"-->
          <!--          >-->
          <!--            <a-->
          <!--              data-toggle="collapse"-->
          <!--              data-target="#ftco-nav"-->
          <!--              role="button"-->
          <!--              class="nav-link"-->
          <!--              >Blog</a-->
          <!--            >-->
          <!--          </router-link>-->
          <router-link
            tag="li"
            active-class="active"
            :to="{ name: 'About' }"
            class="nav-item"
          >
            <a
              data-toggle="collapse"
              data-target="#ftco-nav"
              role="button"
              class="nav-link"
              >About</a
            >
          </router-link>
          <!--          <li class="nav-item dropdown">-->
          <!--            <a-->
          <!--              class="nav-link dropdown-toggle"-->
          <!--              id="dropdown04"-->
          <!--              data-toggle="dropdown"-->
          <!--              aria-haspopup="true"-->
          <!--              aria-expanded="false"-->
          <!--              >Shop</a-->
          <!--            >-->
          <!--            <div class="dropdown-menu" aria-labelledby="dropdown04">-->
          <!--              <router-link-->
          <!--                :to="{ name: 'Shop' }"-->
          <!--                class="dropdown-item"-->
          <!--                data-toggle="collapse"-->
          <!--                data-target="#ftco-nav"-->
          <!--                role="button"-->
          <!--                >Shop</router-link-->
          <!--              >-->
          <!--              <router-link-->
          <!--                active-class="active"-->
          <!--                :to="{ name: 'ProductSingle' }"-->
          <!--                class="dropdown-item"-->
          <!--                data-toggle="collapse"-->
          <!--                data-target="#ftco-nav"-->
          <!--                role="button"-->
          <!--                >Single Product</router-link-->
          <!--              >-->
          <!--              <router-link-->
          <!--                active-class="active"-->
          <!--                :to="{ name: 'Cart' }"-->
          <!--                class="dropdown-item"-->
          <!--                data-toggle="collapse"-->
          <!--                data-target="#ftco-nav"-->
          <!--                role="button"-->
          <!--                >Cart</router-link-->
          <!--              >-->
          <!--              <router-link-->
          <!--                active-class="active"-->
          <!--                :to="{ name: 'Checkout' }"-->
          <!--                class="dropdown-item"-->
          <!--                data-toggle="collapse"-->
          <!--                data-target="#ftco-nav"-->
          <!--                role="button"-->
          <!--                >Checkout</router-link-->
          <!--              >-->
          <!--            </div>-->
          <!--          </li>-->
          <router-link
            tag="li"
            active-class="active"
            :to="{ name: 'Contact' }"
            class="nav-item"
          >
            <a
              data-toggle="collapse"
              data-target="#ftco-nav"
              role="button"
              class="nav-link"
              >Contact</a
            >
          </router-link>
          <router-link tag="li" :to="{ name: 'Cart' }" class="nav-item cart">
            <a
              data-toggle="collapse"
              data-target="#ftco-nav"
              role="button"
              class="nav-link"
              ><span class="icon icon-shopping_cart"></span
              ><span
                class="bag d-flex justify-content-center align-items-center"
                ><small>{{ count }}</small></span
              ></a
            >
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
  <!-- END nav -->
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    calculateCount() {
      this.count = this.$store.state.cart.reduce((a, b) => {
        return a + b.count;
      }, 0);
      console.log("count", this.count);
    },
  },
  mounted() {
    this.calculateCount();
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (mutation.type === "updateCart") {
        this.calculateCount();
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
};
</script>

<style scoped></style>
