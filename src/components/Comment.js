import React, { useEffect } from "react";
import { api } from "../api-calls/api";


const Comment = ({ comment, comments, setComments }) => {

    //hook for editing set to false and applicable to last comment
    const [isEditing, setEdit] = React.useState(false);

    const [editText, setEditText] = React.useState('');
    //function to delete a comment from state and update comments in api and from state
    const handleDelete = async () => {
        await api.delete(comment.id); //delete comment from api
        //set comments to delete comment from state
        setComments(comments.filter((el) => el.id !== comment.id)); //have to filter all comments to find the matching id and delete it
        console.log("deleted comment: ", comment)

    };

    //JAIR ____ function to hide edit button if not last comment
    const hideEdit = () => {
        if (comment.id === comments[comments.length - 1].id) { //if comment id is equal to last comment id
            return true;
        } else {
            return false;
        }
    };

    //function to edit set edit to true
    const handleEdit = () => {
        setEdit(true);
    };

    //function to handle change in edit text
    const handleChange = (e) => {
        setEditText(e.target.value);
    };

    //function to handle submit of edit to update comment in api and state
    const handleSubmit = async (e) => {
        e.preventDefault();
        //update comment in api
        await api.update(comment.id, { comment: editText }); //update comment in api with new text from edit text state

        setComments(comments.map((item) => { //map through comments and pass in item (proposed object to edit) to compare to comment
            if (item.id === comment.id) { //if item id matches comment id, return the new object with the new comment
                return {
                    ...item, comment: editText //...item is the original object, and we are changing the comment property to the new comment (editText)
                }
            }
            return item; //return the item if it does not match
        }))
        setEdit(false); //set edit to false to hide form
    };




    return (
        <div>
            <h3>{comment.name}</h3>
            <p>{comment.comment}</p>

            <button onClick={handleDelete} style={{ backgroundColor: 'red' }}>Delete</button>

            {/* invoke and show button */}
            {hideEdit() && <button onClick={handleEdit} style={{ backgroundColor: 'yellow' }}>Edit</button>}


            {isEditing && <form onSubmit={handleSubmit}>
                <input type="text" value={editText} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>}

            <hr></hr>

        </div>
    );
};
export default Comment;