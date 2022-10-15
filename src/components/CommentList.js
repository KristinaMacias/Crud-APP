import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments, setComments }) => {


    return (
        console.log("test", comments),
        <div>
            {comments.map((comment) => (
                <Comment comment={comment}
                    key={comment.id}
                    setComments={setComments}
                    comments={comments}
                />
                //map through comments and return a comment component for each comment with unique key
            ))}

        </div>
    );
}

export default CommentList;