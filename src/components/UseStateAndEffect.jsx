import React from 'react'

const UseStateAndEffect = () => {
    const [state, setState] = React.useState(0)
    React.useEffect(() => {
      console.log('rerender')
    }, [state])
    return (
        <div>
            <button onClick={() => setState((state) => state + 1)}>rerender</button>
            <p>{state}</p>
        </div>
    )
}

export default UseStateAndEffect
