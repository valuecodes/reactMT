import React, { useState } from "react";
import axios from "axios";

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    desc: "",
    img: "",
  });

  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const addPostHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/posts", newPost).then((response) => {
      alert('Post added succesfully!')
    });
  };

  return (
    <>
      <h1>Add new post</h1>
      <form className="newPost" onSubmit={addPostHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={changeValueHandler}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={changeValueHandler}
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            onChange={changeValueHandler}
          />
        </div>
        <div>
          <label htmlFor="img">Image URL</label>
          <input
            type="text"
            name="img"
            id="img"
            onChange={changeValueHandler}
          />
        </div>
        <button type="submit">Add new post</button>
      </form>
    </>
  );
};

export default NewPost;
