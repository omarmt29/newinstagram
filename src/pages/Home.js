import React from 'react'
import { Feed } from '../components/Feed'
import Header from '../components/Header'


export const Home = () => {

    return (
        <div className=" bg-slate-100 dark:bg-black h-full">

            <div className="fixed top-0 w-full z-10">

                <Header />

            </div>

            <div className="pt-12 sm:pt-20">

                <Feed />

            </div>

        </div>
    )
}
