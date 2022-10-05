import React from "react";
import { api } from "../api-calls/api";

const Form = ({ newComment, setNewComment, comments, setComments }) => {
    //function to handle change in input
    const handleChange = (e) => {
        setNewComment({ ...newComment, [e.target.name]: e.target.value }); //update newComment state with new value from input field
    };

    //function to handle submit while posting to api 
    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent page from refreshing
        const data = await api.post(newComment); //post new comment to api
        setComments([...comments, data]); //...comments is using spread operator to add new comment to comments state and display and data is posting the new comment from api
        setNewComment({ name: "", comment: "" }); //reset newComment state to empty strings to clear input fields
        console.log("new comment: ", newComment);
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