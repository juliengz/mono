import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'


export default function FoundationCore({children}) {
    return (
        <BrowserRouter>
            <h1>FOUNDATION</h1>
            {children}
        </BrowserRouter>
    )
}