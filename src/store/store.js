import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = Vuex.Store({
    state: {
        products: [
            {id: 1, name: 'Banana Skin', price: 20},
            {id: 2, name: 'Shiny Star', price: 40},
            {id: 3, name: 'Green Shells', price: 60},
            {id: 4, name: 'Red Shells', price: 40}
        ]
    }
});

