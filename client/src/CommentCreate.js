import React, { useState } from "react";
import axios from "axios"
export default function CommentCreate({postId}) {
    const [content, setContent] = useState("")
    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        }) // 第二个参数是一个对象
        setContent("")
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="mb-1 mt-2" htmlFor="content">New Comment</label>
                    <input className="form-control" value={content} onChange={e=>setContent(e.target.value)} id="content"/>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                >
                    Submit
                </button>
                

            </form>
        </div>
        
    )
}