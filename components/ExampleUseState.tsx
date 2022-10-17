import React, {FC, useState} from 'react'
import ButtonForExampleUseState from "./ButtonForExampleUseState";

const ExampleUseState: FC = () => {
    const [counter, setCounter] = useState<number>(0);

    return (
        <div>
            <h2 className={"font-bold text-xl"}>useState</h2>

            <p className={'text-md'}>
                Contador: {counter}
            </p>

            <ButtonForExampleUseState
                setCounter={setCounter}
            />
        </div>
    )
}

export default ExampleUseState