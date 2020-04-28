import React from 'react'
import CureCard from './CureCard'
export default function CureContainer(props){

    const renderCures = props.cures.map(cure =>{
        return <CureCard cure={cure}/>
    })
    
    return (
        <div className='cure-container'>
        {renderCures}
        </div>
        
    )
}