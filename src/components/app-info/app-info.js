import React, { useState, useEffect } from 'react'
import './app-info.css'

const AppInfo = (props) => {
    const [totalNumberEmployees, setNumber] = useState()
    const [totalIncrease, setIncrease] = useState()

    


    const findTotalIncrease = props.data.reduce((previousValue, currentValue,) => {
            if (currentValue.increase === true) {
                return previousValue + 1
            }
            return previousValue
    },  0)


    useEffect(() => {
        setNumber(props.data.length)
        setIncrease(findTotalIncrease)
    }, [props.data])

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {totalNumberEmployees}</h2>
            <h2>Премию получат: {totalIncrease}</h2>
        </div>
    )
}

export default AppInfo
