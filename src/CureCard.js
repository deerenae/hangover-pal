import React from 'react'

export default function CureCard(props){
    return(
        <div className='cure-card'> 
        <h1>{props.cure.name}</h1>
        <img src={props.cure.image}></img>
        <p>{props.cure.description}</p>

        </div>
    )

}