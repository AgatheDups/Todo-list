import { useCallback, useReducer } from "react"

function todoReducer (state, action){
    if(action.type === 'REMOVE_TODO'){
        return {
        ...state,
        todos: state.todos.filter(todo => todo !== action.payload)
        }
    }
    if(action.type === 'TOGGLE_TODO'){
        return {
            ...state,
            todos: state.todos.map(todo => todo === action.payload ? {
                ...todo,
                checked: !todo.checked
            } : todo)
        }
    }
    if(action.type === 'CLEAR_COMPLETED'){
        return {
        ...state,
        todos: state.todos.filter(todo => !todo.checked)
        }
    }
    if(action.type === 'TOGGLE_FILTER'){
        return {
        ...state,
        showCompleted: !state.showCompleted
        }
    }
}

export function useTodo(){
    const [state, dispatch] = useReducer(todoReducer,{
        showCompleted: true,
        todos: [{
            name:"Créer un hook personalisé", 
            checked: false
        },{
            name:"Mettre un input checkbox", 
            checked: false
        },{
            name:"Créer un bouton pour supprimer les tâches accomplies", 
            checked: false
        },{
            name:"Créer une checkbox pour afficher et cacher les tâches accomplies", 
            checked: false
        },{
            name:"Mettre du CSS", 
            checked: false
        }]
    })

    const visibleTodos = state.showCompleted ? state.todos : state.todos.filter(t => !t.checked)

    return {
        showCompleted: state.showCompleted,
        visibleTodos : visibleTodos,
        toggleTodo: useCallback((todo) => dispatch({type:'TOGGLE_TODO', payload: todo}),[]),
        removeTodo: useCallback((todo) => dispatch({type:'REMOVE_TODO', payload: todo}),[]),
        clearCompleted: useCallback(() => dispatch({type:'CLEAR_COMPLETED'}),[]),
        toggleFilter: useCallback(() => dispatch({type:'TOGGLE_FILTER'}),[])
    }
}