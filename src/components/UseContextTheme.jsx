import React from 'react'
import { Context } from '../App';

export const UseContextTheme = () => {
    const theme = React.useContext(Context);
    return (
        <div style={{background: (theme === 'light' ? '#ccc' : '#009')}}>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, reiciendis.</h2>
        </div>
    )
}

export default UseContextTheme