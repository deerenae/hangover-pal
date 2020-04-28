import React from 'react'

export default function HangoverCard(props){

    // function handleClick()


    return(
        <div className='hangover-card' onClick={()=> props.handleToggle()}>
            <h2>{props.hangover.name}</h2>
            <img src={props.hangover.image}></img>
            <p>{props.hangover.description}</p>
        </div>
    )

}