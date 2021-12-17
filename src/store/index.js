import Vuex from "vuex";
import axios from 'axios'
import Vue from 'vue'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        getkadin: () => {
            return store.state.itemskadin
        },
        itemserkek: [],
        itemskadin: [],

    },
    mutations: {
        setitemskadin(state, items) {
            state.itemskadin = items.itemskadin;
        },
        setitemserkek(state, items) {
            state.itemserkek = items;
        },
        setItemsForCompleteOutfit(state, items) {
            state.CompleteOutfit = items;
        },
        setItemsForLastViewed(state, items) {
            state.lastViewedItems = items;
        },
        setCart(state, cart) {
            state.cart = cart;
        },
        addToCart(state, item) {
            console.log(item);
            let cartItem = state.cart.items.find(
                (cartItem) => cartItem.content.id === item.content.id
            );
            if (cartItem) {
                cartItem.content.count++;
                cartItem.content.totalPrice =
                    cartItem.content.count * cartItem.content.price;
            } else {
                state.cart.items.push(item);
            }
            state.cart.total += item.content.price;
        },
        removeFromCart(state, item) {
            let cartItem = state.cart.items.find(
                (cartItem) => cartItem.content.id === item.content.id
            );
            if (cartItem) {
                if (cartItem.content.count > 1) {
                    cartItem.content.count--;
                    cartItem.content.totalPrice =
                        cartItem.content.count * cartItem.content.price;
                } else {
                    state.cart.items.splice(state.cart.items.indexOf(cartItem), 1);
                }
                state.cart.total -= item.content.price;
            }
            if (state.cart.items.length === 0) {
                state.cart.total = 0;
                state.cart.shipping = 0;
                state.cart.discount = 0;
            }
        },
        resetCart(state) {
            state.cart.items = [];
            state.cart.total = 0;
            state.cart.discount = 0;
            state.cart.shipping = 0;
        },
        setItem(state, item) {
            state.item = item;
        },
        setItemsForCategory(state, items) {
            state.categoryItems = items;
        },
        sortCategoryItems(state, sortBy) {
            if (sortBy === "priceDesc") {
                console.log(state.categoryItems);
                state.categoryItems.sort((a, b) => a.price - b.price);
            } else if (sortBy === "priceAsc") {
                console.log(state.categoryItems);
                state.categoryItems.sort((a, b) => b.price - a.price);
            }
            else if (sortBy === "random") {
                state.categoryItems.sort(() => Math.random() - 0.5);
            }
        },
        setItemsBySearchKey(state, items) {
            state.categoryItems = items;
        }
    },
    actions: {
        async fetchItemsForKadin(context) {
            return await axios.get("/api/itemskadin").then(response => {
                console.log("AXİOSSSSSSSSSSS")
                console.log(response.data);
                context.commit("setitemskadin", response.data);
            })
        },
        async fetchItemsForErkek(context) {
            return await axios.get("/api/getItemsErkek").then(response => {
                console.log("AXİOSSSSSSSSSSS")
                console.log(response.data);
                context.commit("setitemserkek", response.data);
            })
        },
        fetchItemsForCompleteOutfit(context) {
            getItemsSummary().then((res) => {
                context.commit("setItemsForCompleteOutfit", res.data);
            });
        },
        fetchItemsForLastViewedItems(context) {
            getItemsSummary().then((res) => {
                context.commit("setItemsForLastViewed", res.data);
            });
        },
        fetchCart(context) {
            getCart().then((res) => {
                context.commit("setCart", res.data);
            });
        },
        addToCart(context, item) {
            addToCart(item).then(() => {
                context.commit("addToCart", item);
            });
        },
        removeFromCart(context, item) {
            removeFromCart(item.content.id).then(() => {
                context.commit("removeFromCart", item);
            });
        },
        resetCart(context) {
            context.commit("resetCart");
        },
        fetchItem(context, id) {
            getItem(id).then((res) => {
                context.commit("setItem", res.data);
            });
        },
        fetchItemsForCategory(context, id) {
            console.log("girdifetchItemsForCategory");
            getItemsByCategoryId(id).then((res) => {
                context.commit("setItemsForCategory", res.data);
            });
        },
        fetchItemsForSubCategory(context, id) {
            console.log("girdifetchItemsForSubCategory");

            getItemsBySubCategoryId(id).then((res) => {
                context.commit("setItemsForCategory", res.data);
            });
        },
        fetchItemsForSubTitle(context, itemInfo) {
            getItemsBySubtitleId(itemInfo).then((res) => {
                console.log(res.data);
                context.commit("setItemsForCategory", res.data);
            });
        },
        fetchItemsBySearchKey(context, searchKey) {
            getItemsBySearchKey(searchKey).then((res) => {
                context.commit("setItemsBySearchKey", res.data);
            })
        }
    },
    getters: {
        itemskadin(state) {
            return state.itemskadin;
        },
        totalCartPrice(state) {
            return state.cart.total;
        },
        discountCartPrice(state) {
            return state.cart.discount;
        },
        shippingCartPrice(state) {
            return state.cart.shipping;
        },
        cartItemsQuantity(state) {
            let quantity = 0;
            state.cart.items.forEach((item) => {
                quantity += item.content.count;
            });
            return quantity;
        },
    },
});


export default store;