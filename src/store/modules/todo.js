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
    }],
    selectedToDo:{}

};

const getters ={
    getToDos: state=> {
        return state.todos;
    },
    selectedToDo:state=>{
        return state.selectedToDo
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
    },
    selectedToDo:(state, payload) => {
        let found  = state.todos.filter(obj=>obj.key==payload)
        if(found)
            Object.assign(state.selectedToDo,found[0])
    }
};

const actions={
    addNewToDo: ({commit},payload) =>{
        commit('addNewToDo',payload)
    },
    updateToDo: ({ commit },payload)=>{
        commit ('updateToDo', payload)
    },
    findSelectedToDo:({commit},payload)=>{
        commit('selectedToDo',payload)
    }
};

export default{
    state,
    getters,
    mutations,
    actions
}