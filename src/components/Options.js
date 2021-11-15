import { useState } from "react"

const Options = ({ dispatch }) => {

    const [activeClass, setActiveClass] = useState('all');

    const all = () => {
        setActiveClass('all')
        dispatch({
            type: 'all'
        })
    }

    const active = () => {
        setActiveClass('active')
        dispatch({
            type: 'active'
        })
    }

    const completed = () => {
        setActiveClass('completed')
        dispatch({
            type: 'completed'
        })
    }

    return (
        <div className="container options">
            <button className={activeClass === 'all' ? 'active' : ''} onClick={all}>All</button>
            <button className={activeClass === 'active' ? 'active' : ''} onClick={active}>Active</button>
            <button className={activeClass === 'completed' ? 'active' : ''} onClick={completed}>Completed</button>
        </div>
    )
}

export default Options
