
const Blog = ({ blog }) => {
    // This component is intended to display individual blog details.
    const { title } = blog;
    return (
        <div>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
    );
};

export default Blog;