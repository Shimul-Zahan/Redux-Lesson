'use client'

import { useSelector } from 'react-redux'
import HomeNavbar from '../Navbar/HomeNavbar'

const ToDoList = () => {

    const lists = useSelector(state => state?.todolist);

    return (
        <div>
            <HomeNavbar />
            <div className='bg-yellow-200 max-w-[50%] mx-auto mt-10 p-4 rounded-sm'>
                <table className='w-full'>
                    <thead className='bg-red-500'>
                        <th>Id</th>
                        <th>Title</th>
                        <th>List</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            lists && lists.map(item =>
                                <tr key={item?.id} className='text-center'>
                                    <td>{item?.id}</td>
                                    <td>{item?.title}</td>
                                    <td>{item?.description}</td>
                                    <td className='flex justify-center items-center gap-5'>
                                        <button className='bg-green-500 px-4 py-1 rounded-sm'>Edit</button>
                                        <button className='bg-red-500 px-2 py-1 rounded-sm'>Remove</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ToDoList