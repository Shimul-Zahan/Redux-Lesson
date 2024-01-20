'use client'

import { useDispatch, useSelector } from 'react-redux'
import HomeNavbar from '../Navbar/HomeNavbar'
import Link from 'next/link';
import { removeTodo } from './Redux/todoSlice';

const ToDoList = () => {

    const lists = useSelector(state => state?.todolist);
    const dispatch = useDispatch();

    const deleteTodo = id => {
        dispatch(removeTodo(id));
    }

    return (
        <div>
            <HomeNavbar />
            <div className='bg-yellow-200 max-w-[50%] mx-auto mt-10 p-4 rounded-sm flex gap-10'>
                <div className='min-w-[12%] flex flex-col justify-start items-start gap-5'>
                    <Link href='/Components/Todolist' className='w-full p-2 rounded-sm bg-red-500'>All Task</Link>
                    <Link href='/Components/Todolist/AddTodo' className='bg-green-500 w-full p-2 rounded-sm focus:bg-red-500'>Add Task</Link>
                </div>
                <table className='w-full'>
                    <thead className='bg-red-500'>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>List</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lists && lists.map(item =>
                                <tr key={item?.id} className='text-center'>
                                    <td>{item?.id}</td>
                                    <td>{item?.title}</td>
                                    <td>{item?.description}</td>
                                    <td className='flex justify-center items-center gap-5'>
                                        <button className=''>Edit</button>
                                        <button onClick={()=> deleteTodo(item?.id)} className=''>Remove</button>
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