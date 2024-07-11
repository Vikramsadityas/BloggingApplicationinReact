import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { Link } from 'react-router-dom';
function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center bg-gray-200">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No posts yet
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 bg-gray-200'>
            <Container>
                <div className='flex flex-col justify-center items-center h-80 gap-4'>
                    <h1 className='font-bold text-4xl'>Exploring the Frontiers of Tech and Innovation</h1>
                    <p>Insights, inspiration, and ideas from the heart of India's tech revolution</p>
                    <Link to="/all-posts">
                    <button className=' hover:bg-blue-300 hover:rounded-full w-12 h-12 flex items-center justify-center'>
                        <img src="../../src/assets/angle-right.svg" alt="" className='w-10'/>
                    </button>
                    </Link>
                </div>
                {/* <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div> */}
            </Container>
        </div>
    )
}

export default Home