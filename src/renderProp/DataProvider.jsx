import React from 'react'

const DataProvider = ({ renderContent, text }) => {
    return <>{renderContent(text)}</>
}

export default DataProvider
