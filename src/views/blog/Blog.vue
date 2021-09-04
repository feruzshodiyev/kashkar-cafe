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
              <h1 class="mb-3 mt-5 bread">Blog</h1>
              <p class="breadcrumbs">
                <span class="mr-2"
                  ><router-link :to="{ name: 'Home' }" tag="a"
                    >Home</router-link
                  ></span
                >
                <span>Blog</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry align-self-stretch">
              <router-link
                :to="{ name: 'BlogSingle' }"
                tag="a"
                class="block-20"
                style="background-image: url('images/image_1.jpg')"
              >
              </router-link>
              <div class="text py-4 d-block">
                <div class="meta">
                  <div><a>Sept 28, 2018</a></div>
                  <div><a>Admin</a></div>
                  <div>
                    <a class="meta-chat"><span class="icon-chat"></span> 3</a>
                  </div>
                </div>
                <h3 class="heading mt-2"><a>Coffee Testing Day</a></h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry align-self-stretch">
              <router-link
                :to="{ name: 'BlogSingle' }"
                tag="a"
                class="block-20"
                style="background-image: url('images/image_2.jpg')"
              >
              </router-link>
              <div class="text py-4 d-block">
                <div class="meta">
                  <div><a>Sept 28, 2018</a></div>
                  <div><a>Admin</a></div>
                  <div>
                    <a class="meta-chat"><span class="icon-chat"></span> 3</a>
                  </div>
                </div>
                <h3 class="heading mt-2"><a>Coffee Testing Day</a></h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry align-self-stretch">
              <router-link
                :to="{ name: 'BlogSingle' }"
                tag="a"
                class="block-20"
                style="background-image: url('images/image_3.jpg')"
              >
              </router-link>
              <div class="text py-4 d-block">
                <div class="meta">
                  <div><a>Sept 28, 2018</a></div>
                  <div><a>Admin</a></div>
                  <div>
                    <a class="meta-chat"><span class="icon-chat"></span> 3</a>
                  </div>
                </div>
                <h3 class="heading mt-2"><a>Coffee Testing Day</a></h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry align-self-stretch">
              <router-link
                :to="{ name: 'BlogSingle' }"
                tag="a"
                class="block-20"
                style="background-image: url('images/image_4.jpg')"
              >
              </router-link>
              <div class="text py-4 d-block">
                <div class="meta">
                  <div><a>Sept 28, 2018</a></div>
                  <div><a>Admin</a></div>
                  <div>
                    <a class="meta-chat"><span class="icon-chat"></span> 3</a>
                  </div>
                </div>
                <h3 class="heading mt-2"><a>Coffee Testing Day</a></h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry align-self-stretch">
              <router-link
                :to="{ name: 'BlogSingle' }"
                tag="a"
                class="block-20"
                style="background-image: url('images/image_5.jpg')"
              >
              </router-link>
              <div class="text py-4 d-block">
                <div class="meta">
                  <div><a>Sept 28, 2018</a></div>
                  <div><a>Admin</a></div>
                  <div>
                    <a class="meta-chat"><span class="icon-chat"></span> 3</a>
                  </div>
                </div>
                <h3 class="heading mt-2"><a>Coffee Testing Day</a></h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ftco-animate">
            <div class="blog-entry align-self-stretch">
              <router-link
                :to="{ name: 'BlogSingle' }"
                tag="a"
                class="block-20"
                style="background-image: url('images/image_6.jpg')"
              >
              </router-link>
              <div class="text py-4 d-block">
                <div class="meta">
                  <div><a>Sept 28, 2018</a></div>
                  <div><a>Admin</a></div>
                  <div>
                    <a class="meta-chat"><span class="icon-chat"></span> 3</a>
                  </div>
                </div>
                <h3 class="heading mt-2"><a>Coffee Testing Day</a></h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col text-center">
            <div class="block-27">
              <ul>
                <li><a>&lt;</a></li>
                <li class="active"><span>1</span></li>
                <li><a>2</a></li>
                <li><a>3</a></li>
                <li><a>4</a></li>
                <li><a>5</a></li>
                <li><a>&gt;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Blog",
};
</script>

<style scoped></style>
