import Link from "next/link";

export default async function BlogDetails({ params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-700">{post.body}</p>
            <Link href="/" className="text-blue-500 hover:underline mt-4 block">
                Go back to Home
            </Link>
        </div>
    );
}
