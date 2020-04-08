const state={
    todos:[{
        key:1,
        value:"to-do-1"
    },{
        key:2,
        value:"to-do-2"
    },{
        key:3,
        value:"to-do-3"
    }]

};

const getters ={
    getToDos: state=> {
        return state.todos;
    }
} ;

const mutations ={
    addNewToDo: (state,payload) =>{
        state.todos.push(payload)
    },
    updateToDo:(state,payload)=>{
        var keys = state.todos.map(
            function(e){
                return e.key})
        state.todos.splice(keys.indexOf(parseInt(payload.key)),1,payload)
    }
};

const actions={
    addNewToDo: ({commit},payload) =>{
        commit('addNewToDo',payload)
    },
    updateToDo: ({ commit },payload)=>{
        commit ('updateToDo', payload)
    }
};

export default{
    state,
    getters,
    mutations,
    actions
}