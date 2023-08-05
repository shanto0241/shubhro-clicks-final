import Link from "next/link"

const BlogNav = () => {
  return (
    <div className="p-2 flex flex-col gap-4 bg-slate-100 text-base-100 text-center rounded-md shadow-xl mt-5 mr-10">
        <Link href='' className="px-2 w-full border border-base-100 rounded-md">all</Link>
        <Link href='' className="px-2 w-full border border-base-100 rounded-md">Culture</Link>
        <Link href='' className="px-2 w-full border border-base-100 rounded-md">Nature</Link>
        <Link href='' className="px-2 w-full border border-base-100 rounded-md">Literature</Link>
    </div>
  )
}

export default BlogNav