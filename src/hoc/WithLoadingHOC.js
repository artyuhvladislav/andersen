import React from 'react';

const WithLoading = (Component , isLoading) => {
    return ({...props }) => {
        if (!isLoading) return <Component {...props} />
        return <p>Hold on, fetching data might take some time.</p>
    }
}

export default WithLoading