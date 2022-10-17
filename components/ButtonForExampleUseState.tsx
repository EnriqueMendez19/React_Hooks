import React, {Dispatch, FC, SetStateAction, useState} from "react";

type ButtonForExampleUseStateProps = {
    setCounter: Dispatch<SetStateAction<number>>
}

const ButtonForExampleUseState: FC<ButtonForExampleUseStateProps> = (props) => {
    const {setCounter} = props;

    const increment = () => {
        setCounter((prevState: number) => {
            if (prevState === 10) {
                return 10;
            }
            return prevState + 1
        })
    }

    const decrement = () => {
        setCounter((prevState: number) => {
            if (prevState === 0) {
                return 0;
            }
            return prevState - 1
        })
    }

    return (
        <>
            <button
                className={"p-2 m-1 bg-blue-400 rounded w-20 text-white"}
                onClick={decrement}
            >
                -
            </button>

            <button
                className={"p-2 m-1 bg-blue-400 rounded w-20 text-white"}
                onClick={increment}
            >
                +
            </button>
        </>
    )
}

export default ButtonForExampleUseState;