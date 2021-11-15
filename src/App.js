import { useEffect, useReducer } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Options from "./components/Options";

// Reducer
import HookReducer from "./hooks/HookReducer";


// Theme
import Theme from "./hooks/Theme";


const initialTodo = () => {
  return JSON.parse(localStorage.getItem('todos')) || {
    listTodos: [],
    showTodos: []
  };
}

function App() {

  const [todos, dispatch] = useReducer(HookReducer, [], initialTodo);
  const { theme, setTheme, handleTheme } = Theme();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem('theme')));
  }, [setTheme])

  return (
    <div className={`bg ${theme ? 'dark' : ''}`}>
      <Header dispatch={dispatch} theme={theme} handleTheme={handleTheme} />
      <Main todos={todos} dispatch={dispatch} />
      <Options dispatch={dispatch} />
      <Footer />
    </div>

  );
}

export default App;
