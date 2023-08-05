import Link from "next/link";

const BlogCard = ({}) => {


  return (
    <div>
      <div className=" shadow-xl m-2 flex gap-2 hover:border">
        <figure className='w-64 p-2 shadow-xl'>
          <img
            src="https://picsum.photos/200/200/?image=1024"
            alt="Album"
            className='w-full object-cover'
          />
        </figure>
        <div className="p-2">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">Single Shared Layout with Custom App</h1>
              <button className="px-2 border hover:border-teal-200 hover:text-teal-200 rounded-md">delete</button>
            </div>
            <p className="font-mono text-sm py-2">Next.js supports pages with dynamic routes. For example, if you create a file called pages/posts.js, then it will be accessible at posts/1, posts/2, etc.</p>
            <h4 className="text-md">This layout pattern enables state persistence because the React component tree is maintained between page transitions. With the component tree, React can understand which elements have changed to preserve state.</h4>
            <Link href="" className="hover:text-teal-200">see more...</Link>
          
        </div>
      </div>
    </div>
  );
}

export default BlogCard