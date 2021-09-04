<template>
  <div :class="isHomeFooter ? 'col-md-6 appointment ftco-animate' : 'book p-4'">
    <h3 :class="isHomeFooter ? 'mb-3' : ''">Book a Table</h3>
    <form class="appointment-form">
      <div class="d-md-flex">
        <div class="form-group">
          <input
            v-model="form.first_name"
            type="text"
            class="form-control"
            placeholder="First Name"
          />
        </div>
        <div class="form-group ml-md-4">
          <input
            v-model="form.last_name"
            type="text"
            class="form-control"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div class="d-md-flex">
        <div class="form-group">
          <div class="input-wrap">
            <date-picker
              :clearable="false"
              valueType="format"
              format="YYYY-MM-DD"
              v-model="form.date"
              type="date"
              input-class="form-control"
              placeholder="Date"
            >
              <div class="icon" slot="icon-calendar">
                <span class="ion-md-calendar"></span>
              </div>
            </date-picker>
          </div>
        </div>
        <div class="form-group ml-md-4">
          <div class="input-wrap">
            <date-picker
              :clearable="false"
              v-model="form.time"
              valueType="format"
              format="h:mm a"
              type="time"
              placeholder="Time"
              input-class="form-control"
            >
              <div slot="icon-calendar" class="icon">
                <span class="ion-ios-clock"></span>
              </div>
            </date-picker>
          </div>
        </div>
        <div class="form-group ml-md-4">
          <input
            v-model="form.phone"
            type="text"
            class="form-control"
            placeholder="Phone"
          />
        </div>
      </div>
      <div class="d-md-flex">
        <div class="form-group">
          <textarea
            v-model="form.message"
            name=""
            id=""
            cols="30"
            rows="2"
            class="form-control"
            placeholder="Message"
          ></textarea>
        </div>
        <div class="form-group ml-md-4">
          <input
            @click="submitBooking"
            readonly
            value="Appointment"
            class="btn btn-white py-3 px-4"
          />
        </div>
      </div>
    </form>
    <Loader v-if="loading" />
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  name: "BookTable",
  components: { Loader, DatePicker },
  props: {
    isHomeFooter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      form: {
        first_name: null,
        last_name: null,
        date: null,
        time: null,
        phone: null,
        message: null,
      },
    };
  },
  methods: {
    submitBooking() {
      console.log("form", this.form);
      if (
        this.form.first_name &&
        this.form.last_name &&
        this.form.date &&
        this.form.time &&
        this.form.phone &&
        this.form.message
      ) {
        this.loading = true;
        console.log("form", this.form);
        axios
          .post(`${process.env.VUE_APP_BASE_URL}table-api/tables/`, this.form)
          .then(() => {
            this.$notify({
              group: "foo",
              title: "You have successfully booked a table!",
              type: "success",
            });
          })
          .catch(() => {
            this.$notify({
              group: "foo",
              title: "Couldn't complete booking a table!",
              type: "warning",
              text: "You can contact us by phone.",
            });
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style scoped></style>
