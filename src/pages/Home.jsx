import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { Link } from 'react-router-dom';
import {Arrowsvg} from '../Arrowsvg.jsx';
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
        <div className='w-full py-8 bg-gray-200 h-full'>
            <Container>
                <div className='flex flex-col justify-center items-center h-screen gap-4'>
                    <h1 className='font-bold text-4xl text-center'>Exploring the Frontiers of Tech and Innovation</h1>
                    <p className='text-center'>Insights, inspiration, and ideas from the heart of India's tech revolution</p>
                    <Link to="/all-posts">                   
                        <div className='w-10'><Arrowsvg/></div>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Home