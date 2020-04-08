import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        stateValue: 2
    },
    getters:{
        returnStateValue: state => {
            return state.stateValue+1;
        }
    },
    modules:{
        todo
    }
})