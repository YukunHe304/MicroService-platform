import React, { useEffect, useState } from "react";
import axios from "axios"

export default function CommentList({comments}) {

    const renderedComments = Object.values(comments).map(comment => { // 会把对象里 所有属性的值 取出来，放到一个数组里返回。
        let content;
        if (comment.status === "approved") {
            content = comment.content;
        } else if (comment.status === "pending") {
            content = "Waiting for Moderation";
        } else {
            content = "Declined";
        }
        return <li key={comment.id}>{content}</li>
    })
    return <ul>{renderedComments}</ul>
}