import React, {useState} from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default function App() {
    return (
        <div className="container mt-5">
            <h1>Post Create</h1>
            <PostCreate />
            <hr />
            <h1>Post List</h1>
            <PostList />
        </div>
    )
}