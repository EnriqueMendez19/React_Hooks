import React, {FC, useContext} from 'react'
import {ThemeContext, ThemeEnum} from "../context/ThemeContext";

const ExampleUseContext: FC = () => {
    const {theme, color, setTheme, setColor} = useContext(ThemeContext)

    return (
        <div>
            <h2 className={"font-bold text-xl"}>useContext</h2>

            <p>{theme}</p>

            <p>{color}</p>

            <button
                className={'p-2 m-1 bg-gray-900 text-white'}
                onClick={() => setTheme(ThemeEnum.DARK)}
            >
                dark
            </button>

            <button
                className={'p-2 m-1 bg-white text-gray-900'}
                onClick={() => setTheme(ThemeEnum.LIGHT)}
            >
                light
            </button>
        </div>
    )
}

export default ExampleUseContext;