const List = ({ el, dispatch }) => {

    const { id, value, completed } = el;

    const handleDelete = (id) => {

        if (window.confirm(`Estas seguro que quieres eliminar esta tarea con el id ${id}?`)) {
            dispatch({
                type: 'delete',
                payload: id
            })
        }
    }

    const handleComplete = (id) => {
        dispatch({
            type: 'complete',
            payload: id
        })
    }


    return (
        <div className="todo-item">
            <div className={`circle ${completed ? 'active' : ''}`} onClick={() => handleComplete(id)}></div>
            <p>{value}</p>
            <button className="btn" onClick={() => handleDelete(id)}>
                <img src="../images/icon-cross.svg" alt="close" />
            </button>
        </div >
    )
}

export default List
