import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sections: [],
    cart: [],
  },
  mutations: {
    updateSections(state, sections) {
      state.sections = sections;
    },
    updateCart(state, cartData) {
      state.cart = cartData;
    },
  },
  actions: {
    addToCart(ctx, product) {
      let cartData = ctx.state.cart;
      const index = ctx.state.cart.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        cartData[index].count = cartData[index].count + 1;
      } else {
        let currentProduct = product;
        currentProduct["count"] = 1;
        cartData.push(currentProduct);
      }
      ctx.commit("updateCart", cartData);
    },
    removeFromCart(ctx, productId) {
      let cartData = ctx.state.cart.filter((item) => item.id !== productId);
      ctx.commit("updateCart", cartData);
    },
    updateProductCount(ctx, payload) {
      const { id, count } = payload;
      let cartData = ctx.state.cart;
      const index = ctx.state.cart.findIndex((item) => item.id === id);
      cartData[index].count = count;

      ctx.commit("updateCart", cartData);
    },
  },
  plugins: [
    createPersistedState({
      key: "kashkar",
      paths: ["cart"],
    }),
  ],
});
