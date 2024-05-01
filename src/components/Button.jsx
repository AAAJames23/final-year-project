import React, { useState } from 'react'
import lock from '../assets/lock.png'
import unlock from '../assets/unlock.png'

const Button = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <>
            <button
                onClick={() => setToggle(!toggle)}
                className='button'>
                {toggle ?
                    <img className='unlock-button' src={unlock} /> :
                    <img className='lock-button' src={lock} />}
            </button>
        </>

    )
}

export default Button