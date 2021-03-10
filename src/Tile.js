import React from 'react'

const Tile = ({color, setAll, time}) => {
    
    
    return (
        <div style={{height: 300, width: 300, display: "inline-flex", background: color}} onClick={()=>setAll(color)}>
            {Math.random() > 0.66 ? time : "I don't feel like telling you the time"}
        </div>
    )
}

export default Tile
