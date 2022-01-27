<template>
  <div>
    <section class="home-slider owl-carousel">
      <div class="slider-item" style="background-image: url(images/bg_5.jpg)">
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row slider-text justify-content-center align-items-center"
            data-scrollax-parent="true"
          >
            <div class="col-md-8 col-sm-12 text-center ftco-animate">
              <span class="subheading">Welcome</span>
              <h1 class="mb-4">The Best Uzbek Dishes Testing Experience</h1>
              <p class="mb-4 mb-md-5">
                You can always relax in our cafe, where you will always be
                welcome!
              </p>
              <p>
                <router-link
                  to="Cart"
                  class="btn btn-primary p-3 px-xl-4 py-xl-3"
                  >Order Now</router-link
                >
                <router-link
                  to="Menu"
                  class="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                  >View Menu</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-item" style="background-image: url(images/bg_02.jpg)">
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row slider-text justify-content-center align-items-center"
            data-scrollax-parent="true"
          >
            <div class="col-md-8 col-sm-12 text-center ftco-animate">
              <span class="subheading">Welcome</span>
              <h1 class="mb-4">Amazing Taste &amp; Beautiful Place</h1>
              <p class="mb-4 mb-md-5">
                You can always relax in our cafe, where you will always be
                welcome!
              </p>
              <p>
                <router-link
                  to="Cart"
                  class="btn btn-primary p-3 px-xl-4 py-xl-3"
                  >Order Now</router-link
                >
                <router-link
                  to="Menu"
                  class="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                  >View Menu</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="slider-item" style="background-image: url(images/bg_03.jpg)">
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row slider-text justify-content-center align-items-center"
            data-scrollax-parent="true"
          >
            <div class="col-md-8 col-sm-12 text-center ftco-animate">
              <span class="subheading">Welcome</span>
              <h1 class="mb-4">100% HALAL FOOD</h1>
              <p class="mb-4 mb-md-5">
                You can always relax in our cafe, where you will always be
                welcome!
              </p>
              <p>
                <router-link
                  to="Cart"
                  class="btn btn-primary p-3 px-xl-4 py-xl-3"
                  >Order Now</router-link
                >
                <router-link
                  to="Menu"
                  class="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3"
                  >View Menu</router-link
                >
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
                  <h3>(718) 743-3832</h3>
                  <p>For reservation call</p>
                </div>
              </div>
              <div class="col-md-4 d-flex ftco-animate">
                <div class="icon"><span class="icon-my_location"></span></div>
                <div class="text">
                  <h3>1141 Brighton Beach Ave,</h3>
                  <p>Brooklyn, NY 11235, USA</p>
                </div>
              </div>
              <div class="col-md-4 d-flex ftco-animate">
                <div class="icon"><span class="icon-clock-o"></span></div>
                <div class="text">
                  <h3>Open Monday-Sunday</h3>
                  <p>10:00am - 11:00pm</p>
                </div>
              </div>
            </div>
          </div>
          <BookTable />
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
                <p>Choose dishes from the menu page and order easily!</p>
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
                <p>Start eating your meal shortly after ordering!</p>
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
                <p>Enjoy quality food!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 pr-md-5">
            <div class="heading-section text-md-right ftco-animate">
              <span class="subheading">Discover</span>
              <h2 class="mb-4">Our Menu</h2>
              <p class="mb-4">
                Enjoy every wonderful and varied dish on the menu!
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

    <!--  <section class="ftco-counter ftco-bg-dark img" id="section-counter" style="background-image: url(images/bg_2.jpg);" data-stellar-background-ratio="0.5">-->
    <!--    <div class="overlay"></div>-->
    <!--    <div class="container">-->
    <!--      <div class="row justify-content-center">-->
    <!--        <div class="col-md-10">-->
    <!--          <div class="row">-->

    <!--            <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">-->
    <!--              <div class="block-18 text-center">-->
    <!--                <div class="text">-->
    <!--                  <div class="icon"><span class="flaticon-coffee-cup"></span></div>-->
    <!--                  <strong class="number" data-number="10567">0</strong>-->
    <!--                  <span>Happy Customer</span>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--  </section>-->

    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section ftco-animate text-center">
            <span class="subheading">Discover</span>
            <h2 class="mb-4">Best Seller Dishes</h2>
            <p>Enjoy every wonderful and varied dish on the menu!</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="menu-entry">
              <a
                class="img"
                style="background-image: url(images/menu-1.png)"
              ></a>
              <div class="text text-center pt-4">
                <h3><a>Sesame Beef and Broccoli</a></h3>
                <p>Each dish has a unique taste and a great look.</p>
                <!--                <p class="price"><span>$5.90</span></p>-->
                <!--                <p>-->
                <!--                  <a  class="btn btn-primary btn-outline-primary"-->
                <!--                    >Add to Cart</a-->
                <!--                  >-->
                <!--                </p>-->
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="menu-entry">
              <a
                class="img"
                style="background-image: url(images/menu-2.png)"
              ></a>
              <div class="text text-center pt-4">
                <h3><a>Sesame Beef and Broccoli</a></h3>
                <p>Each dish has a unique taste and a great look.</p>
                <!--                <p class="price"><span>$5.90</span></p>-->
                <!--                <p>-->
                <!--                  <a  class="btn btn-primary btn-outline-primary"-->
                <!--                    >Add to Cart</a-->
                <!--                  >-->
                <!--                </p>-->
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="menu-entry">
              <a
                class="img"
                style="background-image: url(images/menu-3.png)"
              ></a>
              <div class="text text-center pt-4">
                <h3><a>Sesame Beef and Broccoli</a></h3>
                <p>Each dish has a unique taste and a great look.</p>
                <!--                <p class="price"><span>$5.90</span></p>-->
                <!--                <p>-->
                <!--                  <a  class="btn btn-primary btn-outline-primary"-->
                <!--                    >Add to Cart</a-->
                <!--                  >-->
                <!--                </p>-->
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="menu-entry">
              <a
                class="img"
                style="background-image: url(images/menu-4.png)"
              ></a>
              <div class="text text-center pt-4">
                <h3><a>Sesame Beef and Broccoli</a></h3>
                <p>Each dish has a unique taste and a great look.</p>
                <!--                <p class="price"><span>$5.90</span></p>-->
                <!--                <p>-->
                <!--                  <a  class="btn btn-primary btn-outline-primary"-->
                <!--                    >Add to Cart</a-->
                <!--                  >-->
                <!--                </p>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-gallery">
      <div class="container-wrap">
        <div class="row no-gutters">
          <div class="col-md-3 ftco-animate">
            <a
              class="gallery img d-flex align-items-center"
              style="background-image: url(images/gallery-1.jpg)"
            >
              <div
                class="
                  icon
                  mb-4
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <span class="icon-search"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a
              class="gallery img d-flex align-items-center"
              style="background-image: url(images/gallery-2.jpg)"
            >
              <div
                class="
                  icon
                  mb-4
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <span class="icon-search"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a
              class="gallery img d-flex align-items-center"
              style="background-image: url(images/gallery-3.jpg)"
            >
              <div
                class="
                  icon
                  mb-4
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <span class="icon-search"></span>
              </div>
            </a>
          </div>
          <div class="col-md-3 ftco-animate">
            <a
              class="gallery img d-flex align-items-center"
              style="background-image: url(images/gallery-4.jpg)"
            >
              <div
                class="
                  icon
                  mb-4
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <span class="icon-search"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-menu">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <span class="subheading">Discover</span>
            <h2 class="mb-4">Our Products</h2>
            <p>Enjoy every wonderful and varied dish on the menu!</p>
          </div>
        </div>
        <MealSectionTabs :is-home="true" />
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
    <!--            <p>We want every customer to be happy with us</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="container-wrap">-->
    <!--        <div class="row d-flex no-gutters">-->
    <!--          <div class="col-lg align-self-sm-end ftco-animate">-->
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
    <!--          <div class="col-lg align-self-sm-end ftco-animate">-->
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
    <!--          <div class="col-lg align-self-sm-end ftco-animate">-->
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

    <!--    <section class="ftco-section">-->
    <!--      <div class="container">-->
    <!--        <div class="row justify-content-center mb-5 pb-3">-->
    <!--          <div class="col-md-7 heading-section ftco-animate text-center">-->
    <!--            <h2 class="mb-4">Recent from blog</h2>-->
    <!--            <p>-->
    <!--              Far far away, behind the word mountains, far from the countries-->
    <!--              Vokalia and Consonantia, there live the blind texts.-->
    <!--            </p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="row d-flex">-->
    <!--          <div class="col-md-4 d-flex ftco-animate">-->
    <!--            <div class="blog-entry align-self-stretch">-->
    <!--              <router-link-->
    <!--                :to="{ name: 'BlogSingle' }"-->
    <!--                tag="a"-->
    <!--                class="block-20"-->
    <!--                style="background-image: url('images/image_1.jpg')"-->
    <!--              >-->
    <!--              </router-link>-->
    <!--              <div class="text py-4 d-block">-->
    <!--                <div class="meta">-->
    <!--                  <div><a>Sept 10, 2018</a></div>-->
    <!--                  <div><a>Admin</a></div>-->
    <!--                  <div>-->
    <!--                    <a class="meta-chat"><span class="icon-chat"></span> 3</a>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--                <h3 class="heading mt-2">-->
    <!--                  <a>The Delicious Pizza</a>-->
    <!--                </h3>-->
    <!--                <p>-->
    <!--                  A small river named Duden flows by their place and supplies it-->
    <!--                  with the necessary regelialia.-->
    <!--                </p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="col-md-4 d-flex ftco-animate">-->
    <!--            <div class="blog-entry align-self-stretch">-->
    <!--              <router-link-->
    <!--                :to="{ name: 'BlogSingle' }"-->
    <!--                tag="a"-->
    <!--                class="block-20"-->
    <!--                style="background-image: url('images/image_2.jpg')"-->
    <!--              >-->
    <!--              </router-link>-->
    <!--              <div class="text py-4 d-block">-->
    <!--                <div class="meta">-->
    <!--                  <div><a>Sept 10, 2018</a></div>-->
    <!--                  <div><a>Admin</a></div>-->
    <!--                  <div>-->
    <!--                    <a class="meta-chat"><span class="icon-chat"></span> 3</a>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--                <h3 class="heading mt-2">-->
    <!--                  <a>The Delicious Pizza</a>-->
    <!--                </h3>-->
    <!--                <p>-->
    <!--                  A small river named Duden flows by their place and supplies it-->
    <!--                  with the necessary regelialia.-->
    <!--                </p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="col-md-4 d-flex ftco-animate">-->
    <!--            <div class="blog-entry align-self-stretch">-->
    <!--              <router-link-->
    <!--                :to="{ name: 'BlogSingle' }"-->
    <!--                tag="a"-->
    <!--                class="block-20"-->
    <!--                style="background-image: url('images/image_3.jpg')"-->
    <!--              >-->
    <!--              </router-link>-->
    <!--              <div class="text py-4 d-block">-->
    <!--                <div class="meta">-->
    <!--                  <div><a>Sept 10, 2018</a></div>-->
    <!--                  <div><a>Admin</a></div>-->
    <!--                  <div>-->
    <!--                    <a class="meta-chat"><span class="icon-chat"></span> 3</a>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--                <h3 class="heading mt-2">-->
    <!--                  <a>The Delicious Pizza</a>-->
    <!--                </h3>-->
    <!--                <p>-->
    <!--                  A small river named Duden flows by their place and supplies it-->
    <!--                  with the necessary regelialia.-->
    <!--                </p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->

    <section class="ftco-appointment">
      <div class="overlay"></div>
      <div class="container-wrap">
        <div class="row no-gutters d-md-flex align-items-center">
          <div class="col-md-6 d-flex align-self-stretch">
            <div id="map"></div>
          </div>
          <BookTable is-home-footer />
        </div>
      </div>
    </section>
    <Loader v-show="loading" />
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import MealSectionTabs from "@/components/MealSectionTabs";
import BookTable from "@/components/BookTable";
export default {
  name: "Home",
  components: { BookTable, MealSectionTabs, Loader },
  data() {
    return {
      loading: false,
    };
  },
  methods: {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style scoped></style>
