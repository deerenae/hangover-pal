import React from 'react'
import HangoverCard from './HangoverCard'

export default function HangoverContainer(props){

    const renderHangovers = props.hangovers.map(hangover =>{
        return <HangoverCard hangover={hangover} handleToggle={props.handleToggle}/>
    })

    return(
        <>
        <h1>Hangovers</h1>
        {renderHangovers}
        </>
    )
}