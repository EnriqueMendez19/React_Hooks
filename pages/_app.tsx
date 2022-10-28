import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeColorEnum, ThemeContext, ThemeEnum } from "../context/ThemeContext";
import { useState } from "react";
import { StoreContext } from '../context/StoreContext';
import { Category, Product } from '../utils/types';

function MyApp({Component, pageProps}: AppProps) {
    // ESTADOS PARA MI TEMA
    const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.DARK)
    const [color, setColor] = useState<ThemeColorEnum>(ThemeColorEnum.BLUE)
    // ESTADOS PARA MI TIENDA
    const [currentCategory, setCurrentCategory] = useState<Category>()
    const [products, setProducts] = useState<Product[]>([])


    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
            color,
            setColor
        }}>
            <StoreContext.Provider value={{
                currentCategory,
                products,
                setCurrentCategory,
                setProducts
            }}>
                <Component {...pageProps} />
            </StoreContext.Provider>
        </ThemeContext.Provider>
    )
}

export default MyApp
