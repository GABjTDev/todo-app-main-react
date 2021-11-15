import { useState } from 'react';
import Moon from '../images/icon-moon.svg';
import Sun from '../images/icon-sun.svg';

const Header = ({ dispatch, theme, handleTheme }) => {

    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id: new Date().getMilliseconds(),
            value: todo,
            completed: false
        }

        dispatch({
            type: 'add',
            payload: newTodo
        })
        setTodo('');
    }

    return (
        <>
            <div className="bg-img">
            </div>
            <header className="head container">
                <div className="title">
                    <h1>TODO</h1>
                    <button className="btn" onClick={handleTheme} >
                        {
                            theme ?
                                <img src={Sun} alt="Icon luna" />
                                :
                                <img src={Moon} alt="Icon sol" />
                        }

                    </button>
                </div>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Create a new todo" value={todo} onChange={handleChange} />
                </form>
            </header>
        </>
    )
}

export default Header
