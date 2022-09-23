import React from "react";

const Comment = ({ comment }) => {
    return (
        <div>
            <h3>{comment.name}</h3>
            <p>{comment.comment}</p>

        </div>
    );
};
export default Comment;