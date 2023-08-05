import BlogNav from "@/components/BlogNav"

const BlogLayout = ({children}) => {
  return (
    <div className="container mx-auto flex">
        <div className="">
            <BlogNav/>
        </div>
        <div>
            {children}
        </div>

    </div>
  )
}

export default BlogLayout