<template>
  <div>
    <section class="home-slider owl-carousel">
      <div
        class="slider-item"
        style="background-image: url(images/bg_02.jpeg)"
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row slider-text justify-content-center align-items-center"
          >
            <div class="col-md-7 col-sm-12 text-center ftco-animate">
              <h1 class="mb-3 mt-5 bread">Our Menu</h1>
              <p class="breadcrumbs">
                <span class="mr-2"
                  ><router-link :to="{ name: 'Home' }" tag="a"
                    >Home</router-link
                  ></span
                >
                <span>Menu</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-intro">
      <div class="container-wrap">
        <div class="wrap d-md-flex align-items-xl-end">
          <div class="info">
            <div class="row no-gutters">
              <div class="col-md-4 d-flex ftco-animate">
                <div class="icon"><span class="icon-phone"></span></div>
                <div class="text">
                  <h3>000 (123) 456 7890</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
              <div class="col-md-4 d-flex ftco-animate">
                <div class="icon"><span class="icon-my_location"></span></div>
                <div class="text">
                  <h3>198 West 21th Street</h3>
                  <p>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </div>
              </div>
              <div class="col-md-4 d-flex ftco-animate">
                <div class="icon"><span class="icon-clock-o"></span></div>
                <div class="text">
                  <h3>Open Monday-Friday</h3>
                  <p>8:00am - 9:00pm</p>
                </div>
              </div>
            </div>
          </div>
          <BookTable />
        </div>
      </div>
    </section>

    <!--    <section class="ftco-section">-->
    <!--      <div class="container">-->
    <!--        <div class="row">-->
    <!--          <div-->
    <!--            class="col-md-6 mb-5 pb-3"-->
    <!--            v-for="item in $store.state.sections"-->
    <!--            :key="item.id"-->
    <!--          >-->
    <!--            <h3 class="mb-5 heading-pricing ftco-animate">{{item.name}}</h3>-->
    <!--            <div class="pricing-entry d-flex ftco-animate">-->
    <!--              <div-->
    <!--                class="img"-->
    <!--                style="background-image: url(images/dish-1.jpg)"-->
    <!--              ></div>-->
    <!--              <div class="desc pl-3">-->
    <!--                <div class="d-flex text align-items-center">-->
    <!--                  <h3><span>Cornish - Mackerel</span></h3>-->
    <!--                  <span class="price">$20.00</span>-->
    <!--                </div>-->
    <!--                <div class="d-block">-->
    <!--                  <p>-->
    <!--                    A small river named Duden flows by their place and supplies-->
    <!--                  </p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->

    <section class="ftco-menu mb-5 pb-5">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <span class="subheading">Discover</span>
            <h2 class="mb-4">Our Products</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        <MealSectionTabs />
      </div>
    </section>
  </div>
</template>

<script>
import MealSectionTabs from "@/components/MealSectionTabs";
import { initialize } from "@/plugins/externalInitializer";
import BookTable from "@/components/BookTable";

export default {
  name: "Menu",
  components: { BookTable, MealSectionTabs },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation) => {
      if (mutation.type === "updateSections") {
        initialize();
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
};
</script>

<style scoped></style>
