<template>
  <div>
    <section class="ftco-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 ftco-animate">
            <form action="#" class="billing-form ftco-bg-dark p-3 p-md-5">
              <div class="errors" v-if="errors.length">
                <b>Please correct the indicated errors:</b>
                <ul>
                  <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
              </div>
              <h3 class="mb-4 billing-heading">Billing Details</h3>
              <div class="row align-items-end">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Firt Name</label>
                    <input
                      v-model="form.firstName"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Last Name</label>
                    <input
                      v-model="form.lastName"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="w-100"></div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Street Address</label>
                    <input
                      v-model="form.street"
                      type="text"
                      class="form-control"
                      placeholder="House number and street name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      v-model="form.apartment"
                      type="text"
                      class="form-control"
                      placeholder="Appartment, suite, unit etc: (optional)"
                    />
                  </div>
                </div>
                <div class="w-100"></div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Town / City</label>
                    <input
                      v-model="form.cityTown"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Phone</label>
                    <input
                      v-model="form.phone"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="w-100"></div>
              </div>
            </form>
            <!-- END -->

            <div class="row mt-5 pt-3 d-flex">
              <div class="col-md-6 d-flex">
                <div class="cart-detail cart-total ftco-bg-dark p-3 p-md-4">
                  <h3 class="billing-heading mb-4">Cart Total</h3>
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
              </div>
              <div class="col-md-6">
                <div class="cart-detail ftco-bg-dark p-3 p-md-4">
                  <h3 class="billing-heading mb-4">Payment Method</h3>
                  <div class="form-group">
                    <div class="col-md-12">
                      <div class="radio">
                        <label
                          ><input
                            type="radio"
                            checked
                            name="optradio"
                            class="mr-2"
                          />
                          Cash on delivery</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <div class="checkbox">
                        <label
                          ><input
                            type="checkbox"
                            checked
                            value=""
                            class="mr-2"
                          />
                          I have read and accept the terms and conditions</label
                        >
                      </div>
                    </div>
                  </div>
                  <p>
                    <a @click="submitForm" class="btn btn-primary py-3 px-4"
                      >Place an order</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- .col-md-8 -->

          <div class="col-xl-4 sidebar ftco-animate">
            <div class="sidebar-box ftco-animate">
              <div class="categories">
                <h3>Categories</h3>
                <li>
                  <a>Tour <span>(12)</span></a>
                </li>
                <li>
                  <a>Hotel <span>(22)</span></a>
                </li>
                <li>
                  <a>Coffee <span>(37)</span></a>
                </li>
                <li>
                  <a>Drinks <span>(42)</span></a>
                </li>
                <li>
                  <a>Foods <span>(14)</span></a>
                </li>
                <li>
                  <a>Travel <span>(140)</span></a>
                </li>
              </div>
            </div>

            <!--            <div class="sidebar-box ftco-animate">-->
            <!--              <h3>Recent Blog</h3>-->
            <!--              <div class="block-21 mb-4 d-flex">-->
            <!--                <a-->
            <!--                  class="blog-img mr-4"-->
            <!--                  style="background-image: url(images/image_1.jpg)"-->
            <!--                ></a>-->
            <!--                <div class="text">-->
            <!--                  <h3 class="heading">-->
            <!--                    <a-->
            <!--                      >Even the all-powerful Pointing has no control about the-->
            <!--                      blind texts</a-->
            <!--                    >-->
            <!--                  </h3>-->
            <!--                  <div class="meta">-->
            <!--                    <div>-->
            <!--                      <a><span class="icon-calendar"></span> July 12, 2018</a>-->
            <!--                    </div>-->
            <!--                    <div>-->
            <!--                      <a><span class="icon-person"></span> Admin</a>-->
            <!--                    </div>-->
            <!--                    <div>-->
            <!--                      <a><span class="icon-chat"></span> 19</a>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--              <div class="block-21 mb-4 d-flex">-->
            <!--                <a-->
            <!--                  class="blog-img mr-4"-->
            <!--                  style="background-image: url(images/image_2.jpg)"-->
            <!--                ></a>-->
            <!--                <div class="text">-->
            <!--                  <h3 class="heading">-->
            <!--                    <a-->
            <!--                      >Even the all-powerful Pointing has no control about the-->
            <!--                      blind texts</a-->
            <!--                    >-->
            <!--                  </h3>-->
            <!--                  <div class="meta">-->
            <!--                    <div>-->
            <!--                      <a><span class="icon-calendar"></span> July 12, 2018</a>-->
            <!--                    </div>-->
            <!--                    <div>-->
            <!--                      <a><span class="icon-person"></span> Admin</a>-->
            <!--                    </div>-->
            <!--                    <div>-->
            <!--                      <a><span class="icon-chat"></span> 19</a>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--              <div class="block-21 mb-4 d-flex">-->
            <!--                <a-->
            <!--                  class="blog-img mr-4"-->
            <!--                  style="background-image: url(images/image_3.jpg)"-->
            <!--                ></a>-->
            <!--                <div class="text">-->
            <!--                  <h3 class="heading">-->
            <!--                    <a-->
            <!--                      >Even the all-powerful Pointing has no control about the-->
            <!--                      blind texts</a-->
            <!--                    >-->
            <!--                  </h3>-->
            <!--                  <div class="meta">-->
            <!--                    <div>-->
            <!--                      <a><span class="icon-calendar"></span> July 12, 2018</a>-->
            <!--                    </div>-->
            <!--                    <div>-->
            <!--                      <a><span class="icon-person"></span> Admin</a>-->
            <!--                    </div>-->
            <!--                    <div>-->
            <!--                      <a><span class="icon-chat"></span> 19</a>-->
            <!--                    </div>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->

            <div class="sidebar-box ftco-animate">
              <h3>Tag Cloud</h3>
              <div class="tagcloud">
                <a class="tag-cloud-link">dish</a>
                <a class="tag-cloud-link">menu</a>
                <a class="tag-cloud-link">food</a>
                <a class="tag-cloud-link">sweet</a>
                <a class="tag-cloud-link">tasty</a>
                <a class="tag-cloud-link">delicious</a>
                <a class="tag-cloud-link">desserts</a>
                <a class="tag-cloud-link">drinks</a>
              </div>
            </div>

            <div class="sidebar-box ftco-animate">
              <h3>Paragraph</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique, inventore eos fugit cupiditate numquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- .section -->
    <Loader v-if="loading" />
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader";

