import { useState } from "react"

const Theme = () => {

    const [theme, setTheme] = useState(false);
    const handleTheme = () => {
        setTheme(!theme);
        localStorage.setItem('theme', JSON.stringify(!theme));
    };

    return {
        theme,
        setTheme,
        handleTheme
    }

}

export default Theme
