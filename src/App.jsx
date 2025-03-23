import React  from "react";

import "./App.css"

import Header from "./components/Header"
import Form from "./components/Form"
import Ticket from "./components/Ticket"

import Circles from "./assets/Circles.svg"
import SmallCurve from "./assets/Line Element 2.svg"
import LargeCurve from "./assets/Line element.svg"
import LinePattern from "./assets/Line Pattern.svg"

export default function App () {

    const [isReady, setIsReady] = React.useState(false)
    const [targetInfo, setTargetInfo] = React.useState({
        name: undefined,
        email: undefined,
        gitname: undefined
    })

    return(
        <div id="app">
            <div className="components">
                <Header isReady={isReady} targetInfo={targetInfo}/>
                {isReady?
                <Ticket targetInfo={targetInfo}/>
                :<Form  setIsReady={setIsReady} setTargetInfo={setTargetInfo}/>}
            </div>
            <img className="line-pattern" src={LinePattern}/>
            <img className="circles c1" src={Circles}/>
            <img className="circles c2" src={Circles}/>
            <img className="lg-curve" src={LargeCurve}/>
            <img className="sm-curve" src={SmallCurve}/>

        </div>
    )
}