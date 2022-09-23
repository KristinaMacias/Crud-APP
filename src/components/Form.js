import React from "react";
import { api } from "../api-calls/api";

const Form = ({ newComment, setNewComment, comments, setComments }) => {
    //function to handle change in input
    const handleChange = (e) => {
        setNewComment({ ...newComment, [e.target.name]: e.target.value });
    };
    //method to handle submit while posting to api and updating state
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await api.post(newComment);
        setComments([...comments, data]);
        setNewComment({ name: "", comment: "" });
    };



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={newComment.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="comment"
                placeholder="Comment"
                value={newComment.comment}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;