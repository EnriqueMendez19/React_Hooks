import {createContext} from "react";

export enum ThemeColorEnum {
    BLUE = 'blue',
    RED = 'red',
    YELLOW = 'yellow'
}

export enum ThemeEnum {
    DARK = 'dark',
    LIGHT = 'light'
}

type ThemeContextState = {
    theme: ThemeEnum;
    color: ThemeColorEnum;
    setTheme: (value: ThemeEnum) => void;
    setColor: (value: ThemeColorEnum) => void;
}

export const ThemeContext = createContext<ThemeContextState>({
    theme: ThemeEnum.DARK,
    color: ThemeColorEnum.BLUE,
    setColor: () => {
    },
    setTheme: () => {
    },
});