import List from "./List"

const Main = ({ todos, dispatch }) => {

    const reset = () => {

        if (window.confirm('Estas seguro que quiere limpiar todas las tareas completas??')) {
            dispatch({
                type: 'clear'
            })
        }

    }

    return (
        <main className="main container">
            <div className="list">

                {todos.showTodos.length >= 1 ?
                    todos.showTodos.map(el => <List key={el.id} el={el} dispatch={dispatch} />)
                    :
                    <div className="todo-item">
                        <p>Sin tareas pendientes</p>
                    </div>
                }

            </div>
            <div className="count">
                <p>{todos.showTodos.length} items left</p>
                <button onClick={reset}>clear completed</button>
            </div>
        </main >
    )
}

export default Main
