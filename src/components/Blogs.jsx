import Link from "next/link";

const Blogs = ({blog}) => {
    return (
        <div>
            <Link href={`/blog/${blog.id}`}><li>{blog.title}</li></Link>
        </div>
    );
};

export default Blogs;