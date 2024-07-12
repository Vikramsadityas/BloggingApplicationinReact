import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='max-sm:w-48 w-[20vw]  bg-gray-300 rounded-xl p-4 max-sm:h-full flex flex-col justify-center items-center hover:bg-gray-400'>
            <div className=' mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />
            </div>
            <div>
              <h2
              className='text-xl max-sm:text-sm text-center font-bold'
              >{title}</h2>
            </div>
        </div>
    </Link>
  )
}


export default PostCard