import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubmitBlog = ({ allBlogs, setAllBlogs }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <br></br>
      <label>Title: &nbsp;</label>
      <input
        id="title"
        size="40"
        type="text"
        value={title}
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle);
        }}
      ></input>
      <br></br>
      <br></br>
      <label>Text: &nbsp;</label>
      <textarea
        id="text"
        size="75"
        type="text"
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
        }}
      ></textarea>
      <br></br>
      <br></br>
      <label>Author: &nbsp;</label>
      <input
        id="author"
        size="40"
        type="text"
        value={author}
        onChange={(e) => {
          const newAuthor = e.target.value;
          setAuthor(newAuthor);
        }}
      ></input>
      <br></br>
      <br></br>
      <button
        id="submit"
        onClick={
          ("click",
          () => {
            const allBlogsCopy = [...allBlogs];
            allBlogsCopy.push({
              title: title,
              text: text,
              author: author,
              createdAt: new Date().toISOString(),
              id: allBlogs.length + 1,
            });
            setAllBlogs(allBlogsCopy);
            setTitle("");
            setText("");
            setAuthor("");
            navigate("/blogs");
          })
        }
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitBlog;
