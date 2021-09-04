<template>
  <div class="row d-md-flex">
    <div class="col-lg-12 ftco-animate p-md-5">
      <div class="row">
        <div class="col-md-12 nav-link-wrap mb-5">
          <div
            class="nav ftco-animate nav-pills justify-content-center"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              v-for="section in $store.state.sections"
              :key="section.id"
              @click="activeSection = section"
              class="nav-link"
              :class="activeSection.id === section.id ? 'active' : ''"
              :id="`v-pills-${section.id}-tab`"
              data-toggle="pill"
              :href="'#v-pills-' + section.id"
              role="tab"
              :aria-controls="`v-pills-${section.id}`"
              >{{ section.name }}</a
            >
          </div>
        </div>
        <div class="col-md-12 d-flex align-items-center">
          <div class="tab-content ftco-animate" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-1"
              role="tabpanel"
              aria-labelledby="v-pills-1-tab"
            >
              <div class="row">
                <div
                  v-for="meal in computedProducts"
                  :key="meal.id"
                  class="col-md-4 text-center"
                >
                  <MealItem :product="meal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MealItem from "@/components/MealItem";
export default {
  name: "MealSectionTabs",
  components: { MealItem },
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedProducts() {
      return this.isHome &&
        this.activeSection.children &&
        this.activeSection.children.length >= 3
        ? this.activeSection.children.slice(0, 3)
        : this.activeSection.children;
    },
  },
  data() {
    return {
      activeSection: {},
    };
  },
  created() {
    this.$store.watch(
      (state) => {
        return state.sections;
      },
      (newValue) => {
        this.activeSection = newValue[0];
      }
    );
  },
  mounted() {
    if (this.$store.state.sections.length) {
      this.activeSection = this.$store.state.sections[0];
    }
  },
};
</script>

<style scoped></style>
