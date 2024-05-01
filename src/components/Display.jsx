import React, { useState } from 'react'

const Display = () => {
    const [toggle, setToggle] = useState(true)
    return (

        <div
            onClick={() => setToggle(!toggle)}
            className='display-text'>
            {toggle ?
                <h1> Door is locked </h1> :
                <h1> Door is unlocked </h1>
            }
        </div>
    )
}

export default Display