import React from "react";

export default function Header ( { isReady, targetInfo }) {

    const handleHeader = () => {
        if(isReady){
            return(
                <div id="header">
                    <img src="logo.svg"/>
                    <h1 className="text-preset-1">Congrats, <span>{targetInfo.name}</span><br></br>Your ticket is ready.</h1>
                    <p className="text-preset-4">We've emailed your ticket to <span>{targetInfo.email}</span> and will send updates in the run up to the event.</p>
                </div>
            )
        }else{
            return(
            <div id="header">
                <img src="logo.svg"/>
                <h1 className="text-preset-1">Your Journey to Coding Conf<br></br> 2025 Starts Here!</h1>
                <p className="text-preset-4">Secure your spot at next year's biggest coding conference.</p>
            </div>
            )
        }
    }

    return(
       handleHeader()
    )
}