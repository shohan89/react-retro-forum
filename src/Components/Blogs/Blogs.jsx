import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
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
        <div className="container mx-auto p-4 mt-4">
            <div className="space-y-4">
                <h2 className="text-[40px] font-black text-center mt-8">Latest Blogs</h2>
                <p className="text-[18px] font-medium text-center text-gray-600 mt-2">Yes, you can run unit tests and view the results directly within the app. The <br /> integrated testing features allow for a streamlined .</p>
            </div>
            <div className="flex justify-between items-start gap-4 mt-4">
                <div className="w-2/3 bg-amber-800 p-4">
                    <h2>Blogs: {blogs.length}</h2>
                    {
                        blogs.map(blog => <Blog 
                            key={blog.id}
                            blog={blog}
                            />)
                    }
                </div>
                <div className="w-1/3 bg-gray-200 p-4 rounded-lg">
                    <h2>Mark As Read</h2>
                </div>
            </div>
        </div>
    );
};

export default Blogs;