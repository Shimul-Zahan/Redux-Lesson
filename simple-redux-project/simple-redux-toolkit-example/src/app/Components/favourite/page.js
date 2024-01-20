'use client'
import { useDispatch, useSelector } from "react-redux"
import HomeNavbar from "../Navbar/HomeNavbar"
import { remove } from "@/app/Redux/AddToFav/addToFavSlice"

const FavouritList = () => {

  const data = useSelector(state => state?.favList)
  const dispatch = useDispatch()

  const removeToFav = id => {
    dispatch(remove(id));
  }

  return (
    <div>
      <HomeNavbar />
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 py-5 px-10'>
        {
          data.map(post =>
            <div key={post?.id} className='flex flex-col gap-1 bg-red-500 px-5 py-2 rounded-sm'>
              <p>User ID: {post.userId}</p>
              <p className='font-bold text-white text-center'>{post.title}</p>
              <p className=''>{post.body}</p>
              <button onClick={() => removeToFav(post.id)} className='mt-auto bg-black text-white py-2 rounded-sm'>Remove from favourite</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default FavouritList