export default {
  name: "Checkout",
  components: { Loader },
  data() {
    return {
      loading: false,
      subtotal: 0,
      errors: [],
      form: {
        firstName: null,
        lastName: null,
        street: null,
        apartment: null,
        cityTown: null,
        phone: null,
      },
    };
  },
  methods: {
    submitForm() {
      this.errors = [];
      if (
        !this.form.firstName ||
        !this.form.lastName ||
        !this.form.street ||
        !this.form.cityTown ||
        !this.form.phone ||
        !this.$store.state.cart.length
      ) {
        if (!this.form.firstName) {
          this.errors.push("Please, fill the First Name field!");
        }
        if (!this.form.lastName) {
          this.errors.push("Please, fill the Last Name field!");
        }
        if (!this.form.street) {
          this.errors.push("Please, fill the Street field!");
        }
        if (!this.form.street) {
          this.errors.push("Please, fill the Town/City field!");
        }
        if (!this.form.street) {
          this.errors.push("Please, fill the Phone field!");
        }
        if (!this.$store.state.cart.length) {
          this.errors.push("Please, add to cart at least one product!");
        }
      } else {
        this.loading = true;
        let form = {};
        form["customer_name"] = this.form.firstName + " " + this.form.lastName;
        form["customer_phone_number"] = this.form.phone;
        form["customer_address"] =
          this.form.street + ", " + this.form.apartment ||
          "" + ", " + this.form.cityTown;

        form["order_units"] = this.$store.state.cart.map((item) => {
          return { meal: item.id, quantity: item.count };
        });
        axios
          .post(
            `${process.env.VUE_APP_BASE_URL}/order-api/orders-client/`,
            form,
            {}
          )
          .then(() => {
            this.form = {
              firstName: null,
              lastName: null,
              street: null,
              apartment: null,
              cityTown: null,
              phone: null,
            };
            this.$store.commit("updateCart", []);
            this.$notify({
              group: "foo",
              title: "You have successfully listed your order!",
              type: "success",
            });
          })
          .catch(() => {
            this.$notify({
              group: "foo",
              title: "Sorry, Couldn't complete saving your order!",
              type: "warning",
              text: "Try again or contact us by email/phone.",
            });
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    calculateTotal() {
      this.subtotal = this.$store.state.cart.reduce((a, b) => {
        return Math.round((a + b.price * b.count) * 100) / 100;
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

<style scoped>
.errors {
  color: red;
}
</style>
