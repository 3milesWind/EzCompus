import React, {useEffect} from 'react'
import store from '../store/Store'
import axios from 'axios'
import API_PREFIX from '../API_PREFIX'
export default function LoadPosts({children}) {

    useEffect(() => {
        axios.get(`${API_PREFIX}/posts/get_all_posts`)
        .then(res => {
            const posts = res.data.data
            const action = {type: 'setPosts', data: {posts}}
            store.dispatch(action)
        })
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}
