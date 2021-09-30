import React from 'react'
import ChildrenComponent from './ChildrenComponent'

const UseCallBackAndMemo = () => {
    const buttonHandler = React.useCallback(() => {
        alert('button was clicked')
    }, [])

    const hardCalc = React.useMemo(() => {
        let i = 0
        while(i < 1000) {
            i++
        }
        return 'some results'
    }, [])

    return (
        <div>
            <ChildrenComponent buttonHandler={buttonHandler} hardCalc={hardCalc}/>
        </div>
    )
}

export default UseCallBackAndMemo
