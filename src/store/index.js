import Vuex from "vuex";
import axios from 'axios'
import Vue from 'vue'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        getkadin: () => {
            return store.state.itemskadin
        },
        geterkek: () => {
            return store.state.itemserkek
        },
        getcocuk: () => {
            return store.state.itemscocuk
        },
        itemserkek: [],
        itemskadin: [],
        itemscocuk: [],

    },
    mutations: {
        setitemskadin(state, items) {
            state.itemskadin = items.itemskadin;
        },
        setitemserkek(state, items) {
            state.itemserkek = items.itemserkek;
        },
        setitemscocuk(state, items) {
            state.itemscocuk = items.itemscocuk;
        },
    },
    actions: {
        async fetchItemsForKadin(context) {
            return await axios.get("/api/itemskadin").then(response => {
                context.commit("setitemskadin", response.data);
            })
        },
        async fetchItemsForErkek(context) {
            return await axios.get("/api/itemserkek").then(response => {
                context.commit("setitemserkek", response.data);
            })
        },
        async fetchItemsForCocuk(context) {
            return await axios.get("/api/itemscocuk").then(response => {
                context.commit("setitemscocuk", response.data);
            })
        },

    },
    getters: {
        itemskadin(state) {
            return state.itemskadin;
        },
        itemserkek(state) {
            return state.itemserkek;
        },
        itemscocuk(state) {
            return state.itemscocuk;
        },

    },
});


export default store;