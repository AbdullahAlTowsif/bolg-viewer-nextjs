"use client";
import Blogs from "@/components/Blogs";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([])
  try {
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    console.log(blogs);

  } catch (err) {
    console.log(err);
  }
  return (
    <div className="grid grid-cols-4 gap-5">
      {
        blogs.map((blog) => <Blogs key={blog.id}></Blogs>)
      }
    </div>
  );
}
