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
              <h1 class="mb-3 mt-5 bread">About Us</h1>
              <p class="breadcrumbs">
                <span class="mr-2"
                  ><router-link :to="{ name: 'Home' }" tag="a"
                    >Home</router-link
                  ></span
                >
                <span>About</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-about d-md-flex">
      <div
        class="one-half img"
        style="background-image: url(images/about.jpg)"
      ></div>
      <div class="one-half ftco-animate">
        <div class="overlap">
          <div class="heading-section ftco-animate">
            <span class="subheading">Discover</span>
            <h2 class="mb-4">Our Story</h2>
          </div>
          <div>
            <p>
              The capital ofthe Xinjiang Uygur Autonomous Region is Urumqi, but
              the heart ofEast Turkestan for all Uyghurs is Kashgar. It is in
              this city that the traditional way oflife, customs and culture
              ofthe entire Uyghur people have been preserved for thousands of
              years. No wonder the locals like to say that "all the best in
              Xin-Jiang is from Kashgar." Kashgar is located where the spurs
              ofthe Tien Shan and Kunlun meet, at the foot ofthe Pamir
              Mountains. Kashgar is not just the heart ofXinjiang, it is one
              ofthe oldest cities in East Turkestan, located at the intersection
              ofthe Great Silk Road. Kashkar cafe has been operating for several
              years since 2013. Cafe "Kashkar" is a piece ofUighurs who lived in
              the city of Kashgar. And a dynasty ofcooks handed down to
              generations through the centuries. Ethnically atmospheric yet cozy
              with good homemade food. Here you can have a bite to eat with
              friends and family. Pleasant atmosphere, delicious cuisine and,
              most importantly, comfort.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--    <section-->
    <!--      class="ftco-section img"-->
    <!--      id="ftco-testimony"-->
    <!--      style="background-image: url(images/bg_01.jpeg)"-->
    <!--      data-stellar-background-ratio="0.5"-->
    <!--    >-->
    <!--      <div class="overlay"></div>-->
    <!--      <div class="container">-->
    <!--        <div class="row justify-content-center mb-5">-->
    <!--          <div class="col-md-7 heading-section text-center ftco-animate">-->
    <!--            <span class="subheading">Testimony</span>-->
    <!--            <h2 class="mb-4">Customers Says</h2>-->
    <!--            <p>-->
    <!--              Far far away, behind the word mountains, far from the countries-->
    <!--              Vokalia and Consonantia, there live the blind texts.-->
    <!--            </p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="container-wrap">-->
    <!--        <div class="row d-flex no-gutters">-->
    <!--          <div class="col-lg align-self-sm-end">-->
    <!--            <div class="testimony">-->
    <!--              <blockquote>-->
    <!--                <p>-->
    <!--                  &ldquo;Even the all-powerful Pointing has no control about the-->
    <!--                  blind texts it is an almost unorthographic life One day-->
    <!--                  however a small.&rdquo;-->
    <!--                </p>-->
    <!--              </blockquote>-->
    <!--              <div class="author d-flex mt-4">-->
    <!--                <div class="image mr-3 align-self-center">-->
    <!--                  <img src="images/person_1.jpg" alt="" />-->
    <!--                </div>-->
    <!--                <div class="name align-self-center">-->
    <!--                  Louise Kelly-->
    <!--                  <span class="position">Illustrator Designer</span>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="col-lg align-self-sm-end">-->
    <!--            <div class="testimony overlay">-->
    <!--              <blockquote>-->
    <!--                <p>-->
    <!--                  &ldquo;Even the all-powerful Pointing has no control about the-->
    <!--                  blind texts it is an almost unorthographic life One day-->
    <!--                  however a small line of blind text by the name of Lorem Ipsum-->
    <!--                  decided to leave for the far World of Grammar.&rdquo;-->
    <!--                </p>-->
    <!--              </blockquote>-->
    <!--              <div class="author d-flex mt-4">-->
    <!--                <div class="image mr-3 align-self-center">-->
    <!--                  <img src="images/person_2.jpg" alt="" />-->
    <!--                </div>-->
    <!--                <div class="name align-self-center">-->
    <!--                  Louise Kelly-->
    <!--                  <span class="position">Illustrator Designer</span>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="col-lg align-self-sm-end">-->
    <!--            <div class="testimony">-->
    <!--              <blockquote>-->
    <!--                <p>-->
    <!--                  &ldquo;Even the all-powerful Pointing has no control about the-->
    <!--                  blind texts it is an almost unorthographic life One day-->
    <!--                  however a small line of blind text by the name. &rdquo;-->
    <!--                </p>-->
    <!--              </blockquote>-->
    <!--              <div class="author d-flex mt-4">-->
    <!--                <div class="image mr-3 align-self-center">-->
    <!--                  <img src="images/person_3.jpg" alt="" />-->
    <!--                </div>-->
    <!--                <div class="name align-self-center">-->
    <!--                  Louise Kelly-->
    <!--                  <span class="position">Illustrator Designer</span>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="col-lg align-self-sm-end">-->
    <!--            <div class="testimony overlay">-->
    <!--              <blockquote>-->
    <!--                <p>-->
    <!--                  &ldquo;Even the all-powerful Pointing has no control about the-->
    <!--                  blind texts it is an almost unorthographic life One day-->
    <!--                  however.&rdquo;-->
    <!--                </p>-->
    <!--              </blockquote>-->
    <!--              <div class="author d-flex mt-4">-->
    <!--                <div class="image mr-3 align-self-center">-->
    <!--                  <img src="images/person_2.jpg" alt="" />-->
    <!--                </div>-->
    <!--                <div class="name align-self-center">-->
    <!--                  Louise Kelly-->
    <!--                  <span class="position">Illustrator Designer</span>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="col-lg align-self-sm-end">-->
    <!--            <div class="testimony">-->
    <!--              <blockquote>-->
    <!--                <p>-->
    <!--                  &ldquo;Even the all-powerful Pointing has no control about the-->
    <!--                  blind texts it is an almost unorthographic life One day-->
    <!--                  however a small line of blind text by the name. &rdquo;-->
    <!--                </p>-->
    <!--              </blockquote>-->
    <!--              <div class="author d-flex mt-4">-->
    <!--                <div class="image mr-3 align-self-center">-->
    <!--                  <img src="images/person_3.jpg" alt="" />-->
    <!--                </div>-->
    <!--                <div class="name align-self-center">-->
    <!--                  Louise Kelly-->
    <!--                  <span class="position">Illustrator Designer</span>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->

    <section class="ftco-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 pr-md-5">
            <div class="heading-section text-md-right ftco-animate">
              <span class="subheading">Discover</span>
              <h2 class="mb-4">Our Menu</h2>
              <p class="mb-4">
                We share the variety and wonderful taste of Uyghur cuisine with
                its ancient origins and we will be happy with it!
              </p>
              <p>
                <router-link
                  to="Menu"
                  class="btn btn-primary btn-outline-primary px-4 py-3"
                  >View Full Menu</router-link
                >
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6">
                <div class="menu-entry">
                  <div
                    class="img"
                    style="background-image: url(images/menu-1.png)"
                  ></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="menu-entry mt-lg-4">
                  <div
                    class="img"
                    style="background-image: url(images/menu-2.png)"
                  ></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="menu-entry">
                  <div
                    class="img"
                    style="background-image: url(images/menu-3.png)"
                  ></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="menu-entry mt-lg-4">
                  <div
                    class="img"
                    style="background-image: url(images/menu-4.png)"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="ftco-counter ftco-bg-dark img"
      id="section-counter"
      style="background-image: url(images/bg_02.jpg)"
      data-stellar-background-ratio="0.5"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="row">
              <div
                class="
                  col-md-6 col-lg-3
                  d-flex
                  justify-content-center
                  counter-wrap
                  ftco-animate
                "
              >
                <div class="block-18 text-center">
                  <div class="text">
                    <div class="icon">
                      <span class="flaticon-coffee-cup"></span>
                    </div>
                    <strong class="number" data-number="1">0</strong>
                    <span>Little money</span>
                  </div>
                </div>
              </div>
              <div
                class="
                  col-md-6 col-lg-3
                  d-flex
                  justify-content-center
                  counter-wrap
                  ftco-animate
                "
              >
                <div class="block-18 text-center">
                  <div class="text">
                    <div class="icon">
                      <span class="flaticon-coffee-cup"></span>
                    </div>
                    <strong class="number" data-number="100">0</strong>
                    <span>Delicious Dishes</span>
                  </div>
                </div>
              </div>
              <div
                class="
                  col-md-6 col-lg-3
                  d-flex
                  justify-content-center
                  counter-wrap
                  ftco-animate
                "
              >
                <div class="block-18 text-center">
                  <div class="text">
                    <div class="icon">
                      <span class="flaticon-coffee-cup"></span>
                    </div>
                    <strong class="number" data-number="10567">0</strong>
                    <span>Happy Customer</span>
                  </div>
                </div>
              </div>
              <div
                class="
                  col-md-6 col-lg-3
                  d-flex
                  justify-content-center
                  counter-wrap
                  ftco-animate
                "
              >
                <div class="block-18 text-center">
                  <div class="text">
                    <div class="icon">
                      <span class="flaticon-coffee-cup"></span>
                    </div>
                    <strong class="number" data-number="20">0</strong>
                    <span>Staff</span>
                  </div>
                </div>
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
  name: "About",
};
</script>

<style scoped></style>
