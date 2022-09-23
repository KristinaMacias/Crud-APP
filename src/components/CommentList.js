import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments, setComments }) => {

    return (
        <div>
            {comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
                //map through comments and return a comment component for each comment with unique key
            ))}

        </div>
    );
}

export default CommentList;