import React, { useEffect } from "react";
import { api } from "../api-calls/api";


const Comment = ({ comment, comments, setComments }) => {

    //function to delete a comment from state and update comments in api and from state
    const handleDelete = async () => {
        await api.delete(comment.id); //delete comment from api
        //set comments to delete comment from state
        setComments(comments.filter((el) => el.id !== comment.id));

    };



    return (
        <div>
            <h3>{comment.name}</h3>
            <p>{comment.comment}</p>
            <button onClick={handleDelete}>Delete</button>
            <hr></hr>
        </div>
    );
};
export default Comment;