import type {NextPage} from 'next'
import ExampleUseState from "../components/ExampleUseState";
import ExampleUseEffect from "../components/ExampleUseEffect";
import {useState} from "react";
import ExampleUseContext from "../components/ExampleUseContext";

const Home: NextPage = () => {


    return (
        <div>
            {/*<ExampleUseState/>*/}

            {/*<ExampleUseEffect/>*/}

            <ExampleUseContext />
        </div>
    )
}

export default Home
