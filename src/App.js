import './App.css';
import { api } from './api-calls/api';
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import CommentList from "./components/CommentList";


function App() {
  //hook to hold commments
  const [comments, setComments] = useState([]); //comments is an array of objects and setComments is a function to update the state
  //hook to add new comment
  const [newComment, setNewComment] = useState({ name: "", comment: "" }); //newComment is an object and setNewComment is a function to update the state

  //useEffect
  useEffect(() => {
    const getComments = async () => {
      const commentsFromServer = await api.get();
      setComments(commentsFromServer);
    };
    getComments();
  }, []);


  return (
    <div className="App">
      <Form
        newComment={newComment}
        setNewComment={setNewComment}
        comments={comments}
        setComments={setComments}
      />
      <CommentList
        comments={comments}
        setComments={setComments} />
    </div>
  );
}

export default App;
