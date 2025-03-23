import React from "react"

export default function Ticket ( {targetInfo}) {

    const randomNumberGen = () => {
        const randomNum =  Math.ceil(Math.random()*10000)
        console.log(randomNum)
        return(
            randomNum
        )
  
    }

    return(
        <div className="ticket">
            <img id="ticket-logo" src={"Logo Mark.svg"}/>
            <div id="ticket-place">
                <h2 className="text-preset-2">Coding Conf</h2>
                <p className="text-preset-6">Jan 31, 2025 / Austin, TX</p>
            </div>
            <img id="ticket-avatar" src={targetInfo.file}/>
            <div id="ticket-name">
                <p className="text-preset-3">{targetInfo.name}</p>
                <div id="ticket-git">
                    <img src={"Github.png"}/>
                    <p className="text-preset-5">{targetInfo.gitname}</p>
                </div>
            </div>
            <p id="ticket-number" className="text-preset-3">{`#${randomNumberGen()}`}</p>
        </div>
    )
}