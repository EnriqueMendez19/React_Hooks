import React, {FC, useEffect, useState} from 'react'

const ExampleUseEffect: FC = () => {
    const [days, setDays] = useState<string[]>([])

    const [text, setText] = useState<string>('')

    useEffect(() => {
        const getDays = () => {
            setDays(['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']);
        }

        getDays();
    }, [setDays]);

    useEffect(() => {
        console.log(text)
    }, [text])

    return (
        <div>
            <h2 className={"font-bold text-xl"}>useEffect</h2>

            <ul>
                {days.map((day, index) => (
                    <li key={index}>{day}</li>
                ))}
            </ul>

            <input
                className={'border border-blue-600'}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}

export default ExampleUseEffect;