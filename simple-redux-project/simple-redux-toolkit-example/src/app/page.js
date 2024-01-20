'use client'
import { useDispatch } from 'react-redux';
import getAllPosts from './Components/FetchData/getAllPosts'
import { add } from './Redux/AddToFav/addToFavSlice';
import HomeNavbar from './Components/Navbar/HomeNavbar';

const HomePage = async () => {

  const dispatch = useDispatch();
  const posts = await getAllPosts();

  const addToFav = (post) => {
    console.log('click')
    dispatch(add(post));
  }

  return (
    <div className=''>
      <HomeNavbar />
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 py-5 px-10'>
        {
          posts.map(post =>
            <div key={post?.id} className='flex flex-col gap-1 bg-red-500 px-5 py-2 rounded-sm'>
              <p>User ID: {post.userId}</p>
              <p className='font-bold text-white text-center'>{post.title}</p>
              <p className=''>{post.body}</p>
              <button onClick={() => addToFav(post)} className='mt-auto bg-black text-white py-2 rounded-sm'>Add to favourite</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default HomePage
