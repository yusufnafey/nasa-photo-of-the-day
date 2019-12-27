import React from 'react'

export default function Inputs(props) {
    const handleDay = e => {
        props.setDay(e.target.value)
    }

    const handleMonth = e => {
        props.setMonth(e.target.value)
    }

    const handleYear = e => {
        props.setYear(e.target.value)
    }

    return (
        <>
        Day: <input onChange={handleDay} />
        Month: <input onChange={handleMonth} />
        Year: <input onChange={handleYear} />
        </>
    )
}