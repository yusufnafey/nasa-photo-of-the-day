import React, { useState } from 'react'

export default function Photo(props) {
    

    return (
        <img src={props.photo} alt='NASA photo of the day' width='300px' />
    )
}