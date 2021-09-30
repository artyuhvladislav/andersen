import React from 'react'

const ChildrenComponent = ({ buttonHandler, hardCalc }) => {
    return (
        <div>
            <button onClick={buttonHandler}>click</button>
            <p>{hardCalc}</p>
        </div>
    )
}

export default ChildrenComponent

