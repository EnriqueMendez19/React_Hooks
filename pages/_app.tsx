import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeColorEnum, ThemeContext, ThemeEnum } from "../context/ThemeContext";
import { useState } from "react";
import StoreProvider from '../components/StoreProvider';

function MyApp({Component, pageProps}: AppProps) {
    // ESTADOS PARA MI TEMA
    const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.DARK)
    const [color, setColor] = useState<ThemeColorEnum>(ThemeColorEnum.BLUE)


    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
            color,
            setColor
        }}>
            <StoreProvider>
                <Component {...pageProps} />
            </StoreProvider>
        </ThemeContext.Provider>
    )
}

export default MyApp
