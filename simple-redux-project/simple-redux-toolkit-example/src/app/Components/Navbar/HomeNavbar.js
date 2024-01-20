'use client'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const HomeNavbar = () => {

    const data1 = useSelector(state => state?.favList?.length)
    const data2 = useSelector(state => state?.todolist?.length)
    // console.log('home', );

    const menu = [
        {
            name: 'home',
            route: '/',
        },
        {
            name: 'Favourite List',
            route: '/Components/favourite',
            total: data1,
        },
        {
            name: 'To Do List',
            route: '/Components/Todolist',
            total: data2,
        },
        {
            name: 'Login/Register',
            route: '/log/res',
        },
    ]


    return (
        <div className='flex justify-between pt-5 items-center px-10'>

            <div>
                <h1 className='text-xl font-medium'>Simple React-Redux and NextJS Example</h1>
            </div>

            <div className='flex justify-center items-center gap-10 capitalize text-lg'>
                {
                    menu && menu.map((item, inde) =>
                        <li key={inde} className='list-none flex justify-center items-center gap-1'>
                            <Link href={item.route} >{item.name}</Link>
                            {item.total >= 0 && <p className='text-red-500'>{item.total}</p>}
                        </li>
                    )
                }
            </div>
        </div>
    )
}

export default HomeNavbar