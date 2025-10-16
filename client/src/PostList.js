import React, { useEffect, useState } from "react";
import axios from "axios"
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
export default function PostList() {
    const [posts, setPosts] = useState({})
    const fetchPosts = async ()=> {
        const res = await axios.get('http://localhost:4002/posts')
        console.log(res.data);
        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts()
    }, []) // 空数组，只在第一次渲染的时候执行，如果没有第二个参数就每一次都执行，如果数组中有变量的话就只有当变量变的时候才执行

    const renderedPosts = Object.values(posts).map(post => { // 会把对象里 所有属性的值 取出来，放到一个数组里返回。
        return <div className="card mt-3" style={{width: "30%", marginBottom:"20px"}} key={post.id}>
            <div className="card-body">
                <h3>
                    {post.title}
                </h3>
                <CommentList comments={post.comments} />
                <CommentCreate postId={post.id}/>
            </div>
        </div>
    })
    return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>
}