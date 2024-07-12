import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='py-8 w-full mt-4 text-center bg-gray-200 h-auto'>
        <Container>
            <div className='flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:w-screen max-sm:overflow-x-auto h-full'>
                {posts.map((post,index) => (
                    <div key={index} className='p-2 w-1/4 max-sm:w-full flex '>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts