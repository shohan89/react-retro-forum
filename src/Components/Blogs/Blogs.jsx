import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookmars }) => {
    const [blogs, setBlogs] = useState([]); 
    // This state could be used to manage the list of blogs, if needed.
    // For now, it's initialized as an empty array.
    useEffect(() => {
        try {
            fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
                .then(res => res.json())
                .then(data => setBlogs(data.posts));
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
        }
    },[]);
    return (
            
            <div className="w-2/3 p-4 space-y-4">
                    <h2 className="text-2xl font-bold">Blogs: {blogs.length}</h2>
                    {
                        blogs.map(blog => <Blog 
                            key={blog.id}
                            blog={blog}
                            handleBookmars={handleBookmars}
                            />)
                    }
                </div>
    );
};

export default Blogs;