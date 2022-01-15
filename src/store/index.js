import Vuex from "vuex";
import axios from 'axios'
import Vue from 'vue'
import { getItems } from '../services/itemService'
import { getItemsByCategory } from '../services/getItemsByCategory'
import { getItemById } from '../services/getItemById'

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
                getItemsByCategory(1);
            })
        },
        async fetchItemsForErkek(context) {
            return await axios.get("/api/itemserkek").then(response => {
                context.commit("setitemserkek", response.data);
                getItemsByCategory(2);
                getItemById(8);
            })
        },
        async fetchItemsForCocuk(context) {
            return await axios.get("/api/itemscocuk").then(response => {
                context.commit("setitemscocuk", response.data);
                getItemsByCategory(3);
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