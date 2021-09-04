<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
    <Loader v-show="loading" />
    <notifications group="foo" />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import axios from "axios";
import Loader from "@/components/Loader";
export default {
  name: "App",
  components: { Loader, AppFooter, AppHeader },
  data() {
    return {
      loading: false,
      sections: [],
    };
  },
  methods: {
    getSections() {
      this.loading = true;
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/menu-api/meal-sections-client/`)
        .then(({ data }) => {
          this.sections = data.results;
          this.getMeals();
        })
        .catch(() => {});
    },
    getMeals() {
      this.loading = true;
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/menu-api/meals-client/`, {
          params: {
            page_size: 100,
          },
        })
        .then(({ data }) => {
          let products = data.results;

          this.sections = this.sections.map((section) => {
            section.children = products.filter(
              (product) => product.section === section.id
            );

            return section;
          });
          this.$store.commit("updateSections", this.sections);
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getSections();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
