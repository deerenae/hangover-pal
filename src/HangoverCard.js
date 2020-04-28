import React from 'react'

export default function HangoverCard(props){

    // function handleClick()


    return(
        <div className='hangover-card' onClick={()=> props.handleToggle()}>
            <h2>Hangover</h2>
            <h1>{props.hangover.name}</h1>
            <img src={props.hangover.image}></img>
            <p>{props.hangover.description}</p>
        </div>
    )

}