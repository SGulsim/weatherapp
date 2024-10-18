// eslint-disable-next-line @typescript-eslint/no-unused-expressions
'use client'
import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Video from './components/Video/Video'
import GetApi from './components/GetApi'


import './page.css'
import './media.css'

function page() {
    const gettingApi = GetApi;
    return (
        <>
            <Video/>
            <Header weathermethod={gettingApi}/>
            <Main />
        </>

    )
}

export default page