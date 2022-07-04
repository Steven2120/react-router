import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import { blogPosts } from "./utils/sampleBlogs";
import AllBlogs from "./components/AllBlogs";
import SubmitBlog from "./pages/SubmitBlog";

const App = () => {
  const [allBlogs, setAllBlogs] = useState(blogPosts);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}>
          <Route path="single-blog/:blogId" element={<BlogPost />} />
          <Route index element={<AllBlogs allBlogs={allBlogs} />} />
          <Route
            path="submit-blog"
            element={
              <SubmitBlog allBlogs={allBlogs} setAllBlogs={setAllBlogs} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
