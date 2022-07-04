import React from "react";

import { useSearchParams, Outlet } from "react-router-dom";

const AllBlogs = ({ allBlogs }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortOrder = searchParams.get("sortOrder") || "asc";

  const sortField = searchParams.get("sortField") || "id";

  const limit = searchParams.get("limit") || allBlogs.length;

  const page = searchParams.get("page") || 0;

  const copyOfBlogPosts = allBlogs;

  const compare = (a, b) => {
    if (sortOrder.toLowerCase() === "asc") {
      if (a[sortField] < b[sortField]) {
        return -1;
      }
      if (a[sortField] > b[sortField]) {
        return 1;
      }
      return 0;
    }
    if (sortOrder.toLowerCase() === "desc") {
      if (a[sortField] < b[sortField]) {
        return 1;
      }
      if (a[sortField] > b[sortField]) {
        return -1;
      }
      return 0;
    }
  };

  const limitPage = (blogs) => {
    //
    let blogIndex = limit * page;
    let returnBlogs = [];
    for (let i = 0; i < limit; i++) {
      if (blogs[blogIndex]) {
        returnBlogs.push(blogs[blogIndex]);
      }
      blogIndex++;
    }
    return returnBlogs;
  };

  const sortedBlogPosts = copyOfBlogPosts.sort(compare);
  const limitPageBlogs = limitPage(sortedBlogPosts);

  return (
    <>
      <br />
      All Blogs
      <ul>
        {limitPageBlogs.map((blog, index) => {
          return (
            <li key={index}>
              <p className="text">Title: {blog.title}</p>
              <p className="text">Author: {blog.author}</p>
              <p className="text">Text: {blog.text}</p>
              <p className="text">Date Created: {blog.createdAt}</p>
              <p className="text">ID: {blog.id}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AllBlogs;
