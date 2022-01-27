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
              <h1 class="mb-3 mt-5 bread">Services</h1>
              <p class="breadcrumbs">
                <span class="mr-2"><router-link :to="{name: 'Home'}" tag="a">Home</router-link></span>
                <span>Services</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-services">
      <div class="container">
        <div class="row">
          <div class="col-md-4 ftco-animate">
            <div class="media d-block text-center block-6 services">
              <div
                class="
                  icon
                  d-flex
                  justify-content-center
                  align-items-center
                  mb-5
                "
              >
                <span class="flaticon-choices"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">Easy to Order</h3>
                <p>
                  Choose dishes from the menu page and order easily!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="media d-block text-center block-6 services">
              <div
                class="
                  icon
                  d-flex
                  justify-content-center
                  align-items-center
                  mb-5
                "
              >
                <span class="flaticon-delivery-truck"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">Fastest Delivery</h3>
                <p>
                  Start eating your meal shortly after ordering!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 ftco-animate">
            <div class="media d-block text-center block-6 services">
              <div
                class="
                  icon
                  d-flex
                  justify-content-center
                  align-items-center
                  mb-5
                "
              >
                <span class="flaticon-coffee-bean"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">Quality Food</h3>
                <p>
                  Enjoy quality food!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped></style>
