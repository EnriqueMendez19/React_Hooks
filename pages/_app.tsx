import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeColorEnum, ThemeContext, ThemeEnum} from "../context/ThemeContext";
import {useState} from "react";

function MyApp({Component, pageProps}: AppProps) {
    const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.DARK)
    const [color, setColor] = useState<ThemeColorEnum>(ThemeColorEnum.BLUE)

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
            color,
            setColor
        }}>
            <Component {...pageProps} />
        </ThemeContext.Provider>
    )
}

export default MyApp
