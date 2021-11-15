
const HookReducer = (state, action) => {

    switch (action.type) {

        case 'add': return {
            listTodos: [...state.listTodos, action.payload],
            showTodos: [...state.showTodos, action.payload]
        }

        case 'delete': return {
            listTodos: state.listTodos.filter(el => el.id !== action.payload),
            showTodos: state.showTodos.filter(el => el.id !== action.payload)
        }

        case 'complete': return {
            listTodos: state.listTodos.map(el => el.id === action.payload ? { ...el, completed: !el.completed } : el),
            showTodos: state.showTodos.map(el => el.id === action.payload ? { ...el, completed: !el.completed } : el)
        }

        case 'clear': return {
            listTodos: state.listTodos.filter(el => el.completed !== true),
            showTodos: state.showTodos.filter(el => el.completed !== true)
        }

        case 'all': return {
            listTodos: [...state.listTodos],
            showTodos: [...state.listTodos]
        }

        case 'active': return {
            listTodos: [...state.listTodos],
            showTodos: state.listTodos.filter(el => !el.completed)
        }

        case 'completed': return {
            listTodos: [...state.listTodos],
            showTodos: state.listTodos.filter(el => el.completed)
        }

        default: return state;
    }

}


export default HookReducer;