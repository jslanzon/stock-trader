import stocks from '../../data/stocks'

export default {
    state: {
        stocks:[]
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        buyStock({ commit }, order) {
            commit()
        },
        initStocks({ commit }) {
            commit('setStocks', stocks )
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}
