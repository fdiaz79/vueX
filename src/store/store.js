import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {id: 1, name: 'Banana Skin', price: 20},
            {id: 2, name: 'Shiny Star', price: 40},
            {id: 3, name: 'Green Shells', price: 60},
            {id: 4, name: 'Red Shells', price: 40}
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map( product => {
                return {
                    id: product.id,
                    name: '**' + product.name + '**',
                    price: product.price/2
                }
            });
            return saleProducts;
        }
    },
    mutations: {
        //mutations shouldn't be used when trying to do asynchronous tasks, it might be difficult to track. For that is better to use actions
        reducePrice: (state, payload) => {
            state.products.forEach( product => {
                product.price -= payload;
            });
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function() {
                context.commit('reducePrice', payload);
            }, 2000);
        }
    }
});

